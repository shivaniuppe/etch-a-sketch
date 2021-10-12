let i = 0;
/* creating the grid boxes */ 
const gridContainer = document.querySelector('#gridContainer');
const contain = document.querySelector('#buttons');

function gridDisplay(size){
    gridContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, auto)`;
    for(let i = 0; i < size**2; i++){
        const gridBox = document.createElement('div');
        gridBox.setAttribute('id', 'gridBox');
        gridContainer.appendChild(gridBox);
    }
}

/* selecting the color button */
const colorSelector = document.querySelector('#colorSelector');
const colorBtn = document.querySelector('#colorBtn');

colorBtn.addEventListener('click', () => {
    i = 1;
    const boxes = gridContainer.querySelectorAll('div');
    boxes.forEach(grid => grid.addEventListener('mouseover', () => {
        grid.style.background = colorSelector.value;
    }));
});

/* selecting the rainbow button */
const rainbowBtn = document.querySelector('#rainbowBtn');

rainbowBtn.addEventListener('click', () => {
    i = 2;
const boxes = gridContainer.querySelectorAll('div');        
    boxes.forEach(grid => grid.addEventListener('mouseover', () => {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        grid.style.background = `rgb(${randomR}, ${randomB}, ${randomG})`;
    }));
});

/* selecting the eraser button */
const eraserBtn = document.querySelector('#eraserBtn');

eraserBtn.addEventListener('click', () => {
    const boxes = gridContainer.querySelectorAll('div');
    boxes.forEach(grid => grid.addEventListener('mouseover', () => {
        grid.style.background = "white";
    }));
});

/* selecting the clear button */
const resetBtn = document.querySelector('#clearBtn');

resetBtn.addEventListener('click', () => {
    const boxes = gridContainer.querySelectorAll('div');
    boxes.forEach(grid => grid.style.background = "white");
    if(i == 1){
        defaultColor();
    }
    if(i == 2){
        rainbowColor();
    }
    /* code for resetting the grid to default values
    //boxes.forEach(grid => grid.remove());
    //colorSelector.value = "black";
    //defaultSize();
    //defaultColor(); */
});

/* changing the value of the slider */    
const sliderValueDisplay = document.createElement('p');
const resizeSlider = document.querySelector('#resizeSlider');

sliderValueDisplay.setAttribute('id', 'sliderValueDisplay');
buttons.appendChild(sliderValueDisplay);
sliderValueDisplay.textContent = `${parseInt(resizeSlider.value)} x ${parseInt(resizeSlider.value)}`;
    
resizeSlider.addEventListener('change', () => {
    let sliderValue = parseInt(resizeSlider.value);
    const boxes = gridContainer.querySelectorAll('div');
    boxes.forEach(grid => grid.remove());
    gridDisplay(sliderValue);
    if(i == 1 || i == 0){
        defaultColor();
    }
    if(i == 2){
        rainbowColor();
    }
});

resizeSlider.addEventListener('input', () => {
    sliderValueDisplay.textContent = `${parseInt(resizeSlider.value)} x ${parseInt(resizeSlider.value)}`;
});

/* default size of the grid */
function defaultSize(){
    gridDisplay(16);
}

/* default color to be selected */
function defaultColor(){
    const boxes = gridContainer.querySelectorAll('div');
        boxes.forEach(grid => grid.addEventListener('mouseover', () => {
            grid.style.background = colorSelector.value;
    }));
}

/* rainbow color to be selected */
function rainbowColor(){
    const boxes = gridContainer.querySelectorAll('div');        
    boxes.forEach(grid => grid.addEventListener('mouseover', () => {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        grid.style.background = `rgb(${randomR}, ${randomB}, ${randomG})`;
    }));
}

/* window reload */
window.onload = () => {
    defaultSize();
    defaultColor();
}
