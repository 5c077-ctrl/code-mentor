import type { CategoryDef } from '../types';
import { mcq, trueFalse, quiz, lesson, setupLesson } from '../helpers';

export const databasesCategory: CategoryDef = {
  name: 'Databases',
  slug: 'databases',
  description: 'Master relational SQL and NoSQL databases: MongoDB (39 Lectures), PostgreSQL, MySQL, Redis, SQLite, and Firebase.',
  icon: '🗄️',
  color: '#06b6d4',
  sortOrder: 7,
  courses: [
    // ━━━━━━━━━━━━━━━━━━━ MONGODB (39 LECTURES) ━━━━━━━━━━━━━━━━━━━
    {
      title: 'MongoDB',
      slug: 'mongodb',
      description: 'Complete 39-lecture mastery course in MongoDB NoSQL database, BSON documents, Aggregation Pipeline, Indexing, and Sharding.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 35,
      resources: [
        { resourceType: 'youtube', title: 'MongoDB Complete Course for Beginners', url: 'https://www.youtube.com/watch?v=c2M-rlkkT5o', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'MongoDB Crash Course', url: 'https://www.youtube.com/watch?v=ofme2o29NGU', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'MongoDB Aggregation Pipeline Tutorial', url: 'https://www.youtube.com/watch?v=vx1C8EyfZx4', author: 'Web Dev Simplified', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'MongoDB in 100 Seconds', url: 'https://www.youtube.com/watch?v=-56x56UppqQ', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'MongoDB Indexing & Performance Optimization', url: 'https://www.youtube.com/watch?v=c3wV0b-qGq8', author: 'Programming with Mosh', platform: 'YouTube' },
        { resourceType: 'article', title: 'MongoDB Official Manual & Documentation', url: 'https://www.mongodb.com/docs/manual/', author: 'MongoDB Inc.' },
        { resourceType: 'article', title: 'MongoDB University Free Courses', url: 'https://learn.mongodb.com/', author: 'MongoDB University' },
        { resourceType: 'ebook', title: 'MongoDB: The Definitive Guide eBook Notes', url: 'https://www.oreilly.com/library/view/mongodb-the-definitive/9781491954232/', author: 'Shannon Bradshaw & Eoin Brazil' },
        { resourceType: 'cheatsheet', title: 'MongoDB Query & Aggregation Cheat Sheet', url: 'https://quickref.me/mongodb', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks MongoDB Tutorials', url: 'https://www.geeksforgeeks.org/mongodb-tutorial/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: Fundamentals & CRUD Operations',
          lessons: [
            setupLesson('MongoDB', 'mongodb', 'javascript',
              'Install MongoDB Community Server or MongoDB Atlas account.',
              'console.log("MongoDB Connection Initialized");',
              'console.log("MongoDB Connection Initialized")'
            ),
            lesson('01 Introduction to NoSQL & BSON Documents', 'mongo-01-intro-bson', '# NoSQL & BSON\n\nUnderstand flexible schema-less JSON/BSON document storage in MongoDB collections.', { quiz: quiz('Mongo 01 Quiz', [mcq('What binary format does MongoDB use internally to store documents?', 'BSON', ['JSON', 'XML'])]) }),
            lesson('02 Installing MongoDB & mongosh CLI', 'mongo-02-install-mongosh', '# MongoDB Installation\n\nConnect to local or remote database instances using the `mongosh` interactive shell.', { quiz: quiz('Mongo 02 Quiz', [mcq('What command launches the modern MongoDB shell?', 'mongosh', ['mongo-cli', 'db-shell'])]) }),
            lesson('03 Databases, Collections, & Documents', 'mongo-03-databases-collections', '# Databases & Collections\n\nOrganize data hierarchically: Databases contain Collections, which contain BSON Documents.', { quiz: quiz('Mongo 03 Quiz', [trueFalse('MongoDB collections enforce fixed rigid column schemas by default.', false)]) }),
            lesson('04 Inserting Documents (`insertOne`, `insertMany`)', 'mongo-04-insert-documents', '# Inserting Documents\n\nAdd single or array batches of documents into a collection.', { quiz: quiz('Mongo 04 Quiz', [mcq('Which method inserts multiple documents in one command?', 'db.collection.insertMany()', ['insertAll()', 'bulkAdd()'])]) }),
            lesson('05 Querying Documents (`find`, `findOne`)', 'mongo-05-querying-find', '# Querying Documents\n\nRetrieve documents matching field filter criteria using `find(query, projection)`.', { quiz: quiz('Mongo 05 Quiz', [mcq('What does `db.col.find()` return?', 'A Query Cursor', ['An Array of all results immediately', 'A Boolean'])]) }),
            lesson('06 Query Operators (`$eq`, `$gt`, `$lt`, `$in`)', 'mongo-06-query-operators', '# Query Operators\n\nFilter numeric and text comparison fields with `$gt`, `$gte`, `$lt`, `$lte`, `$in`, and `$ne`.', { quiz: quiz('Mongo 06 Quiz', [mcq('Which operator selects values greater than a threshold?', '$gt', ['$greater', '$top'])]) }),
            lesson('07 Logical Operators (`$and`, `$or`, `$not`, `$nor`)', 'mongo-07-logical-operators', '# Logical Operators\n\nCombine multiple query expressions using logical operators `$and` and `$or`.', { quiz: quiz('Mongo 07 Quiz', [trueFalse('$or matches documents satisfying at least one expression in the array.', true)]) }),
            lesson('08 Element Operators (`$exists`, `$type`)', 'mongo-08-element-operators', '# Element Operators\n\nQuery documents based on field existence (`$exists: true`) or BSON data type (`$type`).', { quiz: quiz('Mongo 08 Quiz', [mcq('Which operator checks if a field exists in a document?', '$exists', ['$has', '$present'])]) }),
            lesson('09 Updating Documents (`updateOne`, `updateMany`)', 'mongo-09-updating-documents', '# Updating Documents\n\nModify documents safely using update operators `$set`, `$unset`, `$inc`, and `$push`.', { quiz: quiz('Mongo 09 Quiz', [mcq('Which update operator modifies field values without replacing the entire document?', '$set', ['$replace', '$put'])]) }),
            lesson('10 Array Update Operators (`$push`, `$pull`, `$addToSet`)', 'mongo-10-array-update-operators', '# Array Update Operators\n\nAppend (`$push`), remove (`$pull`), or add unique elements (`$addToSet`) to array fields.', { quiz: quiz('Mongo 10 Quiz', [mcq('Which operator appends unique values to an array without duplicates?', '$addToSet', ['$pushUnique', '$addOnly'])]) }),
            lesson('11 Deleting Documents (`deleteOne`, `deleteMany`)', 'mongo-11-deleting-documents', '# Deleting Documents\n\nRemove matching documents from a collection or drop an entire collection with `drop()`.', { quiz: quiz('Mongo 11 Quiz', [mcq('How do you delete all documents in a collection while keeping indexes?', 'db.col.deleteMany({})', ['db.col.drop()', 'db.col.clear()'])]) }),
            lesson('12 Cursor Methods (`limit`, `skip`, `sort`)', 'mongo-12-cursor-methods', '# Cursor Methods & Pagination\n\nSort results (`sort({ age: -1 })`), limit batch size (`limit(10)`), and skip offset for pagination (`skip(20)`).', { quiz: quiz('Mongo 12 Quiz', [mcq('What sort value orders fields in descending order?', '-1', ['1', '0'])]) })
          ]
        },
        {
          title: 'Section 2: Aggregation Pipeline & Data Modeling',
          lessons: [
            lesson('13 Intro to Aggregation Pipeline', 'mongo-13-aggregation-pipeline-intro', '# Aggregation Pipeline\n\nProcess documents through multi-stage data transformation pipelines `db.col.aggregate([stage1, stage2])`.', { quiz: quiz('Mongo 13 Quiz', [mcq('What argument format does aggregate() accept?', 'An array of pipeline stages', ['A single callback', 'A SQL string'])]) }),
            lesson('14 `$match` & `$project` Stages', 'mongo-14-stage-match-project', '# $match and $project\n\nFilter input documents (`$match`) and reshape output fields or computed values (`$project`).', { quiz: quiz('Mongo 14 Quiz', [mcq('Which stage filters documents early in the aggregation pipeline?', '$match', ['$filter', '$where'])]) }),
            lesson('15 `$group` Stage & Accumulators', 'mongo-15-stage-group-accumulators', '# $group Stage\n\nGroup documents by key (`_id`) and calculate aggregate values with `$sum`, `$avg`, `$min`, `$max`.', { quiz: quiz('Mongo 15 Quiz', [mcq('Which accumulator counts matching documents in $group?', '{"$sum": 1}', ['{"$count": true}', '{"$add": 1}'])]) }),
            lesson('16 `$sort`, `$limit`, & `$skip` Stages', 'mongo-16-stage-sort-limit-skip', '# $sort, $limit, $skip Stages\n\nOrder and paginate pipeline output streams cleanly.', { quiz: quiz('Mongo 16 Quiz', [trueFalse('$sort stage should precede $limit stage when ranking top records.', true)]) }),
            lesson('17 `$unwind` Array Stage', 'mongo-17-stage-unwind', '# $unwind Stage\n\nDeconstruct an array field from input documents to output a document for each array element.', { quiz: quiz('Mongo 17 Quiz', [mcq('What does $unwind do to array fields?', 'Outputs one document per array element', ['Flattens 2D arrays', 'Removes nulls'])]) }),
            lesson('18 `$lookup` Relational Joins', 'mongo-18-stage-lookup-joins', '# $lookup Stage\n\nPerform left outer joins between collections using `localField` and `foreignField`.', { quiz: quiz('Mongo 18 Quiz', [mcq('What type of join does $lookup perform?', 'Left Outer Join', ['Inner Join', 'Full Cross Join'])]) }),
            lesson('19 `$facet` Multi-Pipeline Aggregations', 'mongo-19-stage-facet', '# $facet Stage\n\nProcess multiple aggregation pipelines in parallel within a single stage on the same input.', { quiz: quiz('Mongo 19 Quiz', [trueFalse('$facet enables running multiple aggregations simultaneously.', true)]) }),
            lesson('20 Data Modeling: Embedding vs Referencing', 'mongo-20-data-modeling-embedding', '# Data Modeling Strategies\n\nChoose between 1-to-1/1-to-N embedded documents vs normalized document references (`ObjectId`).', { quiz: quiz('Mongo 20 Quiz', [mcq('When should you embed child documents?', 'When data is queried together and stays bounded in size', ['When data grows endlessly', 'Always'])]) }),
            lesson('21 One-to-Many & Many-to-Many Relationships', 'mongo-21-relationships-patterns', '# Document Relationships\n\nDesign pattern models for tree structures, category hierarchies, and many-to-many references.', { quiz: quiz('Mongo 21 Quiz', [trueFalse('Tree structures can be modeled using parent reference arrays in MongoDB.', true)]) }),
            lesson('22 Schema Validation & JSON Schema Rules', 'mongo-22-schema-validation', '# Schema Validation\n\nEnforce document field structures using `$jsonSchema` validation rules at collection creation.', { quiz: quiz('Mongo 22 Quiz', [mcq('What validator checks document rules on insert?', '$jsonSchema', ['$validator', '$typeCheck'])]) }),
            lesson('23 MongoDB Transactions & ACID Multi-Document Sessions', 'mongo-23-acid-transactions', '# Multi-Document Transactions\n\nExecute ACID atomic transactions across multiple documents and collections using Client Sessions.', { quiz: quiz('Mongo 23 Quiz', [trueFalse('MongoDB supports multi-document ACID transactions.', true)]) }),
            lesson('24 Time Series Collections', 'mongo-24-time-series-collections', '# Time Series Collections\n\nOptimize measurement, IoT, and financial event sequences using dedicated time series collections.', { quiz: quiz('Mongo 24 Quiz', [mcq('What field is required when defining a time series collection?', 'timeField', ['counter', 'timestampId'])]) }),
            lesson('25 Geospatial Queries (`2dsphere` & `$near`)', 'mongo-25-geospatial-queries', '# Geospatial Indexing & Queries\n\nQuery GeoJSON point and polygon locations with `2dsphere` indexes and `$near` / `$geoWithin`.', { quiz: quiz('Mongo 25 Quiz', [mcq('Which index type supports spherical Earth calculations?', '2dsphere', ['2d', 'geoFlat'])]) })
          ]
        },
        {
          title: 'Section 3: Indexes, Performance, & Administration',
          lessons: [
            lesson('26 Index Types: Single Field, Compound, & Multikey', 'mongo-26-index-types', '# MongoDB Index Types\n\nSpeed up lookups using single field, compound (`{ a: 1, b: -1 }`), and array multikey indexes.', { quiz: quiz('Mongo 26 Quiz', [mcq('What index type is automatically created for arrays?', 'Multikey index', ['Compound index', 'Text index'])]) }),
            lesson('27 Index Properties: Unique, Partial, & TTL', 'mongo-27-index-properties', '# Index Properties\n\nEnforce unique constraints, index matching subsets (`partialFilterExpression`), or auto-expire documents (`expireAfterSeconds`).', { quiz: quiz('Mongo 27 Quiz', [mcq('Which index property automatically deletes documents after a elapsed time?', 'TTL (Time-To-Live)', ['Partial', 'Unique'])]) }),
            lesson('28 Query Optimization & `explain()` Execution Plans', 'mongo-28-explain-query-optimization', '# Query Optimization\n\nAnalyze query execution statistics (`executionStats`) and index usage using `explain()`.', { quiz: quiz('Mongo 28 Quiz', [mcq('What stage indicates a full collection scan without indexes in explain()?', 'COLLSCAN', ['IXSCAN', 'FETCH'])]) }),
            lesson('29 Atlas Search & Full-Text Search', 'mongo-29-atlas-full-text-search', '# Full-Text & Atlas Search\n\nImplement relevance scoring, fuzzy matching, and autocomplete search using Lucene-powered indexes.', { quiz: quiz('Mongo 29 Quiz', [trueFalse('Atlas Search provides full-text Lucene search directly on MongoDB collections.', true)]) }),
            lesson('30 Replication & Replica Sets Architecture', 'mongo-30-replica-sets-high-availability', '# Replica Sets & High Availability\n\nEnsure 99.999% uptime with Primary-Secondary replica set automatic failover and election protocols.', { quiz: quiz('Mongo 30 Quiz', [mcq('Which node in a Replica Set accepts write operations?', 'Primary node', ['Secondary node', 'Arbiter'])]) }),
            lesson('31 Sharding Architecture & Cluster Scaling', 'mongo-31-sharding-horizontal-scaling', '# Sharding & Horizontal Scaling\n\nDistribute large datasets across multiple shard servers using a shard key routing architecture.', { quiz: quiz('Mongo 31 Quiz', [mcq('Which component routes client queries in a sharded cluster?', 'mongos router', ['shard node', 'config server'])]) }),
            lesson('32 MongoDB Security: Auth, RBAC, & Encryption', 'mongo-32-security-rbac-encryption', '# Security & Access Control\n\nEnable SCRAM authentication, Role-Based Access Control (RBAC), TLS/SSL, and Encryption at Rest.', { quiz: quiz('Mongo 32 Quiz', [trueFalse('RBAC grants granular permissions via assigned user roles.', true)]) }),
            lesson('33 Backup, Restore, & Disaster Recovery (`mongodump` / `mongorestore`)', 'mongo-33-backup-restore-tools', '# Backup & Recovery\n\nPerform binary database backups using `mongodump` and restore with `mongorestore`.', { quiz: quiz('Mongo 33 Quiz', [mcq('Which utility creates binary BSON backups of a MongoDB database?', 'mongodump', ['mongoexport', 'mongocopy'])]) }),
            lesson('34 Mongoose ODM for Node.js', 'mongo-34-mongoose-odm-nodejs', '# Mongoose ODM\n\nDefine schemas, models, middleware hooks, and population references in Node.js applications.', { quiz: quiz('Mongo 34 Quiz', [mcq('What method replaces referenced ObjectIds with actual documents in Mongoose?', 'populate()', ['join()', 'embed()'])]) }),
            lesson('35 PyMongo & Motor for Async Python', 'mongo-35-pymongo-motor-python', '# Python MongoDB Integration\n\nConnect Python applications synchronously (`pymongo`) or asynchronously (`motor` / `asyncio`).', { quiz: quiz('Mongo 35 Quiz', [trueFalse('Motor provides an async driver for Tornado and asyncio Python apps.', true)]) }),
            lesson('36 Change Streams & Real-Time Event Listening', 'mongo-36-change-streams-realtime', '# Change Streams\n\nListen to real-time data mutations (insert, update, delete) on collections via Change Streams.', { quiz: quiz('Mongo 36 Quiz', [mcq('What MongoDB feature streams live database changes to applications?', 'Change Streams', ['OpLog Tailer', 'Event Grid'])]) }),
            lesson('37 In-Memory Caching & Performance Tuning', 'mongo-37-inmemory-caching-tuning', '# Performance Tuning & WiredTiger\n\nConfigure WiredTiger storage engine cache, dirty page thresholds, and ticket concurrency settings.', { quiz: quiz('Mongo 37 Quiz', [mcq('What is the default pluggable storage engine in modern MongoDB?', 'WiredTiger', ['MMAPv1', 'RocksDB'])]) }),
            lesson('38 Building a Production REST API with MongoDB', 'mongo-38-building-rest-api-project', '# Production Project: REST API\n\nConstruct a resilient Express/Node.js microservice connected to MongoDB Atlas with pagination and filtering.', { quiz: quiz('Mongo 38 Quiz', [trueFalse('Using environment variables for MongoDB connection strings prevents credential leaks.', true)]) }),
            lesson('39 Capstone: Full-Stack App & MongoDB Master Certificate', 'mongo-39-capstone-certificate', '# Capstone Project & Certificate\n\nDesign a complete MongoDB architecture, implement custom aggregation pipelines, build indexes, and pass final evaluation.', { quiz: quiz('Mongo 39 Quiz', [mcq('What final step completes the 39-lecture MongoDB mastery course?', 'Pass the capstone evaluation quiz', ['Drop the database', 'Uninstall mongosh'])]) })
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ POSTGRESQL ━━━━━━━━━━━━━━━━━━━
    {
      title: 'PostgreSQL',
      slug: 'postgresql',
      description: 'Master enterprise relational SQL database, JSONB, CTEs, Window Functions, Indexing, and Extensions (pgvector, PostGIS).',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 25,
      resources: [
        { resourceType: 'youtube', title: 'PostgreSQL Course for Beginners', url: 'https://www.youtube.com/watch?v=qw--VYLpxG4', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'PostgreSQL Tutorial', url: 'https://www.youtube.com/watch?v=znMGW0LnduU', author: 'Programming with Mosh', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'PostgreSQL Window Functions Deep Dive', url: 'https://www.youtube.com/watch?v=Ww71knvhQ-s', author: 'Hussein Nasser', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'PostgreSQL Indexing & B-Trees Explained', url: 'https://www.youtube.com/watch?v=clrtT_4WBAw', author: 'Hussein Nasser', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'PostgreSQL in 100 Seconds', url: 'https://www.youtube.com/watch?v=n2Fluyr3lbc', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'article', title: 'PostgreSQL Official Documentation', url: 'https://www.postgresql.org/docs/', author: 'PostgreSQL Global Development Group' },
        { resourceType: 'article', title: 'PostgreSQL Tutorial Interactive Reference', url: 'https://www.postgresqltutorial.com/', author: 'PostgreSQL Tutorial' },
        { resourceType: 'ebook', title: 'The Art of PostgreSQL Notes', url: 'https://theartofpostgresql.com/', author: 'Dimitri Fontaine' },
        { resourceType: 'cheatsheet', title: 'PostgreSQL Commands & SQL Cheat Sheet', url: 'https://quickref.me/postgres', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks PostgreSQL Guide', url: 'https://www.geeksforgeeks.org/postgresql-tutorial/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: PostgreSQL Relational Core',
          lessons: [
            setupLesson('PostgreSQL', 'postgresql', 'sql',
              'Install PostgreSQL 16+ and connect via `psql -U postgres`.',
              'SELECT version();',
              'SELECT version();'
            ),
            lesson('SQL Queries, Joins, & Window Functions', 'postgres-sql-joins-window', '# Relational SQL & Window Functions\n\nMaster `INNER JOIN`, `LEFT JOIN`, CTEs (`WITH ...`), and Window Functions (`ROW_NUMBER() OVER (...)`).', { quiz: quiz('Postgres Quiz', [mcq('Which window function ranks rows without gaps?', 'DENSE_RANK()', ['RANK()', 'ROW_NUMBER()'])]) })
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ MYSQL ━━━━━━━━━━━━━━━━━━━
    {
      title: 'MySQL',
      slug: 'mysql',
      description: 'Learn MySQL 8.0 server administration, InnoDB engine, indexes, stored procedures, and triggers.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'youtube', title: 'MySQL Course for Beginners', url: 'https://www.youtube.com/watch?v=7S_tz1z_5bA', author: 'Programming with Mosh', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'MySQL Full Database Tutorial', url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'MySQL Database Administration Crash Course', url: 'https://www.youtube.com/watch?v=9ylj9NR0Lcg', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'MySQL Workbench & Joins Explained', url: 'https://www.youtube.com/watch?v=0bT496d0g_g', author: 'Caleb Curry', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'MySQL In 100 Seconds', url: 'https://www.youtube.com/watch?v=Cz3WcZLRaWc', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'article', title: 'MySQL 8.0 Official Reference Manual', url: 'https://dev.mysql.com/doc/refman/8.0/en/', author: 'Oracle MySQL' },
        { resourceType: 'article', title: 'MySQL Tutorial Interactive Guide', url: 'https://www.mysqltutorial.org/', author: 'MySQL Tutorial' },
        { resourceType: 'ebook', title: 'High Performance MySQL Notes', url: 'https://www.oreilly.com/library/view/high-performance-mysql/9781492080503/', author: 'Silvia Botros & Jeremy Tinley' },
        { resourceType: 'cheatsheet', title: 'MySQL SQL Syntax Cheat Sheet', url: 'https://quickref.me/mysql', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks MySQL Tutorials', url: 'https://www.geeksforgeeks.org/mysql-tutorial/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: MySQL Fundamentals',
          lessons: [
            setupLesson('MySQL', 'mysql', 'sql',
              'Install MySQL Server and Workbench.',
              'SELECT VERSION();',
              'SELECT VERSION();'
            ),
            lesson('Tables, Constraints, & Transactions', 'mysql-tables-transactions', '# MySQL Tables & InnoDB\n\nDefine primary keys, foreign keys, unique constraints, and transaction isolation levels.', { quiz: quiz('MySQL Quiz', [mcq('What default storage engine powers MySQL 8.0?', 'InnoDB', ['MyISAM', 'Memory'])]) })
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ REDIS ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Redis',
      slug: 'redis',
      description: 'Master in-memory key-value data store, caching strategies, Pub/Sub, Redis Streams, and Data Structures.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 15,
      resources: [
        { resourceType: 'youtube', title: 'Redis Course for Beginners', url: 'https://www.youtube.com/watch?v=XCsS_NVAa1g', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Redis Crash Course', url: 'https://www.youtube.com/watch?v=jgpVdJB2sKQ', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Redis in 100 Seconds', url: 'https://www.youtube.com/watch?v=G1rOthIU-uo', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Redis Pub/Sub & Caching Strategies', url: 'https://www.youtube.com/watch?v=a3Gbe07K22w', author: 'Hussein Nasser', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Redis Streams & Queue Processing', url: 'https://www.youtube.com/watch?v=Kz6lXe_5qY4', author: 'Redis University', platform: 'YouTube' },
        { resourceType: 'article', title: 'Redis Official Documentation & Commands', url: 'https://redis.io/docs/', author: 'Redis Ltd.' },
        { resourceType: 'article', title: 'Redis University Free Interactive Courses', url: 'https://university.redis.io/', author: 'Redis University' },
        { resourceType: 'ebook', title: 'Redis in Action eBook Notes', url: 'https://www.manning.com/books/redis-in-action', author: 'Josiah L. Carlson' },
        { resourceType: 'cheatsheet', title: 'Redis CLI Commands Cheat Sheet', url: 'https://quickref.me/redis', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks Redis Guide', url: 'https://www.geeksforgeeks.org/redis-data-structures/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: Redis In-Memory Store',
          lessons: [
            setupLesson('Redis', 'redis', 'shell',
              'Install Redis Server and test with `redis-cli ping`.',
              'redis-cli PING',
              'redis-cli PING'
            ),
            lesson('Redis Data Structures & Expiration', 'redis-structures-expiration', '# Redis Data Structures\n\nStore Strings, Hashes, Lists, Sets, and Sorted Sets (`ZADD`) with TTL expiration times.', { quiz: quiz('Redis Quiz', [mcq('What response does Redis CLI return to PING?', 'PONG', ['OK', '1'])]) })
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ SQLITE ━━━━━━━━━━━━━━━━━━━
    {
      title: 'SQLite',
      slug: 'sqlite',
      description: 'Learn zero-configuration embedded SQL database engine for mobile apps, embedded devices, and desktop applications.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 12,
      resources: [
        { resourceType: 'youtube', title: 'SQLite Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=byHcYRpMgI4', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'SQLite Crash Course', url: 'https://www.youtube.com/watch?v=pd-0G0BUBaU', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'SQLite in 100 Seconds', url: 'https://www.youtube.com/watch?v=cz3WcZLRaWc', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Python & SQLite Integration Tutorial', url: 'https://www.youtube.com/watch?v=pd-0G0BUBaU', author: 'Corey Schafer', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Android & iOS SQLite Database Tutorial', url: 'https://www.youtube.com/watch?v=312L_320000', author: 'Derek Banas', platform: 'YouTube' },
        { resourceType: 'article', title: 'SQLite Official Documentation & Manual', url: 'https://www.sqlite.org/docs.html', author: 'SQLite Consortium' },
        { resourceType: 'article', title: 'SQLite Tutorial Interactive Guide', url: 'https://www.sqlitetutorial.net/', author: 'SQLite Tutorial' },
        { resourceType: 'ebook', title: 'Using SQLite eBook Notes', url: 'https://www.oreilly.com/library/view/using-sqlite/9781449394592/', author: 'Jay A. Kreibich' },
        { resourceType: 'cheatsheet', title: 'SQLite Syntax & CLI Cheat Sheet', url: 'https://quickref.me/sqlite', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks SQLite Tutorials', url: 'https://www.geeksforgeeks.org/sqlite-tutorial/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: Embedded SQLite',
          lessons: [
            setupLesson('SQLite', 'sqlite', 'sql',
              'Open terminal and type `sqlite3 test.db`.',
              'SELECT sqlite_version();',
              'SELECT sqlite_version();'
            ),
            lesson('SQLite Database Engine & Local Storage', 'sqlite-embedded-engine', '# Embedded SQLite Engine\n\nSQLite stores the entire database in a single cross-platform disk file with zero server setup.', { quiz: quiz('SQLite Quiz', [trueFalse('SQLite requires installing a background daemon server process.', false)]) })
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ FIREBASE & FIRESTORE ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Firebase & Firestore',
      slug: 'firebase-firestore',
      description: 'Master Firebase Cloud Firestore NoSQL document database, Realtime Database, Authentication, and Cloud Functions.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 18,
      resources: [
        { resourceType: 'youtube', title: 'Firebase Course for Beginners', url: 'https://www.youtube.com/watch?v=fgdpvwEWJ9M', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Firebase in 100 Seconds', url: 'https://www.youtube.com/watch?v=vAoB4VbhRzM', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Firestore Data Modeling & Security Rules', url: 'https://www.youtube.com/watch?v=lW7DW8MeGfI', author: 'Firebase', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'React & Firebase Authentication Tutorial', url: 'https://www.youtube.com/watch?v=PKwu15ldZ7k', author: 'Web Dev Simplified', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Firebase Cloud Functions Tutorial', url: 'https://www.youtube.com/watch?v=74X2tJz2N1c', author: 'The Net Ninja', platform: 'YouTube' },
        { resourceType: 'article', title: 'Firebase Official Documentation', url: 'https://firebase.google.com/docs', author: 'Google Firebase' },
        { resourceType: 'article', title: 'Cloud Firestore Security Rules Documentation', url: 'https://firebase.google.com/docs/firestore/security/get-started', author: 'Google Docs' },
        { resourceType: 'ebook', title: 'Firebase Web App Architecture Notes', url: 'https://firebase.google.com/resources', author: 'Google' },
        { resourceType: 'cheatsheet', title: 'Firestore Queries & Security Rules Cheat Sheet', url: 'https://quickref.me/firebase', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks Firebase Tutorials', url: 'https://www.geeksforgeeks.org/firebase-introduction/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: Firebase Serverless Platform',
          lessons: [
            setupLesson('Firebase & Firestore', 'firebase-firestore', 'javascript',
              'Install Firebase CLI (`npm install -g firebase-tools`).',
              'console.log("Firebase SDK Initialized");',
              'console.log("Firebase SDK Initialized");'
            ),
            lesson('Firestore Real-Time Sync & Security Rules', 'firestore-realtime-security', '# Firestore Real-time Sync\n\nSubscribe to real-time database updates with `onSnapshot()` and secure access using Firestore Security Rules.', { quiz: quiz('Firebase Quiz', [mcq('Which SDK method listens live to document changes in Firestore?', 'onSnapshot()', ['get()', 'subscribe()'])]) })
          ]
        }
      ]
    }
  ]
};
