// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// require('dotenv').config()

// const port = 3000;

// app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// const productSchema = new mongoose.Schema({
//   title: String,
//   image: String,
//   description: String,
//   price: Number,
// });

// const productModel = mongoose.model("Product", productSchema);

// app.get("/api/product", async (req, res) => {
//   const response = await productModel.find();
//   res.send(response);
// });

// app.get("/api/product/:id", async (req, res) => {
//   const { id } = req.params;
//   const target = await productModel.findById(id);
//   res.send(target);
// });

// app.post("/api/product", async (req, res) => {
// const {title,description,image,price}= req.body;
// const newproductModel = new productModel({title,description,image,price});
// await newproductModel.save();
// res.send("Crated data ")

// });

// app.put("/api/product/:id", async (req, res) => {
//   const { id } = req.params;
//   const { title, description, price, image } = req.body;
//   await productModel.findByIdAndUpdate(id, { ...req.body });
//   res.send("item update");
// });

// app.delete("/api/product/:id", async (req, res) => {
//   const { id } = req.params;
//   await productModel.findByIdandDelete(id);
//   res.send("item deleted");
// });

// mongoose
//   .connect(process.env.CONNECTION__STRING)
//   .then((res) => {
//     console.log("db conncetedd");
//   })
//   .catch((err) => {
//     console.log("db don`t connected");
//   });

// app.listen(process.env.PORT, (req, res) => {
//   console.log(`api running on  ${process.env.PORT}`);
// });

import express, { json } from "express";
import { Schema, model, connect } from 'mongoose';
import cors from "cors"
const app = express();

app.use(json())
app.use(cors())

const port = 8080;

const productSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    image:String,
    price:Number,
    description:String
 
  });
  const productModel = model('Product', productSchema);


app.get("/product",async (req, res) => {
  const products = await productModel.find();
  res.send(products)
});

app.post("/product", async(req, res) => {
    const{title,image, price,description} = req.body;
    const newProductModel = new productModel({title,image, price,description});
    await newProductModel.save();
    res.send("Elave olar inshAllah")
  });
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



// app.put("/api/product/:id", async (req, res) => {
//   const { id } = req.params;
//   const { title, description, price, image } = req.body;
//   await productModel.findByIdAndUpdate(id, { ...req.body });
//   res.send("item update");
// });

// app.delete("/api/product/:id", async (req, res) => {
//   const { id } = req.params;
//   await productModel.findByIdandDelete(id);
//   res.send("item deleted");
// });



app.put("/product", (req, res) => {
  res.send("Got a PUT request at /user");
});

app.delete("/product", (req, res) => {
  res.send("Got a DELETE request at /user");
});

connect('mongodb+srv://AyselMammadova:salam123@cluster0.dzqo4bs.mongodb.net/')
  .then(() => console.log('Connected!'));