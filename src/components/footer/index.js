import Image from "next/image";

import Form from "@/components/form";

export default function Footer() {
  return (
    <footer data-aos="fade-up" className="mt-24 mb-32">
      <div className="md:my-16 my-12 flex mx-6 flex-col md:flex-row justify-evenly items-center gap-6">
        <div className="font-bold max-w-[452px] w-[452px] flex flex-col gap-10">
          <h1 className="text-primary-900 text-6xl w-fit whitespace-nowrap">
            Request a Demo
          </h1>
          <p className="text-neutral-700 text-justify text-xl font-CerebriSansPro">
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
        <Form />
      </div>
      <div className="flex flex-col gap-6 items-center mx-4 mt-20 font-CerebriSansPro">
        <Image width={80} height={80} src="/images/Logo2.png" alt="yt" />
        <div className="flex gap-10">
          <div className="w-10 h-10 min-w-10 min-h-10 bg-neutral-300 rounded-full" />
          <div className="w-10 h-10 min-w-10 min-h-10 bg-neutral-300 rounded-full" />
          <div className="w-10 h-10 min-w-10 min-h-10 bg-neutral-300 rounded-full" />
          <div className="w-10 h-10 min-w-10 min-h-10 bg-neutral-300 rounded-full" />
        </div>
        <p className="font-extrabold">Montreal | Toronto | Miami</p>
        <p className="font-semibold">
          Copyright © 2024 Blü Creative. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
