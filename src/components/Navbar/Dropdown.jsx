import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import Icons from "../Icons";

const LocationItem = ({ location }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const itemRef = useRef(null);
  const [submenuPosition, setSubmenuPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (showSubmenu && itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect();
      setSubmenuPosition({
        top: rect.top,
        left: rect.right + 16, // 16px margin
      });
    }
  }, [showSubmenu]);

  return (
    <div className="relative" ref={itemRef}>
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

      {location.submenu &&
        showSubmenu &&
        createPortal(
          <div
            className="fixed rounded-2xl bg-white p-3 shadow-lg"
            style={{
              top: submenuPosition.top,
              left: submenuPosition.left,
              zIndex: 9999,
            }}
          >
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
          </div>,
          document.body
        )}
    </div>
  );
};

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const Dropdown = ({ link }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (open && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 6, // Add some spacing
        left: rect.left + rect.width / 2,
      });
    }
  }, [open]);

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a className="capitalize flex items-center gap-2 cursor-pointer">
        <Icons type={link.icon} />
        <span className="text-sm font-black uppercase">{link.name}</span>
        <Icons
          type="chevronDownLocation"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </a>

      {open &&
        createPortal(
          <div
            className="fixed"
            style={{
              top: dropdownPosition.top,
              left: dropdownPosition.left,
              transform: "translateX(-50%)",
              zIndex: 9999,
            }}
          >
            <div className="pt-7">
              <div className="w-[294px] space-y-2.5 rounded-[20px] bg-white px-4 py-4 shadow-lg">
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
          </div>,
          document.body
        )}
    </div>
  );
};

export default Dropdown;
