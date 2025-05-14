import React, { useState } from 'react';

// Sidebar data
const sidebarData = {
  sections: [
    {
      type: 'dropdown',
      title: 'Parks',
      description: 'Explore Your favourite Wonderla Park',
      icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/playground_e8b25627b1.svg?w=48&q=75',
      items: [
        { name: 'Kochi', icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/Kochi_cb42a7a748.jpg?w=96&q=75', href: '/kochi' },
        { name: 'Bengaluru', icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/Bangalore_a29cdf2e2c.jpg?w=96&q=75', href: '/bengaluru' },
        { name: 'Hyderabad', icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/Hyderabad_44ee040feb.jpg?w=96&q=75', href: '/hyderabad' },
        { name: 'Bhubaneshwar', icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/Bhubaneswar_b007f8a2ac.jpg?w=96&q=75', href: '/bhubaneshwar' },
      ],
    },
    {
      type: 'link',
      title: 'Resorts',
      description: 'Get a rejuvenating experience at Wonderla Resort',
      icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/city_45e0a87cc8.svg?w=48&q=75',
      href: '/resorts',
    },
    {
      type: 'link',
      title: 'Offers & Combos',
      description: 'Plan the perfect day with exciting offers',
      icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/discount_e3ac599ad9.svg?w=48&q=75',
      href: '/offers-combos',
    },
    {
      type: 'link',
      title: 'Timings And Guidelines',
      description: 'Know the timings and other guidelines',
      icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/time_68af0a1a84.svg?w=48&q=75',
      href: '/timings-guidelines',
    },
    {
      type: 'link',
      title: 'About Us',
      description: 'Know all about Wonderla',
      icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/about_us_3ae10e9512.svg?w=48&q=75',
      href: '/about-us',
    },
    {
      type: 'dropdown',
      title: 'Quick Links',
      description: 'Explore all other relevant information here',
      icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/unlink_1_bb57b8aa2f.svg?w=48&q=75',
      items: [
        { name: 'Restaurants', href: '/restaurants' },
        { name: 'Merchandise', href: '/merchandise' },
        { name: 'Events', href: '/events' },
      ],
    },
    {
      type: 'link',
      title: 'Contact Us',
      description: 'Get In Touch Wonderla Team',
      icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/support_1_f316ee7cce.svg?w=48&q=75',
      href: '/contact-us',
    },
  ],
  ctas: [
    {
      title: 'Group Booking',
      description: 'Reach Out To Wonderla Team',
      icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg?w=96&q=75',
      href: '/group-booking',
      bgColor: 'bg-yellow-400',
      textColor: 'text-black',
    },
    {
      title: 'Tour Operator Portal',
      description: 'Reach Out To Wonderla Team',
      icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/tour_portal_c097403085.svg?w=96&q=75',
      href: '/tour-operator-portal',
      bgColor: 'bg-blue-600',
      textColor: 'text-white',
    },
    {
      title: 'Partner With Us',
      description: 'Reach Out To Wonderla Team',
      icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg?w=96&q=75',
      href: '/partner-with-us',
      bgColor: 'bg-yellow-400',
      textColor: 'text-black',
    },
  ],
};

const Sidebar = ({ isOpen, onClose }) => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className={`fixed inset-0 z-50 flex flex-row-reverse ${isOpen ? 'block' : 'hidden'}`}>
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-60"
        onClick={onClose}
      ></div>

      {/* Sidebar Panel */}
      <div className="w-[470px] bg-white overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center bg-white w-[470px] p-8 pb-3">
          <img
            className="h-15"
            alt="Wonderla Logo"
            src="https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=256&q=75"
          />
          <button
            className="mr-4 p-1.5 rounded-full cursor-pointer border border-gray-200"
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-[18px] text-black"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Menu Content */}
        <div className="h-full min-h-0 overflow-y-scroll p-7 no-scrollbar">
          <div className="h-fit flex flex-col overflow-y-visible flex-1 pb-24">
            {sidebarData.sections.map((section) => (
              <div key={section.title} className="flex-1">
                {section.type === 'dropdown' ? (
                  <div className="cursor-pointer">
                    <div
                      className="flex items-center gap-3 justify-between"
                      onClick={() => toggleSection(section.title)}
                    >
                      <div className="flex items-center gap-3">
                        <div>
                          <img className="h-7" alt={section.title} src={section.icon} />
                        </div>
                        <div>
                          <div className="text-xl font-normal mb-1">{section.title}</div>
                          <div className="text-xs text-gray-600">{section.description}</div>
                        </div>
                      </div>
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#334DCF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transform transition-transform duration-350 ${
                          openSections[section.title] ? 'rotate-180' : ''
                        }`}
                      >
                        <path d="M6 9L12 15L18 9"></path>
                      </svg>
                    </div>
                    <div
                      className={`overflow-hidden transform transition-all ease-out duration-350 ${
                        openSections[section.title] ? 'h-auto' : 'h-0'
                      }`}
                    >
                      {section.title === 'Parks' ? (
                        <div className="grid grid-cols-2 grid-rows-2 gap-3 p-3 pb-1">
                          {section.items.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex cursor-pointer items-center flex-col border border-gray-200 shadow-md rounded-2xl p-3"
                            >
                              <div>
                                <img
                                  className="rounded-full h-10 w-10 mb-2 object-cover"
                                  alt={item.name}
                                  src={item.icon}
                                />
                              </div>
                              <div className="capitalize">{item.name}</div>
                            </a>
                          ))}
                        </div>
                      ) : (
                        <div className="flex pt-3">
                          <div className="w-10"></div>
                          <div className="flex gap-2 text-sm flex-col">
                            {section.items.map((item) => (
                              <a key={item.name} href={item.href}>
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <a href={section.href} className="flex-1 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div>
                        <img className="h-7" alt={section.title} src={section.icon} />
                      </div>
                      <div>
                        <div className="text-xl font-normal mb-1">{section.title}</div>
                        <div className="text-xs text-gray-600">{section.description}</div>
                      </div>
                    </div>
                  </a>
                )}
                <div>
                  <div className="h-4"></div>
                  <hr className="border-t-1 border-gray-200" />
                  <div className="h-4"></div>
                </div>
              </div>
            ))}

            {/* CTAs */}
            <div className="flex flex-col gap-2">
              {sidebarData.ctas.map((cta) => (
                <a
                  key={cta.title}
                  href={cta.href}
                  className={`flex-1 p-2 rounded-2xl ${cta.bgColor} ${cta.textColor}`}
                >
                  <div className="flex items-center gap-4">
                    <div>
                      <img className="h-10" alt={cta.title} src={cta.icon} />
                    </div>
                    <div>
                      <div className="text-xl font-normal mb-1">{cta.title}</div>
                      <div className={`text-xs ${cta.textColor === 'text-white' ? 'text-white' : 'text-gray-600'}`}>
                        {cta.description}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;