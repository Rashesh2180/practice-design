import React, { useState, useEffect } from "react";
import SmallHeading from "../smallheading/SmallHeading";
import { FaAngleRight } from "react-icons/fa6";
const continentData = [
    {
      continent: "Asia",
      countries: [
        { name: "India", city_image: "https://i.pinimg.com/236x/47/e2/8c/47e28cb37314c93cdb615ff64bd2c0e5.jpg" },
        { name: "China", city_image: "https://i.pinimg.com/236x/10/a9/a5/10a9a5b865638091a2ce1a0238b15f33.jpg" },
        { name: "Pakistan", city_image: "https://i.pinimg.com/736x/fd/5e/12/fd5e12d3353e7ba3e555b5ad29b8240c.jpg" },
        { name: "Bangladesh", city_image: "https://i.pinimg.com/236x/10/a9/a5/10a9a5b865638091a2ce1a0238b15f33.jpg" },
        { name: "Sri Lanka", city_image: "https://i.pinimg.com/236x/5f/ff/d8/5fffd831f9abcffd444b6c0d85be8269.jpg" },
        { name: "Nepal", city_image: "https://i.pinimg.com/736x/62/2e/a3/622ea31251716b408cd28ad2f6b4b094.jpg" },
      ],
    },
    {
      continent: "Europe",
      countries: [
        { name: "Germany", city_image: "https://i.pinimg.com/236x/47/e2/8c/47e28cb37314c93cdb615ff64bd2c0e5.jpg" },
        { name: "France", city_image: "https://i.pinimg.com/236x/10/a9/a5/10a9a5b865638091a2ce1a0238b15f33.jpg" },
        { name: "Italy", city_image: "https://i.pinimg.com/736x/fd/5e/12/fd5e12d3353e7ba3e555b5ad29b8240c.jpg" },
        { name: "Spain", city_image: "https://i.pinimg.com/236x/10/a9/a5/10a9a5b865638091a2ce1a0238b15f33.jpg" },
        { name: "United Kingdom", city_image: "https://i.pinimg.com/236x/10/a9/a5/10a9a5b865638091a2ce1a0238b15f33.jpg" },
        { name: "London", city_image: "https://i.pinimg.com/236x/10/a9/a5/10a9a5b865638091a2ce1a0238b15f33.jpg" },
      ],
    },
    {
      continent: "North America",
      countries: [
        { name: "United States", city_image: "https://i.pinimg.com/236x/10/a9/a5/10a9a5b865638091a2ce1a0238b15f33.jpg" },
        { name: "Canada", city_image: "https://i.pinimg.com/236x/10/a9/a5/10a9a5b865638091a2ce1a0238b15f33.jpg" },
        { name: "Mexico", city_image: "https://i.pinimg.com/236x/10/a9/a5/10a9a5b865638091a2ce1a0238b15f33.jpg" },
        { name: "Guatemala", city_image: "https://i.pinimg.com/236x/10/a9/a5/10a9a5b865638091a2ce1a0238b15f33.jpg" },
        { name: "Honduras", city_image: "https://i.pinimg.com/236x/10/a9/a5/10a9a5b865638091a2ce1a0238b15f33.jpg" },
        { name: "Costa Rica", city_image: "https://i.pinimg.com/236x/10/a9/a5/10a9a5b865638091a2ce1a0238b15f33.jpg" },
      ],
      city_image:
        "https://i.pinimg.com/236x/d3/e8/8b/d3e88b4088032b1046e237dafcaa8a00.jpg",
    },
    {
      continent: "Australia",
      countries: [
        { name: "Australia", city_image: "https://i.pinimg.com/236x/10/a9/a5/10a9a5b865638091a2ce1a0238b15f33.jpg" },
        { name: "New Zealand", city_image: "https://i.pinimg.com/236x/10/a9/a5/10a9a5b865638091a2ce1a0238b15f33.jpg" },
        { name: "Papua New Guinea", city_image: "https://i.pinimg.com/236x/e2/2c/16/e22c1624ba6d5fe9f89e3931fd9293bb.jpg" },
        { name: "France", city_image: "https://i.pinimg.com/236x/e2/2c/16/e22c1624ba6d5fe9f89e3931fd9293bb.jpg" },
        { name: "New York", city_image: "https://i.pinimg.com/236x/e2/2c/16/e22c1624ba6d5fe9f89e3931fd9293bb.jpg" },
        { name: "Morocco", city_image: "https://i.pinimg.com/236x/e2/2c/16/e22c1624ba6d5fe9f89e3931fd9293bb.jpg" },
      ],
      city_image:
        "https://i.pinimg.com/236x/e2/2c/16/e22c1624ba6d5fe9f89e3931fd9293bb.jpg",
    },
    {
      continent: "Latin America",
      countries: [
        { name: "Brazil", city_image: "https://i.pinimg.com/736x/62/2e/a3/622ea31251716b408cd28ad2f6b4b094.jpg" },
        { name: "Argentina", city_image: "https://i.pinimg.com/736x/62/2e/a3/622ea31251716b408cd28ad2f6b4b094.jpg" },
        { name: "Chile", city_image: "https://i.pinimg.com/736x/62/2e/a3/622ea31251716b408cd28ad2f6b4b094.jpg" },
        { name: "Colombia", city_image: "https://i.pinimg.com/736x/62/2e/a3/622ea31251716b408cd28ad2f6b4b094.jpg" },
        { name: "Peru", city_image: "https://i.pinimg.com/736x/62/2e/a3/622ea31251716b408cd28ad2f6b4b094.jpg" },
        { name: "Mexico", city_image: "https://i.pinimg.com/736x/62/2e/a3/622ea31251716b408cd28ad2f6b4b094.jpg" },
      ],
    },
    {
      continent: "Africa",
      countries: [
        { name: "Nigeria", city_image: "https://i.pinimg.com/736x/62/2e/a3/622ea31251716b408cd28ad2f6b4b094.jpg" },
        { name: "South Africa", city_image: "https://i.pinimg.com/736x/62/2e/a3/622ea31251716b408cd28ad2f6b4b094.jpg" },
        { name: "Kenya", city_image: "https://i.pinimg.com/736x/62/2e/a3/622ea31251716b408cd28ad2f6b4b094.jpg" },
        { name: "Egypt", city_image: "https://i.pinimg.com/736x/62/2e/a3/622ea31251716b408cd28ad2f6b4b094.jpg" },
        { name: "Ghana", city_image: "https://i.pinimg.com/736x/62/2e/a3/622ea31251716b408cd28ad2f6b4b094.jpg" },
        { name: "Ethiopia", city_image: "https://i.pinimg.com/736x/62/2e/a3/622ea31251716b408cd28ad2f6b4b094.jpg" },
      ],
    },
  ];
  

const Categories = () => {
  const [selectedContinent, setSelectedContinent] = useState(
    continentData[0].continent
  );
  const [selectedCountries, setSelectedCountries] = useState(
    continentData[0].countries
  );

  const handleContinentClick = (continent) => {
    setSelectedContinent(continent);

    const continentObj = continentData.find(
      (item) => item.continent === continent
    );
    if (continentObj) {
      setSelectedCountries(continentObj.countries);
    }
  };

  return (
    <div className=" max-w-[1322px] px-4 mx-auto  pb-[120px]">
      <div className="max-w-[630px] mx-auto text-center flex flex-col justify-center items-center">
        <SmallHeading text="Countries category" />
        <h1 className="section-title text-black">
          Experience the World Anew Unveil Hidden
        </h1>
      </div>

      <di className="flex gap-[30px] max-lg:flex-col mt-[50.02px]">
        <div className=" lg:max-w-[410px] w-full  max-lg:flex overflow-x-auto  gap-5 rounded-b-rounded-20 px-10 py-[9px] custom-shadow ">
          {continentData.map((item, index) => (
            <button
              key={index}
              onClick={() => handleContinentClick(item.continent)}
              className={` flex justify-between text-nowrap  gap-3 items-center pb-5 mt-5 border-b w-full border-border-color  rounded-lg text-start text-[22px] font-bold text-secondary  ${
                selectedContinent === item.continent
                  ? ""
                  : " text-[#034833] opacity-50"
              }`}
            >
              {item.continent} <FaAngleRight className=" text-sm" />
            </button>
          ))}
        </div>

        {selectedContinent && (
  <div className="grow shrink-0">
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[30px] w-full">
      {selectedCountries.map((country, index) => (
        <li
          key={index}
          className="text-lg py-5 px-[30px] hover:border-primary leading-lead-30 flex items-center gap-[30px] text-[22px] text-secondary font-semibold rounded-rounded-20 border border-border-color"
        >
          <img
            src={country.city_image} // Accessing the city_image of the country
            alt={country.name} // Using country name as alt text for better accessibility
            className="h-20 w-20 border shrink-0 border-primary rounded-full object-cover"
          />
          <h2>{country.name}</h2> {/* Accessing the name of the country */}
        </li>
      ))}
    </ul>
  </div>
)}

      </di>
    </div>
  );
};

export default Categories;
