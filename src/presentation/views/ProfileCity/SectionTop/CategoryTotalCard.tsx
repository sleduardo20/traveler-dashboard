import { Categories } from '../../../../entities/Category';
import { styled } from '../../../styles';
import { MdOutlinePhotoCamera } from 'react-icons/md';
import { FiCoffee } from 'react-icons/fi';
import { PiCalendarCheckBold } from 'react-icons/pi';

interface TotalCategoryProps {
  category: Categories;
  total: number;
}

const renderIcon = (categoryName: Categories, size: number) => {
  switch (categoryName) {
    case Categories.TOURIST_ATTRACTIONS:
      return <MdOutlinePhotoCamera size={size} />;
    case Categories.EVENTS:
      return <PiCalendarCheckBold size={size} />;
    case Categories.FOOD_DRINKS:
      return <FiCoffee size={size} />;

    default:
      <PiCalendarCheckBold />;
  }
};

const renderCategoryName = (categoryName: Categories) => {
  switch (categoryName) {
    case Categories.TOURIST_ATTRACTIONS:
      return <h4>Pontos Turísticos</h4>;
    case Categories.EVENTS:
      return <h4>Eventos Organizados</h4>;
    case Categories.FOOD_DRINKS:
      return <h4>Comida e Bebida</h4>;

    default:
      <PiCalendarCheckBold />;
  }
};

export const CategoryTotalCard = ({ category, total }: TotalCategoryProps) => {
  return (
    <Container>
      {renderIcon(category, 40)}

      <div>
        <h3>{total}</h3>
        {renderCategoryName(category)}
      </div>
    </Container>
  );
};

const Container = styled('div', {
  background: '$white',
  height: '26.8rem',
  width: '16rem',
  borderRadius: '2rem',
  border: '0.1rem solid $black100',
  paddingLeft: '$lg',
  paddingRight: '$xlg',
  paddingBottom: '$lg',
  paddingTop: '$lg',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  position: 'relative',

  svg: {
    color: '$orange',
  },

  h3: {
    fontSize: '$xlg',
    color: '$textTitle',
    marginBottom: '$sm',
    fontWeight: '$bold',
  },

  h4: {
    fontSize: '$md',
    color: '$text',
  },

  '&::before': {
    content: `''`,
    width: '100%',
    height: '0.1rem',
    position: 'absolute',
    background: '$black100',
    top: 100,
    left: 0,
  },
});
