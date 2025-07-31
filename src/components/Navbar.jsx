import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed z-50 flex items-center justify-between w-full px-8 py-3 bg-white opacity-95 text-black shadow-md">
      <div className="text-xl font-semibold">LUXE</div>

      <div className="flex gap-6">
        <div className="hover:text-[#e17100] transition duration-300 ease-in-out">JEWELRY</div>
        <div className="hover:text-[#e17100] transition duration-300 ease-in-out">WATCHES</div>
        <div className="hover:text-[#e17100] transition duration-300 ease-in-out">FASHION</div>
        <div className="hover:text-[#e17100] transition duration-300 ease-in-out">ACCESSORIES</div>
        <div className="hover:text-[#e17100] transition duration-300 ease-in-out">COLLECTIONS</div>
      </div>
    </div>
  );
};

export default Navbar;
