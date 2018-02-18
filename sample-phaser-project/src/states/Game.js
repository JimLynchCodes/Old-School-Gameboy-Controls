/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'

export default class extends Phaser.State {
  init() { }
  preload() { }

  create() {
      const bannerText = 'Phaser + ES6 + Webpack';
      let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText, {
          font: '40px Bangers',
          fill: '#77BFA3',
          smoothed: false
      })

      banner.padding.set(10, 16)
      banner.anchor.setTo(0.5)

      this.mushroom = new Mushroom({
          game: this.game,
          x: this.world.centerX,
          y: this.world.centerY,
          asset: 'mushroom'
      })

      this.game.add.existing(this.mushroom);

      this.game.input.keyboard.onDownCallback = (e) => {
          console.log('Phaser game heard key DOWN event for ' + e.key +
             " keycode: " + e.keyCode + ", charCode: " + e.charCode);

          if (e.keyCode === 38) {
            this.mushroom.x = Math.floor(Math.random() * this.world.bounds.width);
            this.mushroom.y = Math.floor(Math.random() * this.world.bounds.height);
          }

      }


      this.game.input.keyboard.onUpCallback = (e) => {
          console.log('Phaser game heard key UP event for ' + e.key +
              " keycode: " + e.keyCode + ", charCode: " + e.charCode);

          this.mushroom.x = this.world.centerX;
          this.mushroom.y = this.world.centerY;

      }

  }


  render() {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }

}
