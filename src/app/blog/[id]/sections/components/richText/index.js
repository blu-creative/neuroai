"use client";

import { marked } from "marked";

const RichText = ({ body }) => {
  const markedHtml = marked(body);

  return (
    <div
      className="prose max-w-full my-6"
      dangerouslySetInnerHTML={{ __html: markedHtml }}
    />
  );
};

export default RichText;
