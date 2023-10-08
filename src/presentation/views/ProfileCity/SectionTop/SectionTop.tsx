import { Categories } from '../../../../entities/Category';
import { styled } from '../../../styles';
import { CategoryTotalCard } from './CategoryTotalCard';

interface SectionTopProps {
  nameCity: string;
  description: string;
  observations?: string;
  totalsCategories: {
    foodDrink: number;
    touristAttractions: number;
    events: number;
  };
}

export const SectionTop = ({
  nameCity,
  description,
  observations,
  totalsCategories: { events, foodDrink, touristAttractions },
}: SectionTopProps) => {
  return (
    <Container>
      <ColumnInfoCity>
        <NameCity>{nameCity}</NameCity>
        <DescriptionCity>{description}</DescriptionCity>
        {observations && <ObservationCity>{observations}</ObservationCity>}
      </ColumnInfoCity>

      <ColumnInfoCategories>
        <CategoryTotalCard
          category={Categories.TOURIST_ATTRACTIONS}
          total={touristAttractions}
        />
        <CategoryTotalCard
          category={Categories.FOOD_DRINKS}
          total={foodDrink}
        />
        <CategoryTotalCard
          category={Categories.TOURIST_ATTRACTIONS}
          total={events}
        />
      </ColumnInfoCategories>
    </Container>
  );
};

const Container = styled('section', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const ColumnInfoCity = styled('div', {
  width: '50.6rem',
  height: '26.8rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

const ColumnInfoCategories = styled('div', {
  maxWidth: 'max-content',
  display: 'flex',
  alignItems: 'center',
  gap: '$md',
});

const NameCity = styled('h1', {
  fontSize: '$xxlg',
  color: '$textTitle',
  marginBottom: '$xlg',
});

const DescriptionCity = styled('p', {
  fontSize: '$md',
  color: '$textTitle',
  marginBottom: '$lg',
});

const ObservationCity = styled('p', {
  fontSize: '$sm',
  color: '$text',
});
