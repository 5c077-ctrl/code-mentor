import type { CategoryDef } from '../types';
import { mcq, trueFalse, quiz, lesson, setupLesson } from '../helpers';

export const basicsCategory: CategoryDef = {
  name: 'Basics',
  slug: 'basics',
  description: 'Master computer hardware, operating system fundamentals, computer science theory, and core programming principles.',
  icon: '⚙️',
  color: '#3b82f6',
  sortOrder: 1,
  courses: [
    // ━━━━━━━━━━━━━━━━━━━ COMPUTER BASICS ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Computer Basics',
      slug: 'computer-basics',
      description: 'Understand key computer hardware components, operating systems, memory management, and file systems.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 10,
      resources: [
        { resourceType: 'youtube', title: 'Crash Course Computer Science', url: 'https://www.youtube.com/watch?v=O5nskjZ_GoI', author: 'CrashCourse', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'How Computers Work: CPU, Memory, & I/O', url: 'https://www.youtube.com/watch?v=cNN_tTXABUA', author: 'Code.org', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Computer Hardware Explained for Beginners', url: 'https://www.youtube.com/watch?v=ExxFxD4X-1w', author: 'PowerCert Animated Videos', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Operating Systems Course — Introduction', url: 'https://www.youtube.com/watch?v=vBURTt97EkA', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'CPU Architecture & Registers Deep Dive', url: 'https://www.youtube.com/watch?v=Z5JC9Ve1sfI', author: 'Ben Eater', platform: 'YouTube' },
        { resourceType: 'article', title: 'Computer Basics Official Guide', url: 'https://edu.gcfglobal.org/en/computerbasics/', author: 'GCFGlobal' },
        { resourceType: 'article', title: 'How Operating Systems Manage Memory', url: 'https://developer.mozilla.org/en-US/docs/Glossary/Computer_hardware', author: 'MDN Web Docs' },
        { resourceType: 'ebook', title: 'Introduction to Computer Systems Notes', url: 'https://www.cs.cmu.edu/~213/', author: 'Carnegie Mellon University' },
        { resourceType: 'cheatsheet', title: 'Computer Hardware & Ports Cheat Sheet', url: 'https://quickref.me/hardware', author: 'QuickRef' },
        { resourceType: 'article', title: 'Understanding File Systems (NTFS, ext4, APFS)', url: 'https://www.geeksforgeeks.org/file-systems-in-operating-system/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: Hardware & System Architecture',
          lessons: [
            setupLesson('Computer Basics', 'computer-basics', 'shell',
              'Explore your OS terminal and inspect computer specs.',
              'echo "Computer Basics Initialized"',
              'echo "Computer Basics Initialized"'
            ),
            lesson('Getting Started with Computers', 'getting-started-computers',
              '# Getting Started with Computers\n\nLearn the fundamental input, process, output, and storage architecture of modern computing machines.',
              { quiz: quiz('Intro Quiz', [mcq('What does CPU stand for?', 'Central Processing Unit', ['Central Power Unit', 'Core Processing Utility'])]) }
            ),
            lesson('CPU, RAM, & Memory Architecture', 'cpu-ram-memory',
              '# CPU, RAM, & Memory Architecture\n\nThe CPU executes instructions while RAM provides fast temporary volatile memory for active applications.',
              { quiz: quiz('Memory Quiz', [trueFalse('RAM is non-volatile memory.', false)]) }
            ),
            lesson('Storage Devices: HDD vs SSD vs NVMe', 'storage-devices',
              '# Storage Devices\n\nSecondary storage holds permanent data using magnetic disk platters (HDD) or flash memory chips (SSD/NVMe).',
              { quiz: quiz('Storage Quiz', [mcq('Which storage technology is fastest?', 'NVMe SSD', ['SATA HDD', 'Tape Drive'])]) }
            ),
            lesson('Motherboards, Buses, & Expansion Slots', 'motherboards-buses',
              '# Motherboards & System Buses\n\nThe motherboard interconnects components via PCI Express, SATA, and system buses.',
              { quiz: quiz('Motherboard Quiz', [trueFalse('The motherboard routes electrical signals between CPU and peripherals.', true)]) }
            ),
            lesson('Input & Output Peripherals', 'input-output-peripherals',
              '# Input & Output Peripherals\n\nKeyboards, mice, webcams, displays, speakers, and external devices interface with human operators.',
              { quiz: quiz('I/O Quiz', [mcq('Which is an input device?', 'Keyboard', ['Monitor', 'Printer'])]) }
            ),
            lesson('Operating Systems Overview', 'operating-systems-overview',
              '# Operating Systems Overview\n\nWindows, macOS, and Linux manage hardware resources and provide user/program interfaces.',
              { quiz: quiz('OS Quiz', [trueFalse('The kernel is the core component of an operating system.', true)]) }
            ),
            lesson('File Systems & Directories', 'file-systems-directories',
              '# File Systems & Directory Trees\n\nFile systems (NTFS, ext4, APFS) organize data into hierarchical directory structures.',
              { quiz: quiz('File System Quiz', [mcq('Which is a popular Linux file system?', 'ext4', ['NTFS', 'FAT32'])]) }
            ),
            lesson('Networking Hardware & WiFi', 'networking-hardware',
              '# Networking Hardware\n\nNetwork interface cards (NICs), routers, modems, and switches connect devices via Ethernet or Wi-Fi.',
              { quiz: quiz('Network Hardware Quiz', [mcq('What hardware component connects a PC to a network?', 'Network Interface Card (NIC)', ['GPU', 'Sound Card'])]) }
            ),
            lesson('Computer Ports & Connectors', 'ports-connectors',
              '# Computer Ports & Connectors\n\nUSB-C, HDMI, DisplayPort, Thunderbolt, and Ethernet transmit power and digital signal data.',
              { quiz: quiz('Ports Quiz', [trueFalse('USB-C can deliver both display output and electrical power.', true)]) }
            ),
            lesson('Power Supply & Thermal Cooling', 'power-cooling',
              '# Power Supply & Thermal Cooling\n\nPSUs convert AC to DC voltage while heat sinks, fans, and liquid loops dissipate thermal energy.',
              { quiz: quiz('Thermal Quiz', [mcq('What prevents a CPU from overheating?', 'Heatsink and thermal paste', ['RAM heat spreaders', 'SSD enclosure'])]) }
            ),
            lesson('BIOS & UEFI Firmware', 'bios-uefi-firmware',
              '# BIOS & UEFI Firmware\n\nFirmware initializes system hardware during POST (Power-On Self-Test) before booting the operating system.',
              { quiz: quiz('BIOS Quiz', [trueFalse('UEFI is the modern successor to legacy BIOS.', true)]) }
            ),
            lesson('Operating System Processes & Multitasking', 'processes-multitasking',
              '# OS Processes & Multitasking\n\nThe OS scheduler allocates CPU time slices to active threads and processes.',
              { quiz: quiz('Process Quiz', [mcq('What component manages thread scheduling in OS?', 'Kernel Scheduler', ['File System', 'GPU Controller'])]) }
            ),
            lesson('Device Drivers & System Drivers', 'device-drivers',
              '# Device Drivers\n\nDrivers act as software translation layers allowing operating systems to control custom hardware.',
              { quiz: quiz('Driver Quiz', [trueFalse('A driver translates generic OS commands into device-specific instructions.', true)]) }
            ),
            lesson('Data Backup & Redundancy', 'backup-redundancy',
              '# Data Backup & Redundancy\n\nImplement the 3-2-1 backup strategy and RAID arrays to protect against data loss.',
              { quiz: quiz('Backup Quiz', [mcq('How many total copies does the 3-2-1 backup strategy require?', '3 copies', ['2 copies', '1 copy'])]) }
            ),
            lesson('Computer Security & Antivirus', 'security-antivirus',
              '# Computer Security Fundamentals\n\nFirewalls, antivirus scanners, and principle of least privilege shield devices from malware.',
              { quiz: quiz('Security Quiz', [trueFalse('Firewalls filter incoming and outgoing network traffic.', true)]) }
            ),
            lesson('Troubleshooting & Diagnostics', 'troubleshooting-diagnostics',
              '# Hardware & Software Diagnostics\n\nUse Event Viewer, Task Manager, memtest, and diagnostic LEDs to identify system bottlenecks.',
              { quiz: quiz('Diagnostics Quiz', [mcq('Which tool monitors live CPU and memory usage in Windows?', 'Task Manager', ['Disk Management', 'Registry Editor'])]) }
            )
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ BASIC COMPUTER SCIENCE ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Basic Computer Science',
      slug: 'basic-computer-science',
      description: 'Comprehensive 29-lecture deep dive into computer science theory, algorithms, data representation, logic gates, and complexity.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 25,
      resources: [
        { resourceType: 'youtube', title: 'Harvard CS50 — Introduction to Computer Science', url: 'https://www.youtube.com/watch?v=8mAITcNt710', author: 'David J. Malan (Harvard)', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'MIT 6.0001 Intro to Computer Science & Programming', url: 'https://www.youtube.com/watch?v=ytpJdnlu9ug', author: 'MIT OpenCourseWare', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Data Structures and Algorithms for Beginners', url: 'https://www.youtube.com/watch?v=bbj54W6gVfE', author: 'Programming with Mosh', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Big O Notation in 5 Minutes', url: 'https://www.youtube.com/watch?v=g2o22C3CRfU', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Binary, Hexadecimal, & Floating Point Numbers', url: 'https://www.youtube.com/watch?v=LpuPe81lGEU', author: 'Neso Academy', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'Structure and Interpretation of Computer Programs (SICP)', url: 'https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.html', author: 'Abelson & Sussman (MIT)' },
        { resourceType: 'article', title: 'GeeksforGeeks Computer Science Portal', url: 'https://www.geeksforgeeks.org/computer-science-projects/', author: 'GeeksforGeeks' },
        { resourceType: 'cheatsheet', title: 'Big-O Algorithm Complexity Cheat Sheet', url: 'https://www.bigocheatsheet.com/', author: 'BigOCheatSheet' },
        { resourceType: 'article', title: 'Base-2 Binary Arithmetic & Logic Gates Guide', url: 'https://electronics-tutorials.ws/boolean/bool_1.html', author: 'Electronics Tutorials' },
        { resourceType: 'cheatsheet', title: 'Data Structures & Sorting Reference', url: 'https://quickref.me/algo', author: 'QuickRef' }
      ],
      modules: [
        {
          title: 'Section 1: Computer Science Foundations',
          lessons: [
            setupLesson('Basic CS', 'basic-computer-science', 'python',
              'Set up Python to test CS algorithms and binary arithmetic.',
              'print(bin(42))',
              'print(bin(42))'
            ),
            lesson('Binary & Number Systems', 'binary-number-systems', '# Binary & Number Systems\n\nComputers operate in base-2 (binary). Learn conversions between Binary, Octal, Decimal, and Hexadecimal.', { quiz: quiz('Binary Quiz', [mcq('What is binary 1010 in decimal?', '10', ['8', '12'])]) }),
            lesson('Boolean Logic & Truth Tables', 'boolean-logic', '# Boolean Logic\n\nUnderstand AND, OR, NOT, XOR, NAND, and NOR logical operations and truth table construction.', { quiz: quiz('Boolean Quiz', [trueFalse('True AND False evaluates to True.', false)]) }),
            lesson('Logic Gates & Circuit Design', 'logic-gates', '# Logic Gates\n\nHardware implements Boolean logic using transistors wired as AND, OR, and NOT logic gates.', { quiz: quiz('Gate Quiz', [mcq('Which gate outputs True only when input signals differ?', 'XOR', ['AND', 'OR'])]) }),
            lesson('Data Representation: ASCII & Unicode', 'ascii-unicode', '# Data Representation\n\nCharacters are mapped to numbers via ASCII (7-bit) and UTF-8 Unicode standards.', { quiz: quiz('Char Quiz', [mcq('Which encoding standard supports global international characters?', 'UTF-8 Unicode', ['ASCII', 'EBCDIC'])]) }),
            lesson('Floating Point Arithmetic (IEEE 754)', 'ieee-754', '# Floating Point Arithmetic\n\nRepresent real numbers using sign, exponent, and mantissa fields under IEEE 754 standard.', { quiz: quiz('Float Quiz', [trueFalse('Floating point arithmetic can introduce small precision errors.', true)]) }),
            lesson('Algorithm Complexity & Big O Notation', 'big-o-notation', '# Big O Notation\n\nAnalyze time and space scalability: O(1), O(log n), O(n), O(n log n), and O(n²).', { quiz: quiz('Big O Quiz', [mcq('What is the complexity of binary search?', 'O(log n)', ['O(n)', 'O(n²)'])]) }),
            lesson('Arrays & Memory Allocation', 'arrays-memory-allocation', '# Arrays & Memory\n\nArrays store homogeneous elements in contiguous memory locations with O(1) indexed access.', { quiz: quiz('Array Quiz', [trueFalse('Array element access by index takes constant time O(1).', true)]) }),
            lesson('Linked Lists (Singly & Doubly)', 'linked-lists', '# Linked Lists\n\nNodes store values and pointers to next/previous nodes, enabling efficient dynamic allocation.', { quiz: quiz('List Quiz', [mcq('What is the worst-case lookup time in a singly linked list?', 'O(n)', ['O(1)', 'O(log n)'])]) }),
            lesson('Stacks & Queues', 'stacks-queues', '# Stacks (LIFO) & Queues (FIFO)\n\nStacks push/pop elements in last-in-first-out order; queues enqueue/dequeue in first-in-first-out order.', { quiz: quiz('Stack Quiz', [mcq('Which data structure operates on LIFO principle?', 'Stack', ['Queue', 'Tree'])]) }),
            lesson('Hash Tables & Hash Functions', 'hash-tables', '# Hash Tables\n\nHash functions map keys to array bucket indices for near O(1) key-value lookups.', { quiz: quiz('Hash Quiz', [trueFalse('Hash collisions occur when two keys produce the same hash index.', true)]) }),
            lesson('Recursion & Call Stack', 'recursion-call-stack', '# Recursion\n\nFunctions calling themselves require base cases to avoid infinite recursion and stack overflow.', { quiz: quiz('Recursion Quiz', [mcq('What prevents infinite loops in recursive functions?', 'Base case', ['Return type', 'Global variable'])]) }),
            lesson('Linear Search vs Binary Search', 'search-algorithms', '# Linear & Binary Search\n\nLinear search scans items sequentially (O(n)), while binary search divides sorted arrays in half (O(log n)).', { quiz: quiz('Search Quiz', [trueFalse('Binary search requires the input array to be sorted.', true)]) }),
            lesson('Bubble Sort & Insertion Sort', 'bubble-insertion-sort', '# Elementary Sorting\n\nBubble sort swaps adjacent out-of-order elements; Insertion sort builds a sorted partition incrementally.', { quiz: quiz('Sort Quiz', [mcq('What is the average time complexity of Bubble Sort?', 'O(n²)', ['O(n log n)', 'O(n)'])]) }),
            lesson('Merge Sort & Quick Sort', 'merge-quick-sort', '# Divide-and-Conquer Sorting\n\nMerge Sort recursively splits and merges arrays; Quick Sort partitions around a pivot value.', { quiz: quiz('Merge Quiz', [mcq('What is the worst-case time complexity of Merge Sort?', 'O(n log n)', ['O(n²)', 'O(n)'])]) }),
            lesson('Trees & Binary Search Trees (BST)', 'trees-bst', '# Trees & BST\n\nHierarchical node trees maintain the BST property: left children < parent < right children.', { quiz: quiz('BST Quiz', [trueFalse('In an in-order BST traversal, nodes are visited in ascending order.', true)]) }),
            lesson('Graph Theory Basics', 'graph-theory-basics', '# Graph Theory\n\nGraphs consist of vertices (nodes) connected by directed or undirected edges with optional weights.', { quiz: quiz('Graph Quiz', [mcq('What are graph connections called?', 'Edges', ['Branches', 'Roots'])]) }),
            lesson('Graph Traversals: BFS & DFS', 'bfs-dfs-traversals', '# BFS & DFS\n\nBreadth-First Search uses a queue to traverse layer by layer; Depth-First Search uses a stack/recursion.', { quiz: quiz('BFS Quiz', [mcq('Which graph traversal uses a FIFO queue?', 'Breadth-First Search (BFS)', ['Depth-First Search (DFS)', 'Dijkstra'])]) }),
            lesson('Dijkstra\'s Shortest Path Algorithm', 'dijkstras-algorithm', '# Dijkstra\'s Shortest Path\n\nFind the shortest path from a single source vertex to all other vertices in weighted non-negative graphs.', { quiz: quiz('Dijkstra Quiz', [trueFalse('Dijkstra algorithm works correctly with negative edge weights.', false)]) }),
            lesson('Greedy Algorithms', 'greedy-algorithms', '# Greedy Algorithms\n\nGreedy strategies make locally optimal choices at each step hoping to find a global optimum.', { quiz: quiz('Greedy Quiz', [mcq('Which problem is commonly solved with a greedy approach?', 'Huffman Coding', ['Matrix Multiplication', 'Fibonacci Sequence'])]) }),
            lesson('Dynamic Programming & Memoization', 'dynamic-programming', '# Dynamic Programming\n\nBreak complex problems into overlapping subproblems and cache results (memoization) to optimize runtime.', { quiz: quiz('DP Quiz', [trueFalse('Memoization stores subproblem solution results in a lookup table.', true)]) }),
            lesson('Compiler & Interpreter Pipeline', 'compiler-interpreter', '# Compilers & Interpreters\n\nLexical analysis converts source code to tokens; parsing builds Abstract Syntax Trees (AST); code generators yield machine instructions.', { quiz: quiz('Compiler Quiz', [mcq('What artifact does a parser produce from tokens?', 'Abstract Syntax Tree (AST)', ['Binary Executable', 'Object Code'])]) }),
            lesson('Memory Management: Heap vs Stack', 'heap-vs-stack', '# Heap vs Stack Memory\n\nStack manages local scope variables; Heap manages dynamically allocated objects requiring garbage collection or manual free.', { quiz: quiz('Memory Allocation Quiz', [mcq('Which memory area requires explicit allocation/deallocation in C?', 'Heap memory', ['Stack memory', 'Register memory'])]) }),
            lesson('Garbage Collection Mechanisms', 'garbage-collection', '# Garbage Collection\n\nAutomatic memory management uses reference counting or mark-and-sweep tracing collectors.', { quiz: quiz('GC Quiz', [trueFalse('Mark-and-sweep garbage collection identifies reachable objects from root references.', true)]) }),
            lesson('Operating System Concurrency & Threads', 'concurrency-threads', '# Concurrency & Threads\n\nThreads share memory within a process; synchronization primitives prevent race conditions.', { quiz: quiz('Thread Quiz', [mcq('What condition occurs when two threads simultaneously edit un-synchronized shared data?', 'Race condition', ['Deadlock', 'Livelock'])]) }),
            lesson('Mutexes, Semaphores, & Deadlocks', 'mutexes-deadlocks', '# Mutexes & Deadlocks\n\nMutexes enforce mutual exclusion; Deadlocks occur when circular dependencies wait forever for locked resources.', { quiz: quiz('Mutex Quiz', [trueFalse('A deadlock requires mutual exclusion, hold-and-wait, no preemption, and circular wait conditions.', true)]) }),
            lesson('Database Normalization & ACID Properties', 'acid-normalization', '# ACID & Normalization\n\nDatabase transactions guarantee Atomicity, Consistency, Isolation, and Durability (ACID).', { quiz: quiz('ACID Quiz', [mcq('What does the "A" in ACID stand for?', 'Atomicity', ['Authentication', 'Availability'])]) }),
            lesson('Cryptography & Hashing (RSA, AES, SHA-256)', 'cryptography-hashing', '# Cryptography Fundamentals\n\nSymmetric encryption (AES), Asymmetric encryption (RSA), and cryptographic hashes (SHA-256) secure data.', { quiz: quiz('Crypto Quiz', [trueFalse('A cryptographic hash function is a one-way mathematical transformation.', true)]) }),
            lesson('P vs NP Complexity Classes', 'p-vs-np', '# P vs NP Problem\n\nP contains problems solvable in polynomial time; NP contains problems verifiable in polynomial time.', { quiz: quiz('NP Quiz', [mcq('Which millennium problem asks if efficiently verifiable problems are efficiently solvable?', 'P vs NP', ['Navier-Stokes', 'Riemann Hypothesis'])]) })
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ BASIC COMPUTER PROGRAMMING ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Basic Computer Programming',
      slug: 'basic-computer-programming',
      description: 'Learn core coding constructs, pseudocode, flowcharts, variables, functions, and debugging methods.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 15,
      resources: [
        { resourceType: 'youtube', title: 'Programming Fundamentals for Beginners', url: 'https://www.youtube.com/watch?v=zOjov-2OZ0E', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Learn Pseudocode & Algorithm Flowcharts', url: 'https://www.youtube.com/watch?v=6hfOvs8pY1k', author: 'Neso Academy', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Variables, Conditionals, & Loops Tutorial', url: 'https://www.youtube.com/watch?v=eSYeHLW5G0A', author: 'Programming with Mosh', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'How Functions Work in Programming', url: 'https://www.youtube.com/watch?v=F6O0fV8zOvg', author: 'CS Dojo', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Debugging Code & Resolving Syntax Errors', url: 'https://www.youtube.com/watch?v=420qX3QZ9Hk', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'article', title: 'W3Schools Intro to Programming Tutorial', url: 'https://www.w3schools.com/whatis/', author: 'W3Schools' },
        { resourceType: 'article', title: 'MDN JavaScript First Steps Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps', author: 'MDN Web Docs' },
        { resourceType: 'ebook', title: 'Think Like a Programmer eBook Notes', url: 'https://nostarch.com/thinklikeaprogrammer', author: 'V. Anton Spraul' },
        { resourceType: 'cheatsheet', title: 'Programming Logic & Flowcharts Reference', url: 'https://quickref.me/programming', author: 'QuickRef' },
        { resourceType: 'article', title: 'Clean Code Principles & Variable Naming', url: 'https://www.freecodecamp.org/news/clean-code-explained-for-beginners/', author: 'freeCodeCamp' }
      ],
      modules: [
        {
          title: 'Section 1: Programming Essentials',
          lessons: [
            setupLesson('Basic Programming', 'basic-computer-programming', 'javascript',
              'Open your web browser console (F12) or VS Code to execute JavaScript.',
              'console.log("Programming Essentials Active!");',
              'console.log("Programming Essentials Active!");'
            ),
            lesson('What is Programming?', 'what-is-programming', '# What is Programming?\n\nProgramming is writing step-by-step logic and instructions for a computer to execute computational tasks.', { quiz: quiz('Intro Quiz', [mcq('What is a program?', 'A set of instructions for a computer', ['A physical chip', 'A hardware cable'])]) }),
            lesson('Pseudocode & Flowcharts', 'pseudocode-flowcharts', '# Pseudocode & Flowcharts\n\nMap algorithm control flow using high-level pseudo-language and standardized flowchart symbols.', { quiz: quiz('Flowchart Quiz', [trueFalse('Flowchart diamond symbols represent decision branches.', true)]) }),
            lesson('Variables, Types, & Literals', 'variables-literals', '# Variables & Types\n\nStore data in variables with static or dynamic types: strings, integers, booleans, and floats.', { quiz: quiz('Var Quiz', [mcq('Which keyword declares variables in modern JavaScript?', 'let / const', ['var static', 'dim val'])]) }),
            lesson('Operators & Arithmetic Expressions', 'operators-expressions', '# Operators\n\nPerform operations using arithmetic (+, -, *, /, %), relational (==, !=, <, >), and logical operators.', { quiz: quiz('Op Quiz', [mcq('What result does 17 % 5 evaluate to?', '2', ['3', '5'])]) }),
            lesson('Conditional Branching (`if / else / switch`)', 'conditional-branching', '# Conditional Branching\n\nDirect program flow based on conditions using boolean evaluations and switch-case statements.', { quiz: quiz('Branch Quiz', [trueFalse('If conditions execute code blocks only when evaluated expressions equal True.', true)]) }),
            lesson('Loops & Iteration (`for`, `while`, `do-while`)', 'loops-iteration', '# Loops & Iteration\n\nRepeat execution blocks until termination conditions are satisfied.', { quiz: quiz('Loop Quiz', [mcq('Which loop guarantees executing its body at least once?', 'do-while loop', ['for loop', 'while loop'])]) }),
            lesson('Functions, Parameters, & Return Values', 'functions-parameters', '# Functions & Modular Code\n\nEncapsulate reusable logic into named functions accepting inputs (parameters) and returning outputs.', { quiz: quiz('Func Quiz', [trueFalse('Functions help reduce code duplication.', true)]) }),
            lesson('Scope & Variable Lifetime', 'scope-lifetime', '# Scope & Variable Lifetime\n\nVariables declared inside functions are local to that block and inaccessible globally.', { quiz: quiz('Scope Quiz', [mcq('Where can a global variable be accessed?', 'Anywhere within the script file', ['Only inside nested loops', 'Only inside class constructors'])]) }),
            lesson('Arrays & Collections', 'arrays-collections', '# Arrays & Collections\n\nStore ordered lists of items accessed via index offsets starting at 0.', { quiz: quiz('Array Quiz', [mcq('What is the index of the first element in standard arrays?', '0', ['1', '-1'])]) }),
            lesson('String Operations & Formatting', 'string-formatting', '# String Manipulation\n\nConcatenate, slice, search, upper/lower case, and format textual data strings.', { quiz: quiz('String Quiz', [trueFalse('Strings in JavaScript and Python are immutable.', true)]) }),
            lesson('Input & Output Processing', 'input-output-processing', '# Input & Output\n\nAccept console or user interface inputs and format clear console or display output messages.', { quiz: quiz('IO Quiz', [mcq('Which standard function prints output to browser consoles?', 'console.log()', ['document.input()', 'system.out()'])]) }),
            lesson('Debugging Techniques & Error Messages', 'debugging-techniques', '# Debugging Fundamentals\n\nInspect error stack traces, insert console logs, and use interactive breakpoints to fix bugs.', { quiz: quiz('Debug Quiz', [trueFalse('Syntax errors prevent code from compiling or executing.', true)]) }),
            lesson('Exception Handling (`try / catch`)', 'exception-handling', '# Exception Handling\n\nGracefully catch and handle runtime errors without crashing active applications.', { quiz: quiz('TryCatch Quiz', [mcq('Which block executes cleanup code regardless of exceptions?', 'finally', ['catch', 'else'])]) }),
            lesson('Object-Oriented Programming (OOP) Intro', 'oop-intro', '# Introduction to OOP\n\nModel real-world objects using Classes (blueprints) and Objects (instances) with fields and methods.', { quiz: quiz('OOP Intro Quiz', [mcq('What is an instance of a class called?', 'An Object', ['A Method', 'A Variable'])]) }),
            lesson('Code Style, Naming, & Documentation', 'code-style-documentation', '# Code Style & Clean Code\n\nFollow camelCase or snake_case conventions, write descriptive variable names, and comment intent.', { quiz: quiz('Style Quiz', [trueFalse('Writing self-documenting code with clear variable names improves maintainability.', true)]) }),
            lesson('Building a First Console Project', 'first-console-project', '# Final Project: Console Application\n\nCombine input, branching, arrays, and functions to build a complete interactive CLI application.', { quiz: quiz('Project Quiz', [mcq('What is the primary entry point function in C/C++/Java applications?', 'main()', ['start()', 'init()'])]) })
          ]
        }
      ]
    }
  ]
};
