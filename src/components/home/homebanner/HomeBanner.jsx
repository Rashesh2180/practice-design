import React from "react";
import Button from "../../button/Button";

const HomeBanner = () => {
  return (
    <div className=" min-h-[calc(100vh-101px)] bg-secondary relative flex flex-col justify-center items-center">
      <div className=" max-w-[1015.54px] mx-auto px-4 flex flex-col justify-center items-center">
        <h1 className=" text-white text-center max-lg:text-[60px] max-sm:text-4xl text-[80px] leading-[90px] font-bold">
          Journey with Confidence <br />{" "}
          <span className=" text-primary">Migrate</span> with Us
        </h1>
        <p className=" mt-[34.54px]  section-subtitle text-white max-w-[520px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          rcus nunc. Duis egestas ac ante sed tincidunt.
        </p>
        <div className=" cursor-pointer mt-[30px] mx-auto">
          <Button
            text={"Learn More"}
            bgcolor="primary"
            textcolor={"white"}
            showicon={true}
          />
        </div>
      </div>
      <img
        src="/assets/images/home/hero/herobg.png"
        className=" h-full w-full absolute top-0 left-0"
        alt=""
      />
    </div>
  );
};

export default HomeBanner;
