//console.log("Hello World");

 var fs = require('fs');
  var path = require('path');

var level =["EASY","MEDIUM","HARD","BONUS"];

files = fs.readdirSync('data');
for(var i=0; i<files.length; i++)
{
console.log(files[i]);
//var lines = readFile(fileName);
 // console.log(lines.length);
}


 
function readFile(fileName){
var fs = require('fs');
var array = fs.readFileSync(fileName).toString().split("\n");
return array;
}