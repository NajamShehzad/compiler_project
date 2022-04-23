const {parse} = require("node-html-parser")

const root = parse('<ul id="list"><li>Hello World</li></ul>');

console.log(root.firstChild.structure);