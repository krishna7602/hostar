import React from 'react'

const body = () => {
  return (
    <div className='lg:flex flex-row-reverse'>
        <div className='flex justify-center items-center lg:flex-1'>
          <img src="./assets/Blue-Shape.svg" alt="blue shape " className='h-60 -rotate-[30deg] md:h-[75] lg:h-[400px] '  />
          <img src="./assets/Pink-Shape.svg" alt="blue shape" className='absolute -rotate-[15deg] h-60 md:
          h-75 lg:h-[400px]' />
          <img src="./assets/Purple-Shape.svg" alt="blue shape" className='absolute -rotate-[20deg] h-60 md:
          h-75 lg:h-[400px]'/>
          <img src="./assets/Hero-Model.png" alt="hero" className='absolute h-60 md:
          h-75 lg:h-[400px]'/>
        </div>
        <div className='flex flex-col gap-5 lg:flex-1'>
            <h1 className='text-5xl font-bold font-playfair leading-tight'>Host Your Website In Less Than 5 Minutes</h1>
            <p className='text-2xl font-lato text-pink-700'>With Hoster , get your website up and running in no less than 5 minutes with the most competitive pricing packages available online</p>
            <form action="" className='flex flex-col gap-4 md:flex-row'>
              <input type="email" name="emailId" id="id" placeholder='enter your email' className='rounded-lg px-6 py-3 placeholder: text-amber-400' />
              <button className='rounded-md px-3 py-2 bg-blue-500 text-white hover:bg-blue-900'>join Waitlist</button>
            </form>
            <div className='flex gap-2'>
                <img src="./assets/Checkmark.svg" alt="lg" />
                <p className='font-lato text-fuchsia-900'>No spam ,ever . Unsubscribe anytime</p>
            </div>
        </div>
    </div>
  )
}

export default body
