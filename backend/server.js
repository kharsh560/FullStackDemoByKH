import express from "express";
import cors from "cors";
// import dotenv from "dotenv";
const app = express();

// Load environment variables from .env file
// dotenv.config();
// Not Using this as it gives error in the connection. Because, We need to give the requestURL to
// the XMLHttpsRequest wherein its very important to have access of "port"
// Here:- const requestURL = "http://localhost:2345/jokes";

const port = process.env.PORT || 2345;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is ready!");
});

app.get("/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      setup: "Why don't scientists trust atoms?",
      punchline: "Because they make up everything!",
    },
    {
      id: 2,
      setup: "I told my wife she was drawing her eyebrows too high.",
      punchline: "She looked surprised.",
    },
    {
      id: 3,
      setup: "Why did the scarecrow win an award?",
      punchline: "Because he was outstanding in his field!",
    },
    {
      id: 4,
      setup: "I only know 25 letters of the alphabet.",
      punchline: "I don't know y.",
    },
    {
      id: 5,
      setup: "How does a penguin build its house?",
      punchline: "Igloos it together!",
    },
  ];
  res.send(jokes);
});

app.listen(port, (req, res) => {
  console.log(`server is running successfully at ${port}`);
});
