import Image from 'next/image'
import React from 'react'

const EmptyCart = () => {
  return (
    <div className='empty-cart fit-size'>
        <Image 
          src="/images/empty-cart.webp" 
          alt="Empt cart"
          layout="fill"
          objectFit="contain"
          />
    </div>
  )
}

export default EmptyCart