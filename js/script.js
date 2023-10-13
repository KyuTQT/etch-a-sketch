let link = document.createElement('link');
link.href = './css/style.css'

let divContainer = document.querySelector(`#div-container`);

function fillUpContainer(gridSize){
    let actualGridSize = gridSize * gridSize;
    for(let i = 1; i <= actualGridSize; i++){   
        let childDiv = document.createElement('div');
        childDiv.setAttribute('class', 'child');
        childDiv.style.flexBasis = `calc(100% / ${gridSize})`;
        childDiv.style.backgroundColor = 'grey';
        divContainer.appendChild(childDiv);  
    }
}

fillUpContainer(64);
