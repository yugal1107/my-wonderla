import React from "react";

const Icons = ({
  type,
  className = "",
  imgClassName = "",
  svgClassName = "",
}) => {
  // Base classes for img tags, can be overridden or extended by imgClassName
  const defaultImgClasses = `h-4.5 object-contain ${imgClassName}`;
  // Base classes for inline SVGs, can be overridden or extended by svgClassName
  const defaultSvgClasses = `h-4.5 w-auto fill-current ${svgClassName}`; // w-auto to maintain aspect ratio

  // Filter style from your HTML to make icons appear in #717D92
  // This specific filter aims for a greyish color.
  const greyIconFilter = {
    filter:
      "brightness(0) saturate(100%) invert(48%) sepia(12%) saturate(368%) hue-rotate(182deg) brightness(94%) contrast(86%)",
  };

  const icons = {
    // Inline SVG for location, as it's simple and uses currentColor
    location: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke-width="1.5"
      >
        <path
          d="M9.00002 16.2C9.00002 16.2 14.6348 11.1913 14.6348 7.43477C14.6348 4.32277 12.112 1.79999 9.00002 1.79999C5.88801 1.79999 3.36523 4.32277 3.36523 7.43477C3.36523 11.1913 9.00002 16.2 9.00002 16.2Z"
          stroke="#717D92"
          stroke-width="1.5"
        />
        <path
          d="M10.8002 7.2001C10.8002 8.19421 9.99436 9.0001 9.00025 9.0001C8.00613 9.0001 7.20025 8.19421 7.20025 7.2001C7.20025 6.20599 8.00613 5.4001 9.00025 5.4001C9.99436 5.4001 10.8002 6.20599 10.8002 7.2001Z"
          stroke="#717D92"
          stroke-width="1.5"
        />
      </svg>
    ),
    // Using img tag for offers with the specified filter
    offers: (
      <img
        src="https://d22pimhl2qmbj7.cloudfront.net/public/discount_star_01_fdc6bc5632.svg?w=48&q=75"
        alt="offers"
        className={defaultImgClasses}
        style={greyIconFilter}
      />
    ),
    // Using img tag for rides with the specified filter
    rides: (
      <img
        src="https://d22pimhl2qmbj7.cloudfront.net/public/marker_02_e495ae7481.svg?w=48&q=75"
        alt="rides"
        className={defaultImgClasses}
        style={greyIconFilter}
      />
    ),
    // Using img tag for restaurants with the specified filter
    restaurants: (
      <img
        src="https://d22pimhl2qmbj7.cloudfront.net/public/Frame_12_ebee895750.svg?w=48&q=75"
        alt="restaurants"
        className={defaultImgClasses}
        style={greyIconFilter}
      />
    ),
    // Using img tag for events with the specified filter
    events: (
      <img
        src="https://d22pimhl2qmbj7.cloudfront.net/public/Frame_13_c4d6212160.svg?w=48&q=75"
        alt="events"
        className={defaultImgClasses}
        style={greyIconFilter}
      />
    ),
    // Inline SVG for chevron (down arrow), uses currentColor
    // Renamed from 'chevron' for clarity
    chevronDown: (
      <svg
        height="24"
        width="24"
        className=""
        viewBox="0 0 24 24"
        fill="none"
        stroke="#334DCF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 9L12 15L18 9" />
      </svg>
    ),
    chevronDownLocation: (
      <img
        src="https://wonderla.vercel.app/icons/downarrow.svg"
        alt="downArrow"
        class="m-0 transition-transform duration-200 group-hover:rotate-180"
      ></img>
    ),
    // Inline SVG for the right arrow in submenus, uses currentColor
    // Renamed from 'arrow'
    arrowRight: (
      <svg
        height="20"
        width="20"
        className={`${defaultSvgClasses} stroke-current text-[#717D92]`}
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 6L15 12L9 18"></path>
      </svg>
    ),
    // Kept menu and close as inline SVGs, using currentColor
    menu: (
      <svg
        width="27"
        height="17"
        viewBox="0 0 27 17"
        className={`${defaultSvgClasses} fill-current`}
      >
        {" "}
        {/* Adjust color via parent text color */}
        <rect
          x="0.322266"
          y="0.0905762"
          width="26.334"
          height="3.15699"
          rx="1.5785"
        />
        <rect
          x="0.322266"
          y="6.96667"
          width="26.334"
          height="3.15699"
          rx="1.5785"
        />
        <rect
          x="0.322266"
          y="13.8429"
          width="26.334"
          height="3.15699"
          rx="1.5785"
        />
      </svg>
    ),
    close: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={`${defaultSvgClasses} stroke-current`}
      >
        {" "}
        {/* Adjust color via parent text color */}
        <line
          x1="18"
          y1="6"
          x2="6"
          y2="18"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="6"
          y1="6"
          x2="18"
          y2="18"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    // SVGs for CategorySidebar - these are larger and have specific fills handled in CategorySidebar.jsx
    // These can be kept as separate components or inline here. For simplicity here:
    landCategory: (props) => (
      /* Paste LandIcon SVG code here, ensure fill={props.fill} className={props.className} */ <svg
        {...props}
      >
        <path d="..." fill={props.fill} />
      </svg>
    ),
    waterCategory: (props) => (
      /* Paste WaterIcon SVG code here, ensure fill={props.fill} className={props.className} */ <svg
        {...props}
      >
        <path d="..." fill={props.fill} />
      </svg>
    ),
    kidsCategory: (props) => (
      /* Paste KidsIcon SVG code here, ensure fill={props.fill} className={props.className} */ <svg
        {...props}
      >
        <path d="..." fill={props.fill} />
      </svg>
    ),
  };

  const IconComponent = icons[type];

  // If it's one of the category icons, we expect fill and className to be passed directly
  if (
    type === "landCategory" ||
    type === "waterCategory" ||
    type === "kidsCategory"
  ) {
    return IconComponent ? (
      <IconComponent
        fill={className.includes("text-white") ? "white" : "#334DCF"}
        className={className}
      />
    ) : null;
  }

  return IconComponent || null;
};

export default Icons;
