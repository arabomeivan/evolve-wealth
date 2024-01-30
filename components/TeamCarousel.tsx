"use client";
import Image from "next/image";
import React from "react";
import eclipse from "../assets/eclipse.png";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamCarousel = () => {
  const team = [
    {
      name: "Joseph Larry",
      position: "CEO Evolve Wealth Group",
      about:
        "CEO of Evolve Ventures, a leading firm in the crypto investment space. Joseph leads a team of experts in navigating the dynamic world of cryptocurrency investments. With a deep understanding of blockchain technology and market trends, he strategically manages digital asset portfolios, ensuring optimal returns for clients.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Joseph Larry",
      position: "CTO Evolve Wealth Group",
      about:
        "CEO of Evolve Ventures, a leading firm in the crypto investment space. Joseph leads a team of experts in navigating the dynamic world of cryptocurrency investments. With a deep understanding of blockchain technology and market trends, he strategically manages digital asset portfolios, ensuring optimal returns for clients.",
      image:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Joseph Larry",
      position: "COO Evolve Wealth Group",
      about:
        "CEO of Evolve Ventures, a leading firm in the crypto investment space. Joseph leads a team of experts in navigating the dynamic world of cryptocurrency investments. With a deep understanding of blockchain technology and market trends, he strategically manages digital asset portfolios, ensuring optimal returns for clients.",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Joseph Larry",
      position: "Board Chairman Evolve Wealth Group",
      about:
        "CEO of Evolve Ventures, a leading firm in the crypto investment space. Joseph leads a team of experts in navigating the dynamic world of cryptocurrency investments. With a deep understanding of blockchain technology and market trends, he strategically manages digital asset portfolios, ensuring optimal returns for clients.",
      image:
        "https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <HiArrowLeft color="black" />,
    nextArrow: <HiArrowRight color="black" />,
  };
  return (
    <div>
      <div>
        {" "}
        <div className="text-4xl text-primary font-bold my-10">
          Meet our Team
        </div>
        <Slider {...settings} className="py-10">
          {team.map((member, index) => (
            <div key={index} className="px-10 relative">
              <div className="grid md:grid-cols-2">
                <div className="flex relative">
                  <div className=" self-center md:self-auto space-y-5 md:space-y-0">
                    <Image
                      src={eclipse}
                      width={261}
                      height={261}
                      alt="not loading"
                      className=" absolute eclipse mt-[10px] md:mt-[234px]"
                    />
                    <Image
                      src={member.image}
                      width={500}
                      height={500}
                      alt="not loading"
                      className=" rounded-sm"
                    />
                  </div>
                </div>

                <div className="text-justify flex">
                  <div className="self-center">
                    <p className="text-primary font-bold md:text-xl text-right">
                      {member.name}
                    </p>
                    <p className="text-grey mb-10 md:text-xl text-right">
                      {member.position}
                    </p>

                    <p className="text-purple font-bold text-right">
                      {member.about}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TeamCarousel;
