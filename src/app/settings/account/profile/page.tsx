"use client";

import SettingHeader from "@/components/setting/other/SettingHeader";
import React, { useState } from "react";
import { Button, Card, Input, Typography } from "antd";
import { EditOutlined, SaveOutlined } from "@ant-design/icons";
import avatarIcon from "../../../../../public/images/avatar.png";
import Image from "next/image";

const { Title, Text } = Typography;

const ProfilePage: React.FC = () => {
  // Defining the profile data
  const [profileData, setProfileData] = useState({
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
      cityState: "California, USA",
      postalCode: "ERT 62574",
    },
    currentPlan: {
      name: "Enterprise",
      description: "Up to 10GB of data usage",
    },
  });

  // State for managing the edit mode
  const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [isEditingHeader, setIsEditingHeader] = useState(false);

  // Handlers for toggling edit mode
  const toggleEditPersonalInfo = () => {
    setIsEditingPersonalInfo(!isEditingPersonalInfo);
  };

  const toggleEditAddress = () => {
    setIsEditingAddress(!isEditingAddress);
  };

  const toggleEditHeader = () => {
    setIsEditingHeader(!isEditingHeader);
  };

  // Handlers for saving data (for now just toggle back)
  const savePersonalInfo = () => {
    setIsEditingPersonalInfo(false);
  };

  const saveAddress = () => {
    setIsEditingAddress(false);
  };

  const saveHeader = () => {
    setIsEditingHeader(false);
  };

  // Custom heading styles
  const headingStyle = {
    color: "#697483",
    fontWeight: 400,
    fontSize: "14px",
  };

  return (
    <div className="h-[85vh] overflow-y-auto no-scrollbar flex flex-col gap-[1vw] *:w-[80%]">
      <SettingHeader
        heading="Profile"
        text="Your personal information and account security settings."
      />

      {/* Profile Header */}
      <div className="flex flex-col gap-[0.4vw] bg-white shadow-sm rounded-sm p-[1vw]">
        <div className="flex justify-between items-center gap-[1vw]">
          <div className="flex items-center">
            <Image src={avatarIcon} alt="avatarIcon" />
            {isEditingHeader ? (
              <Input
                value={profileData.personalInfo.firstName}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    personalInfo: { ...profileData.personalInfo, firstName: e.target.value },
                  })
                }
              />
            ) : (
              <Title level={4} className="mb-[1vw]">
                {profileData.personalInfo.firstName} {profileData.personalInfo.lastName}
              </Title>
            )}
          </div>
          <div>
            {
              isEditingHeader ? (
                <Button icon={<SaveOutlined />} onClick={saveHeader} />
              ) : (
                <Button icon={<EditOutlined />} onClick={toggleEditHeader} />
              )
            }
          </div>
        </div>
        <Text className="pl-[0.4vw]" type="secondary">Broadcast Manager</Text>
        <Text className="pl-[0.4vw]" type="secondary">Los Angeles, California, USA</Text>
      </div>

      {/* Personal Information */}
      <Card
        title="Personal Information"
        extra={
          isEditingPersonalInfo ? (
            <Button icon={<SaveOutlined />} onClick={savePersonalInfo} />
          ) : (
            <Button icon={<EditOutlined />} onClick={toggleEditPersonalInfo} />
          )
        }
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Text style={headingStyle} className="block">
              First Name
            </Text>
            {isEditingPersonalInfo ? (
              <Input
                value={profileData.personalInfo.firstName}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    personalInfo: { ...profileData.personalInfo, firstName: e.target.value },
                  })
                }
              />
            ) : (
              <Text>{profileData.personalInfo.firstName}</Text>
            )}
          </div>
          <div>
            <Text style={headingStyle} className="block">
              Last Name
            </Text>
            {isEditingPersonalInfo ? (
              <Input
                value={profileData.personalInfo.lastName}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    personalInfo: { ...profileData.personalInfo, lastName: e.target.value },
                  })
                }
              />
            ) : (
              <Text>{profileData.personalInfo.lastName}</Text>
            )}
          </div>
          <div>
            <Text style={headingStyle} className="block">
              Company
            </Text>
            {isEditingPersonalInfo ? (
              <Input
                value={profileData.personalInfo.company}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    personalInfo: { ...profileData.personalInfo, company: e.target.value },
                  })
                }
              />
            ) : (
              <Text>{profileData.personalInfo.company}</Text>
            )}
          </div>
          <div>
            <Text style={headingStyle} className="block">
              Email Address
            </Text>
            {isEditingPersonalInfo ? (
              <Input
                value={profileData.personalInfo.email}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    personalInfo: { ...profileData.personalInfo, email: e.target.value },
                  })
                }
              />
            ) : (
              <Text>{profileData.personalInfo.email}</Text>
            )}
          </div>
          <div>
            <Text style={headingStyle} className="block">
              Phone Number
            </Text>
            {isEditingPersonalInfo ? (
              <Input
                value={profileData.personalInfo.phoneNumber}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    personalInfo: { ...profileData.personalInfo, phoneNumber: e.target.value },
                  })
                }
              />
            ) : (
              <Text>{profileData.personalInfo.phoneNumber}</Text>
            )}
          </div>
          <div>
            <Text style={headingStyle} className="block">
              Mobile Number
            </Text>
            {isEditingPersonalInfo ? (
              <Input
                value={profileData.personalInfo.mobileNumber}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    personalInfo: { ...profileData.personalInfo, mobileNumber: e.target.value },
                  })
                }
              />
            ) : (
              <Text>{profileData.personalInfo.mobileNumber}</Text>
            )}
          </div>
        </div>
      </Card>

      {/* Address */}
      <Card
        title="Address"
        extra={
          isEditingAddress ? (
            <Button icon={<SaveOutlined />} onClick={saveAddress} />
          ) : (
            <Button icon={<EditOutlined />} onClick={toggleEditAddress} />
          )
        }
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Text style={headingStyle} className="block">
              Country
            </Text>
            {isEditingAddress ? (
              <Input
                value={profileData.address.country}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    address: { ...profileData.address, country: e.target.value },
                  })
                }
              />
            ) : (
              <Text>{profileData.address.country}</Text>
            )}
          </div>
          <div>
            <Text style={headingStyle} className="block">
              City/State
            </Text>
            {isEditingAddress ? (
              <Input
                value={profileData.address.cityState}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    address: { ...profileData.address, cityState: e.target.value },
                  })
                }
              />
            ) : (
              <Text>{profileData.address.cityState}</Text>
            )}
          </div>
          <div>
            <Text style={headingStyle} className="block">
              Postal Code
            </Text>
            {isEditingAddress ? (
              <Input
                value={profileData.address.postalCode}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    address: { ...profileData.address, postalCode: e.target.value },
                  })
                }
              />
            ) : (
              <Text>{profileData.address.postalCode}</Text>
            )}
          </div>
        </div>
      </Card>

      {/* Change Password */}
      <Card className="mb-6">
        <div className="flex justify-between items-center">
          <div>
            <Text style={headingStyle} className="block">
              Change Password
            </Text>
            <Text>
              If you have forgotten your current password, you can easily reset it here.
            </Text>
          </div>
          <Button>Reset Password</Button>
        </div>
      </Card>

      {/* Current Plan */}
      <Card className="mb-6">
        <Title level={5} className="mb-2">
          Current Plan
        </Title>
        <div className="flex items-center justify-between">
          <div>
            <Text style={headingStyle} className="block font-semibold">
              {profileData.currentPlan.name}
            </Text>
            <Text>{profileData.currentPlan.description}</Text>
          </div>
        </div>
      </Card>
    </div >
  );
};

export default ProfilePage;
