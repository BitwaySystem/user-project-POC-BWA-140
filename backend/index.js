const express = require("express");
const morgan = require("morgan");
const dbMongoConnect = require("./src/configs/MongoConfig");
const cors = require("cors");
const userRoutes = require("./src/routes/UserRoute");
const app = express();
const port = 8000;

app.use(morgan("common"));
app.use(express.json());
app.use(cors());

// db config
dbMongoConnect.on("error", console.log.bind(console, "Connection error"));
dbMongoConnect.once("open", () => {
    console.log("Successfully connected to the database !!!");
});

app.use("/api/users", userRoutes);

app.listen(port, () => console.log(`Listening on port ${port}!`));
