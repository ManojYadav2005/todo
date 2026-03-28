const mongoose = require("mongoose");

// DHYAN RAHE: <password> ko hatakar apna asli password likhna hai bina < > brackets ke!
// Maine .net/ ke baad "todo-app" likh diya hai, taaki MongoDB mein is naam se database ban jaye.

mongoose.connect("mongodb+srv://manojyadav945871db:Password@cluster0.0rvysrl.mongodb.net/todo-app?appName=Cluster0")
  .then(function() {
    console.log("Manoj bhai, Database ekdum mast connect ho gaya! 🚀");
  })
  .catch(function(error) {
    console.log("Oh ho, connection mein gadbad hai:", error.message);
  });

// Schema ko clean kar diya
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

// Model banana zaroori hai taaki is schema ka use kar sako
const Todo = mongoose.model("todos", todoSchema);

// Ise export kar do taaki tumhare main index.js mein ye kaam aa sake
module.exports = {
    Todo: Todo
};