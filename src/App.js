import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import ModuleReview from './pages/ModuleReview';
import ContactMe from './pages/ContactMe';
import NavBar from './components/NavBar';
import BottomBar from './components/BottomBar';

function App() {
  return (
    <div className="content">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/module-review" element={<ModuleReview />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
      <BottomBar/>
    </div>
  );
}

export default App;

