import Link from 'next/link';
import React from 'react'

const ErorrPage = () => {
  return (
    <div>
        <h1 className='text-3xl pt-5'>404 not found</h1>
        <Link href="/"><button className='btn mt-6'>GO back to home</button></Link>
    </div>
  )
}

export default ErorrPage;