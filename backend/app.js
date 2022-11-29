const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');


const tokkenRoutes = require("./Routes/tokkenIdroutes");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/contract", tokkenRoutes);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const port = 5000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
