import React from 'react';
import "./App.css";
import Header from "./Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Downloads from './Media/Downloads';
import Introduction from './Media/Introduction';
import Launch from './Media/Launch';
import Vardaan from './Media/Vardaan';
import Inauguration from './Media/Inauguration';
import TermsUse from "./Footer/TermsUse";
import Privacy from './Footer/Privacy';
import Refund from './Footer/Refund';
import Cookie from "./Footer/Cookie";
import Footer from "./Footer/Footer";
import BecomeHealer from "./intermediate/BecomeHealer";
import Chakradanya from "./intermediate/Chakradanya";
import DivineMedicine from "./intermediate/DivineMedicine";
import HealingRequest from "./intermediate/HealingRequest";
import JoinSahayak from "./intermediate/JoinSahayak";
import KalashaPuja from "./intermediate/KalashaPuja";
import PersonalCounselling from "./intermediate/PersonalCounselling";
import PrayerRequest from "./intermediate/PrayerRequest";
import SahsayataPrayer from "./intermediate/SahsayataPrayer";
import SarvaDukha from "./intermediate/SarvaDukha";
import ShareExperience from "./intermediate/ShareExperience";
import SoundaryaLahiri from "./intermediate/SoundaryaLahiri";

const AboutPage = () => <div className="p-5">About Page</div>;
const ImmediatePage = () => <div className="p-5">Immediate Page</div>;
const WorkshopsPage = () => <div className="p-5">Workshops Page</div>;
const MediaPage = () => <div className="p-5">Media Page</div>;
const GalleryPage = () => <div className="p-5">Gallery Page</div>;
const DonatePage = () => <div className="p-5">Donate Page</div>;
const ContactPage = () => <div className="p-5">Contact Page</div>;


function App() {
  return (
    <div >

      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/immediate" element={<ImmediatePage />} />
          <Route path="/becomehealer" element={<BecomeHealer />} />
          <Route path="/chakradanya" element={<Chakradanya />} />
          <Route path="/divinemedicine" element={<DivineMedicine/>} />
          <Route path="/healingrequest" element={<HealingRequest />} />
          <Route path="/joinsahayak" element={<JoinSahayak />} />
          <Route path="/kalashapuja" element={<KalashaPuja/>} />
         
          <Route path="/personalcounselling" element={<PersonalCounselling />} />
          <Route path="/prayerrequest" element={<PrayerRequest />} />
          <Route path="/sahsahayataprayer" element={<SahsayataPrayer />} />
          <Route path="/sarvadukha" element={<SarvaDukha/>} />
          <Route path="/shareexperience" element={<ShareExperience />} />
          <Route path="/soundaryalahiri" element={<SoundaryaLahiri />} />
          <Route path="/workshops" element={<WorkshopsPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path='/downloads' element={<Downloads/>}/>
          <Route path='/introduction' element={<Introduction/>}/>
          <Route path='/launch' element={<Launch/>}/>
          <Route path='/vardaan' element={<Vardaan/>}/>
          <Route path='/inauguration' element={<Inauguration/>}/>
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsUse />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookie" element={<Cookie/>} />
          <Route path="/refund" element={<Refund />} />
         
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
