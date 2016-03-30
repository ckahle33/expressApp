var express = require('express');
var app = express();

var fs = require('fs');
var _ = require('lodash');
var users = [];

fs.readFile('users.json', {encoding: 'utf8'}, function(err){
  if (err) throw err

  JSON.parse(data).forEach(function(user) {
    user.name.full = _.startCase(user.name.first + ' ' + user.name.last);
    users.push(user);
  })  
})

app.get('/', function(req, res){
  res.send('Hello World!');
});


var server = app.listen(3000, function(){
  console.log('Server running at http://localhost:' + server.address().port)
});