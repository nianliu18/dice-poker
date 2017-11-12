$(document).ready(function() {

  $('.game-container').hide();

  $('#starting').click(function() {
    $('.game-container').show();
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


  function player1() {
    let rebuttal = 2;
  }



  $('#roll-but1').click(function() {
    //find elements in handbox
    let hand = $('#handBox1').children().length;
    console.log(hand);
    //if handbox has ele subtract from 5.
    let diceToRoll = 5 - hand;
    //set dice rolled to zero
    let diceRolled = 0;
    let board = document.getElementById('board1');
    if (board.children.length > 0) {
      //innerHTML = blank
      board.innerHTML = null;
    }

    for (let i = 0; i < diceToRoll; i++) {
      let div = document.createElement('div');
      div.setAttribute('class', 'dice1');
      let roll = Math.floor(Math.random()*6)+1;
      diceRolled++
      //for loop will create two more dices to roll if we dont clear top with board.innerHTML = null;
      div.innerHTML = roll;
      board.appendChild(div);
    }
    computeTurn();
    moveDices1();
  })

  function moveDices1() {
    let dices = $('.dice1');
    console.log(dices);
    for (let i = 0; i < dices.length; i++) {
      dices[i].addEventListener("click", function() {
        $('#handBox1').append(dices[i]);
      })
    }
  }

  $('#roll-but2').click(function() {
    let hand = $('#handBox2').children().length;
    console.log(hand);
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
      //for loop will create two more dices to roll if we dont clear top with board.innerHTML = null;
      div.innerHTML = roll;
      board.appendChild(div);
    }
    computeTurn();
    moveDices2();
  })

  function moveDices2() {
    let dices = $('.dice2');
    console.log(dices);
    for (let i = 0; i < dices.length; i++) {
      dices[i].addEventListener("click", function() {
        $('#handBox2').append(dices[i]);
      })
    }
  }
    const diceRank = {
    '1': 7,
    '6': 6,
    '5': 5,
    '4': 4,
    '3': 3,
    '2': 2
  }




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

  // let pairs = 0;
  // let threes = 0;
  // let fours = 0;
  // let fives = 0;
  // switch(checkForMatch(array)) {
  //   case 2:
  //     pairs++;
  //     break;
  //   case 3:
  //     threes++;
  //     break;
  //   case 4:
  //     fours++;
  //     break;
  //   case 5:
  //     fives++
  //     break;
  //     if (pairs === 1) {

  //     }
  // }










