import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import bcrypt from "bcrypt";
import UserModel from "./Models/UserModel.js";
const app = express();
app.use(express.json());
app.use(cors());

//Database connection

const connectString ="mongodb+srv://mathal:93292957@postitcluster.zxzt6sw.mongodb.net/postITDb?retryWrites=true&w=majority&appName=PostITCluster";

mongoose.connect(connectString,);
//API Routes
app.post("/registerUser", async (req,res)=>{
try{
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const hashedpassword = await bcrypt.hash(password, 10);

  const user = new UserModel({
      name: name,
      email: email,
      password: hashedpassword,
    });
    await user.save();
    res.send({ user: user, msg: "Added." });
}catch (error){
  console.log(error);
} 
});

app.listen(3001, () => {
  console.log("You are connected");
});