import "./styles/App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Events from "./components/Events.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Cofetti from "./components/Cofetti.jsx";

function App() {
  return (
    <div>
      <Cofetti />
      <div className="main__background"></div>
      <div className="content">
        <Header />
        <main id="home">
          <Hero />
          <Events />
          <About />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
