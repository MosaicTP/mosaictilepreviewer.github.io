var alltiles = document.getElementsByClassName("alltiles");

var tile1 = document.getElementById("tile1");
var tile2 = document.getElementById("tile2");
var tile3 = document.getElementById("tile3");
var tile4 = document.getElementById("tile4");
var tile5 = document.getElementById("tile5");
var tile6 = document.getElementById("tile6");

var grout1 = document.getElementById("grout1");
var grout2 = document.getElementById("grout2");
var grout3 = document.getElementById("grout3");




var inputSquareNumber = document.getElementById("SquareNoInput");


var previewCustomColor = document.getElementById("previewCustomColor");


//Changing color of the tiles manually

var ChosenColorBox = document.getElementById("ChosenColorBox");
var currentChosenColor = ["rgb(255, 255, 255)"];
	
function getChosenColor(chosenColor) {
	


	currentChosenColor.shift();
	currentChosenColor.push(chosenColor);

	
	ChosenColorBox.style.backgroundColor = chosenColor;

	
}


function changeTileColor(tileNumber) {
	
	tileNumber.style.backgroundColor = currentChosenColor[0];
	
}




function resetAll() {
	
	tile1.style.backgroundColor = '';
	tile2.style.backgroundColor = '';
	tile3.style.backgroundColor = '';
	tile4.style.backgroundColor = '';
	tile5.style.backgroundColor = '';
	tile6.style.backgroundColor = '';

	grout1.style.borderColor = '';
	grout2.style.borderColor = '';
	grout3.style.borderColor = '';
	
}






function squareNumber() {
	if (inputSquareNumber.value === "6") {
	
		tile1.style.width = "200px";
		tile1.style.height = "144px";
		tile1.style.top = "103px";
		tile1.style.left = "322px";
		
		tile2.style.width = "201px";
		tile2.style.height = "144px";
		tile2.style.top = "103px";
		tile2.style.left = "523px";
		
		tile3.style.width = "200px";
		tile3.style.height = "147px";
		tile3.style.top = "248px";
		tile3.style.left = "322px";
		
		
		tile4.style.width = "201px";
		tile4.style.height = "147px";
		tile4.style.top = "248px";
		tile4.style.left = "523px";
		
		tile5.style.width = "200px";
		tile5.style.height = "147px";
		tile5.style.top = "396px";
		tile5.style.left = "322px";
		
		tile6.style.width = "201px";
		tile6.style.height = "147px";
		tile6.style.top = "396px";
		tile6.style.left = "523px";
		
		tile1.style.visibility = "visible";
		tile2.style.visibility = "visible";
		tile3.style.visibility = "visible";
		tile4.style.visibility = "visible";
		tile5.style.visibility = "visible";
		tile6.style.visibility = "visible";
		
		
		//Grout positions
		grout1.style.height = "440px";
		grout1.style.top = "104px";
		
		grout2.style.top = "248px";
		grout2.style.visibility = "visible";
		
		grout3.style.top = "396px";
		grout3.style.visibility = "visible";
		
	} else if (inputSquareNumber.value === "5") {
		
		//Tile positions
		tile1.style.width = "402px";
		tile1.style.height = "144px";
		tile1.style.top = "103px";
		tile1.style.left = "322px";
		
		tile2.style.width = "201px";
		tile2.style.height = "147px";
		tile2.style.top = "248px";
		tile2.style.left = "523px";
		
		tile3.style.width = "200px";
		tile3.style.height = "147px";
		tile3.style.top = "248px";
		tile3.style.left = "322px";
		
		tile4.style.width = "201px";
		tile4.style.height = "147px";
		tile4.style.top = "396px";
		tile4.style.left = "523px";
		
		tile5.style.width = "200px";
		tile5.style.height = "147px";
		tile5.style.top = "396px";
		tile5.style.left = "322px";
 
		tile1.style.visibility = "visible"; 
		tile2.style.visibility = "visible";
		tile3.style.visibility = "visible";
		tile4.style.visibility = "visible";
		tile5.style.visibility = "visible";
	
		tile6.style.visibility = "hidden";
		
		
		//Grout positions
		grout1.style.height = "296px";
		grout1.style.top = "248px";
		
		grout2.style.top = "248px";
		grout2.style.visibility = "visible";

		
		grout3.style.visibility = "visible";

	
	} else if (inputSquareNumber.value === "4") {
		tile1.style.width = "200px";
		tile1.style.height = "220px";
		tile1.style.top = "103px";
		tile1.style.left = "322px";
		
		tile2.style.width = "201px";
		tile2.style.height = "220px";
		tile2.style.top = "103px";
		tile2.style.left = "523px";
		
		tile3.style.width = "200px";
		tile3.style.height = "220px";
		tile3.style.top = "324px";
		tile3.style.left = "322px";
		
		tile4.style.width = "201px";
		tile4.style.height = "220px";
		tile4.style.top = "324px";
		tile4.style.left = "523px";
		
		tile1.style.visibility = "visible";
		tile2.style.visibility = "visible";
		tile3.style.visibility = "visible";
		tile4.style.visibility = "visible";
		
		tile5.style.visibility = "hidden";
		tile6.style.visibility = "hidden";
		
		
		//Grout positions
		grout1.style.height = "442px";
		grout1.style.top = "104px";
		
		grout2.style.top = "324px";
		grout2.style.visibility = "visible";

		grout3.style.visibility = "hidden";
	
	} else if (inputSquareNumber.value === "3") {
		tile1.style.width = "402px";
		tile1.style.height = "220px";
		tile1.style.top = "103px";
		tile1.style.left = "322px";
		
		tile2.style.width = "200px";
		tile2.style.height = "220px";
		tile2.style.top = "324px";
		tile2.style.left = "322px";
		
		tile3.style.width = "201px";
		tile3.style.height = "220px";
		tile3.style.top = "324px";
		tile3.style.left = "523px";

		tile1.style.visibility = "visible";
		tile2.style.visibility = "visible";
		tile3.style.visibility = "visible";
		
		tile4.style.visibility = "hidden";
		tile5.style.visibility = "hidden";
		tile6.style.visibility = "hidden";
		
		
		//Grout positions
		grout1.style.height = "222px";
		grout1.style.top = "324px";
		
		grout2.style.top = "324px";
		grout2.style.visibility = "visible";
		
		grout3.style.visibility = "hidden";
		
	} else if (inputSquareNumber.value === "2") {
	
		tile1.style.width = "200px";
		tile1.style.height = "440px";
		tile1.style.top = "103px";
		tile1.style.left = "322px";
		
		tile2.style.width = "201px";
		tile2.style.height = "440px";
		tile2.style.top = "103px";
		tile2.style.left = "523px";

		tile1.style.visibility = "visible";
		tile2.style.visibility = "visible";
		
		tile3.style.visibility = "hidden";		
		tile4.style.visibility = "hidden";
		tile5.style.visibility = "hidden";
		tile6.style.visibility = "hidden";
		
		
		//Grout positions
		grout1.style.height = "442px";
		grout1.style.top = "103px";
		
		grout2.style.visibility = "hidden";
		grout3.style.visibility = "hidden";
		
	} else {
		
	}
}


function changeGroutColor() {
	grout1.style.borderColor = currentChosenColor[0];
	grout2.style.borderColor = currentChosenColor[0];
	grout3.style.borderColor = currentChosenColor[0];

}

//Function that changes the grout size
function groutSize() {

	var inputGroutSize = document.getElementById("GroutSizeInput");

	if (inputGroutSize.value === "1") {
	
		grout1.style.borderWidth = "1px 1px 1px 1px";
		grout2.style.borderWidth = "1px 1px 1px 1px";
		grout3.style.borderWidth = "1px 1px 1px 1px";
		
		
	} else if (inputGroutSize.value === "2") {
		
		grout1.style.borderWidth = "3px 3px 3px 3px";
		grout2.style.borderWidth = "3px 3px 3px 3px";	
		grout3.style.borderWidth = "3px 3px 3px 3px";
		

	} else if (inputGroutSize.value === "3") {
		
		grout1.style.borderWidth = "5px 5px 5px 5px";
		grout2.style.borderWidth = "5px 5px 5px 5px";
		grout3.style.borderWidth = "5px 5px 5px 5px";


	} else if (inputGroutSize.value === "4") {
		
		grout1.style.borderWidth = "7px 7px 7px 7px";
		grout2.style.borderWidth = "7px 7px 7px 7px";
		grout3.style.borderWidth = "7px 7px 7px 7px";

		
	} else if (inputGroutSize.value === "5") {
		
		grout1.style.borderWidth = "9px 9px 9px 9px";
		grout2.style.borderWidth = "9px 9px 9px 9px";
		grout3.style.borderWidth = "9px 9px 9px 9px";
		
	} else {
	
	}
	
}



// CUSTOM COLOR SECTION 

	var RedValueArr = ["0"];
	var GreenValueArr = ["0"];
	var BlueValueArr = ["0"];


function customColor() {
	var customColorBox = document.getElementById('customColor');
	
	var customColorBtn = document.getElementById('CustomColorBtn');
	var hideCustomColorBtn = document.getElementById('HideCustomColorBtn');
	
	customColorBox.style.visibility = "visible";
	
	customColorBtn.style.visibility = "hidden";
	hideCustomColorBtn.style.visibility = "visible";
	
	RandomizerBox.style.visibility = "hidden";

	
	//Changing the randomizer buttons if custom color is clicked
	var ShowRandomizer = document.getElementById("RandomizerBtn");
	var HideRandomizer = document.getElementById("HideRandomizerBtn");
	
	ShowRandomizer.style.visibility = "visible";
	HideRandomizer.style.visibility = "hidden";
	

}


function hideCustomColor() {
	var customColorBox = document.getElementById('customColor');
	
	var customColorBtn = document.getElementById('CustomColorBtn');
	var hideCustomColorBtn = document.getElementById('HideCustomColorBtn');

	customColorBtn.style.visibility = "visible";
	hideCustomColorBtn.style.visibility = "hidden";
	
	customColorBox.style.visibility = "hidden";


	
}

	
function RedChange(value) {
	document.getElementById('RedValue').innerHTML = value;
	
	RedValueArr.shift();
	RedValueArr.push(value);
	
	previewCustomColor.style.backgroundColor = "rgb(" + RedValueArr[0] + ", " + GreenValueArr[0] + ", " + BlueValueArr[0] + ")";
	currentChosenColor = ["rgb(" + RedValueArr[0] + ", " + GreenValueArr[0] + ", " + BlueValueArr[0] + ")"];
	ChosenColorBox.style.backgroundColor = "rgb(" + RedValueArr[0] + ", " + GreenValueArr[0] + ", " + BlueValueArr[0] + ")";
}

function GreenChange(value) {
	document.getElementById('GreenValue').innerHTML = value;
	
	GreenValueArr.shift();
	GreenValueArr.push(value);
	
	previewCustomColor.style.backgroundColor = "rgb(" + RedValueArr[0] + ", " + GreenValueArr[0] + ", " + BlueValueArr[0] + ")";
	currentChosenColor = ["rgb(" + RedValueArr[0] + ", " + GreenValueArr[0] + ", " + BlueValueArr[0] + ")"];
	ChosenColorBox.style.backgroundColor = "rgb(" + RedValueArr[0] + ", " + GreenValueArr[0] + ", " + BlueValueArr[0] + ")";
}

function BlueChange(value) {
	document.getElementById('BlueValue').innerHTML = value;
	
	BlueValueArr.shift();
	BlueValueArr.push(value);
	
	previewCustomColor.style.backgroundColor = "rgb(" + RedValueArr[0] + ", " + GreenValueArr[0] + ", " + BlueValueArr[0] + ")";
	currentChosenColor = ["rgb(" + RedValueArr[0] + ", " + GreenValueArr[0] + ", " + BlueValueArr[0] + ")"];
	ChosenColorBox.style.backgroundColor = "rgb(" + RedValueArr[0] + ", " + GreenValueArr[0] + ", " + BlueValueArr[0] + ")";
}


// RANDOMIZER SECTION
	
function ShowRandomizer() {
	
	var RandomizerBox = document.getElementById("RandomizerBox");	
	
	var ShowRandomizer = document.getElementById("RandomizerBtn");
	var HideRandomizer = document.getElementById("HideRandomizerBtn");
	
	var customColorBox = document.getElementById('customColor');

	
	RandomizerBox.style.visibility = "visible";
	
	ShowRandomizer.style.visibility = "hidden";
	HideRandomizer.style.visibility = "visible";
	
	customColorBox.style.visibility = "hidden";
	
	
	//Changing the custom color UI if randomizer is clicked
	var customColorBtn = document.getElementById('CustomColorBtn');
	var hideCustomColorBtn = document.getElementById('HideCustomColorBtn');

	customColorBtn.style.visibility = "visible";
	hideCustomColorBtn.style.visibility = "hidden";


}

function HideRandomizer() {
	
	var RandomizerBox = document.getElementById("RandomizerBox");
	

	var ShowRandomizer = document.getElementById("RandomizerBtn");
	var HideRandomizer = document.getElementById("HideRandomizerBtn");
	
	ShowRandomizer.style.visibility = "visible";
	HideRandomizer.style.visibility = "hidden";
	
	RandomizerBox.style.visibility = "hidden";
	
	
	
}


function RandomizeColor() {
	
	var RandomValueArr = [];
	
	for (lim = 0; lim < 21; lim++) {
		RandomValueArr.push(Math.floor((Math.random() * 255) + 0));
	}
		
	tile1.style.backgroundColor = "rgb(" + RandomValueArr[0] + ", " + RandomValueArr[1] + ", " + RandomValueArr[2] + ")";
	tile2.style.backgroundColor = "rgb(" + RandomValueArr[3] + ", " + RandomValueArr[4] + ", " + RandomValueArr[5] + ")";
	tile3.style.backgroundColor = "rgb(" + RandomValueArr[6] + ", " + RandomValueArr[7] + ", " + RandomValueArr[8] + ")";
	tile4.style.backgroundColor = "rgb(" + RandomValueArr[9] + ", " + RandomValueArr[10] + ", " + RandomValueArr[11] + ")";
	tile5.style.backgroundColor = "rgb(" + RandomValueArr[12] + ", " + RandomValueArr[13] + ", " + RandomValueArr[14] + ")";
	tile6.style.backgroundColor = "rgb(" + RandomValueArr[15] + ", " + RandomValueArr[16] + ", " + RandomValueArr[17] + ")";
	
}


function RandomizeChosenColor() {
	
	var RandomValueArr = [];
	
	for (lim = 0; lim < 4; lim++) {
		RandomValueArr.push(Math.floor((Math.random() * 255) + 0));
	}
		
	currentChosenColor = ["rgb(" + RandomValueArr[0] + ", " + RandomValueArr[1] + ", " + RandomValueArr[2] + ")"];
	ChosenColorBox.style.backgroundColor = "rgb(" + RandomValueArr[0] + ", " + RandomValueArr[1] + ", " + RandomValueArr[2] + ")";
	
}



function RandomizeGrout() {
	
	var RandomValueArr = [];
	
	for (lim = 0; lim < 21; lim++) {
		RandomValueArr.push(Math.floor((Math.random() * 255) + 0));
	}


	grout1.style.borderColor = "rgb(" + RandomValueArr[18] + ", " + RandomValueArr[19] + ", " + RandomValueArr[20] + ")";
	grout2.style.borderColor = "rgb(" + RandomValueArr[18] + ", " + RandomValueArr[19] + ", " + RandomValueArr[20] + ")";
	grout3.style.borderColor = "rgb(" + RandomValueArr[18] + ", " + RandomValueArr[19] + ", " + RandomValueArr[20] + ")";
	
}



function RandomizeAll() {
	
	var RandomValueArr = [];
	
	for (lim = 0; lim < 21; lim++) {
		RandomValueArr.push(Math.floor((Math.random() * 255) + 0));
	}
		
	tile1.style.backgroundColor = "rgb(" + RandomValueArr[0] + ", " + RandomValueArr[1] + ", " + RandomValueArr[2] + ")";
	tile2.style.backgroundColor = "rgb(" + RandomValueArr[3] + ", " + RandomValueArr[4] + ", " + RandomValueArr[5] + ")";
	tile3.style.backgroundColor = "rgb(" + RandomValueArr[6] + ", " + RandomValueArr[7] + ", " + RandomValueArr[8] + ")";
	tile4.style.backgroundColor = "rgb(" + RandomValueArr[9] + ", " + RandomValueArr[10] + ", " + RandomValueArr[11] + ")";
	tile5.style.backgroundColor = "rgb(" + RandomValueArr[12] + ", " + RandomValueArr[13] + ", " + RandomValueArr[14] + ")";
	tile6.style.backgroundColor = "rgb(" + RandomValueArr[15] + ", " + RandomValueArr[16] + ", " + RandomValueArr[17] + ")";

	grout1.style.borderColor = "rgb(" + RandomValueArr[18] + ", " + RandomValueArr[19] + ", " + RandomValueArr[20] + ")";
	grout2.style.borderColor = "rgb(" + RandomValueArr[18] + ", " + RandomValueArr[19] + ", " + RandomValueArr[20] + ")";
	grout3.style.borderColor = "rgb(" + RandomValueArr[18] + ", " + RandomValueArr[19] + ", " + RandomValueArr[20] + ")";
		
}

//Instructions section

var InstructionsBox = document.getElementById("instructionsBox");
var showInstructions = document.getElementById("ShowInstructions");
var hideInstructions = document.getElementById("HideInstructions");

function HideInstructions() {
	
	InstructionsBox.style.visibility = "hidden";
	showInstructions.style.visibility = "visible";
	hideInstructions.style.visibility = "hidden";

}

function ShowInstructions() {
	
	InstructionsBox.style.visibility = "visible";
	showInstructions.style.visibility = "hidden";
	hideInstructions.style.visibility = "visible";

}


