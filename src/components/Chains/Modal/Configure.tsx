import React, { useRef, useState } from "react";
import "./configure.css";
import { Modal, Button, Tabs } from "antd";
import Towerconfig from "../TowerConfigurations/Towerconfig";
import Exciterconfig from "../TowerConfigurations/Exciterconfig";
import Physicallayerconfig from "../TowerConfigurations/Physicallayerconfig";
import Spectrumconfig from "../TowerConfigurations/Spectrumconfig";
import Modcodconfig from "../TowerConfigurations/Modcodconfig";

interface ConfigModalProps {
  isFormVisible: boolean;
  handleFormVisible: (values: any) => void;
}

const ConfigModal: React.FC<ConfigModalProps> = ({
  isFormVisible,
  handleFormVisible,
}) => {
  const [selectedtab, setSelectedtab] = useState("1");

  const onChange = (key: string) => {
    console.log(key);
    setSelectedtab(key);
  };
  const towerFormRef = useRef<any>(null);
  const exciterFormRef = useRef<any>(null);
  const pylayerFormRef = useRef<any>(null);
  const spectrumFormRef = useRef<any>(null);
  const modcodFormRef = useRef<any>(null);

  const handleSubmit = () => {
    if (selectedtab === "1" && towerFormRef.current) {
      towerFormRef.current.getFormValues();
    } else if (selectedtab === "2" && exciterFormRef.current) {
      exciterFormRef.current.getFormValues();
    }
    else if (selectedtab === "3" && pylayerFormRef.current) {
      pylayerFormRef.current.getFormValues();
    }
    else if (selectedtab === "4" && spectrumFormRef.current) {
      spectrumFormRef.current.getFormValues();
    }
    else if (selectedtab === "5" && modcodFormRef.current) {
      modcodFormRef.current.getFormValues();
    }
  };

  const tabItems = [
    {
      key: "1",
      label: "Tower",
      children: <Towerconfig ref={towerFormRef} />,
    },
    {
      key: "2",
      label: "Exciter",
      children: <Exciterconfig ref={exciterFormRef} />,
    },
    {
      key: "3",
      label: "PLP",
      children: <Physicallayerconfig ref={pylayerFormRef} />,
    },
    {
      key: "4",
      label: "Spectrum",
      children: <Spectrumconfig ref={spectrumFormRef} />,
    },
    {
      key: "5",
      label: "Mod Cod",
      children: <Modcodconfig ref={modcodFormRef} />,
    },
  ];

  return (
    <Modal
      title="Configure Settings"
      open={isFormVisible}
      width={"75vw"}
      style={{ top: "2vw" }}
      onCancel={() => handleFormVisible(false)}
      footer={[
        <Button key="cancel" onClick={() => handleFormVisible(false)}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={() => {
            handleSubmit();
          }}
        >
          Update
        </Button>,
      ]}
    >
      <div className="config-modal">
        <Tabs defaultActiveKey={"1"} items={tabItems} onChange={onChange} />
      </div>
    </Modal>
  );
};

export default ConfigModal;
