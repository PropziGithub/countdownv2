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
  const [success, setSuccess] = useState(false);

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
      setSuccess(true);
    } catch (error) {
      event.target.reset();
      setSuccess(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [success]);

  return (
    <section className="pt-10 sm:pt-20 " id="enter">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-4">
          <span className="font-Montserrat text-[20px] leading-[30.64px] tracking-tight text-gray-900">
            Don't wait! Get your hands on a Bacon Grilled Cheese pizza and enter
            for a chance to cheer the Leafs on in person.
          </span>
        </div>
        {success && (
          <div className="mx-auto max-w-2xl text-center mb-4 p-5 rounded-xl bg-green-700">
            <span className="font-Montserrat text-[20px] leading-[30.64px] tracking-tight text-white ">
              Thank you for your submission!
            </span>
          </div>
        )}
        <div className="tab-shadow mx-auto max-w-3xl rounded-[10px] shadow-md bg-[#013F7D] px-4 py-4">
          <form
            onSubmit={handleSubmit}
            className="lg:flex flex-col justify-center items-center"
          >
            <div className="grid md:grid-cols-2 gap-6">
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
            <label htmlFor="" className="flex gap-4 mt-5 text-white lg:mx-6">
              <input type="checkbox" className="self-start" required />
              <span className="block mt-[-5px] text-[14px] md:text-[16px]">
                Send me updates from Topper's Pizza with delicious offers, new
                product alerts and event invites.
              </span>
            </label>

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
