let maximum = parseInt(prompt("enter the maximum number"));
if(!maximum) {
	maximum = parseInt(prompt("enter the valid number"));
}

let targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum)