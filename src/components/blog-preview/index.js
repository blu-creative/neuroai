"use client";
import Image from "next/image";
import Link from "next/link";

export default function BlogPreview({ src, title, brief, minute, id, date }) {
  return (
    <Link href={`/blog/${id}`}>
      <div className="bg-neutral-200 w-[350px] min-h-[370px] overflow-hidden rounded-lg">
        <div className="relative w-full h-[196px]">
          <Image
            src={src}
            alt={title}
            fill
            quality={100}
            className="object-cover object-center"
          />
        </div>
        <div className="justify-center flex flex-col gap-2 px-8 py-2">
          {date ? (
            <p className="text-neutral-100 text-sm font-bold">{date}</p>
          ) : null}
          <h2 className="text-primary-900 font-bold text-2xl">{title}</h2>
          <p className="text-neutral-800 font-bold text-xl">{brief}</p>
          <div className="bg-primary-900 text-white w-fit px-3 py-1 rounded">
            {`${minute} min read`}
          </div>
        </div>
      </div>
    </Link>
  );
}
