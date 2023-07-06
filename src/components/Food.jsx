import React, {useState} from 'react'
import { data} from '../data/data'

const Food = () => {
    // console.log(data)

    const [foods, setFoods] = useState(data);

    // filt type food

    const filterType = (category) => {
        setFoods(
            data.filter((item) =>{
                return item.category === category;
            })
        );
    };

    // price filter

    const filterPrice = (price) =>{
        setFoods(
            data.filter((item) =>{
                return item.price ===price;
            })
        );  
    };
  return (
    <div className='max-w-[1560px] m-auto px-4 py-12'>
        <h1 className='text-black font-bold text-4xl text-center'>Menu</h1>

        {/* fil row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* filter type */}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={()=> setFoods(data)} className='m-1 border-orange-500 text-black bg-orange-600 hover:bg-black hover:text-white'>All</button>
                    <button onClick={() => filterType('burger')} className='m-1 border-orange-500 text-black bg-orange-600 hover:bg-black hover:text-white'>Burgers</button>
                    <button onClick={() => filterType('chicken')} className='m-1 border-orange-500 text-black bg-orange-600 hover:bg-black hover:text-white'>Chicken</button>
                    <button onClick={() => filterType('pizza')} className='m-1 border-orange-500 text-black bg-orange-600 hover:bg-black hover:text-white'>Pizza</button>
                    <button onClick={() => filterType('salad')} className='m-1 border-orange-500 text-black bg-orange-600 hover:bg-black hover:text-white'>Salads</button>

                </div>
            </div>

            {/* filter price */}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={()=> filterPrice('$')} className='m-1 border-orange-500 text-black bg-orange-600 hover:bg-black hover:text-white'>R50</button>
                    <button onClick={()=> filterPrice('$$')} className='m-1 border-orange-500 text-black bg-orange-600 hover:bg-black hover:text-white'>R75</button>
                    <button onClick={()=> filterPrice('$$$')} className='m-1 border-orange-500 text-black bg-orange-600 hover:bg-black hover:text-white'>R120</button>
                    <button onClick={()=> filterPrice('$$$$')} className='m-1 border-orange-500 text-black bg-orange-600 hover:bg-black hover:text-white'>R260</button>
                </div>
            </div>
        </div>

        {/* food disply */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
            {foods.map((item, index) => (
                <div key={index} className='border shadow-lg rounded-lg mt-2 hover:scale-105 duration-300'>
                    <img src={item.image} alt={item.name}  className='w-full h-[200px] object-cover rounded-t-lg'/>
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p>
                            <span className='bg-orange-600 text-black p-1 rounded-full'>{item.price}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Food