import { GetStaticPaths, GetStaticProps } from 'next';
import { ProfileCityView } from '../../presentation/views/ProfileCity';

export default function ProfileCity() {
  return <ProfileCityView />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
