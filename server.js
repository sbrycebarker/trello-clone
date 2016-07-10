var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

var lists = [{
  name: 'personal', tasks: ['sleep', 'eat']
}, {
  name: 'school', tasks: ['homework', 'study for the test']
}, {
   name: 'work', tasks: ['get rich', 'get that promotion', 'slap the CEO in the face'] }];


   app.get('/api/data', function(req, res) {
     res.send(lists)
   })

app.post('/api/task', function(req, res) {
  console.log(req.body);
  lists[req.body.$index].tasks.push(req.body.task)
  res.send(req.body);
});




var portNum = 3000;
app.listen(portNum, function() {
  console.log('hello from port: ', portNum);
});
