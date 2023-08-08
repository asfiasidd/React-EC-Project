// import React, { createContext, useEffect, useReducer} from "react";
// const YourContext = createContext();
// import { reducer } from "../addtocart/Reducer";

// const getCartData = () => {
//     let CartData = localStorage.getItem('cart')
//     if(CartData === null){
//         return []
//     } else {
//         return JSON.parse(CartData);
//     }
// }
// const initialData = {
//     cart: getCartData()
// }

// export const CartContext = createContext();

// export default function CartContextProvider({ childern }){
//     const [state, dispatch ] = useReducer(reducer, initialData);

//     useEffect(() => {
//         localStorage.setItem('cart', JSON.stringify(state.cart));
//     }, [state.cart]);

// const handleClearCart = () => {
//     dispatch ({type: 'CLEAR_CART'});
// };
// const addtoCart = (item) => {
//     dispatch({
//         type: 'ADD_TO_CART',
//         payload: item
//     });
// }
//   return {
//     <CartContext.Provider value ={{state, dispatch, handleClearCart}}
//   }
//   {childern}
//   </CartContext.Provider>
// }



import React, { createContext, useEffect, useReducer } from "react";
import { reducer } from "../addtocart/Reducer";

const YourContext = createContext();

const getCartData = () => {
    let CartData = localStorage.getItem('cart');
    if (CartData === null) {
        return [];
    } else {
        return JSON.parse(CartData);
    }
};

const initialData = {
    cart: getCartData()
};

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialData);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart));
    }, [state.cart]);

    const handleClearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const addToCart = (item) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: item
        });
    };

    return (
        <CartContext.Provider value={{ state, dispatch, handleClearCart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}









