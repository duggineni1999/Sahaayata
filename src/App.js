import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import TermsUse from './components/TermsUse'; // Import your TermsOfUseComponent here
import Privacy from './components/Privacy';
import Cookie from './components/Cookie';
import Refund from './components/Refund';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/terms' element={<TermsUse />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/cookie' element={<Cookie />} />
        <Route path='/refund' element={<Refund />} />
      </Routes>
      
      <Footer/>
    
    </div>
  );
}

export default App;
