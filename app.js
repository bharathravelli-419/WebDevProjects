const express = require('express');
const bodyParser = require('body-parser')
const date = require(__dirname+'/date.js')
const workList=[];
//Declaring Global array
var newItemsList =[]

//application creation
const app = express();

//setting app view engine to ejs
app.set("view engine","ejs");

//using body-parser
app.use(bodyParser.urlencoded({extended:true}));

//setting static files in public folder
app.use(express.static('public'));

// Requests Section
app.get("/",(req,res)=>{
    
    const day = getDate();
    res.render('list',{day:day,newItemsList:newItemsList,route:"/"});
})

app.post("/",(req,res)=>{
    console.log(req.body);
    newItemsList.push(req.body.newItem);
    res.redirect("/");
})


app.get('/work',(req,res)=>{
    res.render('list',{day:'Work',newItemsList:workList,route:"/work"}); 

})
app.post('/work',(req,res)=>{
    workList.push(req.body.newItem);
    res.redirect('/work');

})







//server running code
app.listen(process.env.PORT || 3000,(err)=>{
    if(err)
    console.log('error encountered');
    else
    console.log('Success 💯💯');
})
