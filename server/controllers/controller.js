const Sneakers = require('../models/model.js');
const SneakerController = {};

SneakerController.findAllSneakers = (req,res,next)=>{
    Sneakers.find({},(err,result)=>{
        if(err){
        console.log('error');
        }
        console.log(result);
        res.locals.sneakers = result;
        return next();
    })
}


SneakerController.findJordans = (req,res,next)=>{
    Sneakers.find({brand:'Jordan'},(err,result)=>{
        if(err){
        console.log('error');
        }
        res.locals.jordans = result;
        return next();
    })
}
SneakerController.findAdidas = (req,res,next)=>{
    Sneakers.find({brand:'adidas'},(err,result)=>{
        if(err){
        console.log('error');
        }
        res.locals.adidas = result;
        return next();
    })
}
SneakerController.findNike = (req,res,next)=>{
    Sneakers.find({brand:'Nike'},(err,result)=>{
        if(err){
        console.log('error');
        }
        res.locals.nike = result;
        return next();
    })
}
SneakerController.findConverse = (req,res,next)=>{
    Sneakers.find({brand:'Converse'},(err,result)=>{
        if(err){
        console.log('error');
        }
        console.log(result);
        res.locals.converse = result;
        return next();
    })
}




module.exports = SneakerController;

