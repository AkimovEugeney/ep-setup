#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const templates = [
  { src: path.join(__dirname, '.prettier.template'), dest: '.prettierrc' },
  { src: path.join(__dirname, '.eslintrc.template'), dest: '.eslintrc.js' }
];

templates.forEach(({ src, dest }) => {
  const destPath = path.join(process.cwd(), dest);

  if (!fs.existsSync(destPath)) {
    fs.copyFileSync(src, destPath);
    console.log(`✅ ${dest} создан из шаблона!`);
  } else {
    console.log(`⚠️ ${dest} уже существует, пропускаем...`);
  }
});

// Устанавливаем зависимости
console.log('📦 Устанавливаем ESLint и Prettier...');
const { execSync } = require('child_process');
execSync(
  'npm install --save-dev eslint prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-prettier prettier-plugin-tailwindcss @trivago/prettier-plugin-sort-imports',
  { stdio: 'inherit' }
);

console.log('🚀 ESLint и Prettier успешно настроены!');