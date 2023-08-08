import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Alert from 'react-bootstrap/Alert';

function Sliders() {
  return (
  <>
   {[
                'dark',
            ].map((variant) => (
                <Alert key={variant} variant={variant}>
                    <div className='container my-4' >"SALE  SALE!  new products are out now Discover the perfect blend of style, quality, and innovation in our curated collection of products, designed to elevate your shopping experience"</div>
                </Alert>
            ))}



    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.vecteezy.com/system/resources/thumbnails/004/299/815/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
          alt="Super-Mart"
          style={{ height: '350px' }}
        />
        <Carousel.Caption>
          <h3>Super-Mart</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
          alt="Second slide"
          style={{ height: '350px' }}
        />

        <Carousel.Caption>
          <h3>Super-Mart</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.shutterstock.com/image-vector/paper-art-shopping-online-on-260nw-2074005938.jpg"
          alt="Third slide"
          style={{ height: '350px' }}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </>
  );
}

export default Sliders;