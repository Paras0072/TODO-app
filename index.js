const express = require('express');

const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const Todo = require('./models/todo')
const app = express();


app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

var todoList =[]


app.get('/',function(request,response){
    // console.log(request.body);
    // response.end('<h1>Cool it is running or is it?</h1>');
    return response.render('home',{
        todo_list : todoList
    });
});

app.get('/delete-todo/',function(request,response){
    console.log(request.query);
    let task = request.query.task;

    let todoIndex = todoList.findIndex(todo =>todo.task == task);
    
    if(todoIndex != -1){
        todoList.splice(todoIndex,1)
    }

    return response.redirect('back')
});

app.post('/add_todo',function(request,response){
    // // return response.redirect('/')
    // todoList.push(request.body);
    // return response.redirect('back');
    Todo.create(request.body,(err)=>{
        if (err) response.send({
            error: "Error in creating the request"
        })
        response.send("todo Created")
        return response.redirect('back')
    });
});

app.listen(port,function(err){
    if (err){
        console.log('Error in running the server:',err);
    }
    console.log('Server is running on Port:',port)
});