//console.log("Hello World");

 var fs = require('fs');
  var path = require('path');

var level =["EASY","MEDIUM","HARD","BONUS"];

files = fs.readdirSync('data');
for(var i=0; i<files.length; i++)
{
console.log(files[i]);
var lines = readFile('data/'+files[i]);
console.log(lines.length);
linesToJSON(lines);

}



//converts array of Q/A text into json array format
function linesToJSON(lines){
var i=0;
do
  {
//508 	(easy)      	HIH505-1/DET293
   var re1 = /^([0-9]+)\s*\(([a-zA-Z]+)\)\s+([\w-]*)/
//   var reQ = /^Q:\s+(.*)$/
   var result = lines[i].match(re1);
//    console.log(lines[i]);
 
   if(result != null  )
    { 
      let question = {};
      question.level = result[2];
      question.id = result[1];
      question.code = result[3];

      

      console.log(JSON.stringify(question));
    

     i+=3;
    }
   i++;
    
  } while(i <lines.length);

}

 
function readFile(fileName){
var fs = require('fs');
var array = fs.readFileSync(fileName).toString().split("\n");
return array;
}