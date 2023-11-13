const path = require('path');

const buildLintCommand = (filenames) =>
  `pnpm run  lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const buildPrettierCommand = (filenames) =>
  `pnpm run format --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;

module.exports = {
  '*.{ts,tsx}': [buildPrettierCommand, buildLintCommand],
  '*.{js,css,md}': [buildPrettierCommand],
};
