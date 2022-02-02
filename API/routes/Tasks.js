const express = require('express');
const router = express.Router()

const Todo = require ('../models/Todo')

router.post('/new',async(req,res)=>{
    const {text,complete,timestamp} = req.body //body of the request
    try {
        if (!text || !complete || !timestamp){
            return res.status(404).send({msg : "Please check your task"})
        }
        const todo = await Todo.findOne({text})
        if (!text){
            return res.status(400).send({msg: "Bad task"})
        }
    }
    catch (error){
        console.log(error)
    }
})
router.get("/todos",async (req,res)=>{
    try {
        return res.status(200).send({todo: req.todo})
    } catch(error){
        return res.status(500).send({msg:"server error"})
    }
})
router.put("/update/:id",async (req,res)=>{
    const{id}= req.params
    const {text,complete,timestamp}=req.body
    Todo.findOneAndUpdate({id},{$set :{text,complete,timestamp}},{new: true})
    .then((result)=> res.status(200).send(result))
    .catch((error)=> res.status(500).send(error))
})
router.delete ("/delete/:id",async (req,res) =>{
    Todo.findOneAndDelete({Id})
})
module.exports = router;