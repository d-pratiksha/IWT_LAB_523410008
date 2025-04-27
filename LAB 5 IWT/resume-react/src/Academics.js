import React from "react";

function Academics() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
        background: "#cce7ff",
        minHeight: "100vh",
        overflow: "auto",
        position: "relative",
      }}
    >
      <table
        style={{
          width: "80%",
          margin: "40px auto",
          borderCollapse: "collapse",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                backgroundColor: "#3498db",
                color: "white",
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Degree
            </th>
            <th
              style={{
                backgroundColor: "#3498db",
                color: "white",
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Institution
            </th>
            <th
              style={{
                backgroundColor: "#3498db",
                color: "white",
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Year
            </th>
            <th
              style={{
                backgroundColor: "#3498db",
                color: "white",
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Grade/CGPA
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
              <a
                href="/docs/sem2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#3498db", textDecoration: "none" }}
              >
                MCA
              </a>
            </td>
            <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
              National Institute of Technology, Kurukshetra
            </td>
            <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
              2023-Present
            </td>
            <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
              8.72/10
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
              <a
                href="/docs/DU.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#3498db", textDecoration: "none" }}
              >
                B.Sc (Hons.) CS
              </a>
            </td>
            <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
              University of Delhi
            </td>
            <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
              2020-2023
            </td>
            <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
              9.01/10
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
              <a
                href="/docs/class12.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#3498db", textDecoration: "none" }}
              >
                CBSE Class 12th
              </a>
            </td>
            <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
              Kendriya Vidyalaya No. 2, Air Force Academy, Hyderabad
            </td>
            <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
              2020
            </td>
            <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
              95.20%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Academics;
