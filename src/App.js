import "./App.css";
import Header from "./Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer/Footer";

const HomePage = () => <div className="p-5">Home Page</div>;
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
          <Route path="/" element={<HomePage />} />
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
