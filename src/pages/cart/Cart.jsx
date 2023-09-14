import React from 'react'
import { useContext } from 'react';
import { ProductData } from '../../ProductData'
import { ShopContext } from '../../context/Shopcontext'
import { Link } from 'react-router-dom';
import './cart.css'

export default function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <div className="cart mb-[4rem] md:mb-[8rem] px-8">
      <h2 className='text-center text-3xl font-bold mb-9 md:mb-20'>Your Cart Items</h2>
      <div className="cart-items flex flex-col gap-9">
        {ProductData.map((product) => {
        if (cartItems[product.id]  !== 0){
           return <CartItem data = {product}/>
        }
        })}
      </div>

      <div className="checkout mx-auto">
        <p className='font-bold'>Subtotal: ${totalAmount}</p>
        <div className='flex justify-between'>
        <button className='py-2 px-3 hover:bg-white hover:text-black hover:rounded-md rounded-sm'><Link to='/'>Continue Shopping</Link></button>
        <button className='py-2 px-3 hover:bg-white hover:text-black hover:rounded-md rounded-sm'>Checkout</button>
        </div>
      </div>
    </div>
  )
}


const CartItem = (props) => {
  const { id, productPrice, productImage, productName } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  return(
    <div className='cart-item p-5 flex gap-6 justify-between items-center flex-row-reverse rounded-lg'>
      <img src = {productImage} alt = {`this is ${productImage}`} />
      <div className='description'>
        <p className='font-bold text-lg md:text-2xl uppercase'>{productName}</p>
        <p className='text-[grey] font-medium'>${productPrice}</p>
        <div className="count-handler mt-3">
          <button onClick={() => removeFromCart(id)} className='shadow-md hover:shadow-lg'>-</button>
          <input className='text-center' type="text" value={cartItems[id]}/>
          <button onClick={() => addToCart(id)} className='shadow-md hover:shadow-lg'>+</button>
        </div>
      </div>
    </div>
  )
}


// const None = () => {
//   return (
//     <div className='align-center'>You have not added any item to cart</div>
//   )
// }