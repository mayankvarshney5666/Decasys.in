// import Card from "../../components/Card";
import "./Product.css";
import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCol,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";

const Products = () => {
  return (
    <>
      {/* {Card(result)} */}



      <MDBContainer fluid className="my-1 brands-products ">
        <MDBRow>
          <MDBCol md="10" lg="3" className="mb-1 product-card">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom text-center"
              >
                <MDBCardImage
                  src='https://www.backend.decasys.in/1710493367771-1.jpg'
                  fluid
                  className="w-50 image-card"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start  align-items-end h-10">
                      <h5>
                        <span className="badge bg-primary ms-1">New</span>
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
                  <h5 className="card-title mb-1 text-small-muted">Celtic Sea Salt Fine Ground, 1lb(454g...</h5>
                </a>
                <a href="#!" className=" ">
                  <p className="d-flex flex-row justify-content-start  mt-2 text-warning">
                    <i className="fas fa-star" ></i>
                    <i className="fas fa-star" aria-hidden="true"></i>
                    <i className="fas fa-star" aria-hidden="true"></i>
                    <i className="fas fa-star" aria-hidden="true"></i>(4.0)
                  </p>
                </a>
                <h6 className="mb-1 mt_1" >454 g</h6>
                <h6 className="mb-1 text-success " >Rs. 4620.0</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="10" lg="3" className="mb-1">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom text-center"
              >
                <MDBCardImage
                  src='https://www.backend.decasys.in/1710493998360-DSC_3535.JPG'
                  fluid
                  className="w-50"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start  align-items-end h-100">
                      <h5>
                        <span className="badge bg-dark ms-1">Cheap</span>
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
                  <h5 className="card-title mb-1 text-small-muted">Celtic Sea Salt, Light Grey Celtic... </h5>
                </a>
                <a href="#!" className=" ">
                  <p className="d-flex flex-row justify-content-start  mt-2 text-warning">
                    <i className="fas fa-star" ></i>
                    <i className="fas fa-star" aria-hidden="true"></i>
                    <i className="fas fa-star" aria-hidden="true"></i>(3.0)
                  </p>
                </a>
                <h6 className="mb-1 mt_1" >454 g</h6>
                <h6 className="mb-1 text-success " >Rs. 4620.0</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="10" lg="3" className="mb-1">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom text-center"
              >
                <MDBCardImage
                  src='https://www.backend.decasys.in/1710494227383-1.jpg'
                  fluid
                  className="w-50"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start  align-items-end h-100">
                      <h5>
                        <span className="badge bg-danger ms-1">-15%</span>
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
                    Y.S. Eco Bee Farms, 100% Certified Organic Raw</h5>
                </a>
                <a href="#!" className=" ">
                  <p className="d-flex flex-row justify-content-start  mt-2 text-warning">
                    <i className="fas fa-star" ></i>
                    <i className="fas fa-star" aria-hidden="true"></i>
                    <i className="fas fa-star" aria-hidden="true"></i>(3.0)
                  </p>
                </a>
                <h6 className="mb-1 mt_1" >226 g</h6>
                <h6 className="mb-1 text-success " >Rs. 0.0</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol><MDBCol md="10" lg="3" className="mb-1">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom text-center"
              >
                <MDBCardImage
                  src='https://www.backend.decasys.in/1710494443254-DSC_2539_1.jpg'
                  fluid
                  className="w-50"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start  align-items-end h-100">
                      <h5>
                        <span className="badge bg-success ms-1">Organic</span>
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
                    Y.S. Eco Bee Farms, 100% Certified Organic Raw...</h5>
                </a>
                <a href="#!" className=" ">
                  <p className="d-flex flex-row justify-content-start  mt-2 text-warning">
                    <i className="fas fa-star" ></i>
                    <i className="fas fa-star" aria-hidden="true"></i>
                    <i className="fas fa-star" aria-hidden="true"></i>(3.0)
                  </p>
                </a>
                <h6 className="mb-1 mt_1" >454 g</h6>
                <h6 className="mb-1 text-success " >Rs. 0.0</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>


        <MDBRow>
          <MDBCol md="10" lg="3" className="mb-1">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom text-center"
              >
                <MDBCardImage
                  src='https://www.backend.decasys.in/1710494651227-1%20(1).jpg'
                  fluid
                  className="w-50"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start  align-items-end h-100">
                      <h5>
                        <span className="badge bg-dark ms-1">Cheap</span>
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
                  <h5 className="card-title mb-1 text-small-muted">Y.S. Eco Bee Farms, Raw Honey, 3.0 lbs (1,360 g)...</h5>
                </a>
                <a href="#!" className=" ">
                  <p className="d-flex flex-row justify-content-start  mt-2 text-warning">
                    <i className="fas fa-star" ></i>
                    <i className="fas fa-star" aria-hidden="true"></i>
                    <i className="fas fa-star" aria-hidden="true"></i>
                    <i className="fas fa-star" aria-hidden="true"></i>
                    <i className="fas fa-star" aria-hidden="true"></i>(5.0)
                  </p>
                </a>
                <h6 className="mb-1 mt_1" >1360 g</h6>
                <h6 className="mb-1 text-success " >Rs. 0000.0</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="10" lg="3" className="mb-1">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom text-center"
              >
                <MDBCardImage
                  src='https://www.backend.decasys.in/1710494922244-Raw%20Honey,%20lbs%20907%20g-1.jpg'
                  fluid
                  className="w-50"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start  align-items-end h-100">
                      <h5>
                        <span className="badge bg-primary ms-1">New</span>
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
                  <h5 className="card-title mb-1 text-small-muted">Y.S. Eco Bee Farms, 100% Certified Organic Raw Honey, 2.0 lbs (907 g)
                    ... </h5>
                </a>
                <a href="#!" className=" ">
                  <p className="d-flex flex-row justify-content-start  mt-2 text-warning">
                    <i className="fas fa-star" ></i>
                    <i className="fas fa-star" aria-hidden="true"></i>
                    <i className="fas fa-star" aria-hidden="true"></i>(3.0)
                  </p>
                </a>
                <h6 className="mb-1 mt_1" >907 g</h6>
                <h6 className="mb-1 text-success " >Rs. 0.0</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="10" lg="3" className="mb-1">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom text-center"
              >
                <MDBCardImage
                  src='https://www.backend.decasys.in/1710495046198-Y.S.%20Eco%20Bee%20Farms,%20Raw%20Honey,%208.0%20oz%20(226%20g).jpg'
                  fluid
                  className="w-20"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start  align-items-end h-100">
                      <h5>
                        <span className="badge bg-success ms-1">Organic</span>
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
                    Y.S. Eco Bee Farms, Raw Honey, 8.0 oz (226 g)
                  </h5>
                </a>
                <a href="#!" className=" ">
                  <p className="d-flex flex-row justify-content-start  mt-2 text-warning">
                    <i className="fas fa-star" ></i>
                    <i className="fas fa-star" aria-hidden="true"></i>
                    <i className="fas fa-star" aria-hidden="true"></i>
                    <i className="fas fa-star" aria-hidden="true"></i>
                    <i className="fas fa-star" aria-hidden="true"></i>(5.0)
                  </p>
                </a>
                <h6 className="mb-1 mt_1" >226 g</h6>
                <h6 className="mb-1 text-success " >Rs. 0000.0</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="10" lg="3" className="mb-1">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom text-center"
              >
                <MDBCardImage
                  src='https://www.backend.decasys.in/1710495220457-ys%20honey%2014oz%20396g.jpg'
                  fluid
                  className="w-50 h-50"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start  align-items-end h-100">
                      <h5>
                        <span className="badge bg-warning ms-1">Healthy</span>
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
                    Y.S. Eco Bee Farms, Raw Honey, 14.0 oz (396 g)
                    ...                  </h5>
                </a>
                <a href="#!" className=" ">
                  <p className="d-flex flex-row justify-content-start  mt-2 text-warning">
                    <i className="fas fa-star" ></i>
                    <i className="fas fa-star" aria-hidden="true"></i>
                    <i className="fas fa-star" aria-hidden="true"></i>(3.0)
                  </p>
                </a>
                <h6 className="mb-1 mt_1" >454 g</h6>
                <h6 className="mb-1 text-success " >Rs. 0.0</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="10" lg="3" className="mb-1">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom text-center"
              >
                <MDBCardImage
                  src='https://www.backend.decasys.in/1710495287409-DSC_3531.JPG'
                  fluid
                  className="w-50 h-50"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start  align-items-end h-100">
                      <h5>
                        <span className="badge bg-danger ms-1">-15%</span>
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
                    Y.S. Eco Bee Farms, Raw Honey, 22.0 oz (623 g)
                    ...                  </h5>
                </a>
                <a href="#!" className=" ">
                  <p className="d-flex flex-row justify-content-start  mt-2 text-warning">
                    <i className="fas fa-star" ></i>
                    <i className="fas fa-star" aria-hidden="true"></i>
                    <i className="fas fa-star" aria-hidden="true"></i>
                    <i className="fas fa-star" aria-hidden="true"></i>
                    <i className="fas fa-star" aria-hidden="true"></i>(5.0)
                  </p>
                </a>
                <h6 className="mb-1 mt_1" >623 g</h6>
                <h6 className="mb-1 text-success " >Rs. 0000.0</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    </>
  );
};

export default Products;
