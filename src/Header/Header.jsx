import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <div className='header_top'>
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

            <nav className="navbar navbar-expand-lg bg-white sticky-top shadow">
                <div className="container">
                    <a className="navbar-brand ps-3 me-auto" href="index.html">
                        <img src="logo-medium.png" alt="Logo" height="80px" />
                    </a>

                    <div className="collapse navbar-collapse bg-white px-3" id="navbarText">
                        <ul className="navbar-nav position-relative mx-auto mb-2 mb-lg-0 gap-0 gap-xxl-3">
                            <li className="nav-item">
                                <Link to="/" className='text-decoration-none'>
                                    <a className="nav-link  text-black-50">
                                        Home
                                    </a>
                                </Link>
                            </li>

                            < li className="nav-item dropdown-center " >
                                <Link to="/about" className='text-decoration-none'>
                                    <a className="nav-link text-black-50 position-relative" aria-expanded="true">
                                        About{''}
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
                                <Link to="/immediate" className='text-decoration-none'>
                                    <a className="nav-link text-black-50 position-relative" aria-expanded="true">
                                        Immediate{''}
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
                                <Link to="/workshops" className='text-decoration-none'>
                                    <a className="nav-link text-black-50 position-relative" aria-expanded="true">
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
                                <Link to="/media" className='text-decoration-none'>
                                    <a className="nav-link text-black-50 position-relative" aria-expanded="true">
                                        Media{''}
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
                                <Link to="/gallery" className='text-decoration-none'>
                                    <a className="nav-link text-black-50 position-relative" aria-expanded="true">
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
                                    <a className="nav-link  text-black-50">
                                        Donate
                                    </a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/contact" className='text-decoration-none'>
                                    <a className="nav-link  text-black-50">
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
