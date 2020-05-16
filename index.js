const express = require('express');
let app = express();
let port = 3000;
let users = [
    {id: 1, name: 'Minh Đức'},
    {id: 2, name: 'Minh Tâm'},
    {id: 3, name: 'Kim Sương'}
];


app.set('view engine', 'pug');
app.set('views','./views');

app.get('/users/search',(req,res)=>{
    let q = req.query.q;
    let matchUsers = users.filter((user)=>{
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index',{users:matchUsers});
    
});





app.get('/',function(request, response){ // request là dữ liệu ng dùng gửi lên, response là dữ liệu trả về.
    // response.send('<h1>Hello would! </h1><a href="/users">users list</a> ');
        response.render('index',{
            name: "Minh Tâm"
        });
});

app.get('/users', (req,res)=>{
    // res.send('<h2>users list.</h2> </br><a href="/">Homepage</a> ');
    res.render('users/index',{
        users: users
        });
})

app.listen(3000,function(){
    console.log('Server listening on port ' + port);
});