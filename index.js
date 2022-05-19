// All dependencies 
const {readFileSync} = require('fs');
const htmlParser = require('./src/parser');
const { getExtension } = require('./src/util');

// Process start from here by getting the file name from command line
const filePath = process.argv[2];
const extension  = getExtension(filePath);
if(extension !== '.html'){
	throw new Error('File extension must be .html');
}
const htmlFile = readFileSync(filePath, 'utf8');
function parseFile(htmlFile){
	htmlParser.parse(htmlFile, {
		openElement: function(name) { console.log('open: %s', name); },
		closeOpenedElement: function(name, token, unary) { console.log('token: %s, unary: %s', token, unary); },
		closeElement: function(name) { console.log('close: %s', name); },
		comment: function(value) { console.log('comment: %s', value); },
		cdata: function(value) { console.log('cdata: %s', value); },
		attribute: function(name, value) { console.log('attribute: %s=%s', name, value); },
		docType: function(value) { console.log('doctype: %s', value); },
		text: function(value) { console.log('text: %s', value); },
		// xmlProlog: function(value) { console.log('xmlProlog: %s', value); },
	});
}

parseFile(htmlFile);
// parseHtmlAndShowText(htmlFile);