import React, { useState } from "react";
import SmallHeading from "../smallheading/SmallHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, A11y } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
const data = [
  {
    id: 1,
    date: "Eleanor Pena",
    title:
      "Leverage agile frameworks to provide a robust syns is for strategy foster Leverage agile frameworks to provide a robust synopsis for go for strategy foster  ",
    img: "https://i.pinimg.com/736x/cf/02/05/cf0205d5cddd3294f9cf1badcc6c13f3.jpg",
    city_image:"https://i.pinimg.com/736x/44/4a/b5/444ab57836312b637c5f5a7c0acf8bcd.jpg"
  },
  {
    id: 2,
    date: "newo yuh",
    title:
      "Leverage agile frameworks to provide a robust syns is for strategy foster Leverage agile frameworks to provide a robust synopsis for go for strategy foster  ",
    img: "https://i.pinimg.com/736x/1d/f2/4f/1df24f8ac8efc2eb6797ca342c1ed36d.jpg",
    city_image:"https://i.pinimg.com/236x/d3/e8/8b/d3e88b4088032b1046e237dafcaa8a00.jpg"

  },
  {
    id: 3,
    date: "Eleanor Pena",
    title:
      "Leverage agile frameworks to provide a robust syns is for strategy foster Leverage agile frameworks to provide a robust synopsis for go for strategy foster  ",
    img: "https://i.pinimg.com/736x/cf/02/05/cf0205d5cddd3294f9cf1badcc6c13f3.jpg ",
    city_image:"https://i.pinimg.com/236x/d3/e8/8b/d3e88b4088032b1046e237dafcaa8a00.jpg"

  },
  {
    id: 4,
    date: "fin steven ",
    title:
      "Leverage agile frameworks to provide a robust syns is for strategy foster Leverage agile frameworks to provide a robust synopsis for go for strategy foster  ",
    img: "https://i.pinimg.com/736x/1d/f2/4f/1df24f8ac8efc2eb6797ca342c1ed36d.jpg",
    city_image:"https://i.pinimg.com/236x/e2/2c/16/e22c1624ba6d5fe9f89e3931fd9293bb.jpg"

  },
  {
    id: 5,
    date: "hardy dark",
    title:
      "Leverage agile frameworks to provide a robust syns is for strategy foster Leverage agile frameworks to provide a robust synopsis for go for strategy foster  ",
    img: "https://i.pinimg.com/736x/cf/02/05/cf0205d5cddd3294f9cf1badcc6c13f3.jpg",
    city_image:"https://i.pinimg.com/236x/7a/96/f0/7a96f0393d0dc39efe97deeb1e0c2747.jpg"

  },
  {
    id: 6,
    date: "beven jon",
    title:
      "Leverage agile frameworks to provide a robust syns is for strategy foster Leverage agile frameworks to provide a robust synopsis for go for strategy foster  ",
    img: "https://i.pinimg.com/736x/1d/f2/4f/1df24f8ac8efc2eb6797ca342c1ed36d.jpg  ",
    city_image:"https://i.pinimg.com/236x/47/e2/8c/47e28cb37314c93cdb615ff64bd2c0e5.jpg"

  },
];
const ClientTestumonials = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  return (
    <div className="pt-[321.98px] px-4 max-w-[1322px] mx-auto pb-[120px]">
      <div className="max-w-[630px] mx-auto text-center flex flex-col justify-center items-center">
        <SmallHeading text="Client Testimonials" />
        <h1 className="section-title text-secondary">
          Escape to Extraordinary Where Every Journey
        </h1>
      </div>
      <div className="mt-[60.2px] relative w-full flex max-lg:flex-col max-lg:gap-10 items-center">
        <div className="z-10 max-w-[740px] w-full custom-shadow rounded-rounded-20 bg-white lg:absolute top-1/2 transform lg:-translate-y-1/2">
          <Swiper
            onSwiper={setSwiperRef}
            onSlideChange={handleSlideChange} // Handle slide change to update active slide
            modules={[Pagination, Navigation, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1080: {
                slidesPerView: 1,
              },
            }}
          >
            {data.length > 0 ? (
              data.map((ele, index) => (
                <SwiperSlide key={ele.id}>
                  <div className="relative w-full p-5 md:p-[60px]">
                    <p className="text-[30px] text-secondary leading-[50px] font-normal max-w-[620px]">
                      {ele.title}
                    </p>
                    <div className="mt-[50.04px] flex-wrap flex gap-5 justify-between items-center">
                      <div className="flex gap-5 items-center">
                        <img
                          src={ele.img}
                          className="h-20 w-20 rounded-full object-cover object-top"
                          alt=""
                        />
                        <div>
                          <h1 className="leading-lead-30 text-[22px] font-bold text-secondary">
                            {ele.date}
                          </h1>
                          <p className="section-subtitle text-custom-gray mt-[5px]">
                            President of Sales
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-5 ml-auto z-10 justify-end">
                        <button
                          onClick={() => swiperRef?.slidePrev()}
                          className="h-[60px] w-[60px] rounded-full flex justify-center items-center bg-banner-bg p-3"
                        >
                          <FaArrowLeft className="text-secondary text-xl" />
                        </button>
                        <button
                          onClick={() => swiperRef?.slideNext()}
                          className="h-[60px] w-[60px] rounded-full bg-primary flex justify-center items-center p-3"
                        >
                          <FaArrowRight className="text-white text-xl" />
                        </button>
                      </div>
                    </div>

                    <img
                      src="/assets/images/review/review.png"
                      alt=""
                      className="w-[333.99px] absolute right-[100px] top-[71.96px] h-[261.66px]"
                    />
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <p className="capitalize text-red-600 font-semibold text-xl text-center">
                No data Found
              </p>
            )}
          </Swiper>
        </div>
        <div className="md:max-w-[630px] lg:ml-auto w-full rounded-rounded-20 overflow-hidden  h-[611px]">
          {/* Change the image based on the active slide */}
          <img
            src={data[activeSlideIndex]?.city_image}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientTestumonials;
