import type { CategoryDef } from '../types';
import { mcq, trueFalse, quiz, lesson, setupLesson } from '../helpers';

export const programmingCategory: CategoryDef = {
  name: 'Main Programming Languages',
  slug: 'programming',
  description: 'Master popular programming languages from Python and Java to C++, Rust, Go, Kotlin, and PHP.',
  icon: '💻',
  color: '#8b5cf6',
  sortOrder: 2,
  courses: [
    // ━━━━━━━━━━━━━━━━━━━ PYTHON ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Python',
      slug: 'python',
      description: 'Master Python fundamentals, control structures, string methods, data operations, functions, lists, file handling, audio, and OOP.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 30,
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
        { resourceType: 'cheatsheet', title: 'Python Syntax & Data Structures Reference', url: 'https://quickref.me/python', author: 'QuickRef' }
      ],
      modules: [
        {
          title: 'Section 1: Basics',
          lessons: [
            setupLesson('Python', 'python', 'python',
              '1. Download Python 3 from python.org\n2. Run python --version\n3. Set up VS Code',
              'print("Hello, Python!")',
              'print("Hello, Python!")'
            ),
            lesson('Getting started', 'getting-started-python',
              '# Getting Started with Python\n\nPython is a high-level, interpreted programming language designed for readability and dynamic typing.',
              { starterCode: 'print("Welcome to Python!")', solutionCode: 'print("Welcome to Python!")', codeLanguage: 'python', quiz: quiz('Getting Started Quiz', [mcq('What type of language is Python?', 'Interpreted', ['Compiled to machine code', 'Assembly'])]) }
            ),
            lesson('Execute Python scripts', 'execute-python-scripts',
              '# Execute Python Scripts\n\nRun scripts using `python script.py` or interactively inside an IPYthon/Jupyter environment.',
              { starterCode: 'import sys\nprint(sys.version)', solutionCode: 'import sys\nprint(sys.version)', codeLanguage: 'python', quiz: quiz('Script Execution Quiz', [mcq('How do you execute a Python file named app.py?', 'python app.py', ['run app.py', 'compile app.py'])]) }
            ),
            lesson('Variables and Types', 'variables-and-types',
              '# Variables and Types\n\nPython dynamically infers types for integers, floats, strings, and booleans.',
              { starterCode: 'x = 10\ny = 3.14\nname = "Python"\nprint(type(x), type(y), type(name))', solutionCode: 'x = 10\ny = 3.14\nname = "Python"\nprint(type(x), type(y), type(name))', codeLanguage: 'python', quiz: quiz('Variables Quiz', [mcq('What function returns the type of a variable?', 'type()', ['typeof()', 'get_type()'])]) }
            ),
            lesson('Python Strings (With Examples)', 'python-strings-examples',
              '# Python Strings (With Examples)\n\nStrings are immutable sequences of Unicode characters enclosed in single, double, or triple quotes.',
              { starterCode: 'text = "Hello World"\nprint(text[0:5])', solutionCode: 'text = "Hello World"\nprint(text[0:5])', codeLanguage: 'python', quiz: quiz('String Quiz', [trueFalse('Python strings can be modified in-place.', false)]) }
            ),
            lesson('Python String replace() Method', 'python-string-replace-method',
              '# Python String replace() Method\n\n`str.replace(old, new, count)` returns a copy of the string with occurrences of substring `old` replaced by `new`.',
              { starterCode: 's = "I love Java"\nprint(s.replace("Java", "Python"))', solutionCode: 's = "I love Java"\nprint(s.replace("Java", "Python"))', codeLanguage: 'python', quiz: quiz('Replace Quiz', [mcq('What does `"abc".replace("b", "x")` return?', '"axc"', ['"abc"', '"x"'])]) }
            ),
            lesson('join() function in Python', 'join-function-in-python',
              '# join() Function in Python\n\n`separator.join(iterable)` joins elements of a string list into a single delimited string.',
              { starterCode: 'words = ["Python", "is", "awesome"]\nprint(" ".join(words))', solutionCode: 'words = ["Python", "is", "awesome"]\nprint(" ".join(words))', codeLanguage: 'python', quiz: quiz('Join Quiz', [mcq('What delimiter joins `["a", "b"]` with `"-".join()`?', '"a-b"', ['"ab"', '"a b"'])]) }
            ),
            lesson('String find() in Python', 'string-find-in-python',
              '# String find() in Python\n\n`str.find(sub)` returns the lowest index where substring `sub` is found, or `-1` if not present.',
              { starterCode: 'text = "Code Mentor"\nprint(text.find("Mentor"))', solutionCode: 'text = "Code Mentor"\nprint(text.find("Mentor"))', codeLanguage: 'python', quiz: quiz('Find Quiz', [mcq('What does `find()` return if the substring is missing?', '-1', ['False', 'None'])]) }
            ),
            lesson('Python String split() Method', 'python-string-split-method',
              '# Python String split() Method\n\n`str.split(sep)` splits a string into a list using the specified separator (default whitespace).',
              { starterCode: 'data = "apple,banana,orange"\nprint(data.split(","))', solutionCode: 'data = "apple,banana,orange"\nprint(data.split(","))', codeLanguage: 'python', quiz: quiz('Split Quiz', [mcq('What does `"a b c".split()` return?', '["a", "b", "c"]', ['"abc"', '["a b c"]'])]) }
            ),
            lesson('Generate Random Numbers in Python', 'generate-random-numbers-python',
              '# Generate Random Numbers in Python\n\nUse the built-in `random` module: `random.randint(a, b)`, `random.choice()`, and `random.random()`.',
              { starterCode: 'import random\nnum = random.randint(1, 100)\nprint(f"Random number: {num}")', solutionCode: 'import random\nnum = random.randint(1, 100)\nprint(f"Random number: {num}")', codeLanguage: 'python', quiz: quiz('Random Quiz', [mcq('Which module generates random numbers in Python?', 'random', ['math', 'sys'])]) }
            ),
            lesson('How to read keyboard-input?', 'how-to-read-keyboard-input',
              '# Reading Keyboard Input\n\nUse `input(prompt)` to read text entered by the user from standard input as a string.',
              { starterCode: 'user_input = "User"\nprint(f"Hello, {user_input}!")', solutionCode: 'user_input = "User"\nprint(f"Hello, {user_input}!")', codeLanguage: 'python', quiz: quiz('Input Quiz', [mcq('What type does `input()` return?', 'str', ['int', 'bytes'])]) }
            )
          ]
        },
        {
          title: 'Section 2: Control Structure',
          lessons: [
            lesson('Conditional Branching (if, elif, else)', 'python-conditionals', '# Conditionals in Python\n\nControl code flow using `if`, `elif`, and `else` statements with boolean expressions.', { starterCode: 'age = 20\nif age >= 18:\n    print("Adult")\nelse:\n    print("Minor")', solutionCode: 'age = 20\nif age >= 18:\n    print("Adult")\nelse:\n    print("Minor")', codeLanguage: 'python', quiz: quiz('Conditionals Quiz', [mcq('Which keyword handles additional branch checks?', 'elif', ['elseif', 'else if'])]) }),
            lesson('For Loops & Iteration', 'python-for-loops', '# For Loops in Python\n\nIterate over lists, ranges, tuples, and dictionaries using `for item in sequence:`.', { starterCode: 'for i in range(5):\n    print(f"Index: {i}")', solutionCode: 'for i in range(5):\n    print(f"Index: {i}")', codeLanguage: 'python', quiz: quiz('For Loop Quiz', [mcq('What values does `range(4)` generate?', '0, 1, 2, 3', ['1, 2, 3, 4', '0, 1, 2, 3, 4'])]) }),
            lesson('While Loops & Condition Checks', 'python-while-loops', '# While Loops\n\nRepeat execution while a condition remains True.', { starterCode: 'n = 3\nwhile n > 0:\n    print(n)\n    n -= 1', solutionCode: 'n = 3\nwhile n > 0:\n    print(n)\n    n -= 1', codeLanguage: 'python', quiz: quiz('While Loop Quiz', [trueFalse('A while loop runs as long as its condition is True.', true)]) }),
            lesson('Loop Control: break & continue', 'python-loop-control', '# Loop Control\n\n`break` terminates the enclosing loop; `continue` skips the remaining body statements of the current iteration.', { starterCode: 'for i in range(10):\n    if i == 5:\n        break\n    print(i)', solutionCode: 'for i in range(10):\n    if i == 5:\n        break\n    print(i)', codeLanguage: 'python', quiz: quiz('Control Quiz', [mcq('Which statement exits a loop immediately?', 'break', ['continue', 'pass'])]) }),
            lesson('Match Case Statements (Python 3.10+)', 'python-match-case', '# Match Case Pattern Matching\n\nUse structural pattern matching with `match subject:` and `case pattern:`.', { starterCode: 'command = "start"\nmatch command:\n    case "start": print("Starting...")\n    case "stop": print("Stopping...")\n    case _: print("Unknown")', solutionCode: 'command = "start"\nmatch command:\n    case "start": print("Starting...")\n    case "stop": print("Stopping...")\n    case _: print("Unknown")', codeLanguage: 'python', quiz: quiz('Match Case Quiz', [mcq('What wildcard pattern matches any fallback in match case?', '_', ['*', 'default'])]) })
          ]
        },
        {
          title: 'Section 3: Data and operations',
          lessons: [
            lesson('Numbers & Arithmetic Operators', 'python-numbers-operators', '# Numbers & Arithmetic\n\nPerform operations using addition (+), subtraction (-), multiplication (*), float division (/), floor division (//), modulo (%), and exponentiation (**).', { starterCode: 'print(10 // 3, 10 % 3, 2 ** 4)', solutionCode: 'print(10 // 3, 10 % 3, 2 ** 4)', codeLanguage: 'python', quiz: quiz('Numbers Quiz', [mcq('What does `10 // 3` return in Python?', '3', ['3.333', '1'])]) }),
            lesson('Booleans & Logical Operators', 'python-booleans-logical', '# Booleans & Logical Operators\n\nEvaluate conditions using `and`, `or`, and `not`.', { starterCode: 'a, b = True, False\nprint(a and not b)', solutionCode: 'a, b = True, False\nprint(a and not b)', codeLanguage: 'python', quiz: quiz('Boolean Quiz', [trueFalse('`True or False` evaluates to True.', true)]) }),
            lesson('Dictionaries & Key-Value Pairs', 'python-dictionaries', '# Dictionaries in Python\n\nHash map key-value pairs stored in mutable `{key: value}` mappings.', { starterCode: 'user = {"name": "Alice", "role": "Dev"}\nprint(user["name"])', solutionCode: 'user = {"name": "Alice", "role": "Dev"}\nprint(user["name"])', codeLanguage: 'python', quiz: quiz('Dict Quiz', [mcq('How do you retrieve values safely without key errors?', 'dict.get(key)', ['dict.find(key)', 'dict.search(key)'])]) }),
            lesson('Tuples & Sets', 'python-tuples-sets', '# Tuples & Sets\n\nTuples `(a, b)` are immutable ordered sequences; Sets `{a, b}` store unique unordered items.', { starterCode: 'unique_items = {1, 2, 2, 3}\nprint(unique_items)', solutionCode: 'unique_items = {1, 2, 2, 3}\nprint(unique_items)', codeLanguage: 'python', quiz: quiz('Sets Quiz', [trueFalse('Sets permit duplicate elements.', false)]) }),
            lesson('Bitwise Operations in Python', 'python-bitwise-operations', '# Bitwise Operations\n\nManipulate individual bits using `&` (AND), `|` (OR), `^` (XOR), `~` (NOT), `<<` (left shift), and `>>` (right shift).', { starterCode: 'a, b = 0b1010, 0b1100\nprint(bin(a & b))', solutionCode: 'a, b = 0b1010, 0b1100\nprint(bin(a & b))', codeLanguage: 'python', quiz: quiz('Bitwise Quiz', [mcq('Which operator performs bitwise XOR?', '^', ['&', '|'])]) })
          ]
        },
        {
          title: 'Section 4: Functions',
          lessons: [
            lesson('Defining Functions & Return Values', 'python-defining-functions', '# Defining Functions\n\nDeclare functions using `def function_name(params):` and specify outputs with `return`.', { starterCode: 'def add(a, b):\n    return a + b\nprint(add(5, 7))', solutionCode: 'def add(a, b):\n    return a + b\nprint(add(5, 7))', codeLanguage: 'python', quiz: quiz('Function Quiz', [mcq('Which keyword defines a function in Python?', 'def', ['func', 'function'])]) }),
            lesson('Default & Keyword Arguments', 'python-function-arguments', '# Default & Keyword Arguments\n\nAssign default parameter values and call functions with explicit argument names.', { starterCode: 'def greet(name="Guest"):\n    print(f"Hello {name}")\ngreet()\ngreet("Alice")', solutionCode: 'def greet(name="Guest"):\n    print(f"Hello {name}")\ngreet()\ngreet("Alice")', codeLanguage: 'python', quiz: quiz('Args Quiz', [trueFalse('Default arguments must follow positional arguments.', true)]) }),
            lesson('Arbitrary Arguments (*args, **kwargs)', 'python-args-kwargs', '# *args and **kwargs\n\nAccept variable numbers of positional (`*args`) and keyword (`**kwargs`) arguments.', { starterCode: 'def summarize(*args, **kwargs):\n    print(args, kwargs)\nsummarize(1, 2, status="ok")', solutionCode: 'def summarize(*args, **kwargs):\n    print(args, kwargs)\nsummarize(1, 2, status="ok")', codeLanguage: 'python', quiz: quiz('Args/Kwargs Quiz', [mcq('What data type does `**kwargs` receive inside the function?', 'Dictionary', ['Tuple', 'List'])]) }),
            lesson('Lambda Functions & Higher-Order Functions', 'python-lambdas', '# Lambda & Anonymous Functions\n\nWrite one-line anonymous functions using `lambda args: expression`. Combine with `map()`, `filter()`.', { starterCode: 'square = lambda x: x ** 2\nprint(square(4))', solutionCode: 'square = lambda x: x ** 2\nprint(square(4))', codeLanguage: 'python', quiz: quiz('Lambda Quiz', [mcq('What keyword creates anonymous functions in Python?', 'lambda', ['anonymous', 'inline'])]) }),
            lesson('Decorators & Generators', 'python-decorators-generators', '# Decorators & Generators\n\nDecorators wrap function behavior; Generators yield lazy data streams using `yield`.', { starterCode: 'def gen():\n    yield 1\n    yield 2\nfor val in gen():\n    print(val)', solutionCode: 'def gen():\n    yield 1\n    yield 2\nfor val in gen():\n    print(val)', codeLanguage: 'python', quiz: quiz('Gen Quiz', [mcq('Which keyword creates a generator yield point?', 'yield', ['return', 'emit'])]) })
          ]
        },
        {
          title: 'Section 5: Lists',
          lessons: [
            lesson('List Creation & Indexing', 'python-list-creation-indexing', '# List Creation & Indexing\n\nStore dynamic arrays of elements. Index from `0` to `len - 1` and negative indices `-1` to `-len`.', { starterCode: 'items = ["a", "b", "c"]\nprint(items[0], items[-1])', solutionCode: 'items = ["a", "b", "c"]\nprint(items[0], items[-1])', codeLanguage: 'python', quiz: quiz('List Index Quiz', [mcq('What does `items[-1]` access?', 'The last element', ['The first element', 'Out of bounds error'])]) }),
            lesson('List Slicing & Operations', 'python-list-slicing', '# List Slicing\n\nExtract sub-lists using `list[start:stop:step]` syntax.', { starterCode: 'nums = [0, 1, 2, 3, 4, 5]\nprint(nums[1:4])', solutionCode: 'nums = [0, 1, 2, 3, 4, 5]\nprint(nums[1:4])', codeLanguage: 'python', quiz: quiz('Slice Quiz', [mcq('Is the `stop` index included in Python slices?', 'No', ['Yes', 'Only for positive step'])]) }),
            lesson('List Methods (append, extend, pop, remove)', 'python-list-methods', '# List Methods\n\nMutate lists using `append()`, `extend()`, `insert()`, `pop()`, and `remove()`.', { starterCode: 'arr = [1, 2]\narr.append(3)\narr.pop()\nprint(arr)', solutionCode: 'arr = [1, 2]\narr.append(3)\narr.pop()\nprint(arr)', codeLanguage: 'python', quiz: quiz('List Method Quiz', [mcq('Which method removes an element by value?', 'remove()', ['pop()', 'delete()'])]) }),
            lesson('List Comprehensions', 'python-list-comprehensions', '# List Comprehensions\n\nConstruct lists concisely: `[expression for item in iterable if condition]`.', { starterCode: 'evens = [x for x in range(10) if x % 2 == 0]\nprint(evens)', solutionCode: 'evens = [x for x in range(10) if x % 2 == 0]\nprint(evens)', codeLanguage: 'python', quiz: quiz('Comprehension Quiz', [trueFalse('List comprehensions replace map() and filter() loops in clean Python code.', true)]) }),
            lesson('Sorting Lists & Custom Keys', 'python-sorting-lists', '# Sorting Lists\n\nUse `list.sort()` for in-place sorting or `sorted(iterable)` with custom key functions.', { starterCode: 'words = ["banana", "apple", "cherry"]\nwords.sort(key=len)\nprint(words)', solutionCode: 'words = ["banana", "apple", "cherry"]\nwords.sort(key=len)\nprint(words)', codeLanguage: 'python', quiz: quiz('Sort Quiz', [mcq('Which function returns a new sorted list without modifying original?', 'sorted()', ['sort()', 'order()'])]) })
          ]
        },
        {
          title: 'Section 6: File Handling',
          lessons: [
            lesson('Opening & Reading Text Files', 'python-reading-files', '# Reading Files\n\nUse `open(filepath, "r")` or context manager `with open(...) as f:` to safely read text files.', { starterCode: 'with open("sample.txt", "w") as f:\n    f.write("Hello File")\nwith open("sample.txt", "r") as f:\n    print(f.read())', solutionCode: 'with open("sample.txt", "w") as f:\n    f.write("Hello File")\nwith open("sample.txt", "r") as f:\n    print(f.read())', codeLanguage: 'python', quiz: quiz('File Read Quiz', [mcq('Why is `with open()` preferred?', 'It automatically closes the file upon exit', ['It encrypts data', 'It runs faster'])]) }),
            lesson('Writing & Appending to Files', 'python-writing-files', '# Writing & Appending\n\nUse mode `"w"` to overwrite or `"a"` to append text to files.', { starterCode: 'with open("log.txt", "a") as f:\n    f.write("Log entry\\n")', solutionCode: 'with open("log.txt", "a") as f:\n    f.write("Log entry\\n")', codeLanguage: 'python', quiz: quiz('Write Mode Quiz', [mcq('Which mode appends data to an existing file?', '"a"', ['"w"', '"r"'])]) }),
            lesson('Working with JSON Data', 'python-json-processing', '# JSON Processing\n\nSerialize and deserialize structured JSON data using `json.dumps()` and `json.loads()`.', { starterCode: 'import json\ndata = {"status": 200, "ok": True}\nraw = json.dumps(data)\nprint(raw)', solutionCode: 'import json\ndata = {"status": 200, "ok": True}\nraw = json.dumps(data)\nprint(raw)', codeLanguage: 'python', quiz: quiz('JSON Quiz', [mcq('Which method parses a JSON string into a Python dictionary?', 'json.loads()', ['json.dumps()', 'json.parse()'])]) }),
            lesson('CSV File Operations', 'python-csv-operations', '# CSV File Handling\n\nRead and write comma-separated values using the built-in `csv` module or `pandas`.', { starterCode: 'import csv\nwith open("data.csv", "w", newline="") as f:\n    writer = csv.writer(f)\n    writer.writerow(["Name", "Age"])\n    writer.writerow(["Alice", 25])', solutionCode: 'import csv\nwith open("data.csv", "w", newline="") as f:\n    writer = csv.writer(f)\n    writer.writerow(["Name", "Age"])\n    writer.writerow(["Alice", 25])', codeLanguage: 'python', quiz: quiz('CSV Quiz', [trueFalse('The csv module provides DictReader for column key access.', true)]) }),
            lesson('File Paths & OS File System (`os` & `pathlib`)', 'python-pathlib-os', '# Path & File System Management\n\nInspect directories, join paths, and create folders using `pathlib.Path` and `os` modules.', { starterCode: 'from pathlib import Path\np = Path(".")\nprint(p.absolute())', solutionCode: 'from pathlib import Path\np = Path(".")\nprint(p.absolute())', codeLanguage: 'python', quiz: quiz('Path Quiz', [mcq('Which modern module is recommended for object-oriented path handling?', 'pathlib', ['os.path', 'sys'])]) })
          ]
        },
        {
          title: 'Section 7: Audio',
          lessons: [
            lesson('Audio Data Structures & Waveform Basics', 'python-audio-basics', '# Audio Data & Waveforms\n\nUnderstand digital audio sampling rates (44.1kHz), bit depth (16-bit), and mono/stereo channels.', { starterCode: 'sample_rate = 44100\nduration_sec = 2\nprint(f"Total samples: {sample_rate * duration_sec}")', solutionCode: 'sample_rate = 44100\nduration_sec = 2\nprint(f"Total samples: {sample_rate * duration_sec}")', codeLanguage: 'python', quiz: quiz('Audio Sampling Quiz', [mcq('What is the standard CD audio sampling rate?', '44,100 Hz', ['22,050 Hz', '96,000 Hz'])]) }),
            lesson('Reading & Writing WAV Files (`wave` module)', 'python-wave-module', '# Reading & Writing WAV Files\n\nManipulate raw audio frames using Python\'s built-in `wave` module.', { starterCode: 'import wave\nprint("Wave module ready")', solutionCode: 'import wave\nprint("Wave module ready")', codeLanguage: 'python', quiz: quiz('WAV Quiz', [trueFalse('WAV files store uncompressed PCM audio data.', true)]) }),
            lesson('Synthesizing Sine Wave Audio Tones', 'python-synthesizing-audio', '# Synthesizing Sine Tones\n\nGenerate pure audio tones using `math.sin()` and NumPy arrays.', { starterCode: 'import math\nfreq = 440 # A4 note\nsamples = [math.sin(2 * math.pi * freq * (t / 44100)) for t in range(100)]\nprint(samples[:5])', solutionCode: 'import math\nfreq = 440 # A4 note\nsamples = [math.sin(2 * math.pi * freq * (t / 44100)) for t in range(100)]\nprint(samples[:5])', codeLanguage: 'python', quiz: quiz('Synth Quiz', [mcq('What frequency corresponds to musical concert pitch A4?', '440 Hz', ['261.6 Hz', '880 Hz'])]) }),
            lesson('Audio Processing with Librosa & Pygame', 'python-librosa-pygame', '# Audio Signal Processing\n\nExtract audio features (spectrograms, MFCCs, tempo, beat tracking) with `librosa`.', { starterCode: 'print("Librosa and Pygame sound engines initialized")', solutionCode: 'print("Librosa and Pygame sound engines initialized")', codeLanguage: 'python', quiz: quiz('Librosa Quiz', [trueFalse('Librosa is a widely used Python library for music and audio analysis.', true)]) }),
            lesson('Building a Python MP3 / WAV Audio Player', 'python-audio-player-project', '# Audio Player Project\n\nConstruct a simple CLI or GUI music player application with playback controls.', { starterCode: 'print("Audio Player App Started")', solutionCode: 'print("Audio Player App Started")', codeLanguage: 'python', quiz: quiz('Audio Project Quiz', [mcq('Which Python GUI library is built into the standard library?', 'tkinter', ['PyQt', 'wxPython'])]) })
          ]
        },
        {
          title: 'Section 8: OOP',
          lessons: [
            lesson('Classes, Objects, & `__init__` Constructor', 'python-classes-objects', '# Classes & Objects\n\nDefine blueprints using `class ClassName:` and initialize attributes in `def __init__(self):`.', { starterCode: 'class Person:\n    def __init__(self, name):\n        self.name = name\np = Person("Alice")\nprint(p.name)', solutionCode: 'class Person:\n    def __init__(self, name):\n        self.name = name\np = Person("Alice")\nprint(p.name)', codeLanguage: 'python', quiz: quiz('OOP Quiz', [mcq('What parameter refers to the current instance inside class methods?', 'self', ['this', 'super'])]) }),
            lesson('Instance vs Class Attributes & Methods', 'python-class-vs-instance', '# Instance vs Class Attributes\n\nInstance attributes belong to specific instances; Class attributes are shared across all instances.', { starterCode: 'class Circle:\n    pi = 3.14159\n    def __init__(self, radius):\n        self.radius = radius\nc = Circle(5)\nprint(Circle.pi * c.radius ** 2)', solutionCode: 'class Circle:\n    pi = 3.14159\n    def __init__(self, radius):\n        self.radius = radius\nc = Circle(5)\nprint(Circle.pi * c.radius ** 2)', codeLanguage: 'python', quiz: quiz('Class Attr Quiz', [trueFalse('Class variables are shared by all instances of that class.', true)]) }),
            lesson('Inheritance & `super()` Function', 'python-inheritance-super', '# Inheritance & super()\n\nDerive child classes from parent classes and call parent constructors using `super().__init__()`.', { starterCode: 'class Animal:\n    def speak(self): print("Noise")\nclass Dog(Animal):\n    def speak(self): print("Woof")\nDog().speak()', solutionCode: 'class Animal:\n    def speak(self): print("Noise")\nclass Dog(Animal):\n    def speak(self): print("Woof")\nDog().speak()', codeLanguage: 'python', quiz: quiz('Inheritance Quiz', [mcq('What function calls parent class methods in subclasses?', 'super()', ['parent()', 'base()'])]) }),
            lesson('Encapsulation & Private Members', 'python-encapsulation', '# Encapsulation\n\nProtect internal state using private (`__var`) or protected (`_var`) attribute naming conventions.', { starterCode: 'class Account:\n    def __init__(self, balance):\n        self.__balance = balance\n    def get_balance(self):\n        return self.__balance\na = Account(100)\nprint(a.get_balance())', solutionCode: 'class Account:\n    def __init__(self, balance):\n        self.__balance = balance\n    def get_balance(self):\n        return self.__balance\na = Account(100)\nprint(a.get_balance())', codeLanguage: 'python', quiz: quiz('Encapsulation Quiz', [mcq('How are private attributes denoted in Python?', 'Double leading underscores __', ['private keyword', 'Const prefix'])]) }),
            lesson('Polymorphism, Dunder Methods, & Abstract Classes', 'python-polymorphism-dunder', '# Polymorphism & Dunder Methods\n\nImplement operator overloading with magic methods (`__str__`, `__len__`, `__add__`) and abstract base classes.', { starterCode: 'class Book:\n    def __init__(self, title):\n        self.title = title\n    def __str__(self):\n        return f"Book: {self.title}"\nprint(str(Book("Python 101")))', solutionCode: 'class Book:\n    def __init__(self, title):\n        self.title = title\n    def __str__(self):\n        return f"Book: {self.title}"\nprint(str(Book("Python 101")))', codeLanguage: 'python', quiz: quiz('Dunder Quiz', [mcq('Which magic method customizes string representations of objects?', '__str__', ['__repr__', '__init__'])]) })
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ JAVA ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Java',
      slug: 'java',
      description: 'Master enterprise Java, object-oriented principles, JVM memory model, Collections Framework, Streams, and Multithreading.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 25,
      resources: [
        { resourceType: 'youtube', title: 'Java Full Course for Beginners', url: 'https://www.youtube.com/watch?v=eIrMbAQSU34', author: 'Programming with Mosh', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Java Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=grEKMHGYync', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Java OOP & Classes In Depth', url: 'https://www.youtube.com/watch?v=IUqKuGNasnE', author: 'Telusko', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Java Collections Framework Tutorial', url: 'https://www.youtube.com/watch?v=viTHc_4XfCA', author: 'Amigoscode', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Java Streams API Crash Course', url: 'https://www.youtube.com/watch?v=t1-YZ6bF-g0', author: 'Java Brains', platform: 'YouTube' },
        { resourceType: 'article', title: 'Official Oracle Java 17 Documentation', url: 'https://docs.oracle.com/en/java/javase/17/', author: 'Oracle' },
        { resourceType: 'article', title: 'Baeldung Java In-Depth Guides', url: 'https://www.baeldung.com/java-tutorial', author: 'Baeldung' },
        { resourceType: 'ebook', title: 'Thinking in Java Book Notes', url: 'https://mindviewinc.com/Books/TIJ4/', author: 'Bruce Eckel' },
        { resourceType: 'cheatsheet', title: 'Java Syntax & Collections Cheat Sheet', url: 'https://quickref.me/java', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks Java Programming Language', url: 'https://www.geeksforgeeks.org/java/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: Java Basics & Syntax',
          lessons: [
            setupLesson('Java', 'java', 'java',
              'Install JDK 17+ and verify using `java --version` and `javac --version`.',
              'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello Java!");\n    }\n}',
              'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello Java!");\n    }\n}'
            ),
            lesson('Java Data Types & Variables', 'java-data-types', '# Java Data Types\n\nJava is strongly typed: `byte`, `short`, `int`, `long`, `float`, `double`, `boolean`, and `char`.', { starterCode: 'int count = 42;\ndouble price = 19.99;\nSystem.out.println(count + " @ " + price);', solutionCode: 'int count = 42;\ndouble price = 19.99;\nSystem.out.println(count + " @ " + price);', codeLanguage: 'java', quiz: quiz('Java Types Quiz', [mcq('What is the default integer type in Java?', 'int', ['long', 'short'])]) }),
            lesson('Java Classes, Methods, & OOP', 'java-classes-oop', '# Java Classes & OOP\n\nEverything in Java belongs to classes. Define attributes, constructors, and instance methods.', { starterCode: 'class Person {\n    String name;\n    Person(String n) { name = n; }\n}', solutionCode: 'class Person {\n    String name;\n    Person(String n) { name = n; }\n}', codeLanguage: 'java', quiz: quiz('Java OOP Quiz', [trueFalse('Java supports multiple inheritance for classes.', false)]) }),
            lesson('Java Collections (List, Set, Map)', 'java-collections', '# Java Collections Framework\n\nUtilize `ArrayList`, `HashSet`, `HashMap`, and `LinkedList` for dynamic collections.', { starterCode: 'import java.util.*;\nList<String> list = new ArrayList<>();\nlist.add("Java");\nSystem.out.println(list);', solutionCode: 'import java.util.*;\nList<String> list = new ArrayList<>();\nlist.add("Java");\nSystem.out.println(list);', codeLanguage: 'java', quiz: quiz('Collections Quiz', [mcq('Which collection guarantees key-value pairs in Java?', 'HashMap', ['ArrayList', 'HashSet'])]) }),
            lesson('Java Streams API & Lambdas', 'java-streams-lambdas', '# Java Streams & Functional Interface\n\nFilter, map, and reduce data collections using functional Stream pipelines.', { starterCode: 'import java.util.stream.*;\nStream.of(1, 2, 3).map(x -> x * 2).forEach(System.out::println);', solutionCode: 'import java.util.stream.*;\nStream.of(1, 2, 3).map(x -> x * 2).forEach(System.out::println);', codeLanguage: 'java', quiz: quiz('Stream Quiz', [mcq('Which terminal operation consumes Stream elements in Java?', 'forEach()', ['map()', 'filter()'])]) })
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ C++ ━━━━━━━━━━━━━━━━━━━
    {
      title: 'C++',
      slug: 'cpp',
      description: 'Master high-performance C++, pointers, manual memory management, RAII, templates, and the Standard Template Library (STL).',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 25,
      resources: [
        { resourceType: 'youtube', title: 'C++ Full Course for Beginners', url: 'https://www.youtube.com/watch?v=vLnPwxZdW4Y', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'The Cherno C++ Series (Complete Playlist)', url: 'https://www.youtube.com/playlist?list=PLlrATfBNZ98dudnM48vImy8ZUu8scLNmH', author: 'The Cherno', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'C++ Pointers & Memory Management Explained', url: 'https://www.youtube.com/watch?v=2ybLD6_2gKM', author: 'mycodeschool', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'C++ STL (Standard Template Library) Tutorial', url: 'https://www.youtube.com/watch?v=g-1Cn356F8', author: 'Luv', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'C++ Object-Oriented Programming', url: 'https://www.youtube.com/watch?v=wN0x9eZLup4', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'article', title: 'cppreference.com Official C++ Reference', url: 'https://en.cppreference.com/w/', author: 'cppreference' },
        { resourceType: 'article', title: 'LearnCpp.com Comprehensive C++ Tutorials', url: 'https://www.learncpp.com/', author: 'Alex (LearnCpp)' },
        { resourceType: 'ebook', title: 'C++ Core Guidelines', url: 'https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines', author: 'Bjarne Stroustrup & Herb Sutter' },
        { resourceType: 'cheatsheet', title: 'C++ Syntax & STL Cheat Sheet', url: 'https://quickref.me/cpp', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks C++ Programming Language', url: 'https://www.geeksforgeeks.org/c-plus-plus/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: C++ Essentials',
          lessons: [
            setupLesson('C++', 'cpp', 'cpp',
              'Install GCC/G++ or Clang compiler and test with `g++ --version`.',
              '#include <iostream>\nint main() {\n    std::cout << "Hello C++!" << std::endl;\n    return 0;\n}',
              '#include <iostream>\nint main() {\n    std::cout << "Hello C++!" << std::endl;\n    return 0;\n}'
            ),
            lesson('Pointers, References, & Memory', 'cpp-pointers-references', '# Pointers & References\n\nPointers store memory addresses (`int* p = &val`), while references (`int& ref = val`) create aliases.', { starterCode: 'int val = 42;\nint* p = &val;\nstd::cout << *p;', solutionCode: 'int val = 42;\nint* p = &val;\nstd::cout << *p;', codeLanguage: 'cpp', quiz: quiz('Pointer Quiz', [mcq('What operator dereferences a pointer in C++?', '*', ['&', '->'])]) }),
            lesson('C++ Classes, Constructors, & RAII', 'cpp-classes-raii', '# Classes & RAII\n\nResource Acquisition Is Initialization (RAII) ties resource lifespan to object stack lifetimes.', { starterCode: 'class Box {\npublic:\n    Box() { std::cout << "Created\\n"; }\n    ~Box() { std::cout << "Destroyed\\n"; }\n};', solutionCode: 'class Box {\npublic:\n    Box() { std::cout << "Created\\n"; }\n    ~Box() { std::cout << "Destroyed\\n"; }\n};', codeLanguage: 'cpp', quiz: quiz('RAII Quiz', [trueFalse('Destructors run automatically when stack objects go out of scope.', true)]) }),
            lesson('C++ Standard Template Library (STL)', 'cpp-stl', '# STL Containers & Algorithms\n\nUse `std::vector`, `std::unordered_map`, `std::sort`, and iterators for efficient data structures.', { starterCode: '#include <vector>\n#include <algorithm>\nstd::vector<int> v = {3, 1, 2};\nstd::sort(v.begin(), v.end());', solutionCode: '#include <vector>\n#include <algorithm>\nstd::vector<int> v = {3, 1, 2};\nstd::sort(v.begin(), v.end());', codeLanguage: 'cpp', quiz: quiz('STL Quiz', [mcq('Which container provides dynamic contiguous arrays in C++?', 'std::vector', ['std::list', 'std::map'])]) })
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ C ━━━━━━━━━━━━━━━━━━━
    {
      title: 'C Language',
      slug: 'c-language',
      description: 'Learn procedural C programming, memory addresses, structs, pointers, stack/heap allocation, and system header files.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'youtube', title: 'C Programming Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=KJgsSFOSQv0', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Pointers in C Explained In-Depth', url: 'https://www.youtube.com/watch?v=zuegQmMdy8M', author: 'mycodeschool', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'C Programming Full Course', url: 'https://www.youtube.com/watch?v=87SH2Cn0s9A', author: 'Bro Code', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Memory Management in C (malloc, free)', url: 'https://www.youtube.com/watch?v=xDVC3wKjS64', author: 'Jacob Sorber', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Structures and Typedef in C', url: 'https://www.youtube.com/watch?v=Kz6lXe_5qY4', author: 'Neso Academy', platform: 'YouTube' },
        { resourceType: 'article', title: 'GNU C Reference Manual', url: 'https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html', author: 'GNU Project' },
        { resourceType: 'article', title: 'C Programming at Learn-C.org', url: 'https://www.learn-c.org/', author: 'Learn-C.org' },
        { resourceType: 'ebook', title: 'The C Programming Language (K&R) Notes', url: 'https://www.bell-labs.com/usr/dmr/www/chist.html', author: 'Kernighan & Ritchie' },
        { resourceType: 'cheatsheet', title: 'C Language Reference Cheat Sheet', url: 'https://quickref.me/c', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks C Programming Portal', url: 'https://www.geeksforgeeks.org/c-programming-language/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: C Programming Core',
          lessons: [
            setupLesson('C Language', 'c-language', 'c',
              'Install GCC compiler (`gcc --version`).',
              '#include <stdio.h>\nint main() {\n    printf("Hello C!\\n");\n    return 0;\n}',
              '#include <stdio.h>\nint main() {\n    printf("Hello C!\\n");\n    return 0;\n}'
            ),
            lesson('Dynamic Memory: malloc, free, & realloc', 'c-dynamic-memory', '# Dynamic Memory Allocation\n\nAllocate heap memory with `malloc(size)` and explicitly free memory with `free(ptr)` to prevent leaks.', { starterCode: 'int* arr = (int*)malloc(5 * sizeof(int));\nfree(arr);', solutionCode: 'int* arr = (int*)malloc(5 * sizeof(int));\nfree(arr);', codeLanguage: 'c', quiz: quiz('C Memory Quiz', [mcq('Which header file defines malloc and free?', '<stdlib.h>', ['<stdio.h>', '<string.h>'])]) })
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ PHP ━━━━━━━━━━━━━━━━━━━
    {
      title: 'PHP',
      slug: 'php',
      description: 'Learn modern server-side PHP 8+, web forms, superglobals, PDO database connections, and OOP.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'youtube', title: 'PHP Full Course for Beginners', url: 'https://www.youtube.com/watch?v=OK_JCtrrv-c', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'PHP for Beginners Crash Course', url: 'https://www.youtube.com/watch?v=2eebptXfEvw', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'PHP Object-Oriented Programming (OOP)', url: 'https://www.youtube.com/watch?v=Anz0ArcQ5xI', author: 'Dani Krossing', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'PHP PDO MySQL Database Connection', url: 'https://www.youtube.com/watch?v=vVj_T220s7s', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'PHP 8.2 New Features Explained', url: 'https://www.youtube.com/watch?v=aP-QnUSt3B0', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'article', title: 'PHP Official Documentation & Manual', url: 'https://www.php.net/manual/en/', author: 'PHP Group' },
        { resourceType: 'article', title: 'PHP The Right Way (Best Practices Guide)', url: 'https://phptherightway.com/', author: 'PHP Community' },
        { resourceType: 'ebook', title: 'W3Schools PHP Tutorial', url: 'https://www.w3schools.com/php/', author: 'W3Schools' },
        { resourceType: 'cheatsheet', title: 'PHP Quick Reference Cheat Sheet', url: 'https://quickref.me/php', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks PHP Tutorials', url: 'https://www.geeksforgeeks.org/php-tutorials/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: PHP Basics',
          lessons: [
            setupLesson('PHP', 'php', 'php',
              'Install PHP 8.2+ and verify with `php -v`.',
              '<?php echo "Hello PHP!"; ?>',
              '<?php echo "Hello PHP!"; ?>'
            ),
            lesson('PHP Syntax, Variables, & Arrays', 'php-syntax-variables', '# PHP Syntax & Variables\n\nVariables begin with `$`. Use associative arrays `["key" => "val"]` for key-value structures.', { starterCode: '<?php\n$name = "PHP";\n$data = ["version" => 8.2];\necho "$name " . $data["version"];\n?>', solutionCode: '<?php\n$name = "PHP";\n$data = ["version" => 8.2];\necho "$name " . $data["version"];\n?>', codeLanguage: 'php', quiz: quiz('PHP Quiz', [mcq('What symbol precedes all PHP variables?', '$', ['@', '&'])]) })
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ KOTLIN ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Kotlin',
      slug: 'kotlin',
      description: 'Master modern Android & backend Kotlin programming, null safety, coroutines, extension functions, and data classes.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'youtube', title: 'Kotlin Course for Beginners', url: 'https://www.youtube.com/watch?v=F9UC9DY-vIU', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Kotlin Android Development Tutorial', url: 'https://www.youtube.com/watch?v=EExSSotojVI', author: 'Philipp Lackner', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Kotlin Coroutines Masterclass', url: 'https://www.youtube.com/watch?v=ZTDXo0-KTwg', author: 'CodingWithMitch', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Kotlin in 100 Seconds', url: 'https://www.youtube.com/watch?v=xT8oP0wyuXA', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Kotlin Data Classes & Extension Functions', url: 'https://www.youtube.com/watch?v=5flXf8nuq60', author: 'JetBrains', platform: 'YouTube' },
        { resourceType: 'article', title: 'Kotlin Official Language Documentation', url: 'https://kotlinlang.org/docs/home.html', author: 'JetBrains' },
        { resourceType: 'article', title: 'Android Kotlin Developer Guides', url: 'https://developer.android.com/kotlin', author: 'Google Android' },
        { resourceType: 'ebook', title: 'Kotlin Koans Interactive Exercises', url: 'https://play.kotlinlang.org/koans/overview', author: 'JetBrains' },
        { resourceType: 'cheatsheet', title: 'Kotlin Syntax & Null Safety Reference', url: 'https://quickref.me/kotlin', author: 'QuickRef' },
        { resourceType: 'article', title: 'Baeldung Kotlin In-Depth Guides', url: 'https://www.baeldung.com/kotlin/', author: 'Baeldung' }
      ],
      modules: [
        {
          title: 'Section 1: Kotlin Core',
          lessons: [
            setupLesson('Kotlin', 'kotlin', 'kotlin',
              'Install Kotlin compiler (`kotlinc -version`) or IntelliJ IDEA.',
              'fun main() {\n    println("Hello Kotlin!")\n}',
              'fun main() {\n    println("Hello Kotlin!")\n}'
            ),
            lesson('Kotlin Null Safety & Data Classes', 'kotlin-null-safety', '# Null Safety & Data Classes\n\nKotlin eliminates NullPointerExceptions with nullable types (`String?`) and concise `data class`.', { starterCode: 'data class User(val name: String, val age: Int)\nfun main() {\n    val u = User("Alice", 25)\n    println(u)\n}', solutionCode: 'data class User(val name: String, val age: Int)\nfun main() {\n    val u = User("Alice", 25)\n    println(u)\n}', codeLanguage: 'kotlin', quiz: quiz('Kotlin Quiz', [mcq('How do you declare read-only variables in Kotlin?', 'val', ['var', 'const'])]) })
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ GO (GOLANG) ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Go (Golang)',
      slug: 'golang',
      description: 'Master Google\'s Go programming language, concurrency with goroutines and channels, structs, interfaces, and microservices.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'youtube', title: 'Go Programming Language Tutorial', url: 'https://www.youtube.com/watch?v=YS4e4q9oBaU', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Golang Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=un6ZyFkqFKo', author: 'TechWorld with Nana', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Go Concurrency (Goroutines & Channels)', url: 'https://www.youtube.com/watch?v=f6kdp27TYZs', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Go in 100 Seconds', url: 'https://www.youtube.com/watch?v=446E-r0rXbU', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Building REST APIs with Go', url: 'https://www.youtube.com/watch?v=d_L8l1e0jA4', author: 'Nic Jackson', platform: 'YouTube' },
        { resourceType: 'article', title: 'Official Go Documentation & Tour', url: 'https://go.dev/doc/', author: 'Google Go Team' },
        { resourceType: 'article', title: 'Effective Go Programming Guide', url: 'https://go.dev/doc/effective_go', author: 'Go Authors' },
        { resourceType: 'ebook', title: 'Go by Example Code Walkthroughs', url: 'https://gobyexample.com/', author: 'Mark McGranaghan' },
        { resourceType: 'cheatsheet', title: 'Golang Syntax & Concurrency Cheat Sheet', url: 'https://quickref.me/golang', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks Go Tutorials', url: 'https://www.geeksforgeeks.org/golang/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: Go Fundamentals',
          lessons: [
            setupLesson('Go (Golang)', 'golang', 'go',
              'Install Go from go.dev and verify with `go version`.',
              'package main\nimport "fmt"\nfunc main() {\n    fmt.Println("Hello Go!")\n}',
              'package main\nimport "fmt"\nfunc main() {\n    fmt.Println("Hello Go!")\n}'
            ),
            lesson('Goroutines & Channels', 'go-goroutines-channels', '# Goroutines & Channels\n\nLaunch concurrent lightweight threads with `go func()` and communicate safely using typed channels (`ch <- val`).', { starterCode: 'package main\nimport "fmt"\nfunc main() {\n    ch := make(chan string)\n    go func() { ch <- "Go Concurrency" }()\n    fmt.Println(<-ch)\n}', solutionCode: 'package main\nimport "fmt"\nfunc main() {\n    ch := make(chan string)\n    go func() { ch <- "Go Concurrency" }()\n    fmt.Println(<-ch)\n}', codeLanguage: 'go', quiz: quiz('Go Concurrency Quiz', [mcq('Which keyword launches a concurrent thread in Go?', 'go', ['async', 'thread'])]) })
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ RUBY ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Ruby',
      slug: 'ruby',
      description: 'Learn elegant object-oriented Ruby, blocks, iterators, gems, and Metaprogramming.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 18,
      resources: [
        { resourceType: 'youtube', title: 'Ruby Programming Course for Beginners', url: 'https://www.youtube.com/watch?v=t_ispmW8jXg', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Ruby in 100 Seconds', url: 'https://www.youtube.com/watch?v=Jm3U3T50_F4', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Ruby Blocks, Procs, & Lambdas Explained', url: 'https://www.youtube.com/watch?v=Vca80817b18', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Ruby Object-Oriented Programming', url: 'https://www.youtube.com/watch?v=4W7QxlyhAsw', author: 'Giraffe Academy', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Ruby Gems & Bundler Deep Dive', url: 'https://www.youtube.com/watch?v=L2G35t7XpYk', author: 'GoRails', platform: 'YouTube' },
        { resourceType: 'article', title: 'Official Ruby Documentation & Language Guide', url: 'https://www.ruby-lang.org/en/documentation/', author: 'Ruby Community' },
        { resourceType: 'article', title: 'RubyMonk Interactive Ruby Tutorials', url: 'https://rubymonk.com/', author: 'RubyMonk' },
        { resourceType: 'ebook', title: 'Why\'s (Poignant) Guide to Ruby Notes', url: 'https://poignant.guide/', author: 'why the lucky stiff' },
        { resourceType: 'cheatsheet', title: 'Ruby Syntax & Methods Cheat Sheet', url: 'https://quickref.me/ruby', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks Ruby Language Tutorials', url: 'https://www.geeksforgeeks.org/ruby-programming-language/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: Ruby Essentials',
          lessons: [
            setupLesson('Ruby', 'ruby', 'ruby',
              'Install Ruby and verify with `ruby -v`.',
              'puts "Hello Ruby!"',
              'puts "Hello Ruby!"'
            ),
            lesson('Ruby Blocks, Procs, & OOP', 'ruby-blocks-oop', '# Ruby Blocks & OOP\n\nIn Ruby, everything is an object. Pass blocks to methods using `{ |x| ... }` or `do ... end`.', { starterCode: '3.times { |i| puts "Count #{i}" }', solutionCode: '3.times { |i| puts "Count #{i}" }', codeLanguage: 'ruby', quiz: quiz('Ruby Quiz', [mcq('Which method prints output with a newline in Ruby?', 'puts', ['print', 'echo'])]) })
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ RUST ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Rust',
      slug: 'rust',
      description: 'Master memory safety without garbage collection, Ownership, Borrowing, Lifetimes, Traits, and Cargo build tool.',
      difficulty: 'advanced',
      language: 'en',
      estimatedHours: 25,
      resources: [
        { resourceType: 'youtube', title: 'Rust Programming Course for Beginners', url: 'https://www.youtube.com/watch?v=zF34dRivLOw', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Rust in 100 Seconds', url: 'https://www.youtube.com/watch?v=5C_HPTJg5ek', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Rust Ownership & Borrowing System Explained', url: 'https://www.youtube.com/watch?v=VFIOSWy93Hg', author: 'Let\'s Get Rusty', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Rust Memory Management (Stack vs Heap)', url: 'https://www.youtube.com/watch?v=rDoqT-a6UFg', author: 'Jon Gjengset', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Building Web APIs in Rust with Actix', url: 'https://www.youtube.com/watch?v=mQ6Vstg5CgE', author: 'Jeremy Chone', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'The Rust Programming Language Book (Official)', url: 'https://doc.rust-lang.org/book/', author: 'Steve Klabnik & Carol Nichols' },
        { resourceType: 'article', title: 'Rust by Example Interactive Reference', url: 'https://doc.rust-lang.org/rust-by-example/', author: 'Rust Community' },
        { resourceType: 'article', title: 'Rust Standard Library Docs', url: 'https://doc.rust-lang.org/std/', author: 'Rust Project' },
        { resourceType: 'cheatsheet', title: 'Rust Syntax & Ownership Cheat Sheet', url: 'https://cheats.rs/', author: 'RustCheats' },
        { resourceType: 'article', title: 'GeeksforGeeks Rust Tutorials', url: 'https://www.geeksforgeeks.org/rust-programming-language/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: Rust Core',
          lessons: [
            setupLesson('Rust', 'rust', 'rust',
              'Install Rust via rustup (`rustc --version` and `cargo --version`).',
              'fn main() {\n    println!("Hello Rust!");\n}',
              'fn main() {\n    println!("Hello Rust!");\n}'
            ),
            lesson('Rust Ownership & Borrowing', 'rust-ownership-borrowing', '# Ownership & Borrowing\n\nRust eliminates data races and null bugs at compile-time using explicit ownership rules and references (`&T` / `&mut T`).', { starterCode: 'fn main() {\n    let s = String::from("Rust");\n    print_str(&s);\n}\nfn print_str(val: &String) {\n    println!("{}", val);\n}', solutionCode: 'fn main() {\n    let s = String::from("Rust");\n    print_str(&s);\n}\nfn print_str(val: &String) {\n    println!("{}", val);\n}', codeLanguage: 'rust', quiz: quiz('Rust Quiz', [trueFalse('Rust enforces memory safety at compile-time without a runtime garbage collector.', true)]) })
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ SWIFT ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Swift',
      slug: 'swift',
      description: 'Learn modern Apple Swift for iOS/macOS development, Optionals, Protocol-Oriented Programming, and Structs.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'youtube', title: 'Swift Programming Course for Beginners', url: 'https://www.youtube.com/watch?v=comQ1-x2a1Q', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'SwiftUI Basics for iOS Apps', url: 'https://www.youtube.com/watch?v=F2ojC6TN5V0', author: 'Sean Allen', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Swift in 100 Seconds', url: 'https://www.youtube.com/watch?v=nkg147f1lK8', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Swift Optionals & Null Safety Tutorial', url: 'https://www.youtube.com/watch?v=U-8r92G1H40', author: 'Kavsoft', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'iOS App Development Tutorial (Swift 5)', url: 'https://www.youtube.com/watch?v=09TeUXjzpKs', author: 'CodeWithChris', platform: 'YouTube' },
        { resourceType: 'article', title: 'Official Swift Language Documentation', url: 'https://www.swift.org/documentation/', author: 'Apple' },
        { resourceType: 'article', title: 'Hacking with Swift Tutorials', url: 'https://www.hackingwithswift.com/', author: 'Paul Hudson' },
        { resourceType: 'ebook', title: 'The Swift Programming Language Book', url: 'https://docs.swift.org/swift-book/', author: 'Apple Inc.' },
        { resourceType: 'cheatsheet', title: 'Swift Syntax & Options Cheat Sheet', url: 'https://quickref.me/swift', author: 'QuickRef' },
        { resourceType: 'article', title: 'Ray Wenderlich / Kodeco Apple Tutorials', url: 'https://www.kodeco.com/ios', author: 'Kodeco' }
      ],
      modules: [
        {
          title: 'Section 1: Swift Core',
          lessons: [
            setupLesson('Swift', 'swift', 'swift',
              'Install Xcode or Swift toolchain (`swift --version`).',
              'print("Hello Swift!")',
              'print("Hello Swift!")'
            ),
            lesson('Swift Optionals & Protocols', 'swift-optionals-protocols', '# Swift Optionals & Protocols\n\nHandle missing values safely using optionals (`String?`) and define capabilities using `protocol`.', { starterCode: 'var name: String? = "Swift"\nif let n = name {\n    print("Hello \\(n)")\n}', solutionCode: 'var name: String? = "Swift"\nif let n = name {\n    print("Hello \\(n)")\n}', codeLanguage: 'swift', quiz: quiz('Swift Quiz', [mcq('Which construct safely unwraps optionals in Swift?', 'if let / guard let', ['try catch', 'null check'])]) })
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ TYPESCRIPT ━━━━━━━━━━━━━━━━━━━
    {
      title: 'TypeScript',
      slug: 'typescript',
      description: 'Master typed JavaScript, Interfaces, Generics, Type Narrowing, Decorators, and TS Compiler configuration.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'youtube', title: 'TypeScript Full Course for Beginners', url: 'https://www.youtube.com/watch?v=d56mG7DezGs', author: 'Programming with Mosh', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'TypeScript Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=BwuLxPH8IDs', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'TypeScript in 100 Seconds', url: 'https://www.youtube.com/watch?v=zQnBQ4tB3ZA', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'TypeScript Generics & Advanced Types', url: 'https://www.youtube.com/watch?v=nViEqptmzBU', author: 'Jack Herrington', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'TypeScript Project Setup with Node.js', url: 'https://www.youtube.com/watch?v=1ucLoODn6LQ', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'article', title: 'TypeScript Official Handbook & Docs', url: 'https://www.typescriptlang.org/docs/handbook/intro.html', author: 'Microsoft' },
        { resourceType: 'article', title: 'Total TypeScript Interactive Guide', url: 'https://www.totaltypescript.com/', author: 'Matt Pocock' },
        { resourceType: 'ebook', title: 'TypeScript Deep Dive Free eBook', url: 'https://basarat.gitbook.io/typescript/', author: 'Basarat Ali Syed' },
        { resourceType: 'cheatsheet', title: 'TypeScript Syntax & Interfaces Cheat Sheet', url: 'https://quickref.me/typescript', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks TypeScript Guide', url: 'https://www.geeksforgeeks.org/typescript/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: TypeScript Essentials',
          lessons: [
            setupLesson('TypeScript', 'typescript', 'typescript',
              'Install TypeScript globally via `npm install -g typescript` (`tsc -v`).',
              'const msg: string = "Hello TypeScript!";\nconsole.log(msg);',
              'const msg: string = "Hello TypeScript!";\nconsole.log(msg);'
            ),
            lesson('Interfaces & Generics in TypeScript', 'typescript-interfaces-generics', '# Interfaces & Generics\n\nDefine contracts using `interface` and build reusable components with generic type parameters `<T>`.', { starterCode: 'interface User {\n    id: number;\n    name: string;\n}\nconst u: User = { id: 1, name: "Alice" };\nconsole.log(u);', solutionCode: 'interface User {\n    id: number;\n    name: string;\n}\nconst u: User = { id: 1, name: "Alice" };\nconsole.log(u);', codeLanguage: 'typescript', quiz: quiz('TS Quiz', [mcq('What command compiles TypeScript files to JavaScript?', 'tsc', ['ts-run', 'node-ts'])]) })
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ ELIXIR ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Elixir',
      slug: 'elixir',
      description: 'Learn functional programming on Erlang BEAM VM, pattern matching, actors, and Phoenix framework.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 18,
      resources: [
        { resourceType: 'youtube', title: 'Elixir Course for Beginners', url: 'https://www.youtube.com/watch?v=R_t3XkC6x7U', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Elixir in 100 Seconds', url: 'https://www.youtube.com/watch?v=pB0WvcqF8Y8', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Pattern Matching & Functional Elixir', url: 'https://www.youtube.com/watch?v=Vl0i_Kk2XyM', author: 'Pragmatic Studio', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Phoenix Framework Full Course', url: 'https://www.youtube.com/watch?v=c3u0W2WqXqE', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Erlang BEAM Virtual Machine Architecture', url: 'https://www.youtube.com/watch?v=_Pwhi0lQ80M', author: 'Code Sync', platform: 'YouTube' },
        { resourceType: 'article', title: 'Elixir Official Getting Started Guide', url: 'https://elixir-lang.org/getting-started/introduction.html', author: 'Elixir Team' },
        { resourceType: 'article', title: 'Elixir School Interactive Lessons', url: 'https://elixirschool.com/', author: 'Elixir School Community' },
        { resourceType: 'ebook', title: 'Programming Elixir 1.6 eBook Notes', url: 'https://pragprog.com/titles/elixir16/', author: 'Dave Thomas' },
        { resourceType: 'cheatsheet', title: 'Elixir Syntax & Pattern Matching Reference', url: 'https://quickref.me/elixir', author: 'QuickRef' },
        { resourceType: 'article', title: 'HexDocs Official Elixir Package Documentation', url: 'https://hexdocs.pm/elixir/Kernel.html', author: 'HexDocs' }
      ],
      modules: [
        {
          title: 'Section 1: Elixir Core',
          lessons: [
            setupLesson('Elixir', 'elixir', 'elixir',
              'Install Elixir (`elixir -v`) and Erlang/OTP.',
              'IO.puts "Hello Elixir!"',
              'IO.puts "Hello Elixir!"'
            ),
            lesson('Pattern Matching & Immutability', 'elixir-pattern-matching', '# Pattern Matching in Elixir\n\nThe `=` operator is a pattern match operator in Elixir, matching data structures and destructuring values.', { starterCode: '{:ok, result} = {:ok, "Success"}\nIO.puts result', solutionCode: '{:ok, result} = {:ok, "Success"}\nIO.puts result', codeLanguage: 'elixir', quiz: quiz('Elixir Quiz', [trueFalse('Data structures in Elixir are strictly immutable.', true)]) })
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ PERL & SHELL ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Perl & Shell Scripting',
      slug: 'perl-shell',
      description: 'Master Unix Bash shell scripts, regex text processing, and system administrative automation scripts in Perl.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 15,
      resources: [
        { resourceType: 'youtube', title: 'Bash Scripting Full Course', url: 'https://www.youtube.com/watch?v=tK9Oc6AEnR4', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Shell Scripting Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=v-FnUwcQfZs', author: 'Programming with Mosh', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Perl Programming Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=WEghIXs8dbU', author: 'Derek Banas', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Linux CLI & Bash Script Automation', url: 'https://www.youtube.com/watch?v=2b9xyh0w2yU', author: 'NetworkChuck', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Regex Regular Expressions Crash Course', url: 'https://www.youtube.com/watch?v=rhzKDrUiJVk', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'article', title: 'GNU Bash Official Reference Manual', url: 'https://www.gnu.org/software/bash/manual/', author: 'GNU Project' },
        { resourceType: 'article', title: 'Perl 5 Official Documentation & Tutorials', url: 'https://perldoc.perl.org/', author: 'Perl Foundation' },
        { resourceType: 'ebook', title: 'Advanced Bash Scripting Guide Notes', url: 'https://tldp.org/LDP/abs/html/', author: 'The Linux Documentation Project' },
        { resourceType: 'cheatsheet', title: 'Bash Shell Commands Cheat Sheet', url: 'https://quickref.me/bash', author: 'QuickRef' },
        { resourceType: 'article', title: 'DevHints Regex Cheat Sheet', url: 'https://devhints.io/regexp', author: 'Rico Sta. Cruz' }
      ],
      modules: [
        {
          title: 'Section 1: Scripting Automation',
          lessons: [
            setupLesson('Perl & Shell', 'perl-shell', 'bash',
              'Test bash terminal scripts and perl CLI (`perl -v`).',
              'echo "Shell Script Active!"',
              'echo "Shell Script Active!"'
            ),
            lesson('Bash Scripting & Regex', 'bash-scripting-regex', '# Bash Shell Scripting\n\nAutomate Linux systems using variables, control loops, pipes, grep, sed, and awk.', { starterCode: '#!/bin/bash\nNAME="Dev"\necho "Hello $NAME"', solutionCode: '#!/bin/bash\nNAME="Dev"\necho "Hello $NAME"', codeLanguage: 'bash', quiz: quiz('Shell Quiz', [mcq('What character sequence starts a bash script shebang?', '#!/bin/bash', ['//bash', '<!--bash-->'])]) })
          ]
        }
      ]
    }
  ]
};
