let playerScore = 0;
let computerScore = 0;
const playerImageUrls = [
    "Delay/player1.png",
    "Delay/player2.png",
    "Delay/player3.png",
    "Delay/player2.png",
    "Delay/player1.png",
    "Delay/player2.png",
    "Delay/player3.png",
    "Delay/player1.png",
    "Delay/player2.png",
];

const computerImageUrls = [
    "Delay/computer1.png",
    "Delay/computer2.png",
    "Delay/computer3.png",
    "Delay/computer2.png",
    "Delay/computer1.png",
    "Delay/computer2.png",
    "Delay/computer3.png",
    "Delay/computer1.png",
    "Delay/computer2.png"
];
document.querySelector(".playerScoreDisplay").innerText = `${playerScore}`;
document.querySelector(".computerScoreDisplay").innerText = `${computerScore}`;

async function playRound(playerChoice){
    resetImages();
    const choice = ["rock", "paper", "scissors"];
    let computerChoice;

        if (playerChoice === "rock") {
            document.querySelector(".instructions").innerText = "";
            delayPlayerComputer();
            await sleep(1000);
            resetImages();
            rockImagePlayer();
            paperImageComputer();
            computerChoice = choice[1];

        }

        else if (playerChoice === "paper") {
            document.querySelector(".instructions").innerText = "";
            delayPlayerComputer();
            await sleep(1000);
            resetImages();
            paperImagePlayer();
            scissorsImageComputer();
            computerChoice = choice[2];
        }

        else {
            document.querySelector(".instructions").innerText = "";
            delayPlayerComputer();
            await sleep(1000);
            resetImages();
            scissorsImagePlayer();
            rockImageComputer();
            computerChoice = choice[0];
        }

        if (playerChoice === "rock" && computerChoice === "paper" ||
        playerChoice === "paper" && computerChoice === "scissors" ||
        playerChoice === "scissors" && computerChoice === "rock") {
            let result = document.querySelector(".displayResult").innerText = "You lose!";
            computerScore++;
        }
        
        updateScore();
}

async function delayPlayerComputer() {
    let slideshowImagePlayer = document.getElementById("player");
    let slideshowImageComputer = document.getElementById("computer");

    for (let i = 0; i < playerImageUrls.length; i++) {
        let delayPlayer = document.createElement("img");
        delayPlayer.src = playerImageUrls[i];
        delayPlayer.width = 400;
        delayPlayer.height = 400;
        slideshowImagePlayer.innerHTML = ''; 
        slideshowImagePlayer.appendChild(delayPlayer);

        let delayComputer = document.createElement("img");
        delayComputer.src = computerImageUrls[i];
        delayComputer.width = 400;
        delayComputer.height = 400;
        slideshowImageComputer.innerHTML = ''; 
        slideshowImageComputer.appendChild(delayComputer);

        await sleep(100);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function resetImages() {
    let playerImageContainer = document.getElementById("player");
    while (playerImageContainer.firstChild) {
        playerImageContainer.removeChild(playerImageContainer.firstChild);
    }
    let computerImageContainer = document.getElementById("computer");
    while (computerImageContainer.firstChild) {
        computerImageContainer.removeChild(computerImageContainer.firstChild);
    }
}

function updateScore(){
    document.querySelector(".playerScoreDisplay").innerText = `${playerScore}`;
    document.querySelector(".computerScoreDisplay").innerText = `${computerScore}`;
}

function rockImagePlayer() {
    let imageRock = document.createElement("img");
    imageRock.src = "rockPlayer.png";
    imageRock.alt = "rock";
    imageRock.width = 400;
    imageRock.height = 400;
    let imageRockContainer = document.getElementById("player");
    imageRockContainer.appendChild(imageRock);
}

function paperImagePlayer(){
    let imagePaper = document.createElement("img");
    imagePaper.src = "paperPlayer.png";
    imagePaper.alt = "paper";
    imagePaper.width = 400;
    imagePaper.height = 400;
    let imagePaperContainer = document.getElementById("player");
    imagePaperContainer.appendChild(imagePaper);
}

function scissorsImagePlayer(){
    let imageScissors = document.createElement("img");
    imageScissors.src = "scissorsPlayer.png";
    imageScissors.alt = "scissors";
    imageScissors.width = 400;
    imageScissors.height = 400;
    let imageScissorsContainer = document.getElementById("player");
    imageScissorsContainer.appendChild(imageScissors);
}

function rockImageComputer() {
    let imageRock = document.createElement("img");
    imageRock.src = "rockComputer.png";
    imageRock.alt = "rock";
    imageRock.width = 400;
    imageRock.height = 400;
    let imageRockContainer = document.getElementById("computer");
    imageRockContainer.appendChild(imageRock);
}

function paperImageComputer(){
    let imagePaper = document.createElement("img");
    imagePaper.src = "paperComputer.png";
    imagePaper.alt = "paper";
    imagePaper.width = 400;
    imagePaper.height = 400;
    let imagePaperContainer = document.getElementById("computer");
    imagePaperContainer.appendChild(imagePaper);
}

function scissorsImageComputer(){
    let imageScissors = document.createElement("img");
    imageScissors.src = "scissorsComputer.png";
    imageScissors.alt = "scissors";
    imageScissors.width = 400;
    imageScissors.height = 400;
    let imageScissorsContainer = document.getElementById("computer");
    imageScissorsContainer.appendChild(imageScissors);
}