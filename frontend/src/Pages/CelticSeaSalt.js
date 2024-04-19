import React from 'react'
import Sidebar from '../assets/Sidebar/Sidebar'
import Products from '../assets/Products/Products'
// import './CelticSeaSalt.css'

// import ProductFilteringPage from '../Product Filtering/ProductFilteringPage';

const CelticSeaSalt = () => {
    return (
        <>
            {/* <div className="img-banner-head">
                <img src="https://www.decasys.in/images/vegetable/banner/banner-head.jpg" className="img-fluid" alt="img here" />
            </div> */}


            <div className="celtic-seasalt d-flex ">
                <Sidebar handleChange={undefined} />
                <section id="product-info" className="product-info">
                    <Products />
                </section>
            </div>
        </>
    )

}
export default CelticSeaSalt;