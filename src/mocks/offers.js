export const offersData = [
  {
    id: 1,
    title: `Beautiful & luxurious apartment at great location`,
    image: `img/apartment-01.jpg`,
    coordinates: [52.3909553943508, 4.85309666406198],
    gallery: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
    ],
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae blanditiis dolor doloribus ducimus exercitationem fugit impedit iusto labore minus, molestiae nemo numquam odit porro quis repellat sequi unde voluptatem.`,
    bedrooms: 4,
    maxGuests: 6,
    isPremium: true,
    devices: [
      `Wifi`,
      `Heating`,
      `Kitchen`,
      `Cable TV`,
      `Washing machine`,
      `Washing machine`,
      `Dishwasher`,
      `Baby seat`,
    ],
    price: 120,
    type: `apartment`,
    rate: 4,
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Sasha`,
      isSuper: true
    },
    reviewsId: [1, 2]
  },

  {
    id: 2,
    title: `Wood and stone place`,
    image: `img/apartment-02.jpg`,
    coordinates: [52.3809553943508, 4.939309666406198],
    gallery: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
    ],
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae blanditiis dolor doloribus ducimus exercitationem.`,
    bedrooms: 2,
    maxGuests: 4,
    isPremium: false,
    devices: [
      `Wifi`,
      `Heating`,
      `Kitchen`,
      `Cable TV`,
      `Washing machine`,
      `Washing machine`,
    ],
    price: 80,
    type: `room`,
    rate: 5,
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Katy`,
      isSuper: true
    },
    reviewsId: [3]
  },

  {
    id: 3,
    title: `Canal View Prinsengracht`,
    image: `img/apartment-01.jpg`,
    coordinates: [52.369553943508, 4.85309666406198],
    gallery: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
    ],
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit exercitationem fugit impedit iusto labore minus, molestiae nemo numquam odit porro quis repellat sequi unde voluptatem.`,
    bedrooms: 2,
    maxGuests: 8,
    isPremium: true,
    devices: [
      `Wifi`,
      `Heating`,
      `Kitchen`,
      `Cable TV`,
      `Washing machine`,
      `Washing machine`,
      `Baby seat`,
    ],
    price: 132,
    type: `house`,
    rate: 3,
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Nikolay`,
      isSuper: true
    },
    reviewsId: [4, 5]
  },

  {
    id: 4,
    title: `Nice, cozy, warm big bed apartment`,
    image: `img/apartment-01.jpg`,
    coordinates: [52.3909553943508, 4.929309666406198],
    gallery: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
    ],
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae blanditiis dolor doloribus ducimus exercitationem fugit impedit iusto labore minus, molestiae nemo numquam odit porro quis repellat sequi unde voluptatem.`,
    bedrooms: 1,
    maxGuests: 2,
    isPremium: false,
    devices: [
      `Wifi`,
      `Washing machine`,
      `Washing machine`,
      `Dishwasher`,
      `Baby seat`,
    ],
    price: 56,
    type: `hotel`,
    rate: 2.5,
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Eduard`,
      isSuper: false
    },
    reviewsId: []
  },

];
