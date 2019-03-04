function PermutLastLayer() {
	this.callback = null;
	this.maxOrientNb = 0;
	this.nbTurnForMaxOrient = null;
	this.nbTurn = 0;
	this.nbEssai = 0;
	this.nbTurnLayer = 0;

	this.permutLastLayer = (callback) => {
		if (typeof(callback) == "function") {
			this.callback = callback;
		}

		this.searchMaxOrient();
		//this.permutLayer();
	}

	this.searchMaxOrient = () => {
		this.countOrientNb();
		execAlgoRec(0,convertCode("U"),() => {
			this.nbTurn += 1;
			if (this.nbTurn < 4) {
				this.searchMaxOrient()
			} else {
				this.selectMaxOrient()
			}
		});
	}

	this.selectMaxOrient = () => {
		switch(this.nbTurnForMaxOrient) {
			case 0:
				this.permutLayer();
				break;
			case 1:
				execAlgoRec(0,convertCode("U"),() => {
					this.permutLayer();
				});
				break;
			case 2:
				execAlgoRec(0,convertCode("U2"),() => {
					this.permutLayer();
				});
				break;
			case 3:
				execAlgoRec(0,convertCode("U'"),() => {
					this.permutLayer();
				});
				break;
		}
	}

	this.countOrientNb = () => {
		let nb = 0;
		const rightFace = rubik[facePos.right];
		const leftFace = rubik[facePos.left];
		const frontFace = rubik[facePos.front];
		const backFace = rubik[facePos.back];

		const faceList = [leftFace, rightFace, frontFace, backFace];
		for (let f=0;f<faceList.length;f++) {
			for (let i=0;i<3;i++) {
				if (faceList[f][0][i] == faceList[f][1][1]) {
					nb += 1;
				}
			}
		}
		if (nb > this.maxOrientNb) {
			this.maxOrientNb = nb;
			this.nbTurnForMaxOrient = this.nbTurn;
		}
	}

	this.permutLayer = () => {
		const rightFace = rubik[facePos.right];
		const leftFace = rubik[facePos.left];
		const frontFace = rubik[facePos.front];
		const backFace = rubik[facePos.back];

		const leftColor = leftFace[1][1];
		const rightColor = rightFace[1][1];
		const frontColor = frontFace[1][1];
		const backColor = backFace[1][1];

		if (backFace[0][2] == rightColor &
			leftFace[0][0] == backColor &
			backFace[0][0] == rightColor &
			rightFace[0][2] == frontColor &
			rightFace[0][0] == leftColor &
			frontFace[0][2] == backColor &

			backFace[0][1] == backColor &
			leftFace[0][1] == leftColor &
			leftFace[0][2] == leftColor &
			rightFace[0][1] == rightColor &
			frontFace[0][0] == frontColor &
			frontFace[0][1] == frontColor) {
			execAlgoRec(0,convertCode("x  R' U R'  D2  R U' R'  D2  R2 x'"),() => {
				this.finish();
			});
		} else if
		(backFace[0][0] == frontColor &
		 rightFace[0][2] == leftColor &
		 rightFace[0][0] == backColor &
		 frontFace[0][2] == rightColor &
		 frontFace[0][0] == rightColor &
		 leftFace[0][2] == frontColor &

		 leftFace[0][0] == leftColor &
		 leftFace[0][1] == leftColor &
		 rightFace[0][1] == rightColor &
		 backFace[0][1] == backColor &
		 backFace[0][2] == backColor &
		 frontFace[0][1] == frontColor) {
			execAlgoRec(0,convertCode("x' R U' R D2 R' U R D2 R2 x'"),() => {
				this.finish();
			});
		} else if
		(leftFace[0][1] == rightColor &
		 rightFace[0][1] == frontColor &
		 frontFace[0][1] == leftColor &

		 leftFace[0][0] == leftColor &
		 leftFace[0][2] == leftColor &
		 rightFace[0][0] == rightColor &
		 rightFace[0][0] == rightColor &
		 backFace[0][0] == backColor &
		 backFace[0][1] == backColor &
		 backFace[0][2] == backColor &
		 frontFace[0][0] == frontColor &
		 frontFace[0][2] == frontColor) {
			execAlgoRec(0,convertCode("R2 U R U R' U' R' U'  R' U R'"),() => {
				this.finish();
			});
		} else if
		(rightFace[0][1] == leftColor &
		 leftFace[0][1] == frontColor &
		 frontFace[0][1] == rightColor &

		 leftFace[0][0] == leftColor &
		 leftFace[0][2] == leftColor &
		 rightFace[0][0] == rightColor &
		 rightFace[0][0] == rightColor &
		 backFace[0][0] == backColor &
		 backFace[0][1] == backColor &
		 backFace[0][2] == backColor &
		 frontFace[0][0] == frontColor &
		 frontFace[0][2] == frontColor) {
			execAlgoRec(0,convertCode("R U' R U R U R U' R' U' R2"),() => {
				this.finish();
			});
		} else if
		(backFace[0][1] == frontColor &
		 frontFace[0][1] == backColor &
		 leftFace[0][1] == rightColor &
		 rightFace[0][1] == leftColor &

		 leftFace[0][0] == leftColor &
		 leftFace[0][2] == leftColor &
		 rightFace[0][0] == rightColor &
		 rightFace[0][0] == rightColor &
		 backFace[0][0] == backColor &
		 backFace[0][2] == backColor &
		 frontFace[0][0] == frontColor &
		 frontFace[0][2] == frontColor) {
			execAlgoRec(0,convertCode("M2 U M2 U2 M2 U M2"),() => {
				this.finish();
			});
		} else if
		(rightFace[0][1] == leftColor &
		 leftFace[0][1] == rightColor &
		 rightFace[0][2] == frontColor &
		 backFace[0][0] == rightColor &
		 frontFace[0][2] == rightColor &
		 rightFace[0][0] == backColor &

		 leftFace[0][0] == leftColor &
		 leftFace[0][2] == leftColor &
		 backFace[0][1] == backColor &
		 backFace[0][2] == backColor &
		 frontFace[0][0] == frontColor &
		 frontFace[0][1] == frontColor) {
			execAlgoRec(0,convertCode("R U R' U' R' F R2 U' R' U' R U R' F'"),() => {
				this.finish();
			});
		} else if
		(leftFace[0][1] == backColor &
		 backFace[0][1] == leftColor &
		 leftFace[0][0] == backColor &
		 backFace[0][2] == rightColor &
		 backFace[0][0] == leftColor &
		 rightFace[0][2] == backColor &

		 leftFace[0][2] == leftColor &
		 rightFace[0][0] == rightColor &
		 rightFace[0][1] == rightColor &
		 frontFace[0][0] == frontColor &
		 frontFace[0][1] == frontColor &
		 frontFace[0][2] == frontColor) {
			execAlgoRec(0,convertCode("R' U L' U2 R U' R' U2 R L U'"),() => {
				this.finish();
			});
		} else if
		(frontFace[0][1] == rightColor &
		 rightFace[0][1] == frontColor &
		 backFace[0][0] == rightColor &
		 rightFace[0][2] == frontColor &
		 rightFace[0][0] == backColor &
		 frontFace[0][2] == rightColor &

		 leftFace[0][0] == leftColor &
		 leftFace[0][1] == leftColor &
		 leftFace[0][2] == leftColor &
		 backFace[0][1] == backColor &
		 backFace[0][2] == backColor &
		 frontFace[0][0] == frontColor) {
			execAlgoRec(0,convertCode("R U R' F' R U R' U' R' F R2 U' R' U'"),() => {
				this.finish();
			});
		} else if
		(frontFace[0][1] == leftColor &
		 leftFace[0][1] == frontColor &
		 leftFace[0][0] == backColor &
		 backFace[0][2] == rightColor &
		 backFace[0][0] == leftColor &
		 rightFace[0][2] == backColor &

		 leftFace[0][2] == leftColor &
		 rightFace[0][0] == rightColor &
		 rightFace[0][1] == rightColor &
		 backFace[0][1] == backColor &
		 frontFace[0][0] == frontColor &
		 frontFace[0][2] == frontColor) {
			execAlgoRec(0,convertCode("L U2 L' U2 L F' L' U' LU LF L2 U"),() => {
				this.finish();
			});
		} else if
		(frontFace[0][1] == rightColor &
		 rightFace[0][1] == frontColor &
		 leftFace[0][0] == backColor &
		 backFace[0][2] == rightColor &
		 backFace[0][0] == leftColor &
		 rightFace[0][2] == backColor &

		 leftFace[0][1] == leftColor &
		 leftFace[0][2] == leftColor &
		 rightFace[0][0] == rightColor &
		 backFace[0][1] == backColor &
		 frontFace[0][0] == frontColor &
		 frontFace[0][2] == frontColor) {
			execAlgoRec(0,convertCode("R' U2 R U2 R' F R U R' U'  R' F' R2 U'"),() => {
				this.finish();
			});
		} else if
		(backFace[0][1] == rightColor &
		 rightFace[0][1] == backColor &
		 backFace[0][2] == frontColor &
		 leftFace[0][0] == rightColor &
		 rightFace[0][0] == leftColor &
		 frontFace[0][2] == backColor &

		 leftFace[0][1] == leftColor &
		 leftFace[0][2] == leftColor &
		 rightFace[0][2] == rightColor &
		 backFace[0][0] == backColor &
		 frontFace[0][0] == frontColor &
		 frontFace[0][1] == frontColor) {
			execAlgoRec(0,convertCode("R' UR' d' R' F' R2 U' R' U R' FRF"),() => {
				this.finish();
			});
		} else if
		(leftFace[0][0] == backColor &
		 backFace[0][2] == rightColor &
		 leftFace[0][2] == backColor &
		 frontFace[0][0] == leftColor &
		 backFace[0][0] == frontColor &
		 rightFace[0][2] == leftColor &
		 leftFace[0][1] == rightColor &
		 rightFace[0][1] == backColor &
		 backFace[0][1] == leftColor &

		 rightFace[0][0] == rightColor &
		 frontFace[0][1] == frontColor &
		 frontFace[0][2] == frontColor) {
			execAlgoRec(0,convertCode("R2 u R' UR' U' R u' R2 y' R' UR"),() => {
				this.finish();
			});
		} else if
		(leftFace[0][0] == frontColor &
		 backFace[0][2] == leftColor &
		 leftFace[0][2] == frontColor &
		 frontFace[0][0] == rightColor &
		 frontFace[0][2] == backColor &
		 rightFace[0][0] == leftColor &
		 frontFace[0][1] == leftColor &
		 leftFace[0][1] == backColor &
		 backFace[0][1] == frontColor &

		 rightFace[0][1] == rightColor &
		 rightFace[0][2] == rightColor &
		 backFace[0][0] == backColor) {
			execAlgoRec(0,convertCode("R' U' R y R2 u R' URU' R u' R2"),() => {
				this.finish();
			});
		} else if
		(leftFace[0][0] == frontColor &
		 backFace[0][2] == leftColor &
		 leftFace[0][2] == frontColor &
		 frontFace[0][0] == rightColor &
		 frontFace[0][2] == backColor &
		 rightFace[0][0] == leftColor &
		 leftFace[0][1] == rightColor &
		 rightFace[0][1] == frontColor &
		 frontFace[0][1] == leftColor &

		 rightFace[0][2] == rightColor &
		 backFace[0][0] == backColor &
		 backFace[0][1] == backColor) {
			execAlgoRec(0,convertCode("R2 u' RU' RUR' u R2 y RU' R'"),() => {
				this.finish();
			});
		} else if 
		(leftFace[0][0] == backColor &
		 backFace[0][2] == rightColor &
		 leftFace[0][2] == backColor &
		 frontFace[0][0] == leftColor &
		 backFace[0][0] == frontColor &
		 rightFace[0][2] == leftColor &
		 backFace[0][1] == leftColor &
		 leftFace[0][1] == frontColor &
		 frontFace[0][1] == backColor &

		 rightFace[0][0] == rightColor &
		 rightFace[0][1] == rightColor &
		 frontFace[0][2] == frontColor) {
			execAlgoRec(0,convertCode("F2 D' L U' L U L' D F2 R U' R'"),() => {
				this.finish();
			});
		} else if
		(leftFace[0][1] == rightColor &
		 rightFace[0][1] == leftColor &
		 leftFace[0][2] == frontColor &
		 frontFace[0][0] == rightColor &
		 frontFace[0][2] == leftColor &
		 rightFace[0][0] == frontColor &

		 leftFace[0][0] == leftColor &
		 rightFace[0][2] == rightColor &
		 backFace[0][0] == backColor &
		 backFace[0][1] == backColor &
		 backFace[0][2] == backColor &
		 frontFace[0][1] == frontColor) {
			execAlgoRec(0,convertCode("R' U2 R' d' R' F' R2 U' R' U R' FRU' F"),() => {
				this.finish();
			});
		} else if
		(frontFace[0][1] == rightColor &
		 rightFace[0][1] == frontColor &
		 leftFace[0][1] == backColor & 
		 backFace[0][1] == leftColor &

		 frontFace[0][0] == frontColor &
		 frontFace[0][2] == frontColor &
		 rightFace[0][0] == rightColor &
		 rightFace[0][2] == rightColor &
		 leftFace[0][0] == leftColor &
		 leftFace[0][2] == leftColor &
		 backFace[0][0] == backColor &
		 backFace[0][2] == backColor) {
			execAlgoRec(0,convertCode("M2 U M2 UM' U2 M2 U2 M' U2"),() => {
				this.finish();
			});
		} else if
		(leftFace[0][1] == backColor & 
		 backFace[0][1] == leftColor &
		 backFace[0][2] == frontColor &
		 leftFace[0][0] == rightColor &
		 frontFace[0][2] == backColor &
		 rightFace[0][0] == leftColor &

		 leftFace[0][2] == leftColor &
		 rightFace[0][1] == rightColor &
		 rightFace[0][2] == rightColor &
		 backFace[0][0] == backColor &
		 frontFace[0][0] == frontColor &
		 frontFace[0][1] == frontColor) {
			execAlgoRec(0,convertCode("FRU' R' U' RUR' F' RUR' U' R' FR F'"),() => {
				this.finish();
			});
		} else if
		(backFace[0][1] == frontColor &
		 frontFace[0][1] == backColor &
		 backFace[0][2] == frontColor &
		 leftFace[0][0] == rightColor &
		 frontFace[0][2] == backColor &
		 rightFace[0][0] == leftColor 


		 ) {
			execAlgoRec(0,convertCode("LU' R U2 L' U R' LU' R U2 L' U R' U"),() => {
				this.finish();
			});
		} else if
		(backFace[0][1] == frontColor &
		 frontFace[0][1] == backColor &
		 leftFace[0][2] == rightColor &
		 frontFace[0][0] == backColor &
		 backFace[0][0] == frontColor &
		 rightFace[0][2] == leftColor) {
			execAlgoRec(0,convertCode("R' U L' U2 RU' L R' U L' U2 RU' L U'"),() => {
				this.finish();
			})
		} else if
		(backFace[0][2] == leftColor &
		 leftFace[0][0] == frontColor &
		 leftFace[0][2] == backColor &
		 frontFace[0][0] == leftColor &
		 backFace[0][0] == rightColor &
		 rightFace[0][2] == frontColor &
		 frontFace[0][2] == rightColor &
		 rightFace[0][0] == backFace) {
			execAlgoRec(0,convertCode("X' RU' R' D RU R' u2 R' UR D R' U' R"),() => {
				this.finish();
			})
		} else {
			execAlgoRec(0,convertCode("Y"),() => {
				this.nbEssai += 1;
				if (this.nbEssai >= 4) {
					execAlgoRec(0,convertCode("U"),() => {
						this.nbEssai = 0;
						this.nbTurnLayer += 1;
						if (this.nbTurnLayer >= 4) {
							if (!DOMEnable) {
								setRubikFromDOM();
								DOMEnable = true;
							}
							alert("Echec de résolution du rubik's cube");
							return;
						} else {
							this.permutLayer();
						}
					});
				} else {
					this.permutLayer();
				}
			})
		}
	}

	this.finish = () => {
		if (this.callback != null) {
			this.callback();
		}
	}
}