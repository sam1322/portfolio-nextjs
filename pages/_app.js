import "styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
