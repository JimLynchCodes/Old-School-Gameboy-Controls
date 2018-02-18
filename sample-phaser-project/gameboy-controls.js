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
    upArrow.src = "./up-arrow.svg";
    upArrow.style.width = "10vw";
    upArrow.addEventListener('mousedown', function () {
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
    })

    upArrow.addEventListener('mouseup', function () {
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
    })



    // newDiv.addEventListener('click', function () {
    //     console.log('golly, I\'ve been clicked!');
    //
    //     var keyboardEvent = document.createEvent("KeyboardEvent");
    //     var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";
    //
    //
    //     keyboardEvent[initMethod](
    //         "keydown", // event type : keydown, keyup, keypress
    //         true, // bubbles
    //         true, // cancelable
    //         window, // viewArg: should be window
    //         false, // ctrlKeyArg
    //         false, // altKeyArg
    //         false, // shiftKeyArg
    //         false, // metaKeyArg
    //         38, // keyCodeArg : unsigned long the virtual key code, else 0
    //         0, // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
    //     );
    //     document.dispatchEvent(keyboardEvent);
    //
    //
    //
    //
    //     // var e = new KeyboardEvent("keydown", {
    //     //     key: "ArrowUp",
    //     //     code: 0,
    //     //     keyCode: 38
    //     //
    //     // });
    //     //
    //     // e.key="ArowUp";    // just enter the char you want to send
    //     // e.keyCode=38;
    //     // e.which=e.keyCode;
    //     // e.altKey=false;
    //     // e.ctrlKey=true;
    //     // e.shiftKey=false;
    //     // e.metaKey=false;
    //     // // e.bubbles=true;
    //     //
    //     // document.dispatchEvent(e);
    //
    //
    //
    //     if(document.createEventObject)
    //     {
    //         var eventObj = document.createEventObject();
    //         eventObj.keyCode = 38;
    //         el.fireEvent("onkeydown", eventObj);
    //         eventObj.keyCode = 38;
    //         eventObj.charCode = 0;
    //     }else if(document.createEvent)
    //     {
    //         var eventObj = document.createEvent("Events");
    //         eventObj.initEvent("keydown", true, true);
    //         eventObj.charCode = 0;
    //         eventObj.which = 38;
    //         eventObj.keyCode = 38;
    //         document.body.dispatchEvent(eventObj);
    //     }
    //
    //
    // });


    // add the newly created element and its content into the DOM
    var currentDiv = document.getElementById("game-controls");

    console.log('current div ' + currentDiv)
    document.body.insertBefore(newDiv, currentDiv);
}