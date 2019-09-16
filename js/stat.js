'use strict';

var START_CLOUD_X = 100;
var START_CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var SHADOW_OFFSET = 10;
var TEXT_OFFSET = 40;
var GIST_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_OFFSET = 50;
var GIST_OFFSET = 85;
var TEXT_LINE_HEIGHT = 15;
var NAME_OFFSET = 5;

var getMaxTime = function (times) {
  var maxElement = times[0];
  for (var i = 0; i < times.length; i++) {
    if (maxElement < times[i]) {
      maxElement = times[i];
    }
  }
  return maxElement;
};


window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(START_CLOUD_X + SHADOW_OFFSET, START_CLOUD_Y + SHADOW_OFFSET, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = 'white';
  ctx.fillRect(START_CLOUD_X, START_CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', START_CLOUD_X + CLOUD_WIDTH / 3, TEXT_OFFSET);
  ctx.fillText('Список результатов', START_CLOUD_X + CLOUD_WIDTH / 3, TEXT_OFFSET + TEXT_LINE_HEIGHT);

  var maxTime = getMaxTime(times);

  for (var i = 0; i < times.length; i++) {
    var heightColumn = times[i] * GIST_HEIGHT / maxTime;
    var columnOffsetY = GIST_HEIGHT - heightColumn;
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(238, ' + (Math.random() * 100) + '%, 50%)';
    }
    ctx.fillRect(START_CLOUD_X + COLUMN_OFFSET * (i + 1) + COLUMN_WIDTH * i, START_CLOUD_Y + GIST_OFFSET + columnOffsetY, COLUMN_WIDTH, heightColumn);
    ctx.fillStyle = 'black';
    ctx.fillText(Math.floor(times[i]), START_CLOUD_X + COLUMN_OFFSET * (i + 1) + COLUMN_WIDTH * i, START_CLOUD_Y + GIST_OFFSET - TEXT_LINE_HEIGHT + columnOffsetY);
    ctx.textBaseline = 'hanging';
    ctx.fillText(names[i], START_CLOUD_X + COLUMN_OFFSET * (i + 1) + COLUMN_WIDTH * i, START_CLOUD_Y + GIST_OFFSET + columnOffsetY + heightColumn + NAME_OFFSET);
  }
};
