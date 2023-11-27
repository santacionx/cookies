const express = require('express');
const app = express();
const port = 3000;
const cookieParser = require('cookie-parser')
const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave:false,
    saveUninitialized:true
  }))
    
app.get("/test",(req,res)=>{
    // if(req.session.count){
    //     req.session.count++;
    // }else{
    //     req.session.count=1;
    // }
    //  res.send(`${req.session.count}`); 
    console.log(req.session)
    let {name="ananymous"} =req.query;
    req.session.name=name;
    res.send(req.session.name);


    })
app.get("/hi",(req,res)=>{
    res.send(`hi ${req.session.name}`)
})
app.listen(port, () => {
    console.log(`Express is listening on port ${port}`);
  });

  