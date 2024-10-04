"use client";

import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="w-[58.296vw] flex flex-col gap-[0.278vw] bg-white rounded-[0.14vw] px-[1.67vw] shadow-[inset_0px_-0.1vw_0px_0px_#F0F0F0]">
      <div className="w-full h-[2.78vw] pt-[1.12vw] ">
        <span className="text-[1.12vw] text-[#323E4F] font-semibold">
          ChainaaS
        </span>
      </div>
      <div className="w-full pb-[1.12vw] text-[0.972vw] text-[#697483]">
        <p className="">
          At ChainaaS, we are committed to protecting your privacy and ensuring
          the security of your personal information. This Privacy Policy
          explains how we collect, use, and protect the data you provide while
          using our platform.
        </p>

        <p className="mt-[2vw]">
          We collect the following types of information to provide and improve
          our services:
        </p>
        <ul className=" list-disc pl-6 mt-2">
          <li>
            Personal Information: Includes your name, email address, phone
            number, and company details.
          </li>
          <li>
            Usage Data: Information about how you interact with our platform,
            including app usage, log data, and preferences.
          </li>
          <li>
            Payment Information: Credit card or billing details for subscription
            and billing purposes.
          </li>
          <li>
            Location Data: Information about the locations of the towers and
            devices you manage on the platform.
          </li>
        </ul>

        <h3 className="mt-[1vw]">
          We only share your personal information in the following situations:
        </h3>
        <ul className="list-disc pl-10 mt-2">
          <li>
            With Service Providers: We may share data with trusted service
            providers who help us deliver our services, such as payment
            processors and customer support.
          </li>
          <li>
            Legal Requirements: If required by law, we may disclose your
            information to comply with legal obligations or enforce our terms.
          </li>
          <li>
            Business Transfers: In case of a merger, acquisition, or sale of
            assets, we may transfer your information to the new business entity.
          </li>
        </ul>

        <p className="mt-[1vw]">
          We may update this Privacy Policy from time to time. Any changes will
          be reflected on this page, and we will notify you of significant
          changes via email or platform notifications.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
