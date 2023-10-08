import { ReactElement } from 'react';
import { Header } from '../../components/Header';
import { SideBar } from '../../components/SideBar';
import { styled } from '../../styles';
import { useCurrentPage } from '../../hooks/useCurrentPage';
import { useRouter } from 'next/router';

interface LayoutDefaultProps {
  children: ReactElement;
}

export const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  const router = useRouter();
  const currentPage = useCurrentPage();

  return (
    <Container>
      <Header page={currentPage} goBack={router.back} />
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
