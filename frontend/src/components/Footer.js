import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css';

const Footer = () => {
    return (
        <MDBFooter bgColor='light' className='text-center my-4 text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    &copy; 2024 Decasys All rights reserved
                </div>

                <div className="img-fluid">
                    <img src="https://www.decasys.in/images/payment/1.png" alt="img here" />
                </div>

                <div>
                    <span>Stay connected : </span>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='facebook-f' />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='twitter' />
                    </a>

                    <a href='' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='instagram' />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='pinterest' />
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <h6 className='text-lowercase fw-bold mb-4'>
                                <MDBIcon className='me-5' />
                                decasys                            </h6>

                            <p>
                                <MDBIcon fas icon="map-marker-alt" className='me-2' />151-A, Pocket-E, LIG Flats, GTB Enclave, Nand Nagri, Delhi-110093 INDIA

                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='envelope' className='me-2' />
                                decasys@yahoo.co.in
                            </p>
                        </MDBCol>
                        <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    About Us                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Contact Us                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Return And Refund                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Shipping Policy
                                </a>
                            </p><p>
                                <a href='#!' className='text-reset'>
                                    Privacy Policy
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Terms And Conditions
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Terms Of Use                                </a>
                            </p>
                        </MDBCol>
                        <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Products
                            </h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Sea salt
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Pink Himalayan salt
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Organic honey
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Raw honey
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Manuka honey
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    FAQ
                                </a>
                            </p>
                        </MDBCol>



                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon color='secondary' icon='phone' className='me-1' />
                                Hotline 24/7 :
                                <br />
                                +91 991 107 0099
                            </p>
                            <hr className='' />
                            <p>
                                <MDBIcon color='secondary' icon='envelope' className='me-1' />Email Address :
                                <br />
                                decasys@yahoo.co.in
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <hr />
            <div className='footer-disclaimer'>

                <b>*Disclaimer:</b> Products sold through this page are not intended to diagnose, treat, cure or prevent any disease. Product packaging and materials may contain more and different information than that shown on our website. We recommend that you do not solely rely on the information presented here and that you always read labels, warnings and instructions before using or consuming a product.

            </div>

            <hr />
            <section className='d-flex justify-content-center justify-content-lg-between p-4 mx-5 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    &copy; 2024 Decasys All rights reserved
                </div>

                <div className="img-fluid">
                    <img src="https://www.decasys.in/images/payment/1.png" alt="img here" />
                </div>

                <div>
                    <span>Stay connected : </span>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='facebook-f' />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='twitter' />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='instagram' />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='pinterest' />
                    </a>
                </div>
            </section>

            {/* <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2021 Copyright:
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                    MDBootstrap.com
                </a>
            </div> */}
        </MDBFooter>
    );
}

export default Footer;