import React from "react";
import Container from "@/components/Container";

const Button = () => {
  return (
    <button
      type="submit"
      className="btn-shadow bg-[#AA0000] text-[#FFFFFF] inline-flex justify-center rounded-[10px] px-10 text-[18px] leading-[27.57px] font-Sans outline-2 outline-offset-2  py-1 "
    >
      SUBMIT
    </button>
  );
};

const Input = ({ id, label, type = "text", className, ...props }) => {
  const formClass =
    "input-shadow block w-full appearance-none rounded-[10px] border  bg-white py-1 px-2 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 text-[18px] leading-[27.57px] font-Sans ";
  return (
    <div className={className}>
      <input type={type} id={id} {...props} className={formClass} />
    </div>
  );
};

const Contact = () => {
  return (
    <section className="pt-10 sm:pt-20 ">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-4">
          <span className="font-Graphik text-[20px] leading-[30.64px] tracking-tight text-gray-900">
            So don't wait! Get your hands on a Bacon Grilled Cheese pizza and
            enter for a chance to cheer on the Leafs in person.
          </span>
        </div>
        <div className="tab-shadow mx-auto max-w-3xl rounded-[10px] shadow-md bg-[#013F7D] px-4 py-4">
          <form className="flex flex-col justify-center items-center lg:flex-row gap-y-4 md:w-auto lg:space-x-2">
            <Input
              type="text"
              aria-label="name"
              placeholder="Name"
              autoComplete="name"
              required
              className="lg:w-80 min-w-0 shrink"
            />
            <Input
              type="email"
              aria-label="Email"
              placeholder="Email address"
              autoComplete="email"
              required
              className="lg:w-80 min-w-0 shrink"
            />
            <Button />
          </form>
        </div>
      </Container>
    </section>
  );
};
export default Contact;
