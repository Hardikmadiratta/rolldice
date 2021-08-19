var P1 = prompt("Enter player 1 name -");
var P2 = prompt("Enter player 2 name -");

if(P1 === "" || P2 === ""){
    P1 = "Player 1";
    P2 = "Player 2";
}

document.querySelector("p.p1name").innerHTML = P1;
document.querySelector("p.p2name").innerHTML = P2;

function rolldice(){
    
    // ========= For Player 1 =========
    var n1 = Math.random();
    n1 *= 6;    
    n1 = Math.floor(n1) + 1;

    var diceStr1 = "images/dice" + n1 + ".png";
    document.querySelector("img.p1").src = diceStr1;

    // ========= For Player 2 =========
    var n2 = Math.random();
    n2 *= 6;
    n2 = Math.floor(n2) + 1;

    var diceStr2 = "images/dice" + n2 + ".png";
    document.querySelector("img.p2").src = diceStr2;

    if(n1 > n2){
        document.querySelector("h1.winName").innerHTML = "--- Winner is " + P1 + " ---";
    }
    else if(n1 < n2){
        document.querySelector("h1.winName").innerHTML = "--- Winner is " + P2 + " ---";
    }
    else if(n1 === n2){
        document.querySelector("h1.winName").innerHTML = "--- DRAW ---";
    }

}