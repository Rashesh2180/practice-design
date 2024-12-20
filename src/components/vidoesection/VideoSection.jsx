import React, { useState } from "react";
import { CiPlay1 } from "react-icons/ci";
const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const data = [
    {
      id: 1,
      count: "200",
      title: "Team member",
      logo: "/assets/svg/vidoesection/Frame.svg",
    },
    {
      id: 2,
      count: "20",
      title: "Winning award",
      logo: "/assets/svg/vidoesection/Frame (1).svg",
    },
    {
      id: 3,
      count: "10k",
      title: "Complete project",
      logo: "/assets/svg/service/service4.svg",
    },
    {
      id: 3,
      count: "900",
      title: "Client review",
      logo: "/assets/svg/vidoesection/Frame (2).svg",
    },
  ];

  return (
    <div className="max-w-[1322px] mx-auto px-4 py-[120px]">
      <div className="flex gap-[30px] max-lg:flex-col">
        <div className="flex-1">
          <div className="lg:max-w-[630px] w-full h-[460px] rounded-[20px] overflow-hidden relative">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/linlz7-Pnvw?autoplay=${
                isPlaying ? 1 : 0
              }`}
              title="Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>

            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute top-1/2 h-[114px] w-[114px] flex justify-center items-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-4 rounded-full shadow-lg"
              >
                <CiPlay1 className=" text-white text-6xl" />
              </button>
            )}
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
          {data &&
            data.map((ele) => (
              <div
                className=" bg-white custom-shadow py-14 flex flex-col justify-center items-center px-1 rounded-rounded-20"
                key={ele.id}
              >
                <div className="flex gap-[19px] items-center">
                  <div className=" h-16 w-16 rounded-full bg-primary flex justify-center items-center">
                    <img src={ele.logo} alt="" className=" h-[30px] w-[30px]" />
                  </div>
                  <div>
                    <h1 className="section-title text-secondary">
                      {ele.count}+
                    </h1>
                    <p className="section-subtitle !text-start text-custom-gray">
                      {ele.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="mt-[120px] flex flex-wrap gap-5 justify-between">
  {[
    "/assets/svg/companylogo/logo1.svg",
    "/assets/svg/companylogo/logo2.svg",
    "/assets/svg/companylogo/logo3.svg",
    "/assets/svg/companylogo/logo4.svg",
    "/assets/svg/companylogo/logo5.svg"
  ].map((ele, index) => (
    <img key={index} src={ele} alt="" className="h-12 flex-grow max-lg:mx-auto min-w-[171px] max-w-[171px]" />
  ))}
</div>

    </div>
  );
};

export default VideoSection;
