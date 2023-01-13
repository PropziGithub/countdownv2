import React, { useState, useEffect } from "react";
import Container from "@/components/Container";
import Banner from "@/components/Banner";

const Button = () => {
  return (
    <button
      type="submit"
      className="btn-shadow bg-[#AA0000] text-[#FFFFFF] inline-flex justify-center rounded-[10px] px-[25px] py-[10px] text-[18px] leading-[27.57px] font-Sans outline-2 outline-offset-2"
    >
      ENTER THE CONTEST
    </button>
  );
};

const TimeDisplay = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("March 21,2023 11:00:00 EST").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer
        clearInterval(interval.current);
        setTimerDays(0);
        setTimerHours(0);
        setTimerMinutes(0);
        setTimerSeconds(0);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  const data = [
    {
      name: "DAYS",
      inter: timerDays,
    },
    {
      name: "HOURS",
      inter: timerHours,
    },
    {
      name: "MINUTE",
      inter: timerMinutes,
    },
    {
      name: "SECONDS",
      inter: timerSeconds,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mx-auto lg:px-0 max-w-2xl">
      <div className="flex space-x-4 z-50">
        {data.map((item, index) => (
          <div
            className="flex flex-col justify-center items-center"
            key={index}
          >
            <div className="counter-shadow bg-[#FFFFFF] p-4 w-[100px] h-[80px] text-center rounded-[6px] flex-none">
              <span className="text-[#094E10] font-semibold text-3xl">
                {item?.inter}
              </span>
            </div>
            <span className="text-xs py-2 text-[#FFFFFF]">{item?.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Mobile = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("March 21,2023 11:00:00 EST").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer
        clearInterval(interval.current);
        setTimerDays(0);
        setTimerHours(0);
        setTimerMinutes(0);
        setTimerSeconds(0);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  const data = [
    {
      name: "DAYS",
      inter: timerDays,
    },
    {
      name: "HOURS",
      inter: timerHours,
    },
    {
      name: "MINUTE",
      inter: timerMinutes,
    },
    {
      name: "SECONDS",
      inter: timerSeconds,
    },
  ];
  return (
    <div className="relative flex flex-col justify-center items-center mx-auto">
      <div className="flex justify-center items-center">
        <div className="bg-[#094E10] text-center py-20 rounded-b-[10px] desktop_tab-shadow">
          <span className="title text-[#FFFFFF] text-[48px] leading-[57.6px] font-Bebas_Neue">
            Attention all pizza and hockey lovers
          </span>
        </div>
      </div>
      <div className="flex justify-between w-full absolute mt-8  top-1/9 left-1/2 -translate-x-1/2 -translate-y-1/9">
        {data.map((item, index) => (
          <div
            className="flex flex-col justify-center items-center"
            key={index}
          >
            <div className="counter-shadow bg-[#FFFFFF] p-4 w-[69px] h-[80px] text-center rounded-[6px] flex-none">
              <span className="text-[#830101] font-semibold text-3xl">
                {item?.inter}
              </span>
            </div>
            <span className="text-xs py-2 text-[#FFFFFF]">{item?.name}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center text-center pt-[85px] pb-8 px-5">
        <div>
          <p className="py-[19px] text-[#FFFFFF] text-[24px] leading-[28.8px] font-Graphik">
            Topper's Pizza is proud to introduce our Toronto Maple Leafs
            Giveaway!
          </p>
          <div className="pt-4">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

const Desktop = () => {
  return (
    <div className="my-auto grid grid-cols-1 gap-y-10 lg:grid-cols-2">
      <div className="p-20  flex flex-col justify-center items-center">
        <p className="title text-[#FFFFFF] text-[64px] leading-[77px] font-Bebas_Neue">
          Attention all pizza and hockey lovers
        </p>
        <p className="py-[19px] text-[#FFFFFF] text-[26px] leading-[31.2px] font-Graphik">
          Topper's Pizza is proud to introduce our Toronto Maple Leafs Giveaway!
        </p>
        <span>
          <Button />
        </span>
      </div>
      <div className="m-auto">
        <TimeDisplay />
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      className={`bg-[url('images/hero_bg.jpg')] w-[100%] h-[100%] bg-no-repeat bg-cover`}
    >
      <div className="bg-[#013F7D8C] w-[100%] h-[100%] pb-10 sm:pt-[84px]">
        <Container className="md:hidden">
          <Mobile />
        </Container>
        <Container className="hidden  md:block">
          <Desktop />
        </Container>
        <Banner />
      </div>
    </section>
  );
};
export default Hero;
