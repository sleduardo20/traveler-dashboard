import { FiPlus } from 'react-icons/fi';
import { CommonButton } from '../Buttons';

interface ContentListCities {
  goProfile?: () => void;
}

export const ContentListCities = ({ goProfile }: ContentListCities) => {
  return (
    <>
      <h2>Cidades</h2>
      <CommonButton
        onClick={goProfile}
        color="secondary"
        icon={<FiPlus />}
        text="Adicionar um perfil"
      />
    </>
  );
};
