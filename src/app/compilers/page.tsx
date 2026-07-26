'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import CodeEditor from '@/components/learn/CodeEditor';
import { Terminal, Play, CheckCircle2 } from 'lucide-react';

interface CompilerInfo {
  id: string;
  name: string;
  lang: string;
  icon: string;
  color: string;
  description: string;
  starter: string;
}

const COMPILERS: CompilerInfo[] = [
  {
    id: 'python',
    name: 'Python Compiler',
    lang: 'python',
    icon: '🐍',
    color: '#3776ab',
    description: 'Python 3.12 runner with full standard library support',
    starter: `# Python 3.12 Interactive Compiler\ndef greet(name):\n    return f"Hello, {name}!"\n\nfor i in range(1, 4):\n    print(f"Iteration {i}: {greet('Code Mentor')}")\n`
  },
  {
    id: 'javascript',
    name: 'JavaScript (Node.js)',
    lang: 'javascript',
    icon: '🟨',
    color: '#f7df1e',
    description: 'V8 engine ES2024 runner for JS code',
    starter: `// JavaScript V8 Engine\nconst fruits = ["Apple", "Banana", "Cherry"];\nconst upper = fruits.map(f => f.toUpperCase());\nconsole.log("Transformed:", upper);\n`
  },
  {
    id: 'typescript',
    name: 'TypeScript Playground',
    lang: 'typescript',
    icon: '🔷',
    color: '#3178c6',
    description: 'Typed JavaScript playground with instant static checking',
    starter: `// TypeScript 5.0\ninterface Course {\n  id: number;\n  title: string;\n}\n\nconst course: Course = { id: 1, title: "TypeScript Core" };\nconsole.log(\`Course #\${course.id}: \${course.title}\`);\n`
  },
  {
    id: 'java',
    name: 'Java JDK 17 Compiler',
    lang: 'java',
    icon: '☕',
    color: '#e76f51',
    description: 'Java 17 OpenJDK compiler with OOP & Streams',
    starter: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Java 17 OpenJDK Execution");\n        int sum = 0;\n        for (int i = 1; i <= 5; i++) sum += i;\n        System.out.println("Sum 1..5 = " + sum);\n    }\n}\n`
  },
  {
    id: 'cpp',
    name: 'C++ G++ Compiler',
    lang: 'cpp',
    icon: '⚙️',
    color: '#00599c',
    description: 'GCC G++ C++20 compiler with STL containers',
    starter: `#include <iostream>\n#include <vector>\n#include <numeric>\n\nint main() {\n    std::vector<int> nums = {10, 20, 30, 40};\n    int total = std::accumulate(nums.begin(), nums.end(), 0);\n    std::cout << "C++ Total: " << total << std::endl;\n    return 0;\n}\n`
  },
  {
    id: 'c',
    name: 'C Language GCC',
    lang: 'c',
    icon: '🇨',
    color: '#a8b9cc',
    description: 'GNU C99/C11 procedural compiler',
    starter: `#include <stdio.h>\n\nint main() {\n    printf("Standard C Executable Engine\\n");\n    return 0;\n}\n`
  },
  {
    id: 'php',
    name: 'PHP 8.2 Engine',
    lang: 'php',
    icon: '🐘',
    color: '#777bb4',
    description: 'PHP 8 server-side script interpreter',
    starter: `<?php\n$items = ["Laravel", "Symfony", "WordPress"];\nforeach ($items as $idx => $item) {\n    echo "[$idx] $item\\n";\n}\n?>\n`
  },
  {
    id: 'kotlin',
    name: 'Kotlin Compiler',
    lang: 'kotlin',
    icon: '🟪',
    color: '#7f52ff',
    description: 'Kotlin JVM compiler for Android & backend',
    starter: `fun main() {\n    val languages = listOf("Kotlin", "Java", "Swift")\n    println("Languages: " + languages.joinToString(", "))\n}\n`
  },
  {
    id: 'golang',
    name: 'Go (Golang) Runner',
    lang: 'go',
    icon: '🦫',
    color: '#00add8',
    description: 'Go 1.22 fast compiled runtime',
    starter: `package main\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Go Goroutine Engine Ready")\n}\n`
  },
  {
    id: 'ruby',
    name: 'Ruby Interpreter',
    lang: 'ruby',
    icon: '💎',
    color: '#cc342d',
    description: 'Ruby 3 object-oriented script runner',
    starter: `3.times do |n|\n  puts "Ruby execution step #{n + 1}"\nend\n`
  },
  {
    id: 'rust',
    name: 'Rust Cargo Runner',
    lang: 'rust',
    icon: '🦀',
    color: '#dea584',
    description: 'Rust safe system compiler with memory safety guarantees',
    starter: `fn main() {\n    let msg = "Memory Safe Rust Compiler";\n    println!("{}", msg);\n}\n`
  },
  {
    id: 'sql',
    name: 'Database SQL Studio',
    lang: 'sql',
    icon: '🗄️',
    color: '#06b6d4',
    description: 'SQL query sandbox for PostgreSQL & MySQL schemas',
    starter: `-- SQL Query Engine\nSELECT id, username, total_xp, level\nFROM users\nORDER BY total_xp DESC\nLIMIT 5;\n`
  },
  {
    id: 'swift',
    name: 'Swift Apple Compiler',
    lang: 'swift',
    icon: '🕊️',
    color: '#f05138',
    description: 'Swift compiler for iOS and macOS systems',
    starter: `let greeting = "Swift Native Mobile Execution"\nprint(greeting)\n`
  },
  {
    id: 'elixir',
    name: 'Elixir BEAM Runner',
    lang: 'elixir',
    icon: '💧',
    color: '#4e2a8e',
    description: 'Elixir functional runtime on Erlang BEAM',
    starter: `IO.puts "Elixir Concurrent Engine Active"\n`
  },
  {
    id: 'shell',
    name: 'Bash Shell Terminal',
    lang: 'bash',
    icon: '🐚',
    color: '#4eaa25',
    description: 'Linux Bash CLI script interpreter',
    starter: `#!/bin/bash\necho "Current Working Directory: $(pwd)"\necho "Shell execution completed successfully."\n`
  }
];

export default function CompilersPage() {
  const [selectedCompiler, setSelectedCompiler] = useState<CompilerInfo>(COMPILERS[0]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <Terminal size={32} color="var(--accent-primary)" />
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800 }}>Multi-Language Online Compilers</h1>
        </div>
        <p style={{ color: 'var(--text-secondary)' }}>
          Write, edit, and execute code in {COMPILERS.length} programming languages and framework sandboxes with real-time output.
        </p>
      </header>

      {/* Compiler Selection Grid inspired by CodeHut PRO image 4 & 5 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
        gap: '1rem',
      }}>
        {COMPILERS.map((c) => {
          const isSelected = selectedCompiler.id === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setSelectedCompiler(c)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.25rem 0.75rem',
                borderRadius: '16px',
                background: isSelected ? 'rgba(99, 102, 241, 0.15)' : 'var(--glass-bg)',
                border: isSelected ? '2px solid var(--accent-primary)' : '1px solid var(--glass-border)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                transform: isSelected ? 'scale(1.03)' : 'scale(1)',
                boxShadow: isSelected ? '0 0 15px rgba(99, 102, 241, 0.3)' : 'none',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{c.icon}</div>
              <div style={{
                fontSize: '0.85rem',
                fontWeight: isSelected ? 700 : 500,
                color: isSelected ? 'var(--accent-primary)' : 'var(--text-primary)',
                textAlign: 'center',
                lineHeight: 1.2
              }}>
                {c.name.split(' ')[0]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Compiler Playground */}
      <Card style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.75rem' }}>{selectedCompiler.icon}</span>
            <div>
              <h2 style={{ fontSize: '1.35rem', margin: 0 }}>{selectedCompiler.name}</h2>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                {selectedCompiler.description}
              </p>
            </div>
          </div>
          <Badge variant="primary">{selectedCompiler.lang.toUpperCase()}</Badge>
        </div>

        <div style={{ height: '420px', marginTop: '0.5rem' }}>
          <CodeEditor
            key={selectedCompiler.id}
            initialCode={selectedCompiler.starter}
            language={selectedCompiler.lang}
          />
        </div>
      </Card>
    </div>
  );
}
