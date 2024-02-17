// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { FC } from 'react';
// const Carousell:FC = () => {
//   const items = [
//     'New Arrival',
//     'Deals',
//     'Loaded Fries',
//     'Flatbreads',
//     'Burgers',
//     'Combo Meals',
//     'Family Deals',
//     'Southern Fried Chicken',
//     'Chicken Fingers & Nuggets',
//     'Beverages',
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <Slider {...settings}>
//       {items.map((item, index) => (
//         <div key={index} className="p-4">
//           <a
//             href="#"
//             className="hover:text-red-500 cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none block"
//           >
//             {item}
//           </a>
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default Carousell;
