import React, {useState} from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'


const Navbar = () => {
    const [nav, setNav] = useState(false)
  return (
    <div className='max-w-[1560px] mx-auto flex justify-between items-center p-4'>
        {/* l side */}
        <div className='flex items-center'>
            <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                <AiOutlineMenu size={30}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                Foody <span className='font-bold'>Delish</span>
            </h1>
            <div className='hidden md:flex items-center bg-orange-600 rounded-full p-1 text-[14px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Collect</p>
            </div>
        </div>
        {/* search */}

        <div className='bg-orange-600 rounded-full flex items-center px-2 w-[200px] sm:w-[300px] lg:w-[400px] '>
            <AiOutlineSearch size={20}/>
            <input type="text" placeholder='Search food' className='bg-transparent p-2 focus:outline-none w-full' />
        </div>
        {/* cart button */}
        <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
            <BsFillCartFill size={20} className='mr-2'/> Cart
        </button>

        {/* mobile menu */}
        {nav ? <div className='bg-orange-700/70 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
        

        {/* side menu */}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-gray-100 z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <AiOutlineClose onClick={()=> setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer'/>
            <h2 className='text-2xl p-4'>
                Foody <span className='font-bold'>Delish</span>
            </h2>

            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-xl py-4 flex cursor-pointer'> <TbTruckDelivery size={30} className='mr-4'/>Order</li>
                    <li className='text-xl py-4 flex cursor-pointer'> <MdFavorite size={30} className='mr-4'/>Favorites</li>
                    <li className='text-xl py-4 flex cursor-pointer'> <FaWallet size={30} className='mr-4'/>Wallet</li>
                    <li className='text-xl py-4 flex cursor-pointer'> <MdHelp size={30} className='mr-4'/>Help</li>
                    <li className='text-xl py-4 flex cursor-pointer'> <AiFillTag size={30} className='mr-4'/>Best ones</li>
                    <li className='text-xl py-4 flex cursor-pointer'> <BsFillSaveFill size={30} className='mr-4'/>Promotions</li>
                    <li className='text-xl py-4 flex cursor-pointer'> <FaUserFriends size={30} className='mr-4'/>Invite Friends</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar