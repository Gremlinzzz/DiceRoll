
let button = document.querySelector('.btn-new').addEventListener('click', function() {
    name1 = prompt("Nouveau nom (Joueur 1)");
    name2 = prompt("Nouveau nom (Joueur 2)");

    document.querySelector("#name-1").innerHTML = name1;
    document.querySelector("#name-2").innerHTML = name2;
});

let scores, roundScore, activePlayer, gamePlaying;
start();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        let dice = Math.floor(Math.random() * 6) + 1;

        const DICE_SIDES = document.querySelector('.dice');
        DICE_SIDES.computedStyleMap.display = 'block';
        DICE_SIDES.src = 'images/dice-' + dice + '.png';

        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#round-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        scores [activePlayer] += roundScore;

        document.querySelector('#global-' + activePlayer).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'a gagné!';
            document.querySelector('.dice').computedStyleMap.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});


function nextPlayer() {
    activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
    roundScore = 0;

    document.getElementById('round-1').textContent = '0';
    document.getElementById('round-2').textContent = '0';

    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-2-panel').classList.toggle('active');

    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-2-panel').classList.add('active');

    document.querySelector('.dice').computedStyleMap.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', start);

function start() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').computedStyleMap.display = 'none';

    document.getElementById('global-1').textContent = '0';
    document.getElementById('global-2').textContent = '0';
    document.getElementById('round-1').textContent = '0';
    document.getElementById('round-2').textContent = '0';
    document.getElementById('name-1').textContent = 'Joueur 1';
    document.getElementById('name-2').textContent = 'Joueur 2';
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-2-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-2-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active');
}


