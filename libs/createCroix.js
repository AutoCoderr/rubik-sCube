function CreateCroix() {
	this.callback = null;
	this.nb = 0;

	this.createCroix = (callback) => {
		if (typeof(callback) == "function") {
			this.callback = callback;
		}
		const color = rubik[facePos.bottom][1][1];
		this.verifAreteAtBottom(color);
	}

	this.verifAreteAtBottom = (color) => {
		const bottomFace = rubik[facePos.bottom];

		if (this.nb >= 20) {
			if (!DOMEnable) {
				setRubikFromDOM();
				DOMEnable = true;
			}
			alert("Echec de résolution du rubik's cube");
			return;
		}
		this.nb += 1;

		if (this.croixCompleted(color)) {
			this.orienteCroix();
		} else if (bottomFace[0][1] == color) {
			execAlgoRec(0,convertCode("D'"), () => {
				this.verifAreteAtBottom(color);
			});
		} else {
			this.placeArete(color);
		}
	}

	this.placeArete = (color) => {

		const frontFace = rubik[facePos.front];
		const bottomFace = rubik[facePos.bottom];
		const topFace = rubik[facePos.top];
		const leftFace = rubik[facePos.left];
		const rightFace = rubik[facePos.right];
		const backFace = rubik[facePos.back];

		if (topFace[2][1] == color) {
			const colorAreteAtFront = frontFace[0][1];
			if ((rightColor(colorAreteAtFront,color) == leftFace[2][1] & bottomFace[1][0] == color) | 
				(leftColor(colorAreteAtFront,color) == rightFace[2][1] & bottomFace[1][2] == color)) {
				execAlgoRec(0,convertCode("D2 F2"), () => {
					this.verifAreteAtBottom(color);
				});
			} else if (opposedColor(colorAreteAtFront) == leftFace[2][1] & bottomFace[1][0] == color) {
				execAlgoRec(0,convertCode("D' F2"), () => {
					this.verifAreteAtBottom(color);
				});
			} else if (opposedColor(colorAreteAtFront) == rightFace[2][1] & bottomFace[1][2] == color) {
				execAlgoRec(0,convertCode("D F2"), () => {
					this.verifAreteAtBottom(color);
				});
			} else {
				execAlgoRec(0,convertCode("F2"), () => {
					this.verifAreteAtBottom(color);
				});
			}
		} else if (frontFace[0][1] == color) {
			const colorAreteAtTop = topFace[2][1];
			if ((rightColor(colorAreteAtTop,color) == leftFace[2][1] & bottomFace[1][0] == color) | 
				(leftColor(colorAreteAtTop,color) == rightFace[2][1] & bottomFace[1][2] == color)) {
				execAlgoRec(0,convertCode("D2 U'R'FR"), () => {
					this.verifAreteAtBottom(color);
				});
			} else if (opposedColor(colorAreteAtTop) == leftFace[2][1] & bottomFace[1][0] == color) {
				execAlgoRec(0,convertCode("D' U'R'FR"), () => {
					this.verifAreteAtBottom(color);
				});
			} else if (opposedColor(colorAreteAtTop) == rightFace[2][1] & bottomFace[1][2] == color) {
				execAlgoRec(0,convertCode("D U'R'FR"), () => {
					this.verifAreteAtBottom(color);
				});
			} else {
				execAlgoRec(0,convertCode("U'R'FR"), () => {
					this.verifAreteAtBottom(color);
				});
			}
		} else if (rightFace[1][0] == color) {
			const colorAreteAtFront = frontFace[1][2];
			if ((rightColor(colorAreteAtFront,color) == leftFace[2][1] & bottomFace[1][0] == color) | 
				(leftColor(colorAreteAtFront,color) == rightFace[2][1] & bottomFace[1][2] == color)) {
				execAlgoRec(0,convertCode("D2 F"), () => {
					this.verifAreteAtBottom(color);
				});
			} else if (opposedColor(colorAreteAtFront) == leftFace[2][1] & bottomFace[1][0] == color) {
				execAlgoRec(0,convertCode("D' F"), () => {
					this.verifAreteAtBottom(color);
				});
			} else if (opposedColor(colorAreteAtFront) == rightFace[2][1] & bottomFace[1][2] == color) {
				execAlgoRec(0,convertCode("D F"), () => {
					this.verifAreteAtBottom(color);
				});
			} else {
				execAlgoRec(0,convertCode("F"), () => {
					this.verifAreteAtBottom(color);
				});
			}
		} else if (leftFace[1][2] == color) {
			const colorAreteAtFront = frontFace[1][0];
			if ((rightColor(colorAreteAtFront,color) == leftFace[2][1] & bottomFace[1][0] == color) | 
				(leftColor(colorAreteAtFront,color) == rightFace[2][1] & bottomFace[1][2] == color)) {
				execAlgoRec(0,convertCode("D2 F'"), () => {
					this.verifAreteAtBottom(color);
				});
			} else if (opposedColor(colorAreteAtFront) == leftFace[2][1] & bottomFace[1][0] == color) {
				execAlgoRec(0,convertCode("D' F'"), () => {
					this.verifAreteAtBottom(color);
				});
			} else if (opposedColor(colorAreteAtFront) == rightFace[2][1] & bottomFace[1][2] == color) {
				execAlgoRec(0,convertCode("D F'"), () => {
					this.verifAreteAtBottom(color);
				});
			} else {
				execAlgoRec(0,convertCode("F'"), () => {
					this.verifAreteAtBottom(color);
				});
			}
		} else if (frontFace[2][1] == color) {
			const colorAreteAtTop = bottomFace[0][1];
			execAlgoRec(0,convertCode("F2"), () => {
				if ((rightColor(colorAreteAtTop,color) == leftFace[2][1] & bottomFace[1][0] == color) | 
					(leftColor(colorAreteAtTop,color) == rightFace[2][1] & bottomFace[1][2] == color)) {
					execAlgoRec(0,convertCode("D2 U'R'FR"), () => {
						this.verifAreteAtBottom(color);
					});
				} else if (opposedColor(colorAreteAtTop) == leftFace[2][1] & bottomFace[1][0] == color) {
					execAlgoRec(0,convertCode("D' U'R'FR"), () => {
						this.verifAreteAtBottom(color);
					});
				} else if (opposedColor(colorAreteAtTop) == rightFace[2][1] & bottomFace[1][2] == color) {
					execAlgoRec(0,convertCode("D U'R'FR"), () => {
						this.verifAreteAtBottom(color);
					});
				} else {
					execAlgoRec(0,convertCode("U'R'FR"), () => {
						this.verifAreteAtBottom(color);
					});
				}
			});
		} else {
			execAlgoRec(0,convertCode("UE'"), () => {
				this.placeArete(color);
			});
		}
	}

	this.croixCompleted = (color) => {
		const bottomFace = rubik[facePos.bottom];
		if (bottomFace[0][1] != color | bottomFace[1][0] != color | bottomFace[1][2] != color | bottomFace[2][1] != color) {
			return false;
		}
		return true;
	}

	this.orienteCroix = () => {
		if (!this.faceOriented()) {
			execAlgoRec(0,convertCode("E"), () => {
				this.orienteCroix();
			});
		} else {
			if (this.callback != null) {
				this.callback();
			}
			return;
		}
	}

	this.faceOriented = () => {
		const leftFace = rubik[facePos.left];
		const rightFace = rubik[facePos.right];
		const frontFace = rubik[facePos.front];
		const backFace = rubik[facePos.back];
		if (frontFace[2][1] != frontFace[1][1] |
			backFace[2][1] != backFace[1][1] | 
			leftFace[2][1] != leftFace[1][1] |
			rightFace[2][1] != rightFace[1][1]) {
			return false;
		}
		return true;
	}
}