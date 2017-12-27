document.body.onload = addElement;

var newDiv;

function addElement () {
    // create a new div element
    newDiv  = document.createElement("div");
    newDiv.id = "hello";
    // and give it some content
    var newContent = document.createTextNode("Hi there and greetings!");
    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}