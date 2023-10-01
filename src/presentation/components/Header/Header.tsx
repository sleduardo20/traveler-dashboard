import { Pages } from '../../../entities/Pages';
import { styled } from '../../styles';
import { ContentListCities } from './ContentListCities';
import { ContentProfileCity } from './ContentProfileCity';
import { ContentToForms } from './ContentToForms';

interface HeaderProps {
  goProfile?: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
  goBack?: () => void;
  step?: 1 | 2;
  title?: string;
  subtitle?: string;
  page: Pages;
}

export const Header = ({
  step,
  title,
  goProfile,
  onDelete,
  onEdit,
  goBack,
  subtitle,
  page,
}: HeaderProps) => {
  return (
    <HeaderContainer>
      {page === Pages.LIST_CITIES && (
        <ContentListCities goProfile={goProfile} />
      )}
      {page === Pages.PROFILE_CIY && (
        <ContentProfileCity
          onDelete={onDelete}
          onEdit={onEdit}
          goBack={goBack}
        />
      )}
      {page === Pages.FORM && (
        <ContentToForms
          step={step}
          title={title}
          subtitle={subtitle}
          goBack={goBack}
        />
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled('header', {
  width: 'calc(100% - 96px )',
  padding: '$md 11.2rem',
  borderBottom: '0.1rem solid $black100',
  marginLeft: '9.6rem',
  left: 0,
  height: '9.6rem',
  background: '$white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  h2: {
    fontSize: '$lg',
    fontWeight: '$bold',
    color: '$textTitle',
  },

  'h3,h4': {
    fontSize: '$md',
    fontWeight: '$bold',
    color: '$textComplements',
  },

  h4: {
    fontSize: '$sm',
    fontWeight: '$normal',
  },
});
