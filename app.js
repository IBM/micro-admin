const express = require("express")
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req,res){
  res.render("admin_login");
  console.log("admin_login");
});

app.get("/admin_login", function(req,res){
    res.render("admin_login");
    console.log("User login");
});

app.get("/admin_in", function(req,res){ 
    var Name = req.query.name;
    var Password = req.query.pass;
//console.log(Name);

if (Password =="123")
{
    const customer = [
        {id:"1", name:"Ahmed" , pass:"123"},
        {id:"2", name:"Saad" , pass:"321"},
        {id:"2", name:"Kamran" , pass:"213"}
  ]
  console.log("Successfully logged in as Customer");
  res.render("admin" , {
      customer: customer
  });
}
else{
    res.render("notfound.ejs");
}
   
});
//and comment out this line when using static port
module.exports.app = app;

// use this code section if you want to pass static port
/*app.listen(3000 , function(){
    console.log("App is running");
});*/
/*app.listen(3000 , function(){
    console.log("App is running");

});*/
