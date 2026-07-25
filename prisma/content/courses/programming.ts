import type { CategoryDef } from '../types';
import { mcq, trueFalse, quiz, lesson, setupLesson } from '../helpers';

export const programmingCategory: CategoryDef = {
  name: 'Programming',
  slug: 'programming',
  description: 'Learn programming fundamentals and master popular languages from Python to Rust.',
  icon: '💻',
  color: '#8b5cf6',
  sortOrder: 1,
  courses: [
    // ━━━━━━━━━━━━━━━━━━━ PYTHON FOR BEGINNERS ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Python for Beginners',
      slug: 'python-for-beginners',
      description: 'Start your coding journey with Python — the most beginner-friendly language. Learn variables, control flow, functions, OOP, and file handling through hands-on exercises.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'youtube', title: 'Python Full Course for Beginners', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc', author: 'Programming with Mosh', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Python for Everybody Specialization', url: 'https://www.youtube.com/watch?v=8DvywoWv6fI', author: 'Dr. Chuck (freeCodeCamp)', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Python OOP Tutorial (Classes & Instances)', url: 'https://www.youtube.com/watch?v=ZDa-Z5JzLYM', author: 'Corey Schafer', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Python 100 Days of Code Bootcamp', url: 'https://www.youtube.com/watch?v=mDKM-JtU4cM', author: 'Angela Yu', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Python Projects for Beginners', url: 'https://www.youtube.com/watch?v=pdy3nh1168U', author: 'Kylie Ying', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'Automate the Boring Stuff with Python', url: 'https://automatetheboringstuff.com/', author: 'Al Sweigart' },
        { resourceType: 'article', title: 'Python 3.12 Official Tutorial & Documentation', url: 'https://docs.python.org/3/tutorial/', author: 'Python Software Foundation' },
        { resourceType: 'cheatsheet', title: 'Python Quick Reference Cheat Sheet', url: 'https://www.pythoncheatsheet.org/', author: 'pythoncheatsheet.org' },
        { resourceType: 'article', title: 'Real Python In-Depth Tutorials', url: 'https://realpython.com/', author: 'Real Python Team' },
        { resourceType: 'cheatsheet', title: 'Python Syntax & Data Structures Reference', url: 'https://quickref.me/python', author: 'QuickRef' },
      ],
      modules: [
        {
          title: 'Module 1: Fundamentals & Control Flow',
          lessons: [
            setupLesson('Python for Beginners', 'python-for-beginners', 'python',
              `1. Download Python 3 from [python.org](https://python.org/downloads/)\n2. Check "Add Python to PATH"\n3. Run: \`python --version\`\n4. Install VS Code and the Python extension`,
              `print("Hello, Code Mentor!")`,
              `print("Hello, Code Mentor!")`,
              '- Python 3.10+ recommended'
            ),
            lesson('Variables & Data Types', 'variables-data-types', `# Variables & Data Types\n\nPython is dynamically typed: \`name = "Alice"\`, \`age = 25\`, \`height = 5.7\`, \`is_student = True\`.`, {
              starterCode: `name = "Alice"\nage = 25\nheight = 5.7\nis_student = True\n\nprint(f"Hi, {name}! Age: {age}")`,
              solutionCode: `name = "Alice"\nage = 25\nheight = 5.7\nis_student = True\n\nprint(f"Hi, {name}! Age: {age}")`,
              codeLanguage: 'python',
              quiz: quiz('Variables Quiz', [
                mcq('What type is `x = 3.14`?', 'float', ['int', 'str'], 'Decimals are floats in Python.'),
              ]),
            }),
            lesson('Input & Output (`input()`, `print()`)', 'input-output', `# Input & Output\n\nRead input with \`input()\` and format output with f-strings: \`f"Hello {name}"\`.`, {
              starterCode: `name = input("Enter name: ")\nprint(f"Welcome, {name}!")`,
              solutionCode: `name = "User"\nprint(f"Welcome, {name}!")`,
              codeLanguage: 'python',
              quiz: quiz('Input Quiz', [
                mcq('What data type does `input()` always return?', 'str', ['int', 'float'], '`input()` returns user input as a string.'),
              ]),
            }),
            lesson('Conditional Statements (`if/elif/else`)', 'conditionals', `# Conditionals\n\nBranch logic using \`if\`, \`elif\`, and \`else\` blocks with logical operators (\`and\`, \`or\`, \`not\`).`, {
              starterCode: `score = 85\nif score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"\nelse:\n    grade = "C"\nprint(grade)`,
              solutionCode: `score = 85\nif score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"\nelse:\n    grade = "C"\nprint(grade)`,
              codeLanguage: 'python',
              quiz: quiz('Conditionals Quiz', [
                mcq('What keyword follows `if` for additional conditions?', 'elif', ['else if', 'elseif'], 'Python uses `elif`.'),
              ]),
            }),
            lesson('For Loops & `range()`', 'for-loops', `# For Loops\n\nIterate over sequences and ranges using \`for i in range(5):\`.`, {
              starterCode: `for i in range(1, 6):\n    print(f"Count: {i}")`,
              solutionCode: `for i in range(1, 6):\n    print(f"Count: {i}")`,
              codeLanguage: 'python',
              quiz: quiz('For Loops Quiz', [
                mcq('What numbers does `range(3)` generate?', '0, 1, 2', ['1, 2, 3', '0, 1, 2, 3'], '`range(n)` generates integers from 0 to n-1.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Data Structures & Functions',
          lessons: [
            lesson('While Loops & Loop Control (`break`, `continue`)', 'while-loops', `# While Loops\n\nExecute code while a condition is True. Use \`break\` to exit and \`continue\` to skip iterations.`, {
              starterCode: `count = 0\nwhile count < 5:\n    count += 1\n    if count == 3:\n        continue\n    print(count)`,
              solutionCode: `count = 0\nwhile count < 5:\n    count += 1\n    if count == 3:\n        continue\n    print(count)`,
              codeLanguage: 'python',
              quiz: quiz('While Quiz', [
                mcq('What does `break` do inside a loop?', 'Exits the loop immediately', ['Skips current iteration', 'Restarts loop'], '`break` terminates loop execution.'),
              ]),
            }),
            lesson('Lists & List Operations', 'lists', `# Lists\n\nMutable ordered sequences: \`fruits = ["apple", "banana"]\`. Use \`append()\`, \`pop()\`, and slicing.`, {
              starterCode: `fruits = ["apple", "banana"]\nfruits.append("cherry")\nprint(fruits[0:2])`,
              solutionCode: `fruits = ["apple", "banana"]\nfruits.append("cherry")\nprint(fruits[0:2])`,
              codeLanguage: 'python',
              quiz: quiz('Lists Quiz', [
                mcq('How do you add an element to the end of a list?', 'list.append(item)', ['list.add(item)', 'list.push(item)'], '`append()` appends items to lists.'),
              ]),
            }),
            lesson('Tuples & Sets', 'tuples-sets', `# Tuples & Sets\n\nTuples are immutable (\`(1, 2)\`). Sets hold unique elements (\`{1, 2, 3}\`).`, {
              starterCode: `coords = (10, 20)\nunique_nums = {1, 2, 2, 3}\nprint(unique_nums)`,
              solutionCode: `coords = (10, 20)\nunique_nums = {1, 2, 2, 3}\nprint(unique_nums)`,
              codeLanguage: 'python',
              quiz: quiz('Tuples Sets Quiz', [
                trueFalse('Sets automatically remove duplicate values.', true),
              ]),
            }),
            lesson('Dictionaries & Key-Value Pairs', 'dictionaries', `# Dictionaries\n\nKey-value mapping: \`user = {"name": "Alice", "age": 25}\`. Access via \`user["name"]\` or \`user.get()\`.`, {
              starterCode: `user = {"name": "Alice", "role": "Dev"}\nprint(user.get("role"))`,
              solutionCode: `user = {"name": "Alice", "role": "Dev"}\nprint(user.get("role"))`,
              codeLanguage: 'python',
              quiz: quiz('Dict Quiz', [
                mcq('Which method safely retrieves a dict value without throwing KeyError?', 'dict.get(key)', ['dict.find(key)', 'dict.fetch(key)'], '`.get()` returns None if key is absent.'),
              ]),
            }),
            lesson('Defining Functions (`def`, arguments, returns)', 'functions-basics', `# Functions\n\nDefine reusable code blocks with \`def greet(name="User"):\` and return values with \`return\`.`, {
              starterCode: `def add(a, b):\n    return a + b\n\nprint(add(5, 10))`,
              solutionCode: `def add(a, b):\n    return a + b\n\nprint(add(5, 10))`,
              codeLanguage: 'python',
              quiz: quiz('Functions Quiz', [
                mcq('What keyword returns a value from a function?', 'return', ['output', 'yield'], '`return` sends back values to callers.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: Modules, Files & Object-Oriented Programming',
          lessons: [
            lesson('List Comprehensions', 'list-comprehensions', `# List Comprehensions\n\nConcise syntax for creating lists: \`squares = [x**2 for x in range(10) if x % 2 == 0]\`.`, {
              starterCode: `squares = [x**2 for x in range(10) if x % 2 == 0]\nprint(squares)`,
              solutionCode: `squares = [x**2 for x in range(10) if x % 2 == 0]\nprint(squares)`,
              codeLanguage: 'python',
              quiz: quiz('Comprehensions Quiz', [
                trueFalse('List comprehensions combine looping and filtering in a single line.', true),
              ]),
            }),
            lesson('File Reading & Writing (`with open()`)', 'file-handling', `# File I/O\n\nRead and write files safely using \`with open("file.txt", "w") as f:\`.`, {
              starterCode: `with open("notes.txt", "w") as f:\n    f.write("Code Mentor Notes")\nprint("File written")`,
              solutionCode: `with open("notes.txt", "w") as f:\n    f.write("Code Mentor Notes")\nprint("File written")`,
              codeLanguage: 'python',
              quiz: quiz('File I/O Quiz', [
                mcq('Why use the `with` statement for opening files?', 'It automatically closes the file when finished', ['It makes files read-only', 'It compresses files'], '`with` manages resources automatically.'),
              ]),
            }),
            lesson('Exception Handling (`try/except/finally`)', 'exception-handling', `# Exception Handling\n\nCatch errors gracefully: \`try ... except ValueError as e: ... finally:\`.`, {
              starterCode: `try:\n    num = int("abc")\nexcept ValueError:\n    print("Invalid integer string!")`,
              solutionCode: `try:\n    num = int("abc")\nexcept ValueError:\n    print("Invalid integer string!")`,
              codeLanguage: 'python',
              quiz: quiz('Exception Quiz', [
                mcq('Which block executes regardless of whether an exception occurred?', 'finally', ['except', 'else'], '`finally` always executes.'),
              ]),
            }),
            lesson('Object-Oriented Programming (Classes & `__init__`)', 'oop-basics', `# Classes & Objects\n\nDefine classes with constructors: \`class Person: def __init__(self, name): self.name = name\`.`, {
              starterCode: `class Student:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        print(f"I am {self.name}")\n\ns = Student("Alice")\ns.speak()`,
              solutionCode: `class Student:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        print(f"I am {self.name}")\n\ns = Student("Alice")\ns.speak()`,
              codeLanguage: 'python',
              quiz: quiz('OOP Quiz', [
                mcq('What does `self` represent inside a class method?', 'The current instance of the class', ['The class constructor', 'Global scope'], '`self` binds attributes to the specific object instance.'),
              ]),
            }),
            lesson('Python Capstone Project: Command-Line Task Tracker', 'python-capstone', `# Python Capstone\n\nBuild a CLI task manager that adds, lists, and saves tasks to a JSON file.`, {
              starterCode: `import json\n\ntasks = [{"id": 1, "task": "Learn Python", "done": True}]\nprint(json.dumps(tasks, indent=2))`,
              solutionCode: `import json\n\ntasks = [{"id": 1, "task": "Learn Python", "done": True}]\nprint(json.dumps(tasks, indent=2))`,
              codeLanguage: 'python',
              quiz: quiz('Python Capstone Quiz', [
                mcq('Which standard library module serializes Python dictionaries to JSON format?', 'json', ['sys', 'os'], 'The `json` module parses and serializes JSON.'),
              ]),
            }),
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ JAVA FUNDAMENTALS ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Java Fundamentals',
      slug: 'java-fundamentals',
      description: 'Master Java syntax, object-oriented principles, collections framework, exception handling, and modern Java features.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'youtube', title: 'Java Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=eIrMbAQSU34', author: 'Programming with Mosh', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Java Full Course in 12 Hours', url: 'https://www.youtube.com/watch?v=A74TOX803D0', author: 'Bro Code', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Java Object Oriented Programming (OOP) Tutorial', url: 'https://www.youtube.com/watch?v=IUqCuwFYEIM', author: 'FreeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Java Collections Framework Deep Dive', url: 'https://www.youtube.com/watch?v=viTHc_4Xflk', author: 'Telusko', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Java Streams API & Functional Programming', url: 'https://www.youtube.com/watch?v=1OpAuz54B34', author: 'Amigoscode', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'Official Java Documentation & API Specs', url: 'https://docs.oracle.com/en/java/', author: 'Oracle' },
        { resourceType: 'article', title: 'Baeldung Java Tutorials & Best Practices', url: 'https://www.baeldung.com/', author: 'Baeldung Team' },
        { resourceType: 'cheatsheet', title: 'Java Syntax Quick Reference Cheat Sheet', url: 'https://introcs.cs.princeton.edu/java/11cheatsheet/', author: 'Princeton University' },
        { resourceType: 'article', title: 'GeeksforGeeks Java Programming Language', url: 'https://www.geeksforgeeks.org/java/', author: 'GeeksforGeeks' },
        { resourceType: 'cheatsheet', title: 'Java Collections & Streams Cheat Sheet', url: 'https://quickref.me/java', author: 'QuickRef' },
      ],
      modules: [
        {
          title: 'Module 1: Java Basics & Syntax',
          lessons: [
            setupLesson('Java Fundamentals', 'java-fundamentals', 'java',
              `1. Install OpenJDK 17 or 21\n2. Set \`JAVA_HOME\` environment variable\n3. Run \`java -version\` and \`javac -version\`\n4. Install VS Code Java Extension Pack`,
              `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}`,
              `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}`
            ),
            lesson('Primitive Data Types & Variables', 'java-variables', `# Data Types in Java\n\nJava is strongly typed: \`int age = 25;\`, \`double pi = 3.14159;\`, \`boolean isReady = true;\`, \`char grade = 'A';\`.`, {
              starterCode: `public class Main {\n    public static void main(String[] args) {\n        int age = 25;\n        double score = 98.5;\n        System.out.println("Age: " + age + ", Score: " + score);\n    }\n}`,
              solutionCode: `public class Main {\n    public static void main(String[] args) {\n        int age = 25;\n        double score = 98.5;\n        System.out.println("Age: " + age + ", Score: " + score);\n    }\n}`,
              codeLanguage: 'java',
              quiz: quiz('Java Types Quiz', [
                mcq('Which primitive type holds double-precision floating point numbers?', 'double', ['float', 'int'], '`double` is default for decimal numbers in Java.'),
              ]),
            }),
            lesson('Control Flow (`if/else`, `switch`)', 'java-control-flow', `# Control Flow\n\nBranch code execution using \`if-else\` statements and modern pattern-matching \`switch\` expressions.`, {
              starterCode: `public class Main {\n    public static void main(String[] args) {\n        int score = 85;\n        if (score >= 90) System.out.println("A");\n        else System.out.println("B");\n    }\n}`,
              solutionCode: `public class Main {\n    public static void main(String[] args) {\n        int score = 85;\n        if (score >= 90) System.out.println("A");\n        else System.out.println("B");\n    }\n}`,
              codeLanguage: 'java',
              quiz: quiz('Java Control Flow Quiz', [
                trueFalse('Java requires boolean expressions in if conditions (e.g. `if (x > 0)`).', true),
              ]),
            }),
            lesson('Loops (`for`, `while`, `do-while`)', 'java-loops', `# Loops\n\nIterate with indexed \`for\` loops and enhanced for-each loops: \`for (String item : list)\`.`, {
              starterCode: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            System.out.println("Count: " + i);\n        }\n    }\n}`,
              solutionCode: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            System.out.println("Count: " + i);\n        }\n    }\n}`,
              codeLanguage: 'java',
              quiz: quiz('Java Loops Quiz', [
                mcq('What loop guarantees execution at least once?', 'do-while', ['for', 'while'], '`do-while` checks condition at the end of the block.'),
              ]),
            }),
            lesson('Methods & Overloading', 'java-methods', `# Methods\n\nDefine static and instance methods with explicit parameter types and return signatures.`, {
              starterCode: `public class Main {\n    static int add(int a, int b) {\n        return a + b;\n    }\n    public static void main(String[] args) {\n        System.out.println(add(10, 20));\n    }\n}`,
              solutionCode: `public class Main {\n    static int add(int a, int b) {\n        return a + b;\n    }\n    public static void main(String[] args) {\n        System.out.println(add(10, 20));\n    }\n}`,
              codeLanguage: 'java',
              quiz: quiz('Java Methods Quiz', [
                mcq('What allows two methods in the same class to share a name?', 'Method overloading (different parameter signatures)', ['Method overriding', 'Inheritance'], 'Overloading requires different parameter counts or types.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Object-Oriented Java',
          lessons: [
            lesson('Classes, Constructors & Encapsulation', 'java-classes', `# Encapsulation\n\nUse \`private\` fields with public getters and setters to protect internal state.`, {
              starterCode: `public class Person {\n    private String name;\n    public Person(String name) { this.name = name; }\n    public String getName() { return name; }\n}`,
              solutionCode: `public class Person {\n    private String name;\n    public Person(String name) { this.name = name; }\n    public String getName() { return name; }\n}`,
              codeLanguage: 'java',
              quiz: quiz('Encapsulation Quiz', [
                mcq('Which access modifier restricts visibility to the defining class only?', 'private', ['public', 'protected'], '`private` fields are accessible only within the class.'),
              ]),
            }),
            lesson('Inheritance & Polymorphism', 'java-inheritance', `# Inheritance\n\nExtend base classes using \`extends\` and override virtual methods with \`@Override\`.`, {
              starterCode: `class Animal { void speak() { System.out.println("Animal sound"); } }\nclass Dog extends Animal { @Override void speak() { System.out.println("Bark!"); } }`,
              solutionCode: `class Animal { void speak() { System.out.println("Animal sound"); } }\nclass Dog extends Animal { @Override void speak() { System.out.println("Bark!"); } }`,
              codeLanguage: 'java',
              quiz: quiz('Inheritance Quiz', [
                mcq('What keyword establishes inheritance in Java?', 'extends', ['implements', 'inherits'], 'Classes extend superclasses in Java.'),
              ]),
            }),
            lesson('Interfaces & Abstract Classes', 'java-interfaces', `# Interfaces\n\nDefine contracts using \`interface\` and implement them across multiple class hierarchies.`, {
              starterCode: `interface Printable { void print(); }\nclass Document implements Printable {\n    public void print() { System.out.println("Printing doc..."); }\n}`,
              solutionCode: `interface Printable { void print(); }\nclass Document implements Printable {\n    public void print() { System.out.println("Printing doc..."); }\n}`,
              codeLanguage: 'java',
              quiz: quiz('Interface Quiz', [
                trueFalse('A Java class can implement multiple interfaces.', true),
              ]),
            }),
            lesson('Exception Handling (`try/catch/throw`)', 'java-exceptions', `# Exceptions\n\nHandle checked and unchecked exceptions with \`try-catch-finally\` blocks.`, {
              starterCode: `public class Main {\n    public static void main(String[] args) {\n        try {\n            int res = 10 / 0;\n        } catch (ArithmeticException e) {\n            System.out.println("Caught division by zero!");\n        }\n    }\n}`,
              solutionCode: `public class Main {\n    public static void main(String[] args) {\n        try {\n            int res = 10 / 0;\n        } catch (ArithmeticException e) {\n            System.out.println("Caught division by zero!");\n        }\n    }\n}`,
              codeLanguage: 'java',
              quiz: quiz('Java Exception Quiz', [
                mcq('Which class is the superclass of all errors and exceptions in Java?', 'Throwable', ['Exception', 'Error'], '`Throwable` is the root of Java exception hierarchy.'),
              ]),
            }),
            lesson('Java Collections Framework (`List`, `Set`, `Map`)', 'java-collections', `# Collections\n\nUse \`ArrayList\`, \`HashSet\`, and \`HashMap\` to manage grouped objects in memory.`, {
              starterCode: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = new ArrayList<>();\n        list.add("Java");\n        System.out.println(list.get(0));\n    }\n}`,
              solutionCode: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = new ArrayList<>();\n        list.add("Java");\n        System.out.println(list.get(0));\n    }\n}`,
              codeLanguage: 'java',
              quiz: quiz('Collections Quiz', [
                mcq('Which interface provides key-value pair lookups?', 'Map', ['List', 'Set'], '`Map` maps keys to values.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: Modern Java & Streams',
          lessons: [
            lesson('Java Lambdas & Functional Interfaces', 'java-lambdas', `# Lambdas\n\nWrite compact anonymous functions using lambda expressions: \`(a, b) -> a + b\`.`, {
              starterCode: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Alice", "Bob");\n        names.forEach(name -> System.out.println(name));\n    }\n}`,
              solutionCode: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Alice", "Bob");\n        names.forEach(name -> System.out.println(name));\n    }\n}`,
              codeLanguage: 'java',
              quiz: quiz('Lambda Quiz', [
                trueFalse('Lambdas can be used wherever a functional interface (single abstract method) is expected.', true),
              ]),
            }),
            lesson('Java Streams API (`filter`, `map`, `collect`)', 'java-streams', `# Streams API\n\nProcess sequences of elements declaratively: \`list.stream().filter(...).collect(...)\`.`, {
              starterCode: `import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> nums = List.of(1, 2, 3, 4, 5);\n        List<Integer> evens = nums.stream().filter(n -> n % 2 == 0).collect(Collectors.toList());\n        System.out.println(evens);\n    }\n}`,
              solutionCode: `import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> nums = List.of(1, 2, 3, 4, 5);\n        List<Integer> evens = nums.stream().filter(n -> n % 2 == 0).collect(Collectors.toList());\n        System.out.println(evens);\n    }\n}`,
              codeLanguage: 'java',
              quiz: quiz('Streams Quiz', [
                mcq('Is `filter()` an intermediate or terminal operation in Java Streams?', 'Intermediate', ['Terminal', 'Final'], '`filter()` returns a new Stream (intermediate operation).'),
              ]),
            }),
            lesson('Java Records & Pattern Matching', 'java-records', `# Java Records\n\nDefine immutable data carrier classes concisely with \`record Point(int x, int y) {}\`.`, {
              starterCode: `public record User(String username, String email) {}\npublic class Main {\n    public static void main(String[] args) {\n        User user = new User("scott", "scott@example.com");\n        System.out.println(user.username());\n    }\n}`,
              solutionCode: `public record User(String username, String email) {}\npublic class Main {\n    public static void main(String[] args) {\n        User user = new User("scott", "scott@example.com");\n        System.out.println(user.username());\n    }\n}`,
              codeLanguage: 'java',
              quiz: quiz('Records Quiz', [
                trueFalse('Java Records automatically generate constructor, getters, equals(), hashCode(), and toString().', true),
              ]),
            }),
            lesson('Multithreading & Concurrency Basics', 'java-multithreading', `# Threads\n\nCreate background threads with \`Thread\` or \`ExecutorService\`.`, {
              starterCode: `public class Main {\n    public static void main(String[] args) {\n        Thread thread = new Thread(() -> System.out.println("Running in background thread!"));\n        thread.start();\n    }\n}`,
              solutionCode: `public class Main {\n    public static void main(String[] args) {\n        Thread thread = new Thread(() -> System.out.println("Running in background thread!"));\n        thread.start();\n    }\n}`,
              codeLanguage: 'java',
              quiz: quiz('Threads Quiz', [
                mcq('Which method initiates thread execution in Java?', 'thread.start()', ['thread.run()', 'thread.execute()'], '`start()` spawns a new OS thread and invokes `run()`.'),
              ]),
            }),
            lesson('Java Capstone: Student Management CLI System', 'java-capstone', `# Java Capstone\n\nBuild a complete CLI app managing student records using classes, collections, and streams.`, {
              starterCode: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("=== STUDENT MANAGEMENT SYSTEM ===");\n    }\n}`,
              solutionCode: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("=== STUDENT MANAGEMENT SYSTEM ===");\n    }\n}`,
              codeLanguage: 'java',
              quiz: quiz('Java Capstone Quiz', [
                mcq('What design paradigm organizing code into objects and classes is Java based on?', 'Object-Oriented Programming (OOP)', ['Procedural Programming', 'Functional Assembly'], 'Java is built around Object-Oriented design.'),
              ]),
            }),
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ C++ MASTERCLASS ━━━━━━━━━━━━━━━━━━━
    {
      title: 'C++ Masterclass',
      slug: 'cpp-masterclass',
      description: 'Master low-level programming in C++ — pointers, manual memory management, RAII, templates, and STL algorithms.',
      difficulty: 'advanced',
      language: 'en',
      estimatedHours: 25,
      resources: [
        { resourceType: 'youtube', title: 'C++ Full Course for Beginners', url: 'https://www.youtube.com/watch?v=vLnPwxZdW4Y', author: 'FreeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'The Cherno C++ Series (Best C++ Tutorials)', url: 'https://www.youtube.com/watch?v=18c3MTX0PK0', author: 'The Cherno', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'C++ Pointers & Memory Management Explained', url: 'https://www.youtube.com/watch?v=2ypU3lvwTbg', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Modern C++ (C++11 to C++20) Features', url: 'https://www.youtube.com/watch?v=PocJ5jXv8No', author: 'CppCon', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'C++ Standard Template Library (STL) Crash Course', url: 'https://www.youtube.com/watch?v=g-1cn3m7kCg', author: 'Luv', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'cppreference.com (Official C++ Reference)', url: 'https://en.cppreference.com/w/', author: 'cppreference' },
        { resourceType: 'article', title: 'ISO C++ FAQ & Guidelines', url: 'https://isocpp.org/faq', author: 'Standard C++ Foundation' },
        { resourceType: 'cheatsheet', title: 'C++ Syntax & STL Cheat Sheet', url: 'https://quickref.me/cpp', author: 'QuickRef' },
        { resourceType: 'article', title: 'Modern C++ Core Guidelines by Bjarne Stroustrup', url: 'https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines', author: 'Bjarne Stroustrup' },
        { resourceType: 'cheatsheet', title: 'C++ STL Containers Quick Reference', url: 'https://cheatsheet.md/cpp-cheat-sheet/', author: 'CheatSheet.md' },
      ],
      modules: [
        {
          title: 'Module 1: C++ Core Syntax & Pointers',
          lessons: [
            setupLesson('C++ Masterclass', 'cpp-masterclass', 'cpp',
              `1. Install GCC/G++ or Clang compiler\n2. On Windows: Install MSYS2 or Visual Studio C++\n3. Run \`g++ --version\`\n4. Compile with: \`g++ -std=c++20 main.cpp -o main\``,
              `#include <iostream>\nint main() {\n    std::cout << "Hello, C++20!" << std::endl;\n    return 0;\n}`,
              `#include <iostream>\nint main() {\n    std::cout << "Hello, C++20!" << std::endl;\n    return 0;\n}`
            ),
            lesson('Primitive Types & Console I/O (`std::cin`, `std::cout`)', 'cpp-io', `# C++ Console I/O\n\nUse \`std::cout <<\` for printing and \`std::cin >>\` for reading formatted user input.`, {
              starterCode: `#include <iostream>\nint main() {\n    int x = 10;\n    std::cout << "Value of x: " << x << std::endl;\n    return 0;\n}`,
              solutionCode: `#include <iostream>\nint main() {\n    int x = 10;\n    std::cout << "Value of x: " << x << std::endl;\n    return 0;\n}`,
              codeLanguage: 'cpp',
              quiz: quiz('CPP I/O Quiz', [
                mcq('Which stream insertion operator is used with `std::cout`?', '<<', ['>>', '<='], '`<<` inserts data into output streams.'),
              ]),
            }),
            lesson('Pointers & Memory Addresses (`*`, `&`)', 'cpp-pointers', `# Pointers\n\nPointers store memory addresses of variables: \`int* ptr = &val;\`. Dereference using \`*ptr\`.`, {
              starterCode: `#include <iostream>\nint main() {\n    int val = 42;\n    int* ptr = &val;\n    std::cout << "Value: " << *ptr << ", Address: " << ptr << std::endl;\n    return 0;\n}`,
              solutionCode: `#include <iostream>\nint main() {\n    int val = 42;\n    int* ptr = &val;\n    std::cout << "Value: " << *ptr << ", Address: " << ptr << std::endl;\n    return 0;\n}`,
              codeLanguage: 'cpp',
              quiz: quiz('Pointers Quiz', [
                mcq('What operator gets the memory address of a variable?', '&', ['*', '->'], '`&` is the address-of operator.'),
              ]),
            }),
            lesson('References vs Pointers', 'cpp-references', `# References\n\nReferences (\`int& ref = val;\`) act as immutable aliases for existing objects without nullability.`, {
              starterCode: `#include <iostream>\nvoid increment(int& num) { num++; }\nint main() {\n    int x = 5;\n    increment(x);\n    std::cout << "x: " << x << std::endl;\n    return 0;\n}`,
              solutionCode: `#include <iostream>\nvoid increment(int& num) { num++; }\nint main() {\n    int x = 5;\n    increment(x);\n    std::cout << "x: " << x << std::endl;\n    return 0;\n}`,
              codeLanguage: 'cpp',
              quiz: quiz('References Quiz', [
                trueFalse('References in C++ cannot be reassigned to refer to another object after initialization.', true),
              ]),
            }),
            lesson('Dynamic Memory Allocation (`new`, `delete`)', 'cpp-dynamic-memory', `# Dynamic Memory\n\nAllocate heap memory using \`new\` and free memory using \`delete\` to prevent memory leaks.`, {
              starterCode: `#include <iostream>\nint main() {\n    int* arr = new int[5];\n    arr[0] = 100;\n    delete[] arr;\n    std::cout << "Memory freed successfully" << std::endl;\n    return 0;\n}`,
              solutionCode: `#include <iostream>\nint main() {\n    int* arr = new int[5];\n    arr[0] = 100;\n    delete[] arr;\n    std::cout << "Memory freed successfully" << std::endl;\n    return 0;\n}`,
              codeLanguage: 'cpp',
              quiz: quiz('Dynamic Memory Quiz', [
                mcq('What keyword frees heap arrays allocated with `new int[N]`?', 'delete[]', ['free()', 'delete'], '`delete[]` must be used for dynamic array deallocations.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Object-Oriented C++ & RAII',
          lessons: [
            lesson('Classes, Destructors & RAII', 'cpp-classes-raii', `# RAII\n\nResource Acquisition Is Initialization: Manage resources via constructor/destructor pairs automatically.`, {
              starterCode: `#include <iostream>\nclass FileHandler {\npublic:\n    FileHandler() { std::cout << "File opened\\n"; }\n    ~FileHandler() { std::cout << "File closed\\n"; }\n};\nint main() { FileHandler fh; return 0; }`,
              solutionCode: `#include <iostream>\nclass FileHandler {\npublic:\n    FileHandler() { std::cout << "File opened\\n"; }\n    ~FileHandler() { std::cout << "File closed\\n"; }\n};\nint main() { FileHandler fh; return 0; }`,
              codeLanguage: 'cpp',
              quiz: quiz('RAII Quiz', [
                mcq('When is a C++ class destructor called?', 'Automatically when the object goes out of scope', ['Manually when garbage collected', 'Never'], 'Destructors run when stack scope ends.'),
              ]),
            }),
            lesson('Copy & Move Semantics (Rule of 5)', 'cpp-move-semantics', `# Move Semantics\n\nTransfer resource ownership without copying using rvalue references (\`T&&\`) and \`std::move\`.`, {
              starterCode: `#include <iostream>\n#include <utility>\nint main() {\n    std::string str1 = "Hello";\n    std::string str2 = std::move(str1);\n    std::cout << "str2: " << str2 << std::endl;\n    return 0;\n}`,
              solutionCode: `#include <iostream>\n#include <utility>\nint main() {\n    std::string str1 = "Hello";\n    std::string str2 = std::move(str1);\n    std::cout << "str2: " << str2 << std::endl;\n    return 0;\n}`,
              codeLanguage: 'cpp',
              quiz: quiz('Move Quiz', [
                mcq('What does `std::move()` do?', 'Casts an lvalue to an rvalue reference enabling move semantics', ['Physically copies memory', 'Deletes string'], '`std::move` converts lvalues to rvalue references.'),
              ]),
            }),
            lesson('Smart Pointers (`std::unique_ptr`, `std::shared_ptr`)', 'cpp-smart-pointers', `# Smart Pointers\n\nEliminate manual delete calls using \`std::unique_ptr\` and reference-counted \`std::shared_ptr\`.`, {
              starterCode: `#include <iostream>\n#include <memory>\nint main() {\n    auto ptr = std::make_unique<int>(42);\n    std::cout << *ptr << std::endl;\n    return 0;\n}`,
              solutionCode: `#include <iostream>\n#include <memory>\nint main() {\n    auto ptr = std::make_unique<int>(42);\n    std::cout << *ptr << std::endl;\n    return 0;\n}`,
              codeLanguage: 'cpp',
              quiz: quiz('Smart Pointers Quiz', [
                mcq('Which smart pointer enforces exclusive single ownership?', 'std::unique_ptr', ['std::shared_ptr', 'std::weak_ptr'], '`unique_ptr` cannot be copied, only moved.'),
              ]),
            }),
            lesson('Operator Overloading', 'cpp-operator-overloading', `# Operator Overloading\n\nCustomize standard mathematical and output operators for user-defined structs and classes.`, {
              starterCode: `#include <iostream>\nstruct Point {\n    int x, y;\n    Point operator+(const Point& other) const {\n        return {x + other.x, y + other.y};\n    }\n};\nint main() { Point p1{1, 2}, p2{3, 4}; Point p3 = p1 + p2; std::cout << p3.x << "," << p3.y << std::endl; }`,
              solutionCode: `#include <iostream>\nstruct Point {\n    int x, y;\n    Point operator+(const Point& other) const {\n        return {x + other.x, y + other.y};\n    }\n};\nint main() { Point p1{1, 2}, p2{3, 4}; Point p3 = p1 + p2; std::cout << p3.x << "," << p3.y << std::endl; }`,
              codeLanguage: 'cpp',
              quiz: quiz('Operator Overloading Quiz', [
                trueFalse('Operator overloading allows defining custom behavior for binary operators like `+` and `==`.', true),
              ]),
            }),
            lesson('Inheritance & Virtual Functions (`virtual`, `override`)', 'cpp-polymorphism', `# Polymorphism\n\nEnable runtime dynamic dispatch by marking base methods with \`virtual\` and derived methods with \`override\`.`, {
              starterCode: `#include <iostream>\nclass Base { public: virtual void show() { std::cout << "Base\\n"; } };\nclass Derived : public Base { public: void show() override { std::cout << "Derived\\n"; } };\nint main() { Base* b = new Derived(); b->show(); delete b; }`,
              solutionCode: `#include <iostream>\nclass Base { public: virtual void show() { std::cout << "Base\\n"; } };\nclass Derived : public Base { public: void show() override { std::cout << "Derived\\n"; } };\nint main() { Base* b = new Derived(); b->show(); delete b; }`,
              codeLanguage: 'cpp',
              quiz: quiz('CPP Polymorphism Quiz', [
                mcq('What table does C++ use under the hood for dynamic virtual method dispatch?', 'vtable (Virtual Method Table)', ['hash map', 'array list'], 'The vtable holds pointers to virtual functions.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: Templates & STL',
          lessons: [
            lesson('Function & Class Templates', 'cpp-templates', `# Templates\n\nGeneric programming with templates: \`template <typename T> T maxVal(T a, T b)\`.`, {
              starterCode: `#include <iostream>\ntemplate <typename T>\nT add(T a, T b) { return a + b; }\nint main() { std::cout << add(3, 4) << " " << add(2.5, 1.5) << std::endl; }`,
              solutionCode: `#include <iostream>\ntemplate <typename T>\nT add(T a, T b) { return a + b; }\nint main() { std::cout << add(3, 4) << " " << add(2.5, 1.5) << std::endl; }`,
              codeLanguage: 'cpp',
              quiz: quiz('Templates Quiz', [
                trueFalse('C++ templates perform compile-time type instantiation.', true),
              ]),
            }),
            lesson('STL Containers (`std::vector`, `std::unordered_map`)', 'cpp-stl-containers', `# STL Containers\n\nUse dynamic arrays (\`std::vector\`) and hash maps (\`std::unordered_map\`) for high performance.`, {
              starterCode: `#include <iostream>\n#include <vector>\n#include <unordered_map>\nint main() {\n    std::vector<int> vec = {1, 2, 3};\n    vec.push_back(4);\n    std::cout << "Size: " << vec.size() << std::endl;\n}`,
              solutionCode: `#include <iostream>\n#include <vector>\n#include <unordered_map>\nint main() {\n    std::vector<int> vec = {1, 2, 3};\n    vec.push_back(4);\n    std::cout << "Size: " << vec.size() << std::endl;\n}`,
              codeLanguage: 'cpp',
              quiz: quiz('STL Containers Quiz', [
                mcq('What is the average time complexity of element insertion in `std::unordered_map`?', 'O(1)', ['O(N)', 'O(log N)'], 'Unordered map is backed by a hash table.'),
              ]),
            }),
            lesson('STL Algorithms (`std::sort`, `std::transform`)', 'cpp-stl-algorithms', `# STL Algorithms\n\nPerform fast sorting, searching, and transformations using \`<algorithm>\`.`, {
              starterCode: `#include <iostream>\n#include <vector>\n#include <algorithm>\nint main() {\n    std::vector<int> v = {4, 1, 3, 2};\n    std::sort(v.begin(), v.end());\n    for(int x : v) std::cout << x << " ";\n}`,
              solutionCode: `#include <iostream>\n#include <vector>\n#include <algorithm>\nint main() {\n    std::vector<int> v = {4, 1, 3, 2};\n    std::sort(v.begin(), v.end());\n    for(int x : v) std::cout << x << " ";\n}`,
              codeLanguage: 'cpp',
              quiz: quiz('STL Algorithms Quiz', [
                mcq('What algorithm sorts elements in a range in O(N log N) time?', 'std::sort', ['std::find', 'std::fill'], '`std::sort` uses introsort.'),
              ]),
            }),
            lesson('C++20 Concepts & Ranges', 'cpp20-concepts', `# C++20 Concepts\n\nConstrain template parameters explicitly with concepts: \`template <std::integral T>\`.`, {
              starterCode: `#include <iostream>\n#include <concepts>\ntemplate <std::integral T>\nT addInts(T a, T b) { return a + b; }\nint main() { std::cout << addInts(10, 20) << std::endl; }`,
              solutionCode: `#include <iostream>\n#include <concepts>\ntemplate <std::integral T>\nT addInts(T a, T b) { return a + b; }\nint main() { std::cout << addInts(10, 20) << std::endl; }`,
              codeLanguage: 'cpp',
              quiz: quiz('C++20 Concepts Quiz', [
                trueFalse('C++20 Concepts provide clear compile-time error messages for template constraints.', true),
              ]),
            }),
            lesson('C++ Capstone: High-Performance Memory Pool Manager', 'cpp-capstone', `# C++ Capstone\n\nBuild a custom high-speed memory arena allocator in C++.`, {
              starterCode: `#include <iostream>\nint main() {\n    std::cout << "=== HIGH-PERFORMANCE MEMORY POOL ===" << std::endl;\n    return 0;\n}`,
              solutionCode: `#include <iostream>\nint main() {\n    std::cout << "=== HIGH-PERFORMANCE MEMORY POOL ===" << std::endl;\n    return 0;\n}`,
              codeLanguage: 'cpp',
              quiz: quiz('CPP Capstone Quiz', [
                mcq('Why build a custom arena memory allocator?', 'To eliminate dynamic heap allocation overhead in tight performance loops', ['To format strings', 'To compress files'], 'Arena allocators pre-allocate continuous memory blocks for ultra-fast allocations.'),
              ]),
            }),
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ RUST SYSTEMS PROGRAMMING ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Rust Systems Programming',
      slug: 'rust-systems-programming',
      description: 'Master memory safety without garbage collection — ownership, borrowing, lifetimes, pattern matching, and concurrent Rust.',
      difficulty: 'advanced',
      language: 'en',
      estimatedHours: 25,
      resources: [
        { resourceType: 'youtube', title: 'Rust Crash Course for Beginners', url: 'https://www.youtube.com/watch?v=zF34dRivLOw', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Rust Language Tutorial in 100 Seconds', url: 'https://www.youtube.com/watch?v=5C_HPTJg5ek', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Rust Ownership, Borrowing & Lifetimes Explained', url: 'https://www.youtube.com/watch?v=VFIOSWy93Hg', author: 'Jon Gjengset', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Ultimate Rust Programming Masterclass', url: 'https://www.youtube.com/watch?v=2hXNkHuplSU', author: 'FreeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Building Async Web Applications in Rust (Tokio & Axum)', url: 'https://www.youtube.com/watch?v=XZtlD_m59sA', author: 'Brooks Builds', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'The Rust Programming Language (Official Book)', url: 'https://doc.rust-lang.org/book/', author: 'Steve Klabnik & Carol Nichols' },
        { resourceType: 'article', title: 'Rust by Example Interactive Guide', url: 'https://doc.rust-lang.org/rust-by-example/', author: 'Rust Community' },
        { resourceType: 'cheatsheet', title: 'Rust Syntax & Ownership Cheat Sheet', url: 'https://cheats.rs/', author: 'cheats.rs' },
        { resourceType: 'article', title: 'Awesome Rust Repositories & Libraries', url: 'https://github.com/rust-unofficial/awesome-rust', author: 'Rust Unofficial' },
        { resourceType: 'cheatsheet', title: 'Rust Standard Library API Docs', url: 'https://doc.rust-lang.org/std/', author: 'Rust Team' },
      ],
      modules: [
        {
          title: 'Module 1: Ownership & Borrowing',
          lessons: [
            setupLesson('Rust Systems Programming', 'rust-systems-programming', 'rust',
              `1. Install Rust via rustup: \`curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\`\n2. Verify installation: \`rustc --version\` and \`cargo --version\`\n3. Create project: \`cargo new hello_rust\`\n4. Run: \`cargo run\``,
              `fn main() {\n    println!("Hello, Rust!");\n}`,
              `fn main() {\n    println!("Hello, Rust!");\n}`
            ),
            lesson('Variables & Immutability (`let`, `mut`)', 'rust-variables', `# Variables in Rust\n\nVariables are immutable by default: \`let x = 5;\`. Make mutable with \`let mut x = 5;\`.`, {
              starterCode: `fn main() {\n    let mut score = 10;\n    score += 5;\n    println!("Score: {}", score);\n}`,
              solutionCode: `fn main() {\n    let mut score = 10;\n    score += 5;\n    println!("Score: {}", score);\n}`,
              codeLanguage: 'rust',
              quiz: quiz('Rust Variables Quiz', [
                mcq('Are Rust variables mutable or immutable by default?', 'Immutable', ['Mutable', 'Static'], 'Rust enforces immutability by default for safety.'),
              ]),
            }),
            lesson('Ownership Rules & Move Semantics', 'rust-ownership', `# Ownership\n\n1. Each value in Rust has an owner.\n2. There can only be one owner at a time.\n3. When the owner goes out of scope, the value is dropped.`, {
              starterCode: `fn main() {\n    let s1 = String::from("hello");\n    let s2 = s1; // Ownership moves to s2\n    println!("{}", s2);\n}`,
              solutionCode: `fn main() {\n    let s1 = String::from("hello");\n    let s2 = s1;\n    println!("{}", s2);\n}`,
              codeLanguage: 'rust',
              quiz: quiz('Rust Ownership Quiz', [
                mcq('What happens to `s1` after `let s2 = s1;` for a heap String?', 's1 is invalidated (moved)', ['s1 is copied', 's2 becomes a pointer to s1'], 'Ownership moves to s2, rendering s1 invalid.'),
              ]),
            }),
            lesson('Borrowing & References (`&`, `&mut`)', 'rust-borrowing', `# Borrowing\n\nBorrow values without taking ownership using references: \`&T\` (immutable) or \`&mut T\` (mutable).`, {
              starterCode: `fn calculate_length(s: &String) -> usize {\n    s.len()\n}\nfn main() {\n    let s = String::from("hello");\n    let len = calculate_length(&s);\n    println!("Length of '{}' is {}.", s, len);\n}`,
              solutionCode: `fn calculate_length(s: &String) -> usize {\n    s.len()\n}\nfn main() {\n    let s = String::from("hello");\n    let len = calculate_length(&s);\n    println!("Length of '{}' is {}.", s, len);\n}`,
              codeLanguage: 'rust',
              quiz: quiz('Rust Borrowing Quiz', [
                mcq('How many mutable references to a piece of data can exist at once in a scope?', 'Exactly one', ['Unlimited', 'Two'], 'Rust enforces Aliasing XOR Mutability.'),
              ]),
            }),
            lesson('Slices & String Types (`&str`, `String`)', 'rust-slices', `# Slices\n\nSlices reference a contiguous sequence of elements in a collection without taking ownership.`, {
              starterCode: `fn main() {\n    let s = String::from("hello world");\n    let word = &s[0..5];\n    println!("Slice: {}", word);\n}`,
              solutionCode: `fn main() {\n    let s = String::from("hello world");\n    let word = &s[0..5];\n    println!("Slice: {}", word);\n}`,
              codeLanguage: 'rust',
              quiz: quiz('Rust Slices Quiz', [
                trueFalse('`&str` is an immutable string slice pointing to UTF-8 data.', true),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Structs, Enums & Pattern Matching',
          lessons: [
            lesson('Structs & Implementation Blocks (`impl`)', 'rust-structs', `# Structs\n\nDefine custom data structures and attach methods using \`impl StructName {}\`.`, {
              starterCode: `struct User {\n    username: String,\n    active: bool,\n}\nimpl User {\n    fn new(name: &str) -> Self {\n        Self { username: name.to_string(), active: true }\n    }\n}\nfn main() {\n    let u = User::new("scott");\n    println!("{}", u.username);\n}`,
              solutionCode: `struct User {\n    username: String,\n    active: bool,\n}\nimpl User {\n    fn new(name: &str) -> Self {\n        Self { username: name.to_string(), active: true }\n    }\n}\nfn main() {\n    let u = User::new("scott");\n    println!("{}", u.username);\n}`,
              codeLanguage: 'rust',
              quiz: quiz('Rust Structs Quiz', [
                mcq('Where are methods associated with a struct declared in Rust?', 'Inside an `impl` block', ['Inside the struct definition', 'In main.rs'], '`impl` blocks house methods.'),
              ]),
            }),
            lesson('Enums & The `Option` / `Result` Types', 'rust-enums', `# Enums & Error Types\n\nRust handles optionality with \`Option<T>\` (\`Some\`, \`None\`) and errors with \`Result<T, E>\` (\`Ok\`, \`Err\`).`, {
              starterCode: `fn divide(a: f64, b: f64) -> Option<f64> {\n    if b == 0.0 { None } else { Some(a / b) }\n}\nfn main() {\n    match divide(10.0, 2.0) {\n        Some(val) => println!("Result: {}", val),\n        None => println!("Cannot divide by zero!"),\n    }\n}`,
              solutionCode: `fn divide(a: f64, b: f64) -> Option<f64> {\n    if b == 0.0 { None } else { Some(a / b) }\n}\nfn main() {\n    match divide(10.0, 2.0) {\n        Some(val) => println!("Result: {}", val),\n        None => println!("Cannot divide by zero!"),\n    }\n}`,
              codeLanguage: 'rust',
              quiz: quiz('Rust Enums Quiz', [
                mcq('Does Rust have a `null` value?', 'No, Rust uses `Option<T>` instead', ['Yes, null pointers exist', 'Only in debug mode'], 'Rust avoids null pointers by using explicit `Option<T>`.'),
              ]),
            }),
            lesson('Pattern Matching (`match`, `if let`)', 'rust-pattern-matching', `# Pattern Matching\n\nExhaustive control flow matching using \`match\` expressions and \`if let\` shortcuts.`, {
              starterCode: `fn main() {\n    let number = 7;\n    match number {\n        1 => println!("One"),\n        7 => println!("Seven!"),\n        _ => println!("Other"),\n    }\n}`,
              solutionCode: `fn main() {\n    let number = 7;\n    match number {\n        1 => println!("One"),\n        7 => println!("Seven!"),\n        _ => println!("Other"),\n    }\n}`,
              codeLanguage: 'rust',
              quiz: quiz('Pattern Matching Quiz', [
                trueFalse('Rust `match` arms must be exhaustive, covering all possible enum variants or values.', true),
              ]),
            }),
            lesson('Traits & Shared Behavior (`trait`)', 'rust-traits', `# Traits\n\nDefine shared behavior across types using traits (similar to interfaces).`, {
              starterCode: `pub trait Summary {\n    fn summarize(&self) -> String;\n}\nstruct Article { title: String }\nimpl Summary for Article {\n    fn summarize(&self) -> String { format!("Title: {}", self.title) }\n}\nfn main() { let a = Article { title: String::from("Rust Rules") }; println!("{}", a.summarize()); }`,
              solutionCode: `pub trait Summary {\n    fn summarize(&self) -> String;\n}\nstruct Article { title: String }\nimpl Summary for Article {\n    fn summarize(&self) -> String { format!("Title: {}", self.title) }\n}\nfn main() { let a = Article { title: String::from("Rust Rules") }; println!("{}", a.summarize()); }`,
              codeLanguage: 'rust',
              quiz: quiz('Traits Quiz', [
                mcq('What keyword defines shared behavior across Rust types?', 'trait', ['interface', 'abstract'], 'Traits define shared behavior interfaces.'),
              ]),
            }),
            lesson('Lifetimes & Generic Lifetime Annotations (`\'a`)', 'rust-lifetimes', `# Lifetimes\n\nHelp the Rust borrow checker ensure references remain valid for a specified scope (\`\'a\`).`, {
              starterCode: `fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {\n    if x.len() > y.len() { x } else { y }\n}\nfn main() {\n    let str1 = "long string";\n    let str2 = "short";\n    println!("Longest: {}", longest(str1, str2));\n}`,
              solutionCode: `fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {\n    if x.len() > y.len() { x } else { y }\n}\nfn main() {\n    let str1 = "long string";\n    let str2 = "short";\n    println!("Longest: {}", longest(str1, str2));\n}`,
              codeLanguage: 'rust',
              quiz: quiz('Lifetimes Quiz', [
                mcq('What is the main purpose of Rust lifetime annotations?', 'To ensure returned references do not outlive the data they point to', ['To increase loop speed', 'To allocate memory'], 'Lifetimes prevent dangling references at compile time.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: Concurrency & Cargo Ecosystem',
          lessons: [
            lesson('Fearless Concurrency (`std::thread`, channels)', 'rust-concurrency', `# Concurrency\n\nSpawn lightweight OS threads and pass messages via MPSC channels (\`std::sync::mpsc\`).`, {
              starterCode: `use std::thread;\nuse std::sync::mpsc;\nfn main() {\n    let (tx, rx) = mpsc::channel();\n    thread::spawn(move || {\n        tx.send("Hello from thread!").unwrap();\n    });\n    println!("{}", rx.recv().unwrap());\n}`,
              solutionCode: `use std::thread;\nuse std::sync::mpsc;\nfn main() {\n    let (tx, rx) = mpsc::channel();\n    thread::spawn(move || {\n        tx.send("Hello from thread!").unwrap();\n    });\n    println!("{}", rx.recv().unwrap());\n}`,
              codeLanguage: 'rust',
              quiz: quiz('Rust Concurrency Quiz', [
                mcq('What does MPSC stand for in Rust channels?', 'Multi-Producer, Single-Consumer', ['Multi-Processor, Single-Core', 'Memory Protection System Code'], 'MPSC allows multiple senders and one receiver.'),
              ]),
            }),
            lesson('Shared State Concurrency (`Arc<Mutex<T>>`)', 'rust-arc-mutex', `# Arc & Mutex\n\nShare mutable state safely across threads using Atomic Reference Counting (\`Arc\`) and \`Mutex\`.`, {
              starterCode: `use std::sync::{Arc, Mutex};\nuse std::thread;\nfn main() {\n    let counter = Arc::new(Mutex::new(0));\n    let counter_clone = Arc::clone(&counter);\n    let handle = thread::spawn(move || {\n        let mut num = counter_clone.lock().unwrap();\n        *num += 1;\n    });\n    handle.join().unwrap();\n    println!("Result: {}", *counter.lock().unwrap());\n}`,
              solutionCode: `use std::sync::{Arc, Mutex};\nuse std::thread;\nfn main() {\n    let counter = Arc::new(Mutex::new(0));\n    let counter_clone = Arc::clone(&counter);\n    let handle = thread::spawn(move || {\n        let mut num = counter_clone.lock().unwrap();\n        *num += 1;\n    });\n    handle.join().unwrap();\n    println!("Result: {}", *counter.lock().unwrap());\n}`,
              codeLanguage: 'rust',
              quiz: quiz('Arc Mutex Quiz', [
                trueFalse('`Arc` allows thread-safe reference counting across thread boundaries.', true),
              ]),
            }),
            lesson('Async Rust with Tokio (`async/await`)', 'rust-tokio-async', `# Async Rust\n\nWrite asynchronous non-blocking applications using Tokio runtime and \`async/await\`.`, {
              starterCode: `#[tokio::main]\nasync fn main() {\n    println!("Executing async task...");\n}`,
              solutionCode: `#[tokio::main]\nasync fn main() {\n    println!("Executing async task...");\n}`,
              codeLanguage: 'rust',
              quiz: quiz('Async Rust Quiz', [
                mcq('What popular asynchronous runtime is widely used in Rust web development?', 'Tokio', ['React', 'Spring'], 'Tokio is the industry-standard async event loop for Rust.'),
              ]),
            }),
            lesson('Cargo Packages, Crates & `Cargo.toml`', 'rust-cargo-ecosystem', `# Cargo Ecosystem\n\nManage dependencies and packages with \`Cargo.toml\` and crates.io repository.`, {
              starterCode: `[package]\nname = "my_app"\nversion = "0.1.0"\nedition = "2021"\n\n[dependencies]\nserde = { version = "1.0", features = ["derive"] }`,
              solutionCode: `[package]\nname = "my_app"\nversion = "0.1.0"\nedition = "2021"\n\n[dependencies]\nserde = { version = "1.0", features = ["derive"] }`,
              codeLanguage: 'toml',
              quiz: quiz('Cargo Quiz', [
                mcq('What is the official Rust package registry?', 'crates.io', ['npm.org', 'pypi.org'], 'crates.io hosts Rust community crates.'),
              ]),
            }),
            lesson('Rust Capstone Project: High-Speed Multithreaded Web Server', 'rust-capstone', `# Rust Capstone\n\nBuild a concurrent multi-threaded TCP web server in Rust using thread pools and safe ownership.`, {
              starterCode: `use std::net::TcpListener;\nfn main() {\n    let listener = TcpListener::bind("127.0.0.1:7878").unwrap();\n    println!("Server listening on port 7878...");\n}`,
              solutionCode: `use std::net::TcpListener;\nfn main() {\n    let listener = TcpListener::bind("127.0.0.1:7878").unwrap();\n    println!("Server listening on port 7878...");\n}`,
              codeLanguage: 'rust',
              quiz: quiz('Rust Capstone Quiz', [
                mcq('What core guarantee does Rust offer at compile time?', 'Memory safety without garbage collection', ['Automatic web deployment', 'Built-in SQL database'], 'Rust eliminates data races and memory bugs at compile time.'),
              ]),
            }),
          ]
        }
      ]
    }
  ]
};
