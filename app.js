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
    let board = $('#board1');
    if (board.children.length > 0) {
      board.html('');
      // this will wipe the board clean and produce
      //the same set of randomized dice.
      //problem previously was that creating individual divs connected all five dices so everytime i click roll when dices are in hand box and board box all five rolls. with this method only the bottom gets randomized.
    }
    for (let i = 0; i < diceToRoll; i++) {
      let div = $('<div>');
      div.addClass('dice1');
      let roll = Math.floor(Math.random()*6)+1;
      diceRolled++
      div.html(roll);
      board.append(div);
    }
    computeTurn();
    moveDices1();
  })

  let handArr1 = [];
  function moveDices1() {
    let dices = $('.dice1');
    for (let i = 0; i < dices.length; i++) {
      dices[i].addEventListener("click", function() {
        $('#handBox1').append(dices[i]);
        handArr1.push(dices[i].innerHTML);
        checkForMatch(handArr1);
        handScore(handArr1);
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
    let board = $('#board2');
    if (board.children.length > 0) {
      //innerHTML = blank
      board.html('');
    }

    for (let i = 0; i < diceToRoll; i++) {
      let div = $('<div>');
      div.addClass('dice2');
      let roll = Math.floor(Math.random()*6)+1;
      let diceImg = 'character-images/' + roll + '.png';
      diceRolled++
      // div.append('<img src="' + diceImg + '"/>')
      div.append(roll);
      // gives the divs created randomized nums
      board.append(div);
      //
    }
    computeTurn();
    moveDices2();
  })

  let handArr2 = [];
  function moveDices2() {
    console.log(handArr2)
    let dice = $('.dice2');
    for (let i = 0; i < dice.length; i++) {
      dice[i].addEventListener("click", function() {
      $('#handBox2').append(dice[i]);
      handArr2.push(dice[i].innerHTML);
      console.log(handArr2)
      checkForMatch(handArr2);
      handScore(handArr2);
      })
    }
  }

  function checkForMatch(array){
    const tally = {};
    for (let i = 0; i < array.length; i++) {
      if (array[i] in tally) {
        continue;
      } else {
         tally[array[i]] = 1;
      }
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] == array[j]) {
          tally[array[i]]++;
          pCombos(tally);
          console.log(tally)
        }
      }
    }
  }

  function pCombos(tally) {
    let combo = {
      'single': 0,
      'pairs': 0,
      'threes': 0,
      'fours': 0,
      'fives': 0
    };
    console.log(tally,'this is tally in pCombos')
    for (k in tally) {
      if (tally[k] === 1) {
        combo.single++;
      }else if (tally[k] === 2) {
        combo.pairs++;
      } else if (tally[k] === 3) {
        combo.threes++;
      }  else if (tally[k] === 4) {
        combo.fours++;
      } else if (tally[k] === 5) {
        combo.fives++;
      }
    console.log(combo.fives,'combo.5')
    console.log(combo.fours,'combo.4')
    console.log(combo.pairs,'combo.p')
    console.log(combo.single,'combo.s')
    console.log(combo.threes,'combo.3')
    comboValues(combo);
    }
  }

  let comboPoints = {
    'fives': 40,
    'fours': 30,
    'threes': 20,
    'pair': 5,
    'single': 1
  };
  function comboValues(combo){
    let score = 0;
    if (combo.single === 1) {
      score += comboPoints['single'];
      console.log("this is score:", score);
    } else if (combo.pairs === 1) {
      score += comboPoints['pair'];
      console.log("this is score:", score);
    } else if (combo.pairs === 2) {
      score += (comboPoints['pair']*2);
      console.log("this is score:", score);
    } else if (combo.threes === 1) {
      score += comboPoints['threes'];
      console.log("this is score:", score);
    } else if ((combo.threes === 1) && (combo.pairs === 1)) {
      score += (comboPoints['threes'] + comboPoints['pair']);
      console.log("this is score:", score);
    } else if (combo.fours === 1) {
      score += comboPoints['fours'];
      console.log("this is score:", score);
    } else if (combo.fours === 1 && combo.single === 1) {
      score += (comboPoints['fours'] + comboPoints['single']);
      console.log("this is score:", score);
    } else if (combo.fives === 1) {
      score += comboPoints['fives'];
      console.log("this is score:", score);
    }
    return score;
  }
  let timesPressed = 0;
  $('.hold').click(function(){
    timesPressed++;
    console.log(timesPressed)
    if (timesPressed === 2) {
      winCondition();
    }
  })

  function winCondition(){
    let combo1 = moveDices1;
    let combo2 = moveDices2;
    console.log("this is combo1:", combo1, "this is combo2:", combo2)
    if (combo1 > combo2) {
      alert("P1 WINS");
    } else if (combo2 > combo1) {
      alert("P2 WINS");
    } else {
      // winningHand(combo1, combo2);
      alert("DRAW");
    }
  }

  // WINNING CONDITION IS IF PLAYER GETS HIGHER COMBO. IF SAME TYPE OF COMBO (PAIRS ETC) RUN WINNINGHAND FUNCTION.

  let handScore = function(hand) {
    let score = 0;
    let diceValue = {
      '1': 7,
      '6': 6,
      '5': 5,
      '4': 4,
      '3': 3,
      '2': 2
    };
    for (let i = 0; i < hand.length; i++) {
      let key = hand[i];
      score += diceValue[key];
    }
    return score;
  }

  function winningHand() {
    let playerOne = handScore(hand1);
    let playerTwo = handScore(hand2);
    if (playerOne > playerTwo) {
      alert("P1 WIN");
    } else if (playerTwo > playerOne) {
      alert("P2 WIN");
    } else {
      alert("DRAW");
    }

}})





















//** MUMBO JUMBO BELOW ***

  // function checkForMatch(array){
  //   return array.reduce((tally, n) => {
  //     //the tally key is name of item(n), if never seen before
  //     //init to 1. if seen before incriment by 1.
  //     tally[n] = tally[n] + 1 || 1;
  //     return tally;
  //   }, {});
  // }


// object.entries [k,v]

 /*
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


// Turn jQuery object into an array:
// var obj = $('li');
// var arr = $.makeArray(obj);



  // let comboObj = {
  //   'single': 0,
  //   'pairs': 0,
  //   'threes': 0,
  //   'fours': 0,
  //   'fives': 0
  // }


// function checkForMatch(array){
//     const tally = {};
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] in tally) {
//         continue;
//       } else {
//          tally[array[i]] = 1;
//       }
//       for (let j = i + 1; j < array.length; j++) {
//         if (array[i] == array[j]) {
//           tally[array[i]]++;
//         }
//       }
//     }
//     return tally;
//   }


//singleton
//what is an object
//scheduled redux react flex
//closures
