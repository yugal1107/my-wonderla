import { useEffect } from "react";

const Sidebar = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold text-blue mb-4">Menu</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="/locations"
                className="block py-2 px-3 hover:bg-blue-pale rounded"
              >
                Locations
              </a>
            </li>
            <li>
              <a
                href="/offers"
                className="block py-2 px-3 hover:bg-blue-pale rounded"
              >
                Offers
              </a>
            </li>
            <li>
              <a
                href="/rides"
                className="block py-2 px-3 hover:bg-blue-pale rounded"
              >
                Rides
              </a>
            </li>
            <li>
              <a
                href="/restaurants"
                className="block py-2 px-3 hover:bg-blue-pale rounded"
              >
                Restaurants
              </a>
            </li>
            <li>
              <a
                href="/events"
                className="block py-2 px-3 hover:bg-blue-pale rounded"
              >
                Events
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
