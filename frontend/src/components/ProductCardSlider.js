import React from 'react';

import Carousel from 'react-grid-carousel'
import {
    MDBContainer,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBBtn,
    MDBRipple,
    MDBCardTitle,
    MDBCardText,
} from 'mdb-react-ui-kit';
import './ProductSlider.css'


const ProductCardSlider = () => {
    return (
        <div className="slider">
            <Carousel cols={6} rows={1} gap={10} loop>
                <Carousel.Item>
                    <MDBCard alignment='center' className='mdbcard'>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-zoom '>
                            <MDBCardImage src='https://www.backend.decasys.in/1710493367771-1.jpg' className='w-50 img-center p-2' fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle alignment="left" className='text-small-muted'>Celtic Sea Salt Fine Ground, 1 lb (454 g)Resealable Bag, Gluten Free
                            </MDBCardTitle>
                            <MDBCardText>

                                <p className="d-flex flex-row justify-content-center  mt-3 text-warning">
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true">

                                    </i>(4.0)
                                </p>
                                <div className="item-price">
                                    Rs. 4620
                                </div>
                            </MDBCardText>

                            <MDBBtn href='#' color='success'>Add to Cart</MDBBtn>

                        </MDBCardBody>
                    </MDBCard>
                </Carousel.Item>
                <Carousel.Item>
                    <MDBCard alignment='center' className='mdbcard'>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-zoom '>
                            <MDBCardImage src='https://www.backend.decasys.in/1710493998360-DSC_3535.JPG' alignment='center' className='w-50 img-center p-2' fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle alignment="left" className='text-small-muted'>Celtic Sea Salt, Light Grey Celtic, 16 Ounce (454 Gram) 1 Bag
                            </MDBCardTitle>
                            <MDBCardText>

                                <p className="d-flex flex-row justify-content-center  mt-3 text-warning">
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true">

                                    </i>(4.0)
                                </p>
                                <div className="item-price">
                                    Rs. 4620
                                </div>
                            </MDBCardText>

                            <MDBBtn href='#' color='success'>Add to Cart</MDBBtn>

                        </MDBCardBody>
                    </MDBCard>
                </Carousel.Item><Carousel.Item>
                    <MDBCard alignment='center' className='mdbcard'>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image  hover-zoom '>
                            <MDBCardImage src='https://www.backend.decasys.in/1710494227383-1.jpg' className='w-50 img-center p-2' fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle alignment="left" className='text-small-muted'>Y.S. Eco Bee Farms, 100% Certified Organic Raw Honey, 226 G (8.0 Oz)
                            </MDBCardTitle>
                            <MDBCardText>

                                <p className="d-flex flex-row justify-content-center  mt-3 text-warning">
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true">

                                    </i>(4.0)
                                </p>
                                <div className="item-price">
                                    Rs. 0
                                </div>
                            </MDBCardText>

                            <MDBBtn href='#' color='success'>Add to Cart</MDBBtn>

                        </MDBCardBody>
                    </MDBCard>
                </Carousel.Item>
                <Carousel.Item>
                    <MDBCard alignment='center' className='mdbcard'>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-zoom '>
                            <MDBCardImage src='https://www.backend.decasys.in/1710494443254-DSC_2539_1.jpg' alignment='center' className='w-50 img-center p-2' fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle alignment="left" className='text-small-muted'>
                                Y.S. Eco Bee Farms, 100% Certified Organic Raw Honey (454 gm) 1 lb.
                            </MDBCardTitle>
                            <MDBCardText>

                                <p className="d-flex flex-row justify-content-center  mt-3 text-warning">
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true">

                                    </i>(4.0)
                                </p>
                                <div className="item-price">
                                    Rs. 0
                                </div>
                            </MDBCardText>

                            <MDBBtn href='#' color='success'>Add to Cart</MDBBtn>

                        </MDBCardBody>
                    </MDBCard>
                </Carousel.Item><Carousel.Item>
                    <MDBCard alignment='center' className='mdbcard'>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-zoom '>
                            <MDBCardImage src='https://www.backend.decasys.in/1710494651227-1%20(1).jpg' alignment='center' className='w-50 img-center p-2' fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle alignment="left" className='text-small-muted'>Y.S. Eco Bee Farms, Raw Honey, 3.0 lbs (1,360 g)
                            </MDBCardTitle>
                            <MDBCardText>

                                <p className="d-flex flex-row justify-content-center  mt-3 text-warning">
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true">

                                    </i>(4.0)
                                </p>
                                <div className="item-price">
                                    Rs. 0
                                </div>
                            </MDBCardText>

                            <MDBBtn href='#' color='success'>Add to Cart</MDBBtn>

                        </MDBCardBody>
                    </MDBCard>
                </Carousel.Item>
                <Carousel.Item>
                    <MDBCard alignment='center' className='mdbcard'>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-zoom '>
                            <MDBCardImage src='https://www.backend.decasys.in/1710494922244-Raw%20Honey,%20lbs%20907%20g-1.jpg' alignment='center' className='w-50 img-center p-2' fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle alignment="left" className='text-small-muted'>Y.S. Eco Bee Farms, 100% Certified Organic Raw Honey, 2.0 lbs (907 g)
                            </MDBCardTitle>
                            <MDBCardText>

                                <p className="d-flex flex-row justify-content-center  mt-3 text-warning">
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true">

                                    </i>(4.0)
                                </p>
                                <div className="item-price">
                                    Rs. 0
                                </div>
                            </MDBCardText>

                            <MDBBtn href='#' color='success'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </Carousel.Item>
                <Carousel.Item>
                    <MDBCard alignment='center' className='mdbcard'>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-zoom '>
                            <MDBCardImage src='https://www.backend.decasys.in/1710495046198-Y.S.%20Eco%20Bee%20Farms,%20Raw%20Honey,%208.0%20oz%20(226%20g).jpg' alignment='center' className='w-50 img-center p-2' fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle alignment="left" className='text-small-muted'>
                                Y.S. Eco Bee Farms, 100% Certified Organic Raw Honey, 226 G (8.0 Oz)
                            </MDBCardTitle>
                            <MDBCardText>

                                <p className="d-flex flex-row justify-content-center  mt-3 text-warning">
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true">

                                    </i>(4.0)
                                </p>
                                <div className="item-price">
                                    Rs. 0
                                </div>
                            </MDBCardText>

                            <MDBBtn href='#' color='success'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </Carousel.Item><Carousel.Item>
                    <MDBCard alignment='center' className='mdbcard'>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-zoom '>
                            <MDBCardImage src='https://www.backend.decasys.in/1710495220457-ys%20honey%2014oz%20396g.jpg' alignment='center' className='w-50 img-center p-2' fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle alignment="left" className='text-small-muted'>Y.S. Eco Bee Farms, Raw Honey, 14.0 oz (396 g)
                            </MDBCardTitle>
                            <MDBCardText>

                                <p className="d-flex flex-row justify-content-center  mt-3 text-warning">
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true">

                                    </i>(4.0)
                                </p>
                                <div className="item-price">
                                    Rs. 0
                                </div>
                            </MDBCardText>

                            <MDBBtn href='#' color='success'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </Carousel.Item><Carousel.Item>
                    <MDBCard alignment='center' className='mdbcard'>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-zoom '>
                            <MDBCardImage src='https://www.backend.decasys.in/1710495287409-DSC_3531.JPG' alignment='center' className='w-50 img-center p-2' fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle alignment="left" className='text-small-muted'>Y.S. Eco Bee Farms, Raw Honey, 22.0 oz (623 g)

                            </MDBCardTitle>
                            <MDBCardText>

                                <p className="d-flex flex-row justify-content-center  mt-3 text-warning">
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true">

                                    </i>(4.0)
                                </p>
                                <div className="item-price">
                                    Rs. 0
                                </div>
                            </MDBCardText>

                            <MDBBtn href='#' color='success'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </Carousel.Item>
                {/* ... */}

                <Carousel.Item>
                    <MDBCard alignment='center' className='mdbcard'>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-zoom '>
                            <MDBCardImage src='https://www.backend.decasys.in/1710493367771-1.jpg' alignment='center' className='w-50 img-center p-2' fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle alignment="left" className='text-small-muted'>Celtic Sea Salt Fine Ground, 1 lb (454 g)Resealable Bag, Gluten Free
                            </MDBCardTitle>
                            <MDBCardText>

                                <p className="d-flex flex-row justify-content-center  mt-3 text-warning">
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true">

                                    </i>(4.0)
                                </p>
                                <div className="item-price">
                                    Rs. 4620
                                </div>
                            </MDBCardText>

                            <MDBBtn href='#' color='success'>Add to Cart</MDBBtn>

                        </MDBCardBody>
                    </MDBCard>
                </Carousel.Item>
                <Carousel.Item>
                    <MDBCard alignment='center' className='mdbcard'>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-zoom '>
                            <MDBCardImage src='https://www.backend.decasys.in/1710493998360-DSC_3535.JPG' alignment='center' className='w-50 img-center p-2' fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle alignment="left" className='text-small-muted'>Celtic Sea Salt, Light Grey Celtic, 16 Ounce (454 Gram) 1 Bag
                            </MDBCardTitle>
                            <MDBCardText>

                                <p className="d-flex flex-row justify-content-center  mt-3 text-warning">
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true">

                                    </i>(4.0)
                                </p>
                                <div className="item-price">
                                    Rs. 4620
                                </div>
                            </MDBCardText>

                            <MDBBtn href='#' color='success'>Add to Cart</MDBBtn>

                        </MDBCardBody>
                    </MDBCard>
                </Carousel.Item><Carousel.Item>
                    <MDBCard alignment='center' className='mdbcard'>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image  hover-zoom '>
                            <MDBCardImage src='https://www.backend.decasys.in/1710494227383-1.jpg' className='w-50 img-center p-2' fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle alignment="left" className='text-small-muted'>Y.S. Eco Bee Farms, 100% Certified Organic Raw Honey, 226 G (8.0 Oz)
                            </MDBCardTitle>
                            <MDBCardText>

                                <p className="d-flex flex-row justify-content-center  mt-3 text-warning">
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true">

                                    </i>(4.0)
                                </p>
                                <div className="item-price">
                                    Rs. 0
                                </div>
                            </MDBCardText>

                            <MDBBtn href='#' color='success'>Add to Cart</MDBBtn>

                        </MDBCardBody>
                    </MDBCard>
                </Carousel.Item>
                <Carousel.Item>
                    <MDBCard alignment='center' className='mdbcard'>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-zoom '>
                            <MDBCardImage src='https://www.backend.decasys.in/1710494443254-DSC_2539_1.jpg' alignment='center' className='w-50 img-center p-2' fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle alignment="left" className='text-small-muted'>
                                Y.S. Eco Bee Farms, 100% Certified Organic Raw Honey (454 gm) 1 lb.
                            </MDBCardTitle>
                            <MDBCardText>

                                <p className="d-flex flex-row justify-content-center  mt-3 text-warning">
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true">

                                    </i>(4.0)
                                </p>
                                <div className="item-price">
                                    Rs. 0
                                </div>
                            </MDBCardText>

                            <MDBBtn href='#' color='success'>Add to Cart</MDBBtn>

                        </MDBCardBody>
                    </MDBCard>
                </Carousel.Item><Carousel.Item>
                    <MDBCard alignment='center' className='mdbcard'>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-zoom '>
                            <MDBCardImage src='https://www.backend.decasys.in/1710494651227-1%20(1).jpg' alignment='center' className='w-50 img-center p-2' fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle alignment="left" className='text-small-muted'>Y.S. Eco Bee Farms, Raw Honey, 3.0 lbs (1,360 g)
                            </MDBCardTitle>
                            <MDBCardText>

                                <p className="d-flex flex-row justify-content-center  mt-3 text-warning">
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true">

                                    </i>(4.0)
                                </p>
                                <div className="item-price">
                                    Rs. 0
                                </div>
                            </MDBCardText>

                            <MDBBtn href='#' color='success'>Add to Cart</MDBBtn>

                        </MDBCardBody>
                    </MDBCard>
                </Carousel.Item>
                <Carousel.Item>
                    <MDBCard alignment='center' className='mdbcard'>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-zoom '>
                            <MDBCardImage src='https://www.backend.decasys.in/1710494922244-Raw%20Honey,%20lbs%20907%20g-1.jpg' alignment='center' className='w-50 img-center p-2' fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle alignment="left" className='text-small-muted'>Y.S. Eco Bee Farms, 100% Certified Organic Raw Honey, 2.0 lbs (907 g)
                            </MDBCardTitle>
                            <MDBCardText>

                                <p className="d-flex flex-row justify-content-center  mt-3 text-warning">
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true">

                                    </i>(4.0)
                                </p>
                                <div className="item-price">
                                    Rs. 0
                                </div>
                            </MDBCardText>

                            <MDBBtn href='#' color='success'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </Carousel.Item>
                <Carousel.Item>
                    <MDBCard alignment='center' className='mdbcard'>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-zoom '>
                            <MDBCardImage src='https://www.backend.decasys.in/1710495046198-Y.S.%20Eco%20Bee%20Farms,%20Raw%20Honey,%208.0%20oz%20(226%20g).jpg' alignment='center' className='w-50 img-center p-2' fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle alignment="left" className='text-small-muted'>
                                Y.S. Eco Bee Farms, 100% Certified Organic Raw Honey, 226 G (8.0 Oz)
                            </MDBCardTitle>
                            <MDBCardText>

                                <p className="d-flex flex-row justify-content-center  mt-3 text-warning">
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true">

                                    </i>(4.0)
                                </p>
                                <div className="item-price">
                                    Rs. 0
                                </div>
                            </MDBCardText>

                            <MDBBtn href='#' color='success'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </Carousel.Item><Carousel.Item>
                    <MDBCard alignment='center' className='mdbcard'>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-zoom '>
                            <MDBCardImage src='https://www.backend.decasys.in/1710495220457-ys%20honey%2014oz%20396g.jpg' alignment='center' className='w-50 img-center p-2' fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle alignment="left" className='text-small-muted'>Y.S. Eco Bee Farms, Raw Honey, 14.0 oz (396 g)
                            </MDBCardTitle>
                            <MDBCardText>

                                <p className="d-flex flex-row justify-content-center  mt-3 text-warning">
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true">

                                    </i>(4.0)
                                </p>
                                <div className="item-price">
                                    Rs. 0
                                </div>
                            </MDBCardText>

                            <MDBBtn href='#' color='success'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </Carousel.Item>
                <Carousel.Item>
                    <MDBCard alignment='center' className='mdbcard'>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-zoom '>
                            <MDBCardImage src='https://www.backend.decasys.in/1710495287409-DSC_3531.JPG' alignment='center' className='w-50 img-center p-2' fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle alignment="left" className='text-small-muted'>Y.S. Eco Bee Farms, Raw Honey, 22.0 oz (623 g)

                            </MDBCardTitle>
                            <MDBCardText>

                                <p className="d-flex flex-row justify-content-center  mt-3 text-warning">
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true">

                                    </i>(4.0)
                                </p>
                                <div className="item-price">
                                    Rs. 0
                                </div>
                            </MDBCardText>

                            <MDBBtn href='#' color='success'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </Carousel.Item>

            </Carousel></div>

    )
}

export default ProductCardSlider;
