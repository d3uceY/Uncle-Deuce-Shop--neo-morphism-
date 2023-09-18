import { React } from 'react'
import { ProductData } from '../../ProductData'
import { motion } from 'framer-motion'
import Products from './Products'
import './shopstyle.css'

export default function Shop() {

  return (
    <div className='shop mb-[4rem] md:mb-[8rem]'>
      <motion.h1 initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: .3, stiffness: 130, type: 'spring' }}
        className='text-center text-[3rem]  md:text-[5rem] mb-4 md:mb-[5rem]'>Shopping with Deuce.</motion.h1>
      <div className="products grid lg:grid-cols-2 xl:grid-cols-3 px-8  gap-5 container mx-auto">
        {ProductData.map((product) =>
          <Products data={product} />
        )}
      </div>
    </div>
  )
}
