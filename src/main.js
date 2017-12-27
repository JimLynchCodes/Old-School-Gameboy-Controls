import Boot from './states/boot';
import Game from './states/game';
import Menu from './states/menu';
import Preloader from './states/preloader';
import Gameover from './states/gameover';
// import gameboy from './../gameboy-html'
// import newDiv from './../gameboy-2';


const game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'derp-phas-game');

game.state.add('boot', new Boot());
game.state.add('game', new Game());
game.state.add('menu', new Menu());
game.state.add('preloader', new Preloader());
game.state.add('gameover', new Gameover());

game.state.start('boot');

// console.log('div', newDiv);

// newDiv.addEventListener('click', function (e) {
//     console.log('clicked');
// })

window.onload = () => {
    setTimeout(function () {
    var el = document.getElementById('div');
console.log('div', el)
    }, 5000)

};
