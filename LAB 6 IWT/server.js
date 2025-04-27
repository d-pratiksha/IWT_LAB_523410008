const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const PORT = 8000;

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: true, 
    credentials: true
  })
);


app.get("/", (req, res) => {
  console.log("GET / - Setting cookies");
  res.cookie("userId", "1234", {
    maxAge: 7 * 24 * 60 * 60 * 1000, 
    httpOnly: true,
    secure: false, 
    sameSite: "Lax"
  });
  res.cookie("sessionId", "1", {
    httpOnly: true,
    secure: false, 
    sameSite: "Lax"
  });
  res.json({ message: "Welcome to the Cookie API!" });
});

app.post("/check-mobile", (req, res) => {
  const { mobileNumber } = req.body;
  const mobile = mobileNumber.trim();

  console.log("POST /check-mobile", { cookies: req.cookies, mobile });

  if (!req.cookies.userId) {
    return res.status(401).json({ message: "Unauthorized! No userId cookie." });
  }

  const mobileRegex = /^[0-9]{10}$/;
  if (!mobileRegex.test(mobile)) {
    return res.status(400).json({ message: "Mobile number is invalid!" });
  }

  res.json({ message: "Mobile number is valid!" });
});

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
