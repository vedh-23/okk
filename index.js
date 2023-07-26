
var n3;
var c;
function game6() {
  var n1 = Math.floor(Math.random() * 100);
  var n2 = Math.floor(Math.random() * 100);
  n3 = n1 + n2;
  var n4 = Math.floor(Math.random() * 100);

  if (n4 === n3) {
    n4 = n4 + 1;
  }

  var n5 = Math.floor(Math.random() * 100);

  if (n5 > 50) {
    document.getElementById("ok").innerHTML = n1 + " + " + n2 + " = ";
    document.getElementById("oi").innerHTML = n3;
    document.getElementById("ot").innerHTML = n4;
  } else {
    document.getElementById("ok").innerHTML = n1 + " + " + n2 + " = ";
    document.getElementById("oi").innerHTML = n4;
    document.getElementById("ot").innerHTML = n3;
  }
  
  
}


function proceedToNextQuestion() {
  game6();
  
}




function game9() {
  var x = document.getElementById("oi");
  var z = parseInt(x.textContent);

  if (z === n3) {
    
    proceedToNextQuestion();

    
    
  } else {
    
    window.location.href = "index.html";
    
    
    
  }
}

function game0() {
  var y = document.getElementById("ot");
  var kh = parseInt(y.textContent);
  

  if (kh === n3) {
    
    proceedToNextQuestion();
    
  
  } else {
    
    
    window.location.href = "index.html";
    
    
  }
}
function score()
{

  document.getElementById("h").innerHTML="Highest Score:"+ c
}


window.onload = game6;

