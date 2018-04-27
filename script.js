// RANDOM COLORS Version

'use strict';

var body = document.getElementsByTagName('body')[0];

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
