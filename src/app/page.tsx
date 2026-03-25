import Header from "./components/Header";
import Projects from "./components/Projects";
import Formation from "./components/Formation";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Projects />
      <Formation />
      <Experiences />
      <Footer />
    </main>
  );
}
