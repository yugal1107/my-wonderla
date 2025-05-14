const ParkList = ({ parks }) => (
    <div className="flex flex-col space-y-2.5 pb-2.5 pt-1.5 md:p-1 md:pb-3">
        {parks.map((park) => (
            <a
                key={park.name}
                href={park.href}
                className="capitalize flex items-center gap-3 rounded-[14px] bg-white/10
                    transform transition-transform duration-100 ease-in-out 
                    hover:-translate-y-1 active:translate-y-0"
            >
                {/* <div className="size-9 rounded-full">
                    <img
                        alt={park.name}
                        className="h-full w-full object-cover"
                        src={park.icon}
                    />
                </div> */}
                <span className="text-base inline-block font-mulish !leading-[1.255] text-left font-medium">
                    {park.name}
                </span>
            </a>
        ))}
    </div>
);

export default ParkList;
