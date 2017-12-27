var g = function() {

  setTimeout(function () {

    console.log('going');
    var el = document.getElementById("div");
    el.addEventListener("click", function () {
        console.log('derp')
    }, false);
  }, 5000)
};

g();

class Game extends Phaser.State {


  constructor() {
    super();
  }

  create() {
    const text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, 'Game', {
      font: '42px Arial', fill: '#ffffff', align: 'center'
    });
    text.anchor.set(0.5);

    this.input.onDown.add(this.endGame, this);
  }

  update() {

  }

  endGame() {
    this.game.state.start('gameover');
  }

}

export default Game;





