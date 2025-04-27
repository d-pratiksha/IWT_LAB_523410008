import React from "react";

function Skills() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
        background: "linear-gradient(to bottom, #eef2f3, #ffffff)",
        minHeight: "100vh",
        overflow: "auto",
        textAlign: "center",
        position: "relative",
      }}
    >
      <h1 style={{ color: "#2c3e50", marginTop: 20 }}>Skills</h1>

      <div className="skills-section" style={{ margin: 20 }}>
        <h2 style={{ color: "#3498db", marginTop: 30 }}>Web Development</h2>
        <div
          className="skills-container"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: 10,
          }}
        >
          <div className="skill" style={{ margin: 15, textAlign: "center", width: 150 }}>
            <img src="/images/html.png" alt="HTML" style={{ width: 70, height: 70, display: "block", margin: "0 auto" }} />
            <p style={{ marginTop: 10, fontSize: "1em", color: "#555" }}>HTML</p>
          </div>
          <div className="skill" style={{ margin: 15, textAlign: "center", width: 150 }}>
            <img src="/images/css.png" alt="CSS" style={{ width: 70, height: 70, display: "block", margin: "0 auto" }} />
            <p style={{ marginTop: 10, fontSize: "1em", color: "#555" }}>CSS</p>
          </div>
          <div className="skill" style={{ margin: 15, textAlign: "center", width: 150 }}>
            <img src="/images/js.png" alt="JavaScript" style={{ width: 70, height: 70, display: "block", margin: "0 auto" }} />
            <p style={{ marginTop: 10, fontSize: "1em", color: "#555" }}>JavaScript</p>
          </div>
          <div className="skill" style={{ margin: 15, textAlign: "center", width: 150 }}>
            <img src="/images/react.png" alt="React" style={{ width: 70, height: 70, display: "block", margin: "0 auto" }} />
            <p style={{ marginTop: 10, fontSize: "1em", color: "#555" }}>React</p>
          </div>
        </div>
      </div>

      <div className="skills-section" style={{ margin: 20 }}>
        <h2 style={{ color: "#3498db", marginTop: 30 }}>Programming Languages</h2>
        <div
          className="skills-container"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: 10,
          }}
        >
          <div className="skill" style={{ margin: 15, textAlign: "center", width: 150 }}>
            <img src="/images/cpp.png" alt="C++" style={{ width: 70, height: 70, display: "block", margin: "0 auto" }} />
            <p style={{ marginTop: 10, fontSize: "1em", color: "#555" }}>C++</p>
          </div>
          <div className="skill" style={{ margin: 15, textAlign: "center", width: 150 }}>
            <img src="/images/java.png" alt="Java" style={{ width: 70, height: 70, display: "block", margin: "0 auto" }} />
            <p style={{ marginTop: 10, fontSize: "1em", color: "#555" }}>Java</p>
          </div>
          <div className="skill" style={{ margin: 15, textAlign: "center", width: 150 }}>
            <img src="/images/python.png" alt="Python" style={{ width: 70, height: 70, display: "block", margin: "0 auto" }} />
            <p style={{ marginTop: 10, fontSize: "1em", color: "#555" }}>Python</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
