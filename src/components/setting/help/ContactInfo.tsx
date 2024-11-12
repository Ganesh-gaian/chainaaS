"use client";

import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <div className="w-[58.296vw] h-[6.8vw] bg-white py-[0.56vw] rounded-[0.14vw]">
      <div className="w-full h-full px-[1.67vw] py-[0.56vw] text-[#697483] fs-14 ">
        <p className="">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </p>
        <ul className="w-[30vw] list-disc ml-[2vw] mt-2">
          <li>
            Email:
            <a href="mailto:privacy@chainaas.com">
              privacy@chainaas.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
