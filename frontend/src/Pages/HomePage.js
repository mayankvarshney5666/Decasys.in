import React from "react";
import Carousel from "../components/Carousel";
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import ProductSlider from "../components/ProductSlider";
import '../components/Styles.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="img-banner-head">
                <img src="https://www.decasys.in/images/vegetable/banner/banner-head.jpg" className="img-fluid" alt="img here" />
            </div>
            <Carousel />
            <ProductSlider />
            <center>
                <div className="img-container ripple">
                    <a href="javascript:void(0)">
                        <img src="https://www.backend.decasys.in/1711601185734-Cealtic%20salt%20post%20Desktop.png" alt="Large Image Here" className="img-contain" />
                    </a>
                </div>

                <div className="newsletter-contain py-5 h-65">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-4 col-lg-5 col-md-7 col-sm-9 offset-xxl-2 offset-md-1">
                                <div className="newsletter-detail">
                                    <h2>Join Our Newsletter And Get...</h2>
                                    <h5 className="inr-200">200 inr. discount for your first order</h5>
                                    <div className="input-box">
                                        <table>
                                            <tr>
                                                <td>

                                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
                                                </td>
                                                <td>
                                                    <i className="fa-solid fa-envelope arrow" id='email-icon'></i>

                                                </td>
                                                <td>
                                                    <table className="btn-subscribe">
                                                        <MDBBtn color='success' className="mx-">
                                                            <tr>
                                                                <td>Subscribe</td>
                                                                <td> <MDBIcon className="mx-1" fas icon="long-arrow-alt-right" />
                                                                </td>
                                                            </tr>
                                                        </MDBBtn>
                                                    </table>

                                                </td>
                                            </tr>
                                        </table>
                                        <button className="sub-btn btn text-white theme-bg-color">
                                            {/* <span className="d-sm-block d-none">Subscribe</span>
                                            <i className="fa-solid fa-arrow-right icon"></i> */}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div>

            </center>
        </div>
    )
}
export default HomePage;

