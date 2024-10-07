"use client";
import Image from "next/image";
import Link from "next/link";

export default function BlogPreview({
  cover,
  title,
  description,
  minute = 5,
  documentId,
  publishedAt,
  size,
}) {
  const url = process.env.NEXT_PUBLIC_URL;
  let sizeClass = "w-[350px] min-h-[370px]";
  let imgSizeClass = "h-[196px]";
  let titleSizeClass = "text-2xl";

  if (size === "big") {
    sizeClass = "md:w-[630px] min-h-[630px] w-full max-w-[630px]";
    imgSizeClass = "h-[343px]";
    titleSizeClass = "text-4xl";
  }

  if (size === "small") {
    sizeClass = "w-[350px] min-h-[315px]";
  }

  return (
    <Link href={`/blog/${documentId}`} className="w-fit block">
      <div
        className={`bg-neutral-200 ${sizeClass} overflow-hidden rounded-lg flex flex-col`}
      >
        <div className={`relative w-full ${imgSizeClass}`}>
          {cover ? (
            <Image
              src={`${url}${cover.url}`}
              alt={cover.caption || title}
              fill
              quality={100}
              className="object-cover object-center"
            />
          ) : null}
        </div>
        <div className="justify-center flex flex-col gap-2 px-8 py-4 grow">
          {publishedAt && size !== "small" ? (
            <p className="text-neutral-100 text-sm font-bold">
              {new Date(publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          ) : null}
          <h2 className={`text-primary-900 font-bold ${titleSizeClass}`}>
            {title}
          </h2>
          {size !== "small" ? (
            <p className="text-neutral-800 font-bold text-xl">{description}</p>
          ) : null}
          <div className="bg-primary-900 text-white w-fit px-3 py-1 rounded">
            {`${minute} min read`}
          </div>
        </div>
      </div>
    </Link>
  );
}
