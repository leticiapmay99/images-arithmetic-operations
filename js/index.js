
const imgInputOne = document.getElementById('imgInputOne');
const fileInputOne = document.getElementById('fileInputOne');

const imgInputTwo = document.getElementById('imgInputTwo');
const fileInputTwo = document.getElementById('fileInputTwo');
const imageOutput = document.getElementById('imageOutput');

var pixelData
var pixelData2


fileInputOne.addEventListener('change', handleFiles);
fileInputTwo.addEventListener('change', handleFiles2);

function handleFiles(e) {
	console.log(imgInputOne)
    let ctx = imgInputOne.getContext('2d');
    var img = new Image;
    img.src = URL.createObjectURL(e.target.files[0]);
    img.onload = function() {
		ctx.drawImage(img, 20,20);
		pixelData = ctx.getImageData(0,0, 200, 200)
		console.log(pixelData)
    }
	ctx.clearRect(0, 0, 265, 285);
}

function handleFiles2(e) {
	console.log(imgInputTwo)
    let ctx = imgInputTwo.getContext('2d');
    var img = new Image;
    img.src = URL.createObjectURL(e.target.files[0]);
    img.onload = function() {
		ctx.drawImage(img, 20,20);
		pixelData2 = ctx.getImageData(0,0, 200, 200)
		console.log(pixelData2)
    }
	ctx.clearRect(0, 0, 265, 285);
}

function adicao(){
	let ctx = imageOutput.getContext('2d');
    pixelData3 = pixelData
	for(let i = 0; i<pixelData3.data.length; i+=4){

		pixelData3.data[i] += pixelData2.data[i]
		pixelData3.data[i+1] += pixelData2.data[i]
		pixelData3.data[i+2] += pixelData2.data[i]
		pixelData3.data[i+3] += pixelData2.data[i]
	}	
	ctx.putImageData(pixelData, 0, 0)
}

function sub(){
    console.log('teste')
	let ctx = imageOutput.getContext('2d');
    pixelData3 = pixelData
	for(let i = 0; i<pixelData3.data.length; i+=4){

		pixelData3.data[i] -= pixelData2.data[i]
		pixelData3.data[i+1] -= pixelData2.data[i]
		pixelData3.data[i+2] -= pixelData2.data[i]
		pixelData3.data[i+3] -= pixelData2.data[i]
	}	
	ctx.putImageData(pixelData, 0, 0)
}


function grayscale(){
	let ctx = imageOutput.getContext('2d');
    pixelData3 = pixelData
	for(let i = 0; i<pixelData3.data.length; i+=4){
        formula = 0.2989 * pixelData3.data[i] + 0.5870 * pixelData3.data[i+1] + 0.1140 *  pixelData3.data[i+2]
        pixelData.data[i] = formula
        pixelData.data[i+1] = formula
        pixelData.data[i+2] = formula
	}	
	ctx.putImageData(pixelData, 0, 0)
}

function negativo(){

    let ctx = imageOutput.getContext('2d');
    pixelData3 = pixelData
	for(let i = 0; i<pixelData3.data.length; i+=4){
        pixelData3.data[i] = 255 - pixelData3.data[i]
        pixelData3.data[i+1] = 255 - pixelData3.data[i+1]
        pixelData3.data[i+2] = 255 - pixelData3.data[i+2]

        pixelData.data[i] = pixelData3.data[i]
        pixelData.data[i+1] = pixelData3.data[i+1]
        pixelData.data[i+2] = pixelData3.data[i+2]
	}	
	ctx.putImageData(pixelData, 0, 0)
}

// não sei se ta certo tbm
function binario(){
    console.log('teste')
	let ctx = imageOutput.getContext('2d');
    pixelData3 = pixelData
	let linear = 127

	for(let i = 0; i<pixelData3.data.length; i+=4){
		
		if(pixelData3.data[i] && pixelData3.data[i+1] && pixelData3.data[i+2] <= linear) {
			pixelData3.data[i] += 0
			pixelData3.data[i+1] += 0
			pixelData3.data[i+2] += 0	
		} else {
			pixelData3.data[i] +=255
			pixelData3.data[i+1] += 255
			pixelData3.data[i+2] += 255
		}
	}	
	ctx.putImageData(pixelData, 0, 0)
}


// não sei se é assim
// function and(){

//     let ctx = imageOutput.getContext('2d');
//     pixelData3 = pixelData
// 	for(let i = 0; i<pixelData3.data.length; i+=4){

// 		pixelData3.data[i]  || pixelData2.data[i]
// 		pixelData3.data[i+1] ||   pixelData2.data[i]
// 		pixelData3.data[i+2] || pixelData2.data[i]
// 		pixelData3.data[i+3] ||  pixelData2.data[i]
// 	}	
// 	ctx.putImageData(pixelData, 0, 0)
// }









