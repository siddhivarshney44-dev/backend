require('dotenv').config()
const express = require('express');
const app = express();//app is an instance of the express application so it has all functionality of express


const port = 3000;// can change the port number to any other number if needed

app.get('/', (req, res) => {
  res.send('Hello World!');

}) ; //get request to the root URL ("/") and sends a response with the text "Hello World!"
console.log("Twitter route loaded");
app.get('/twitter',(req,res)=>{
    res.send("siddhivarshney");
})
app.get("/login",(req,res)=>{
    res.send("<html><body><h1>Login Page</h1></body></html>")
})
app.get("/chai",(req,res)=>{
    res.send("<html><body><h1>Chai Page</h1></body></html>")
})
app.get("/youtube",(req,res)=>{
    res.send("<html><body><h1>YouTube Page</h1></body></html>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});