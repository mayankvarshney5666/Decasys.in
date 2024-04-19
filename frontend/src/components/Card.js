import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCol,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
// import products from "../assets/db/products";

// const product = products;
const Card = (props) => {
  return (
    <>
      <MDBContainer fluid className="my-1 brands-products ">
        <MDBRow>
          <MDBCol md="10" lg="3" className="mb-1">
            <MDBCard key={props.id}>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom text-center"
              >
                <MDBCardImage
                  src={props.img}
                  alt='product-img here'
                  fluid
                  className="w-50"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start  align-items-end h-100">
                      <h5>
                        <span className="badge bg-primary ms-1">{props.badge}</span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-1 text-small-muted">
                    {props.name}
                  </h5>
                </a>
                <a href="#!" className=" ">
                  <p className="d-flex flex-row justify-content-start  mt-2 text-warning">
                    <i className="fas fa-star" ></i>
                    <i className="fas fa-star" aria-hidden="true"></i>
                    <i className="fas fa-star" aria-hidden="true"></i>
                    <i className="fas fa-star" aria-hidden="true"></i>
                    {props.rating}
                  </p>
                </a>
                <h6 className="mb-1 mt_1" >{props.weight}</h6>
                <h6 className="mb-1 text-success " >Rs. {props.price}.0</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};



export default Card;
