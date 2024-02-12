
let scores, roundScore, activePlayer, partieEnCours;

const start = () => {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    partieEnCours = true;
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = prompt("Nouveau nom - Joueur 1");
    document.getElementById('name-1').textContent = prompt("Nouveau nom - Joueur 2");
    document.querySelector('.player-0').classList.remove('winner');
    document.querySelector('.player-1').classList.remove('winner');
    document.querySelector('.player-0').classList.remove('active');
    document.querySelector('.player-1').classList.remove('active');
    document.querySelector('.player-0').classList.add('active');
}

start();
document.querySelector('.btn-new').addEventListener('click', start);


document.querySelector('.btn-roll').addEventListener('click', () => {
    if(partieEnCours) {
        let dice = Math.floor(Math.random() * 6) + 1;

        let diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'images/dice-' + dice + '.png';


        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            alert("Oops! Votre tour est terminé");
            nextPlayer();
        }
    }    
});


document.querySelector('.btn-hold').addEventListener('click', () => {
    if (partieEnCours) {
        scores[activePlayer] += roundScore;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Vous avez gagné!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer).classList.add('winner');
            document.querySelector('.player-' + activePlayer).classList.remove('active');
            partieEnCours = false;
        } else {
            nextPlayer();
        }
    }
});


const nextPlayer = () => {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0').classList.toggle('active');
    document.querySelector('.player-1').classList.toggle('active');

}

