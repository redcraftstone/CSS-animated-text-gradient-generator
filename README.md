# CSS animated text gradient generator

With the help of this small script you can easily generate a CSS '@keyframes' snippet that gives your text an animated glow when used for your HTML projects. Colors and other variables can be set as seen below.

## Variables

At the top of the index.js file you'll find multiple variables you can change to whatever you want.

```javascript
let filename = "result.txt"; // filename to output to
let degree = 45; // the degree of the animated linear gradient
let background = "rgb(221, 221, 221)"; // any color as string
let highlight = "rgb(255, 255, 255)"; // any color as string
let width = 5; // "width" of the hightlight; just try it out or look into the code
let steps = 100; // count of seperate steps to generate, defaults to 100 -> [0%, ... 100%]
```

## Run

To use the script, download the project, change the variables the way you want inside the index.js file and run it with

```
node index.js
```

You will then find a .txt-file with the name given in the 'results' folder.

## Disclaimer

The project is not input proof in any way, thus could break easily. I am not liable for any errors that occur.

## License

[MIT](https://choosealicense.com/licenses/mit/)
