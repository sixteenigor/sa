var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('users', ['users']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
var idCounter = 0;
var mainJson = {};
let lastVersion;

app.get('/getall', function(req, res) {
    
    db.users.find(function(err,docs) {
       
    var mainJson = docs;

    
        res.json(docs);

    }); 
    

});


console.log("new1");

app.post('/login', function(req, res) {
	var loginObj = req.body;


    db.users.find(function(err,docs) {
		
	    var mainJson = docs[0];	
        console.log(loginObj);
        console.log(mainJson);
        var respond = "";
        if(mainJson.email == loginObj.email && mainJson.password == loginObj.password) {
            respond = "All right, you are entered in your room";
        } else {
            respond = "Sorry but your email or password are incorrect";
          };

		res.json(respond);
 
	});	
	

});


app.post('/postall', function(req, res){
	var postObj = req.body;
    //var lastObj = true;
    var idCounter =0;


	postObj.id = idCounter;
    var date = new Date();
    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    postObj.dateOfCreation = date.toLocaleString("en-US", options);  
    

     var resp = {};
     resp.log = "";

     var valid = false;
    if(valid != false) {
        console.log("post success");

        db.users.insert(postObj, function(err, docs){
                   
        });            
    } else {
        console.log(postObj);
    };    


	
}); // END OF POST REQUEST



app.delete('/delete/:id', function (req, res) {
        //console.log(req.params.id);
        var id = req.params.id;
        db.users.remove({_id: mongojs.ObjectId(id)}, function(err, docs) {

        });
});

app.listen(3000);

console.log("Server is up");
