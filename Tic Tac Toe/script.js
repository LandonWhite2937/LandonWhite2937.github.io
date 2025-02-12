let xTurn = true;

function changeMark(buttonId) {
    let currentMark = document.getElementById(buttonId).innerHTML;
    if (!currentMark) {
        if (xTurn) {
            document.getElementById(buttonId).innerHTML = "X";
            document.getElementById(buttonId).style.color = "red";  // X color
        } else {
            document.getElementById(buttonId).innerHTML = "O";
            document.getElementById(buttonId).style.color = "blue"; // O color
        }
        xTurn = !xTurn;
        checkWin();
    }
}

function resetGame() {
    document.getElementById("a1").innerHTML = "";
    document.getElementById("b1").innerHTML = "";
    document.getElementById("c1").innerHTML = "";
    document.getElementById("a2").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("c3").innerHTML = "";
    document.getElementById("winner").innerText = "";
}

function checkWin() {
    let a1 = document.getElementById("a1").innerHTML;
    let b1 = document.getElementById("b1").innerHTML;
    let c1 = document.getElementById("c1").innerHTML;
    let a2 = document.getElementById("a2").innerHTML;
    let b2 = document.getElementById("b2").innerHTML;
    let c2 = document.getElementById("c2").innerHTML;
    let a3 = document.getElementById("a3").innerHTML;
    let b3 = document.getElementById("b3").innerHTML;
    let c3 = document.getElementById("c3").innerHTML;

    // rows
    if (a1 == b1 && b1 == c1 && a1 != "") {
        displayWinner(a1);
    } else if (a2 == b2 && b2 == c2 && a2 != "") {
        displayWinner(a2);
    } else if (a3 == b3 && b3 == c3 && a3 != "") {
        displayWinner(a3);
    }
    
    // columns
    else if (a1 == a2 && a2 == a3 && a1 != "") {
        displayWinner(a1);
    } else if (b1 == b2 && b2 == b3 && b1 != "") {
        displayWinner(b1);
    } else if (c1 == c2 && c2 == c3 && c1 != "") {
        displayWinner(c1);
    }
    
    // diagonals
    else if (a1 == b2 && b2 == c3 && a1 != "") {
        displayWinner(a1);
    } else if (a3 == b2 && b2 == c1 && a3 != "") {
        displayWinner(a3);
    }
}

function displayWinner(winner) {
    document.getElementById("winner").innerText = winner + " Wins!";
    setTimeout(resetGame, 3000); // Reset the game after 3 seconds
}
