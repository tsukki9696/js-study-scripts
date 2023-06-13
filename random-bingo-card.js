window.onload = createBingoCard;

function createBingoCard() {
  for (let i = 1; i <= 24 ; i++) {
    let newRandomNum = Math.floor(Math.random() * 75);
    document.getElementById('Square' + i).innerHTML = newRandomNum;
  }
}
