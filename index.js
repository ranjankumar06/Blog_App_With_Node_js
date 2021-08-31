const express=require('express');
const app=express()
app.use(express.json())

app.use('/sig',require('./router/signup'))
app.use('/log',require('./router/login'))
app.use('/lke',require('./router/like_dislike'))
app.use('/post',require('./router/post'))


app.listen(4001,()=>{
    console.log('server start');
});




