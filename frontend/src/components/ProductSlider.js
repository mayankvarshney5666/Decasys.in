import React from 'react';
import ProductCardSlider from './ProductCardSlider';

const ProductSlider = () => {
    return (
        <>
            <div className="product-slider mx-5 my-5">
                <p className='recommended' >
                    Recommended for you
                </p>
                <ProductCardSlider />
                <p className="special-picked">
                    Specials picked for you
                </p>
                <ProductCardSlider />
            </div >
        </>

    )

}
export default ProductSlider