import React, { useState } from "react";
import SmallHeading from "../smallheading/SmallHeading";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaArrowRightLong } from "react-icons/fa6";
import "swiper/css/navigation";
import { Pagination, Navigation, A11y } from "swiper/modules";
const data = [
  {
    id: 1,
    date: "October 19, 2022",
    title: "Wander Often Wonder Alway Flight  Comport",
    img: "https://i.pinimg.com/736x/05/63/45/056345307771dee34e8fc6e6bf62fe62.jpg",
    city_image:
      "https://i.pinimg.com/736x/44/4a/b5/444ab57836312b637c5f5a7c0acf8bcd.jpg",
  },
  {
    id: 2,
    date: "October 19, 2022",
    title: " Flight Booking and Final Reservations ",
    img: "https://i.pinimg.com/736x/fb/78/c8/fb78c857669a73d910db1c0d91c26698.jpg",
    city_image:
      "https://i.pinimg.com/236x/d3/e8/8b/d3e88b4088032b1046e237dafcaa8a00.jpg",
  },
  {
    id: 3,
    date: "October 19, 2022",
    title: " Hotel Accommodation  with Booking Always ",
    img: "https://i.pinimg.com/736x/7a/a1/94/7aa19415266b8ad0ad570b7d2ecc3e8e.jpg ",
    city_image:
      "https://i.pinimg.com/236x/d3/e8/8b/d3e88b4088032b1046e237dafcaa8a00.jpg",
  },
  {
    id: 4,
    date: "October 19, 2022",
    title: "  Hotel Accommodation  with Booking Always",
    img: "https://i.pinimg.com/736x/fb/78/c8/fb78c857669a73d910db1c0d91c26698.jpg",
    city_image:
      "https://i.pinimg.com/236x/d3/e8/8b/d3e88b4088032b1046e237dafcaa8a00.jpg",
  },
  {
    id: 5,
    date: "October 19, 2022",
    title: " Hotel Accommodation  with Booking Always ",
    img: "https://i.pinimg.com/736x/fb/78/c8/fb78c857669a73d910db1c0d91c26698.jpg",
    city_image:
      "https://i.pinimg.com/236x/d3/e8/8b/d3e88b4088032b1046e237dafcaa8a00.jpg",
  },
  {
    id: 6,
    date: "October 19, 2022",
    title: " Hotel Accommodation  with Booking Always ",
    img: "https://i.pinimg.com/736x/fb/78/c8/fb78c857669a73d910db1c0d91c26698.jpg",
    city_image:
      "https://i.pinimg.com/236x/d3/e8/8b/d3e88b4088032b1046e237dafcaa8a00.jpg",
  },
];

const Blog = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  return (
    <div className=" pt-[323px] pb-[120px] max-w-[1322px] mx-auto px-4">
      <SmallHeading text={"Blog or Resources"} />
      <div className=" flex justify-between items-end flex-wrap">
        <h1 className=" text-secondary section-title max-w-[630px]">
          Adventure Awaits Around Every Corner
        </h1>

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
      <div className=" mt-[60px] clear-start">
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
              slidesPerView: 2,
            },
            1080: {
              slidesPerView: 3,
            },
          }}
        >
          {data.length > 0 ? (
            data.map((ele, index) => (
              <SwiperSlide key={ele.id} className=" !p-1">
                <div className="p-5 bg-white rounded-rounded-20 group hover:border-primary border mx-auto custom-shadow max-w-[410px] w-full">
                  <div className=" max-w-[370px]  h-[302px] rounded-rounded-20 overflow-hidden">
                    <img
                      src={ele.img}
                      alt=""
                      className=" h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-5  px-5 pb-5">
                  <div className=" flex justify-between gap-1  items-center">
                    <div className="flex gap-[5px] items-center">
                      <img
                        src="/assets/svg/carasol/ (4).svg"
                        alt=""
                        className=" h-3 w-3"
                      />{" "}
                      <p className="text-[16px] text-secondary leading-[30px] font-normal">
                        {ele.date}
                      </p>
                    </div>
                    <div className=" flex gap-[5px] items-center">
                      <img
                        src="/assets/svg/carasol/ (4).svg"
                        alt=""
                        className=" h-3 w-3"
                      />{" "}
                      <p className="text-[16px] text-secondary leading-[30px] font-normal">
                        By admin
                      </p>
                    </div>
                  </div>
                  <h1 className="card-title mt-[10px] ">{ele.title}</h1>
                  <div className=" mt-[52px] ">
                    <button className=" rounded-full border group-hover:bg-primary  group-hover:text-white border-primary py-[15px] text-sm font-semibold text-secondary px-[30px] flex gap-[10px] items-center">
                      Read More <FaArrowRightLong className=" text-secondary group-hover:text-white" />
                    </button>
                  </div>
                  </div>
                 
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
  );
};

export default Blog;
