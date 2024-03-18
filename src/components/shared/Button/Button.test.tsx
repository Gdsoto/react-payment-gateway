import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders button correctly', () => {
    const { getByText } = render(<Button text='Test Button' />);
    const buttonElement = getByText('Test Button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('buttonNormal');
  });

  it('renders button with different size', () => {
    const { getByText } = render(<Button text='Test Button' size='large' />);
    const buttonElement = getByText('Test Button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('buttonLarge');
  });

  it('renders button with different type', () => {
    const { getByText } = render(
      <Button text='Test Button' btnType='outlined' />
    );
    const buttonElement = getByText('Test Button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('buttonOutline');
  });

  it('calls onClick function when button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button text='Test Button' onClick={onClickMock} />
    );
    const buttonElement = getByText('Test Button');

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalled();
  });
});
