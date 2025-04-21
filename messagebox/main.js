var a = "C:/Users/soap/source/repos/NodeJS Addon4/Release/NodeJS Addon4.node"
//const addon = require(a);
const addon = require('./GetCursorPosition.node');


const L = console.log;
terminal = {
    bg: {},
    fg: {},
    clear: "\x1b[2J",
    clear2: "\x1Bc",
    reset: "\x1b[0f"
}
// for(;;) {
    // const a = new addon.args("John" , "Male"  );
    // const b = new addon.args("Sarah", "Female");
    // console.log( a.hi() );
    // console.log( b.name );
    L(addon);
    addon.MessageBox();
    // const pos     = addon.GetCursorPos()           ;
    // const window  = addon.GetActiveWindow()        ;
    // const mouseX  = `Mouse X: ${pos.x}`            ;
    // const mouseY  = `Mouse Y: ${pos.y}`            ;
    // const wName   = `Active Window: ${window.name}`;
    // const wHeight = `Height: ${window.height}`     ;
    // const wWidth  = `Width: ${window.width}`       ;
    // const wXPos   = `X: ${window.x}`               ;
    // const wYPos   = `Y: ${window.y}`               ;
    // process.stdout.write(`${mouseX}\n${mouseY}\n${wName}\n ${wHeight} ${wWidth}\n${wXPos} ${wYPos}${terminal.clear2}`);
    // process.stdout.write(`${mouseX}\n${mouseY}\n${wName}\n ${wHeight} ${wWidth}\n${wXPos} ${wYPos}`);
    // process.stdout.write(`${terminal.clear2}`);
    
// }
// var pos    = addon.GetCursorPos()
// var window = addon.GetActiveWindow()
// process.stdout.write(`Active Window: ${window.name}\n  Height: ${window.height} Width: ${window.width}`);