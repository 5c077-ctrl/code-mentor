import type { CategoryDef } from '../types';
import { mcq, trueFalse, quiz, lesson, setupLesson } from '../helpers';

export const webDevelopmentCategory: CategoryDef = {
  name: 'Web Development',
  slug: 'web-development',
  description: 'Build modern responsive web applications with HTML, CSS, JavaScript, React, Next.js, and TypeScript.',
  icon: '🌐',
  color: '#3b82f6',
  sortOrder: 2,
  courses: [
    // ━━━━━━━━━━━━━━━━━━━ HTML & CSS MASTERCLASS ━━━━━━━━━━━━━━━━━━━
    {
      title: 'HTML & CSS Masterclass',
      slug: 'html-css-masterclass',
      description: 'Master web design basics — semantic HTML5, CSS Flexbox, Grid, animations, responsive design, and CSS variables.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 15,
      resources: [
        { resourceType: 'youtube', title: 'HTML & CSS Full Course for Beginners', url: 'https://www.youtube.com/watch?v=mU6anWqZJcc', author: 'FreeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'CSS Flexbox in 20 Minutes', url: 'https://www.youtube.com/watch?v=fYq5PXgSsbE', author: 'Kevin Powell', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'CSS Grid Crash Course', url: 'https://www.youtube.com/watch?v=jV8B24rSN5o', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Responsive Web Design Tutorial', url: 'https://www.youtube.com/watch?v=srvUrASNj0s', author: 'DesignCourse', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Modern CSS Animations & Transitions', url: 'https://www.youtube.com/watch?v=YszONjKpCN4', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'MDN Web Docs — HTML & CSS Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', author: 'Mozilla Developer Network' },
        { resourceType: 'article', title: 'A Complete Guide to Flexbox', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', author: 'CSS-Tricks' },
        { resourceType: 'article', title: 'A Complete Guide to CSS Grid', url: 'https://css-tricks.com/snippets/css/complete-guide-grid/', author: 'CSS-Tricks' },
        { resourceType: 'cheatsheet', title: 'HTML5 Semantic Elements Reference', url: 'https://htmlcheatsheet.com/', author: 'HTMLCheatSheet' },
        { resourceType: 'cheatsheet', title: 'CSS Properties & Glassmorphism Cheat Sheet', url: 'https://quickref.me/css', author: 'QuickRef' },
      ],
      modules: [
        {
          title: 'Module 1: Semantic HTML5',
          lessons: [
            setupLesson('HTML & CSS Masterclass', 'html-css-masterclass', 'html',
              `1. Install VS Code\n2. Install Live Server extension\n3. Create index.html\n4. Open with Live Server`,
              `<!DOCTYPE html>\n<html>\n<head><title>Test</title></head>\n<body><h1>Hello Code Mentor</h1></body>\n</html>`,
              `<!DOCTYPE html>\n<html>\n<head><title>Test</title></head>\n<body><h1>Hello Code Mentor</h1></body>\n</html>`
            ),
            lesson('Document Structure & Head Elements', 'html-document-structure', `# HTML5 Structure\n\nUnderstand \`<!DOCTYPE html>\`, \`<head>\`, \`<meta charset="UTF-8">\`, and \`<body>\`.`, {
              starterCode: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My Website</title>\n</head>\n<body>\n  <h1>Welcome!</h1>\n</body>\n</html>`,
              solutionCode: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My Website</title>\n</head>\n<body>\n  <h1>Welcome!</h1>\n</body>\n</html>`,
              codeLanguage: 'html',
              quiz: quiz('HTML Struct Quiz', [
                mcq('What does `<!DOCTYPE html>` do?', 'Informs the browser to render using HTML5 standard mode', ['Loads CSS stylesheet', 'Sets character encoding'], 'It declares HTML5 rendering mode.'),
              ]),
            }),
            lesson('Semantic Tags (`<header>`, `<nav>`, `<article>`, `<footer>`)', 'semantic-html', `# Semantic Elements\n\nUse semantic tags to improve accessibility and SEO structure.`, {
              starterCode: `<header>\n  <nav>\n    <a href="/">Home</a>\n  </nav>\n</header>\n<main>\n  <article>\n    <h2>Semantic HTML5</h2>\n  </article>\n</main>\n<footer>&copy; 2026 Code Mentor</footer>`,
              solutionCode: `<header>\n  <nav>\n    <a href="/">Home</a>\n  </nav>\n</header>\n<main>\n  <article>\n    <h2>Semantic HTML5</h2>\n  </article>\n</main>\n<footer>&copy; 2026 Code Mentor</footer>`,
              codeLanguage: 'html',
              quiz: quiz('Semantic HTML Quiz', [
                mcq('Which element defines standalone self-contained content?', '<article>', ['<div>', '<span>'], '`<article>` represents self-contained content.'),
              ]),
            }),
            lesson('Forms & Input Attributes', 'html-forms', `# HTML Forms\n\nBuild interactive forms with input validation: \`<input type="email" required>\`.`, {
              starterCode: `<form action="/submit" method="POST">\n  <label for="email">Email:</label>\n  <input type="email" id="email" required>\n  <button type="submit">Submit</button>\n</form>`,
              solutionCode: `<form action="/submit" method="POST">\n  <label for="email">Email:</label>\n  <input type="email" id="email" required>\n  <button type="submit">Submit</button>\n</form>`,
              codeLanguage: 'html',
              quiz: quiz('HTML Forms Quiz', [
                trueFalse('`required` attribute prevents form submission if the field is empty.', true),
              ]),
            }),
            lesson('Tables & Accessibility (ARIA labels)', 'html-accessibility', `# Accessibility & Tables\n\nUse \`aria-label\`, \`alt\` text on images, and semantic \`<table>\` structures.`, {
              starterCode: `<img src="hero.jpg" alt="Developer coding at desk">\n<button aria-label="Close menu">X</button>`,
              solutionCode: `<img src="hero.jpg" alt="Developer coding at desk">\n<button aria-label="Close menu">X</button>`,
              codeLanguage: 'html',
              quiz: quiz('Accessibility Quiz', [
                mcq('Why is `alt` text important for images?', 'Provides screen readers with a description of the image', ['Increases image load speed', 'Styles the image border'], 'Screen readers read `alt` text for visually impaired users.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: CSS Layouts (Flexbox & Grid)',
          lessons: [
            lesson('Selectors, Specificity & Box Model', 'css-box-model', `# CSS Box Model\n\nContent, Padding, Border, Margin. Use \`box-sizing: border-box;\`.`, {
              starterCode: `.card {\n  box-sizing: border-box;\n  width: 300px;\n  padding: 20px;\n  margin: 10px;\n  border: 1px solid #ccc;\n}`,
              solutionCode: `.card {\n  box-sizing: border-box;\n  width: 300px;\n  padding: 20px;\n  margin: 10px;\n  border: 1px solid #ccc;\n}`,
              codeLanguage: 'css',
              quiz: quiz('Box Model Quiz', [
                mcq('What does `box-sizing: border-box` do?', 'Includes padding and border in the element total width', ['Removes margins', 'Adds background shadow'], 'It keeps total element width consistent.'),
              ]),
            }),
            lesson('CSS Flexbox Layouts (`display: flex`)', 'css-flexbox', `# Flexbox\n\nAlign elements easily along main and cross axes: \`justify-content\` & \`align-items\`.`, {
              starterCode: `.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}`,
              solutionCode: `.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}`,
              codeLanguage: 'css',
              quiz: quiz('Flexbox Quiz', [
                mcq('Which property aligns flex items along the main axis?', 'justify-content', ['align-items', 'flex-direction'], '`justify-content` controls main-axis alignment.'),
              ]),
            }),
            lesson('CSS Grid Layouts (`display: grid`)', 'css-grid', `# CSS Grid\n\nBuild 2D multi-column layouts using \`grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))\`.`, {
              starterCode: `.grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n}`,
              solutionCode: `.grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n}`,
              codeLanguage: 'css',
              quiz: quiz('CSS Grid Quiz', [
                trueFalse('CSS Grid manages both rows and columns simultaneously (2D layout).', true),
              ]),
            }),
            lesson('Responsive Web Design & Media Queries', 'css-responsive', `# Media Queries\n\nAdapt layouts for mobile devices using \`@media (max-width: 768px)\`.`, {
              starterCode: `@media (max-width: 768px) {\n  .navbar {\n    flex-direction: column;\n  }\n}`,
              solutionCode: `@media (max-width: 768px) {\n  .navbar {\n    flex-direction: column;\n  }\n}`,
              codeLanguage: 'css',
              quiz: quiz('Responsive Quiz', [
                mcq('What viewport meta tag is required for responsive mobile scaling?', '<meta name="viewport" content="width=device-width, initial-scale=1.0">', ['<meta mobile="true">', '<meta scale="1">'], 'The viewport meta tag ensures proper scaling on phones.'),
              ]),
            }),
            lesson('CSS Variables & Dark Mode Systems', 'css-variables', `# Custom Properties\n\nDefine global tokens: \`:root { --primary-color: #6366f1; }\` and reuse via \`var(--primary-color)\`.`, {
              starterCode: `:root {\n  --accent-color: #8b5cf6;\n}\n.btn {\n  background: var(--accent-color);\n}`,
              solutionCode: `:root {\n  --accent-color: #8b5cf6;\n}\n.btn {\n  background: var(--accent-color);\n}`,
              codeLanguage: 'css',
              quiz: quiz('CSS Vars Quiz', [
                trueFalse('CSS Custom Properties (Variables) update dynamically in real time when modified.', true),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: Animations & Glassmorphism UI',
          lessons: [
            lesson('CSS Transitions & Micro-Interactions', 'css-transitions', `# Transitions\n\nSmooth hover effects with \`transition: all 0.3s ease;\` and \`transform: scale(1.05);\`.`, {
              starterCode: `.button {\n  transition: transform 0.2s ease;\n}\n.button:hover {\n  transform: translateY(-2px);\n}`,
              solutionCode: `.button {\n  transition: transform 0.2s ease;\n}\n.button:hover {\n  transform: translateY(-2px);\n}`,
              codeLanguage: 'css',
              quiz: quiz('Transitions Quiz', [
                mcq('Which CSS property animates changes between pseudo-classes smoothy?', 'transition', ['animation', 'transform'], '`transition` smoothly interpolates property values.'),
              ]),
            }),
            lesson('Keyframe Animations (`@keyframes`)', 'css-keyframes', `# Keyframe Animations\n\nCreate custom keyframe sequences: \`@keyframes pulse { 0% { opacity: 0.5; } 100% { opacity: 1; } }\`.`, {
              starterCode: `@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n.spinner {\n  animation: spin 1s linear infinite;\n}`,
              solutionCode: `@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n.spinner {\n  animation: spin 1s linear infinite;\n}`,
              codeLanguage: 'css',
              quiz: quiz('Keyframes Quiz', [
                trueFalse('`@keyframes` allows defining multi-step animation keyframe percentages.', true),
              ]),
            }),
            lesson('Modern Glassmorphism & Backdrop Filters', 'css-glassmorphism', `# Glassmorphism\n\nCreate frosted glass cards using \`background: rgba(255,255,255,0.05);\` and \`backdrop-filter: blur(12px);\`.`, {
              starterCode: `.glass-panel {\n  background: rgba(15, 23, 42, 0.7);\n  backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 16px;\n}`,
              solutionCode: `.glass-panel {\n  background: rgba(15, 23, 42, 0.7);\n  backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 16px;\n}`,
              codeLanguage: 'css',
              quiz: quiz('Glassmorphism Quiz', [
                mcq('Which CSS property creates the frosted glass blur effect behind an element?', 'backdrop-filter: blur()', ['filter: blur()', 'box-shadow'], '`backdrop-filter` blurs the background content behind the glass panel.'),
              ]),
            }),
            lesson('CSS Flexbox vs Grid Decision Framework', 'css-flex-vs-grid', `# Layout Strategy\n\nUse Flexbox for 1D navigation bars and buttons; use CSS Grid for 2D page layouts and card grids.`, {
              starterCode: `/* 1D Nav bar */\n.nav { display: flex; }\n/* 2D Dashboard grid */\n.dashboard { display: grid; }`,
              solutionCode: `.nav { display: flex; }\n.dashboard { display: grid; }`,
              codeLanguage: 'css',
              quiz: quiz('Layout Framework Quiz', [
                mcq('When should you choose Flexbox over CSS Grid?', 'When aligning items in a single row or column (1D)', ['When creating complex 2D layouts', 'Never'], 'Flexbox excels at 1D component alignment.'),
              ]),
            }),
            lesson('HTML & CSS Capstone: Responsive Portfolio Site', 'html-css-capstone', `# Capstone Project\n\nBuild a complete responsive landing page with semantic HTML5, Flexbox navbar, CSS Grid project gallery, and glassmorphism styling.`, {
              starterCode: `<!DOCTYPE html>\n<html>\n<head>\n<style>\n  body { background: #0f172a; color: #fff; font-family: sans-serif; }\n</style>\n</head>\n<body>\n  <h1>Scott Yann — Lead Developer</h1>\n</body>\n</html>`,
              solutionCode: `<!DOCTYPE html>\n<html>\n<head>\n<style>\n  body { background: #0f172a; color: #fff; font-family: sans-serif; }\n</style>\n</head>\n<body>\n  <h1>Scott Yann — Lead Developer</h1>\n</body>\n</html>`,
              codeLanguage: 'html',
              quiz: quiz('HTML CSS Capstone Quiz', [
                mcq('What combination delivers modern, high-performance web UIs?', 'Semantic HTML5 + CSS Grid/Flexbox + Custom Variables', ['Inline styles only', 'Deprecated table tags'], 'Clean semantic markup paired with modern CSS layout modules delivers top performance.'),
              ]),
            }),
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ JAVASCRIPT DEEP DIVE ━━━━━━━━━━━━━━━━━━━
    {
      title: 'JavaScript Deep Dive',
      slug: 'javascript-deep-dive',
      description: 'Master JavaScript from ES6+ syntax to event loop concurrency, closures, promises, async/await, and DOM manipulation.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'youtube', title: 'JavaScript Full Course for Beginners', url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg', author: 'FreeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'JavaScript Event Loop & Async Mechanics Explained', url: 'https://www.youtube.com/watch?v=8aGhZQkoFbQ', author: 'Philip Roberts (JSConf)', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'JavaScript Closures & Lexical Scope', url: 'https://www.youtube.com/watch?v=vKJpN5FAeF4', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Promises, Async / Await & Fetch API', url: 'https://www.youtube.com/watch?v=V_Kr9OSfDeU', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Modern JavaScript ES6+ Features Deep Dive', url: 'https://www.youtube.com/watch?v=NCwa_xi0Uuc', author: 'Programming with Mosh', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'You Don\'t Know JS Yet (Book Series)', url: 'https://github.com/getify/You-Dont-Know-JS', author: 'Kyle Simpson' },
        { resourceType: 'article', title: 'JavaScript.info — The Modern JavaScript Tutorial', url: 'https://javascript.info/', author: 'Ilya Kantor' },
        { resourceType: 'cheatsheet', title: 'Modern ES6+ Syntax Reference Sheet', url: 'https://quickref.me/javascript', author: 'QuickRef' },
        { resourceType: 'article', title: 'MDN JavaScript Reference & Objects Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', author: 'MDN' },
        { resourceType: 'cheatsheet', title: 'JavaScript Array Methods & Functional Cheat Sheet', url: 'https://arrayexplorer.com/', author: 'Sarah Drasner' },
      ],
      modules: [
        {
          title: 'Module 1: ES6+ Language Features',
          lessons: [
            setupLesson('JavaScript Deep Dive', 'javascript-deep-dive', 'javascript',
              `1. Install Node.js 18+ or 20+\n2. Open terminal and test: \`node -v\`\n3. Run JavaScript files using: \`node script.js\``,
              `console.log("Hello, JavaScript!");`,
              `console.log("Hello, JavaScript!");`
            ),
            lesson('Variables (`const`, `let`) & Scope', 'js-variables-scope', `# Let vs Const\n\nUse \`const\` by default. Use \`let\` for reassigned variables. Avoid \`var\` to prevent hoisting bugs.`, {
              starterCode: `const name = "Alice";\nlet score = 100;\nscore += 20;\nconsole.log(name, score);`,
              solutionCode: `const name = "Alice";\nlet score = 100;\nscore += 20;\nconsole.log(name, score);`,
              codeLanguage: 'javascript',
              quiz: quiz('JS Scope Quiz', [
                mcq('Why should `const` or `let` be used over `var`?', '`const` and `let` are block-scoped', ['`var` is slower', '`var` cannot store numbers'], 'Block scope prevents variable leakage outside loops and conditionals.'),
              ]),
            }),
            lesson('Arrow Functions & Lexical `this`', 'js-arrow-functions', `# Arrow Functions\n\nConcise arrow syntax: \`const add = (a, b) => a + b;\`. Arrow functions bind \`this\` lexically.`, {
              starterCode: `const multiply = (a, b) => a * b;\nconsole.log(multiply(4, 5));`,
              solutionCode: `const multiply = (a, b) => a * b;\nconsole.log(multiply(4, 5));`,
              codeLanguage: 'javascript',
              quiz: quiz('Arrow Function Quiz', [
                trueFalse('Arrow functions do NOT have their own binding of `this`.', true),
              ]),
            }),
            lesson('Destructuring & Spread Operator (`...`)', 'js-destructuring-spread', `# Destructuring & Spread\n\nExtract properties: \`const { name, age } = user;\`. Spread arrays/objects: \`const copy = { ...user };\`.`, {
              starterCode: `const user = { name: "Alice", role: "Dev" };\nconst { name, role } = user;\nconsole.log(name, role);`,
              solutionCode: `const user = { name: "Alice", role: "Dev" };\nconst { name, role } = user;\nconsole.log(name, role);`,
              codeLanguage: 'javascript',
              quiz: quiz('Destructuring Quiz', [
                mcq('What does `const [a, b] = [10, 20];` perform?', 'Array destructuring assignment', ['Array concatenation', 'Object cloning'], 'It assigns 10 to `a` and 20 to `b`.'),
              ]),
            }),
            lesson('Array Methods (`map`, `filter`, `reduce`)', 'js-array-methods', `# Array Functional Methods\n\nTransform data cleanly: \`arr.map()\`, \`arr.filter()\`, \`arr.reduce()\`.`, {
              starterCode: `const nums = [1, 2, 3, 4, 5];\nconst doubledEvens = nums.filter(n => n % 2 === 0).map(n => n * 2);\nconsole.log(doubledEvens);`,
              solutionCode: `const nums = [1, 2, 3, 4, 5];\nconst doubledEvens = nums.filter(n => n % 2 === 0).map(n => n * 2);\nconsole.log(doubledEvens);`,
              codeLanguage: 'javascript',
              quiz: quiz('Array Methods Quiz', [
                mcq('Which array method reduces an array to a single accumulator value?', 'reduce()', ['map()', 'filter()'], '`reduce()` accumulates items into a single result.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Asynchronous JS & Event Loop',
          lessons: [
            lesson('The Event Loop & Call Stack', 'js-event-loop', `# Event Loop\n\nUnderstand the Single Threaded Call Stack, Web APIs, Microtask Queue (Promises), and Macrotask Queue (setTimeout).`, {
              starterCode: `console.log("1");\nsetTimeout(() => console.log("2"), 0);\nPromise.resolve().then(() => console.log("3"));\nconsole.log("4");`,
              solutionCode: `console.log("1");\nsetTimeout(() => console.log("2"), 0);\nPromise.resolve().then(() => console.log("3"));\nconsole.log("4");`,
              codeLanguage: 'javascript',
              quiz: quiz('Event Loop Quiz', [
                mcq('In what order does the snippet print output?', '1, 4, 3, 2', ['1, 2, 3, 4', '1, 4, 2, 3'], 'Microtasks (Promises) execute before Macrotasks (setTimeout).'),
              ]),
            }),
            lesson('Promises & Resolution/Rejection', 'js-promises', `# Promises\n\nHandle async operations with \`new Promise((resolve, reject) => ...)\`, \`.then()\`, and \`.catch()\`.`, {
              starterCode: `const fetchData = () => new Promise((resolve) => setTimeout(() => resolve("Data loaded"), 100));\nfetchData().then(console.log);`,
              solutionCode: `const fetchData = () => new Promise((resolve) => setTimeout(() => resolve("Data loaded"), 100));\nfetchData().then(console.log);`,
              codeLanguage: 'javascript',
              quiz: quiz('Promises Quiz', [
                mcq('What states can a Promise be in?', 'Pending, Fulfilled, Rejected', ['Active, Inactive', 'Running, Stopped'], 'A Promise starts Pending and transitions to Fulfilled or Rejected.'),
              ]),
            }),
            lesson('Async / Await Syntax & Error Handling', 'js-async-await', `# Async/Await\n\nWrite asynchronous code synchronously using \`async\` functions and \`await\` inside \`try/catch\` blocks.`, {
              starterCode: `async function getData() {\n  try {\n    const res = await Promise.resolve("Success");\n    console.log(res);\n  } catch (err) {\n    console.error(err);\n  }\n}\ngetData();`,
              solutionCode: `async function getData() {\n  try {\n    const res = await Promise.resolve("Success");\n    console.log(res);\n  } catch (err) {\n    console.error(err);\n  }\n}\ngetData();`,
              codeLanguage: 'javascript',
              quiz: quiz('Async Await Quiz', [
                trueFalse('`await` can only be used inside functions marked with the `async` keyword.', true),
              ]),
            }),
            lesson('Fetch API & HTTP Operations', 'js-fetch-api', `# Fetch API\n\nMake HTTP GET and POST requests: \`const res = await fetch(url); const data = await res.json();\`.`, {
              starterCode: `async function fetchPost() {\n  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");\n  const data = await res.json();\n  console.log(data.title);\n}\nfetchPost();`,
              solutionCode: `async function fetchPost() {\n  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");\n  const data = await res.json();\n  console.log(data.title);\n}\nfetchPost();`,
              codeLanguage: 'javascript',
              quiz: quiz('Fetch Quiz', [
                mcq('What method parses a JSON HTTP response stream?', 'response.json()', ['response.text()', 'response.parse()'], '`response.json()` returns a promise resolving to parsed JSON.'),
              ]),
            }),
            lesson('Closures & Lexical Scoping', 'js-closures', `# Closures\n\nA function bundled together with references to its surrounding lexical state (variables).`, {
              starterCode: `function createCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst counter = createCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2`,
              solutionCode: `function createCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst counter = createCounter();\nconsole.log(counter());\nconsole.log(counter());`,
              codeLanguage: 'javascript',
              quiz: quiz('Closures Quiz', [
                mcq('What enables inner functions to access outer variables after outer function returns?', 'Lexical closures', ['Prototypes', 'Global objects'], 'Closures retain references to their lexical enclosing scope.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: DOM Manipulation & Modules',
          lessons: [
            lesson('DOM Selection & Event Listeners', 'js-dom-events', `# DOM Events\n\nSelect elements: \`document.querySelector('#btn')\`. Add listeners: \`btn.addEventListener('click', fn)\`.`, {
              starterCode: `// Example DOM interaction\nconst button = document.createElement("button");\nbutton.innerText = "Click Me";\nbutton.addEventListener("click", () => console.log("Clicked!"));`,
              solutionCode: `const button = document.createElement("button");\nbutton.innerText = "Click Me";\nbutton.addEventListener("click", () => console.log("Clicked!"));`,
              codeLanguage: 'javascript',
              quiz: quiz('DOM Events Quiz', [
                mcq('Which method listens for user UI interactions like clicks?', 'addEventListener()', ['onAction()', 'attachEvent()'], '`addEventListener` is standard for DOM events.'),
              ]),
            }),
            lesson('ES Modules (`import` / `export`)', 'js-es-modules', `# ES Modules\n\nOrganize code into modular files using \`export default\` and \`import { helper } from './utils.js'\`.`, {
              starterCode: `// utils.js\nexport const add = (a, b) => a + b;\n// main.js\nimport { add } from './utils.js';`,
              solutionCode: `export const add = (a, b) => a + b;`,
              codeLanguage: 'javascript',
              quiz: quiz('ES Modules Quiz', [
                trueFalse('ES Modules (`import`/`export`) are natively supported in modern browsers and Node.js.', true),
              ]),
            }),
            lesson('LocalStorage & SessionStorage API', 'js-web-storage', `# Web Storage\n\nPersist client data: \`localStorage.setItem('theme', 'dark')\` and \`localStorage.getItem('theme')\`.`, {
              starterCode: `localStorage.setItem("user", JSON.stringify({ name: "Scott" }));\nconst user = JSON.parse(localStorage.getItem("user"));\nconsole.log(user.name);`,
              solutionCode: `localStorage.setItem("user", JSON.stringify({ name: "Scott" }));\nconst user = JSON.parse(localStorage.getItem("user"));\nconsole.log(user.name);`,
              codeLanguage: 'javascript',
              quiz: quiz('Web Storage Quiz', [
                mcq('Which browser storage persists across tab closes and browser restarts?', 'localStorage', ['sessionStorage', 'cookies'], '`localStorage` has no expiration date.'),
              ]),
            }),
            lesson('Error Objects & Custom Errors', 'js-custom-errors', `# Custom Errors\n\nExtend \`Error\` to create custom application exceptions: \`class ValidationError extends Error {}\`.`, {
              starterCode: `class ValidationError extends Error {\n  constructor(message) {\n    super(message);\n    this.name = "ValidationError";\n  }\n}`,
              solutionCode: `class ValidationError extends Error {\n  constructor(message) {\n    super(message);\n    this.name = "ValidationError";\n  }\n}`,
              codeLanguage: 'javascript',
              quiz: quiz('Custom Errors Quiz', [
                trueFalse('Custom error classes extending `Error` retain stack trace information.', true),
              ]),
            }),
            lesson('JavaScript Capstone: Interactive Real-Time Dashboard App', 'js-capstone', `# JS Capstone\n\nBuild an async dashboard app fetching live weather/crypto API data, storing state in localStorage.`, {
              starterCode: `async function initDashboard() {\n  console.log("=== DASHBOARD INITIALIZED ===");\n}\ninitDashboard();`,
              solutionCode: `async function initDashboard() {\n  console.log("=== DASHBOARD INITIALIZED ===");\n}\ninitDashboard();`,
              codeLanguage: 'javascript',
              quiz: quiz('JS Capstone Quiz', [
                mcq('What JavaScript feature enables responsive, non-blocking asynchronous user interfaces?', 'Promises & Async/Await with the Event Loop', ['Synchronous while loops', 'Global var flags'], 'Async/await prevents UI thread freezing.'),
              ]),
            }),
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ REACT & NEXT.JS FULLSTACK ━━━━━━━━━━━━━━━━━━━
    {
      title: 'React & Next.js Fullstack',
      slug: 'react-nextjs-fullstack',
      description: 'Build production-ready web apps with React 19, Hooks, Server Components, Next.js 15 App Router, and Server Actions.',
      difficulty: 'advanced',
      language: 'en',
      estimatedHours: 25,
      resources: [
        { resourceType: 'youtube', title: 'React 19 & Next.js 15 Full Course 2026', url: 'https://www.youtube.com/watch?v=wm5gMKCORL4', author: 'FreeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Next.js 15 App Router Crash Course', url: 'https://www.youtube.com/watch?v=Zq5fmkH0T78', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'React Server Components & Server Actions In Depth', url: 'https://www.youtube.com/watch?v=gSSsZReIFRk', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'React State Management (Zustand & Context API)', url: 'https://www.youtube.com/watch?v=_q55VPLt_L4', author: 'Jack Herrington', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Fullstack Next.js + Prisma + Auth Project', url: 'https://www.youtube.com/watch?v=ctrzcha0Q6s', author: 'Code With Antonio', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'Official Next.js Documentation & App Router Docs', url: 'https://nextjs.org/docs', author: 'Vercel' },
        { resourceType: 'article', title: 'React Official Documentation (react.dev)', url: 'https://react.dev/', author: 'React Core Team' },
        { resourceType: 'cheatsheet', title: 'React Hooks Quick Reference Cheat Sheet', url: 'https://quickref.me/react', author: 'QuickRef' },
        { resourceType: 'article', title: 'Zustand State Management Documentation', url: 'https://zustand-demo.pmnd.rs/', author: 'Poimandres' },
        { resourceType: 'cheatsheet', title: 'Next.js App Router File Conventions Reference', url: 'https://nextjs.org/docs/app/building-your-application/routing', author: 'Vercel' },
      ],
      modules: [
        {
          title: 'Module 1: React 19 Core & Hooks',
          lessons: [
            setupLesson('React & Next.js Fullstack', 'react-nextjs-fullstack', 'tsx',
              `1. Run: \`npx create-next-app@latest my-app\`\n2. Select TypeScript, Tailwind/CSS Modules, App Router\n3. Run: \`cd my-app && npm run dev\`\n4. Open \`http://localhost:3000\``,
              `export default function Page() {\n  return <h1>Hello Next.js App Router!</h1>;\n}`,
              `export default function Page() {\n  return <h1>Hello Next.js App Router!</h1>;\n}`
            ),
            lesson('JSX Syntax & Component Composition', 'react-jsx-components', `# React Components\n\nBuild UI using JSX components with props: \`<Card title="Welcome" />\`.`, {
              starterCode: `function Card({ title }: { title: string }) {\n  return <div className="card"><h2>{title}</h2></div>;\n}`,
              solutionCode: `function Card({ title }: { title: string }) {\n  return <div className="card"><h2>{title}</h2></div>;\n}`,
              codeLanguage: 'tsx',
              quiz: quiz('JSX Quiz', [
                mcq('What syntax extension allows writing HTML-like markup inside React files?', 'JSX (JavaScript XML)', ['JSON', 'HTMLX'], 'JSX lets developers write HTML markup inside JS/TS.'),
              ]),
            }),
            lesson('State Management (`useState`, `useReducer`)', 'react-usestate', `# State Management\n\nManage local component state with \`useState\`: \`const [count, setCount] = useState(0);\`.`, {
              starterCode: `import { useState } from 'react';\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;\n}`,
              solutionCode: `import { useState } from 'react';\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;\n}`,
              codeLanguage: 'tsx',
              quiz: quiz('useState Quiz', [
                trueFalse('Updating state via `setCount` triggers a component re-render with new values.', true),
              ]),
            }),
            lesson('Side Effects & Lifecycle (`useEffect`)', 'react-useeffect', `# Side Effects\n\nFetch data or subscribe to events using \`useEffect(() => { ... }, [dependencies])\`.`, {
              starterCode: `import { useState, useEffect } from 'react';\nexport default function Timer() {\n  const [seconds, setSeconds] = useState(0);\n  useEffect(() => {\n    const id = setInterval(() => setSeconds(s => s + 1), 1000);\n    return () => clearInterval(id);\n  }, []);\n  return <div>Seconds: {seconds}</div>;\n}`,
              solutionCode: `import { useState, useEffect } from 'react';\nexport default function Timer() {\n  const [seconds, setSeconds] = useState(0);\n  useEffect(() => {\n    const id = setInterval(() => setSeconds(s => s + 1), 1000);\n    return () => clearInterval(id);\n  }, []);\n  return <div>Seconds: {seconds}</div>;\n}`,
              codeLanguage: 'tsx',
              quiz: quiz('useEffect Quiz', [
                mcq('What function cleans up timers or subscriptions when a component unmounts?', 'The cleanup function returned by `useEffect`', ['`useState` cleanup', '`useMemo`'], 'Returning a function from useEffect executes cleanup on unmount.'),
              ]),
            }),
            lesson('Zustand Global State Management', 'react-zustand', `# Zustand Store\n\nManage global client state without context boilerplate: \`const useStore = create((set) => ({ ... }))\`.`, {
              starterCode: `import { create } from 'zustand';\ntype State = { xp: number; addXp: (amount: number) => void };\nexport const useXpStore = create<State>((set) => ({\n  xp: 0,\n  addXp: (amount) => set((state) => ({ xp: state.xp + amount })),\n}));`,
              solutionCode: `import { create } from 'zustand';\ntype State = { xp: number; addXp: (amount: number) => void };\nexport const useXpStore = create<State>((set) => ({\n  xp: 0,\n  addXp: (amount) => set((state) => ({ xp: state.xp + amount })),\n}));`,
              codeLanguage: 'tsx',
              quiz: quiz('Zustand Quiz', [
                mcq('Why choose Zustand over React Context?', 'Zustand prevents unnecessary re-renders of non-subscribed components', ['Zustand works only on backend', 'Context is deprecated'], 'Zustand selector subscriptions optimize render performance.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Next.js App Router & Server Components',
          lessons: [
            lesson('Server Components vs Client Components', 'nextjs-rsc-vs-client', `# React Server Components\n\nServer components render on the server (zero client bundle). Use \`'use client'\` for interactive state.`, {
              starterCode: `// Server Component (default)\nexport default async function CoursePage() {\n  const data = await fetch("https://api.example.com/courses");\n  return <div>Courses Loaded</div>;\n}`,
              solutionCode: `export default async function CoursePage() {\n  const data = await fetch("https://api.example.com/courses");\n  return <div>Courses Loaded</div>;\n}`,
              codeLanguage: 'tsx',
              quiz: quiz('RSC Quiz', [
                mcq('Which directive marks a file as a React Client Component?', '\'use client\'', ['\'use server\'', '\'use strict\''], '`\'use client\'` boundary marks client components.'),
              ]),
            }),
            lesson('App Router Dynamic Routing (`[slug]`)', 'nextjs-routing', `# Next.js Routing\n\nFolders define routes: \`app/courses/[slug]/page.tsx\` maps to \`/courses/python\`.`, {
              starterCode: `export default async function Page({\n  params,\n}: {\n  params: Promise<{ slug: string }>;\n}) {\n  const { slug } = await params;\n  return <h1>Course: {slug}</h1>;\n}`,
              solutionCode: `export default async function Page({\n  params,\n}: {\n  params: Promise<{ slug: string }>;\n}) {\n  const { slug } = await params;\n  return <h1>Course: {slug}</h1>;\n}`,
              codeLanguage: 'tsx',
              quiz: quiz('Next.js Routing Quiz', [
                trueFalse('Next.js 15 passes route params as a Promise that must be awaited.', true),
              ]),
            }),
            lesson('Layouts, Templates & Loading States', 'nextjs-layouts-loading', `# Layouts & Loading\n\nUse \`layout.tsx\` for shared UI navigation and \`loading.tsx\` for instant Suspense skeletons.`, {
              starterCode: `// app/loading.tsx\nexport default function Loading() {\n  return <div className="spinner">Loading course material...</div>;\n}`,
              solutionCode: `export default function Loading() {\n  return <div className="spinner">Loading course material...</div>;\n}`,
              codeLanguage: 'tsx',
              quiz: quiz('Layouts Loading Quiz', [
                mcq('What file automatically displays a fallback loader while page async data fetches?', 'loading.tsx', ['fallback.tsx', 'spinner.tsx'], '`loading.tsx` creates an automatic React Suspense boundary.'),
              ]),
            }),
            lesson('Route Handlers & API Endpoints', 'nextjs-route-handlers', `# Route Handlers\n\nBuild REST API endpoints in \`app/api/notes/route.ts\` using \`export async function GET(req: Request)\`.`, {
              starterCode: `import { NextResponse } from 'next/server';\nexport async function GET() {\n  return NextResponse.json({ status: "ok", timestamp: Date.now() });\n}`,
              solutionCode: `import { NextResponse } from 'next/server';\nexport async function GET() {\n  return NextResponse.json({ status: "ok", timestamp: Date.now() });\n}`,
              codeLanguage: 'ts',
              quiz: quiz('Route Handlers Quiz', [
                mcq('Where are Route Handlers located in Next.js App Router?', 'Inside route.ts / route.js files', ['Inside api.js', 'Inside server.ts'], '`route.ts` defines HTTP handlers in App Router.'),
              ]),
            }),
            lesson('Next.js Server Actions (`\'use server\'`)', 'nextjs-server-actions', `# Server Actions\n\nExecute server-side functions directly from form submissions or client buttons.`, {
              starterCode: `'use server';\nimport { revalidatePath } from 'next/cache';\nexport async function addNote(formData: FormData) {\n  const content = formData.get('content');\n  revalidatePath('/notes');\n}`,
              solutionCode: `'use server';\nimport { revalidatePath } from 'next/cache';\nexport async function addNote(formData: FormData) {\n  const content = formData.get('content');\n  revalidatePath('/notes');\n}`,
              codeLanguage: 'ts',
              quiz: quiz('Server Actions Quiz', [
                trueFalse('Server Actions allow invoking asynchronous server functions directly from client component events.', true),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: Authentication & Production Deployment',
          lessons: [
            lesson('Authentication & JWT Session Cookies', 'nextjs-auth-cookies', `# JWT Auth\n\nSign encrypted JWTs with \`jose\` and store in HTTP-only session cookies.`, {
              starterCode: `import { cookies } from 'next/headers';\nexport async function setSession(token: string) {\n  const cookieStore = await cookies();\n  cookieStore.set('session', token, { httpOnly: true, secure: true });\n}`,
              solutionCode: `import { cookies } from 'next/headers';\nexport async function setSession(token: string) {\n  const cookieStore = await cookies();\n  cookieStore.set('session', token, { httpOnly: true, secure: true });\n}`,
              codeLanguage: 'ts',
              quiz: quiz('JWT Auth Quiz', [
                mcq('Why store session tokens in HTTP-only cookies?', 'Prevents client-side XSS scripts from accessing the authentication token', ['Faster network transfer', 'Saves server RAM'], 'HTTP-only cookies cannot be read by malicious client JS scripts.'),
              ]),
            }),
            lesson('Middleware Protection (`middleware.ts`)', 'nextjs-middleware', `# Middleware\n\nProtect private routes (\`/settings\`, \`/dashboard\`) by intercepting requests in \`middleware.ts\`.`, {
              starterCode: `import { NextResponse } from 'next/server';\nimport type { NextRequest } from 'next/server';\nexport function middleware(req: NextRequest) {\n  const token = req.cookies.get('session');\n  if (!token) return NextResponse.redirect(new URL('/login', req.url));\n}`,
              solutionCode: `import { NextResponse } from 'next/server';\nimport type { NextRequest } from 'next/server';\nexport function middleware(req: NextRequest) {\n  const token = req.cookies.get('session');\n  if (!token) return NextResponse.redirect(new URL('/login', req.url));\n}`,
              codeLanguage: 'ts',
              quiz: quiz('Middleware Quiz', [
                trueFalse('Next.js middleware runs BEFORE a request is completed, allowing server-side route guards.', true),
              ]),
            }),
            lesson('Prisma ORM Database Integration', 'nextjs-prisma-integration', `# Prisma Integration\n\nQuery databases in Server Components: \`const users = await prisma.user.findMany();\`.`, {
              starterCode: `import { PrismaClient } from '@prisma/client';\nconst prisma = new PrismaClient();\nexport async function getUsers() {\n  return await prisma.user.findMany({ select: { id: true, username: true } });\n}`,
              solutionCode: `import { PrismaClient } from '@prisma/client';\nconst prisma = new PrismaClient();\nexport async function getUsers() {\n  return await prisma.user.findMany({ select: { id: true, username: true } });\n}`,
              codeLanguage: 'ts',
              quiz: quiz('Prisma Quiz', [
                mcq('What tool generates auto-completed TypeScript queries for databases?', 'Prisma Client', ['Webpack', 'Babel'], 'Prisma generates type-safe database queries from `schema.prisma`.'),
              ]),
            }),
            lesson('Performance Optimization & Image Component', 'nextjs-optimization', `# Optimization\n\nOptimize images using \`next/image\` and fonts using \`next/font\`.`, {
              starterCode: `import Image from 'next/image';\nexport default function Avatar() {\n  return <Image src="/logo.png" alt="Logo" width={100} height={100} priority />;\n}`,
              solutionCode: `import Image from 'next/image';\nexport default function Avatar() {\n  return <Image src="/logo.png" alt="Logo" width={100} height={100} priority />;\n}`,
              codeLanguage: 'tsx',
              quiz: quiz('Optimization Quiz', [
                mcq('What does `next/image` automatically perform?', 'Image resizing, WebP conversion, and lazy loading', ['CSS minification', 'Database backup'], 'It optimizes image formats and responsiveness automatically.'),
              ]),
            }),
            lesson('Next.js Capstone: Fullstack Code Mentor Platform', 'nextjs-capstone', `# Next.js Capstone\n\nDeploy a fullstack web app with Next.js 15, Prisma ORM, Server Actions, and Vercel hosting.`, {
              starterCode: `console.log("=== FULLSTACK NEXT.JS PLATFORM READY FOR PRODUCTION ===");`,
              solutionCode: `console.log("=== FULLSTACK NEXT.JS PLATFORM READY FOR PRODUCTION ===");`,
              codeLanguage: 'ts',
              quiz: quiz('Next.js Capstone Quiz', [
                mcq('Which cloud platform is natively built by the creators of Next.js for instant deployment?', 'Vercel', ['Heroku', 'Netlify'], 'Vercel is built specifically for Next.js deployments.'),
              ]),
            }),
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ TYPESCRIPT IN PRACTICE ━━━━━━━━━━━━━━━━━━━
    {
      title: 'TypeScript in Practice',
      slug: 'typescript-in-practice',
      description: 'Master strongly typed JavaScript — interfaces, generics, utility types, conditional types, and strict compiler configurations.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 15,
      resources: [
        { resourceType: 'youtube', title: 'TypeScript Course for Beginners', url: 'https://www.youtube.com/watch?v=d56mG7DezGs', author: 'Programming with Mosh', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'TypeScript in 100 Seconds', url: 'https://www.youtube.com/watch?v=zQnBQ4tB3ZA', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Advanced TypeScript Generics & Type Manipulation', url: 'https://www.youtube.com/watch?v=nViEqnuj0yQ', author: 'Matt Pocock (Total TypeScript)', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'TypeScript Utility Types (Partial, Record, Pick)', url: 'https://www.youtube.com/watch?v=2T__P6T1k_k', author: 'Jack Herrington', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'TypeScript Full Tutorial for React Developers', url: 'https://www.youtube.com/watch?v=TPACABQTHvM', author: 'FreeCodeCamp', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'Official TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/handbook/intro.html', author: 'Microsoft' },
        { resourceType: 'article', title: 'Total TypeScript Interactive Guides', url: 'https://www.totaltypescript.com/', author: 'Matt Pocock' },
        { resourceType: 'cheatsheet', title: 'TypeScript Quick Reference Cheat Sheet', url: 'https://quickref.me/typescript', author: 'QuickRef' },
        { resourceType: 'article', title: 'TypeScript Deep Dive Book', url: 'https://basarat.gitbook.io/typescript/', author: 'Basarat Ali Syed' },
        { resourceType: 'cheatsheet', title: 'TypeScript Utility Types Reference', url: 'https://www.typescriptlang.org/docs/handbook/utility-types.html', author: 'Microsoft' },
      ],
      modules: [
        {
          title: 'Module 1: Type System & Interfaces',
          lessons: [
            setupLesson('TypeScript in Practice', 'typescript-in-practice', 'ts',
              `1. Install TypeScript: \`npm install -g typescript\`\n2. Initialize config: \`npx tsc --init\`\n3. Run type checking: \`npx tsc --noEmit\``,
              `const message: string = "Hello TypeScript!";\nconsole.log(message);`,
              `const message: string = "Hello TypeScript!";\nconsole.log(message);`
            ),
            lesson('Basic Annotations & Primitive Types', 'ts-basic-types', `# Type Annotations\n\nExplicitly annotate primitives: \`string\`, \`number\`, \`boolean\`, \`string[]\`, \`tuple [string, number]\`.`, {
              starterCode: `let name: string = "Alice";\nlet age: number = 25;\nlet skills: string[] = ["TS", "React"];\nconsole.log(name, age, skills);`,
              solutionCode: `let name: string = "Alice";\nlet age: number = 25;\nlet skills: string[] = ["TS", "React"];\nconsole.log(name, age, skills);`,
              codeLanguage: 'ts',
              quiz: quiz('Basic Types Quiz', [
                mcq('What does `npx tsc --noEmit` do?', 'Runs type-checking without emitting compiled JavaScript files', ['Compiles to C++', 'Deletes files'], '`--noEmit` performs static analysis without creating build output.'),
              ]),
            }),
            lesson('Interfaces vs Type Aliases (`interface`, `type`)', 'ts-interfaces-types', `# Interfaces vs Types\n\nUse \`interface User {}\` for extendable object shapes and \`type ID = string | number\` for unions.`, {
              starterCode: `interface User {\n  id: string;\n  username: string;\n}\ntype Role = "admin" | "user";`,
              solutionCode: `interface User {\n  id: string;\n  username: string;\n}\ntype Role = "admin" | "user";`,
              codeLanguage: 'ts',
              quiz: quiz('Interface vs Type Quiz', [
                mcq('Which feature allows declaration merging in TypeScript?', 'interface', ['type', 'enum'], 'Interfaces permit declaration merging across multiple declarations.'),
              ]),
            }),
            lesson('Union & Intersection Types (`|`, `&`)', 'ts-unions-intersections', `# Unions & Intersections\n\nUnions (\`A | B\`) accept either type; Intersections (\`A & B\`) combine all properties of both types.`, {
              starterCode: `type Admin = { permissions: string[] };\ntype User = { name: string };\ntype AdminUser = Admin & User;`,
              solutionCode: `type Admin = { permissions: string[] };\ntype User = { name: string };\ntype AdminUser = Admin & User;`,
              codeLanguage: 'ts',
              quiz: quiz('Unions Quiz', [
                trueFalse('Intersection types (`&`) combine multiple object types into a single unified type.', true),
              ]),
            }),
            lesson('Literal Types & Enums', 'ts-enums-literals', `# Enums & Literals\n\nConstrain variables to exact literal values: \`type Theme = "light" | "dark";\` or \`enum Status { Active, Inactive }\`.`, {
              starterCode: `enum Status { ACTIVE = "ACTIVE", INACTIVE = "INACTIVE" }\nconst userStatus: Status = Status.ACTIVE;`,
              solutionCode: `enum Status { ACTIVE = "ACTIVE", INACTIVE = "INACTIVE" }\nconst userStatus: Status = Status.ACTIVE;`,
              codeLanguage: 'ts',
              quiz: quiz('Enums Quiz', [
                mcq('What advantage do string literal union types have over standard Enums?', 'Zero JavaScript runtime output footprint', ['Faster runtime speed', 'Automatic database sync'], 'String literal unions produce zero JavaScript code output.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Generics & Utility Types',
          lessons: [
            lesson('Generic Functions & Interfaces (`<T>`)', 'ts-generics', `# Generics\n\nBuild reusable components that work over a variety of types: \`function identity<T>(arg: T): T { return arg; }\`.`, {
              starterCode: `function getFirst<T>(arr: T[]): T | undefined {\n  return arr[0];\n}\nconsole.log(getFirst<number>([10, 20]));`,
              solutionCode: `function getFirst<T>(arr: T[]): T | undefined {\n  return arr[0];\n}\nconsole.log(getFirst<number>([10, 20]));`,
              codeLanguage: 'ts',
              quiz: quiz('Generics Quiz', [
                mcq('What symbol denotes generic type parameters in TypeScript?', '<T>', ['[T]', '{T}'], '`<T>` defines generic parameters.'),
              ]),
            }),
            lesson('Built-in Utility Types (`Partial`, `Required`, `Readonly`)', 'ts-utility-types-1', `# Utility Types 1\n\n\`Partial<T>\` makes all properties optional; \`Readonly<T>\` prevents property mutation.`, {
              starterCode: `interface User { id: string; name: string; }\ntype PartialUser = Partial<User>;\nconst update: PartialUser = { name: "New Name" };`,
              solutionCode: `interface User { id: string; name: string; }\ntype PartialUser = Partial<User>;\nconst update: PartialUser = { name: "New Name" };`,
              codeLanguage: 'ts',
              quiz: quiz('Utility 1 Quiz', [
                mcq('What does `Partial<T>` do to a type T?', 'Makes all properties of T optional', ['Makes all properties required', 'Deletes all properties'], '`Partial<T>` adds `?` to all properties.'),
              ]),
            }),
            lesson('Selection Utility Types (`Pick`, `Omit`, `Record`)', 'ts-utility-types-2', `# Utility Types 2\n\n\`Pick<T, K>\` selects specific keys; \`Omit<T, K>\` excludes keys; \`Record<K, V>\` maps keys to value types.`, {
              starterCode: `interface User { id: string; name: string; email: string; }\ntype UserPreview = Pick<User, "name" | "email">;\ntype UserMap = Record<string, User>;`,
              solutionCode: `interface User { id: string; name: string; email: string; }\ntype UserPreview = Pick<User, "name" | "email">;\ntype UserMap = Record<string, User>;`,
              codeLanguage: 'ts',
              quiz: quiz('Utility 2 Quiz', [
                mcq('Which utility type constructs an object type with specified keys mapped to a value type?', 'Record<K, V>', ['Omit<K, V>', 'Pick<K, V>'], '`Record<K, V>` constructs object maps.'),
              ]),
            }),
            lesson('Type Narrowing & Type Guards (`is`, `in`, `instanceof`)', 'ts-type-narrowing', `# Type Guards\n\nNarrow broad union types using \`typeof\`, \`instanceof\`, or custom predicates: \`x is User\`.`, {
              starterCode: `function isString(val: unknown): val is string {\n  return typeof val === "string";\n}`,
              solutionCode: `function isString(val: unknown): val is string {\n  return typeof val === "string";\n}`,
              codeLanguage: 'ts',
              quiz: quiz('Type Guard Quiz', [
                trueFalse('A custom type guard function uses the `val is Type` return type predicate.', true),
              ]),
            }),
            lesson('Conditional Types & Infer Keyword (`T extends U ? X : Y`)', 'ts-conditional-types', `# Conditional Types\n\nSelect types based on condition checks: \`type IsString<T> = T extends string ? true : false;\`.`, {
              starterCode: `type ElementType<T> = T extends (infer U)[] ? U : T;\ntype Num = ElementType<number[]>; // number`,
              solutionCode: `type ElementType<T> = T extends (infer U)[] ? U : T;\ntype Num = ElementType<number[]>;`,
              codeLanguage: 'ts',
              quiz: quiz('Conditional Types Quiz', [
                mcq('What keyword extracts an inner type within conditional type matching?', 'infer', ['extract', 'pick'], '`infer` introduces a type variable to be deduced.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: Advanced Compiler Config & Enterprise TS',
          lessons: [
            lesson('Strict Compiler Options (`tsconfig.json`)', 'ts-config-strict', `# tsconfig.json\n\nEnable \`"strict": true\`, \`"noImplicitAny": true\`, and \`"strictNullChecks": true\` for maximum safety.`, {
              starterCode: `{\n  "compilerOptions": {\n    "strict": true,\n    "noImplicitAny": true,\n    "strictNullChecks": true\n  }\n}`,
              solutionCode: `{\n  "compilerOptions": {\n    "strict": true,\n    "noImplicitAny": true,\n    "strictNullChecks": true\n  }\n}`,
              codeLanguage: 'json',
              quiz: quiz('TS Config Quiz', [
                mcq('What does `"strictNullChecks": true` enforce?', 'Disallows assigning null or undefined unless explicitly typed (e.g. `string | null`)', ['Deletes null variables', 'Ignores errors'], 'It prevents null pointer runtime errors by forcing explicit null handling.'),
              ]),
            }),
            lesson('Mapped Types & Template Literal Types', 'ts-mapped-types', `# Mapped Types\n\nCreate new types by iterating over keys: \`type ReadonlyUser = { readonly [K in keyof User]: User[K] }\`.`, {
              starterCode: `type Event = \`on\${"Click" | "Hover"}\`; // "onClick" | "onHover"`,
              solutionCode: `type Event = \`on\${"Click" | "Hover"}\`;`,
              codeLanguage: 'ts',
              quiz: quiz('Mapped Types Quiz', [
                trueFalse('Template literal types enable generating string pattern union types dynamically.', true),
              ]),
            }),
            lesson('Declaration Files & Third-Party DefinitelyTyped (`@types`)', 'ts-declaration-files', `# Declaration Files\n\nAdd type definitions for untyped JS libraries using \`.d.ts\` files and \`npm install @types/node\`.`, {
              starterCode: `declare module 'legacy-lib' {\n  export function legacyMethod(): void;\n}`,
              solutionCode: `declare module 'legacy-lib' {\n  export function legacyMethod(): void;\n}`,
              codeLanguage: 'ts',
              quiz: quiz('Declaration Quiz', [
                mcq('What file extension is used for TypeScript type definition files?', '.d.ts', ['.ts', '.json'], '`.d.ts` holds ambient type declarations.'),
              ]),
            }),
            lesson('TypeScript with React & Next.js Best Practices', 'ts-react-best-practices', `# TS + React\n\nType React props, event handlers (\`React.MouseEvent<HTMLButtonElement>\`), and refs.`, {
              starterCode: `import React from 'react';\ntype Props = { title: string; onClick: (e: React.MouseEvent) => void };\nexport const Button: React.FC<Props> = ({ title, onClick }) => (\n  <button onClick={onClick}>{title}</button>\n);`,
              solutionCode: `import React from 'react';\ntype Props = { title: string; onClick: (e: React.MouseEvent) => void };\nexport const Button: React.FC<Props> = ({ title, onClick }) => (\n  <button onClick={onClick}>{title}</button>\n);`,
              codeLanguage: 'tsx',
              quiz: quiz('TS React Quiz', [
                trueFalse('Explicitly typing component Props catches invalid props at compile time before runtime errors.', true),
              ]),
            }),
            lesson('TypeScript Capstone: Enterprise Strongly-Typed API Client', 'ts-capstone', `# TS Capstone\n\nBuild a generic type-safe API client wrapper ensuring compile-time request/response payload validation.`, {
              starterCode: `async function apiFetch<TResponse>(url: string): Promise<TResponse> {\n  const res = await fetch(url);\n  return await res.json() as TResponse;\n}`,
              solutionCode: `async function apiFetch<TResponse>(url: string): Promise<TResponse> {\n  const res = await fetch(url);\n  return await res.json() as TResponse;\n}`,
              codeLanguage: 'ts',
              quiz: quiz('TS Capstone Quiz', [
                mcq('What is the key benefit of an enterprise TypeScript codebase?', 'Eliminates entire classes of runtime type errors at compile time', ['Smaller file sizes', 'Faster browser rendering'], 'TypeScript static checking prevents runtime null/undefined crashes.'),
              ]),
            }),
          ]
        }
      ]
    }
  ]
};
