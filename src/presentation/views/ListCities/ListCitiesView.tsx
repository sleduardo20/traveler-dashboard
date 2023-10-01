import { CityCard } from '../../components/CityCard';
import { LayoutDefault } from '../LayoutDefault/LayoutDefault';
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
    <LayoutDefault>
      <Content>
        <CityCard {...props} />
        <CityCard {...props} />
        <CityCard {...props} />
        <CityCard {...props} />
        <CityCard {...props} />
      </Content>
    </LayoutDefault>
  );
};

const Content = styled('div', {
  paddingLeft: '20.8rem',
  paddingRight: '11.2rem',
  paddingTop: '4.8rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(5,25.6rem)',
  justifyContent: 'space-between',
  rowGap: 'calc($lg + $md)',
});
