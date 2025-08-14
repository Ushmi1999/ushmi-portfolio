import './App.css';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Ushmi Nimsara | Portfolio</h1>
        <p>Welcome to my personal portfolio website.</p>
        <p>I am a web developer</p>
      </header>

      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />

      <footer>
        <p>Contact: nimmiushmi@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;

