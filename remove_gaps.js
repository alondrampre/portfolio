const fs = require('fs');
const files = ['project.html', 'morfologia.html', 'glossraw.html', 'aventura.html', '21together.html', 'soncosas.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf-8');
        // Remove the gap between images
        content = content.replace(/gap:\s*3rem;/g, 'gap: 0;');
        // Remove border radius so images are perfectly flush
        content = content.replace(/border-radius:\s*2px;/g, 'border-radius: 0;');
        fs.writeFileSync(file, content, 'utf-8');
    }
});
console.log('Margins and border-radius removed from all project files.');
