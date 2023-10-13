let link = document.createElement('link');
link.href = './css/style.css'

let divContainer = document.querySelector(`#div-container`);
let slider = document.querySelector(`.grid-modifier`);
let canvasSizeText = document.querySelector(`.canvas-size-label`);

function fillUpContainer(gridSize){
    if(divContainer.hasChildNodes()){
        while(divContainer.firstChild){
            divContainer.removeChild(divContainer.lastChild);
        }
    }
    let actualGridSize = gridSize * gridSize;
    for(let i = 1; i <= actualGridSize; i++){   
        let childDiv = document.createElement('div');
        childDiv.setAttribute('class', 'child');
        childDiv.style.flexBasis = `calc(100% / ${gridSize})`;
        childDiv.style.backgroundColor = 'grey';
        divContainer.appendChild(childDiv);  
    }
}

slider.oninput = function(){
    canvasSizeText.textContent = `${this.value} x ${this.value} canvas size`;
    fillUpContainer(this.value);
}


