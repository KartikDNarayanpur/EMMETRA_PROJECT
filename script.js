// function startPuzzle1() {
//     // Change navbar text to "Puzzle 1 Ongoing"
//     document.getElementById("navbar-left").innerHTML = "<a>Puzzle 1 Ongoing</a>";
   
  
//     // Open the puzzle modal
//     const modalContent = `
//       <div style="text-align: center;">
//         <h2>Pattern Matching Puzzle</h2>
//         <p>What is the next number in the sequence?</p>
//         <h3>2, 4, 6, 8, ?</h3>
//         <input type="text" id="puzzle1-answer" placeholder="Enter your answer" style="padding: 10px; font-size: 16px;"/>
//         <br><br>
//         <button onclick="checkPuzzle1()" style="padding: 10px 20px; font-size: 16px; background-color: #2563eb; color: white; border: none; border-radius: 5px; cursor: pointer;">Submit</button>
//       </div>
//     `;
  
//     openModal(modalContent);
//   }
  
//   function checkPuzzle1() {
//     const answer = document.getElementById("puzzle1-answer").value.trim();
//     if (answer === "10") {
//       alert("Correct! Well done!");
//       const clockContainer = document.querySelector(".clock iframe");
//       clockContainer.src = "./clock2/clock2.html"; // Update the iframe source
//       closeModal();
//     } else {
//       alert("Incorrect. Try again!");
//     }
//   }
  
//   function openModal(content) {
//     const modal = document.getElementById("modal");
//     modal.innerHTML = `
//       <button class="close-btn" onclick="closeModal()">Close</button>
//       ${content}
//     `;
//     modal.style.display = "flex";
//     document.getElementById("main-content").classList.add("blur");
//   }
  
//   function closeModal() {

//     document.getElementById("modal").style.display = "none";
//     document.getElementById("main-content").classList.remove("blur");
//   }

// // puzzle 22222222222222222
// function startPuzzle2() {
//     // Change navbar text to "Puzzle 2 Ongoing"
//     document.getElementById("navbar-left").innerHTML = "<a>Puzzle 2 Ongoing</a>";
    
//     // Define the color sequence
//     const colorSequence = ["Red", "Green", "Blue", "Yellow"];
//     const shuffledSequence = [...colorSequence].sort(() => Math.random() - 0.5); // Randomize the sequence
  
//     // Start the game by showing the sequence
//     showSequenceWithTimer(shuffledSequence, colorSequence);
//   }
  
//   function showSequenceWithTimer(correctSequence, originalColors) {
//     let counter = 5; // Countdown timer
  
//     const modalContent = `
//       <div style="text-align: center;">
//         <h2>Color Memory Puzzle</h2>
//         <p>Memorize the following color sequence:</p>
//         <h3 id="color-sequence" style="font-size: 20px;">${correctSequence.join(" → ")}</h3>
//         <p id="countdown" style="font-size: 18px; margin-top: 20px;">Displaying for <span id="timer">${counter}</span> seconds...</p>
//       </div>
//     `;
//     openModal(modalContent);
  
//     // Update the timer every second
//     const timerInterval = setInterval(() => {
//       counter--;
//       document.getElementById("timer").innerText = counter;
  
//       // When counter reaches 0, stop timer and show options
//       if (counter === 0) {
//         clearInterval(timerInterval);
//         document.getElementById("color-sequence").style.display = "none";
//         document.getElementById("countdown").innerHTML = "Recreate the sequence below:";
//         displayColorOptions(correctSequence, originalColors);
//       }
//     }, 1000);
//   }
  
//   function displayColorOptions(correctSequence, originalColors) {
//     const modal = document.getElementById("modal");
//     let optionsHTML = `
//       <div style="text-align: center;">
//         <div style="display: flex; justify-content: center; gap: 10px; margin-top: 20px;">
//           ${originalColors
//             .map(
//               (color) =>
//                 `<button class="color-button" style="padding: 10px 20px; font-size: 16px; background-color: ${color.toLowerCase()}; color: white; border: none; border-radius: 5px; cursor: pointer;" onclick="selectColor('${color}')">${color}</button>`
//             )
//             .join("")}
//         </div>
//         <p id="selected-colors" style="margin-top: 20px; font-size: 18px;">Selected Sequence: </p>
//         <button onclick="checkPuzzle2('${correctSequence.join(",")}')" style="padding: 10px 20px; font-size: 16px; background-color: #2563eb; color: white; border: none; border-radius: 5px; cursor: pointer; margin-top: 20px;">Submit</button>
//       </div>
//     `;
//     modal.innerHTML += optionsHTML;
//   }
  
//   let selectedColors = [];
//   function selectColor(color) {
//     selectedColors.push(color);
//     document.getElementById("selected-colors").innerHTML = `Selected Sequence: ${selectedColors.join(" → ")}`;
//   }
  
//   function checkPuzzle2(correctSequence) {
//     if (selectedColors.join(",") === correctSequence) {
//       alert("Correct! Well done!");
      
//       const clockContainer = document.querySelector(".clock iframe");
//       clockContainer.src = "./clock3.html"; // Update the iframe source
      
//       closeModal();
//     } else {
//       alert("Incorrect. Showing the sequence again...");
//       selectedColors = []; // Reset the selected colors
//       document.getElementById("selected-colors").innerHTML = "Selected Sequence: ";
//       const originalColors = correctSequence.split(","); // Convert back to array
//       showSequenceWithTimer(originalColors, originalColors);
//     }
//   }


//   function startPuzzle4() {
//     // Change navbar text to "Puzzle 4 Ongoing"
//     document.getElementById("navbar-left").innerHTML = "<a>Puzzle 4 Ongoing</a>";
  
//     // Open the Hangman game
//     openModal(`
//       <div id="hangman-game" style="text-align: center;">
//         <h2>Hangman Game</h2>
//         <p id="hangman-hint" style="font-size: 18px; color: #555; margin-bottom: 20px;"></p>
//         <canvas id="hangman-canvas" width="300" height="400" style="border: 1px solid #ccc;"></canvas>
//         <p id="hangman-word" style="font-size: 24px; font-weight: bold; margin: 20px 0;"></p>
//         <div id="hangman-letters" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 20px;"></div>
//         <button onclick="resetHangman()" style="padding: 10px 20px; font-size: 16px; background-color: #2563eb; color: white; border: none; border-radius: 5px; cursor: pointer;">Reset</button>
//       </div>
//     `);
  
//     initializeHangman();
//   }
  
//   let hangmanWord = "";
//   let guessedLetters = [];
//   let incorrectGuesses = 0;
//   const hints = {
//     JAVASCRIPT: "A popular programming language for the web.",
//     HANGMAN: "The name of this game!",
//     PUZZLE: "A brain teaser or a game to test your mind.",
//     CHALLENGE: "Something that tests your abilities.",
//     PROGRAMMING: "What developers do to create software."
//   };
  
//   function initializeHangman() {
//     const wordList = Object.keys(hints);
//     hangmanWord = wordList[Math.floor(Math.random() * wordList.length)];
//     guessedLetters = [];
//     incorrectGuesses = 0;
  
//     drawHangman(0); // Reset canvas
//     displayWord();
//     displayHint();
//     displayLetters();
//   }
  
//   function displayHint() {
//     document.getElementById("hangman-hint").innerText = `Hint: ${hints[hangmanWord]}`;
//   }
  
//   function displayWord() {
//     const wordDisplay = hangmanWord
//       .split("")
//       .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
//       .join(" ");
//     document.getElementById("hangman-word").innerText = wordDisplay;
  
//     if (!wordDisplay.includes("_")) {
//       // Show dancing animation immediately
//       showDancingHangman();
//     }
//   }
  
//   function displayLetters() {
//     const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
//     const lettersContainer = document.getElementById("hangman-letters");
//     lettersContainer.innerHTML = "";
  
//     letters.forEach((letter) => {
//       const button = document.createElement("button");
//       button.innerText = letter;
//       button.style.cssText = `
//         padding: 10px;
//         font-size: 16px;
//         background-color: #f0f0f0;
//         border: 1px solid #ccc;
//         border-radius: 5px;
//         cursor: pointer;
//       `;
//       button.onclick = () => handleGuess(letter, button);
//       lettersContainer.appendChild(button);
//     });
//   }
//   function closeModal() {
//     document.getElementById("modal").style.display = "none";
//     document.getElementById("main-content").classList.remove("blur");
//   }
  
//   function handleGuess(letter, button) {
//     button.disabled = true;
//     button.style.backgroundColor = "#ddd";
  
//     if (hangmanWord.includes(letter)) {
//       guessedLetters.push(letter);
//       displayWord();
//     } else {
//       incorrectGuesses++;
//       drawHangman(incorrectGuesses);
  
//       if (incorrectGuesses === 6) {
//         // Show "You Lost" message and hanging animation immediately
//         setTimeout(() => {
//           alert(`You Lost! The word was: ${hangmanWord}`);
//           showDancingHangman(); 
//           closeModal();// Show the hanging animation
//         }, 500); // Short delay to ensure smooth canvas update
        
//       }
//     }
//   }
  
//   function drawHangman(stage) {
//     const canvas = document.getElementById("hangman-canvas");
//     const ctx = canvas.getContext("2d");
  
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
  
//     ctx.lineWidth = 2;
//     ctx.strokeStyle = "#000";
  
//     // Draw parts based on the stage (6 steps)
//     const drawParts = [
//       () => {
//         // Base
//         ctx.beginPath();
//         ctx.moveTo(50, 350);
//         ctx.lineTo(250, 350);
//         ctx.stroke();
//       },
//       () => {
//         // Pole
//         ctx.beginPath();
//         ctx.moveTo(150, 350);
//         ctx.lineTo(150, 50);
//         ctx.stroke();
//       },
//       () => {
//         // Top Bar
//         ctx.beginPath();
//         ctx.moveTo(150, 50);
//         ctx.lineTo(250, 50);
//         ctx.stroke();
//       },
//       () => {
//         // Rope
//         ctx.beginPath();
//         ctx.moveTo(250, 50);
//         ctx.lineTo(250, 100);
//         ctx.stroke();
//       },
//       () => {
//         // Head
//         ctx.beginPath();
//         ctx.arc(250, 130, 30, 0, Math.PI * 2);
//         ctx.stroke();
//       },
//       () => {
//         // Body and Limbs
//         ctx.beginPath();
//         ctx.moveTo(250, 160);
//         ctx.lineTo(250, 250); // Body
//         ctx.moveTo(250, 180);
//         ctx.lineTo(220, 220); // Left Arm
//         ctx.moveTo(250, 180);
//         ctx.lineTo(280, 220); // Right Arm
//         ctx.moveTo(250, 250);
//         ctx.lineTo(220, 300); // Left Leg
//         ctx.moveTo(250, 250);
//         ctx.lineTo(280, 300); // Right Leg
//         ctx.stroke();
//       },
//     ];
  
//     for (let i = 0; i <= stage; i++) {
//       drawParts[i]?.();
//     }
//   }
  
//   function showDancingHangman() {
//     const canvas = document.getElementById("hangman-canvas");
//     const ctx = canvas.getContext("2d");
  
//     let angle = 0;
//     const interval = setInterval(() => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       drawHangman(5); // Draw static parts
//       ctx.save();
//       ctx.translate(250, 160); // Move to the pivot point
//       ctx.rotate((Math.sin(angle) * Math.PI) / 8);
//       ctx.translate(-250, -160);
//       drawHangman(6); // Draw moving parts
//       ctx.restore();
//       angle += 0.1;
  
//       if (angle > Math.PI * 2) clearInterval(interval);
//     }, 100);
//   }
  
//   function showHangingHangman() {
//     const canvas = document.getElementById("hangman-canvas");
//     const ctx = canvas.getContext("2d");
  
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawHangman(6); // Draw the full hangman
//     ctx.beginPath();
//     ctx.moveTo(250, 130); // Neck
//     ctx.lineTo(250, 160);
//     ctx.stroke();
//   }
  
//   function resetHangman() {
//     initializeHangman();
//   }


//   //puzzzle 333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333

//   function startPuzzle3() {
//     // Change navbar text to "Puzzle 3 Ongoing"
//     document.getElementById("navbar-left").innerHTML = "<a>Puzzle 3 Ongoing</a>";
  
//     // Open the game in a modal
//     openModal(`
//       <div style="text-align: center;">
//         <h2>Card Pairs Game</h2>
//         <div id="game-board" class="game-board"></div>
//       </div>
//     `);
  
//     initializeCardPairsGame();
//   }
  
//   function initializeCardPairsGame() {
//     // Array of card values (12 cards for 4x3 grid, 6 pairs)
//     const cardValues = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F'];
  
//     // Shuffle the cards
//     function shuffle(array) {
//       return array.sort(() => Math.random() - 0.5);
//     }
  
//     // Create the game board
//     const gameBoard = document.getElementById('game-board');
//     let shuffledCards = shuffle(cardValues);
//     let flippedCards = [];
//     let matchedCards = 0;
  
//     // Render cards on the board
//     gameBoard.innerHTML = ''; // Clear any previous content
//     shuffledCards.forEach((value, index) => {
//       const card = document.createElement('div');
//       card.classList.add('card');
//       card.dataset.value = value; // Assign value to card
//       card.dataset.index = index; // Optionally track the index
//       gameBoard.appendChild(card);
  
//       // Card click event
//       card.addEventListener('click', () => flipCard(card));
//     });
  
//     // Flip card logic
//     function flipCard(card) {
//       // Prevent flipping more than two cards or re-flipping the same card
//       if (flippedCards.length === 2 || card.classList.contains('flipped')) return;
  
//       // Flip the card and display its value
//       card.classList.add('flipped');
//       card.textContent = card.dataset.value; // Display the card value
//       flippedCards.push(card);
  
//       // Check for a match if two cards are flipped
//       if (flippedCards.length === 2) {
//         checkMatch();
//       }
//     }
  
//     // Check if the two flipped cards match
//     function checkMatch() {
//       const [card1, card2] = flippedCards;
  
//       if (card1.dataset.value === card2.dataset.value) {
//         // Cards match
//         card1.classList.add('matched');
//         card2.classList.add('matched');
//         matchedCards += 2;
  
//         // Check for win condition
//         if (matchedCards === shuffledCards.length) {
//           setTimeout(() => alert('You win!'), 500);
//           const clockContainer = document.querySelector(".clock iframe");
//           clockContainer.src = "./clock4.html"; // Update the iframe source
//         }
//       } else {
//         // No match: Flip cards back over after a short delay
//         setTimeout(() => {
//           card1.classList.remove('flipped');
//           card1.textContent = '';
//           card2.classList.remove('flipped');
//           card2.textContent = '';
//         }, 1000);
//       }
  
//       // Reset flipped cards
//       flippedCards = [];
//     }
//   }
// Utility Functions
function openModal(content) {
  const modal = document.getElementById("modal");
  modal.innerHTML = `
    <button class="close-btn" onclick="closeModal()">Close</button>
    ${content}
  `;
  modal.style.display = "flex";
  document.getElementById("main-content").classList.add("blur");
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("main-content").classList.remove("blur");
}

function updateClockFrame(src) {
  const clockContainer = document.querySelector(".clock iframe");
  clockContainer.src = src;
}

// Puzzle 1: Pattern Matching
function startPuzzle1() {
  document.getElementById("navbar-left").innerHTML = "<a>Puzzle 1 Ongoing</a>";
  const modalContent = `
    <div style="text-align: center;">
      <h2>Pattern Matching Puzzle</h2>
      <p>What is the next number in the sequence?</p>
      <h3>2, 4, 6, 8, ?</h3>
      <input type="text" id="puzzle1-answer" placeholder="Enter your answer" style="padding: 10px; font-size: 16px;" />
      <br><br>
      <button onclick="checkPuzzle1()" style="padding: 10px 20px; font-size: 16px; background-color: #2563eb; color: white; border: none; border-radius: 5px; cursor: pointer;">Submit</button>
    </div>
  `;
  openModal(modalContent);
}

function checkPuzzle1() {
  const answer = document.getElementById("puzzle1-answer").value.trim();
  if (answer === "10") {
    alert("Correct! Well done!");
    updateClockFrame("./clock2/clock2.html");
    closeModal();
    document.getElementById("navbar-left").innerHTML = "<a>Puzzle 1 completed</a>";

    // Unlock Puzzle 2 button and add onclick property
    const puzzle2Button = document.getElementById("btn2");
    puzzle2Button.disabled = false;
    puzzle2Button.classList.remove("locked");
    puzzle2Button.textContent = "Puzzle 2";
    puzzle2Button.style.backgroundColor = "#2563eb";
    puzzle2Button.style.cursor = "pointer";
    puzzle2Button.setAttribute("onclick", "startPuzzle2()");
  } else {
    alert("Incorrect. Try again!");
  }
}

// Puzzle 2: Color Memory Game
function startPuzzle2() {
  document.getElementById("navbar-left").innerHTML = "<a>Puzzle 2 Ongoing</a>";
  const colorSequence = ["Red", "Green", "Blue", "Yellow"];
  const shuffledSequence = [...colorSequence].sort(() => Math.random() - 0.5);
  showSequenceWithTimer(shuffledSequence, colorSequence);
}

function showSequenceWithTimer(correctSequence, originalColors) {
  let counter = 5;
  const modalContent = `
    <div style="text-align: center;">
      <h2>Color Memory Puzzle</h2>
      <p>Memorize the following color sequence:</p>
      <h3 id="color-sequence" style="font-size: 20px;">${correctSequence.join(" → ")}</h3>
      <p id="countdown" style="font-size: 18px; margin-top: 20px;">Displaying for <span id="timer">${counter}</span> seconds...</p>
    </div>
  `;
  openModal(modalContent);

  const timerInterval = setInterval(() => {
    counter--;
    document.getElementById("timer").innerText = counter;
    if (counter === 0) {
      clearInterval(timerInterval);
      document.getElementById("color-sequence").style.display = "none";
      document.getElementById("countdown").innerHTML = "Recreate the sequence below:";
      displayColorOptions(correctSequence, originalColors);
    }
  }, 1000);
}

function displayColorOptions(correctSequence, originalColors) {
  const modal = document.getElementById("modal");
  const optionsHTML = `
    <div style="text-align: center;">
      <div style="display: flex; justify-content: center; gap: 10px; margin-top: 20px;">
        ${originalColors
          .map(
            (color) =>
              `<button class="color-button" style="padding: 10px 20px; font-size: 16px; background-color: ${color.toLowerCase()}; color: white; border: none; border-radius: 5px; cursor: pointer;" onclick="selectColor('${color}')">${color}</button>`
          )
          .join("")}
      </div>
      <p id="selected-colors" style="margin-top: 20px; font-size: 18px;">Selected Sequence: </p>
      <button onclick="checkPuzzle2('${correctSequence.join(",")}')" style="padding: 10px 20px; font-size: 16px; background-color: #2563eb; color: white; border: none; border-radius: 5px; cursor: pointer; margin-top: 20px;">Submit</button>
    </div>
  `;
  modal.innerHTML += optionsHTML;
}

let selectedColors = [];
function selectColor(color) {
  selectedColors.push(color);
  document.getElementById("selected-colors").innerHTML = `Selected Sequence: ${selectedColors.join(" → ")}`;
}

function checkPuzzle2(correctSequence) {
  if (selectedColors.join(",") === correctSequence) {
    alert("Correct! Well done!");
    updateClockFrame("./clock3.html");
    closeModal();
    document.getElementById("navbar-left").innerHTML = "<a>Puzzle 2 completed</a>";

    // Unlock Puzzle 3 button and add onclick property
    const puzzle3Button = document.getElementById("btn3");
    puzzle3Button.disabled = false;
    puzzle3Button.classList.remove("locked");
    puzzle3Button.textContent = "Puzzle 3";
    puzzle3Button.style.backgroundColor = "#2563eb";
    puzzle3Button.style.cursor = "pointer";
    puzzle3Button.setAttribute("onclick", "startPuzzle3()");
  } else {
    alert("Incorrect. Showing the sequence again...");
    selectedColors = [];
    document.getElementById("selected-colors").innerHTML = "Selected Sequence: ";
    const originalColors = correctSequence.split(",");
    showSequenceWithTimer(originalColors, originalColors);
  }
}

// Puzzle 3: Card Pairs Game
function startPuzzle3() {
  document.getElementById("navbar-left").innerHTML = "<a>Puzzle 3 Ongoing</a>";
  openModal(`
    <div style="text-align: center;">
      
      <h2>Match the pairs with the same letter—keep your eyes sharp!”</h2>
      <div id="game-board" class="game-board"></div>
    </div>
  `);
  initializeCardPairsGame();
}

function initializeCardPairsGame() {
  const cardValues = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F'];
  const gameBoard = document.getElementById("game-board");
  const shuffledCards = cardValues.sort(() => Math.random() - 0.5);
  let flippedCards = [];
  let matchedCards = 0;

  // Clear previous content and render cards
  gameBoard.innerHTML = "";
  shuffledCards.forEach((value) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.value = value;
    gameBoard.appendChild(card);
    card.addEventListener("click", () => flipCard(card));
  });

  function flipCard(card) {
    if (flippedCards.length === 2 || card.classList.contains("flipped")) return;
    card.classList.add("flipped");
    card.textContent = card.dataset.value;
    flippedCards.push(card);
    if (flippedCards.length === 2) checkMatch();
  }

  function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.value === card2.dataset.value) {
      // Cards match
      card1.classList.add("matched");
      card2.classList.add("matched");
      matchedCards += 2;

      // Check for win condition
      if (matchedCards === shuffledCards.length) {
        setTimeout(() => {
          alert("Puzzle 3 completed! Well done!");
          updateClockFrame("./clock4.html");
          closeModal();
          document.getElementById("navbar-left").innerHTML = "<a>Puzzle 3 completed</a>";

          // Unlock Puzzle 4 button
          unlockPuzzle4();
        }, 500);
      }
    } else {
      // No match, flip cards back after a delay
      setTimeout(() => {
        card1.classList.remove("flipped");
        card1.textContent = "";
        card2.classList.remove("flipped");
        card2.textContent = "";
      }, 1000);
    }
    flippedCards = [];
  }
}

function unlockPuzzle4() {
  const puzzle4Button = document.getElementById("btn4");
  puzzle4Button.disabled = false;
  puzzle4Button.classList.remove("locked");
  puzzle4Button.textContent = "Puzzle 4";
  puzzle4Button.style.backgroundColor = "#2563eb";
  puzzle4Button.style.cursor = "pointer";
  puzzle4Button.setAttribute("onclick", "startPuzzle4()");
}



function startPuzzle4() {
  // Change navbar text to "Puzzle 4 Ongoing"
  document.getElementById("navbar-left").innerHTML = "<a>Puzzle 4 Ongoing</a>";

  // Open the Hangman game
  openModal(`
    <div id="hangman-game" style="text-align: center;">
      <h2>Hangman Game</h2>
      <p id="hangman-hint" style="font-size: 18px; color: #FFFFFF; margin-bottom: 20px;"></p>
      <canvas id="hangman-canvas" width="300" height="400" style="border: 1px solid #ccc;"></canvas>
      <p id="hangman-word" style="font-size: 24px; font-weight: bold; margin: 20px 0;"></p>
      <div id="hangman-letters" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 20px;"></div>
      <button onclick="resetHangman()" style="padding: 10px 20px; font-size: 16px; background-color: #2563eb; color: white; border: none; border-radius: 5px; cursor: pointer;">Reset</button>
    </div>
  `);

  initializeHangman();
}

let hangmanWord = "";
let guessedLetters = [];
let incorrectGuesses = 0;
const hints = {
  JAVASCRIPT: "A popular programming language for the web.",
  HANGMAN: "The name of this game!",
  PUZZLE: "A brain teaser or a game to test your mind.",
  CHALLENGE: "Something that tests your abilities.",
  PROGRAMMING: "What developers do to create software."
};

function initializeHangman() {
  const wordList = Object.keys(hints);
  hangmanWord = wordList[Math.floor(Math.random() * wordList.length)];
  guessedLetters = [];
  incorrectGuesses = 0;

  drawHangman(0); // Reset canvas
  displayWord();
  displayHint();
  displayLetters();
}

function displayHint() {
  document.getElementById("hangman-hint").innerText = `Hint: ${hints[hangmanWord]}`;
}

function displayWord() {
  const wordDisplay = hangmanWord
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");
  document.getElementById("hangman-word").innerText = wordDisplay;

  if (!wordDisplay.includes("_")) {
    // Show celebration modal immediately after completing the word
    setTimeout(() => showCelebration(), 500);
  }
}

function showCelebration() {
  const modal = document.getElementById("modal");
  modal.innerHTML = `
    <div style="text-align: center; color: white;">
      <h1>🎉 Congratulations! 🎉</h1>
      <p>You have successfully completed al the levels!</p>
      <button onclick="closeModal()" style="padding: 10px 20px; font-size: 16px; background-color: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer;">Close</button>
    </div>
  `;
  modal.style.display = "flex";
  document.getElementById("main-content").classList.add("blur");

  // Optional: Trigger celebration confetti (if desired)
  triggerConfetti();
}

function triggerConfetti() {
  const confettiWrapper = document.getElementById("confetti-wrapper");
  confettiWrapper.innerHTML = ""; // Clear any existing confetti

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.cssText = `
      position: absolute;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      background-color: ${getRandomColor()};
      width: 10px;
      height: 20px;
      opacity: 0.8;
      transform: rotate(${Math.random() * 360}deg);
      animation: confettiFall 2s infinite ease-in-out;
    `;
    confettiWrapper.appendChild(confetti);
  }
}

function getRandomColor() {
  const colors = ["#FF5733", "#FFC300", "#DAF7A6", "#33FF57", "#33D4FF", "#FF33A1"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function displayLetters() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const lettersContainer = document.getElementById("hangman-letters");
  lettersContainer.innerHTML = "";

  letters.forEach((letter) => {
    const button = document.createElement("button");
    button.innerText = letter;
    button.style.cssText = `
      padding: 10px;
      font-size: 16px;
      background-color: #f0f0f0;
      border: 1px solid #ccc;
      border-radius: 5px;
      cursor: pointer;
    `;
    button.onclick = () => handleGuess(letter, button);
    lettersContainer.appendChild(button);
  });
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("main-content").classList.remove("blur");
}

function handleGuess(letter, button) {
  button.disabled = true;
  button.style.backgroundColor = "#ddd";

  if (hangmanWord.includes(letter)) {
    guessedLetters.push(letter);
    displayWord();
  } else {
    incorrectGuesses++;
    drawHangman(incorrectGuesses);

    if (incorrectGuesses === 6) {
      // Show "You Lost" message and hanging animation immediately
      setTimeout(() => {
        alert(`You Lost! The word was: ${hangmanWord}`);
        showDancingHangman();
        closeModal();// Show the hanging animation
      }, 500); // Short delay to ensure smooth canvas update
      
    }
  }
}

function drawHangman(stage) {
  const canvas = document.getElementById("hangman-canvas");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.lineWidth = 2;
  ctx.strokeStyle = "#000";

  // Draw parts based on the stage (6 steps)
  const drawParts = [
    () => {
      // Base
      ctx.beginPath();
      ctx.moveTo(50, 350);
      ctx.lineTo(250, 350);
      ctx.stroke();
    },
    () => {
      // Pole
      ctx.beginPath();
      ctx.moveTo(150, 350);
      ctx.lineTo(150, 50);
      ctx.stroke();
    },
    () => {
      // Top Bar
      ctx.beginPath();
      ctx.moveTo(150, 50);
      ctx.lineTo(250, 50);
      ctx.stroke();
    },
    () => {
      // Rope
      ctx.beginPath();
      ctx.moveTo(250, 50);
      ctx.lineTo(250, 100);
      ctx.stroke();
    },
    () => {
      // Head
      ctx.beginPath();
      ctx.arc(250, 130, 30, 0, Math.PI * 2);
      ctx.stroke();
    },
    () => {
      // Body and Limbs
      ctx.beginPath();
      ctx.moveTo(250, 160);
      ctx.lineTo(250, 250); // Body
      ctx.moveTo(250, 180);
      ctx.lineTo(220, 220); // Left Arm
      ctx.moveTo(250, 180);
      ctx.lineTo(280, 220); // Right Arm
      ctx.moveTo(250, 250);
      ctx.lineTo(220, 300); // Left Leg
      ctx.moveTo(250, 250);
      ctx.lineTo(280, 300); // Right Leg
      ctx.stroke();
    },
  ];

  for (let i = 0; i <= stage; i++) {
    drawParts[i]?.();
  }
}

function showDancingHangman() {
  const canvas = document.getElementById("hangman-canvas");
  const ctx = canvas.getContext("2d");

  let angle = 0;
  const interval = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawHangman(5); // Draw static parts
    ctx.save();
    ctx.translate(250, 160); // Move to the pivot point
    ctx.rotate((Math.sin(angle) * Math.PI) / 8);
    ctx.translate(-250, -160);
    drawHangman(6); // Draw moving parts
    ctx.restore();
    angle += 0.1;

    if (angle > Math.PI * 2) clearInterval(interval);
  }, 100);
}

function showHangingHangman() {
  const canvas = document.getElementById("hangman-canvas");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawHangman(6); // Draw the full hangman
  ctx.beginPath();
  ctx.moveTo(250, 130); // Neck
  ctx.lineTo(250, 160);
  ctx.stroke();
}

function resetHangman() {
  initializeHangman();
}

