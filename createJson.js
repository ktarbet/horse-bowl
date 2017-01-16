// format horse-bowl data into JSON   ktarbet  Jan 2017

var fs = require('fs');
var path = require('path');

files = fs.readdirSync('data');
 
console.log("var questions = [ ");
for(var i=0; i<files.length; i++)
 {
// console.log(files[i]);
 var lines = readFile('data/'+files[i]);
 
 linesToJSON(lines);
 }
console.log(" ];");
 

//converts array of Q/A text into json array format
function linesToJSON(lines){
//2017 SENIOR BEHAVIOR

var category = lines[0].match(/[0-9]{4}\s*SENIOR\s*(.+)/)[1];

var i=1;

  //508 	(easy)      	HIH505-1/DET293
var re =/^([0-9]+)\s*\(([a-zA-Z]+)\)\s*(.+)/

do
  {
 
   //var result = lines[i].match(/^([0-9]+)\s*\(([a-zA-Z]+)\)\s*(.+)/);
   var result =  lines[i].match(re);
   if( result == null)
    {
      i++;
      continue;
    }
   var result2 =  lines[i+1].match(/^Q:\s+(.*)/);   
   var result3 =  lines[i+2].match(/^A:\s+(.*)/);
   var opt=""; // some answers require extra lines 
   var j=i+3;
   while(j < lines.length && lines[j].trim() != "" && lines[j].trim().length >1 && lines[j].match(re) === null  )
   {
   opt+=" "+lines[j].trim();
   j++;
   }

   if(result  && result2 && result3 )
    { 
     var level = result[2];
     console.log(
      "{"
     +"\"category\":\""+category+"\"," 
     +"\"level\":\""+level+"\","
     +"\"number\":\""+ esc(result[1])+" "+esc(result[2])+" " +esc(result[3])+"\","
     +"\"question\":\""+esc(result2[1])+"\","
     +"\"answer\":\""+esc(result3[1])+esc(opt)+"\"},");
      
     i+=3;
    }
    else
    {
   i++;
    }
  } while(i <lines.length-3);

}

function esc(txt)
{
  if( txt == null)
  return null;
   return txt.split("\"").join("\\\"").trim();
   //return txt.replace("\"","\\\"");
}
 
function readFile(fileName){
var fs = require('fs');
var array = fs.readFileSync(fileName).toString().split("\r\n");
return array;
}