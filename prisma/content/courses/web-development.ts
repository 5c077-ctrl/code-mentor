import type { CategoryDef } from '../types';
import { mcq, trueFalse, quiz, lesson, setupLesson } from '../helpers';

export const webDevelopmentCategory: CategoryDef = {
  name: 'Web Development Essentials',
  slug: 'web-development',
  description: 'Master HTML5, CSS3, JavaScript (ES6+), Bootstrap, Tailwind CSS, and Web APIs.',
  icon: '🌐',
  color: '#3b82f6',
  sortOrder: 3,
  courses: [
    {
      title: 'HTML5 & CSS3',
      slug: 'html5-css3',
      description: 'Master semantic HTML5 structures, CSS Flexbox, Grid, keyframe animations, and modern responsive layouts.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'youtube', title: 'HTML & CSS Full Course for Beginners', url: 'https://www.youtube.com/watch?v=mU6anWqZJcc', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'CSS Flexbox in 20 Minutes', url: 'https://www.youtube.com/watch?v=fYq5PXgSsbE', author: 'Kevin Powell', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'CSS Grid Crash Course', url: 'https://www.youtube.com/watch?v=jV8B24rSN5o', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Responsive Web Design Tutorial', url: 'https://www.youtube.com/watch?v=srvUrASNj0s', author: 'DesignCourse', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Modern CSS Animations & Transitions', url: 'https://www.youtube.com/watch?v=YszONjKpCN4', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'article', title: 'MDN Web Docs — HTML & CSS Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', author: 'Mozilla Developer Network' },
        { resourceType: 'article', title: 'A Complete Guide to Flexbox', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', author: 'CSS-Tricks' },
        { resourceType: 'article', title: 'A Complete Guide to CSS Grid', url: 'https://css-tricks.com/snippets/css/complete-guide-grid/', author: 'CSS-Tricks' },
        { resourceType: 'cheatsheet', title: 'HTML5 Semantic Elements Reference', url: 'https://htmlcheatsheet.com/', author: 'HTMLCheatSheet' },
        { resourceType: 'cheatsheet', title: 'CSS Properties & Glassmorphism Cheat Sheet', url: 'https://quickref.me/css', author: 'QuickRef' }
      ],
      modules: [
        {
          title: 'Section 1: Semantic HTML5 & CSS Foundations',
          lessons: [
            setupLesson('HTML5 & CSS3', 'html5-css3', 'html',
              'Create index.html and style.css in VS Code.',
              '<!DOCTYPE html>\n<html>\n<head><title>Web App</title></head>\n<body><h1>HTML5 Ready</h1></body>\n</html>',
              '<!DOCTYPE html>\n<html>\n<head><title>Web App</title></head>\n<body><h1>HTML5 Ready</h1></body>\n</html>'
            ),
            lesson('Semantic Elements & Accessibility', 'html5-semantic-elements', '# Semantic HTML5\n\nUse `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, and `<footer>` for SEO and screen reader accessibility.', { quiz: quiz('HTML5 Quiz', [mcq('Which tag defines main page content?', '<main>', ['<div>', '<body>'])]) }),
            lesson('CSS Flexbox & Responsive Design', 'css3-flexbox-responsive', '# CSS Flexbox & Media Queries\n\nAlign items along main and cross axes using `display: flex` and adapt screens with `@media (max-width: 768px)`.', { quiz: quiz('CSS Flex Quiz', [mcq('Which property aligns flex items along the main axis?', 'justify-content', ['align-items', 'flex-direction'])]) }),
            lesson('CSS Grid & Modern Animations', 'css3-grid-animations', '# CSS Grid & Keyframes\n\nCreate 2D responsive grids using `display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));`.', { quiz: quiz('CSS Grid Quiz', [trueFalse('CSS Grid manages both rows and columns simultaneously.', true)]) })
          ]
        }
      ]
    },
    {
      title: 'JavaScript (ES6+)',
      slug: 'javascript-es6',
      description: 'Master core JavaScript, DOM manipulation, Async/Await, Fetch API, Closures, and ES6 Modules.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 25,
      resources: [
        { resourceType: 'youtube', title: 'JavaScript Course for Beginners', url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Modern JavaScript (ES6+) Tutorial', url: 'https://www.youtube.com/watch?v=NCwa_xi0Uuc', author: 'Programming with Mosh', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'JavaScript DOM Manipulation Crash Course', url: 'https://www.youtube.com/watch?v=0ik6X4DJK6w', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'JavaScript Async Await & Promises', url: 'https://www.youtube.com/watch?v=V_Kr9OSfDeU', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'JavaScript Closures & Scope Chain', url: 'https://www.youtube.com/watch?v=vKJpN5FAeF4', author: 'Corey Schafer', platform: 'YouTube' },
        { resourceType: 'article', title: 'MDN JavaScript Guide & Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', author: 'Mozilla Developer Network' },
        { resourceType: 'ebook', title: 'Eloquent JavaScript (Free eBook)', url: 'https://eloquentjavascript.net/', author: 'Marijn Haverbeke' },
        { resourceType: 'ebook', title: 'You Don\'t Know JS Yet (Book Series)', url: 'https://github.com/getify/You-Dont-Know-JS', author: 'Kyle Simpson' },
        { resourceType: 'cheatsheet', title: 'JavaScript ES6+ Syntax Cheat Sheet', url: 'https://quickref.me/javascript', author: 'QuickRef' },
        { resourceType: 'article', title: 'javascript.info Modern JS Tutorial', url: 'https://javascript.info/', author: 'Ilya Kantor' }
      ],
      modules: [
        {
          title: 'Section 1: JS Core & DOM',
          lessons: [
            setupLesson('JavaScript (ES6+)', 'javascript-es6', 'javascript',
              'Open Chrome DevTools Console (F12) or node environment.',
              'console.log("JavaScript Engine Active!");',
              'console.log("JavaScript Engine Active!");'
            ),
            lesson('DOM Manipulation & Event Listeners', 'js-dom-events', '# DOM Manipulation\n\nSelect elements with `document.querySelector()` and attach click handlers with `addEventListener()`.', { quiz: quiz('DOM Quiz', [mcq('Which method attaches event listeners to DOM elements?', 'addEventListener()', ['on()', 'attachEvent()'])]) }),
            lesson('Async / Await & Fetch API', 'js-async-fetch', '# Promises & Fetch API\n\nFetch remote JSON data asynchronously using `async function getData() { const res = await fetch(url); }`.', { quiz: quiz('Async Quiz', [trueFalse('Async functions always return a Promise.', true)]) })
          ]
        }
      ]
    },
    {
      title: 'Bootstrap',
      slug: 'bootstrap',
      description: 'Build fast mobile-first web pages using Bootstrap 5 grid layout system, components, and utility classes.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 12,
      resources: [
        { resourceType: 'youtube', title: 'Bootstrap 5 Crash Course', url: 'https://www.youtube.com/watch?v=4sosXZsdy-s', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Bootstrap 5 Full Course for Beginners', url: 'https://www.youtube.com/watch?v=-qfEOE4vtxE', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Bootstrap 5 Grid System Deep Dive', url: 'https://www.youtube.com/watch?v=8pMflpW4pGk', author: 'The Net Ninja', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Responsive Portfolio with Bootstrap 5', url: 'https://www.youtube.com/watch?v=0h2nLg3j1yM', author: 'DesignCourse', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Bootstrap 5 Components & Modals', url: 'https://www.youtube.com/watch?v=vVj_T220s7s', author: 'Tech With Tim', platform: 'YouTube' },
        { resourceType: 'article', title: 'Bootstrap 5 Official Documentation', url: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/', author: 'Bootstrap Team' },
        { resourceType: 'article', title: 'Bootstrap 5 Grid Options Guide', url: 'https://getbootstrap.com/docs/5.3/layout/grid/', author: 'Bootstrap Docs' },
        { resourceType: 'ebook', title: 'W3Schools Bootstrap 5 Tutorial', url: 'https://www.w3schools.com/bootstrap5/', author: 'W3Schools' },
        { resourceType: 'cheatsheet', title: 'Bootstrap 5 Utility Classes Cheat Sheet', url: 'https://bootstrap-cheatsheet.themeselection.com/', author: 'ThemeSelection' },
        { resourceType: 'article', title: 'GeeksforGeeks Bootstrap 5 Tutorials', url: 'https://www.geeksforgeeks.org/bootstrap-5/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: Bootstrap 5',
          lessons: [
            setupLesson('Bootstrap', 'bootstrap', 'html',
              'Include Bootstrap CDN CSS & JS in your HTML `<head>`.',
              '<!-- Bootstrap CDN -->\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">',
              '<!-- Bootstrap CDN -->\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">'
            ),
            lesson('Bootstrap 12-Column Grid & UI Cards', 'bootstrap-grid-cards', '# 12-Column Grid System\n\nUse `.container`, `.row`, `.col-md-6`, `.card`, and `.btn-primary` utility classes.', { quiz: quiz('Bootstrap Quiz', [mcq('How many total columns exist in Bootstrap grid row?', '12', ['10', '16'])]) })
          ]
        }
      ]
    },
    {
      title: 'Tailwind CSS',
      slug: 'tailwind-css',
      description: 'Master utility-first CSS framework for rapid custom UI design without writing custom CSS files.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 15,
      resources: [
        { resourceType: 'youtube', title: 'Tailwind CSS Course for Beginners', url: 'https://www.youtube.com/watch?v=ft30zcMlFao', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Tailwind CSS Full Tutorial', url: 'https://www.youtube.com/watch?v=dFgzHOX84xQ', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Tailwind CSS in 100 Seconds', url: 'https://www.youtube.com/watch?v=mr15Xzb1Ook', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Tailwind CSS Responsive Design & Dark Mode', url: 'https://www.youtube.com/watch?v=pfaSUYaSgRo', author: 'The Net Ninja', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Building UI Components with Tailwind', url: 'https://www.youtube.com/watch?v=lCxcTsOHruc', author: 'Tailwind Labs', platform: 'YouTube' },
        { resourceType: 'article', title: 'Tailwind CSS Official Documentation', url: 'https://tailwindcss.com/docs', author: 'Tailwind Labs' },
        { resourceType: 'article', title: 'Tailwind UI Free Component Reference', url: 'https://tailwindui.com/components', author: 'Tailwind Labs' },
        { resourceType: 'ebook', title: 'Refactoring UI eBook Notes', url: 'https://www.refactoringui.com/', author: 'Adam Wathan & Steve Schoger' },
        { resourceType: 'cheatsheet', title: 'Tailwind CSS Utility Class Cheat Sheet', url: 'https://nerdcave.com/tailwind-cheat-sheet', author: 'Nerdcave' },
        { resourceType: 'article', title: 'DevHints Tailwind Cheat Sheet', url: 'https://devhints.io/tailwindcss', author: 'Devhints' }
      ],
      modules: [
        {
          title: 'Section 1: Utility-First CSS',
          lessons: [
            setupLesson('Tailwind CSS', 'tailwind-css', 'html',
              'Install Tailwind CSS via PostCSS or CDN.',
              '<div class="bg-blue-500 text-white p-4 rounded-lg">Tailwind Ready</div>',
              '<div class="bg-blue-500 text-white p-4 rounded-lg">Tailwind Ready</div>'
            ),
            lesson('Tailwind Utility Classes & Dark Mode', 'tailwind-utilities-darkmode', '# Utility Classes & Dark Mode\n\nStyle elements directly in HTML markup using `flex items-center justify-between dark:bg-slate-900`.', { quiz: quiz('Tailwind Quiz', [trueFalse('Tailwind CSS relies on pre-built utility classes rather than custom BEM selectors.', true)]) })
          ]
        }
      ]
    }
  ]
};
