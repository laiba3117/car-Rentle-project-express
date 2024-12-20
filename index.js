const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./config/db.config");
require("dotenv").config();
const cors = require("cors")

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// let corsOptions = {
//   origin : ['http://localhost:5500'],
// } 
// app.use(cors(corsOptions))

app.use(cors({origin:'*'}))
// Routes
app.use("/auth", require("./routes/auth.route")); 
app.use("/user", require("./routes/user.route"));
app.use("/carDetail", require("./routes/detail.route"));
app.use("/bills", require("./routes/billing.route"));
app.use("/Driver", require("./routes/driver.route"));
app.use("/fvrtCar", require("./routes/favouriteCar.route"));
app.use("/carHistory",require("./routes/history.route"));
app.use("/document",require("./routes/carDocumentation.route"))



// DB Connection
connectDB().then(() => {
  const port = process.env.PORT || 3008;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`); 
  });
}).catch(error => {
  console.error('DB connection failed', error);
  process.exit(1);
});
