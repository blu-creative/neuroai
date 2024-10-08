"use client";

import { marked } from "marked";

const RichText = ({ body }) => {
  const x = marked(body);

  return <div className="prose" dangerouslySetInnerHTML={{ __html: x }} />;
};

export default RichText;
