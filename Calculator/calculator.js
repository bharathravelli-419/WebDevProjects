
const express = require('express');
const app = express();
// console.log(__dirname)
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/index.html')
})
app.post("/",(req,res)=>{
    console.log(req.body);
    var num1 = req.body.num1;
    var num2= req.body.num2;
    res.send(`The Calculated result after adding is : ${Number(num1)+Number(num2)}`);

})

app.listen(3000,(err)=>{
    if(err)
    console.log('Error while loading ',err);
    else
    console.log('The server is listening to port 3000');
})