import React, { useState } from "react";
import SmallHeading from "../../components/smallheading/SmallHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, A11y } from "swiper/modules";
import { FaArrowRight,FaArrowLeft  } from "react-icons/fa6";
const data = [
  {
    id: 1,
    date: "Food and Wine Tours",
    title:
      "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ",
    img: "/assets/svg/service/service1.svg",
  },
  {
    id: 2,
    date: "Travel Opportunities",
    title:
      "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ",
    img: "/assets/svg/service/service2.svg  ",
  },
  {
    id: 3,
    date: "Solo Travel Planning",
    title:
      "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ",
    img: "/assets/svg/service/service2.svg ",
  },
  {
    id: 4,
    date: "Food and Wine Tours",
    title:
      "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ",
    img: "/assets/svg/service/service1.svg",
  },
  {
    id: 5,
    date: "Travel Opportunities",
    title:
      "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ",
    img: "/assets/svg/service/service2.svg  ",
  },
  {
    id: 6,
    date: "Solo Travel Planning",
    title:
      "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ",
    img: "/assets/svg/service/service2.svg ",
  },
];
const Service = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div className=" px-4 max-w-[1832px] mx-auto">
      <div className="  rounded-[50px]  py-[120px]  bg-banner-bg relative">
        <div className=" h-full absolute right-0 top-0  max-w-[585px] w-full rounded-[50px] overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/5b/fb/c5/5bfbc5569ff6485240ba7a99c4b968b6.jpg"
            alt=""
            className=" object-cover  h-full w-full"
          />
        </div>
        <div className=" z-10 relative px-4 max-w-[1322px] mx-auto">
          <SmallHeading text="Our Services" />
          <div className=" flex justify-end gap-3 flex-wrap">
            <h1 className="section-title mr-auto max-w-[630px]">
              Adventure Unleashed{" "}
              <span className=" text-secondary">Discover Your Next</span>{" "}
            </h1>
            <div className="flex items-center gap-5  justify-end mt-auto">
              <button
                onClick={() => swiperRef?.slidePrev()}
                className=" h-[60px] w-[60px] rounded-full border flex justify-center items-center border-secondary p-3"
              >
                <FaArrowLeft className=" text-secondary text-xl" />
              </button>
              <button onClick={() => swiperRef?.slideNext()} className="h-[60px] w-[60px] rounded-full border flex justify-center items-center border-secondary p-3">
              <FaArrowRight className=" text-secondary text-xl" />
              </button>
            </div>
          </div>
          <div className=" mt-[59px]">
            <Swiper
              onSwiper={setSwiperRef}
              modules={[Pagination, Navigation, A11y]}
              className="!py-1 !px-1 w-full !mx-auto blog-swiper"
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1080: {
                  slidesPerView: 3,
                },
              }}
            >
              {data.length > 0 ? (
                data.map((ele) => (
                  <SwiperSlide key={ele.id} className="">
                    <div className=" bg-white pt-[50.02px] px-10 pb-10 w-full max-w-[410px] mx-auto  rounded-[20px] hover:border hover:border-primary">
                      <div className="w-[100px] h-[100px] flex justify-center items-center mx-auto  bg-primary rounded-full">
                      <img
                        src={ele.img}
                        alt={ele.title}
                        className="  h-[45px] w-[45px] "
                      />
                      </div>
                      <h3 className="card-title mt-10 text-center ">
                        {ele.date}
                      </h3>
                      <h5 className="mt-5 text-center section-subtitle text-custom-gray ">
                        {ele.title}
                      </h5>
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
        </div>
      </div>
    </div>
  );
};

export default Service;
