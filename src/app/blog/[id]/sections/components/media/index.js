import Image from "next/image";
const url = process.env.NEXT_PUBLIC_URL;
const Media = ({ file }) => (
  <div className="w-full flex flex-col justify-center items-center gap-4">
    <div className="w-3/4 relative aspect-video">
      <Image
        className="object-cover object-center"
        src={`${url}${file.url}`}
        alt={file.alternativeText}
        fill
      />
    </div>
    {file.caption ? <p>{file.caption}</p> : null}
  </div>
);

export default Media;
