const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const schoolroute = require("./Routes/schoolroute"); // 👈 add this line

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use("/api", schoolroute); // now it'll work

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
