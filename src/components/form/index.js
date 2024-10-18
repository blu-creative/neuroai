// "use client";

// import { useTranslation } from "@/hooks/useTranslation";
// import { useSearchParams } from "next/navigation";

// import { useState } from "react";

// export default function Form() {
//   const [name, setName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [phone, setPhone] = useState("");
//   const [status, setStatus] = useState("");
//   const searchParams = useSearchParams();

//   const [loading, setLoading] = useState(false);
//   const { t } = useTranslation(searchParams.get("locale"));

//   const list = [
//     "Government",
//     "Education",
//     "Institutional",
//     "Non-Profit",
//     "Corporate",
//     "Small & Medium Business",
//   ];

//   const Toast = ({ message, type = "success", onClose }) => {
//     return message ? (
//       <div
//         className={`fixed top-2 right-2 px-4 py-2 rounded-lg text-white ${
//           type === "success" ? "bg-green-500" : "bg-red-500"
//         } shadow-lg`}
//         role="alert"
//       >
//         {message}
//       </div>
//     ) : null;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const response = await fetch("/api/send-email", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name,
//         lastName,
//         email,
//         message,
//       }),
//     });

//     if (response.ok) {
//       setStatus("Email sent successfully!");
//       setName("");
//       setLastName("");
//       setEmail("");
//       setPhone("");
//       setMessage("");
//       setLoading(false);
//       setTimeout(() => setStatus(""), 3000); // Clear status after 3 seconds
//       window.location.href =
//         "https://calendly.com/d/cqbc-49w-8dk/neuro-ai-demo";
//     } else {
//       setStatus("Failed to send email.");
//       setLoading(false);
//       setTimeout(() => setStatus(""), 3000); // Clear status after 3 seconds
//     }
//     // if (response.ok) {
//     //   setStatus("Email sent successfully!");
//     //   window.location.href =
//     //     "https://calendly.com/d/cqbc-49w-8dk/neuro-ai-demo";
//     // } else {
//     //   setStatus("Failed to send email.");
//     // }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-primary-500  p-6 md:p-12 pb-17 rounded-lg w-10/12 md:w-10/12 flex flex-col gap-6 items-center max-w-2xl font-bold"
//     >
//       <div className="flex flex-col md:flex-row items-center gap-6 w-full">
//         <input
//           placeholder={t("Name")}
//           className="outline-none p-4 grow w-full"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           placeholder={t("Company")}
//           className="outline-none p-4 grow w-full"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//           required
//         />
//       </div>
//       <input
//         placeholder={t("Email_Address")}
//         className="outline-none p-4 w-full"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//         type="email"
//       />
//       <input
//         placeholder={t("Phone_Number")}
//         className="outline-none p-4 w-full"
//         type="tel"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//         required
//       />
//       <div className="w-full relative">
//         <i className="icon-mim-chevron absolute text-primary-500 right-4 top-5 pointer-events-none" />
//         <select
//           className={`outline-none p-4 w-full appearance-none ${
//             message ? "" : "text-neutral-400"
//           }`}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//           value={message}
//         >
//           <option value="" disabled defaultValue hidden>
//             Industry
//           </option>
//           {list.map((x) => (
//             <option className="text-neutral-900" key={x} value={x}>
//               {x}
//             </option>
//           ))}
//         </select>
//       </div>
//       {/* <button
//         type="submit"
//         className="bg-primary-900 text-neutral-25 md:rounded-md md:px-8 md:py-3 px-6 py-3 font-extrabold md:text-xl text-xs rounded-lg self-start"
//       >

//         Submit
//       </button>
//       {status && <p>{status}</p>} */}
//       <button
//         type={`${!loading ? "submit" : "button"}`}
//         disabled={loading}
//         className={`${
//           loading
//             ? "bg-primary-700 text-neutral-25"
//             : "bg-primary-900 text-neutral-25"
//         } md:rounded-md md:px-8 md:py-4 px-6 py-3 font-extrabold md:text-xl text-xs rounded-lg flex items-center justify-center`}
//       >
//         {loading ? (
//           <div
//             className="w-6 h-6 border-4 border-t-4 border-white border-solid rounded-full animate-spin"
//             style={{
//               borderColor: "transparent transparent white transparent",
//             }}
//           ></div>
//         ) : (
//           <span>Submit</span>
//         )}
//       </button>
//       <Toast
//         message={status}
//         type={status === "Email sent successfully!" ? "success" : "error"}
//         onClose={() => setStatus("")}
//       />
//     </form>
//   );
// }

"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation(searchParams.get("locale"));

  const list = [
    "Government",
    "Education",
    "Institutional",
    "Non-Profit",
    "Corporate",
    "Small & Medium Business",
  ];

  const Toast = ({ message, type = "success", onClose }) => {
    return message ? (
      <div
        className={`fixed top-2 right-2 px-4 py-2 rounded-lg text-white ${
          type === "success" ? "bg-green-500" : "bg-red-500"
        } shadow-lg`}
        role="alert"
      >
        {message}
      </div>
    ) : null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Submitting to Mailchimp form
    const form = document.getElementById("mc-embedded-subscribe-form");
    if (form) {
      form.submit();
    }

    // Additional logic for email sending process
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        lastName,
        email,
        message,
      }),
    });

    if (response.ok) {
      setStatus("Email sent successfully!");
      setName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setLoading(false);
      setTimeout(() => setStatus(""), 3000);
      window.location.href =
        "https://calendly.com/d/cqbc-49w-8dk/neuro-ai-demo";
    } else {
      setStatus("Failed to send email.");
      setLoading(false);
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <form
      action="https://dev.us11.list-manage.com/subscribe/post?u=2632e0c8da2d62f07c4c1f8d7&amp;id=3ea7295903&amp;f_id=00cf15e0f0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
      onSubmit={handleSubmit}
      className="bg-primary-500 p-6 md:p-12 pb-17 rounded-lg w-10/12 md:w-10/12 flex flex-col gap-6 items-center max-w-2xl font-bold"
    >
      <div className="flex flex-col md:flex-row items-center gap-6 w-full">
        <input
          placeholder={t("Name")}
          className="outline-none p-4 grow w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          name="FNAME"
          id="mce-FNAME"
        />
        <input
          placeholder={t("Company")}
          className="outline-none p-4 grow w-full"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          name="LNAME"
          id="mce-LNAME"
        />
      </div>
      <input
        placeholder={t("Email_Address")}
        className="outline-none p-4 w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        type="email"
        name="EMAIL"
        id="mce-EMAIL"
      />
      <input
        placeholder={t("Phone_Number")}
        className="outline-none p-4 w-full"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        name="PHONE"
        id="mce-PHONE"
      />
      <div className="w-full relative">
        <i className="icon-mim-chevron absolute text-primary-500 right-4 top-5 pointer-events-none" />
        <select
          className={`outline-none p-4 w-full appearance-none ${
            message ? "" : "text-neutral-400"
          }`}
          onChange={(e) => setMessage(e.target.value)}
          required
          value={message}
          name="MESSAGE"
        >
          <option value="" disabled hidden>
            Industry
          </option>
          {list.map((x) => (
            <option className="text-neutral-900" key={x} value={x}>
              {x}
            </option>
          ))}
        </select>
      </div>
      <button
        type={!loading ? "submit" : "button"}
        disabled={loading}
        className={`${
          loading
            ? "bg-primary-700 text-neutral-25"
            : "bg-primary-900 text-neutral-25"
        } md:rounded-md md:px-8 md:py-4 px-6 py-3 font-extrabold md:text-xl text-xs rounded-lg flex items-center justify-center`}
      >
        {loading ? (
          <div
            className="w-6 h-6 border-4 border-t-4 border-white border-solid rounded-full animate-spin"
            style={{
              borderColor: "transparent transparent white transparent",
            }}
          ></div>
        ) : (
          <span>{t("Submit")}</span>
        )}
      </button>
      <Toast
        message={status}
        type={status === "Email sent successfully!" ? "success" : "error"}
        onClose={() => setStatus("")}
      />
    </form>
  );
}
