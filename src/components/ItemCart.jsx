import React from 'react';
import Jewlleary from '../assets/images/Jewlleary.png'
import bag from '../assets/images/bag.jpg'
import ring from '../assets/images/ring.png'
import Watch from '../assets/images/Watch.jpg'
import green from '../assets/images/green.png'
import Earrings from '../assets/images/Earrings.png'
import Rolex from '../assets/images/Rolex.png'
import overcoat from '../assets/images/overcoat.png'


const Cdata = [
  { 
    img: Jewlleary,
    title: 'Fine Jewelry',
    desc: 'Exquisite pieces crafted with precious metals and gemstones',
    price: '$2,800',
  },
   { 
    img: bag,
    title: ' HERMÈS',
    desc: 'Italian Leather Handbag',
    price: '$8,900',
    
  },
   { 
    img: ring,
    title: 'TIFFANY & CO.',
    desc: 'Sapphire Cocktail Ring',
    price: '$12,500',
    
  },
    { 
    img: Watch,
    title: 'PATEK PHILIPPE',
    desc: 'Swiss Moonphase Chronograph',
    price: '$45,000',
    
  },
   { 
    img: green,
    title: 'VALENTINO',
    desc: 'Swiss Moonphase Chronograph',
    price: '$3,200',
    
  },
   { 
    img: Earrings,
    title: 'MIKIMOTO',
    desc: 'Pearl Drop Earrings',
    price: '$2,800',
    
  },
    { 
    img: Rolex,
    title: 'Rolax',
    desc: 'Vintage Chronograph',
    price: '$32,000',
    
  },
      { 
    img: overcoat,
    title: 'LORO PIANA',
    desc: 'Cashmere Overcoat',
    price: '$4,200',
    
  },
];

const ItemCart = () => {
  return (
    <>
    <div className='flex flex-wrap p-4 bg-[#f9fafb]'>
      {Cdata.map((item, index) => (
        <div
          key={index}
          className='m-8 w-72 border-none rounded-2xl group overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300'
        >
          <img
            src={item.img}
            alt={item.title}
            className='w-full h-72 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105'
          />

          <div className='p-4'>
            <p className='text-lg font-semibold text-gray-800'>{item.title}</p>

            <p className='text-sm mt-1 font-medium text-gray-700 group-hover:text-[#e17100] transition-colors duration-300'>
              {item.desc}
            </p>

            <p className='text-sm text-yellow-500 mt-1'>⭐ 4.9 (17 reviews)</p>
            <p className='text-lg font-bold text-gray-900 mt-2'>{item.price}</p>

            <div className='flex gap-4 font-medium text-sm text-gray-500 mt-2'>
              <p className='rounded-lg text-[12px] text-black border-[#e5e5e5] border-2 w-30 flex justify-center'>
                18k White Gold
              </p>
              <p className='rounded-lg text-[12px] text-black border-[#e5e5e5] border-2 w-20 flex justify-center'>
                Diamond
              </p>
            </div>

            <div className='mt-4 flex gap-3'>
              <button className='px-4 py-2 bg-black text-white rounded-lg hover:bg-[#e17100] transition-colors'>
                Add to Bag
              </button>
              <button className='px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors'>
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default ItemCart;
