'use client';

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface prop  {
  section:string,
  productId:string
}

const BrowserProduct = (prop:prop) => {
  const {section , productId} = prop;

  if (!productId && section) {
   return <Link 
      href={`/showResults/${section}`}
      className='browser-product'>
        <span>Details</span> 
        <Image
            src='/images/details.webp'
            alt='->'
            height={30}
            width={25}
        />
    </Link>
 }

 if (productId && section) {
  return <Link 
     href={`itemDetails/${section}/${productId}`}
     className='browser-product'>
       <span>Details</span> 
       <Image
           src='/images/details.webp'
           alt='->'
           height={30}
           width={25}
       />
   </Link>
}

  
  return (
    <div></div>
  )
}

export default BrowserProduct