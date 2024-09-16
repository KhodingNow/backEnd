const express = require('express')
const crash = express()
const mongoose = require('mongoose')
const Product = require('./models/product.models.js')

crash.use(express.json());

crash.listen(3001, () => {
    console.log('Servee is running on port 3001');
});

 crash.get('/', (req, res) => {
     res.send("Hello from Node API Server update");
 });


crash.post('/api/products', (req, res) => {
    console.log(req.body);
    res.send(req,body);
});

 mongoose.connect("mongodb+srv://mbangcolothembaletu:<f0WMqJ1xR0lR1JjA>@backenddb.mv9aqf2.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackEndDB ")
 .then(() =>{
    console.log("Connected to the DB")
})
.catch(() =>{
    console.log("Connection failed");
})


crash.listen(3001, () => {
    console.log("Server is running at port 3001");
});


console.log('index.js')
console.log('version1')
//min 39