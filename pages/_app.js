import Footer from "@/layouts/Footer";
import Navigation from "@/layouts/Navigation";
import "@/styles/globals.css";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={nunito.className}>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
