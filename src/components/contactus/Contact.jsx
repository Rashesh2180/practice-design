import React from "react";
import SmallHeading from "../smallheading/SmallHeading";
import Button from "../button/Button";

const Contact = () => {
  return (
    <div className="px-4 max-w-[1832px] mx-auto  relative">
      <div className="bg-banner-bg pt-[120px] pb-20 lg:pb-[337px] rounded-[50px] relative">
        <div className="  w-full max-w-[1322px] mx-auto px-4 gap-[60px]  max-lg:flex-col max-lg:items-center flex items-start">
          <div className=" flex-1 relative">
            <img
              src="/assets/images/conatctus/Background Simple.png"
              alt=""
              className=" max-w-[589.75px] w-full h-[580.76px] absolute bottom-0 left-0 -z-10"
            />
            <img
              src="/assets/images/conatctus/Image.png"
              alt=""
              className=" max-w-[589.75px] w-full h-[671.29px] max-sm:h-[400px] mt-6 z-10"
            />
          </div>
          <div className="flex-1">
            <SmallHeading text={"Contact Information"} />
            <h1 className="section-title text-secondary">
              Let Your Wanderlust Guide You
            </h1>
            <div className=" bg-white p-10 mt-10 rounded-rounded-20">
              <form action="">
                <div className="flex gap-[30px] items-center flex-wrap">
                  <div className="flex-1 ">
                    <label
                      htmlFor=""
                      className="section-subtitle !text-start capitalize text-secondary block "
                    >
                      Your Email
                    </label>
                    <div className=" py-[15px] px-5 flex justify-between items-center gap-2 mt-[5px] border w-full  rounded-full border-border-color">
                      <input
                        type="email"
                        className="  outline-none w-full"
                        placeholder="Your Email"
                      />
                      <img
                        src="/assets/svg/form/ (1).svg"
                        className=" h-[14px] w-[14px]  "
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor=""
                      className="section-subtitle !text-start capitalize text-secondary block "
                    >
                      Your Phone
                    </label>
                    <div className=" py-[15px] px-5 flex justify-between items-center gap-2 mt-[5px] border w-full  rounded-full border-border-color">
                      <input
                        type="number"
                        className="  outline-none"
                        placeholder="Your Phone"
                      />
                      <img
                        src="/assets/svg/form/ (2).svg"
                        className=" h-[14px] w-[14px]  "
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className=" mt-5">
                  <label
                    htmlFor=""
                    className="section-subtitle !text-start capitalize text-secondary block "
                  >
                    Your Address
                  </label>
                  <div className=" py-[15px] px-5 flex justify-between items-center gap-2 mt-[5px] border w-full  rounded-full border-border-color">
                    <input
                      type="number"
                      className="  outline-none w-full"
                      placeholder="Your Address"
                    />
                    <img
                      src="/assets/svg/form/.svg"
                      className=" h-[14px] w-[14px]  "
                      alt=""
                    />
                  </div>
                </div>
                <div className=" mt-5">
                  <label
                    htmlFor=""
                    className="section-subtitle !text-start capitalize text-secondary block "
                  >
                    Message
                  </label>
                  <div className="  mt-[5px]  relative">
                    <textarea
                      type="number"
                      className="  outline-none border w-full h-[130px]  rounded-[30px] py-[15px] px-5 border-border-color"
                      placeholder="Write Message.."
                    ></textarea>
                    <img
                      src="/assets/svg/form/ (3).svg"
                      className=" h-[14px] w-[14px] absolute top-5 right-5  "
                      alt=""
                    />
                  </div>
                </div>
                <button className=" mt-5 p-4 bg-primary rounded-full w-full text-sm capitalize leading-lead-30 font-semibold text-white">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className=" max-w-[1322px]  px-4 mx-auto    lg:absolute -bottom-52  w-full left-1/2 lg:-translate-x-1/2 ">
       <div className="relative bg-white custom-shadow rounded-rounded-20 mx-auto">
       <div className=" py-20 pl-5 xl:pl-[110px]">
          <h1 className=" section-title">Let’s Do Great!</h1>
          <p className=" section-subtitle mt-5 !text-start max-w-[470px] text-wrap">
            Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum
            has been the industry's standard dummy
          </p>
          <div className=" mt-10">
            <Button
              text={"Contact us"}
              showicon={true}
              bgcolor="primary"
              textcolor="white"
            />
          </div>
        </div>
        <img
          className=" max-w-[564.92px] h-[302px] w-full   absolute  z-10 top-[49px] left-1/2 -translate-x-1/2"
          src="/assets/images/Карта 2.png"
          alt=""
        />
        <img
          src="https://i.pinimg.com/736x/75/9b/e4/759be4ec0eae9fed3958503532ff078a.jpg"
          className=" w-full lg:w-[577px] h-[440px] rounded-rounded-20 object-cover lg:absolute right-0 -top-8 z-20"
          alt=""
        />
       </div>
      </div>
    </div>
  );
};

export default Contact;
