#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const templates = [
  { src: path.join(__dirname, '.prettier.template.json'), dest: '.prettierrc' },
  { src: path.join(__dirname, '.eslintrc.template.js'), dest: '.eslintrc.js' }
];

// Копируем шаблоны и перезаписываем существующие файлы
templates.forEach(({ src, dest }) => {
  const destPath = path.join(process.cwd(), dest);

  // Всегда перезаписываем файл
  fs.copyFileSync(src, destPath);
  console.log(`✅ ${dest} перезаписан из шаблона!`);
});

// Устанавливаем зависимости
console.log('📦 Устанавливаем ESLint и Prettier...');
const { execSync } = require('child_process');
execSync(
  'npm install --save-dev eslint prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-prettier prettier-plugin-tailwindcss @trivago/prettier-plugin-sort-imports',
  { stdio: 'inherit' }
);

console.log('🚀 ESLint и Prettier успешно настроены!');