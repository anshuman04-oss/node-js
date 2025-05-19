const express = require("express");
const { router } = require("./routes/user");
const { connectToDb } = require("./connection");
const { logReqRes } = require("./middlewares/index");

const app = express();
connectToDb("mongodb://127.0.0.1:27017/node-js").then(console.log("Mongodb connected"));
userRouter = router();

// Use a middle-ware
app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));

// Use the userRouter for a request coming to /user route.
app.use("/api/user", userRouter);

app.listen(8000, () => console.log("The server is listening on port 8000"));