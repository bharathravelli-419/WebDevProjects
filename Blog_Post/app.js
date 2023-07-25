const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs');
const _ = require('lodash');
const mongoose = require('mongoose');
const app = express();




//connecting to mongoDB atlas using the connections string
const main = async()=>{
      try{
        await mongoose.connect("mongodb+srv://bharathravelli419:Vijayalakshmi@cluster1.wyjlnxu.mongodb.net/my-db?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            // useFindAndModify: false,
            useUnifiedTopology: true
          } 

        );
        console.log("Connected Successfully");
      }
      catch(err){
        console.log(err+ " error while connecting...");
      }
}

const postSchema = new mongoose.Schema({
    title:String,
    title_compressed:String,
    content:String
})

const Post = mongoose.model("Post",postSchema);



const homeStartingContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis numquam suscipit eveniet quod, sit voluptas doloribusoluptatum. Quam, quis?';
const aboutContent = 'This is the blog of Bharathravelli .I have completed my under graduation from PVP siddhartha Institute of Technology and I am currently in search of Job and I am looking for a Software development engineer role in either service or Product based IT company. I will be excited and filled with joy if you follow me on social media and this blog and support me in my work  est odit tempore inventore nesciunt repudiandae odio modi quod consequuntur ex sapiente provident. Doloribus dolorem, odio dolore enim asperiores maiores ratione velit reiciendis officiis fugit amet voluptas expedita tempora recusandae debitis deserunt rerum eos sunt laborum? Provident eveniet, porro, cupiditate aspernatur doloribus vero similique quas ab voluptate, laudantium ad modi! Vel, ducimus eveniet! Quis nobis sapiente ex? Sequi, ducimus laborum! Assumenda adipisci laborum unde accusamus magni at vero eos asperiores nostrum qui dignissimos porro officiis dolore saepe quod ab voluptatibus excepturi et suscipit incidunt ex, praesentium odit. Placeat ducimus iure vitae harum, sequi ullam. Sunt quaerat veniam cum provident aperiam, neque reiciendis veritatis voluptates, ducimus, quae repellendus sapiente est rem dignissimos minima praesentium eveniet obcaecati incidunt enim. Tenetur molestias repellat magnam possimus praesentium dolor nam, aspernatur, modi quod cupiditate voluptatum. Quam, quis?';
const ContactUs = 'You can follow me on social media and message me there/ Or else you can post a query here for that go the section specified by me. Follow me on Instagram , facebook, twitter, telegram and LinkedIN and also on github.'
var heading='Home';
var StartingContent = homeStartingContent;

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'))

app.set('view engine','ejs');

app.get("/",async (req,res)=>{

    const recordsInDB = await Post.find({});
    
    res.render('home',{StartingContent:homeStartingContent,posts:recordsInDB});
 

})


app.get('/about',(req,res)=>{
  
    res.render('about',{aboutContent:aboutContent});
})
app.get('/contact',(req,res)=>{
    
  res.render('contact',{contactContent:ContactUs});
})

app.get('/compose',(req,res)=>{
    res.render('compose');
})
app.post('/compose',async (req,res)=>{

   const newPost = new Post({
     title: req.body.postTitle,
     title_compressed: _.camelCase(req.body.postTitle),
     content: req.body.postBody
   })
   await newPost.save();
   res.redirect('/');

})


app.get('/posts/:str', async (req, res) => {
    var str2 = (req.params.str);

   try{
    const record = await Post.findOne({title_compressed:str2}).exec();
    // console.log(record,typeof(record));
    
     res.render('postsPage',{postHeading:record.title,postPara:record.content});
   }
   catch(err){
    res.redirect("/");
   }

});

app.listen(process.env.PORT || 3000,(err)=>{
    if(err)
    console.log(err,'This is the error');
    else
    console.log('server running successfully');
})

main();



