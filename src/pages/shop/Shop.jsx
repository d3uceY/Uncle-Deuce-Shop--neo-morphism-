import { React } from 'react'
import { ProductData } from '../../ProductData'
import { motion } from 'framer-motion'
import Products from './Products'
import apple from '../../assets/HomepageImages/apple.png'
import blackshirt from '../../assets/HomepageImages/blackshirt.png'
import pricetag from '../../assets/HomepageImages/pricetag.png'
import shoppingbag from '../../assets/HomepageImages/shoppingbag.png'
import './shopstyle.css'

const leftImageAnimationVariants = {
  hidden: {
    left: '-100vh',
    rotate: -180
  },

  visible: {
    left: 0,
    rotate: 45,
    transition: {
      type: 'spring',
      stiffness: 100,
      delay: 1
    }
  }
}

const rightAnimationVariants = {
  hidden: {
    right: '-100vh',
    rotate: 180,
  },
  visible: {
    right: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      delay: 1.5
    }
  }
}


const goToShop = {
  hidden: {
    opacity: 0, scale: 1.4
  },

  visible: {
    opacity: 1, scale: 1,
    transition: {
      duration: 1,
      delay: 3
    }
  },
  touch: {
    backgroundColor: "#939597",
    transtion: {
      duration: 1
    }
  }
}

export default function Shop() {

  return (
    <div className='shop pb-[4rem] md:pb-[8rem]'>
      <div className=' container mx-auto shop-hero'>
        <motion.img variants={leftImageAnimationVariants} initial="hidden" animate="visible" className='apple' src={apple} alt={`this is a ${apple}`} />
        <motion.img variants={rightAnimationVariants} initial="hidden" animate="visible" className='blackshirt' src={blackshirt} alt={`this is a ${blackshirt}`} />
        <motion.img variants={rightAnimationVariants} initial="hidden" animate="visible" className='pricetag' src={pricetag} alt={`this is a ${pricetag}`} />
        <motion.img variants={leftImageAnimationVariants} initial="hidden" animate="visible" className='shoppingbag' src={shoppingbag} alt={`this is a ${shoppingbag}`} />
        <div>
          <motion.h1 initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5, duration: .3, stiffness: 130, type: 'spring' }}
            className='text-center text-[3rem]  sm:text-[5rem] mb-4 md:mb-[5rem]'>Shopping with Deuce.</motion.h1>
          <motion.a href="#shop" className='goToShop'
            variants={goToShop}
            initial='hidden'
            animate='visible'
          >
            <motion.button variants={goToShop} whileHover='touch' className='cartArrowDown text-[3rem] md:text-[4rem]'>
              <div className='triangle'></div>
            </motion.button>
          </motion.a>
        </div>
      </div>
      <div id='shop' className="products grid lg:grid-cols-2 xl:grid-cols-3 px-8  gap-5 container mx-auto">
        {ProductData.map((product) =>
          <Products data={product} />
        )}
      </div>
    </div>
  )
}
