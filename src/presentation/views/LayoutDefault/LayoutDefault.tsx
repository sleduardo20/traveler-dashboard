import { ReactElement } from 'react';
import { Pages } from '../../../entities/Pages';
import { Header } from '../../components/Header';
import { SideBar } from '../../components/SideBar';
import { styled } from '../../styles';

interface LayoutDefaultProps {
  children: ReactElement;
}

export const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <Container>
      <Header
        page={Pages.LIST_CITIES}
        goProfile={() => {}}
        title="Edit"
        subtitle="Blumenau"
      />
      <SideBar
        onCities={() => {}}
        onComments={() => {}}
        onLocal={() => {}}
        onPower={() => {}}
      />
      {children}
    </Container>
  );
};

const Container = styled('main', {
  position: 'relative',
});
