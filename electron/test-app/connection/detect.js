const { create, createReportList } = require('./modules/canvas.js');
const { name, draw, reportArea, reportPerimeter } = require('./modules/square.js');
const { randomSquare } = require('./modules/square.js');

let myCanvas = create('myCanvas', document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = draw(myCanvas.ctx, 50, 50, 100, 'blue');
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);

// Use the default
let square2 = randomSquare(myCanvas.ctx);