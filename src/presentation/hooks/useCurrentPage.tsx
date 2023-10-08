import { useRouter } from 'next/router';
import { Pages } from '../../entities/Pages';

export const useCurrentPage = () => {
  const router = useRouter();
  const [_, currentPage] = router.asPath.split('/');

  return currentPage as Pages;
};
