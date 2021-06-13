import Hero from "../components/Hero/Hero";
import { Layout } from "./../layout/Layout";
import Intro from "./../components/Intro/Intro";
import Skills from "./../components/Skills/Skills";
import Projects from "./../components/Project/Projects";
const Home = () => {
  return (
    <Layout>
      <Hero />
      <Intro />
      <Skills />
      <Projects />
    </Layout>
  );
};

export default Home;
