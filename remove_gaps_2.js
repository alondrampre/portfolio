const fs = require('fs');
const files = ['project.html', 'morfologia.html', 'glossraw.html', 'aventura.html', '21together.html', 'soncosas.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf-8');
        // Add display: block to remove the tiny inline-block baseline gap
        content = content.replace(/\.pg-img\s*\{/, '.pg-img {\n            display: block;');
        fs.writeFileSync(file, content, 'utf-8');
    }
});
console.log('display: block added to all project files.');
