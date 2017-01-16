 
function showAnswer() { 

     document.getElementById("answer").style.display = "block"
}
function showQuestion() { 
  document.getElementById("question").innerHTML="select at least one level (easy, medium, ...)";
   document.getElementById("answer").innerHTML = "";

  var x = jsonGetRandom();
  document.getElementById("question").innerHTML = x.category+"<br/>"+ x.number+"<br/> "+ x.question;

  document.getElementById("answer").innerHTML =  x.answer;
  document.getElementById("answer").style.display = "none"
 }

function jsonGetRandom()
{
 
 var u = questions.filter(function(elem, index, array) {
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
 
 return u[getRandomInt(0,u.length)];
 
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

loadCategories();
showQuestion();
 
