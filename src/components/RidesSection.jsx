import React, { useState, useEffect, useCallback } from "react";
import CategorySidebar from "./CategorySidebar";
import RideCard from "./RideCard";
import CarouselControls from "./CarouselControls";
import ridesData from "../data/rides.json";

// Define constants
const CARD_WIDTH = 246;
const CARD_GAP = 20;
const DARK_BLUE_BG = "#22304A";
const ICON_BLUE = "#334DCF";
const YELLOW_BUTTON = "#FACC15";

const RidesSection = () => {
  const [rides, setRides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("Land");

  useEffect(() => {
    // Use the separated data based on the active category
    setRides(ridesData[activeCategory] || []);
    setCurrentIndex(0); // Reset index when category changes
  }, [activeCategory]);

  const totalCards = rides.length;
  const VISIBLE_CARDS_APPROX = 3;
  const canGoPrev = currentIndex > 0;
  const canGoNext =
    totalCards > VISIBLE_CARDS_APPROX
      ? currentIndex < totalCards - VISIBLE_CARDS_APPROX
      : false;

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalCards - 1));
  }, [totalCards]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }, []);

  const translateX = currentIndex * (CARD_WIDTH + CARD_GAP);

  const categoryCounts = {
    Land: ridesData.Land?.length || 0,
    Water: ridesData.Water?.length || 0,
    Kids: ridesData.Kids?.length || 0,
  };

  return (
    <div className="flex w-full min-h-screen bg-[#22304A] font-mulish overflow-hidden">
      {/* Container for the main layout */}
      <div className="w-full mx-auto px-4 lg:px-8 flex pt-[150px] pb-[52px]">
        <CategorySidebar
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          categoryCounts={categoryCounts}
        />
        {/* Main Content Area */}
        <div className="ml-[66px] flex-1 flex flex-col gap-9 pl-3 w-0">
          {/* Top Row: Title + Controls */}
          <div className="mr-[60px] flex justify-between items-center gap-8 shrink-0">
            <h1 className="text-[56px] font-black uppercase leading-none tracking-tight text-white">
              Our Iconic Rides
            </h1>
            <CarouselControls
              onPrevClick={handlePrev}
              onNextClick={handleNext}
              canGoPrev={canGoPrev}
              canGoNext={canGoNext}
            />
          </div>

          {/* Carousel and Button Container */}
          <div className="flex flex-col gap-6">
            {/* Carousel Viewport */}
            <div className="relative w-full overflow-hidden h-[422px]">
              {/* Sliding Container */}
              <div
                className="absolute top-0 left-0 flex gap-5 transition-transform duration-500 ease-in-out h-full items-start"
                style={{ transform: `translateX(-${translateX}px)` }}
              >
                {rides.map((ride) => (
                  <RideCard key={ride.id} ride={ride} />
                ))}
              </div>
            </div>
            {/* Explore All Button - Centered below carousel */}
            <div className="flex">
              <a
                className="inline-block w-full max-w-[328px]"
                href={`/rides?category=${activeCategory.toLowerCase()}`}
              >
                <div
                  className={`capitalize h-14 w-full rounded-full text-base font-extrabold leading-tight flex items-center justify-center text-[#334DCF] bg-[#FACC15] hover:opacity-90 transition-opacity duration-300`}
                >
                  Explore All Rides!
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RidesSection;