import React from "react";
import SmallHeading from "../smallheading/SmallHeading";
const data = [
  {
    id: 1,
    title: "Student Visa",
    sub_title:
      "There are many variati of passages of engineer's available.  have suffered alteration in engineer's available  ",
    logo: "/assets/svg/visacategory/student.svg",
  },
  {
    id: 2,
    title: "Working Visa",
    sub_title:
      "There are many variati of passages of engineer's available.  have suffered alteration in engineer's available  ",
    logo: "/assets/svg/visacategory/working.svg",
  },
  {
    id: 3,
    title: "Business Visa",
    sub_title:
      "There are many variati of passages of engineer's available.  have suffered alteration in engineer's available  ",
    logo: "/assets/svg/visacategory/bussiness.svg",
  },
];
const VisaCategoey = () => {
  return (
    <div className=" py-[120px] max-w-[1322px] mx-auto px-4 overflow-x-hidden">
      <div className="max-w-[630px] mx-auto text-center flex flex-col justify-center items-center">
        <SmallHeading text="Visa category" />
        <h1 className="section-title text-secondary">
          Adventure Awaits Around Every Corner
        </h1>
      </div>
      <div className=" mt-[60.02px] flex justify-between gap-10 max-lg:flex-col ">
        <div className=" flex-1 lg:max-w-[630px]">
          {data &&
            data.map((ele) => (
              <div
                key={ele.id}
                className=" p-[30px] border border-border-color  rounded-rounded-20 mb-[30px] flex gap-[30px]"
              >
                <div className=" w-20 h-20 rounded-full bg-primary  shrink-0 flex justify-center items-center">
                  <img src={ele.logo} alt="" />
                </div>
                <div>
                  <h1 className="card-title">{ele.title}</h1>
                  <p className=" mt-5 section-subtitle !text-start">
                    {ele.sub_title}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className=" flex-1 relative max-lg:flex gap-10 justify-center max-sm:flex-col  w-full  max-lg:mx-auto lg:max-w-[620px] lg:pr-10">
          <div className=" max-w-[310.18px] ml-auto max-sm:mx-auto h-[454.93px] lg:rotate-[11deg]  border-2 border-primary rounded-rounded-20 overflow-hidden">
            <img
              src="https://i.pinimg.com/474x/60/d6/6f/60d66f9ccbb3855c6d4521725ba91a0d.jpg"
              alt=""
              className=" h-full w-full object-contain object-left"
            />
          </div>
          <div className=" max-w-[310.18px] w-full lg:absolute top-[100px]  left-20 mx-auto sm:ml-auto h-[454.93px] max-sm:mt-5 lg:-rotate-[11deg] z-10  border-[5px] border-primary rounded-rounded-20 overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/5d/9c/4a/5d9c4a1bb2eb2fa0db95e75e60b1b94b.jpg"
              alt=""
              className=" h-full w-full object-cover"
            />
          </div>
          <img
            className=" w-[124.26px] h-[49.42px] max-lg:hidden absolute top-0 left-[170px]"
            src="/assets/svg/visacategory/rotation.svg"
            alt=""
          />
          <img
            src="/assets/svg/visacategory/tail.svg"
            alt=""
            className=" h-[37.07px] w-[37.07px]  max-lg:hidden absolute top-28 left-3"
          />
        </div>
      </div>
    </div>
  );
};

export default VisaCategoey;
