import Hero from "../components/Hero/Hero";
import { Layout } from "./../layout/Layout";
import Intro from "./../components/Intro/Intro";
const Home = () => {
  return (
    <Layout>
      <Hero />
      <Intro />
    </Layout>
  );
};

export default Home;
