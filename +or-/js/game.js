$choise = document.getElementById("choise");
$button = document.getElementById("button");
$result = document.getElementById("result");
reponce = Math.ceil(Math.random()*100); 

function verifier() {
    if ($choise.value < reponce) {
        alert ("greater") ;
    }
    if ($choise.value == reponce) {
        alert ("Congratulation, the numbers is: " + reponce) ;
    }
    if ($choise.value > reponce) {
        alert ("lower") ;
    }
}

$button.onclick = verifier;