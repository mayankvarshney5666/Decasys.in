import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

export default function Carousel() {
    return (
        <MDBCarousel showControls showIndicators className=''>
            <MDBCarouselItem itemId={1} className='h-60'>
                <img src='https://www.backend.decasys.in/1710913674539-Desktop%201.png' className='d-block w-100 h-60' alt='...' />
                {/* <MDBCarouselCaption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </MDBCarouselCaption> */}
            </MDBCarouselItem>
            <MDBCarouselItem itemId={2}>
                <img src='https://www.backend.decasys.in/1710913691506-Desktop%202.png' className='d-block w-100' alt='...' />

                {/* <MDBCarouselCaption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </MDBCarouselCaption> */}
            </MDBCarouselItem>
            <MDBCarouselItem itemId={3}>
                <img src='https://www.backend.decasys.in/1711601185734-Cealtic%20salt%20post%20Desktop.png' className='d-block w-100' alt='...' />
                {/* <MDBCarouselCaption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </MDBCarouselCaption> */}
            </MDBCarouselItem>
        </MDBCarousel>
    );
}