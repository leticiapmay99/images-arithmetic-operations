// Input Elements
const imgInputOne = document.getElementById('imgInputOne');
const fileInputOne = document.getElementById('fileInputOne');

const imgInputTwo = document.getElementById('imgInputTwo');
const fileInputTwo = document.getElementById('fileInputTwo');

// const canvasOutput = document.getElementById('canvasOutput');
const imageOutput = document.getElementById('imageOutput');

const btnSum = document.getElementById('btnSum');
const btnSubtraction = document.getElementById('btnSubtraction');
const btnMultiplication = document.getElementById('btnMultiplication');
const btnDivision = document.getElementById('btnDivision');
const btnAverage = document.getElementById('btnAverage');
const btnBlending = document.getElementById('btnBlending');
const btnAndPort = document.getElementById('btnAndPort');
const btnOrPort = document.getElementById('btnOrPort');
const btnXorPort = document.getElementById('btnXorPort');
const btnNotPort = document.getElementById('btnNotPort');

// image-js
// async function process() {
//   let image = await IJS.Image.load(imgInputOne.src);
//   console.log(IJS.divide())

//   // imageOutput.src = grey.toDataURL();
// }

async function sumImages() {

    const firstImage = await jimp.read(imgInputOne.src);
    const secondImage = await jimp.read(imgInputTwo.src);

    const result = firstImage.composite(secondImage, 0, 0, {
        mode: jimp.BLEND_ADD
    });

    result.getBase64(jimp.AUTO, function (err, data) {
        imageOutput.src = data
    })

}


async function subtractionImages() {
    const firstImage = await jimp.read(imgInputOne.src);
    const secondImage = await jimp.read(imgInputTwo.src);

    const result = firstImage.composite(secondImage, 0, 0, {
        mode: jimp.BLEND_DIFFERENCE
    });

    result.getBase64(jimp.AUTO, function (err, data) {
        imageOutput.src = data
    })

}

async function multiplyImages() {
    const firstImage = await jimp.read(imgInputOne.src);
    const secondImage = await jimp.read(imgInputTwo.src);

    const result = firstImage.composite(secondImage, 0, 0, {
        mode: jimp.BLEND_MULTIPLY
    });

    result.getBase64(jimp.AUTO, function (err, data) {
        imageOutput.src = data
    })

}

// // EventListeners
fileInputOne.addEventListener('change', async (e) => {
    imgInputOne.src = await URL.createObjectURL(e.target.files[0]);
}, false);

fileInputTwo.addEventListener('change', async (e) => {
    imgInputTwo.src = await URL.createObjectURL(e.target.files[0]);
}, false);

btnSum.addEventListener('click', () => {
    sumImages()
});


btnMultiplication.addEventListener('click', () => {
    multiplyImages()
});


btnSubtraction.addEventListener('click', () => {
    subtractionImages()
});
const appStatus = function () {
    const status = document.getElementById('status');
    status.classList.add('ready')
    status.innerHTML = 'Jimp is ready!';

    this.setTimeout(() => {
        status.classList.add('hidden')
    }, 1500);
}

window.addEventListener('load', appStatus);


/**
 * Jimp
 * https://www.npmjs.com/package/jimp
 * https://www.youtube.com/watch?v=Wk3gkFNC0s8
 * https://www.youtube.com/watch?v=2H7pRypEeD0
 * https://imasters.com.br/front-end/processamento-de-imagens-em-javascript
 * https://www.tabnine.com/code/javascript/functions/jimp/Jimp/write
 *
 * Image JS
 * https://image-js.github.io/image-js/#imagesum
 * https://www.npmjs.com/package/image-js
 * https://github.com/image-js/image-js
 *
 * OpenCV
 * https://www.ccoderun.ca/programming/doxygen/opencv/tutorial_js_image_arithmetics.html
 * https://docs.opencv.org/3.4/dd/d4d/tutorial_js_image_arithmetics.html
 * - Blending: https://codepen.io/huningxin/pen/GEGEWM
 * - https://github.com/haoking/opencvjs
 * -
**/
