import React from 'react'
import {Link} from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';


export default function Navbar() {
  return (
    <nav className='Navbar mb-5 md:mb-[5rem] py-[30px] drop-shadow-lg border'>
       <ul className="navigation flex items-center">
        <Link to='/'>Shop</Link>
        <Link to = '/cart'><FaShoppingCart/></Link>
       </ul>
    </nav>
  )
}
