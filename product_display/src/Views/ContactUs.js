import React from "react";

function ContactUs() {
  return (
    <div>
      <h4>Contact Us</h4>
      <p>Contact Us Page Content</p>
      <ul className="font-bold p-4 text-xl text-teal-500">
        <li className="border-t border-b">
          <a href="http://github.com/bappyasif" target="_blank">
            gitHub
          </a>
        </li>
        <li className="border-b">
          <a href="http://codepen.io/bappyasif" target="_blank">
            codePen
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ContactUs;
