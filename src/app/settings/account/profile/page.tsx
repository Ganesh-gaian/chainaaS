"use client";
import React, { useState } from "react";
import SettingHeader from "@/components/setting/reuseableComponent/SettingHeader";
import PersonalInformation from "@/components/setting/account/personalInformation";
import AddressInformation from "@/components/setting/account/AddressInformation";
import CurrentPlan from "@/components/setting/account/CurrentPlan";
import { Button, Input, Typography } from "antd";
import { EditOutlined, SaveOutlined } from "@ant-design/icons";
import Image from "next/image";
import avatarIcon from "../../../../../public/images/avatar.png";
import CustomButton from "@/components/setting/reuseableComponent/CustomButton";

const { Title } = Typography;

// Define interfaces for profile data
interface PersonalInfo {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phoneNumber: string;
  mobileNumber: string;
}

interface AddressInfo {
  country: string;
  cityState: string;
  postalCode: string;
}

interface CurrentPlanInfo {
  name: string;
  description: string;
}

interface ProfileData {
  personalInfo: PersonalInfo;
  address: AddressInfo;
  currentPlan: CurrentPlanInfo;
}

const ProfilePage: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    personalInfo: {
      firstName: "Jack",
      lastName: "Adams",
      company: "ARK Multicasting, Inc.",
      email: "jack.adams@gmail.com",
      phoneNumber: "(+678) 463890",
      mobileNumber: "+91 9380813918",
    },
    address: {
      country: "United States of America",
      cityState: "Los Angeles",
      postalCode: "ERT 62574",
    },
    currentPlan: {
      name: "Enterprise",
      description: "Up to 10GB of data usage",
    },
  });

  const updatePersonalInfo = (updatedPersonalInfo: PersonalInfo) => {
    setProfileData((prevData) => ({
      ...prevData,
      personalInfo: updatedPersonalInfo,
    }));
  };

  const updateAddressInfo = (updatedAddressInfo: AddressInfo) => {
    setProfileData((prevData) => ({
      ...prevData,
      address: updatedAddressInfo,
    }));
  };

  const [isEditingHeader, setIsEditingHeader] = useState(false);

  const toggleEditHeader = () => {
    setIsEditingHeader(!isEditingHeader);
  };

  const saveHeader = () => {
    setIsEditingHeader(false);
  };

  const { personalInfo, address, currentPlan } = profileData;

  return (
    <div className="h-[85vh] overflow-y-auto scrollBar flex flex-col gap-[0.8vw] w-[80%] mr-[1vw]">
      <SettingHeader heading="Profile" text="Your personal information and account security settings." />

      {/* Profile Header */}
      <div className="flex flex-col gap-2 bg-white shadow-sm rounded-sm p-[1vw]">
        <div className="flex justify-between items-center gap-[0.4vw]">
          <div className="flex items-center justify-center gap-[0.2vw]">
            <Image src={avatarIcon} alt="avatarIcon" className="w-[2.4vw]" />
            {isEditingHeader ? (
              <Input
                value={personalInfo.firstName}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    personalInfo: { ...personalInfo, firstName: e.target.value },
                  })
                }
              />
            ) : (
              <p className="text-[#323E4F] fs-16">
                {personalInfo.firstName} {personalInfo.lastName}
              </p>
            )}
          </div>
          <div>
            {isEditingHeader ? (
              <Button icon={<SaveOutlined />} onClick={saveHeader} />
            ) : (
              <Button icon={<EditOutlined />} onClick={toggleEditHeader} />
            )}
          </div>
        </div>
        <p className="text-[#697483] fs-12">Broadcast Manager</p>
        <p className="text-[#697483] fs-12">Los Angeles, California, USA</p>
      </div>

      {/* Personal Information Component */}
      <PersonalInformation personalInfo={personalInfo} updatePersonalInfo={updatePersonalInfo} />

      {/* Address Information Component */}
      <AddressInformation addressInfo={address} updateAddressInfo={updateAddressInfo} />

      {/* Change Password */}
      <div className="bg-white shadow-sm rounded-sm flex justify-between items-center p-[1vw]">
        <div>
          <p className="profile_value"> Change Password </p>
          <p className="profile_attribute">
            If you have forgotten your current password, you can easily reset it here.
          </p>
        </div>
        {/* <Button className="profile_value">Reset Password</Button> */}
        <CustomButton
          text="Reset Password"
          type="default"
          width="9.274vw"
          height="2.22vw"
          fontSize="0.9722vw"
          borderRadius="0.14vw"
          border="0.1vw solid #d9d9d9"
          color="#697483"
        />
      </div>

      {/* Current Plan Component */}
      <CurrentPlan currentPlan={currentPlan} />
    </div>
  );
};

export default ProfilePage;
