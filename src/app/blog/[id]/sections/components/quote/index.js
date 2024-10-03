const Quote = ({ body, title }) => (
  <blockquote className="p-9 rounded-md bg-primary-200">
    <p className="font-bold text-neutral-800 text-2xl">{body}</p>
    <div className="flex gap-4 items-center mt-5">
      <div className="w-10 h-4 bg-primary-900" />
      <h3 className=" text-neutral-800 text-2xl">{title}</h3>
    </div>
  </blockquote>
);
export default Quote;
