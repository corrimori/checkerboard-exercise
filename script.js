'use strict';

var body = document.getElementsByTagName('body')[0];

let makeRandomColor = function() {
  let randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
}

for (var j = 0; j < 8; j++) {
    // draws ODD row, start with red square
    if (j % 2 !== 0) {
      for (var i = 0; i < 8; i++) {
        var div = document.createElement('div');
        var randomColor = "#"+((1<<24)*Math.random()|0).toString(16)

        div.style.float = 'left';
        div.style.width = '12.5%';
        div.style.paddingBottom = '12.5%';

        if (i % 2 === 0) {
          div.style.backgroundColor = randomColor;
        } else {
          div.style.backgroundColor = randomColor;
        }
        body.appendChild(div);
      }
    } else { // draws EVEN row, start with black square
      for (var i = 0; i < 8; i++) {
        var div = document.createElement('div');
        var randomColor = "#"+((1<<24)*Math.random()|0).toString(16)

        div.style.float = 'left';
        div.style.width = '12.5%';
        div.style.paddingBottom = '12.5%';

        if (i % 2 === 0) {
          div.style.backgroundColor = randomColor;
        } else {
          div.style.backgroundColor = randomColor;
        }
        body.appendChild(div);
      }
    }
  }


  // generate a random color
  // let randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
  // console.log(randomColor);
  // '#'+Math.random().toString(16).substr(-6);


//
// } else { // draws EVEN row, start with black square
//   for (var i = 0; i < 8; i++) {
//     var div = document.createElement('div');
//
//     div.style.float = 'left';
//     div.style.width = '12.5%';
//     div.style.paddingBottom = '12.5%';
//
//     if (i % 2 === 0) {
//       div.style.backgroundColor = 'black';
//     } else {
//       div.style.backgroundColor = 'red';
//     }
//     body.appendChild(div);
//   }
// }
// }
