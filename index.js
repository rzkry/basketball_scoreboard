let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")

let homeScore = 0
let guestScore = 0

function incrementHome1() {
  homeScore += 1
  homeScoreEl.textContent = homeScore
}
function incrementHome2() {
  homeScore += 2
  homeScoreEl.textContent = homeScore
}
function incrementHome3() {
  homeScore += 3
  homeScoreEl.textContent = homeScore
}

function incrementGuest1() {
  guestScore += 1
  guestScoreEl.textContent = guestScore
}
function incrementGuest2() {
  guestScore += 2
  guestScoreEl.textContent = guestScore
}
function incrementGuest3() {
  guestScore += 3
  guestScoreEl.textContent = guestScore
}