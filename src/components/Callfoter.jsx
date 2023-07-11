import React from 'react'

   
const Callfoter =({Callfoterchild}) =>{
    return(
       <div className='bg-darkblue w-100'>
            <p className='text-white p-3 fw-bold mb-0'>Missed Queue</p>
            {Callfoterchild}
        </div>
    )
}
   
export default Callfoter;