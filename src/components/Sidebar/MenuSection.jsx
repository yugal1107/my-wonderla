import { useState } from "react";
import Icons from "../Icons";
import ParkGrid from "./ParkGrid";
import ParkList from "./ParkList";
import { motion, AnimatePresence } from "framer-motion";

const MenuSection = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);

return (
    <div className="border-b border-gray-light">
        {section.type === "dropdown" ? (
            <>
                <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5 py-2.5 md:gap-3.5 md:py-3">
                            <div className="size-7">
                                <img
                                    alt={section.title}
                                    className="h-full w-full object-contain"
                                    src={section.icon}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-base sm:text-lg lg:text-xl font-mulish font-medium capitalize !leading-[1.255]">
                                    {section.title}
                                </h3>
                                <p className="text-xs inline-block font-mulish font-normal !leading-[1.255] text-gray-dark">
                                    {section.description}
                                </p>
                            </div>
                        </div>
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <Icons type="chevronDown" svgClassName="transition-transform text-blue font" />
                        </motion.div>
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            {section.dropdownType === "grid" ? (
                                <ParkGrid parks={section.items} />
                            ) : (
                                <ParkList parks={section.items} />
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </>
        ) : (
            <a href={section.href} className="inline-block capitalize">
                <div className="flex items-center gap-2.5 py-2.5 md:gap-3.5 md:py-3">
                    <div className="size-7">
                        <img
                            alt={section.title}
                            className="h-full w-full object-contain"
                            src={section.icon}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-base sm:text-lg lg:text-xl font-mulish font-medium capitalize !leading-[1.255]">
                            {section.title}
                        </h3>
                        <p className="text-xs inline-block font-mulish font-normal !leading-[1.255] text-gray-dark">
                            {section.description}
                        </p>
                    </div>
                </div>
            </a>
        )}
    </div>
);
};

export default MenuSection;
