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
    upArrow.src = "./assets/up-arrow.svg";
    upArrow.style.width = "10vw";

    upArrow.addEventListener("touchstart", function () {
        createUpArrowKeyDownEvent();
    });

    upArrow.addEventListener('mousedown', function () {
        createUpArrowKeyDownEvent();
    })

    upArrow.addEventListener('mouseup', function () {
        createUpArrowKeyUpEvent();
    })

    upArrow.addEventListener("touchend", function () {
        createUpArrowKeyUpEvent();
    })

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