import React, { FC } from 'react';

// Style
import style from './Button.module.scss';

interface IButton {
  type?: 'button' | 'submit' | 'reset';
  btnType?: 'outlined' | 'stroke' | 'alertoutlined';
  text: string;
  size?: 'normal' | 'small' | 'large';
  fluid?: boolean;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

const Button: FC<IButton> = ({
  text,
  type = 'button',
  size = 'normal',
  fluid = false,
  btnType = 'stroke',
  onClick,
  loading = false,
  disabled = false,
}: IButton) => {
  const getButtonSize = () => {
    switch (size) {
      case 'small':
        return style.buttonSmall;
      case 'large':
        return style.buttonLarge;
      default:
        return style.buttonNormal;
    }
  };

  const getButtonType = () => {
    if (btnType === 'outlined') {
      return style.buttonOutline;
    }
    return style.buttonStroke;
  };

  const classes = `${getButtonSize()} ${
    fluid && style.btnFluid
  } ${getButtonType()}`;

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading ? <div className={style.btnLoader}></div> : text}
    </button>
  );
};

export default Button;
