import express from "express"
import cors from "cors"
import postRoute from './routes/post.route.js'
import authRoute from './routes/auth.route.js'
import cookieParser from "cookie-parser";
import testRoute from './routes/test.route.js'
import userRoute from './routes/user.route.js'

const app =  express();

// to allow out app to send json objects 
app.use(cors({origin:'http://localhost:5173', credentials: true}))
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth" , authRoute);
app.use("/api/users"  , userRoute);
app.use("/api/posts" , postRoute);
app.use("/api/test"  , testRoute)
app.listen(8800 , ()=>{
    console.log(`Server is running on PORT: 8800!`);
})
