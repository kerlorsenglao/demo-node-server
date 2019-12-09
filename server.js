var express = require('express');
var app = express();
var port = 8000;

app.set('view engine','pug');
app.set('views','./views');

app.get('/', function(req,res){
   res.render('index');
});

var users = [
		{id: 1, name: 'Kerlor'},
		{id: 2, name: 'ViengChang'}
		]
app.get ('/users',function(req,res){
	res.render('users/index',{
		users
	});
});

app.get('/users/search',function(req,res){
	var q= req.query.q;
	var matchedUsers = users.filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	res.render('users/index',{
		users : matchedUsers
	});
});


app.listen(port, function(){
   console.log('Server listening on port'+port);
});