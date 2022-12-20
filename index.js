let countHome = document.getElementById("count-home")
let countGuest = document.getElementById("count-guest")


let homeScore = 0
function homeOne() {
  homeScore +=1
  countHome.textContent = homeScore
}

function homeTwo() {
  homeScore +=2
  countHome.textContent = homeScore
}

function homeThree() {
  homeScore +=3
  countHome.textContent = homeScore
}

// // Guest
let guestScore = 0
function guestOne() {
  guestScore +=1
  countGuest.textContent = guestScore
}

function guestTwo() {
  guestScore +=2
  countGuest.textContent = guestScore
}

function guestThree() {
  guestScore +=3
  countGuest.textContent = guestScore
}