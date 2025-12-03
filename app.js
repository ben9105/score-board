// home set up 
let homeScore = document.getElementById('home-score');
let homeButtonOne = document.getElementById('home-button-1');
let homeButtonTwo = document.getElementById('home-button-2');
let homeButtonThree = document.getElementById('home-button-3');
let homeScoreUpdate = 0;

// away set up
let guestScore = document.getElementById('guest-score');
let guestButtonOne = document.getElementById('guest-button-1');
let guestButtonTwo = document.getElementById('guest-button-2');
let guestButtonThree = document.getElementById('guest-button-3');
let guestScoreUpdate = 0;


// home score update buttons
homeButtonOne.addEventListener('click', function homeScoreUpdateOne() {
    homeScoreUpdate += 1
    homeScore.textContent = homeScoreUpdate;
}); 
homeButtonTwo.addEventListener('click', function homeScoreUpdateTwo() {
    homeScoreUpdate += 2
    homeScore.textContent = homeScoreUpdate;
}); 
homeButtonThree.addEventListener('click', function homeScoreUpdateThree() {
    homeScoreUpdate += 3
    homeScore.textContent = homeScoreUpdate;
}); 


// guest score update buttons
guestButtonOne.addEventListener('click', function guestScoreUpdateOne() {
    guestScoreUpdate += 1
    guestScore.textContent = guestScoreUpdate;
}); 
guestButtonTwo.addEventListener('click', function guestScoreUpdateTwo() {
    guestScoreUpdate += 2
    guestScore.textContent = guestScoreUpdate;
}); 
guestButtonThree.addEventListener('click', function guestScoreUpdateThree() {
    guestScoreUpdate += 3
    guestScore.textContent = guestScoreUpdate;
}); 


// reset scoreboard
let reloadButton = document.getElementById('reset-button');
reloadButton.addEventListener('click', function reloadPage() {
  location.reload();  
})