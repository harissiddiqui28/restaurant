import React from 'react';
import { FC } from 'react';
import Image from 'next/image';
const Carousel:FC = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
<>
<div className="flex items-center justify-center">
  <Image src="/bur.webp" alt="Logo" width={1370} height={400} objectFit="fill" className=" hero" />
</div>
</>
    // <Slider {...settings}>
    //   <div>
    //     <img src="/image1.jpg" alt="Image 1" className="w-full" />
    //   </div>
    //   <div>
    //     <img src="/image2.jpg" alt="Image 2" className="w-full" />
    //   </div>
    //   <div>
    //     <img src="/image3.jpg" alt="Image 3" className="w-full" />
    //   </div>
    // </Slider>
  );
};

export default Carousel;
