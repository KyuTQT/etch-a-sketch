let link = document.createElement('link');
link.href = './css/style.css'

let divContainer = document.querySelector(`#div-container`);
let slider = document.querySelector(`.grid-modifier`);
let canvasSizeText = document.querySelector(`.canvas-size-label`);
let normalPaint = document.querySelector('#normal');
let partyPaint = document.querySelector('#party');
let clearPaint = document.querySelector('#clear');

let isMousePressed = false;
let gridCanvas;

function fillUpContainer(gridSize){
    gridCanvas = gridSize;
    if(divContainer.hasChildNodes()){
        divContainer.innerHTML = '';
    }
    let actualGridSize = gridSize * gridSize;
    for(let i = 1; i <= actualGridSize; i++){   
        let childDiv = document.createElement('div');
        childDiv.setAttribute('class', 'child');
        childDiv.style.flexBasis = `calc(100% / ${gridSize})`;
        childDiv.style.backgroundColor = '#E7ECEF';
        divContainer.appendChild(childDiv);  
    }
}

fillUpContainer(32);

slider.oninput = function(){
    canvasSizeText.textContent = `${this.value} x ${this.value} canvas size`;
    fillUpContainer(this.value);
}

clearPaint.addEventListener('click', function(){
    fillUpContainer(gridCanvas);
})

divContainer.addEventListener('mousedown', function(){
    isMousePressed = true;
})

divContainer.addEventListener('mouseup', function(){
    isMousePressed = false;
})

divContainer.addEventListener('mousemove', function(e){
    if(isMousePressed){
        e.target.style.backgroundColor = 'black';
    }
})

divContainer.addEventListener('click', function(e){
    e.target.style.backgroundColor = 'black';
})


