import { navLinks } from "./navData";
import Dropdown from "./Dropdown";
import Icons from "../Icons";

const NavLinks = () => (
  <nav className="mx-auto flex-wrap items-center gap-x-7 gap-y-1 lg:flex">
    {navLinks.map((link) => (
      <div key={link.name} className="group relative">
        {link.dropdown ? (
          <Dropdown link={link} />
        ) : (
          <a
            href={link.href}
            className="capitalize flex cursor-pointer items-center gap-2 hover:text-blue-light transition-colors"
          >
            <Icons type={link.icon} className="text-red-500 size-6"/>
            <span className="inline-block font-mulish text-sm font-black uppercase">
              {link.name}
            </span>
          </a>
        )}
      </div>
    ))}
  </nav>
);

export default NavLinks;
