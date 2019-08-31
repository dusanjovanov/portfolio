import React from "react";
import {
  Facebook,
  GitHub,
  Instagram,
  Linkedin,
  Mail,
  Twitter
} from "react-feather";

const ContactPage = () => {
  return (
    <div className="page contact-page">
      <h1 className="heading">Contact</h1>
      <p className="text">
        If you would like to get in touch, my email is{" "}
        <span className="link">jovanovdusan1@gmail.com</span>.
      </p>
      <p className="text">
        I'm also on{" "}
        <a
          href="https://www.linkedin.com/in/dusanjovanov"
          className="link"
          target="blank"
        >
          LinkedIn
        </a>
        ,{" "}
        <a
          href="https://www.facebook.com/jovanov92"
          className="link"
          target="blank"
        >
          FB
        </a>
        ,{" "}
        <a
          href="https://www.github.com/dusanjovanov"
          className="link"
          target="blank"
        >
          Github
        </a>
      </p>
      <p className="text">Or you can send me a message with the form below.</p>
      <p className="text">Form is not currently working (work in progress).</p>
      <form action="" className="contact-form">
        <label htmlFor="">Name:</label>
        <input type="text" />
        <label htmlFor="">Email:</label>
        <input type="email" />
        <label htmlFor="">Message:</label>
        <textarea></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactPage;

const StackOverflow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      width="40"
      height="40"
      className="stackoverflow-icon"
    >
      <path
        className="st0"
        d="M84.4 93.8V70.6h7.7v30.9H22.6V70.6h7.7v23.2z"
        style={{ fill: "#bcbbbb" }}
      />
      <path
        className="st1"
        style={{ fill: "f48023" }}
        d="M38.8 68.4l37.8 7.9 1.6-7.6-37.8-7.9-1.6 7.6zm5-18l35 16.3 3.2-7-35-16.4-3.2 7.1zm9.7-17.2l29.7 24.7 4.9-5.9-29.7-24.7-4.9 5.9zm19.2-18.3l-6.2 4.6 23 31 6.2-4.6-23-31zM38 86h38.6v-7.7H38V86z"
      />
    </svg>
  );
};

const CodePen = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="40"
      height="40"
      viewBox="0 0 50 50"
      style={{ fill: "#000" }}
    >
      <g id="surface1">
        <path d="M 25 4 L 4 17.34375 L 4 32.652344 L 25 46 L 46 32.65625 L 46 17.34375 Z M 25 29.183594 L 19.066406 25.070313 L 25 21.023438 L 30.933594 25.070313 Z M 27 17.605469 L 27 9.949219 L 40.429688 18.484375 L 34.410156 22.65625 Z M 23 17.605469 L 15.589844 22.65625 L 9.570313 18.484375 L 23 9.949219 Z M 12.09375 25.042969 L 8 27.832031 L 8 22.203125 Z M 15.570313 27.453125 L 23 32.605469 L 23 40.050781 L 9.589844 31.527344 Z M 27 32.605469 L 34.429688 27.453125 L 40.410156 31.527344 L 27 40.050781 Z M 37.90625 25.042969 L 42 22.203125 L 42 27.832031 Z "></path>
      </g>
    </svg>
  );
};

const contacts = [
  {
    id: "linkedin",
    icon: <Linkedin size="40" style={{ color: "#0077B5" }} />,
    url: "https://www.linkedin.com/in/dusanjovanov"
  },
  {
    id: "github",
    icon: <GitHub size="40" style={{ color: "#333" }} />,
    url: "https://github.com/dusanjovanov"
  },
  {
    id: "codepen",
    icon: <CodePen />,
    url: "https://codepen.io/dusanjovanov92"
  },
  {
    id: "fb",
    icon: <Facebook size="40" style={{ color: "#3b5999" }} />,
    url: "https://www.facebook.com/jovanov92"
  },
  {
    id: "twitter",
    icon: <Twitter size="40" style={{ color: "#55acee" }} />,
    url: "https://twitter.com/dusanjovanov1"
  },
  {
    id: "instagram",
    icon: <Instagram size="40" style={{ color: "#e4405f" }} />,
    url: "https://www.instagram.com/dusan.jovanov1"
  },
  {
    id: "stackoverflow",
    icon: <StackOverflow />,
    url: "https://stackoverflow.com/users/5997891/dusan-jovanov"
  }
];

const Contact = ({ contact }) => {
  return (
    <div>
      <a href={contact.url} style={{ width: 40 }}>
        {contact.icon}
      </a>
    </div>
  );
};
