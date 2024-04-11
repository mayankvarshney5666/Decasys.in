import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
// import './ContactForm.css';
import './Styles.css';

const Navbar = () => {
    const [openBasic, setOpenBasic] = useState(false);

    return (
        <>
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-4 col-lg-4">
                            <div className="header-offer">
                                <div className="notification-slider">
                                    <div>
                                    </div>
                                    <div>
                                        <div className="timer-notification">
                                            <h6><a className="btn-t-1 text-black" href="/categorylist">
                                                FREE Shipping on orders over 5000 inr.
                                            </a></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-lg-4">
                            <div className="header-offer">
                                <div className="notification-slider">
                                    <div></div><div>
                                        <div className="timer-notification">
                                            <h6><a className="btn-t-2 text-black" href="/categorylist">
                                                200 inr. will be the Shipping charges below orders under 5000 inr.
                                            </a></h6>
                                        </div></div></div>
                            </div></div>
                        <div className="col-xxl-4 col-lg-4">
                            <div className="header-offer">
                                <div className="notification-slider">
                                    <div className="timer-notification">
                                        <h6><a className="btn-t-3 text-black" href="/categorylist">
                                            All orders will be shipped within 3 working days from the day of orders placed.
                                        </a></h6>
                                    </div></div></div></div></div></div>
            </div>

            <div className="sticky-top">
                <MDBNavbar expand='lg' light bgColor='light' >
                    <MDBContainer fluid className='my-2'>
                        <MDBNavbarBrand href='/home' className='mx-4 header-img'>
                            decasys
                            {/* <img src="https://www.decasys.in/images/logo/1.png" alt="img here" /> */}
                        </MDBNavbarBrand>

                        <MDBNavbarToggler
                            aria-controls='navbarSupportedContent'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                            onClick={() => setOpenBasic(!openBasic)}
                            className='mx-3'
                        >
                            <MDBIcon icon='bars' fas />
                        </MDBNavbarToggler>

                        <MDBCollapse navbar className='mx-5' open={openBasic}>
                            <MDBNavbarNav className='mr-auto mb-2 mx-5 mb-lg-0'>
                                <MDBNavbarItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle tag='a' className='nav-link active' role='button' >
                                            Shop By Category
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <MDBDropdownItem>
                                                <MDBDropdownItem link href="#">Salt &raquo;</MDBDropdownItem>
                                                <ul className="dropdown-menu dropdown-submenu">
                                                    <MDBDropdownItem>
                                                        <MDBDropdownItem link href="#">Sea Salt</MDBDropdownItem>
                                                    </MDBDropdownItem>
                                                    <MDBDropdownItem>
                                                        <MDBDropdownItem link href="#">Pink Himalayan salt</MDBDropdownItem>
                                                    </MDBDropdownItem>
                                                </ul>
                                            </MDBDropdownItem>

                                            <MDBDropdownItem>
                                                <MDBDropdownItem link href="#">Honey &raquo;
                                                </MDBDropdownItem>
                                                <ul className="dropdown-menu dropdown-submenu">
                                                    <MDBDropdownItem>
                                                        <MDBDropdownItem link href="#">Orgainic Honey</MDBDropdownItem>
                                                    </MDBDropdownItem>
                                                    <MDBDropdownItem>
                                                        <MDBDropdownItem link href="#">Raw Honey</MDBDropdownItem>
                                                    </MDBDropdownItem>
                                                    <MDBDropdownItem>
                                                        <MDBDropdownItem link
                                                            href="#">Manuka Honey</MDBDropdownItem>
                                                    </MDBDropdownItem>
                                                </ul>
                                            </MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle tag='a' className='nav-link active' role='button'>
                                            Brand
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <MDBDropdownItem link>Celtic sea salt
                                            </MDBDropdownItem>
                                            <MDBDropdownItem link>
                                                le Guerandais sea salt
                                            </MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavbarItem>


                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#' className='active'>Help</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/contact-us' className='active'>Contact Us</MDBNavbarLink>
                                </MDBNavbarItem>
                            </MDBNavbarNav>

                            <form className='d-flex input-group w-auto mx-5'>
                                <input type='search' className='form-control' placeholder="Searching for..." aria-label='Search' />
                                <MDBBtn color='danger'><MDBIcon fas icon="search" /></MDBBtn>
                            </form>

                            <MDBDropdown className='mx-4'>
                                <MDBDropdownToggle color='success' link > <MDBIcon far icon="user" className='mx-1' />Sign in</MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>Log in</MDBDropdownItem>
                                    <MDBDropdownItem link>Register</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>

                            <MDBIcon far icon="heart" className='mx-3' />
                            <MDBIcon fas icon="shopping-basket" className='mx-3' />

                        </MDBCollapse>
                    </MDBContainer >
                </MDBNavbar ></div>
        </ >
    );
}
export default Navbar;