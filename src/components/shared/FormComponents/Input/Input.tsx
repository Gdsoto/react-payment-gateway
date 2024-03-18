import React, { FC } from 'react';
import { Controller } from 'react-hook-form';

// Components
import { TextField } from '@mui/material';

// Models
import { InputI } from './models';

const Input: FC<InputI> = ({
  nameValue,
  control,
  label,
  type = 'text',
  onFocus,
  placeholder,
  adornment,
  multiline = false,
  errors = {},
  inputProps = {},
}: InputI) => {
  const hasError = Boolean(errors?.[nameValue]?.message);
  const errorMessage = errors?.[nameValue]?.message ?? '';

  return (
    <Controller
      name={nameValue}
      control={control}
      render={({ field: { onChange, name, value, onBlur } }) => (
        <TextField
          multiline={multiline}
          maxRows={4}
          minRows={4}
          fullWidth
          id={`${label}-field`}
          label={label}
          type={type}
          name={name}
          inputProps={inputProps}
          error={hasError as boolean}
          helperText={errorMessage as string}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          placeholder={placeholder}
          onFocus={onFocus}
          InputProps={{
            ...adornment,
          }}
        />
      )}
    />
  );
};

export default Input;
