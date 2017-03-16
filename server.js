var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('todo-list', ['tasklist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/addnew', function(req, res) {
    db.tasklist.find(function(err, docs) {
        res.json(docs);
    });
});
app.post('/addnew', function(req, res) {
    db.tasklist.todo.insert(req.body, function(err, doc) {
        res.json(doc);
    });
});
app.put('/changetaskcolumn/:column', function(req, res) {
    console.log(req.params.column);
    console.log(req.body);
    for (var i = 0; i < req.body.length; i++) {
        console.log('111111', req.body[i].name);
        console.log("arrayTasks", req.body[i].tasks)
        db.tasklist.update({ name: req.body[i].name }, {
            $set: {
                'tasks': req.body[i].tasks
            }
        }, function(err, doc) {});
    }
});
app.put('/addnew', function(req, res) {
    console.log(req.body);
    db.tasklist.update({ name: "To Do" }, {
        $push: {
            'tasks': {
                $each: [req.body],
                $position: 0
            }
        }
    }, function(err, doc) {
        res.send(doc);
    });
});
app.delete('/addnew/:name/:nameColumn', function(req, res) {
    var deleteName = req.params.name;
    var columnName = req.params.nameColumn;
    console.log(deleteName);
    db.tasklist.update({ name: columnName }, { $pull: { tasks: { 'name': deleteName } } }, function(err, doc) {
        res.send(doc);
    });
});
app.listen(3000);
