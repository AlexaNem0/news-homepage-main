import React from "react";

const Hero = () => {
  return (
    <>
      <div className="max-w-7xl m-auto md:mt-4 lg:mt-6 px-6 flex flex-col lg:flex-row gap-6">
        <div className="space-y-4">
          <div className="bg-[url('../src/assets/images/image-web-3-mobile.jpg')] md:bg-[url('../src/assets/images/image-web-3-desktop.jpg')] min-h-[250px] bg-cover rounded "></div>

          <div className="md:flex space-y-4 md:items-start">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-[#000019] md:w-1/2 md:mt-4 lg:tracking-wide leading-10">
              The Bright Future of <br /> Web 3.0?
            </h1>
            <div className="space-y-4 md:flex md:flex-col md:w-1/2 md:h-[180px] lg:h-[180px] md:justify-between md:items-start ">
              <p className="text-[#5D5F79] md:text-lg">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="uppercase shadow bg-[#F15E50] hover:bg-[#000019] focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded transform hover:scale-105 md:hover:scale-125 transition duration-500 ">
                Read more
              </button>
            </div>
          </div>
        </div>
        <div className="m-auto mt-4 md:mt-0  px-4 py-4 md:px-20 md:py-8 lg:px-4 lg:py-4 bg-[#000019] text-white rounded">
          <h2 className="text-orange-400 text-3xl font-bold mb-6 transform hover:scale-105 transition duration-500">
            New
          </h2>
          <h3 className="font-bold text-xl mb-2 hover:text-[#F15E50] cursor-pointer transform hover:scale-105 transition duration-500">
            Hydrogen VS Electric Cars
          </h3>
          <p className="mb-4 text-[#C5C6CE]">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
          <hr />
          <h3 className="font-bold text-xl my-2 hover:text-[#F15E50] cursor-pointer transform hover:scale-105 transition duration-500">
            The Downsides of AI Artistry
          </h3>
          <p className="mb-4 text-[#C5C6CE]">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
          <hr />
          <h3 className="font-bold text-xl my-2 hover:text-[#F15E50] cursor-pointer transform hover:scale-105 transition duration-500">
            Is VC Funding Drying Up?
          </h3>
          <p className="mb-4 text-[#C5C6CE]">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
