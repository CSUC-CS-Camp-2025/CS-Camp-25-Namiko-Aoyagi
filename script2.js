let prevX, prevY;
let isThick = false;
let strokeColor;
let clearButton, thicknessButton, colorPicker, saveButton;

function setup() {
    createCanvas(400,200);
    background(242, 244, 248);
    smooth();

    const toolbar = createDiv().addClass("toolbar");

    //color picker
    colorPicker = createColorPicker("#000000");
    colorPicker.parent(toolbar);

    //thickness toggle
    thicknessButton = createButton("Toggle Thickness");
    thicknessButton.mousePressed(toggleThickness);
    thicknessButton.parent(toolbar);

    //clear button
    clearButton = createButton("Clear Canvas");
    clearButton.mousePressed(clearCanvas);
    clearButton.parent(toolbar);

    //save button
    saveButton = createButton("Save Drawing");
    saveButton.mousePressed(saveDrawing);
    saveButton.parent(toolbar);
}

function draw() {
    if (mouseIsPressed && mouseY <= height) {
        stroke(strokeColor || colorPicker.color());
        strokeWeight(isThick ? 10 : 2);
        line(prevX, prevY, mouseX, mouseY);
    }
    prevX = mouseX;
    prevY = mouseY;
}

function toggleThickness() {
    isThick = !isThick;
    thicknessButton.html(isThick ? "Thin Stroke" : "Thick Stroke");
}

function clearCanvas() {
    background(240);
}

function saveDrawing() {
    saveCanvas("my-drawing", "png");
}