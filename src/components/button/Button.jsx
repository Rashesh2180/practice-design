import React from "react";

const Button = ({ bgcolor, textcolor, showicon, text }) => {
  return (
    <button
      className={`py-[15px] cursor-pointer px-[30px] flex gap-[10px] items-center rounded-full bg-${bgcolor} text-sm leading-[30px] text-nowrap font-semibold text-${textcolor} `}
    >
      {text}

      {showicon && (
        <img
          className=" w-[14px] h-4"
          src="/assets/svg/button/right-btn-arr.svg"
          alt=""
        />
      )}
    </button>
  );
};

export default Button;
