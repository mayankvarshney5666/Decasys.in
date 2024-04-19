import React from 'react'
import './ProductsOfGuarandais.css'
import { } from 'mdb-react-ui-kit'
import { FaStar } from 'react-icons/fa'

const ProductsOfGuarandais = (props) => {
    return (
        <div className="product-cards">

            <div className='productList product-card-container'>
                <div key={props.id} className='productCard product-card' >
                    <img src={props.img} alt={props.name} className='productImage' />
                    <div className='productCard__content'>
                        <h3 className='productName'>{props.name}</h3>
                        <div className='displayStack__1'>
                            <div className='productRating'>
                                {[...Array(props.rating)].map((index) => (
                                    <FaStar id={index + 1} key={index} />
                                ))}
                            </div>
                            <div className='productWeight'>
                                {props.weight}
                            </div>
                            <div className='productPrice'>
                                Rs {props.price}.0
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsOfGuarandais;