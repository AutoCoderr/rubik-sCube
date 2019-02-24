function TwoFirstLayer() {
	this.countRotate = 0;
	this.callback = null;

	this.twoFirstLayer = (callback) => {
		if (typeof(callback) == "function") {
			this.callback = callback;
		}
		console.log("before jquery");
		const color = rubik[getColorOfFace($(".bottom").attr("id"))][1][1];
		console.log("after jquery");
		this.placeCells(color);
	}

	this.parcourtLine = (color) => {
		console.log("verifTwoFirstLine");
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
		console.log("placeCells");
		const frontFace = rubik[getColorOfFace($(".front").attr("id"))];
		const bottomFace = rubik[getColorOfFace($(".bottom").attr("id"))];
		const topFace = rubik[getColorOfFace($(".top").attr("id"))];
		const leftFace = rubik[getColorOfFace($(".left").attr("id"))];
		const rightFace = rubik[getColorOfFace($(".right").attr("id"))];

		if (frontFace[0][2] == frontFace[1][1] &
			topFace[2][2] == rightFace[1][1] & 
			rightFace[0][0] == color) {
			if (frontFace[0][1] == frontFace[1][1] &
				topFace[2][1] == rightFace[1][1]) {
				execAlgoRec(0,convertCode("U' F' U F"), () => {
					this.placeCells(color);
				});
			} else {
				execAlgoRec(0,convertCode("R U R'"), () => {
					this.placeCells(color);
				});
			}
		} else if (frontFace[0][2] == color &
				   topFace[2][2] == frontFace[1][1] &
				   rightFace[0][0] == rightFace[1][1]) {
			if (rightFace[0][1] == rightFace[1][1] & 
				topFace[1][2] == frontFace[1][1]) {
				execAlgoRec(0,convertCode("U R U' R'"), () => {
					this.placeCells(color);
				});
			} else {
				execAlgoRec(0,convertCode("F' U' F"), () => {
					this.placeCells(color);
				});
			}
		} else if (frontFace[0][1] == frontFace[1][1] &
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
				execAlgoRec(0,convertCode("F' U' F   U F' U' F"), () => {
					this.placeCells(color);
				});
			} else {
				this.parcourtLine();
			}
		} else if (rightFace[0][1] == rightFace[1][1] &
				   topFace[1][2] == frontFace[1][1]) {
			if (frontFace[2][2] == frontFace[1][1] &
				rightFace[2][0] == rightFace[1][1] &
				bottomFace[0][2] == color) {
				execAlgoRec(0,convertCode("U' F' U F  U R U' R'"), () => {
					this.placeCells(color);
				});
			} else {
				this.parcourtLine();
			}
		} else {
			this.parcourtLine();
		}
	}


	this.firstFrontLayerDone = () => {
		const bottomFace = rubik[getColorOfFace($(".bottom").attr("id"))];
		const frontFace = rubik[getColorOfFace($(".front").attr("id"))];
		if (frontFace[2][0] != frontFace[1][1] | 
			frontFace[2][1] != frontFace[1][1] |
			frontFace[2][2] != frontFace[1][1] | 
			bottomFace[0][0] != bottomFace[1][1] |
			bottomFace[0][1] != bottomFace[1][1] |
			bottomFace[0][2] != bottomFace[1][1]) {
			return false;
		}
		return true;
	}

	this.twoFrontLayerDone = () => {
		const frontFace = rubik[getColorOfFace($(".front").attr("id"))];
		const leftFace = rubik[getColorOfFace($(".left").attr("id"))];
		const rightFace = rubik[getColorOfFace($(".right").attr("id"))];

		if (frontFace[1][0] != frontFace[1][1] |
			frontFace[1][2] != frontFace[1][1] |
			leftFace[1][2] != leftFace[1][1] |
			rightFace[1][0] != rightFace[1][1]) {
			return false;
		}
		return true;
	}
}