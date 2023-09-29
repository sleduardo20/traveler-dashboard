import { FiArrowLeft, FiPlus } from 'react-icons/fi';
import { styled } from '../../styles';
import { ActionButtons, CommonButton } from '../Buttons';

interface ProfileCityProps {
  goBack?: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
}

export const ContentProfileCity = ({
  goBack,
  onDelete,
  onEdit,
}: ProfileCityProps) => {
  return (
    <>
      <CommonButton
        onClick={goBack}
        icon={<FiArrowLeft />}
        size="small"
        color="ternary"
      />

      <TopRigth>
        <ActionButtons onDelete={onDelete} onEdit={onEdit} />
        <CommonButton
          icon={<FiPlus />}
          size="normal"
          color="secondary"
          text="Adicionar um local"
        />
      </TopRigth>
    </>
  );
};

const TopRigth = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$md',
});
