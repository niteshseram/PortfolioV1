import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import Theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  const preloading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    preloading();
  }, []);

  return (
    <>
      <Theme>{loading ? <Loader /> : <Component {...pageProps} />}</Theme>
    </>
  );
}
