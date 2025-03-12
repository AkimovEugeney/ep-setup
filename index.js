#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const templates = [
  { src: path.join(__dirname, '.prettier.template.json'), dest: '.prettierrc' },
  { src: path.join(__dirname, '.eslintrc.template.js'), dest: '.eslintrc.js' }
];

templates.forEach(({ src, dest }) => {
  const destPath = path.join(process.cwd(), dest);
  fs.copyFileSync(src, destPath);
  console.log(`✅ ${dest} has been updated from the template!`);
});

console.log('📦 Installing ESLint and Prettier...');
const { execSync } = require('child_process');
execSync(
  'npm install --save-dev eslint prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-prettier prettier-plugin-tailwindcss @trivago/prettier-plugin-sort-imports',
  { stdio: 'inherit' }
);

console.log('🚀 ESLint and Prettier have been successfully configured!');