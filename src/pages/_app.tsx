import "../styles/global.css";

import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <main className={`${poppins.className} font-sans`}>
    <Component {...pageProps} />
  </main>
);

export default MyApp;
