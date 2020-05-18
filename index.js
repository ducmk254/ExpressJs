const express = require('express');
const bodyParser  = require('body-parser');

let app = express();
let port = 3000;
let users = [
    {id: 1, name: 'Minh Đức'},
    {id: 2, name: 'Minh Tâm'},
    {id: 3, name: 'Kim Sương'}
];


app.set('view engine', 'pug');
app.set('views','./views');


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


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

app.get('/users/create',(req,res)=>{
    res.render('users/create');
});
app.post('/users/create',(req,res)=>{
    users.push(req.body);
    res.redirect('/users');
});


app.listen(3000,function(){
    console.log('Server listening on port ' + port);
});


// Nhận dữ liệu từ phương thức GET: dùng req.params
app.get('/tintuc/:id',(req,res)=>{ // khai bao bien dai dien :ten_bien_trong_method_get
    let id = req.params.id; // req.params.ten_bien_trong_method_get
    res.send('Server đã nhận được request có id = ' + id);
});



//Nhận dữ liệu từ phương thức POST : dùng body-parser:

app.post('tintuc',(req,res)=>{
    let u = req.body.u;
    let p = req.body.p;
    res.send('Username: ' + u + ' Password: '+p);
});