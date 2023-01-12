import React from "react";
import Container from "@/components/Container";
import pizza from "@/images/pizza.svg";

const Banner = () => {
  return (
    <section className="bg-[#094E10]">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:p-[54px] p-[20px]">
        <div className=" h-full w-full">
          <img src={pizza} alt="pizza" className="h-full w-full" />
        </div>
        <div className="bg-[#FFFFFF] flex flex-col px-[36px] py-[44px] ">
          <p className="text-[20px] leading-[30.64px] font-Graphik text-center pb-4">
            All you have to do is order one of our delicious Bacon Grilled
            Cheese pizzas to enter for a chance to win{" "}
            <strong>
              4 Toronto Maple Leaf tickets to see them take on the Montreal
              Canadiens on Saturday, April 8th.
            </strong>
          </p>
          <p className="text-[20px] leading-[30.64px] font-Graphik text-center pb-4">
            Don't miss out on this amazing opportunity to see the Leafs in
            action.
          </p>
          <p className="text-[20px] leading-[30.64px] font-Graphik text-center pb-4">
            Order a Bacon Grilled Cheese pizza or request an entry form at your
            nearest Topper's Pizza location before the contest closes at{" "}
            <strong>11:00 p.m. on Tuesday, March 21, 2023.</strong>
          </p>
          <p className="text-[20px] leading-[30.64px] font-Graphik text-center pb-4">
            The draw will occur on Wednesday, March 22, 2023, and the winner
            will be notified.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Banner;
