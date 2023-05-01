import React, { useState, useEffect } from "react";

//components
import AnimationButton from "@/components/contact/AnimationButton";

//type
import { FormData } from "@/models/typesIndex";

function ContactForm({
  mobileVersion,
  isInViewSectionForm,
}: {
  mobileVersion: boolean;
  isInViewSectionForm: boolean;
}) {
  const [responseEmail, setResponseEmail] = useState<string>("");
  const [messageToDisplayFromEmailResponse, setmessageToDisplayFromEmailResponse] = useState<string>("");
  const [aniamtionButton, setaniamtionButton] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (responseEmail === "success") {
      setmessageToDisplayFromEmailResponse("Your message has been sent.");
      setFormData({ name: "", email: "", message: "" });
    } else if (responseEmail === "error") {
      setmessageToDisplayFromEmailResponse(
        "There was an error sending your message. Please try again later, or use the Linkedin link."
      );
    }
    const timeout = setTimeout(() => {
      setResponseEmail("");
    }, 5000);
    const timeout2 = setTimeout(() => {
      setmessageToDisplayFromEmailResponse("");
    }, 6000);
    return () => {
      clearTimeout(timeout), clearTimeout(timeout2);
    };
  }, [responseEmail]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://matthieu-degny-portfolio.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("There was an error sending your message. Please try again later.");
      }

      console.log(await response.json());
      setResponseEmail("success");
    } catch (error) {
      console.error(error);
      setResponseEmail("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const styleDivInput = "flex flex-col mb-10 relative";
  const styleInput = "placeholder:text-gray-500 outline-none h-12 pt-4 pb-4 pl-4 bg-black focus:bg-black";
  const getNavStyles = (delay: number) => ({
    willChange: "width",
    width: isInViewSectionForm ? "100%" : "0%",
    transition: `width 1s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
  });

  return (
    <form
      autoComplete="off"
      className="relative flex flex-col pt-20 p-5 sm:p-20 pb-10"
      onSubmit={handleSubmit}
    >
      <div
        style={{
          willChange: "height",
          height: responseEmail !== "" ? "0px" : "50px",
          transition: "height 2s ease-in-out",
        }}
        className={`absolute w-full h-10 duration-1000 ${
          mobileVersion ? "-bottom-5" : "top-0"
        }  xl:top-5 left-1/2 -translate-x-1/2 z-20 bg-black`}
      ></div>
      <div
        className={`absolute w-full ${
          mobileVersion ? "-bottom-5" : "top-0"
        } xl:top-5 w-4/5 left-1/2 -translate-x-1/2 z-10 text-center `}
      >
        {messageToDisplayFromEmailResponse}
      </div>
      <div className={styleDivInput}>
        <label>Your Name:</label>
        <input
          className={styleInput}
          placeholder="John Doe"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <div className="absolute bottom-0 h-1px w-full bg-gray-400" style={getNavStyles(0.3)}></div>
      </div>

      <div className={styleDivInput}>
        <label>Your Email:</label>
        <input
          className={styleInput}
          placeholder="JohnDoe@gmail.com"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <div className="absolute bottom-0 h-1px w-full bg-gray-400" style={getNavStyles(0.6)}></div>
      </div>

      <div className="flex flex-col relative">
        <label>Your Message:</label>
        <textarea
          className="placeholder:text-gray-500  bg-black resize-none outline-none  pt-4 pb-4 pl-4 min-h-15v"
          placeholder="Hello Matthieu..."
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <div className="absolute bottom-0 h-1px w-full bg-gray-400" style={getNavStyles(0.9)}></div>
      </div>

      <button type="submit" style={getNavStyles(1.2)} className="mt-20">
        <div
          className="overflow-hidden h-8"
          onMouseEnter={() => setaniamtionButton(true)}
          onMouseLeave={() => setaniamtionButton(false)}
        >
          <AnimationButton Anim={aniamtionButton}>SEND MESSAGE</AnimationButton>
        </div>
      </button>
    </form>
  );
}

export default ContactForm;
