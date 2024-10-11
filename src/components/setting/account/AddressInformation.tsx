"use client";
import React, { useState } from "react";
import { Button, Input } from "antd";
import { EditOutlined, SaveOutlined } from "@ant-design/icons";

// Define the interface for addressInfo
interface AddressInfo {
    country: string;
    cityState: string;
    postalCode: string;
}

// Define the interface for props
interface AddressInformationProps {
    addressInfo: AddressInfo;
    updateAddressInfo: (info: AddressInfo) => void;
}

const AddressInformation: React.FC<AddressInformationProps> = ({ addressInfo, updateAddressInfo }) => {
    const [isEditingAddress, setIsEditingAddress] = useState(false);

    const toggleEditAddress = () => {
        setIsEditingAddress(!isEditingAddress);
    };

    const saveAddress = () => {
        setIsEditingAddress(false);
    };

    return (
        <div className="bg-white shadow-sm rounded-sm">
            <div className="flex justify-between items-center p-[1vw] border-b">
                <h4 className="profile_value">Address</h4>
                {isEditingAddress ? (
                    <Button icon={<SaveOutlined />} onClick={saveAddress} />
                ) : (
                    <Button icon={<EditOutlined />} onClick={toggleEditAddress} />
                )}
            </div>
            <div className="grid grid-cols-3 gap-[1vw] p-[1vw]">
                <div>
                    <p className="profile_attribute">Country</p>
                    {isEditingAddress ? (
                        <Input
                            value={addressInfo.country}
                            onChange={(e) => updateAddressInfo({ ...addressInfo, country: e.target.value })}
                        />
                    ) : (
                        <p className="profile_value">{addressInfo.country}</p>
                    )}
                </div>
                <div>
                    <p className="profile_attribute">City/State</p>
                    {isEditingAddress ? (
                        <Input
                            value={addressInfo.cityState}
                            onChange={(e) => updateAddressInfo({ ...addressInfo, cityState: e.target.value })}
                        />
                    ) : (
                        <p className="profile_value">{addressInfo.cityState}</p>
                    )}
                </div>
                <div>
                    <p className="profile_attribute">Postal Code</p>
                    {isEditingAddress ? (
                        <Input
                            value={addressInfo.postalCode}
                            onChange={(e) => updateAddressInfo({ ...addressInfo, postalCode: e.target.value })}
                        />
                    ) : (
                        <p className="profile_value">{addressInfo.postalCode}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AddressInformation;
