import { Pages } from '../../../entities/Pages';
import { CityCard } from '../../components/CityCard';
import { Header } from '../../components/Header';
import { SideBar } from '../../components/SideBar';
import { styled } from '../../styles';

export const ListCitiesView = () => {
  const props = {
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/2b47/76c6/bcdd4e04a89103f989a13d834a2bf658?Expires=1696809600&Signature=QRNBbjWVHzWA4xtzqUkR0iWT~yw-8ZAZ10UP5s8acObsaM6aHPTgrO-VCSSO5S6Y~SUYwg2Nt~5CbrNEvkuAz3n4aiqFKY7geONOAQ-4GhqLjAkB39HneinhF1LXN75VdZXPAaASM1px1o~~2SRM3nnKXpFgMEpSH6JhPu31tOQZ4ph49qunCCujNl-ygkkFFj1S70~T4uZnT9XaNAnd9T6H81E5IWMMBygHBo4-sBK1bzctQnGjpVFrvKpJXxhwgdVI9qBMebarwx9jvNsmr~zO19pxKNXy1wrhwW8dkDcVy0ZTN~KJj5pihSTHxVFdFYp7v7ezoIaAmaUns28TNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    name: 'Bobinhas',
    totalPlaces: '13',
    onEdit: () => {},
    onDelete: () => {},
  };

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
    </Container>
  );
};

const Container = styled('main', {
  background: '$background',
  height: '100vh',
});
