// const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
// const { join } = require('path');

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
//     ...createGlobPatternsForDependencies(__dirname),
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/quiz-lock/src/**/*.{html,ts}",
    "./libs/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0055ff',
          dark: '#0f172a',
        }
      }
    },
  },
  plugins: [],
}
