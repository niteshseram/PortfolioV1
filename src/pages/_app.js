import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loader from "../components/Loader/Loader";
import Theme from "../styles/theme";
import * as gtag from "../lib/gtag";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const preloading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    preloading();
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Theme>{loading ? <Loader /> : <Component {...pageProps} />}</Theme>
    </>
  );
}
