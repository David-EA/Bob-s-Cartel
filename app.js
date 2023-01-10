require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 6000;

app.use(express.json({ extended: true }));

// const usersRouter = require("./routes/users.route");

// const favoriteTeamRouter = require("./routes/favoriteTeam.route");
const accountantsRouter = require("./routes/accountants.route");
const thriftsRouter = require("./routes/thrifts.route");
const insightsRouter = require("./routes/insights.route");

mongoose
  .connect(process.env.MONGOURL)
  .then(() => console.log("connected successfully"))
  .catch((err) => console.log(err));

//   app.use("/users", usersRouter);
//   app.use("/favoriteTeam", favoriteTeamRouter);
  app.use("/accountants", accountantsRouter);
  app.use("/thrifts", thriftsRouter);
  app.use("/insights", insightsRouter);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });