const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');
let counter1 = 1;
let counter2 = 1;
const reset = document.querySelector('#reset');
const select = document.querySelector('#numgames')


const addScore1 = function(){
    if (score1.innerHTML < numGames()){
        score1.innerHTML = counter1 ++
    }
    else {
        score1.innerHTML = numGames()
    }
    checkWinner();
}

const addScore2 = function(){
    if (score2.innerHTML < numGames()){
        score2.innerHTML = counter2 ++}
    else {
            score2.innerHTML = numGames()
        }
        checkWinner();
    }

const counterReset = function(){
    counter1 = 0;
    counter2= 0;
    score1.innerHTML = counter1 ++;
    score2.innerHTML = counter2 ++;
    select.value = 0
    score1.style.color = 'black';
    score2.style.color = 'black';
}

const numGames = function(){
    return select.value;
}

const checkGames = function(){
    if(select.value === 0){
        alert('choose')
    } else {
        console.log('good')
    }
}
player1.addEventListener('click', addScore1)
player2.addEventListener('click', addScore2)
reset.addEventListener('click', counterReset)
select.addEventListener('change', numGames)

const checkWinner = function(){
    if (score1.innerHTML === numGames()){
        score1.style.color = 'green';
        score2.style.color = 'red';
    } else if (score2.innerHTML === numGames()){
        score1.style.color = 'red';
        score2.style.color = 'green';
    }
}