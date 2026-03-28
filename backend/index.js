const express = require("express");
const { createTodo, updateTodo } = require("./type");
const { Todo } = require("./db"); 
const cors=require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// add todos
app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    
    if(!parsePayload.success) {
        res.status(411).json({
            msg: "You sent wrong input"
        });
        return;
    }  

    await Todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });

    res.json({
        msg: "Todo created"
    });
});

// get the data,show 
app.get("/todos", async function(req, res) {
    const todos = await Todo.find({});
    
    res.json({
        todos
    });
});

// update the data
app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        });
        return;
    }
    
    await Todo.update({
        _id: req.body.id
    }, {
        completed: true
    });
    
    res.json({
        msg: "Todo marked as completed"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000 🚀");
  });