import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo-medium.png'

function Header() {
    return (
        <div>
            <div className='header_top '>
                <div className='container'>
                    <div className='d-flex justify-content-end'>
                        <div className='d-flex gap-3 py-2'>
                            <div className='d-flex gap-2'>
                                <i className="fa-solid fa-phone header_phone mt-1 "></i>
                                <p className='header_phone m-0'> +91 77356 51118</p>
                            </div>
                            <div className='d-flex gap-2'>
                                <i className="fa-solid fa-envelope header_phone mt-1 "></i>
                                <p className='header_phone m-0'> info@sahaayata.org</p>
                            </div>


                        </div>

                    </div>
                </div>
            </div>


            <nav className="navbar navbar-expand-lg bg-white sticky-top ">
                <div className="container">
                    <a className="navbar-brand ">
                        <img src= {logo} alt="Logo" height="80px" />
                    </a>

                    <div className="collapse navbar-collapse bg-white px-3 " id="navbarText">
                        <ul className="navbar-nav position-relative mx-auto mb-2 mb-lg-0 gap-0 gap-xxl-3">
                            <li className="nav-item">
                                <Link to="/" className='text-decoration-none'>
                                    <a className="nav-link  text-black-50 text-uppercase">
                                        Home
                                    </a>
                                </Link>
                            </li>

                            < li className="nav-item dropdown-center " >
                                <Link to="/" className='text-decoration-none'>
                                    <a className="nav-link text-black-50 position-relative text-uppercase" aria-expanded="true">
                                        About{''}
                                        <span>
                                            <i className="fa fa-angle-down ms-1 drop-icon fw-bold" data-bs-toggle="dropdown" style={{ color: '#5AADDD', }} aria-hidden="true"></i>
                                        </span>
                                    </a>
                                </Link>
                                <ul className="dropdown-menu px-1  rounded-0 shadow border-0" style={{ backgroundColor: '#ffffffe7' }}>
                                    <li className="">
                                        <Link to="/about/what-is-sahaayata" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50  lh-lg">
                                                What Is Sahaayata
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="/about/vision" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50 lh-lg" >
                                                Vision
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="/about/personal-portal" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50  lh-lg" >
                                                Personal Portal
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="/about/parenting" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50  lh-lg" >
                                                Parenting
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="/about/by-design" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50 lh-lg" >
                                                By Design
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="/about/schooling-and-child-management" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50 lh-lg" >
                                                Schooling And Child Management
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="/about/corporates" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50 lh-lg" >
                                                Corporates
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="/about/testimonials" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50 lh-lg" >
                                                Testimonials
                                            </a>
                                        </Link>
                                    </li>
                                    <li className=" position-relative faculty">
                                        <Link to="/" className='text-decoration-none'>
                                            <a className="dropdown-item  text-black-50 lh-lg d-flex justify-content-between" >
                                                Faculty{''}
                                        <span>
                                            <i className="fa fa-angle-left ms-1 drop-icon fw-bold fweicon" data-bs-toggle="dropdown" style={{ color: '#5AADDD', }} aria-hidden="true"></i>
                                        </span>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu px-1 position-absolute  rounded-0 members shadow border-0" style={{ backgroundColor: '#ffffffe7' }}>
                                            <li className="">
                                                <Link to="/about/faculty/sri-kiran" className='text-decoration-none'>
                                                    <a className="dropdown-item text-black-50 lh-lg" >
                                                        Sri Kiran
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/about/faculty/sri-chakradhar" className='text-decoration-none'>
                                                    <a className="dropdown-item text-black-50 lh-lg" >
                                                        Sri Chakradhar
                                                    </a>
                                                </Link>
                                            </li>

                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            < li className="nav-item dropdown-center" >
                                <Link to="/" className='text-decoration-none'>
                                    <a className="nav-link text-black-50 position-relative text-uppercase" aria-expanded="true">
                                        Immediate{''}
                                        <span>
                                            <i className="fa fa-angle-down ms-1 drop-icon fw-bold" data-bs-toggle="dropdown" style={{ color: '#5AADDD', }} aria-hidden="true"></i>
                                        </span>
                                    </a>
                                </Link>
                                <ul className="dropdown-menu  rounded-0 shadow border-0" style={{ backgroundColor: '#ffffffe7' }}>
                                    <li className="">
                                        <Link to="/becomehealer" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50  lh-lg">
                                               Become Healer
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="/chakradanya" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50 lh-lg" >
                                            Chakradanya
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="/divinemedicine" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50  lh-lg" >
                                            DivineMedicine
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="/healingrequest" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50  lh-lg" >
                                               HealingRequest
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="/joinsahayak" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50 lh-lg" >
                                               JoinSahayak
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="/kalashapuja" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50 lh-lg" >
                                               Kalashapuja
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="/personalcounselling" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50 lh-lg" >
                                            PersonalCounselling
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="/prayerrequest" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50 lh-lg" >
                                              PrayerRequest
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="/sahsayataprayer" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50 lh-lg" >
                                             SahayataPrayer
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="/sarvadukha" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50 lh-lg" >
                                             SarvaDukha
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="/shareexperience" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50 lh-lg" >
                                               ShareExperience
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="/soundaryalahiri" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50 lh-lg" >
                                             SoundaryaLahiri
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            < li className="nav-item dropdown-center" >
                                <Link to="/" className='text-decoration-none'>
                                    <a className="nav-link text-black-50 position-relative text-uppercase" aria-expanded="true">
                                        Workshop{''}
                                        <span>
                                            <i className="fa fa-angle-down ms-1 drop-icon fw-bold" data-bs-toggle="dropdown" style={{ color: '#5AADDD', }} aria-hidden="true"></i>
                                        </span>
                                    </a>
                                </Link>
                                <ul className="dropdown-menu  rounded-0 shadow border-0" style={{ backgroundColor: '#ffffffe7' }}>
                                    <li className="">
                                        <Link to="/NPI" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50  lh-lg">
                                                New Product Introduction
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="/PCB" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50 lh-lg" >
                                                PCB Assembly & Box Build
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="/EMF" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50  lh-lg" >
                                                Electronic Manufacturing
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="/ProductTesting" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50  lh-lg" >
                                                Product Testing
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="AfterSales" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50 lh-lg" >
                                                After Sales & Warranty
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            < li className="nav-item dropdown-center" >
                                <Link to="/" className='text-decoration-none'>
                                    <a className="nav-link text-black-50 position-relative text-uppercase" aria-expanded="true">
                                        Media{''}
                                        <span>
                                            <i className="fa fa-angle-down ms-1 drop-icon fw-bold" data-bs-toggle="dropdown" style={{ color: '#5AADDD', }} aria-hidden="true"></i>
                                        </span>
                                    </a>
                                </Link>
                                <ul className="dropdown-menu rounded-0 shadow border-0" style={{ backgroundColor: '#ffffffe7' }}>
                                    <li className="">
                                        <Link to="/downloads" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50  lh-lg">
                                                Downloads
                                            </a>
                                        </Link>
                                    </li>
                                    < li className="nav-item dropdown-center" >
                                        <Link to="/" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50 lh-lg" aria-expanded="true">
                                                Press Release{''}
                                                <span>
                                                    <i className="fa fa-angle-left ms-1 drop-icon fw-bold" data-bs-toggle="dropdown" style={{ color: '#5AADDD', }} aria-hidden="true"></i>
                                                </span>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu rounded-0 shadow border-0 " style={{ backgroundColor: '#ffffffe7' }}>
                                            <li className="">
                                                <Link to="/introduction" className='text-decoration-none'>
                                                    <a className="dropdown-item text-black-50  lh-lg">
                                                        Introduction
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/launch" className='text-decoration-none'>
                                                    <a className="dropdown-item text-black-50 lh-lg" >
                                                        Launch of Website
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/vardaan" className='text-decoration-none'>
                                                    <a className="dropdown-item text-black-50 lh-lg" >
                                                        Vardaan Course
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/inauguration" className='text-decoration-none'>
                                                    <a className="dropdown-item text-black-50 lh-lg" >
                                                        Inauguration
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                </ul>
                            </li>

                            < li className="nav-item dropdown-center" >
                                <Link to="/" className='text-decoration-none'>
                                    <a className="nav-link text-black-50 position-relative text-uppercase" aria-expanded="true">
                                        Gallery{''}
                                        <span>
                                            <i className="fa fa-angle-down ms-1 drop-icon fw-bold" data-bs-toggle="dropdown" style={{ color: '#5AADDD', }} aria-hidden="true"></i>
                                        </span>
                                    </a>
                                </Link>
                                <ul className="dropdown-menu  rounded-0 shadow border-0" style={{ backgroundColor: '#ffffffe7' }}>
                                    <li className="">
                                        <Link to="/NPI" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50  lh-lg">
                                                New Product Introduction
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="/PCB" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50 lh-lg" >
                                                PCB Assembly & Box Build
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="/EMF" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50  lh-lg" >
                                                Electronic Manufacturing
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="/ProductTesting" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50  lh-lg" >
                                                Product Testing
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="AfterSales" className='text-decoration-none'>
                                            <a className="dropdown-item text-black-50 lh-lg" >
                                                After Sales & Warranty
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link to="/donate" className='text-decoration-none'>
                                    <a className="nav-link  text-black-50 text-uppercase">
                                        Donate
                                    </a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/contact" className='text-decoration-none'>
                                    <a className="nav-link  text-black-50 text-uppercase">
                                        Contact Us
                                    </a>
                                </Link>
                            </li>

                        </ul>

                    </div>

                </div>

            </nav>

        </div>
    );
}

export default Header;
