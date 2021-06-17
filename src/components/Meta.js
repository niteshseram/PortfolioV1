import Head from "next/head";
import { SEO } from "../data/config";

const Meta = () => (
  <Head>
    <title>{SEO.title}</title>
    <meta name="robots" content="follow, index" />
    <meta name="description" content={SEO.description} />
    <meta name="image" content={SEO.image} />

    <meta property="og:title" content={SEO.title} />
    <meta property="og:description" content={SEO.description} />
    <meta property="og:image" content={SEO.image} />
    <meta property="og:url" content={SEO.url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={SEO.title} />

    <meta name="twitter:title" content={SEO.title} />
    <meta name="twitter:description" content={SEO.description} />
    <meta name="twitter:image" content={SEO.image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image:alt" content="Nitesh Seram's Portfolio" />
    <meta name="twitter:site" content={SEO.twitter} />
    <meta name="keywords" content={SEO.keywords}></meta>
    <link rel="canonical" href={SEO.url} />
    <meta charSet="utf-8" />
    <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
  </Head>
);

export default Meta;
