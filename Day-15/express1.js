var express=require('express');
var app=express();
app.get('/triveni',function(req,res){
	res.send("Welcome to express js world tested by balaji");
});
app.listen(3000);