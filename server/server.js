const express =require ('express');
const app = express();
const apiRouter =require('./router')
const cors=require('cors');


app.use(express.json());
app.use(cors());
app.use('/api/get',apiRouter);


app.listen('3002' ,()=> {
    console.log('server run up')

});