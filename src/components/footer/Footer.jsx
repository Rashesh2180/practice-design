import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaCheck } from "react-icons/fa6";
import { LuChevronRight } from "react-icons/lu";
const Footer = () => {
  return (
    <div className=" bg-secondary pt-20  relative">
      <div className=" max-w-[1322px] pb-20 mx-auto px-4 ">
        <div className="flex justify-between  flex-wrap gap-5">
          <ul>
            <img
              src="/assets/footer/Frame 1000009354.svg"
              className=" h-10 w-[157px]"
              alt=""
            />
            <p className="mt-[30px] section-subtitle text-white max-w-[300px]  !text-start">
              Corporate business typically refers to large-scale mansola it
              enterprises or organizat
            </p>
            <div className=" text-white mt-5 max-w-[128px] flex justify-between items-center">
              <FaFacebookF />
              <FaInstagram />
              <FaXTwitter />
              <FaLinkedin />
            </div>
          </ul>
          <ul>
            <h2 className="card-title !text-white">Service Menu</h2>
            <li className=" flex items-center gap-[15px] mb-[10px]  mt-10 section-subtitle text-white  !text-start">
              <FaCheck className=" text-primary" />
              Mistakes To Avoid
            </li>
            <li className=" flex items-center gap-[15px] mb-[10px]   section-subtitle text-white  !text-start">
              <FaCheck className=" text-primary" />
              Your Startup
            </li>{" "}
            <li className=" flex items-center gap-[15px] mb-[10px]  section-subtitle text-white  !text-start">
              <FaCheck className=" text-primary" />
              Knew About Fonts
            </li>{" "}
            <li className=" flex items-center gap-[15px] mb-[10px]   section-subtitle text-white  !text-start">
              <FaCheck className=" text-primary" />
              Knew About Fonts
            </li>
          </ul>
          <ul>
            <h2 className="card-title !text-white">Useful Link</h2>
            <li className=" flex items-center gap-[15px] mb-[10px]  mt-10 section-subtitle text-white  !text-start">
              <LuChevronRight className=" text-primary" />
              Latest News
            </li>
            <li className=" flex items-center gap-[15px] mb-[10px]   section-subtitle text-white  !text-start">
              <LuChevronRight className=" text-primary" />
              Careers
            </li>{" "}
            <li className=" flex items-center gap-[15px] mb-[10px]  section-subtitle text-white  !text-start">
              <LuChevronRight className=" text-primary" />
              General Inquiries
            </li>{" "}
            <li className=" flex items-center gap-[15px] mb-[10px]   section-subtitle text-white  !text-start">
              <LuChevronRight className=" text-primary" />
              Case Studies
            </li>
          </ul>
          <ul>
            <h2 className="card-title !text-white">Gallery</h2>
            <div className=" grid mt-10  grid-cols-3 gap-[10px]">
              <img
                src="https://i.pinimg.com/736x/99/d4/33/99d433726b15aee004c6ff19a01098db.jpg"
                alt=""
                className=" h-20 w-20  rounded-[10px] object-cover"
              />
                <img
                src="https://i.pinimg.com/236x/02/3a/fd/023afd17b4436f3f4b23bfac04d2b467.jpg"
                alt=""
                className=" h-20 w-20  rounded-[10px] object-cover"
              />
                <img
                src="https://i.pinimg.com/236x/bf/12/35/bf1235a20743eac488425019d18a0667.jpg"
                alt=""
                className=" h-20 w-20  rounded-[10px] object-cover"
              />
               <img
                src="https://i.pinimg.com/236x/0b/c0/27/0bc027406eb69e48ab3e28ef8f2827f8.jpg"
                alt=""
                className=" h-20 w-20  rounded-[10px] object-cover"
              />
               <img
                src="https://i.pinimg.com/236x/02/21/ad/0221ad079845c3157be2a3e2bef978ce.jpg"
                alt=""
                className=" h-20 w-20  rounded-[10px] object-cover"
              />
               <img
                src="https://i.pinimg.com/474x/ef/0c/e3/ef0ce3266f206fab92eaffb76e455910.jpg"
                alt=""
                className=" h-20 w-20  rounded-[10px] object-cover"
              />
            </div>
          </ul>
        </div>
       <img src="/assets/footer/Rectangle 5318.png" alt="" className=" w-[284.94px] h-[269.95px] absolute left-1 top-[22px]" />
      </div>
      <div className="  bg-border-color h-[1px] w-full"></div>
      <div className="max-w-[1322px]  mx-auto px-4 py-[30px] flex justify-between flex-wrap items-center">
        <div className=" text-[16px] leading-lead-30 text-[#FFFFFF]">
        © Yoursitename  2024 | All Rights Reserved
        </div>
        <ul className=" text-[16px] flex gap-10 leading-lead-30 text-[#FFFFFF]">
          <li>Trams & Condition</li>
          <li>Privacy Policy</li>
          <li>Contact Us</li>

       
        </ul>
        
      </div>
      
    </div>
  );
};

export default Footer;
