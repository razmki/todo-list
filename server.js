var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('todo-list', ['tasklist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/addnew', function(req, res) {
    db.tasklist.find(function (err, docs) {
        res.json(docs); 
    });
});
app.post('/addnew', function (req, res) {
    db.tasklist.todo.insert(req.body, function(err, doc) {
        res.json(doc);
    });
});
app.put('/addnew', function(req, res) {
	console.log(req.body);
	db.tasklist.update({name : "To Do"}, {$push: {'tasks': req.body}}, function (err, doc) {
			res.send(doc);
	});
		// db.tasklist.update({name : "In Progress"}, {$set: {'In Progress.-1': 'name': 'inprogresstest', 'description': '123123123', 'important': true}})
});
app.delete('/addnew/:name/:nameColumn', function(req, res) {
        var deleteName = req.params.name;
        var columnName = req.params.nameColumn;
        console.log(deleteName);
        db.tasklist.update({name : columnName}, {$pull: {tasks: {'name': deleteName}}}, function (err, doc) {
            res.send(doc);
        });
        });
app.listen(3000);
// app.delete('/contactlist/:id', function(req, res) {
// 	var id = req.params.id;
// 	console.log(id);
// 	db.contactlist.remove({ _id: mongojs.ObjectId(id)}, function(err, doc) {
// 		res.json(doc);
// 	});
// });

// app.get('/contactlist/:id', function(req, res) {
//     db.contactlist.findOne({ _id : mongojs.ObjectId(req.params.id)}, function (err, doc) {
//         res.json(doc);
//     });
// });

// app.put('/contactlist/:id', function(req, res) {
// 	var id = req.params.id;
// 	console.log(req.body.name);
// 	db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
// 		update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
// 		new: true},
// 		function (err, doc) {
// 			res.json(doc);
// 		});

// })
// app.listen(3000);
