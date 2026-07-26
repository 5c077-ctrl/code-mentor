import type { CategoryDef } from '../types';
import { mcq, trueFalse, quiz, lesson, setupLesson } from '../helpers';

export const mobileDevCategory: CategoryDef = {
  name: 'Learn Mobile Apps Development',
  slug: 'mobile-dev',
  description: 'Build cross-platform mobile apps for iOS and Android using Ionic/Capacitor, React Native, NativeScript, and Flutter.',
  icon: '📱',
  color: '#f59e0b',
  sortOrder: 8,
  courses: [
    // ━━━━━━━━━━━━━━━━━━━ CAPACITOR / IONIC ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Ionic & Capacitor',
      slug: 'ionic-capacitor',
      description: 'Build native iOS and Android apps using web technologies (HTML, CSS, JS/React/Vue) and Capacitor plugins.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 18,
      resources: [
        { resourceType: 'youtube', title: 'Ionic 7 & Capacitor Crash Course', url: 'https://www.youtube.com/watch?v=33K9t1Z7b3E', author: 'Simon Grimm (Ionic Academy)', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Build iOS & Android Apps with Capacitor', url: 'https://www.youtube.com/watch?v=r2wK2l2Z3bE', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Ionic React Mobile App Tutorial', url: 'https://www.youtube.com/watch?v=0h2nLg3j1yM', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Capacitor Native Camera & Geolocation API', url: 'https://www.youtube.com/watch?v=pfaSUYaSgRo', author: 'The Net Ninja', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Ionic in 100 Seconds', url: 'https://www.youtube.com/watch?v=r3Z94j0w2yU', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'article', title: 'Capacitor Official Documentation', url: 'https://capacitorjs.com/docs', author: 'Ionic Team' },
        { resourceType: 'article', title: 'Ionic Framework Documentation', url: 'https://ionicframework.com/docs', author: 'Ionic Framework' },
        { resourceType: 'ebook', title: 'Ionic Academy Tutorial Guides', url: 'https://ionicacademy.com/', author: 'Simon Grimm' },
        { resourceType: 'cheatsheet', title: 'Capacitor CLI & Plugins Cheat Sheet', url: 'https://quickref.me/ionic', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks Ionic Framework Guide', url: 'https://www.geeksforgeeks.org/ionic-framework-introduction/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: Capacitor Core',
          lessons: [
            setupLesson('Ionic & Capacitor', 'ionic-capacitor', 'javascript',
              'Install Capacitor via `npm install @capacitor/core @capacitor/cli`.',
              'console.log("Capacitor Native Runtime Initialized");',
              'console.log("Capacitor Native Runtime Initialized");'
            ),
            lesson('Capacitor Plugins & Native Device Hardware', 'capacitor-native-plugins', '# Capacitor Plugins\n\nAccess camera, filesystem, push notifications, and bluetooth hardware directly from web JavaScript using `@capacitor/camera`.', { quiz: quiz('Capacitor Quiz', [mcq('Which tool bridges web code to native iOS/Android targets?', 'Capacitor', ['Webpack', 'Babel'])]) })
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ REACT NATIVE ━━━━━━━━━━━━━━━━━━━
    {
      title: 'React Native',
      slug: 'react-native',
      description: 'Build native iOS and Android applications using React components, Expo, Flexbox layouts, and React Navigation.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 25,
      resources: [
        { resourceType: 'youtube', title: 'React Native Full Course for Beginners', url: 'https://www.youtube.com/watch?v=0-S5a0eXPoc', author: 'Programming with Mosh', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'React Native & Expo Tutorial', url: 'https://www.youtube.com/watch?v=gvkqT_UoZ54', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'React Native in 100 Seconds', url: 'https://www.youtube.com/watch?v=gvkqT_UoZ54', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'React Navigation 6 Crash Course', url: 'https://www.youtube.com/watch?v=mJ3bGvy0WAY', author: 'The Net Ninja', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Full Stack React Native & Node.js App', url: 'https://www.youtube.com/watch?v=kNHuLOXR5T0', author: 'JavaScript Mastery', platform: 'YouTube' },
        { resourceType: 'article', title: 'React Native Official Documentation', url: 'https://reactnative.dev/docs/getting-started', author: 'Meta React Native Team' },
        { resourceType: 'article', title: 'Expo Official Documentation & CLI Guide', url: 'https://docs.expo.dev/', author: 'Expo Team' },
        { resourceType: 'ebook', title: 'React Native in Action eBook Notes', url: 'https://www.manning.com/books/react-native-in-action', author: 'Nader Dabit' },
        { resourceType: 'cheatsheet', title: 'React Native Component & Style Cheat Sheet', url: 'https://quickref.me/react-native', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks React Native Tutorials', url: 'https://www.geeksforgeeks.org/react-native-tutorial/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: React Native Core',
          lessons: [
            setupLesson('React Native', 'react-native', 'javascript',
              'Initialize Expo app with `npx create-expo-app my-app`.',
              'import { Text, View } from "react-native";\nconsole.log("React Native Ready!");',
              'import { Text, View } from "react-native";\nconsole.log("React Native Ready!");'
            ),
            lesson('Core Components & Flexbox Layout', 'react-native-components', '# Native Components & Flexbox\n\nUse `<View>`, `<Text>`, `<Image>`, and `<ScrollView>` styled with Flexbox properties.', { quiz: quiz('RN Quiz', [mcq('What component replaces standard HTML <div> in React Native?', '<View>', ['<Container>', '<Section>'])]) })
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ NATIVESCRIPT ━━━━━━━━━━━━━━━━━━━
    {
      title: 'NativeScript',
      slug: 'nativescript',
      description: 'Build truly native cross-platform mobile applications with direct JavaScript access to iOS and Android APIs.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'youtube', title: 'NativeScript Course for Beginners', url: 'https://www.youtube.com/watch?v=0h2nLg3j1yM', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'NativeScript with Angular Crash Course', url: 'https://www.youtube.com/watch?v=pfaSUYaSgRo', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'NativeScript Vue Mobile App Tutorial', url: 'https://www.youtube.com/watch?v=vVj_T220s7s', author: 'The Net Ninja', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Direct iOS & Android Native API Access', url: 'https://www.youtube.com/watch?v=33K9t1Z7b3E', author: 'NativeScript Core', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'NativeScript in 100 Seconds', url: 'https://www.youtube.com/watch?v=r3Z94j0w2yU', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'article', title: 'NativeScript Official Documentation', url: 'https://docs.nativescript.org/', author: 'NativeScript Technical Steering Committee' },
        { resourceType: 'article', title: 'NativeScript API Reference', url: 'https://docs.nativescript.org/api-reference', author: 'NativeScript' },
        { resourceType: 'ebook', title: 'NativeScript in Action eBook Notes', url: 'https://www.manning.com/books/nativescript-in-action', author: 'Nick Branstein & Mike Branstein' },
        { resourceType: 'cheatsheet', title: 'NativeScript Layouts & Views Cheat Sheet', url: 'https://quickref.me/nativescript', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks NativeScript Guide', url: 'https://www.geeksforgeeks.org/nativescript-introduction/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: NativeScript Architecture',
          lessons: [
            setupLesson('NativeScript', 'nativescript', 'javascript',
              'Install NativeScript CLI (`npm install -g nativescript`).',
              'console.log("NativeScript Bridge Active");',
              'console.log("NativeScript Bridge Active");'
            ),
            lesson('Native APIs & Layout Containers', 'nativescript-layouts', '# Native UI Layouts\n\nConstruct native screen layouts using `<StackLayout>`, `<GridLayout>`, and `<FlexboxLayout>`.', { quiz: quiz('NativeScript Quiz', [trueFalse('NativeScript converts web views into native Android and iOS controls.', true)]) })
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ FLUTTER ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Flutter',
      slug: 'flutter',
      description: 'Master Google\'s Flutter framework & Dart language to compile fast multi-platform apps for mobile, web, and desktop.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 25,
      resources: [
        { resourceType: 'youtube', title: 'Flutter Course for Beginners', url: 'https://www.youtube.com/watch?v=VPvVD8t02U8', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Flutter & Dart Full Tutorial', url: 'https://www.youtube.com/watch?v=1ukSR1GRtMU', author: 'Programming with Mosh', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Flutter in 100 Seconds', url: 'https://www.youtube.com/watch?v=lHhRhPV--G0', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Flutter State Management (Bloc & Provider)', url: 'https://www.youtube.com/watch?v=d_m5csmrf7I', author: 'Reso Coder', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Building a Production Flutter App', url: 'https://www.youtube.com/watch?v=x0uinJvhNxI', author: 'The Net Ninja', platform: 'YouTube' },
        { resourceType: 'article', title: 'Flutter Official Documentation & Tutorials', url: 'https://docs.flutter.dev/', author: 'Google Flutter Team' },
        { resourceType: 'article', title: 'Dart Language Official Documentation', url: 'https://dart.dev/guides', author: 'Google Dart Team' },
        { resourceType: 'ebook', title: 'Flutter in Action eBook Notes', url: 'https://www.manning.com/books/flutter-in-action', author: 'Eric Windmill' },
        { resourceType: 'cheatsheet', title: 'Flutter Widgets & Layout Cheat Sheet', url: 'https://quickref.me/flutter', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks Flutter Tutorials', url: 'https://www.geeksforgeeks.org/flutter-tutorial/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: Flutter & Dart Foundations',
          lessons: [
            setupLesson('Flutter', 'flutter', 'dart',
              'Install Flutter SDK (`flutter doctor`).',
              'import "package:flutter/material.dart";\nvoid main() => print("Flutter SDK Ready!");',
              'import "package:flutter/material.dart";\nvoid main() => print("Flutter SDK Ready!");'
            ),
            lesson('Stateless vs Stateful Widgets', 'flutter-widgets-state', '# Flutter Widgets\n\nIn Flutter, everything is a widget. Differentiate between `StatelessWidget` and dynamic `StatefulWidget`.', { quiz: quiz('Flutter Quiz', [mcq('What programming language powers Flutter framework?', 'Dart', ['Kotlin', 'Swift'])]) })
          ]
        }
      ]
    }
  ]
};
