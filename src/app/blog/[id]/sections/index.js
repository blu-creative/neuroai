"use client";

import Image from "next/image";

import RichText from "./components/richText";
import Quote from "./components/quote";
import Media from "./components/media";

const componentMap = {
  "shared.rich-text": RichText,
  "shared.quote": Quote,
  "shared.media": Media,
};
const url = process.env.NEXT_PUBLIC_URL;
export default function Section({ post }) {
  console.log(post.blocks);
  const list = post.title.split(" "),
    lng = list.length,
    half = Math.ceil(lng / 2),
    first = list.slice(0, half).join(" ") + " ",
    second = list.slice(half, lng).join(" ");
  return (
    <div className="flex flex-col items-center py-2 px-8 lg:pt-0 pt-10 max-w-5xl m-auto gap-5">
      <div className="w-full relative aspect-video">
        <Image
          className="object-cover object-center"
          src={`${url}${post.cover.url}`}
          alt={post.cover.alternativeText}
          fill
        />
      </div>
      <h1 className="md:text-5xl text-2xl font-bold font-Exo text-primary-900">
        <span>{first}</span>
        <span className="text-primary-500">{second}</span>
      </h1>
      {post.blocks.map((componentData) => {
        const Component = componentMap[componentData.__component]; // Get the corresponding component
        if (!Component) return null; // If no component matches, return null
        return <Component {...componentData} key={componentData.id} />;
      })}
    </div>
  );
}
