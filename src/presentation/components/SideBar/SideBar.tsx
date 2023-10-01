import Image from 'next/image';
import { styled } from '../../styles';
import Logo from '../../assets/Logo.svg';
import { MenuButtons } from '../Buttons/MenuButtons';
import { FiPower } from 'react-icons/fi';

interface SideBarProps {
  onPower: () => void;
  onLocal: () => void;
  onCities: () => void;
  onComments: () => void;
}

export const SideBar = (props: SideBarProps) => {
  return (
    <Container>
      <Image alt="Logo" src={Logo} width={22} height={48} />
      <MenuButtons {...props} />

      <FiPower size={36} />
    </Container>
  );
};

const Container = styled('div', {
  width: '9.6rem',
  height: '82.1rem',
  background: '$orange',
  display: 'flex',
  position: 'absolute',
  top: 0,
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '$sm 0',

  svg: {
    color: '$white',
  },
});
