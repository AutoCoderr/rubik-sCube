function OrientLastLayer() {
	this.callback = null;

	this.orientLastLayer = (callback) => {
		if (typeof(callback) == "function") {
			this.callback = callback;
		}
		this.orientLayer();
	}

	this.turnLayer = () => {
		execAlgoRec(0,convertCode("U'"),() => {
			this.orientLayer();
		});
	}

	this.orientLayer = () => {
		const rightFace = rubik[facePos.right];
		const leftFace = rubik[facePos.left];
		const frontFace = rubik[facePos.front];
		const backFace = rubik[facePos.back];
		const topFace = rubik[facePos.top];
		const color = topFace[1][1];

		if 
		(rightFace[0][0] == color & rightFace[0][1] == color & rightFace[0][2] == color &
		 frontFace[0][1] == color & backFace[0][1] == color &
		 leftFace[0][0] == color & leftFace[0][1] == color & leftFace[0][2] == color) {
			execAlgoRec(0,convertCode("R U B' l U l2 x' U' R' F R F'"),() => {
				this.finish();
			});
		} else if 
		(topFace[0][0] == color & topFace[0][2] == color &
		 topFace[1][0] == color & topFace[1][2] == color &
		 topFace[2][0] == color & topFace[2][2] == color &
		 frontFace[0][1] == color & backFace[0][1] == color) {
			execAlgoRec(0,convertCode("L' R U R' U' L R' F R F'"),() => {
				this.finish();
			});
		} else if 
		(backFace[0][1] == color & frontFace[0][1] == color &
		 leftFace[0][0] == color & leftFace[0][1] == color & leftFace[0][2] == color &
		 rightFace[0][0] == color & rightFace[0][1] == color & rightFace[0][2] == color) {
			execAlgoRec(0,convertCode("R U B' l U l2 x' U' R' F R F'"),() => {
				this.finish();
			});
		} else if
		(backFace[0][1] == color &
		 frontFace[0][0] == color & frontFace[0][1] == color & frontFace[0][2] == color &
		 leftFace[0][0] == color & leftFace[0][1] == color &
		 rightFace[0][1] == color & rightFace[0][2] == color) {
			execAlgoRec(0,convertCode("R' F R F' U2 R' F R y' R2 U2 R"),() => {
				this.finish();
			});
		} else if
		(topFace[2][2] == color & frontFace[0][1] == color &
		 leftFace[0][1] == color & leftFace[0][2] == color &
		 rightFace[0][1] == color & rightFace[0][2] == color &
		 backFace[0][2] == color & backFace[0][1] == color) {
			execAlgoRec(0,convertCode("y L' R2 B R' B L U2' L' B M' x'"),() => {
				this.finish();
			});
		} else if
		(backFace[0][1] == color & topFace[0][2] == color &
		 frontFace[0][0] == color & frontFace[0][1] == color &
		 leftFace[0][0] == color & leftFace[0][1] == color &
		 rightFace[0][0] == color & rightFace[0][1] == color) {
			execAlgoRec(0,convertCode("R' U2 x R' U R U' y R' U' R' U R' F z'"),() => {
				this.finish();
			});
		} else if 
		(topFace[0][0] == color & topFace[2][2] == color &
		 frontFace[0][1] == color & rightFace[0][1] == color &
		 leftFace[0][1] == color & leftFace[0][2] == color &
		 backFace[0][1] == color & backFace[0][0] == color) {
			execAlgoRec(0,convertCode("R U R' U R' F R F' U2 R' F R F'"),() => {
				this.finish();
			});
		} else if
		(topFace[0][0] == color & topFace[0][2] == color & 
		 topFace[2][0] == color & topFace[2][2] == color &
		 frontFace[0][1] == color & rightFace[0][1] == color &
		 leftFace[0][1] == color & backFace[0][1] == color) {
			execAlgoRec(0,convertCode("M' U2 M U2 M' U M U2 M' U2 M"),() => {
				this.finish();
			});
		} else if
		(topFace[0][0] == color & topFace[0][2] == color &
		 backFace[0][1] == color & frontFace[0][1] == color &
		 leftFace[0][1] == color & leftFace[0][2] == color &
		 rightFace[0][0] == color & rightFace[0][1] == color) {
			execAlgoRec(0,convertCode("R' U2 F R U R' U' y' R2 U2 x' R U x"),() => {
				this.finish();
			});
		} else if
		(topFace[2][0] == color & topFace[2][2] == color &
		 leftFace[0][1] == color & frontFace[0][1] == color & rightFace[0][1] == color &
		 backFace[0][0] == color & backFace[0][1] == color & backFace[0][2] == color) {
			execAlgoRec(0,convertCode("F R U R' U y' R' U2  R' F R F'"),() => {
				this.finish();
			});
		} else if
		(topFace[0][1] == color & topFace[2][1] == color &
		 backFace[0][2] == color & leftFace[0][1] == color & frontFace[0][0] == color &
		 rightFace[0][0] == color & rightFace[0][1] == color & rightFace[0][2] == color) {
			execAlgoRec(0,convertCode("R' U' y L' U L' y' L F L' F R"),() => {
				this.finish();
			});
		} else if
		(topFace[0][1] == color & topFace[2][1] == color &
		 leftFace[0][0] == color & leftFace[0][1] == color & leftFace[0][2] == color &
		 rightFace[0][0] == color & rightFace[0][1] == color & rightFace[0][2] == color) {
			execAlgoRec(0,convertCode("R U' y R2 D R' U2 R D' R2 d R'"),() => {
				this.finish();
			});
		} else if
		(topFace[1][0] == color & topFace[1][2] == color &
		 rightFace[0][0] == color & rightFace[0][2] == color &
		 frontFace[0][0] == color & frontFace[0][1] == color &
		 backFace[0][1] == color & backFace[0][2] == color) {
			execAlgoRec(0,convertCode("F U R U' R' U R U' R' F'"),() => {
				this.finish();
			});
		} else if
		(topFace[1][0] == color & topFace[1][2] == color &
		 frontFace[0][1] == color & backFace[0][1] == color &
		 leftFace[0][0] == color & leftFace[0][2] == color &
		 rightFace[0][0] == color & rightFace[0][2] == color) {
			execAlgoRec(0,convertCode("L' B' L U' R' U R U' R' U R L' B L"),() => {
				this.finish();
			});
		} else if
		(topFace[0][1] == color & topFace[1][0] == color &
		 topFace[1][2] == color & topFace[2][1] == color &
		 backFace[0][2] == color & frontFace[0][0] == color &
		 rightFace[0][0] == color & rightFace[0][2] == color) {
			execAlgoRec(0,convertCode("L U' R' U L' U R U R' U R"),() => {
				this.finish();
			});
		} else if
		(topFace[0][1] == color & topFace[1][0] == color &
		 topFace[1][2] == color & topFace[2][1] == color &
		 leftFace[0][0] == color & leftFace[0][2] == color &
		 rightFace[0][0] == color & rightFace[0][2] == color) {
			execAlgoRec(0,convertCode("R U R' U R U' R' U R U2 R'"),() => {
				this.finish();
			});
		} else if
		(topFace[0][1] == color & topFace[1][0] == color &
		 topFace[1][2] == color & topFace[2][1] == color & topFace[2][2] == color &
		 backFace[0][0] == color & frontFace[0][0] == color & leftFace[0][0] == color) {
			execAlgoRec(0,convertCode("L' U R U' L U R'"),() => {
				this.finish();
			});
		} else if
		(topFace[0][1] == color & topFace[1][0] == color &
		 topFace[1][2] == color & topFace[2][1] == color & topFace[2][2] == color &
		 backFace[0][2] == color & rightFace[0][2] == color & leftFace[0][2] == color) {
			execAlgoRec(0,convertCode("R' U2 R U R' U R"),() => {
				this.finish();
			});
		} else if
		(topFace[0][0] == color & topFace[0][1] == color &
		 topFace[1][0] == color & topFace[1][2] == color &
		 topFace[2][0] == color & topFace[2][1] == color &
		 backFace[0][0] == color & frontFace[0][2] == color) {
			execAlgoRec(0,convertCode("R' F' L F R F' L' F"),() => {
				this.finish();
			});
		} else if
		(topFace[0][0] == color & topFace[0][1] == color & topFace[0][2] == color &
		 topFace[1][0] == color & topFace[1][2] == color & topFace[2][1] == color &
		 frontFace[0][0] == color & frontFace[0][2] == color) {
			execAlgoRec(0,convertCode("R2 D R' U2 R D' R' U2 R'"),() => {
				this.finish();
			});
		} else if
		(topFace[0][0] == color & topFace[0][1] == color &
		 topFace[1][0] == color & topFace[1][2] == color &
		 topFace[2][1] == color & topFace[2][2] == color &
		 leftFace[0][2] == color & backFace[0][0] == color) {
			execAlgoRec(0,convertCode("R' F' L' F R F' L F"),() => {
				this.finish();
			});
		} else if
		(topFace[0][0] == color & topFace[0][2] == color &
		 topFace[1][0] == color & topFace[2][0] == color &
		 topFace[2][1] == color & topFace[2][2] == color &
		 backFace[0][1] ==color & rightFace[0][1] == color) {
			execAlgoRec(0,convertCode("M' U' M U2' M' U' M"),() => {
				this.finish();
			});
		} else if
		(topFace[0][0] == color & topFace[0][2] == color &
		 topFace[1][0] == color & topFace[1][2] == color &
		 topFace[2][0] == color & topFace[2][2] == color &
		 backFace[0][1] == color & frontFace[0][1] == color) {
			execAlgoRec(0,convertCode("L'  R U R' U'  L R' F R F'"),() => {
				this.finish();
			});
		} else if
		(topFace[0][1] == color & topFace[1][0] == color & topFace[2][0] == color &
		 frontFace[0][1] == color & frontFace[0][2] == color &
		 rightFace[0][1] == color & rightFace[0][2] == color &
		 backFace[0][2] == color) {
			execAlgoRec(0,convertCode("L F R' F R F2 L'"),() => {
				this.finish();
			});
		} else if
		(topFace[0][0] == color & topFace[0][1] == color &
		 topFace[1][0] == color & topFace[2][2] == color &
		 frontFace[0][0] == color & frontFace[0][1] == color &
		 rightFace[0][1] == color & rightFace[0][2] == color) {
			execAlgoRec(0,convertCode("F R' F' R U R U' R'"),() => {
				this.finish();
			});
		} else if
		(topFace[0][1] == color & topFace[1][0] == color & topFace[2][2] == color &
		 frontFace[0][0] == color & frontFace[0][1] == color &
		 rightFace[0][1] == color & backFace[0][0] == color &
		 leftFace[0][0] == color) {
			execAlgoRec(0,convertCode("R' U' R y' x' R U' R' F R U R' x"),() => {
				this.finish();
			});
		} else if
		(topFace[0][1] == color & topFace[1][0] == color &
		 topFace[2][0] == color & topFace[2][2] == color &
		 frontFace[0][1] == color & rightFace[0][1] == color &
		 backFace[0][0] == color & backFace[0][2] == color) {
			execAlgoRec(0,convertCode("U' R U2' R' U' R U' R2 y' R' U' R U B"),() => {
				this.finish();
			});
		} else if
		(topFace[0][1] == color & topFace[1][0] == color &
		 leftFace[0][0] == color & leftFace[0][2] == color &
		 frontFace[0][1] == color & frontFace[0][2] == color &
		 rightFace[0][1] == color & backFace[0][0] == color) {
			execAlgoRec(0,convertCode("F  R U R' U'  R U R' U'  F'"),() => {
				this.finish();
			});
		} else if
		(topFace[0][1] == color & topFace[1][0] == color &
		 backFace[0][0] == color & backFace[0][2] == color &
		 rightFace[0][1] == color & frontFace[0][0] == color &
		 frontFace[0][1] == color & frontFace[0][2] == color) {
			execAlgoRec(0,convertCode("L F' L' F U2 L2 y' L F L' F"),() => {
				this.finish();
			});
		} else if
		(topFace[0][1] == color & topFace[1][2] == color &
	     topFace[2][0] == color & topFace[2][2] == color &
	     leftFace[0][1] == color & frontFace[0][1] == color &
	     backFace[0][0] == color & backFace[0][2] == color) {
			execAlgoRec(0,convertCode("U' R' U2  R U R' U  R2 y  R U R' U'  F'"),() => {
				this.finish();
			});
		} else if
		(topFace[0][1] == color & topFace[0][2] == color & topFace[1][2] == color &
		 leftFace[0][0] == color & leftFace[0][1] == color &
		 frontFace[0][0] == color & frontFace[0][1] == color &
		 rightFace[0][0] == color) {
			execAlgoRec(0,convertCode("r U2 R' U' R U' r'"),() => {
				this.finish();
			});
		} else if
		(topFace[0][1] == color & topFace[0][2] == color &
		 topFace[1][2] == color & topFace[2][0] == color &
		 leftFace[0][1] == color & frontFace[0][1] == color &
		 rightFace[0][0] == color & backFace[0][2] == color) {
			execAlgoRec(0,convertCode("R' U2 l R U' R' U l' U2 R"),() => {
				this.finish();
			});
		} else if 
		(topFace[0][1] == color & topFace[1][2] == color &
		 rightFace[0][0] == color & rightFace[0][2] == color &
		 backFace[0][2] == color & leftFace[0][1] == color &
		 frontFace[0][0] == color & frontFace[0][1] == color) {
			execAlgoRec(0,convertCode("F' L' U' L U L' U' L U F"),() => {
				this.finish();
			});
		} else if 
		(topFace[0][1] == color & topFace[1][2] == color &
		 frontFace[0][1] == color & frontFace[0][2] == color &
		 backFace[0][0] == color & leftFace[0][0] == color &
		 leftFace[0][1] == color & leftFace[0][2] == color) {
			execAlgoRec(0,convertCode("R' F R' F' R2 U2 x' U' R U R' x"),() => {
				this.finish();
			});
		} else if
		(topFace[0][1] == color & topFace[1][2] == color &
		 backFace[0][0] == color & backFace[0][2] == color &
		 leftFace[0][1] == color & frontFace[0][0] == color &
		 frontFace[0][1] == color & frontFace[0][2] == color) {
			execAlgoRec(0,convertCode("R' F R F' U2 R2 y R' F' R F'"),() => {
				this.finish();
			});
		} else if
		(topFace[0][2] == color & topFace[1][0] == color & topFace[2][1] == color &
		 backFace[0][1] == color & backFace[0][2] == color &
		 leftFace[0][2] == color & frontFace[0][2] == color & rightFace[0][1] == color) {
			execAlgoRec(0,convertCode("R U R' y R' F R U' R' F' R"),() => {
				this.finish();
			});
		} else if
		(topFace[0][0] == color & topFace[1][0] == color &
		 topFace[2][1] == color & frontFace[0][0] == color &
		 rightFace[0][0] == color & rightFace[0][1] == color &
		 backFace[0][0] == color & backFace[0][1] == color) {
			execAlgoRec(0,convertCode("L' B' L U' R' U R L' B L"),() => {
				this.finish();
			});
		} else if
		(topFace[1][0] == color & topFace[2][1] == color & topFace[2][2] == color &
		 frontFace[0][0] == color & rightFace[0][1] == color & 
		 backFace[0][0] == color & backFace[0][1] == color &
		 leftFace[0][0] == color) {
			execAlgoRec(0,convertCode("U2 r R2' U' R U' R' U2 R U' M"),() => {
				this.finish();
			});
		} else if
		(topFace[0][0] == color & topFace[0][2] == color &
		 topFace[1][0] == color & topFace[2][1] == color &
		 rightFace[0][0] == color & rightFace[0][1] == color &
		 backFace[0][1] == color & leftFace[0][2] == color) {
			execAlgoRec(0,convertCode("x' U' R U' R2' F x  R U R' U'  R B2"),() => {
				this.finish();
			});
		} else if
		(topFace[1][2] == color & topFace[2][1] == color &
		 backFace[0][0] == color & backFace[0][1] == color & 
		 leftFace[0][0] == color & leftFace[0][1] == color &
		 leftFace[0][2] == color & frontFace[0][2] == color) {
			execAlgoRec(0,convertCode("L U' y' R' U2' R' U R U' R U2 R d' L'"),() => {
				this.finish();
			});
		} else if
		(topFace[1][2] == color & topFace[2][0] == color &
		 topFace[2][1] == color & leftFace[0][1] == color &
		 frontFace[0][2] == color & rightFace[0][2] == color &
		 backFace[0][1] == color & backFace[0][2] == color) {
			execAlgoRec(0,convertCode("U2 l' L2 U L' U L U2 L' U M"),() => {
				this.finish();
			});
		} else if
		(topFace[0][0] == color & topFace[0][2] == color &
		 topFace[1][2] == color & topFace[2][1] == color &
		 leftFace[0][1] == color & leftFace[0][2] == color &
		 rightFace[0][0] == color & backFace[0][1] == color) {
			execAlgoRec(0,convertCode("R2' U R' B' R U' R2' U l U l'"),() => {
				this.finish();
			});
		} else if
		(topFace[1][2] == color & topFace[2][1] == color &
		 topFace[2][2] == color & rightFace[0][2] == color &
		 backFace[0][1] == color & backFace[0][2] == color &
		 leftFace[0][1] == color & leftFace[0][2] == color) {
			execAlgoRec(0,convertCode("r' U2  R U R' U  r"),() => {
				this.finish();
			});
		} else if
		(topFace[0][0] == color & topFace[0][1] == color &
		 topFace[2][0] == color & topFace[2][1] == color &
		 leftFace[0][1] == color & rightFace[0][0] == color &
		 rightFace[0][1] == color & rightFace[0][2] == color) {
			execAlgoRec(0,convertCode("R U x' R U' R' U x U' R'"),() => {
				this.finish();
			});
		} else if
		(topFace[1][0] == color & topFace[1][2] == color &
		 topFace[2][0] == color & topFace[2][2] == color &
		 frontFace[0][1] == color & rightFace[0][2] == color &
		 backFace[0][1] == color & leftFace[0][0] == color) {
			execAlgoRec(0,convertCode("R U R' U'  x D' R' U R E' z'"),() => {
				this.finish();
			});
		} else if
		(topFace[1][0] == color & topFace[1][2] == color &
		 topFace[2][2] == color & leftFace[0][0] == color &
		 frontFace[0][0] == color & frontFace[0][1] == color &
		 backFace[0][0] == color & backFace[0][1] == color) {
			execAlgoRec(0,convertCode("R' F R U R' F' R y L U' L'"),() => {
				this.finish();
			});
		} else if
		(topFace[1][0] == color & topFace[1][2] == color &
		 topFace[2][0] == color & rightFace[0][2] == color &
		 frontFace[0][1] == color & frontFace[0][2] == color &
		 backFace[0][1] == color & backFace[0][2] == color) {
			execAlgoRec(0,convertCode("L F' L' U' L F L' y' R' U R"),() => {
				this.finish();
			});
		} else if
		(topFace[1][0] == color & topFace[1][2] == color &
		 topFace[2][2] == color & leftFace[0][2] == color &
		 frontFace[0][1] == color & rightFace[0][2] == color &
		 backFace[0][1] == color & backFace[0][2] == color) {
			execAlgoRec(0,convertCode("L' B' L R' U' R U L' B L"),() => {
				this.finish();
			});
		} else if
		(topFace[1][0] == color & topFace[1][2] == color &
		 topFace[2][0] == color & leftFace[0][0] == color &
		 frontFace[0][1] == color & rightFace[0][0] == color &
		 backFace[0][0] == color & backFace[0][1] == color) {
			execAlgoRec(0,convertCode("R B R' L U L' U' R B' R'"),() => {
				this.finish();
			});
		} else if
		(topFace[0][0] == color & topFace[0][1] == color &
		 topFace[1][0] == color & topFace[2][0] == color &
		 frontFace[0][1] == color & rightFace[0][0] == color &
		 rightFace[0][1] == color & rightFace[0][2] == color) {
			execAlgoRec(0,convertCode("F U R U' R' F'"),() => {
				this.finish();
			});
		} else if
		(topFace[0][1] == color & topFace[0][2] == color &
		 topFace[1][2] == color & topFace[2][2] == color &
		 backFace[0][2] == color & leftFace[0][1] == color &
		 frontFace[0][0] == color & frontFace[0][1] == color) {
			execAlgoRec(0,convertCode("R' d' L d R U' R' F' R"),() => {
				this.finish();
			});
		} else if
		(topFace[0][0] == color & topFace[0][1] == color &
		 topFace[1][0] == color & topFace[2][0] == color &
		 backFace[0][0] == color & rightFace[0][1] == color &
		 frontFace[0][1] == color & frontFace[0][2] == color) {
			execAlgoRec(0,convertCode("L d R' d' L' U L F L'"),() => {
				this.finish();
			});
		} else if
		(topFace[0][1] == color & topFace[0][2] == color &
		 topFace[1][2] == color & topFace[2][2] == color &
		 frontFace[0][1] == color & leftFace[0][0] == color &
		 leftFace[0][1] == color & leftFace[0][2] == color) {
			execAlgoRec(0,convertCode("F' U' L' U L F"),() => {
				this.finish();
			});
		} else if
		(topFace[0][2] == color & topFace[1][0] == color &
		 topFace[1][2] == color & topFace[2][2] == color &
		 backFace[0][1] == color & frontFace[0][1] == color &
		 leftFace[0][0] == color & leftFace[0][2] == color) {
			execAlgoRec(0,convertCode("F  R U R' U'  F'"),() => {
				this.finish();
			});
		} else if
		(topFace[0][2] == color & topFace[1][0] == color &
		 topFace[1][2] == color & topFace[2][2] == color &
		 frontFace[0][0] == color & frontFace[0][1] == color &
		 backFace[0][1] == color & backFace[0][2] == color) {
			execAlgoRec(0,convertCode("R U R' U'  R' F R F'"),() => {
				this.finish();
			});
		} else if
		(topFace[0][2] == color & topFace[1][2] == color &
		 topFace[2][0] == color & topFace[2][1] == color &
		 frontFace[0][2] == color & backFace[0][1] == color &
		 leftFace[0][0] == color & leftFace[0][1] == color) {
			execAlgoRec(0,convertCode("L U L' U L U' L' U' y2 R' F R F'"),() => {
				this.finish();
			});
		} else if
		(topFace[0][0] == color & topFace[1][0] == color &
		 topFace[2][1] == color & topFace[2][2] == color &
		 backFace[0][1] == color & frontFace[0][0] == color &
		 rightFace[0][1] == color & rightFace[0][2] == color) {
			execAlgoRec(0,convertCode("R' U' R U' R' U R U y F R' F' R"),() => {
				this.finish();
			});
		} else if
		(topFace[0][0] == color & topFace[1][0] == color &
		 topFace[1][2] == color & topFace[2][2] == color &
		 leftFace[0][2] == color & frontFace[0][1] == color &
		 backFace[0][0] == color & backFace[0][1] == color) {
			execAlgoRec(0,convertCode("R' F  R U R' U'  y L' d R"),() => {
				this.finish();
			});
		} else if
		(topFace[0][2] == color & topFace[1][0] == color &
		 topFace[1][2] == color & topFace[2][0] == color &
		 frontFace[0][1] == color & rightFace[0][0] == color &
		 backFace[0][1] == color & backFace[0][2] == color) {
			execAlgoRec(0,convertCode("L F' L' U' L U y' R d' L'"),() => {
				this.finish();
			});
		} else {
			this.turnLayer();
		}
	}

	this.finish = () => {
		if (this.callback != null) {
			this.callback();
		}
	}
}