import React from 'react'
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ShopContext } from '../../context/Shopcontext'

const productCardVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}


export default function Products(props) {
  const { id, productPrice, productImage, productName } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
 
  const cartItemAmount = cartItems[id];
  return (
    <motion.div variants={productCardVariants}  className='product-card p-[20px]'>
      <img className='product-image h-[150px] md:h-[250px]' src={productImage} alt={`this is ${productName}`} />
      <div className='product-description'>
        <p>{productName}</p>
        <p>${productPrice}</p>
        <button onClick={() => addToCart(id)} className='mt-4 p-1 px-3  border-2 border-solid border-black rounded-full hover:bg-black hover:text-white text-sm font-bold'>
          Add to Cart  {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
        </button>
      </div>
    </motion.div>
  )
}
