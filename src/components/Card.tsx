import React from "react";

interface CardProps {
  style?: React.CSSProperties;
  mainTitle: string;
  title: string;
  content: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, content, imageUrl, mainTitle }) => {
  return (
    <>
      <div className="py-6 ">
        <div className="flex max-w-md bg-white shadow-lg rounded overflow-hidden transform hover:scale-105 transition duration-500">
          <div className="w-1/2 md:w-1/3">
            <img className="h-[210px]" src={imageUrl} alt={title} />
          </div>
          <div className="w-2/3 p-4">
            <h1 className="text-[#5D5F79] font-bold text-2xl md:text-3xl">
              {mainTitle}
            </h1>
            <h2 className="mt-3 hover:text-[#F15E50] cursor-pointer text-xl md:text-2xl font-bold">
              {title}
            </h2>
            <div className="flex item-center text-sm md:text-base mt-4 text-[#C5C6CE]">
              <p> {content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
