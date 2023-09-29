import React, { ButtonHTMLAttributes } from 'react';
import { styled } from '../../styles';

interface CommonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: React.ReactNode;
  size?: 'small' | 'normal' | 'large';
  color?: 'primary' | 'secondary' | 'ternary';
}

export function CommonButton({
  text,
  icon,
  size = 'normal',
  color = 'primary',
  ...props
}: CommonButtonProps) {
  return (
    <ButtonContainer color={color} size={size} {...props}>
      {icon && icon} {text && <small>{text}</small>}
    </ButtonContainer>
  );
}

const ButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '1rem',
  border: 'none',
  fontFamily: 'Roboto',

  small: {
    fontSize: '$sm',
    marginLeft: '$xxsm',
  },

  '&:disabled': {
    opacity: '0.6',
    cursor: 'no-drop',
  },

  '&:hover': {
    filter: 'brightness(0.96)',
  },

  variants: {
    size: {
      small: {
        width: '4rem',
        height: '4rem',
      },
      normal: {
        width: '21.4rem',
        height: '4.8rem',
      },
      large: {
        width: '41.6rem',
        height: '7.2rem',
      },
    },
    color: {
      primary: {
        background: '$orange',
        color: '$white',
      },
      secondary: {
        background: '$green',
        color: '$white',
      },
      ternary: {
        background: '$white',
        color: '$textComplements',
        border: '0.1rem solid $black100',

        svg: {
          color: '$text',
        },
      },
    },
  },
});
