const express = require('express');
let app = express();
let port = 3000;
app.get('/',function(request, response){ // request là dữ liệu ng dùng gửi lên, response là dữ liệu trả về.
    response.send('<h1>Hello would! </h1>');
});
app.get('/users', (req,res)=>{
    res.send('users list.');
})

app.listen(3000,function(){
    console.log('Server listening on port ' + port);
});