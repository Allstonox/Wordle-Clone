word = [];
const words = [
    "about",
    "above",
    "abuse",
    "actor",
    "acute",
    "admit",
    "adopt",
    "adult",
    "after",
    "again",
    "agent",
    "agree",
    "ahead",
    "alarm",
    "album",
    "alert",
    "alike",
    "alive",
    "allow",
    "alone",
    "along",
    "alter",
    "among",
    "anger",
    "Angle",
    "angry",
    "apart",
    "apple",
    "apply",
    "arena",
    "argue",
    "arise",
    "array",
    "aside",
    "asset",
    "audio",
    "audit",
    "avoid",
    "award",
    "aware",
    "badly",
    "baker",
    "bases",
    "basic",
    "basis",
    "beach",
    "began",
    "begin",
    "begun",
    "being",
    "below",
    "bench",
    "billy",
    "birth",
    "black",
    "blame",
    "blind",
    "block",
    "blood",
    "board",
    "boost",
    "booth",
    "bound",
    "brain",
    "brand",
    "bread",
    "break",
    "breed",
    "brief",
    "bring",
    "broad",
    "broke",
    "brown",
    "build",
    "built",
    "buyer",
    "cable",
    "calif",
    "carry",
    "catch",
    "cause",
    "chain",
    "chair",
    "chart",
    "chase",
    "cheap",
    "check",
    "chest",
    "chief",
    "child",
    "china",
    "chose",
    "civil",
    "claim",
    "class",
    "clean",
    "clear",
    "click",
    "clock",
    "close",
    "coach",
    "coast",
    "could",
    "count",
    "court",
    "cover",
    "craft",
    "crash",
    "cream",
    "crime",
    "cross",
    "crowd",
    "crown",
    "curve",
    "cycle",
    "daily",
    "dance",
    "dated",
    "dealt",
    "death",
    "debut",
    "delay",
    "depth",
    "doing",
    "doubt",
    "dozen",
    "draft",
    "drama",
    "drawn",
    "dream",
    "dress",
    "drill",
    "drink",
    "drive",
    "drove",
    "dying",
    "eager",
    "early",
    "earth",
    "eight",
    "elite",
    "empty",
    "enemy",
    "enjoy",
    "enter",
    "entry",
    "equal",
    "error",
    "event",
    "every",
    "exact",
    "exist",
    "extra",
    "faith",
    "false",
    "fault",
    "fiber",
    "field",
    "fifth",
    "fifty",
    "fight",
    "final",
    "first",
    "fixed",
    "flash",
    "fleet",
    "floor",
    "fluid",
    "focus",
    "force",
    "forth",
    "forty",
    "forum",
    "found",
    "frame",
    "frank",
    "fraud",
    "fresh",
    "front",
    "fruit",
    "fully",
    "funny",
    "giant",
    "given",
    "glass",
    "globe",
    "going",
    "grace",
    "grade",
    "grand",
    "grant",
    "grass",
    "great",
    "green",
    "gross",
    "group",
    "grown",
    "guard",
    "guess",
    "guest",
    "guide",
    "happy",
    "harry",
    "heart",
    "heavy",
    "hence",
    "henry",
    "horse",
    "hotel",
    "house",
    "human",
    "ideal",
    "image",
    "index",
    "inner",
    "input",
    "issue",
    "japan",
    "jimmy",
    "joint",
    "jones",
    "judge",
    "known",
    "label",
    "large",
    "laser",
    "later",
    "laugh",
    "layer",
    "learn",
    "lease",
    "least",
    "leave",
    "legal",
    "level",
    "lewis",
    "light",
    "limit",
    "links",
    "lives",
    "local",
    "logic",
    "loose",
    "lower",
    "lucky",
    "lunch",
    "lying",
    "magic",
    "major",
    "maker",
    "march",
    "maria",
    "match",
    "maybe",
    "mayor",
    "meant",
    "media",
    "metal",
    "might",
    "minor",
    "minus",
    "mixed",
    "model",
    "money",
    "month",
    "moral",
    "motor",
    "mount",
    "mouse",
    "mouth",
    "movie",
    "music",
    "needs",
    "never",
    "newly",
    "night",
    "noise",
    "north",
    "noted",
    "novel",
    "nurse",
    "occur",
    "ocean",
    "offer",
    "often",
    "order",
    "other",
    "ought",
    "paint",
    "panel",
    "paper",
    "party",
    "peace",
    "peter",
    "phase",
    "phone",
    "photo",
    "piece",
    "pilot",
    "pitch",
    "place",
    "plain",
    "plane",
    "plant",
    "plate",
    "point",
    "pound",
    "power",
    "press",
    "price",
    "pride",
    "prime",
    "print",
    "prior",
    "prize",
    "proof",
    "proud",
    "prove",
    "queen",
    "quick",
    "quiet",
    "quite",
    "radio",
    "raise",
    "range",
    "rapid",
    "ratio",
    "reach",
    "ready",
    "refer",
    "right",
    "rival",
    "river",
    "robin",
    "roger",
    "roman",
    "rough",
    "round",
    "route",
    "royal",
    "rural",
    "scale",
    "scene",
    "scope",
    "score",
    "sense",
    "serve",
    "seven",
    "shall",
    "shape",
    "share",
    "sharp",
    "sheet",
    "shelf",
    "shell",
    "shift",
    "shirt",
    "shock",
    "shoot",
    "short",
    "shown",
    "sight",
    "since",
    "sixth",
    "sixty",
    "sized",
    "skill",
    "sleep",
    "slide",
    "small",
    "smart",
    "smile",
    "smith",
    "smoke",
    "solid",
    "solve",
    "sorry",
    "sound",
    "south",
    "space",
    "spare",
    "speak",
    "speed",
    "spend",
    "spent",
    "split",
    "spoke",
    "sport",
    "staff",
    "stage",
    "stake",
    "stand",
    "start",
    "state",
    "steam",
    "steel",
    "stick",
    "still",
    "stock",
    "stone",
    "stood",
    "store",
    "storm",
    "story",
    "strip",
    "stuck",
    "study",
    "stuff",
    "style",
    "sugar",
    "suite",
    "super",
    "sweet",
    "table",
    "taken",
    "taste",
    "taxes",
    "teach",
    "teeth",
    "terry",
    "texas",
    "thank",
    "theft",
    "their",
    "theme",
    "there",
    "these",
    "thick",
    "thing",
    "think",
    "third",
    "those",
    "three",
    "threw",
    "throw",
    "tight",
    "times",
    "tired",
    "title",
    "today",
    "topic",
    "total",
    "touch",
    "tough",
    "tower",
    "track",
    "trade",
    "train",
    "treat",
    "trend",
    "trial",
    "tried",
    "tries",
    "truck",
    "truly",
    "trust",
    "truth",
    "twice",
    "under",
    "undue",
    "union",
    "unity",
    "until",
    "upper",
    "upset",
    "urban",
    "usage",
    "usual",
    "valid",
    "value",
    "video",
    "virus",
    "visit",
    "vital",
    "voice",
    "waste",
    "watch",
    "water",
    "wheel",
    "where",
    "which",
    "while",
    "white",
    "whole",
    "whose",
    "woman",
    "women",
    "world",
    "worry",
    "worse",
    "worst",
    "worth",
    "would",
    "wound",
    "write",
    "wrong"
];

greenColor = 'rgba(187, 53, 174, 0.3)';
yellowColor = 'rgba(220, 255, 0, 0.2)';
greyColor = 'rgba(40, 40, 40, 1)';
let gameOver = false;
let gameWon = null;
const rowNum = 6;
const columnNum = 5;
let currentRow = 0;
let currentColumn = 0;
let gridArray = new Array(rowNum);
const keyboardGridRowOne = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
const keyboardGridRowTwo = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
const keyboardGridRowThree = ['z', 'x', 'c', 'v', 'b', 'n', 'm', '&#8592;'];
const keyboardGrid = [keyboardGridRowOne, keyboardGridRowTwo, keyboardGridRowThree];

const grid = document.querySelector('.grid');
const submitButton = document.querySelector('.submit-button');
const textInput = document.querySelector('.input-message');
const keyboardGridOne = document.querySelector('.keyboard-grid-row-1');
const keyboardGridTwo = document.querySelector('.keyboard-grid-row-2');
const keyboardGridThree = document.querySelector('.keyboard-grid-row-3');
const keyboardGridObj = [keyboardGridOne, keyboardGridTwo, keyboardGridThree];

function pickWord() {
    let wordPicked = words[Math.floor(Math.random() * words.length)];
    word = wordPicked.split("");
    console.log(word);
}

function createGrid() {
    for (var i = 0; i < gridArray.length; i++) {
        gridArray[i] = new Array(columnNum);
    }
}

function createKeyboardGrid() {
    for (var i = 0; i < keyboardGrid.length; i++) {
        for (var j = 0; j < keyboardGrid[i].length; j++) {
            let keyTile = document.createElement("button");
            keyTile.classList.add('keyboard-tile');
            keyTile.innerHTML = keyboardGrid[i][j];
            keyboardGridObj[i].appendChild(keyTile);
            keyTile.addEventListener('click', (e) => {
                console.log(e.target.innerHTML);
                updateLetters(e.target.innerHTML);
            });
        }
        // console.log(gridArray[i]);
    }
}

function populateGrid() {
    for (var i = 0; i < rowNum; i++) {
        for (var j = 0; j < columnNum; j++) {
            let tile = document.createElement("div");
            tile.classList.add('tile');
            grid.appendChild(tile);
            gridArray[i][j] = tile;
            // console.log(gridArray);
        }
    }
}

function updateLetters(tileValue) {
    console.log(tileValue);
    if (tileValue != 'bl' && tileValue != '' && tileValue != "←" && currentColumn < 5) {
        gridArray[currentRow][currentColumn].innerHTML = tileValue;
        if (currentColumn < 5) {
            currentColumn++;
        }
        // console.log(currentColumn);
    }
    else if (tileValue === "←" && currentColumn > 0) {
        currentColumn--;
        gridArray[currentRow][currentColumn].innerHTML = "";
        // console.log(currentColumn);
    }
}

function addGuess(inputArray) {

    // Handles adding guess to grid
    for (var j = 0; j < columnNum; j++) {
        gridArray[currentRow][j].innerHTML = inputArray[j];
        for (var i = 0; i < word.length; i++) {
            if (word[i] === gridArray[currentRow][j].innerHTML && i === j) {
                gridArray[currentRow][j].style.background = greenColor;
            }
            else if (word[i] === gridArray[currentRow][j].innerHTML) {
                if (gridArray[currentRow][j].style.background != greenColor) {
                    gridArray[currentRow][j].style.background = yellowColor;
                }
            }
        }
    }

    // Handles coloring keyboard tiles
    let keysOne = Array.from(document.querySelector('.keyboard-grid-row-1').children);
    let keysTwo = Array.from(document.querySelector('.keyboard-grid-row-2').children);
    let keysThree = Array.from(document.querySelector('.keyboard-grid-row-3').children);
    let keysArray = [keysOne, keysTwo, keysThree];
    for (var i = 0; i < keysArray.length; i++) {
        // console.log(keysArray);
        for (var l = 0; l < keysArray[i].length; l++) {
            for (var j = 0; j < inputArray.length; j++) {
                for (var k = 0; k < word.length; k++) {
                    if (keysArray[i][l].innerHTML === inputArray[j] && inputArray[j] === word[j]) {
                        keysArray[i][l].style.background = greenColor;
                    }
                    else if (keysArray[i][l].innerHTML === inputArray[j] && inputArray[j] === word[k] && keysArray[i][l].style.background != greenColor) {
                        keysArray[i][l].style.background = yellowColor;
                    }
                    else if (keysArray[i][l].innerHTML === inputArray[j] && keysArray[i][l].style.background != greenColor && keysArray[i][l].style.background != yellowColor) {
                        keysArray[i][l].style.background = greyColor;
                    }
                }
            }
        }
    }
    //Checks win state
    if (currentRow < 5) {
        if (!checkWin()) {
            currentRow++;
        }
        else {
            gameOver = true;
            gameWon = true;
            endGame(gameWon);
            console.log("You Won!");
        }
    }
    else if (currentRow >= 5) {
        if (!checkWin()) {
            gameOver = true;
            gameWon = false;
            endGame(gameWon);
            console.log("You Lose");
        }
        else {
            gameOver = true;
            gameWon = true;
            endGame(gameWon);
            console.log("You Won!");
        }
    }
    //Changes focus to next row
}

function checkWin() {
    let greenCounter = 0;
    for (var j = 0; j < columnNum; j++) {
        if (gridArray[currentRow][j].style.background === greenColor) {
            greenCounter++;
        }
    }
    console.log(greenCounter);
    if (greenCounter === 5) {
        return true;
    }

    else {
        return false;
    }
}

function endGame(winner) {
    let gameOverScreen = document.querySelector('.game-over');
    let correctWord = word.join('');
    if (winner === true) {
        gameOverScreen.classList.toggle('on');
        gameOverScreen.innerHTML = 'You Won!'
    }
    else {
        gameOverScreen.classList.toggle('on');
        gameOverScreen.innerHTML = 
        `<h1>You Lose!</h1>
        <h3>Correct Word:</h3>
        <h3>${correctWord}</h3>
        <button class="play-again">Play Again</button>`
    }
}

submitButton.addEventListener('click', () => {

    if (currentColumn === 5) {
        let inputArray = [];
        for (var j = 0; j < columnNum; j++) {
            inputArray[j] = gridArray[currentRow][j].innerHTML;
        }
        addGuess(inputArray);
        currentColumn = 0;
    }
    else {
        console.log("too short");
    }
    // console.log(inputArray);
});
pickWord();
createGrid();
populateGrid();
createKeyboardGrid();

