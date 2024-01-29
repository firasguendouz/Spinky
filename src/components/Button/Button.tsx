// Button.tsx

import'./Button.css';

import React, { MouseEvent } from 'react';

import { WithClassnameType } from 'types';

interface ButtonType extends React.PropsWithChildren<WithClassnameType> {
  onClick: (e: MouseEvent) => void;
  disabled?: boolean;
  dataTestId?: string;
  dataCy?: string;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
  children,
  onClick,
  disabled = false,
  type = 'button',
  id,
  className = 'button',
  ...otherProps
}: ButtonType) => {
  return (
    <button
      id={id}
      data-testid={otherProps['data-testid']}
      disabled={disabled}
      onClick={onClick}
      className={className}
      type={type}
    >
      {children}
    </button>
  );
};
