import type { CategoryDef } from '../types';
import { mcq, trueFalse, quiz, lesson, setupLesson } from '../helpers';

export const databasesCategory: CategoryDef = {
  name: 'Databases',
  slug: 'databases',
  description: 'Master relational and NoSQL databases — SQL, PostgreSQL, MongoDB, and Redis for building data-driven applications.',
  icon: '🗄️',
  color: '#10b981',
  sortOrder: 4,
  courses: [
    {
      title: 'SQL Fundamentals',
      slug: 'sql-fundamentals',
      description: 'Learn SQL from scratch — SELECT, JOIN, subqueries, aggregation, and database normalization for relational databases.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 15,
      resources: [
        { resourceType: 'youtube', title: 'SQL Full Course', url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'article', title: 'SQLBolt Interactive Tutorial', url: 'https://sqlbolt.com/', author: 'SQLBolt' },
        { resourceType: 'cheatsheet', title: 'SQL Cheat Sheet', url: 'https://www.sqltutorial.org/sql-cheat-sheet/', author: 'SQL Tutorial' },
      ],
      modules: [
        {
          title: 'SQL Basics',
          lessons: [
            lesson('SELECT & WHERE', 'sql-select-where', `# SELECT & WHERE

## Basic SELECT

\`\`\`sql
-- Select all columns
SELECT * FROM users;

-- Select specific columns
SELECT name, email FROM users;

-- Aliases
SELECT name AS "Full Name", email AS "Email Address"
FROM users;
\`\`\`

## WHERE — Filtering Rows

\`\`\`sql
SELECT * FROM users WHERE age >= 18;
SELECT * FROM products WHERE price BETWEEN 10 AND 50;
SELECT * FROM users WHERE name LIKE 'A%';       -- Starts with A
SELECT * FROM users WHERE city IN ('Paris', 'London', 'Tokyo');
SELECT * FROM users WHERE email IS NOT NULL;
\`\`\`

## Sorting & Limiting

\`\`\`sql
SELECT * FROM products
ORDER BY price DESC
LIMIT 10;
\`\`\`

## Aggregate Functions

\`\`\`sql
SELECT
  COUNT(*) AS total_users,
  AVG(age) AS avg_age,
  MIN(age) AS youngest,
  MAX(age) AS oldest
FROM users;
\`\`\`

## GROUP BY

\`\`\`sql
SELECT city, COUNT(*) AS user_count
FROM users
GROUP BY city
HAVING COUNT(*) > 5
ORDER BY user_count DESC;
\`\`\``, {
              starterCode: `-- SQL query examples\n\n-- 1. Select all users\nSELECT * FROM users;\n\n-- 2. Find users over 18\nSELECT name, age FROM users WHERE age >= 18;\n\n-- 3. Count users by city\nSELECT city, COUNT(*) AS user_count\nFROM users\nGROUP BY city\nORDER BY user_count DESC;\n\n-- 4. Find the average age\nSELECT AVG(age) AS average_age FROM users;`,
              solutionCode: `SELECT * FROM users;\n\nSELECT name, age FROM users WHERE age >= 18;\n\nSELECT city, COUNT(*) AS user_count\nFROM users\nGROUP BY city\nORDER BY user_count DESC;\n\nSELECT AVG(age) AS average_age FROM users;`,
              codeLanguage: 'sql',
              estimatedMinutes: 20,
              xpReward: 50,
              quiz: quiz('SELECT & WHERE Quiz', [
                mcq('What does `SELECT *` do?', 'Returns all columns from the table', ['Returns the first row', 'Deletes all data'], '`*` is a wildcard that selects every column.'),
                mcq('What does `LIKE \'A%\'` match?', 'Strings starting with A', ['Strings ending with A', 'Strings containing A'], '`%` is a wildcard — `A%` matches any string starting with A.'),
                trueFalse('`HAVING` filters groups after GROUP BY.', true, '`WHERE` filters rows before grouping; `HAVING` filters after.'),
              ]),
            }),
            lesson('JOINs & Relationships', 'sql-joins', `# JOINs & Relationships

## Types of JOINs

### INNER JOIN — Only matching rows

\`\`\`sql
SELECT users.name, orders.total
FROM users
INNER JOIN orders ON users.id = orders.user_id;
\`\`\`

### LEFT JOIN — All left rows + matching right

\`\`\`sql
SELECT users.name, COUNT(orders.id) AS order_count
FROM users
LEFT JOIN orders ON users.id = orders.user_id
GROUP BY users.name;
\`\`\`

### Visual Reference
| JOIN Type | Result |
|-----------|--------|
| INNER JOIN | Only matching rows from both tables |
| LEFT JOIN | All rows from left + matching right |
| RIGHT JOIN | All rows from right + matching left |
| FULL JOIN | All rows from both tables |

## Subqueries

\`\`\`sql
-- Find users with above-average spending
SELECT name, total_spent
FROM users
WHERE total_spent > (SELECT AVG(total_spent) FROM users);
\`\`\`

## Multiple Joins

\`\`\`sql
SELECT
  u.name,
  c.title AS course,
  p.status
FROM users u
JOIN enrollments e ON u.id = e.user_id
JOIN courses c ON e.course_id = c.id
JOIN progress p ON p.enrollment_id = e.id;
\`\`\``, {
              starterCode: `-- JOIN examples\n\n-- Get all users with their orders\nSELECT u.name, o.product, o.total\nFROM users u\nINNER JOIN orders o ON u.id = o.user_id;\n\n-- Users with order count (including those with 0 orders)\nSELECT u.name, COUNT(o.id) AS orders\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nGROUP BY u.name\nORDER BY orders DESC;\n\n-- Subquery: above average orders\nSELECT name\nFROM users\nWHERE id IN (\n  SELECT user_id FROM orders\n  GROUP BY user_id\n  HAVING COUNT(*) > (SELECT AVG(cnt) FROM (SELECT COUNT(*) AS cnt FROM orders GROUP BY user_id))\n);`,
              solutionCode: `SELECT u.name, o.product, o.total\nFROM users u\nINNER JOIN orders o ON u.id = o.user_id;\n\nSELECT u.name, COUNT(o.id) AS orders\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nGROUP BY u.name\nORDER BY orders DESC;`,
              codeLanguage: 'sql',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('JOINs Quiz', [
                mcq('What does a LEFT JOIN return?', 'All rows from the left table, plus matching rows from the right', ['Only matching rows', 'All rows from both tables'], 'LEFT JOIN keeps all left rows even without a match (NULL for right columns).'),
                trueFalse('An INNER JOIN excludes rows without a match in both tables.', true),
                mcq('What is a subquery?', 'A query nested inside another query', ['A backup query', 'A query that runs in parallel'], 'Subqueries are queries within queries, often used in WHERE or FROM clauses.'),
              ]),
            }),
          ],
        },
        {
          title: 'Database Design',
          lessons: [
            lesson('Normalization & Schema Design', 'normalization', `# Normalization & Schema Design

## Why Normalize?
Eliminate data redundancy and prevent update anomalies.

## Normal Forms

### 1NF — First Normal Form
- Each column holds atomic (single) values
- No repeating groups

### 2NF — Second Normal Form
- Must be in 1NF
- All non-key columns depend on the entire primary key

### 3NF — Third Normal Form
- Must be in 2NF
- No transitive dependencies (non-key depending on non-key)

## Example: Unnormalized → 3NF

**Before (Unnormalized):**
| OrderID | Customer | CustomerEmail | Product | Price |
|---------|----------|--------------|---------|-------|
| 1 | Alice | alice@email | Laptop | 999 |
| 2 | Alice | alice@email | Mouse | 25 |

**After (3NF):**
\`\`\`sql
CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(255) UNIQUE
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(10,2)
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id INT REFERENCES customers(id),
  product_id INT REFERENCES products(id),
  ordered_at TIMESTAMP DEFAULT NOW()
);
\`\`\`

## Foreign Keys & Constraints

\`\`\`sql
ALTER TABLE orders
ADD CONSTRAINT fk_customer
FOREIGN KEY (customer_id) REFERENCES customers(id)
ON DELETE CASCADE;
\`\`\``, {
              starterCode: `-- Design a normalized schema for a blog\n\nCREATE TABLE authors (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  email VARCHAR(255) UNIQUE NOT NULL\n);\n\nCREATE TABLE posts (\n  id SERIAL PRIMARY KEY,\n  author_id INT REFERENCES authors(id),\n  title VARCHAR(200) NOT NULL,\n  content TEXT,\n  published_at TIMESTAMP DEFAULT NOW()\n);\n\nCREATE TABLE tags (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR(50) UNIQUE NOT NULL\n);\n\n-- Many-to-many relationship\nCREATE TABLE post_tags (\n  post_id INT REFERENCES posts(id) ON DELETE CASCADE,\n  tag_id INT REFERENCES tags(id) ON DELETE CASCADE,\n  PRIMARY KEY (post_id, tag_id)\n);`,
              solutionCode: `CREATE TABLE authors (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  email VARCHAR(255) UNIQUE NOT NULL\n);\n\nCREATE TABLE posts (\n  id SERIAL PRIMARY KEY,\n  author_id INT REFERENCES authors(id),\n  title VARCHAR(200) NOT NULL,\n  content TEXT,\n  published_at TIMESTAMP DEFAULT NOW()\n);\n\nCREATE TABLE tags (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR(50) UNIQUE NOT NULL\n);\n\nCREATE TABLE post_tags (\n  post_id INT REFERENCES posts(id) ON DELETE CASCADE,\n  tag_id INT REFERENCES tags(id) ON DELETE CASCADE,\n  PRIMARY KEY (post_id, tag_id)\n);`,
              codeLanguage: 'sql',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('Normalization Quiz', [
                mcq('What does 1NF require?', 'Atomic values in each column', ['No foreign keys', 'No NULL values'], '1NF means each cell holds a single, indivisible value.'),
                trueFalse('A many-to-many relationship requires a junction table.', true, 'Junction (join) tables hold foreign keys to both related tables.'),
              ]),
            }),
          ],
        },
      ],
    },

    {
      title: 'PostgreSQL Advanced',
      slug: 'postgresql-advanced',
      description: 'Go beyond basic SQL — master indexes, CTEs, window functions, JSONB, and performance tuning in PostgreSQL.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'article', title: 'PostgreSQL Official Docs', url: 'https://www.postgresql.org/docs/current/', author: 'PostgreSQL Global Development Group' },
        { resourceType: 'youtube', title: 'PostgreSQL Tutorial', url: 'https://www.youtube.com/watch?v=qw--VYLpxG4', author: 'freeCodeCamp', platform: 'YouTube' },
      ],
      modules: [
        {
          title: 'Advanced SQL Features',
          lessons: [
            lesson('CTEs & Window Functions', 'ctes-window-functions', `# CTEs & Window Functions

## Common Table Expressions (CTEs)

\`\`\`sql
WITH high_spenders AS (
  SELECT user_id, SUM(total) AS total_spent
  FROM orders
  GROUP BY user_id
  HAVING SUM(total) > 1000
)
SELECT u.name, hs.total_spent
FROM users u
JOIN high_spenders hs ON u.id = hs.user_id
ORDER BY hs.total_spent DESC;
\`\`\`

## Window Functions

\`\`\`sql
-- Row number within each category
SELECT
  name,
  category,
  price,
  ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) AS rank
FROM products;

-- Running total
SELECT
  order_date,
  total,
  SUM(total) OVER (ORDER BY order_date) AS running_total
FROM orders;

-- Moving average
SELECT
  date,
  revenue,
  AVG(revenue) OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS moving_avg_7d
FROM daily_revenue;
\`\`\`

## Common Window Functions
| Function | Description |
|----------|-------------|
| \`ROW_NUMBER()\` | Sequential number |
| \`RANK()\` | Rank with gaps |
| \`DENSE_RANK()\` | Rank without gaps |
| \`LAG()\` | Previous row value |
| \`LEAD()\` | Next row value |
| \`SUM() OVER\` | Running sum |
| \`AVG() OVER\` | Running average |`, {
              starterCode: `-- CTE: Find top 3 products per category\nWITH ranked AS (\n  SELECT\n    name,\n    category,\n    price,\n    ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) AS rank\n  FROM products\n)\nSELECT name, category, price\nFROM ranked\nWHERE rank <= 3\nORDER BY category, rank;\n\n-- Running total of sales\nSELECT\n  order_date,\n  amount,\n  SUM(amount) OVER (ORDER BY order_date) AS running_total\nFROM orders;`,
              solutionCode: `WITH ranked AS (\n  SELECT name, category, price,\n    ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) AS rank\n  FROM products\n)\nSELECT name, category, price\nFROM ranked WHERE rank <= 3\nORDER BY category, rank;\n\nSELECT order_date, amount,\n  SUM(amount) OVER (ORDER BY order_date) AS running_total\nFROM orders;`,
              codeLanguage: 'sql',
              estimatedMinutes: 30,
              xpReward: 70,
              quiz: quiz('CTEs & Window Functions Quiz', [
                mcq('What does `PARTITION BY` do in a window function?', 'Divides rows into groups for the function', ['Filters rows', 'Sorts results'], '`PARTITION BY` splits rows into partitions — the window function resets per partition.'),
                trueFalse('CTEs make complex queries more readable by naming subqueries.', true),
                mcq('What does `LAG(price, 1)` return?', 'The price from the previous row', ['The next row price', 'The average price'], '`LAG()` accesses data from the previous row in the result set.'),
              ]),
            }),
          ],
        },
      ],
    },

    {
      title: 'MongoDB & NoSQL',
      slug: 'mongodb-nosql',
      description: 'Learn document-based NoSQL databases with MongoDB — CRUD operations, aggregation pipeline, indexing, and schema design.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 18,
      resources: [
        { resourceType: 'article', title: 'MongoDB University (Free)', url: 'https://university.mongodb.com/', author: 'MongoDB' },
        { resourceType: 'youtube', title: 'MongoDB Crash Course', url: 'https://www.youtube.com/watch?v=-56x56UppqQ', author: 'Web Dev Simplified', platform: 'YouTube' },
      ],
      modules: [
        {
          title: 'MongoDB Essentials',
          lessons: [
            lesson('Documents & CRUD', 'mongodb-crud', `# Documents & CRUD

## What is MongoDB?
A document database storing data as JSON-like documents (BSON).

## Documents vs Rows

\`\`\`javascript
// MongoDB document
{
  "_id": ObjectId("..."),
  "name": "Alice",
  "age": 25,
  "skills": ["Python", "React", "MongoDB"],
  "address": {
    "city": "Paris",
    "country": "France"
  }
}
\`\`\`

## CRUD Operations

\`\`\`javascript
// CREATE
db.users.insertOne({ name: "Alice", age: 25 });
db.users.insertMany([
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 }
]);

// READ
db.users.find({});                    // All documents
db.users.find({ age: { $gte: 25 } }); // Age >= 25
db.users.findOne({ name: "Alice" });   // First match

// UPDATE
db.users.updateOne(
  { name: "Alice" },
  { $set: { age: 26 }, $push: { skills: "Docker" } }
);

// DELETE
db.users.deleteOne({ name: "Bob" });
db.users.deleteMany({ age: { $lt: 18 } });
\`\`\`

## Query Operators
| Operator | Meaning |
|----------|---------|
| \`$eq\` | Equal |
| \`$gt\`, \`$gte\` | Greater than |
| \`$lt\`, \`$lte\` | Less than |
| \`$in\` | In array |
| \`$and\`, \`$or\` | Logical |
| \`$exists\` | Field exists |`, {
              starterCode: `// MongoDB CRUD operations\n\n// Insert a user\ndb.users.insertOne({\n  name: "Alice",\n  age: 25,\n  email: "alice@example.com",\n  skills: ["Python", "React"],\n  createdAt: new Date()\n});\n\n// Find users aged 25 or older\ndb.users.find({ age: { $gte: 25 } });\n\n// Update: add a skill\ndb.users.updateOne(\n  { name: "Alice" },\n  { $push: { skills: "MongoDB" } }\n);\n\n// Count users\ndb.users.countDocuments({});`,
              solutionCode: `db.users.insertOne({\n  name: "Alice",\n  age: 25,\n  email: "alice@example.com",\n  skills: ["Python", "React"],\n  createdAt: new Date()\n});\n\ndb.users.find({ age: { $gte: 25 } });\n\ndb.users.updateOne(\n  { name: "Alice" },\n  { $push: { skills: "MongoDB" } }\n);\n\ndb.users.countDocuments({});`,
              codeLanguage: 'javascript',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('MongoDB CRUD Quiz', [
                mcq('How does MongoDB store data?', 'As JSON-like documents (BSON)', ['In tables with rows and columns', 'As key-value pairs only'], 'MongoDB uses BSON documents — flexible, schema-free JSON-like structures.'),
                mcq('What does `$push` do in an update?', 'Adds an element to an array field', ['Removes an element', 'Replaces the entire document'], '`$push` appends a value to an array in the document.'),
                trueFalse('MongoDB requires a predefined schema.', false, 'MongoDB is schema-flexible — documents in the same collection can have different fields.'),
              ]),
            }),
          ],
        },
      ],
    },

    {
      title: 'Redis & Caching',
      slug: 'redis-caching',
      description: 'Master Redis — in-memory data structures, caching strategies, pub/sub messaging, and session management.',
      difficulty: 'advanced',
      language: 'en',
      estimatedHours: 12,
      resources: [
        { resourceType: 'article', title: 'Redis Documentation', url: 'https://redis.io/docs/', author: 'Redis Ltd.' },
        { resourceType: 'youtube', title: 'Redis Crash Course', url: 'https://www.youtube.com/watch?v=jgpVdJB2sKQ', author: 'Traversy Media', platform: 'YouTube' },
      ],
      modules: [
        {
          title: 'Redis Fundamentals',
          lessons: [
            lesson('Data Structures & Commands', 'redis-data-structures', `# Redis Data Structures

## What is Redis?
An in-memory data structure store used as database, cache, and message broker.

## Strings

\`\`\`bash
SET user:1:name "Alice"
GET user:1:name              # "Alice"
SET counter 0
INCR counter                 # 1
INCRBY counter 10            # 11
SET session:abc123 "data" EX 3600  # Expires in 1 hour
\`\`\`

## Hashes (like objects)

\`\`\`bash
HSET user:1 name "Alice" age 25 city "Paris"
HGET user:1 name             # "Alice"
HGETALL user:1               # All fields and values
\`\`\`

## Lists (ordered)

\`\`\`bash
LPUSH queue "task1"          # Push to left
RPUSH queue "task2"          # Push to right
LRANGE queue 0 -1            # Get all
LPOP queue                   # Pop from left
\`\`\`

## Sets (unique, unordered)

\`\`\`bash
SADD tags "python" "redis" "docker"
SMEMBERS tags                # All members
SISMEMBER tags "python"      # 1 (true)
\`\`\`

## Sorted Sets (scored)

\`\`\`bash
ZADD leaderboard 100 "Alice" 85 "Bob" 95 "Charlie"
ZRANGE leaderboard 0 -1 WITHSCORES    # Ascending
ZREVRANGE leaderboard 0 2              # Top 3
\`\`\`

## Caching Pattern

\`\`\`python
import redis
r = redis.Redis()

def get_user(user_id):
    cached = r.get(f"user:{user_id}")
    if cached:
        return json.loads(cached)
    user = db.query(f"SELECT * FROM users WHERE id = {user_id}")
    r.setex(f"user:{user_id}", 3600, json.dumps(user))
    return user
\`\`\``, {
              starterCode: `# Redis commands demo\n\n# String operations\nSET greeting "Hello, Redis!"\nGET greeting\n\n# Counter\nSET visits 0\nINCR visits\nINCR visits\nINCR visits\nGET visits\n\n# Hash (user profile)\nHSET user:1 name "Alice" score 95 level 5\nHGETALL user:1\n\n# Sorted set (leaderboard)\nZADD scores 95 "Alice" 87 "Bob" 92 "Charlie"\nZREVRANGE scores 0 -1 WITHSCORES`,
              solutionCode: `SET greeting "Hello, Redis!"\nGET greeting\nSET visits 0\nINCR visits\nINCR visits\nINCR visits\nGET visits\nHSET user:1 name "Alice" score 95 level 5\nHGETALL user:1\nZADD scores 95 "Alice" 87 "Bob" 92 "Charlie"\nZREVRANGE scores 0 -1 WITHSCORES`,
              codeLanguage: 'bash',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('Redis Quiz', [
                mcq('What makes Redis fast?', 'It stores data in memory (RAM)', ['It uses indexes only', 'It compresses all data'], 'Redis operates entirely in memory, making it extremely fast.'),
                mcq('Which Redis data structure is best for a leaderboard?', 'Sorted Set', ['List', 'Hash'], 'Sorted Sets automatically maintain order by score — ideal for rankings.'),
                trueFalse('Redis can set an expiration time on keys.', true, 'Use `EXPIRE key seconds` or `SET key value EX seconds`.'),
              ]),
            }),
          ],
        },
      ],
    },
  ],
};
