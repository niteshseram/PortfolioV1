import Hero from "../components/Hero/Hero";
import { Layout } from "./../layout/Layout";
import Intro from "./../components/Intro/Intro";
import Skills from "./../components/Skills/Skills";
const Home = () => {
  return (
    <Layout>
      <Hero />
      <Intro />
      <Skills />
    </Layout>
  );
};

export default Home;
