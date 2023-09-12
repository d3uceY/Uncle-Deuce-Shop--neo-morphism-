import React from 'react'
import {ProductData} from '../../ProductData'
import Products from './products'
import './shopstyle.css'

export default function Shop() {
  return (
    <div className='shop'> 
      <h1 className='text-center text-[3rem]  md:text-[5rem] mb-4 md:mb-[5rem]'>UncleDeuce Store.</h1>
      <div className="products grid lg:grid-cols-2 xl:grid-cols-3 px-3  gap-5 container mx-auto">
          {ProductData.map((product) => 
          <Products data={product}/>
          )}
      </div>
    </div>
  )
}
