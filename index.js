// let getRanNum = Math.floor((Math.random() * 20) + 1);
// let finalScore = 20;
// let highScore = 0;

// document.querySelector(".check").addEventListener("click", function () {
//     const inputNum = Number(document.querySelector("#guessNum").value);

//     if (inputNum >= 1) {
//         if (!inputNum) {
//             document.querySelector("#guess").textContent = "Empty Guess";

//         } else if (inputNum === getRanNum) {
//             document.querySelector("#guess").textContent = "Correct Guess, You Win";
//             document.querySelector("#reveal").textContent = getRanNum;
//             document.querySelector("body").style.backgroundColor = "Green"

//             if (finalScore > highScore) {
//                 document.querySelector(".highScore").textContent = finalScore;
//             }
//             else {
//                 document.querySelector(".highScore").textContent = highScore;
//             }

//         } else if (inputNum > getRanNum) {
//             if (finalScore > 1) {
//                 document.querySelector("#guess").textContent = "You guessed a higher number";
//                 document.querySelector("body").style.backgroundColor = "orange";
//                 finalScore = finalScore - 1;
//                 document.querySelector("#score").textContent = finalScore;
//             } else if (finalScore = 0) {
//                 document.querySelector("#guess").textContent = "Sorry! You Lost the Game";
//                 document.querySelector("body").style.backgroundColor = "red";
//             }
//             else {
//                 document.querySelector("#guess").textContent = "Sorry! You Lost the Game";
//                 document.querySelector("body").style.backgroundColor = "red";
//             }
//         } else if (inputNum < getRanNum) {
//             if (finalScore >= 1) {
//                 document.querySelector("#guess").textContent = "You guessed a lower number";
//                 document.querySelector("body").style.backgroundColor = "orange";
//                 finalScore = finalScore - 1;
//                 document.querySelector("#score").textContent = finalScore;
//             } else if (finalScore = 0) {
//                 document.querySelector("#guess").textContent = "Sorry! You Lost the Game";
//                 document.querySelector("body").style.backgroundColor = "red";
//             }
//             else {
//                 document.querySelector("#guess").textContent = "Sorry! You Lost the Game";
//                 document.querySelector("body").style.backgroundColor = "red";
//             }
//         }
//     } else {
//         document.querySelector("#guess").textContent = "Invalid Input"
//     }
//     })

// document.querySelector(".again").addEventListener("click", function () {
//     finalScore = 20;
//     document.querySelector("#guess").textContent = "Start Guessing...";
//     document.querySelector("#reveal").textContent = "?";
//     document.querySelector("#score").textContent = finalScore;
//     document.querySelector("body").style.backgroundColor = "rgb(33, 34, 31)";
//     getRanNum = Math.floor((Math.random() * 20) + 1);
// })

let genRanNum = Math.trunc((Math.random() * 20) + 1);
let score = 20;
let highScore = 0;

document.querySelector("#check").addEventListener("click", function () {
    const guess = Number(document.querySelector("#guessNum").value);

    if (!guess) {
        document.querySelector("#guessText").textContent = "No guess input, Guess a Number";
    }

    else if (guess > 20 || guess <= 0) {
        document.querySelector("#guessText").textContent = "Invalid Guess";
        alert("Invalid Guess. Guess must be between 1 and 20");
    }

    else if (score >= 1) {
        if (genRanNum == guess) {
            document.querySelector("#guessText").textContent = "Correct Guess";
            document.querySelector("#reveal").textContent = genRanNum;
            document.querySelector("body").style.backgroundColor = "Green";
            alert(`${guess} is correct, You won`);
            highScore = score;
            document.querySelector(".highScore").textContent = highScore;
        }

        else if (guess > genRanNum) {
            document.querySelector("#guessText").textContent = "You guessed higher";
            document.querySelector("body").style.backgroundColor = "orange";
            alert(`${guess} is higher than the correct guess`);
            score = score - 1;
            document.querySelector("#score").textContent = score;
        }

        else if (guess < genRanNum) {
            document.querySelector("#guessText").textContent = "You guessed lower";
            document.querySelector("body").style.backgroundColor = "orange";
            alert(`${guess} is lower than the correct guess`);
            score = score - 1;
            document.querySelector("#score").textContent = score;
        }
    }

    else {
        document.querySelector("#guessText").textContent = "Game Over";
        document.querySelector("body").style.backgroundColor = "Red";
        alert(`Game Over! Hit the Again Button to Try Again`);
        highScore = score;
        document.querySelector(".highScore").textContent = highScore;
    }
});

document.querySelector(".again").addEventListener("click", function () {
    document.querySelector("#guessText").textContent = "Start Guessing...";
    document.querySelector("#reveal").textContent = "?";
    document.querySelector("body").style.backgroundColor = "rgb(33, 34, 31)";
    alert(`Welcome to the guessing game where you guess a number from 1 - 20`);
    document.querySelector(".highScore").textContent = highScore;
    document.querySelector("#score").textContent = 20;
    document.querySelector("#guessNum").value = "";
})