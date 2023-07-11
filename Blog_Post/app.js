const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs');
const _ = require('lodash');
const app = express();
var posts=[];


const homeStartingContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis numquam suscipit eveniet quod, sit voluptas doloribusoluptatum. Quam, quis?';
const aboutContent = 'This is the blog of Bharathravelli .I have completed my under graduation from PVP siddhartha Institute of Technology and I am currently in search of Job and I am looking for a Software development engineer role in either service or Product based IT company. I will be excited and filled with joy if you follow me on social media and this blog and support me in my work  est odit tempore inventore nesciunt repudiandae odio modi quod consequuntur ex sapiente provident. Doloribus dolorem, odio dolore enim asperiores maiores ratione velit reiciendis officiis fugit amet voluptas expedita tempora recusandae debitis deserunt rerum eos sunt laborum? Provident eveniet, porro, cupiditate aspernatur doloribus vero similique quas ab voluptate, laudantium ad modi! Vel, ducimus eveniet! Quis nobis sapiente ex? Sequi, ducimus laborum! Assumenda adipisci laborum unde accusamus magni at vero eos asperiores nostrum qui dignissimos porro officiis dolore saepe quod ab voluptatibus excepturi et suscipit incidunt ex, praesentium odit. Placeat ducimus iure vitae harum, sequi ullam. Sunt quaerat veniam cum provident aperiam, neque reiciendis veritatis voluptates, ducimus, quae repellendus sapiente est rem dignissimos minima praesentium eveniet obcaecati incidunt enim. Tenetur molestias repellat magnam possimus praesentium dolor nam, aspernatur, modi quod cupiditate voluptatum. Quam, quis?';
const ContactUs = 'You can follow me on social media and message me there/ Or else you can post a query here for that go the section specified by me. Follow me on Instagram , facebook, twitter, telegram and LinkedIN and also on github.'
var heading='Home';
var StartingContent = homeStartingContent;

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'))

app.set('view engine','ejs');

app.get("/",(req,res)=>{
    
    res.render('home',{StartingContent:homeStartingContent,posts:posts});
    // res.render('home',{StartingContent:StartingContent,heading:heading});

})

// app.get('/home',(req,res)=>{
//     // heading ='Home';
//     // StartingContent = homeStartingContent;
//     // res.redirect('/');
//     res.render('')
// })
app.get('/about',(req,res)=>{
    // StartingContent= aboutContent;
    // heading='About'
    // res.redirect('/');
    res.render('about',{aboutContent:aboutContent});
})
app.get('/contact',(req,res)=>{
    // StartingContent= ContactUs;
    // heading= 'Contact Us';
    // res.redirect('/');
  res.render('contact',{contactContent:ContactUs});
})

app.get('/compose',(req,res)=>{
    res.render('compose');
})
app.post('/compose',(req,res)=>{
   // console.log(req.body.posting);

    const postObject ={
        postTitle: req.body.postTitle,
        postBody :req.body.postBody
    }
   posts.push(postObject);
   console.log(posts);
   res.redirect('/');

})
// app.get('/posts/:str',(req,res)=>{
//     //console.log(req.params.str);
//     for(var i =0;i<posts.length;i++){
//         var str1 = _.camelCase(posts[i].postTitle);
//         var str2 = _.camelCase( req.params.str);
//         if(str1 === str2)
//         {
//            var flag = true;
//            res.render('postsPage',{
//             postHeading: posts[i].postTitle,
//             postPara: posts[i].postBody
//         })

//         }
//     }
//     if(flag == false)
//     res.redirect('/');
    
// })

app.get('/posts/:str', (req, res) => {
    var str2 = _.camelCase(req.params.str);
    var post = posts.find((post) => {
        var str1 = _.camelCase(post.postTitle);
        return str1 === str2;
    });

    if (post) {
        res.render('postsPage', {
            postHeading: post.postTitle,
            postPara: post.postBody
        });
    } else {
        // Handle case when no matching post is found
        res.send('Post not found');
    }
});

app.listen(process.env.PORT || 3000,(err)=>{
    if(err)
    console.log(err,'This is the error');
    else
    console.log('server running successfully');
})