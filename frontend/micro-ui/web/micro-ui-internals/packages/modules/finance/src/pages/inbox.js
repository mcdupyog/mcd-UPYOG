import React from "react";

/**
 * 
 * Created By : Umesh Kumar 
 * Created On : 13-05-2025
 * Purpose : This is inbox page for finance , currently not working 
 * Code status : closed
 */

const FinanceInbox = () => {
  const rows = [
    {
      voucherNumber: "VCH-2024-001",
      department: "Accounts",
      amount: 25000,
    },
    {
      voucherNumber: "VCH-2024-002",
      department: "HR",
      amount: 18000,
    },
  ];

  return (
    <div style={{ padding: "1rem" }}>
      <h1 style={{ fontSize: "32px", fontFamily: "Roboto Condensed" }}>
        Finance Inbox
      </h1>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th style={cellStyle}>Voucher Number</th>
            <th style={cellStyle}>Department</th>
            <th style={cellStyle}>Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td style={cellStyle}>{row.voucherNumber}</td>
              <td style={cellStyle}>{row.department}</td>
              <td style={cellStyle}>{row.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const cellStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  textAlign: "left",
};

export default FinanceInbox;
