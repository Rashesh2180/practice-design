import React from "react";
import SmallHeading from "../smallheading/SmallHeading";
const data = [
  {
    id: 1,
    title: "IELTS Coaching",
    sub_title:
      "There are many variati of passages of engineer ",
    number: "/assets/svg/processoverview/01.svg",
    logo: "/assets/svg/processoverview/oet.svg",
  },
  {
    id: 2,
    title: "Language Coaching",
    sub_title:
      "There are many variati of passages of engineer ",
    number: "/assets/svg/processoverview/02.svg",
    logo: "/assets/svg/processoverview/ielts.svg",
  },
  {
    id: 3,
    title: "Global Gateway",
    sub_title:
      "There are many variati of passages of engineer ",
    number: "/assets/svg/processoverview/03.svg",
    logo: "/assets/svg/processoverview/toffel.svg",
  },
];
const ProcessOverview = () => {
  return (
    <div className=" px-4 max-w-[1832px] mx-auto  ">
      <div className=" bg-banner-bg py-[120px] rounded-[50px] relative">
        <div className=" w-full max-w-[1322px] mx-auto px-4   ">
          <SmallHeading text={"Process Overview"} />
          <div className="  flex justify-between lg:items-end  gap-3 max-lg:flex-col">
            <h1 className="section-title max-w-[630px] text-secondary">
              Possibilities Wanderlust Passport to Explorer
            </h1>
            <p className="section-subtitle max-w-[410px] text-custom-gray lg:ml-auto !text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet rcus nunc. Duis egestas ac
            </p>
          </div>
          <div className=" mt-[60px] flex max-lg:flex-wrap justify-center gap-[30px]">
            {data.length > 0 &&
              data.map((ele) => (
                <div
                  key={ele.id}
                  className=" bg-white grow z-10 p-[10px] w-full max-w-[410px] rounded-rounded-20 flex items-center gap-5"
                >
                  <div className=" bg-primary shrink max-w-[160px] w-full  h-[168px] p-[10px] rounded-[10px]">
                    <img src={ele.number} alt="" className=" h-9 w-9" />
                    <img src={ele.logo} className=" mt-[6px] h-[65px] w-[65px] mx-auto" alt="" />
                  </div>
                  <div className=" grow">
                    <h2 className=" text-lg font-semibold leading-7 text-secondary">{ele.title}</h2>
                    <p className="section-subtitle text-custom-gray !text-start max-w-[190px] mt-5">{ele.sub_title}</p>

                  </div>
                </div>
              ))}
          </div>
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
