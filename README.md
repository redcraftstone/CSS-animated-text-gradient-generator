# CSS animated text gradient generator

With the help of this small script you can easily generate a '@keyframes' snippet that gives your text an animated glow when used. Colors and other variables can be set by you. The code with save to an .txt file for you to copy from.

## Variables

At the top of the index.js file you'll find multiple variables you can change how you want.

```javascript
let filename = "result.txt"; // filename to output to
let degree = 45; // the degree of the animated linear gradient
let background = "rgb(221, 221, 221)"; // any color as string
let highlight = "rgb(255, 255, 255)"; // any color as string
let width = 5; // "width" of the hightlight; just try it out or look into the code
let steps = 100; // count of seperate steps to generate, 100 would mean the code calculates 101 seperate frames [0%, 1%, 2%, 3%, ... 99%, 100%]
```

## Run

To use the script, download the project, change the variables the way you want inside the index.js file and run it with

```
node index.js
```

You will then find a .txt-file with the name given in the 'results' folder.

## License

[MIT](https://choosealicense.com/licenses/mit/)
