import Hero from "../components/Hero/Hero";
import { Layout } from "./../layout/Layout";
import Intro from "./../components/Intro/Intro";
import Skills from "./../components/Skills/Skills";
import Projects from "./../components/Project/Projects";
import Contact from "./../components/Contact/Contact";
const Home = ({ darkMode }) => {
  return (
    <Layout darkMode={darkMode}>
      <Hero />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Home;
