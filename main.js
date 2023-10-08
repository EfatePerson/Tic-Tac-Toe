let gameStoped = false;
function stopGame(){
  gameStoped = true
  winPaths = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9], 
    [1, 4, 7], 
    [2, 5, 8], 
    [3, 6, 9],
    [1, 5, 9], 
    [3, 5, 7]
  ]
}

function resetGame(){
 for(i = 0; i <= 8; i++){
  document.querySelector('.js-line').classList.remove(`line-${i}`)
 }


      for(i = 1; i <= 9; i++){
        document.querySelector(`.js-cell-${i}`).innerHTML = '';
      }

      cellEmpty.cell1 = true;
      cellEmpty.cell2 = true;
      cellEmpty.cell3 = true;
      cellEmpty.cell4 = true;
      cellEmpty.cell5 = true;
      cellEmpty.cell6 = true;
      cellEmpty.cell7 = true;
      cellEmpty.cell8 = true;
      cellEmpty.cell9 = true;

      xWinPath = []
      oWinPath = []
      
      winPaths = [
        [1, 2, 3], 
        [4, 5, 6], 
        [7, 8, 9], 
        [1, 4, 7], 
        [2, 5, 8], 
        [3, 6, 9],
        [1, 5, 9], 
        [3, 5, 7]
      ]
      Xmove = true;

      movesNumber = 0;
      document.querySelector('.js-display-result').innerHTML = '';
      gameStoped = false;
    }
    document.querySelector('.js-reset-button').addEventListener('click', resetGame);

    function establishX(cellNumber){
      let xImage = document.createElement('img');
      xImage.src = "images/109602.png";
      if(!gameStoped){
        xImage.classList.add('x-image');
        document.querySelector(`.js-cell-${cellNumber}`).appendChild(xImage)
        checkForWin(cellNumber, 'x')
      }
    }
    
    function establishO(cellNumber){
      let oImage = document.createElement('img');
      oImage.src = "images/pngimg.com - letter_o_PNG116.png";
      if(!gameStoped){
        oImage.classList.add('o-image');
        document.querySelector(`.js-cell-${cellNumber}`).appendChild(oImage);
        checkForWin(cellNumber, '0')
      }
    }

    let winPaths =[
      [1, 2, 3], 
      [4, 5, 6], 
      [7, 8, 9], 
      [1, 4, 7], 
      [2, 5, 8], 
      [3, 6, 9],
      [1, 5, 9], 
      [3, 5, 7]
    ]

    let xWinPath =[];
    let oWinPath = [];
    let indexWinner;

    let movesNumber = 0
    function checkForWin(cellNumbr, picked){
      if( picked === 'x'){
        movesNumber += 1;
        xWinPath.push(cellNumbr)
        xWinPath.sort(function(a, b){return a - b})
      }else if(picked === '0'){
        movesNumber +=1;
        oWinPath.push(cellNumbr)
        oWinPath.sort(function(a, b){return a - b})
      }
      
      if(movesNumber === 9){
        displayResult('Tie')
      }

      winPaths.forEach((element) => {
        for(a = 0; a <= 5; a++){
          for(i = 0; i < 3; i++)
          if(element[i] === xWinPath[a]){
            element[i] = 'x'
            if(JSON.stringify(element) === JSON.stringify(['x', 'x', 'x'])){
              indexWinner = winPaths.indexOf(element)
              displayResult('X-won', indexWinner)
            }
          }else if(element[i] === oWinPath[a]){
            element[i] = '0'
            if(JSON.stringify(element) === JSON.stringify(['0', '0', '0'])){
              let preIndexWinner = winPaths.indexOf(element)
              if(preIndexWinner>=0){
                indexWinner = preIndexWinner;
              }
              displayResult('0-won', indexWinner)
            }
          }
        }
      });
    }

    function displayResult(result, indexWinner){
      if(result === 'X-won'){
        document.querySelector('.js-display-result').innerHTML = 'Winner: X';
        stopGame();
      }else if(result === '0-won'){
        document.querySelector('.js-display-result').innerHTML = 'Winner: O'
        stopGame();
      }else if(result === 'Tie'){
        document.querySelector('.js-display-result').innerHTML = 'Tie'
        stopGame();
      }
      let Xximage = document.createElement('img')
        Xximage.src = 'images/109602.png'
        Xximage.classList.add('x-image1')
      
      if(indexWinner === 0 ){
        document.querySelector('.js-line').classList.add('line-0')
      }else if(indexWinner === 1){
        document.querySelector('.js-line').classList.add('line-1')
      }else if(indexWinner === 2){
        document.querySelector('.js-line').classList.add('line-2')
      }else if(indexWinner === 3){
        document.querySelector('.js-line').classList.add('line-3')
      }else if(indexWinner === 4){
        document.querySelector('.js-line').classList.add('line-4')
      }else if(indexWinner === 5){
        document.querySelector('.js-line').classList.add('line-5')
      }else if(indexWinner === 6){
        document.querySelector('.js-line').classList.add('line-6')
      }else if(indexWinner === 7){
        document.querySelector('.js-line').classList.add('line-7')
      }else if(indexWinner === 8){
        document.querySelector('.js-line').classList.add('line-8')
      }
    }

    Xmove = true;
    function xMoveCheck(cellNumber){
      if(Xmove){
        establishX(cellNumber)
        Xmove = false;
      }else{
        establishO(cellNumber);
        Xmove = true;
      }
    }
    
    let cellEmpty = {
      cell1: true,
      cell2: true,
      cell3: true,
      cell4: true,
      cell5: true,
      cell6: true,
      cell7: true,
      cell8: true,
      cell9: true
    }
    document.querySelector('.js-cell-1').addEventListener('click', () => {
      if(cellEmpty.cell1){
        xMoveCheck(1);
        cellEmpty.cell1 = false;
      }
    })
    
    document.querySelector('.js-cell-2').addEventListener('click', () => {
      if(cellEmpty.cell2){
        xMoveCheck(2);
        cellEmpty.cell2 = false;
      }
    })

    document.querySelector('.js-cell-3').addEventListener('click', () => {
      if(cellEmpty.cell3){
        xMoveCheck(3);
        cellEmpty.cell3 = false;
      }
    })

    document.querySelector('.js-cell-4').addEventListener('click', () => {
      if(cellEmpty.cell4){
        xMoveCheck(4);
        cellEmpty.cell4 = false;
      }
    })
    document.querySelector('.js-cell-5').addEventListener('click', () => {
      if(cellEmpty.cell5){
        xMoveCheck(5);
        cellEmpty.cell5 = false;
      }
    })

    document.querySelector('.js-cell-6').addEventListener('click', () => {
      if(cellEmpty.cell6){
        xMoveCheck(6);
        cellEmpty.cell6 = false;
      }
    })

    document.querySelector('.js-cell-7').addEventListener('click', () => {
      if(cellEmpty.cell7){
        xMoveCheck(7);
        cellEmpty.cell7 = false;
      }
    })

    document.querySelector('.js-cell-8').addEventListener('click', () => {
      if(cellEmpty.cell8){
        xMoveCheck(8);
        cellEmpty.cell8 = false;
      }
    })

    document.querySelector('.js-cell-9').addEventListener('click', () => {
      if(cellEmpty.cell9){
        xMoveCheck(9);
        cellEmpty.cell9 = false;
      }
    })