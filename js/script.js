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
    shouldGetColor = true;
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
        if(selectedGrid.style.backgroundColor === 'black' || selectedGrid.style.backgroundColor === 'rgb(231, 236, 239)'){
            selectedGrid.style.backgroundColor = `rgb(${randomizedRGBColor[0]}, ${randomizedRGBColor[1]}, ${randomizedRGBColor[2]})`;
        }
        
    }
}


divContainer.addEventListener('mousemove', function(e){
    console.log(e.target.style.backgroundColor);
    if(isMousePressed){
        gridColor(e.target);
    }
})

divContainer.addEventListener('click', function(e){
    gridColor(e.target);
})


