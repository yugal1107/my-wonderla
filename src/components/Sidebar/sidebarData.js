export const sidebarData = {
    sections: [
      {
        type: 'dropdown',
        title: 'Parks',
        icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/playground_e8b25627b1.svg',
        description: 'Explore your favourite Wonderla Park',
        items: [
          {
            name: 'Bengaluru',
            icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/Ellipse_6136_1_c46850a98c.png',
            href: '/bengaluru'
          },
          {
            name: 'Kochi',
            icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/Ellipse_6137_a5c3902ca6.png',
            href: '/kochi'
          },
          {
            name: 'Hyderabad',
            icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/Ellipse_6136_2_04e5b929ab.png',
            href: '/hyderabad'
          },
          {
            name: 'Bhubaneswar',
            icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/Ellipse_6137_1_f18a5c6566.png',
            href: '/bhubaneswar'
          }
        ]
      },
      {
        type: 'link',
        title: 'Resorts',
        icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/city_45e0a87cc8.svg',
        description: 'Get a rejuvenating experience at Wonderla Resort',
        href: '/bengaluru-resort'
      },
      {
        type: 'link',
        title: 'Offers & Combos',
        icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/discount_e3ac599ad9.svg',
        description: 'Plan the perfect day with exciting offers',
        href: '/offers'
      },
      {
        type: 'link',
        title: 'Timings and Guidelines',
        icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/time_68af0a1a84.svg',
        description: 'Know the timings and other guidelines',
        href: '/rules/facilities-and-amenities'
      },
      {
        type: 'dropdown',
        title: 'Quick links',
        icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/unlink_1_bb57b8aa2f.svg',
        description: 'Explore all other relevant information here',
        items: [
          { name: 'Restaurants', href: '/restaurants' },
          { name: 'Merchandise', href: '/merchandise' },
          { name: 'Events', href: '/events' }
        ]
      },
      {
        type: 'link',
        title: 'About Us',
        icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/about_us_3ae10e9512.svg',
        description: 'Know all about Wonderla',
        href: '/about-us'
      },
      {
        type: 'link',
        title: 'Contact Us',
        icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/support_1_f316ee7cce.svg',
        description: 'Get in touch Wonderla team',
        href: '/contact-us'
      }
    ],
    ctas: [
      {
        title: 'Group booking',
        icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg',
        description: 'Reach out to Wonderla team',
        href: 'https://www.wonderlacorp.com',
        bgColor: 'yellow',
        textColor: 'black'
      },
      {
        title: 'Tour Operator Portal',
        icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/tour_portal_c097403085.svg',
        description: 'Reach out to Wonderla team',
        href: 'https://partner.wonderla.com/index.php',
        bgColor: 'blue',
        textColor: 'white'
      },
      {
        title: 'How to reach',
        icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/how_to_reach_f52afe8765.svg',
        description: 'Directions, Routes & Travel Options',
        href: '/rules/map#getting-to-wonderla',
        bgColor: 'yellow',
        textColor: 'black'
      }
    ],
    decorativeImage: {
      src: 'https://www.wonderla.com/_next/static/media/header-drawer-bottom-icon.0d0f9f60.png',
      alt: 'Amusement park decoration'
    }
  };
  
  // Helper function to get icon by name
  export const getIcon = (name) => {
    const icons = {
      playground: 'https://d22pimhl2qmbj7.cloudfront.net/public/playground_e8b25627b1.svg',
      bengaluru: 'https://d22pimhl2qmbj7.cloudfront.net/public/Ellipse_6136_1_c46850a98c.png',
      // Add all other icons...
    };
    return icons[name] || '';
  };