import React from "react";
import SmallHeading from "../smallheading/SmallHeading";
import Button from "../button/Button";
import { FaArrowRightLong } from "react-icons/fa6";
const data = [
  { id: 1 },
  {
    id: 2,
    logo: "/assets/svg/offer/ielts.png",
    title: "IELTS Coaching",
    sub_title:
      "There are many variati of passages of engineer's available.  have suffered ",
  },
  {
    id: 3,
    logo: "/assets/svg/offer/language.svg",
    title: "Language Coaching",
    sub_title:
      "There are many variati of passages of engineer's available.  have suffered ",
  },
  {
    id: 4,
    logo: "/assets/svg/offer/global.svg",
    title: "Global Gateway",
    sub_title:
      "There are many variati of passages of engineer's available.  have suffered ",
  },
  {
    id: 5,
    logo: "/assets/svg/offer/toffel.svg",
    title: "TOFEL Coaching",
    sub_title:
      "There are many variati of passages of engineer's available.  have suffered ",
  },
  {
    id: 6,
    logo: "/assets/svg/offer/dualungo.svg",
    title: "Dualungo Coaching",
    sub_title:
      "There are many variati of passages of engineer's available.  have suffered ",
  },
];

const Offer = () => {
  return (
    <div className="px-4 max-w-[1832px] mx-auto">
      <div className="rounded-[50px] pt-20 pb-20  sm:pt-[324px] sm:pb-[318px]  bg-banner-bg relative">
        <div className="px-4 max-w-[1322px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {data.length > 0 &&
            data.map((ele) =>
              ele.id === 1 ? (
                <div>
                  <SmallHeading text={"Coaching we offer"} />
                  <h1 className="max-w-[410px] section-title text-secondary max-md:!text-[40px]  max-xl:!text-[48px]">
                    Escape to Extraordinary Next Adventure{" "}
                  </h1>
                </div>
              ) : (
                <div className="bg-white lg:max-w-[410px] w-full rounded-[20px] p-10 hover:cursor-pointer group">
                  <div className="h-[100px] w-[100px] rounded-full border border-border-color group-hover:border-primary flex justify-center items-center">
                    <img src={ele.logo} alt="" className="h-[45px] w-[45px]" />
                  </div>
                  <h1 className="card-title  mt-[30.02px]">{ele.title}</h1>
                  <p className="section-subtitle mt-5 text-custom-gray !text-start">
                    {ele.sub_title}
                  </p>
                  <div className="mt-[30px]">
                    <button className="text-sm leading-[30px] flex items-center gap-[10px] font-semibold text-secondary hover:text-primary">
                      Learn More
                      <FaArrowRightLong className="text-secondary group-hover:text-primary" />
                    </button>
                  </div>
                </div>
              )
            )}
        </div>

        {/* input section */}
       <div className="w-full md:absolute lg:-bottom-44 md:-bottom-60 max-md:mt-20  left-1/2 md:-translate-x-1/2 transform max-w-[1322px] mx-auto px-4 ">
       <div className="  bg-primary max-md:flex-col flex justify-between max-lg:gap-5 max-md:px-10  rounded-rounded-20">
          <div className=" py-20 lg:pl-20 md:pl-10 flex-1 relative ">
            <h1 className=" section-title text-white !mt-0">
              Are you ready to start ?
            </h1>
            <p className=" max-w-[516px] section-subtitle text-white mt-5 !text-start">
              Custom Software Development Tailored Solutions for Your Business
              Custom Software Development Tailored Solutions{" "}
            </p>
            <div className=" mt-10 max-w-[560px] flex items-center gap-[10px]">
              <input
                type="text"
                className=" outline-none w-full section-subtitle !text-start text-white bg-transparent border border-white rounded-full px-[30px] py-[15px]"
                placeholder="Enter Email"
              />
              <Button text="Contact us" textcolor="secondary " bgcolor="white"/>
            </div>
            <img src="/assets/images/inputsection/input_map.png" className=" max-w-[564.92px] absolute top-12 left-[10px] h-[302px] w-full" alt="" />
          </div>
          <div className="flex-1 py-[30px] flex-col justify-center items-center flex">
            <div className=" md:max-w-[403.02px] md:pr-10 md:ml-auto lg:pr-[93px] rounded-rounded-20 overflow-hidden w-full h-[341.72px]">
                <img src="https://i.pinimg.com/736x/2b/ed/e4/2bede4a6b7e0bc2b44f58c44fc2acf65.jpg" className=" rounded-rounded-20 h-full w-full object-cover " alt="" />

            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Offer;
