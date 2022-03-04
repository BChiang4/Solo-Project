const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const sneaker = require('./models/model.js');
// require our routers
const sneakerRouter = express.Router();
const PORT = 3000;
const Controller = require('./controllers/controller.js');

mongoose.connect('mongodb+srv://Bchiang:MongoBchiang4Sc@cluster0.7x3xn.mongodb.net/SnkrDb?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology:true});
mongoose.connection.once('open',()=>{
    console.log('Connected to Database')
})
.on('error',(err)=>{
    console.log(err);
});

app.use('/sneakers', sneakerRouter);

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


sneakerRouter.get('/',Controller.findAllSneakers, (req,res)=>{
    return res.status(200).json(res.locals.sneakers);
})

// app.get('/jordans', Controller.findJordans, (req,res)=>{
//     return res.status(200).json(res.locals.jordans);
// })


// app.get('/adidas', Controller.findAdidas, (req,res)=>{
//     return res.status(200).json(res.locals.adidas);
// })

// app.get('/nike', Controller.findNike, (req,res)=>{
//     return res.status(200).json(res.locals.nike);
// })


// app.get('/converse', Controller.findConverse, (req,res)=>{
//     return res.status(200).json(res.locals.converse);
// })


sneakerRouter.get('/:brand', Controller.findByBrand, (req,res)=>{
    console.log('working');
    return res.status(200).json(res.locals.shoes);
})
// handle post request 















//unknown route handler
app.use((req,res)=>{
    res.sendStatus(404);
    console.log('unknown route handler');
})

//Global error handler
app.use((err,req,res,next)=>{
    const defaultErr = {
        log: 'Express handler caught unknown middleware error',
        status: 400,
        message: {err: 'An error occured'}
    };
    let errorObj = Object.assign({},defaultErr,err);
    return res.sendStatus(errorObj.status).json({err: errorObj.message});
})


app.listen(PORT, ()=>console.log(`Listening on PORT: ${PORT}`));