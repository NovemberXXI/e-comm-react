import React from 'react'

const HlineCards = () => {
  return (
    <div className='max-w-[1560px]  mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* card 1 */}
        <div className='rounded-xl relative '>
            {/* Ovlay */}
            <div className='absolute w-full h-full bg-orange-500/10 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, Bogo's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-orange-500 bg-orange-600 text-black mx-2 absolute bottom-4 font-bold'>Order Now!</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover  rounded-xl' src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
        </div>
        {/* card 1 */}
        <div className='rounded-xl relative '>
            {/* Ovlay */}
            <div className='absolute w-full h-full bg-orange-500/10 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>New Resturants</p>
                <p className='px-2'>Added Daily</p>
                <button className='border-orange-500 bg-orange-600 text-black mx-2 absolute bottom-4 font-bold'>Order Now!</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover  rounded-xl' src="https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
        </div>
        {/* card 1 */}
        <div className='rounded-xl relative '>
            {/* Ovlay */}
            <div className='absolute w-full h-full bg-orange-500/10 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Desserts Also Delivered</p>
                <p className='px-2'>Treaty Treats</p>
                <button className='border-orange-500 bg-orange-600 text-black mx-2 absolute bottom-4 font-bold'>Order Now!</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover  rounded-xl' src="https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
        </div>
    </div>
  )
}

export default HlineCards