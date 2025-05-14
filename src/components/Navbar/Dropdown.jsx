import { useState } from "react";
import Icons from "../Icons";

const LocationItem = ({ location }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  return (
    <div className="group/submenu relative">
      <a
        href={`/${location.name.toLowerCase()}`}
        className="capitalize flex items-center gap-2.5 py-2 hover:bg-gray-50 rounded-lg px-2"
        onMouseEnter={() => location.submenu && setShowSubmenu(true)}
        onMouseLeave={() => location.submenu && setShowSubmenu(false)}
      >
        <div className="size-12">
          <img
            src={location.img}
            alt={`${location.name} image`}
            className="h-full w-full object-cover rounded-[10px]"
          />
        </div>
        <span className="text-sm font-mulish font-bold uppercase text-black-300">
          {location.name}
        </span>

        {location.submenu && (
          <Icons type="chevron" className="ml-auto size-5 rotate-90" />
        )}
      </a>

      {location.submenu && showSubmenu && (
        <div className="absolute left-full top-0 z-10 ml-6 rounded-2xl bg-white p-3 shadow-lg">
          <div className="space-y-2.5">
            {location.submenu.map((item) => (
              <a
                key={item.name}
                href={`/${location.name.toLowerCase()}-${item.name.toLowerCase()}`}
                className="capitalize flex items-center gap-2.5 py-2 px-2 hover:bg-gray-50 rounded-lg"
              >
                <div className="size-12">
                  <img
                    src={item.img}
                    alt={`${item.name} image`}
                    className="h-full w-full object-cover rounded-[10px]"
                  />
                </div>
                <span className="text-sm font-mulish font-bold uppercase text-black-300">
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Dropdown = ({ link }) => (
  <div className="group relative">
    <a className="capitalize flex items-center gap-2 cursor-pointer">
      <Icons type={link.icon} />
      <span className="text-sm font-black uppercase">{link.name}</span>
      <Icons
        type="chevron"
        className="transition-transform group-hover:rotate-180"
      />
    </a>

    <div className="invisible absolute left-1/2 top-full z-10 min-w-[150px] -translate-x-1/2 group-hover:visible">
      <div className="pt-7">
        <div className="w-[294px] space-y-2.5 rounded-[20px] bg-white px-4 py-4 shadow-lg z-10">
          {link.dropdown.map((location) => (
            <div key={location.name}>
              <LocationItem location={location} />
              {!location.submenu && (
                <div className="w-full border-t border-blue-pale/20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Dropdown;
