import React from 'react'
import Alert from 'react-bootstrap/Alert';

export default function HeaderSection() {
    return (
        <>
            <div className="bg-white">
                <div style={{ width: '95vw', height: '90vh' }} className="d-flex justify-content-center align-items-center">
                    <div>
                        <img className='img-fluid' src="https://img.freepik.com/free-vector/ecommerce-checkout-laptop-concept-illustration_114360-8243.jpg" alt="" srcset="" />
                    </div>
                    <div className="container">
                        <h1 className="text-dark">
                            <strong>Thank You for Choosing.</strong>
                        </h1>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facilis explicabo, soluta dolore non commodi? Eaque sunt veniam blanditiis quasi, accusamus numquam voluptates maxime necessitatibus <br></br> reprehenderit vero ullam quo amet.</p>
                    </div>
                </div>
            </div>
            {[
                'secondary',
            ].map((variant) => (
                <Alert key={variant} variant={variant}>
                    <div className='container my-3' >"SALE  SALE!  new products are out now Discover the perfect blend of style, quality, and innovation in our curated collection of products, designed to elevate your shopping experience"</div>
                </Alert>
            ))}
        </>
    )
}