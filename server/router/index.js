const express =require('express');
const router =express.Router();
const db=require('../db');

router.get ("/post/all",async(req,res,next)=>{
    try{
        let result= await db.postall();
res.json(result);
    }catch (e) {
        console.log(e);
        res.sendStatus(500);


    }

});
router.post ('/post/insert',async(req,res,next)=>{
    
    try{
        let result= await db.postinsert(req.body.depar,req.body.postitl,req.body.date,req.body.catid);
res.json(result);

    }catch (e) {
        console.log(e);
        res.sendStatus(500);


    }

});
router.put ('/post/updat',async(req,res,next)=>{ 
    try{
        let result= await db.postput(req.body.depar,req.body.postitl,req.body.date,req.body.catid,req.body.id);
res.json(result);

    }catch (e) {
        console.log(e);
        res.sendStatus(500);


    }

});
router.delete ('/post/del',async(req,res,next)=>{
    try{
        let result= await db.postdelete(req.body.id);
res.json(result);

    }catch (e) {
        console.log(e);
        res.sendStatus(500);


    }

});


module.exports=router;