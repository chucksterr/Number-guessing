// Variable to store the list of guesses 
let guesses = [];
// Variable for store the correct random number 
let correctNumber = getRandomNumber();
console.log(correctNumber)
let numberGuess;
let result;
window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
    domEvents();
}

function domEvents(){
  for(let i=0; i < document.body.children.length; i++)
  console.log(document.body.children[i].innerText);
}

/**
 * Functionality for playing the whole game
 */
function playGame(){
  numberGuess = document.getElementById('number-guess').value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
}

/**
 * Show the result for if the guess it too high, too low, or correct
 */
function displayResult(numberGuess){
 result = document.getElementById('result');
 if(numberGuess < correctNumber){
  showNumberBelow();
}else if(numberGuess > correctNumber){
  showNumberAbove();
}else{
showYouWon();
}
}


/**
 * Initialize a new game by resetting all values and content on the page
*/
function initGame(){

guesses = [];
correctNumber = getRandomNumber();
numberGuess;
result;
document.getElementById("history").innerHTML="";
document.getElementById("result").innerHTML="";
document.getElementById("number-guess").value=0;
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

/** 
 * Return a random number between 1 and 100
 */
function getRandomNumber(){
let randomNumber = Math.floor((Math.random() * 100) + 1);
return randomNumber;
}

/**
 * Save guess history 
 */
function saveGuessHistory(guess) {

  guesses.push(guess);
  console.log(guesses);
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 */
function displayHistory() {
  let index = guesses.length - 1 // TODO
  let list = "<ul class='list-group'>";
  while (index >= 0){
    list += "<li class='list-group-item'>" + 'You guessed ' + guesses[index] + "</li>\n"
    index--;
  }
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}

/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   */
  var dialog = getDialog('won', text);

  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   */

  var dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   */
  var dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}
