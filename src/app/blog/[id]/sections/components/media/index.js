import Image from "next/image";
const url = process.env.NEXT_PUBLIC_URL;
const Media = ({ file }) => {
  const fileType = file.mime.split("/")[0];

  console.log({ fileType });
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <div className="w-3/4 relative aspect-video overflow-hidden">
        {fileType === "image" ? (
          <Image
            className="object-cover object-center"
            src={`${url}${file.url}`}
            alt={file.alternativeText}
            fill
          />
        ) : fileType === "video" ? (
          <video
            className="object-cover object-center w-full"
            autoPlay
            muted
            loop
            src={`${url}${file.url}`}
            alt={file.alternativeText}
          />
        ) : null}
      </div>
      {file.caption ? <p>{file.caption}</p> : null}
    </div>
  );
};

export default Media;
