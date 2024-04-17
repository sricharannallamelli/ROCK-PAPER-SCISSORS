 let userMove = '';
        
        const score = {
            wins: 0,
            lost: 0,
            tie: 0,
        };

        function computermove() {
            let computermoveResult = '';
            let randomMove = Math.random();
            if (randomMove >= 0 && randomMove <= 1 / 3) {
                computermoveResult = 'rock';
            } else if (randomMove > 1 / 3 && randomMove <= 2 / 3) {
                computermoveResult = 'paper';
            } else {
                computermoveResult = 'scissors';
            }
            return computermoveResult;
        }
        function resultMove() {
            
        let result = '';
            
            let computerMoveResult = computermove();

            if (userMove === computerMoveResult) {
                result = 'TIE';
                score.tie++;
            } else if (
                (userMove === 'rock' && computerMoveResult === 'scissors') ||
                (userMove === 'paper' && computerMoveResult === 'rock') ||
                (userMove === 'scissors' && computerMoveResult === 'paper')
            ) {
                result = 'USER WON';
                score.wins++;
            } else {
                result = 'COMPUTER WON';
                score.lost++;
            }
            document.querySelector('.result-js').innerHTML = `you - <img src="images/${userMove}-emoji.png"> <img src="images/${computerMoveResult}-emoji.png"> - computer move`;
            //return result;
            let resultElement = document.querySelector('.result-para');
            resultElement.innerHTML = `${result}`;
            
        }

        function update() {
            document.querySelector('.score-p').innerHTML = `Wins: ${score.wins} ; Loss: ${score.lost} ; Tie: ${score.tie}`;
        }