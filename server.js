const express = require('express');
const { response } = require('express');
const app = express();

app.get("/", function(request, response){
    //console.log(request);
    response.send('<h1>Hello World!</h1>');
});

app.get("/about", function(req, res){
    res.send('food ...');
})

app.get("/contact", function(req, res){
    res.send('lizzyg@tthk.ee');
})

app.listen(3000, function(){
    console.log("Server is running on Port 3000.");
});