import type { CategoryDef } from '../types';
import { mcq, trueFalse, quiz, lesson, setupLesson } from '../helpers';

export const webDevelopmentCategory: CategoryDef = {
  name: 'Web Development',
  slug: 'web-development',
  description: 'Build modern websites and web applications with HTML, CSS, JavaScript, React, and TypeScript.',
  icon: '🌐',
  color: '#3b82f6',
  sortOrder: 2,
  courses: [
    // ━━━━━━━━━━━━━━━ HTML & CSS MASTERCLASS ━━━━━━━━━━━━━━━
    {
      title: 'HTML & CSS Masterclass',
      slug: 'html-css-masterclass',
      description: 'Master semantic HTML5 and modern CSS including Flexbox, Grid, animations, and responsive design from scratch.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 15,
      resources: [
        { resourceType: 'youtube', title: 'HTML & CSS Full Course', url: 'https://www.youtube.com/watch?v=mU6anWqZJcc', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'article', title: 'MDN Web Docs — HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', author: 'Mozilla' },
        { resourceType: 'cheatsheet', title: 'CSS Tricks — Flexbox Guide', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', author: 'CSS-Tricks' },
      ],
      modules: [
        {
          title: 'HTML Foundations',
          description: 'Structure web pages with semantic HTML5 elements.',
          lessons: [
            setupLesson('HTML & CSS Masterclass', 'html-css-masterclass', 'html',
              `1. Install [VS Code](https://code.visualstudio.com/)
2. Install the "Live Server" extension
3. Create a folder for your project
4. Create \`index.html\` and open with Live Server`,
              `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Hello, Web!</h1>\n  <p>This is my first HTML page.</p>\n</body>\n</html>`,
              `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Hello, Web!</h1>\n  <p>This is my first HTML page.</p>\n</body>\n</html>`
            ),
            lesson('Semantic HTML', 'semantic-html', `# Semantic HTML

Semantic elements clearly describe their meaning to both the browser and developer.

## Document Structure

\`\`\`html
<header>    <!-- Site/section header -->
<nav>       <!-- Navigation links -->
<main>      <!-- Primary content -->
<article>   <!-- Self-contained content -->
<section>   <!-- Thematic grouping -->
<aside>     <!-- Sidebar content -->
<footer>    <!-- Footer content -->
\`\`\`

## Text Elements

\`\`\`html
<h1>Main Heading</h1>       <!-- Only one per page -->
<h2>Subheading</h2>
<p>Paragraph text</p>
<strong>Bold/important</strong>
<em>Italic/emphasis</em>
<blockquote>A quote</blockquote>
<code>inline code</code>
\`\`\`

## Lists

\`\`\`html
<ul>                        <!-- Unordered list -->
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<ol>                        <!-- Ordered list -->
  <li>Step 1</li>
  <li>Step 2</li>
</ol>
\`\`\`

## Links & Images

\`\`\`html
<a href="https://example.com" target="_blank">Visit Example</a>
<img src="photo.jpg" alt="Description of image" width="300">
\`\`\`

## Why Semantic HTML Matters
- **Accessibility**: Screen readers understand the structure
- **SEO**: Search engines rank semantic pages higher
- **Maintainability**: Easier to read and modify`, {
              starterCode: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Blog Post</title>\n</head>\n<body>\n  <header>\n    <h1>My Tech Blog</h1>\n    <nav>\n      <a href="#">Home</a> |\n      <a href="#">About</a> |\n      <a href="#">Contact</a>\n    </nav>\n  </header>\n  \n  <main>\n    <article>\n      <h2>Learning HTML</h2>\n      <p>HTML is the <strong>foundation</strong> of every website.</p>\n      <ul>\n        <li>Structure content</li>\n        <li>Add meaning with semantics</li>\n        <li>Improve accessibility</li>\n      </ul>\n    </article>\n  </main>\n  \n  <footer>\n    <p>&copy; 2026 My Tech Blog</p>\n  </footer>\n</body>\n</html>`,
              solutionCode: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Blog Post</title>\n</head>\n<body>\n  <header>\n    <h1>My Tech Blog</h1>\n    <nav>\n      <a href="#">Home</a> |\n      <a href="#">About</a> |\n      <a href="#">Contact</a>\n    </nav>\n  </header>\n  <main>\n    <article>\n      <h2>Learning HTML</h2>\n      <p>HTML is the <strong>foundation</strong> of every website.</p>\n      <ul>\n        <li>Structure content</li>\n        <li>Add meaning with semantics</li>\n        <li>Improve accessibility</li>\n      </ul>\n    </article>\n  </main>\n  <footer>\n    <p>&copy; 2026 My Tech Blog</p>\n  </footer>\n</body>\n</html>`,
              codeLanguage: 'html',
              estimatedMinutes: 20,
              xpReward: 50,
              quiz: quiz('Semantic HTML Quiz', [
                mcq('Which element should contain the main navigation?', '<nav>', ['<div>', '<menu>'], '<nav> is the semantic element for navigation links.'),
                trueFalse('You should have only one <h1> per page.', true, 'One <h1> establishes the main topic for SEO and accessibility.'),
                mcq('What does the `alt` attribute on <img> do?', 'Provides a text description for accessibility', ['Sets the image title', 'Defines image size'], 'Screen readers use `alt` text to describe images.'),
              ]),
            }),
          ],
        },
        {
          title: 'CSS & Layout',
          description: 'Style pages with CSS, Flexbox, and Grid.',
          lessons: [
            lesson('CSS Selectors & Properties', 'css-selectors', `# CSS Selectors & Properties

## Adding CSS

\`\`\`html
<!-- External stylesheet (preferred) -->
<link rel="stylesheet" href="styles.css">

<!-- Internal styles -->
<style>
  h1 { color: blue; }
</style>

<!-- Inline styles (avoid) -->
<h1 style="color: blue;">Hello</h1>
\`\`\`

## Selectors

\`\`\`css
/* Element */
h1 { color: blue; }

/* Class */
.highlight { background: yellow; }

/* ID */
#main-title { font-size: 2rem; }

/* Descendant */
nav a { text-decoration: none; }

/* Pseudo-classes */
a:hover { color: red; }
li:first-child { font-weight: bold; }
\`\`\`

## The Box Model

\`\`\`css
.box {
  width: 200px;
  padding: 20px;      /* Inside the border */
  border: 2px solid;  /* The border */
  margin: 10px;        /* Outside the border */
  box-sizing: border-box; /* Include padding in width */
}
\`\`\`

## Common Properties

\`\`\`css
.card {
  color: #333;
  background-color: #f5f5f5;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
}
\`\`\``, {
              starterCode: `/* Style a card component */\n.card {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  max-width: 350px;\n}\n\n.card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n}\n\n.card h3 {\n  color: #1a1a2e;\n  margin-bottom: 0.5rem;\n}\n\n.card p {\n  color: #666;\n  line-height: 1.6;\n}`,
              solutionCode: `.card {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  max-width: 350px;\n}\n\n.card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n}\n\n.card h3 {\n  color: #1a1a2e;\n  margin-bottom: 0.5rem;\n}\n\n.card p {\n  color: #666;\n  line-height: 1.6;\n}`,
              codeLanguage: 'css',
              estimatedMinutes: 20,
              xpReward: 50,
              quiz: quiz('CSS Selectors Quiz', [
                mcq('What does `.class-name` select?', 'All elements with that class', ['The first element only', 'Elements with that ID'], 'The dot (.) selects elements by class name.'),
                mcq('In the box model, what is between padding and margin?', 'Border', ['Content', 'Outline'], 'The box model layers: content → padding → border → margin.'),
                trueFalse('`box-sizing: border-box` includes padding in the element width.', true),
              ]),
            }),
            lesson('Flexbox & Grid', 'flexbox-grid', `# Flexbox & Grid

## Flexbox — 1D Layout

\`\`\`css
.flex-container {
  display: flex;
  justify-content: center;     /* Main axis */
  align-items: center;         /* Cross axis */
  gap: 1rem;
  flex-wrap: wrap;
}

.flex-item {
  flex: 1;                     /* Grow equally */
}
\`\`\`

### justify-content Values
| Value | Effect |
|-------|--------|
| \`flex-start\` | Pack to start |
| \`flex-end\` | Pack to end |
| \`center\` | Center items |
| \`space-between\` | Equal space between |
| \`space-around\` | Equal space around |

## CSS Grid — 2D Layout

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1.5rem;
}

/* Spanning columns */
.featured {
  grid-column: 1 / -1;  /* Full width */
}
\`\`\`

## Responsive Grid

\`\`\`css
.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
\`\`\`

## When to Use What?
- **Flexbox**: Navigation bars, centering, single-row/column layouts
- **Grid**: Full page layouts, card grids, complex 2D designs`, {
              starterCode: `/* Flexbox navigation */\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background: #1a1a2e;\n  color: white;\n}\n\n.nav-links {\n  display: flex;\n  gap: 1.5rem;\n  list-style: none;\n}\n\n/* Responsive card grid */\n.card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n  padding: 2rem;\n}`,
              solutionCode: `.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background: #1a1a2e;\n  color: white;\n}\n\n.nav-links {\n  display: flex;\n  gap: 1.5rem;\n  list-style: none;\n}\n\n.card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n  padding: 2rem;\n}`,
              codeLanguage: 'css',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('Flexbox & Grid Quiz', [
                mcq('What does `justify-content: space-between` do?', 'Distributes equal space between items', ['Centers all items', 'Adds space before first item'], 'Items are spaced evenly with no space at the edges.'),
                mcq('Which layout is best for a 2D card grid?', 'CSS Grid', ['Flexbox', 'Float'], 'Grid excels at 2-dimensional layouts.'),
                trueFalse('`repeat(auto-fit, minmax(280px, 1fr))` creates a responsive grid.', true),
              ]),
            }),
          ],
        },
        {
          title: 'Responsive & Modern CSS',
          description: 'Build responsive layouts and add animations.',
          lessons: [
            lesson('Media Queries & Responsive Design', 'responsive-design', `# Responsive Design

## The Viewport Meta Tag

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

## Media Queries

\`\`\`css
/* Mobile-first approach */
.container {
  padding: 1rem;
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    max-width: 768px;
    margin: 0 auto;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
  }
}
\`\`\`

## Responsive Units
| Unit | Use Case |
|------|----------|
| \`rem\` | Font sizes (relative to root) |
| \`em\` | Padding/margins (relative to parent) |
| \`%\` | Widths (relative to parent) |
| \`vw/vh\` | Viewport-based sizing |
| \`clamp()\` | Fluid typography |

## Fluid Typography

\`\`\`css
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}
\`\`\`

## Responsive Images

\`\`\`css
img {
  max-width: 100%;
  height: auto;
}
\`\`\``, {
              starterCode: `/* Mobile-first responsive layout */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  padding: 1rem;\n}\n\nh1 {\n  font-size: clamp(1.5rem, 4vw, 3rem);\n  margin-bottom: 1rem;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n}\n\n@media (min-width: 768px) {\n  .grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1200px;\n    margin: 0 auto;\n  }\n  .grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}`,
              solutionCode: `* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  padding: 1rem;\n}\n\nh1 {\n  font-size: clamp(1.5rem, 4vw, 3rem);\n  margin-bottom: 1rem;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n}\n\n@media (min-width: 768px) {\n  .grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1200px;\n    margin: 0 auto;\n  }\n  .grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}`,
              codeLanguage: 'css',
              estimatedMinutes: 20,
              xpReward: 50,
              quiz: quiz('Responsive Design Quiz', [
                mcq('What approach builds for mobile first, then adds breakpoints?', 'Mobile-first', ['Desktop-first', 'Fluid-only'], 'Mobile-first uses `min-width` media queries to progressively enhance.'),
                trueFalse('`clamp()` allows setting a minimum, preferred, and maximum value.', true),
              ]),
            }),
          ],
        },
      ],
    },

    // ━━━━━━━━━━━━━━━ JAVASCRIPT DEEP DIVE ━━━━━━━━━━━━━━━
    {
      title: 'JavaScript Deep Dive',
      slug: 'javascript-deep-dive',
      description: 'Go beyond basics — master ES6+, DOM manipulation, async/await, closures, and prototypal inheritance.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 25,
      resources: [
        { resourceType: 'youtube', title: 'JavaScript Full Course', url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'Eloquent JavaScript (Free)', url: 'https://eloquentjavascript.net/', author: 'Marijn Haverbeke' },
        { resourceType: 'article', title: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide', author: 'Mozilla' },
      ],
      modules: [
        {
          title: 'ES6+ Essentials',
          description: 'Modern JavaScript features every developer must know.',
          lessons: [
            setupLesson('JavaScript Deep Dive', 'javascript-deep-dive', 'javascript',
              `1. You already have a browser — open DevTools (F12) → Console
2. Install [Node.js](https://nodejs.org/) for running JS outside the browser
3. Verify: \`node --version\``,
              `// Run in browser console or Node.js\nconsole.log("Hello, JavaScript!");`,
              `console.log("Hello, JavaScript!");`
            ),
            lesson('Let, Const & Destructuring', 'let-const-destructuring', `# Let, Const & Destructuring

## \`let\` vs \`const\` vs \`var\`

\`\`\`javascript
let count = 0;       // Reassignable, block-scoped
const PI = 3.14159;  // Not reassignable, block-scoped
var old = "avoid";   // Function-scoped (legacy)
\`\`\`

## Template Literals

\`\`\`javascript
const name = "Alice";
const greeting = \`Hello, \${name}! Today is \${new Date().toLocaleDateString()}\`;
\`\`\`

## Array Destructuring

\`\`\`javascript
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(rest);   // [3, 4, 5]
\`\`\`

## Object Destructuring

\`\`\`javascript
const user = { name: "Alice", age: 25, city: "Paris" };
const { name, age, city = "Unknown" } = user;
\`\`\`

## Spread Operator

\`\`\`javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
\`\`\``, {
              starterCode: `// Destructuring practice\nconst user = {\n  name: "Alice",\n  age: 25,\n  scores: [92, 88, 95],\n  address: { city: "Paris", country: "France" }\n};\n\n// Object destructuring\nconst { name, age, scores } = user;\nconsole.log(\`\${name} is \${age} years old\`);\n\n// Array destructuring\nconst [first, ...rest] = scores;\nconsole.log(\`Best score: \${first}, Others: \${rest}\`);\n\n// Nested destructuring\nconst { address: { city } } = user;\nconsole.log(\`Lives in \${city}\`);`,
              solutionCode: `const user = {\n  name: "Alice",\n  age: 25,\n  scores: [92, 88, 95],\n  address: { city: "Paris", country: "France" }\n};\n\nconst { name, age, scores } = user;\nconsole.log(\`\${name} is \${age} years old\`);\n\nconst [first, ...rest] = scores;\nconsole.log(\`Best score: \${first}, Others: \${rest}\`);\n\nconst { address: { city } } = user;\nconsole.log(\`Lives in \${city}\`);`,
              codeLanguage: 'javascript',
              estimatedMinutes: 20,
              xpReward: 50,
              quiz: quiz('ES6 Basics Quiz', [
                mcq('What is the difference between `let` and `const`?', '`let` can be reassigned, `const` cannot', ['`let` is global, `const` is local', 'No difference'], '`const` creates a constant binding that cannot be reassigned.'),
                mcq('What does `...rest` do in destructuring?', 'Collects remaining elements', ['Spreads elements', 'Creates a copy'], 'The rest pattern collects leftover elements into an array.'),
                trueFalse('Template literals use backticks (`) instead of quotes.', true),
              ]),
            }),
            lesson('Arrow Functions & Array Methods', 'arrow-functions-arrays', `# Arrow Functions & Array Methods

## Arrow Functions

\`\`\`javascript
// Traditional
function add(a, b) { return a + b; }

// Arrow (concise)
const add = (a, b) => a + b;

// With body
const greet = (name) => {
  const msg = \`Hello, \${name}!\`;
  return msg;
};
\`\`\`

## Essential Array Methods

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map — transform each element
const doubled = numbers.map(n => n * 2);

// filter — keep elements that pass a test
const evens = numbers.filter(n => n % 2 === 0);

// reduce — accumulate into a single value
const sum = numbers.reduce((acc, n) => acc + n, 0);

// find — first match
const firstBig = numbers.find(n => n > 5);  // 6

// some / every
numbers.some(n => n > 5);   // true (at least one)
numbers.every(n => n > 0);  // true (all of them)
\`\`\`

## Chaining Methods

\`\`\`javascript
const result = [1, 2, 3, 4, 5]
  .filter(n => n % 2 !== 0)   // [1, 3, 5]
  .map(n => n ** 2)            // [1, 9, 25]
  .reduce((sum, n) => sum + n, 0); // 35
\`\`\``, {
              starterCode: `// Array methods practice\nconst students = [\n  { name: "Alice", score: 92 },\n  { name: "Bob", score: 65 },\n  { name: "Charlie", score: 88 },\n  { name: "Diana", score: 45 },\n  { name: "Eve", score: 95 },\n];\n\n// Get names of passing students (score >= 70)\nconst passing = students\n  .filter(s => s.score >= 70)\n  .map(s => s.name);\nconsole.log("Passing:", passing);\n\n// Calculate average score\nconst avg = students.reduce((sum, s) => sum + s.score, 0) / students.length;\nconsole.log("Average:", avg.toFixed(1));\n\n// Find the top scorer\nconst topStudent = students.reduce((best, s) => s.score > best.score ? s : best);\nconsole.log("Top:", topStudent.name, topStudent.score);`,
              solutionCode: `const students = [\n  { name: "Alice", score: 92 },\n  { name: "Bob", score: 65 },\n  { name: "Charlie", score: 88 },\n  { name: "Diana", score: 45 },\n  { name: "Eve", score: 95 },\n];\n\nconst passing = students\n  .filter(s => s.score >= 70)\n  .map(s => s.name);\nconsole.log("Passing:", passing);\n\nconst avg = students.reduce((sum, s) => sum + s.score, 0) / students.length;\nconsole.log("Average:", avg.toFixed(1));\n\nconst topStudent = students.reduce((best, s) => s.score > best.score ? s : best);\nconsole.log("Top:", topStudent.name, topStudent.score);`,
              codeLanguage: 'javascript',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('Arrow Functions & Arrays Quiz', [
                mcq('What does `.map()` return?', 'A new array with transformed elements', ['The original array modified', 'A single value'], '`.map()` returns a new array without modifying the original.'),
                mcq('What does `.reduce()` do?', 'Combines all elements into a single value', ['Removes elements', 'Sorts elements'], '`.reduce()` accumulates array elements into one result.'),
                trueFalse('Arrow functions have their own `this` binding.', false, 'Arrow functions inherit `this` from their enclosing scope.'),
              ]),
            }),
          ],
        },
        {
          title: 'Async JavaScript',
          description: 'Master Promises, async/await, and the event loop.',
          lessons: [
            lesson('Promises & Async/Await', 'promises-async-await', `# Promises & Async/Await

## Callbacks (The Old Way)

\`\`\`javascript
setTimeout(() => {
  console.log("Done after 1 second");
}, 1000);
\`\`\`

## Promises

\`\`\`javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Alice" });
    }, 1000);
  });
};

fetchData()
  .then(data => console.log(data))
  .catch(err => console.error(err));
\`\`\`

## Async/Await (Modern Approach)

\`\`\`javascript
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
\`\`\`

## Fetch API

\`\`\`javascript
async function getUser(id) {
  const response = await fetch(\`https://api.example.com/users/\${id}\`);
  if (!response.ok) throw new Error("Failed to fetch");
  const user = await response.json();
  return user;
}
\`\`\`

## Promise.all — Parallel Execution

\`\`\`javascript
const [users, posts] = await Promise.all([
  fetch("/api/users").then(r => r.json()),
  fetch("/api/posts").then(r => r.json()),
]);
\`\`\``, {
              starterCode: `// Async/await practice\nconst delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));\n\nasync function fetchUser(id) {\n  await delay(500); // Simulate network delay\n  const users = {\n    1: { name: "Alice", role: "admin" },\n    2: { name: "Bob", role: "user" },\n    3: { name: "Charlie", role: "user" },\n  };\n  if (!users[id]) throw new Error("User not found");\n  return users[id];\n}\n\nasync function main() {\n  try {\n    const user = await fetchUser(1);\n    console.log("User:", user);\n    \n    // Fetch multiple users in parallel\n    const allUsers = await Promise.all([fetchUser(1), fetchUser(2), fetchUser(3)]);\n    console.log("All users:", allUsers);\n  } catch (error) {\n    console.error("Error:", error.message);\n  }\n}\n\nmain();`,
              solutionCode: `const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));\n\nasync function fetchUser(id) {\n  await delay(500);\n  const users = {\n    1: { name: "Alice", role: "admin" },\n    2: { name: "Bob", role: "user" },\n    3: { name: "Charlie", role: "user" },\n  };\n  if (!users[id]) throw new Error("User not found");\n  return users[id];\n}\n\nasync function main() {\n  try {\n    const user = await fetchUser(1);\n    console.log("User:", user);\n    const allUsers = await Promise.all([fetchUser(1), fetchUser(2), fetchUser(3)]);\n    console.log("All users:", allUsers);\n  } catch (error) {\n    console.error("Error:", error.message);\n  }\n}\n\nmain();`,
              codeLanguage: 'javascript',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('Async/Await Quiz', [
                mcq('What does `await` do?', 'Pauses execution until the Promise resolves', ['Runs code in parallel', 'Creates a new Promise'], '`await` pauses the async function until the promise settles.'),
                mcq('What does `Promise.all()` do?', 'Runs multiple promises in parallel', ['Runs promises sequentially', 'Cancels all promises'], '`Promise.all` waits for all promises to resolve (or any to reject).'),
                trueFalse('`async` functions always return a Promise.', true),
              ]),
            }),
          ],
        },
      ],
    },

    // ━━━━━━━━━━━━━━━ REACT & NEXT.JS ━━━━━━━━━━━━━━━
    {
      title: 'React & Next.js',
      slug: 'react-nextjs',
      description: 'Build modern web applications with React components, hooks, routing, and server-side rendering with Next.js.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 30,
      resources: [
        { resourceType: 'article', title: 'React Official Docs', url: 'https://react.dev/', author: 'React Team' },
        { resourceType: 'youtube', title: 'Next.js Tutorial', url: 'https://www.youtube.com/watch?v=ZVnjOPwW4ZA', author: 'Programming with Mosh', platform: 'YouTube' },
        { resourceType: 'article', title: 'Next.js Documentation', url: 'https://nextjs.org/docs', author: 'Vercel' },
      ],
      modules: [
        {
          title: 'React Fundamentals',
          description: 'Components, JSX, props, and state.',
          lessons: [
            lesson('Components & JSX', 'react-components-jsx', `# Components & JSX

## What is JSX?
JSX lets you write HTML-like syntax in JavaScript:

\`\`\`jsx
function Greeting() {
  const name = "Alice";
  return <h1>Hello, {name}!</h1>;
}
\`\`\`

## Function Components

\`\`\`jsx
function Card({ title, description }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

// Usage
<Card title="React" description="A UI library" />
\`\`\`

## Rendering Lists

\`\`\`jsx
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
\`\`\`

## Conditional Rendering

\`\`\`jsx
function Status({ isOnline }) {
  return (
    <span>
      {isOnline ? "🟢 Online" : "🔴 Offline"}
    </span>
  );
}
\`\`\`

## Key Rules of JSX
- Use \`className\` instead of \`class\`
- Self-close tags: \`<img />\`, \`<br />\`
- Wrap multiple elements in a fragment: \`<>...</>\`
- Expressions go inside \`{curly braces}\``, {
              starterCode: `// React component examples (pseudocode)\nfunction App() {\n  const courses = [\n    { id: 1, title: "Python", level: "Beginner" },\n    { id: 2, title: "React", level: "Intermediate" },\n    { id: 3, title: "Docker", level: "Advanced" },\n  ];\n\n  return (\n    <div>\n      <h1>Course Catalog</h1>\n      <ul>\n        {courses.map(course => (\n          <li key={course.id}>\n            <strong>{course.title}</strong> — {course.level}\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\nconsole.log("React components render UI from data!");`,
              solutionCode: `function App() {\n  const courses = [\n    { id: 1, title: "Python", level: "Beginner" },\n    { id: 2, title: "React", level: "Intermediate" },\n    { id: 3, title: "Docker", level: "Advanced" },\n  ];\n\n  return (\n    <div>\n      <h1>Course Catalog</h1>\n      <ul>\n        {courses.map(course => (\n          <li key={course.id}>\n            <strong>{course.title}</strong> — {course.level}\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\nconsole.log("React components render UI from data!");`,
              codeLanguage: 'javascript',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('React Components Quiz', [
                mcq('What attribute replaces `class` in JSX?', 'className', ['cssClass', 'htmlClass'], 'JSX uses `className` because `class` is a reserved word in JavaScript.'),
                mcq('Why do list items need a `key` prop?', 'To help React identify which items changed', ['For CSS styling', 'For accessibility'], 'Keys help React efficiently update the DOM when lists change.'),
                trueFalse('React components must return a single root element or fragment.', true),
              ]),
            }),
            lesson('Hooks: useState & useEffect', 'react-hooks', `# Hooks: useState & useEffect

## useState — Managing State

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
\`\`\`

## useEffect — Side Effects

\`\`\`jsx
import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []); // Empty deps = run once on mount
  
  if (loading) return <p>Loading...</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
\`\`\`

## useEffect Dependency Array
| Pattern | When it runs |
|---------|-------------|
| \`useEffect(fn)\` | Every render |
| \`useEffect(fn, [])\` | Once on mount |
| \`useEffect(fn, [x])\` | When \`x\` changes |

## Cleanup Function

\`\`\`jsx
useEffect(() => {
  const timer = setInterval(() => console.log("tick"), 1000);
  return () => clearInterval(timer); // Cleanup on unmount
}, []);
\`\`\``, {
              starterCode: `// Hooks conceptual example\nlet count = 0;\n\nfunction increment() {\n  count++;\n  console.log("Count:", count);\n}\n\nfunction reset() {\n  count = 0;\n  console.log("Count reset to:", count);\n}\n\n// Simulating useState behavior\nconsole.log("Initial count:", count);\nincrement();\nincrement();\nincrement();\nreset();\nconsole.log("Final count:", count);`,
              solutionCode: `let count = 0;\n\nfunction increment() {\n  count++;\n  console.log("Count:", count);\n}\n\nfunction reset() {\n  count = 0;\n  console.log("Count reset to:", count);\n}\n\nconsole.log("Initial count:", count);\nincrement();\nincrement();\nincrement();\nreset();\nconsole.log("Final count:", count);`,
              codeLanguage: 'javascript',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('React Hooks Quiz', [
                mcq('What does an empty dependency array `[]` mean in useEffect?', 'Run the effect only once on mount', ['Run on every render', 'Never run'], 'An empty array means the effect has no dependencies to watch.'),
                mcq('What does `useState` return?', 'An array of [currentValue, setterFunction]', ['Just the current value', 'An object with value and setter'], '`useState` returns a pair: the state value and a function to update it.'),
                trueFalse('You can call hooks inside conditions or loops.', false, 'Hooks must be called at the top level of a component, never inside conditions.'),
              ]),
            }),
          ],
        },
      ],
    },

    // ━━━━━━━━━━━━━━━ TYPESCRIPT IN PRACTICE ━━━━━━━━━━━━━━━
    {
      title: 'TypeScript in Practice',
      slug: 'typescript-in-practice',
      description: 'Add type safety to your JavaScript. Learn types, interfaces, generics, utility types, and real-world TypeScript patterns.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'article', title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/handbook/', author: 'Microsoft' },
        { resourceType: 'youtube', title: 'TypeScript Full Course', url: 'https://www.youtube.com/watch?v=30LWjhZzg50', author: 'freeCodeCamp', platform: 'YouTube' },
      ],
      modules: [
        {
          title: 'TypeScript Basics',
          description: 'Type annotations, interfaces, and type safety.',
          lessons: [
            setupLesson('TypeScript in Practice', 'typescript-in-practice', 'typescript',
              `1. Install TypeScript: \`npm install -g typescript\`
2. Verify: \`tsc --version\`
3. Create a file: \`hello.ts\`
4. Compile: \`tsc hello.ts\` → produces \`hello.js\``,
              `const message: string = "Hello, TypeScript!";\nconsole.log(message);`,
              `const message: string = "Hello, TypeScript!";\nconsole.log(message);`
            ),
            lesson('Types & Interfaces', 'ts-types-interfaces', `# Types & Interfaces

## Basic Type Annotations

\`\`\`typescript
let name: string = "Alice";
let age: number = 25;
let isActive: boolean = true;
let items: string[] = ["a", "b", "c"];
\`\`\`

## Interfaces

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;         // Optional
  readonly createdAt: Date;  // Immutable
}

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  createdAt: new Date(),
};
\`\`\`

## Type Aliases

\`\`\`typescript
type Status = "active" | "inactive" | "banned";
type ID = string | number;

function getUser(id: ID): User | null {
  // ...
}
\`\`\`

## Function Types

\`\`\`typescript
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function with types
const multiply = (a: number, b: number): number => a * b;
\`\`\`

## Enums

\`\`\`typescript
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
\`\`\``, {
              starterCode: `// TypeScript types in action\ninterface Product {\n  id: number;\n  name: string;\n  price: number;\n  category: string;\n  inStock: boolean;\n}\n\nconst products: Product[] = [\n  { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },\n  { id: 2, name: "Book", price: 15, category: "Education", inStock: true },\n  { id: 3, name: "Headphones", price: 199, category: "Electronics", inStock: false },\n];\n\n// Type-safe filter\nconst inStock: Product[] = products.filter(p => p.inStock);\nconsole.log("In stock:", inStock.map(p => p.name));\n\n// Type-safe reduce\nconst total: number = products.reduce((sum, p) => sum + p.price, 0);\nconsole.log("Total value:", total);`,
              solutionCode: `interface Product {\n  id: number;\n  name: string;\n  price: number;\n  category: string;\n  inStock: boolean;\n}\n\nconst products: Product[] = [\n  { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },\n  { id: 2, name: "Book", price: 15, category: "Education", inStock: true },\n  { id: 3, name: "Headphones", price: 199, category: "Electronics", inStock: false },\n];\n\nconst inStock: Product[] = products.filter(p => p.inStock);\nconsole.log("In stock:", inStock.map(p => p.name));\n\nconst total: number = products.reduce((sum, p) => sum + p.price, 0);\nconsole.log("Total value:", total);`,
              codeLanguage: 'typescript',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('TypeScript Types Quiz', [
                mcq('What does `?` after a property name mean?', 'The property is optional', ['The property is nullable', 'The property is required'], '`?` marks a property as optional in TypeScript.'),
                mcq('What is a union type?', 'A type that can be one of several types', ['A type that combines all properties', 'An array type'], 'Union types use `|` to allow multiple possible types.'),
                trueFalse('TypeScript types are checked at runtime.', false, 'TypeScript types are checked at compile time only — they are erased in the output JS.'),
              ]),
            }),
            lesson('Generics & Utility Types', 'ts-generics', `# Generics & Utility Types

## Generics — Reusable Type-Safe Code

\`\`\`typescript
function identity<T>(value: T): T {
  return value;
}

identity<string>("hello");  // type is string
identity<number>(42);       // type is number
\`\`\`

## Generic Interfaces

\`\`\`typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

type UserResponse = ApiResponse<User>;
type ProductResponse = ApiResponse<Product[]>;
\`\`\`

## Built-in Utility Types

\`\`\`typescript
// Partial — all properties optional
type PartialUser = Partial<User>;

// Required — all properties required
type RequiredUser = Required<User>;

// Pick — select specific properties
type UserPreview = Pick<User, "name" | "email">;

// Omit — exclude specific properties
type UserWithoutId = Omit<User, "id">;

// Record — key-value mapping
type ScoreBoard = Record<string, number>;
\`\`\`

## Constraints

\`\`\`typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
\`\`\``, {
              starterCode: `// Generics in action\nfunction wrapInArray<T>(value: T): T[] {\n  return [value];\n}\n\nconsole.log(wrapInArray("hello"));  // ["hello"]\nconsole.log(wrapInArray(42));       // [42]\n\n// Generic API response type\ninterface ApiResponse<T> {\n  data: T;\n  success: boolean;\n}\n\nconst userResponse: ApiResponse<{ name: string }> = {\n  data: { name: "Alice" },\n  success: true,\n};\n\nconsole.log(userResponse);`,
              solutionCode: `function wrapInArray<T>(value: T): T[] {\n  return [value];\n}\n\nconsole.log(wrapInArray("hello"));\nconsole.log(wrapInArray(42));\n\ninterface ApiResponse<T> {\n  data: T;\n  success: boolean;\n}\n\nconst userResponse: ApiResponse<{ name: string }> = {\n  data: { name: "Alice" },\n  success: true,\n};\n\nconsole.log(userResponse);`,
              codeLanguage: 'typescript',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('Generics Quiz', [
                mcq('What does `<T>` represent in a generic?', 'A type parameter that will be specified later', ['A literal type T', 'A template string'], 'Generics use type parameters as placeholders for actual types.'),
                mcq('What does `Partial<User>` do?', 'Makes all User properties optional', ['Makes all properties required', 'Removes all properties'], '`Partial<T>` converts all properties of T to optional.'),
                trueFalse('`keyof T` produces a union of all property names of T.', true),
              ]),
            }),
          ],
        },
      ],
    },
  ],
};
