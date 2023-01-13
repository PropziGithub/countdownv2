import React from "react";
import Container  from "@/components/Container";

const Choosing = () => {
  return (
    <section
      className={`bg-[url('images/footer_bg.svg')] w-[100%] h-[100%] bg-no-repeat bg-cover`}
    >
      <div className="py-10 sm:py-32 bg-opacity-0">
        <Container className="text-center flex flex-col justify-center items-center">
          <span className="py-2 font-Montserrat text-[#FFFFFF] text-[40px] leading-[46.56px]">
          Good luck!
          </span>
          <span className="py-2 text-[#FFFFFF] text-[20px] leading-[24px] font-Montserrat">
            Thank you for choosing Topper's Pizza.
          </span>
        </Container>
      </div>
    </section>
  );
};
export default Choosing;
