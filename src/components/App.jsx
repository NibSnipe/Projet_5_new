
import Header from './Header';
import Home from '../pages/Home';
import Logement from '../pages/Logements';
import About from '../pages/About';
import Footer from './Footer';
import Error404 from '../pages/Error404';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/about" element={<About />} />
        <Route path= "/*" element={<Error404/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;