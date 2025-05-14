import React from "react";
import { motion } from "framer-motion";
import Icons from "./Icons";

const ICON_BLUE = "#334DCF";
const YELLOW = "#FACC15";
const DARK_BLUE_BG = "#22304A";
const LIGHT_BLUE_BADGE = "#5A688A";
const GRADIENT_LIGHT = "rgb(232, 233, 241)";

const categoryAnimationTargets = {
  Land: {
    marker: { left: "60px", top: "17px", right: "auto", bottom: "auto" },
    gradientRotate: 15,
  },
  Water: {
    marker: {
      left: "137px",
      top: "calc(50% - 80px)",
      right: "auto",
      bottom: "auto",
    },
    gradientRotate: 70,
  },
  Kids: {
    marker: { left: "45px", bottom: "17px", top: "auto", right: "auto" },
    gradientRotate: 125,
  },
};

const CategorySidebar = ({
  activeCategory,
  onSelectCategory,
  categoryCounts = {},
}) => {
  const currentTargets =
    categoryAnimationTargets[activeCategory] || categoryAnimationTargets.Land;

  const fixedConicGradient = `conic-gradient(from -40deg, ${GRADIENT_LIGHT} 0deg, ${YELLOW} 50deg, ${YELLOW} 60deg,${GRADIENT_LIGHT} 150deg, ${GRADIENT_LIGHT} 0deg)`;

  const categories = [
    {
      name: "Land",
      count: categoryCounts.Land || 74,
      Icon: "landCategory",
      pos: { right: "180px", top: "66px" },
    },
    {
      name: "Water",
      count: categoryCounts.Water || 55,
      Icon: "waterCategory",
      pos: { right: "100px", top: "50%", transform: "translateY(-50%)" },
    },
    {
      name: "Kids",
      count: categoryCounts.Kids || 36,
      Icon: "kidsCategory",
      pos: { right: "198px", bottom: "66px", top: "auto" },
    },
  ];

  return (
    <div className="relative h-[600px] w-[360px] shrink-0">
      {/* 1. Animated Rotating Conic Gradient Layer */}
      <motion.div
        className="absolute right-[92px] top-0 size-[600px] rounded-full"
        style={{ background: fixedConicGradient }}
        animate={{ rotate: currentTargets.gradientRotate }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          duration: 0.8,
        }}
      />

      {/* 2. Static Inner Dark Blue Circle (Visually on top of the rotating gradient) */}
      <div className="absolute right-[92px] top-0 size-[600px] rounded-full flex items-center justify-center pointer-events-none">
        <div className={`size-[420px] rounded-full bg-[${DARK_BLUE_BG}]`}></div>
      </div>

      {/* 3. Animated Active Category Marker (White Circle) */}
      <motion.div
        className={`absolute size-[160px] translate-y-1 rounded-full border-[10px] border-[#FACC15] bg-white pointer-events-none`}
        initial={false} // Don't animate on initial load, use activeCategory's position
        animate={currentTargets.marker}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          duration: 0.6,
        }}
      />

      {/* 4. Category Clickable Areas, Icons & Text (Static positions relative to sidebar) */}
      {categories.map(({ name, count, Icon, pos }) => {
        const isActive = activeCategory === name;
        return (
          <div
            key={name}
            className="absolute cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-dark rounded-full p-2"
            style={pos}
            onClick={() => onSelectCategory(name)}
            role="button"
            aria-pressed={isActive}
            tabIndex={0}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && onSelectCategory(name)
            }
          >
            <Icons
              type={Icon}
              className={
                isActive
                  ? "scale-[1.35]"
                  : "scale-100 group-hover:scale-110 group-focus:scale-110"
              }
            />
            {/* Text is hidden when category is active (as it would be behind the marker) */}
            {!isActive && (
              <div
                className={`absolute left-[calc(100%+70px)] top-1/2 flex -translate-y-1/2 flex-col gap-0.5 text-white transition-opacity duration-300 opacity-70 group-hover:opacity-100 group-focus:opacity-100`}
              >
                <span className="text-xl inline-block font-mulish font-normal !leading-[1.255] whitespace-nowrap">
                  {name}
                </span>
                <span
                  className={`text-sm font-mulish font-normal !leading-[1.255] flex h-6 w-max items-center justify-center rounded-full bg-[${LIGHT_BLUE_BADGE}] px-3`}
                >
                  {count} Rides
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CategorySidebar;
