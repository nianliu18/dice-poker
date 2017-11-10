$(document).ready(function() {

  $('.game-container').hide();

  $('#starting').click(function() {
    $('.game-container').show();
    $('.start-container').hide();

  })


  // **Will use when comparing Value of Dice**

  // function diceRank(dice, rank) {
  //   let rank = rank.toLowerCase();
  //   if(dice === '1') {
  //     rank = 7;
  //   } else if (dice === '2') {
  //     rank = 2;
  //   } else if (dice === '3') {
  //     rank = 3;
  //   } else if (dice === '4') {
  //     rank = 4;
  //   } else if (dice === '5') {
  //     rank = 5;
  //   } else if (dice === '6') {
  //     rank = 6;
  //   }
  // }

  $('#roll-but1').click(function() {
    let p1Array = [];
    $('.dices1').each(function(index, die) {
      //function with element die at current index for each class in $('.dices1')**
      let dice = Math.floor(Math.random()*6)+1;
      p1Array.push(dice);
      $(die).html(dice);
    })
    checkXOfAKind1(p1Array);
  })

  $('#roll-but2').click(function() {
    let p2Array = [];
    $('.dices2').each(function(index, die) {
      let dice = Math.floor(Math.random()*6)+1;
      p2Array.push(dice);
      $(die).html(dice);
    })
    // checkXOfAKind2(p2Array);
  })


  function checkXOfAKind1(array) {
    let value = 1;
    //below we checking five random dices
    for(let i = 0; i < array.length; i++) {
      if (array[0] === array[i]) {
        value += 1;
      } else {
        value = 1;
      }
    }
    return value;
  }

  // function checkXOfAKind2(array) {
  //   let value = 1;
  //   let dices1 = $('.dices1').sort(sortNumber);
  //   //below we checking up to five dices
  //   for(let i = 0; i < dices1.length; i++) {
  //     if (dices1[0] === dices[i]) {
  //       value += 1;
  //     } else {
  //       value = 1;
  //     }
  //   }
  //   return value;
  // }

  function checkPairs(array) {
    if (checkXOfKind1(array) === 2) {
      $('#status1').html('Pairs');
    }
  }






  // function checkForMatch1(array){
  //   for (let i = 0; i < array.length; i++) {
  //     for (let j = i + 1; j < array.length; j++) {
  //       for (let k = j + 1; k < array.length; k++) {
  //         for (let l = k + 1; l < array.length; l++) {
  //           for (let m = l + 1; m < array.length; m++) {
  //             if(array[i] === array[j, k , l ,m]) {
  //               $('#handBox1').html(array[i] + ' ' + array[j]);
  //               $('#status1').html('Pairs!');
  //               $('.dices1')[array[i]].remove();
  //               $('.dices1')[array[j]].remove();
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }

  // function checkForMatch2(array){
  //   for (let i = 0; i < array.length; i++) {
  //     for (let j = i + 1; j < array.length; j++) {
  //       for (let k = j + 1; k < array.length; k++) {
  //         for (let l = k + 1; l < array.length; l++) {
  //           for (let m = l + 1; m < array.length; m++) {
  //             if(array[i] === array[j]) {
  //               $('#handBox2').html(array[i] + ' ' + array[j]);
  //               $('#status2').html('Pairs!');
  //               $('.dices2')[array[i]].remove();
  //               $('.dices2')[array[j]].remove();
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }

})

  // if (array[i] === array[j]) {
  //   $('#handBox'+ p).html(array[i] + ' ' + array[j]);
  //   $('.dices1')[array[i]].remove();
  //   $('.dices1')[array[j]].remove();
  // }

  // function eleCount1(array) {
  //   let combos1 = {};
  //   for (let i = 0; i < array.length; i++) {
  //     let el = array[i]
  //     if (combos1[el] === undefined) {
  //       combos1[el] === 1;
  //     } else {
  //       combos1[el] += 1;
  //     }
  //   }
  // }

  /* function grabPairs() {
    if (eleCount1(array) === 2) {
      $('#status' + p).html('Pairs!');
      $('#handBox' + p).html(... + ...);
    }
  }
















