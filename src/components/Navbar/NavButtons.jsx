import { useState } from 'react';
import Icons from './Icons';

const NavButtons = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex shrink-0 items-center gap-3 lg:gap-5">
      {/* Book Tickets Button */}
      <a 
        href="https://bookings.wonderla.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block"
      >
        <div className="capitalize text-blue bg-yellow flex h-[34px] items-center rounded-lg px-2.5 md:px-3.5 hover:bg-yellow-dark transition-colors">
          <span className="font-mulish flex items-center gap-1.5 text-[11px] font-black uppercase md:text-xs">
            Book tickets
            <Icons type="arrow" />
          </span>
        </div>
      </a>

      {/* Menu Button */}
      <button 
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-blue md:mx-2 lg:h-[17px] lg:w-[26px] lg:bg-transparent"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <Icons type="menu" className="h-2.5 w-4 fill-yellow lg:h-[17px] lg:w-[26px] lg:fill-blue" />
      </button>

      {/* Sidebar (will be implemented next) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden">
          {/* Sidebar content will go here */}
        </div>
      )}
    </div>
  );
};

export default NavButtons;