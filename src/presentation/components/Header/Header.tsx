import { Pages } from '../../../entities/Pages';
import { styled } from '../../styles';
import { ContentListCities } from './ContentListCities';
import { ContentProfileCity } from './ContentProfileCity';
import { ContentToForms } from './ContentToForms';

interface HeaderProps {
  goProfile?: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
  step?: 1 | 2;
  title?: string;
  page: Pages;
}

export const Header = ({
  step,
  title,
  goProfile,
  onDelete,
  onEdit,
  page,
}: HeaderProps) => {
  return (
    <HeaderContainer>
      {page === Pages.LIST_CITIES && (
        <ContentListCities goProfile={goProfile} />
      )}
      {page === Pages.PROFILE_CIY && (
        <ContentProfileCity onDelete={onDelete} onEdit={onEdit} />
      )}
      {page === Pages.FORM_ADD && <ContentToForms step={step} title={title} />}
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

  h3: {
    fontSize: '$md',
    fontWeight: '$normal',
    color: '$textComplements',
  },
});
