"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";

import SliderData, { CardData } from "@/test-objects/SliderData";
import CardCoctails from "@/components/CardCoctailsComponent";
import MainTitleComponent from "@/components/MainTitleComponent";

const CoctailSliders = () => {
  const isMobile = useMediaQuery("(max-width: 767.98px)");
  const isTablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1279.98px)"
  );
  const isLaptop = useMediaQuery(
    "(min-width: 1280px) and (max-width: 1439.98px)"
  );
  const isXlLaptop = useMediaQuery(
    "(min-width: 1440px) and (max-width: 1919.98px)"
  );
  const isDesktop = useMediaQuery("(min-width: 1920px)");

  let slidesToShow = 1;

  switch (true) {
    case isTablet:
      slidesToShow = 3;
      break;
    case isLaptop:
      slidesToShow = 4;
      break;
    case isXlLaptop:
      slidesToShow = 5;
      break;
    case isDesktop:
      slidesToShow = 6;
      break;
    default:
      slidesToShow = 1;
  }

  return (
    <section className="pb-[80px] flex flex-col items-center py-[60px]">
      <MainTitleComponent title="Coctails" className="!mb-5 xl:!mb-6" />
      <>
        <Carousel
          loop
          withIndicators={!isMobile}
          withControls={true}
          slideSize={isMobile ? "100%" : "25%"}
          align={isMobile ? "center" : "start"}
          slidesToScroll={slidesToShow}
          slideGap="lg"
          className="px-[20px] xs:max-w-[375px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1420px] 2xl:max-w-[1900px] xl:px-[40px] mx-0"
          classNames={{
            root: "w-[100%]",
            control:
              "bg-[transparent] color-[#fff] w-[48px] h-[48px] border-hidden shadow-none transition duration-300 ease-in-out group hover:bg-[#fd5103] hover:bg-[#fd5103]",
            controls: "absolute flex justify-end gap-[12px] top-[-80px] p-[0]",
            viewport: "overflow-visible overflow-x-clip",
            indicator: "bg-[#fd5103]  before:hidden z-[-1]",
            indicators: "bottom-[-80px]",
          }}
          previousControlIcon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition duration-300 rotate-180 group-hover:filter group-hover:invert-[100%] group-hover:sepia-[0] group-hover:saturate-[0] group-hover:hue-rotate-[240deg] group-hover:brightness-[200%] group-hover:contrast-[300%]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.7929 6.79289C15.1834 6.40237 15.8166 6.40237 16.2071 6.79289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L16.2071 17.2071C15.8166 17.5976 15.1834 17.5976 14.7929 17.2071C14.4024 16.8166 14.4024 16.1834 14.7929 15.7929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L14.7929 8.20711C14.4024 7.81658 14.4024 7.18342 14.7929 6.79289Z"
                fill="#1E212C"
              />
            </svg>
          }
          nextControlIcon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition duration-300 group-hover:filter group-hover:invert-[100%] group-hover:sepia-[0] group-hover:saturate-[0] group-hover:hue-rotate-[240deg] group-hover:brightness-[200%] group-hover:contrast-[300%]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.7929 6.79289C15.1834 6.40237 15.8166 6.40237 16.2071 6.79289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L16.2071 17.2071C15.8166 17.5976 15.1834 17.5976 14.7929 17.2071C14.4024 16.8166 14.4024 16.1834 14.7929 15.7929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L14.7929 8.20711C14.4024 7.81658 14.4024 7.18342 14.7929 6.79289Z"
                fill="#1E212C"
              />
            </svg>
          }
        >
          {SliderData.map((card: CardData, index) => (
            <Carousel.Slide key={index} className="flex">
              {isMobile ? (
                <div className="w-full">
                  <CardCoctails key={card.id} cardData={card} />
                </div>
              ) : (
                <CardCoctails key={card.id} cardData={card} />
              )}
            </Carousel.Slide>
          ))}
        </Carousel>
      </>
    </section>
  );
};
export default CoctailSliders;

// "use client";
// import Link from "next/link";
// import Title from "@/components/MainTitleComponent";
// import ProductCardComponent from "@/components/ProductCardComponent";

// import { Carousel } from "@mantine/carousel";
// import { useMediaQuery } from "@mantine/hooks";

// import testProduct from "@/test_objects/c.json";

// const ProductCardData = testProduct.map((product) => ({
//   card: <ProductCardComponent
//   key={product.id}
//   product={product}
//   // selectedTaste={selectedTaste}
//   // setSelectedTaste={setSelectedTaste}
//   discount={
//     product.discount ? product.discount.value : undefined
//   }
//   rating={
//     [1, 2, 3, 4, 5].includes(
//       product.rating ? product.rating : 0
//     )
//       ? (product.rating as 1 | 2 | 3 | 4 | 5)
//       : undefined
//   }
// />,
// }));

// const NewArrivalsSection = () => {
//

// export default NewArrivalsSection;
