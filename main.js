console.log("testetstetst");

let getallen = [1,2,3,4,5,6,7,8,9];

for (let i = 0; i < getallen.length; i= i+1) {
    console.log(getallen[i]);

    let elementDiv = document.createElement("DIV");
    elementDiv.innerHTML = getallen[i]; 
    elementDiv.style.backgroundColor="red";
    elementDiv.className="radBox";
    elementDiv.style.transform= "rotate(20deg)";
    if(i == 6){
        elementDiv.style.backgroundColor="green";
        elementDiv.innerHTML += " getal geselecteerd ";
    }
    document.body.appendChild(elementDiv);  
}


