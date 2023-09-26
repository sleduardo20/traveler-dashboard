import { useFormContext } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa';
import { styled } from '../../styles';

interface InputCheckboxProps {
  label?: string;
  name: string;
}

export function InputCheckbox({ label, name }: InputCheckboxProps) {
  const { register, watch } = useFormContext();
  const isChecked = watch(name);

  return (
    <CheckboxContainer>
      <CheckboxInput id={name} type="checkbox" {...register(name)} />

      {isChecked && <FaCheck size={12} />}

      {label && (
        <label className="Label" htmlFor={name}>
          {label}
        </label>
      )}
    </CheckboxContainer>
  );
}

const CheckboxContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    position: 'absolute',
    color: '$white',
    left: '7px',
    top: '7px',
    pointerEvents: 'none',
  },

  label: {
    color: '$textComplements',
    marginLeft: '$xxsm',
    fontSize: '$sm',
    lineHeight: '$md',
    cursor: 'pointer',
  },
});

const CheckboxInput = styled('input', {
  appearance: 'none',
  width: '$md',
  height: '$md',
  cursor: 'pointer',
  borderRadius: '0.8rem',
  background: '$white',
  border: '0.1rem solid $black100',

  '&:checked': {
    background: '$green',
    border: '0.1rem solid $green',
  },
});
