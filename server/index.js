import express from "express";
import mongoose, { model, Schema } from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();
import md5 from "js-md5";
import Book from './models/Book.js'
import User from "./models/User.js";
import Contact from "./models/Contact.js";
const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000;


const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected")
}
connectDB();

app.get('/health', async (req, res) => {
    res.send('server is running');
})

app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    if(!name){
        return res.json({
          success: false,
          message: "name is required",
          data: null
        })
      }
    
      if(!email){
        return res.json({
          success: false,
          message: "email is required",
          data: null
        })
      }
    
      if(!password){
        return res.json({
          success: false,
          message: "password is required",
          data: null
        })
      }
    const user = new User({
        name: name,
        email: email,
        password: md5(password)
    })
    try {
        const savedMessage = await user.save();
        res.json({
            success: true,
            data: savedMessage,
            message: 'Signup successful'
        })
    }
    catch (e) {
        res.json({
            success: false,
            data: null,
            message: e.message
        })
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const encryptedPassword = md5(password);

    const user = await User.findOne({
        email: email,
        password: encryptedPassword
    }).select('-password')

    if (user) {
        res.json({
            success: true,
            data: user,
            message: 'Login successful'
        })
    }
    else {
        res.json({
            success: false,
            data: null,
            message: 'Invalid Credentials'
        })
    }
})


app.post("/books", async (req, res) => {
    const {author,title,description,cover_image,publication_year} = req.body;
    if (!title) {
        return res.json({
            success: false,
            message: "title is required",
            data: null
        })
    }

    if (!author) {
        return res.json({
            success: false,
            message: "Author is required",
            data: null
        })
    }

    if (!description) {
        return res.json({
            success: false,
            message: "Description is required",
            data: null
        })
    }
    if (!publication_year) {
        return res.json({
            success: false,
            message: "Publication_year is required",
            data: null
        })
    }
    if (!cover_image) {
        return res.json({
            success: false,
            message: "Cover_image is required",
            data: null
        })
    }
    if (!price) {
        return res.json({
            success: false,
            message: "price is required",
            data: null
        })
    }
    const newBook = await Book.create({
        "title": title,
        "author": author,
        "description": description,
        "publication_year":publication_year,
        "cover_image":cover_image,
        "price":price,
    })

    res.json({
        success: true,
        message: "Book added successfully",
        data: newBook
    })
})
app.get("/books", async (req, res) => {
    const book = await Book.find();
    res.json({
        sucess: true,
        message: "book fetched Successfully",
        data: book
    })
})
app.get("/buy/:id",async (req, res) => {
    const { id } = req.params

    const Bk = await Book.findById(id)

    res.json({
        success: Bk ? true : false,
        data: Bk || null,
        message: Bk ? "Book fetched successfully" : "Book not found"
    })
})
app.get("/contact/:id",async(req,res)=>{
    const {id} = req.params
    const contact = await User.findById(id)
    res.json({
        success: contact ? true: false,
        data:contact || null,
        message:contact? "user fetched successfully":"user not found"
    })
})
app.post("/contact",async(req,res)=>{
    const { name, email,msg } = req.body;
    if(!name){
        return res.json({
          success: false,
          message: "name is required",
          data: null
        })
      }
    
      if(!email){
        return res.json({
          success: false,
          message: "email is required",
          data: null
        })
      }
    
      if(!msg){
        return res.json({
          success: false,
          message: "message is required",
          data: null
        })
      }
    const cntct = new Contact({
        name: name,
        email: email,
        msg: msg
    })
    try {
        const savedMessage = await cntct.save();
        res.json({
            success: true,
            data: savedMessage,
            message: 'Message Send successfully'
        })
    }
    catch (e) {
        res.json({
            success: false,
            data: null,
            message: e.message
        })
    }
})
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})