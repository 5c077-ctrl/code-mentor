import type { CategoryDef } from '../types';
import { mcq, trueFalse, quiz, lesson, setupLesson } from '../helpers';

// ━━━━━━━━━━━━━━━━━━━ FRONTEND FRAMEWORKS CATEGORY ━━━━━━━━━━━━━━━━━━━
export const frontEndCategory: CategoryDef = {
  name: 'Main Front-End Frameworks',
  slug: 'frontend-frameworks',
  description: 'Build modern user interfaces with Angular, React, Vue.js, Svelte, and Next.js.',
  icon: '🎨',
  color: '#ec4899',
  sortOrder: 4,
  courses: [
    {
      title: 'Angular',
      slug: 'angular',
      description: 'Master enterprise Web App development with Angular, TypeScript, RxJS, Dependency Injection, and NgModules.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 25,
      resources: [
        { resourceType: 'youtube', title: 'Angular Course for Beginners', url: 'https://www.youtube.com/watch?v=3qBXWUpoPHo', author: 'Programming with Mosh', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Angular Full Tutorial', url: 'https://www.youtube.com/watch?v=2OHbjep_WjQ', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Angular in 100 Seconds', url: 'https://www.youtube.com/watch?v=Ata9cSC2WpM', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'RxJS & Observables in Angular', url: 'https://www.youtube.com/watch?v=f97ICOaekNU', author: 'Academind', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Angular Signals & Standalone Components', url: 'https://www.youtube.com/watch?v=4yWpT3O1jB8', author: 'The Net Ninja', platform: 'YouTube' },
        { resourceType: 'article', title: 'Angular Official Documentation & Guides', url: 'https://angular.io/docs', author: 'Google Angular Team' },
        { resourceType: 'article', title: 'Angular Architecture & DI Guide', url: 'https://angular.io/guide/architecture', author: 'Angular Docs' },
        { resourceType: 'ebook', title: 'Angular University Interactive Courses', url: 'https://angular-university.io/', author: 'Angular University' },
        { resourceType: 'cheatsheet', title: 'Angular CLI & Template Syntax Cheat Sheet', url: 'https://angular.io/guide/cheatsheet', author: 'Angular.io' },
        { resourceType: 'article', title: 'GeeksforGeeks Angular Tutorials', url: 'https://www.geeksforgeeks.org/angular-8-tutorial/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: Angular Core',
          lessons: [
            setupLesson('Angular', 'angular', 'typescript',
              'Install Angular CLI via `npm install -g @angular/cli`.',
              'import { Component } from "@angular/core";\nconsole.log("Angular Initialized");',
              'import { Component } from "@angular/core";\nconsole.log("Angular Initialized");'
            ),
            lesson('Components, Templates, & Data Binding', 'angular-components', '# Angular Components\n\nComponents combine TypeScript logic, HTML templates (`[]` and `()`), and CSS styles.', { quiz: quiz('Angular Quiz', [mcq('What decorator marks an Angular component class?', '@Component', ['@Injectable', '@NgModule'])]) }),
            lesson('Services, RxJS, & Observables', 'angular-services-rxjs', '# Services & RxJS\n\nInject services into components using Dependency Injection and process data streams with RxJS Observables.', { quiz: quiz('RxJS Quiz', [trueFalse('RxJS Observables support asynchronous data streams.', true)]) })
          ]
        }
      ]
    },
    {
      title: 'React',
      slug: 'react',
      description: 'Master component architecture, JSX syntax, Hooks (useState, useEffect, useMemo), Context API, and state management.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 25,
      resources: [
        { resourceType: 'youtube', title: 'React Course for Beginners', url: 'https://www.youtube.com/watch?v=bMknfKXIFA8', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'React Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=SqcY0GlETPk', author: 'Programming with Mosh', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'React Hooks Course (useState, useEffect, useReducer)', url: 'https://www.youtube.com/watch?v=TNhaISOUy6Q', author: 'Web Dev Simplified', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'React in 100 Seconds', url: 'https://www.youtube.com/watch?v=cuEtnrL9-H0', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Full Stack React & Node.js Project', url: 'https://www.youtube.com/watch?v=7CqJlxBYj-M', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'article', title: 'React Official Documentation (react.dev)', url: 'https://react.dev/', author: 'Meta React Team' },
        { resourceType: 'article', title: 'Thinking in React Guide', url: 'https://react.dev/learn/thinking-in-react', author: 'React Core Docs' },
        { resourceType: 'ebook', title: 'Road to React eBook Notes', url: 'https://www.roadtoreact.com/', author: 'Robin Wieruch' },
        { resourceType: 'cheatsheet', title: 'React Hooks & JSX Cheat Sheet', url: 'https://quickref.me/react', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks ReactJS Tutorials', url: 'https://www.geeksforgeeks.org/reactjs-tutorials/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: React Foundations',
          lessons: [
            setupLesson('React', 'react', 'javascript',
              'Create a React project with `npx create-react-app my-app` or Vite.',
              'import React from "react";\nconsole.log("React Ready!");',
              'import React from "react";\nconsole.log("React Ready!");'
            ),
            lesson('JSX & Functional Components', 'react-jsx-components', '# React JSX & Components\n\nWrite UI markup inside JavaScript functions using JSX syntax.', { quiz: quiz('React Quiz', [mcq('What does JSX stand for?', 'JavaScript XML', ['JavaScript Extension', 'JSON Syntax'])]) }),
            lesson('React Hooks: useState & useEffect', 'react-hooks', '# React Hooks\n\nManage local component state (`useState`) and handle side effects (`useEffect`).', { quiz: quiz('Hooks Quiz', [mcq('Which hook handles side effects in React?', 'useEffect', ['useState', 'useRef'])]) })
          ]
        }
      ]
    },
    {
      title: 'Vue.js',
      slug: 'vue-js',
      description: 'Learn progressive frontend development with Vue 3, Composition API, Pinia, and Vue Router.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'youtube', title: 'Vue.js 3 Course for Beginners', url: 'https://www.youtube.com/watch?v=FXpIoQ_rT_c', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Vue 3 Composition API Crash Course', url: 'https://www.youtube.com/watch?v=bwItfVly4vQ', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Vue 3 in 100 Seconds', url: 'https://www.youtube.com/watch?v=qZXt1Aom3Cs', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Pinia State Management in Vue 3', url: 'https://www.youtube.com/watch?v=u0B9StvXb0Y', author: 'The Net Ninja', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Vue Router 4 Tutorial', url: 'https://www.youtube.com/watch?v=juocv4TYL5s', author: 'Academind', platform: 'YouTube' },
        { resourceType: 'article', title: 'Vue.js 3 Official Guide & Documentation', url: 'https://vuejs.org/guide/introduction.html', author: 'Evan You & Vue Team' },
        { resourceType: 'article', title: 'Vue Composition API Reference', url: 'https://vuejs.org/api/composition-api-setup.html', author: 'Vue.js' },
        { resourceType: 'ebook', title: 'Vue School Interactive Courses', url: 'https://vueschool.io/', author: 'Vue School' },
        { resourceType: 'cheatsheet', title: 'Vue 3 Directives & Syntax Cheat Sheet', url: 'https://quickref.me/vue', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks Vue.js Guide', url: 'https://www.geeksforgeeks.org/vue-js-tutorials/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: Vue 3 Core',
          lessons: [
            setupLesson('Vue.js', 'vue-js', 'javascript',
              'Scaffold a Vue 3 project with `npm create vue@latest`.',
              'import { createApp } from "vue";\nconsole.log("Vue 3 Ready!");',
              'import { createApp } from "vue";\nconsole.log("Vue 3 Ready!");'
            ),
            lesson('Vue Composition API & Directives', 'vue-composition-api', '# Vue Composition API\n\nUse `ref()`, `reactive()`, and template directives (`v-if`, `v-for`, `v-model`).', { quiz: quiz('Vue Quiz', [mcq('Which directive binds inputs bi-directionally in Vue?', 'v-model', ['v-bind', 'v-on'])]) })
          ]
        }
      ]
    },
    {
      title: 'Svelte',
      slug: 'svelte',
      description: 'Build fast web applications compiled to tiny vanilla JS with Svelte and SvelteKit.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 18,
      resources: [
        { resourceType: 'youtube', title: 'Svelte Course for Beginners', url: 'https://www.youtube.com/watch?v=38IFAms6_K0', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Svelte Crash Course', url: 'https://www.youtube.com/watch?v=UGBJHYpHPvA', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Svelte in 100 Seconds', url: 'https://www.youtube.com/watch?v=rv3Yq-B8yDA', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'SvelteKit Full Stack Tutorial', url: 'https://www.youtube.com/watch?v=H1eEwf4gZ5Y', author: 'The Net Ninja', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Svelte 5 Runes & Signals Explained', url: 'https://www.youtube.com/watch?v=vVj_T220s7s', author: 'Rich Harris (Svelte)', platform: 'YouTube' },
        { resourceType: 'article', title: 'Svelte Official Tutorial & Documentation', url: 'https://svelte.dev/tutorial/basics', author: 'Rich Harris & Svelte Core' },
        { resourceType: 'article', title: 'SvelteKit Full Stack Docs', url: 'https://kit.svelte.dev/docs', author: 'SvelteKit Team' },
        { resourceType: 'ebook', title: 'Svelte Interactive REPL & Examples', url: 'https://svelte.dev/repl', author: 'Svelte.dev' },
        { resourceType: 'cheatsheet', title: 'Svelte Syntax & Reactive Statements Reference', url: 'https://quickref.me/svelte', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks Svelte Tutorials', url: 'https://www.geeksforgeeks.org/svelte-tutorial/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: Svelte Essentials',
          lessons: [
            setupLesson('Svelte', 'svelte', 'javascript',
              'Initialize a Svelte app via `npm create svelte@latest`.',
              'console.log("Svelte Compiler Initialized");',
              'console.log("Svelte Compiler Initialized");'
            ),
            lesson('Reactive Declarations & Svelte Stores', 'svelte-reactivity', '# Svelte Reactivity\n\nUse `$: ` for reactive statements and write writable stores for global application state.', { quiz: quiz('Svelte Quiz', [trueFalse('Svelte compiles components at build time rather than using a virtual DOM.', true)]) })
          ]
        }
      ]
    },
    {
      title: 'Next.js',
      slug: 'next-js',
      description: 'Master full-stack React framework with Server Components, App Router, Server Actions, and SSR.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 22,
      resources: [
        { resourceType: 'youtube', title: 'Next.js 14 App Router Full Course', url: 'https://www.youtube.com/watch?v=wm5gMKCOB5g', author: 'JavaScript Mastery', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Next.js Full Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=ZVnjOPwW4ZA', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Next.js in 100 Seconds', url: 'https://www.youtube.com/watch?v=Sklc_fQBmcs', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'React Server Components & Server Actions', url: 'https://www.youtube.com/watch?v=d_UuOVkwk-k', author: 'Jack Herrington', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Next.js Authentication & Pragmatic App Router', url: 'https://www.youtube.com/watch?v=1MTyCvS05V4', author: 'Academind', platform: 'YouTube' },
        { resourceType: 'article', title: 'Next.js Official Documentation (nextjs.org)', url: 'https://nextjs.org/docs', author: 'Vercel' },
        { resourceType: 'article', title: 'Next.js App Router Learn Course', url: 'https://nextjs.org/learn', author: 'Vercel Learn' },
        { resourceType: 'ebook', title: 'Mastering Next.js Free eBook Notes', url: 'https://masteringnextjs.com/', author: 'Lee Robinson (Vercel)' },
        { resourceType: 'cheatsheet', title: 'Next.js App Router Cheatsheet', url: 'https://quickref.me/nextjs', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks Next.js Tutorials', url: 'https://www.geeksforgeeks.org/next-js/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: Next.js App Router',
          lessons: [
            setupLesson('Next.js', 'next-js', 'typescript',
              'Create a Next.js app with `npx create-next-app@latest`.',
              'console.log("Next.js App Router Ready");',
              'console.log("Next.js App Router Ready");'
            ),
            lesson('React Server Components & API Routes', 'next-server-components', '# Server Components & Server Actions\n\nRender components on the server by default and write inline `use server` functions.', { quiz: quiz('Next Quiz', [mcq('In Next.js App Router, components are by default:', 'Server Components', ['Client Components', 'Static HTML only'])]) })
          ]
        }
      ]
    }
  ]
};

// ━━━━━━━━━━━━━━━━━━━ BACKEND FRAMEWORKS CATEGORY ━━━━━━━━━━━━━━━━━━━
export const backEndCategory: CategoryDef = {
  name: 'Main Back-End Frameworks',
  slug: 'backend-frameworks',
  description: 'Master robust server architectures with Laravel, Django, Flask, Express.js, Spring Boot, ASP.NET Core, and Rails.',
  icon: '⚡',
  color: '#10b981',
  sortOrder: 5,
  courses: [
    {
      title: 'Laravel',
      slug: 'laravel',
      description: 'Master PHP Laravel framework, Eloquent ORM, Blade templating, Artisan CLI, and REST APIs.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 25,
      resources: [
        { resourceType: 'youtube', title: 'Laravel 10 Full Course for Beginners', url: 'https://www.youtube.com/watch?v=MYyJ4PuL4pY', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Laravel Crash Course', url: 'https://www.youtube.com/watch?v=376vZ1a704w', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Laracasts — Laravel 10 from Scratch', url: 'https://laracasts.com/series/laravel-30-days-to-learn-it', author: 'Jeffrey Way (Laracasts)', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Laravel Eloquent ORM Masterclass', url: 'https://www.youtube.com/watch?v=7u0lYxXh3mI', author: 'Coder\'s Tape', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Laravel REST API Development', url: 'https://www.youtube.com/watch?v=YGqCZjOF7L0', author: 'Daily Just Code', platform: 'YouTube' },
        { resourceType: 'article', title: 'Laravel Official Documentation', url: 'https://laravel.com/docs', author: 'Taylor Otwell & Laravel' },
        { resourceType: 'article', title: 'Laracasts Official Video Library', url: 'https://laracasts.com/', author: 'Laracasts' },
        { resourceType: 'ebook', title: 'Laravel Up & Running eBook Notes', url: 'https://laravelupandrunning.com/', author: 'Matt Stauffer' },
        { resourceType: 'cheatsheet', title: 'Laravel Artisan & Eloquent Cheat Sheet', url: 'https://quickref.me/laravel', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks Laravel Tutorials', url: 'https://www.geeksforgeeks.org/laravel/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: Laravel Basics',
          lessons: [
            setupLesson('Laravel', 'laravel', 'php',
              'Install Composer and run `laravel new my-app`.',
              '<?php echo "Laravel CLI Ready"; ?>',
              '<?php echo "Laravel CLI Ready"; ?>'
            ),
            lesson('Laravel Routing, Controllers, & Eloquent ORM', 'laravel-routing-eloquent', '# Laravel Routing & Eloquent\n\nDefine routes in `routes/web.php` and interact with databases using Eloquent models.', { quiz: quiz('Laravel Quiz', [mcq('What is Laravel\'s database ORM named?', 'Eloquent', ['Doctrine', 'Prisma'])]) })
          ]
        }
      ]
    },
    {
      title: 'Django',
      slug: 'django',
      description: 'Build secure, scalable Python web backends with Django ORM, Admin Interface, Views, and REST Framework.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 25,
      resources: [
        { resourceType: 'youtube', title: 'Django Course for Beginners', url: 'https://www.youtube.com/watch?v=F5mRW0jo-U4', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Python Django Web Development Tutorial', url: 'https://www.youtube.com/watch?v=rHux0gMZ3Eg', author: 'Programming with Mosh', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Django REST Framework Crash Course', url: 'https://www.youtube.com/watch?v=c708Nf0cHRS', author: 'Dennis Ivy', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Django in 100 Seconds', url: 'https://www.youtube.com/watch?v=t-0P9hK10eI', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Django Full Stack E-Commerce App', url: 'https://www.youtube.com/watch?v=o0XbHvKxT5k', author: 'Corey Schafer', platform: 'YouTube' },
        { resourceType: 'article', title: 'Django Official Documentation & Tutorial', url: 'https://docs.djangoproject.com/en/5.0/', author: 'Django Software Foundation' },
        { resourceType: 'article', title: 'Django REST Framework Official Docs', url: 'https://www.django-rest-framework.org/', author: 'Tom Christie' },
        { resourceType: 'ebook', title: 'Django for Beginners eBook Notes', url: 'https://djangoforbeginners.com/', author: 'William S. Vincent' },
        { resourceType: 'cheatsheet', title: 'Django ORM & Template Cheat Sheet', url: 'https://quickref.me/django', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks Django Tutorials', url: 'https://www.geeksforgeeks.org/django-tutorial/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: Django Architecture',
          lessons: [
            setupLesson('Django', 'django', 'python',
              'Install Django with `pip install django` and run `django-admin startproject app`.',
              'import django\nprint(django.get_version())',
              'import django\nprint(django.get_version())'
            ),
            lesson('Django Models, Admin, & MVT Architecture', 'django-models-mvt', '# Django MVT & Models\n\nModel database schemas in `models.py` and manage records instantly via built-in Django Admin.', { quiz: quiz('Django Quiz', [mcq('What pattern does Django follow?', 'MVT (Model-View-Template)', ['MVC', 'MVVM'])]) })
          ]
        }
      ]
    },
    {
      title: 'Flask',
      slug: 'flask',
      description: 'Build lightweight Python microservices, REST endpoints, and web applications with Flask.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 15,
      resources: [
        { resourceType: 'youtube', title: 'Flask Course for Beginners', url: 'https://www.youtube.com/watch?v=Z1RJmh_OqeA', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Python Flask Tutorial Series', url: 'https://www.youtube.com/watch?v=MwZwr5Tvyxo', author: 'Corey Schafer', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Flask REST API Crash Course', url: 'https://www.youtube.com/watch?v=GMpxy0885TQ', author: 'Tech With Tim', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Flask in 100 Seconds', url: 'https://www.youtube.com/watch?v=qrn4F-G60-w', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Flask SQLAlchemy & Database Migrations', url: 'https://www.youtube.com/watch?v=44PvX0Yv3eE', author: 'Pretty Printed', platform: 'YouTube' },
        { resourceType: 'article', title: 'Flask Official Documentation', url: 'https://flask.palletsprojects.com/en/3.0.x/', author: 'Pallets Projects' },
        { resourceType: 'article', title: 'The Flask Mega-Tutorial', url: 'https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world', author: 'Miguel Grinberg' },
        { resourceType: 'ebook', title: 'Flask Web Development Book Notes', url: 'https://www.oreilly.com/library/view/flask-web-development/9781491991725/', author: 'Miguel Grinberg' },
        { resourceType: 'cheatsheet', title: 'Flask Decorators & Routes Cheat Sheet', url: 'https://quickref.me/flask', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks Python Flask Guide', url: 'https://www.geeksforgeeks.org/flask-tutorial/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: Flask Microservices',
          lessons: [
            setupLesson('Flask', 'flask', 'python',
              'Install Flask with `pip install flask`.',
              'from flask import Flask\napp = Flask(__name__)\nprint("Flask App Configured")',
              'from flask import Flask\napp = Flask(__name__)\nprint("Flask App Configured")'
            ),
            lesson('Flask Decorator Routing & Request Handling', 'flask-routing', '# Flask Decorators & Routes\n\nDefine URL routes using `@app.route("/path")` and return JSON responses.', { quiz: quiz('Flask Quiz', [mcq('What Python decorator registers URL routes in Flask?', '@app.route()', ['@route()', '@url()'])]) })
          ]
        }
      ]
    },
    {
      title: 'Express.js',
      slug: 'express-js',
      description: 'Build fast Node.js HTTP servers, middleware pipelines, and microservices using Express.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'youtube', title: 'Express.js Course for Beginners', url: 'https://www.youtube.com/watch?v=Oe421EPjeBE', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Express.js Crash Course', url: 'https://www.youtube.com/watch?v=L72fhGm1tfE', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Node.js & Express REST API Project', url: 'https://www.youtube.com/watch?v=fBNz5xF-Kx4', author: 'Academind', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Express.js Middleware & JWT Auth', url: 'https://www.youtube.com/watch?v=mbsmsi7l3r4', author: 'Web Dev Simplified', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Node.js in 100 Seconds', url: 'https://www.youtube.com/watch?v=arQJ16o9-V0', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'article', title: 'Express.js Official Guide & API Reference', url: 'https://expressjs.com/en/4x/api.html', author: 'OpenJS Foundation' },
        { resourceType: 'article', title: 'Node.js Official Documentation', url: 'https://nodejs.org/en/docs/', author: 'Node.js Project' },
        { resourceType: 'ebook', title: 'Node.js Design Patterns Book Notes', url: 'https://www.nodejsdesignpatterns.com/', author: 'Mario Casciaro' },
        { resourceType: 'cheatsheet', title: 'Express Routing & Middleware Cheat Sheet', url: 'https://quickref.me/express', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks ExpressJS Tutorials', url: 'https://www.geeksforgeeks.org/express-js/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: Express Core',
          lessons: [
            setupLesson('Express.js', 'express-js', 'javascript',
              'Install Express via `npm install express`.',
              'const express = require("express");\nconst app = express();\nconsole.log("Express Ready!");',
              'const express = require("express");\nconst app = express();\nconsole.log("Express Ready!");'
            ),
            lesson('Middleware Pipeline & REST Routes', 'express-middleware-routes', '# Express Middleware & Routing\n\nProcess HTTP request/response objects through chained middleware functions using `app.use()`.', { quiz: quiz('Express Quiz', [mcq('What parameter passes control to the next middleware in Express?', 'next()', ['continue()', 'forward()'])]) })
          ]
        }
      ]
    },
    {
      title: 'Spring Boot',
      slug: 'spring-boot',
      description: 'Master Java Spring Boot microservices, Dependency Injection, Spring Data JPA, and Security.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 25,
      resources: [
        { resourceType: 'youtube', title: 'Spring Boot Course for Beginners', url: 'https://www.youtube.com/watch?v=9SGDpanrc8U', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Spring Boot Tutorial', url: 'https://www.youtube.com/watch?v=vtPkZShrvXQ', author: 'Amigoscode', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Spring Boot REST API Development', url: 'https://www.youtube.com/watch?v=Ke8G3x2cQ9w', author: 'Java Guides', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Spring Data JPA & Hibernate Explained', url: 'https://www.youtube.com/watch?v=8SGI_XS5OPw', author: 'Telusko', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Spring Security 6 & JWT Tutorial', url: 'https://www.youtube.com/watch?v=KxqlJbl-g3U', author: 'Daily Code Buffer', platform: 'YouTube' },
        { resourceType: 'article', title: 'Spring Boot Official Documentation', url: 'https://spring.io/projects/spring-boot', author: 'VMware Spring Team' },
        { resourceType: 'article', title: 'Spring Initializr Generator Tool', url: 'https://start.spring.io/', author: 'Spring.io' },
        { resourceType: 'ebook', title: 'Baeldung Spring Boot Tutorials', url: 'https://www.baeldung.com/spring-boot', author: 'Baeldung' },
        { resourceType: 'cheatsheet', title: 'Spring Boot Annotations Cheat Sheet', url: 'https://quickref.me/spring-boot', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks Spring Boot Guide', url: 'https://www.geeksforgeeks.org/spring-boot/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: Spring Boot Fundamentals',
          lessons: [
            setupLesson('Spring Boot', 'spring-boot', 'java',
              'Generate a project with Spring Initializr (`start.spring.io`).',
              'System.out.println("Spring Boot Application Active");',
              'System.out.println("Spring Boot Application Active");'
            ),
            lesson('Spring Beans & Dependency Injection', 'spring-di-annotations', '# Spring Dependency Injection\n\nUse `@RestController`, `@Service`, and `@Autowired` for component scanning and DI.', { quiz: quiz('Spring Quiz', [mcq('What annotation marks a REST endpoint controller in Spring Boot?', '@RestController', ['@ControllerREST', '@Endpoint'])]) })
          ]
        }
      ]
    },
    {
      title: 'ASP.NET Core',
      slug: 'aspnet-core',
      description: 'Build modern cross-platform C# backends, Web APIs, Entity Framework Core, and Azure microservices.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 22,
      resources: [
        { resourceType: 'youtube', title: 'ASP.NET Core Course for Beginners', url: 'https://www.youtube.com/watch?v=BfEjDD8mWYg', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'C# ASP.NET Core Web API Tutorial', url: 'https://www.youtube.com/watch?v=fmvcAzHpsfU', author: 'Les Jackson', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Entity Framework Core Crash Course', url: 'https://www.youtube.com/watch?v=gT_ZfO89gO8', author: 'IAmTimCorey', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'ASP.NET Core Architecture Best Practices', url: 'https://www.youtube.com/watch?v=yF9SwL0p0Yw', author: 'Milan Jovanović', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'NET 8 Web API & Minimal APIs', url: 'https://www.youtube.com/watch?v=6P3h1a8J0wE', author: 'Nick Chapsas', platform: 'YouTube' },
        { resourceType: 'article', title: 'Microsoft ASP.NET Core Documentation', url: 'https://learn.microsoft.com/en-us/aspnet/core/', author: 'Microsoft Docs' },
        { resourceType: 'article', title: 'Entity Framework Core Official Guide', url: 'https://learn.microsoft.com/en-us/ef/core/', author: 'Microsoft' },
        { resourceType: 'ebook', title: 'ASP.NET Core in Action eBook Notes', url: 'https://www.manning.com/books/asp-net-core-in-action-third-edition', author: 'Andrew Lock' },
        { resourceType: 'cheatsheet', title: 'C# & ASP.NET Core Annotations Cheat Sheet', url: 'https://quickref.me/cs', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks ASP.NET Tutorials', url: 'https://www.geeksforgeeks.org/asp-net-core-introduction/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: ASP.NET Core API',
          lessons: [
            setupLesson('ASP.NET Core', 'aspnet-core', 'csharp',
              'Install .NET 8 SDK (`dotnet --version`).',
              'System.Console.WriteLine("ASP.NET Core Server Ready");',
              'System.Console.WriteLine("ASP.NET Core Server Ready");'
            ),
            lesson('Entity Framework Core & Web API Controllers', 'aspnet-efcore-controllers', '# EF Core & C# Web API\n\nCreate controllers with `[ApiController]` and query databases via LINQ and Entity Framework Core.', { quiz: quiz('ASPNET Quiz', [trueFalse('ASP.NET Core runs natively cross-platform on Windows, macOS, and Linux.', true)]) })
          ]
        }
      ]
    },
    {
      title: 'Ruby on Rails',
      slug: 'ruby-on-rails',
      description: 'Learn full-stack Ruby on Rails, Active Record ORM, conventions over configuration, and Action Cable.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 22,
      resources: [
        { resourceType: 'youtube', title: 'Ruby on Rails Course for Beginners', url: 'https://www.youtube.com/watch?v=fmyvWz5TUWg', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Ruby on Rails Crash Course', url: 'https://www.youtube.com/watch?v=pPy0GQJLZUM', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'GoRails — Ruby on Rails 7 Tutorials', url: 'https://gorails.com/', author: 'Chris Oliver (GoRails)', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Rails in 100 Seconds', url: 'https://www.youtube.com/watch?v=gmyq7Z227v8', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Building a Full Stack App in Rails 7', url: 'https://www.youtube.com/watch?v=B3Fbujm1y68', author: 'Deanin', platform: 'YouTube' },
        { resourceType: 'article', title: 'Ruby on Rails Official Guides & API', url: 'https://guides.rubyonrails.org/', author: 'Rails Core Team' },
        { resourceType: 'article', title: 'Rails Tutorial Book Notes', url: 'https://www.railstutorial.org/', author: 'Michael Hartl' },
        { resourceType: 'ebook', title: 'Agile Web Development with Rails 7 Notes', url: 'https://pragprog.com/titles/rails7/', author: 'Sam Ruby & David Heinemeier Hansson' },
        { resourceType: 'cheatsheet', title: 'Ruby on Rails Commands & Routing Cheat Sheet', url: 'https://quickref.me/rails', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks Ruby on Rails Guide', url: 'https://www.geeksforgeeks.org/ruby-on-rails-introduction/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: Rails Conventions',
          lessons: [
            setupLesson('Ruby on Rails', 'ruby-on-rails', 'ruby',
              'Install Rails gem (`gem install rails`).',
              'puts "Rails Engine Loaded"',
              'puts "Rails Engine Loaded"'
            ),
            lesson('Active Record & MVC Pattern', 'rails-active-record-mvc', '# Active Record & MVC\n\nGenerate models, migrations, and controllers rapidly with `rails generate scaffold`.', { quiz: quiz('Rails Quiz', [mcq('What guiding philosophy powers Ruby on Rails development?', 'Convention over Configuration', ['Explicit over Implicit', 'Configuration first'])]) })
          ]
        }
      ]
    }
  ]
};
