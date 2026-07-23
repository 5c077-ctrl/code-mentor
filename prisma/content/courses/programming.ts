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
        { resourceType: 'ebook', title: 'Automate the Boring Stuff with Python', url: 'https://automatetheboringstuff.com/', author: 'Al Sweigart' },
        { resourceType: 'article', title: 'Python Official Tutorial', url: 'https://docs.python.org/3/tutorial/', author: 'Python.org' },
        { resourceType: 'cheatsheet', title: 'Python Cheat Sheet', url: 'https://www.pythoncheatsheet.org/', author: 'pythoncheatsheet.org' },
      ],
      modules: [
        {
          title: 'Getting Started',
          description: 'Install Python and write your very first program.',
          lessons: [
            setupLesson('Python for Beginners', 'python-for-beginners', 'python',
              `1. Download Python 3 from [python.org](https://python.org/downloads/)
2. Run the installer — **check "Add Python to PATH"**
3. Open a terminal and type \`python --version\`
4. Install VS Code and the Python extension`,
              `# Verify Python is working\nprint("Hello, Code Mentor!")`,
              `# Solution — just run the starter code!\nprint("Hello, Code Mentor!")`,
              '- Python 3.10+ recommended'
            ),
            lesson('Variables & Data Types', 'variables-data-types', `# Variables & Data Types

Python is **dynamically typed** — you don't need to declare types.

## Creating Variables

\`\`\`python
name = "Alice"          # str
age = 25                # int
height = 5.7            # float
is_student = True       # bool
\`\`\`

## Type Conversion

\`\`\`python
x = int("42")           # str → int
y = float(10)           # int → float
z = str(3.14)           # float → str
\`\`\`

## String Operations

\`\`\`python
greeting = "Hello"
name = "World"
message = f"{greeting}, {name}!"   # f-string (Python 3.6+)
print(message)                      # Hello, World!
print(len(message))                 # 13
\`\`\`

## Key Rules
- Variable names are **case-sensitive** (\`age\` ≠ \`Age\`)
- Names must start with a letter or underscore
- Use \`snake_case\` by convention`, {
              starterCode: `# Create variables of each type\nname = ___\nage = ___\nheight = ___\nis_student = ___\n\n# Print their types\nprint(type(name))\nprint(type(age))\nprint(type(height))\nprint(type(is_student))\n\n# Build a greeting with an f-string\ngreeting = f"Hi, my name is {___} and I am {___} years old."\nprint(greeting)`,
              solutionCode: `name = "Alice"\nage = 25\nheight = 5.7\nis_student = True\n\nprint(type(name))\nprint(type(age))\nprint(type(height))\nprint(type(is_student))\n\ngreeting = f"Hi, my name is {name} and I am {age} years old."\nprint(greeting)`,
              codeLanguage: 'python',
              estimatedMinutes: 20,
              xpReward: 50,
              quiz: quiz('Variables & Data Types Quiz', [
                mcq('What is the type of `x = 3.14`?', 'float', ['int', 'str'], 'Decimal numbers are floats in Python.'),
                mcq('Which f-string is correct?', 'f"Hello {name}"', ['f(Hello {name})', '"Hello {name}"'], 'F-strings start with `f` before the opening quote.'),
                trueFalse('Python variables must be declared with a type keyword.', false, 'Python is dynamically typed — no type declarations needed.'),
              ]),
            }),
            lesson('Input & Output', 'input-output', `# Input & Output

## Printing to the Console

\`\`\`python
print("Hello!")
print("Name:", "Alice", "Age:", 25)   # Multiple values
print(f"Score: {95.5:.1f}%")           # Formatted output
\`\`\`

## Reading User Input

\`\`\`python
name = input("Enter your name: ")     # Always returns a string
age = int(input("Enter your age: "))   # Convert to int
\`\`\`

## The \`print()\` Function Options

\`\`\`python
print("A", "B", "C", sep="-")    # A-B-C
print("Loading", end="...")       # No newline at end
\`\`\`

## Common Pattern: Interactive Programs

\`\`\`python
name = input("Name: ")
age = int(input("Age: "))
print(f"Hello {name}, you will be {age + 1} next year!")
\`\`\``, {
              starterCode: `# Ask the user for their name and birth year\nname = input("What is your name? ")\nbirth_year = int(input("What year were you born? "))\n\n# Calculate their age (approximate)\ncurrent_year = 2026\nage = current_year - birth_year\n\n# Print a greeting\nprint(f"Hello {name}! You are approximately {age} years old.")`,
              solutionCode: `name = input("What is your name? ")\nbirth_year = int(input("What year were you born? "))\n\ncurrent_year = 2026\nage = current_year - birth_year\n\nprint(f"Hello {name}! You are approximately {age} years old.")`,
              codeLanguage: 'python',
              estimatedMinutes: 15,
              xpReward: 40,
              quiz: quiz('Input & Output Quiz', [
                mcq('What does `input()` always return?', 'A string', ['An integer', 'A boolean'], '`input()` always returns a string. Use `int()` or `float()` to convert.'),
                trueFalse('`print("A", "B", sep="-")` outputs `A-B`.', true, 'The `sep` parameter controls what goes between values.'),
              ]),
            }),
          ],
        },
        {
          title: 'Control Flow',
          description: 'Make decisions and repeat actions with if/else and loops.',
          lessons: [
            lesson('Conditionals (if/elif/else)', 'conditionals', `# Conditionals

## if Statement

\`\`\`python
age = 18
if age >= 18:
    print("You can vote!")
\`\`\`

## if/else

\`\`\`python
temperature = 30
if temperature > 25:
    print("It's hot outside!")
else:
    print("It's cool outside.")
\`\`\`

## if/elif/else Chain

\`\`\`python
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"
print(f"Your grade: {grade}")
\`\`\`

## Comparison Operators
| Operator | Meaning |
|----------|---------|
| \`==\` | Equal to |
| \`!=\` | Not equal |
| \`>\`, \`<\` | Greater / Less |
| \`>=\`, \`<=\` | Greater or equal / Less or equal |

## Logical Operators

\`\`\`python
age = 25
has_id = True
if age >= 18 and has_id:
    print("Access granted")
\`\`\``, {
              starterCode: `# Write a grade calculator\nscore = int(input("Enter your score (0-100): "))\n\n# Add if/elif/else to assign a grade\n# A: 90+, B: 80-89, C: 70-79, D: 60-69, F: below 60\n\n# Print the result\nprint(f"Score: {score}, Grade: {grade}")`,
              solutionCode: `score = int(input("Enter your score (0-100): "))\n\nif score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"\nelif score >= 70:\n    grade = "C"\nelif score >= 60:\n    grade = "D"\nelse:\n    grade = "F"\n\nprint(f"Score: {score}, Grade: {grade}")`,
              codeLanguage: 'python',
              estimatedMinutes: 20,
              xpReward: 50,
              quiz: quiz('Conditionals Quiz', [
                mcq('What keyword follows `if` for additional conditions?', 'elif', ['else if', 'elseif'], 'Python uses `elif` (short for else-if).'),
                mcq('What does `and` do?', 'Both conditions must be True', ['Either condition must be True', 'Negates a condition'], '`and` requires both sides to be True.'),
                trueFalse('`if x = 5:` is valid Python.', false, 'Single `=` is assignment. Use `==` for comparison.'),
              ]),
            }),
            lesson('For Loops', 'for-loops', `# For Loops

## Iterating Over a Range

\`\`\`python
for i in range(5):       # 0, 1, 2, 3, 4
    print(i)

for i in range(1, 6):    # 1, 2, 3, 4, 5
    print(i)

for i in range(0, 10, 2): # 0, 2, 4, 6, 8
    print(i)
\`\`\`

## Iterating Over a List

\`\`\`python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
\`\`\`

## Using \`enumerate()\`

\`\`\`python
colors = ["red", "green", "blue"]
for index, color in enumerate(colors):
    print(f"{index}: {color}")
\`\`\`

## Nested Loops

\`\`\`python
for i in range(3):
    for j in range(3):
        print(f"({i},{j})", end=" ")
    print()  # Newline after each row
\`\`\`

## List Comprehension

\`\`\`python
squares = [x**2 for x in range(10)]
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
\`\`\``, {
              starterCode: `# Print the multiplication table for a number\nnumber = 7\n\nfor i in range(1, 11):\n    result = number * i\n    print(f"{number} x {i} = {result}")\n\n# Bonus: Create a list of even numbers from 1-20 using list comprehension\nevens = [x for x in range(1, 21) if x % 2 == 0]\nprint(f"\\nEven numbers: {evens}")`,
              solutionCode: `number = 7\n\nfor i in range(1, 11):\n    result = number * i\n    print(f"{number} x {i} = {result}")\n\nevens = [x for x in range(1, 21) if x % 2 == 0]\nprint(f"\\nEven numbers: {evens}")`,
              codeLanguage: 'python',
              estimatedMinutes: 20,
              xpReward: 50,
              quiz: quiz('For Loops Quiz', [
                mcq('What does `range(3)` produce?', '0, 1, 2', ['1, 2, 3', '0, 1, 2, 3'], '`range(n)` starts at 0 and goes up to n-1.'),
                trueFalse('List comprehensions can include `if` conditions.', true, 'Example: `[x for x in range(10) if x > 5]`'),
              ]),
            }),
            lesson('While Loops & Loop Control', 'while-loops', `# While Loops & Loop Control

## While Loop

\`\`\`python
count = 0
while count < 5:
    print(count)
    count += 1
\`\`\`

## \`break\` — Exit the Loop

\`\`\`python
while True:
    user_input = input("Type 'quit' to exit: ")
    if user_input == "quit":
        break
    print(f"You typed: {user_input}")
\`\`\`

## \`continue\` — Skip to Next Iteration

\`\`\`python
for i in range(10):
    if i % 2 == 0:
        continue  # Skip even numbers
    print(i)       # Only prints odd numbers
\`\`\`

## Common Pattern: Validation Loop

\`\`\`python
while True:
    age = input("Enter your age: ")
    if age.isdigit() and int(age) > 0:
        age = int(age)
        break
    print("Please enter a valid positive number.")
\`\`\`

## Avoiding Infinite Loops
Always ensure the while condition will eventually become False, or use \`break\`.`, {
              starterCode: `# Guessing game\nimport random\n\nsecret = random.randint(1, 100)\nattempts = 0\n\nprint("I'm thinking of a number between 1 and 100.")\n\nwhile True:\n    guess = int(input("Your guess: "))\n    attempts += 1\n    \n    if guess < secret:\n        print("Too low!")\n    elif guess > secret:\n        print("Too high!")\n    else:\n        print(f"Correct! You got it in {attempts} attempts!")\n        break`,
              solutionCode: `import random\n\nsecret = random.randint(1, 100)\nattempts = 0\n\nprint("I'm thinking of a number between 1 and 100.")\n\nwhile True:\n    guess = int(input("Your guess: "))\n    attempts += 1\n    \n    if guess < secret:\n        print("Too low!")\n    elif guess > secret:\n        print("Too high!")\n    else:\n        print(f"Correct! You got it in {attempts} attempts!")\n        break`,
              codeLanguage: 'python',
              estimatedMinutes: 20,
              xpReward: 50,
              quiz: quiz('While Loops Quiz', [
                mcq('What does `break` do?', 'Exits the loop immediately', ['Skips to the next iteration', 'Restarts the loop'], '`break` completely exits the nearest enclosing loop.'),
                mcq('What does `continue` do?', 'Skips to the next iteration', ['Exits the loop', 'Pauses the loop'], '`continue` skips the rest of the current iteration.'),
                trueFalse('`while True:` creates an infinite loop unless `break` is used.', true),
              ]),
            }),
          ],
        },
        {
          title: 'Functions',
          description: 'Write reusable code with functions, parameters, and return values.',
          lessons: [
            lesson('Defining Functions', 'defining-functions', `# Defining Functions

## Basic Function

\`\`\`python
def greet():
    print("Hello, World!")

greet()   # Call the function
\`\`\`

## Parameters & Arguments

\`\`\`python
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")
greet("Bob")
\`\`\`

## Return Values

\`\`\`python
def add(a, b):
    return a + b

result = add(3, 5)
print(result)   # 8
\`\`\`

## Default Parameters

\`\`\`python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))              # Hello, Alice!
print(greet("Bob", "Good morning")) # Good morning, Bob!
\`\`\`

## Multiple Return Values

\`\`\`python
def get_min_max(numbers):
    return min(numbers), max(numbers)

lo, hi = get_min_max([3, 1, 4, 1, 5, 9])
print(f"Min: {lo}, Max: {hi}")   # Min: 1, Max: 9
\`\`\``, {
              starterCode: `# Write a function that calculates the area of a rectangle\ndef area(width, height):\n    return width * height\n\n# Write a function with a default parameter\ndef greet(name, greeting="Hello"):\n    return f"{greeting}, {name}!"\n\n# Test your functions\nprint(area(5, 3))           # Expected: 15\nprint(greet("Alice"))       # Expected: Hello, Alice!\nprint(greet("Bob", "Hi"))   # Expected: Hi, Bob!`,
              solutionCode: `def area(width, height):\n    return width * height\n\ndef greet(name, greeting="Hello"):\n    return f"{greeting}, {name}!"\n\nprint(area(5, 3))\nprint(greet("Alice"))\nprint(greet("Bob", "Hi"))`,
              codeLanguage: 'python',
              estimatedMinutes: 20,
              xpReward: 50,
              quiz: quiz('Functions Quiz', [
                mcq('What keyword defines a function in Python?', 'def', ['function', 'func'], 'Python uses `def` to define functions.'),
                trueFalse('A function can return multiple values using a tuple.', true, 'Use `return a, b` and unpack with `x, y = func()`.'),
                mcq('What happens if a function has no `return` statement?', 'It returns None', ['It raises an error', 'It returns 0'], 'Functions without `return` implicitly return `None`.'),
              ]),
            }),
            lesson('*args, **kwargs & Lambda', 'args-kwargs-lambda', `# *args, **kwargs & Lambda

## \`*args\` — Variable Positional Arguments

\`\`\`python
def total(*args):
    return sum(args)

print(total(1, 2, 3))       # 6
print(total(10, 20, 30, 40)) # 100
\`\`\`

## \`**kwargs\` — Variable Keyword Arguments

\`\`\`python
def profile(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

profile(name="Alice", age=25, city="Paris")
\`\`\`

## Lambda Functions

\`\`\`python
square = lambda x: x ** 2
print(square(5))   # 25

# Useful with sorted(), map(), filter()
names = ["Charlie", "Alice", "Bob"]
sorted_names = sorted(names, key=lambda n: len(n))
print(sorted_names)  # ['Bob', 'Alice', 'Charlie']
\`\`\`

## Combining with Built-in Functions

\`\`\`python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

evens = list(filter(lambda x: x % 2 == 0, numbers))
doubled = list(map(lambda x: x * 2, numbers))
print(evens)    # [2, 4, 6, 8, 10]
print(doubled)  # [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
\`\`\``, {
              starterCode: `# Write a function that accepts any number of scores and returns the average\ndef average(*args):\n    if len(args) == 0:\n        return 0\n    return sum(args) / len(args)\n\nprint(average(90, 85, 92))      # Expected: 89.0\nprint(average(100, 80, 70, 95)) # Expected: 86.25\n\n# Use a lambda to sort students by their score\nstudents = [("Alice", 92), ("Bob", 85), ("Charlie", 98)]\nstudents_sorted = sorted(students, key=lambda s: s[1], reverse=True)\nprint(students_sorted)`,
              solutionCode: `def average(*args):\n    if len(args) == 0:\n        return 0\n    return sum(args) / len(args)\n\nprint(average(90, 85, 92))\nprint(average(100, 80, 70, 95))\n\nstudents = [("Alice", 92), ("Bob", 85), ("Charlie", 98)]\nstudents_sorted = sorted(students, key=lambda s: s[1], reverse=True)\nprint(students_sorted)`,
              codeLanguage: 'python',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('args/kwargs/lambda Quiz', [
                mcq('What does `*args` collect?', 'Positional arguments into a tuple', ['Keyword arguments into a dict', 'All arguments into a list'], '`*args` packs extra positional arguments into a tuple.'),
                trueFalse('A lambda function can contain multiple statements.', false, 'Lambda functions are limited to a single expression.'),
              ]),
            }),
          ],
        },
        {
          title: 'Data Structures',
          description: 'Master lists, dictionaries, sets, and tuples.',
          lessons: [
            lesson('Lists & Tuples', 'lists-tuples', `# Lists & Tuples

## Lists — Mutable Ordered Collections

\`\`\`python
fruits = ["apple", "banana", "cherry"]
fruits.append("date")          # Add to end
fruits.insert(1, "blueberry")  # Insert at index
fruits.remove("banana")        # Remove by value
popped = fruits.pop()          # Remove last item
\`\`\`

## List Slicing

\`\`\`python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(numbers[2:5])    # [2, 3, 4]
print(numbers[:3])     # [0, 1, 2]
print(numbers[::2])    # [0, 2, 4, 6, 8]
print(numbers[::-1])   # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
\`\`\`

## Tuples — Immutable Ordered Collections

\`\`\`python
point = (3, 4)
x, y = point          # Tuple unpacking
# point[0] = 5        # ERROR! Tuples are immutable
\`\`\`

## Useful List Methods

| Method | Description |
|--------|-------------|
| \`.append(x)\` | Add to end |
| \`.extend(lst)\` | Add multiple items |
| \`.sort()\` | Sort in-place |
| \`.reverse()\` | Reverse in-place |
| \`.index(x)\` | Find index of x |
| \`.count(x)\` | Count occurrences |`, {
              starterCode: `# Working with lists\nnumbers = [5, 2, 8, 1, 9, 3, 7, 4, 6]\n\n# Sort the list\nnumbers.sort()\nprint("Sorted:", numbers)\n\n# Get a slice of the first 3 elements\nfirst_three = numbers[:3]\nprint("First three:", first_three)\n\n# Reverse the list\nnumbers.reverse()\nprint("Reversed:", numbers)\n\n# Tuple unpacking\ncoordinates = (10, 20, 30)\nx, y, z = coordinates\nprint(f"x={x}, y={y}, z={z}")`,
              solutionCode: `numbers = [5, 2, 8, 1, 9, 3, 7, 4, 6]\n\nnumbers.sort()\nprint("Sorted:", numbers)\n\nfirst_three = numbers[:3]\nprint("First three:", first_three)\n\nnumbers.reverse()\nprint("Reversed:", numbers)\n\ncoordinates = (10, 20, 30)\nx, y, z = coordinates\nprint(f"x={x}, y={y}, z={z}")`,
              codeLanguage: 'python',
              estimatedMinutes: 20,
              xpReward: 50,
              quiz: quiz('Lists & Tuples Quiz', [
                mcq('Which is mutable?', 'List', ['Tuple', 'Both'], 'Lists are mutable; tuples are immutable.'),
                mcq('What does `numbers[::-1]` do?', 'Reverses the list', ['Sorts the list', 'Removes the last element'], 'Step of -1 reverses the sequence.'),
                trueFalse('Tuples can be used as dictionary keys.', true, 'Because tuples are immutable (hashable), they can be dict keys.'),
              ]),
            }),
            lesson('Dictionaries & Sets', 'dicts-sets', `# Dictionaries & Sets

## Dictionaries — Key-Value Pairs

\`\`\`python
student = {
    "name": "Alice",
    "age": 25,
    "courses": ["Python", "Math"]
}

print(student["name"])          # Alice
student["gpa"] = 3.8            # Add new key
del student["age"]              # Remove key
print(student.get("email", "N/A"))  # Safe access
\`\`\`

## Iterating Over Dictionaries

\`\`\`python
for key, value in student.items():
    print(f"{key}: {value}")
\`\`\`

## Dictionary Comprehension

\`\`\`python
squares = {x: x**2 for x in range(6)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
\`\`\`

## Sets — Unique, Unordered Collections

\`\`\`python
colors = {"red", "green", "blue", "red"}  # duplicates removed
print(colors)  # {'red', 'green', 'blue'}

a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a | b)   # Union: {1, 2, 3, 4, 5, 6}
print(a & b)   # Intersection: {3, 4}
print(a - b)   # Difference: {1, 2}
\`\`\``, {
              starterCode: `# Create a word frequency counter\ntext = "the quick brown fox jumps over the lazy dog the fox"\nwords = text.split()\n\n# Count word frequencies using a dictionary\nfreq = {}\nfor word in words:\n    freq[word] = freq.get(word, 0) + 1\n\nprint("Word frequencies:", freq)\n\n# Find unique words using a set\nunique_words = set(words)\nprint(f"Unique words ({len(unique_words)}): {unique_words}")`,
              solutionCode: `text = "the quick brown fox jumps over the lazy dog the fox"\nwords = text.split()\n\nfreq = {}\nfor word in words:\n    freq[word] = freq.get(word, 0) + 1\n\nprint("Word frequencies:", freq)\n\nunique_words = set(words)\nprint(f"Unique words ({len(unique_words)}): {unique_words}")`,
              codeLanguage: 'python',
              estimatedMinutes: 20,
              xpReward: 50,
              quiz: quiz('Dicts & Sets Quiz', [
                mcq('What does `dict.get(key, default)` return if key is missing?', 'The default value', ['None', 'Raises KeyError'], '`.get()` returns the default instead of raising an error.'),
                trueFalse('Sets automatically remove duplicate values.', true, 'Sets only store unique elements.'),
              ]),
            }),
          ],
        },
        {
          title: 'Object-Oriented Programming',
          description: 'Learn classes, objects, inheritance, and encapsulation.',
          lessons: [
            lesson('Classes & Objects', 'classes-objects', `# Classes & Objects

## Defining a Class

\`\`\`python
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed
    
    def bark(self):
        return f"{self.name} says Woof!"
    
    def __str__(self):
        return f"{self.name} ({self.breed})"

# Creating objects
rex = Dog("Rex", "German Shepherd")
print(rex.bark())    # Rex says Woof!
print(rex)           # Rex (German Shepherd)
\`\`\`

## Key Concepts
- **\`__init__\`**: Constructor — called when creating an object
- **\`self\`**: Reference to the current instance
- **\`__str__\`**: String representation of the object
- **Instance variables**: Unique to each object (\`self.name\`)

## Class vs Instance Variables

\`\`\`python
class Student:
    school = "Code Academy"    # Class variable (shared)
    
    def __init__(self, name):
        self.name = name       # Instance variable (unique)
\`\`\``, {
              starterCode: `# Create a BankAccount class\nclass BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n    \n    def deposit(self, amount):\n        self.balance += amount\n        return f"Deposited \\\${amount}. Balance: \\\${self.balance}"\n    \n    def withdraw(self, amount):\n        if amount > self.balance:\n            return "Insufficient funds!"\n        self.balance -= amount\n        return f"Withdrew \\\${amount}. Balance: \\\${self.balance}"\n    \n    def __str__(self):\n        return f"Account({self.owner}: \\\${self.balance})"\n\n# Test it\naccount = BankAccount("Alice", 1000)\nprint(account)\nprint(account.deposit(500))\nprint(account.withdraw(200))\nprint(account.withdraw(2000))`,
              solutionCode: `class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n    \n    def deposit(self, amount):\n        self.balance += amount\n        return f"Deposited \\\${amount}. Balance: \\\${self.balance}"\n    \n    def withdraw(self, amount):\n        if amount > self.balance:\n            return "Insufficient funds!"\n        self.balance -= amount\n        return f"Withdrew \\\${amount}. Balance: \\\${self.balance}"\n    \n    def __str__(self):\n        return f"Account({self.owner}: \\\${self.balance})"\n\naccount = BankAccount("Alice", 1000)\nprint(account)\nprint(account.deposit(500))\nprint(account.withdraw(200))\nprint(account.withdraw(2000))`,
              codeLanguage: 'python',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('Classes & Objects Quiz', [
                mcq('What is `__init__` in a Python class?', 'The constructor method', ['The destructor', 'A static method'], '`__init__` is called automatically when creating a new object.'),
                mcq('What does `self` refer to?', 'The current instance', ['The class itself', 'The parent class'], '`self` is a reference to the instance calling the method.'),
                trueFalse('Class variables are shared across all instances.', true, 'Class variables belong to the class, not individual instances.'),
              ]),
            }),
            lesson('Inheritance & Polymorphism', 'inheritance', `# Inheritance & Polymorphism

## Basic Inheritance

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"
\`\`\`

## Polymorphism — Same Interface, Different Behavior

\`\`\`python
animals = [Dog("Rex"), Cat("Whiskers"), Dog("Buddy")]
for animal in animals:
    print(animal.speak())
\`\`\`

## \`super()\` — Call the Parent

\`\`\`python
class SavingsAccount(BankAccount):
    def __init__(self, owner, balance, interest_rate):
        super().__init__(owner, balance)
        self.interest_rate = interest_rate
    
    def add_interest(self):
        interest = self.balance * self.interest_rate
        self.deposit(interest)
        return f"Added \\\${interest:.2f} interest"
\`\`\`

## \`isinstance()\` Check

\`\`\`python
rex = Dog("Rex")
print(isinstance(rex, Dog))     # True
print(isinstance(rex, Animal))  # True (inheritance chain)
\`\`\``, {
              starterCode: `# Create a Shape hierarchy\nclass Shape:\n    def area(self):\n        return 0\n    \n    def __str__(self):\n        return f"{self.__class__.__name__}: area = {self.area():.2f}"\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    \n    def area(self):\n        return 3.14159 * self.radius ** 2\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    \n    def area(self):\n        return self.width * self.height\n\n# Polymorphism in action\nshapes = [Circle(5), Rectangle(4, 6), Circle(3)]\nfor shape in shapes:\n    print(shape)`,
              solutionCode: `class Shape:\n    def area(self):\n        return 0\n    def __str__(self):\n        return f"{self.__class__.__name__}: area = {self.area():.2f}"\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    def area(self):\n        return 3.14159 * self.radius ** 2\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    def area(self):\n        return self.width * self.height\n\nshapes = [Circle(5), Rectangle(4, 6), Circle(3)]\nfor shape in shapes:\n    print(shape)`,
              codeLanguage: 'python',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('Inheritance Quiz', [
                mcq('What does `super().__init__()` do?', 'Calls the parent class constructor', ['Creates a new class', 'Deletes the parent'], '`super()` gives access to the parent class methods.'),
                trueFalse('Polymorphism means different classes can have methods with the same name.', true),
              ]),
            }),
          ],
        },
        {
          title: 'File I/O & Error Handling',
          description: 'Read/write files and handle errors gracefully.',
          lessons: [
            lesson('File Operations', 'file-operations', `# File Operations

## Writing to a File

\`\`\`python
with open("output.txt", "w") as f:
    f.write("Hello, File!\\n")
    f.write("Second line\\n")
\`\`\`

## Reading a File

\`\`\`python
with open("output.txt", "r") as f:
    content = f.read()        # Read entire file
    print(content)

# Read line by line
with open("output.txt", "r") as f:
    for line in f:
        print(line.strip())
\`\`\`

## File Modes
| Mode | Description |
|------|-------------|
| \`"r"\` | Read (default) |
| \`"w"\` | Write (overwrites) |
| \`"a"\` | Append |
| \`"x"\` | Create (fails if exists) |

## Working with CSV Data

\`\`\`python
import csv

with open("data.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["Name", "Age", "City"])
    writer.writerow(["Alice", 25, "Paris"])
\`\`\`

## The \`with\` Statement
Always use \`with\` for file operations — it automatically closes the file, even if an error occurs.`, {
              starterCode: `# File I/O demo (simulated)\ndata = [\n    {"name": "Alice", "score": 92},\n    {"name": "Bob", "score": 85},\n    {"name": "Charlie", "score": 98},\n]\n\n# Simulate writing a report\nreport = "Student Report\\n" + "=" * 30 + "\\n"\nfor student in data:\n    report += f"{student['name']}: {student['score']}%\\n"\n\navg = sum(s['score'] for s in data) / len(data)\nreport += f"\\nAverage: {avg:.1f}%"\n\nprint(report)`,
              solutionCode: `data = [\n    {"name": "Alice", "score": 92},\n    {"name": "Bob", "score": 85},\n    {"name": "Charlie", "score": 98},\n]\n\nreport = "Student Report\\n" + "=" * 30 + "\\n"\nfor student in data:\n    report += f"{student['name']}: {student['score']}%\\n"\n\navg = sum(s['score'] for s in data) / len(data)\nreport += f"\\nAverage: {avg:.1f}%"\n\nprint(report)`,
              codeLanguage: 'python',
              estimatedMinutes: 20,
              xpReward: 50,
              quiz: quiz('File I/O Quiz', [
                mcq('What does `open("file.txt", "a")` do?', 'Opens for appending', ['Opens for reading', 'Opens and overwrites'], 'Mode `"a"` appends to the end of the file.'),
                trueFalse('The `with` statement automatically closes the file.', true, '`with` manages the file context and ensures proper cleanup.'),
              ]),
            }),
            lesson('Exception Handling', 'exception-handling', `# Exception Handling

## try/except

\`\`\`python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
\`\`\`

## Multiple Exceptions

\`\`\`python
try:
    value = int(input("Enter a number: "))
    result = 100 / value
except ValueError:
    print("That's not a valid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
\`\`\`

## try/except/else/finally

\`\`\`python
try:
    f = open("data.txt", "r")
    content = f.read()
except FileNotFoundError:
    print("File not found!")
else:
    print(f"File content: {content}")  # Runs if no exception
finally:
    print("Cleanup done.")             # Always runs
\`\`\`

## Raising Exceptions

\`\`\`python
def set_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative!")
    return age
\`\`\`

## Custom Exceptions

\`\`\`python
class InsufficientFundsError(Exception):
    pass

def withdraw(balance, amount):
    if amount > balance:
        raise InsufficientFundsError(f"Need \\\${amount}, have \\\${balance}")
    return balance - amount
\`\`\``, {
              starterCode: `# Safe division function with error handling\ndef safe_divide(a, b):\n    try:\n        result = a / b\n    except ZeroDivisionError:\n        return "Error: Cannot divide by zero!"\n    except TypeError:\n        return "Error: Invalid types for division!"\n    else:\n        return f"{a} / {b} = {result}"\n\n# Test cases\nprint(safe_divide(10, 3))\nprint(safe_divide(10, 0))\nprint(safe_divide("10", 3))\n\n# Custom exception example\nclass NegativeValueError(Exception):\n    pass\n\ndef calculate_square_root(n):\n    if n < 0:\n        raise NegativeValueError(f"Cannot compute square root of {n}")\n    return n ** 0.5\n\ntry:\n    print(calculate_square_root(16))\n    print(calculate_square_root(-4))\nexcept NegativeValueError as e:\n    print(f"Caught: {e}")`,
              solutionCode: `def safe_divide(a, b):\n    try:\n        result = a / b\n    except ZeroDivisionError:\n        return "Error: Cannot divide by zero!"\n    except TypeError:\n        return "Error: Invalid types for division!"\n    else:\n        return f"{a} / {b} = {result}"\n\nprint(safe_divide(10, 3))\nprint(safe_divide(10, 0))\nprint(safe_divide("10", 3))\n\nclass NegativeValueError(Exception):\n    pass\n\ndef calculate_square_root(n):\n    if n < 0:\n        raise NegativeValueError(f"Cannot compute square root of {n}")\n    return n ** 0.5\n\ntry:\n    print(calculate_square_root(16))\n    print(calculate_square_root(-4))\nexcept NegativeValueError as e:\n    print(f"Caught: {e}")`,
              codeLanguage: 'python',
              estimatedMinutes: 20,
              xpReward: 50,
              quiz: quiz('Exception Handling Quiz', [
                mcq('When does the `finally` block execute?', 'Always, regardless of exceptions', ['Only when an exception occurs', 'Only when no exception occurs'], '`finally` always executes — for cleanup like closing files.'),
                mcq('What keyword raises an exception?', 'raise', ['throw', 'error'], 'Python uses `raise` to throw exceptions.'),
                trueFalse('You can create custom exception classes by inheriting from Exception.', true),
              ]),
            }),
          ],
        },
      ],
    },

    // ━━━━━━━━━━━━━━━━━━━ JAVA ESSENTIALS ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Java Essentials',
      slug: 'java-essentials',
      description: 'Master Java fundamentals — types, OOP, collections, exceptions, and streams. Build a strong foundation for enterprise development.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 25,
      resources: [
        { resourceType: 'youtube', title: 'Java Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=eIrMbAQSU34', author: 'Programming with Mosh', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'Think Java (Free)', url: 'https://greenteapress.com/wp/think-java-2e/', author: 'Allen B. Downey' },
        { resourceType: 'article', title: 'Java Documentation', url: 'https://docs.oracle.com/en/java/', author: 'Oracle' },
      ],
      modules: [
        {
          title: 'Java Foundations',
          description: 'Set up Java and learn syntax basics.',
          lessons: [
            setupLesson('Java Essentials', 'java-essentials', 'java',
              `1. Download JDK 21+ from [adoptium.net](https://adoptium.net/)
2. Install and verify: \`java --version\` and \`javac --version\`
3. Install VS Code with the "Extension Pack for Java"`,
              `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}`,
              `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}`,
              '- JDK 17+ required'
            ),
            lesson('Variables & Types', 'java-variables-types', `# Variables & Types in Java

Java is **statically typed** — every variable must have a declared type.

## Primitive Types

\`\`\`java
int age = 25;
double price = 19.99;
boolean isActive = true;
char grade = 'A';
long bigNumber = 1_000_000_000L;
\`\`\`

## Strings (Reference Type)

\`\`\`java
String name = "Alice";
String greeting = "Hello, " + name + "!";
int length = name.length();         // 5
String upper = name.toUpperCase();  // "ALICE"
\`\`\`

## Type Casting

\`\`\`java
// Widening (automatic)
int x = 10;
double y = x;  // 10.0

// Narrowing (explicit)
double pi = 3.14;
int rounded = (int) pi;  // 3
\`\`\`

## Constants

\`\`\`java
final double PI = 3.14159;
// PI = 3.14;  // ERROR! final variables cannot be reassigned
\`\`\``, {
              starterCode: `public class Main {\n    public static void main(String[] args) {\n        // Declare variables of different types\n        String name = "Alice";\n        int age = 25;\n        double gpa = 3.85;\n        boolean isStudent = true;\n\n        // Print a formatted message\n        System.out.println("Name: " + name);\n        System.out.println("Age: " + age);\n        System.out.printf("GPA: %.2f%n", gpa);\n        System.out.println("Student: " + isStudent);\n    }\n}`,
              solutionCode: `public class Main {\n    public static void main(String[] args) {\n        String name = "Alice";\n        int age = 25;\n        double gpa = 3.85;\n        boolean isStudent = true;\n\n        System.out.println("Name: " + name);\n        System.out.println("Age: " + age);\n        System.out.printf("GPA: %.2f%n", gpa);\n        System.out.println("Student: " + isStudent);\n    }\n}`,
              codeLanguage: 'java',
              estimatedMinutes: 20,
              xpReward: 50,
              quiz: quiz('Java Variables Quiz', [
                mcq('Which is NOT a primitive type in Java?', 'String', ['int', 'boolean'], 'String is a reference type (class), not a primitive.'),
                trueFalse('Java is dynamically typed like Python.', false, 'Java is statically typed — types must be declared.'),
                mcq('What does `final` mean for a variable?', 'It cannot be reassigned', ['It can only be used once', 'It is automatically deleted'], '`final` creates a constant in Java.'),
              ]),
            }),
            lesson('Control Flow in Java', 'java-control-flow', `# Control Flow in Java

## if/else

\`\`\`java
int score = 85;
if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else {
    System.out.println("C or below");
}
\`\`\`

## Switch (Enhanced)

\`\`\`java
String day = "Monday";
switch (day) {
    case "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" ->
        System.out.println("Weekday");
    case "Saturday", "Sunday" ->
        System.out.println("Weekend");
}
\`\`\`

## For Loop

\`\`\`java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
\`\`\`

## Enhanced For Loop

\`\`\`java
String[] fruits = {"apple", "banana", "cherry"};
for (String fruit : fruits) {
    System.out.println(fruit);
}
\`\`\`

## While / Do-While

\`\`\`java
int count = 0;
while (count < 3) {
    System.out.println(count++);
}

// do-while runs at least once
do {
    System.out.println("Runs at least once");
} while (false);
\`\`\``, {
              starterCode: `public class Main {\n    public static void main(String[] args) {\n        // FizzBuzz: print 1-20\n        // If divisible by 3: "Fizz"\n        // If divisible by 5: "Buzz"\n        // If divisible by both: "FizzBuzz"\n        // Otherwise: the number\n        \n        for (int i = 1; i <= 20; i++) {\n            if (i % 15 == 0) {\n                System.out.println("FizzBuzz");\n            } else if (i % 3 == 0) {\n                System.out.println("Fizz");\n            } else if (i % 5 == 0) {\n                System.out.println("Buzz");\n            } else {\n                System.out.println(i);\n            }\n        }\n    }\n}`,
              solutionCode: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 20; i++) {\n            if (i % 15 == 0) {\n                System.out.println("FizzBuzz");\n            } else if (i % 3 == 0) {\n                System.out.println("Fizz");\n            } else if (i % 5 == 0) {\n                System.out.println("Buzz");\n            } else {\n                System.out.println(i);\n            }\n        }\n    }\n}`,
              codeLanguage: 'java',
              estimatedMinutes: 20,
              xpReward: 50,
              quiz: quiz('Java Control Flow Quiz', [
                mcq('What does `break` do in a switch statement?', 'Exits the switch block', ['Skips to the next case', 'Ends the program'], 'Without `break`, execution falls through to subsequent cases.'),
                trueFalse('A do-while loop always executes at least once.', true, 'The condition is checked after the first iteration.'),
              ]),
            }),
          ],
        },
        {
          title: 'Object-Oriented Java',
          description: 'Master classes, inheritance, interfaces, and abstract classes.',
          lessons: [
            lesson('Classes & Methods', 'java-classes', `# Classes & Methods in Java

## Defining a Class

\`\`\`java
public class Car {
    // Fields (instance variables)
    private String make;
    private String model;
    private int year;

    // Constructor
    public Car(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Methods
    public String getInfo() {
        return year + " " + make + " " + model;
    }

    // Getters and Setters
    public String getMake() { return make; }
    public void setMake(String make) { this.make = make; }
    
    @Override
    public String toString() {
        return getInfo();
    }
}
\`\`\`

## Encapsulation
- Use \`private\` for fields
- Provide \`public\` getters/setters
- Control access to internal state

## Static Members

\`\`\`java
public class MathHelper {
    public static int add(int a, int b) {
        return a + b;
    }
}
// Call without creating an object:
int sum = MathHelper.add(3, 5);
\`\`\``, {
              starterCode: `public class Main {\n    public static void main(String[] args) {\n        // Simple class demo\n        System.out.println("=== Car Class Demo ===");\n        \n        String make = "Toyota";\n        String model = "Camry";\n        int year = 2024;\n        \n        String info = year + " " + make + " " + model;\n        System.out.println("Car: " + info);\n        \n        // Static method demo\n        int sum = add(10, 20);\n        System.out.println("Sum: " + sum);\n    }\n    \n    public static int add(int a, int b) {\n        return a + b;\n    }\n}`,
              solutionCode: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("=== Car Class Demo ===");\n        String make = "Toyota";\n        String model = "Camry";\n        int year = 2024;\n        String info = year + " " + make + " " + model;\n        System.out.println("Car: " + info);\n        int sum = add(10, 20);\n        System.out.println("Sum: " + sum);\n    }\n    public static int add(int a, int b) {\n        return a + b;\n    }\n}`,
              codeLanguage: 'java',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('Java Classes Quiz', [
                mcq('What does `private` mean for a field?', 'Accessible only within the class', ['Accessible anywhere', 'Accessible in the package'], 'Private fields enforce encapsulation.'),
                mcq('What is `this` in Java?', 'Reference to the current object', ['Reference to the parent class', 'A keyword for static methods'], '`this` refers to the current instance.'),
                trueFalse('Static methods can be called without creating an object.', true),
              ]),
            }),
            lesson('Inheritance & Interfaces', 'java-inheritance', `# Inheritance & Interfaces

## Inheritance with \`extends\`

\`\`\`java
public class Animal {
    protected String name;
    public Animal(String name) { this.name = name; }
    public String speak() { return "..."; }
}

public class Dog extends Animal {
    public Dog(String name) { super(name); }
    @Override
    public String speak() { return name + " says Woof!"; }
}
\`\`\`

## Interfaces — Contracts

\`\`\`java
public interface Drawable {
    void draw();
    default void erase() {
        System.out.println("Erasing...");
    }
}

public class Circle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing a circle");
    }
}
\`\`\`

## Abstract Classes

\`\`\`java
public abstract class Shape {
    public abstract double area();
    
    public void describe() {
        System.out.println("Area: " + area());
    }
}
\`\`\`

## Key Differences
| Feature | Abstract Class | Interface |
|---------|---------------|-----------|
| Fields | Yes | Constants only |
| Constructors | Yes | No |
| Multiple | Single | Multiple |
| Methods | Abstract + concrete | Abstract + default |`, {
              starterCode: `public class Main {\n    public static void main(String[] args) {\n        // Demonstrate polymorphism\n        System.out.println("=== Polymorphism Demo ===");\n        \n        // Simulating different shapes\n        double circleArea = 3.14159 * 5 * 5;\n        double rectArea = 4.0 * 6.0;\n        double triangleArea = 0.5 * 8 * 3;\n        \n        System.out.printf("Circle (r=5): %.2f%n", circleArea);\n        System.out.printf("Rectangle (4x6): %.2f%n", rectArea);\n        System.out.printf("Triangle (b=8,h=3): %.2f%n", triangleArea);\n    }\n}`,
              solutionCode: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("=== Polymorphism Demo ===");\n        double circleArea = 3.14159 * 5 * 5;\n        double rectArea = 4.0 * 6.0;\n        double triangleArea = 0.5 * 8 * 3;\n        System.out.printf("Circle (r=5): %.2f%n", circleArea);\n        System.out.printf("Rectangle (4x6): %.2f%n", rectArea);\n        System.out.printf("Triangle (b=8,h=3): %.2f%n", triangleArea);\n    }\n}`,
              codeLanguage: 'java',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('Java Inheritance Quiz', [
                mcq('Can a Java class implement multiple interfaces?', 'Yes', ['No', 'Only with abstract classes'], 'Java supports multiple interface implementation.'),
                trueFalse('Abstract classes can have constructors.', true, 'Abstract classes can have constructors called by subclasses via `super()`.'),
                mcq('What does `@Override` do?', 'Marks a method as overriding a parent method', ['Creates a new method', 'Makes the method final'], '`@Override` is an annotation for compile-time checking.'),
              ]),
            }),
          ],
        },
        {
          title: 'Collections & Streams',
          description: 'Work with lists, maps, and functional-style stream processing.',
          lessons: [
            lesson('Collections Framework', 'java-collections', `# Collections Framework

## ArrayList

\`\`\`java
import java.util.*;

List<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
names.add("Charlie");
names.remove("Bob");
System.out.println(names.get(0));  // Alice
System.out.println(names.size());  // 2
\`\`\`

## HashMap

\`\`\`java
Map<String, Integer> scores = new HashMap<>();
scores.put("Alice", 92);
scores.put("Bob", 85);
int aliceScore = scores.get("Alice");  // 92
scores.getOrDefault("Eve", 0);         // 0

for (Map.Entry<String, Integer> entry : scores.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}
\`\`\`

## HashSet

\`\`\`java
Set<String> colors = new HashSet<>();
colors.add("red");
colors.add("blue");
colors.add("red");   // Duplicate ignored
System.out.println(colors.size());  // 2
\`\`\`

## Collections Hierarchy
- **List**: Ordered, allows duplicates (ArrayList, LinkedList)
- **Set**: Unordered, no duplicates (HashSet, TreeSet)
- **Map**: Key-value pairs (HashMap, TreeMap)`, {
              starterCode: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // ArrayList demo\n        List<String> students = new ArrayList<>(Arrays.asList(\n            "Alice", "Bob", "Charlie", "Diana"\n        ));\n        \n        System.out.println("Students: " + students);\n        students.add("Eve");\n        students.remove("Bob");\n        System.out.println("Updated: " + students);\n        \n        // HashMap demo\n        Map<String, Integer> grades = new HashMap<>();\n        grades.put("Alice", 95);\n        grades.put("Charlie", 88);\n        grades.put("Diana", 92);\n        \n        for (var entry : grades.entrySet()) {\n            System.out.println(entry.getKey() + ": " + entry.getValue());\n        }\n    }\n}`,
              solutionCode: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> students = new ArrayList<>(Arrays.asList(\n            "Alice", "Bob", "Charlie", "Diana"\n        ));\n        System.out.println("Students: " + students);\n        students.add("Eve");\n        students.remove("Bob");\n        System.out.println("Updated: " + students);\n        \n        Map<String, Integer> grades = new HashMap<>();\n        grades.put("Alice", 95);\n        grades.put("Charlie", 88);\n        grades.put("Diana", 92);\n        for (var entry : grades.entrySet()) {\n            System.out.println(entry.getKey() + ": " + entry.getValue());\n        }\n    }\n}`,
              codeLanguage: 'java',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('Collections Quiz', [
                mcq('Which allows duplicates?', 'ArrayList', ['HashSet', 'HashMap keys'], 'Lists allow duplicates; Sets and Map keys do not.'),
                trueFalse('HashMap maintains insertion order.', false, 'HashMap does not guarantee order. Use LinkedHashMap for insertion order.'),
              ]),
            }),
          ],
        },
      ],
    },

    // ━━━━━━━━━━━━━━━━━━━ C++ FUNDAMENTALS ━━━━━━━━━━━━━━━━━━━
    {
      title: 'C++ Fundamentals',
      slug: 'cpp-fundamentals',
      description: 'Learn C++ from the ground up — memory management, pointers, templates, and the STL. Build performance-critical applications.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 25,
      resources: [
        { resourceType: 'youtube', title: 'C++ Full Course', url: 'https://www.youtube.com/watch?v=vLnPwxZdW4Y', author: 'Bro Code', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'learncpp.com', url: 'https://www.learncpp.com/', author: 'Alex' },
        { resourceType: 'article', title: 'C++ Reference', url: 'https://en.cppreference.com/', author: 'cppreference.com' },
      ],
      modules: [
        {
          title: 'C++ Basics',
          description: 'Write your first C++ programs with variables, I/O, and control flow.',
          lessons: [
            setupLesson('C++ Fundamentals', 'cpp-fundamentals', 'cpp',
              `1. Install a C++ compiler (g++ via MinGW on Windows, or Xcode CLI on macOS)
2. Verify: \`g++ --version\`
3. Install VS Code with the C/C++ extension`,
              `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, C++!" << endl;\n    return 0;\n}`,
              `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, C++!" << endl;\n    return 0;\n}`,
              '- g++ or clang++ compiler required'
            ),
            lesson('Variables & Memory', 'cpp-variables-memory', `# Variables & Memory in C++

## Basic Types

\`\`\`cpp
int age = 25;
double pi = 3.14159;
char letter = 'A';
bool isActive = true;
std::string name = "Alice";
\`\`\`

## Memory Sizes

\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    cout << "int: " << sizeof(int) << " bytes" << endl;       // 4
    cout << "double: " << sizeof(double) << " bytes" << endl; // 8
    cout << "char: " << sizeof(char) << " bytes" << endl;     // 1
    cout << "bool: " << sizeof(bool) << " bytes" << endl;     // 1
    return 0;
}
\`\`\`

## Pointers — Addresses in Memory

\`\`\`cpp
int x = 42;
int* ptr = &x;     // ptr stores the address of x
cout << *ptr;       // 42 (dereference — get the value at address)
cout << ptr;        // Memory address (e.g., 0x7fff5fbff8ac)
\`\`\`

## References

\`\`\`cpp
int x = 10;
int& ref = x;   // ref is an alias for x
ref = 20;
cout << x;       // 20 (x was modified through ref)
\`\`\``, {
              starterCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 42;\n    int* ptr = &x;\n    \n    cout << "Value of x: " << x << endl;\n    cout << "Address of x: " << ptr << endl;\n    cout << "Value via pointer: " << *ptr << endl;\n    \n    // Modify through pointer\n    *ptr = 100;\n    cout << "Modified x: " << x << endl;\n    \n    return 0;\n}`,
              solutionCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 42;\n    int* ptr = &x;\n    \n    cout << "Value of x: " << x << endl;\n    cout << "Address of x: " << ptr << endl;\n    cout << "Value via pointer: " << *ptr << endl;\n    \n    *ptr = 100;\n    cout << "Modified x: " << x << endl;\n    \n    return 0;\n}`,
              codeLanguage: 'cpp',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('C++ Memory Quiz', [
                mcq('What does `&x` return?', 'The memory address of x', ['The value of x', 'A copy of x'], '`&` is the address-of operator.'),
                mcq('What does `*ptr` do?', 'Dereferences the pointer (gets the value)', ['Gets the address', 'Multiplies by pointer'], '`*` on a pointer gives you the value stored at that address.'),
                trueFalse('References in C++ can be reassigned to another variable after initialization.', false, 'References are bound at initialization and cannot be reseated.'),
              ]),
            }),
          ],
        },
        {
          title: 'OOP & Templates',
          description: 'Object-oriented design and generic programming with templates.',
          lessons: [
            lesson('Classes in C++', 'cpp-classes', `# Classes in C++

## Defining a Class

\`\`\`cpp
class Rectangle {
private:
    double width, height;

public:
    // Constructor
    Rectangle(double w, double h) : width(w), height(h) {}
    
    // Methods
    double area() const { return width * height; }
    double perimeter() const { return 2 * (width + height); }
    
    // Getter
    double getWidth() const { return width; }
};
\`\`\`

## Constructors & Destructors

\`\`\`cpp
class MyClass {
public:
    MyClass() { cout << "Created!" << endl; }   // Constructor
    ~MyClass() { cout << "Destroyed!" << endl; } // Destructor
};
\`\`\`

## Operator Overloading

\`\`\`cpp
class Vector2D {
public:
    double x, y;
    Vector2D(double x, double y) : x(x), y(y) {}
    
    Vector2D operator+(const Vector2D& other) const {
        return Vector2D(x + other.x, y + other.y);
    }
};
\`\`\``, {
              starterCode: `#include <iostream>\nusing namespace std;\n\n// Simple class demo\nint main() {\n    double width = 5.0, height = 3.0;\n    double area = width * height;\n    double perimeter = 2 * (width + height);\n    \n    cout << "Rectangle " << width << " x " << height << endl;\n    cout << "Area: " << area << endl;\n    cout << "Perimeter: " << perimeter << endl;\n    \n    return 0;\n}`,
              solutionCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    double width = 5.0, height = 3.0;\n    double area = width * height;\n    double perimeter = 2 * (width + height);\n    \n    cout << "Rectangle " << width << " x " << height << endl;\n    cout << "Area: " << area << endl;\n    cout << "Perimeter: " << perimeter << endl;\n    \n    return 0;\n}`,
              codeLanguage: 'cpp',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('C++ Classes Quiz', [
                mcq('What is `const` after a method declaration?', 'The method does not modify the object', ['The return value is constant', 'The method is static'], '`const` member functions promise not to modify `this`.'),
                trueFalse('C++ destructors are called automatically when an object goes out of scope.', true),
              ]),
            }),
            lesson('Templates & STL', 'cpp-templates-stl', `# Templates & STL

## Function Templates

\`\`\`cpp
template <typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}

cout << maximum(3, 7);      // 7
cout << maximum(3.5, 2.1);  // 3.5
\`\`\`

## STL Containers

\`\`\`cpp
#include <vector>
#include <map>
#include <algorithm>

// Vector
vector<int> nums = {5, 2, 8, 1, 9};
sort(nums.begin(), nums.end());
nums.push_back(10);

// Map
map<string, int> scores;
scores["Alice"] = 95;
scores["Bob"] = 87;

for (auto& [name, score] : scores) {
    cout << name << ": " << score << endl;
}
\`\`\`

## STL Algorithms

\`\`\`cpp
vector<int> v = {1, 2, 3, 4, 5};
auto it = find(v.begin(), v.end(), 3);
int count = count_if(v.begin(), v.end(), [](int x) { return x > 3; });
\`\`\``, {
              starterCode: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> nums = {5, 2, 8, 1, 9, 3, 7, 4, 6};\n    \n    cout << "Original: ";\n    for (int n : nums) cout << n << " ";\n    cout << endl;\n    \n    sort(nums.begin(), nums.end());\n    cout << "Sorted: ";\n    for (int n : nums) cout << n << " ";\n    cout << endl;\n    \n    // Find an element\n    auto it = find(nums.begin(), nums.end(), 7);\n    if (it != nums.end()) {\n        cout << "Found 7 at index: " << distance(nums.begin(), it) << endl;\n    }\n    \n    return 0;\n}`,
              solutionCode: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> nums = {5, 2, 8, 1, 9, 3, 7, 4, 6};\n    \n    cout << "Original: ";\n    for (int n : nums) cout << n << " ";\n    cout << endl;\n    \n    sort(nums.begin(), nums.end());\n    cout << "Sorted: ";\n    for (int n : nums) cout << n << " ";\n    cout << endl;\n    \n    auto it = find(nums.begin(), nums.end(), 7);\n    if (it != nums.end()) {\n        cout << "Found 7 at index: " << distance(nums.begin(), it) << endl;\n    }\n    \n    return 0;\n}`,
              codeLanguage: 'cpp',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('Templates & STL Quiz', [
                mcq('What does `template <typename T>` declare?', 'A generic type parameter', ['A new class', 'A macro'], 'Templates allow writing code that works with any type.'),
                trueFalse('STL vectors automatically manage memory and resize as needed.', true),
              ]),
            }),
          ],
        },
      ],
    },

    // ━━━━━━━━━━━━━━━━━━━ RUST PROGRAMMING ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Rust Programming',
      slug: 'rust-programming',
      description: 'Learn Rust — the language of safety and performance. Master ownership, borrowing, traits, and fearless concurrency.',
      difficulty: 'advanced',
      language: 'en',
      estimatedHours: 30,
      resources: [
        { resourceType: 'ebook', title: 'The Rust Programming Language (Free)', url: 'https://doc.rust-lang.org/book/', author: 'Steve Klabnik & Carol Nichols' },
        { resourceType: 'youtube', title: 'Rust Crash Course', url: 'https://www.youtube.com/watch?v=zF34dRivLOw', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'article', title: 'Rust by Example', url: 'https://doc.rust-lang.org/rust-by-example/', author: 'rust-lang.org' },
      ],
      modules: [
        {
          title: 'Rust Foundations',
          description: 'Get started with Rust syntax and the ownership model.',
          lessons: [
            setupLesson('Rust Programming', 'rust-programming', 'rust',
              `1. Install Rust via [rustup.rs](https://rustup.rs/)
2. Verify: \`rustc --version\` and \`cargo --version\`
3. Create a project: \`cargo new hello_rust\``,
              `fn main() {\n    println!("Hello, Rust!");\n}`,
              `fn main() {\n    println!("Hello, Rust!");\n}`,
              '- Rust toolchain via rustup'
            ),
            lesson('Ownership & Borrowing', 'ownership-borrowing', `# Ownership & Borrowing

Rust's **ownership system** eliminates memory bugs at compile time — no garbage collector needed.

## Ownership Rules
1. Each value has exactly **one owner**
2. When the owner goes out of scope, the value is **dropped**
3. Values can be **moved** or **borrowed**

## Moving Ownership

\`\`\`rust
let s1 = String::from("hello");
let s2 = s1;          // s1 is MOVED to s2
// println!("{}", s1); // ERROR! s1 is no longer valid
println!("{}", s2);    // OK
\`\`\`

## Borrowing with References

\`\`\`rust
fn print_length(s: &String) {   // Borrow (immutable reference)
    println!("Length: {}", s.len());
}

let s = String::from("hello");
print_length(&s);    // Borrow s
println!("{}", s);   // s is still valid!
\`\`\`

## Mutable References

\`\`\`rust
fn add_world(s: &mut String) {
    s.push_str(", world!");
}

let mut s = String::from("hello");
add_world(&mut s);
println!("{}", s);  // "hello, world!"
\`\`\`

## The Rule
You can have **either**:
- One mutable reference, **OR**
- Any number of immutable references

Never both at the same time!`, {
              starterCode: `fn main() {\n    // Ownership demo\n    let s1 = String::from("hello");\n    let s2 = s1.clone(); // Clone instead of move\n    println!("s1: {}, s2: {}", s1, s2);\n    \n    // Borrowing demo\n    let s3 = String::from("Rust is fast");\n    let length = calculate_length(&s3);\n    println!("'{}' has {} characters", s3, length);\n}\n\nfn calculate_length(s: &String) -> usize {\n    s.len()\n}`,
              solutionCode: `fn main() {\n    let s1 = String::from("hello");\n    let s2 = s1.clone();\n    println!("s1: {}, s2: {}", s1, s2);\n    \n    let s3 = String::from("Rust is fast");\n    let length = calculate_length(&s3);\n    println!("'{}' has {} characters", s3, length);\n}\n\nfn calculate_length(s: &String) -> usize {\n    s.len()\n}`,
              codeLanguage: 'rust',
              estimatedMinutes: 30,
              xpReward: 80,
              quiz: quiz('Ownership Quiz', [
                mcq('What happens when a String is assigned to another variable?', 'The original is moved (invalidated)', ['It is copied', 'Both share it'], 'Strings are moved, not copied. Use `.clone()` for a deep copy.'),
                mcq('How many mutable references can exist at once?', 'One', ['Unlimited', 'Two'], 'Rust allows only one `&mut` reference at a time to prevent data races.'),
                trueFalse('Borrowing transfers ownership.', false, 'Borrowing lets you use a value without taking ownership.'),
              ]),
            }),
            lesson('Structs, Enums & Pattern Matching', 'structs-enums', `# Structs, Enums & Pattern Matching

## Structs

\`\`\`rust
struct User {
    name: String,
    age: u32,
    active: bool,
}

impl User {
    fn new(name: &str, age: u32) -> Self {
        User {
            name: String::from(name),
            age,
            active: true,
        }
    }
    
    fn greet(&self) -> String {
        format!("Hi, I'm {} (age {})", self.name, self.age)
    }
}
\`\`\`

## Enums

\`\`\`rust
enum Shape {
    Circle(f64),             // radius
    Rectangle(f64, f64),     // width, height
    Triangle(f64, f64, f64), // sides
}
\`\`\`

## Pattern Matching with \`match\`

\`\`\`rust
fn area(shape: &Shape) -> f64 {
    match shape {
        Shape::Circle(r) => std::f64::consts::PI * r * r,
        Shape::Rectangle(w, h) => w * h,
        Shape::Triangle(a, b, c) => {
            let s = (a + b + c) / 2.0;
            (s * (s-a) * (s-b) * (s-c)).sqrt()
        }
    }
}
\`\`\`

## Option & Result

\`\`\`rust
fn divide(a: f64, b: f64) -> Option<f64> {
    if b == 0.0 { None } else { Some(a / b) }
}

match divide(10.0, 3.0) {
    Some(result) => println!("Result: {}", result),
    None => println!("Cannot divide by zero!"),
}
\`\`\``, {
              starterCode: `fn main() {\n    // Simulating structs and pattern matching\n    let shape_type = "circle";\n    let radius = 5.0;\n    let width = 4.0;\n    let height = 6.0;\n    \n    let area = match shape_type {\n        "circle" => std::f64::consts::PI * radius * radius,\n        "rectangle" => width * height,\n        _ => 0.0,\n    };\n    \n    println!("Shape: {}, Area: {:.2}", shape_type, area);\n    \n    // Option demo\n    let result = divide(10.0, 3.0);\n    match result {\n        Some(v) => println!("10 / 3 = {:.4}", v),\n        None => println!("Cannot divide by zero!"),\n    }\n}\n\nfn divide(a: f64, b: f64) -> Option<f64> {\n    if b == 0.0 { None } else { Some(a / b) }\n}`,
              solutionCode: `fn main() {\n    let shape_type = "circle";\n    let radius = 5.0;\n    let width = 4.0;\n    let height = 6.0;\n    \n    let area = match shape_type {\n        "circle" => std::f64::consts::PI * radius * radius,\n        "rectangle" => width * height,\n        _ => 0.0,\n    };\n    \n    println!("Shape: {}, Area: {:.2}", shape_type, area);\n    \n    let result = divide(10.0, 3.0);\n    match result {\n        Some(v) => println!("10 / 3 = {:.4}", v),\n        None => println!("Cannot divide by zero!"),\n    }\n}\n\nfn divide(a: f64, b: f64) -> Option<f64> {\n    if b == 0.0 { None } else { Some(a / b) }\n}`,
              codeLanguage: 'rust',
              estimatedMinutes: 30,
              xpReward: 80,
              quiz: quiz('Structs & Enums Quiz', [
                mcq('What is Rust\'s `Option` type used for?', 'Representing a value that may or may not exist', ['Error handling only', 'Type casting'], '`Option<T>` is either `Some(T)` or `None`.'),
                trueFalse('`match` in Rust must handle all possible cases.', true, 'Rust\'s `match` must be exhaustive — use `_` as a catch-all.'),
              ]),
            }),
          ],
        },
      ],
    },
  ],
};
