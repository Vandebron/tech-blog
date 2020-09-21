import "@vandebron/windmolen/dist/index.css";
import "./styles.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
