import type { Module } from '../types';

export const techCurriculum: Module[] = [
  // ─── ENGINEERING / TECH TRACK ────────────────────────────────────────
  {
    id: 'tech-swe-fundamentals',
    title: 'Software Engineering Fundamentals',
    description: 'Master data structures, algorithms, and the building blocks of computer science that every engineer at Google, Meta, Amazon, and top startups is tested on in technical interviews.',
    track: 'finance' as const,
    level: 'beginner' as const,
    estimatedHours: 20,
    icon: 'code',
    color: '#2563EB',
    topics: [
      {
        id: 'swe-ds-1',
        title: 'Core Data Structures: Arrays, Hash Maps, Trees, and Graphs',
        content: `Data structures are the containers that organize information in memory. Choosing the wrong data structure is the most common reason engineering candidates fail technical interviews at Google, Meta, and Amazon — and the most common reason software performs poorly in production. A Google engineer solving a search ranking problem needs to know instantly which data structure gives O(1) lookup versus O(log n) versus O(n).

**Arrays and Dynamic Arrays (Lists)**

An array is a contiguous block of memory storing elements of the same type. Time complexities:
- Access by index: O(1) — direct memory calculation
- Search (unsorted): O(n) — must scan all elements
- Insert at end (amortized): O(1) for dynamic arrays (Python list, Java ArrayList)
- Insert at middle: O(n) — must shift all subsequent elements
- Delete: O(n) — same shifting cost

When to use: Random access by index, iteration over all elements, memory efficiency when size is known.

**Hash Maps (Hash Tables, Dictionaries)**

A hash map stores key-value pairs with O(1) average-case lookup, insert, and delete. The hash function converts any key into an integer index into an underlying array. Collisions (two keys hash to same index) are resolved by chaining (linked list at each bucket) or open addressing.

Real impact: Google's search index is essentially a massive distributed hash map — each search query hashes to a set of document IDs in microseconds. Python's dict, Java's HashMap, and C++ unordered_map are hash maps.

When to use: Counting frequencies, two-sum style problems, deduplication, caching (memoization).

**Linked Lists**

A linked list is a chain of nodes where each node contains a value and a pointer to the next node. O(1) insert/delete at the head (no shifting), but O(n) access by index. Used less frequently in interviews but critical for understanding memory management and implementing stacks/queues.

**Stacks and Queues**

- **Stack** (LIFO — Last In, First Out): Push/pop from the same end. Use cases: function call stack, undo/redo, balanced parentheses, monotonic stack problems.
- **Queue** (FIFO — First In, First Out): Enqueue at back, dequeue from front. Use cases: BFS graph traversal, task scheduling, sliding window.

**Trees: Binary Trees and BSTs**

A binary tree has nodes with at most two children (left, right). A **Binary Search Tree (BST)** adds the invariant: left subtree values < node < right subtree values. This gives O(log n) average search, insert, delete — but degrades to O(n) on skewed trees (all nodes in one direction).

A **balanced BST** (AVL tree, Red-Black tree) maintains O(log n) height. Java's TreeMap and C++'s std::map use Red-Black trees.

Tree traversals:
- **In-order** (left, root, right): Visits BST nodes in sorted order
- **Pre-order** (root, left, right): Copies tree structure
- **Post-order** (left, right, root): Used in expression evaluation, file system deletion
- **Level-order (BFS)**: Uses a queue, processes level by level

**Heaps (Priority Queues)**

A heap is a complete binary tree with the heap property: parent ≥ children (max-heap) or parent ≤ children (min-heap). Gives O(log n) insert/delete and O(1) peek at max/min. Implementation: array (implicit tree — parent of index i is at i//2, children at 2i and 2i+1).

Use cases: Dijkstra's shortest path, top-K elements, merge K sorted lists, scheduling.

**Graphs**

A graph G = (V, E) is a set of vertices V connected by edges E. Directed vs. undirected. Weighted vs. unweighted.

Representations:
- **Adjacency list**: Dict of {node: [neighbors]}. Space: O(V+E). Efficient for sparse graphs. Used in most interview problems.
- **Adjacency matrix**: N×N matrix. Space: O(V²). Fast edge lookup. Used for dense graphs.

Traversals:
- **BFS** (Breadth-First Search): Uses queue. Finds shortest path in unweighted graphs. O(V+E).
- **DFS** (Depth-First Search): Uses stack (or recursion). Detects cycles, topological sort. O(V+E).

Google's PageRank, Meta's social network friend recommendations, Amazon's product recommendation graph — all are graph algorithms at scale.`,
        keyPoints: [
          'Hash maps provide O(1) average-case lookup, insert, and delete — the go-to structure for frequency counting, deduplication, and two-sum style problems',
          'Binary Search Trees provide O(log n) operations only when balanced — a skewed BST degrades to O(n); production systems use self-balancing variants (Red-Black, AVL)',
          'Heaps (priority queues) give O(log n) insert/delete and O(1) peek-at-min/max — essential for Dijkstra\'s shortest path, top-K problems, and streaming median',
          'Adjacency lists are preferred for sparse graphs (most real-world graphs); adjacency matrices are O(V²) space but allow O(1) edge existence checks',
          'The choice of data structure determines the time complexity ceiling of an algorithm — a problem requiring O(n log n) with a BST might be unsolvable in O(n) with an array',
        ],
        realWorldExample: `**Google's Interview Process and LeetCode Culture:** Google famously pioneered the structured technical interview with algorithmic coding problems. Every software engineer hire — from new grad to senior staff — goes through 4-5 rounds of 45-minute coding interviews, each requiring a solution to a medium-hard LeetCode-style problem optimized in time and space complexity. A typical problem: "Given a stream of integers, design a data structure that supports insert(val) in O(log n) and find_median() in O(1)." The optimal solution uses two heaps: a max-heap for the lower half and a min-heap for the upper half, maintaining balance invariants. This tests whether you know that heap peek is O(1) while balancing is O(log n). Google's hiring committee evaluates: correctness, optimal complexity, clean code, and communication of tradeoffs. Engineers who cannot name the complexity of their solution rarely pass.`,
        practiceQuestions: [
          'Implement a function that finds two numbers in an unsorted array that sum to a target value. Give a brute-force O(n²) solution and an optimal O(n) solution. What data structure enables the O(n) approach?',
          'You have a binary search tree. Write a function to determine if it is a valid BST (all left subtree values < root < all right subtree values). What traversal order do you use, and what is the time and space complexity?',
          'Design a data structure that supports: push(val), pop(), and getMin() all in O(1) time. Hint: think about what additional state to maintain alongside the standard stack.',
        ],
      },
      {
        id: 'swe-algo-1',
        title: 'Algorithm Complexity, Sorting, and Dynamic Programming',
        content: `Every Google, Meta, and Amazon technical interview ultimately tests one thing: can you take a problem, identify the optimal algorithmic approach, implement it correctly, and reason about its efficiency? The tools are Big-O analysis, sorting knowledge, and dynamic programming — the most powerful (and most feared) paradigm in competitive programming.

**Big-O Notation: The Language of Efficiency**

Big-O describes how an algorithm's time (or space) scales with input size n, ignoring constants and lower-order terms.

Common complexities ranked:
- O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2^n) < O(n!)

**Rules:**
- Drop constants: 3n → O(n)
- Drop lower-order terms: n² + n → O(n²)
- Sequential operations add: O(n) + O(n) = O(n)
- Nested loops multiply: two nested loops over n → O(n²)

Amortized analysis: A dynamic array that doubles capacity when full costs O(n) to resize but O(1) amortized per insertion because resizing happens rarely.

Space complexity: Many solutions trade space for time. A hash map lookup is O(1) time but O(n) space to store the table.

**Sorting Algorithms**

Sorted data unlocks binary search (O(log n)), merge operations, and many optimization techniques.

- **Merge Sort**: O(n log n) always. Stable. Divide array in half recursively, merge sorted halves. O(n) extra space.
- **Quick Sort**: O(n log n) average, O(n²) worst case (avoided with random pivot). In-place. Used in Python's sort (Timsort is a hybrid), Java's Arrays.sort.
- **Heap Sort**: O(n log n) always. In-place. Less cache-friendly than merge sort.
- **Counting / Radix Sort**: O(n) for integer data with bounded range. Used in distributed systems for radix-based sorting of log files at Google.

**Binary Search**

Binary search requires a sorted array and finds target in O(log n):
```
left, right = 0, len(array)-1
while left <= right:
    mid = (left + right) // 2
    if array[mid] == target: return mid
    elif array[mid] < target: left = mid + 1
    else: right = mid - 1
```
Template applies to: searching in rotated arrays, finding first/last occurrence, searching answer space (minimize maximum value, etc.).

**Dynamic Programming (DP)**

DP solves optimization problems by breaking them into overlapping subproblems and storing results (memoization/tabulation). The two conditions for DP applicability:
1. **Optimal substructure**: Optimal solution contains optimal solutions to subproblems
2. **Overlapping subproblems**: Same subproblems recur (unlike divide-and-conquer where subproblems are distinct)

**Framework:**
1. Define state: dp[i] or dp[i][j] represents the answer to a subproblem
2. Write recurrence: how dp[i] relates to previous states
3. Initialize base cases
4. Determine traversal order (ensure subproblems are solved before they're needed)

**Classic DP Problems Used in FAANG Interviews:**

**Fibonacci**: dp[n] = dp[n-1] + dp[n-2]. Naive recursion O(2^n); memoized O(n).

**0/1 Knapsack**: dp[i][w] = max value using first i items with weight capacity w. O(n×W) time and space (reducible to O(W) space).

**Longest Common Subsequence (LCS)**: dp[i][j] = LCS length of first i chars of s1 and j chars of s2. Used in DNA sequencing, diff tools (git diff uses a variant).

**Coin Change (Minimum Coins)**: dp[amount] = minimum coins to make amount. O(amount × coins).

**Edit Distance (Levenshtein)**: dp[i][j] = min edit operations to convert s1[:i] to s2[:j]. Used in autocorrect, NLP, spell-checkers.

**Two-Pointer and Sliding Window**

Two-pointer: maintain two indices and move them toward each other or in the same direction. O(n) for sorted-array problems (two-sum on sorted array, trapping rainwater).

Sliding window: maintain a window [left, right] expanding/contracting as you scan. O(n) for substring problems (longest substring without repeating characters, minimum window substring).`,
        keyPoints: [
          'Big-O ignores constants and lower-order terms — O(3n²+5n+2) simplifies to O(n²); nested loops multiply complexity while sequential operations add',
          'Merge sort guarantees O(n log n) with O(n) space; quicksort averages O(n log n) in-place but requires random pivoting to avoid O(n²) worst case on sorted input',
          'Dynamic programming requires optimal substructure and overlapping subproblems — identify the state definition (what dp[i] represents) before writing the recurrence',
          'Binary search applies beyond sorted arrays — any problem with a monotone search space (minimize maximum, maximize minimum) can use binary search on the answer',
          'Sliding window and two-pointer patterns convert many O(n²) brute-force solutions into O(n) — recognize these patterns by the presence of contiguous subarrays or sorted arrays in the problem',
        ],
        realWorldExample: `**Amazon's Interview Philosophy and DP in Production:** Amazon's coding interviews at SDE II and above require candidates to derive optimal solutions and communicate clearly about complexity tradeoffs. Amazon uses DP extensively in production: their recommendation engine ("customers who bought X also bought Y") uses collaborative filtering with DP-optimized similarity search. Their warehouse routing optimization is a variant of the Traveling Salesman Problem (NP-hard, but DP gives exact solutions for small inputs and approximations for large ones). The Knapsack problem directly models Amazon's problem of selecting which product promotions maximize revenue given a limited advertising budget. When an Amazon interviewer asks "design an algorithm to find the cheapest flight path with at most K layovers," they're testing whether you recognize this as a DP on a graph — specifically the Bellman-Ford variant with K-step constraint, which Amazon's internal travel booking system uses.`,
        practiceQuestions: [
          'Given an array of integers, find the length of the longest increasing subsequence (LIS). Write a O(n²) DP solution and describe (without necessarily implementing) the O(n log n) solution using patience sorting. What is the state definition and recurrence?',
          'Analyze the time and space complexity of a recursive Fibonacci implementation without memoization. Then rewrite it with memoization (top-down DP). Finally, write a bottom-up DP solution that uses O(1) space instead of O(n).',
          'You are given a list of stock prices for n days. Find the maximum profit from at most 2 non-overlapping buy-sell transactions. Define the DP state, write the recurrence relation, and give the time and space complexity.',
        ],
      },
    ],
  },
  {
    id: 'tech-system-design',
    title: 'System Design for Scale',
    description: 'Design distributed systems that handle millions of users — the content tested in senior-level interviews at Google, Meta, Amazon, and every tier-1 tech company.',
    track: 'finance' as const,
    level: 'intermediate' as const,
    estimatedHours: 16,
    icon: 'server',
    color: '#7C3AED',
    topics: [
      {
        id: 'sys-1',
        title: 'Distributed Systems: CAP Theorem, Consistency, and Availability',
        content: `Distributed systems are the backbone of every product you use at scale. When you post on Instagram, your photo travels through a distributed storage system spanning multiple data centers across three continents. When you search on Google, your query hits thousands of servers simultaneously. The engineering decisions that make these systems work reliably — and the tradeoffs that make them imperfect — are governed by fundamental theorems and patterns that every senior engineer must understand.

**The CAP Theorem (Brewer's Theorem)**

A distributed data store can guarantee at most two of three properties simultaneously:
- **Consistency (C)**: Every read returns the most recent write or an error. All nodes see the same data at the same time.
- **Availability (A)**: Every request receives a non-error response (though it may be stale).
- **Partition Tolerance (P)**: The system continues operating when network partitions (message loss or delay) occur.

Because network partitions are unavoidable in real distributed systems (networks fail), the practical choice is:
- **CP systems**: Prioritize consistency; may become unavailable during partitions. HBase, Zookeeper, etcd. Used for financial transactions (banks, payment systems — correctness critical).
- **AP systems**: Prioritize availability; may return stale data during partitions. Cassandra, DynamoDB, CouchDB. Used for social feeds, user profiles (slight staleness acceptable).

**Eventual Consistency vs. Strong Consistency**

- **Strong consistency (linearizability)**: Once a write completes, all subsequent reads return that value. Expensive — requires synchronous replication or consensus protocols (Raft, Paxos).
- **Eventual consistency**: Writes propagate asynchronously; replicas converge to the same value given no new updates. High availability, low latency. Used in DNS, Amazon DynamoDB, Cassandra.

Facebook uses eventual consistency for your newsfeed (a slightly stale post is acceptable) but strong consistency for financial operations (payment cannot be eventually consistent — double-charges are catastrophic).

**Replication Strategies**

- **Single-leader replication**: One primary node accepts writes; replicas follow. Simple but single point of failure for writes. Used in PostgreSQL, MySQL replication.
- **Multi-leader replication**: Multiple primaries accept writes; conflict resolution required. Used for multi-datacenter active-active setups.
- **Leaderless replication (Dynamo-style)**: Any node accepts writes; quorum-based reads/writes. Cassandra and Riak use this. Read/write quorum: W + R > N ensures at least one overlapping node.

**Consensus Protocols: Raft and Paxos**

Distributed systems requiring strong consistency use consensus protocols to agree on values across nodes despite failures. **Raft** (used in etcd, used by Kubernetes for cluster state) elects a leader, which replicates log entries to followers. A write is committed when a majority acknowledges it. Leader election handles leader failures. Google's internal systems use Paxos variants; Raft is Paxos made understandable.

**PACELC: The Extended Model**

PACELC extends CAP: even without partitions, distributed systems must tradeoff **Latency (L)** vs. **Consistency (C)**. Synchronous replication gives consistency at the cost of latency (wait for all replicas to acknowledge). Asynchronous replication gives lower latency with possible data loss on failure.

Amazon's DynamoDB: AP + EL (prioritize availability and low latency, accept eventual consistency). Used for product catalogs, session management. Google Spanner: CP + EC (strong consistency globally, higher latency accepted). Used for financial records at Google Pay.

**Sharding (Horizontal Partitioning)**

As data grows beyond a single machine, partition data across multiple nodes (shards). Strategies:
- **Range-based sharding**: Users A-M on shard 1, N-Z on shard 2. Simple but creates hotspots.
- **Hash-based sharding**: Hash the key, assign to shard = hash(key) % N. Even distribution but resharding requires moving ~all data.
- **Consistent hashing**: Map keys and nodes to a ring; each key is served by the nearest clockwise node. Adding/removing nodes requires moving only ~1/N of data. Used by DynamoDB, Cassandra, Memcached.`,
        keyPoints: [
          'CAP theorem: distributed systems can have at most 2 of consistency, availability, partition tolerance; since partitions are unavoidable, the real choice is CP (banks, databases) vs AP (social feeds, DNS)',
          'Eventual consistency means replicas converge over time without guaranteeing when — acceptable for reads that tolerate slight staleness (social media feeds), catastrophic for financial ledgers',
          'Raft consensus requires a majority quorum (N/2 + 1 nodes) to commit a write, ensuring strong consistency while tolerating up to N/2 node failures',
          'Consistent hashing maps keys and nodes to a ring, ensuring that adding/removing nodes requires rehashing only ~1/N of keys — critical for scaling distributed caches like Memcached',
          'PACELC extends CAP to the non-partition case: even when the network is healthy, choosing synchronous replication (consistency) vs. asynchronous (low latency) is a fundamental design decision',
        ],
        realWorldExample: `**Amazon DynamoDB's Design Choices:** Amazon's shopping cart famously uses DynamoDB (formerly Dynamo) with AP semantics and eventual consistency. During Amazon's 2019 Prime Day (hundreds of millions of transactions), network partitions occurred within their data centers. Because the cart system chose availability over consistency, customers could still add items — the system returned slightly stale cart data rather than showing errors. Occasionally, two writes to the same cart from different devices conflicted; Amazon's conflict resolution used "last write wins" with vector clocks to merge divergent versions. This tradeoff (occasional cart inconsistency) was explicitly chosen over the alternative (cart unavailable during network issues). The engineering team estimated that a 1% availability drop on Prime Day would cost tens of millions in revenue — making AP the correct choice for this use case.`,
        practiceQuestions: [
          'You are designing the database for a bank\'s account balance system. Should you use a CP or AP system? Explain the consequences of choosing wrong — what specific failure scenario does each choice prevent or allow?',
          'Cassandra uses quorum reads and writes. With N=5 replicas, W=3, R=3, explain why W+R>N guarantees that at least one node participates in both the read and write quorum, ensuring the read returns the latest write.',
          'Explain consistent hashing with a concrete example of 4 nodes on a ring. What happens when a 5th node is added — which keys are remapped, and what fraction of total keys must be moved? Compare to the fraction that would be remapped with naive hash(key) % N sharding.',
        ],
      },
      {
        id: 'sys-2',
        title: 'Designing Real Systems: URL Shortener to Instagram',
        content: `System design interviews at FAANG ask you to design real systems from scratch in 45-60 minutes. The goal is not a perfect implementation but a structured demonstration that you can reason about scale, tradeoffs, and engineering choices at the level of a senior engineer. This topic walks through the complete framework and two canonical problems.

**The System Design Interview Framework**

A disciplined approach separates candidates who pass from those who don't:

1. **Clarify requirements (5 min)**: Functional requirements (what the system does), non-functional requirements (scale, latency, consistency). Ask: "How many DAU? What's the read/write ratio? What latency SLAs? Strong consistency required?"

2. **Capacity estimation (5 min)**: Rough numbers establish which components you need.
   - "100M DAU, 10 requests/user/day → 10B requests/day → ~100K QPS peak"
   - "1KB per record, 10M records → 10GB storage — fits in one DB"
   - "1MB per photo, 10M photos/day → 10TB/day → need distributed storage"

3. **High-level design (10 min)**: Draw the core components: clients, load balancers, app servers, databases, caches, CDN. Identify the critical path for the main use cases.

4. **Deep dive on components (25 min)**: Interviewer will probe 2-3 areas. Go deep on the parts that are architecturally interesting for this system.

5. **Identify and address bottlenecks (5 min)**: Single points of failure, hot spots, scaling limits.

**Case Study 1: URL Shortener (bit.ly)**

Functional: Create short URL from long URL. Redirect short URL to long URL. (Optional: analytics, expiration)

Scale: 100M URLs created/day (write-heavy), 10B redirects/day (read-heavy, 100:1 read/write ratio)

**Core Design:**
- **Short code generation**: Base62 encoding of auto-increment ID (62^7 = 3.5T unique codes). Alternative: MD5 hash (collision risk). For globally distributed system: Snowflake ID with worker ID prefix.
- **Database**: Write path: app server → SQL DB (PostgreSQL) storing {short_code, long_url, created_at, user_id}. Short code is primary key.
- **Cache (critical)**: Redirect path is read-heavy. Add Redis cache: {short_code → long_url} with TTL. Cache hit rate target: 95%+. With Pareto principle, caching 20% of URLs handles 80% of traffic.
- **CDN for redirect**: Serve HTTP 301 (permanent, browser caches) or 302 (temporary, trackable) redirects from edge nodes globally.
- **Database scaling**: Shard by short_code hash for write scale. Read replicas for read scale.

**Case Study 2: Design Instagram (Photo Sharing at Scale)**

Functional: Upload photos. Follow users. See feed of followed users' recent photos. Like/comment.

Scale: 1B MAU, 100M DAU, 100M photos uploaded/day (1KB metadata + 1MB photo = 1TB+ storage/day), 1B feed reads/day.

**Core Architecture:**

**Photo Storage**: Upload → app server → object store (S3/GCS). Never store binary files in SQL. The app server generates a CDN URL for each photo, stores the URL in DB. Photos are served from CDN (CloudFront, Akamai) with global edge caching — a user in Tokyo gets the photo from a Tokyo edge node, not from AWS us-east-1.

**Metadata Database**: PostgreSQL with tables: users, photos (photo_id, user_id, url, timestamp), follows (follower_id, followee_id), likes. Shard users and photos by user_id for horizontal scale.

**Feed Generation (the hard part)**: Two approaches:
- **Pull (fan-out on read)**: When user opens app, query all followees' recent posts. Simple but slow for users following 10,000 accounts — fan-out at read time hits thousands of DB queries.
- **Push (fan-out on write)**: When user posts, asynchronously write the post ID to each follower's feed (a Redis sorted set keyed by user_id). Feed read is O(1). But: Kylie Jenner has 300M followers — writing to 300M feed entries per post is catastrophic (celebrity problem).
- **Hybrid (Instagram's actual approach)**: Push for regular users. Pull for celebrities (>1M followers). Merge at read time.

**Notification System**: Async message queue (Kafka) consumes like/comment events → notification service → push to mobile (APNs/FCM) or in-app.`,
        keyPoints: [
          'The system design framework: clarify requirements → capacity estimation → high-level design → deep dive → bottlenecks; spending 5 minutes clarifying before drawing anything separates strong candidates',
          'URL shorteners need a globally unique ID generator (Snowflake ID with datacenter + worker + sequence bits) that avoids distributed coordination while guaranteeing uniqueness',
          'Feed generation has two extremes: fan-out on write (push posts to follower feeds immediately, O(1) read) vs. fan-out on read (compute feed on request, simple but slow); Instagram uses a hybrid that pushes for normal users but pulls for celebrities',
          'Object storage (S3, GCS) is mandatory for binary files (photos, videos) — SQL databases should store only metadata (URL, timestamps) and never binary blobs',
          'Cache every hot read path: a 95% cache hit rate on 10B URL redirects/day means only 500M DB reads instead of 10B — a 20x reduction in database load',
        ],
        realWorldExample: `**Instagram's 2012 Architecture at 1B Photos:** When Facebook acquired Instagram in 2012 for $1B, Instagram had 13 engineers and 30M users. Their architecture was brutally simple: Python/Django app servers, PostgreSQL sharded by user_id, Redis for feed caching, S3 for photo storage, and Nginx. The engineering principle: choose boring, battle-tested technology and only introduce complexity when a specific bottleneck demands it. The hardest scaling problem was feed generation. With users following thousands of others, computing a feed on-read required fanning out to hundreds of DB shards simultaneously, creating latency spikes. Instagram pre-computed feeds into Redis sorted sets (fan-out on write), then built a special "celebrity" detection service that switched high-follower accounts to on-read computation to avoid the write amplification problem. This hybrid architecture, built by a 13-person team, served 30M users with 99.9% uptime — a masterclass in pragmatic system design.`,
        practiceQuestions: [
          'Design a rate limiter that limits each user to 100 API requests per minute. Walk through the data structures, storage layer, and algorithm. How does your design handle distributed rate limiting across 50 app servers?',
          'You are designing Twitter\'s timeline feature for 300M users. Compare the fan-out-on-write vs. fan-out-on-read approaches. What is the write amplification for a user with 1M followers in the push model? Propose the hybrid solution and explain the threshold for switching strategies.',
          'Walk through the complete data flow when a user uploads a photo on Instagram: what happens at each layer (client, CDN, load balancer, app server, database, object storage, notification) and what can go wrong at each step?',
        ],
      },
    ],
  },
  {
    id: 'tech-data-engineering',
    title: 'Data Engineering',
    description: 'Build production data pipelines, master SQL and cloud infrastructure, and design ETL/ELT systems used by data teams at Airbnb, Uber, Stripe, and every major technology company.',
    track: 'finance' as const,
    level: 'intermediate' as const,
    estimatedHours: 14,
    icon: 'database',
    color: '#0891B2',
    topics: [
      {
        id: 'de-1',
        title: 'SQL Mastery and Analytical Query Patterns',
        content: `SQL is the lingua franca of data. Every data engineer at Airbnb, every data scientist at Stripe, every analyst at Netflix uses SQL daily. The gap between someone who knows basic SQL and someone who has mastered window functions, CTEs, and query optimization is the gap between junior and senior data roles.

**Window Functions: The Game-Changer**

Window functions perform calculations across a set of table rows related to the current row — like GROUP BY but without collapsing the result set. Syntax: function() OVER (PARTITION BY ... ORDER BY ... ROWS/RANGE ...)

**Ranking functions:**
- ROW_NUMBER(): Unique sequential number. No ties.
- RANK(): Skips ranks after ties (1, 1, 3).
- DENSE_RANK(): No gaps after ties (1, 1, 2).
- NTILE(n): Divides rows into n buckets.

**Use case at Airbnb**: Find the most recent booking for each host: ROW_NUMBER() OVER (PARTITION BY host_id ORDER BY created_at DESC) = 1

**Aggregate window functions:**
- SUM(revenue) OVER (PARTITION BY user_id ORDER BY date) → running total per user
- AVG(price) OVER (PARTITION BY city ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) → 7-day rolling average by city

**Lead/Lag for Time Series:**
- LAG(event_date, 1) OVER (PARTITION BY user_id ORDER BY event_date) → previous event date
- Calculate days between sessions: event_date - LAG(event_date) OVER (PARTITION BY user_id ORDER BY event_date)

**CTEs (Common Table Expressions) and Recursive CTEs**

CTEs (WITH clause) make complex queries readable by naming intermediate results:

```sql
WITH active_users AS (
    SELECT user_id
    FROM events
    WHERE event_date >= CURRENT_DATE - 30
    GROUP BY user_id
    HAVING COUNT(*) >= 5
),
user_revenue AS (
    SELECT user_id, SUM(amount) as ltv
    FROM orders
    GROUP BY user_id
)
SELECT au.user_id, ur.ltv
FROM active_users au
JOIN user_revenue ur USING (user_id);
```

Recursive CTEs traverse hierarchical data (org charts, comment threads, bill-of-materials):
```sql
WITH RECURSIVE org_hierarchy AS (
    SELECT id, name, manager_id, 1 as level
    FROM employees WHERE manager_id IS NULL
    UNION ALL
    SELECT e.id, e.name, e.manager_id, oh.level + 1
    FROM employees e JOIN org_hierarchy oh ON e.manager_id = oh.id
)
SELECT * FROM org_hierarchy;
```

**Query Optimization**

Slow queries are the #1 pain point in data engineering. Key principles:

- **Use indexes on join keys and WHERE columns**: A B-tree index on user_id reduces a sequential scan (O(n)) to O(log n).
- **Avoid SELECT ***: Scan only needed columns — critical on column-store databases (Redshift, BigQuery, Snowflake).
- **Push filters early**: Filter data as early as possible in the query plan. WHERE before JOIN.
- **EXPLAIN ANALYZE**: Run this on any slow query to see the actual execution plan (sequential scan vs index scan, estimated vs actual row counts).
- **Partition pruning**: Partition large tables by date. Queries filtering on date skip irrelevant partitions.
- **Avoid functions on indexed columns in WHERE**: WHERE YEAR(created_at) = 2023 prevents index use. Use WHERE created_at >= '2023-01-01' AND created_at < '2024-01-01'.

**Data Warehousing Patterns (Kimball vs. Inmon)**

- **Star schema (Kimball)**: Fact tables (events, transactions) surrounded by dimension tables (users, products, dates). Optimized for analytical queries. Used by Airbnb's data warehouse.
- **3NF normalized (Inmon)**: Highly normalized, no redundancy. Good for transactional systems. Harder for analytics.
- **One Big Table (OBT)**: All dimensions pre-joined. Very fast queries, massive storage. Used in some modern cloud DW patterns.

Airbnb's data team maintains hundreds of fact and dimension tables in Hive (on Hadoop) and Presto/Trino, with dbt managing the transformation logic and lineage.`,
        keyPoints: [
          'Window functions perform per-row calculations over a defined partition without collapsing the result set — ROW_NUMBER(), RANK(), LAG/LEAD, and running aggregates are the most important patterns',
          'CTEs (WITH clauses) are not just cosmetic — on some query engines they materialize intermediate results, enabling better query planning and preventing repeated re-evaluation of expensive subqueries',
          'EXPLAIN ANALYZE reveals the actual query execution plan — the gap between estimated and actual row counts signals stale table statistics that can cause catastrophically bad query plans',
          'Partitioning large tables by date and filtering on the partition key (not wrapping in functions) is the single highest-impact optimization for analytical queries on billion-row tables',
          'Star schema (fact + dimension tables) is the dominant pattern for analytical data warehouses because it aligns with how analysts query data and enables efficient column-store compression',
        ],
        realWorldExample: `**Airbnb's Data Infrastructure at Scale:** Airbnb processes over 100TB of new data daily, tracking every search, click, booking, message, and review across millions of hosts and guests in 220 countries. Their data platform runs on Apache Spark for ETL, Apache Airflow (which Airbnb created and open-sourced) for workflow orchestration, Presto/Trino for interactive SQL analytics, and dbt for transformation layer. A senior data engineer at Airbnb might write a SQL query using window functions to calculate each host's 30-day rolling revenue, join it to a dimension table of host characteristics, then materialize it as a downstream table that feeds the trust & safety team's fraud detection model. A query that takes 4 hours unoptimized (full table scan on a 50B-row events table) can be reduced to 8 minutes by partitioning on event_date and using Spark's partition pruning. These performance differences directly affect how quickly Airbnb's product teams can iterate on data-driven decisions.`,
        practiceQuestions: [
          'Write a SQL query to find, for each user, their second purchase date. Use window functions. Then extend it to find users who made their second purchase within 30 days of their first purchase (high-retention users).',
          'A table has 10B rows partitioned by date. Query: "Find total GMV per country for the last 90 days." Write the query, explain why a non-partitioned query would be slow, and describe two additional optimizations (indexing, schema design) that would further improve performance.',
          'You have an employees table with columns: id, name, manager_id, salary. Write a recursive CTE to find all employees who report (directly or indirectly) to a given executive (id=1), and the total salary cost of that sub-tree.',
        ],
      },
      {
        id: 'de-2',
        title: 'Data Pipelines, ETL/ELT, and Cloud Infrastructure',
        content: `Data engineering is the discipline of building reliable, scalable pipelines that move data from where it is generated (application databases, APIs, event streams) to where it is used for analytics, ML, and product decisions. The infrastructure choice (Kafka vs SQS, Spark vs dbt, Redshift vs BigQuery) defines the architecture of the modern data stack.

**Batch vs. Streaming Pipelines**

- **Batch processing**: Process a fixed window of data at scheduled intervals (hourly, daily). Tools: Apache Spark, dbt, SQL on a warehouse. Simpler, cheaper, sufficient for most analytics use cases. "Run at 2am daily to compute yesterday's revenue metrics."
- **Streaming processing**: Process events as they arrive with low latency (seconds to minutes). Tools: Apache Kafka + Flink, Spark Streaming, AWS Kinesis. Required for: fraud detection (must catch fraud before transaction settles), real-time dashboards (Uber surge pricing), recommendation engines (show the product user is currently browsing).

**Apache Kafka: The Event Backbone**

Kafka is a distributed, append-only log that decouples data producers from consumers. Architecture:
- **Topics**: Named streams of records (like a database table but append-only). "user_clicks," "payment_events," "inventory_updates."
- **Partitions**: Each topic is split into N partitions for parallel processing. Records with the same key go to the same partition (ensuring ordering within a key).
- **Producers**: Write events to topics.
- **Consumers**: Read from topics at their own pace. Consumer groups allow multiple consumers to share the load.
- **Retention**: Events are retained for a configurable period (default 7 days) — consumers can replay from any offset.

Uber uses Kafka to process 1 trillion messages per day. Every ride start, GPS ping, payment, and driver location update flows through Kafka topics before being consumed by downstream services (surge pricing, ETA calculation, driver matching).

**ETL vs. ELT**

- **ETL (Extract, Transform, Load)**: Transform data before loading into the warehouse. Traditional approach with tools like Informatica, Talend.
- **ELT (Extract, Load, Transform)**: Load raw data first, transform inside the warehouse using SQL. Modern approach enabled by cheap cloud storage and powerful SQL engines (Snowflake, BigQuery, Redshift).

ELT advantages: raw data preserved for reprocessing, transformations are SQL (accessible to analysts), warehouse compute is cheap and scalable.

**The Modern Data Stack**

The contemporary data engineering toolkit at a Series B+ startup or large tech company:
1. **Ingestion**: Fivetran / Airbyte (no-code connectors for SaaS sources) or custom Kafka consumers for real-time.
2. **Storage / Warehouse**: Snowflake, BigQuery, or Databricks Lakehouse. Cloud-native, column-store, auto-scaling.
3. **Transformation**: dbt (data build tool) — write transformations as SQL SELECT statements, dbt handles dependency management, testing, and documentation.
4. **Orchestration**: Apache Airflow (DAG-based scheduler) or Prefect / Dagster for more modern approaches.
5. **BI / Analytics**: Looker, Tableau, Metabase on top of the warehouse.

**Data Quality and Testing**

Production pipelines fail silently without data quality checks. dbt tests:
- `not_null`: Column has no NULL values
- `unique`: Column values are unique
- `accepted_values`: Values are in allowed set
- `relationships`: Foreign key integrity

Great Expectations: Python library for declarative data quality — "column user_id should have no nulls, values between 1 and 10M, no more than 0.1% duplicates."

**Cloud Infrastructure for Data (AWS / GCP / Azure)**

Key AWS data services:
- **S3**: Object storage for raw data lake, cheap ($0.023/GB/month). Store Parquet/ORC files.
- **Redshift**: Columnar data warehouse. Good for structured analytics at petabyte scale.
- **Glue**: Serverless Spark ETL + data catalog.
- **Kinesis**: Managed Kafka alternative for streaming.
- **Athena**: SQL directly on S3 (pay-per-query, no infra to manage).

Key GCP data services:
- **BigQuery**: Serverless, columnar, ML-integrated. Google's internal analytics backbone. Automatically optimizes queries — no index management needed.
- **Pub/Sub**: Managed Kafka alternative.
- **Dataflow**: Managed Apache Beam for batch and streaming.`,
        keyPoints: [
          'Kafka partitioning guarantees ordering within a partition key (all events for the same user_id in sequence) while enabling parallel consumption across partitions for horizontal scale',
          'ELT has replaced ETL in the modern data stack — load raw data into columnar warehouses (Snowflake, BigQuery) first, then transform with SQL in dbt; this preserves raw data for reprocessing when business logic changes',
          'dbt (data build tool) treats SQL transformations as version-controlled software — SELECT statements become modular models with dependency graphs, tests, and documentation',
          'Apache Airflow DAGs define data pipeline dependencies as directed acyclic graphs — each task is a node, edges represent execution order; the DAG structure prevents circular dependencies and enables parallel execution of independent tasks',
          'Parquet/ORC columnar file formats on S3 reduce query costs by 10-100x vs CSV — reading only the needed columns instead of full rows is the key optimization for analytical workloads',
        ],
        realWorldExample: `**Stripe's Data Infrastructure for Fraud Detection:** Stripe processes hundreds of billions of dollars in payments annually, with a real-time fraud detection system that must evaluate each transaction in under 300ms. Their data pipeline uses Kafka to stream every payment event — transaction amount, merchant category, user device fingerprint, historical velocity — to a Flink streaming job that computes real-time features (transactions in last 1 minute / 10 minutes / 1 hour by card, by device, by IP). These real-time features are written to a low-latency feature store (Redis) and consumed by the ML fraud model at inference time. Simultaneously, the same Kafka events flow into their data warehouse (internal BigQuery equivalent) via batch pipelines for offline analysis, model training, and reporting. The dual-path architecture (streaming for real-time, batch for analytics) is the standard pattern at every major fintech — Stripe, Square, Adyen, and PayPal all run variants of this architecture.`,
        practiceQuestions: [
          'Design a data pipeline that ingests clickstream events from a web application (10M events/hour), computes 1-hour rolling aggregates per user, and makes them available for a fraud scoring model with <5 second latency. What technologies would you choose at each layer and why?',
          'You have a dbt model that runs daily to compute the prior day\'s revenue by product. The model fails silently when upstream data is missing (shows $0 revenue instead of null). What dbt tests and/or Airflow checks would you add to catch this before it reaches the dashboard?',
          'Compare loading 1TB of JSON event data into BigQuery vs. storing it as Parquet on S3 and querying with Athena. When would you choose each approach? What is the compression ratio you can expect from converting JSON to Parquet for typical event data?',
        ],
      },
    ],
  },
  {
    id: 'tech-aiml-engineering',
    title: 'AI/ML Engineering',
    description: 'Deploy ML models to production, build MLOps pipelines, integrate LLMs at scale, and solve the engineering challenges of building AI products at Google, OpenAI, Anthropic, and top AI-native companies.',
    track: 'finance' as const,
    level: 'intermediate' as const,
    estimatedHours: 16,
    icon: 'zap',
    color: '#DC2626',
    topics: [
      {
        id: 'mlops-1',
        title: 'MLOps: From Notebook to Production ML System',
        content: `The hardest part of machine learning is not building models — it is keeping them working in production. A model that achieves 95% accuracy in a Jupyter notebook may fail silently in production three months later due to data drift, infrastructure issues, or deployment errors. MLOps is the discipline of bringing software engineering rigor to the ML lifecycle, and it is the core skill gap that separates ML engineers at Google and Meta from data scientists who can only prototype.

**The ML Production Gap**

Academic ML: Write model in notebook → evaluate on test set → publish paper.

Production ML: Data pipeline → feature engineering → training pipeline → validation → deployment → serving infrastructure → monitoring → retraining → versioning → A/B testing → rollback capability. Each step can fail, and failure in production means degraded user experience or, in high-stakes contexts (credit scoring, medical AI, fraud detection), direct harm.

**The MLOps Stack**

**1. Experiment Tracking (MLflow, Weights & Biases)**

Track every training run: hyperparameters, metrics, artifacts (model weights), and code version. Critical for reproducibility. Without experiment tracking, you cannot answer "which configuration produced our best model 6 months ago?"

MLflow: Open-source. Logs params, metrics, and models. Model Registry for versioning (Staging → Production → Archived).

W&B (Weights & Biases): SaaS, richer visualization. Used by OpenAI, Anthropic, and most AI companies. Supports sweep (hyperparameter search), artifact versioning, and team collaboration.

**2. Feature Stores (Feast, Tecton, Vertex AI Feature Store)**

A feature store solves the train/serve skew problem: features computed in training pipelines must be identical to features computed at inference time. Without a feature store, teams reimplement feature logic twice (training in Python batch jobs, serving in Java microservices), causing subtle differences that degrade model performance.

Feature store provides: point-in-time correct feature retrieval for training, low-latency online serving (Redis-backed for <5ms lookups), and governance (who created this feature, what is its lineage).

**3. Model Serving**

Options by latency requirement:
- **Batch inference**: Run model on a dataset offline, write predictions to database. Use for: recommendation pre-computation, batch fraud scoring. Infra: Spark, AWS Batch.
- **Real-time REST API serving**: Deploy model as REST endpoint with Flask/FastAPI + Docker + Kubernetes. Latency: 10-100ms. Use for: search ranking, ad click-through rate prediction.
- **Low-latency serving**: TensorFlow Serving, TorchServe, or Triton Inference Server. GPU-accelerated, batching support, model versioning. Use for: image classification, LLM inference.

**4. CI/CD for ML Pipelines**

Model code, training pipelines, and serving infrastructure must be version-controlled and automatically tested. A change to a feature engineering function must trigger: unit tests (feature logic correctness), integration tests (pipeline runs end-to-end), model validation (new model meets performance threshold vs. champion), and a canary deployment (serve new model to 5% of traffic before full rollout).

**5. Monitoring: Data Drift and Model Degradation**

Production models degrade for two reasons:
- **Data drift**: Input feature distribution shifts (a new iOS update changes device_type distribution; pandemic changes user_behavior_score)
- **Concept drift**: The relationship between features and labels changes (pre-COVID vs. post-COVID credit risk models)

Monitoring tools: Evidently AI (open-source), WhyLabs, Arize. Key metrics: feature distribution shift (KL divergence, PSI), prediction distribution shift, label drift (when labels are delayed), and business metrics (CTR, conversion rate, fraud rate).

**6. The Full ML Pipeline: An Example**

Airbnb's search ranking model pipeline:
1. Airflow DAG extracts 90 days of search/booking events from Hive
2. Feature engineering: compute listing quality score, host response rate, price percentile, etc.
3. Train LightGBM model, log to MLflow
4. Offline evaluation: NDCG@10 must beat current production model by 0.5%
5. Push to model registry as "staging"
6. Shadow deploy: run new model in parallel with production, compare predictions
7. A/B test: serve 10% of traffic with new model, measure booking rate and revenue
8. Full rollout if A/B test shows statistically significant improvement`,
        keyPoints: [
          'Train/serve skew — computing features differently in training vs. production — is the most common silent failure in production ML; feature stores solve this by centralizing feature computation and providing point-in-time correct retrieval',
          'Experiment tracking (MLflow, W&B) is mandatory for reproducibility — without logging hyperparameters, code version, and evaluation metrics for every run, you cannot reconstruct which configuration produced the best model',
          'Model degradation has two root causes: data drift (input feature distributions change) and concept drift (the relationship between features and labels changes); each requires different detection and remediation strategies',
          'CI/CD for ML must include statistical tests: the new model must beat the champion model on an offline evaluation metric by a specified threshold before any deployment, not just pass unit tests',
          'Canary deployments (5-10% traffic to new model) before full rollout allow real-world validation while limiting blast radius — rolling back a bad model deployment is far cheaper than a global rollout failure',
        ],
        realWorldExample: `**Google's Production ML Infrastructure (TFX):** Google runs thousands of ML models in production across Search, Ads, YouTube, and Maps. Their internal ML platform (TFX — TensorFlow Extended) handles the full lifecycle: data validation (TFDV catches schema changes and distribution shifts before training), transformation (TFT ensures train/serve consistency), model training, model validation (comparing against baseline), and serving (TF Serving with auto-scaling). Google's Search ranking model is retrained continuously — new training data from user interactions feeds into a retraining pipeline that runs daily or on-trigger, with automatic rollback if the new model underperforms. The system handles model sizes from kilobytes (simple logistic regression for ads filtering) to hundreds of gigabytes (large language models for search quality). The entire infrastructure is described in the "Hidden Technical Debt in Machine Learning Systems" (Sculley et al., 2015), which remains the most-cited paper on production ML engineering.`,
        practiceQuestions: [
          'A fraud detection model was 94% accurate when deployed 6 months ago. Accuracy has dropped to 87%. Walk through your debugging process: what types of drift would you check for, what tools would you use, and what are the two most likely root causes in a payments context?',
          'Design the model serving infrastructure for a recommendation engine that must return personalized product recommendations in under 50ms for 100K requests per second. Specify the serving layer, caching strategy, and how you would handle model updates without downtime.',
          'You are adding a new feature (user_account_age_days) to a fraud model. Describe the full MLOps process from feature creation to production serving, including how you ensure train/serve consistency, how you evaluate whether the new feature improves model performance, and how you deploy without disrupting the existing model.',
        ],
      },
      {
        id: 'mlops-2',
        title: 'LLMs in Production: Fine-tuning, RAG, and Inference at Scale',
        content: `Large Language Models have transformed the AI engineering landscape. Building production LLM applications requires a new engineering stack: prompt engineering, retrieval-augmented generation, fine-tuning, evaluation, guardrails, and cost-optimized inference. This is the fastest-growing engineering discipline at every tech company, and the skills described here are what Anthropic, OpenAI, Google DeepMind, and every AI-native company hire for.

**The LLM Application Stack**

A production LLM application is far more than an API call to GPT-4 or Claude. It consists of:

1. **Retrieval system** (knowledge base): Semantic search over company documents, code, or domain data
2. **Prompt engineering layer**: System prompts, few-shot examples, chain-of-thought formatting
3. **LLM API / inference**: External (OpenAI, Anthropic, Google) or self-hosted (Llama 3, Mistral, Falcon)
4. **Output parsing and validation**: Structured output extraction, JSON parsing, guardrails
5. **Evaluation pipeline**: Automated and human evaluation of response quality
6. **Observability**: Logging, tracing, cost tracking per request

**Retrieval-Augmented Generation (RAG)**

RAG grounds LLM responses in specific, up-to-date knowledge rather than relying on training-time knowledge. Architecture:

1. **Indexing**: Chunk documents into ~512 token segments. Embed each chunk using an embedding model (OpenAI text-embedding-3-large, Cohere embed-v3, or self-hosted E5). Store embedding vectors in a vector database (Pinecone, Weaviate, Chroma, pgvector).

2. **Retrieval**: At query time, embed the user's question. Perform approximate nearest-neighbor (ANN) search in the vector DB to retrieve top-K most semantically similar chunks.

3. **Generation**: Construct a prompt: [System: You are a helpful assistant] + [Context: {retrieved chunks}] + [User: {question}]. Feed to LLM, generate response grounded in the retrieved context.

ANN algorithms: HNSW (Hierarchical Navigable Small World) gives ~0.995 recall at 10ms latency for 100M vectors. Deployed in Pinecone, Weaviate, and Milvus.

**Reranking**: After initial vector retrieval (top 50 candidates), use a cross-encoder reranker (Cohere Rerank, BGE reranker) to rescore and select top K (typically 5-10) for the LLM context. Rerankers are slower than ANN search but far more accurate for determining true relevance.

**Fine-tuning vs. RAG vs. Prompt Engineering**

Choosing the right adaptation strategy depends on what's missing:
- **Prompt engineering**: Fastest, no training cost. Works when the base model has the knowledge but needs formatting or persona guidance. Fails when domain knowledge is outside training data.
- **RAG**: Best for grounding in specific, updatable knowledge (company docs, recent data). Does not modify model weights. Easy to update (re-index new docs).
- **Fine-tuning**: Best for changing model behavior, style, or format; teaching a new reasoning pattern; optimizing latency/cost by distilling a large model into a smaller one. Requires labeled data (input-output pairs). Options:
  - **Full fine-tuning**: Update all weights. Expensive, catastrophic forgetting risk.
  - **LoRA (Low-Rank Adaptation)**: Add small trainable matrices to each layer, freeze original weights. 100-1000x fewer trainable parameters. The standard approach for fine-tuning LLMs.
  - **RLHF (Reinforcement Learning from Human Feedback)**: Use human preference labels to train a reward model, then fine-tune LLM using PPO to maximize reward. OpenAI used this to create InstructGPT → GPT-3.5.

**LLM Inference Optimization**

Serving LLMs at scale is expensive. Techniques to reduce cost and latency:
- **KV Cache**: Cache the key/value attention matrices from previous tokens to avoid recomputation. Standard in all production inference servers.
- **Batching**: Group multiple requests and process them together. Continuous batching (Orca algorithm) dynamically adds new requests to running batches, achieving 30x+ throughput improvements vs. static batching.
- **Quantization**: Reduce model weights from float32 to int8 or int4. 4-bit quantization reduces memory by 8x with ~2-5% quality degradation. Used in llama.cpp, AWQ, GPTQ.
- **Speculative decoding**: Use a small "draft" model to propose tokens, then verify with the large model. Achieves 2-3x speedup for common token sequences.
- **Distillation**: Train a smaller "student" model to mimic a larger "teacher" model. GPT-3.5 is a distilled version of GPT-4 for cost-sensitive applications.

**LLM Evaluation**

Evaluating LLMs is harder than evaluating traditional ML models (no single ground truth metric). Approaches:
- **ROUGE / BLEU**: N-gram overlap with reference answers. Weak — misses semantic equivalence.
- **LLM-as-judge**: Use GPT-4 or Claude to score responses for accuracy, helpfulness, harmlessness. Scalable but biased toward models similar to the judge.
- **Human evaluation**: Gold standard but expensive and slow.
- **Task-specific benchmarks**: MMLU (knowledge), HumanEval (coding), TruthfulQA (factuality), HellaSwag (commonsense).`,
        keyPoints: [
          'RAG grounds LLM responses in specific knowledge by embedding documents into a vector store and retrieving semantically similar chunks at query time — it does not modify model weights and can be updated by re-indexing',
          'LoRA (Low-Rank Adaptation) fine-tunes LLMs by adding small trainable matrices to each attention layer while freezing original weights — 100-1000x fewer trainable parameters than full fine-tuning with comparable quality',
          'Continuous batching (Orca algorithm) dynamically groups inference requests to maximize GPU utilization — achieving 30x throughput improvement over static batching for LLM serving',
          'LLM-as-judge evaluation (using GPT-4 or Claude to score outputs) scales evaluation to thousands of examples but introduces bias toward models similar to the judge model — use multiple judges and compare',
          'KV cache is the most impactful standard optimization for LLM inference — caching attention key/value matrices from previous tokens eliminates recomputation for all prior context on each new token generation',
        ],
        realWorldExample: `**Anthropic's Production LLM Infrastructure:** Anthropic deploys Claude across API and consumer products serving millions of requests per day. Their inference stack uses a combination of techniques: custom attention kernels optimized for their specific architecture, continuous batching for high-throughput serving, and multi-tier serving with different model sizes (Claude Haiku for low-latency, Claude Sonnet for balanced, Claude Opus for maximum quality) to match cost/quality tradeoffs per use case. For enterprise customers building RAG applications, Anthropic's Claude documentation recommends chunking strategies (512-1024 tokens, sentence-aware boundaries), hybrid retrieval (combining BM25 keyword search with dense vector search for better recall), and reranking before final context selection. The Constitutional AI (CAI) training method — using RLHF with AI-generated preference labels rather than only human labels — allowed scaling alignment training to larger datasets than pure human labeling would permit. This is now standard practice at AI labs building instruction-following models.`,
        practiceQuestions: [
          'Design a RAG system for a legal document Q&A application with 500,000 case documents. Walk through: chunking strategy, embedding model choice, vector database selection, retrieval approach (ANN + reranking), and how you would evaluate retrieval quality before integrating the LLM.',
          'A company fine-tuned Llama 3 (8B) on customer support conversations and deployed it. After 3 months, users report the model gives outdated product information. Should the solution be: (a) fine-tune again on new data, (b) add a RAG layer, or (c) improve the system prompt? Justify your answer.',
          'Explain continuous batching (Orca algorithm) for LLM inference. Why is static batching inefficient for LLM serving (hint: consider variable output lengths)? How does continuous batching achieve higher GPU utilization, and what trade-off does it introduce in latency?',
        ],
      },
    ],
  },
  {
    id: 'tech-product-management',
    title: 'Tech Product Management',
    description: 'Build and prioritize products that users love — learn the frameworks, metrics, and interview skills used by PMs at Google, Meta, Amazon, and every top technology company.',
    track: 'finance' as const,
    level: 'intermediate' as const,
    estimatedHours: 12,
    icon: 'layers',
    color: '#F59E0B',
    topics: [
      {
        id: 'pm-1',
        title: 'Product Strategy, Metrics, and Prioritization Frameworks',
        content: `Product management at top tech companies is the art of deciding what to build — and more importantly, what NOT to build. A Google PM manages a product roadmap competing for engineering resources against dozens of other priorities, must align stakeholders across design, engineering, legal, and marketing, and must demonstrate impact through metrics. The skills separating good PMs from great ones are: clear strategic thinking, metrics fluency, and ruthless prioritization.

**What Does a PM Actually Do?**

A PM is the CEO of their product area, without any direct authority over engineers or designers. They must influence through clarity of vision, quality of analysis, and strength of relationships. Daily work includes:
- Writing Product Requirement Documents (PRDs) that spec features with enough clarity for engineers to build them
- Running sprint planning and roadmap reviews
- Analyzing product metrics to understand user behavior and measure feature impact
- Running A/B tests to make shipping decisions data-driven
- Representing the customer's voice in internal debates
- Partnering with sales, legal, and ops to unblock product development

**The North Star Metric and Metric Trees**

Every product team needs a North Star Metric — a single metric that best captures the value delivered to customers and predicts long-term business success.

- **Facebook**: Daily Active Users (DAU) / Monthly Active Users (MAU) ratio (measures engagement depth)
- **Spotify**: Time spent listening per user per day
- **Airbnb**: Nights booked
- **Slack**: Messages sent per user per day
- **Netflix**: Hours streamed per member per week

The North Star metric is decomposed into a **metric tree** (input metrics that drive the North Star):

Airbnb nights booked = (# searches) × (search → listing view rate) × (listing view → request rate) × (request → approval rate) × (approval → booking rate)

Each node in the tree is an actionable lever. A PM proposing an improvement to "listing view → request rate" can directly tie their feature to the North Star.

**Prioritization: RICE, ICE, and Opportunity Scoring**

Frameworks for ranking competing features:

**RICE Score = (Reach × Impact × Confidence) / Effort**
- Reach: # users affected per quarter
- Impact: 0.25x (minimal) to 3x (massive)
- Confidence: 50% (guess) to 100% (solid data)
- Effort: person-months

**ICE Score = Impact × Confidence × Ease**
Simpler version used at growth teams (Sean Ellis / Reforge methodology).

**Opportunity Scoring (Ulwick)**: Survey customers on importance and satisfaction for each job-to-be-done. Opportunity = Importance + max(Importance − Satisfaction, 0). High-importance, low-satisfaction = underserved opportunity.

**MoSCoW**: Must have, Should have, Could have, Won't have. Used for sprint planning and release scoping.

**Product Sense: The "How Would You Improve X?" Framework**

Classic PM interview question: "How would you improve Google Maps?"

Framework:
1. **Clarify**: What does "improve" mean? More users? Better experience? Revenue?
2. **Users**: Who are the users? Travelers, commuters, businesses? What are their jobs-to-be-done?
3. **Problems**: What are the biggest pain points? (Parking search, indoor navigation, AR directions?)
4. **Solutions**: Brainstorm 5+ ideas without filtering. Then prioritize 2-3 with highest RICE.
5. **Tradeoffs**: What do you give up? Technical complexity, privacy concerns, monetization impact?
6. **Metrics**: How would you measure success? 7-day search success rate, navigation completion rate, DAU.

**A/B Testing for Product Decisions**

PMs at Google, Meta, and Amazon make shipping decisions based on A/B test results, not intuition. Key concepts:
- **Null hypothesis**: The treatment has no effect
- **Statistical power**: Probability of detecting a true effect (target: 80%)
- **Minimum detectable effect (MDE)**: The smallest effect worth detecting
- **Sample size calculation**: Given MDE and power, calculate required n
- **Guardrail metrics**: Metrics that must not regress (e.g., page load time, crash rate) even if the primary metric improves

A feature that improves clicks by 2% but increases page load time by 500ms (hurting engagement) should not ship. Guardrail metrics prevent optimizing one metric at the expense of user experience.`,
        keyPoints: [
          'The North Star Metric captures the core value delivered to users — Facebook\'s DAU/MAU engagement ratio, Airbnb\'s nights booked, Spotify\'s listening time per day — and metric trees decompose it into actionable input metrics',
          'RICE prioritization (Reach × Impact × Confidence / Effort) forces quantitative comparison of competing features and surfaces high-reach, low-effort wins that intuition might miss',
          'A/B tests require pre-calculated sample sizes based on minimum detectable effect and statistical power — launching an underpowered test and calling a non-significant result "no effect" is a common PM mistake',
          'Guardrail metrics prevent local optimization — a feature improving click-through rate but increasing page load time 500ms may net-negative user experience and must be rejected despite positive primary metric',
          'The PM interview "improve a product" framework: clarify the goal → segment users by job-to-be-done → identify pain points → brainstorm solutions → prioritize with RICE → specify success metrics',
        ],
        realWorldExample: `**Meta's Integrity Team and the Engagement Dilemma:** In 2017-2018, Meta's ranking teams ran A/B tests showing that increasing emotionally provocative content boosted engagement metrics (likes, comments, shares, time-on-site) by 5-8%. The North Star Metric (DAU engagement) would have rewarded shipping this change. However, several PMs and researchers flagged a counterargument: the content types driving engagement were divisive and harmful, potentially reducing long-term user trust and platform health. The decision — whether to optimize for short-term engagement or long-term platform health — became one of the most high-profile internal debates in Silicon Valley. It illustrates the central PM challenge: metric trees can be gamed; good product intuition requires recognizing when optimizing the measurable metric diverges from the real goal. Meta eventually introduced "Meaningful Social Interactions" as a new North Star to shift focus from passive consumption to active connection.`,
        practiceQuestions: [
          'You are the PM for Instagram Stories. Your North Star Metric is daily Stories views per user. Build a metric tree with 4 input metrics that directly compose to the North Star. For each input metric, propose one product initiative that would improve it.',
          'Google Maps is testing a new "Explore Nearby" feature. The A/B test shows +3% in Explore section opens, −1.5% in overall navigation starts, no change in DAU. Should you ship, iterate, or kill the feature? Walk through your reasoning using the North Star Metric and guardrail metric framework.',
          'You have 3 competing features for the next quarter: (A) social sharing integration (Reach: 50K users, Impact: 2x, Confidence: 70%, Effort: 3 months), (B) offline mode (Reach: 200K users, Impact: 1x, Confidence: 90%, Effort: 4 months), (C) AI recommendations (Reach: 500K users, Impact: 0.5x, Confidence: 40%, Effort: 6 months). Calculate RICE scores and decide your prioritization. What additional information would change your ranking?',
        ],
      },
      {
        id: 'pm-2',
        title: 'PM Interviews: Estimation, Design, and Strategy Questions',
        content: `Google, Meta, and Amazon PM interviews are among the most structured and rigorous interviews in tech. Candidates fail not because they don't have good ideas, but because they don't communicate in a structured, hypothesis-driven way. This topic covers the three major question types — estimation, product design, and strategy — with the frameworks that interviewers are looking for.

**Estimation Questions (Market Sizing / Fermi)**

"How many piano tuners are there in Chicago?" "How many Google searches happen per day?" "Estimate the market size for a ride-sharing app in India."

Interviewers test structured reasoning under uncertainty — not arithmetic. The right answer is a clearly stated set of assumptions leading to a reasonable estimate.

**Framework:**
1. Clarify: What exactly are we estimating? What time frame?
2. Break it down: Identify the key variables
3. Estimate each variable: Use population statistics, conversion rates, usage rates
4. Calculate and sanity-check: Does the answer seem plausible?

**Example: How many Uber rides happen in the US daily?**
- US adult population: ~260M
- % who use ride-sharing: ~15% (39M active users)
- Average rides per user per month: ~2 → 78M rides/month → ~2.6M rides/day
- Cross-check: Uber reportedly does ~6M rides/day globally, US is probably 40-50% → ~2.5-3M. Close.

**Product Design Questions**

"Design an alarm clock for the visually impaired." "Build a product for elderly users to stay connected with family." "Design LinkedIn for college freshmen."

**Framework:**
1. **Clarify constraints**: Platform (mobile/web), geography, time frame?
2. **Define the user**: Create 2-3 user personas with specific needs
3. **Identify pain points**: What are their top 3 frustrations with current solutions?
4. **Prioritize**: Which user segment and which pain point has highest impact?
5. **Design solutions**: For the prioritized pain point, propose 3+ concrete features
6. **Measure success**: Primary metric, guardrail metrics, timeline

Strong candidates avoid generic "add AI features" suggestions. They name specific UX decisions, explain the user behavior driving those decisions, and articulate tradeoffs.

**Strategy Questions**

"Should Google launch a social network?" "Meta is seeing declining engagement in 18-25 year olds. What would you do?" "Should Airbnb move into long-term rentals?"

**Framework:**
1. **Understand the goal**: Revenue? Engagement? Strategic position?
2. **Analyze the opportunity**: Market size, user need, competitive landscape
3. **Evaluate strategic fit**: Does it align with core competencies? What are the risks?
4. **Propose a path**: Recommended approach with specific milestones
5. **Counter-arguments**: Steelman the opposing view before dismissing it

"Should Google launch a social network?" Structure:
- Google has failed twice (Google+ shut down 2019, Google Buzz failed). Why would this time be different?
- The strategic question: Google's search dominance is threatened by social discovery (TikTok, Instagram replacing search for product discovery). Google needs social signals for ranking.
- But: Building social networks from scratch is extremely hard. Users do not switch from entrenched networks. Google's strength is information organization, not social graph creation.
- Recommendation: Rather than building a new social network, integrate social signals via partnerships or acquisitions (acquire Reddit for community/social signals) and strengthen YouTube as the social video platform Google already owns.

**Behavioral Questions for PM Roles**

"Tell me about a product you launched end-to-end." "Describe a time you had to make a decision with incomplete data." "Tell me about a time you disagreed with an engineer on a technical decision."

Use the **STAR framework** (Situation, Task, Action, Result), but PM-specific: always quantify the result (we improved CTR by 12%, reducing churn by 8%), always mention the cross-functional collaboration, and always reflect on what you would do differently.

**Amazon's Leadership Principles in PM Interviews**

Amazon's PM interviews explicitly map questions to their 16 Leadership Principles. Most commonly tested:
- **Customer Obsession**: "Tell me about a time you prioritized the customer over internal stakeholders"
- **Dive Deep**: "Tell me about a time you found a root cause others missed" (have a data-driven story ready)
- **Bias for Action**: "Tell me about a decision you made under time pressure with limited data"
- **Disagree and Commit**: "Tell me about a time you disagreed with your manager but executed on their decision anyway"

Prepare 8-10 STAR stories that can flex across multiple principles. Specific numbers and outcomes are essential — vague impact ("we improved user experience") fails; specific impact ("we reduced checkout abandonment by 14%, equivalent to $2.3M annual revenue") succeeds.`,
        keyPoints: [
          'Estimation questions test structured reasoning, not arithmetic — clearly state assumptions, break into estimable components, calculate, then cross-check against known benchmarks',
          'Product design frameworks must segment users into specific personas before generating solutions — "users" is too broad; "commuters who use transit for the last mile" enables specific, testable solutions',
          'Strategy questions require steelmanning the opposing view before recommending — saying "one might argue against this because X, but I recommend Y because Z" demonstrates intellectual honesty that interviewers value',
          'Amazon PM interviews map to Leadership Principles — prepare explicit STAR stories for Customer Obsession, Dive Deep, Disagree and Commit, and Bias for Action with specific quantified outcomes',
          'Behavioral PM stories require quantified results: "improved CTR by 12%" and "reduced churn by 8% equivalent to $2.3M ARR" are strong; "improved user experience" and "had a positive impact" are instant red flags',
        ],
        realWorldExample: `**Google's APM Program and Sundar Pichai's Philosophy:** Google's Associate Product Manager (APM) program, founded by Marissa Mayer, is the most prestigious entry-level PM program in tech and is responsible for launching careers of executives across Silicon Valley (including many CEOs). Google's PM interview is notoriously rigorous: 5-6 rounds covering estimation, product design, analytical (metrics and A/B testing), strategy, and leadership. The most common failure mode: candidates propose features without first establishing user needs and measuring success. Google's PM philosophy, reflected in their OKR (Objectives and Key Results) system invented by Andy Grove and brought to Google by John Doerr, centers on measurable outcomes over outputs. Sundar Pichai, before becoming CEO, was the PM who launched Google Chrome. His success was driven by a clear metric (browser market share), user-centric decisions (speed and simplicity over features), and disciplined execution. The Chrome PM's decision to measure success by "time to open a new tab" rather than "features shipped" exemplifies Google PM thinking.`,
        practiceQuestions: [
          'Estimate the total annual revenue of the App Store in the United States. Walk through your assumptions for number of iPhone users, percentage who pay for apps, average annual spend per paying user, and Apple\'s 30% commission. Cross-check your estimate against any benchmark you know.',
          '"Design a product to help remote workers stay connected with their teams." Walk through the full product design framework: clarify, define user personas, identify pain points, prioritize one segment and pain point, propose 3 solutions, and specify the primary success metric.',
          'You are the PM at Netflix. Engagement (hours watched/user/week) is flat, but subscriber count is growing. The CEO asks if this is a problem. Walk through your analysis: is flat engagement per user concerning? What factors could explain it? What 3 analyses would you run, and what actions would you take based on each possible finding?',
        ],
      },
    ],
  },
];
