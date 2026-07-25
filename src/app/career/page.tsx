'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import CodeEditor from '@/components/learn/CodeEditor';
import AiChatPanel from '@/components/learn/AiChatPanel';
import AuthorBanner from '@/components/ui/AuthorBanner';
import { 
  Briefcase, 
  Code2, 
  Cpu, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  Layers, 
  Award, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import styles from './Career.module.css';

interface DSAProblem {
  id: string;
  title: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  companies: string[];
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  starterCode: string;
  solutionCode: string;
}

interface SystemDesignPattern {
  id: string;
  title: string;
  companies: string[];
  description: string;
  keyComponents: string[];
  architectureDiagram: string;
}

export default function CareerHubPage() {
  const [activeTab, setActiveTab] = useState<'dsa' | 'system-design' | 'mock-interview' | 'checklist'>('dsa');
  const [selectedProblem, setSelectedProblem] = useState<DSAProblem | null>(null);

  const dsaProblems: DSAProblem[] = [
    {
      id: 'two-sum',
      title: '1. Two Sum (Hash Map Lookup)',
      difficulty: 'EASY',
      companies: ['Google', 'Amazon', 'Meta'],
      description: 'Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.',
      timeComplexity: 'O(N)',
      spaceComplexity: 'O(N)',
      starterCode: `function twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const diff = target - nums[i];\n    if (map.has(diff)) {\n      return [map.get(diff), i];\n    }\n    map.set(nums[i], i);\n  }\n  return [];\n}\n\n// Test run\nconsole.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]`,
      solutionCode: `function twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const diff = target - nums[i];\n    if (map.has(diff)) return [map.get(diff), i];\n    map.set(nums[i], i);\n  }\n  return [];\n}`,
    },
    {
      id: 'lru-cache',
      title: '146. LRU Cache (Double Doubly-Linked List + Hash Map)',
      difficulty: 'HARD',
      companies: ['Meta', 'Google', 'Amazon', 'Apple'],
      description: 'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache with O(1) time complexity for `get` and `put`.',
      timeComplexity: 'O(1)',
      spaceComplexity: 'O(Capacity)',
      starterCode: `class LRUCache {\n  constructor(capacity) {\n    this.capacity = capacity;\n    this.map = new Map();\n  }\n  get(key) {\n    if (!this.map.has(key)) return -1;\n    const val = this.map.get(key);\n    this.map.delete(key);\n    this.map.set(key, val);\n    return val;\n  }\n  put(key, value) {\n    if (this.map.has(key)) this.map.delete(key);\n    this.map.set(key, value);\n    if (this.map.size > this.capacity) {\n      const oldestKey = this.map.keys().next().value;\n      this.map.delete(oldestKey);\n    }\n  }\n}\n\nconst lru = new LRUCache(2);\nlru.put(1, 1);\nlru.put(2, 2);\nconsole.log(lru.get(1)); // 1\nlru.put(3, 3); // evicts 2\nconsole.log(lru.get(2)); // -1`,
      solutionCode: `class LRUCache {\n  constructor(capacity) {\n    this.capacity = capacity;\n    this.map = new Map();\n  }\n  get(key) {\n    if (!this.map.has(key)) return -1;\n    const val = this.map.get(key);\n    this.map.delete(key);\n    this.map.set(key, val);\n    return val;\n  }\n  put(key, value) {\n    if (this.map.has(key)) this.map.delete(key);\n    this.map.set(key, value);\n    if (this.map.size > this.capacity) {\n      this.map.delete(this.map.keys().next().value);\n    }\n  }\n}`,
    },
    {
      id: 'valid-anagram',
      title: '242. Valid Anagram (Frequency Counting)',
      difficulty: 'EASY',
      companies: ['Amazon', 'Microsoft', 'Uber'],
      description: 'Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.',
      timeComplexity: 'O(N)',
      spaceComplexity: 'O(1)',
      starterCode: `function isAnagram(s, t) {\n  if (s.length !== t.length) return false;\n  const count = {};\n  for (let char of s) count[char] = (count[char] || 0) + 1;\n  for (let char of t) {\n    if (!count[char]) return false;\n    count[char]--;\n  }\n  return true;\n}\n\nconsole.log(isAnagram("anagram", "nagaram")); // true`,
      solutionCode: `function isAnagram(s, t) {\n  if (s.length !== t.length) return false;\n  const count = {};\n  for (let char of s) count[char] = (count[char] || 0) + 1;\n  for (let char of t) {\n    if (!count[char]) return false;\n    count[char]--;\n  }\n  return true;\n}`,
    },
    {
      id: 'binary-tree-level-order',
      title: '102. Binary Tree Level Order Traversal (BFS)',
      difficulty: 'MEDIUM',
      companies: ['Meta', 'Google', 'Netflix'],
      description: 'Given the `root` of a binary tree, return the level order traversal of its nodes\' values (from left to right, level by level).',
      timeComplexity: 'O(N)',
      spaceComplexity: 'O(N)',
      starterCode: `function levelOrder(root) {\n  if (!root) return [];\n  const result = [];\n  const queue = [root];\n  while (queue.length > 0) {\n    const levelSize = queue.length;\n    const currentLevel = [];\n    for (let i = 0; i < levelSize; i++) {\n      const node = queue.shift();\n      currentLevel.push(node.val);\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n    result.push(currentLevel);\n  }\n  return result;\n}`,
      solutionCode: `function levelOrder(root) {\n  if (!root) return [];\n  const result = [];\n  const queue = [root];\n  while (queue.length > 0) {\n    const levelSize = queue.length;\n    const currentLevel = [];\n    for (let i = 0; i < levelSize; i++) {\n      const node = queue.shift();\n      currentLevel.push(node.val);\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n    result.push(currentLevel);\n  }\n  return result;\n}`,
    },
  ];

  const systemDesignPatterns: SystemDesignPattern[] = [
    {
      id: 'tinyurl',
      title: 'Design TinyURL (Distributed URL Shortener)',
      companies: ['Google', 'Meta', 'Amazon'],
      description: 'Design a scalable URL shortening service capable of handling 100M new URLs/day with sub-10ms redirect latencies.',
      keyComponents: [
        'Base62 Encoding (0-9, a-z, A-Z) for 6-character short hash keys',
        'Redis Cluster Caching for top 20% viral hot links',
        'NoSQL Database (MongoDB / Cassandra) for horizontal write scaling',
        'Distributed Rate Limiter (Token Bucket) on API Gateway',
      ],
      architectureDiagram: `[Client Browser]\n       │ (GET /s/7X9aB)\n       ▼\n[Cloudflare CDN / API Gateway]\n       │\n       ├──► [Redis Cache] ──(Hit: <2ms)──► Return Long URL Redirect (301)\n       │        │ (Miss)\n       │        ▼\n       └──► [App Microservice]\n                │\n                ▼\n       [MongoDB Sharded Cluster]`,
    },
    {
      id: 'netflix',
      title: 'Design Netflix (Scalable Video Streaming Platform)',
      companies: ['Netflix', 'Amazon Prime', 'YouTube'],
      description: 'Design a global video streaming platform capable of serving 4K adaptive bitrate video to 250M+ concurrent subscribers.',
      keyComponents: [
        'Transcoding Worker Queue (AWS Batch/Lambda) converting raw video into HLS/DASH multi-bitrate chunks',
        'Global Content Delivery Network (Open Connect CDN / CloudFront) for edge video caching',
        'Microservices Architecture (API Gateway + Eureka Service Discovery)',
        'Cassandra / DynamoDB for user watch history & playback bookmarking',
      ],
      architectureDiagram: `[Video Creator Upload]\n       │\n       ▼\n[S3 Raw Video Bucket]\n       │\n       ▼ (S3 Event Trigger)\n[Transcoder Workers (HLS Chunks: 1080p, 720p, 480p)]\n       │\n       ▼\n[Global Edge CDN (Open Connect)] ◄──── [Subscriber TV/Mobile App]`,
    },
    {
      id: 'whatsapp',
      title: 'Design WhatsApp / Discord (Real-Time Messaging System)',
      companies: ['Meta', 'Discord', 'Telegram'],
      description: 'Design a real-time messaging architecture supporting 2 Billion active users, end-to-end encryption, and offline delivery.',
      keyComponents: [
        'Persistent WebSocket Connections managed by Erlang/Node.js Gateway servers',
        'Apache Kafka Message Queue for asynchronous message routing',
        'Cassandra NoSQL Database for high-throughput append-only chat history storage',
        'Push Notification Service (FCM / APNs) for offline mobile recipients',
      ],
      architectureDiagram: `[User A (Mobile)]\n       │ (WebSocket Connection)\n       ▼\n[Gateway Connection Server]\n       │\n       ▼\n[Kafka Message Queue] ──► [User B Online?] ──YES──► [Gateway User B]\n       │                                   │\n       │                                  NO\n       ▼                                   ▼\n[Cassandra Storage]              [FCM Push Notification]`,
    },
  ];

  return (
    <div className={styles.container}>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <Badge variant="primary" style={{ marginBottom: '1rem', display: 'inline-block' }}>
          🚀 Big-Tech Career Acceleration Track
        </Badge>
        <h1 className={styles.title}>Land Your Dream Role at FAANG & Top Tech</h1>
        <p className={styles.subtitle}>
          Master Data Structures & Algorithms, System Design, and Real-World Technical Interviewing. Designed by <strong>Scott Yann</strong> and powered by <strong>Gemini AI</strong> to make you career-ready for top engineering companies.
        </p>

        {/* Tab Buttons */}
        <div className={styles.tabButtons}>
          <button
            className={`${styles.tabBtn} ${activeTab === 'dsa' ? styles.active : ''}`}
            onClick={() => setActiveTab('dsa')}
          >
            <Code2 size={18} /> FAANG DS&A Coding Arena
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'system-design' ? styles.active : ''}`}
            onClick={() => setActiveTab('system-design')}
          >
            <Layers size={18} /> System Design Masterclass
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'mock-interview' ? styles.active : ''}`}
            onClick={() => setActiveTab('mock-interview')}
          >
            <MessageSquare size={18} /> AI Mock Interviewer
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'checklist' ? styles.active : ''}`}
            onClick={() => setActiveTab('checklist')}
          >
            <Award size={18} /> Career Readiness Checklist
          </button>
        </div>
      </section>

      {/* Tab 1: DS&A Coding Arena */}
      {activeTab === 'dsa' && (
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Code2 size={24} color="#8b5cf6" /> Top FAANG Coding Interview Problems
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Practice essential Data Structures & Algorithms questions frequently asked at Google, Meta, Amazon, Apple, and Netflix.
              </p>
            </div>
          </div>

          <div className={styles.grid}>
            {dsaProblems.map((prob) => (
              <div key={prob.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={`${styles.tag} ${styles[prob.difficulty]}`}>{prob.difficulty}</span>
                  <div className="flex gap-1 flex-wrap">
                    {prob.companies.map((c, i) => (
                      <span key={i} className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className={styles.cardTitle}>{prob.title}</h3>
                <p className={styles.cardDesc}>{prob.description}</p>

                <div className={styles.metaInfo}>
                  <span>⏱️ Time: <strong>{prob.timeComplexity}</strong></span>
                  <span>💾 Space: <strong>{prob.spaceComplexity}</strong></span>
                </div>

                <Button 
                  variant="primary" 
                  style={{ marginTop: '0.5rem', width: '100%' }}
                  onClick={() => setSelectedProblem(prob)}
                >
                  Solve in Editor 💻
                </Button>
              </div>
            ))}
          </div>

          {/* Interactive Code Editor Modal / Drawer for Selected Problem */}
          {selectedProblem && (
            <div className={`glass-panel ${styles.mockInterviewBox}`} style={{ marginTop: '2rem' }}>
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Terminal size={20} color="#6366f1" /> {selectedProblem.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Time: {selectedProblem.timeComplexity} | Space: {selectedProblem.spaceComplexity}
                  </p>
                </div>
                <Button variant="secondary" onClick={() => setSelectedProblem(null)}>Close Editor ✕</Button>
              </div>

              <CodeEditor initialCode={selectedProblem.starterCode} language="javascript" />
            </div>
          )}
        </div>
      )}

      {/* Tab 2: System Design Masterclass */}
      {activeTab === 'system-design' && (
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Layers size={24} color="#6366f1" /> High-Scale System Design Architectures
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Learn how Big-Tech companies architect distributed systems serving 100M+ active users.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {systemDesignPatterns.map((sys) => (
              <div key={sys.id} className={styles.systemDesignBox}>
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <h3 className="text-xl font-bold text-white">{sys.title}</h3>
                  <div className="flex gap-2">
                    {sys.companies.map((c, i) => (
                      <Badge key={i} variant="secondary">{c}</Badge>
                    ))}
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">{sys.description}</p>

                <div className="my-2">
                  <h4 className="text-sm font-semibold text-indigo-400 mb-2">Key Architectural Components:</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
                    {sys.keyComponents.map((comp, idx) => (
                      <li key={idx}>{comp}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">High-Level Architecture Diagram:</h4>
                  <pre className={styles.architectureDiagram}>{sys.architectureDiagram}</pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: AI Mock Interviewer */}
      {activeTab === 'mock-interview' && (
        <div className={styles.mockInterviewBox}>
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <MessageSquare size={24} color="#10b981" /> Interactive AI Mock Technical Interview
            </h2>
            <p className="text-gray-300 text-sm mt-1">
              Code-Mentor AI will play the role of a Lead Principal Engineer at Google/Meta. Choose your domain and start a live technical interview session!
            </p>
          </div>

          <div style={{ minHeight: '500px' }}>
            <AiChatPanel 
              currentCode={`// Tell the AI interviewer your target role (e.g. Fullstack, Cloud Architect, AI Engineer, Security) to begin your 45-minute mock interview!`}
              lessonContext="FAANG Mock Technical Interview Session with Principal Engineering Manager"
            />
          </div>
        </div>
      )}

      {/* Tab 4: Career Readiness Checklist */}
      {activeTab === 'checklist' && (
        <div className={`glass-panel ${styles.mockInterviewBox}`}>
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Award size={24} color="#f59e0b" /> Big-Tech Career Readiness Checklist
            </h2>
            <p className="text-gray-300 text-sm mt-1">
              Complete these milestones to verify your readiness for senior engineering roles at top tech companies.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <CheckCircle2 size={24} color="#10b981" />
              <div>
                <h4 className="text-white font-semibold">1. Complete 15+ Core Lessons in Your Domain</h4>
                <p className="text-xs text-gray-400">Master fundamental & advanced concepts across your target technology stack.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <CheckCircle2 size={24} color="#10b981" />
              <div>
                <h4 className="text-white font-semibold">2. Solve Top 10 FAANG Data Structures & Algorithms Problems</h4>
                <p className="text-xs text-gray-400">Demonstrate O(N) time & O(1) space complexity problem solving in the DS&A Arena.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <CheckCircle2 size={24} color="#10b981" />
              <div>
                <h4 className="text-white font-semibold">3. Build & Deploy an End-to-End Capstone Project</h4>
                <p className="text-xs text-gray-400">Ship a full-stack production application with CI/CD pipelines to your public GitHub profile.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <CheckCircle2 size={24} color="#10b981" />
              <div>
                <h4 className="text-white font-semibold">4. Pass AI Mock Technical Interview Assessment</h4>
                <p className="text-xs text-gray-400">Successfully defend your architectural decisions and code logic to our AI Lead Engineer.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Author Banner */}
      <AuthorBanner />
    </div>
  );
}
