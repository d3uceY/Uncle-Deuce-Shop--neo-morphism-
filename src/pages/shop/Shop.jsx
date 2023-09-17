import { React, useRef, useEffect } from 'react'
import { ProductData } from '../../ProductData'
import Products from './Products'
import './shopstyle.css'

export default function Shop() {

  return (
    <div className='shop mb-[4rem] md:mb-[8rem]'>
      <h1 className='text-center text-[3rem]  md:text-[5rem] mb-4 md:mb-[5rem]'>Shopping with Deuce.</h1>
      <div className="products grid lg:grid-cols-2 xl:grid-cols-3 px-8  gap-5 container mx-auto">
        {ProductData.map((product) =>
          <Products data={product} />
        )}
      </div>
    </div>
  )
}
