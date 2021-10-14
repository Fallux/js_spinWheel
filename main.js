console.log("testetstetst");
let elementwheelContainer = document.getElementById("wheelContainer");
let getallen = [1,2,3,4,5,6,7,8,9,10,11,12,13];

for (let i = 0; i < getallen.length; i++) {
    console.log(getallen[i]);

    let elementDiv = document.createElement("DIV");
    elementDiv.innerHTML = getallen[i]; 
    elementDiv.style.backgroundColor="red";
    elementDiv.className="radBox";
    elementDiv.style.transform= "rotate("+360/getallen.length*i+"deg)";
    if(i == 6){
        elementDiv.style.backgroundColor="green";
        elementDiv.innerHTML += " getal geselecteerd ";
        // elementDiv.style.transform= "rotate(20deg)"; aanrader als beginner maar dat kost te veel tijd en energie besteding
    }
    elementwheelContainer.appendChild(elementDiv);  
}

//knop maken
let elementButton = document.createElement("BUTTON");
elementButton.id = "knop";
elementButton.innerHTML = "klik hier";
document.body.appendChild(elementButton);
//cursor over knop
elementButton.addEventListener("mouseover", mouseOverFunction);
function mouseOverFunction() {
    elementButton.style.cursor = "pointer";
}

// score
let elementScore = document.getElementById("score");

elementButton.addEventListener("click", function onClickFunction(){
  document.body.style.backgroundColor="purple";
  elementwheelContainer.style.animationName = "rotate";
  elementScore.innerHTML = Math.floor(Math.random() * (getallen.length)+1);
});

