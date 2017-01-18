 
function showAnswer() { 

     document.getElementById("answer").style.display = "block"
}
function showQuestion() { 
  document.getElementById("question").innerHTML="select at least one level (easy, medium, ...)";
   document.getElementById("answer").innerHTML = "";

  var x = getRandomQuestion();
  document.getElementById("question").innerHTML = x.category+"<br/>"+ x.number+"<br/> "+ x.question;

  document.getElementById("answer").innerHTML =  x.answer;
  document.getElementById("answer").style.display = "none"

  updateStatus();
 }

var workingQuestions;

function getRandomQuestion()
{

 var q = workingQuestions.filter(function(elem, index, array) {
        return (

          (  category.value === 'All' || category.value === elem.category )
       && (
               elem.level === "easy" && easy.checked 
        ||     elem.level === "medium" && medium.checked 
        ||     elem.level === "hard" && hard.checked 
        ||     elem.level === "bonus" && bonus.checked 
        ));
        }
)     ;
 
 var idx = getRandomInt(0,q.length);
 var a= q[idx];
 remove(a);
 return a;
}

//remove row from workingQuestions
function remove(a)
{
 var idx = workingQuestions.indexOf(a);
 workingQuestions.splice(idx,1); 
}


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getCategories(a)
{
  var n = {},r=[];
  r.push("All");
	for(var i = 0; i < a.length; i++) 
	{
		if (!n[a[i].category]) 
		{
			n[a[i].category] = true; 
			r.push(a[i].category); 
		}
	}
    return r;
}

function loadCategories()
{
var a = getCategories(questions);     
var sel = document.getElementById('category');
for(var i = 0; i < a.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = a[i];
    opt.value = a[i];
    sel.appendChild(opt);
}
}

function updateStatus()
{
  var s = document.getElementById('status');
  s.innerHTML = "total questions: "+questions.length+"  remaining questions: "+workingQuestions.length;
  s.style.font.fontsize=.1;
 // s.font-size = "12px";
}
var workingQuestions = questions.slice(0);
loadCategories();
showQuestion();
 
