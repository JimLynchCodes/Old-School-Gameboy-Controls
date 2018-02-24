document.body.onload = addElement;

console.log('document is ' + document);
console.log('document is ' + document.body);

var newDiv;


function addElement () {

    newDiv  = document.createElement("div");
    newDiv.id = "old-school-gameboy-controls";

    var newContent = document.createTextNode("Up Arrow Btn...");

    newDiv.appendChild(newContent);

    var upArrow = document.createElement("img");
    newDiv.appendChild(upArrow);
    upArrow.src = "./assets/images/up-arrow.svg";
    upArrow.style.width = "10vw";

    var downArrow = document.createElement("img");
    newDiv.appendChild(downArrow);
    downArrow.src = "./assets/images/up-arrow.svg";
    downArrow.style.width = "10vw";
    downArrow.classList.add('down-arrow-btn');

    var leftArrow = document.createElement("img");
    newDiv.appendChild(leftArrow);
    leftArrow.src = "./assets/images/up-arrow.svg";
    leftArrow.style.width = "10vw";
    leftArrow.classList.add('left-arrow-btn');

    var rightArrow = document.createElement("img");
    newDiv.appendChild(rightArrow);
    rightArrow.src = "./assets/images/up-arrow.svg";
    rightArrow.style.width = "10vw";
    rightArrow.classList.add('right-arrow-btn');


    var aBtn = document.createElement("img");
    newDiv.appendChild(aBtn);
    aBtn.src = "./assets/images/a-btn.svg";
    aBtn.style.width = "10vw";

    var bBtn = document.createElement("img");
    newDiv.appendChild(bBtn);
    bBtn.src = "./assets/images/b-btn.svg";
    bBtn.style.width = "10vw";

    var startBtn = document.createElement("img");
    newDiv.appendChild(startBtn);
    startBtn.src = "./assets/images/start-btn.svg";
    startBtn.style.width = "10vw";

    var selectBtn = document.createElement("img");
    newDiv.appendChild(selectBtn);
    selectBtn.src = "./assets/images/select-btn.svg";
    selectBtn.style.width = "10vw";



    addListeners = (buttonElement, keyName, keyCode) => {
        buttonElement.addEventListener("touchstart", function () {
            createKeyDownEvent(keyName, keyCode);
        });

        buttonElement.addEventListener('mousedown', function () {
            createKeyDownEvent(keyName, keyCode);
        })

        buttonElement.addEventListener('mouseup', function () {
            createKeyUpEvent(keyName, keyCode);
        })

        buttonElement.addEventListener("touchend", function () {
            createKeyUpEvent(keyName, keyCode);
        })

    };

    addListeners(upArrow, "ArrowUp", 38);
    addListeners(downArrow, "ArrowDown", 40);
    addListeners(leftArrow, "ArrowLeft", 37);
    addListeners(rightArrow, "ArrowRgiht", 39);
    addListeners(aBtn, "A", 65);
    addListeners(bBtn, "B", 83);
    addListeners(startBtn, "StartBtn", 80);
    addListeners(selectBtn, "SelectBtn", 79);

    // upArrow.addEventListener("touchstart", function () {
    //     createUpArrowKeyDownEvent();
    // });
    //
    // upArrow.addEventListener('mousedown', function () {
    //     createUpArrowKeyDownEvent();
    // })
    //
    // upArrow.addEventListener('mouseup', function () {
    //     createUpArrowKeyUpEvent();
    // })
    //
    // upArrow.addEventListener("touchend", function () {
    //     createUpArrowKeyUpEvent();
    // })



    function createKeyDownEvent(keyName, keyCode) {
        if(document.createEventObject)
        {
            var eventObj = document.createEventObject();
            eventObj.keyCode = keyCode;
            el.fireEvent("onkeydown", eventObj);
            eventObj.keyCode = keyCode;
            eventObj.charCode = 0;
            eventObj.key = keyName;
        }else if(document.createEvent)
        {
            var eventObj = document.createEvent("Events");
            eventObj.initEvent("keydown", true, true);
            eventObj.charCode = 0;
            eventObj.which = 38;
            eventObj.keyCode = 38;
            eventObj.key = "ArrowUp";
            document.body.dispatchEvent(eventObj);
        }
    }

    function createKeyUpEvent(keyName, keyCode) {
        if(document.createEventObject)
        {
            var eventObj = document.createEventObject();
            eventObj.keyCode = keyCode;
            el.fireEvent("onkeyup", eventObj);
            eventObj.keyCode = keyCode;
            eventObj.charCode = 0;
            eventObj.key = keyName;
        }else if(document.createEvent)
        {
            var eventObj = document.createEvent("Events");
            eventObj.initEvent("keyup", true, true);
            eventObj.charCode = 0;
            eventObj.which = keyCode;
            eventObj.keyCode = keyCode;
            eventObj.key = keyName;
            document.body.dispatchEvent(eventObj);
        }

    }



    // ====

    function createUpArrowKeyDownEvent() {
        if(document.createEventObject)
        {
            var eventObj = document.createEventObject();
            eventObj.keyCode = 38;
            el.fireEvent("onkeydown", eventObj);
            eventObj.keyCode = 38;
            eventObj.charCode = 0;
            eventObj.key = "ArrowUp";
        }else if(document.createEvent)
        {
            var eventObj = document.createEvent("Events");
            eventObj.initEvent("keydown", true, true);
            eventObj.charCode = 0;
            eventObj.which = 38;
            eventObj.keyCode = 38;
            eventObj.key = "ArrowUp";
            document.body.dispatchEvent(eventObj);
        }
    }

    function createUpArrowKeyUpEvent() {
        if(document.createEventObject)
        {
            var eventObj = document.createEventObject();
            eventObj.keyCode = 38;
            el.fireEvent("onkeyup", eventObj);
            eventObj.keyCode = 38;
            eventObj.charCode = 0;
            eventObj.key = "ArrowUp";
        }else if(document.createEvent)
        {
            var eventObj = document.createEvent("Events");
            eventObj.initEvent("keyup", true, true);
            eventObj.charCode = 0;
            eventObj.which = 38;
            eventObj.keyCode = 38;
            eventObj.key = "ArrowUp";
            document.body.dispatchEvent(eventObj);
        }

    }


    // add the newly created element and its content into the DOM
    var currentDiv = document.getElementById("game-controls");

    console.log('current div ' + currentDiv)
    document.body.insertBefore(newDiv, currentDiv);
}