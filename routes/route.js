const express=require('express');
const router=express.Router();

//added contact file
const Contact=require('../models/contacts');

//Retrieving contacts
router.get('/contacts',(req,res,next)=>{
    Contact.find(function(err,contacts){
       res.json(contacts);
   }) 
   
});

//add contacts 
router.post('/contacts',(req,res,next)=>{
    //logic to add contacts
    let newContact=new Contact({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        phone:req.body.phone
    });
    //insert new contact into database
    newContact.save((err,Contact)=>{
        if(err){
            res.json({msg: 'failed to add contact'});
        }
        else{
            console.log("result",Contact);
            // res.json({msg: 'contact added succesfully'});
            res.send(Contact);
        }
        
    })
});

//delete contacts
router.delete('/contact/:id',(req,res,next)=>{
    //logic to delete contacts
        Contact.remove({_id:req.params.id},function(err,result){
            if(err)
            {
                res=json(err);
            }
            else{
                res.json(result);
            }
        });
});


module.exports= router;