const express =  require('express')
const bodyParser = require('body-parser')
const request = require('request');
const https = require('https');
const app = express();
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    console.log(__dirname)
  res.sendFile(__dirname+'/signup.html')
})

app.post("/",(req,res)=>{
    console.log(req.body);
    const fname = req.body.fname;
    const sname = req.body.sname;
    const email = req.body.email;
    console.log((req.body.email));
    const data ={
        members:[
            {
                email_address:email,
                status:"subscribed",
                merge_fields:{
                    FNAME: fname,
                    LNAME: sname
                }
            }
        ]
    };
    const jsonData = JSON.stringify(data);
    
    const url="https://us14.api.mailchimp.com/3.0/lists/32d3ffa50f"
    const options ={
        method:"POST",
        auth:"bharath:0da0a2d0d5feb5de2ff7872f74956a04-us14"


    }
    const requests = https.request(url,options,(response)=>{
        response.on("data",(data)=>{
            console.log(JSON.parse(data));
        })
    })
    requests.write(jsonData);
    requests.end();
})


app.listen(3000,(err)=>{
    if(err)
    console.log('Error while loading the site');
    else
    console.log('Successfully running .💯');
})








// mailchimp api Key
// 0da0a2d0d5feb5de2ff7872f74956a04-us14

//listid
// 32d3ffa50f