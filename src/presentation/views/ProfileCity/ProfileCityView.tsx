import Image from 'next/image';
import { styled } from '../../styles';
import { LayoutDefault } from '../LayoutDefault/LayoutDefault';
import { SectionTop } from './SectionTop';

export const ProfileCityView = () => {
  return (
    <LayoutDefault>
      <>
        <ContainerImage>
          <Image
            alt="Image City"
            quality={100}
            src="https://images.pexels.com/photos/15641806/pexels-photo-15641806/free-photo-of-apartamento-arquitetura-construcao-predio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </ContainerImage>
        <Content>
          <SectionTop
            nameCity="Florianopolis"
            description="Capital do estado de Santa Catarina no sul do Brasil, é maioritariamente constituída pela Ilha de Santa Catarina, com 54 km de comprimento."
            observations="É famosa pelas suas praias, incluindo estâncias turísticas populares como a Praia dos Ingleses na extremidade norte da ilha."
            totalsCategories={{
              events: 30,
              foodDrink: 50,
              touristAttractions: 32,
            }}
          />
        </Content>
      </>
    </LayoutDefault>
  );
};

const ContainerImage = styled('div', {
  width: '100%',
  height: '49rem',
  position: 'relative',
});

const Content = styled('article', {
  paddingLeft: '20.8rem',
  paddingRight: '11.2rem',
  paddingTop: '4.8rem',
  width: '100%',
});
