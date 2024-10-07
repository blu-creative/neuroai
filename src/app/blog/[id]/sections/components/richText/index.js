const RichText = ({ body }) => (
  <div dangerouslySetInnerHTML={{ __html: body }} />
);

export default RichText;
