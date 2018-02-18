


# This project is a proof-of-concept for a library that will work with phaser games to simulate an old-school gameboy 
controller, and provide you with these inputs in your phaser game as if they were normal keypresses.


Currently, I only have the "up arrow" button on the page. This is a normal div and lives outside of the phaser game.
The whole point of this is so that the gameboy controls can have a window (where the gameboy screen would be) that the user
can just drop their main div in which phaser gets rendered and code as usual. This way the creator can simply build
the game listening for arrow key press events and easily have a way to let the user trigger those keypress events on 
mobile devices by simply pressing the gameboy buttons.


Checkout the live demo here: https://jimtheman.github.io/Old-School-Gameboy-Controls/

_Note: This projet is still a work-in-progress._


#### How To Use Gameboy Controls in Another Project

I'm imagining a tax where you can just wrap your main root game tag named "content" or "app" or something and wrap that in
another div marked as gameboy-controls. Then you just add the gameboy-controls (or possibly it happens behind the scenes).

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Example Of Simple Index.Html With Game Controls/title>
</head>

<body>
    <script src="./gameboy-controls.js"></script>

    <div id="gameboy-controls">
        <div id="content"></div>
    </div>

<script type="text/javascript" src="./dist/vendor.bundle.js"></script><script type="text/javascript" src="./dist/bundle.js"></script></body>

</html>

```


Then in your phaser code listen for the arrow keys as usual.

```
      this.game.input.keyboard.onDownCallback = (e) => {
          console.log('Phaser game heard key DOWN event for ' + e.key +
             " keycode: " + e.keyCode + ", charCode: " + e.charCode);

          
          if (e.keyCode === 38) {       // up arrow key
            this.mushroom.x = Math.floor(Math.random() * this.world.bounds.width);
            this.mushroom.y = Math.floor(Math.random() * this.world.bounds.height);
          }

      }
```



The images are svg and should scale to any portrait sreen without degrading quality. 




$ Contributing To Old-School Gameboy Controls


#### This sample project was scaffolded with Phaser + ES6 + Webpack.

![Phaser+ES6+Webpack](https://raw.githubusercontent.com/lean/phaser-es6-webpack/master/assets/images/phaser-es6-webpack.jpg)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


## Features
- ESLINT with JavaScript Standard Style configuration
- Next generation of Javascript
- Browsers are automatically updated as you change project files
- Webpack ready
- WebFont Loader


# Setup

## 1. Install node.js and npm:

https://nodejs.org/en/


## 2. Navigate into the sample-phaser project folder

`cd sample-phaser-project`


## 3. Install dependencies (optionally you can install [yarn](https://yarnpkg.com/)):

Run:

```npm install``` 

or if you chose yarn, just run ```yarn```


## 4. Run the development server:

Run:

```npm run dev```

This will run a server so you can run the game in a browser. It will also start a watch process, so you can change the source and the process will recompile and refresh the browser automatically.

To run the game, open your browser and enter http://localhost:3000 into the address bar.


## Build for deployment:

Run:

```npm run deploy```


_Current build is sort of hackish. You may need to go into build/index.html and change game-controls path to "./gameboy-controls.js"_


This will optimize and minimize the compiled bundle.

## Deploy for cordova:
Make sure to uncomment the cordova.js file in the src/index.html and to update config.xml with your informations. (name/description...)

More informations about the cordova configuration:
https://cordova.apache.org/docs/en/latest/config_ref/

There is 3 platforms actually tested and supported : 
- browser
- ios
- android

First run (ios example):

```
npm run cordova
cordova platform add ios
cordova run ios
```

Update (ios example):

```
npm run cordova
cordova platform update ios
cordova run ios
```

This will optimize and minimize the compiled bundle.

## Config:
before you get to work you will surely want to check the config file. You could setup dimensions, webfonts, etc

## Webfonts:
In the config file you can specify which webfonts you want to include. In case you do not want to use webfonts simply leave the array empty

## Credits
Big thanks to these great repos:

https://github.com/belohlavek/phaser-es6-boilerplate

https://github.com/cstuncsik/phaser-es6-demo

## Contributors

https://github.com/RenaudROHLINGER