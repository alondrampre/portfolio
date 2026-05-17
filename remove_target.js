const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf-8');
// Remove target="_blank" and rel="noopener"
content = content.replace(/target="_blank"\s*rel="noopener"/g, '');
fs.writeFileSync('index.html', content, 'utf-8');
console.log('Removed target=_blank from index.html');
