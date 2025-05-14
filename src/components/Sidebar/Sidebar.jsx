import { useEffect } from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import { sidebarData } from "./sidebarData";

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
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-full bg-white shadow-xl transition-transform duration-300 sm:w-[480px] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="relative flex h-full flex-col px-4 pt-3 sm:px-[22px] sm:pt-5 md:px-7 md:pt-7 lg:px-8 lg:pt-9">
          <SidebarHeader onClose={onClose} />

          <div className="relative z-[1] flex flex-1 flex-col justify-between overflow-y-auto pb-8 pt-2.5 no-scrollbar sm:pb-10 md:pb-12 lg:pb-[52px] lg:pt-4">
            <SidebarMenu
              sections={sidebarData.sections}
              ctas={sidebarData.ctas}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
