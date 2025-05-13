export const navLinks = [
    {
      name: "Locations",
      icon: "location",
      dropdown: [
        {
          name: "Kochi",
          img: "https://d22pimhl2qmbj7.cloudfront.net/public/Kochi_cb42a7a748_3d2d5912c4.webp"
        },
        {
          name: "Bengaluru",
          img: "https://d22pimhl2qmbj7.cloudfront.net/public/Bangalore_a29cdf2e2c_dd51c380ad.webp",
          submenu: [
            { name: "Park", img: "/bangalore-park.png" },
            { name: "Resort", img: "/bangalore-resort.png" }
          ]
        },
        {
          name: "Hyderabad",
          img: "https://d22pimhl2qmbj7.cloudfront.net/public/Hyderabad_44ee040feb_30635eba9c.webp"
        },
        {
          name: "Bhubaneswar",
          img: "https://d22pimhl2qmbj7.cloudfront.net/public/Bhubaneswar_b007f8a2ac_0e6a813c49.webp"
        }
      ]
    },
    {
      name: "Offers",
      icon: "offers",
      href: "/offers"
    },
    {
      name: "Rides",
      icon: "rides",
      href: "/rides"
    },
    {
      name: "Restaurants",
      icon: "restaurants",
      href: "/restaurants"
    },
    {
      name: "Events",
      icon: "events",
      href: "/events"
    }
  ];