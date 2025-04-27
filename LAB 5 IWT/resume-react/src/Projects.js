import React from "react";

function Projects() {
  return (
    <div
      style={{
        background: "#f7f7f7",
        margin: 0,
        padding: 20,
        minHeight: "100vh",
      }}
    >
      <h1>My Projects</h1>
      <div
        className="projects-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
          marginTop: 20,
        }}
      >
        {/* Project 1 */}
        <div
          className="project-card"
          style={{
            background: "white",
            borderRadius: 10,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: 20,
            transition: "transform 0.3s ease",
          }}
        >
          <div
            className="project-header"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <h2 className="project-title" style={{ fontSize: "1.2rem", fontWeight: "bold", margin: 0 }}>
              Trustify
            </h2>
            <a
              href="https://github.com/d-pratiksha/Neo_Mart"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img src="/images/github.png" alt="GitHub Icon" style={{ width: 24, height: 24 }} />
            </a>
          </div>
          <p className="project-tech" style={{ fontStyle: "italic", color: "#555", marginBottom: 10 }}>
            Tech stack used: TailwindCSS, JavaScript, React, Shadcn, Node.js, Neo4j
          </p>
          <ul className="project-description" style={{ margin: 0, paddingLeft: 20, listStyle: "square" }}>
            <li>A trust metrics-based platform to buy and sell goods among your contacts.</li>
            <li>Upload your products, get verification from your contacts, and make reliable purchases.</li>
          </ul>
        </div>

        {/* Project 2 */}
        <div
          className="project-card"
          style={{
            background: "white",
            borderRadius: 10,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: 20,
            transition: "transform 0.3s ease",
          }}
        >
          <div
            className="project-header"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <h2 className="project-title" style={{ fontSize: "1.2rem", fontWeight: "bold", margin: 0 }}>
              Bookworms
            </h2>
            <a
              href="https://github.com/d-pratiksha/Neo_Mart"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img src="/images/github.png" alt="GitHub Icon" style={{ width: 24, height: 24 }} />
            </a>
          </div>
          <p className="project-tech" style={{ fontStyle: "italic", color: "#555", marginBottom: 10 }}>
            Tech stack used: React, Express.js, Shadcn/UI, Bcrypt
          </p>
          <ul className="project-description" style={{ margin: 0, paddingLeft: 20, listStyle: "square" }}>
            <li>A platform to exchange books with other users in your area.</li>
            <li>Search for books by ISBN, view book conditions, and securely manage transactions.</li>
          </ul>
        </div>

        {/* Project 3 */}
        <div
          className="project-card"
          style={{
            background: "white",
            borderRadius: 10,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: 20,
            transition: "transform 0.3s ease",
          }}
        >
          <div
            className="project-header"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <h2 className="project-title" style={{ fontSize: "1.2rem", fontWeight: "bold", margin: 0 }}>
              FileConvertify
            </h2>
            <a
              href="https://github.com/d-pratiksha/Neo_Mart"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img src="/images/github.png" alt="GitHub Icon" style={{ width: 24, height: 24 }} />
            </a>
          </div>
          <p className="project-tech" style={{ fontStyle: "italic", color: "#555", marginBottom: 10 }}>
            Tech stack used: HTML, CSS, JavaScript
          </p>
          <ul className="project-description" style={{ margin: 0, paddingLeft: 20, listStyle: "square" }}>
            <li>A privacy-focused platform for converting file types (images, documents, audio).</li>
            <li>Runs entirely on the client side, ensuring no data is logged or stored.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
