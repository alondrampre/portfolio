const fs = require('fs');
const files = ['project.html', 'morfologia.html', 'glossraw.html', 'aventura.html', '21together.html', 'soncosas.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf-8');
        
        // Remove desktop padding and max-width
        content = content.replace(/\.project-content\s*\{\s*padding:\s*5rem\s*3rem;\s*max-width:\s*1600px;\s*margin:\s*0\s*auto;\s*\}/g, '.project-content {\n            padding: 0;\n            max-width: 100%;\n            margin: 0;\n        }');
        
        // Remove mobile padding
        content = content.replace(/\.project-content\s*\{\s*padding:\s*3rem\s*1\.5rem;\s*\}/g, '.project-content {\n                padding: 0;\n            }');
        
        fs.writeFileSync(file, content, 'utf-8');
    }
});
console.log('Project content padding and margins removed for full width.');
