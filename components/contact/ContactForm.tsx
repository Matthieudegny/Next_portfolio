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
  const [loading, setLoading] = useState<boolean>(false);
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
    }, 10000);
    const timeout2 = setTimeout(() => {
      setmessageToDisplayFromEmailResponse("");
    }, 12000);
    return () => {
      clearTimeout(timeout), clearTimeout(timeout2);
    };
  }, [responseEmail]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
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
    } finally {
      setLoading(false);
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

  const animationOff = () => {
    const timeout = setTimeout(() => {
      setaniamtionButton(false);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  };

  return (
    <form
      autoComplete="off"
      className="relative flex flex-col pt-20 p-5 sm:p-20 pb-10"
      onSubmit={handleSubmit}
    >
      <div
        style={{
          willChange: "height",
          height: responseEmail !== "" ? "0px" : "60px",
          transition: "height 1s ease-in-out",
        }}
        className={`absolute w-full duration-1000 ${
          mobileVersion ? "-bottom-5" : "top-0"
        }  xl:top-5 left-1/2 -translate-x-1/2 z-20 bg-black`}
      ></div>
      <div
        className={`absolute w-full ${
          mobileVersion ? "-bottom-5" : "top-0"
        } xl:top-5 w-4/5 left-1/2 -translate-x-1/2 z-10 text-center md:text-2xl `}
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
        <div className="absolute bottom-0 h-1px w-full bg-gray-400" style={getNavStyles(1.5)}></div>
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
        <div className="absolute bottom-0 h-1px w-full bg-gray-400" style={getNavStyles(1.8)}></div>
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
        <div className="absolute bottom-0 h-1px w-full bg-gray-400" style={getNavStyles(2.1)}></div>
      </div>

      <button type="submit" style={getNavStyles(2.4)} className="mt-20">
        <div
          className="overflow-hidden h-20 inline"
          onMouseEnter={() => setaniamtionButton(true)}
          onMouseLeave={animationOff}
        >
          {loading ? (
            <div className="w-full flex justify-center items-center ">
              <svg
                aria-hidden="true"
                className="w-14 h-14 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-400"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          ) : (
            <AnimationButton Anim={aniamtionButton}>SEND MESSAGE</AnimationButton>
          )}
        </div>
      </button>
    </form>
  );
}

export default ContactForm;
