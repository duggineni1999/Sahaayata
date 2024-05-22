import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import TermsUse from './components/TermsUse';
import Privacy from './components/Privacy';
import Cookie from './components/Cookie';
import Refund from './components/Refund';
import "./App.css";
import Header from "./Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";

const AboutPage = () => <div className="p-5">About Page</div>;
const ImmediatePage = () => <div className="p-5">Immediate Page</div>;
const WorkshopsPage = () => <div className="p-5">Workshops Page</div>;
const MediaPage = () => <div className="p-5">Media Page</div>;
const GalleryPage = () => <div className="p-5">Gallery Page</div>;
const DonatePage = () => <div className="p-5">Donate Page</div>;
const ContactPage = () => <div className="p-5">Contact Page</div>;
const TermsUse = () => <div className="p-5">Terms Use</div>;
const Privacy = () => <div className="p-5">Contact Page</div>;
const Cookie = () => <div className="p-5">Contact Page</div>;
const Refund = () => <div className="p-5">Contact Page</div>;


function App() {
  return (
    <div className="App">

      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/immediate" element={<ImmediatePage />} />
          <Route path="/workshops" element={<WorkshopsPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsUse />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookie" element={<Cookie />} />
          <Route path="/refund" element={<Refund />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
