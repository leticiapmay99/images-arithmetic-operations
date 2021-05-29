// Input Elements
const imgInputOne  = document.getElementById('imgInputOne');
const fileInputOne = document.getElementById('fileInputOne');

const imgInputTwo  = document.getElementById('imgInputTwo');
const fileInputTwo = document.getElementById('fileInputTwo');

const canvasOutput = document.getElementById('canvasOutput');

const btnSum            = document.getElementById('btnSum');
const btnSubtraction    = document.getElementById('btnSubtraction');
const btnMultiplication = document.getElementById('btnMultiplication');
const btnDivision       = document.getElementById('btnDivision');
const btnAverage        = document.getElementById('btnAverage');
const btnBlending       = document.getElementById('btnBlending');
const btnAndPort        = document.getElementById('btnAndPort');
const btnOrPort         = document.getElementById('btnOrPort');
const btnXorPort        = document.getElementById('btnXorPort');
const btnNotPort        = document.getElementById('btnNotPort');

// EventListeners
fileInputOne.addEventListener('change', (e) => {
  imgInputOne.src = URL.createObjectURL(e.target.files[0]);
  enableOperations();
}, false);

fileInputTwo.addEventListener('change', (e) => {
  imgInputTwo.src = URL.createObjectURL(e.target.files[0]);
  enableOperations();
}, false);

btnSum.addEventListener('click', () => {
  sumImages(imgInputOne, imgInputTwo)
});

btnSubtraction.addEventListener('click', () => {
  subtractionImages(imgInputOne, imgInputTwo)
});

// Operations
const sumImages = function(imgOneId, imgTwoId) {
  if (fileInputOne.value !== '' || fileInputTwo.value !== '') {
    let src1 = cv.imread(imgOneId);
    let src2 = cv.imread(imgTwoId);
    let dst = new cv.Mat();
    let mask = new cv.Mat();
    let dtype = -1;
    cv.add(src1, src2, dst, mask, dtype);
    cv.imshow(canvasOutput, dst);
    src1.delete();
    src2.delete();
    dst.delete();
    mask.delete();
  }
}

const subtractionImages = function(imgOneId, imgTwoId) {
  if (fileInputOne.value !== '' || fileInputTwo.value !== '') {
    let src1 = cv.imread(imgOneId);
    let src2 = cv.imread(imgTwoId);
    let dst = new cv.Mat();
    let mask = new cv.Mat();
    let dtype = -1;
    cv.subtract(src1, src2, dst, mask, dtype);
    cv.imshow(canvasOutput, dst);
    src1.delete();
    src2.delete();
    dst.delete();
    mask.delete();
  }
}

const enableOperations = function() {
  if (!fileInputOne.value || !fileInputTwo.value) return;

  const buttons = document.querySelectorAll('.list-block .list-buttons button');

  buttons.forEach(btn => {
    btn.removeAttribute('disabled')
  });
}

const appStatus = function() {
  const status = document.getElementById('status');
  status.classList.add('ready')
  status.innerHTML = 'OpenCV.js is ready!';
  
  this.setTimeout(() => {
    status.classList.add('hidden')
  }, 1500);
}

/** 
 * Verifica e dispara eventos se o DOM carregou
 * https://devanilla.com/articles/on-load-vanilla-javascript
 * https://docs.opencv.org/3.4/dd/d4d/tutorial_js_image_arithmetics.html
**/
window.addEventListener('load', appStatus);


/** 
 * Exemplos encontrados
 * https://www.ccoderun.ca/programming/doxygen/opencv/tutorial_js_image_arithmetics.html
 * https://docs.opencv.org/3.4/dd/d4d/tutorial_js_image_arithmetics.html
 * - Blending: https://codepen.io/huningxin/pen/GEGEWM
 * - https://github.com/haoking/opencvjs
 * - 
**/
