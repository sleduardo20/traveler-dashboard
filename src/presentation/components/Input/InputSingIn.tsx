import { InputHTMLAttributes, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useFormContext } from 'react-hook-form';
import { styled } from '../../styles';

interface InputSingInProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'isPassword' | 'default';
  name: string;
}

export function InputSingIn({
  variant = 'default',
  name,
  ...props
}: InputSingInProps) {
  const [showPassword, setShowPassword] = useState(false);
  const { watch, register } = useFormContext();

  const watchPassword = watch('password');
  const showEyeIcon = variant === 'isPassword' && watchPassword;

  const changeViewPassword = () => setShowPassword(state => !state);

  return (
    <InputContainer variant={variant}>
      <input
        {...props}
        {...register(name)}
        type={variant === 'isPassword' && !showPassword ? 'password' : 'text'}
      />

      {showEyeIcon &&
        (showPassword ? (
          <FiEyeOff onClick={changeViewPassword} size={24} />
        ) : (
          <FiEye onClick={changeViewPassword} size={24} />
        ))}
    </InputContainer>
  );
}

const InputContainer = styled('div', {
  background: '$white',
  width: '41.6rem',
  height: '7.2rem',
  border: '0.1rem solid $black100',
  padding: '$xxsm $xsm',
  display: 'flex',
  alignItems: 'center',

  svg: {
    cursor: 'pointer',
    color: '$black100',
  },

  input: {
    width: '100%',
    height: '100%',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontSize: '$sm',
    lineHeight: '$md',

    '&::placeholder': {
      color: '$black100',
    },
  },

  variants: {
    variant: {
      isPassword: {
        borderRadius: '0 0 1rem 1rem',
        borderTop: 'none',
      },
      default: {
        borderRadius: '1rem 1rem 0 0',
      },
    },
  },
});
