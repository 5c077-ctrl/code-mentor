import type { CategoryDef } from '../types';
import { mcq, trueFalse, quiz, lesson, setupLesson } from '../helpers';

export const databasesCategory: CategoryDef = {
  name: 'Databases',
  slug: 'databases',
  description: 'Master relational SQL and NoSQL data stores — PostgreSQL, MongoDB, Redis, schema design, and query optimization.',
  icon: '🗄️',
  color: '#10b981',
  sortOrder: 4,
  courses: [
    // ━━━━━━━━━━━━━━━━━━━ SQL FUNDAMENTALS ━━━━━━━━━━━━━━━━━━━
    {
      title: 'SQL Fundamentals',
      slug: 'sql-fundamentals',
      description: 'Master SQL database queries — SELECT, WHERE, JOINs, GROUP BY, aggregations, subqueries, and table creation.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 12,
      resources: [
        { resourceType: 'youtube', title: 'SQL Tutorial — Full Database Course for Beginners', url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY', author: 'FreeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'SQL Joins Explained in 5 Minutes', url: 'https://www.youtube.com/watch?v=9yeOJ0ZMUYw', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Complete SQL Course (Database Design & Queries)', url: 'https://www.youtube.com/watch?v=7S_tz1z_5bA', author: 'Programming with Mosh', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'SQL Subqueries, Aggregations & Group By', url: 'https://www.youtube.com/watch?v=Qc13zFwXQYg', author: 'Alex The Analyst', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Database Indexing & Query Optimization', url: 'https://www.youtube.com/watch?v=fsG1XaZEa78', author: 'Hussein Nasser', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'SQLBolt — Interactive SQL Tutorials', url: 'https://sqlbolt.com/', author: 'SQLBolt' },
        { resourceType: 'article', title: 'Mode Analytics SQL Tutorial for Data Analysis', url: 'https://mode.com/sql-tutorial/', author: 'Mode Analytics' },
        { resourceType: 'cheatsheet', title: 'SQL Query & Syntax Quick Reference', url: 'https://quickref.me/sql', author: 'QuickRef' },
        { resourceType: 'article', title: 'Use The Index, Luke! (SQL Indexing Guide)', url: 'https://use-the-index-luke.com/', author: 'Markus Winand' },
        { resourceType: 'cheatsheet', title: 'SQL Cheat Sheet & Joins Diagram', url: 'https://www.sqltutorial.org/sql-cheat-sheet/', author: 'SQLTutorial' },
      ],
      modules: [
        {
          title: 'Module 1: Basic Queries & Filtering',
          lessons: [
            setupLesson('SQL Fundamentals', 'sql-fundamentals', 'sql',
              `1. Install SQLite or PostgreSQL\n2. Open terminal: \`sqlite3 test.db\`\n3. Execute: \`SELECT 1;\``,
              `SELECT 'Hello SQL!' AS greeting;`,
              `SELECT 'Hello SQL!' AS greeting;`
            ),
            lesson('Basic Queries (`SELECT`, `FROM`)', 'sql-select', `# SELECT Queries\n\nRetrieve specific columns: \`SELECT name, email FROM users;\`. Retrieve all columns: \`SELECT * FROM users;\`.`, {
              starterCode: `SELECT name, email FROM users;`,
              solutionCode: `SELECT name, email FROM users;`,
              codeLanguage: 'sql',
              quiz: quiz('SELECT Quiz', [
                mcq('What keyword selects all columns in a table?', '*', ['ALL', 'EVERY'], '`SELECT *` selects all columns.'),
              ]),
            }),
            lesson('Filtering Results (`WHERE`, `LIKE`, `IN`)', 'sql-where', `# Filtering\n\nFilter rows with conditions: \`WHERE age >= 18 AND status = 'active'\`. Use \`LIKE 'A%'\` for wildcards.`, {
              starterCode: `SELECT * FROM users WHERE status = 'active' AND age >= 18;`,
              solutionCode: `SELECT * FROM users WHERE status = 'active' AND age >= 18;`,
              codeLanguage: 'sql',
              quiz: quiz('WHERE Quiz', [
                mcq('What wildcard matches any sequence of characters in a `LIKE` query?', '%', ['*', '?'], '`%` matches zero or more characters in SQL `LIKE`.'),
              ]),
            }),
            lesson('Sorting & Limiting (`ORDER BY`, `LIMIT`)', 'sql-order-limit', `# Sorting & Paging\n\nSort rows with \`ORDER BY created_at DESC\` and limit page size with \`LIMIT 10 OFFSET 0\`.`, {
              starterCode: `SELECT * FROM products ORDER BY price DESC LIMIT 5;`,
              solutionCode: `SELECT * FROM products ORDER BY price DESC LIMIT 5;`,
              codeLanguage: 'sql',
              quiz: quiz('Order Limit Quiz', [
                trueFalse('`ORDER BY` sorts in ascending order by default unless `DESC` is specified.', true),
              ]),
            }),
            lesson('Creating Tables & Insert Operations', 'sql-create-insert', `# Table Operations\n\nCreate tables with data types: \`CREATE TABLE users (id INT PRIMARY KEY, name TEXT);\`. Insert rows: \`INSERT INTO users VALUES (1, 'Alice');\`.`, {
              starterCode: `CREATE TABLE users (id INT PRIMARY KEY, name TEXT);\nINSERT INTO users VALUES (1, 'Alice');\nSELECT * FROM users;`,
              solutionCode: `CREATE TABLE users (id INT PRIMARY KEY, name TEXT);\nINSERT INTO users VALUES (1, 'Alice');\nSELECT * FROM users;`,
              codeLanguage: 'sql',
              quiz: quiz('Create Insert Quiz', [
                mcq('What constraint guarantees uniqueness and non-nullability for a column?', 'PRIMARY KEY', ['FOREIGN KEY', 'CHECK'], '`PRIMARY KEY` uniquely identifies each row.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Aggregations & Joins',
          lessons: [
            lesson('Aggregate Functions (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`)', 'sql-aggregates', `# Aggregations\n\nCalculate aggregate statistics: \`SELECT COUNT(*), AVG(score) FROM students;\`.`, {
              starterCode: `SELECT COUNT(*) AS total_users, AVG(age) AS avg_age FROM users;`,
              solutionCode: `SELECT COUNT(*) AS total_users, AVG(age) AS avg_age FROM users;`,
              codeLanguage: 'sql',
              quiz: quiz('Aggregates Quiz', [
                mcq('Which function returns the total count of matching rows?', 'COUNT(*)', ['SUM(*)', 'TOTAL(*)'], '`COUNT(*)` returns total row count.'),
              ]),
            }),
            lesson('Grouping & Filtering Groups (`GROUP BY`, `HAVING`)', 'sql-group-by', `# GROUP BY & HAVING\n\nGroup rows: \`GROUP BY category\`. Filter aggregated groups using \`HAVING COUNT(*) > 5\`.`, {
              starterCode: `SELECT category, COUNT(*) FROM products GROUP BY category HAVING COUNT(*) > 5;`,
              solutionCode: `SELECT category, COUNT(*) FROM products GROUP BY category HAVING COUNT(*) > 5;`,
              codeLanguage: 'sql',
              quiz: quiz('Group By Quiz', [
                mcq('Why use `HAVING` instead of `WHERE`?', '`HAVING` filters aggregated group results after `GROUP BY`', ['`HAVING` is faster', '`WHERE` doesn\'t support numbers'], '`HAVING` filters post-aggregation groups.'),
              ]),
            }),
            lesson('Inner Joins (`INNER JOIN`)', 'sql-inner-join', `# INNER JOIN\n\nCombine rows from two tables matching on foreign keys: \`SELECT * FROM orders JOIN users ON orders.user_id = users.id;\`.`, {
              starterCode: `SELECT orders.id, users.name FROM orders JOIN users ON orders.user_id = users.id;`,
              solutionCode: `SELECT orders.id, users.name FROM orders JOIN users ON orders.user_id = users.id;`,
              codeLanguage: 'sql',
              quiz: quiz('Inner Join Quiz', [
                mcq('What rows does an `INNER JOIN` return?', 'Only rows that have matching values in both tables', ['All rows from left table', 'All rows from right table'], '`INNER JOIN` requires matching keys in both tables.'),
              ]),
            }),
            lesson('Outer Joins (`LEFT JOIN`, `RIGHT JOIN`)', 'sql-outer-join', `# Outer Joins\n\nInclude unmatched rows from the left table using \`LEFT JOIN\`. Unmatched right columns evaluate to \`NULL\`.`, {
              starterCode: `SELECT users.name, orders.id FROM users LEFT JOIN orders ON users.id = orders.user_id;`,
              solutionCode: `SELECT users.name, orders.id FROM users LEFT JOIN orders ON users.id = orders.user_id;`,
              codeLanguage: 'sql',
              quiz: quiz('Outer Join Quiz', [
                trueFalse('A `LEFT JOIN` returns all rows from the left table even if no match exists in the right table.', true),
              ]),
            }),
            lesson('Updating & Deleting Data (`UPDATE`, `DELETE`)', 'sql-update-delete', `# Data Modification\n\nUpdate records: \`UPDATE users SET status = 'active' WHERE id = 1;\`. Delete records: \`DELETE FROM users WHERE id = 1;\`.`, {
              starterCode: `UPDATE users SET status = 'active' WHERE id = 1;\nDELETE FROM users WHERE age < 18;`,
              solutionCode: `UPDATE users SET status = 'active' WHERE id = 1;\nDELETE FROM users WHERE age < 18;`,
              codeLanguage: 'sql',
              quiz: quiz('Update Delete Quiz', [
                mcq('What happens if you run `DELETE FROM users;` without a `WHERE` clause?', 'Deletes all records in the table', ['Deletes the table schema', 'Throws an error'], 'Omitting `WHERE` deletes every single row.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: Subqueries & Transactions',
          lessons: [
            lesson('Subqueries & Nested SELECTs', 'sql-subqueries', `# Subqueries\n\nNest queries inside WHERE conditions or FROM clauses: \`WHERE price > (SELECT AVG(price) FROM products)\`.`, {
              starterCode: `SELECT * FROM products WHERE price > (SELECT AVG(price) FROM products);`,
              solutionCode: `SELECT * FROM products WHERE price > (SELECT AVG(price) FROM products);`,
              codeLanguage: 'sql',
              quiz: quiz('Subqueries Quiz', [
                mcq('Where can subqueries be placed in a SQL statement?', 'In SELECT, FROM, or WHERE clauses', ['Only in WHERE', 'Only in FROM'], 'Subqueries can be placed in SELECT, FROM, or WHERE clauses.'),
              ]),
            }),
            lesson('ACID Transactions (`BEGIN`, `COMMIT`, `ROLLBACK`)', 'sql-transactions', `# Transactions\n\nEnsure database integrity with atomic transactions: \`BEGIN TRANSACTION; ... COMMIT;\`.`, {
              starterCode: `BEGIN TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;`,
              solutionCode: `BEGIN TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;`,
              codeLanguage: 'sql',
              quiz: quiz('Transactions Quiz', [
                mcq('What does `ROLLBACK` do in a transaction block?', 'Undoes all operations executed since `BEGIN TRANSACTION`', ['Saves changes permanently', 'Deletes database'], '`ROLLBACK` reverts uncommitted changes.'),
              ]),
            }),
            lesson('Database Indexing (`CREATE INDEX`)', 'sql-indexing', `# Indexing\n\nAccelerate query lookup performance: \`CREATE INDEX idx_user_email ON users(email);\`.`, {
              starterCode: `CREATE INDEX idx_user_email ON users(email);`,
              solutionCode: `CREATE INDEX idx_user_email ON users(email);`,
              codeLanguage: 'sql',
              quiz: quiz('Indexing Quiz', [
                trueFalse('Indexes speed up SELECT read queries but add slight overhead to INSERT/UPDATE write operations.', true),
              ]),
            }),
            lesson('Views & Temporary Tables (`CREATE VIEW`)', 'sql-views', `# Database Views\n\nSave complex join queries as reusable virtual tables: \`CREATE VIEW active_users AS SELECT ...\`.`, {
              starterCode: `CREATE VIEW active_users AS SELECT id, name FROM users WHERE status = 'active';\nSELECT * FROM active_users;`,
              solutionCode: `CREATE VIEW active_users AS SELECT id, name FROM users WHERE status = 'active';\nSELECT * FROM active_users;`,
              codeLanguage: 'sql',
              quiz: quiz('Views Quiz', [
                mcq('Is a SQL View a stored virtual query or a physical duplicate table?', 'A virtual stored query', ['A physical copy on disk', 'A temporary cache file'], 'Views are virtual queries evaluated dynamically.'),
              ]),
            }),
            lesson('SQL Capstone: E-Commerce Database Schema & Analytics', 'sql-capstone', `# SQL Capstone\n\nDesign a complete relational schema for an e-commerce platform with users, products, orders, and revenue queries.`, {
              starterCode: `SELECT orders.id, users.name, SUM(order_items.price) AS total\nFROM orders\nJOIN users ON orders.user_id = users.id\nJOIN order_items ON orders.id = order_items.order_id\nGROUP BY orders.id;`,
              solutionCode: `SELECT orders.id, users.name, SUM(order_items.price) AS total\nFROM orders\nJOIN users ON orders.user_id = users.id\nJOIN order_items ON orders.id = order_items.order_id\nGROUP BY orders.id;`,
              codeLanguage: 'sql',
              quiz: quiz('SQL Capstone Quiz', [
                mcq('What set of properties guarantees reliable processing of database transactions?', 'ACID (Atomicity, Consistency, Isolation, Durability)', ['BASE', 'REST'], 'ACID properties ensure relational data integrity.'),
              ]),
            }),
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ POSTGRESQL ADVANCED ━━━━━━━━━━━━━━━━━━━
    {
      title: 'PostgreSQL Advanced',
      slug: 'postgresql-advanced',
      description: 'Master advanced PostgreSQL features — JSONB fields, CTEs, Window Functions, Full-Text Search, and performance tuning.',
      difficulty: 'advanced',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'youtube', title: 'PostgreSQL Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=qw--VYLpxG4', author: 'FreeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'PostgreSQL Window Functions Masterclass', url: 'https://www.youtube.com/watch?v=Ww71knvhQ-s', author: 'Hussein Nasser', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'PostgreSQL JSONB & Document Storage Deep Dive', url: 'https://www.youtube.com/watch?v=gT5jK6_4x7w', author: 'ByteByteGo', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'PostgreSQL Performance Tuning & EXPLAIN ANALYZE', url: 'https://www.youtube.com/watch?v=CL_hV-7e15g', author: 'High Performance Postgres', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'PostgreSQL Full Text Search Tutorial', url: 'https://www.youtube.com/watch?v=73lpxK4K7Wk', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'Official PostgreSQL Documentation & Reference', url: 'https://www.postgresql.org/docs/', author: 'PostgreSQL Global Development Group' },
        { resourceType: 'article', title: 'Postgres Weekly News & Architecture Articles', url: 'https://postgresweekly.com/', author: 'Postgres Weekly' },
        { resourceType: 'cheatsheet', title: 'PostgreSQL Commands & Syntax Cheat Sheet', url: 'https://quickref.me/postgres', author: 'QuickRef' },
        { resourceType: 'article', title: 'PostgreSQL Exercises & Interactive Queries', url: 'https://pgexercises.com/', author: 'Alastair Simpson' },
        { resourceType: 'cheatsheet', title: 'PostgreSQL Administration Quick Reference', url: 'https://www.postgresqltutorial.com/postgresql-cheat-sheet/', author: 'PostgreSQLTutorial' },
      ],
      modules: [
        {
          title: 'Module 1: Advanced Querying & Window Functions',
          lessons: [
            setupLesson('PostgreSQL Advanced', 'postgresql-advanced', 'sql',
              `1. Install PostgreSQL 16\n2. Open psql CLI: \`psql -U postgres\`\n3. Check version: \`SELECT version();\``,
              `SELECT version();`,
              `SELECT version();`
            ),
            lesson('Window Functions (`ROW_NUMBER()`, `RANK()`, `OVER()`)', 'pg-window-functions', `# Window Functions\n\nPerform calculations across set rows related to current row: \`ROW_NUMBER() OVER (PARTITION BY category ORDER BY sales DESC)\`.`, {
              starterCode: `SELECT name, category, sales, ROW_NUMBER() OVER (PARTITION BY category ORDER BY sales DESC) as rank FROM products;`,
              solutionCode: `SELECT name, category, sales, ROW_NUMBER() OVER (PARTITION BY category ORDER BY sales DESC) as rank FROM products;`,
              codeLanguage: 'sql',
              quiz: quiz('Window Functions Quiz', [
                mcq('What clause specifies how rows are grouped for window functions?', 'PARTITION BY', ['GROUP BY', 'SPLIT BY'], '`PARTITION BY` divides rows into window partitions.'),
              ]),
            }),
            lesson('Common Table Expressions (CTEs & `WITH`)', 'pg-ctes', `# CTEs\n\nSimplify complex queries with named temporary result sets: \`WITH top_users AS (SELECT ...) SELECT * FROM top_users;\`.`, {
              starterCode: `WITH high_spenders AS (\n  SELECT user_id, SUM(amount) as total FROM orders GROUP BY user_id HAVING SUM(amount) > 1000\n)\nSELECT users.name, high_spenders.total FROM high_spenders JOIN users ON high_spenders.user_id = users.id;`,
              solutionCode: `WITH high_spenders AS (\n  SELECT user_id, SUM(amount) as total FROM orders GROUP BY user_id HAVING SUM(amount) > 1000\n)\nSELECT users.name, high_spenders.total FROM high_spenders JOIN users ON high_spenders.user_id = users.id;`,
              codeLanguage: 'sql',
              quiz: quiz('CTE Quiz', [
                mcq('What keyword introduces a Common Table Expression in PostgreSQL?', 'WITH', ['USING', 'LET'], '`WITH` defines CTE blocks.'),
              ]),
            }),
            lesson('Recursive CTEs (`WITH RECURSIVE`)', 'pg-recursive-ctes', `# Recursive CTEs\n\nTraverse hierarchical tree structures like org charts or category trees.`, {
              starterCode: `WITH RECURSIVE org_chart AS (\n  SELECT id, name, manager_id FROM employees WHERE manager_id IS NULL\n  UNION ALL\n  SELECT e.id, e.name, e.manager_id FROM employees e JOIN org_chart o ON e.manager_id = o.id\n)\nSELECT * FROM org_chart;`,
              solutionCode: `WITH RECURSIVE org_chart AS (\n  SELECT id, name, manager_id FROM employees WHERE manager_id IS NULL\n  UNION ALL\n  SELECT e.id, e.name, e.manager_id FROM employees e JOIN org_chart o ON e.manager_id = o.id\n)\nSELECT * FROM org_chart;`,
              codeLanguage: 'sql',
              quiz: quiz('Recursive CTE Quiz', [
                trueFalse('Recursive CTEs can traverse graph and tree structures of arbitrary depth.', true),
              ]),
            }),
            lesson('JSONB Data Type & Querying (`->`, `->>`)', 'pg-jsonb', `# JSONB Storage\n\nStore schema-less JSON documents: \`data JSONB\`. Query fields using \`data->>'name'\` and index with GIN.`, {
              starterCode: `SELECT data->>'title' AS title FROM posts WHERE data @> '{"tags": ["postgres"]}';`,
              solutionCode: `SELECT data->>'title' AS title FROM posts WHERE data @> '{"tags": ["postgres"]}';`,
              codeLanguage: 'sql',
              quiz: quiz('JSONB Quiz', [
                mcq('What is the difference between `->` and `->>` in JSONB extraction?', '`->` returns JSON object; `->>` returns text', ['`->` returns text; `->>` returns JSON', 'Both return JSON'], '`->>` extracts the value as plain text.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Performance Tuning & Indexing',
          lessons: [
            lesson('Analyzing Execution Plans (`EXPLAIN ANALYZE`)', 'pg-explain-analyze', `# EXPLAIN ANALYZE\n\nInspect execution query plans, cost estimates, index scans vs sequential scans.`, {
              starterCode: `EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'scott@example.com';`,
              solutionCode: `EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'scott@example.com';`,
              codeLanguage: 'sql',
              quiz: quiz('Explain Analyze Quiz', [
                mcq('What does `EXPLAIN ANALYZE` do that `EXPLAIN` alone does not?', 'Actually executes the query and reports real runtime execution timings', ['Generates SQL code', 'Deletes indexes'], '`ANALYZE` actually runs the query to measure exact execution times.'),
              ]),
            }),
            lesson('Advanced Indexing (B-Tree, GIN, GiST, BRIN)', 'pg-advanced-indexing', `# Advanced Index Types\n\nUse GIN indexes for JSONB & full-text search; B-Tree for equality/ranges; BRIN for large time-series logs.`, {
              starterCode: `CREATE INDEX idx_posts_tags ON posts USING GIN ((data->'tags'));`,
              solutionCode: `CREATE INDEX idx_posts_tags ON posts USING GIN ((data->'tags'));`,
              codeLanguage: 'sql',
              quiz: quiz('PG Index Types Quiz', [
                mcq('Which index type is optimal for searching array elements and JSONB documents?', 'GIN (Generalized Inverted Index)', ['B-Tree', 'Hash'], 'GIN indexes excel at indexing composite values like arrays and JSONB.'),
              ]),
            }),
            lesson('Full-Text Search (`tsvector`, `tsquery`)', 'pg-full-text-search', `# Full-Text Search\n\nPerform fast linguistic search using \`to_tsvector()\` and \`to_tsquery()\`.`, {
              starterCode: `SELECT title FROM articles WHERE to_tsvector('english', body) @@ to_tsquery('english', 'database & postgres');`,
              solutionCode: `SELECT title FROM articles WHERE to_tsvector('english', body) @@ to_tsquery('english', 'database & postgres');`,
              codeLanguage: 'sql',
              quiz: quiz('Full Text Search Quiz', [
                trueFalse('PostgreSQL Full-Text Search supports stemming, stop-word removal, and relevance ranking.', true),
              ]),
            }),
            lesson('Partitioning Large Tables', 'pg-table-partitioning', `# Table Partitioning\n\nSplit massive tables into smaller child partitions by RANGE or LIST (e.g. partition orders by year).`, {
              starterCode: `CREATE TABLE orders (id INT, created_at DATE) PARTITION BY RANGE (created_at);\nCREATE TABLE orders_2026 PARTITION OF orders FOR VALUES FROM ('2026-01-01') TO ('2027-01-01');`,
              solutionCode: `CREATE TABLE orders (id INT, created_at DATE) PARTITION BY RANGE (created_at);\nCREATE TABLE orders_2026 PARTITION OF orders FOR VALUES FROM ('2026-01-01') TO ('2027-01-01');`,
              codeLanguage: 'sql',
              quiz: quiz('Partitioning Quiz', [
                mcq('Why partition large PostgreSQL tables?', 'Improves query performance and speeds up maintenance by scanning smaller child tables', ['Reduces CPU count', 'Encrypts data'], 'Partition pruning allows queries to skip irrelevant child partitions.'),
              ]),
            }),
            lesson('Vacuuming & Autovacuum Architecture', 'pg-vacuum-autovacuum', `# Vacuuming\n\nReclaim dead tuple space created by UPDATE/DELETE operations using \`VACUUM FULL\` and Autovacuum daemon.`, {
              starterCode: `VACUUM (VERBOSE, ANALYZE) users;`,
              solutionCode: `VACUUM (VERBOSE, ANALYZE) users;`,
              codeLanguage: 'sql',
              quiz: quiz('Vacuum Quiz', [
                mcq('Why is VACUUM necessary in PostgreSQL MVCC architecture?', 'To reclaim storage occupied by dead tuples created by updates/deletes', ['To clear cache', 'To reboot server'], 'PostgreSQL MVCC leaves old row versions (dead tuples) that must be vacuumed.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: PostgreSQL Administration & Extensions',
          lessons: [
            lesson('PostgreSQL Extensions (`pg_trgm`, `vector`)', 'pg-extensions', `# Extensions\n\nEnable extensions: \`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";\` and \`pgvector\` for AI embeddings.`, {
              starterCode: `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";\nSELECT uuid_generate_v4();`,
              solutionCode: `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";\nSELECT uuid_generate_v4();`,
              codeLanguage: 'sql',
              quiz: quiz('Extensions Quiz', [
                trueFalse('PostgreSQL extensions add custom functions, data types, and index methods dynamically.', true),
              ]),
            }),
            lesson('PostgreSQL Connection Pooling (`PgBouncer`)', 'pg-connection-pooling', `# PgBouncer\n\nUse connection poolers like PgBouncer to manage thousands of client connections efficiently.`, {
              starterCode: `# pgbouncer.ini config example\n[databases]\napp_db = host=127.0.0.1 port=5432 dbname=app_db\npool_mode = transaction`,
              solutionCode: `# pgbouncer.ini config example\n[databases]\napp_db = host=127.0.0.1 port=5432 dbname=app_db\npool_mode = transaction`,
              codeLanguage: 'ini',
              quiz: quiz('PgBouncer Quiz', [
                mcq('Why put PgBouncer in front of PostgreSQL?', 'To reduce connection overhead by pooling client backend connections', ['To compress SQL queries', 'To format JSON'], 'PostgreSQL processes are memory-intensive per connection; PgBouncer pools them.'),
              ]),
            }),
            lesson('Replication & High Availability (WAL Streaming)', 'pg-replication', `# Streaming Replication\n\nShip Write-Ahead Logs (WAL) continuously to standby replica instances for high availability.`, {
              starterCode: `# postgresql.conf\nwal_level = replica\nmax_wal_senders = 10`,
              solutionCode: `wal_level = replica\nmax_wal_senders = 10`,
              codeLanguage: 'ini',
              quiz: quiz('Replication Quiz', [
                mcq('What file log mechanism does PostgreSQL streaming replication rely on?', 'WAL (Write-Ahead Logging)', ['JSON log', 'Access log'], 'WAL streams byte-level changes to replica nodes.'),
              ]),
            }),
            lesson('Role-Based Access Control & Row-Level Security (RLS)', 'pg-security-rls', `# Row-Level Security\n\nRestrict row visibility per user: \`CREATE POLICY user_policy ON notes FOR SELECT USING (user_id = current_user_id());\`.`, {
              starterCode: `ALTER TABLE notes ENABLE ROW LEVEL SECURITY;\nCREATE POLICY note_policy ON notes FOR ALL USING (user_id = current_setting('app.current_user_id'));`,
              solutionCode: `ALTER TABLE notes ENABLE ROW LEVEL SECURITY;\nCREATE POLICY note_policy ON notes FOR ALL USING (user_id = current_setting('app.current_user_id'));`,
              codeLanguage: 'sql',
              quiz: quiz('RLS Quiz', [
                trueFalse('Row-Level Security (RLS) policies filter table rows automatically based on the querying user.', true),
              ]),
            }),
            lesson('PostgreSQL Capstone: High-Throughput Enterprise Architecture', 'pg-capstone', `# Postgres Capstone\n\nBuild a production PostgreSQL system with JSONB, GIN indexing, CTE analytical queries, and RLS policies.`, {
              starterCode: `SELECT '=== ENTERPRISE POSTGRESQL ARCHITECTURE ONLINE ===' AS status;`,
              solutionCode: `SELECT '=== ENTERPRISE POSTGRESQL ARCHITECTURE ONLINE ===' AS status;`,
              codeLanguage: 'sql',
              quiz: quiz('PG Capstone Quiz', [
                mcq('Which open-source database is celebrated for its strict standards compliance and rich extension ecosystem?', 'PostgreSQL', ['SQLite', 'MS Access'], 'PostgreSQL is renowned for extensibility and reliability.'),
              ]),
            }),
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ MONGODB NOSQL ━━━━━━━━━━━━━━━━━━━
    {
      title: 'MongoDB NoSQL',
      slug: 'mongodb-nosql',
      description: 'Master document database modeling with MongoDB — BSON documents, CRUD, Aggregation Pipeline, indexing, and Mongoose ORM.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 15,
      resources: [
        { resourceType: 'youtube', title: 'MongoDB Complete Crash Course for Beginners', url: 'https://www.youtube.com/watch?v=c2M-rlkkT5o', author: 'FreeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'MongoDB Aggregation Pipeline Tutorial', url: 'https://www.youtube.com/watch?v=vx1C8x5q7wQ', author: 'Web Dev Simplified', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'MongoDB Schema Design & Data Modeling Patterns', url: 'https://www.youtube.com/watch?v=OA-bdC1XpSg', author: 'MongoDB Official', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Mongoose & Node.js Crash Course', url: 'https://www.youtube.com/watch?v=DZBGEexL060', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'MongoDB Atlas Cloud Database Tutorial', url: 'https://www.youtube.com/watch?v=rPqRyYJmy28', author: 'Academind', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'Official MongoDB Manual & API Specs', url: 'https://www.mongodb.com/docs/manual/', author: 'MongoDB Inc' },
        { resourceType: 'article', title: 'MongoDB University Free Online Courses', url: 'https://learn.mongodb.com/', author: 'MongoDB University' },
        { resourceType: 'cheatsheet', title: 'MongoDB Shell & Query Cheat Sheet', url: 'https://quickref.me/mongodb', author: 'QuickRef' },
        { resourceType: 'article', title: 'Mongoose ODM Documentation', url: 'https://mongoosejs.com/docs/', author: 'Automattic' },
        { resourceType: 'cheatsheet', title: 'MongoDB Operators Quick Reference Guide', url: 'https://docs.mongodb.com/manual/reference/operator/', author: 'MongoDB' },
      ],
      modules: [
        {
          title: 'Module 1: Document Modeling & CRUD Operations',
          lessons: [
            setupLesson('MongoDB NoSQL', 'mongodb-nosql', 'javascript',
              `1. Install MongoDB Community Server or MongoDB Atlas\n2. Open mongo shell: \`mongosh\`\n3. Select database: \`use myapp\``,
              `db.users.insertOne({ name: "Alice", role: "Developer" });\ndb.users.find();`,
              `db.users.insertOne({ name: "Alice", role: "Developer" });\ndb.users.find();`
            ),
            lesson('JSON & BSON Document Structure', 'mongo-documents', `# BSON Documents\n\nMongoDB stores data as BSON (Binary JSON), supporting ObjectIds, dates, and embedded subdocuments.`, {
              starterCode: `db.users.insertOne({\n  name: "Alice",\n  tags: ["dev", "node"],\n  createdAt: new Date()\n});`,
              solutionCode: `db.users.insertOne({\n  name: "Alice",\n  tags: ["dev", "node"],\n  createdAt: new Date()\n});`,
              codeLanguage: 'javascript',
              quiz: quiz('BSON Quiz', [
                mcq('What binary format does MongoDB use under the hood?', 'BSON (Binary JSON)', ['XML', 'YAML'], 'MongoDB stores documents as BSON.'),
              ]),
            }),
            lesson('Query Operators (`$gt`, `$in`, `$or`, `$elemMatch`)', 'mongo-query-operators', `# Query Operators\n\nQuery with operators: \`db.products.find({ price: { $gt: 50 }, category: { $in: ["tech", "books"] } })\`.`, {
              starterCode: `db.products.find({\n  price: { $gte: 20, $lte: 100 },\n  status: "available"\n});`,
              solutionCode: `db.products.find({\n  price: { $gte: 20, $lte: 100 },\n  status: "available"\n});`,
              codeLanguage: 'javascript',
              quiz: quiz('Mongo Query Quiz', [
                mcq('Which operator tests if a value is greater than or equal to a target?', '$gte', ['$gt', '$eq'], '`$gte` stands for Greater Than or Equal.'),
              ]),
            }),
            lesson('Update Operators (`$set`, `$push`, `$inc`)', 'mongo-update-operators', `# Update Operations\n\nUpdate fields using \`db.users.updateOne({ _id }, { $set: { name: "New" }, $inc: { views: 1 } })\`.`, {
              starterCode: `db.users.updateOne(\n  { name: "Alice" },\n  { $set: { status: "active" }, $inc: { loginCount: 1 } }\n);`,
              solutionCode: `db.users.updateOne(\n  { name: "Alice" },\n  { $set: { status: "active" }, $inc: { loginCount: 1 } }\n);`,
              codeLanguage: 'javascript',
              quiz: quiz('Mongo Update Quiz', [
                mcq('What update operator appends an item to an array field?', '$push', ['$set', '$add'], '`$push` appends elements to arrays.'),
              ]),
            }),
            lesson('Deleting Documents & Cursors (`deleteOne`, `deleteMany`)', 'mongo-delete-cursors', `# Deleting & Cursors\n\nDelete documents using \`db.collection.deleteMany({ status: "expired" })\`. Iterate cursors using \`.limit()\` & \`.sort()\`.`, {
              starterCode: `db.logs.deleteMany({ level: "debug" });\ndb.users.find().sort({ createdAt: -1 }).limit(10);`,
              solutionCode: `db.logs.deleteMany({ level: "debug" });\ndb.users.find().sort({ createdAt: -1 }).limit(10);`,
              codeLanguage: 'javascript',
              quiz: quiz('Mongo Delete Quiz', [
                trueFalse('`db.collection.deleteMany({})` with an empty filter deletes all documents in the collection.', true),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Aggregation Framework & Indexing',
          lessons: [
            lesson('Aggregation Pipeline Stages (`$match`, `$group`, `$project`)', 'mongo-aggregation', `# Aggregation Pipeline\n\nProcess documents through pipeline stages: \`db.orders.aggregate([{ $match: ... }, { $group: ... }])\`.`, {
              starterCode: `db.orders.aggregate([\n  { $match: { status: "completed" } },\n  { $group: { _id: "$userId", totalSpent: { $sum: "$amount" } } }\n]);`,
              solutionCode: `db.orders.aggregate([\n  { $match: { status: "completed" } },\n  { $group: { _id: "$userId", totalSpent: { $sum: "$amount" } } }\n]);`,
              codeLanguage: 'javascript',
              quiz: quiz('Mongo Aggregation Quiz', [
                mcq('Which pipeline stage groups documents by a specified key?', '$group', ['$match', '$project'], '`$group` groups documents by `_id`.'),
              ]),
            }),
            lesson('Unwinding Arrays & Joining Collections (`$unwind`, `$lookup`)', 'mongo-lookup-unwind', `# Lookup & Unwind\n\nFlatten array fields with \`$unwind\` and join collections using \`$lookup\` (left outer join).`, {
              starterCode: `db.orders.aggregate([\n  { $lookup: {\n      from: "users",\n      localField: "userId",\n      foreignField: "_id",\n      as: "userInfo"\n  }}\n]);`,
              solutionCode: `db.orders.aggregate([\n  { $lookup: {\n      from: "users",\n      localField: "userId",\n      foreignField: "_id",\n      as: "userInfo"\n  }}\n]);`,
              codeLanguage: 'javascript',
              quiz: quiz('Lookup Quiz', [
                mcq('What pipeline stage performs a relational left outer join between collections?', '$lookup', ['$join', '$merge'], '`$lookup` executes collection joins.'),
              ]),
            }),
            lesson('Compound & Text Indexes (`createIndex`)', 'mongo-indexes', `# Indexing\n\nCreate single-field, compound, and text indexes: \`db.users.createIndex({ email: 1 }, { unique: true })\`.`, {
              starterCode: `db.users.createIndex({ email: 1 }, { unique: true });\ndb.articles.createIndex({ title: "text", body: "text" });`,
              solutionCode: `db.users.createIndex({ email: 1 }, { unique: true });\ndb.articles.createIndex({ title: "text", body: "text" });`,
              codeLanguage: 'javascript',
              quiz: quiz('Mongo Index Quiz', [
                trueFalse('Unique indexes prevent inserting duplicate values for indexed fields.', true),
              ]),
            }),
            lesson('Schema Validation & Constraints', 'mongo-schema-validation', `# Schema Validation\n\nEnforce document shape using JSON Schema validators in collection creation options.`, {
              starterCode: `db.createCollection("contacts", {\n  validator: {\n    $jsonSchema: {\n      required: ["name", "email"],\n      properties: {\n        name: { bsonType: "string" },\n        email: { bsonType: "string" }\n      }\n    }\n  }\n});`,
              solutionCode: `db.createCollection("contacts", {\n  validator: {\n    $jsonSchema: {\n      required: ["name", "email"],\n      properties: {\n        name: { bsonType: "string" },\n        email: { bsonType: "string" }\n      }\n    }\n  }\n});`,
              codeLanguage: 'javascript',
              quiz: quiz('Schema Validation Quiz', [
                mcq('What standard does MongoDB use for defining collection document validators?', 'JSON Schema ($jsonSchema)', ['XML DTD', 'Protobuf'], 'MongoDB uses `$jsonSchema` for validation rules.'),
              ]),
            }),
            lesson('Mongoose ODM Integration with Node.js', 'mongo-mongoose-odm', `# Mongoose ODM\n\nDefine schemas and models in Node.js: \`const User = mongoose.model('User', userSchema);\`.`, {
              starterCode: `import mongoose from 'mongoose';\nconst userSchema = new mongoose.Schema({\n  username: { type: String, required: true, unique: true },\n  createdAt: { type: Date, default: Date.now }\n});\nexport const User = mongoose.model('User', userSchema);`,
              solutionCode: `import mongoose from 'mongoose';\nconst userSchema = new mongoose.Schema({\n  username: { type: String, required: true, unique: true },\n  createdAt: { type: Date, default: Date.now }\n});\nexport const User = mongoose.model('User', userSchema);`,
              codeLanguage: 'javascript',
              quiz: quiz('Mongoose Quiz', [
                mcq('What popular Node.js ODM provides object modeling for MongoDB?', 'Mongoose', ['Prisma', 'Sequelize'], 'Mongoose is the primary MongoDB ODM for Node.js.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: Replication & Sharding Architecture',
          lessons: [
            lesson('Replica Sets & Primary-Secondary High Availability', 'mongo-replica-sets', `# Replica Sets\n\nReplicate data automatically across a primary node and multiple secondary nodes for failover safety.`, {
              starterCode: `rs.initiate({\n  _id: "rs0",\n  members: [\n    { _id: 0, host: "mongodb1.example.net:27017" },\n    { _id: 1, host: "mongodb2.example.net:27017" }\n  ]\n});`,
              solutionCode: `rs.initiate({\n  _id: "rs0",\n  members: [\n    { _id: 0, host: "mongodb1.example.net:27017" },\n    { _id: 1, host: "mongodb2.example.net:27017" }\n  ]\n});`,
              codeLanguage: 'javascript',
              quiz: quiz('Replica Sets Quiz', [
                mcq('In a MongoDB Replica Set, which node accepts write operations?', 'The Primary node', ['Any Secondary node', 'The Arbiter node'], 'Only the Primary node accepts write operations.'),
              ]),
            }),
            lesson('Sharding & Horizontal Scaling', 'mongo-sharding', `# Sharding\n\nDistribute large datasets across multiple shard clusters using a Shard Key.`, {
              starterCode: `sh.enableSharding("myapp");\nsh.shardCollection("myapp.users", { country: 1, _id: 1 });`,
              solutionCode: `sh.enableSharding("myapp");\nsh.shardCollection("myapp.users", { country: 1, _id: 1 });`,
              codeLanguage: 'javascript',
              quiz: quiz('Sharding Quiz', [
                trueFalse('Sharding enables horizontal scaling by partitioning data across multiple machines.', true),
              ]),
            }),
            lesson('MongoDB Transactions (`session.withTransaction`)', 'mongo-transactions', `# Multi-Document Transactions\n\nExecute ACID transactions across multiple collections using client sessions.`, {
              starterCode: `const session = db.getMongo().startSession();\nsession.startTransaction();\ntry {\n  // Perform operations\n  session.commitTransaction();\n} catch (err) {\n  session.abortTransaction();\n}`,
              solutionCode: `const session = db.getMongo().startSession();\nsession.startTransaction();\ntry {\n  // Perform operations\n  session.commitTransaction();\n} catch (err) {\n  session.abortTransaction();\n}`,
              codeLanguage: 'javascript',
              quiz: quiz('Mongo Transactions Quiz', [
                mcq('Do MongoDB multi-document transactions require a Replica Set or Sharded Cluster?', 'Yes', ['No, works on standalone', 'No, transactions do not exist'], 'Multi-document transactions require replica sets.'),
              ]),
            }),
            lesson('Change Streams & Real-Time Event Listening', 'mongo-change-streams', `# Change Streams\n\nListen to real-time database modifications: \`const stream = collection.watch();\`.`, {
              starterCode: `const changeStream = db.collection('orders').watch();\nchangeStream.on('change', (next) => {\n  console.log('Real-time database update:', next);\n});`,
              solutionCode: `const changeStream = db.collection('orders').watch();\nchangeStream.on('change', (next) => {\n  console.log('Real-time database update:', next);\n});`,
              codeLanguage: 'javascript',
              quiz: quiz('Change Streams Quiz', [
                trueFalse('Change Streams allow applications to react to live collection mutations in real-time.', true),
              ]),
            }),
            lesson('MongoDB Capstone: Scalable Social Feed Engine', 'mongo-capstone', `# Mongo Capstone\n\nBuild a scalable social feed backend with document embedding, aggregation pipelines, and Mongoose models.`, {
              starterCode: `console.log("=== MONGODB SOCIAL FEED ENGINE ONLINE ===");`,
              solutionCode: `console.log("=== MONGODB SOCIAL FEED ENGINE ONLINE ===");`,
              codeLanguage: 'javascript',
              quiz: quiz('Mongo Capstone Quiz', [
                mcq('Why choose MongoDB for content-rich, rapidly evolving applications?', 'Flexible schema, high write throughput, and rich JSON document queries', ['Requires SQL joins for everything', 'Only runs on single CPU'], 'Flexible BSON documents adapt to evolving data structures seamlessly.'),
              ]),
            }),
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ REDIS CACHING ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Redis Caching & In-Memory Data',
      slug: 'redis-caching',
      description: 'Master high-speed in-memory data structures — Redis strings, hashes, lists, sets, pub/sub, rate limiting, and cache invalidation.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 12,
      resources: [
        { resourceType: 'youtube', title: 'Redis Crash Course for Beginners', url: 'https://www.youtube.com/watch?v=jgpVdOPTZAg', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Redis in 100 Seconds', url: 'https://www.youtube.com/watch?v=G1rOthIU-uo', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Caching Strategies with Redis & Node.js', url: 'https://www.youtube.com/watch?v=oaJq1KT022s', author: 'Hussein Nasser', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Redis Pub/Sub & Real-Time Messaging', url: 'https://www.youtube.com/watch?v=dn8T_3W4G-g', author: 'TechWorld with Nana', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Redis Rate Limiting & Leaderboards Tutorial', url: 'https://www.youtube.com/watch?v=C1V-N3gE5wM', author: 'FreeCodeCamp', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'Official Redis Documentation & Commands Reference', url: 'https://redis.io/docs/', author: 'Redis Ltd' },
        { resourceType: 'article', title: 'Redis University Free Courses & Certifications', url: 'https://university.redis.io/', author: 'Redis University' },
        { resourceType: 'cheatsheet', title: 'Redis Commands Quick Reference Cheat Sheet', url: 'https://quickref.me/redis', author: 'QuickRef' },
        { resourceType: 'article', title: 'Caching Strategies: Cache-Aside vs Write-Through', url: 'https://aws.amazon.com/caching/best-practices/', author: 'AWS Docs' },
        { resourceType: 'cheatsheet', title: 'Redis Data Types & CLI Reference Guide', url: 'https://redis.io/commands/', author: 'Redis' },
      ],
      modules: [
        {
          title: 'Module 1: Redis Key-Value & Data Structures',
          lessons: [
            setupLesson('Redis Caching', 'redis-caching', 'bash',
              `1. Install Redis Server or Docker container\n2. Run CLI: \`redis-cli\`\n3. Test connection: \`PING\` (returns \`PONG\`)`,
              `SET greeting "Hello Redis!"\nGET greeting`,
              `SET greeting "Hello Redis!"\nGET greeting`
            ),
            lesson('Strings & Expiration TTL (`SET`, `GET`, `EXPIRE`)', 'redis-strings-ttl', `# Redis Strings & TTL\n\nStore string values and set time-to-live expiration: \`SET session:123 "token" EX 3600\`.`, {
              starterCode: `SET session:user1 "abc123token" EX 300\nTTL session:user1\nGET session:user1`,
              solutionCode: `SET session:user1 "abc123token" EX 300\nTTL session:user1\nGET session:user1`,
              codeLanguage: 'bash',
              quiz: quiz('Redis TTL Quiz', [
                mcq('What command returns the remaining seconds before a key expires?', 'TTL key', ['EXPIRE key', 'GET key'], '`TTL` displays remaining time-to-live seconds.'),
              ]),
            }),
            lesson('Hashes for Object Storage (`HSET`, `HGETALL`)', 'redis-hashes', `# Redis Hashes\n\nStore field-value objects efficiently: \`HSET user:100 name "Alice" role "Admin"\`.`, {
              starterCode: `HSET user:100 name "Alice" score "95"\nHGETALL user:100`,
              solutionCode: `HSET user:100 name "Alice" score "95"\nHGETALL user:100`,
              codeLanguage: 'bash',
              quiz: quiz('Redis Hashes Quiz', [
                mcq('Which command retrieves all fields and values in a Redis Hash?', 'HGETALL', ['HGET', 'HKEYS'], '`HGETALL` fetches every field-value pair in a hash.'),
              ]),
            }),
            lesson('Lists & Queues (`LPUSH`, `RPOP`)', 'redis-lists-queues', `# Redis Lists\n\nImplement FIFO task queues and message logs using \`LPUSH\` and \`RPOP\`.`, {
              starterCode: `LPUSH tasks "job1"\nLPUSH tasks "job2"\nRPOP tasks`,
              solutionCode: `LPUSH tasks "job1"\nLPUSH tasks "job2"\nRPOP tasks`,
              codeLanguage: 'bash',
              quiz: quiz('Redis Lists Quiz', [
                trueFalse('Combining `LPUSH` and `RPOP` creates a First-In First-Out (FIFO) queue.', true),
              ]),
            }),
            lesson('Sets & Sorted Sets (`SADD`, `ZADD`)', 'redis-sets-sorted-sets', `# Sets & Sorted Sets\n\nStore unique items (\`SADD\`) and ranked leaderboards with scores (\`ZADD leaderboard 1000 "player1"\`).`, {
              starterCode: `ZADD leaderboard 500 "Alice" 750 "Bob"\nZREVRANGE leaderboard 0 -1 WITHSCORES`,
              solutionCode: `ZADD leaderboard 500 "Alice" 750 "Bob"\nZREVRANGE leaderboard 0 -1 WITHSCORES`,
              codeLanguage: 'bash',
              quiz: quiz('Sorted Sets Quiz', [
                mcq('Which Redis data structure is ideal for gaming leaderboards ranked by score?', 'Sorted Sets (ZSET)', ['Hashes', 'Strings'], 'Sorted Sets automatically order elements by score.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Caching Patterns & Real-Time Messaging',
          lessons: [
            lesson('Cache-Aside (Lazy Loading) Pattern', 'redis-cache-aside', `# Cache-Aside Pattern\n\nCheck Redis first; on cache miss, query database, store result in Redis with TTL, and return.`, {
              starterCode: `async function getUser(id) {\n  const cached = await redis.get(\`user:\${id}\`);\n  if (cached) return JSON.parse(cached);\n  const user = await db.query(id);\n  await redis.set(\`user:\${id}\`, JSON.stringify(user), 'EX', 3600);\n  return user;\n}`,
              solutionCode: `async function getUser(id) {\n  const cached = await redis.get(\`user:\${id}\`);\n  if (cached) return JSON.parse(cached);\n  const user = await db.query(id);\n  await redis.set(\`user:\${id}\`, JSON.stringify(user), 'EX', 3600);\n  return user;\n}`,
              codeLanguage: 'javascript',
              quiz: quiz('Cache-Aside Quiz', [
                mcq('What occurs during a "Cache Miss"?', 'Data is absent in cache, requiring a database query and subsequent cache set', ['Database crashes', 'Cache expires'], 'On a cache miss, data is fetched from DB and cached.'),
              ]),
            }),
            lesson('Cache Invalidation & Eviction Policies', 'redis-invalidation-eviction', `# Invalidation & Eviction\n\nManage memory limits with eviction policies: \`volatile-lru\`, \`allkeys-lru\`, \`noeviction\`.`, {
              starterCode: `# redis.conf\nmaxmemory 2gb\nmaxmemory-policy allkeys-lru`,
              solutionCode: `maxmemory 2gb\nmaxmemory-policy allkeys-lru`,
              codeLanguage: 'conf',
              quiz: quiz('Eviction Quiz', [
                mcq('What does the LRU eviction policy stand for?', 'Least Recently Used', ['Last Recorded Unit', 'List Random User'], 'LRU evicts the least recently accessed keys.'),
              ]),
            }),
            lesson('Publish / Subscribe (`PUBLISH`, `SUBSCRIBE`)', 'redis-pub-sub', `# Pub/Sub Messaging\n\nBroadcast messages to multiple subscribers using \`PUBLISH channel "message"\`.`, {
              starterCode: `// Subscriber: SUBSCRIBE news_channel\n// Publisher: PUBLISH news_channel "Breaking News!"`,
              solutionCode: `PUBLISH news_channel "Breaking News!"`,
              codeLanguage: 'bash',
              quiz: quiz('PubSub Quiz', [
                trueFalse('Redis Pub/Sub messages are fire-and-forget (not persisted on disk).', true),
              ]),
            }),
            lesson('Rate Limiting with Sliding Windows', 'redis-rate-limiting', `# Rate Limiting\n\nProtect APIs against spam using Redis atomic counters (\`INCR\`) or sorted set sliding windows.`, {
              starterCode: `const count = await redis.incr(\`rate:\${userIp}\`);\nif (count === 1) await redis.expire(\`rate:\${userIp}\`, 60);\nif (count > 100) throw new Error("Rate limit exceeded");`,
              solutionCode: `const count = await redis.incr(\`rate:\${userIp}\`);\nif (count === 1) await redis.expire(\`rate:\${userIp}\`, 60);\nif (count > 100) throw new Error("Rate limit exceeded");`,
              codeLanguage: 'javascript',
              quiz: quiz('Rate Limiting Quiz', [
                mcq('Which atomic operation increments a numeric string key by 1?', 'INCR', ['ADD', 'PLUS'], '`INCR` atomically increments a key\'s integer value.'),
              ]),
            }),
            lesson('Distributed Locks with Redlock Algorithm', 'redis-distributed-locks', `# Distributed Locking\n\nPrevent race conditions across microservices using atomic locks: \`SET lock_key token NX PX 10000\`.`, {
              starterCode: `SET lock:order_100 "unique_token" NX PX 5000`,
              solutionCode: `SET lock:order_100 "unique_token" NX PX 5000`,
              codeLanguage: 'bash',
              quiz: quiz('Locks Quiz', [
                mcq('What parameter in `SET` ensures a key is set ONLY if it does not already exist?', 'NX', ['XX', 'EX'], '`NX` means "Set if Not eXists".'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: Persistence & Enterprise Redis',
          lessons: [
            lesson('Redis Persistence Options (RDB Snapshots vs AOF Logs)', 'redis-persistence-rdb-aof', `# Persistence\n\nRDB creates periodic point-in-time snapshots; AOF logs every write command sequentially.`, {
              starterCode: `# redis.conf\nsave 900 1\nappendonly yes\nappendfsync everysec`,
              solutionCode: `save 900 1\nappendonly yes\nappendfsync everysec`,
              codeLanguage: 'conf',
              quiz: quiz('Persistence Quiz', [
                mcq('Which persistence mechanism logs every write command to disk for durability?', 'AOF (Append-Only File)', ['RDB', 'RAM'], 'AOF appends every command to an execution log file.'),
              ]),
            }),
            lesson('Redis Sentinel for High Availability Failover', 'redis-sentinel', `# Redis Sentinel\n\nMonitor primary Redis nodes and automatically promote secondary replicas on primary node failure.`, {
              starterCode: `# sentinel.conf\nsentinel monitor mymaster 127.0.0.1 6379 2`,
              solutionCode: `sentinel monitor mymaster 127.0.0.1 6379 2`,
              codeLanguage: 'conf',
              quiz: quiz('Sentinel Quiz', [
                trueFalse('Redis Sentinel automatically initiates failover and promotes replicas when primary crashes.', true),
              ]),
            }),
            lesson('Redis Cluster & Multi-Master Sharding', 'redis-cluster', `# Redis Cluster\n\nDistribute keys across 16,384 hash slots split over multiple master nodes.`, {
              starterCode: `redis-cli --cluster create 127.0.0.1:7000 127.0.0.1:7001 127.0.0.1:7002 --cluster-replicas 1`,
              solutionCode: `redis-cli --cluster create 127.0.0.1:7000 127.0.0.1:7001 127.0.0.1:7002 --cluster-replicas 1`,
              codeLanguage: 'bash',
              quiz: quiz('Redis Cluster Quiz', [
                mcq('How many fixed hash slots are used in a Redis Cluster?', '16,384', ['1,024', '65,536'], 'Redis Cluster partitions keys across 16,384 hash slots.'),
              ]),
            }),
            lesson('Lua Scripting for Atomic Execution (`EVAL`)', 'redis-lua-scripting', `# Lua Scripts\n\nExecute complex atomic operations on the server side using \`EVAL "script" numkeys key1...\`.`, {
              starterCode: `EVAL "if redis.call('get', KEYS[1]) == ARGV[1] then return redis.call('del', KEYS[1]) else return 0 end" 1 lock:order_100 "token"`,
              solutionCode: `EVAL "if redis.call('get', KEYS[1]) == ARGV[1] then return redis.call('del', KEYS[1]) else return 0 end" 1 lock:order_100 "token"`,
              codeLanguage: 'bash',
              quiz: quiz('Lua Scripting Quiz', [
                trueFalse('Lua scripts run atomically on the single-threaded Redis engine without interruption.', true),
              ]),
            }),
            lesson('Redis Capstone: Sub-Millisecond High-Speed API Cache', 'redis-capstone', `# Redis Capstone\n\nBuild a sub-millisecond caching layer with LRU eviction, session storage, and rate limiting.`, {
              starterCode: `console.log("=== SUB-MILLISECOND REDIS CACHING LAYER ONLINE ===");`,
              solutionCode: `console.log("=== SUB-MILLISECOND REDIS CACHING LAYER ONLINE ===");`,
              codeLanguage: 'javascript',
              quiz: quiz('Redis Capstone Quiz', [
                mcq('Why is Redis capable of delivering sub-millisecond query latency?', 'In-memory RAM storage with non-blocking single-threaded event loop', ['Disk mechanical arrays', 'SQL table locks'], 'Storing all data in RAM yields sub-millisecond speeds.'),
              ]),
            }),
          ]
        }
      ]
    }
  ]
};
