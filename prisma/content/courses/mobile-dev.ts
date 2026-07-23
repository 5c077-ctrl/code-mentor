import type { CategoryDef } from '../types';
import { mcq, trueFalse, quiz, lesson, setupLesson } from '../helpers';

export const mobileDevCategory: CategoryDef = {
  name: 'Mobile Development',
  slug: 'mobile-dev',
  description: 'Build native and cross-platform mobile apps with React Native, Flutter, and Swift.',
  icon: '📱',
  color: '#06b6d4',
  sortOrder: 7,
  courses: [
    {
      title: 'React Native Essentials',
      slug: 'react-native-essentials',
      description: 'Build cross-platform mobile apps with React Native — components, navigation, state management, and native modules.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 22,
      resources: [
        { resourceType: 'article', title: 'React Native Docs', url: 'https://reactnative.dev/', author: 'Meta' },
        { resourceType: 'youtube', title: 'React Native Tutorial', url: 'https://www.youtube.com/watch?v=VozPNrt-LfE', author: 'Academind', platform: 'YouTube' },
      ],
      modules: [
        {
          title: 'React Native Basics',
          lessons: [
            setupLesson('React Native Essentials', 'react-native-essentials', 'javascript',
              `1. Install Node.js 18+ and Watchman
2. Install Expo CLI: \`npx create-expo-app@latest MyApp\`
3. Run: \`npx expo start\`
4. Install Expo Go on your phone to preview`,
              `import { Text, View } from 'react-native';\n\nexport default function App() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Hello, React Native!</Text>\n    </View>\n  );\n}`,
              `import { Text, View } from 'react-native';\n\nexport default function App() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Hello, React Native!</Text>\n    </View>\n  );\n}`
            ),
            lesson('Core Components & Styling', 'rn-core-components', `# Core Components & Styling

## Core Components

\`\`\`jsx
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';

function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Hello!</Text>
        <Image source={{ uri: 'https://example.com/img.png' }} style={styles.image} />
        <TextInput placeholder="Type here..." style={styles.input} />
        <TouchableOpacity style={styles.button} onPress={() => alert('Pressed!')}>
          <Text style={styles.btnText}>Press Me</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
\`\`\`

## React Native vs Web

| Web | React Native |
|-----|-------------|
| \`<div>\` | \`<View>\` |
| \`<span>\`, \`<p>\` | \`<Text>\` |
| \`<img>\` | \`<Image>\` |
| \`<input>\` | \`<TextInput>\` |
| \`<button>\` | \`<TouchableOpacity>\` |
| CSS classes | StyleSheet objects |

## StyleSheet

\`\`\`jsx
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
\`\`\`

## Flexbox in React Native
- Default direction is **column** (not row like web)
- Use \`flex: 1\` to fill available space
- \`justifyContent\`, \`alignItems\` work the same as CSS`, {
              starterCode: `// React Native component example\nconst styles = {\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n    backgroundColor: '#1a1a2e',\n  },\n  card: {\n    backgroundColor: '#16213e',\n    borderRadius: 16,\n    padding: 24,\n    width: '90%',\n    shadowColor: '#000',\n    shadowOffset: { width: 0, height: 4 },\n    shadowOpacity: 0.3,\n    shadowRadius: 8,\n  },\n  title: {\n    color: '#e0e0e0',\n    fontSize: 22,\n    fontWeight: 'bold',\n    marginBottom: 8,\n  },\n  subtitle: {\n    color: '#a0a0a0',\n    fontSize: 14,\n  },\n};\n\nconsole.log("React Native uses Flexbox by default!");\nconsole.log("Container direction:", "column");\nconsole.log("Styles use JS objects, not CSS files");`,
              solutionCode: `const styles = {\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n    backgroundColor: '#1a1a2e',\n  },\n  card: {\n    backgroundColor: '#16213e',\n    borderRadius: 16,\n    padding: 24,\n    width: '90%',\n  },\n  title: {\n    color: '#e0e0e0',\n    fontSize: 22,\n    fontWeight: 'bold',\n  },\n};\n\nconsole.log("React Native uses Flexbox by default!");\nconsole.log("Container direction:", "column");`,
              codeLanguage: 'javascript',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('React Native Components Quiz', [
                mcq('What is the React Native equivalent of `<div>`?', '<View>', ['<Container>', '<Box>'], '<View> is the fundamental building block for UI layout.'),
                mcq('What is the default flexDirection in React Native?', 'column', ['row', 'row-reverse'], 'Unlike web CSS (row), React Native defaults to column.'),
                trueFalse('React Native uses CSS files for styling.', false, 'React Native uses JavaScript StyleSheet objects, not CSS files.'),
              ]),
            }),
          ],
        },
      ],
    },

    {
      title: 'Flutter & Dart',
      slug: 'flutter-dart',
      description: 'Build beautiful cross-platform apps with Flutter and Dart — widgets, state management, and platform-specific features.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 22,
      resources: [
        { resourceType: 'article', title: 'Flutter Official Docs', url: 'https://flutter.dev/docs', author: 'Google' },
        { resourceType: 'youtube', title: 'Flutter Course for Beginners', url: 'https://www.youtube.com/watch?v=VPvVD8t02U8', author: 'freeCodeCamp', platform: 'YouTube' },
      ],
      modules: [
        {
          title: 'Flutter Basics',
          lessons: [
            setupLesson('Flutter & Dart', 'flutter-dart', 'dart',
              `1. Install [Flutter SDK](https://flutter.dev/docs/get-started/install)
2. Verify: \`flutter doctor\`
3. Create app: \`flutter create my_app\`
4. Run: \`flutter run\``,
              `import 'package:flutter/material.dart';\n\nvoid main() {\n  runApp(const MaterialApp(\n    home: Scaffold(\n      body: Center(\n        child: Text('Hello, Flutter!'),\n      ),\n    ),\n  ));\n}`,
              `import 'package:flutter/material.dart';\n\nvoid main() {\n  runApp(const MaterialApp(\n    home: Scaffold(\n      body: Center(\n        child: Text('Hello, Flutter!'),\n      ),\n    ),\n  ));\n}`
            ),
            lesson('Widgets & Layout', 'flutter-widgets', `# Widgets & Layout

## Everything is a Widget
In Flutter, every UI element is a widget.

## StatelessWidget

\`\`\`dart
class Greeting extends StatelessWidget {
  final String name;
  const Greeting({required this.name, super.key});
  
  @override
  Widget build(BuildContext context) {
    return Text('Hello, $name!',
      style: const TextStyle(fontSize: 24));
  }
}
\`\`\`

## StatefulWidget

\`\`\`dart
class Counter extends StatefulWidget {
  const Counter({super.key});
  @override
  State<Counter> createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int count = 0;
  
  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text('Count: $count', style: const TextStyle(fontSize: 32)),
        ElevatedButton(
          onPressed: () => setState(() => count++),
          child: const Text('Increment'),
        ),
      ],
    );
  }
}
\`\`\`

## Layout Widgets

\`\`\`dart
// Column (vertical)
Column(children: [Widget1(), Widget2()])

// Row (horizontal)
Row(children: [Widget1(), Widget2()])

// Stack (overlapping)
Stack(children: [Background(), Foreground()])

// Container (styling)
Container(
  padding: EdgeInsets.all(16),
  decoration: BoxDecoration(
    color: Colors.blue,
    borderRadius: BorderRadius.circular(12),
  ),
  child: Text('Styled Container'),
)
\`\`\``, {
              starterCode: `// Dart/Flutter concepts\nvoid main() {\n  // Dart basics\n  String name = "Flutter";\n  int version = 3;\n  bool isAwesome = true;\n  \n  print("$name $version is awesome: $isAwesome");\n  \n  // Lists\n  var widgets = ['Text', 'Container', 'Column', 'Row'];\n  widgets.forEach((w) => print("Widget: $w"));\n  \n  // Maps\n  var colors = {\n    'primary': '#6366f1',\n    'secondary': '#10b981',\n    'danger': '#ef4444',\n  };\n  \n  colors.forEach((key, value) {\n    print("$key: $value");\n  });\n  \n  print("\\nFlutter: Everything is a widget!");\n}`,
              solutionCode: `void main() {\n  String name = "Flutter";\n  int version = 3;\n  bool isAwesome = true;\n  print("$name $version is awesome: $isAwesome");\n  \n  var widgets = ['Text', 'Container', 'Column', 'Row'];\n  widgets.forEach((w) => print("Widget: $w"));\n  \n  var colors = {'primary': '#6366f1', 'secondary': '#10b981'};\n  colors.forEach((key, value) => print("$key: $value"));\n}`,
              codeLanguage: 'dart',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('Flutter Widgets Quiz', [
                mcq('What is the difference between StatelessWidget and StatefulWidget?', 'StatefulWidget can change over time; StatelessWidget cannot', ['StatelessWidget is faster', 'StatefulWidget uses more memory'], 'Stateful widgets maintain mutable state that can trigger rebuilds.'),
                trueFalse('In Flutter, everything is a widget.', true, 'Even layout, styling, and gestures are expressed as widgets.'),
                mcq('What does `setState()` do?', 'Tells Flutter to rebuild the widget with new state', ['Saves state to disk', 'Resets state to default'], '`setState()` triggers a rebuild of the widget tree.'),
              ]),
            }),
          ],
        },
      ],
    },

    {
      title: 'Swift & iOS Development',
      slug: 'swift-ios-development',
      description: 'Build native iOS apps with Swift and SwiftUI — views, navigation, data persistence, and App Store deployment.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 25,
      resources: [
        { resourceType: 'article', title: 'Swift Documentation', url: 'https://www.swift.org/documentation/', author: 'Apple' },
        { resourceType: 'youtube', title: 'SwiftUI Tutorial', url: 'https://www.youtube.com/watch?v=F2ojC6TNwws', author: 'CodeWithChris', platform: 'YouTube' },
      ],
      modules: [
        {
          title: 'Swift & SwiftUI',
          lessons: [
            setupLesson('Swift & iOS Development', 'swift-ios-development', 'swift',
              `1. Install [Xcode](https://developer.apple.com/xcode/) from the Mac App Store
2. Open Xcode → Create New Project → iOS App → SwiftUI
3. Run in the simulator (⌘+R)`,
              `import SwiftUI\n\nstruct ContentView: View {\n    var body: some View {\n        Text("Hello, iOS!")\n            .font(.largeTitle)\n            .padding()\n    }\n}`,
              `import SwiftUI\n\nstruct ContentView: View {\n    var body: some View {\n        Text("Hello, iOS!")\n            .font(.largeTitle)\n            .padding()\n    }\n}`,
              '- macOS with Xcode installed (Mac only)'
            ),
            lesson('SwiftUI Views & State', 'swiftui-views-state', `# SwiftUI Views & State

## Declarative UI

\`\`\`swift
struct ContentView: View {
    var body: some View {
        VStack(spacing: 16) {
            Text("Welcome")
                .font(.largeTitle)
                .foregroundColor(.blue)
            
            Image(systemName: "star.fill")
                .font(.system(size: 48))
                .foregroundColor(.yellow)
            
            Button("Get Started") {
                print("Button tapped!")
            }
            .buttonStyle(.borderedProminent)
        }
        .padding()
    }
}
\`\`\`

## @State — Local State

\`\`\`swift
struct Counter: View {
    @State private var count = 0
    
    var body: some View {
        VStack {
            Text("Count: \\(count)")
                .font(.title)
            
            HStack {
                Button("−") { count -= 1 }
                Button("+") { count += 1 }
            }
            .buttonStyle(.bordered)
        }
    }
}
\`\`\`

## @Binding — Shared State

\`\`\`swift
struct ToggleView: View {
    @Binding var isOn: Bool
    
    var body: some View {
        Toggle("Enable feature", isOn: $isOn)
    }
}
\`\`\`

## Lists & Navigation

\`\`\`swift
struct ItemListView: View {
    let items = ["Python", "Swift", "Rust"]
    
    var body: some View {
        NavigationStack {
            List(items, id: \\.self) { item in
                NavigationLink(item) {
                    Text("Details for \\(item)")
                }
            }
            .navigationTitle("Languages")
        }
    }
}
\`\`\``, {
              starterCode: `// Swift basics\nlet name: String = "Swift"\nlet version: Int = 5\nlet isModern: Bool = true\n\nprint("\\(name) \\(version) - Modern: \\(isModern)")\n\n// Arrays\nvar fruits = ["Apple", "Banana", "Cherry"]\nfruits.append("Date")\nfruits.forEach { print("Fruit: \\($0)") }\n\n// Optionals\nvar nickname: String? = nil\nlet displayName = nickname ?? "Anonymous"\nprint("Hello, \\(displayName)!")\n\n// Structs\nstruct User {\n    let name: String\n    var score: Int\n    \n    mutating func addPoints(_ points: Int) {\n        score += points\n    }\n}\n\nvar user = User(name: "Alice", score: 100)\nuser.addPoints(50)\nprint("\\(user.name): \\(user.score) points")`,
              solutionCode: `let name = "Swift"\nlet version = 5\nprint("\\(name) \\(version)")\n\nvar fruits = ["Apple", "Banana", "Cherry"]\nfruits.append("Date")\nfruits.forEach { print("Fruit: \\($0)") }\n\nvar nickname: String? = nil\nlet displayName = nickname ?? "Anonymous"\nprint("Hello, \\(displayName)!")\n\nstruct User {\n    let name: String\n    var score: Int\n    mutating func addPoints(_ points: Int) { score += points }\n}\nvar user = User(name: "Alice", score: 100)\nuser.addPoints(50)\nprint("\\(user.name): \\(user.score)")`,
              codeLanguage: 'swift',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('SwiftUI Quiz', [
                mcq('What property wrapper manages local state in SwiftUI?', '@State', ['@Binding', '@Published'], '@State declares mutable state local to a view.'),
                mcq('What does `$variable` (dollar sign) do in SwiftUI?', 'Creates a binding to the state variable', ['Gets the value', 'Makes it optional'], 'The `$` prefix creates a two-way binding for use with controls.'),
                trueFalse('SwiftUI uses a declarative approach to building UIs.', true, 'You describe what the UI should look like, and SwiftUI handles updates.'),
              ]),
            }),
          ],
        },
      ],
    },
  ],
};
