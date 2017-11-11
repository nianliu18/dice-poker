$(document).ready(function() {

  $('.game-container').hide();

  $('#starting').click(function() {
    $('.game-container').show();
    $('.start-container').hide();

  })

  // let playerTurn = 0;
  // let computeTurn = function(event) {
  //   if (playerTurn % 2 === 0) {
  //     $('#status1').css('font-color', 'red').html("Player Ones Turn");
  //     $('#status2').css('font-color', 'white');
  //     playerTurn++;
  //   } else if (playerTurn % 2 !== 0) {
  //     $('#status2').css('font-color', 'red').html("Player Twos Turn");
  //     $('#status1').css('font-color', 'white');
  //     playerTurn++;
  //   }
  // }

  // function addEvent(){
  //   $('#roll-but1').addEventListener('click', computeTurn);
  //   $('#roll-but2').addEventListener('click', computeTurn);
  // };
  // addEvent();

  $('#roll-but1').click(function() {
    let p1Array = [];
    $('.dices1').each(function(index, die) {
      //function with element die at current index for each class in $('.dices1')**
      let dice = Math.floor(Math.random()*6)+1;
      p1Array.push(dice);
      $(die).html(dice);
    })
    checkForMatch(p1Array);
    moveDices1();
  })

  // function moveDices1() {
  //   let dices = $('.dices1');
  //   for (let i = 0; i < dices.length; i++) {
  //     dices[i].addEventListener("click", function() {
  //       $('#handBox1').append(dices[i]).removeClass('dices1');
  //       event.target.removeEventListener('click', moveDices1);
  //     });
  //   }
  // }

  // const diceRank = {
  //   '1': 7,
  //   '6': 6,
  //   '5': 5,
  //   '4': 4,
  //   '3': 3,
  //   '2': 2
  // }

  $('#roll-but2').click(function() {
    let p2Array = [];
    $('.dices2').each(function(index, die) {
      let dice = Math.floor(Math.random()*6)+1;
      p2Array.push(dice);
      $(die).html(dice);
    })
    checkForMatch(p2Array);
    moveDices2();
  });

  // function moveDices() {
  //   letdices = $('.dices2');
  //   for (let i = 0; i < dices2.length; i++) {
  //     dices2[i].addEventListener('click', function(){
  //       $('#handBox2').append(dices2[i]);
  //     })
  //   }
  // }

  // let moveDices = function() {
  //   let dices2 = $('.dices2');
  //   for (let i = 0; i < dices2.length; i++) {
  //     dices2[i].addEventListener("click", function() {
  //       $('#handBox2').append(dices2[i]);
  //     });
  //   }
  // }

  // const diceRank = {
  //   '1': 7,
  //   '6': 6,
  //   '5': 5,
  //   '4': 4,
  //   '3': 3,
  //   '2': 2
  // }

  // function checkForMatch(array) {
  //   return array.reduce((tally, n) => {
  //     //the tally key is name of item(n), if never seen before
  //     //init to 1. if seen before incriment by 1.
  //     tally[n] = tally[n] + 1 || 1;
  //     return tally;
  //   }, {});
  // }

//   let dices = $('.dices1');
//   function addEvent(){
//     for(let i = 0; i< tiles.length; i++){
//       tiles[i].addEventListener('click', computeTurn);
//     }
//   };
//   addEvent();
// });











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










