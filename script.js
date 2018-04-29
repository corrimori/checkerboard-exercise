//gradient version

'use strict';

var body = document.getElementsByTagName('body')[0];
body.style.background = 'linear-gradient(45deg, blue, white)';


for (var j = 0; j < 8; j++) {
    // draws EVEN row, start with red square
    if (j % 2 !== 0) {
      for (var i = 0; i < 8; i++) {
        var div = document.createElement('div');
        var randomColor = "#"+((1<<24)*Math.random()|0).toString(16)

        div.style.float = 'left';
        div.style.width = '12.5%';
        div.style.paddingBottom = '12.5%';

        if (i % 2 === 0) {
          // purple rows
          // div.style.backgroundColor = 'rgba(118, 65, 216, ' + (.02 * i) + ')';
          div.style.backgroundColor = 'rgba(118, 65, 216, ' + (.08 * i) + ')';
        } else {
          div.style.backgroundColor = 'rgba(6, 85, 204, ' + (.08 * i) + ')';
          // div.style.backgroundColor = 'rgba(6, 85, 204, ' + (.08 * i) + ')';
        }
        body.appendChild(div);
      }
    } else { // draws ODD row, start with black square
      for (var i = 0; i < 8; i++) {
        var div = document.createElement('div');
        var randomColor = '#'+((1<<24)*Math.random()|0).toString(16)

        div.style.float = 'left';
        div.style.width = '12.5%';
        div.style.paddingBottom = '12.5%';

        if (i % 2 === 0) {
          div.style.backgroundColor = 'rgba(6, 85, 204, ' + (.08 * i) + ')';
          // div.style.backgroundColor = "rgba(173, 33, 99, " + (.02 * i) + ")";
        } else {
          // div.style.backgroundColor = 'rgba(66, 134, 244, + "(.05 * i)" + )';
          // div.style.backgroundColor = 'black';
          div.style.backgroundColor = 'rgba(118, 65, 216, ' + (.08 * i) + ')';

        }
        body.appendChild(div);
      }
    }
  }
