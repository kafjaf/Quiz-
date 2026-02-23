// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   darkMode: 'class', // Permet de basculer en ajoutant la classe .dark
//   theme: {
//     extend: {
//       colors: {
//         // On définit des noms sémantiques au lieu de noms de couleurs
//         app: {
//           bg: 'var(--bg-color)',
//           card: 'var(--card-bg)',
//           text: 'var(--text-color)',
//           border: 'var(--border-color)',
//         }
//       },
//     },
//   },
//   plugins: [],
// }

const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ✅ On dit à Tailwind de regarder dans TOUS tes fichiers HTML et TS
  content: [
    join(__dirname, 'apps/quiz-lock/src/**/*.{html,ts}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        app: {
          bg: 'var(--bg-color)',
          card: 'var(--card-bg)',
          text: 'var(--text-color)',
          border: 'var(--border-color)',
        }
      },
    },
  },
  plugins: [],
}

