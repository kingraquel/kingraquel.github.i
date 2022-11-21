var treasureBomb = Math.floor(Math.random() * 8)
var treasureSanta = Math.floor(Math.random() * 8)

if(treasureBomb === treasureSanta){
    treasureSanta = Math.floor(Math.random() * 8)
}

const treasure = (id) => {

  if(id === treasureBomb) {
    document.getElementById(id).innerHTML = "💣"
    document.getElementById('result').innerHTML = "You lose!"

  }
  else if(id === treasureSanta) {
    document.getElementById(id).innerHTML = "&#127873"
    document.getElementById('result').innerHTML = "You Win!"
  }
  else {
    document.getElementById(id).innerHTML = "🎄"
  }

}
