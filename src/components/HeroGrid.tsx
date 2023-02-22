import React from "react";
import "./HeroGrid.css";
import HeroImg from "../assets/images/image-web-3-desktop.jpg";
const HeroGrid = () => {
  return (
    <div className=" max-w-7xl m-auto mt-10">
      <div className="container ">
        <div className="aside">
          <div className="">
            <h2 className="">New</h2>
            <h3 className="">Hydrogen VS Electric Cars</h3>
            <p className="mb-4">
              {" "}
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
            <hr />
            <h3 className="2">The Downsides of AI Artistry</h3>
            <p className="">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
            <hr />
            <h3 className="">Is VC Funding Drying Up?</h3>
            <p className="">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
        <div className="main_img">
          <img src={HeroImg} alt="" />
        </div>
        <div className="header">
          <div className="main_text">
            <h1 className="">The Bright Future of Web 3.0?</h1>
          </div>
          <div className="sign_in">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className=" ">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroGrid;
