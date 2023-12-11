import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Ajuste para o breakpoint que desejar
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600, // Ajuste para o breakpoint que desejar
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480, // Ajuste para o breakpoint que desejar
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-[1196px] w-full mx-auto lg:p-4 lg:pt-[80px]  text-center lg:pb-[80px] items-center justify-center pb-[80px] ">


      {/* Carrossel de imagens */}
      <Slider {...settings}>
        <div className="flex justify-center  items-center mx-auto">
          <Image src="/imgpgvendas/c1v2.webp" className='w-full' alt="Imagem 1" width={277} height={435} />
        </div>
        <div className="flex justify-center  items-center">
          <Image src="/imgpgvendas/c2v2.webp" className='w-full' alt="Imagem 2" width={277} height={435} />
        </div>
        <div className="flex justify-center  items-center">
          <Image src="/imgpgvendas/c3v2.webp"className='w-full' alt="Imagem 3" width={277} height={435} />
        </div>
        <div className="flex justify-center  items-center">
          <Image src="/imgpgvendas/c4v2.webp" className='w-full' alt="Imagem 4" width={277} height={435} />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;
