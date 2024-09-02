"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const searchParams = useSearchParams();
  const { t } = useTranslation(searchParams.get("locale"));

  const list = [
    "industry-1",
    "industry-2",
    "industry-3",
    "industry-4",
    "industry-5",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        lastName,
        email,
        message,
      }),
    });

    if (response.ok) {
      setStatus("Email sent successfully!");
    } else {
      setStatus("Failed to send email.");
    }
  };

  return (
    <section data-aos="fade-up">
      <div className="md:my-16 my-12 flex mx-6 flex-col md:flex-row justify-evenly items-center gap-6">
        <div className="font-bold max-w-[472px] w-[472px] flex flex-col gap-10">
          <h1 className="text-primary-900 text-6xl w-fit whitespace-nowrap">
            Request a Demo
          </h1>
          <p className="text-neutral-700 text-justify text-xl">
            For more information or to schedule a consultation, fill this form
            or contact us at your convenience.
          </p>
          <div className="flex gap-5">
            <div className="w-11 h-11 min-w-11 min-h-11 rounded-full bg-primary-800" />
            <div className="w-11 h-11 min-w-11 min-h-11 rounded-full bg-primary-800" />
            <div className="w-11 h-11 min-w-11 min-h-11 rounded-full bg-primary-800" />
            <div className="w-11 h-11 min-w-11 min-h-11 rounded-full bg-primary-800" />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-primary-500 font-CerebriSansPro p-6 md:p-12 pb-17 rounded-lg w-10/12 md:w-10/12 flex flex-col gap-6 items-center max-w-2xl font-bold"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 w-full">
            <input
              placeholder={t("Name")}
              className="outline-none p-4 grow w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              placeholder={t("Company")}
              className="outline-none p-4 grow w-full"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <input
            placeholder={t("Email_Address")}
            className="outline-none p-4 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
          />
          <input
            placeholder={t("Phone_Number")}
            className="outline-none p-4 w-full"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <div className="w-full relative">
            <i className="icon-mim-chevron absolute text-primary-500 right-4 top-5 pointer-events-none" />
            <select
              className={`outline-none p-4 w-full appearance-none ${
                message ? "" : "text-neutral-400"
              }`}
              onChange={(e) => setMessage(e.target.value)}
              required
              value={message}
            >
              <option value="" disabled selected hidden>
                Industry
              </option>
              {list.map((x) => (
                <option className="text-neutral-900" key={x} value={x}>
                  {x}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-primary-900 text-neutral-25 md:rounded-md md:px-8 md:py-4 px-6 py-3 font-extrabold md:text-xl text-xs rounded-lg self-start"
          >
            {t("get_a_quote")}
          </button>
          {status && <p>{status}</p>}
        </form>
      </div>
      <div className="flex flex-col gap-6 items-center m-10">
        <Image width={80} height={80} src="/images/Logo2.png" alt="yt" />
        <div className="flex gap-10">
          <div className="w-10 h-10 min-w-10 min-h-10 bg-neutral-300 rounded-full" />
          <div className="w-10 h-10 min-w-10 min-h-10 bg-neutral-300 rounded-full" />
          <div className="w-10 h-10 min-w-10 min-h-10 bg-neutral-300 rounded-full" />
          <div className="w-10 h-10 min-w-10 min-h-10 bg-neutral-300 rounded-full" />
        </div>
        <p className="font-extrabold">Montreal | Toronto | Miami</p>
        <p className="font-bold">
          Copyright © 2024 Blü Creative. All rights reserved.
        </p>
      </div>
    </section>
  );
}
