import { useRouter } from "next/router";
import "@vandebron/windmolen/dist/index.css";
import "./styles.css";
import "./greentech-hackathon/styles.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const landingPage = router.route === "/greentech-hackathon";

  return (
    <>
      {!landingPage ? <Header /> : null}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
