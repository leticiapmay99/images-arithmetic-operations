
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
	console.log('imgInputOne', imgInputOne)
	console.log('e', e.target.files[0])
    let ctx = imgInputOne.getContext('2d');
    var img = new Image;
    img.src = URL.createObjectURL(e.target.files[0]);
    img.onload = function() {
		// imgInputOne.width = 50;
    	// imgInputOne.height = 85;
		imgInputOne.setAttribute('width', 250);
		imgInputOne.setAttribute('height', 285);
		console.log('window.innerWidth', window.innerWidth)
		console.log('window.innerHeight', window.innerHeight)
		drawImageProp(ctx, this, 0, 0, imgInputOne.width, imgInputOne.height);
		// ctx.drawImage(img, 0,0);
		pixelData = ctx.getImageData(0,0, imgInputOne.width, imgInputOne.height)
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
		imgInputTwo.setAttribute('width', 250);
		imgInputTwo.setAttribute('height', 285);
		console.log('window.innerWidth', window.innerWidth)
		console.log('window.innerHeight', window.innerHeight)
		drawImageProp(ctx, this, 0, 0, imgInputTwo.width, imgInputTwo.height);
		// ctx.drawImage(img, 20,20);
		pixelData2 = ctx.getImageData(0,0, imgInputTwo.width, imgInputTwo.height)
		// console.log(pixelData2)
    }
	ctx.clearRect(0, 0, 265, 285);
}

function adicao(){
	let ctx = imageOutput.getContext('2d');
    pixelData3 = pixelData
	for(let i = 0; i<pixelData3.data.length; i+=4){

		pixelData3.data[i] += pixelData2.data[i]
		pixelData3.data[i+1] += pixelData2.data[i+1]
		pixelData3.data[i+2] += pixelData2.data[i+2]
		pixelData3.data[i+3] += pixelData2.data[i+3]
	}	
	ctx.putImageData(pixelData3, 0, 0)
}

function sub(){
    console.log('sub')
	let ctx = imageOutput.getContext('2d');
	for(let i = 0; i<pixelData.data.length; i+=4){

		pixelData.data[i] -= pixelData2.data[i]
        if(pixelData.data[i] < 0) pixelData.data[i] = 0

		pixelData.data[i+1] -= pixelData2.data[i+1]
        if(pixelData.data[i+1] < 0) pixelData.data[i+1] = 0

        pixelData.data[i+2] -= pixelData2.data[i+2]
		if(pixelData.data[i+2] < 0) pixelData.data[i+2] = 0


        // pixelData.data[i+3] -= pixelData2.data[i+3]
        // if(pixelData.data[i+3] < 0) pixelData.data[i+3] = 0
	}	
	ctx.putImageData(pixelData, 0, 0)
}


function mult() {
    console.log('multiplica')
	let ctx = imageOutput.getContext('2d');
    pixelData3 = pixelData
	for(let i = 0; i<pixelData3.data.length; i+=4){

		pixelData3.data[i] *= pixelData2.data[i]
        if(pixelData3.data[i] > 255) pixelData3.data[i] = 255 
		
        pixelData3.data[i+1] *= pixelData2.data[i+1]
        if(pixelData3.data[i+1] > 255) pixelData3.data[i+1] = 255
		
        pixelData3.data[i+2] *= pixelData2.data[i+2]
        if(pixelData3.data[i+2] > 255) pixelData3.data[i+2] = 255
		
        pixelData3.data[i+3] *= pixelData2.data[i+3]
        if(pixelData3.data[i+3] > 255) pixelData3.data[i+3] = 255
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


function drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) {

    if (arguments.length === 2) {
        x = y = 0;
        w = ctx.canvas.width;
        h = ctx.canvas.height;
    }

    /// default offset is center
    offsetX = offsetX ? offsetX : 0.5;
    offsetY = offsetY ? offsetY : 0.5;

    /// keep bounds [0.0, 1.0]
    if (offsetX < 0) offsetX = 0;
    if (offsetY < 0) offsetY = 0;
    if (offsetX > 1) offsetX = 1;
    if (offsetY > 1) offsetY = 1;

    var iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,   /// new prop. width
        nh = ih * r,   /// new prop. height
        cx, cy, cw, ch, ar = 1;

    /// decide which gap to fill    
    if (nw < w) ar = w / nw;
    if (nh < h) ar = h / nh;
    nw *= ar;
    nh *= ar;

    /// calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);

    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;

    /// make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;

    /// fill image in dest. rectangle
    ctx.drawImage(img, cx, cy, cw, ch,  x, y, w, h);
}






