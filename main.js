console.log("testetstetst");

let getallen = [1,2,3,4,5,6,7,8];

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
    document.body.appendChild(elementDiv);  
}


