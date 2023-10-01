import { styled } from '../../styles';
import { AiOutlineAppstore } from 'react-icons/ai';
import { FiMessageSquare, FiMapPin } from 'react-icons/fi';

interface MenuButtonsProps {
  onPower: () => void;
  onLocal: () => void;
  onCities: () => void;
  onComments: () => void;
}

export const MenuButtons = ({
  onCities,
  onComments,
  onLocal,
}: MenuButtonsProps) => {
  return (
    <MenuButtonsContainer>
      <FiMapPin size={24} onClick={onLocal} />
      <AiOutlineAppstore size={24} onClick={onCities} />
      <FiMessageSquare size={24} onClick={onComments} />
    </MenuButtonsContainer>
  );
};

const MenuButtonsContainer = styled('div', {
  height: '15rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'column',

  svg: {
    color: '$white',
    cursor: 'pointer',
  },
});
