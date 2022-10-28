import type { AppProps } from "next/app";
import '../styles/globals.css';


function MyApps({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApps;