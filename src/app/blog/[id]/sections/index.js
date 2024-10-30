"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import RichText from "./components/richText";
import Quote from "./components/quote";
import Media from "./components/media";
import BlogPreview from "@/components/blog-preview";

const componentMap = {
  "shared.rich-text": RichText,
  "shared.quote": Quote,
  "shared.media": Media,
};

const url = process.env.NEXT_PUBLIC_URL;
export default function Section({ post, locale }) {
  let sliderRef = useRef(null);

  console.log("reza:", { locale });

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true,
  };

  const list = post.title?.split(" "),
    lng = list?.length || 0,
    half = Math.ceil(lng / 2),
    first = list?.slice(0, half).join(" ") + " ",
    second = list?.slice(half, lng).join(" ");

  const qs = locale ? `?locale=${locale}` : "";
  const link = `/blog/${post.nextId}${qs}`;

  return (
    <div className="flex flex-col items-center py-2 px-8 lg:pt-0 pt-10 max-w-5xl m-auto gap-5">
      {post.nextId ? (
        <Link
          className="flex justify-center items-center gap-3 ml-auto text-primary-900 font-bold mb-4"
          href={link}
        >
          <p>Next Post</p>
          <i className="icon-mim-chevron -rotate-90 relative" />
        </Link>
      ) : null}
      {post.cover ? (
        <div className="w-full relative aspect-video">
          <Image
            className="object-cover object-center"
            src={`${url}${post?.cover?.url}`}
            alt={post?.cover?.alternativeText}
            fill
          />
        </div>
      ) : null}
      <h1 className="md:text-5xl text-2xl font-bold font-Exo text-primary-900">
        <span>{first}</span>
        <span className="text-primary-500">{second}</span>
      </h1>
      {post?.blocks?.map((componentData) => {
        const Component = componentMap[componentData.__component]; // Get the corresponding component
        if (!Component) return null; // If no component matches, return null
        return <Component {...componentData} key={componentData.id} />;
      })}

      {post?.related?.length ? (
        <div className="w-full relative px-14">
          <i
            className="icon-mim-chevron absolute text-2xl -rotate-90 right-0 z-50 cursor-pointer p-4"
            onClick={next}
          />
          <i
            className="icon-mim-chevron absolute text-2xl rotate-90 left-0 z-50 cursor-pointer p-4"
            onClick={previous}
          />
          <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
            {post?.related.map((rel) => (
              <div className="h-full mx-5" key={rel.id}>
                <BlogPreview key={rel.id} {...rel} lang={locale} />
              </div>
            ))}
          </Slider>
        </div>
      ) : null}
      <Link href={`/blog${qs}`}>
        <button className="bg-primary-500 text-white px-8 py-2 rounded-lg font-bold text-xl">
          View all
        </button>
      </Link>
    </div>
  );
}
