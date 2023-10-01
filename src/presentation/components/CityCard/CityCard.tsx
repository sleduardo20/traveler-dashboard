import Image from 'next/image';
import { styled } from '../../styles';
import { ActionButtons } from '../Buttons';

interface CityCardProps {
  onEdit: () => void;
  onDelete: () => void;
  imageUrl: string;
  name: string;
  totalPlaces: string;
}

export const CityCard = ({
  imageUrl,
  name,
  totalPlaces,
  onDelete,
  onEdit,
}: CityCardProps) => {
  return (
    <CityCardContainer>
      <ImageContainer>
        <ActionButtonsContainer>
          <ActionButtons onDelete={onDelete} onEdit={onEdit} />
        </ActionButtonsContainer>
        <Image
          alt={name}
          src={imageUrl}
          fill
          style={{
            objectFit: 'cover',
            borderTopLeftRadius: '1.6rem',
            borderTopRightRadius: '1.6rem',
          }}
        />
      </ImageContainer>

      <h3>{name}</h3>
      <small>{totalPlaces} locais</small>
    </CityCardContainer>
  );
};

const CityCardContainer = styled('div', {
  width: '25.6rem',
  height: '26.6rem',
  borderRadius: '1.6rem',
  border: '0.1rem solid $black100',
  background: '$white',
  cursor: 'pointer',

  h3: {
    marginTop: '$sm',
    marginLeft: '$md',
    color: '$textTitle',
    fontSize: '$md',
    fontWeight: '$bold',
    lineHeight: '$lg',
  },

  small: {
    color: '$text',
    fontSize: '$sm',
    fontFamily: 'Roboto',
    lineHeight: '$md',
    marginTop: '$sm',
    marginLeft: '$md',
  },
});

const ImageContainer = styled('div', {
  width: '100%',
  height: '17.8rem',
  position: 'relative',
});

const ActionButtonsContainer = styled('div', {
  position: 'absolute',
  zIndex: 1,
  top: '$xsm',
  right: '$xsm',
});
