import type { AppProps } from 'next/app';
import { globalStyles } from '../presentation/styles/global';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

globalStyles();

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  return (
    <>
      <ReactNotifications />
      <Component {...pageProps} />
    </>
  );
}
