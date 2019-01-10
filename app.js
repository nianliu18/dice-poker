

$(document).ready(function() {

  $('#game-container1').hide();
  $('#game-container2').hide();
  $('#status').hide();
  $('#reset').hide();
  $('#restart').hide();

  $('<input>').attr('id', 'p1').text('#p1Name');
  $('<input>').attr('id', 'p2').text('#p2Name');
  let userName1;
  let userName2;

  $('#starting').click(function() {
    $('#game-container1').show();
    $('#game-container2').show()
    $('#status').show();
    $('#reset').show();
    $('#restart').show();
    $('.start-container').hide();
    userName1 = $('#p1').val();
    userName2 = $('#p2').val();
  })



  //need to structure computeTurn
  let playerTurn = 0;
  let computeTurn = function(event) {
    if (playerTurn % 2 === 0) {
      $('#status').html("Player2 Turn");
      playerTurn++;
    } else if (playerTurn % 2 !== 0) {
      $('#status').html("Player1 Turn");
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
    let score1 = moveDices1();
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
      // let diceImg = 'character-images/' + roll + '.png';
      diceRolled++
      // div.append('<img src="' + diceImg + '"/>')
      div.append(roll);
      // gives the divs created randomized nums
      board.append(div);
      //
    }
    computeTurn();
    let score2 = moveDices2();
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
    //function is exactly what its name is saying.
    const tally = {};
    for (let i = 0; i < array.length; i++) {
      //iterating through the rows
      if (array[i] in tally) {
        //if we seen it before keep find others
        continue;
      } else {
         tally[array[i]] = 1;
      }
      for (let j = i + 1; j < array.length; j++) {
        //iterating through the columns
        if (array[i] == array[j]) {
          tally[array[i]]++;
          pCombos(tally);
          console.log(tally)
        }
      }
    }
  }

  function pCombos(tally) {
    //pCombos function grabs from checkForMatch function. CheckForMatch function arranges dice array to a dice object. Making it easier for us to access values.
    let combo = {
      'single': 0,
      'pairs': 0,
      'threes': 0,
      'fours': 0,
      'fives': 0
    };
    //changes on the bottom are made in the object up top
    for (k in tally) {
      //so we use FOR IN loop to access the object.
      if (tally[k] === 1) {
        //if you see a value of 1 in the object we add 1 to value of single
        combo.single++;
      }else if (tally[k] === 2) {
        combo.pairs++;
        //add 1 to value of pairs if we see a value of 2 in the object we are taking in.
      } else if (tally[k] === 3) {
        combo.threes++;
        //same here
      }  else if (tally[k] === 4) {
        combo.fours++;
        //same THANG hereee
      } else if (tally[k] === 5) {
        combo.fives++;
        //you already knowww
      }
    console.log(combo.fives,'combo.5')
    console.log(combo.fours,'combo.4')
    console.log(combo.pairs,'combo.p')
    console.log(combo.single,'combo.s')
    console.log(combo.threes,'combo.3')
    //testing things out making sure they work.
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
      //grab from object combo in pCombo function to get the different combinations.
      score += comboPoints['single'];
      //grab from comboPoints to get a score value
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
    $('#score').html("SCORE:" + score);
    return score;
  }

  let timesPressed = 0;
  $('.hold').click(function(){
    timesPressed++;
    console.log(timesPressed)
    if (timesPressed === 2) {
      //when players are set on holding the dice they want to keep they press "keep" button. when keep is pressed twice run winCondition()
      winCondition();
    }
  })

  function winCondition(hand){
    let combo1 = moveDices1;
    let combo2 = moveDices2;
    console.log("this is combo1:", combo1, "this is combo2:", combo2)
    if (combo1 > combo2) {
      alert("P1 WINS");
    } else if (combo2 > combo1) {
      alert("P2 WINS");
    } else {
      winningHand();
    }
  }

  // WIN CONDITION FUNCTION IS IF PLAYER GETS HIGHER COMBO. IF SAME TYPE OF COMBO (COMPARING PAIRS ETC) RUN WINNINGHAND FUNCTION.

  let handScore = function(hand) {
    //handScore is a helper function of winningHand
    //also used handScore to grab arrayOf random and all the way up top.
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
  //Only use this winningHand function when dices have the same combination. Example two full houses.
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
  }

  $('#restart').click(function(){
    $('.dice1').html('').remove();
    $('.dice2').html('').remove();
    $('#board1').html('');
    $('#board2').html('');
    $('#score').html('');
  })

})














//** MUMBO JUMBO BELOW ***

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


