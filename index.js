let homePointsTextEl = document.querySelector(".home-points-text")
let guestPointsTextEl = document.querySelector(".guest-points-text")
let homePointsSum = 0
let guestPointsSum = 0


function homePlus1Point(){
    homePointsSum++
    homePointsTextEl.textContent = homePointsSum
}
function homePlus2Point(){
    homePointsSum+=2
    homePointsTextEl.textContent = homePointsSum
}
function homePlus3Point(){
    homePointsSum+=3
    homePointsTextEl.textContent = homePointsSum
}
function guestPlus1Point(){
    guestPointsSum++
    guestPointsTextEl.textContent = guestPointsSum
}
function guestPlus2Point(){
    guestPointsSum+=2
    guestPointsTextEl.textContent = guestPointsSum
}
function guestPlus3Point(){
    guestPointsSum+=3
    guestPointsTextEl.textContent = guestPointsSum
}
