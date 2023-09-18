import React from 'react'
import {Link} from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';


export default function Navbar() {
  return (
    <nav className='Navbar mb-5 md:mb-[5rem] py-[30px] drop-shadow-lg border'>
       <ul className="navigation flex items-center">
        <Link to='/'><motion.p
        initial = {{y: -200, opacity: 0}}
        animate = {{y:0, opacity: 1, }}
        transition = {{ type: 'spring', stiffness: 110}}
        >Shop</motion.p></Link>
        <Link to = '/cart'><motion.p
         initial = {{y: -200, opacity: 0}}
         animate = {{y:0, opacity: 1, }}
         transition = {{delay: 0.4, type: 'spring', stiffness: 110}}
         ><FaShoppingCart/></motion.p></Link>
       </ul>
    </nav>
  )
}
