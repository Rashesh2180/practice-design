import React from "react";
import SmallHeading from "../smallheading/SmallHeading";
const data = [
    {
      id: 1,
      logo: "/assets/svg/offer/ielts.png",
      title: "IELTS Coaching",
      sub_title:
        "There are many variati of passages of engineer's available.  have suffered ",
    },
    {
      id: 2,
      logo: "/assets/svg/offer/language.svg",
      title: "Language Coaching",
      sub_title:
        "There are many variati of passages of engineer's available.  have suffered ",
    },
    {
      id: 3,
      logo: "/assets/svg/offer/global.svg",
      title: "Global Gateway",
      sub_title:
        "There are many variati of passages of engineer's available.  have suffered ",
    },
  
  ];
const ProcessOverview = () => {
  return (
    <div className=" px-4 max-w-[1832px] mx-auto  ">
      <div className=" bg-banner-bg py-[120px] rounded-[50px] relative">
      <div className=" w-full max-w-[1322px] mx-auto px-4   ">
        <SmallHeading text={"Process Overview"} />
        <div className="  flex justify-between items-end">
          <h1 className="section-title max-w-[630px] text-secondary">
            Possibilities Wanderlust Passport to Explorer
          </h1>
          <p className="section-subtitle max-w-[410px] text-custom-gray ml-auto !text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet rcus nunc. Duis egestas ac
          </p>
        </div>
      </div>
      <div className=" mt-[60px]">

      </div>
      <img
        src="/assets/images/processbanner/process_banner_frame.png"
        alt=""
        className=" h-full w-full absolute top-0 left-0"
      />
      </div>
    </div>
  );
};

export default ProcessOverview;
