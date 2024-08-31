"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useSearchParams } from "next/navigation";

import { useState } from "react";
import Image from "next/image";

export default function Form() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const searchParams = useSearchParams();
  const { t } = useTranslation(searchParams.get("locale"));

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
    <section className="md:my-16 my-12 relative" data-aos="fade-up" id="form">
      <div className="absolute z-1 h-5/6 w-2/3 bottom-0">
        <Image src="/images/Pattern.png" fill quality={100} alt="pattern" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-primary-700 p-6 md:p-12 rounded-lg w-11/12 md:w-7/12 flex flex-col gap-6 items-center relative z-2 left-1/2 transform -translate-x-1/2"
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
            placeholder={t("Last_Name")}
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
        />
        <textarea
          placeholder={t("Message")}
          className="outline-none p-4 w-full"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-neutral-800 text-neutral-25 md:rounded-md md:px-8 md:py-4 px-6 py-3 font-extrabold md:text-xl text-xs rounded-lg"
        >
          {t("get_a_quote")}
        </button>
        {status && <p>{status}</p>}
      </form>
    </section>
  );
}
