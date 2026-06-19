import { readFileSync, writeFileSync } from 'fs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { version } = require('../package.json');

const src = readFileSync('slides.md', 'utf8');
const out = src.replaceAll('{{VERSION}}', version);
writeFileSync('slides-build.md', out);
