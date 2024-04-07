"use client";
import React from "react";
import { useForm } from "react-hook-form";

export function Form(props) {
  const { register, handleSubmit, formState: error } = useForm();

  function submit(data) {
    console.log(data);

    //Email my self
    fetch("/api/email", {
      method: "Post",
      body: JSON.stringify({
        ...data,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="pb-10 pt-5 w-[100%] max-w-[550px]"
    >
      <div className="flex flex-col gap-y-2">
        <label htmlFor="name">
          Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="name"
          placeholder="John Doe"
          className="p-2 rounded-md  shadow-md"
          {...register("name", { required: true })}
        />

        <label htmlFor="email">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          className="p-2 rounded-md shadow-md"
          placeholder="example@example.com"
          {...register("email", { required: true })}
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          className="p-2 rounded-md shadow-md"
          placeholder="+965 1234 5678"
          {...register("phone")}
        />

        <label htmlFor="message">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          placeholder="Message..."
          className="h-[150px] max-h-[300px] p-2 rounded-md shadow-md "
          {...register("message", { required: true })}
        />
        <button
          type="submit"
          className="p-2 w-full text-our-white bg-our-black dark:bg-our-white dark:text-our-black rounded-md font-medium text-lg"
        >
          submit
        </button>
      </div>
    </form>
  );
}
