import React from 'react';

const Calendly = ({ name, lastName, email, phone }) => {

  return (
    <iframe
      src={`https://calendly.com/d/cqbc-49w-8dk/neuro-ai-demo?hide_event_type_details=1&hide_gdpr_banner=1${name ? `&name=${name}` : ""}${email ? `&email=${email}` : ""}${lastName ? `&last_name=${lastName}` : ""}${phone ? `&a1=${phone}` : ""}`}
      // width="100%"
      // height="700px"
      frameBorder="0"
      className="sm:border rounded-lg w-full min-h-[602px] md2:min-h-[750px]"
    ></iframe>
  );
};

export default Calendly;

