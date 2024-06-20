import axios, { AxiosError, AxiosResponse } from "axios";
import { FormEvent, useRef } from "react";

const Form = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (emailRef.current) {
      const formbody = {
        email: emailRef.current.value,
      };
      axios
        .post("http://34.225.132.160:8002/api", formbody)
        .then((res: AxiosResponse) => {
          console.log(res.data);
          if (emailRef.current) {
            emailRef.current.value = res.data.message;
            emailRef.current.style.color = "green";
            setTimeout(() => {
              if (emailRef.current) emailRef.current.style.color = "black";
            }, 2000);
          }
        })
        .catch((err: AxiosError) => {
          if (err.response?.status === 422) {
            if (emailRef.current) {
              emailRef.current.value = "Incorrect Email";
              emailRef.current.style.color = "red";
              setTimeout(() => {
                if (emailRef.current) emailRef.current.style.color = "black";
              }, 2000);
            }
          } else {
            console.error(err);
          }
        });
    }
  }

  return (
    <form
      className=" w-full flex flex-col items-center gap-5 lg:flex-row "
      onSubmit={handleSubmit}
    >
      <input
        ref={emailRef}
        type="email"
        required={true}
        placeholder="Email Address"
        className=" w-full outline-none border-shadow border-2 px-2 py-1 text-lg rounded-lg text-black "
      />
      <button
        type="submit"
        className=" bg-accent whitespace-nowrap px-10 py-2 text-lg rounded-lg text-white transition-all ease-in-out  hover:scale-110 lg:py-2 lg:px-2  lg:text-base xl:px-3 xl:text-lg"
      >
        Contact Me
      </button>
    </form>
  );
};

export default Form;
