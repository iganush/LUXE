import React from 'react';
import Jewlleary from '../assets/images/Jewlleary.png';

const ItemCart = () => {
  return (
    <>
      <div className='m-10 w-72 border-none rounded-2xl group overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300'>
        <img
          src={Jewlleary}
          alt='Jewellery'
          className='w-full h-72 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105'
        />

        <div className='p-4'>
          <p className='text-lg font-semibold text-gray-800'>CARTIER</p>

          <p className='text-sm mt-1 font-medium text-gray-700 group-hover:text-[#e17100] transition-colors duration-300'>
            Heritage Diamond Tennis Bracelet
          </p>

          <p className='text-sm text-yellow-500 mt-1'>⭐ 4.9 (17 reviews)</p>
          <p className='text-lg font-bold text-gray-900 mt-2'>$18,500</p>

          <div className='flex gap-4  font-medium text-sm text-gray-500 mt-2'>
            <p className='  rounded-lg text-[12px] text-black border-[#e5e5e5] border-2 w-30 flex justify-center'>18k White Gold</p>
            <p className='rounded-lg text-[12px]  text-black border-[#e5e5e5] border-2 w-20 flex justify-center'>Diamond</p>
          </div>

          <div className='mt-4 flex gap-3'>
            <button className='  px-4 py-2  bg-black text-white rounded-lg hover:bg-[#e17100] transition-colors'>
              Add to Bag
            </button>
            <button className='px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors'>
              View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCart;
