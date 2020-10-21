const RewritingStream = require('parse5-html-rewriting-stream');
const http = require('http');
const fs = require('fs');

const file = fs.createWriteStream('/home/google.com.html');
const rewriter = new RewritingStream();

// Replace divs with spans
rewriter.on('startTag', startTag => {
	if (startTag.tagName === 'span') {
		startTag.tagName = 'div';
	}

	rewriter.emitStartTag(startTag);
});

rewriter.on('endTag', endTag => {
	if (endTag.tagName === 'span') {
		endTag.tagName = 'div';
	}

	rewriter.emitEndTag(endTag);
});

// Wrap all text nodes with <i> tag
rewriter.on('text', (_, raw) => {
	// Use raw representation of text without HTML entities decoding
	rewriter.emitRaw(`<i>${raw}</i>`);
});

http.get('http://google.com', res => {
	// Assumes response is UTF-8.
	res.setEncoding('utf8');
	// RewritingStream is the Transform stream, which means you can pipe
	// through it.
	res.pipe(rewriter).pipe(file);
});