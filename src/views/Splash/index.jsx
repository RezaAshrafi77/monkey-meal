import React from 'react'

export default function Splash() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4" style={{
      backgroundImage: "url(/assets/images/splash-bg.svg)",
      backgroundRepeat: 'no-repeat',
      backgroundSize : 'cover',
      backgroundPosition: 'center center'
    }}>
        <img src="/assets/images/monkey-logo.svg" alt="logo" />
        <h1 className='text-3xl font-[600] '>
          <span className='text-primary'>Meal</span>
          <span className='text-gray'>Monkey</span>
        </h1>
        <p className='text-xs font-[100]'>FOOD DELIVERY</p>
    </div>
  )
}