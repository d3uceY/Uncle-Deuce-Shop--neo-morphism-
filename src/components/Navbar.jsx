import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const shopLinkVariants = {
  hidden: {
    y: -200,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 80
    }
  },
  touch: {
    scale: 1.1,
    fontWeight: 500
  }
}


const cartLinkVariant = {
  hidden: {
    y: -200,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition:
    {
      delay: 0.4,
      type: 'spring',
      stiffness: 80
    }
  },
  touch: {
    scale: 1.1
  }
}
export default function Navbar() {
  return (
    <nav className='Navbar py-4 md:py-[30px] drop-shadow-lg border'>
      <ul className="navigation flex items-center">
        <Link to='/'><motion.p
          variants={shopLinkVariants}
          initial="hidden"
          animate="visible"
          whileHover='touch'>Shop</motion.p>
        </Link>
        <Link to='/cart'>
          <motion.p
            variants={cartLinkVariant}
            initial="hidden"
            animate="visible"
            whileHover='touch'
          >
            <FaShoppingCart /></motion.p>
        </Link>
      </ul>
    </nav>
  )
}
