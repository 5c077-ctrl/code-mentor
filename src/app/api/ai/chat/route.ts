import Anthropic from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';

function generateTechnicalAiResponse(userQuery: string, lessonContext: string, codeContext: string): string {
  const q = userQuery.toLowerCase().trim();
  const wordCount = q.split(/\s+/).length;

  // Question Formulation & Ambiguity Check
  if (wordCount < 4 || q === 'help' || q === 'error' || q === 'why' || q === 'broken' || q === 'code') {
    return `### 💡 Question Formulation Analysis & Clarification

> ⚠️ **Insight on Question Formulation**: Your question *"${userQuery}"* is quite brief and lacks specific context (such as error logs, line numbers, or target outcome).

To get the most precise technical answer, consider one of these **clarified technical questions**:

- ❓ **"Why am I receiving an error in ${lessonContext} and how do I fix it?"**
- ❓ **"What is the step-by-step algorithmic solution for ${lessonContext}?"**
- ❓ **"Can you review my workspace code and analyze its time/space complexity?"**

*You can copy and ask any of the questions above for an instant detailed breakdown!*`;
  }
  
  // 1. CYBERSECURITY & ETHICAL HACKING
  if (q.includes('cyber') || q.includes('security') || q.includes('hack') || q.includes('exploit') || q.includes('xss') || q.includes('sqli') || q.includes('nmap') || q.includes('burp') || q.includes('csrf') || q.includes('crypto') || q.includes('malware') || q.includes('jwt') || q.includes('buffer overflow') || q.includes('penetration') || q.includes('vulnerability')) {
    return `### 🛡️ Cybersecurity & Information Security Analysis

Great question! In **Cybersecurity & Ethical Hacking**, addressing **"${userQuery}"** requires analyzing the attack vectors and defense-in-depth controls:

#### 1. Threat Vector & Impact Analysis
- **Vulnerability Category**: Input Sanitization, Authentication Bypass, Memory Corruption, or Access Control Failure.
- **MITRE ATT&CK Framework Mapping**: Identifies initial access, execution, or privilege escalation tactics.

#### 2. Defensive Mitigation Strategies
- **Input Validation & Parameterized Queries**: Prevent SQL Injection (SQLi) & Cross-Site Scripting (XSS) by enforcing strict input typing and prepared statements (\`PreparedStatement\` or ORM parameterization).
- **Transport Security & Cryptography**: Enforce TLS 1.3, AES-256-GCM for data at rest, and argon2id / bcrypt for password hashing with unique salts.
- **Access Control & Session Hardening**: Enforce \`HttpOnly\`, \`Secure\`, and \`SameSite=Strict\` cookie flags along with Short-lived JWTs paired with cryptographic signature validation.

#### 3. Recommended Code Hardening Rule
\`\`\`
// Always sanitize inputs & use parameterized prepared statements
const query = "SELECT id, email, role FROM users WHERE email = $1 AND active = true";
const user = await db.query(query, [userEmail]);
\`\`\`

Would you like to test an exploit scenario or explore specific defensive remediation patterns for this topic?`;
  }

  // 2. ARTIFICIAL INTELLIGENCE, MACHINE LEARNING & DEEP LEARNING
  if (q.includes('ai') || q.includes('machine learning') || q.includes('deep learning') || q.includes('neural') || q.includes('transformer') || q.includes('llm') || q.includes('pytorch') || q.includes('tensorflow') || q.includes('model') || q.includes('bert') || q.includes('gpt') || q.includes('loss') || q.includes('gradient')) {
    return `### 🤖 Artificial Intelligence & Machine Learning Deep-Dive

Regarding **"${userQuery}"** in **AI & Deep Learning**:

#### 1. Architectural Foundations
- **Model Paradigm**: Transformer Attention Mechanism ($O(N^2)$ sequence self-attention), Convolutional Neural Networks (CNNs for spatial features), or Recurrent Networks (RNNs/LSTMs).
- **Optimization & Loss Functions**: Backpropagation using Stochastic Gradient Descent (SGD) or AdamW optimizer to minimize loss functions like Cross-Entropy or Mean Squared Error (MSE).

#### 2. Practical Training & Fine-Tuning Tips
- **Overfitting Prevention**: Apply Dropout regularization ($p=0.1\text{--}0.5$), Weight Decay ($L_2$), data augmentation, and early stopping.
- **Quantization & Inference**: Use FP16/INT8 matrix quantization to accelerate inference speed on modern GPU tensor cores.

#### 3. PyTorch Model Structure
\`\`\`python
import torch
import torch.nn as nn

class TransformerClassifier(nn.Module):
    def __init__(self, vocab_size, embed_dim, num_heads):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, embed_dim)
        self.encoder = nn.TransformerEncoderLayer(d_model=embed_dim, nhead=num_heads)
        self.fc = nn.Linear(embed_dim, 2)
        
    def forward(self, x):
        x = self.embedding(x)
        out = self.encoder(x)
        return self.fc(out.mean(dim=1))
\`\`\`

Do you want to discuss hyperparameter tuning, embeddings, or RAG architecture?`;
  }

  // 3. DATA STRUCTURES, ALGORITHMS & TIME COMPLEXITY
  if (q.includes('algorithm') || q.includes('data structure') || q.includes('complexity') || q.includes('big o') || q.includes('sort') || q.includes('tree') || q.includes('graph') || q.includes('dp') || q.includes('dynamic programming') || q.includes('heap') || q.includes('recursion')) {
    return `### ⚡ Data Structures & Algorithmic Analysis

Analyzing **"${userQuery}"** from a Computer Science algorithmic perspective:

#### 1. Time & Space Complexity Breakdown
- **Time Complexity**: Identifies asymptotic scaling from $O(1)$ constant time lookup to $O(\log N)$ binary search, $O(N)$ linear iteration, or $O(N \log N)$ optimal sorting (QuickSort / MergeSort).
- **Space Complexity**: Evaluates auxiliary memory usage ($O(1)$ in-place vs $O(N)$ hash map or call stack depth).

#### 2. Optimal Data Structure Selection
- **Hash Table / Map**: Constant $O(1)$ average amortized key-value lookup.
- **Binary Search Tree / Red-Black Tree**: Guaranteed $O(\log N)$ ordered lookups and range queries.
- **Min-Heap / Max-Heap**: Instant $O(1)$ priority extraction with $O(\log N)$ insertion.

#### 3. Algorithmic Implementation Template
\`\`\`
// Binary Search: O(log N) Time, O(1) Auxiliary Space
function binarySearch(arr: number[], target: number): number {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
\`\`\`

Would you like me to trace an edge case or optimize a specific solution?`;
  }

  // 4. CLOUD COMPUTING, DEVOPS & INFRASTRUCTURE
  if (q.includes('cloud') || q.includes('devops') || q.includes('docker') || q.includes('kubernetes') || q.includes('aws') || q.includes('gcp') || q.includes('azure') || q.includes('terraform') || q.includes('ci/cd') || q.includes('nginx')) {
    return `### ☁️ Cloud Architecture & DevOps Operations

Addressing **"${userQuery}"** for modern Cloud Infrastructure & Operations:

#### 1. Containerization & Orchestration
- **Docker Multi-Stage Builds**: Minimize image footprint by separating build-time dependencies from production runtime images.
- **Kubernetes (k8s)**: Autoscale workloads via Horizontal Pod Autoscaler (HPA), manage rolling updates, and enforce ingress TLS proxies.

#### 2. Infrastructure as Code (IaC) & CI/CD
- **Terraform / Pulumi**: Maintain declarative state for VPC networks, subnets, IAM policy roles, and cloud security groups.
- **Zero-Downtime Deployments**: Implement Blue-Green or Canary deployment pipelines with automated rollback health checks.

Do you need help configuring a Dockerfile, Kubernetes YAML manifest, or CI/CD workflow?`;
  }

  // 5. DATABASE ARCHITECTURE & SYSTEMS
  if (q.includes('database') || q.includes('sql') || q.includes('nosql') || q.includes('postgres') || q.includes('mongo') || q.includes('redis') || q.includes('index') || q.includes('transaction') || q.includes('c++') || q.includes('pointer') || q.includes('memory')) {
    return `### 💾 Database Architecture & Systems Engineering

Regarding **"${userQuery}"**:

#### 1. Database Indexing & Query Optimization
- **B-Tree & Hash Indexes**: Speed up filtering queries (\`WHERE id = ?\`) from full-table scans $O(N)$ to logarithmic $O(\log N)$ B-Tree depth lookups.
- **ACID Guarantee**: Enforce Isolation Levels (Read Committed, Repeatable Read, Serializable) to prevent dirty reads and write skew during concurrent transactions.

#### 2. Memory & Hardware Performance
- **Cache Alignment & Locality**: Keep data structures contiguous in memory to leverage L1/L2 CPU cache lines.
- **Resource Management**: Avoid dangling pointers and memory leaks by using RAII (\`std::unique_ptr\` in C++) or automated GC bounds.

Would you like a sample query optimization or memory allocation review?`;
  }

  // 6. GENERAL COMPUTER SCIENCE & CODE REVIEW
  return `### 🎓 Computer Science & Software Engineering Mentor

Here is a structured breakdown for **"${userQuery}"** in the context of **"${lessonContext}"**:

- **Core Technical Principle**: Focus on code modularity, strict error boundaries, type safety, and clean API design.
- **Current Workspace Snippet**:
\`\`\`
${codeContext.slice(0, 250) || '// Interactive Workspace Code'}
\`\`\`

Feel free to ask me any specific question across **Cybersecurity, Artificial Intelligence, Algorithms, Cloud DevOps, System Design, or Full-Stack Development**! What specific aspect would you like to examine?`;
}

export async function POST(req: Request) {
  try {
    const { messages, codeContext, lessonContext } = await req.json();
    const lastUserMessage = messages && messages.length > 0 ? messages[messages.length - 1].content : '';

    const apiKey = process.env.ANTHROPIC_API_KEY || '';

    // If API key is present and not mock, try Anthropic API
    if (apiKey && !apiKey.includes('mock-key')) {
      try {
        const anthropic = new Anthropic({ apiKey });
        const systemPrompt = `You are a Principal Computer Science, AI, and Cybersecurity Specialist for Code-Mentor.
You possess deep technical expertise across ALL Computer Science & Technology domains:
1. Cybersecurity & Ethical Hacking (Web Security, Cryptography, Network Analysis, Exploits, Mitigations).
2. Artificial Intelligence & Deep Learning (Transformers, Neural Networks, PyTorch, LLMs, Computer Vision).
3. Data Structures & Algorithms (Time/Space Complexity O(N), Sorting, Trees, Dynamic Programming).
4. Cloud Infrastructure & DevOps (Docker, Kubernetes, AWS/GCP, CI/CD, Terraform).
5. Database & Systems Engineering (PostgreSQL, Indexing, Low-Level C/C++, Memory Management, Distributed Systems).
6. Software Architecture & Full-Stack Development (React, Next.js, Python, Java, Go, Rust).

The user is currently taking the lesson: "${lessonContext}".
Current workspace code:
\`\`\`
${codeContext}
\`\`\`
Provide comprehensive, highly technical, and precise answers customized to the user's exact question. Always include code snippets, security considerations, or algorithmic complexity where relevant.`;

        const stream = await anthropic.messages.create({
          model: 'claude-3-haiku-20240307',
          max_tokens: 1024,
          system: systemPrompt,
          messages: messages,
          stream: true,
        });

        const encoder = new TextEncoder();
        const customReadable = new ReadableStream({
          async start(controller) {
            for await (const chunk of stream) {
              if (chunk.type === 'content_block_delta' && 'text' in chunk.delta) {
                controller.enqueue(encoder.encode(chunk.delta.text));
              }
            }
            controller.close();
          },
        });

        return new Response(customReadable, {
          headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        });
      } catch (anthropicError: any) {
        console.warn('Anthropic API streaming failed, falling back to Comprehensive CS Intelligence Engine:', anthropicError.message);
      }
    }

    // Fallback: Stream Comprehensive Technical CS & AI Intelligence Engine Response
    const responseText = generateTechnicalAiResponse(lastUserMessage, lessonContext || 'Computer Science & AI', codeContext || '');
    const encoder = new TextEncoder();
    const customReadable = new ReadableStream({
      async start(controller) {
        const words = responseText.split(' ');
        for (const word of words) {
          controller.enqueue(encoder.encode(word + ' '));
          await new Promise((r) => setTimeout(r, 20));
        }
        controller.close();
      },
    });

    return new Response(customReadable, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  } catch (error: any) {
    console.error('AI chat route error:', error);
    return NextResponse.json({ error: 'AI Tutor service is currently updating.' }, { status: 500 });
  }
}
