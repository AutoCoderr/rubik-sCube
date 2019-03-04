function TwoFirstLayer() {
	this.countRotate = 0;
	this.callback = null;
	this.nb = 0;

	this.twoFirstLayer = (callback) => {
		if (typeof(callback) == "function") {
			this.callback = callback;
		}
		const color = rubik[facePos.bottom][1][1];
		this.placeCells(color);
	}

	this.parcourtLine = (color) => {
		if (this.twoFirstLayerDone()) {
			if (this.callback != null) {
				this.callback();
			}
			return;
		}
		if (this.nb >= 50) {
			if (!DOMEnable) {
				setRubikFromDOM();
				DOMEnable = true;
			}
			alert("Echec de résolution du rubik's cube");
			return;
		}
		this.nb += 1;

		execAlgoRec(0,convertCode("U'"), () => {
			this.countRotate += 1;
			if (this.countRotate == 4) {
				this.countRotate = 0;
				execAlgoRec(0,convertCode("Y U'"), () => {
					this.placeCells(color);
				});
			} else {
				this.placeCells(color);
			}
		});
	}

	this.placeCells = (color)  => {
		const frontFace = rubik[facePos.front];
		const bottomFace = rubik[facePos.bottom];
		const topFace = rubik[facePos.top];
		const leftFace = rubik[facePos.left];
		const rightFace = rubik[facePos.right];
		const backFace = rubik[facePos.back];

		if (frontFace[0][2] == rightFace[1][1] & //coins rouge blanc bleu
			rightFace[0][0] == frontFace[1][1] &
			topFace[2][2] == color) {
			if (frontFace[1][2] == frontFace[1][1] &
				rightFace[1][0] == rightFace[1][1]) {
				execAlgoRec(0,convertCode("R U R' U'  R U R' U'  R U R'"), () => {
					this.placeCells(color);
				});
			} else if (frontFace[1][2] == rightFace[1][1] &
					   rightFace[1][0] == frontFace[1][1]) {
				execAlgoRec(0,convertCode("R U' R'  d R' U R"), () => {
					this.placeCells(color);
				});
			} else if (topFace[2][1] == frontFace[1][1] &
					   frontFace[0][1] == rightFace[1][1]) {
				execAlgoRec(0,convertCode("R U R' U' U'  R U R' U'  R U R'"), () => {
					this.placeCells(color);
				});
			} else if (topFace[1][2] == rightFace[1][1] &
					   rightFace[0][1] == frontFace[1][1]) {
				execAlgoRec(0,convertCode("Y'  R' U' R U  U  R' U' R U   R' U' R Y"), () => {
					this.placeCells(color);
				});
			} else if (topFace[1][0] == frontFace[1][1] &
					   leftFace[0][1] == rightFace[1][1]) {
				execAlgoRec(0,convertCode("U2 R U R'  U R U' R'"), () => {
					this.placeCells(color);
				});
			} else if (topFace[0][1] == rightFace[1][1] &
					   backFace[0][1] == frontFace[1][1]) {
				execAlgoRec(0,convertCode("U2 F' U' F  U' F' U F"), () => {
					this.placeCells(color);
				});
			} else if (topFace[0][1] == frontFace[1][1] &
				       backFace[0][1] == rightFace[1][1]) {
				execAlgoRec(0,convertCode("U R U2 R'  U R U' R'"), () => {
					this.placeCells(color);
				});
			} else if (topFace[1][0] == rightFace[1][1] &
					   leftFace[0][1] == frontFace[1][1]) {
				execAlgoRec(0,convertCode("U' F' U2 F  U' F' U F"), () => {
					this.placeCells(color);
				});
			} else if (topFace[1][2] == frontFace[1][1] &
					   rightFace[0][1] == rightFace[1][1]) {
				execAlgoRec(0,convertCode("R U2 R'  U' R U R'"), () => {
					this.placeCells(color);
				});
			} else if (frontFace[0][1] == frontFace[1][1] &
					   topFace[2][1] == rightFace[1][1]) {
				execAlgoRec(0,convertCode("F' U2 F   U F' U' F"), () => {
					this.placeCells(color);
				});
			} else {
				execAlgoRec(0,convertCode("R U R' U'  R U R' U'  R U R'"), () => {
					this.placeCells(color);
				});
			}
		} else if (frontFace[0][2] == frontFace[1][1] & //coins bleu rouge blanc
					rightFace[0][0] == color &
					topFace[2][2] == rightFace[1][1]) {
			if (frontFace[1][2] == frontFace[1][1] &
				rightFace[1][0] == rightFace[1][1]) {
				execAlgoRec(0,convertCode("U F' U F  U F' U2 F"), () => {
					this.placeCells(color);
				});
			} else if (frontFace[1][2] == rightFace[1][1] &
					   rightFace[1][0] == frontFace[1][1]) {
				execAlgoRec(0,convertCode("U F' U' F  d' F U F'"), () => {
					this.placeCells(color);
				});
			} else if (topFace[2][1] == rightFace[1][1] &
					   frontFace[0][1] == frontFace[1][1]) {
				execAlgoRec(0,convertCode("U' F' U F"), () => {
					this.placeCells(color);
				});
			} else if (topFace[1][2] == rightFace[1][1] &
					   rightFace[0][1] == frontFace[1][1]) {
				execAlgoRec(0,convertCode("R U' R' U  d R' U' R"), () => {
					this.placeCells(color);
				});
			} else if (topFace[0][1] == rightFace[1][1] &
					   backFace[0][1] == frontFace[1][1]) {
				execAlgoRec(0,convertCode("U F' U2 F  U F' U2 F"), () => {
					this.placeCells(color);
				});
			} else if (topFace[1][0] == rightFace[1][1] &
					   leftFace[0][1] == frontFace[1][1]) {
				execAlgoRec(0,convertCode("U F' U' F  U F' U2 F"), () => {
					this.placeCells(color);
				});
			} else if (rightFace[0][1] == rightFace[1][1] &
					   topFace[1][2] == frontFace[1][1]) {
				execAlgoRec(0,convertCode("U' R U' R' U  R U R'"), () => {
					this.placeCells(color);
				});
			} else if (frontFace[0][1] == rightFace[1][1] &
					   topFace[2][1] == frontFace[1][1]) {
				execAlgoRec(0,convertCode("U F' U2 F U'  R U R'"), () => {
					this.placeCells(color);
				});
			} else {
				execAlgoRec(0,convertCode("R U R'"), () => {
					this.placeCells(color);
				});
			}
		} else if (frontFace[0][2] == color &            // coins blanc bleu rouge
				   rightFace[0][0] == rightFace[1][1] &
				   topFace[2][2] == frontFace[1][1]) {
			if (frontFace[1][2] == frontFace[1][1] &
				rightFace[1][0] == rightFace[1][1]) {
				execAlgoRec(0,convertCode("U' R U' R'  U' R U2 R'"), () => {
					this.placeCells(color);
				});
			} else if (frontFace[1][2] == rightFace[1][1] &
					   rightFace[1][0] == frontFace[1][1]) {
				execAlgoRec(0,convertCode("U' R U R'  d R' U' R"), () => {
					this.placeCells(color);
				});
			} else if (topFace[1][2] == frontFace[1][1] &
					   rightFace[0][1] == rightFace[1][1]){
				execAlgoRec(0,convertCode("U R U' R'"), () => {
					this.placeCells(color);
				});
			} else if (frontFace[0][1] == rightFace[1][1] &
					   topFace[2][1] == frontFace[1][1]) {
				execAlgoRec(0,convertCode("F' U F U'  d' F U F'"), () => {
					this.placeCells(color);
				});
			} else if (topFace[1][0] == frontFace[1][1] &
					   leftFace[0][1] == rightFace[1][1]) {
				execAlgoRec(0,convertCode("U' R U2 R'  U' R U2 R'"), () => {
					this.placeCells(color);
				});
			} else if (topFace[0][1] == frontFace[1][1] &
					   backFace[0][1] == rightFace[1][1]) {
				execAlgoRec(0,convertCode("U' R U R'  U' R U2 R'"), () => {
					this.placeCells(color);
				});
			} else if (frontFace[0][1] == frontFace[1][1] &
					   topFace[2][1] == rightFace[1][1]) {
				execAlgoRec(0,convertCode("U F' U F U'  F' U' F"), () => {
					this.placeCells(color);
				});
			} else if (topFace[0][1] == rightFace[1][1] &
					   backFace[0][1] == frontFace[1][1]) {
				execAlgoRec(0,convertCode("U F' U' F U'  F' U' F"), () => {
					this.placeCells(color);
				});
			} else if (topFace[1][2] == rightFace[1][1] &
					   rightFace[0][1] == frontFace[1][1]) {
				execAlgoRec(0,convertCode("U' R U2 R' U  F' U' F"), () => {
					this.placeCells(color);
				});
			} else {
				execAlgoRec(0,convertCode("F' U' F"), () => {
					this.placeCells(color);
				});
			}
		} else if (frontFace[0][1] == frontFace[1][1] & // arete bleu rouge face front
				   topFace[2][1] == rightFace[1][1]) {
			if (frontFace[2][2] == frontFace[1][1] & 
				rightFace[2][0] == rightFace[1][1] &
				bottomFace[0][2] == color) {
				execAlgoRec(0,convertCode("U R U' R'   U' F' U F"), () => {
					this.placeCells(color);
				});
			} else if (frontFace[2][2] == rightFace[1][1] &
					   rightFace[2][0] == color &
					   bottomFace[0][2] == frontFace[1][1]) {
				execAlgoRec(0,convertCode("F' U F   U' F' U F"), () => {
					this.placeCells(color);
				});
			} else if (frontFace[2][2] == color &
					   rightFace[2][0] == frontFace[1][1] &
					   bottomFace[0][2] == rightFace[1][1]) {
				execAlgoRec(0,convertCode("F' U' F  U F' U' F"), () => {
					this.placeCells(color);
				});
			} else if (frontFace[0][2] == color &
					   rightFace[0][0] == rightFace[1][1] &
					   topFace[2][2] == frontFace[1][1]) {
				execAlgoRec(0,convertCode("U F' U F U'  F' U' F"), () => {
					this.placeCells(color);
				});
			} else if (frontFace[0][2] == rightFace[1][1] &
					   rightFace[0][0] == frontFace[1][1] &
					   topFace[2][2] == color) {
				execAlgoRec(0,convertCode("F' U2 F  U F' U' F"), () => {
					this.placeCells(color);
				});
			} else if (topFace[2][2] == rightFace[1][1] &
				       frontFace[0][2] == frontFace[1][1] &
				       rightFace[0][0] == color) {
				execAlgoRec(0,convertCode("U' F' U F"), () => {
					this.placeCells(color);
				});
			} else {
				execAlgoRec(0,convertCode("U' F' U F"), () => {
					this.placeCells(color);
				});
			}
		} else if (rightFace[0][1] == rightFace[1][1] & // arete rouge bleu face right
				   topFace[1][2] == frontFace[1][1]) {
			if (frontFace[2][2] == frontFace[1][1] &
				rightFace[2][0] == rightFace[1][1] &
				bottomFace[0][2] == color) {
				execAlgoRec(0,convertCode("U' F' U F  U R U' R'"), () => {
					this.placeCells(color);
				});
			} else if (frontFace[2][2] == rightFace[1][1] &
					   rightFace[2][0] == color &
					   bottomFace[0][2] == frontFace[1][1]) {
				execAlgoRec(0,convertCode("R U R'  U' R U R'"), () => {
					this.placeCells(color);
				});
			} else if (frontFace[2][2] == color &
					   rightFace[2][0] == frontFace[1][1] &
					   bottomFace[0][2] == rightFace[1][1]) {
				execAlgoRec(0,convertCode("R U' R'  U R U' R'"), () => {
					this.placeCells(color);
				});
			} else if (topFace[2][2] == rightFace[1][1] &
					   frontFace[0][2] == frontFace[1][1] &
					   rightFace[0][0] == color) {
				execAlgoRec(0,convertCode("U' R U' R' U  R U R'"), () => {
					this.placeCells(color);
				});
			} else if (frontFace[0][2] == rightFace[1][1] &
					   rightFace[0][0] == frontFace[1][1] &
					   topFace[2][2] == color) {
				execAlgoRec(0,convertCode("R U2 R'  U' R U R'"), () => {
					this.placeCells(color);
				});
			} else if (topFace[2][2] == frontFace[1][1] &
					   frontFace[0][2] == color &
					   rightFace[0][0] == rightFace[1][1]) {
				execAlgoRec(0,convertCode("U R U' R'"), () => {
					this.placeCells(color);
				});
			} else {
				execAlgoRec(0,convertCode("U R U' R'"), () => {
					this.placeCells(color);
				});
			}
		} else if (frontFace[1][2] == rightFace[1][1] & // arete rouge bleu (droite)
				   rightFace[1][0] == frontFace[1][1]) {
			if (frontFace[2][2] == frontFace[1][1] &
				rightFace[2][0] == rightFace[1][1] &
				bottomFace[0][2] == color) {
				execAlgoRec(0,convertCode("R U' R' d R' U2 R  U R' U2 R"), () => {
					this.placeCells(color);
				});
			} else if (frontFace[2][2] == rightFace[1][1] &
					   rightFace[2][0] == color &
					   bottomFace[0][2] == frontFace[1][1]) {
				execAlgoRec(0,convertCode("R U R' U' R U' R'  U d R' U' R"), () => {
					this.placeCells(color);
				});
			} else if (frontFace[2][2] == color &
					   rightFace[2][0] == frontFace[1][1] &
					   bottomFace[0][2] == rightFace[1][1]) {
				execAlgoRec(0,convertCode("R U' R' d R' U' R  U' R' U' R"), () => {
					this.placeCells(color);
				});
			} else {
				execAlgoRec(0,convertCode("R U' R' d R' U2 R  U R' U2 R"), () => {
					this.placeCells(color);
				});
			}
		} else if (frontFace[1][2] == frontFace[1][1] &  // arete bleu rouge (droite)
				   rightFace[1][0] == rightFace[1][1]) {
			if (frontFace[2][2] == rightFace[1][1] &
				rightFace[2][0] == color &
				bottomFace[0][2] == frontFace[1][1]) {
				execAlgoRec(0,convertCode("R U' R' U R U2 R'  U R U' R'"), () => {
					this.placeCells(color);
				});
			} else if (frontFace[2][2] == color &
					   rightFace[2][0] == frontFace[1][1] &
					   bottomFace[0][2] == rightFace[1][1]) {
				execAlgoRec(0,convertCode("R U' R' U' R U R'  U' R U2 R'"), () => {
					this.placeCells(color);
				});
			} else {
				this.parcourtLine(color);
			}
		} else {
			this.parcourtLine(color);
		}
	}

	this.twoFirstLayerDone = () => {
		const frontFace = rubik[facePos.front];
		const bottomFace = rubik[facePos.bottom];
		const leftFace = rubik[facePos.left];
		const rightFace = rubik[facePos.right];
		const backFace = rubik[facePos.back];

		const faceList = [frontFace,leftFace,rightFace,backFace];

		for (let i=0;i<faceList.length;i++) {
			if (faceList[i][2][0] != faceList[i][1][1] | faceList[i][2][1] != faceList[i][1][1] | faceList[i][2][2] != faceList[i][1][1] |
				faceList[i][1][0] != faceList[i][1][1] | faceList[i][1][2] != faceList[i][1][1]) {
				return false;
			}
		}
		if (bottomFace[0][0] == bottomFace[1][1] & bottomFace[0][1] == bottomFace[1][1] & bottomFace[0][2] == bottomFace[1][1] &
			bottomFace[1][0] == bottomFace[1][1] & bottomFace[1][2] == bottomFace[1][1] &
			bottomFace[2][0] == bottomFace[1][1] & bottomFace[2][1] == bottomFace[1][1] & bottomFace[2][2] == bottomFace[1][1]) {
			return true;
		} else {
			return false;
		}
	}
}