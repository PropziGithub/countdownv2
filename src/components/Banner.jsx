import React from "react";
import pizza from "@/images/pizza.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="mx-auto max-w-9xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-[54px] lg:pt-[84px] p-[20px]">
        <div className="w-[100%] h-[100%]">
          <img src={pizza} alt="pizza" className="h-[100%] w-[100%]" />
        </div>
        <div className="bg-[#FFFFFFD9] flex flex-col px-[36px] text-[16px] py-[44px] lg:justify-center lg:items-center ">
          <p className="leading-[30.64px] font-Montserrat text-center pb-4">
            Order one of our delicious Bacon Grilled Cheese pizzas to enter for
            a chance to win{" "}
            <strong>
              4 Toronto Maple Leaf tickets to see them take on the Montreal
              Canadiens on Saturday, April 8th.
            </strong>
          </p>
          <p className="leading-[30.64px] font-Montserrat text-center pb-4">
            Don't miss out on this amazing opportunity to see the Leafs in
            action before the contest closes at{" "}
            <strong>11:00 p.m. on Tuesday, March 21, 2023.</strong>
          </p>
          <p className="leading-[30.64px] font-Montserrat text-center pb-4">
            The draw will occur on <strong>Wednesday, March 22, 2023</strong>,
            and the winner will be notified.
          </p>
          <div className="flex justify-center items-center">
            <a
              href="http://toppers.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shadow hover:bg-[#094E10] duration-500 ease-in-out uppercase bg-[#AA0000] text-[#FFFFFF] inline-flex justify-center rounded-[10px] px-[25px] py-[10px] text-[18px] leading-[27.57px] font-Montserrat outline-2 outline-offset-2"
            >
              order now
            </a>
          </div>
          <p className="text-[10px] text-center mt-7">
            Order a Bacon Grilled Cheese pizza and scan to enter for a chance to
            win a set of 4 Toronto Maple Leaf tickets. Game day is Saturday,
            April 8th vs.the Montreal Canadiens. Contest closes 11:00p.m. on
            Tuesday, March 21, 2023. Draw to occur and winner notified on
            Wednesday, March 22, 2023. No purchase necessary.
            <Link to={"/rules"} className="font-bold">
              See the full rules here.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Banner;
