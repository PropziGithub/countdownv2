import React, { useState, useEffect } from "react";
import Container from "@/components/Container";
import Banner from "@/components/Banner";

const Button = () => {
  return (
    <button
      type="submit"
      className="btn-shadow bg-[#AA0000] hover:bg-[#094E10] duration-500 ease-in-out text-[#FFFFFF] inline-flex justify-center rounded-[10px] px-[25px] py-[10px] text-[18px] leading-[27.57px] font-Montserrat outline-2 outline-offset-2"
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
              <span className="text-[#094E10] font-Montserrat font-semibold text-5xl">
                {item?.inter}
              </span>
            </div>
            <span className="text-xs py-2 text-[#FFFFFF] font-Montserrat">
              {item?.name}
            </span>
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
    <div className="flex flex-col justify-center items-center mx-auto">
      <div className="flex justify-center items-center">
        <div className="text-center pt-20 pb-6 flex flex-col justify-center items-center">
          <div className="flex items-center text-white">
            <p className="w-[70%]">This contest is brought to you by</p>
            <img src="/olymel.png" alt="" className="h-20 w-20" />
          </div>
          <span className="text-[#FFFFFF] text-[47px] leading-[57.6px] font-Montserrat">
            Attention All Pizza and Hockey Lovers
          </span>
        </div>
      </div>
      <div className="flex justify-between w-full mx-auto">
        {data.map((item, index) => (
          <div
            className="flex flex-col justify-center items-center"
            key={index}
          >
            <div className="counter-shadow bg-[#FFFFFF] p-4 w-[69px] h-[80px] flex justify-center items-center text-center rounded-[6px] flex-none">
              <span className="text-[#094E10]  font-Montserrat font-semibold text-4xl">
                {item?.inter}
              </span>
            </div>
            <span className="text-xs py-2 text-[#FFFFFF] font-Montserrat">
              {item?.name}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center text-center py-8 px-5">
        <span className="py-2 text-[#FFFFFF] text-[16px] leading-[24px] text-center font-Montserrat">
          Contest ends{" "}
          <strong>at 11:00 p.m. on Tuesday, March 21, 2023.</strong>
        </span>
        <div>
          <p className="py-[19px] text-[#FFFFFF] text-[24px] leading-[24px] font-Montserrat">
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
      <div className="px-10 py-20 flex flex-col justify-center items-center text-center">
        <div className="flex items-center text-white">
          <p>This contest is brought to you by</p>
          <img src="/olymel.png" alt="" className="h-32 w-32" />
        </div>
        <p className="text-[#FFFFFF] text-[56px] leading-[77px] font-Montserrat">
          Attention All Pizza and Hockey Lovers
        </p>
        <p className="py-[19px] text-[#FFFFFF] text-[26px] leading-[25px] font-Montserrat">
          Topper's Pizza is proud to introduce our Toronto Maple Leafs Giveaway!
        </p>
        <span>
          <Button />
        </span>
      </div>
      <div className="m-auto flex flex-col">
        <TimeDisplay />
        <span className="py-2 text-[#FFFFFF] text-[16px] leading-[24px] text-center font-Montserrat">
          Contest ends{" "}
          <strong>at 11:00 p.m. on Tuesday, March 21, 2023.</strong>
        </span>
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
