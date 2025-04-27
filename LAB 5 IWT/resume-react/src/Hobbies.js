import React from "react";

function Hobbies() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
        background: "linear-gradient(to bottom, #f7f7f7, #ffffff)",
        minHeight: "100vh",
        overflow: "auto",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#2c3e50", marginTop: 20 }}>Interests</h1>

      <div className="hobby-section" style={{ textAlign: "center" }}>
        <img
          src="/images/ukulele.jpg"
          alt="Ukulele"
          style={{
            margin: "20px auto",
            width: 150,
            height: "auto",
            display: "block",
          }}
        />

        <p
          style={{
            margin: "20px auto",
            fontSize: "1.2em",
            color: "#555",
            maxWidth: "80%",
            lineHeight: 1.6,
            fontFamily: "'Courier New', Courier, monospace",
          }}
        >
          One of my favorite hobbies is playing the ukulele. The ukulele is a small,
          four-stringed instrument that originated in Hawaii. It has a soothing,
          cheerful sound that brings joy and relaxation to my day. Whether strumming
          simple chords or learning a new melody, the ukulele allows me to express
          creativity and unwind after a long day.
        </p>

        <marquee
          behavior="scroll"
          direction="left"
          style={{
            backgroundColor: "peachpuff",
            color: "brown",
            padding: "10px 0",
            fontSize: "1.2em",
            fontWeight: "bold",
          }}
        >
          If everyone played the ukulele, the world would be a better place.
        </marquee>
      </div>
    </div>
  );
}

export default Hobbies;
