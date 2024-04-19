import React from 'react'
import Sidebar from '../assets/Sidebar/Sidebar'
import products from '../assets/db/products'
import Card from '../components/Card'
import Products from '../assets/Products/Products'
import ProductsOfGuarandais from "../components/ProductsOfGuarandais";


export default function GuerandaisSeaSalt() {
    return (
        <>
            <div>

                <div className="guerandais-seasalt d-flex">
                    <Sidebar handleChange={undefined} />
                    <section id="product-info" className="product-info">
                        <Products />
                        {/* {products.map(products => {
                            <Card
                                key={products.id}
                                name={products.name}
                                img={products.img}
                                badge={products.badge}
                                rating={products.rating}
                                weight={products.weight}
                                price={products.price}
                            />
                        })} */}
                        {/* <Card product={products} /> */}

                        {/* {products.map(products => (
                            <ProductsOfGuarandais
                                key={products.id}
                                name={products.name}
                                img={products.img}
                                badge={products.badge}
                                rating={products.rating}
                                weight={products.weight}
                                price={products.price}
                            />
                        ))} */}
                    </section>
                </div>
            </div >
        </>
    )
}
//make card a component so it can be used by props?
