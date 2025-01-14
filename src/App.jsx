import { useTranslation } from 'react-i18next';
import LanguageSelector from './components/LanguageSelector';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

const App = () => {
   const { t } = useTranslation();
   return (
      <div>
         <Navbar />
         <main style={{ padding: '0 8rem', minHeight: '80vh' }}>
            <Home />
            <About />
            <Projects />
            <Skills />
            <Education />
            <Contact />
         </main>
         <Footer />
      </div>
   );
};

export default App;
