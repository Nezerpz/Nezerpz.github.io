import { copyFileSync } from 'fs';
import { join } from 'path';

const root = process.cwd();
const index = join(root, 'docs', 'index.html');
const notFound = join(root, 'docs', '404.html');

try {
  copyFileSync(index, notFound);
  console.log('Copied docs/index.html to docs/404.html');
} catch (err) {
  console.error('Failed to copy index.html to 404.html', err);
  process.exit(1);
}

