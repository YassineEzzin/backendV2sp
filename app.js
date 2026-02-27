 /**
  * install express and configure
  * 
  * 
  */



import express from 'express';
import {config}  from 'dotenv';
import cors from "cors";
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import {createTables } from "./utils/createTables.js";
import { errorMiddleware } from './middlewares/errorMiddleware.js';
import authRouter from "./router/authRoutes.js"
const app = express()
config( {path: "./server/config.env"});
app.use(cors({
    origin:[process.env.FRONTEND_URL ,process.env.DASHBORD_URL  ],
    methods : ["GET", "POST","PUT","DELETE"],
    credentials: true,
})

);
app.use (cookieParser());
app.use (express.json());
app.use (express.urlencoded({extended:true}))
app.use(fileUpload( {
    tempFileDir : "./uploads",
    useTempFiles:true,
} ));

app.use("/api/v1/auth",authRouter);

createTables()
.then(()=>{
    console.log("db tables initialized ")
})
.catch((error)=>  console.error("Faimed to initialize database",error) )


app.use(errorMiddleware)

export default app;