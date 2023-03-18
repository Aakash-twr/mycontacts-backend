const express = require("express");
const { errorHandler } = require("./middleware/errorHandler");
const dotenv = require('dotenv').config();

require("./db/connection");
const app = express();

port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});