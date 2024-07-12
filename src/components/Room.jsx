import React from 'react'

const Room = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
            <h3 className='text-2xl font-bold'>Find Interior Rooms</h3>
            <p className='pt-4'>Our Hotel is the best hotel in Japan, Not only but also in Japan</p>
        </div>

        <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img className="object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1503424886307-b090341d25d1?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className="row-span-2 object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className="object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1515612148533-6247582c12c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        
    </div>
    
  )
}

export default Room