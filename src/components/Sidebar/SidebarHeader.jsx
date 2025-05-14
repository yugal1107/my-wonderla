import Icons from "../Icons";

const SidebarHeader = ({ onClose }) => (
  <div className="flex items-center justify-between pb-3 md:pb-4 lg:pb-4">
    <a
      className="inline-block capitalize aspect-[124/48] w-[102px] md:w-[138px]"
      href="/"
    >
      <img
        alt="Wonderla Logo"
        className="h-full w-full object-cover"
        src="https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png"
      />
    </a>
    <button
      className="flex items-center justify-center size-8 rounded-full border-[1.56px] border-[#dedede]"
      onClick={onClose}
      aria-label="Close menu"
    >
      <Icons type="close" className="size-[18px] text-black" />
    </button>
  </div>
);

export default SidebarHeader;
