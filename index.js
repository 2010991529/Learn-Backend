//module

// const data = require('./operation');
// data.add(2,3);


// console.log(data);
// console.log(data.name1);
// console.log(data.name2);


//const fs = require('fs'); //file system


// fs.writeFileSync('app.txt','new data');
// const data = fs.readFileSync('app.txt');
// console.log(data.toString());



//fs.appendFileSync('app.txt',' replaced data');
//fs.unlinkSync('app.txt');


//fs.writeFileSync('secondFolder/app.txt','Adding app.txt in second folder');




// fs.writeFile('app.js','hello',(err)=>{
//     if(err){
//         return err;
//     }
//     else{
//         console.log('data done');
//     }
// });


// var giveMeAJoke = require('give-me-a-joke')
// const chalk = require('chalk')
// giveMeAJoke.getRandomDadJoke (function(joke) {
//         console.log(chalk.yellow(joke));
// });


//Server creation in Nodejs


// const http = require('http');
// const server = http.createServer((req,res)=>{
//     res.end('hello from the server');
// })
// server.listen(4000,()=>{
//     console.log("Server running on port no 4000");
// })

// From now we will use express js framework instead of nodejs server

//const express = require('express');
//const app = express();

// app.use((req,res)=>{
//     res.send('use running');
// })

// app.get('/',(req,res)=>{
//     res.send('get running');
// })

// console.log(__dirname);
// console.log(__filename);


// app.get('/about',(req,res)=>{
//     res.send('This is about page');
// })

// app.get('/contact/',(req,res)=>{
//     res.send('This is messaging page');
 // })
// app.get('/:me/hello/:you',(req,res)=>{
//     const {me,you} = req.params
//     console.log(req.params);
//     res.send(`Hello from ${me} and ${you}!!`);
// })
//jb hmme server se data read krna ho server se to get use krenge
//jb hmme server se data write krna ho server pe to post use krenge

// app.post('/postMethod',(req,res)=>{
//     res.send('hello from postMethod');
// })
//listen to the request and respond it on port number 8000

// app.get('/search',(req,res)=>{
//     console.log(req.query)
//     const {name,lastName} = req.query;
//     res.send(`Hello from ${name} ${lastName}`);
// })
//link to run req.query
//http://localhost:5000/search?name=Devanshi&lastName=garg


//To host our website:- working as a middleware
//Hosting our public folder contatining html and css file on home page
//app.use(express.static('public'));
//Hosting our public folder contatining html and css file on static page
// app.use('/static',express.static('public'));/
// app.listen(5000,()=>{
//     console.log('server running on 5000');
// })


// const express = require('express');
// const app = express();
// app.use(express.urlencoded({extended:true}));
// app.set('view engine','ejs');

// app.get('/',(req,res)=>{
//     res.render('index');
// })

// app.get('/todo',(req,res)=>{
//     const list = ['delhi','shimla', 'solan' , 'manali'];
//     res.render('todo',{list});
// })
// app.get('/random',(req,res)=>{
//     const data = Math.floor(Math.random()*100);
//     res.render('random',{data});
// })


// const express = require('express');
// const app = express();
// app.use(express.urlencoded({extended:true}));
// app.set('view engine','ejs');  


// app.get('/',(req,res)=>{
//     res.render('form')
// })

// app.get('/user',(req,res)=>{
//     res.send('data by get method')
// })

// app.post('/user',(req,res)=>{
//     console.log(req.body);
//     const {age,name} = req.body;
//     res.send(`name ${name} , age ${age}`);
//     res.send('data by post method')
// })


//👻

//Going with restful api
// REST API - Representational State Transfer Application Programming Interface

//CRUD - Create , Read , Update , Delete

//Task-1 (READ)

// const express = require('express');
// const app = express();
// app.set('view engine','ejs');

// const arr = [
//     {
//         username:'Devanshi',
//         comment:"Lives in Dabwali"
//     },
//     {
//         username:'Abhay',
//         comment:"Lives in Bilaspur"
//     },
//     {
//         username:'Prerna',
//         comment:"Lives in Dabwali"
//     },
//     {
//         username:'Riya',
//         comment:"Lives in Panipat"
//     }
// ]

// app.get('/',(req,res)=>{
//     res.send('hello')
// })

// app.get('/comment',(req,res)=>{
//     res.render('index',{arr})
// })

// const port = 4000;
// app.listen(port,()=>{
//     console.log(`server running on port number:- ${port}`);
// })

//Task-2 (CREATE)


const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');

const arr = [
    {
        id:0,
        username:'Devanshi',
        comment:"Lives in Dabwali"
    },
    {
        id:1,
        username:'Abhay',
        comment:"Lives in Bilaspur"
    },
    {
        id:2,
        username:'Prerna',
        comment:"Lives in Dabwali"
    },
    {
        id:3,
        username:'Riya',
        comment:"Lives in Panipat"
    }
]

app.get('/',(req,res)=>{
    res.send('hello')
})

app.get('/comment',(req,res)=>{
    res.render('index',{arr})
})

app.get('/comment/new',(req,res)=>{
    res.render('new')
})

app.post('/comment',(req,res)=>{
    console.log(req.body)
    arr.push(req.body)
    res.redirect('/comment')
    // res.send('data arrived 👻')
})

const port = 4000;
app.listen(port,()=>{
    console.log(`server running on port number:- ${port}`);
})