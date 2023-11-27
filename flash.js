const express = require('express');
const app = express();
const port = 3000;
const cookieParser = require('cookie-parser')
const session = require('express-session')
var flash = require('connect-flash');
app.set('view engine', 'ejs');
const path = require('path');
const exp = require('constants');
app.set('views', path.join(__dirname, 'views'));
app.use(session({
    secret: 'keyboard cat',
    resave:false,
    saveUninitialized:true
  }))
app.use(flash());
  
app.get("/test",(req,res)=>{
    let {name="ananymous"} =req.query;
    req.session.name=name;
    req.flash('success', ' user registed successfully!')
   res.redirect("/hi")


    })
app.get("/hi",(req,res)=>{
    res.locals.messages=req.flash("success")
    res.render("page.ejs",{name:req.session.name});
})

app.listen(port, () => {
    console.log(`Express is listening on port ${port}`);
  });

  