



const num_games = 5;
var playerSelection = "bananas";
const options = ["Rock", "Paper", "Scissors"];
var cs = 0;
var ps = 0;
var tie = 0;

var computer = computerPlay();
function computerPlay() {
    var computer = options[Math.floor(Math.random() * options.length)];
    return computer;

}
function playerPick() {
            var i = 0;
            const buttons = document.querySelectorAll('button');
            buttons.forEach((button) => {
            button.addEventListener('click', (e) => {
            var playerSelection = button.id;
            computer = computerPlay();

            console.log("Computer Choice is: " + computer);
            console.log("Player Coice: " + playerSelection);
            console.log(gamePlay(playerSelection, computer));
                
            const paragraph = document.createElement('p');
            paragraph.classList.add('paragraph');
            paragraph.textContent = gamePlay(playerSelection, computer);
            paragraph.style.cssText = 'color: red';
            container.appendChild(paragraph);
            console.log("i = " + i)
            i++;
            if (i >= 5) {
                i = 0
            if (cs > ps) {
                console.log("The Computer Has Won!");
                const paragraph = document.createElement('p');
                paragraph.classList.add('paragraph');
                paragraph.textContent = "The Computer Has Won The Series!";
                paragraph.style.cssText = 'color: green';
                container.appendChild(paragraph);
            }
            else if (ps == cs) {
                console.log("There are no Winners!");
                const paragraph = document.createElement('p');
                paragraph.classList.add('paragraph');
                paragraph.textContent = "There Are No Winners Here";
                paragraph.style.cssText = 'color: brown';
                container.appendChild(paragraph);
            }
            else {
                console.log("The Player has won!")
                const paragraph = document.createElement('p');
                paragraph.classList.add('paragraph');
                paragraph.textContent = "They Player Has WON the Series!";
                paragraph.style.cssText = 'color: blue';
                container.appendChild(paragraph);
            }
        }
    
            
        });
    });
        
}

function gamePlay(player, computer) {
    var delta = player.length - computer.length;
    if (delta == 0) {
        tie++;
        return "This game is a tie ";
    }
    else if (delta == -4 || delta == 1 || delta == 3) {
        ps++;
        return "The player has won this game! ";
    }
    else {
        cs++;
        return "the computer has won this game! ";

    }
   
}         
playerPick();




