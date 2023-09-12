import React from 'react'
import { useContext } from 'react';
import { ProductData } from '../../ProductData'
import { ShopContext } from '../../context/Shopcontext'
import './cart.css'

export default function Cart() {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="cart px-4">
      <h2 className='text-center text-3xl font-bold mb-9 md:mb-20'>Your Cart Items</h2>
      <div className="cart-items flex flex-col gap-9">
        {ProductData.map((product) => {
        if (cartItems !== 0){
           return <CartItem data = {product}/>
        }
        })}
      </div>
    </div>
  )
}


const CartItem = (props) => {
  const { id, productPrice, productImage, productName } = props.data;

  return(
    <div className='cart-item p-5 flex gap-6 justify-between items-center flex-col md:flex-row-reverse rounded-lg'>
      <img src = {productImage} alt = {`this is ${productImage}`} />
      <div className='description'>
        <p className='font-bold text-2xl uppercase'>{productName}</p>
        <p className='text-center md:text-start text-[grey] font-medium'>${productPrice}</p>
      </div>
    </div>
  )
}