import { Navbar, Header, Footer, About, Education } from "./components";
import Contact from "./components/contact";
import Skills from "./components/skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
