function melange() {
	const mouvs = ["leftToUp","leftToDown","middleToUp","middleToDown","rightToUp","rightToDown","topToLeft","topToRight","middleToLeft","middleToRight","bottomToLeft","bottomToRight","rotateLeft","rotateRight","rotateLeftBack","rotateRightBack"];
	const deplaces = ["toTop","toBottom","toRight","toLeft","rotateLeft","rotateRight"];
	melangeRec(0,mouvs,deplaces);
}

function melangeRec(i,mouvs,deplaces) {
	if (i < 50) {
		if (Math.round(Math.random()*4) == 3) {
			rotateCube(deplaces[Math.round(Math.random()*(deplaces.length-1))]);
		} else {
			mouvements(mouvs[Math.round(Math.random()*(mouvs.length-1))]);
		}
		setTimeout(function () {
			melangeRec(i+1,mouvs,deplaces);
		},100);
	}
}

function algos() {
	let mouvs = [];
	const algo = $("#algos").val();
	switch(algo) {
		case "algoAreteToRight":
			mouvs.push({type: "mouv", val: "bottomToLeft"});
			mouvs.push({type: "mouv", val: "rightToDown"});
			mouvs.push({type: "mouv", val: "bottomToRight"});
			mouvs.push({type: "mouv", val: "rightToUp"});
			mouvs.push({type: "mouv", val: "bottomToRight"});
			mouvs.push({type: "mouv", val: "rotateRight"});
			mouvs.push({type: "mouv", val: "bottomToLeft"});
			mouvs.push({type: "mouv", val: "rotateLeft"});
			execAlgoRec(0,mouvs);
			break;
		case "algoAreteToLeft":
			mouvs.push({type: "mouv", val: "bottomToRight"});
			mouvs.push({type: "mouv", val: "leftToDown"});
			mouvs.push({type: "mouv", val: "bottomToLeft"});
			mouvs.push({type: "mouv", val: "leftToUp"});
			mouvs.push({type: "mouv", val: "bottomToLeft"});
			mouvs.push({type: "mouv", val: "rotateLeft"});
			mouvs.push({type: "mouv", val: "bottomToRight"});
			mouvs.push({type: "mouv", val: "rotateRight"});
			execAlgoRec(0,mouvs);
			break;
		case "createCroixFromBarre":
			mouvs.push({type: "mouv", val: "rotateRight"});
			mouvs.push({type: "mouv", val: "rightToUp"});
			mouvs.push({type: "mouv", val: "topToLeft"});
			mouvs.push({type: "mouv", val: "rightToDown"});
			mouvs.push({type: "mouv", val: "topToRight"});
			mouvs.push({type: "mouv", val: "rotateLeft"});
			execAlgoRec(0,mouvs);
			break;
		case "createCroixFromVirgule":
			mouvs.push({type: "mouv", val: "rotateRight"});
			mouvs.push({type: "mouv", val: "topToLeft"});
			mouvs.push({type: "mouv", val: "rightToUp"});
			mouvs.push({type: "mouv", val: "topToRight"});
			mouvs.push({type: "mouv", val: "rightToDown"});
			mouvs.push({type: "mouv", val: "rotateLeft"});
			execAlgoRec(0,mouvs);
			break;
		case "orienteCroix":
			mouvs.push({type: "mouv", val: "rightToUp"});
			mouvs.push({type: "mouv", val: "topToLeft"});
			mouvs.push({type: "mouv", val: "topToLeft"});
			mouvs.push({type: "mouv", val: "rightToDown"});
			mouvs.push({type: "mouv", val: "topToRight"});
			mouvs.push({type: "mouv", val: "rightToUp"});
			mouvs.push({type: "mouv", val: "topToRight"});
			mouvs.push({type: "mouv", val: "rightToDown"});
			execAlgoRec(0,mouvs);
			break;
		case "placeCoins":
			mouvs.push({type: "mouv", val: "leftToUp"});
			mouvs.push({type: "mouv", val: "topToLeft"});
			mouvs.push({type: "mouv", val: "rightToUp"});
			mouvs.push({type: "mouv", val: "topToRight"});
			mouvs.push({type: "mouv", val: "leftToDown"});
			mouvs.push({type: "mouv", val: "topToLeft"});
			mouvs.push({type: "mouv", val: "rightToDown"});
			mouvs.push({type: "mouv", val: "topToRight"});
			execAlgoRec(0,mouvs);
			break;
		case "orientCoins":
			mouvs.push({type: "mouv", val: "rightToUp"});
			mouvs.push({type: "mouv", val: "topToLeft"});
			mouvs.push({type: "mouv", val: "topToLeft"});
			mouvs.push({type: "mouv", val: "rightToDown"});
			mouvs.push({type: "mouv", val: "topToRight"});
			mouvs.push({type: "mouv", val: "rightToUp"});
			mouvs.push({type: "mouv", val: "topToRight"});
			mouvs.push({type: "mouv", val: "rightToDown"});

			mouvs.push({type: "mouv", val: "leftToUp"});
			mouvs.push({type: "mouv", val: "topToLeft"});
			mouvs.push({type: "mouv", val: "topToLeft"});
			mouvs.push({type: "mouv", val: "leftToDown"});
			mouvs.push({type: "mouv", val: "topToLeft"});
			mouvs.push({type: "mouv", val: "leftToUp"});
			mouvs.push({type: "mouv", val: "topToLeft"});
			mouvs.push({type: "mouv", val: "leftToDown"});
			execAlgoRec(0,mouvs);
			break;
		case "fun":
			execAlgoRec(0,convertCode("D'R DR' D'R DR' D'R DR' D'R DR' D'R DR' D'R DR'"));
			break;
		case "createCroix":
			execAlgoRec(0,convertCode("X'"),() => {
				new CreateCroix().createCroix(() => {
					execAlgoRec(0,convertCode("X"), () => {
						alert("Croix créé avec succès!")
					});
				});
			})
			break;
		case "twoFirstLayer":
			execAlgoRec(0,convertCode("X'"),() => {
				new TwoFirstLayer().twoFirstLayer(() => {
					execAlgoRec(0,convertCode("X"), () => {
						alert("Deux premières lignes créées avec succès!")
					});
				});
			})
			break;
	}
}

function execAlgoRec(i,mouvs,callback) {
	if (i < mouvs.length) {
		if (mouvs[i].type == "mouv") {
			mouvements(mouvs[i].val);
		} else if (mouvs[i].type == "rotate") {
			rotateCube(mouvs[i].val);
		}
		setTimeout(function () {
			execAlgoRec(i+1,mouvs,callback);
		},100);
	} else if (typeof(callback) == "function") {
		setTimeout(function () {
			callback();
		},100);
	}
}

function mouvements(mouvement) {
	let newFrontFace = rubik[getColorOfFace($(".front").attr("id"))];
	let newLeftFace = rubik[getColorOfFace($(".left").attr("id"))];
	let newRightFace = rubik[getColorOfFace($(".right").attr("id"))];
	let newTopFace = rubik[getColorOfFace($(".top").attr("id"))];
	let newBottomFace = rubik[getColorOfFace($(".bottom").attr("id"))];
	let newBackFace = rubik[getColorOfFace($(".back").attr("id"))];

	const oldFrontFace = copyFace(newFrontFace);
	const oldLeftFace = copyFace(newLeftFace);
	const oldRightFace = copyFace(newRightFace);
	const oldTopFace = copyFace(newTopFace);
	const oldBottomFace = copyFace(newBottomFace);
	const oldBackFace = copyFace(newBackFace);
	switch(mouvement) {
		case "leftToUp":
			newFrontFace[0][0] = oldBottomFace[0][0];
			newFrontFace[1][0] = oldBottomFace[1][0];
			newFrontFace[2][0] = oldBottomFace[2][0];

			newTopFace[0][0] = oldFrontFace[0][0];
			newTopFace[1][0] = oldFrontFace[1][0];
			newTopFace[2][0] = oldFrontFace[2][0];

			newBackFace[0][2] = oldTopFace[2][0];
			newBackFace[1][2] = oldTopFace[1][0];
			newBackFace[2][2] = oldTopFace[0][0];

			newBottomFace[0][0] = oldBackFace[2][2];
			newBottomFace[1][0] = oldBackFace[1][2];
			newBottomFace[2][0] = oldBackFace[0][2];

			rotateMat(getColorOfFace($(".left").attr("id")),"left");

			displayRubik();
			break;
		case "leftToDown":
			newFrontFace[0][0] = oldTopFace[0][0];
			newFrontFace[1][0] = oldTopFace[1][0];
			newFrontFace[2][0] = oldTopFace[2][0];

			newBottomFace[0][0] = oldFrontFace[0][0];
			newBottomFace[1][0] = oldFrontFace[1][0];
			newBottomFace[2][0] = oldFrontFace[2][0];

			newBackFace[0][2] = oldBottomFace[2][0];
			newBackFace[1][2] = oldBottomFace[1][0];
			newBackFace[2][2] = oldBottomFace[0][0];

			newTopFace[0][0] = oldBackFace[2][2];
			newTopFace[1][0] = oldBackFace[1][2];
			newTopFace[2][0] = oldBackFace[0][2];

			rotateMat(getColorOfFace($(".left").attr("id")),"right");

			displayRubik();
			break;
		case "middleToUp":
			newFrontFace[0][1] = oldBottomFace[0][1];
			newFrontFace[1][1] = oldBottomFace[1][1];
			newFrontFace[2][1] = oldBottomFace[2][1];

			newTopFace[0][1] = oldFrontFace[0][1];
			newTopFace[1][1] = oldFrontFace[1][1];
			newTopFace[2][1] = oldFrontFace[2][1];

			newBackFace[0][1] = oldTopFace[2][1];
			newBackFace[1][1] = oldTopFace[1][1];
			newBackFace[2][1] = oldTopFace[0][1];

			newBottomFace[0][1] = oldBackFace[2][1];
			newBottomFace[1][1] = oldBackFace[1][1];
			newBottomFace[2][1] = oldBackFace[0][1];

			displayRubik();
			break;
		case "middleToDown":
			newFrontFace[0][1] = oldTopFace[0][1];
			newFrontFace[1][1] = oldTopFace[1][1];
			newFrontFace[2][1] = oldTopFace[2][1];

			newBottomFace[0][1] = oldFrontFace[0][1];
			newBottomFace[1][1] = oldFrontFace[1][1];
			newBottomFace[2][1] = oldFrontFace[2][1];

			newBackFace[0][1] = oldBottomFace[2][1];
			newBackFace[1][1] = oldBottomFace[1][1];
			newBackFace[2][1] = oldBottomFace[0][1];

			newTopFace[0][1] = oldBackFace[2][1];
			newTopFace[1][1] = oldBackFace[1][1];
			newTopFace[2][1] = oldBackFace[0][1];

			displayRubik();
			break;
		case "rightToUp":
			newFrontFace[0][2] = oldBottomFace[0][2];
			newFrontFace[1][2] = oldBottomFace[1][2];
			newFrontFace[2][2] = oldBottomFace[2][2];

			newTopFace[0][2] = oldFrontFace[0][2];
			newTopFace[1][2] = oldFrontFace[1][2];
			newTopFace[2][2] = oldFrontFace[2][2];

			newBackFace[0][0] = oldTopFace[2][2];
			newBackFace[1][0] = oldTopFace[1][2];
			newBackFace[2][0] = oldTopFace[0][2];

			newBottomFace[0][2] = oldBackFace[2][0];
			newBottomFace[1][2] = oldBackFace[1][0];
			newBottomFace[2][2] = oldBackFace[0][0];

			rotateMat(getColorOfFace($(".right").attr("id")),"right");

			displayRubik();
			break;
		case "rightToDown":
			newFrontFace[0][2] = oldTopFace[0][2];
			newFrontFace[1][2] = oldTopFace[1][2];
			newFrontFace[2][2] = oldTopFace[2][2];

			newBottomFace[0][2] = oldFrontFace[0][2];
			newBottomFace[1][2] = oldFrontFace[1][2];
			newBottomFace[2][2] = oldFrontFace[2][2];

			newBackFace[0][0] = oldBottomFace[2][2];
			newBackFace[1][0] = oldBottomFace[1][2];
			newBackFace[2][0] = oldBottomFace[0][2];

			newTopFace[0][2] = oldBackFace[2][0];
			newTopFace[1][2] = oldBackFace[1][0];
			newTopFace[2][2] = oldBackFace[0][0];

			rotateMat(getColorOfFace($(".right").attr("id")),"left");

			displayRubik();
			break;
		case "topToRight":
			newFrontFace[0][0] = oldLeftFace[0][0];
			newFrontFace[0][1] = oldLeftFace[0][1];
			newFrontFace[0][2] = oldLeftFace[0][2];

			newRightFace[0][0] = oldFrontFace[0][0];
			newRightFace[0][1] = oldFrontFace[0][1];
			newRightFace[0][2] = oldFrontFace[0][2];

			newBackFace[0][0] = oldRightFace[0][0];
			newBackFace[0][1] = oldRightFace[0][1];
			newBackFace[0][2] = oldRightFace[0][2];

			newLeftFace[0][0] = oldBackFace[0][0];
			newLeftFace[0][1] = oldBackFace[0][1];
			newLeftFace[0][2] = oldBackFace[0][2];

			rotateMat(getColorOfFace($(".top").attr("id")),"left");

			displayRubik();
			break;
		case "topToLeft":
			newFrontFace[0][0] = oldRightFace[0][0];
			newFrontFace[0][1] = oldRightFace[0][1];
			newFrontFace[0][2] = oldRightFace[0][2];

			newLeftFace[0][0] = oldFrontFace[0][0];
			newLeftFace[0][1] = oldFrontFace[0][1];
			newLeftFace[0][2] = oldFrontFace[0][2];

			newBackFace[0][0] = oldLeftFace[0][0];
			newBackFace[0][1] = oldLeftFace[0][1];
			newBackFace[0][2] = oldLeftFace[0][2];

			newRightFace[0][0] = oldBackFace[0][0];
			newRightFace[0][1] = oldBackFace[0][1];
			newRightFace[0][2] = oldBackFace[0][2];

			rotateMat(getColorOfFace($(".top").attr("id")),"right");

			displayRubik();
			break;
		case "middleToRight":
			newFrontFace[1][0] = oldLeftFace[1][0];
			newFrontFace[1][1] = oldLeftFace[1][1];
			newFrontFace[1][2] = oldLeftFace[1][2];

			newRightFace[1][0] = oldFrontFace[1][0];
			newRightFace[1][1] = oldFrontFace[1][1];
			newRightFace[1][2] = oldFrontFace[1][2];

			newBackFace[1][0] = oldRightFace[1][0];
			newBackFace[1][1] = oldRightFace[1][1];
			newBackFace[1][2] = oldRightFace[1][2];

			newLeftFace[1][0] = oldBackFace[1][0];
			newLeftFace[1][1] = oldBackFace[1][1];
			newLeftFace[1][2] = oldBackFace[1][2];

			displayRubik();
			break;
		case "middleToLeft":
			newFrontFace[1][0] = oldRightFace[1][0];
			newFrontFace[1][1] = oldRightFace[1][1];
			newFrontFace[1][2] = oldRightFace[1][2];

			newLeftFace[1][0] = oldFrontFace[1][0];
			newLeftFace[1][1] = oldFrontFace[1][1];
			newLeftFace[1][2] = oldFrontFace[1][2];

			newBackFace[1][0] = oldLeftFace[1][0];
			newBackFace[1][1] = oldLeftFace[1][1];
			newBackFace[1][2] = oldLeftFace[1][2];

			newRightFace[1][0] = oldBackFace[1][0];
			newRightFace[1][1] = oldBackFace[1][1];
			newRightFace[1][2] = oldBackFace[1][2];

			displayRubik();
			break;
		case "bottomToRight":
			newFrontFace[2][0] = oldLeftFace[2][0];
			newFrontFace[2][1] = oldLeftFace[2][1];
			newFrontFace[2][2] = oldLeftFace[2][2];

			newRightFace[2][0] = oldFrontFace[2][0];
			newRightFace[2][1] = oldFrontFace[2][1];
			newRightFace[2][2] = oldFrontFace[2][2];

			newBackFace[2][0] = oldRightFace[2][0];
			newBackFace[2][1] = oldRightFace[2][1];
			newBackFace[2][2] = oldRightFace[2][2];

			newLeftFace[2][0] = oldBackFace[2][0];
			newLeftFace[2][1] = oldBackFace[2][1];
			newLeftFace[2][2] = oldBackFace[2][2];

			rotateMat(getColorOfFace($(".bottom").attr("id")),"right");

			displayRubik();
			break;
		case "bottomToLeft":
			newFrontFace[2][0] = oldRightFace[2][0];
			newFrontFace[2][1] = oldRightFace[2][1];
			newFrontFace[2][2] = oldRightFace[2][2];

			newLeftFace[2][0] = oldFrontFace[2][0];
			newLeftFace[2][1] = oldFrontFace[2][1];
			newLeftFace[2][2] = oldFrontFace[2][2];

			newBackFace[2][0] = oldLeftFace[2][0];
			newBackFace[2][1] = oldLeftFace[2][1];
			newBackFace[2][2] = oldLeftFace[2][2];

			newRightFace[2][0] = oldBackFace[2][0];
			newRightFace[2][1] = oldBackFace[2][1];
			newRightFace[2][2] = oldBackFace[2][2];

			rotateMat(getColorOfFace($(".bottom").attr("id")),"left");

			displayRubik();
			break;
		case "rotateLeft":
			newTopFace[2][0] = oldRightFace[0][0];
			newTopFace[2][1] = oldRightFace[1][0];
			newTopFace[2][2] = oldRightFace[2][0];

			newLeftFace[0][2] = oldTopFace[2][2];
			newLeftFace[1][2] = oldTopFace[2][1];
			newLeftFace[2][2] = oldTopFace[2][0];

			newBottomFace[0][0] = oldLeftFace[0][2];
			newBottomFace[0][1] = oldLeftFace[1][2];
			newBottomFace[0][2] = oldLeftFace[2][2];

			newRightFace[0][0] = oldBottomFace[0][2];
			newRightFace[1][0] = oldBottomFace[0][1];
			newRightFace[2][0] = oldBottomFace[0][0];

			rotateMat(getColorOfFace($(".front").attr("id")),"left");

			displayRubik();
			break;
		case "rotateRight":
			newTopFace[2][0] = oldLeftFace[2][2];
			newTopFace[2][1] = oldLeftFace[1][2];
			newTopFace[2][2] = oldLeftFace[0][2];

			newRightFace[0][0] = oldTopFace[2][0];
			newRightFace[1][0] = oldTopFace[2][1];
			newRightFace[2][0] = oldTopFace[2][2];

			newBottomFace[0][0] = oldRightFace[2][0];
			newBottomFace[0][1] = oldRightFace[1][0];
			newBottomFace[0][2] = oldRightFace[0][0];

			newLeftFace[0][2] = oldBottomFace[0][0];
			newLeftFace[1][2] = oldBottomFace[0][1];
			newLeftFace[2][2] = oldBottomFace[0][2];

			rotateMat(getColorOfFace($(".front").attr("id")),"right");

			displayRubik();
			break;
		case "rotateLeftBack":
			newTopFace[0][0] = oldRightFace[0][2];
			newTopFace[0][1] = oldRightFace[1][2];
			newTopFace[0][2] = oldRightFace[2][2];

			newLeftFace[0][0] = oldTopFace[0][2];
			newLeftFace[1][0] = oldTopFace[0][1];
			newLeftFace[2][0] = oldTopFace[0][0];

			newBottomFace[2][0] = oldLeftFace[0][0];
			newBottomFace[2][1] = oldLeftFace[1][0];
			newBottomFace[2][2] = oldLeftFace[2][0];

			newRightFace[0][2] = oldBottomFace[2][2];
			newRightFace[1][2] = oldBottomFace[2][1];
			newRightFace[2][2] = oldBottomFace[2][0];

			rotateMat(getColorOfFace($(".back").attr("id")),"right");

			displayRubik();
			break;
		case "rotateRightBack":
			newTopFace[0][0] = oldLeftFace[2][0];
			newTopFace[0][1] = oldLeftFace[1][0];
			newTopFace[0][2] = oldLeftFace[0][0];

			newRightFace[0][2] = oldTopFace[0][0];
			newRightFace[1][2] = oldTopFace[0][1];
			newRightFace[2][2] = oldTopFace[0][2];

			newBottomFace[2][0] = oldRightFace[2][2];
			newBottomFace[2][1] = oldRightFace[1][2];
			newBottomFace[2][2] = oldRightFace[0][2];

			newLeftFace[0][0] = oldBottomFace[2][0];
			newLeftFace[1][0] = oldBottomFace[2][1];
			newLeftFace[2][0] = oldBottomFace[2][2];

			rotateMat(getColorOfFace($(".back").attr("id")),"left");

			displayRubik();
			break;
	}
}

function copyFace(face) {
	let newFace = [[0,0,0],[0,0,0],[0,0,0]];
	for (let l=0;l<3;l++) {
		for (let c=0;c<3;c++) {
			newFace[l][c] = face[l][c];
		}
	}
	return newFace;
}