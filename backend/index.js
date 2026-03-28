const express = require("express");
const { createTodo } = require("./type");
const app = express();

app.use(express.json());

app.post("/todo", function(req, res) {
const createPayload=req.body;
const parsePayload=createTodo.safeParse(createPayload);
if(!parsePayload.sucees){
    res.status(411).json({
        msg:"You sent wrong input",
    })
    return;
}

})

app.get("/todos", function(req, res) {

})

app.put("/completed", function(req, res) {

    const createPayload=req.body;
    const parsePayload=createTodo.safeParse(createPayload);
    if(!parsePayload.sucees){
        res.status(411).json({
            msg:"You sent wrong input",
        })
        return;
    }

}) 