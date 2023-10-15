let divContainer = document.querySelector(`#div-container`);
let slider = document.querySelector(`.grid-modifier`);
let canvasSizeText = document.querySelector(`.canvas-size-label`);
let normalPaint = document.querySelector('#normal');
let partyPaint = document.querySelector('#party');
let clearPaint = document.querySelector('#clear');

let isMousePressed = false;
let gridCanvas;
let isPartyOn = false;
let randomizedRGBColor = [];
let canColor = false;

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
        childDiv.addEventListener('mouseleave', function(){
            canColor = true;
        })
        divContainer.appendChild(childDiv);  
    }
}

fillUpContainer(32);

partyPaint.classList.toggle('active');


slider.addEventListener('input', function(){
    canvasSizeText.textContent = `${this.value} x ${this.value} canvas size`;
})


slider.addEventListener('mouseup', function(){
    fillUpContainer(this.value);
})


clearPaint.addEventListener('click', function(){
    fillUpContainer(gridCanvas);
})

normalPaint.addEventListener('click', function(){
    if(isPartyOn){
        normalPaint.classList.toggle('active');
        partyPaint.classList.toggle('active');
    }
    isPartyOn = false;
})

partyPaint.addEventListener('click', function(){
    if(!isPartyOn){
        partyPaint.classList.toggle('active');
        normalPaint.classList.toggle('active');
    }
    isPartyOn = true;
})

divContainer.addEventListener('dragstart', (event) => {
    event.preventDefault();
  })

divContainer.addEventListener('mousedown', function(e){
    isMousePressed = true;
    gridColor(e.target);
    canColor = false;
})

divContainer.addEventListener('mouseup', function(){
    isMousePressed = false;
})

function gridColor(selectedGrid){
    if(!isPartyOn){
        selectedGrid.style.backgroundColor = 'black';
    }
    else{
        for(let i = 0; i <= 2; i++){
            let randomNumber = Math.floor(Math.random() * 256);
            randomizedRGBColor[i] = randomNumber;
        }
        selectedGrid.style.backgroundColor = `rgb(${randomizedRGBColor[0]}, ${randomizedRGBColor[1]}, ${randomizedRGBColor[2]})`;
    }
}


divContainer.addEventListener('mousemove', function(e){
    if(isMousePressed && canColor){
        gridColor(e.target);
        canColor = false;
    }
})



