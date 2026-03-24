const https = require('https');
const fs = require('fs');
const path = require('path');

const files = [
  { url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/unity/unity.png', name: 'unity.png' },
  { url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/csharp/csharp.png', name: 'csharp.png' },
  { url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/blender/blender.png', name: 'blender.png' },
  { url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/android/android.png', name: 'android.png' }
];

files.forEach(f => {
  https.get(f.url, (res) => {
    const filepath = path.join(__dirname, 'public', 'images', f.name);
    const stream = fs.createWriteStream(filepath);
    res.pipe(stream);
    stream.on('finish', () => console.log(`Downloaded ${f.name}`));
  }).on('error', (e) => {
    console.error(`Error downloading ${f.name}: ${e.message}`);
  });
});
