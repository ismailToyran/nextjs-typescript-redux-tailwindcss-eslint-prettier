import Error from '@components/form/error';
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { ChangeHandler, FieldError } from 'react-hook-form';

type Ref = HTMLInputElement;

type InputProps = {
  type?: 'text' | 'email';
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  name: string;
  label: string;
  error: FieldError | undefined;
};

const Input = forwardRef<Ref, InputProps>(({ onChange, onBlur, name, label, error, type }: InputProps, ref) => (
  <>
    <div className="relative flex items-center my-2 bg-transparent floating-input w-min">
      <input
        type={type || 'text'}
        placeholder=" "
        id={name}
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        className={clsx(
          'block w-auto md:w-80 p-4 text-light-text-primary dark:text-dark-text-primary focus:text-light-text-primary-color dark:focus:text-dark-text-primary-color text-lg appearance-none bg-transparent rounded-md border border-light-text-primary dark:border-dark-text-primary focus:border-light-text-primary-color dark:focus:border-dark-text-primary-color focus:outline-none',
          { 'text-light-error dark:text-dark-error border-light-error dark:border-dark-error': error }
        )}
      />
      <label
        htmlFor={name}
        className={clsx(
          'absolute text-lg bg-white dark:bg-dark-bg-paper-color left-4 transition-transform duration-200 rounded-md pointer-events-none',
          { 'text-light-text-primary dark:text-dark-text-primary': !error },
          { 'text-light-error dark:text-dark-error': error }
        )}
      >
        {label}
      </label>
    </div>
    {error && <Error>{error.message}</Error>}
  </>
));

Input.defaultProps = {
  type: 'text'
};

export default Input;
