const express = require('express');
const app = express();
const port = 3000;
var cookieParser = require('cookie-parser')

app.use(cookieParser("signed"))
// app.get("/greet", (req, res) => {
//     // Set a cookie named "sandeep" with value "abbc"
//     res.cookie("sandeep", "abbc").send("Cookie set!"); // Send the response with the cookie
// });


app.get('/', function (req, res) {
    res.cookie("color", "pink", {signed:true}).send("Cookie set!"); 
  })
app.get("/verify",(req,res)=>{
    console.log(req.signedCookies)
    res.send("Cookie veri!"); 
})
app.listen(port, () => {
    console.log(`Express is listening on port ${port}`);
  });