import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../../context/Shopcontext'


export default function Products(props) {
  const { id, productPrice, productImage, productName } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className='product-card p-[20px]'>
      <img className='product-image' src={productImage} alt={`this is ${productName}`} />
      <div className='product-description'>
        <p>{productName}</p>
        <p>${productPrice}</p>
        <button onClick={() => addToCart(id)} className='mt-4 p-1 px-3  border-2 border-solid border-black rounded-full hover:bg-black hover:text-white text-sm font-bold'>
          Add to Cart  {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
        </button>
      </div>
    </div>
  )
}
