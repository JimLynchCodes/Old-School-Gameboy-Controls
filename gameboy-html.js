// Create a class for the element



class gameboy extends HTMLElement {

    constructor() {

        super();

        var myEle = document.getElementById("derp");
        if(myEle === null) {


            console.log('its null!');
               // Always call super first in constructor

        // Create a shadow root
        var shadow = this.attachShadow({mode: 'open'});


        var container = document.createElement('div');
        container.id = "gameboy-controls";
        shadow.appendChild(container);

        // Create a standard img element and set its attributes.
        // // img.alt = this.getAttribute('hey');
        // // img.src = this.getAttribute('./assets/derp.png');
        // img.width = '150px';
        // img.height = '150px';
        // // img.className = 'product-img';
        // img.backgroundColor = "red";
        //
        // // Add the image to the shadow root.
        // shadow.appendChild(img);

        // Add an event listener to the image.
        // img.addEventListener('click', () => {
        //
        //     console.log('clicking gameboy controls!')
        //     window.location = this.getAttribute('data-url');
        // });

        // Create a link to the product.
        var link = document.createElement('a');
        link.innerText = "Hey hey"
        link.href = this.getAttribute('data-url');
        link.className = 'product-name';

        // Add the link to the shadow root.
            container.appendChild(link);

        // var img2 = document.createElement('img');
        // // img.alt = this.getAttribute('hey');
        // img2.src = 'derp.png';
        // img2.width = '150px';
        // img2.height = '150px';
        // // img.className = 'product-img';
        // // img2.backgroundColor = "red";
        //
        // shadow.appendChild(img2);


        this.img3 = document.createElement('img');
        this.img3.src = 'derp.png';
        this.img3.id = 'derp';
        // document.getElementById('container').appendChild(img3);
            container.appendChild(this.img3);

        this.img3.addEventListener('click', () => {

                console.log('clicking gameboy controls!');
                // window.location = this.getAttribute('data-url');
            });

        }
    }
}




    console.log('ok', customElements.get('game-boy'))
    // console.log('ok', )
// Define the new element

if (customElements.get('game-boy') === undefined) {
    console.log('ok', customElements)
 console.log('oncing!');

customElements.define('game-boy', gameboy);

}
