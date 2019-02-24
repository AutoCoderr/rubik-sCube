let rubik = {};

const green = 1;
const blue = 2;
const red = 3;
const orange = 4;
const white = 5;
const yellow = 6;

const colorName = {1: "green", 2: "blue", 3: "red", 4: "orange", 5: "white", 6: "yellow"};

for (let face=1;face<=6;face++) {
	rubik[face] = [];
	for (let l=0;l<3;l++) {
		rubik[face].push([]);
		for (let c=0;c<3;c++) {
			rubik[face][l].push(face);
		}
	}
}

function displayRubik() {
	const cells = $(".cube").find("td");
	for (let c=0;c<cells.length;c++) {
		const color = parseInt($(cells[c]).attr("id").split("-")[0]);
		const line = parseInt($(cells[c]).attr("id").split("-")[1]);
		const cell = parseInt($(cells[c]).attr("id").split("-")[2]);

		$(cells[c]).removeClass($(cells[c]).attr("class"));
		$(cells[c]).addClass(colorName[rubik[color][line][cell]]);
	}
}

function rotateCube(sens) {
	const faceFront = $(".front").attr("id");
	const faceBottom = $(".bottom").attr("id");
	const faceBack = $(".back").attr("id");
	const faceTop = $(".top").attr("id");
	const faceLeft = $(".left").attr("id");
	const faceRight = $(".right").attr("id");
	switch(sens) {
		case "toTop":
			rotateMat(getColorOfFace($(".left").attr("id")),"left");
			rotateMat(getColorOfFace($(".right").attr("id")),"right");

			rotateMat(getColorOfFace($(".back").attr("id")),"right");
			rotateMat(getColorOfFace($(".back").attr("id")),"right");

			rotateMat(getColorOfFace($(".top").attr("id")),"right");
			rotateMat(getColorOfFace($(".top").attr("id")),"right");

			displayRubik();

			$("#"+faceFront).removeClass("front");
			$("#"+faceFront).addClass("top");

			$("#"+faceTop).removeClass("top");
			$("#"+faceTop).addClass("back");

			$("#"+faceBack).removeClass("back");
			$("#"+faceBack).addClass("bottom");

			$("#"+faceBottom).removeClass("bottom");
			$("#"+faceBottom).addClass("front");
			break;
		case "toBottom":
			rotateMat(getColorOfFace($(".left").attr("id")),"right");
			rotateMat(getColorOfFace($(".right").attr("id")),"left");

			rotateMat(getColorOfFace($(".back").attr("id")),"right");
			rotateMat(getColorOfFace($(".back").attr("id")),"right");

			rotateMat(getColorOfFace($(".bottom").attr("id")),"right");
			rotateMat(getColorOfFace($(".bottom").attr("id")),"right");

			displayRubik();

			$("#"+faceFront).removeClass("front");
			$("#"+faceFront).addClass("bottom");

			$("#"+faceBottom).removeClass("bottom");
			$("#"+faceBottom).addClass("back");

			$("#"+faceBack).removeClass("back");
			$("#"+faceBack).addClass("top");

			$("#"+faceTop).removeClass("top");
			$("#"+faceTop).addClass("front");
			break;
		case "toRight":
			rotateMat(getColorOfFace($(".top").attr("id")),"left");
			rotateMat(getColorOfFace($(".bottom").attr("id")),"right");

			displayRubik();

			$("#"+faceFront).removeClass("front");
			$("#"+faceFront).addClass("right");

			$("#"+faceRight).removeClass("right");
			$("#"+faceRight).addClass("back");

			$("#"+faceBack).removeClass("back");
			$("#"+faceBack).addClass("left");

			$("#"+faceLeft).removeClass("left");
			$("#"+faceLeft).addClass("front");
			break;
		case "toLeft":
			rotateMat(getColorOfFace($(".top").attr("id")),"right");
			rotateMat(getColorOfFace($(".bottom").attr("id")),"left");

			displayRubik();

			$("#"+faceFront).removeClass("front");
			$("#"+faceFront).addClass("left");

			$("#"+faceLeft).removeClass("left");
			$("#"+faceLeft).addClass("back");

			$("#"+faceBack).removeClass("back");
			$("#"+faceBack).addClass("right");

			$("#"+faceRight).removeClass("right");
			$("#"+faceRight).addClass("front");
			break;
		case "rotateLeft":
			rotateMat(getColorOfFace($(".front").attr("id")),"left");
			rotateMat(getColorOfFace($(".back").attr("id")),"right");
			rotateMat(getColorOfFace($(".top").attr("id")),"left");
			rotateMat(getColorOfFace($(".bottom").attr("id")),"left");
			rotateMat(getColorOfFace($(".left").attr("id")),"left");
			rotateMat(getColorOfFace($(".right").attr("id")),"left");

			displayRubik();

			$("#"+faceTop).removeClass("top");
			$("#"+faceTop).addClass("left");

			$("#"+faceLeft).removeClass("left");
			$("#"+faceLeft).addClass("bottom");

			$("#"+faceBottom).removeClass("bottom");
			$("#"+faceBottom).addClass("right");

			$("#"+faceRight).removeClass("right");
			$("#"+faceRight).addClass("top");
			break;
		case "rotateRight":
			rotateMat(getColorOfFace($(".front").attr("id")),"right");
			rotateMat(getColorOfFace($(".back").attr("id")),"left");
			rotateMat(getColorOfFace($(".top").attr("id")),"right");
			rotateMat(getColorOfFace($(".bottom").attr("id")),"right");
			rotateMat(getColorOfFace($(".left").attr("id")),"right");
			rotateMat(getColorOfFace($(".right").attr("id")),"right");

			displayRubik();

			$("#"+faceTop).removeClass("top");
			$("#"+faceTop).addClass("right");

			$("#"+faceRight).removeClass("right");
			$("#"+faceRight).addClass("bottom");

			$("#"+faceBottom).removeClass("bottom");
			$("#"+faceBottom).addClass("left");

			$("#"+faceLeft).removeClass("left");
			$("#"+faceLeft).addClass("top");

			break;
	}

}

function rotateMat(face,sens) {
	const oldFace = rubik[face];
	const newFace = [[0,0,0],[0,0,0],[0,0,0]]
	switch(sens) {
		case "right":
			newFace[0][0] = oldFace[2][0];
			newFace[0][1] = oldFace[1][0];
			newFace[0][2] = oldFace[0][0];
			newFace[1][0] = oldFace[2][1];
			newFace[1][1] = oldFace[1][1];
			newFace[1][2] = oldFace[0][1];
			newFace[2][0] = oldFace[2][2];
			newFace[2][1] = oldFace[1][2];
			newFace[2][2] = oldFace[0][2];
			rubik[face] = newFace;
			break;
		case "left":
			newFace[0][0] = oldFace[0][2];
			newFace[0][1] = oldFace[1][2];
			newFace[0][2] = oldFace[2][2];
			newFace[1][0] = oldFace[0][1];
			newFace[1][1] = oldFace[1][1];
			newFace[1][2] = oldFace[2][1];
			newFace[2][0] = oldFace[0][0];
			newFace[2][1] = oldFace[1][0];
			newFace[2][2] = oldFace[2][0];
			rubik[face] = newFace;
			break;
	}
}

function onClick(self) {
	$("#chooseColor").empty();
	$("#chooseColor").append("<br/><br/><strong><font color='black'>Choisissez une couleur : </font></strong><br/>");
	let str = "";
	str += "<table><tr>";
	str += "<td style='width: 15px; height: 15px;' class='green' onClick='setColor(\""+$(self).attr("id")+"\",1)'></td>";
	str += "<td style='width: 15px; height: 15px;' class='blue' onClick='setColor(\""+$(self).attr("id")+"\",2)'></td>";
	str += "<td style='width: 15px; height: 15px;' class='red' onClick='setColor(\""+$(self).attr("id")+"\",3)'></td>";
	str += "<td style='width: 15px; height: 15px;' class='orange' onClick='setColor(\""+$(self).attr("id")+"\",4)'></td>";
	str += "<td style='width: 15px; height: 15px;' class='white' onClick='setColor(\""+$(self).attr("id")+"\",5)'></td>";
	str += "<td style='width: 15px; height: 15px;' class='yellow' onClick='setColor(\""+$(self).attr("id")+"\",6)'></td>";
	str += "</tr></table>";
	$("#chooseColor").append(str);
}

function setColor(id,color) {
	$("#"+id).removeClass($("#"+id).attr("class"));
	$("#"+id).addClass(colorName[color]);
	const colorB = parseInt(id.split("-")[0]);
	const line = parseInt(id.split("-")[1]);
	const cell = parseInt(id.split("-")[2]);
	rubik[colorB][line][cell] = color;
	$("#chooseColor").empty();
}

/*rubik[red][0][0] = blue;
rubik[red][0][1] = white;
rubik[red][0][2] = red;

rubik[red][1][0] = blue;
rubik[red][1][1] = red;
rubik[red][1][2] = red;

rubik[red][2][0] = blue;
rubik[red][2][1] = white;
rubik[red][2][2] = red;


rubik[white][0][0] = blue;
rubik[white][0][1] = white;
rubik[white][0][2] = red;

rubik[white][1][0] = blue;
rubik[white][1][1] = white;
rubik[white][1][2] = red;

rubik[white][2][0] = blue;
rubik[white][2][1] = white;
rubik[white][2][2] = red;


rubik[orange][0][0] = red;
rubik[orange][0][1] = white;
rubik[orange][0][2] = blue;

rubik[orange][1][0] = red;
rubik[orange][1][1] = orange;
rubik[orange][1][2] = blue;

rubik[orange][2][0] = red;
rubik[orange][2][1] = white;
rubik[orange][2][2] = blue;



rubik[green][0][0] = blue;
rubik[green][0][1] = blue;
rubik[green][0][2] = blue;

rubik[green][1][0] = blue;
rubik[green][1][1] = green;
rubik[green][1][2] = blue;

rubik[green][2][0] = blue;
rubik[green][2][1] = blue;
rubik[green][2][2] = blue;

rubik[blue][0][0] = red;
rubik[blue][0][1] = red;
rubik[blue][0][2] = red;

rubik[blue][1][0] = red;
rubik[blue][1][1] = blue;
rubik[blue][1][2] = red;

rubik[blue][2][0] = red;
rubik[blue][2][1] = red;
rubik[blue][2][2] = red;

rubik[yellow][0][0] = blue;
rubik[yellow][0][1] = white;
rubik[yellow][0][2] = red;

rubik[yellow][1][0] = blue;
rubik[yellow][1][1] = yellow;
rubik[yellow][1][2] = red;

rubik[yellow][2][0] = blue;
rubik[yellow][2][1] = white;
rubik[yellow][2][2] = red;*/


//displayRubik();

$(".cube td").click(function() {
	onClick(this);
});

function getColorOfFace(id) {

	switch(id.replace("Face","")) {
		case "green":
			return 1;
		case "blue":
			return 2;
		case "red":
			return 3;
		case "orange":
			return 4;
		case "white":
			return 5;
		case "yellow":
			return 6;
	}
}

function convertCode(code) {
	console.log("mouv code : \""+code+"\"");
	let converteds = [];
	for (let i=0;i<code.length;i++) {
		if (code[i] == "F") {
			if (i == code.length-1) {
				converteds.push({type: "mouv", val: "rotateRight"});
			} else if (code[i+1] == "'") {
				converteds.push({type: "mouv", val: "rotateLeft"});
				i += 1;
			} else if (code[i+1] == "2") {
				converteds.push({type: "mouv", val: "rotateRight"});
				converteds.push({type: "mouv", val: "rotateRight"});
				i += 1;
			} else {
				converteds.push({type: "mouv", val: "rotateRight"});
			}
		} else if (code[i] == "R") {
			if (i == code.length-1) {
				converteds.push({type: "mouv", val: "rightToUp"});
			} else if (code[i+1] == "'") {
				converteds.push({type: "mouv", val: "rightToDown"});
				i += 1;
			} else if (code[i+1] == "2") {
				converteds.push({type: "mouv", val: "rightToUp"});
				converteds.push({type: "mouv", val: "rightToUp"});
				i += 1;
			} else {
				converteds.push({type: "mouv", val: "rightToUp"});
			}
		} else if (code[i] == "U") {
			if (i == code.length-1) {
				converteds.push({type: "mouv", val: "topToLeft"});
			} else if (code[i+1] == "'") {
				converteds.push({type: "mouv", val: "topToRight"});
				i += 1;
			} else if (code[i+1] == "2") {
				converteds.push({type: "mouv", val: "topToLeft"});
				converteds.push({type: "mouv", val: "topToLeft"});
				i += 1;
			} else {
				converteds.push({type: "mouv", val: "topToLeft"});
			}
		} else if (code[i] == "L") {
			if (i == code.length-1) {
				converteds.push({type: "mouv", val: "leftToDown"});
			} else if (code[i+1] == "'") {
				converteds.push({type: "mouv", val: "leftToUp"});
				i += 1;
			} else if (code[i+1] == "2") {
				converteds.push({type: "mouv", val: "leftToDown"});
				converteds.push({type: "mouv", val: "leftToDown"});
				i += 1;
			} else {
				converteds.push({type: "mouv", val: "leftToDown"});
			}
		} else if (code[i] == "D") {
			if (i == code.length-1) {
				converteds.push({type: "mouv", val: "bottomToRight"});
			} else if (code[i+1] == "'") {
				converteds.push({type: "mouv", val: "bottomToLeft"});
				i += 1;
			} else if (code[i+1] == "2") {
				converteds.push({type: "mouv", val: "bottomToRight"});
				converteds.push({type: "mouv", val: "bottomToRight"});
				i += 1;
			} else {
				converteds.push({type: "mouv", val: "bottomToRight"});
			}
		} else if (code[i] == "B") {
			if (i == code.length-1) {
				converteds.push({type: "mouv", val: "rotateLeftBack"});
			} else if (code[i+1] == "'") {
				converteds.push({type: "mouv", val: "rotateRightBack"});
				i += 1;
			} else if (code[i+1] == "2") {
				converteds.push({type: "mouv", val: "rotateLeftBack"});
				converteds.push({type: "mouv", val: "rotateLeftBack"});
				i += 1;
			} else {
				converteds.push({type: "mouv", val: "rotateLeftBack"});
			}
		} else if (code[i] == "M") {
			if (i == code.length-1) {
				converteds.push({type: "mouv", val: "middleToDown"});
			} else if (code[i+1] == "'") {
				converteds.push({type: "mouv", val: "middleToUp"});
				i += 1;
			} else if (code[i+1] == "2") {
				converteds.push({type: "mouv", val: "middleToDown"});
				converteds.push({type: "mouv", val: "middleToDown"});
				i += 1;
			} else {
				converteds.push({type: "mouv", val: "middleToDown"});
			}
		} else if (code[i] == "E") {
			if (i == code.length-1) {
				converteds.push({type: "mouv", val: "middleToRight"});
			} else if (code[i+1] == "'") {
				converteds.push({type: "mouv", val: "middleToLeft"});
				i += 1;
			} else if (code[i+1] == "2") {
				converteds.push({type: "mouv", val: "middleToRight"});
				converteds.push({type: "mouv", val: "middleToRight"});
				i += 1;
			} else {
				converteds.push({type: "mouv", val: "middleToRight"});
			}
		} else if (code[i] == "d") {
			if (i == code.length-1) {
				converteds.push({type: "mouv", val: "middleToRight"});
				converteds.push({type: "mouv", val: "bottomToRight"});
			} else if (code[i+1] == "'") {
				converteds.push({type: "mouv", val: "middleToLeft"});
				converteds.push({type: "mouv", val: "bottomToLeft"});
				i += 1;
			} else if (code[i+1] == "2") {
				converteds.push({type: "mouv", val: "middleToRight"});
				converteds.push({type: "mouv", val: "bottomToRight"});
				converteds.push({type: "mouv", val: "middleToRight"});
				converteds.push({type: "mouv", val: "bottomToRight"});
				i += 1;
			} else {
				converteds.push({type: "mouv", val: "middleToRight"});
				converteds.push({type: "mouv", val: "bottomToRight"});
			}
		} else if (code[i] == "X") {
			if (i == code.length-1) {
				converteds.push({type: "rotate", val: "toTop"});
			} else if (code[i+1] == "'") {
				converteds.push({type: "rotate", val: "toBottom"});
				i += 1;
			} else if (code[i+1] == "2") {
				converteds.push({type: "rotate", val: "toTop"});
				converteds.push({type: "rotate", val: "toTop"});
				i += 1;
			} else {
				converteds.push({type: "rotate", val: "toTop"});
			}
		} else if (code[i] == "Y") {
			if (i == code.length-1) {
				converteds.push({type: "rotate", val: "toLeft"});
			} else if (code[i+1] == "'") {
				converteds.push({type: "rotate", val: "toRight"});
				i += 1;
			} else if (code[i+1] == "2") {
				converteds.push({type: "rotate", val: "toLeft"});
				converteds.push({type: "rotate", val: "toLeft"});
				i += 1;
			} else {
				converteds.push({type: "rotate", val: "toLeft"});
			}
		} else if (code[i] == "Z") {
			if (i == code.length-1) {
				converteds.push({type: "rotate", val: "rotateRight"});
			} else if (code[i+1] == "'") {
				converteds.push({type: "rotate", val: "rotateLeft"});
				i += 1;
			} else if (code[i+1] == "2") {
				converteds.push({type: "rotate", val: "rotateRight"});
				converteds.push({type: "rotate", val: "rotateRight"});
				i += 1;
			} else {
				converteds.push({type: "rotate", val: "rotateRight"});
			}
		}
	}
	return converteds;
}

function opposedColor(color) {
	switch(color) {
		case 1:
			return 2;
		case 2:
			return 1;
		case 3:
			return 4;
		case 4:
			return 3;
		case 5:
			return 6;
		case 6:
			return 5;
	}
	return null;
}

function leftColor(color, bottom) {
	if (colorName[color] == "green") {
		if (colorName[bottom] == "white") {
			return 3; //red
		}
		if (colorName[bottom] == "yellow") {
			return 4; //orange
		}
		if (colorName[bottom] == "red") {
			return 6; //yellow
		}
		if (colorName[bottom] == "orange") {
			return 5; //white
		}
	} else if (colorName[color] == "blue") {
		if (colorName[bottom] == "white") {
			return 4; //orange
		}
		if (colorName[bottom] == "yellow") {
			return 3; //red
		}
		if (colorName[bottom] == "red") {
			return 5; //white
		}
		if (colorName[bottom] == "orange") {
			return 6; //yellow
		}
	} else if (colorName[color] == "red") {
		if (colorName[bottom] == "white") {
			return 2; //blue
		}
		if (colorName[bottom] == "yellow") {
			return 1; //green
		}
		if (colorName[bottom] == "green") {
			return 5; //white
		}
		if (colorName[bottom] == "blue") {
			return 6; //yellow
		}
	} else if (colorName[color] == "orange") {
		if (colorName[bottom] == "white") {
			return 1; //green
		}
		if (colorName[bottom] == "yellow") {
			return 2; //blue
		}
		if (colorName[bottom] == "blue") {
			return 5; //white
		}
		if (colorName[bottom] == "green") {
			return 6; //yellow
		}
	} else if (colorName[color] == "white") {
		if (colorName[bottom] == "green") {
			return 4; // orange
		}
		if (colorName[bottom] == "blue") {
			return 3; //red
		}
		if (colorName[bottom] == "orange") {
			return 2; //blue
		}
		if (colorName[bottom] == "red") {
			return 1; //green
		}
	} else if (colorName[color] == "yellow") {
		if (colorName[bottom] == "green") {
			return 3; // red
		}
		if (colorName[bottom] == "blue") {
			return 4; //orange
		}
		if (colorName[bottom] == "orange") {
			return 1; //green
		}
		if (colorName[bottom] == "red") {
			return 2; //blue
		}
	}
	return null;
}

function rightColor(color, bottom) {
	return opposedColor(leftColor(color, bottom));
}