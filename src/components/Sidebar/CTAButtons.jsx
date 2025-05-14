const CTAButtons = ({ ctas }) => (
    <div className="flex flex-col gap-2 pb-1 pt-3 md:gap-2.5 md:pt-3.5">
      {ctas.map((cta) => (
        <a 
          key={cta.title}
          href={cta.href}
          className={`capitalize flex items-center gap-2.5 rounded-[10px] px-3.5 py-2.5 md:gap-3 md:px-4 md:py-3 bg-${cta.bgColor}`}
        >
          <div className="size-10">
            <img 
              alt={cta.title} 
              className="h-full w-full object-contain" 
              src={cta.icon}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className={`text-base sm:text-lg lg:text-xl font-mulish font-medium capitalize !leading-[1.255] ${cta.bgColor === 'blue' ? 'text-white' : 'text-black'}`}>
              {cta.title}
            </h3>
            <p className={`text-xs inline-block font-mulish font-normal !leading-[1.255] ${cta.bgColor === 'blue' ? 'text-white' : 'text-gray-dark'}`}>
              {cta.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
  
  export default CTAButtons;