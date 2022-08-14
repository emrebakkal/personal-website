import { Routes, Route, Link } from "react-router-dom";
import Projects from './pages/Projects';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';


// Bu dosya routing için kullanılıyor...

export default function App() {
  return(
    <div>
      <Navbar />
      <link href='https://fonts.googleapis.com/css?family=Fira Sans' rel='stylesheet' />   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </div>
  )
}