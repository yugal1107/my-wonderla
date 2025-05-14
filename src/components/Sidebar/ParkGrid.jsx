const ParkGrid = ({ parks }) => (
  <div className="grid grid-cols-2 gap-2.5 pb-2.5 pt-1.5 md:p-1 md:pb-3">
    {parks.map((park) => (
      <a
        key={park.name}
        href={park.href}
        className="capitalize flex flex-col items-center gap-3 rounded-[14px] bg-white/10 p-2 shadow-[0px_8px_12px_0px_#00000033] md:p-2.5
                transform transition-transform duration-100 ease-in-out 
                hover:-translate-y-1 active:translate-y-0 active:shadow-none"
      >
        <div className="size-9 rounded-full">
          <img
            alt={park.name}
            className="h-full w-full object-cover"
            src={park.icon}
          />
        </div>
        <span className="text-base inline-block font-mulish !leading-[1.255] text-center font-medium">
          {park.name}
        </span>
      </a>
    ))}
  </div>
);

export default ParkGrid;
