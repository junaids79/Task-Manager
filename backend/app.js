const express = require("express");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes"); // <-- path correct?

const app = express();

app.use(cors());
app.use(express.json());

// All routes
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

module.exports = app;
