import React from 'react'

const Course = () => {
  return (
  <>
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4'>
  <div className='mt-28 items-center justify-center text-center'>
    <h1 className='text-2x1  md:text-4xl'>
      We're delighted to have you{""}
      <span className='text-pink-500'>Here! :)</span>
    </h1>
       <p className='mt-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
       nisi harum culpa, dignissimos officiis temporibus eveniet nobis
       accusamus quam omnis itaque libero optio ut fugiat exercitationem, 
       ducimus enim incidunt, rem eum aliquid soluta magnam perferendis. 
       Reiciendis officiis eos commodi iure?</p>
       <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 cursor-pointer'>Back</button>
  </div>
    </div>
  </>
  )
}

export default Course;