import React, { useState } from "react";
import {
  Dropdown,
  LabelFieldPair,
  SubmitBar,
  Button,
  RadioButtons,
  TextArea
} from "@egovernments/digit-ui-react-components";

const ClosedPeriodForm = () => {
  const [formData, setFormData] = useState({
    financialYear: null,
    fromMonth: "Apr",
    tillMonth: null,
    closeType: "SoftClose",
    remarks: ""
  });

  const financialYears = [
    { code: "2023-2024", name: "2023-2024" },
    { code: "2024-2025", name: "2024-2025" }
  ];

  const months = [
    { code: "Apr", name: "April" },
    { code: "May", name: "May" },
    { code: "Jun", name: "June" },
    { code: "Jul", name: "July" },
    { code: "Aug", name: "August" },
    { code: "Sep", name: "September" },
    { code: "Oct", name: "October" },
    { code: "Nov", name: "November" },
    { code: "Dec", name: "December" },
    { code: "Jan", name: "January" },
    { code: "Feb", name: "February" },
    { code: "Mar", name: "March" }
  ];

  const closeTypes = [
    { label: "SoftClose", value: "SoftClose" },
    { label: "HardClose", value: "HardClose" }
  ];

  const handleSubmit = () => {
    console.log("Submitted Data:", formData);
  };

  return (
    <div style={{ padding: "1rem", background: "#fff", borderRadius: "5px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
      <h2
        style={{
          background: "#2C3E50",
          color: "#fff",
          padding: "10px",
          fontSize: "1.2rem",
          borderRadius: "5px 5px 0 0",
        }}
      >
        Closed Period Form
      </h2>

      <div style={{ padding: "20px" }}>
        <LabelFieldPair>
          <label>Financial Year *</label>
          <Dropdown
            selected={formData.financialYear}
            option={financialYears}
            select={(val) => setFormData({ ...formData, financialYear: val })}
            optionKey="name"
            placeholder="Select"
            isMandatory
          />
        </LabelFieldPair>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <LabelFieldPair style={{ flex: 1 }}>
            <label>From Month *</label>
            <Dropdown
              selected={months.find((m) => m.code === formData.fromMonth)}
              option={months}
              select={(val) => setFormData({ ...formData, fromMonth: val.code })}
              optionKey="name"
              placeholder="Select"
              isMandatory
            />
          </LabelFieldPair>

          <LabelFieldPair style={{ flex: 1 }}>
            <label>Till Month *</label>
            <Dropdown
              selected={formData.tillMonth}
              option={months}
              select={(val) => setFormData({ ...formData, tillMonth: val })}
              optionKey="name"
              placeholder="Select"
              isMandatory
            />
          </LabelFieldPair>
        </div>

        <LabelFieldPair>
          <label>Close Type</label>
          <RadioButtons
            selectedOption={formData.closeType}
            onSelect={(val) => setFormData({ ...formData, closeType: val })}
            options={closeTypes}
            labelKey="label"
            valueKey="value"
            inline
          />
        </LabelFieldPair>

        <LabelFieldPair>
          <label>Remarks *</label>
          <TextArea
            value={formData.remarks}
            onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
            placeholder="Enter remarks"
            required
          />
        </LabelFieldPair>

        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <SubmitBar label="Submit" onSubmit={handleSubmit} />
          <Button label="Close" />
        </div>
      </div>
    </div>
  );
};

export default ClosedPeriodForm;
