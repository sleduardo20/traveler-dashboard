import type { AppProps } from 'next/app';
import { globalStyles } from '../presentation/styles/global';

globalStyles();

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  return <Component {...pageProps} />;
}
