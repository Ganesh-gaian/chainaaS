"use client";
import React, { useState } from "react";
import { Button, Input } from "antd";
import { EditOutlined, SaveOutlined } from "@ant-design/icons";

// Define the interface for personalInfo
interface PersonalInfo {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    phoneNumber: string;
    mobileNumber: string;
}

// Define the interface for props
interface PersonalInformationProps {
    personalInfo: PersonalInfo;
    updatePersonalInfo: (info: PersonalInfo) => void;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({ personalInfo, updatePersonalInfo }) => {
    const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false);

    const toggleEditPersonalInfo = () => {
        setIsEditingPersonalInfo(!isEditingPersonalInfo);
    };

    const savePersonalInfo = () => {
        setIsEditingPersonalInfo(false);
    };

    return (
        <div className="bg-white shadow-sm rounded-sm">
            <div className="flex justify-between items-center border-b p-[1vw]">
                <p className="profile_value">Personal Information</p>
                {isEditingPersonalInfo ? (
                    <Button icon={<SaveOutlined />} onClick={savePersonalInfo} />
                ) : (
                    <Button icon={<EditOutlined />} onClick={toggleEditPersonalInfo} />
                )}
            </div>
            <div className="grid grid-cols-3 gap-[1vw] p-[1vw]">
                <div>
                    <p className="profile_attribute">First Name</p>
                    {isEditingPersonalInfo ? (
                        <Input
                            className="w-full h-[] profile_value"
                            value={personalInfo.firstName}
                            onChange={(e) => updatePersonalInfo({ ...personalInfo, firstName: e.target.value })}
                        />
                    ) : (
                        <p className="profile_value ">{personalInfo.firstName}</p>
                    )}
                </div>
                <div>
                    <p className="profile_attribute">Last Name</p>
                    {isEditingPersonalInfo ? (
                        <Input
                            value={personalInfo.lastName}
                            onChange={(e) => updatePersonalInfo({ ...personalInfo, lastName: e.target.value })}
                        />
                    ) : (
                        <p className="profile_value">{personalInfo.lastName}</p>
                    )}
                </div>
                <div>
                    <p className="profile_attribute">Company</p>
                    {isEditingPersonalInfo ? (
                        <Input
                            value={personalInfo.company}
                            onChange={(e) => updatePersonalInfo({ ...personalInfo, company: e.target.value })}
                        />
                    ) : (
                        <p className="profile_value">{personalInfo.company}</p>
                    )}
                </div>
                <div>
                    <p className="profile_attribute">Email Address</p>
                    {isEditingPersonalInfo ? (
                        <Input
                            value={personalInfo.email}
                            onChange={(e) => updatePersonalInfo({ ...personalInfo, email: e.target.value })}
                        />
                    ) : (
                        <p className="profile_value">{personalInfo.email}</p>
                    )}
                </div>
                <div>
                    <p className="profile_attribute">Phone Number</p>
                    {isEditingPersonalInfo ? (
                        <Input
                            value={personalInfo.phoneNumber}
                            onChange={(e) => updatePersonalInfo({ ...personalInfo, phoneNumber: e.target.value })}
                        />
                    ) : (
                        <p className="profile_value">{personalInfo.phoneNumber}</p>
                    )}
                </div>
                <div>
                    <p className="profile_attribute">Mobile Number</p>
                    {isEditingPersonalInfo ? (
                        <Input
                            value={personalInfo.mobileNumber}
                            onChange={(e) => updatePersonalInfo({ ...personalInfo, mobileNumber: e.target.value })}
                        />
                    ) : (
                        <p className="profile_value">{personalInfo.mobileNumber}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PersonalInformation;
