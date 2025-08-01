import Jewlleary from '../assets/images/Jewlleary.png'
import bag from '../assets/images/bag.jpg'
import Watch from '../assets/images/Watch.jpg'
import Shoes from '../assets/images/Shoes.jpg'

const ShowCart = () => {
  const data = [
    {
      img: Jewlleary,
      pieces: '120+ pieces',
      title: 'Fine Jewelry',
      desc: 'Exquisite pieces crafted with precious metals and gemstones',
      price: '$2,800',
    },
    {
      img: Watch,
      pieces: '85+ watches',
      title: 'Luxury Timepieces',
      desc: 'Swiss craftsmanship meets timeless elegance',
      price: '$15,000',
    },
    {
      img: Shoes,
      pieces: '25+ exclusive',
      title: 'Exclusive Astone',
      desc: 'Unforgettable fragrance that defines power, grace, and desire.',
      price: '$8,000',
    },
    {
      img: bag,
      pieces: '25+ exclusive',
      title: 'Exclusive Collection',
      desc: 'Limited edition pieces available only at LUXE',
      price: '$5,000',
    },
  ]

  return (
    <div className=" bg-[#f9fafb] flex flex-wrap justify-center gap-6 p-4">
      {data.map((item, i) => (
        <div
          key={i}
          className="relative group w-full sm:w-[45%] lg:w-[22%] aspect-[4/5] border-2 overflow-hidden border-gray-300 rounded-lg shadow-md"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
          />

          <div className="absolute inset-0 z-10 p-4 text-white flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent">
            <button className="opacity-0  ml-15 mb-15 group-hover:opacity-100 transition duration-300 ease-in-out bg-amber-50 text-black text-sm px-4 py-1 mt-4 hover:bg-[#e17100] hover:text-white w-fit rounded-lg">
    Explore Collection →
  </button>
            <p>{item.pieces}</p>
            <p className="hover:text-[#e17100] text-xl font-semibold">{item.title}</p>
            <p className="text-md text-gray-200">{item.desc}</p>
            <div className="flex items-center space-x-2 mt-2">
              <p>From</p>
              <pre className="text-[#e17100] font-sans">{item.price}</pre>
            </div>
          </div>
        </div>
      ))}

        <button className='bg-[#ffffff]  text-[#e17100] hover:bg-[#e17100] hover:text-white border-2 w-3xs  h-10 border-[#e17100] rounded-sm transition duration-300 ease-in-out ' >View All Collections → </button>

    </div>
  )
}

export default ShowCart
