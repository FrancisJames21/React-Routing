import './App.css';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';

import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
        <div>

          <Header />

          <Routes>
          <Route path="/"      element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />}/>
         </Routes>



      
        
        </div>
    
  );
}

export default App;
