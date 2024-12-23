import React from "react";
import SmallHeading from "../../components/smallheading/SmallHeading";
import Button from "../../components/button/Button";

const About = () => {
  return (
    <div className=" py-[120px]">
      <div className=" max-w-[1322px] mx-auto px-4 flex items-center gap-10 lg:gap-5 max-lg:flex-col xl:gap-[90px]">
        <div className="flex-1 ">
          <div className="flex gap-[25px] items-start lg:pl-[19px]">
            <div className=" max-w-[312px] z-10  w-full h-[365px] max-sm:h-[217px] rounded-[20px] overflow-hidden">
              <img
                src="https://i.pinimg.com/474x/a3/84/ab/a384abfe9c15a5dbc2cfaa2b7f5cafae.jpg"
                className=" h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className=" max-w-[244px] w-full sm:mt-[45px] h-[217px] rounded-[20px] overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/de/e1/e2/dee1e205c3b5e7631c0be5d7a2a028b1.jpg"
                className=" h-full w-full object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-[19px] max-sm:gap-[25px] items-start max-sm:items-center sm:-mt-3">
            <div className=" max-w-[307.97px] relative w-full h-[267px] rounded-[20px] overflow-hidden">
              <img
                src="/assets/images/about/about_dots.png"
                className=" h-full w-full object-cover "
                alt=""
              />
              <div className="  rounded-[20px] max-sm:w-full max-sm:h-[210px] bg-primary py-10 sm:pr-8 pl-[38px] absolute top-9 max-sm:left-0 left-[46px]">
                <h1 className=" text-[50px] leading-[60px] font-bold text-white">
                  10+
                </h1>
                <div className=" mt-[10px]  max-w-[104px] sm:mx-auto text-base text-white leading-[30px]">
                  years of experiences
                </div>
              </div>
            </div>
            <div className=" sm:max-w-[312px] max-sm:mt-3 w-full relative max-sm:h-[210px]  sm:-mt-[64px] sm:-ml-[88px] h-[312px]  rounded-[20px] overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/7a/fb/2a/7afb2a3b96ebc11762cea7a4465b4867.jpg"
                className=" h-full w-full object-cover -z-10"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <SmallHeading text={"About Us"} />
          <h1 className=" section-title">
            Unknown Wanderlust{" "}
            <span className=" text-secondary">Your Journey into</span>
          </h1>
          <p className="section-subtitle text-custom-gray mt-5 !text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet rcus nunc. Duis egestas ac ante sed tincidunt.
          </p>
          <div className=" mt-5 flex justify-between max-sm:flex-col gap-10">
            <div className="flex-1 ">
              <div className="flex items-center gap-[10px]">
                <img
                  src="/assets/svg/about/checbox/green_checkbox.svg"
                  alt=""
                  className=" w-[14px] h-4"
                />

                <h1 className=" fs18 text-secondary">Safety Guides</h1>
              </div>
              <p className="section-subtitle text-custom-gray mt-[10px] !text-start">
                Lorem ipsum dolor sit amet, cons ectetur adipiscing elit
              </p>
            </div>
            <div className="flex-1 ">
              <div className="flex items-center gap-[10px]">
                <img
                  src="/assets/svg/about/checbox/green_checkbox.svg"
                  alt=""
                  className=" w-[14px] h-4"
                />

                <h1 className=" fs18 text-secondary">Passport Assistance</h1>
              </div>
              <p className="section-subtitle text-custom-gray mt-[10px] !text-start">
                Lorem ipsum dolor sit amet, cons ectetur adipiscing elit
              </p>
            </div>
          </div>
          <div className=" mt-10">
            <Button text={"Read More"} bgcolor="primary" showicon={true} textcolor="white"/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
