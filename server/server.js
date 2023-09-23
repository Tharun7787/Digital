const express=require("express")
const dotenv=require("dotenv")
const authroute=require("../server/routes/loginroute");
const connectdb = require("./mongo/connect");


dotenv.config();
const app=express();
connectdb();
const PORT=3030 || process.env.PORT



app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`);
});
app.get("/",(req,res)=>{
    res.send("<h1>hello server </h1>");
})

// Managing routes 

app.use("/auth",authroute);