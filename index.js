const express = require("express");
const req = require("express/lib/request");
const app = express();

app.use(logger);

app.get("/books", function(req , res){
    res.send("Rich dad poor dad")
});
// app.listen(3000 ,()=>{
//     console.log("3000 listen")
// });


app.get("/libraries", function(req , res){
    res.send("abs")
});
// app.listen(4000 ,()=>{
//     console.log("4000 listen")
// });


app.get("/authors", function(req , res){
    res.send("123")
});





function logger(req , res,next ){
    if(req.path === "/books"){
        req.role = "books"

    }
    else if(req.path == "/libraries"){
        req.role ="libraries"
    }
    else if(req.path == "/authors"){
        req.role ="authors"
    }
    else{
        req.role ="not at"
    }
    // console.log("yes i am done")
    next();
    

}
app.listen(9000 ,()=>{
    console.log(" i am coming")
})



app.use(checkPermission);
function checkPermission(req , res ,next){
    if(req.path ==="/libraries"){
        req.role = "libraries:true"
    }
    else if(req.path == "/authors"){
        req.role = "authors:true"
    }
    else{
        req.role ="not at"
    }
        next();
}
app.listen(4500 , ()=>{
    console.log("checkPermission is here")
});
