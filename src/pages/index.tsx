import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { SignIn, SignInProps } from '../presentation/views/SignIn/SignIn';

export default function Home({ imageUrl }: SignInProps) {
  return (
    <main>
      <SignIn imageUrl={imageUrl} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/e522/b9d3/a05e9f42214abf1c509ca0d7ce472eb6?Expires=1696809600&Signature=nsqHn90ZlfP0kgoxxf6WeuPQE-7OsjdzUUBBqvhDrhUjUv2uNx2caGeLD-srESZSa68u3L0cyM0VWtEORX0e4dEBskDDRnRercZ1qQC8le0lEX6~-hhlEIGWLfCOdvftBOiAOlik~kY~-vc7Z6TGnHlnDyNxCKRnt10qBup3cuigxBb-ru4YC5ljud7-pSAV7CupQIMI~oHpNaEcfsZq7qBza6-sFoKhJ7xd~US-wTVnhKU7Q4PBFXjzwGoWxJuGjAYBs8zubXotdQyD3Dm9rpqvPBcbQmiH0y7AYszJY~ea4DCKhkNyn253~4N1~IAzs2EIVRERKfF-y-dPBLscVA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
  };
};
