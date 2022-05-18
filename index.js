#!/usr/bin/env node
const {readFileSync} = require('fs');
var htmlParser = require('./src/parser');
const htmlFile = readFileSync('./index.html', 'utf8');

htmlParser.parse(htmlFile, {
	openElement: function(name) { console.log('open: %s', name); },
	closeOpenedElement: function(name, token, unary) { console.log('token: %s, unary: %s', token, unary); },
	closeElement: function(name) { console.log('close: %s', name); },
	comment: function(value) { console.log('comment: %s', value); },
	cdata: function(value) { console.log('cdata: %s', value); },
	attribute: function(name, value) { console.log('attribute: %s=%s', name, value); },
	docType: function(value) { console.log('doctype: %s', value); },
	text: function(value) { console.log('text: %s', value); }
});
function parseHtmlAndShowText(html) {
    const root = parse(html);
    root.childNodes.map(node => {
        console.log("Nodes",node.structure);
        node.childNodes.map(node => {
            console.log("Nested Nodes",node.structure);
        });
    })
}

// parseHtmlAndShowText(htmlFile);