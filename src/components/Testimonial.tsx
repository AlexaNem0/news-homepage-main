import React from "react";
import Card from "./Card";
import CompImg from "../assets/images/image-retro-pcs.jpg";
import LaptopImg from "../assets/images/image-top-laptops.jpg";
import GamingImg from "../assets/images/image-gaming-growth.jpg";
const Testimonial = () => {
  return (
    <div className="max-w-7xl m-auto md:mt-4 lg:mt-6 px-6 flex flex-col lg:flex-row gap-6 items-center justify-between">
      <div className="md:self-start">
        <Card
          mainTitle="01"
          imageUrl={CompImg}
          title="Reviving Retro PCs now..."
          content="What happens when old PCs are given modern upgrades?"
        />
      </div>
      <Card
        mainTitle="02"
        imageUrl={LaptopImg}
        title="Top 10 Laptops of 2022"
        content="Our best picks for various needs and budgets."
      />

      <div className="md:self-end">
        <Card
          mainTitle="03"
          imageUrl={GamingImg}
          title="The Growth of Gaming"
          content="How the pandemic has sparked fresh opportunities."
        />
      </div>
    </div>
  );
};

export default Testimonial;
