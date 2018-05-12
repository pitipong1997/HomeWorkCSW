const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


app.listen(9999);
app.use(cors()); //จะเรียกใช้ผ่านโดเมนอื่นได้
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var curriculums = [],
Id = 1 ;

app.get('/api/curriculums' , (req,res) => {
res.send(curriculums);
console.log('Get Curriculums');
});

app.post('/api/curriculums', (req,res) =>{

  var name = req.body.name;
  curriculums.push({
    id:Id++,
    name: name
  });
  res.send(curriculums);
  console.log('New Curriculums',name);
});

app.delete('/api/curriculums/:curriculum_id' , (req,res) => {
var id = req.params.curriculum_id,
show = [];

curriculums.map(curriculum =>{
if (curriculum.id != id){
show.push(curriculum);
}
} );

curriculums = show;
res.send(curriculums);
console.log('Delete Curriculums' ,id );
});