const fs = require('fs');
const { SourceMapGenerator } = require('source-map');

const generatedCode = `// Seu código JavaScript aqui
console.log('Hello, world!');
`;

// Arquivo 1
const map1 = new SourceMapGenerator({ file: 'confirmo.js' });
map1.addMapping({
  source: 'confirmo.js',
  original: { line: 1, column: 0 },
  generated: { line: 1, column: 0 },
});

fs.writeFileSync('confirmo.js.map', map1.toString());

fs.writeFileSync('confirmo-transpilado.js', generatedCode);

// Arquivo 2
const map2 = new SourceMapGenerator({ file: 'contributors.js' });
map2.addMapping({
  source: 'contributors.js',
  original: { line: 1, column: 0 },
  generated: { line: 1, column: 0 },
});

fs.writeFileSync('contributors.js.map', map2.toString());

fs.writeFileSync('contributors-transpilado.js', generatedCode);

