import { IoAlertCircleOutline } from 'react-icons/io5';
import { styled } from '../../styles';

interface FormAlertProps {
  text: string;
}

export function FormAlert({ text }: FormAlertProps) {
  return (
    <FormAlertContainer>
      <IoAlertCircleOutline size={48} />
      <span> {text} </span>
    </FormAlertContainer>
  );
}

const FormAlertContainer = styled('div', {
  width: '19.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$md',

  span: {
    color: '$text',
    fontSize: '$xsm',
    lineHeight: '$md',
  },

  svg: {
    color: '$orange',
  },
});
