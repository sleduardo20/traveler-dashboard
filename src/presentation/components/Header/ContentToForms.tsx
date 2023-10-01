import { FiArrowLeft } from 'react-icons/fi';
import { CommonButton } from '../Buttons';
import { styled } from '../../styles';

interface ContentToFormsProps {
  title?: string;
  subtitle?: string;
  step?: 1 | 2;
  goBack?: () => void;
}

export const ContentToForms = ({
  title,
  subtitle,
  step,
  goBack,
}: ContentToFormsProps) => {
  return (
    <>
      <CommonButton
        onClick={goBack}
        icon={<FiArrowLeft />}
        size="small"
        color="ternary"
      />

      <h3>{title}</h3>

      {subtitle && <h4>{subtitle}</h4>}

      {step && (
        <Steps>
          <Step step={step}>1</Step>
          <span> - </span>
          <Step step={step}>2</Step>
        </Steps>
      )}
    </>
  );
};

const Steps = styled('div', {
  fontSize: '$xsm',
  color: '$black100',
  fontFamily: 'Roboto',
  fontWeight: '$bold',
});

const Step = styled('span', {
  variants: {
    step: {
      1: {
        '&:nth-child(1)': {
          color: '$textComplements',
          fontSize: '$sm',
        },
      },
      2: {
        '&:nth-child(3)': {
          color: '$textComplements',
          fontSize: '$sm',
        },
      },
    },
  },
});
