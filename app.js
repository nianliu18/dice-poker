$(document).ready(function() {

  $('#game-container1').hide();
  $('#game-container2').hide();
  $('#status').hide();
  $('#reset').hide();

  $('#starting').click(function() {
    $('#game-container1').show();
    $('#game-container2').show()
    $('#status').show();
    $('#reset').show();
    $('.start-container').hide();

  })
  //need to structure computeTurn
  let playerTurn = 0;
  let computeTurn = function(event) {
    if (playerTurn % 2 === 0) {
      $('#status').html("Player Twos Turn");
      playerTurn++;
    } else if (playerTurn % 2 !== 0) {
      $('#status').html("Player Ones Turn");
      playerTurn++;
    }
  }





  $('#roll-but1').click(function() {
    //find elements in handbox
    let hand = $('#handBox1').children().length;
    //if handbox has ele subtract from 5.
    let diceToRoll = 5 - hand;
    //set dice rolled to zero
    let diceRolled = 0;
    let board = document.getElementById('board1');
    if (board.children.length > 0) {
      board.innerHTML = null;
      // this will wipe the board clean and produce
      //the same set of randomized dice.
      //problem previously was that creating individual divs connected all five dices so everytime i click roll when dices are in hand box and board box all five rolls. with this method only the bottom gets randomized.
    }
    for (let i = 0; i < diceToRoll; i++) {
      let div = document.createElement('div');
      div.setAttribute('class', 'dice1');
      let roll = Math.floor(Math.random()*6)+1;
      diceRolled++
      div.innerHTML = roll;
      board.appendChild(div);
    }
    computeTurn();
    moveDices1();
  })

  function moveDices1() {
    let dices = $('.dice1');
    for (let i = 0; i < dices.length; i++) {
      dices[i].addEventListener("click", function() {
        $('#handBox1').append(dices[i]);
      })
    }
  }

  $('#roll-but2').click(function() {
    let hand = $('#handBox2').children().length;
    let diceToRoll = 5 - hand;
    let diceRolled = 0;
    //find elements in handbox
    //if handbox has ele subtract from 5.
    //dices to roll = handbox ele - 5
    //var dices roll = 0
    let board = document.getElementById('board2');
    if (board.children.length > 0) {
      //innerHTML = blank
      board.innerHTML = null;
    }

    for (let i = 0; i < diceToRoll; i++) {
      let div = document.createElement('div');
      div.setAttribute('class', 'dice2');
      let roll = Math.floor(Math.random()*6)+1;
      diceRolled++
      div.innerHTML = roll;
      // gives the divs created randomized nums
      board.appendChild(div);
      //
    }
    computeTurn();
    moveDices2();
  })

  function moveDices2() {
    let dices = $('.dice2');
    for (let i = 0; i < dices.length; i++) {
      dices[i].addEventListener("click", function() {
      $('#handBox2').append(dices[i]);
      })
    }
  }



  let handScore = function(hand) {
    const diceValue = {
      '1': 7,
      '6': 6,
      '5': 5,
      '4': 4,
      '3': 3,
      '2': 2
    };
    let score = 0;
    for (let i = 0; i < hand.length; i++) {
      let key = hand[i];
      score += dicevalue[key];
    }
    return score;
  }

  let p1Hand = $('#handBox1');
  let p2Hand = $('#handBox2');
  function winningHand(p1Hand, p2Hand) {

    let playerOne = handScore(p1Hand);
    let playerTwo = handScore(p2Hand);
    if (playerOne > playerTwo) {
      //return p1 Winner
    } else if (playerTwo > playerOne) {
      //return p2 Winner
    } else {
      //DRAW
    }
  }

  function checkForMatch(array){
    return array.reduce((tally, n) => {
      //the tally key is name of item(n), if never seen before
      //init to 1. if seen before incriment by 1.
      tally[n] = tally[n] + 1 || 1;
      return tally;
    }, {});
  }

  function pCombos(obj) {
    let tally = checkForMatch(p1Hand);
    let pairs = 0;
    let threes = 0;
    let fours = 0;
    let fives = 0;
    for (k in tally1) {
      if (tally[k] === 2) {
        pairs++;
      } else if (tally[k] === 3) {
        threes++;
      }  else if (tally[k] === 4) {
        fours++;
      } else if (tally[k] === 5) {
        fives++;
      }
    }
  }
  function winConditions() {

  }


  // let values = tally.entries();
  //object.entries(obj) method returns an array of key value pairs
  //example: const obj{foo: 'bar', tazz: 50};
  //console.log(Object.entires(obj)); = [[foo, bar], [tazz, 50]] but in this case wont be needed. Good to know for future in cause you want to grab certain things from objects and use them.





  /*
endTurn func(whichPlayer) arg = int {
  if (whichplayer === 1) {
    p1turn++
  } else {
    p2turn++
  }
}

b1 = player 1 button
if (p1turn === 2) {
  compfunc()
}

b2 = player 2 button
if (p2turn === 1 || p2turn === 2) {
  compfunc();
}

compareFun() {
  let h1 = document.getElementById('handbox1');
  let 2 = '';

  // calculate all the dice
  // compare hands
  if (p1 > p2 && p2turn !== 2) {
    p2 shakes
  } else if (p1 > p2 && p2turn === 2) {
    return p1 wins
  }

  if (p2 > p1 && p1turn !==2) {
    p1 shakes;
  } else if (p2 > p1 && p1turn === 2) {
    p2 wins
  }

  if (p2turn === 2 & p1turn === 2) {
    if (h1 > h2) {
      p1 wins
    } else {
      p2 wins
    }
  }
}
*/
  // function checkForMatch(array){
  //   return array.reduce((tally, n) => {
  //     //the tally key is name of item(n), if never seen before
  //     //init to 1. if seen before incriment by 1.
  //     tally[n] = tally[n] + 1 || 1;
  //     return tally;
  //   }, {});
  // }

})
  // let tally1 = checkForMatch(p1Array);
  // let tall2 = checkForMatch(p2Array);
  // let values = tally.entries();






// object.entries [k,v]

  // function grabPairs() {
  //   if (eleCount1(array) === 2) {
  //     $('#status' + p).html('Pairs!');
  //     $('#handBox' + p).html(... + ...);
  //   }
  // }









 /**
   * @func checkForMatch1
   * @param array - it is the array containing the...
   * @desc func callback
   * @returns {object} value of matches
   */
  // function checkForMatch1(array){
  //   // empty object to store matches
  //   const tally = {};
  //   //loop over array i by rows
  //   for (let i = 0; i < array.length; i++) {

  //     // if I've seen this key before, dont even enter the loop
  //     //skip over this row
  //     if (array[i] in tally) {
  //       continue;
  //       //if i have not seen this before initialize it set to 0.
  //     } else {
  //        tally[array[i]] = 1;
  //     }

  //     // loop across columns
  //     for (let j = i + 1; j < array.length; j++) {
  //       // console.log(i, j, array[i],array[j])
  //       if (array[i] == array[j]) {
  //         tally[array[i]]++;
  //       }
  //     }
  //   } // end of the i loop
  //   return tally;
  // }










