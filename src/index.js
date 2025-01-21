const express = require("express");
var cors = require('cors')
const connect  =  require("../src/connection/connection.js")



const studentController = require("../src/crud/user_controller")
const  {register,login} = require("../src/crud/auth_User_controller.js")

const app = express();
app.use(cors({ origin:"*"}))
app.use(express.json());

app.use("/student", studentController);
app.post("/register",register)
app.post("/login" ,login)



const PORT=process.env.PORT || 2345

app.listen(PORT, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2345");
});
