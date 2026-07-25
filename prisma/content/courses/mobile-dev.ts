import type { CategoryDef } from '../types';
import { mcq, trueFalse, quiz, lesson, setupLesson } from '../helpers';

export const mobileDevCategory: CategoryDef = {
  name: 'Mobile Dev',
  slug: 'mobile-dev',
  description: 'Build cross-platform and native mobile applications with React Native, Flutter, Dart, and Swift.',
  icon: '📱',
  color: '#06b6d4',
  sortOrder: 7,
  courses: [
    // ━━━━━━━━━━━━━━━━━━━ REACT NATIVE ESSENTIALS ━━━━━━━━━━━━━━━━━━━
    {
      title: 'React Native Essentials',
      slug: 'react-native-essentials',
      description: 'Build iOS & Android mobile apps with React Native, Expo, React Navigation, and native component bridges.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 15,
      resources: [
        { resourceType: 'youtube', title: 'React Native Course for Beginners (2026)', url: 'https://www.youtube.com/watch?v=gvkqT_Uoabw', author: 'FreeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'React Native & Expo Crash Course', url: 'https://www.youtube.com/watch?v=VozPNrt-LfE', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'React Navigation & State Management Tutorial', url: 'https://www.youtube.com/watch?v=OmQCU-3gOKg', author: 'Programming with Mosh', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'React Native Animations & Reanimated 3', url: 'https://www.youtube.com/watch?v=yz9E10DPUXU', author: 'William Candillon', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Publishing React Native Apps to App Store & Play Store', url: 'https://www.youtube.com/watch?v=48w_A1l3DdQ', author: 'Academind', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'Official React Native Documentation', url: 'https://reactnative.dev/docs/getting-started', author: 'Meta' },
        { resourceType: 'article', title: 'Expo Official Documentation & Guides', url: 'https://docs.expo.dev/', author: 'Expo Team' },
        { resourceType: 'cheatsheet', title: 'React Native Components Cheat Sheet', url: 'https://quickref.me/react-native', author: 'QuickRef' },
        { resourceType: 'article', title: 'React Navigation v6 Official Guide', url: 'https://reactnavigation.org/docs/getting-started/', author: 'React Navigation' },
        { resourceType: 'cheatsheet', title: 'React Native Styling & Flexbox Reference', url: 'https://reactnative.dev/docs/flexbox', author: 'Meta' },
      ],
      modules: [
        {
          title: 'Module 1: Expo Setup & Native Components',
          lessons: [
            setupLesson('React Native Essentials', 'react-native-essentials', 'tsx',
              `1. Install Node.js & Expo CLI: \`npx create-expo-app my-app\`\n2. Download Expo Go app on iOS/Android device\n3. Run: \`npx expo start\`\n4. Scan QR code on your phone`,
              `import { Text, View } from 'react-native';\nexport default function App() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Hello React Native Expo!</Text>\n    </View>\n  );\n}`,
              `import { Text, View } from 'react-native';\nexport default function App() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Hello React Native Expo!</Text>\n    </View>\n  );\n}`
            ),
            lesson('Core Native Components (`View`, `Text`, `Image`)', 'rn-core-components', `# Core Components\n\nReact Native compiles primitives: \`<View>\` (div), \`<Text>\` (span/p), \`<Image>\` (img).`, {
              starterCode: `import { View, Text, Image } from 'react-native';\nexport default function Card() {\n  return (\n    <View>\n      <Text>React Native Mobile</Text>\n      <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={{ width: 50, height: 50 }} />\n    </View>\n  );\n}`,
              solutionCode: `import { View, Text, Image } from 'react-native';\nexport default function Card() {\n  return (\n    <View>\n      <Text>React Native Mobile</Text>\n      <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={{ width: 50, height: 50 }} />\n    </View>\n  );\n}`,
              codeLanguage: 'tsx',
              quiz: quiz('RN Components Quiz', [
                mcq('Which component must wrap all text strings in React Native?', '<Text>', ['<View>', '<span>'], 'All raw text strings in React Native must be wrapped inside `<Text>`.'),
              ]),
            }),
            lesson('Styling & StyleSheet API', 'rn-stylesheet', `# StyleSheet\n\nStyle components using JavaScript objects: \`const styles = StyleSheet.create({ container: { flex: 1 } })\`.`, {
              starterCode: `import { StyleSheet, View, Text } from 'react-native';\nexport default function App() {\n  return <View style={styles.box}><Text style={styles.text}>Styled</Text></View>;\n}\nconst styles = StyleSheet.create({\n  box: { padding: 20, backgroundColor: '#6366f1' },\n  text: { color: '#fff', fontWeight: 'bold' }\n});`,
              solutionCode: `import { StyleSheet, View, Text } from 'react-native';\nexport default function App() {\n  return <View style={styles.box}><Text style={styles.text}>Styled</Text></View>;\n}\nconst styles = StyleSheet.create({\n  box: { padding: 20, backgroundColor: '#6366f1' },\n  text: { color: '#fff', fontWeight: 'bold' }\n});`,
              codeLanguage: 'tsx',
              quiz: quiz('StyleSheet Quiz', [
                trueFalse('React Native uses Flexbox for layout by default with `flexDirection: "column"`.', true),
              ]),
            }),
            lesson('User Touch Interactions (`TouchableOpacity`, `Pressable`)', 'rn-touch-inputs', `# Touch Events\n\nHandle touch events with feedback: \`<TouchableOpacity onPress={handlePress}>\`.`, {
              starterCode: `import { TouchableOpacity, Text } from 'react-native';\nexport default function Btn() {\n  return (\n    <TouchableOpacity onPress={() => alert('Pressed!')}>\n      <Text>Click Me</Text>\n    </TouchableOpacity>\n  );\n}`,
              solutionCode: `import { TouchableOpacity, Text } from 'react-native';\nexport default function Btn() {\n  return (\n    <TouchableOpacity onPress={() => alert('Pressed!')}>\n      <Text>Click Me</Text>\n    </TouchableOpacity>\n  );\n}`,
              codeLanguage: 'tsx',
              quiz: quiz('RN Touch Quiz', [
                mcq('Which component provides opacity visual feedback when pressed by users?', 'TouchableOpacity', ['View', 'ScrollView'], '`TouchableOpacity` dims opacity on touch.'),
              ]),
            }),
            lesson('Lists & Scroll Performance (`FlatList`, `SectionList`)', 'rn-flatlist', `# FlatList\n\nRender long scrollable lists efficiently with memory virtualisation: \`<FlatList data={items} renderItem={...} />\`.`, {
              starterCode: `import { FlatList, Text } from 'react-native';\nconst data = [{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }];\nexport default function List() {\n  return <FlatList data={data} keyExtractor={item => item.id} renderItem={({ item }) => <Text>{item.title}</Text>} />;\n}`,
              solutionCode: `import { FlatList, Text } from 'react-native';\nconst data = [{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }];\nexport default function List() {\n  return <FlatList data={data} keyExtractor={item => item.id} renderItem={({ item }) => <Text>{item.title}</Text>} />;\n}`,
              codeLanguage: 'tsx',
              quiz: quiz('FlatList Quiz', [
                mcq('Why use `FlatList` instead of wrapping items inside a `ScrollView`?', '`FlatList` virtualizes rendering, loading only visible items on screen', ['FlatList is faster to type', 'ScrollView does not scroll'], 'FlatList virtualizes off-screen items for mobile memory performance.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Navigation & Native Device Features',
          lessons: [
            lesson('Stack & Tab Navigation (`React Navigation`)', 'rn-react-navigation', `# Navigation\n\nNavigate screens with Stack and BottomTab Navigators: \`const Stack = createNativeStackNavigator();\`.`, {
              starterCode: `import { createNativeStackNavigator } from '@react-navigation/native-stack';\nconst Stack = createNativeStackNavigator();\n// Stack.Navigator & Stack.Screen`,
              solutionCode: `import { createNativeStackNavigator } from '@react-navigation/native-stack';`,
              codeLanguage: 'tsx',
              quiz: quiz('React Navigation Quiz', [
                mcq('What package is the industry standard for React Native screen routing?', 'React Navigation', ['Next.js Router', 'Expo Route'], 'React Navigation manages mobile screen transitions.'),
              ]),
            }),
            lesson('Form Inputs & Controlled Components (`TextInput`)', 'rn-forms-textinput', `# Text Inputs\n\nCapture user keyboard input: \`<TextInput onChangeText={setText} value={text} placeholder="Enter name" />\`.`, {
              starterCode: `import { useState } from 'react';\nimport { TextInput, Text, View } from 'react-native';\nexport default function Form() {\n  const [name, setName] = useState('');\n  return (\n    <View>\n      <TextInput value={name} onChangeText={setName} placeholder="Name" />\n      <Text>Input: {name}</Text>\n    </View>\n  );\n}`,
              solutionCode: `import { useState } from 'react';\nimport { TextInput, Text, View } from 'react-native';\nexport default function Form() {\n  const [name, setName] = useState('');\n  return (\n    <View>\n      <TextInput value={name} onChangeText={setName} placeholder="Name" />\n      <Text>Input: {name}</Text>\n    </View>\n  );\n}`,
              codeLanguage: 'tsx',
              quiz: quiz('RN Forms Quiz', [
                trueFalse('`onChangeText` provides the string directly without requiring event object target extraction.', true),
              ]),
            }),
            lesson('Accessing Camera & Location (`expo-camera`, `expo-location`)', 'rn-native-apis', `# Native Device APIs\n\nAccess mobile hardware APIs using Expo SDK modules: \`Camera.requestCameraPermissionsAsync()\`.`, {
              starterCode: `import { Camera } from 'expo-camera';\nasync function getPerms() {\n  const { status } = await Camera.requestCameraPermissionsAsync();\n  console.log("Permission:", status);\n}`,
              solutionCode: `import { Camera } from 'expo-camera';\nasync function getPerms() {\n  const { status } = await Camera.requestCameraPermissionsAsync();\n  console.log("Permission:", status);\n}`,
              codeLanguage: 'tsx',
              quiz: quiz('Native APIs Quiz', [
                mcq('Why must permission prompts be requested prior to accessing mobile cameras or location?', 'Operating systems enforce hardware permission security checks', ['To download drivers', 'To check network'], 'iOS and Android enforce runtime hardware permission checks.'),
              ]),
            }),
            lesson('Local Offline Storage (`@react-native-async-storage/async-storage`)', 'rn-async-storage', `# AsyncStorage\n\nPersist mobile key-value data: \`await AsyncStorage.setItem('user_key', 'token')\`.`, {
              starterCode: `import AsyncStorage from '@react-native-async-storage/async-storage';\nasync function save() {\n  await AsyncStorage.setItem('theme', 'dark');\n}`,
              solutionCode: `import AsyncStorage from '@react-native-async-storage/async-storage';\nasync function save() {\n  await AsyncStorage.setItem('theme', 'dark');\n}`,
              codeLanguage: 'tsx',
              quiz: quiz('AsyncStorage Quiz', [
                trueFalse('`AsyncStorage` persists unencrypted key-value strings asynchronously on mobile local storage.', true),
              ]),
            }),
            lesson('Smooth Mobile Animations (`react-native-reanimated`)', 'rn-reanimated', `# Reanimated 3\n\nRun 60 FPS animations directly on the UI thread: \`const opacity = useSharedValue(0);\`.`, {
              starterCode: `import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';\n// Shared value animations on UI thread`,
              solutionCode: `import Animated from 'react-native-reanimated';`,
              codeLanguage: 'tsx',
              quiz: quiz('Reanimated Quiz', [
                mcq('What advantage does Reanimated have over the standard Animated API?', 'Executes animations directly on the UI thread at 60 FPS without JS bridge lag', ['Runs in cloud', 'Requires zero code'], 'UI thread execution eliminates JS bridge bottleneck lag.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: Build & Deployment Pipelines',
          lessons: [
            lesson('Consuming REST & GraphQL APIs in Mobile Apps', 'rn-api-networking', `# Mobile Networking\n\nFetch remote APIs with \`fetch()\` or Axios inside \`useEffect\` hooks with offline handling.`, {
              starterCode: `import { useState, useEffect } from 'react';\nimport { Text } from 'react-native';\nexport default function ApiData() {\n  const [data, setData] = useState('');\n  useEffect(() => {\n    fetch('https://httpbin.org/get').then(res => res.json()).then(d => setData(d.url));\n  }, []);\n  return <Text>URL: {data}</Text>;\n}`,
              solutionCode: `import { useState, useEffect } from 'react';\nimport { Text } from 'react-native';\nexport default function ApiData() {\n  const [data, setData] = useState('');\n  useEffect(() => {\n    fetch('https://httpbin.org/get').then(res => res.json()).then(d => setData(d.url));\n  }, []);\n  return <Text>URL: {data}</Text>;\n}`,
              codeLanguage: 'tsx',
              quiz: quiz('RN API Quiz', [
                trueFalse('Mobile apps must handle network disconnection states gracefully when fetching remote APIs.', true),
              ]),
            }),
            lesson('Push Notifications (`expo-notifications`)', 'rn-push-notifications', `# Push Notifications\n\nRegister for push tokens and trigger local & remote push alerts with \`expo-notifications\`.`, {
              starterCode: `import * as Notifications from 'expo-notifications';\nasync function schedulePush() {\n  await Notifications.scheduleNotificationAsync({\n    content: { title: "Code Mentor", body: "Time to complete your daily lesson!" },\n    trigger: { seconds: 5 }\n  });\n}`,
              solutionCode: `import * as Notifications from 'expo-notifications';`,
              codeLanguage: 'tsx',
              quiz: quiz('Push Notifications Quiz', [
                mcq('What token is required to target push notifications to a specific mobile device instance?', 'Expo Push Token / APNs / FCM token', ['MAC Address', 'IP Address'], 'Device push tokens route push notifications.'),
              ]),
            }),
            lesson('Building Release Binaries with Expo Application Services (EAS Build)', 'eas-build', `# EAS Build\n\nBuild native iOS \`.ipa\` and Android \`.aab\` / \`.apk\` packages in the cloud: \`eas build --platform all\`.`, {
              starterCode: `# eas.json config example\n{\n  "build": {\n    "preview": { "distribution": "internal" },\n    "production": {}\n  }\n}`,
              solutionCode: `{\n  "build": {\n    "preview": { "distribution": "internal" }\n  }\n}`,
              codeLanguage: 'json',
              quiz: quiz('EAS Build Quiz', [
                mcq('What format do Google Play Store app releases require?', '.aab (Android App Bundle)', ['.exe', '.dmg'], 'Google Play requires `.aab` (Android App Bundle) format.'),
              ]),
            }),
            lesson('App Store & Google Play Submission Checklist', 'store-submission', `# App Store Submission\n\nPrepare screenshots, privacy policies, app icons, provisioning profiles, and submit for review.`, {
              starterCode: `# Submission Command:\neas submit --platform ios\neas submit --platform android`,
              solutionCode: `# Submission Command`,
              codeLanguage: 'bash',
              quiz: quiz('Store Submission Quiz', [
                trueFalse('Both Apple App Store and Google Play Store require a public Privacy Policy URL.', true),
              ]),
            }),
            lesson('React Native Capstone: Cross-Platform Mobile Fitness App', 'react-native-capstone', `# RN Capstone\n\nBuild a complete mobile app with Expo, React Navigation, AsyncStorage, native sensors, and custom dark mode UI.`, {
              starterCode: `console.log("=== CROSS-PLATFORM MOBILE APP DEPLOYED ===");`,
              solutionCode: `console.log("=== CROSS-PLATFORM MOBILE APP DEPLOYED ===");`,
              codeLanguage: 'tsx',
              quiz: quiz('RN Capstone Quiz', [
                mcq('What code sharing benefit does React Native offer developers?', 'Allows writing UI logic in JavaScript/TypeScript that compiles to native iOS and Android components', ['Only runs in web browser', 'Replaces Linux kernel'], 'React Native enables >90% code sharing across iOS and Android.'),
              ]),
            }),
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ FLUTTER & DART MASTERY ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Flutter & Dart Mastery',
      slug: 'flutter-dart-mastery',
      description: 'Master Flutter UI development with Dart — Widgets, State Management (Provider, Riverpod), REST APIs, and native compilation.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'youtube', title: 'Flutter Course for Beginners — 37 Hours', url: 'https://www.youtube.com/watch?v=VPvVD8t02U8', author: 'FreeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Dart Programming Language in 100 Seconds', url: 'https://www.youtube.com/watch?v=nrb5nC6C26w', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Flutter State Management (Riverpod vs Provider)', url: 'https://www.youtube.com/watch?v=R9C5KMJKLuE', author: 'Reso Coder', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Flutter UI Design & Glassmorphism Tutorial', url: 'https://www.youtube.com/watch?v=xVh6D9S6Yfg', author: 'Mitch Koko', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Fullstack Flutter App with Firebase & REST API', url: 'https://www.youtube.com/watch?v=S4f25bO8k40', author: 'Academind', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'Official Flutter Documentation & Widget Catalog', url: 'https://docs.flutter.dev/', author: 'Google' },
        { resourceType: 'article', title: 'Dart Language Tour & Null Safety Guide', url: 'https://dart.dev/guides/language/language-tour', author: 'Dart Team' },
        { resourceType: 'cheatsheet', title: 'Flutter Widgets Quick Reference Cheat Sheet', url: 'https://quickref.me/flutter', author: 'QuickRef' },
        { resourceType: 'article', title: 'Pub.dev Official Package Manager for Dart & Flutter', url: 'https://pub.dev/', author: 'Dart Community' },
        { resourceType: 'cheatsheet', title: 'Dart Syntax & Functional Programming Reference', url: 'https://quickref.me/dart', author: 'QuickRef' },
      ],
      modules: [
        {
          title: 'Module 1: Dart Fundamentals & Sound Null Safety',
          lessons: [
            setupLesson('Flutter & Dart Mastery', 'flutter-dart-mastery', 'dart',
              `1. Download Flutter SDK from [flutter.dev](https://flutter.dev/)\n2. Run: \`flutter doctor\` to check environment\n3. Create project: \`flutter create my_app\`\n4. Run: \`flutter run\``,
              `void main() {\n  print('Hello, Flutter & Dart!');\n}`,
              `void main() {\n  print('Hello, Flutter & Dart!');\n}`
            ),
            lesson('Dart Syntax & Sound Null Safety (`String?`, `!`, `??`)', 'dart-null-safety', `# Null Safety\n\nVariables are non-nullable by default (\`String name\`). Mark nullable with \`String? name\`.`, {
              starterCode: `void main() {\n  String? name = null;\n  String displayName = name ?? "Guest";\n  print(displayName);\n}`,
              solutionCode: `void main() {\n  String? name = null;\n  String displayName = name ?? "Guest";\n  print(displayName);\n}`,
              codeLanguage: 'dart',
              quiz: quiz('Dart Null Safety Quiz', [
                mcq('What operator provides a fallback value if a nullable expression is null in Dart?', '??', ['||', '::'], 'The `??` operator returns the right-hand value if left-hand is null.'),
              ]),
            }),
            lesson('Object-Oriented Dart (Classes & Constructors)', 'dart-classes', `# Dart Classes\n\nDefine classes with named parameters: \`Person({required this.name, this.age = 18});\`.`, {
              starterCode: `class Person {\n  final String name;\n  final int age;\n  Person({required this.name, this.age = 18});\n}\nvoid main() {\n  var p = Person(name: "Alice");\n  print("\${p.name} is \${p.age}");\n}`,
              solutionCode: `class Person {\n  final String name;\n  final int age;\n  Person({required this.name, this.age = 18});\n}\nvoid main() {\n  var p = Person(name: "Alice");\n  print("\${p.name} is \${p.age}");\n}`,
              codeLanguage: 'dart',
              quiz: quiz('Dart Classes Quiz', [
                trueFalse('`final` fields in Dart classes can only be set once during constructor initialization.', true),
              ]),
            }),
            lesson('Stateless vs Stateful Widgets', 'flutter-widgets-stateless-stateful', `# Flutter Widgets\n\nEverything in Flutter is a Widget! \`StatelessWidget\` (immutable UI) vs \`StatefulWidget\` (\`setState()\`).`, {
              starterCode: `import 'package:flutter/material.dart';\nclass MyWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Text('Hello World');\n  }\n}`,
              solutionCode: `import 'package:flutter/material.dart';\nclass MyWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Text('Hello World');\n  }\n}`,
              codeLanguage: 'dart',
              quiz: quiz('Flutter Widgets Quiz', [
                mcq('What function triggers a rebuild of a `StatefulWidget` with updated state?', 'setState(() {})', ['rebuild()', 'update()'], '`setState()` notifies the framework to re-execute the build method.'),
              ]),
            }),
            lesson('Layout Widgets (`Column`, `Row`, `Container`, `Stack`)', 'flutter-layout-widgets', `# Layouts\n\nArrange widgets vertically with \`Column\`, horizontally with \`Row\`, and overlay with \`Stack\`.`, {
              starterCode: `import 'package:flutter/material.dart';\nWidget buildLayout() {\n  return Column(\n    mainAxisAlignment: MainAxisAlignment.center,\n    children: [Text('Top'), Text('Bottom')],\n  );\n}`,
              solutionCode: `import 'package:flutter/material.dart';\nWidget buildLayout() {\n  return Column(\n    mainAxisAlignment: MainAxisAlignment.center,\n    children: [Text('Top'), Text('Bottom')],\n  );\n}`,
              codeLanguage: 'dart',
              quiz: quiz('Flutter Layout Quiz', [
                mcq('Which layout widget places child elements on top of each other along the Z-axis?', 'Stack', ['Column', 'Row'], '`Stack` overlays children on top of each other.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: State Management & Navigation',
          lessons: [
            lesson('Material & Cupertino Design Systems', 'flutter-design-systems', `# Material & Cupertino\n\nUse Material Design for Android/cross-platform UI and Cupertino for native iOS styling.`, {
              starterCode: `import 'package:flutter/material.dart';\nWidget buildApp() {\n  return MaterialApp(home: Scaffold(appBar: AppBar(title: Text('Material App'))));\n}`,
              solutionCode: `import 'package:flutter/material.dart';`,
              codeLanguage: 'dart',
              quiz: quiz('Design Systems Quiz', [
                mcq('What widget provides standard app bars, floating action buttons, and snackbars?', 'Scaffold', ['MaterialApp', 'Container'], '`Scaffold` implements basic Material Design visual layout structure.'),
              ]),
            }),
            lesson('State Management with Provider', 'flutter-provider', `# Provider\n\nManage application state cleanly using \`ChangeNotifier\` and \`context.watch<MyModel>()\`.`, {
              starterCode: `import 'package:flutter/material.dart';\nclass CounterModel extends ChangeNotifier {\n  int count = 0;\n  void increment() { count++; notifyListeners(); }\n}`,
              solutionCode: `import 'package:flutter/material.dart';\nclass CounterModel extends ChangeNotifier {\n  int count = 0;\n  void increment() { count++; notifyListeners(); }\n}`,
              codeLanguage: 'dart',
              quiz: quiz('Provider Quiz', [
                mcq('What method inside a `ChangeNotifier` notifies subscribing widgets to rebuild?', 'notifyListeners()', ['update()', 'setState()'], '`notifyListeners()` informs subscribers of model updates.'),
              ]),
            }),
            lesson('Riverpod State Management', 'flutter-riverpod', `# Riverpod\n\nCompile-safe state management without BuildContext limitations: \`final counterProvider = StateProvider((ref) => 0);\`.`, {
              starterCode: `// final counterProvider = StateProvider<int>((ref) => 0);`,
              solutionCode: `// final counterProvider = StateProvider<int>((ref) => 0);`,
              codeLanguage: 'dart',
              quiz: quiz('Riverpod Quiz', [
                trueFalse('Riverpod operates independently of the Flutter Widget tree BuildContext.', true),
              ]),
            }),
            lesson('Navigator 2.0 & Router Navigation', 'flutter-navigation', `# Navigation\n\nNavigate between screens: \`Navigator.push(context, MaterialPageRoute(builder: (context) => SecondScreen()));\`.`, {
              starterCode: `// Navigator.push(context, MaterialPageRoute(builder: (_) => DetailScreen()));`,
              solutionCode: `// Navigator.push`,
              codeLanguage: 'dart',
              quiz: quiz('Flutter Navigation Quiz', [
                mcq('What method pushes a new route onto the navigator stack in Flutter?', 'Navigator.push()', ['Navigator.open()', 'Navigator.show()'], '`Navigator.push()` pushes routes onto the history stack.'),
              ]),
            }),
            lesson('Fetching REST APIs (`http` package)', 'flutter-http-rest', `# REST HTTP Calls\n\nFetch remote JSON with \`http.get(Uri.parse(url))\` and parse into Dart objects using \`jsonDecode()\`.`, {
              starterCode: `import 'dart:convert';\nimport 'package:http/http.dart' as http;\nFuture<void> fetchData() async {\n  final res = await http.get(Uri.parse('https://httpbin.org/get'));\n  final data = jsonDecode(res.body);\n  print(data['url']);\n}`,
              solutionCode: `import 'dart:convert';\nimport 'package:http/http.dart' as http;\nFuture<void> fetchData() async {\n  final res = await http.get(Uri.parse('https://httpbin.org/get'));\n  final data = jsonDecode(res.body);\n  print(data['url']);\n}`,
              codeLanguage: 'dart',
              quiz: quiz('Flutter HTTP Quiz', [
                trueFalse('`jsonDecode()` converts raw JSON strings into Dart Maps and Lists.', true),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: Native Compilation & Deployment',
          lessons: [
            lesson('FutureBuilder & StreamBuilder Async UI', 'flutter-futurebuilder', `# Async Widgets\n\nRender UI asynchronously based on Futures or Streams using \`FutureBuilder<Data>(...)\`.`, {
              starterCode: `import 'package:flutter/material.dart';\n// FutureBuilder(future: fetchData(), builder: (context, snapshot) { ... })`,
              solutionCode: `import 'package:flutter/material.dart';`,
              codeLanguage: 'dart',
              quiz: quiz('FutureBuilder Quiz', [
                mcq('What property of `AsyncSnapshot` verifies whether an async operation has completed successfully?', 'snapshot.hasData', ['snapshot.isDone', 'snapshot.ok'], '`snapshot.hasData` confirms successful data retrieval.'),
              ]),
            }),
            lesson('Local Storage with Shared Preferences & Hive', 'flutter-storage-hive', `# Local Storage\n\nStore key-value pairs with \`SharedPreferences\` and fast NoSQL documents with \`Hive\`.`, {
              starterCode: `// final prefs = await SharedPreferences.getInstance();\n// prefs.setString('token', 'xyz123');`,
              solutionCode: `// final prefs = await SharedPreferences.getInstance();`,
              codeLanguage: 'dart',
              quiz: quiz('Flutter Storage Quiz', [
                trueFalse('Hive is a lightweight and ultra-fast key-value NoSQL database written in pure Dart.', true),
              ]),
            }),
            lesson('Flutter Animations & Hero Transitions', 'flutter-hero-animations', `# Hero Animations\n\nAnimate element transitions across screens using the \`Hero(tag: 'avatar', child: ...)\` widget.`, {
              starterCode: `import 'package:flutter/material.dart';\n// Hero(tag: 'image_1', child: Image.asset('hero.png'))`,
              solutionCode: `import 'package:flutter/material.dart';`,
              codeLanguage: 'dart',
              quiz: quiz('Hero Animations Quiz', [
                mcq('Which widget smoothly animates a shared component between two different route screens?', 'Hero', ['AnimatedContainer', 'FadeTransition'], '`Hero` animates shared elements across route transitions.'),
              ]),
            }),
            lesson('Compiling Flutter to Native ARM & Web Binaries', 'flutter-native-compilation', `# Native Compilation\n\nFlutter compiles Dart directly to native ARM machine code for iOS & Android, and WebAssembly for Web.`, {
              starterCode: `flutter build apk --release\nflutter build appbundle --release\nflutter build ipa --release`,
              solutionCode: `flutter build apk --release`,
              codeLanguage: 'bash',
              quiz: quiz('Flutter Compilation Quiz', [
                mcq('Does Flutter use webviews or compile directly to native machine code?', 'Compiles directly to native machine code (ARM / Skia canvas)', ['Uses Webviews', 'Uses Java bytecode'], 'Flutter compiles Dart code directly to native machine code.'),
              ]),
            }),
            lesson('Flutter Capstone: Production Cross-Platform E-Commerce App', 'flutter-capstone', `# Flutter Capstone\n\nBuild an e-commerce mobile app in Flutter with Riverpod state, REST API integration, and smooth Hero animations.`, {
              starterCode: `void main() {\n  print("=== PRODUCTION FLUTTER APP ONLINE ===");\n}`,
              solutionCode: `void main() {\n  print("=== PRODUCTION FLUTTER APP ONLINE ===");\n}`,
              codeLanguage: 'dart',
              quiz: quiz('Flutter Capstone Quiz', [
                mcq('Why is Flutter chosen by enterprises like Google, BMW, and Alibaba?', 'Single Dart codebase compiles to high-performance native iOS, Android, Desktop, and Web binaries', ['It uses HTML tables', 'No code needed'], 'Flutter delivers 60-120 FPS native performance from a single codebase.'),
              ]),
            }),
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ SWIFT & IOS DEVELOPMENT ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Swift & iOS Development',
      slug: 'swift-ios-development',
      description: 'Master native iOS development with Swift 5, SwiftUI, Xcode, Combine framework, and CoreData.',
      difficulty: 'advanced',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'youtube', title: 'Swift & SwiftUI Full Course for Beginners', url: 'https://www.youtube.com/watch?v=comQ1-x2a1Q', author: 'FreeCodeCamp / Sean Allen', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'SwiftUI Masterclass — Build iOS Apps', url: 'https://www.youtube.com/watch?v=F2ojC6TN5as', author: 'Kavsoft', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Swift Programming Language Tutorial in 100 Seconds', url: 'https://www.youtube.com/watch?v=n5X_09Bv2_c', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'iOS App Architecture (MVVM & Async/Await)', url: 'https://www.youtube.com/watch?v=J3KspR-aR1k', author: 'Vincent Pradealles', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Publishing iOS Apps to Apple App Store (App Store Connect)', url: 'https://www.youtube.com/watch?v=P8j5e1s2t34', author: 'Paul Hudson (Hacking with Swift)', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'Hacking with Swift — 100 Days of SwiftUI (Free)', url: 'https://www.hackingwithswift.com/100/swiftui', author: 'Paul Hudson' },
        { resourceType: 'article', title: 'Apple Developer Official Documentation & SwiftUI Specs', url: 'https://developer.apple.com/documentation/swiftui', author: 'Apple' },
        { resourceType: 'cheatsheet', title: 'Swift Syntax & Structs Cheat Sheet', url: 'https://quickref.me/swift', author: 'QuickRef' },
        { resourceType: 'article', title: 'Swift.org Official Language Documentation', url: 'https://www.swift.org/documentation/', author: 'Swift Core Team' },
        { resourceType: 'cheatsheet', title: 'SwiftUI View Modifiers Reference', url: 'https://goswiftui.com/', author: 'GoSwiftUI' },
      ],
      modules: [
        {
          title: 'Module 1: Swift 5 Language Syntax',
          lessons: [
            setupLesson('Swift & iOS Development', 'swift-ios-development', 'swift',
              `1. Install Xcode on macOS from App Store\n2. Open Xcode -> Create a new SwiftUI App project\n3. Run on iOS Simulator (iPhone 15 Pro)`,
              `import SwiftUI\nstruct ContentView: View {\n    var body: some View {\n        Text("Hello, SwiftUI!")\n    }\n}`,
              `import SwiftUI\nstruct ContentView: View {\n    var body: some View {\n        Text("Hello, SwiftUI!")\n    }\n}`
            ),
            lesson('Swift Optionals & Unwrapping (`if let`, `guard let`)', 'swift-optionals', `# Swift Optionals\n\nSafely unwrap optional values (\`String?\`) using \`if let name = optionalName\` or \`guard let\`.`, {
              starterCode: `var name: String? = "Alice"\nif let unwrappedName = name {\n    print("Hello, \\(unwrappedName)!")\n}`,
              solutionCode: `var name: String? = "Alice"\nif let unwrappedName = name {\n    print("Hello, \\(unwrappedName)!")\n}`,
              codeLanguage: 'swift',
              quiz: quiz('Swift Optionals Quiz', [
                mcq('What statement exits early if an optional fails to unwrap in Swift?', 'guard let', ['if let', 'switch'], '`guard let` forces early exit from current scope on unwrap failure.'),
              ]),
            }),
            lesson('Structs vs Classes in Swift', 'swift-structs-classes', `# Value vs Reference Types\n\nStructs (Value types, copied on assignment) vs Classes (Reference types, shared references).`, {
              starterCode: `struct User {\n    var name: String\n}\nvar u1 = User(name: "Alice")\nvar u2 = u1 // Independent copy!\nu2.name = "Bob"\nprint(u1.name) // Prints Alice`,
              solutionCode: `struct User {\n    var name: String\n}\nvar u1 = User(name: "Alice")\nvar u2 = u1\nu2.name = "Bob"\nprint(u1.name)`,
              codeLanguage: 'swift',
              quiz: quiz('Swift Structs Quiz', [
                mcq('Are Swift `struct` types value types or reference types?', 'Value types (copied on assignment)', ['Reference types', 'Global pointers'], 'Swift structs are value types.'),
              ]),
            }),
            lesson('Protocols & Extensions', 'swift-protocols-extensions', `# Protocols & Extensions\n\nDefine contracts with \`protocol\` and extend existing types with \`extension String {}\`.`, {
              starterCode: `protocol Describable {\n    var description: String { get }\n}\nextension String: Describable {\n    var description: String { return "Text: \\(self)" }\n}`,
              solutionCode: `protocol Describable {\n    var description: String { get }\n}\nextension String: Describable {\n    var description: String { return "Text: \\(self)" }\n}`,
              codeLanguage: 'swift',
              quiz: quiz('Swift Extensions Quiz', [
                trueFalse('Swift extensions allow adding new functionality to existing types without subclassing.', true),
              ]),
            }),
            lesson('Swift Concurrency (`async/await`, `Task`)', 'swift-async-await', `# Async/Await\n\nWrite asynchronous non-blocking Swift code: \`func fetchData() async throws -> Data\`.`, {
              starterCode: `func fetchUser() async -> String {\n    return "Scott Yann"\n}\nTask {\n    let user = await fetchUser()\n    print(user)\n}`,
              solutionCode: `func fetchUser() async -> String {\n    return "Scott Yann"\n}\nTask {\n    let user = await fetchUser()\n    print(user)\n}`,
              codeLanguage: 'swift',
              quiz: quiz('Swift Async Quiz', [
                mcq('What keyword marks an asynchronous function call in Swift?', 'await', ['async', 'defer'], '`await` marks execution points waiting for async results.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Declarative UI with SwiftUI',
          lessons: [
            lesson('SwiftUI Views & Stacks (`VStack`, `HStack`, `ZStack`)', 'swiftui-stacks', `# SwiftUI Stacks\n\nCompose layouts declaratively using \`VStack\` (vertical), \`HStack\` (horizontal), and \`ZStack\` (depth).`, {
              starterCode: `import SwiftUI\nstruct CardView: View {\n    var body: some View {\n        VStack {\n            Text("Title").font(.title)\n            Text("Subtitle").foregroundColor(.gray)\n        }\n    }\n}`,
              solutionCode: `import SwiftUI\nstruct CardView: View {\n    var body: some View {\n        VStack {\n            Text("Title").font(.title)\n            Text("Subtitle").foregroundColor(.gray)\n        }\n    }\n}`,
              codeLanguage: 'swift',
              quiz: quiz('SwiftUI Stacks Quiz', [
                mcq('Which SwiftUI stack aligns views vertically from top to bottom?', 'VStack', ['HStack', 'ZStack'], '`VStack` arranges child views vertically.'),
              ]),
            }),
            lesson('State Wrappers (`@State`, `@Binding`, `@ObservedObject`)', 'swiftui-state-wrappers', `# State Wrappers\n\nManage local view state with \`@State\` and pass read-write bindings to child views using \`@Binding\`.`, {
              starterCode: `import SwiftUI\nstruct ToggleView: View {\n    @State private var isOn = false\n    var body: some View {\n        Toggle("Enable Feature", isOn: $isOn)\n    }\n}`,
              solutionCode: `import SwiftUI\nstruct ToggleView: View {\n    @State private var isOn = false\n    var body: some View {\n        Toggle("Enable Feature", isOn: $isOn)\n    }\n}`,
              codeLanguage: 'swift',
              quiz: quiz('SwiftUI State Quiz', [
                trueFalse('Prefixing a `@State` variable with `$` creates a two-way binding passed to child controls.', true),
              ]),
            }),
            lesson('Lists & NavigationStack in SwiftUI', 'swiftui-navigation', `# Lists & Navigation\n\nRender dynamic lists with \`List(items)\` and navigate with \`NavigationStack\` & \`NavigationLink\`.`, {
              starterCode: `import SwiftUI\nstruct ListView: View {\n    let items = ["Apple", "Banana", "Cherry"]\n    var body: some View {\n        NavigationStack {\n            List(items, id: \\.self) { item in\n                Text(item)\n            }\n        }\n    }\n}`,
              solutionCode: `import SwiftUI\nstruct ListView: View {\n    let items = ["Apple", "Banana", "Cherry"]\n    var body: some View {\n        NavigationStack {\n            List(items, id: \\.self) { item in\n                Text(item)\n            }\n        }\n    }\n}`,
              codeLanguage: 'swift',
              quiz: quiz('SwiftUI Navigation Quiz', [
                mcq('What view container manages modern push/pop screen navigation in SwiftUI?', 'NavigationStack', ['NavigationView', 'ScrollView'], '`NavigationStack` is the modern container for stack navigation.'),
              ]),
            }),
            lesson('View Modifiers & Custom Components', 'swiftui-modifiers', `# View Modifiers\n\nChain modifiers to style elements: \`.padding()\`, \`.background(Color.blue)\`, \`.cornerRadius(10)\`.`, {
              starterCode: `import SwiftUI\nstruct StyledBtn: View {\n    var body: some View {\n        Text("Submit")\n            .padding()\n            .background(Color.indigo)\n            .foregroundColor(.white)\n            .cornerRadius(8)\n    }\n}`,
              solutionCode: `import SwiftUI\nstruct StyledBtn: View {\n    var body: some View {\n        Text("Submit")\n            .padding()\n            .background(Color.indigo)\n            .foregroundColor(.white)\n            .cornerRadius(8)\n    }\n}`,
              codeLanguage: 'swift',
              quiz: quiz('SwiftUI Modifiers Quiz', [
                trueFalse('Order matters when chaining SwiftUI view modifiers because each modifier returns a modified wrapper view.', true),
              ]),
            }),
            lesson('MVVM Architecture pattern in SwiftUI', 'swiftui-mvvm', `# MVVM Architecture\n\nSeparate Model (Data), View (UI), and ViewModel (\`ObservableObject\` with \`@Published\` properties).`, {
              starterCode: `import SwiftUI\nclass UserViewModel: ObservableObject {\n    @Published var name = "Scott"\n}\nstruct UserView: View {\n    @StateObject var vm = UserViewModel()\n    var body: some View { Text(vm.name) }\n}`,
              solutionCode: `import SwiftUI\nclass UserViewModel: ObservableObject {\n    @Published var name = "Scott"\n}\nstruct UserView: View {\n    @StateObject var vm = UserViewModel()\n    var body: some View { Text(vm.name) }\n}`,
              codeLanguage: 'swift',
              quiz: quiz('MVVM Quiz', [
                mcq('What attribute marks properties inside an ObservableObject that trigger UI updates when changed?', '@Published', ['@State', '@Binding'], '`@Published` triggers UI updates on mutation.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: CoreData & App Store Deployment',
          lessons: [
            lesson('Networking with URLSession & Decodable', 'swift-urlsession-decodable', `# URLSession\n\nFetch remote JSON and parse into Swift structs using \`JSONDecoder()\` and \`Decodable\` protocol.`, {
              starterCode: `struct Post: Decodable { let id: Int; let title: String }\nfunc fetchPost() async throws -> Post {\n    let (data, _) = try await URLSession.shared.data(from: URL(string: "https://httpbin.org/get")!)\n    return try JSONDecoder().decode(Post.self, from: data)\n}`,
              solutionCode: `struct Post: Decodable { let id: Int; let title: String }`,
              codeLanguage: 'swift',
              quiz: quiz('URLSession Quiz', [
                mcq('What protocol allows Swift structs to be automatically decoded from JSON?', 'Decodable (or Codable)', ['Encodable', 'Parseable'], '`Decodable` enables automated JSON deserialization.'),
              ]),
            }),
            lesson('CoreData & SwiftData Persistence', 'swift-coredata-swiftdata', `# SwiftData\n\nPersist local object data natively using Apple's \`@Model\` attribute and \`ModelContainer\`.`, {
              starterCode: `import SwiftData\n@Model\nclass Note {\n    var content: String\n    init(content: String) { self.content = content }\n}`,
              solutionCode: `import SwiftData\n@Model\nclass Note {\n    var content: String\n    init(content: String) { self.content = content }\n}`,
              codeLanguage: 'swift',
              quiz: quiz('SwiftData Quiz', [
                trueFalse('`SwiftData` is Apple\'s modern declarative persistence framework built on top of CoreData for SwiftUI.', true),
              ]),
            }),
            lesson('Integrating Native iOS Capabilities (CoreLocation & Haptics)', 'ios-native-features', `# Native Features\n\nTrigger tactile haptic feedback (\`UIImpactFeedbackGenerator\`) and track user location with \`CLLocationManager\`.`, {
              starterCode: `import UIKit\nfunc triggerHaptic() {\n    let generator = UIImpactFeedbackGenerator(style: .medium)\n    generator.impactOccurred()\n}`,
              solutionCode: `import UIKit\nfunc triggerHaptic() {\n    let generator = UIImpactFeedbackGenerator(style: .medium)\n    generator.impactOccurred()\n}`,
              codeLanguage: 'swift',
              quiz: quiz('Native Features Quiz', [
                mcq('What class provides physical vibration haptic feedback on iPhones?', 'UIImpactFeedbackGenerator', ['CLLocationManager', 'AVAudioPlayer'], '`UIImpactFeedbackGenerator` triggers haptic feedback.'),
              ]),
            }),
            lesson('App Store Connect & TestFlight Beta Testing', 'testflight-deployment', `# TestFlight\n\nArchive iOS builds in Xcode (\`Product -> Archive\`), upload to App Store Connect, and invite beta testers via TestFlight.`, {
              starterCode: `# Xcode Archiving Workflow\n1. Select Any iOS Device (arm64)\n2. Product -> Archive\n3. Distribute App -> App Store Connect`,
              solutionCode: `# Xcode Archiving Workflow`,
              codeLanguage: 'text',
              quiz: quiz('TestFlight Quiz', [
                trueFalse('TestFlight allows developers to distribute beta iOS builds to up to 10,000 external testers before public launch.', true),
              ]),
            }),
            lesson('Swift & iOS Capstone: Production SwiftUI Application', 'swift-capstone', `# iOS Capstone\n\nBuild a complete native SwiftUI app with SwiftData persistence, MVVM architecture, and custom glassmorphism components.`, {
              starterCode: `print("=== PRODUCTION NATIVE SWIFTUI IOS APP DEPLOYED ===")`,
              solutionCode: `print("=== PRODUCTION NATIVE SWIFTUI IOS APP DEPLOYED ===");`,
              codeLanguage: 'swift',
              quiz: quiz('Swift Capstone Quiz', [
                mcq('Why is Swift & SwiftUI preferred for premium native iOS user experiences?', 'Provides 120Hz ProMotion fluid rendering, deep OS integration, and maximum battery efficiency', ['It requires web browsers', 'It runs only on Android'], 'Native Swift delivers unparalleled performance and battery efficiency on Apple hardware.'),
              ]),
            }),
          ]
        }
      ]
    }
  ]
};
