import React, { useState } from "react";
import Container from "@/components/Container";

const Button = () => {
  return (
    <button
      type="submit"
      className="btn-shadow bg-[#AA0000] hover:bg-[#094E10] duration-500 ease-in-out text-[#FFFFFF] inline-flex justify-center rounded-[10px] px-10 text-[18px] leading-[27.57px] font-Montserrat outline-2 outline-offset-2 lg:w-[300px] w-full  py-1"
    >
      SUBMIT
    </button>
  );
};

const Input = ({ id, label, type = "text", className, ...props }) => {
  const formClass =
    "input-shadow block w-full appearance-none rounded-[10px] border  bg-white py-1 px-2 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 text-[18px] leading-[27.57px] font-Montserrat";
  return (
    <div className={className}>
      <input type={type} id={id} {...props} className={formClass} />
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://auto.topperscontest.ca", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await response.text();
      setFormData({});
      event.target.reset();
    } catch (error) {
      event.target.reset();
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="pt-10 sm:pt-20 ">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-4">
          <span className="font-Montserrat text-[20px] leading-[30.64px] tracking-tight text-gray-900">
            Don't wait! Get your hands on a Bacon Grilled Cheese pizza and enter
            for a chance to cheer the Leafs on in person.
          </span>
        </div>
        <div className="tab-shadow mx-auto max-w-3xl rounded-[10px] shadow-md bg-[#013F7D] px-4 py-4">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <Input
                onChange={handleChange}
                value={formData.firstName || ""}
                type="text"
                aria-label="name"
                placeholder="First name"
                autoComplete="name"
                name="firstName"
                required
                className="lg:w-80 min-w-0 shrink"
              />
              <Input
                onChange={handleChange}
                value={formData.lastName || ""}
                type="text"
                aria-label="name"
                placeholder="Last name"
                autoComplete="name"
                name="lastName"
                required
                className="lg:w-80 min-w-0 shrink"
              />
              <Input
                onChange={handleChange}
                value={formData.email || ""}
                type="email"
                aria-label="Email"
                placeholder="Email address"
                autoComplete="email"
                name="email"
                required
                className="lg:w-80 min-w-0 shrink"
              />
              <Input
                onChange={handleChange}
                value={formData.orderNumber || ""}
                type="text"
                aria-label="orderNumber"
                placeholder="Order number"
                autoComplete="orderNumber"
                name="orderNumber"
                required
                className="lg:w-80 min-w-0 shrink"
              />
            </div>

            <div className="flex justify-center items-center pt-6">
              <Button />
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};
export default Contact;
