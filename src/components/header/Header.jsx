import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
const navlist = [
  { list: "home", href: "" },
  { list: "About Us", href: "" },
  { list: "Services", href: "" },
  { list: "Projects", href: "" },
  { list: "Blog", href: "" },
];
const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(prev => !prev);
  };
  return (
    <div className=" max-w-[1851.08px] bg-white z-[1000000000000000] relative xl:px-10 px-5 mx-auto  flex justify-between items-center pt-[21px] pb-[22px]">
      <div className=" h-10 w-[157px]">
        <img
          src="/assets/svg/header/route_logo.svg"
          alt=""
          className=" h-full w-full object-cover"
        />
      </div>
      <ul className="lg:flex hidden gap-2 items-center">
        {navlist.map((ele) => (
          <li className=" px-[18px] tracking-[1.4px] leading-[26px] py-[5px] hover:bg-primary cursor-pointer hover:text-white rounded-full  font-bold text-secondary  uppercase">
            {ele.list}
          </li>
        ))}
      </ul>
      <div className="lg:flex hidden items-center gap-4">
        <div className=" h-[55px] w-[55px]">
          <img
            src="/assets/svg/header/chat_msg.svg"
            alt=""
            className=" h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className=" text-base text-custom-gray leading-[30px] ">
            Need help?
          </h2>
          <h3 className=" text-secondary text-lg font-semibold leading-7">
            (307) 555-0133
          </h3>
        </div>
      </div>
      <button onClick={handleToggle} className=" lg:hidden">
        {
            open ? <IoCloseSharp className=" text-xl text-red-600" /> : <FaBars className=" text-xl" />
        }
        
      </button>
      {open && (
        <div className=" p-5 absolute lg:hidden top-20 h-screen right-0 w-56 bg-white z-50">
          <ul className="lg:flex    gap-2 items-center">
            {navlist.map((ele) => (
              <li className=" pr-[18px] tracking-[1.4px] leading-[26px] py-[5px] hover:bg-primary cursor-pointer hover:text-white rounded-full  font-bold text-secondary  uppercase">
                {ele.list}
              </li>
            ))}
          </ul>
          <div className="lg:flex mt-5 items-center gap-4">
            <div className=" h-[55px] w-[55px]">
              <img
                src="/assets/svg/header/chat_msg.svg"
                alt=""
                className=" h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className=" text-base text-custom-gray leading-[30px] ">
                Need help?
              </h2>
              <h3 className=" text-secondary text-lg font-semibold leading-7">
                (307) 555-0133
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
