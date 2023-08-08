// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// // import Swal from 'sweetalert2';
// import ImageSection from '../Components/ImageSection';

// function ProductPage() {
//   const { ProductID } = useParams();
//   const [product, setProduct] = useState({});
//   const [review, setReview] = useState('');
//   const [productQuantity, setProductQuantity] = useState(1);

//   const addToCart = () => {
//     const payload = {
//       ...product,
//       productQuantity,
//       totalPrice: product.price * productQuantity,
//     };
//     console.log(payload);

//     Swal.fire('Added to Cart', 'Product added to cart successfully!', 'success');
//   };

//   useEffect(() => {
//     axios
//       .get(`https://dummyjson.com/products/${ProductID}`)
//       .then((response) => setProduct(response.data))
//       .catch((error) => console.log(error));
//   }, [ProductID]);

//   const handleSubmitReview = (e) => {
//     e.preventDefault();

//     // Validate review input
//     if (!review) {
//       Swal.fire('Error', 'Please enter a review.', 'error');
//       return;
//     }

//     // Submit review
//     const payload = {
//       ProductID: ProductID,
//       review: review,
//     };
//     console.log(payload);

//     Swal.fire('Success', 'Review submitted successfully!', 'success');
//   };

//   const headingStyle = {
//     marginTop: '20px',
//   };

//   const descriptionStyle = {
//     marginBottom: '20px',
//   };

//   const buttonContainerStyle = {
//     display: 'flex',
//     marginLeft: '50px',

//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-12">
//           <h1 style={headingStyle}>{product.title}</h1>
//           <p className="text-secondary" style={descriptionStyle}>
//             {product.description}
//           </p>
//           <div style={buttonContainerStyle}>
//             <button
//               className="btn btn-dark  mx-3 text-center"
//               disabled={productQuantity > 1 ? false : true}
//               onClick={() => setProductQuantity(productQuantity -1 )}
//             >
//               -
//             </button>
//             {productQuantity}
//             <button
//               className="btn btn-dark"
//               onClick={() => setProductQuantity(productQuantity +1 )}
//             >
//               +
//             </button>
//           </div>
//           <button className="btn btn-dark mt-3" onClick={addToCart}>
//             Add to Cart
//           </button>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-md-6">
//           {product?.images?.length > 0 && <ImageSection images={product.images} />}
//           {product?.images?.map((val, key) => (
//             <div key={key}>{val}</div>
//           ))}
//         </div>

//         <div className="col-md-6">
//           <div className="mt-5">
//             <h2>Customer Reviews</h2>
//             <form onSubmit={handleSubmitReview}>
//               <div className="form-group">
//                 <label htmlFor="reviewInput">Write your review:</label>
//                 <textarea
//                   id="reviewInput"
//                   className="form-control"
//                   value={review}
//                   onChange={(e) => setReview(e.target.value)}
//                 ></textarea>
//               </div>
//               <div>
//                 <button type="submit" className="btn btn-dark mt-2">
//                   Submit Review
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductPage;

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom'
import ReactStars from 'react-stars'
import Swal from 'sweetalert2'
import ImageSection from '../Components/ImageSection'


export default function Productspages() {


  const { productID } = useParams()
  const [product, setProduct] = useState({})
  const [review, setReview] = useState("")
  const [ratingstar, setratingStar] = useState(0)
  const [productQuantity, setProductQuantity] = useState(1)


  const ratingChanged = (newRating) => {
    setratingStar(newRating)
  }

  const submitReview = () => {
    const payload = {
      productID: productID,
      review: review,
      rating: ratingstar
    };
    console.log(payload)

    Swal.fire({
      title: 'Successfully Submitted!',
      text: 'Thanks for your compliment',
      icon: 'success',
      confirmButtonText: 'Great'
    })
    setReview('')
    setratingStar(0)

  }

  const addtocart = () => {
    const payload = {
      ...product,
      productQuantity,
      totalPrice: product.price * productQuantity
    }
    console.log (payload)
   
    Swal.fire({
      title: 'Added to Cart',
      text: 'Check your Cart for Check out',
      icon: 'success',
      confirmButtonText: 'Great'
    })

  }

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productID}`).then(json => setProduct(json.data))
  }, [])

  return (
    <div className="container">
      <div className="text center my-5">
        <h1>{product.title} - {product.price}$ </h1>
        <p className="text-secondary">{product.description}</p>
        <div className='d-flex justify-content-conter'>
          <ReactStars
            count={5}
            size={24}
            edit={false}
            value={product.rating}
            color2={'#ffd700'}
          />
        </div>
        <div className='my-2'>
          <button className="btn btn-dark mx-3" disabled={productQuantity > 1 ? false : true} onClick={() => setProductQuantity(productQuantity - 1)}>-</button>
          {productQuantity}
          <button className="btn btn-dark mx-3" onClick={() => setProductQuantity(productQuantity + 1)}> +</button>
        </div>

        <button className='btn btn-dark' onClick={addtocart}>Add to Cart</button>
      </div>
      <div className="row">
        <div className="col-md-6">

          {
            product?.images?.length > 0 && <ImageSection images={product.images} />
          }

        </div>
        <div className="col-md-6">
          <div className="container text-center ">
            <div className='mb-5'>
              <h2 className='text-center'>Reviews Us</h2>
              <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, dolor?</p>
            </div>
            <div>
              <form class="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: 100 }}
                  defaultValue={review}
                  onChange={(e) => setReview(e.target.value)}

                />
                <label htmlFor="floatingTextarea2">Comments</label>
              </form>
            </div>
            <div >
              Rate Us:
              <div className="d-flex justify-content-center">
                <ReactStars
                  count={5}
                  size={24}
                  value={ratingstar}
                  onChange={ratingChanged}
                  color2={'#ffd700'}
                />
                <span className='my-3'> ({ratingstar}) </span>

              </div>
            </div>

            <button className='my-3 btn btn-dark' onClick={submitReview}>submit review</button>


          </div>

        </div>

      </div>


    </div>
  )
}





































