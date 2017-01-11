//console.log("Hello World");

 var fs = require('fs');
  var path = require('path');

var level =["EASY","MEDIUM","HARD","BONUS"];

var lines = readFile('data/2017 SENIOR ANATOMY.txt');
  console.log(lines.length);



 
function readFile(fileName){
var fs = require('fs');
var array = fs.readFileSync(fileName).toString().split("\n");
return array;
}