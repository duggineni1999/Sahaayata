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
import Donate from './Donate/Donate';
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
import SahsayataPrayer from './intermediate/SahsayataPrayer';
import SarvaDukha from "./intermediate/SarvaDukha";
import ShareExperience from "./intermediate/ShareExperience";
import SoundaryaLahiri from "./intermediate/SoundaryaLahiri";
import WhatIsSahaayat from "./About/WhatIsSahaayat";
import Vision from "./About/Vision";
import PersonalProtal from "./About/PersonalProtal";
import Parenting from "./About/Parenting";
import ByDesign from "./About/ByDesign";
import Schooling from "./About/Schooling";
import Corporates from "./About/Corporates";
import Testimonials from "./About/Testimonials";
import Srikiran from "./About/Faculty/Srikiran";
import SriChakradhar from "./About/Faculty/SriChakradhar";

import ContactUs from './Contact/ContactUs';
import Register from './Forms/Register';
import ArchanaPuja from './Home/ArchanaPuja';
import LogIn from './Forms/LogIn';

import Projects from './Home/Projects';
import SahaayatCenter from './Gallery/SahaayatCenter';
import CorporateIntel from './Gallery/CorporateIntel';
import GeneralPublic from './Gallery/GeneralPublic';
import Rural from './Gallery/Rural'
import Login from './UserPortal/Login';
import Registration from './UserPortal/Registration';
import AdminProtal from './Admin/AdminProtal';
import UserProfile from './UserPortal/UserProfile';
import Workshop from './Workshop/Workshop';



function App() {
  return (
    <div >

      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/archana" element={<ArchanaPuja />} />

          <Route path='/projects' element={<Projects/>}/>

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
       
       
          <Route path='/downloads' element={<Downloads/>}/>
          <Route path='/introduction' element={<Introduction/>}/>
          <Route path='/launch' element={<Launch/>}/>
          <Route path='/vardaan' element={<Vardaan/>}/>
          <Route path='/inauguration' element={<Inauguration/>}/>
      
          <Route path='/sahaayatcenter' element={<SahaayatCenter/>}/>
          <Route path='/rural' element={<Rural/>}/>
          <Route path='/generalpublic' element={<GeneralPublic/>}/>
          <Route path='/corporateintel' element={<CorporateIntel/>}/>
          <Route path="/donate" element={<Donate />} />
          <Route path="/about/what-is-sahaayata" element={<WhatIsSahaayat />} />
          <Route path="/about/vision" element={<Vision />} />
          <Route path="/about/personal-portal" element={<PersonalProtal />} />
          <Route path="/about/parenting" element={<Parenting />} />
          <Route path="/about/by-design" element={<ByDesign />} />
          <Route path="/about/schooling-and-child-management" element={<Schooling />} />
          <Route path="/about/corporates" element={<Corporates />} />
          <Route path="/about/testimonials" element={<Testimonials />} />
          <Route path="/about/faculty/sri-kiran" element={<Srikiran />} />
          <Route path="/about/faculty/sri-chakradhar" element={<SriChakradhar />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/photo-gallery/first-program" element={<SahaayatCenter />} />
          <Route path="/photo-gallery/rural" element={<Rural />} />
          <Route path="/photo-gallery/general-public" element={<GeneralPublic />} />
          <Route path="/photo-gallery/corporate-and-intelligentia" element={<CorporateIntel />} />
          <Route path="/user-login" element={<Login />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/user-registration" element={<Registration />} />
          <Route path="/terms" element={<TermsUse />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookie" element={<Cookie/>} />
          <Route path="/refund" element={<Refund />} />
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/admin-portal' element={<AdminProtal />}/>
          <Route path='/courses/workshops' element={<Workshop />}/>
        </Routes>
       
        <Footer />
     
        
      </Router>

    </div>
  );
}

export default App;
