import { useState } from "react";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";
import Sidebar from "../Sidebar/Sidebar"; // Updated import path

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen(true);
  };

  return (
    <>
      <header className="fixed my-2 left-0 right-0 top-0 lg:left-12 lg:right-12 lg:top-[35px] xl:left-[60px] xl:right-[60px]">
        <div className="flex h-[60px] items-center justify-between gap-5 rounded-bl-2xl rounded-br-2xl px-4 transition duration-300 ease-in-out md:h-[68px] md:pl-[30px] md:pr-[38px] lg:rounded-2xl lg:shadow-none bg-white text-black/50">
          {/* Logo */}
          <a className="inline-block" href="/">
            <div className="inline-block capitalize -ml-4 aspect-[118/38] w-[132px] lg:w-[152px]">
              <img
                alt="Wonderla Logo"
                className="h-full w-full object-contain"
                src="https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png"
              />
            </div>
          </a>

          {/* Navigation Links */}
          <NavLinks />

          {/* Right Section - Pass the click handler */}
          <NavButtons onMenuClick={handleMenuClick} />
        </div>
      </header>

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Navbar;
