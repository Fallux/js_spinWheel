console.log("testetstetst");
let elemenwheelContainer = document.getElementById("wheelContainer");
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
    elemenwheelContainer.appendChild(elementDiv);  
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
  setTimeout(function onClickFunction() {
    elemenwheelContainer.api("play");
    elementScore.innerHTML = Math.floor(Math.random() * (getallen.length));
  }, 3000);
});
// function onClickFunction() {
//     document.body.style.backgroundColor="purple";
//     for(let i = 0; i < getallen.length; i++) {
//       (function (local_i) {
//         setTimeout(function(){
//           document.getElementsByClassName('radBox' + local_i).classList.add('draaien');
//         }, 100 * local_i);
//       })(i);
//     }




function rotate(){
   
  }

