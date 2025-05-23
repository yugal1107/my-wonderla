import React from "react";

// Define colors
const DARK_BLUE_GRADIENT_END = "#22304A";

const RideCard = ({ ride }) => {
  if (!ride) return null;

  // Gradient setup for overlay
  const gradientStyle = `bg-gradient-to-t from-[#22304A] via-[#22304A]/60 via-40% to-transparent`;

  return (
    <div className="relative h-[346px] min-w-[246px] overflow-hidden rounded-t-[22px] shrink-0 group z-0">
      {/* Media Display */}
      <div className="absolute inset-0 w-full h-full">
        {ride.mediaType === "video" ? (
          <video
            key={ride.mediaUrl}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          >
            <source src={ride.mediaUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            alt={ride.title}
            src={ride.mediaUrl}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
      </div>

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 ${gradientStyle} pointer-events-none`}
      ></div>

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col px-3 pb-2 text-white z-10">
        <h3 className="text-lg font-mulish capitalize font-bold truncate leading-tight">
          {ride.title}
        </h3>
        <p className="text-xs font-mulish font-normal mt-px opacity-80 leading-tight">
          {ride.location}
        </p>
        <div className="mt-1.5 text-xs font-mulish leading-snug h-[calc(1.375*3em)] line-clamp-3 mb-1">
          {ride.description}
        </div>
        <a
          className="inline-block w-full max-w-[150px]"
          href={ride.detailsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={`h-10 w-full max-w-[150px] rounded-lg text-xs font-black uppercase leading-tight flex items-center justify-center text-[#334DCF] bg-[#FACC15] hover:opacity-90 transition-opacity duration-300`}
            tabIndex={-1}
          >
            Ride Details
          </div>
        </a>
      </div>
    </div>
  );
};

export default RideCard;
