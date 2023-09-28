import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { styled } from '../../styles';
import { CommonButton } from './CommonButton';

interface ActionButtonProps {
  onEdit: () => void;
  onDelete: () => void;
}

export const ActionButtons = ({ onDelete, onEdit }: ActionButtonProps) => {
  return (
    <ButtonsActions>
      <CommonButton
        onClick={onEdit}
        size="small"
        color="secondary"
        icon={<FiEdit />}
      />
      <CommonButton
        onClick={onDelete}
        size="small"
        color="secondary"
        icon={<FiTrash2 />}
      />
    </ButtonsActions>
  );
};

const ButtonsActions = styled('div', {
  display: 'flex',
  gap: '$xxxsm',

  '& button': {
    border: '0.1rem solid  $black100',
    backgroundColor: '$background',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,

    svg: {
      color: '$text',
    },
  },

  '& button + button': {
    borderTopRightRadius: '1rem',
    borderBottomRightRadius: '1rem',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
});
