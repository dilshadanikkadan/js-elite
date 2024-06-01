// polyfill and transpiler  helps to write code developers without manging the older engine compactability
// before running the transpiler

// transpilers
//running my code
height = height ?? 100;

// after running the transpiler
height = (height !== undefined && height !== null) ? height : 100;


//polyfill
// if any function not inlclude in the old function it will do the function defintion along with his capabilities
//Math.trunc()