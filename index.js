alert ("Are You ready!?")

var confirmMessage = "Lets get started!"
var swordMessage = "You have obtained the master sword"
var attackMessage = "You have been attacked!"
var dodgeMessage = "You have dodged the enemy!"

alert(confirmMessage)

alert("You walk into the first dungeon, and come across a man,dressed in all white, he hands you The Master Sword!")
alert("He also tells you, you must choose one of these doors to go through, which will determine your future. Press the button on the page to continue the game")

function dungeon() {
    var text;
    var whichDungeon = prompt("Now, which one will it be? One,Two or Three?");
    if (whichDungeon === "One") {
    	alert("You chose One! You walk through the first door and your life flashes before your eyes! Then, You wake up in your bed like it never happened.")
    }
    else if(whichDungeon === "Two") {
    	alert("You chose Two! You walk through the second door and come across your first enemy.")
    }
    else {
    	alert("You chose three! You wak through the third door. It's a trap! The floor beneath you crumbles and you fall into a deep hole.")
    }
  }
  

