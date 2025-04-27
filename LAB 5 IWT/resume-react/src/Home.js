import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Home() {
  const navigate = useNavigate();

  const playAudio = () => {
    document.getElementById("audio").play();
  };

  return (
    <div>
      <marquee
        behavior="scroll"
        direction="left"
        style={{
          backgroundColor: "peachpuff",
          color: "black",
          padding: "10px 0",
          fontSize: "1.2em",
          fontWeight: "bold",
        }}
      >
        Welcome to my journey as a developer!
      </marquee>

      <img
        src="/images/profile.png"
        alt="Pratiksha's Photo"
        className="profile"
        style={{
          display: "block",
          margin: "20px auto",
          width: 150,
          height: 150,
          borderRadius: "50%",
        }}
      />

      <h2
        style={{
          textAlign: "center",
          color: "#2c3e50",
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Hey! I am Pratiksha Dixit
        <img
          src="/images/speaker.jpg"
          alt="speaker icon"
          className="speaker"
          onClick={playAudio}
          style={{
            marginLeft: 10,
            cursor: "pointer",
            width: 25,
            height: 25,
          }}
        />
      </h2>

      <audio controls id="audio" style={{ display: "none" }}>
        <source src="/Audio.mp3" type="audio/mpeg" />
      </audio>

      <h3 onClick={() => navigate("/academics")}>Academics</h3>
      <h3 onClick={() => navigate("/skills")}>Skills</h3>
      <h3 onClick={() => navigate("/projects")}>Projects</h3>
      <h3 onClick={() => navigate("/hobbies")}>More about me</h3>

      <div className="connect-with-me" style={{ textAlign: "left", color: "black", marginLeft: 20, marginTop: 20, marginBottom: 20 }}>
        <h3 style={{ textAlign: "left" }}>Connect with me: </h3>
        <a href="https://www.linkedin.com/in/dpratiksha/" target="_blank" rel="noopener noreferrer">
          <img src="/images/linkedin.png" alt="linkedin_icon" style={{ width: 40, height: 40 }} />
        </a>
        <a href="https://github.com/d-pratiksha" target="_blank" rel="noopener noreferrer">
          <img src="/images/github.png" alt="github_icon" style={{ width: 40, height: 40 }} />
        </a>
      </div>

      <div className="connect-with-me" style={{ textAlign: "left", color: "black", marginLeft: 20, marginTop: 20, marginBottom: 20 }}>
    
      </div>
    </div>
  );
}

export default Home;
