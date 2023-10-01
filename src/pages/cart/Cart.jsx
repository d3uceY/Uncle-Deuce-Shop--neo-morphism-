import React from 'react'
import { useContext } from 'react';
import { ProductData } from '../../ProductData'
import { ShopContext } from '../../context/Shopcontext'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import './cart.css'

const cartVariants = {
  hidden: {

  },
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.4
    }
  }
}

const cartItemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}

export default function Cart() {

  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();


  return (
    <motion.div
      variants={cartVariants}
      initial='hidden'
      animate='visible'
      className="cart-container">
      <div className="cart py-[4rem] md:py-[8rem] px-8">
        <h2 className='text-center text-3xl font-bold mb-9 md:mb-20'>Your Cart Items</h2>
        <div className="cart-items flex flex-col gap-9">
          {ProductData.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />
            }
          })}
        </div>

        <div className="checkout mx-auto mt-8">
          <p className='font-bold'>Subtotal: ${totalAmount}</p>
          <div className='flex justify-between'>
            <button className='py-2 px-3 hover:bg-white hover:text-black hover:rounded-md rounded-sm'><Link to='/'>Continue Shopping</Link></button>
            <button className='py-2 px-3 hover:bg-white hover:text-black hover:rounded-md rounded-sm'>Checkout</button>
          </div>
        </div>
      </div>

    </motion.div>
  )
}


const CartItem = (props) => {
  const { id, productPrice, productImage, productName } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  return (
    <motion.div
      variants={cartItemVariants}
      className='cart-item p-5 flex gap-6 justify-between items-center flex-row-reverse rounded-lg'>
      <img src={productImage} alt={`this is ${productName}`} />
      <div className='description'>
        <p className='font-bold text-lg md:text-2xl uppercase'>{productName}</p>
        <p className='text-[grey] font-medium'>${productPrice}</p>
        <div className="count-handler mt-3">
          <button onClick={() => removeFromCart(id)} className='shadow-md hover:shadow-lg'>-</button>
          <input className='text-center' type="text" value={cartItems[id]} />
          <button onClick={() => addToCart(id)} className='shadow-md hover:shadow-lg'>+</button>
        </div>
      </div>
    </motion.div>
  )
}


