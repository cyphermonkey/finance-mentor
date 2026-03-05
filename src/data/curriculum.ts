import type { Module, Track } from '../types';
import { newModules } from './newModules';
import { quantCurriculum } from './quantCurriculum';
import { techEntrepModules } from './techEntrepModules';

const baseCurriculum: Module[] = [
  // ─── FINANCE TRACK ───────────────────────────────────────────────
  {
    id: 'fin-accounting',
    title: 'Accounting Fundamentals',
    description: 'Master the language of business — income statements, balance sheets, and cash flows used by every analyst at Goldman Sachs, JP Morgan, and every PE firm.',
    track: 'finance',
    level: 'beginner',
    estimatedHours: 8,
    icon: '📊',
    color: '#3D6FE8',
    topics: [
      {
        id: 'fin-acc-1',
        title: 'The Income Statement',
        content: `The income statement answers one question: **did the company make money?** It covers a period of time (a quarter or year) and shows revenue flowing down to net income after all expenses.

Think of it like this: Amazon made $575B in revenue in 2023. After paying for goods sold, employees, AWS data centers, R&D, and interest on debt — it netted $30B. That journey from $575B to $30B *is* the income statement.

**The Core Structure:**
- **Revenue (Top Line)**: All money earned from selling products/services
- **Cost of Revenue (COGS)**: Direct costs of producing what was sold
- **Gross Profit**: Revenue − COGS. This is the fundamental product margin.
- **Operating Expenses (OpEx)**: R&D, Sales & Marketing, G&A — costs to run the business
- **EBITDA**: Earnings Before Interest, Tax, Depreciation, Amortization — the "operating cash proxy" loved by PE investors
- **EBIT (Operating Income)**: After depreciation and amortization
- **Net Income (Bottom Line)**: After interest and taxes — what goes to shareholders

**Why Analysts Care:**
- **Gross Margin** = Gross Profit / Revenue → Apple runs 44%, Amazon AWS runs 63%
- **EBITDA Margin** = EBITDA / Revenue → Software companies average 25-35%
- **Net Margin** = Net Income / Revenue → Banks target 20%+`,
        keyPoints: [
          'Revenue recognition: when earned, not when cash received (accrual accounting)',
          'Gross margin reveals pricing power and competitive position',
          'EBITDA is used in LBO models and valuation multiples (EV/EBITDA)',
          'Non-cash charges (D&A) reduce reported income but not cash — critical distinction',
          'Warren Buffett focuses on pre-tax, pre-interest owner earnings over GAAP net income',
        ],
        realWorldExample: `**Netflix 2022 Crisis:** Netflix reported a net loss in 2022 despite $32B revenue. Why? Content amortization — when Netflix spends $17B making shows, it capitalizes that cost and amortizes it over years. This creates massive non-cash charges that depress net income but don't hurt cash. Analysts who understood this distinction bought the dip. By 2023, Netflix generated $7B in free cash flow while reporting modest net income. The income statement alone told an incomplete story.`,
        practiceQuestions: [
          'Apple reports $120B revenue and $75B COGS. Calculate gross profit and gross margin.',
          'Why might a fast-growing SaaS company report a net loss despite strong revenue growth?',
          "Microsoft's EBITDA was $105B on $225B revenue in FY2024. What is the EBITDA margin, and what does it tell you?",
        ],
      },
      {
        id: 'fin-acc-2',
        title: 'The Balance Sheet',
        content: `The balance sheet is a photograph of the company's financial position at a single moment in time. It answers: **what does the company own, and how did it pay for those things?**

The fundamental equation: **Assets = Liabilities + Equity**

This equation never breaks. If assets increase, either liabilities or equity must increase by the same amount. This is double-entry accounting — every transaction has two sides.

**Assets (what you own):**
- *Current Assets*: Cash, Accounts Receivable (AR), Inventory — convertible to cash within 12 months
- *Non-Current Assets*: Property, Plant & Equipment (PP&E), Intangibles (brands, patents), Goodwill

**Liabilities (what you owe):**
- *Current Liabilities*: Accounts Payable (AP), short-term debt, accrued expenses — due within 12 months
- *Non-Current Liabilities*: Long-term debt, deferred revenue, pension obligations

**Equity (what's left for owners):**
- Paid-in Capital: what shareholders invested
- Retained Earnings: accumulated profits not paid as dividends
- Treasury Stock: shares bought back (reduces equity)`,
        keyPoints: [
          'Working Capital = Current Assets − Current Liabilities → measures short-term financial health',
          'Goodwill appears when a company pays more than book value in an acquisition (M&A premium)',
          'A company can be profitable but bankrupt if it runs out of cash — liquidity matters',
          'Debt/Equity ratio measures financial leverage — PE-backed companies often run 4-6x',
          'Apple had $162B in cash on its balance sheet in 2020 — more than most countries\' GDP',
        ],
        realWorldExample: `**WeWork's Balance Sheet Problem (2019):** WeWork filed for an IPO with $47B in long-term lease obligations (non-current liabilities) against only $2.5B in cash and $2B in equity. The balance sheet screamed insolvency — every dollar of equity was leveraged 23x with lease obligations. Goldman Sachs analysts spotted this immediately. When SoftBank's valuation was exposed as $47B fiction, the IPO collapsed. The balance sheet told the truth months before the headlines did.`,
        practiceQuestions: [
          'A company has $100M current assets and $60M current liabilities. What is working capital? Is this healthy?',
          'Tesla acquired SolarCity for $2.6B when SolarCity had $1.2B book value. How much goodwill was created?',
          "Why does Apple's equity ($65B) look small relative to its $3T market cap?",
        ],
      },
      {
        id: 'fin-acc-3',
        title: 'Cash Flow Statement',
        content: `The cash flow statement is the most important financial statement — and the most ignored by beginners. It answers: **where did the cash actually go?**

A company can be profitable (income statement) and solvent (balance sheet) yet still run out of cash and go bankrupt. Enron was "profitable" for years before it collapsed. The cash flow statement reveals truth.

**Three Sections:**

**1. Operating Cash Flow (OCF)** — Cash from running the business
- Starts with Net Income, adjusts for non-cash items (add back D&A), and changes in working capital
- The #1 metric for Buffett: can the business generate cash without needing constant capital?

**2. Investing Cash Flow** — Cash spent on growth
- Capital Expenditures (CapEx): buying PP&E (factories, servers, stores)
- Acquisitions: paying cash for other companies
- Usually negative for growing companies

**3. Financing Cash Flow** — Cash flows with capital providers
- Debt issuance/repayment
- Equity raises / share buybacks
- Dividends paid

**Free Cash Flow (FCF) = OCF − CapEx** — the gold standard metric. Amazon, Apple, Google all optimize for FCF.`,
        keyPoints: [
          'FCF = Operating Cash Flow − CapEx. This is what PE firms value in LBO models.',
          'High FCF + low CapEx = "capital-light" business model (software, asset management)',
          'High CapEx/revenue = capital-intensive (airlines, utilities, semiconductors)',
          'Negative FCF isn\'t always bad — Amazon invested FCF into AWS infrastructure for 15 years',
          'Gordon Gekko was wrong about cash — "Greed is good" but FCF is better',
        ],
        realWorldExample: `**Amazon's 20-Year FCF Investment (2000-2020):** Amazon reported near-zero or negative FCF for most of the 2000s. The market misunderstood: every dollar of FCF was being reinvested into AWS, fulfillment centers, and logistics. By 2022, AWS alone generated $22B in operating income on $62B revenue — a 35% margin. Jeff Bezos told shareholders to ignore GAAP earnings and focus on FCF per share. That bet turned $10K invested in Amazon in 2001 into $3.2M by 2021.`,
        practiceQuestions: [
          'A company has $50M net income, $15M D&A, and $20M CapEx. What is FCF?',
          'Why would a software company have much higher FCF than a steel manufacturer with the same revenue?',
          'Netflix had negative FCF for years while being "profitable." Explain why using the cash flow statement.',
        ],
      },
      {
        id: 'fin-acc-4',
        title: 'Financial Ratio Analysis',
        content: `Ratios transform raw numbers into comparative intelligence. They let you answer: is this company healthy? Is it better than competitors? Is it cheap or expensive?

**Liquidity Ratios** — Can it survive short-term?
- Current Ratio = Current Assets / Current Liabilities (healthy: > 1.5)
- Quick Ratio = (Cash + AR) / Current Liabilities (removes inventory)

**Profitability Ratios** — How efficient is the business?
- Return on Equity (ROE) = Net Income / Shareholders' Equity → Buffett wants > 15% consistently
- Return on Assets (ROA) = Net Income / Total Assets
- Return on Invested Capital (ROIC) = NOPAT / Invested Capital → the ultimate efficiency metric

**Leverage Ratios** — How much debt?
- Net Debt/EBITDA = (Total Debt − Cash) / EBITDA → PE firms target 4-6x in LBOs
- Interest Coverage = EBIT / Interest Expense → creditors want > 3x

**Efficiency Ratios** — How well does it use assets?
- Days Sales Outstanding (DSO) = AR / (Revenue/365) → lower is better
- Inventory Turnover = COGS / Inventory → Walmart turns inventory every 40 days

**Valuation Ratios** — Is it cheap?
- P/E = Stock Price / EPS → S&P 500 average: 22x
- EV/EBITDA = Enterprise Value / EBITDA → M&A transactions average 10-15x
- P/B = Market Cap / Book Value → banks trade at 1-2x`,
        keyPoints: [
          'ROIC vs WACC is the key value creation test: if ROIC > WACC, the company creates value',
          'Net Debt/EBITDA below 2x = conservative; above 4x = leveraged (typical LBO)',
          'P/E is useless for companies with no earnings — use EV/Revenue or EV/EBITDA',
          'Banks are valued on P/B (book value) not P/E due to the nature of their assets',
          'Compare ratios vs. peers in same industry — not across sectors',
        ],
        realWorldExample: `**Apple's Extraordinary ROE:** Apple's 2023 ROE was 175% — mathematically absurd but real. How? Apple has spent $600B+ buying back stock, shrinking its equity base to nearly zero. With $97B net income on minimal equity, ROE explodes. This is financial engineering in action. A smart analyst sees this and looks at ROIC instead ($97B / $250B invested capital = 38.8%). That number is genuinely world-class and reflects Apple's true competitive power.`,
        practiceQuestions: [
          'Company A: Net Income $50M, Equity $200M. Company B: Net Income $80M, Equity $600M. Which is more efficient?',
          'A company has Net Debt/EBITDA of 6x. Is this a concern? In what scenario is this acceptable?',
          'Why is EV/EBITDA preferred over P/E in M&A transactions?',
        ],
      },
    ],
  },

  {
    id: 'fin-valuation',
    title: 'Valuation Masterclass',
    description: 'Learn the three core valuation methods used by Goldman Sachs, Lazard, and every top-tier bank to price deals worth billions.',
    track: 'finance',
    level: 'intermediate',
    estimatedHours: 12,
    icon: '💎',
    color: '#E8A83E',
    topics: [
      {
        id: 'fin-val-1',
        title: 'Discounted Cash Flow (DCF) Analysis',
        content: `The DCF is the most intellectually rigorous valuation method. It says: **a company is worth the present value of all future cash flows it will ever generate.**

The core concept: $1 today is worth more than $1 tomorrow (time value of money). If I can earn 10% annually, $1 today becomes $1.10 in a year. Conversely, $1.10 received in a year is worth $1 today at a 10% discount rate.

**DCF Formula:** Value = Σ [FCFt / (1+r)^t] + Terminal Value / (1+r)^n

**Step-by-Step DCF:**

1. **Project Free Cash Flows** (usually 5-10 years)
   - Revenue growth assumptions (analyst consensus, industry data)
   - EBIT margins (historical + improvement thesis)
   - CapEx and working capital changes
   - FCF = EBIT(1-tax) + D&A − CapEx − ΔNWC

2. **Calculate WACC (Discount Rate)**
   - Cost of Equity (CAPM): rf + β(rm − rf)
   - Cost of Debt: Yield-to-Maturity × (1 − tax rate)
   - WACC = (E/V × Re) + (D/V × Rd)
   - Typical WACC: 8-12% for most companies

3. **Terminal Value** (accounts for 60-80% of total DCF value!)
   - Gordon Growth Model: FCF × (1+g) / (WACC − g)
   - Exit Multiple: FCFn × EV/EBITDA exit multiple
   - Terminal growth rate: typically 2-3% (GDP growth)

4. **Discount and Sum**
   - Add PV of projected FCFs + PV of Terminal Value = Enterprise Value
   - Subtract Net Debt → Equity Value
   - Divide by shares outstanding → Price per share`,
        keyPoints: [
          'Terminal Value typically represents 60-80% of total DCF value — tiny assumption changes have massive impact',
          'WACC = opportunity cost of capital; higher risk = higher discount rate = lower valuation',
          'DCF is only as good as its assumptions — "garbage in, garbage out"',
          'Sensitivity analysis (data tables) is mandatory to stress-test key assumptions',
          'Buffett: "I never use a discount rate higher than 10% — I just use certainty as my margin of safety"',
        ],
        realWorldExample: `**When DCF Failed: Amazon in 2001:** At the height of dotcom crash, any DCF of Amazon using then-current cash flows (deeply negative) would have said it was worthless or worse. Traditional analysts trashed it. Jeff Bezos and a few believers modeled what Amazon could earn once scale was achieved. That terminal value thesis — applied with conviction — turned a $4 stock into $180 by 2010, $3,500 by 2021. DCF rewards the analyst who can model the future, not just extrapolate the present.`,
        practiceQuestions: [
          'A company generates $100M FCF growing at 15% for 5 years, then 3% in perpetuity. WACC is 10%. Estimate enterprise value.',
          'What happens to a DCF if WACC increases from 10% to 12%? Which companies are most affected?',
          'Why do high-growth tech companies (Tesla, early Amazon) often trade at premiums to their DCF value?',
        ],
      },
      {
        id: 'fin-val-2',
        title: 'Comparable Company Analysis (Comps)',
        content: `Comps is the most widely used valuation method on Wall Street because it's fast, market-based, and reflects what investors are actually paying for similar assets today.

The logic: if five similar companies trade at 15x EBITDA, and our target earns $200M EBITDA, it should be worth approximately $3B.

**Building a Comps Set:**
1. Define "comparable" — same industry, similar size, similar business model, similar growth profile
2. Screen for public companies (Bloomberg, FactSet, Capital IQ)
3. Gather financial data: Revenue, EBITDA, EBIT, EPS, FCF (LTM and forward estimates)

**Key Multiples:**
- **EV/Revenue**: For early-stage or unprofitable companies
- **EV/EBITDA**: Most common in M&A; typically 8-15x for mature companies; 20-30x for high-growth
- **EV/EBIT**: Accounts for capex differences between companies
- **P/E**: Common for mature, profitable companies
- **P/Book**: Banks and insurance companies

**The Spread:**
Best analysts don't just find "the number" — they explain *why* the target deserves a premium or discount to peers:
- Higher growth rate → premium multiple
- Stronger margins → premium multiple
- Better management team/brand → premium
- Smaller size, less liquidity → discount`,
        keyPoints: [
          'LTM (Last Twelve Months) vs. NTM (Next Twelve Months) — acquirers pay for the future, not the past',
          'Enterprise Value = Market Cap + Net Debt (includes debt, excludes cash)',
          'Calendarize financials if peers have different fiscal year ends',
          'Size premium/discount: small-caps trade at 2-3x EBITDA discount to large-caps',
          'Google paid 8x revenue for YouTube in 2006 — the comps were worthless; it was a strategic bet',
        ],
        realWorldExample: `**Microsoft's Acquisition of LinkedIn (2016, $26B):** Microsoft's bankers at Goldman Sachs built a comps set including Twitter, Facebook, Snap, and Salesforce. LinkedIn's LTM EV/Revenue was 7.4x. Microsoft paid 12x revenue — a 62% premium to comps. Why? LinkedIn's unique data moat (professional graph), 433M users, and integration synergies with Office 365 justified the premium. The bankers had to articulate exactly why LinkedIn deserved to trade above every comp — that's the skill.`,
        practiceQuestions: [
          'Build a mini-comps for a payment company. What multiples would you use and why?',
          'A company trades at 8x EBITDA but its fastest-growing competitor trades at 20x. How do you explain this?',
          'When would you use P/E vs. EV/EBITDA to value a company? Give examples of each.',
        ],
      },
      {
        id: 'fin-val-3',
        title: 'LBO Analysis — The Private Equity Way',
        content: `The LBO (Leveraged Buyout) model is how private equity firms like Blackstone, KKR, and Apollo think about buying companies. It answers: at what price can we buy this company, load it with debt, improve it, and sell it in 5 years for a 20%+ annual return?

**LBO Mechanics:**
A PE fund buys a company using ~30-40% equity and 60-70% debt. The debt (leverage) amplifies returns — just like buying a house with a mortgage.

**Example:**
- Buy a company for $1B (10x $100M EBITDA)
- Finance with: $350M PE equity + $650M debt
- Improve EBITDA to $150M over 5 years
- Sell at same 10x multiple → $1.5B
- Repay $450M debt → $1.05B equity proceeds
- Return: 3x on $350M in 5 years = 25% IRR ✓

**IRR (Internal Rate of Return)** — PE's primary return metric:
- Top quartile PE: 20%+ IRR
- S&P 500 benchmark: ~10% IRR
- Minimum threshold: 15-20% IRR for a deal to proceed

**What Makes a Good LBO Candidate?**
- Stable, predictable cash flows (pays down debt reliably)
- Strong market position (defensible earnings)
- Low CapEx requirements (more FCF for debt service)
- Underperforming management (PE can add operational value)
- Non-core division of a large corporation (motivated seller)
- Fragmented market (roll-up opportunity)`,
        keyPoints: [
          'Leverage amplifies both gains AND losses — key risk management concept',
          'Debt paydown is a key value driver: each dollar of debt paid = dollar of equity value created',
          'Exit multiple expansion/contraction can make or break a deal thesis',
          'MOIC (Multiple on Invested Capital) = total proceeds / equity invested',
          'The KKR takeover of RJR Nabisco (1988, $25B) defined the modern LBO playbook',
        ],
        realWorldExample: `**Blackstone's Hilton Hotels LBO (2007, $26B):** Blackstone bought Hilton for $26B at the worst possible time — right before the 2008 financial crisis. Hotels crashed, occupancy collapsed. Blackstone could have lost everything. Instead, they used the downturn to clean up operations, cut costs, and expand internationally. When Hilton went public in 2013, Blackstone's $5.7B equity investment was worth $14B — a 2.5x return despite the financial crisis. The lesson: operational improvement and time horizon can overcome bad entry timing.`,
        practiceQuestions: [
          'PE buys a company for $500M (8x $62.5M EBITDA) with $350M debt. They sell at 9x EBITDA after EBITDA grows to $80M. What is the MOIC and approximate IRR?',
          'What happens to LBO returns if exit multiples compress from 10x to 7x EBITDA?',
          'Why do PE firms prefer companies with high FCF conversion rates?',
        ],
      },
    ],
  },

  {
    id: 'fin-ib',
    title: 'Investment Banking',
    description: 'How Goldman Sachs, Morgan Stanley, and Lazard structure deals — M&A, IPOs, debt raises, and the career path to Managing Director.',
    track: 'finance',
    level: 'intermediate',
    estimatedHours: 10,
    icon: '🏦',
    color: '#00C4B4',
    topics: [
      {
        id: 'fin-ib-1',
        title: 'How Investment Banking Works',
        content: `Investment banks are the deal-makers of capitalism. They connect companies that need capital with investors who have capital — and they charge handsomely for the introduction.

**The Three Core Services:**

**1. Advisory (M&A):** Help companies buy or sell other companies
- Buy-side: Advising acquirer on target selection, valuation, due diligence
- Sell-side: Advising target company through an auction process
- Fee: ~1% of deal value (on a $1B deal: $10M fee)

**2. Equity Capital Markets (ECM):** Help companies raise equity
- IPO (Initial Public Offering): First-ever public stock sale
- Follow-on / Secondary: Selling more shares post-IPO
- Fee: 3-7% of capital raised (on $500M IPO: $15-35M)

**3. Debt Capital Markets (DCM):** Help companies raise debt
- Investment-grade bonds, high-yield bonds, leveraged loans
- Structured credit (CLOs, MBS)
- Fee: 0.5-2% of issuance size

**The Deal Process (M&A Sell-Side):**
1. Pitch for mandate → win engagement letter
2. Prepare Confidential Information Memorandum (CIM) — the "book"
3. Teaser to potential buyers (anonymous)
4. First round bids from interested parties
5. Management presentations for shortlisted bidders
6. Final bids → select winner
7. Negotiate Purchase Agreement
8. Sign and close (3-6 months for large deals)`,
        keyPoints: [
          'Goldman Sachs M&A league table position is life-and-death for deal flow — rankings matter',
          'Bankers work 80-100 hours/week as analysts — it\'s a rite of passage, not a bug',
          'Relationship banking: the MD who plays golf with the CFO gets the mandate',
          'Conflict of interest: banks advise both sides of deals (with ethical walls)',
          'Boutiques (Lazard, Evercore, Centerview) compete on pure advice vs. bulge brackets on financing',
        ],
        realWorldExample: `**Facebook's Instagram Acquisition (2012, $1B):** Mark Zuckerberg negotiated this deal himself in 48 hours without bankers. Instagram had 13 employees and $0 revenue. Traditional valuation methods said it was worth maybe $100M on user metrics. Zuckerberg paid $1B in cash and stock — 10x the "rational" value. The strategic rationale: neutralize a potential competitor before it grew. By 2018, Instagram was estimated at $100B — a 100x return on the acquisition price. Sometimes the best deals bypass the bankers entirely.`,
        practiceQuestions: [
          'What is the difference between buy-side and sell-side advisory? Which is more lucrative?',
          'A company is doing a $2B IPO with 5% gross spread. How much does the bank earn? How is this split?',
          'Why would a company choose a boutique advisor (Lazard) over a bulge bracket (Goldman Sachs) for an M&A deal?',
        ],
      },
    ],
  },

  // ─── CONSULTING TRACK ─────────────────────────────────────────────
  {
    id: 'con-frameworks',
    title: 'Problem Solving & Frameworks',
    description: 'The mental models that McKinsey, BCG, and Bain use to crack any business problem in 30 minutes.',
    track: 'consulting',
    level: 'beginner',
    estimatedHours: 8,
    icon: '🧠',
    color: '#8B5CF6',
    topics: [
      {
        id: 'con-fw-1',
        title: 'MECE Thinking',
        content: `MECE (Mutually Exclusive, Collectively Exhaustive) is the single most important analytical concept you'll learn. It's how every McKinsey partner structures their thinking.

**Mutually Exclusive:** No overlap between categories. If you categorize revenue by product AND by geography, some items appear in both — that's not MECE.

**Collectively Exhaustive:** No gaps. All possibilities are covered. If you analyze "why sales declined" and your buckets are "price" and "volume" but forget "product mix," you've missed a category.

**Why It Matters:**
Without MECE, your analysis has holes. A client pays McKinsey $3M/month because they expect no holes.

**Issue Trees:**
The primary MECE tool. Take a complex problem → decompose into MECE branches → each branch into sub-branches → until you reach testable hypotheses.

**Example: "Profitability has declined. Why?"**
- Revenue (down?) → Price × Volume
  - Price: down? → Competition, discounting, mix shift
  - Volume: down? → Lost customers, lost market share, market contraction
- Costs (up?) → Fixed + Variable
  - Fixed: higher overhead, new facilities
  - Variable: input costs, labor, logistics

Each branch is mutually exclusive. Together they are collectively exhaustive — no possible cause is missed.`,
        keyPoints: [
          'MECE is not about being clever — it\'s about being comprehensive without redundancy',
          'Start broad, then drill down. Never jump to solutions before mapping the full problem space.',
          'The best consultants can make any problem MECE in under 5 minutes',
          'Common MECE structures: internal/external, short-term/long-term, financial/operational',
          '"If the answer exists, my tree should be able to find it" — McKinsey Partner mantra',
        ],
        realWorldExample: `**Turnaround of Continental Airlines (1994):** When consultants analyzed Continental's 3rd bankruptcy, they built a MECE issue tree: Revenue (yield management, network coverage, customer loyalty) vs. Cost (labor, fuel, maintenance, airport fees). They discovered Continental's revenue per seat mile was 15% below United's — not because of demand (planes were 95% full) but because of yield management failures (selling too many cheap seats too early). The MECE framework isolated the problem: a pricing software fix that added $500M/year in revenue with no cost change.`,
        practiceQuestions: [
          'Build a MECE issue tree for: "A retail company\'s profits have fallen 30% YoY."',
          'Why is "small customers vs. large customers vs. medium customers" not MECE?',
          'A consulting firm tells you "Our client\'s problem is either internal or external." Is this MECE? Collectively exhaustive?',
        ],
      },
      {
        id: 'con-fw-2',
        title: 'Core Business Frameworks',
        content: `Five frameworks that consultants at every tier use. Learn these cold — they are the vocabulary of strategic analysis.

**1. Porter's Five Forces** (Industry Attractiveness)
- Threat of New Entrants: How hard is it to enter the industry?
- Bargaining Power of Suppliers: Can suppliers squeeze margins?
- Bargaining Power of Buyers: Can customers push prices down?
- Threat of Substitutes: What alternatives exist?
- Competitive Rivalry: How intense is competition?

**2. BCG Growth-Share Matrix** (Portfolio Strategy)
- Stars: High growth, high market share → invest
- Cash Cows: Low growth, high share → harvest cash
- Question Marks: High growth, low share → bet or divest
- Dogs: Low growth, low share → divest

**3. McKinsey 7-S Framework** (Organizational Change)
Hard elements: Strategy, Structure, Systems
Soft elements: Shared Values, Skills, Staff, Style
All 7 must be aligned for transformation to succeed

**4. Value Chain Analysis** (Operational Efficiency)
Primary activities: Inbound logistics → Operations → Outbound → Marketing/Sales → Service
Support activities: Procurement, HR, Technology, Infrastructure

**5. SWOT** (Situation Assessment)
Internal: Strengths, Weaknesses
External: Opportunities, Threats
Used in case interviews as a quick-start structure`,
        keyPoints: [
          'Frameworks are starting points, not answers — always customize to the specific client situation',
          'The best consultants layer multiple frameworks to triangulate insights',
          'Porter\'s Five Forces is most useful for industry attractiveness assessments and market entry cases',
          'BCG Matrix is most useful for corporate parent companies with multiple business units',
          'Never name-drop a framework in a case interview — use the logic without the label',
        ],
        realWorldExample: `**Netflix Disrupting Blockbuster (Porter's Five Forces):** Applying Five Forces to DVD rental circa 2000: Strong competitive rivalry (Hollywood Video, Family Video), low barriers to entry (just requires inventory), high buyer power (customers rent once and return), no supplier power (studios needed distribution). Result: LOW industry attractiveness. Netflix's insight was to change the game entirely — shift to subscription streaming, collapsing all five forces in their favor. New entrants face AWS-scale infrastructure costs. Subscribers have switching costs. Netflix became the industry.`,
        practiceQuestions: [
          'Apply Porter\'s Five Forces to the airline industry. What does it tell you about profitability?',
          'A company\'s iPhone division is a Star. Its PC business is a Cash Cow. Their smartwatch is a Question Mark. What strategic recommendations follow from BCG Matrix?',
          'McKinsey is helping a client implement a new ERP system. Why might they use the 7-S Framework?',
        ],
      },
      {
        id: 'con-fw-3',
        title: 'Case Interview Mastery',
        content: `The case interview is the most important 45-minute conversation of your consulting career. McKinsey, BCG, and Bain use it to filter thousands of candidates down to a few hundred offers per year.

**Case Types:**
1. **Profitability Case**: Profits have declined — why?
2. **Market Entry**: Should we enter Market X?
3. **Growth Strategy**: How do we grow revenue by 20%?
4. **Pricing**: How should we price Product Y?
5. **M&A / Due Diligence**: Should we acquire Company Z?
6. **Operations**: How do we reduce costs by 15%?

**The CIRCLE Method:**
- **C**larify: Ask 2-3 clarifying questions (scope, baseline, objective)
- **I**nitial structure: Draw your issue tree on paper
- **R**oad map: State your approach out loud before diving in
- **C**alculate: Work through the math confidently, show work
- **L**ayer insights: As data comes in, update your hypothesis
- **E**nd strong: Summarize findings, give a clear recommendation

**The Golden Rules:**
1. Always structure before analyzing. Never start talking without a framework.
2. Communicate constantly. State every hypothesis and assumption.
3. Math accuracy matters, but math speed matters more.
4. Recommendations must be specific, not "it depends."
5. Push back on data that seems wrong — it might be a trick.`,
        keyPoints: [
          'McKinsey interviews for "problem solving ability, leadership impact, personal impact"',
          'BCG interviews for "analytical thinking, business sense, creative problem solving"',
          'Practice 50+ cases minimum before recruiting — no shortcuts',
          'Victor Cheng\'s "Case Interview Secrets" is the best preparation book',
          'Behavioral questions (Tell me about yourself, leadership examples) are 40% of the evaluation',
        ],
        realWorldExample: `**Real McKinsey Case: Retail Bank Profitability**\nSituation: A retail bank's ROE dropped from 18% to 12% over 3 years. Why?\nCandidate's approach: Revenue (net interest margin down? fee income down?) vs. Cost (credit losses up? operating expenses up?)\nData reveal: Net interest margin fell 0.8% as Fed rates dropped. But peer banks only fell 0.3% — meaning our client lost 0.5% vs. peers.\nDrilled down: Retail deposit pricing — competitor offered 0.5% more on savings accounts, triggering deposit outflow. Client was forced into higher-cost wholesale funding.\nRecommendation: Re-price deposits immediately (+0.3%), invest in mobile banking to reduce branch costs by $120M/year, targeting ROE back to 15% within 18 months.\nResult: This is exactly how McKinsey's engagement played out — 6 months, $15M fee, $400M profit improvement for the bank.`,
        practiceQuestions: [
          'Practice case: "Our client is a fast-food chain. Profits are down 25% this year. How would you approach this?"',
          'What clarifying questions would you ask before structuring a market entry case for a US pharma company entering India?',
          'How would you estimate the market size for electric scooters in Mumbai? Walk through your approach.',
        ],
      },
    ],
  },

  {
    id: 'con-strategy',
    title: 'Corporate Strategy',
    description: 'How the world\'s top companies make billion-dollar decisions — growth, M&A, portfolio management, and competitive strategy.',
    track: 'consulting',
    level: 'intermediate',
    estimatedHours: 10,
    icon: '♟️',
    color: '#E85D5D',
    topics: [
      {
        id: 'con-str-1',
        title: 'Competitive Strategy & Moats',
        content: `A competitive moat is a durable advantage that protects a company's profits from competition. Warren Buffett coined the term. Every strategy engagement starts by asking: does this company have a moat?

**The Five Types of Moats:**

**1. Network Effects** — Value increases as more people use it
- Facebook/Instagram: More users → more content → more users (winner-take-all)
- Visa/Mastercard: More merchants → more cardholders → more merchants
- Most powerful moat type. Extremely hard to break.

**2. Switching Costs** — Painful to leave
- Salesforce CRM: Company stores 10 years of customer data in it — switching means migrating millions of records
- Bloomberg Terminal: $25K/year, but traders can't function without it — no one wants to retrain
- Enterprise software in general (SAP, Oracle, Workday)

**3. Cost Advantages** — Structurally lower costs
- Amazon's scale: $1.4T in GMV means they negotiate terms no competitor can match
- Walmart's logistics: 150 distribution centers, each serving 90 stores within 65 miles
- Geico's direct-to-consumer model: 15% cost advantage vs. agent-based competitors

**4. Intangible Assets** — Brands, patents, regulatory licenses
- Coca-Cola brand: $87B brand value — consumers pay 40% premium over generic cola
- Pharmaceutical patents: 20-year monopoly on drug formulas
- Airport slots: LaGuardia's 37 daily slots worth $1B+ in constrained air market

**5. Efficient Scale** — Natural monopoly in a limited market
- Water utilities: Building a second pipe network is economically irrational
- Credit rating agencies (S&P, Moody's): Regulations require their ratings — three companies dominate globally`,
        keyPoints: [
          'The strongest moats combine multiple sources (Apple: brand + ecosystem switching costs + scale)',
          'Moats erode over time — Amazon\'s moat in books (1997) is worthless; AWS moat is enormous',
          'Moat width determines the pricing power and returns a company can sustain',
          'Strategy consultants spend 30% of engagements assessing whether the client HAS a moat and needs to defend it vs. lacks one and needs to build one',
          'Buffett: "Give me a fortress, not a sand castle" — invest in the moat before the product',
        ],
        realWorldExample: `**Google's Search Moat Stress Test:** In 2023, ChatGPT threatened Google's search moat for the first time in 20 years. Why is Google's moat so strong? 1) Network effect: 8.5B daily searches create a training dataset competitors cannot replicate. 2) Distribution: Google pays Apple $15B/year to be the default search engine on iPhones. 3) Advertiser switching costs: Google Ads manages $200B/year in ad spend — agencies have built entire practices around its tools. Microsoft's Bing gained 3% market share in 2023 despite massive ChatGPT investment. Google still has 91% share. Moats like this don't break in one year.`,
        practiceQuestions: [
          'What is Netflix\'s moat? How does it compare to Disney\'s moat in streaming?',
          'A regional bank has 40% local market share. What moat does it have? Is it defensible against JPMorgan expansion?',
          'Uber and Lyft have been competing for 10 years with no clear winner. Does either have a moat? Why or why not?',
        ],
      },
    ],
  },

  // ─── SKILLS TRACK ─────────────────────────────────────────────────
  {
    id: 'skill-excel',
    title: 'Excel & Financial Modeling',
    description: 'From basic formulas to 3-statement financial models used at Goldman Sachs and Blackstone. The #1 tool in finance.',
    track: 'skills',
    level: 'beginner',
    estimatedHours: 15,
    icon: '📗',
    color: '#2DD4BF',
    topics: [
      {
        id: 'skill-xl-1',
        title: 'Excel Fundamentals for Finance',
        content: `Excel is the universal language of finance. Every analyst at every bank, fund, and consulting firm uses it daily. Mastering it is non-negotiable.

**Keyboard Shortcuts — Memorize These First:**
- Ctrl+Shift+Arrow: Select to end of range
- Ctrl+D / Ctrl+R: Fill down / fill right
- F4: Absolute reference toggle ($A$1)
- Alt+E+S+V: Paste special (values only) — critical for models
- Ctrl+1: Format cells
- F2: Edit cell
- Ctrl+Z: Undo
- Alt+H+O+I: AutoFit column width

**Essential Functions:**
\`\`\`
VLOOKUP(lookup_value, table_array, col_index, FALSE)
INDEX(array, MATCH(lookup, lookup_array, 0))  ← better than VLOOKUP
SUMIF(range, criteria, sum_range)
IFERROR(formula, "Error text")
IF(condition, true_value, false_value)
NPV(rate, cash_flows)
IRR(cash_flows)
XNPV(rate, values, dates)  ← use for irregular cash flows
\`\`\`

**Model Best Practices:**
- Blue cells = hardcoded inputs (assumptions)
- Black cells = formulas (never hardcode into formulas)
- Separate sheets: Inputs → Calculations → Outputs
- Never hide rows — use grouping instead
- Error-check: Assets should always equal Liabilities + Equity`,
        keyPoints: [
          'NEVER hardcode numbers inside formulas — always reference input cells',
          'Color code consistently: blue inputs, black formulas, green checks, red errors',
          'Use INDEX/MATCH instead of VLOOKUP — it\'s more flexible and doesn\'t break when columns shift',
          'Circular references in financial models (e.g., interest on revolver) require iterative calculation',
          'Financial models should be: Flexible, Accurate, Structured, and Transparent (FAST)',
        ],
        realWorldExample: `**Goldman Sachs Analyst Day 1:** "Your first day, you'll get a model that's 12 tabs, 50,000 rows, and was built by an MD in 2008. You'll break it, fix it, break it again, and by week 3 you'll understand every formula. That first model will teach you more about Excel than any course." — Former Goldman Sachs Analyst. The trick: always understand WHY a formula is there before changing it.`,
        tools: ['Microsoft Excel', 'Google Sheets', 'Bloomberg Excel Add-in'],
        practiceQuestions: [
          'Build a simple income statement model in Excel with a revenue growth assumption and flowing margins.',
          'Use SUMIF to sum all revenue from "Product A" in a dataset with mixed product lines.',
          'Why would a circular reference appear in a DCF model, and how do you resolve it?',
        ],
      },
    ],
  },

  {
    id: 'skill-python',
    title: 'Python for Finance',
    description: 'Automate financial analysis, build quantitative models, and analyze data like a quant at Two Sigma or Citadel.',
    track: 'skills',
    level: 'intermediate',
    estimatedHours: 20,
    icon: '🐍',
    color: '#3D6FE8',
    topics: [
      {
        id: 'skill-py-1',
        title: 'Python for Financial Analysis',
        content: `Python has become the dominant language in quantitative finance, fintech, and data-driven consulting. Banks like Goldman Sachs use Python for risk models. Hedge funds like Two Sigma built entire investment processes in Python.

**Key Libraries:**
\`\`\`python
import pandas as pd        # Data manipulation (the Excel of Python)
import numpy as np         # Numerical computing
import matplotlib.pyplot as plt  # Charts
import seaborn as sns      # Statistical visualization
import yfinance as yf      # Download stock data for free
from scipy import stats    # Statistical functions
\`\`\`

**Financial Data Analysis:**
\`\`\`python
# Download Apple stock data
import yfinance as yf
aapl = yf.download('AAPL', start='2020-01-01', end='2024-01-01')

# Calculate daily returns
aapl['Returns'] = aapl['Close'].pct_change()

# Calculate annualized volatility
vol = aapl['Returns'].std() * (252 ** 0.5)  # 252 trading days

# Calculate Sharpe Ratio (assume risk-free = 4%)
sharpe = (aapl['Returns'].mean() * 252 - 0.04) / vol
print(f"Annualized Vol: {vol:.1%}, Sharpe: {sharpe:.2f}")
\`\`\`

**DCF Model in Python:**
\`\`\`python
def dcf_valuation(fcf_base, growth_rate, terminal_growth, wacc, years=5):
    fcfs = [fcf_base * (1 + growth_rate) ** t for t in range(1, years + 1)]
    pv_fcfs = sum(fcf / (1 + wacc) ** t for t, fcf in enumerate(fcfs, 1))
    terminal_value = fcfs[-1] * (1 + terminal_growth) / (wacc - terminal_growth)
    pv_terminal = terminal_value / (1 + wacc) ** years
    return pv_fcfs + pv_terminal

ev = dcf_valuation(100, 0.15, 0.03, 0.10)
print(f"Enterprise Value: \${ev:.0f}M")  # → $1,347M
\`\`\``,
        keyPoints: [
          'pandas DataFrame is the most important Python object for financial analysis',
          'yfinance and pandas-datareader provide free financial data for any public company',
          'Monte Carlo simulation in Python can stress-test DCF models with thousands of scenarios',
          'Bloomberg API (blpapi) is used professionally to feed Python models with live market data',
          'Quantitative hedge funds use Python for backtesting strategies before deploying capital',
        ],
        realWorldExample: `**Two Sigma's Python Edge:** Two Sigma manages $60B using systematic, quantitative strategies built almost entirely in Python. Their edge: they process petabytes of alternative data (satellite imagery of parking lots, credit card transaction data, social media sentiment) through Python pipelines to find signals invisible to fundamental analysts. A quantitative analyst there earns $500K-$1M+ annually. The skill that separates them from Wall Street traditional analysts? Python + statistics + intellectual curiosity.`,
        tools: ['Python 3.11+', 'Jupyter Notebook', 'pandas', 'numpy', 'yfinance', 'matplotlib'],
        practiceQuestions: [
          'Write Python code to download Apple and Microsoft stock data and calculate their 30-day rolling correlation.',
          'Build a simple portfolio optimizer in Python using two stocks. What is the efficient frontier?',
          'Use pandas to read a CSV of financial statements and calculate gross margin, EBITDA margin, and FCF for each year.',
        ],
      },
    ],
  },

  {
    id: 'skill-communication',
    title: 'Executive Communication',
    description: 'How to present ideas with the confidence of a McKinsey partner and write with the precision of a Goldman Sachs analyst.',
    track: 'skills',
    level: 'beginner',
    estimatedHours: 6,
    icon: '🎯',
    color: '#E8A83E',
    topics: [
      {
        id: 'skill-comm-1',
        title: 'The Pyramid Principle',
        content: `Barbara Minto's Pyramid Principle, developed at McKinsey in the 1970s, is how every top-tier consultant and banker structures written and verbal communication.

**The Core Idea:** Lead with the answer (top of pyramid), then support with arguments, then support arguments with data.

Most people (and most emails) bury the conclusion. They give context → data → analysis → conclusion. This wastes the reader's time and obscures the message.

**Pyramid Structure:**
1. **Governing Thought (Top):** The single key message. One sentence.
2. **Key Arguments (2nd Level):** 3 main reasons supporting the governing thought
3. **Supporting Data (Base):** Evidence, analysis, and facts for each argument

**Applied to a Board Presentation:**
❌ Wrong: "We analyzed market trends, customer data, and competitive dynamics. Looking at the data, several factors emerged. First, market growth is slowing. Second, competitors are gaining share. Third, our costs are rising. Therefore, we recommend exiting the European market."

✅ Right: "We recommend exiting the European market to protect margins. [1] Market growth has stalled at 2% vs. 15% in Asia. [2] Local competitors have structural cost advantages of 20%. [3] Redirecting capital to Asia will generate 3x the return within 5 years."

**The SCR Framework for Stories:**
- Situation: Establish shared context
- Complication: Introduce the tension or problem
- Resolution: Deliver the answer/recommendation`,
        keyPoints: [
          '"So what?" — every slide, paragraph, and sentence should have a "so what"',
          'BLUF (Bottom Line Up Front) — used in military and top-tier finance communication',
          'Vertical logic: the answer answers the question. Horizontal logic: arguments don\'t overlap.',
          'The Economist uses inverted pyramid in every article — headline = conclusion',
          'McKinsey slide format: every slide has a title that is the "takeaway message" — not a description',
        ],
        realWorldExample: `**McKinsey's Deck That Saved Continental Airlines:** McKinsey's 1994 engagement deck began with: "Continental will return to profitability in 18 months by fixing three controllable drivers." The first slide was the answer. Not "background," not "market overview" — the answer. CEO Gordon Bethune later said this clarity was what gave management the confidence to act. The pyramid saved a company by communicating truth without burying it in 80 slides of context.`,
        practiceQuestions: [
          'Restructure this conclusion using the Pyramid Principle: "After reviewing the data, considering market trends, looking at competitor actions, and analyzing internal capabilities, we believe it might be worth considering an expansion into Asia."',
          'Write a one-paragraph executive summary for a report recommending a company acquire a competitor. Use SCR structure.',
          'Why is "market overview" a bad slide title? What should it say instead?',
        ],
      },
    ],
  },

  // ─── REAL ESTATE TRACK ───────────────────────────────────────────────
  {
    id: 're-fundamentals',
    title: 'Real Estate Fundamentals',
    description: 'Master the core building blocks of real estate finance: property types, cap rates, NOI, and market cycles — the language every real estate professional must speak.',
    track: 'realestate',
    level: 'beginner',
    estimatedHours: 8,
    icon: '🏢',
    color: '#E8572A',
    topics: [
      {
        id: 're-fund-1',
        title: 'Property Types & Net Operating Income',
        content: `Real estate is not a single asset class — it's a collection of fundamentally different businesses that happen to involve physical property. Understanding this distinction is the first step to thinking like a real estate investor.

**The Four Core Property Types:**

**1. Multifamily (Apartments)**
- Revenue: Monthly rents from hundreds or thousands of individual tenants
- Risk profile: Diversified tenant base; no single tenant can destroy the investment
- Key metrics: Occupancy rate, rent per square foot, rent growth vs. market
- Example: A 200-unit apartment complex in Austin renting at $1,800/month

**2. Office**
- Revenue: Long-term leases (5-10 years) from corporate tenants
- Risk profile: Concentrated — one large tenant leaving can be catastrophic
- Post-COVID context: Structural vacancy problem in many markets; Class A vs. B/C bifurcation
- Key metric: Weighted Average Lease Expiry (WALE)

**3. Retail**
- Revenue: Anchor tenants (Walmart, Target) plus inline tenants pay percentage-of-sales rent
- Risk profile: E-commerce disruption; "dead malls" vs. grocery-anchored centers
- Survivors: Essential retail, experiential (fitness, dining, entertainment)

**4. Industrial / Logistics**
- Revenue: Warehouse, distribution center leases to Amazon, FedEx, third-party logistics
- The hottest sector post-COVID: e-commerce requires 3x the industrial space of traditional retail
- Cap rates compressed from 6-7% to 3-4% in 2020-2022

**Net Operating Income (NOI): The Foundation of Real Estate Value**

NOI = Gross Rental Income − Vacancy Loss − Operating Expenses

Operating expenses include: property management (8-10% of income), maintenance, insurance, property taxes, utilities for common areas. NOI does NOT include debt service (mortgage payments) or depreciation.

**Why NOI matters:** Real estate is valued on its income-generating capacity, not comparable sales alone. A building generating $2M NOI at a 5% cap rate is worth $40M. Grow NOI by 10% ($2.2M) and the building is worth $44M — $4M of value creation from better management.`,
        keyPoints: [
          'NOI = Gross Income − Vacancy − Operating Expenses; excludes debt service and depreciation',
          'Industrial real estate became the strongest sector post-COVID due to e-commerce demand',
          'Office faces structural headwinds from remote work; Class A downtown assets more resilient than suburban B/C',
          'Multifamily offers the most diversified income — 200 tenants vs. one corporate anchor',
          'Value creation in real estate is directly tied to NOI growth: a 10% NOI increase = 10% value increase at constant cap rate',
        ],
        realWorldExample: `**Prologis: Industrial Real Estate Dominance.** Prologis owns 1.2 billion square feet of logistics real estate globally — the landlord to Amazon, FedEx, UPS, and DHL. When e-commerce accelerated in 2020, Prologis was perfectly positioned. Its NOI grew from $3.1B in 2019 to $5.6B in 2023 — an 80% increase in four years. The stock tripled. Same buildings, same locations — but surging demand from online retail allowed rent increases of 40-60% on lease renewals. This is the power of operating in a supply-constrained sector with secular tailwinds.`,
        practiceQuestions: [
          'A 50-unit apartment building generates $72,000/month in gross rent, has 5% vacancy, and $180,000/year in operating expenses. Calculate annual NOI.',
          'An office building has a 40% occupancy rate after its anchor tenant left. What is the impact on NOI vs. a fully leased building, and what options does the owner have?',
          'Why would an investor pay a lower cap rate (higher price) for a fully leased industrial building vs. a partially vacant retail center with the same NOI?',
        ],
      },
      {
        id: 're-fund-2',
        title: 'Cap Rates & Real Estate Market Cycles',
        content: `The capitalization rate is the single most important concept in real estate valuation. Every sophisticated buyer, seller, and lender thinks in cap rates — and understanding what drives them separates amateurs from professionals.

**Cap Rate Formula:**
Cap Rate = NOI / Property Value (or Purchase Price)

Rearranged: Property Value = NOI / Cap Rate

A property generating $1M NOI at a 5% cap rate is worth $20M. At a 6% cap rate, it's worth $16.7M. That 1% difference in cap rate = $3.3M in value — on the same physical asset with the same income.

**What Drives Cap Rates:**

**1. Interest Rates** (the dominant factor)
- Cap rates must exceed borrowing costs for leverage to add value
- When 10-year Treasury yields rose from 1.5% to 4.5% in 2022-2023, real estate values fell 15-25%
- The spread between cap rates and risk-free rates is the "risk premium" for illiquidity and management

**2. Asset Quality and Location**
- Prime assets in gateway cities (NYC, SF, LA) trade at lower cap rates (4-5%) — more certain income
- Secondary markets and lower-quality assets: 6-9% cap rates
- Cap rate compression = value appreciation without any income growth

**3. Growth Expectations**
- Industrial real estate: cap rates compressed to 3-4% as investors priced in rent growth
- Strip mall retail: cap rates at 7-8% — cheap, but for a reason

**Real Estate Market Cycles:**
Real estate moves in roughly 18-year cycles (following credit and construction cycles):

**Phase 1 — Recovery:** Vacancy falling, rents stabilizing, little new construction. Smart money buys here.

**Phase 2 — Expansion:** Rents rising, new construction starts, lenders getting aggressive.

**Phase 3 — Hypersupply:** Too much new supply delivered, vacancy rising, rents softening.

**Phase 4 — Recession:** Distress, foreclosures, lenders retreating. Legendary buying opportunities.

**The 2008 cycle:** Hypersupply + credit collapse drove cap rates to 9-10%. By 2015, multifamily cap rates compressed to 4-5%. Patient capital buying in 2009-2011 generated 3-5x returns.`,
        keyPoints: [
          'Property Value = NOI / Cap Rate; a 1% cap rate shift can move property values 15-25%',
          'Cap rates track interest rates with a lag — rising rates compress real estate valuations',
          'Real estate moves in 18-year cycles: recovery, expansion, hypersupply, recession',
          'Cap rate compression (falling cap rates) creates value without any operational improvement',
          'The best real estate returns are made in the recession phase — distressed buying before the next cycle',
        ],
        realWorldExample: `**Blackstone Buying the 2008-2012 Trough.** During the 2008-2012 downturn, Blackstone deployed $8B buying single-family homes, office properties, and hotels at distressed cap rates of 8-10%. They purchased 80,000 single-family homes through Invitation Homes when nobody else would. As the cycle recovered and cap rates compressed back to 5-6%, those assets appreciated 60-80% without needing rent growth at all. Blackstone's real estate arm managed $337B by 2023. The lesson: in real estate, cycle awareness and capital availability during downturns is the most reliable path to superior returns.`,
        practiceQuestions: [
          'A multifamily property has $800K NOI and was purchased at a 4% cap rate. If cap rates expand to 6% and NOI stays flat, what is the new value? What is the percentage loss?',
          'Interest rates rise 200 basis points. Explain the likely impact on office, industrial, and multifamily cap rates differently.',
          'What phase of the real estate cycle are you likely in if: vacancy is 12%, rents are falling, lenders are tightening standards, and distressed sales are increasing?',
        ],
      },
    ],
  },

  {
    id: 're-modeling',
    title: 'Real Estate Modeling',
    description: 'Build institutional-grade real estate financial models: DCF for properties, LBO structures for real estate, and REIT valuation frameworks used by Blackstone and Brookfield.',
    track: 'realestate',
    level: 'intermediate',
    estimatedHours: 12,
    icon: '📐',
    color: '#E8572A',
    topics: [
      {
        id: 're-model-1',
        title: 'Real Estate DCF & Waterfall Modeling',
        content: `Real estate DCF is built differently from a corporate DCF. You're modeling a physical asset with a defined hold period, leverage, and a specific exit strategy — not a going-concern business.

**The Core Real Estate DCF Structure:**

**Step 1: Model the Income Statement (T-12 to T+10)**
- Gross Potential Rent (GPR): Market rent × total leasable area
- Vacancy & Credit Loss: Typically 5-10% depending on asset type
- Effective Gross Income (EGI) = GPR − Vacancy
- Operating Expenses: Management fees (5-8%), maintenance, insurance, taxes
- NOI = EGI − OpEx
- Capital Expenditure Reserves: Non-recurring improvements (roof, HVAC, parking)
- Net Cash Flow = NOI − CapEx Reserves

**Step 2: Model the Debt Structure**
- Loan-to-Value (LTV): Typically 60-75% for commercial real estate
- Interest Rate: Fixed or floating (SOFR + spread)
- Annual Debt Service = Principal + Interest
- Debt Service Coverage Ratio (DSCR) = NOI / Debt Service → lenders require >1.25x
- Levered Cash Flow = Net Cash Flow − Debt Service

**Step 3: Model the Exit**
- Exit NOI (Year 10 stabilized NOI)
- Exit Cap Rate (usually 25-50 bps above entry cap rate — expansion assumption)
- Gross Sale Proceeds = Exit NOI / Exit Cap Rate
- Net Sale Proceeds = Gross Sale Proceeds − Selling Costs (2-3%) − Remaining Debt Balance

**Step 4: Calculate Returns**
- Equity Multiple = Total Cash Returned / Total Equity Invested
- IRR = Discount rate that makes NPV of all cash flows = 0
- Target returns: Core (7-9% IRR), Core-Plus (10-13%), Value-Add (13-18%), Opportunistic (18-25%+)

**Levered vs. Unlevered Returns:**
Leverage amplifies returns in both directions. At 65% LTV on a deal with a 6% unleveraged return:
- If NOI grows and cap rates compress: levered IRR can reach 15-20%
- If NOI falls and cap rates expand: levered equity can be wiped out entirely`,
        keyPoints: [
          'DSCR = NOI / Debt Service; lenders require >1.25x — below this, the lender controls the asset',
          'Exit cap rate assumption is critical — a 0.5% wider exit cap rate can reduce IRR by 2-3 percentage points',
          'Leverage amplifies returns up and down; 65% LTV turns a 6% unleveraged return into 12-15% levered IRR',
          'Equity multiple and IRR tell different stories — a 2x equity multiple over 10 years is a 7% IRR; over 3 years it is 26%',
          'Capital reserve modeling separates professional from amateur underwriting — deferred maintenance destroys exit proceeds',
        ],
        realWorldExample: `**Starwood Capital Group's Distressed Hotel Acquisition.** In 2010, Starwood bought a 400-room hotel in Miami for $60M (well below replacement cost). They modeled: $8M NOI at stabilization, 5% exit cap rate = $160M exit value. With $40M equity and $20M debt, the levered IRR looked like 25%+ over a 5-year hold. They executed a value-add renovation ($15M CapEx), drove occupancy from 62% to 87%, and sold in 2015 for $145M — returning $105M on $40M equity (2.6x multiple, 22% IRR). The DCF model was the investment thesis made quantitative.`,
        practiceQuestions: [
          'A property has $2M NOI, 65% LTV at 5% interest rate on a $13M loan, and 30-year amortization. Calculate annual debt service and DSCR.',
          'You paid a 5.0% cap rate and plan to exit at a 5.5% cap rate in year 5. NOI grows from $1M to $1.15M. What is the exit value? How does it compare to cost?',
          'Why would a 7% unleveraged return with 65% LTV at 4% interest rate produce a very different IRR than the same deal with 65% LTV at 7% interest rate?',
        ],
      },
      {
        id: 're-model-2',
        title: 'REIT Analysis & Public Market Real Estate',
        content: `Real Estate Investment Trusts (REITs) are publicly traded companies that own income-producing real estate. They offer the only liquid way to invest in institutional-grade real estate — but they require a different analytical framework than private real estate.

**What Makes REITs Unique:**
- By law, REITs must distribute 90%+ of taxable income as dividends
- They pay no corporate income tax (pass-through structure)
- They depreciate real estate on a 39-year schedule (non-cash charge)
- This means GAAP net income drastically understates true cash generation

**The Core REIT Metrics:**

**Funds From Operations (FFO):**
FFO = Net Income + Depreciation − Gains on Property Sales

Depreciation is added back because real estate (if well-maintained) doesn't depreciate in reality. FFO is the REIT equivalent of EBITDA.

**Adjusted FFO (AFFO):**
AFFO = FFO − Recurring CapEx − Straight-Line Rent Adjustments

AFFO is closer to true distributable cash — the sustainable dividend capacity.

**Net Asset Value (NAV):**
NAV = (NOI / Market Cap Rate) − Net Debt

NAV is the sum-of-the-parts private market value of all properties minus debt. REITs trade at premiums (>NAV) when growing and discounts (<NAV) when cheap or distressed.

**REIT Valuation Multiples:**
- Price / FFO: like P/E but using FFO. S&P 500 averages 22x P/E; REITs trade at 15-22x P/FFO
- EV / EBITDA: also used; real estate EBITDA ≈ NOI
- Dividend Yield: income-focused investors buy when yield is attractive vs. 10-year Treasury

**REIT Sectors:**
- Data Centers (Equinix, Digital Realty): highest growth, driven by cloud and AI
- Industrial (Prologis, Duke Realty): e-commerce logistics demand
- Residential (AvalonBay, Invitation Homes): housing shortage tailwind
- Office (Boston Properties, Vornado): secular headwinds from remote work
- Healthcare (Welltower, Ventas): aging demographics driving senior housing demand`,
        keyPoints: [
          'FFO adds back real estate depreciation to net income — this is the primary REIT cash flow metric',
          'AFFO subtracts recurring CapEx from FFO — the true sustainable dividend capacity',
          'NAV is the private market value; premium/discount to NAV signals whether the REIT is cheap or expensive',
          'Data center and industrial REITs have secular growth tailwinds from AI/cloud and e-commerce',
          'REITs must pay 90%+ of taxable income as dividends — high yields are structural, not a sign of distress (usually)',
        ],
        realWorldExample: `**Equinix: The AI-Driven Data Center REIT.** Equinix owns 260+ data centers globally — the physical infrastructure that AWS, Azure, and Google Cloud run on. As AI demand exploded in 2023-2024, Equinix's pricing power surged: interconnection revenue grew 10%+ annually. Its FFO per share grew from $22 in 2019 to $35 in 2023. The stock trades at 28x AFFO — a premium to most REITs — because investors are paying for the secular AI infrastructure buildout. For analysts, AFFO growth was the signal; the premium multiple was the market's vote on the permanence of that growth.`,
        practiceQuestions: [
          'A REIT reports: Net Income $200M, Depreciation $400M, Gain on Sale $50M, Recurring CapEx $80M. Calculate FFO and AFFO.',
          'Prologis has 1B sq ft of industrial property, average cap rate of 4.5%, NOI of $6B, and net debt of $20B. Estimate NAV. Stock market cap is $110B. Is it at a premium or discount?',
          'If the 10-year Treasury rises from 2% to 5%, what happens to REIT dividend yields and valuations? Which REIT sectors would be most affected?',
        ],
      },
    ],
  },

  {
    id: 're-private-equity',
    title: 'Real Estate Private Equity',
    description: 'Advanced real estate finance: fund structures, waterfall distributions, joint venture mechanics, and development finance — the toolkit of Blackstone Real Estate, Brookfield, and CBRE IM.',
    track: 'realestate',
    level: 'advanced',
    estimatedHours: 14,
    icon: '🏗️',
    color: '#E8572A',
    topics: [
      {
        id: 're-pe-1',
        title: 'Fund Structures & Waterfall Models',
        content: `Real estate private equity funds are organized to align GP (general partner) and LP (limited partner) incentives through a specific distribution waterfall. Understanding this structure is essential to evaluating any REPE investment.

**Fund Structure:**
- **GP (General Partner):** The REPE firm (Blackstone Real Estate, Brookfield, etc.) — manages the fund, makes investment decisions, typically contributes 1-2% of capital
- **LP (Limited Partners):** Institutional investors (pension funds, sovereign wealth, endowments) — provide 98-99% of capital
- **Fund Life:** Typically 7-10 years with optional extensions
- **Blind Pool:** LPs commit capital without knowing specific assets — they trust the GP's strategy

**The Distribution Waterfall — How Profits Are Split:**

**Tier 1: Return of Capital**
LPs receive 100% of distributions until all invested capital is returned

**Tier 2: Preferred Return (Hurdle Rate)**
LPs receive 100% of distributions until they earn the preferred return (typically 8% IRR)
This is the GP's minimum performance requirement to earn carried interest

**Tier 3: GP Catch-Up**
GP receives 100% of distributions (up to a cap) to "catch up" to its full carried interest share
Typically structured so GP reaches 20% of total profits

**Tier 4: Carried Interest Split**
Remaining profits split 80/20 or 70/30 (LP / GP)
Carried interest is the GP's performance fee — the economic engine of REPE

**Example Waterfall:**
- Total equity invested: $100M (LP: $98M, GP: $2M)
- 8% preferred return + 20% carry
- Exit proceeds: $200M → $100M profit
- Tier 1: $100M invested capital returned
- Tier 2: $8M annual preferred return (assume 5-year hold = $40M accumulated)
- GP Catch-Up: GP receives $10M (so GP has 20% of $50M profit after preferred)
- Carry Split: Remaining $50M → $40M LP, $10M GP
- Total GP: $2M invested + $20M carry = 10x on GP capital`,
        keyPoints: [
          'The hurdle rate (typically 8%) is the minimum return LPs require before the GP earns carry',
          'Carried interest (carry) is 20% of profits above the hurdle — the primary GP compensation mechanism',
          'GP catch-up provisions ensure the GP earns exactly 20% of total profits once the hurdle is cleared',
          'Blind pool structures require LPs to trust the GP\'s track record before seeing specific assets',
          'GP capital co-investment (1-2%) aligns incentives — GPs lose real money if they make bad investments',
        ],
        realWorldExample: `**Blackstone Real Estate Partners X ($30.4B fund, 2019).** Blackstone raised $30.4B for BREP X — the largest real estate PE fund ever at the time. The structure: 1.5% management fee, 8% preferred return, 20% carried interest. LPs included CalPERS ($1B), Singapore GIC ($3B), and Abu Dhabi Investment Authority. On a $30B fund earning 15% net IRR over 7 years, the carry alone would be ~$6B for Blackstone — paid on profits above the 8% hurdle on $30B+ of invested capital. This is why Steve Schwarzman has a net worth of $40B+. The waterfall structure turns fund management into one of the most lucrative businesses in finance.`,
        practiceQuestions: [
          'LP invests $90M, GP invests $10M. 8% preferred return, 20% carried interest with full catch-up. Exit after 5 years at $200M total. Walk through the waterfall distribution.',
          'Why do LPs accept blind pool structures rather than deal-by-deal commitments? What are the tradeoffs?',
          'A REPE fund has a 2% management fee on committed capital ($1B fund). How much does the GP earn in management fees over a 5-year investment period, before any carried interest?',
        ],
      },
      {
        id: 're-pe-2',
        title: 'Real Estate Development Finance',
        content: `Development finance is the highest-risk, highest-return segment of real estate. You are creating value from nothing — bare land transformed into income-producing property. Understanding the financial mechanics separates developers from operators.

**Development vs. Acquisition:**
- Acquisition: buy an existing asset at market price (priced efficiently)
- Development: create an asset at cost, targeting a profit spread vs. stabilized value
- Profit spread = "development yield on cost" vs. "stabilized cap rate"

**The Profit Spread Concept:**
- If you build at a 7% yield on cost (Year 1 NOI / Total Cost)
- And market stabilized cap rate is 5%
- Profit spread = 2% → Value at stabilization = NOI / 0.05 = 40% more than cost
- This spread is the developer's profit margin for taking construction, lease-up, and market risk

**Development Finance Stack:**

**Senior Construction Loan (50-65% of total cost)**
- Usually floating rate (SOFR + 200-400 bps)
- Interest-only during construction; converts to permanent loan at stabilization
- Lender requires guarantees during construction (performance + completion)

**Mezzanine Debt (15-20% of total cost)**
- Higher cost (8-15%) but doesn't dilute equity
- Subordinated to senior loan; often provided by debt funds

**Equity (20-35% of total cost)**
- Developer/GP equity + LP equity
- Highest risk, highest return
- Developer often takes a promoted interest (carry on equity returns)

**The Pro Forma:**
Development pro formas model:
1. Construction costs (hard costs + soft costs + land)
2. Construction timeline (24-36 months typical for large projects)
3. Lease-up period (6-18 months to reach stabilized occupancy)
4. Stabilized NOI
5. Permanent financing at stabilization
6. Exit or hold decision

**Risk Factors in Development:**
- Cost overruns: construction inflation hit 30-40% in 2021-2022
- Schedule delays: each month of delay costs carry on $200M+ of debt
- Lease-up risk: what if demand isn't there when you deliver?
- Entitlement risk: permits, zoning, community opposition`,
        keyPoints: [
          'Development yield on cost must exceed stabilized market cap rate to justify development risk',
          'The profit spread (yield on cost minus cap rate) is the developer\'s return for bearing construction and lease-up risk',
          'Construction loans are floating rate and interest-only — rate increases dramatically impact development feasibility',
          'Hard costs (construction), soft costs (architecture, legal, permits), and land are the three pillars of total development cost',
          'Lease-up risk is often the most underestimated: delivering a building into a weak market can destroy returns',
        ],
        realWorldExample: `**Hudson Yards, NYC ($25B, largest private development in US history).** Related Companies and Oxford Properties co-developed Hudson Yards over a rail yard on Manhattan's West Side. Total cost: $25B. The project required: $3B in infrastructure (platform over rail yards), complex TIF financing from NYC, a 10-year timeline, and phased delivery across 18 buildings. Office towers anchored by Blackrock, KKR, and Coach provided lease-up certainty before construction began. The development yield on the office towers was approximately 7% on cost vs. a 4.5% market cap rate — a 250 bps spread representing the profit for one of the most complex real estate projects ever executed.`,
        practiceQuestions: [
          'Total development cost is $100M. Stabilized NOI will be $6M. Market cap rate is 5.5%. What is the yield on cost, profit spread, and estimated profit on the project?',
          'Construction loan: $65M at SOFR+300 (current SOFR: 5.3%). What is the annual interest cost? If rates rise 100 bps and the project is delayed 6 months, how much additional interest accrues?',
          'A developer is deciding between value-add acquisition (buy at $80M, spend $10M renovations, sell at $110M) vs. ground-up development (spend $90M all-in, sell at $130M). Which has better returns, and what additional risks does the developer take in development?',
        ],
      },
    ],
  },

  // ─── ECONOMICS TRACK ───────────────────────────────────────────────
  {
    id: 'econ-macro',
    title: 'Macroeconomics for Finance',
    description: 'The macro framework every finance professional needs — how GDP, inflation, interest rates, and Fed policy move markets, asset prices, and investment returns.',
    track: 'economics',
    level: 'beginner',
    estimatedHours: 8,
    icon: '🌍',
    color: '#2A9D8F',
    topics: [
      {
        id: 'econ-macro-1',
        title: 'GDP, Inflation & Interest Rates',
        content: `Macroeconomics is the study of the aggregate economy — and for finance professionals, it's the backdrop against which all investments are made. Markets don't move in isolation; they move in response to economic data, central bank decisions, and global forces.

**GDP: The Scoreboard**
Gross Domestic Product measures total economic output. GDP = C + I + G + (X-M):
- **C = Consumption** (70% of US GDP): consumer spending on goods and services
- **I = Investment** (18%): business investment in equipment, software, real estate
- **G = Government Spending** (17%): federal, state, local spending (excludes transfers)
- **(X-M) = Net Exports** (-5%): US runs a persistent trade deficit

GDP growth matters for markets because:
- Strong GDP growth → corporate revenue growth → higher earnings → higher stock prices
- GDP contraction → recession → earnings decline → credit defaults → risk-off markets

**Inflation: The Silent Tax**
CPI (Consumer Price Index) measures the price level of a basket of goods. PCE (Personal Consumption Expenditures) is the Fed's preferred measure.

Types of inflation:
- **Demand-pull**: Too much money chasing too few goods (post-COVID stimulus)
- **Cost-push**: Supply disruptions raising input costs (oil shocks, supply chain)
- **Built-in**: Wage-price spirals as workers demand higher pay for higher prices

The 2021-2023 inflation shock: CPI peaked at 9.1% (June 2022). This was caused by:
1. $5T in COVID stimulus creating excess demand
2. Supply chain disruptions (semiconductor shortage, shipping)
3. Energy price surge from Russia-Ukraine war

**Interest Rates: The Price of Money**
The Federal Funds Rate is the overnight interbank lending rate set by the Federal Reserve. This rate cascades through the entire economy:
- Fed Funds Rate → short-term rates → mortgage rates → corporate borrowing costs → consumer credit

The relationship: higher rates → slower growth + lower inflation. Lower rates → faster growth + higher inflation. The Fed's dual mandate: price stability (2% inflation) AND maximum employment.`,
        keyPoints: [
          'GDP = C + I + G + (X-M); consumption is 70% of US GDP — consumer confidence is a leading indicator',
          'The Fed\'s dual mandate is 2% inflation + maximum employment — it cannot optimize both simultaneously in a crisis',
          'Inflation destroys fixed income returns but can help real assets (real estate, commodities) whose values rise with prices',
          'GDP growth of >3% is "strong"; 1-2% is "moderate"; below 0% for two quarters = recession (technical definition)',
          'Interest rates are the most powerful variable in finance — they determine the discount rate for every asset on earth',
        ],
        realWorldExample: `**The 2022 Fed Pivot That Crushed Markets.** In March 2022, the Fed began the most aggressive rate-hiking cycle in 40 years — raising rates from 0.25% to 5.5% in 18 months to fight 9.1% inflation. The result: the S&P 500 fell 25%, bonds fell 20% (worst year since 1788), growth stocks (Nasdaq) fell 33%, real estate values fell 15-25%. The rate hikes worked: inflation fell from 9.1% to 3% by 2023. But the collateral damage was enormous. Every finance professional who understood the relationship between rates and asset valuations saw this coming — and positioned accordingly.`,
        practiceQuestions: [
          'US GDP was $26T in 2023. Consumption was 70%, Government 17%, Investment 18%, Net Exports -5%. Which component has the biggest impact on a typical recession?',
          'Inflation is 8%, and you hold a 10-year Treasury bond paying 3% annual interest. What is your real (inflation-adjusted) annual return? What does this mean for bondholders?',
          'The Fed raises rates from 2% to 5%. Walk through the transmission mechanism: how does this affect mortgage rates, corporate bonds, consumer spending, and equity valuations?',
        ],
      },
      {
        id: 'econ-macro-2',
        title: 'Federal Reserve Policy & How Macro Moves Markets',
        content: `The Federal Reserve is the most powerful institution in global finance. Its decisions on interest rates and monetary policy affect every asset class on earth — stocks, bonds, real estate, currencies, and commodities.

**The Fed's Toolkit:**

**Federal Funds Rate (The Blunt Instrument)**
The overnight rate that banks charge each other. Changed at FOMC meetings (8 per year). Forward guidance ("higher for longer") is often more powerful than the actual rate change.

**Quantitative Easing (QE)**
The Fed buys Treasury bonds and mortgage-backed securities, injecting money into the financial system and pushing down long-term rates. Used when short-term rates hit zero (2008-2015, 2020-2022).

**Quantitative Tightening (QT)**
The reverse — the Fed allows bonds to roll off its balance sheet, draining liquidity. The Fed's balance sheet went from $900B (2008) → $4.5T (2015) → $8.9T (2022) → $7T (2024).

**The Macro-Markets Transmission:**

**Bonds:** Directly impacted. When rates rise, existing bond prices fall (inverse relationship). The 10-year Treasury yield is the "risk-free rate" that prices everything else.

**Equities:** Indirectly impacted through:
1. Discount rate effect: higher rates = lower PV of future earnings = lower P/E multiples
2. Growth effect: higher rates slow the economy, reducing earnings growth
3. "TINA" (There Is No Alternative) flips: when rates were 0%, stocks were the only game; at 5%, Treasuries compete

**Currency (USD):** Higher US rates attract foreign capital → USD strengthens → emerging markets with USD-denominated debt face pressure.

**Commodities:** Dollar-denominated. Strong dollar → lower commodity prices in USD terms. Also: low rates fuel commodity speculation (2020-2022 boom).

**Reading the Yield Curve:**
The yield curve plots Treasury yields across maturities. Normal: upward sloping (longer = higher yield). Inverted: short-term rates above long-term (10Y < 2Y) = recession predictor. Every US recession since 1955 was preceded by an inverted yield curve.

2022: Yield curve inverted. 2023-2024: Soft landing debate. The curve predicting a recession that took longer to arrive than expected.`,
        keyPoints: [
          'The Fed\'s balance sheet expansion (QE) inflates asset prices; QT deflates them — follow the balance sheet',
          'An inverted yield curve (2Y > 10Y) has preceded every US recession since 1955 — it is the most reliable macro signal',
          'The 10-year Treasury yield is the foundation of all asset valuation — it is the risk-free rate in every DCF model',
          'QE creates a "wealth effect" — asset owners (stocks, real estate) benefit disproportionately from loose monetary policy',
          'Fed forward guidance matters more than the actual rate decision — markets price in expectations months ahead',
        ],
        realWorldExample: `**The 2020 "Fed Put" and Market Recovery.** When COVID crashed markets 35% in March 2020, the Fed acted within days: rates cut to 0%, $120B/month QE launched, lending facilities for corporate bonds, money markets, and municipalities. The S&P 500 bottomed March 23, 2020 — the same day the Fed announced unlimited QE. Markets recovered all losses by August 2020. The Fed's willingness to backstop markets created "moral hazard" — investors believed the Fed would always intervene. This belief drove valuations to historic highs by 2021, setting up the 2022 crash when the Fed had to actually fight inflation. Understanding the Fed Put is essential to understanding every market cycle since 2008.`,
        practiceQuestions: [
          'The Fed holds $7T in Treasury and MBS bonds. It begins QT at $60B/month. How many months until the balance sheet reaches $5T? What market conditions might force them to stop QT early?',
          'The 2-year Treasury yields 5.2% and the 10-year yields 4.3%. Is the yield curve inverted? What does this signal about the market\'s economic forecast?',
          'Name three asset classes that would benefit and three that would suffer from the Fed cutting rates from 5.5% to 3% over 18 months. Explain the mechanism for each.',
        ],
      },
    ],
  },

  {
    id: 'econ-markets',
    title: 'Financial Markets & Macro',
    description: 'Advanced macro for finance professionals: yield curve dynamics, FX markets, commodity cycles, and how geopolitical risk moves asset prices.',
    track: 'economics',
    level: 'intermediate',
    estimatedHours: 10,
    icon: '📈',
    color: '#2A9D8F',
    topics: [
      {
        id: 'econ-mkt-1',
        title: 'Yield Curve Dynamics & Fixed Income Markets',
        content: `The yield curve is the most information-rich signal in global finance. It encodes expectations about growth, inflation, Fed policy, and risk appetite — all in one chart. Every serious finance professional reads it daily.

**Building the Yield Curve:**
The US Treasury yield curve plots the yield-to-maturity of Treasury securities from 1-month T-bills to 30-year bonds. Key tenors:
- 2-year: Most sensitive to Fed policy expectations
- 10-year: The "risk-free rate" benchmark; prices mortgages, corporate bonds, real estate
- 30-year: Long-run inflation expectations; mortgage rate anchor

**Yield Curve Shapes and Their Meaning:**

**Normal (upward sloping):** Long-term yields > short-term yields. Markets expect growth. Investors demand premium for locking up money longer.

**Flat:** Long = short rates. Uncertainty; market is unsure about growth trajectory.

**Inverted:** Short > long rates. Market expects the Fed will cut rates (i.e., economy will weaken). The 2Y-10Y inversion has preceded every recession since 1955 with a lag of 12-18 months.

**Steepening vs. Flattening:**
- Bull Steepener: short rates fall faster than long rates (Fed cutting, but inflation concerns remain)
- Bear Flattener: short rates rise faster (Fed hiking aggressively) — this is what 2022 looked like

**Spread Products:**
Everything trades at a spread to Treasuries:
- Investment Grade Corporates: 100-200 bps above equivalent Treasury
- High Yield Corporates: 300-600 bps (3-6%) above Treasury
- EM Sovereign Bonds: 200-600 bps above Treasury

Spread widening = credit stress, risk-off. Spread tightening = confidence, risk-on.

**Duration Risk:**
Duration measures a bond's price sensitivity to rate changes. A 10-year bond has ~8 years duration → 1% rate rise = ~8% price decline. The 2022 bond bear market: 10-year Treasury rose from 1.5% to 4.3% = ~22% price loss. The worst bond market since the Civil War era.`,
        keyPoints: [
          'The 2Y-10Y yield curve inversion is the most reliable recession predictor — every US recession since 1955 was preceded by it',
          'Duration measures interest rate sensitivity: 10-year duration bond loses ~10% value for every 1% rate increase',
          'Credit spreads signal risk appetite: tight spreads = confidence; wide spreads = fear of default',
          'The 10-year Treasury yield is the foundation of all other asset valuations — it is THE rate in finance',
          'Bull steepener (front end falling) signals dovish Fed pivot; bear flattener (front end rising) signals aggressive tightening',
        ],
        realWorldExample: `**Silicon Valley Bank's Duration Mismatch (2023).** SVB bought $91B in long-duration Treasury and MBS bonds in 2021-2022, when rates were near zero. When rates rose 5% in 18 months, those bonds fell 20-25% in value. SVB had $16B in unrealized losses on a $16B equity base — technically insolvent. When depositors panicked, SVB had to sell bonds at losses to meet withdrawals, crystallizing the loss. A bank run destroyed a $200B bank in 48 hours. The lesson: duration mismatch between assets and liabilities is catastrophically dangerous when rates move sharply. Every bank risk manager should have seen this coming from basic fixed income principles.`,
        practiceQuestions: [
          'A bond pays 3% annual coupon, has 10 years to maturity, and yields 5%. Is it trading at a premium or discount to par? Qualitatively, how does duration affect your answer?',
          'High yield credit spreads widen from 400 bps to 800 bps. What does this tell you about market sentiment? What typically causes this kind of move?',
          'The yield curve is currently: 3M = 5.4%, 2Y = 4.9%, 10Y = 4.3%, 30Y = 4.4%. Describe the shape and what it implies about growth and Fed policy expectations.',
        ],
      },
      {
        id: 'econ-mkt-2',
        title: 'FX Markets, Commodities & Geopolitical Risk',
        content: `Foreign exchange and commodity markets are the plumbing of global finance. They are where macro forces are most directly and instantly expressed — and where geopolitical events create trading opportunities and risk.

**Foreign Exchange (FX) Markets:**
$7.5 trillion trades daily in FX — the largest financial market on earth. FX is priced as exchange rates between currency pairs.

**What Drives Currency Values:**

**1. Interest Rate Differentials**
The most powerful driver. If US rates are 5% and European rates are 3.5%, capital flows to the US → USD strengthens. This is the "carry trade" — borrow in low-rate currencies (JPY), invest in high-rate currencies (USD).

**2. Purchasing Power Parity (PPP)**
Long-run anchor: currencies should adjust so identical goods cost the same. The Big Mac Index (Economist) measures PPP. PPP is a terrible short-term predictor but a useful long-run framework.

**3. Current Account & Trade Flows**
Countries running persistent deficits (US) must attract capital inflows to fund them → USD strong when US economy outperforms.

**4. Safe Haven Flows**
USD, JPY, CHF strengthen during global risk-off events (crises, wars) as investors seek safety.

**Commodity Markets:**

**Oil:** The most geopolitically sensitive commodity. OPEC+ controls ~40% of global supply. Oil prices affect everything: airline costs, plastic production, fertilizer, transportation.
- Supply shocks (Russia invasion → Brent crude $139/barrel, March 2022)
- Demand weakness (COVID → WTI crude -$37/barrel, April 2020)

**Gold:** The inflation hedge and crisis refuge. Rises with geopolitical risk, falls with rising real rates (opportunity cost). Gold $800/oz in 2008 → $2,500/oz in 2024.

**Industrial Metals:** Copper is "Dr. Copper" — a barometer of global economic activity. China is 50%+ of copper demand. Chinese growth slowdown = copper price weakness.

**Geopolitical Risk Frameworks:**
- Supply disruption risk: oil, gas, semiconductors, rare earths
- Sanctions and trade wars: decoupling of US-China supply chains
- Currency debasement: hyperinflation in emerging markets (Turkey, Argentina)`,
        keyPoints: [
          'FX is driven by interest rate differentials — the carry trade funds in low-rate currencies (JPY) to buy high-rate ones',
          'Oil is the most geopolitically sensitive asset — supply disruptions create instant price spikes with economy-wide effects',
          'Copper is the leading indicator of global industrial activity — "Dr. Copper" predicts economic inflection points',
          'The USD strengthens in crises (safe haven) which creates a vicious cycle for emerging markets with USD-denominated debt',
          'Real interest rates (nominal rate minus inflation) drive gold prices — falling real rates are bullish for gold',
        ],
        realWorldExample: `**The 2022 Japanese Yen Crisis.** As the Fed hiked rates aggressively in 2022, the Bank of Japan (BOJ) maintained near-zero rates to support its bond market. The result: the USD/JPY rate moved from 115 to 151 — the yen fell 30% in one year, its worst performance since the 1990s. Japanese companies importing commodities faced enormous cost increases; Japanese households saw their savings decimated in real terms. The BOJ was trapped: raise rates to defend the yen and risk a JGB (Japanese Government Bond) market collapse, or let the yen fall. This is the "impossible trinity" of international finance — a country cannot simultaneously have free capital flows, a fixed exchange rate, and independent monetary policy.`,
        practiceQuestions: [
          'US Fed Funds Rate: 5.25%. ECB rate: 3.75%. EUR/USD is trading at 1.08. Based on interest rate differentials alone, predict the directional pressure on EUR/USD. What other factors could override this?',
          'Oil prices rise from $70 to $110/barrel. Map the first-order and second-order effects: which industries benefit, which are hurt, and what is the macroeconomic impact?',
          'A Brazilian company has $500M in USD-denominated debt. The USD strengthens 20% against the Brazilian Real. What happens to the company\'s effective debt burden in local currency terms?',
        ],
      },
    ],
  },

  {
    id: 'econ-behavioral',
    title: 'Behavioral Finance',
    description: 'How cognitive biases, emotions, and psychology systematically drive irrational investment decisions — and how to exploit these patterns in markets.',
    track: 'economics',
    level: 'intermediate',
    estimatedHours: 8,
    icon: '🧠',
    color: '#2A9D8F',
    topics: [
      {
        id: 'econ-behav-1',
        title: 'Cognitive Biases & Investment Decision-Making',
        content: `Traditional finance assumes humans are rational — they process all available information and make optimal decisions. Behavioral finance, built by Daniel Kahneman and Amos Tversky, proves they don't. Understanding these biases is not just academic — it explains why markets misprice assets and creates opportunities for disciplined investors.

**The Foundational Framework: System 1 vs System 2 (Kahneman)**
- **System 1**: Fast, automatic, emotional thinking. Makes snap judgments.
- **System 2**: Slow, deliberate, analytical thinking. Requires effort.

Most investment mistakes come from System 1 operating in situations that require System 2.

**The Big 8 Investment Biases:**

**1. Overconfidence**
Investors systematically overestimate their own ability to predict markets. Studies show active fund managers underperform passive indexes 80% of the time over 10+ years — yet almost all believe they will outperform.

**2. Anchoring**
Over-weighting the first piece of information received. Analysts anchor to the previous year's earnings estimate, last month's stock price, or the purchase price when evaluating a position.

**3. Loss Aversion**
Losses feel approximately 2x more painful than equivalent gains feel good (Prospect Theory). This causes investors to hold losing positions too long and sell winners too early — the disposition effect.

**4. Herding**
Following the crowd regardless of independent analysis. Bubble formation is herding in action: tech stocks in 1999-2000, housing in 2006, crypto in 2021.

**5. Confirmation Bias**
Seeking information that confirms existing beliefs and dismissing contradicting evidence. A bull who ignores short reports; a bear who ignores improving fundamentals.

**6. Recency Bias**
Overweighting recent events. After a bull market, investors expect it to continue. After a crash, they avoid equities. This drives buying high and selling low.

**7. Narrative Fallacy**
Creating compelling stories to explain random events. "The market fell because of X" — often X didn't cause anything; markets move for complex, multi-causal reasons.

**8. Endowment Effect**
Valuing something more because you own it. Investors demand more to sell a stock they own than they would pay to buy it — a logical impossibility.`,
        keyPoints: [
          'Prospect Theory: losses feel 2x more painful than equivalent gains — this drives irrational holding of losers',
          'The disposition effect is loss aversion in action: selling winners too early and holding losers too long',
          'Overconfidence is the most costly bias for investors — active managers underperform passive benchmarks 80% of the time',
          'Anchoring to purchase price is dangerous — the market doesn\'t know what you paid; valuation is forward-looking',
          'Herding creates bubbles: rational individual behavior (follow the crowd) leads to collectively irrational market outcomes',
        ],
        realWorldExample: `**The Meme Stock Phenomenon (2021): Behavioral Finance in Real Time.** GameStop ($GME) rose 1,700% in January 2021 with no change in fundamentals. Behavioral drivers: herding (Reddit/WallStreetBets community momentum), narrative fallacy (the "David vs. Goliath" short squeeze story), recency bias (every dip was bought, reinforcing belief in unlimited upside), and fear of missing out (FOMO). Professional short sellers lost $19B in January 2021. Melvin Capital, a sophisticated hedge fund, lost 53% in one month. The meme stock episode is the clearest recent demonstration that markets can remain irrational longer than rational investors can remain solvent — and that understanding crowd psychology is as important as understanding fundamentals.`,
        practiceQuestions: [
          'You bought a stock at $100. It\'s now $60. You\'re convinced it will recover to $80. How are loss aversion and anchoring influencing your thinking? What is the rational approach?',
          'A fund manager has beaten the market for 3 consecutive years. Is this evidence of skill or luck? How would you determine which it is? What bias might cause you to attribute it to skill prematurely?',
          'Design an investment process checklist that forces a System 2 evaluation for a stock you\'re considering. What specific questions would counter the top 5 biases?',
        ],
      },
      {
        id: 'econ-behav-2',
        title: 'Market Anomalies & Exploiting Behavioral Patterns',
        content: `If markets were perfectly efficient, no strategy would consistently outperform. Yet decades of empirical research document persistent return anomalies — patterns that rational markets should not allow but behavioral biases create and sustain.

**The Factor Zoo — Documented Market Anomalies:**

**1. Value Premium**
Low P/B, P/E, and EV/EBITDA stocks outperform "glamour" stocks over long periods. Eugene Fama and Kenneth French documented this in 1992. Explanation: investors over-extrapolate growth (overconfidence + recency bias), paying too much for glamour stocks and too little for boring value stocks.

**2. Momentum Effect**
Stocks that outperformed over the past 12 months tend to continue outperforming over the next 3-12 months. Explanation: underreaction to information — analysts are too slow to update estimates, and prices take time to reflect new information.

**3. Small-Cap Premium**
Small-cap stocks outperform large-cap stocks over long periods. Explanation: partially risk-based (illiquidity), partially neglect (fewer analysts cover small caps → more mispricings).

**4. Low Volatility Anomaly**
Counter-intuitive: low-beta stocks outperform high-beta stocks on a risk-adjusted basis. Explanation: investors overpay for "lottery ticket" high-volatility stocks due to excitement and attention.

**5. Earnings Surprise (PEAD)**
Post-earnings announcement drift: stocks drift in the direction of an earnings surprise for months after the announcement. Explanation: underreaction — the market takes time to fully price good (or bad) news.

**How Professional Investors Exploit These:**

**Systematic/Quant Funds:** Build multi-factor models combining value + momentum + quality + low volatility. Two Sigma, AQR, Renaissance Technologies.

**Fundamental Active Managers:** Use earnings surprise analysis to front-run analyst estimate revisions. Short glamour stocks with decelerating growth.

**Event-Driven Strategies:** Exploit anchoring around corporate events (spin-offs, index inclusions/exclusions, post-bankruptcy reorganizations) where structural sellers create mispricings.

**The Limits of Arbitrage:**
Even when you identify a mispricing, you cannot always profit from it:
- Short-selling costs and risk of short squeeze (GameStop)
- Career risk: fund managers can't bet against consensus and survive underperformance for years
- "The market can remain irrational longer than you can remain solvent" (Keynes)`,
        keyPoints: [
          'Value premium, momentum, small-cap premium, and low-volatility are the most empirically robust market anomalies',
          'Post-earnings announcement drift (PEAD) shows markets underreact to new information — prices drift for months after surprises',
          'The "limits of arbitrage" explain why mispricings persist — correcting them is costly and risky',
          'Systematic quant funds (Two Sigma, Renaissance) exploit behavioral factors at scale using machine learning',
          'Calendar anomalies (January Effect, Monday Effect) have largely disappeared once discovered and traded away',
        ],
        realWorldExample: `**AQR Capital and the Value Factor.** AQR (Clifford Asness) is the world's largest factor investing firm with $100B+ AUM. AQR\'s flagship funds combine value + momentum + quality + low-risk factors. The theory: value stocks are cheap because investors overreact to recent bad news (behavioral) AND because they're genuinely riskier (rational). The 2017-2020 period was brutal for value as growth stocks (FAANG) dominated due to QE-driven multiple expansion. AQR suffered $40B in outflows. But Asness maintained discipline — and value rebounded sharply in 2021-2022. Behavioral finance investing requires conviction through the troughs, because the arbitrage is never instantaneous.`,
        practiceQuestions: [
          'A stock beats earnings by 20%. The stock rises 5% on earnings day. Research shows PEAD averages 3% additional return over the next 60 days. How would you construct a trade to exploit this? What are the risks?',
          'The momentum factor works in equities but not in individual stocks during momentum crashes. What behavioral and structural explanations account for momentum crashes (sudden reversals)?',
          'You\'re building a long-short equity fund exploiting behavioral factors. Name 3 factors you would use, explain the behavioral bias each exploits, and describe a specific stock screen for each.',
        ],
      },
    ],
  },

  // ─── ACCOUNTING & TAX TRACK ───────────────────────────────────────────────
  {
    id: 'acc-advanced',
    title: 'Advanced Accounting',
    description: 'Deep-dive into the complex accounting standards that confuse even experienced analysts: revenue recognition (ASC 606), lease accounting (ASC 842), and business combinations (ASC 805).',
    track: 'accounting',
    level: 'intermediate',
    estimatedHours: 10,
    icon: '📒',
    color: '#457B9D',
    topics: [
      {
        id: 'acc-adv-1',
        title: 'Revenue Recognition (ASC 606) & Lease Accounting (ASC 842)',
        content: `Two of the most impactful accounting standard changes in recent decades — ASC 606 and ASC 842 — fundamentally changed how companies report revenue and obligations. Every analyst must understand them to read modern financial statements correctly.

**ASC 606: Revenue Recognition (Effective 2018)**

The five-step model for recognizing revenue:

**Step 1: Identify the Contract**
A legally enforceable agreement with a customer with commercial substance.

**Step 2: Identify the Performance Obligations**
Each distinct good or service promised in the contract. Apple selling an iPhone + 1-year warranty + Apple Music subscription = three performance obligations.

**Step 3: Determine the Transaction Price**
The amount the company expects to receive, including variable consideration (rebates, returns, royalties). Must estimate returns using expected value or most likely amount.

**Step 4: Allocate the Transaction Price**
Allocate to each performance obligation based on relative standalone selling prices (SSP).

**Step 5: Recognize Revenue**
When (or as) the performance obligation is satisfied — either at a point in time or over time.

**Over Time vs. Point in Time:**
- Point in time: retail sale, product delivery
- Over time: SaaS subscription, long-term construction contract, consulting engagement

**SaaS Impact of ASC 606:**
A SaaS company signs a 3-year $300K contract upfront. Under ASC 606: recognize $100K/year over 3 years (performance obligation satisfied ratably). This creates: Deferred Revenue (liability) on day 1 = $300K; recognized $100K/year.

**ASC 842: Lease Accounting (Effective 2019)**

The major change: operating leases now appear on the balance sheet. Pre-2019, only capital/finance leases were on-balance-sheet.

**New Requirements:**
- Right-of-Use (ROU) Asset: Present value of all future lease payments (asset on balance sheet)
- Lease Liability: Same present value (liability on balance sheet)
- EBITDA Impact: Operating lease expense moves from EBITDA below to D&A (add-back) + interest (excluded)

**Impact on analysis:** Companies with heavy operating leases (retailers, restaurants, airlines) saw balance sheets increase dramatically. Starbucks added $8.9B in ROU assets in 2019. Their leverage ratios changed overnight without any change in economic reality.`,
        keyPoints: [
          'ASC 606 five-step model: identify contract, obligations, transaction price, allocate, recognize when satisfied',
          'SaaS and subscription companies with multi-year contracts front-load cash but recognize revenue ratably under ASC 606',
          'ASC 842 puts operating leases on the balance sheet — retailers and airlines look far more leveraged post-2019',
          'Deferred revenue (a liability) from upfront cash collection is a quality indicator — it represents future work, not bad debt',
          'EBITDA improves under ASC 842 because operating lease expense is split into depreciation (add-back) and interest (excluded)',
        ],
        realWorldExample: `**WeWork's Lease Liability Revelation.** When WeWork filed its S-1 in 2019, ASC 842 forced disclosure of $47B in lease obligations — 20x WeWork's equity. WeWork's business model was: sign long-term leases with building owners (15-year commitments), then sublease to members on flexible monthly contracts. ASC 842 made the long-term liability fully visible while the volatile short-term revenue was apparent in the income statement. The ratio: $47B in obligations against $1.8B in revenue. No comparable risk-adjusted business would survive this scrutiny. The IPO failed. The accounting standard did its job — revealing economic reality hidden in pre-ASC 842 footnotes.`,
        practiceQuestions: [
          'A software company signs a 2-year contract: $120K upfront, $60K/year ongoing. The contract has two performance obligations: software license (standalone price $80K) and annual support ($40K/year). How is revenue recognized in Year 1?',
          'A restaurant chain has 500 locations, each with a 15-year operating lease at $50K/month. Under ASC 842, estimate the ROU asset to be added to the balance sheet (assume 5% discount rate, 15 years). How does this affect the company\'s leverage ratios?',
          'Why does Deferred Revenue (a liability) represent high-quality earnings? Give an example of a company where growing deferred revenue is a strong positive signal.',
        ],
      },
      {
        id: 'acc-adv-2',
        title: 'Business Combinations & Goodwill (ASC 805)',
        content: `Every M&A transaction creates accounting complexity. Understanding purchase accounting (ASC 805) is essential for analysts evaluating acquisitions — it directly affects reported earnings, intangibles, and goodwill impairment risk.

**Purchase Price Accounting (PPA) — The Process:**

When Company A acquires Company B for $500M, and Company B's book value is $200M:

**Step 1: Fair Value All Assets and Liabilities**
Every identifiable asset and liability is re-measured to fair value at the acquisition date:
- Inventory: marked up to selling price minus costs to sell
- PP&E: reappraised (affects future depreciation)
- Identified Intangibles: customer relationships, trade names, technology, patents

**Step 2: Record Identified Intangibles**
The biggest change vs. historical book value: acquirers must identify and value:
- Customer relationships (amortized over useful life, typically 7-15 years)
- Trade names (indefinite life → no amortization, or finite life → amortized)
- Developed technology (amortized 3-7 years)
- Non-compete agreements (amortized over agreement term)

**Step 3: Calculate Goodwill**
Goodwill = Purchase Price − Fair Value of Net Identifiable Assets

Goodwill represents: synergies, assembled workforce, strategic value not attributable to specific assets. It is NOT amortized — it remains on the balance sheet until impaired.

**Goodwill Impairment Testing (Annual):**
Under ASC 350, goodwill is tested annually (or more frequently if indicators exist):
- If the fair value of the reporting unit falls below its carrying value → impairment charge
- Goodwill impairment is a non-cash charge that hits net income but not EBITDA or cash flow

**Amortization Impact on Earnings:**
Post-acquisition, the acquiree's earnings are depressed by amortization of:
- Acquired intangibles: $50-100M/year on large deals
- Inventory step-up: one-time COGS hit in first quarter

This is why acquirers often guide to "cash EPS" (adding back intangible amortization) vs. GAAP EPS immediately post-acquisition.`,
        keyPoints: [
          'Purchase price accounting requires fair-valuing all identifiable assets and liabilities — book values are replaced with fair values',
          'Goodwill = Purchase Price − Fair Value of Net Identifiable Assets; represents unquantifiable strategic value',
          'Identified intangibles (customer relationships, technology, trade names) are amortized and suppress post-acquisition GAAP earnings',
          'Goodwill is not amortized but tested annually for impairment — impairment charges signal deals that failed to create value',
          'Cash EPS (adding back intangible amortization) is commonly used by acquirers to present "underlying" profitability',
        ],
        realWorldExample: `**Microsoft's $69B Activision Acquisition (2023).** Microsoft paid $69B for Activision when Activision's book value was ~$10B. Purchase accounting required identifying $25-30B in intangible assets (game franchises like Call of Duty, World of Warcraft — assigned values based on discounted future royalty streams). Remaining goodwill: ~$35B. The amortization of those game franchise intangibles will suppress Microsoft's GAAP earnings by $1-2B annually for 7-15 years. Analysts and Microsoft guide to "adjusted EPS" (ex-amortization). The risk: if gaming revenue disappoints, Microsoft must write down the $35B goodwill — a non-cash but highly visible signal of deal failure.`,
        practiceQuestions: [
          'Acquirer pays $800M for target. Target\'s book value of net assets: $300M. Fair value uplift: PP&E +$100M, Customer Relationships +$150M, Trade Name +$50M. Calculate goodwill. If customer relationships are amortized over 10 years, what is the annual P&L impact?',
          'A company has $5B in goodwill from a 2019 acquisition. In 2023, the acquired business unit\'s operating cash flow fell 40%. What should the company do? What are the financial statement impacts?',
          'Why do acquirers prefer to assign purchase price to goodwill (no amortization) rather than identified intangibles (amortized)? What do auditors and regulators do to prevent this?',
        ],
      },
    ],
  },

  {
    id: 'acc-tax',
    title: 'Tax Strategy for Business',
    description: 'Corporate tax mechanics, M&A tax structuring, transfer pricing, and international tax — the knowledge that tax attorneys and CFOs use to minimize tax burdens legally.',
    track: 'accounting',
    level: 'intermediate',
    estimatedHours: 10,
    icon: '🧾',
    color: '#457B9D',
    topics: [
      {
        id: 'acc-tax-1',
        title: 'Corporate Tax & M&A Tax Structuring',
        content: `Tax is the single largest expense for most profitable corporations — and the most controllable one. The difference between a well-structured deal and a poorly structured one can be worth hundreds of millions in tax savings. This is why every major M&A transaction has a team of tax advisors.

**US Corporate Tax Fundamentals:**

**Federal Corporate Tax Rate:** 21% (after Tax Cuts and Jobs Act 2017, down from 35%)

**Effective Tax Rate vs. Marginal Rate:**
Companies rarely pay the statutory 21% rate. Deductions, credits, and timing differences create effective rates of 12-18% for large US companies. Apple's effective rate: ~16%. Tech companies exploiting international structures historically paid 5-10%.

**Key Tax Concepts:**

**1. Deferred Tax Assets (DTAs) and Liabilities (DTLs)**
- DTA: A "prepaid tax" — you paid tax before recognizing income (or had losses to carry forward)
- DTL: A "tax obligation" — income recognized for financial reporting before tax reporting (common with accelerated depreciation)

**2. Net Operating Loss (NOL) Carryforwards**
Losses generated in one year can reduce taxable income in future years. Startups accumulate large NOL carryforwards that become valuable as they turn profitable. Amazon had $2.5B in NOL carryforwards in 2013 — effectively pre-paid taxes.

**3. Interest Deductibility (Section 163(j))**
Interest expense is deductible, which is why PE firms load acquired companies with debt. The TCJA limited interest deduction to 30% of EBITDA — an important constraint on LBO structures.

**M&A Tax Structuring — Asset vs. Stock Deal:**

**Stock Deal:**
- Buyer acquires the seller's stock → inherits the company's existing tax basis in assets
- No "step-up" in asset basis → higher future depreciation deductions lost
- Seller: Capital gains tax (20% + 3.8% NIIT for individuals)
- Buyer: Prefers asset deal; Seller: Prefers stock deal

**Asset Deal:**
- Buyer purchases specific assets → "step-up" to fair value at acquisition
- Buyer gets higher depreciation deductions → NPV benefit of $20-50M on large deals
- Seller: Often taxed at ordinary income rates on asset gains → tax cost
- Section 338(h)(10) election: lets the parties treat a stock deal as an asset deal for tax purposes — both sides can benefit`,
        keyPoints: [
          'Interest deductibility is the primary tax benefit of leverage in LBOs — debt shields income from corporate tax',
          'Asset deals give buyers a stepped-up tax basis (higher depreciation); stock deals preserve the seller\'s lower basis',
          'Section 338(h)(10) election allows a stock deal to be taxed as an asset deal — requires mutual agreement',
          'NOL carryforwards are valuable tax assets — acquired companies with large NOLs can shelter future acquirer income',
          'Effective tax rates differ from the 21% statutory rate due to deductions, credits, timing differences, and international structuring',
        ],
        realWorldExample: `**Amazon's $0 Federal Tax (2018).** Despite earning $11.2B in pre-tax income in 2018, Amazon paid $0 in federal income tax and received a $129M refund. How? Stock-based compensation deductions (employees exercise options → Amazon deducts fair value), accelerated depreciation on $13B in capital investments, and R&D tax credits. Effective tax rate: -1.2%. This was entirely legal under US tax code. Public outrage led to proposals for a minimum corporate tax — ultimately enacted as the 15% corporate minimum tax in the Inflation Reduction Act (2022), targeting companies with $1B+ in book income. Amazon's tax strategy was sophisticated, legal, and ultimately politically unsustainable at that scale.`,
        practiceQuestions: [
          'PE firm acquires a company for $500M in a stock deal. Target has $200M in PP&E with $50M of book value (basis). If the deal were structured as an asset deal with a step-up to $200M fair value, and assets are depreciated over 10 years at a 21% tax rate, what is the NPV of the tax benefit (assume 10% discount rate)?',
          'A target company has $300M in NOL carryforwards. How should a buyer value these NOLs? What Section 382 limitation might reduce their usability?',
          'Why do sellers prefer stock deals and buyers prefer asset deals? In what scenario would a seller willingly agree to an asset deal structure?',
        ],
      },
      {
        id: 'acc-tax-2',
        title: 'FP&A & Management Accounting',
        content: `Financial Planning & Analysis (FP&A) is the internal financial intelligence function of a corporation. FP&A teams build the budgets, forecasts, and dashboards that help CEOs and CFOs make decisions. It's one of the most important — and most underrated — finance disciplines.

**The FP&A Annual Cycle:**

**Q4: Annual Budget / Long-Range Plan**
- Bottom-up budgeting: business units submit detailed operational plans
- Top-down targets: CFO sets revenue, margin, and CAPEX targets
- Reconciliation: negotiation between bottom-up and top-down
- Output: Board-approved budget with monthly/quarterly phasing

**Ongoing: Rolling Forecasts**
- Monthly or quarterly updates to the full-year outlook
- Best practice: 13-month or 5-quarter rolling horizon
- Replaces reliance on the annual budget as the market evolves
- Driver-based: model revenue as units × price, not just YoY growth %

**Variance Analysis: The Core FP&A Skill**

Budget vs. Actual variance analysis decomposes the difference:
- Revenue variance = Volume variance + Price/Mix variance
- Volume: sold more/fewer units than planned
- Price: charged more/less per unit than planned
- Mix: sold different product mix than planned (different margins)

Example: Revenue miss of $10M:
- Volume: -$15M (sold 1,000 fewer units)
- Price: +$5M (priced $5 higher per unit)
- Net: -$10M total miss

**KPI Frameworks:**
The best FP&A teams build KPI frameworks that are leading indicators (predict future performance), not just lagging (report past performance).

SaaS company leading KPIs:
- ARR (Annual Recurring Revenue) and ARR growth
- Net Revenue Retention (NRR) > 120% = product-market fit
- CAC Payback Period (months to recover customer acquisition cost)
- Rule of 40 (Revenue Growth % + EBITDA Margin % > 40 = healthy SaaS)

Manufacturing KPIs:
- OEE (Overall Equipment Effectiveness) = machine utilization
- Inventory Days on Hand = working capital efficiency
- Scrap Rate = production quality`,
        keyPoints: [
          'FP&A drives budgeting, forecasting, and variance analysis — connecting operational decisions to financial outcomes',
          'Rolling forecasts (5-quarter horizon) are more accurate and useful than rigid annual budgets',
          'Variance analysis decomposes P&L differences into volume, price, and mix components — essential diagnostic skill',
          'Leading KPIs (NRR, ARR growth, CAC payback) predict future performance; lagging KPIs (revenue, EBITDA) report history',
          'The Rule of 40 (growth rate + EBITDA margin > 40%) is the standard SaaS business health benchmark',
        ],
        realWorldExample: `**Google's FP&A and the $9B Miss.** In Q1 2023, Alphabet reported advertising revenue of $54.5B vs. analyst consensus of $57.8B — a $3.3B miss. Alphabet's own FP&A team had internal forecasts. Post-earnings, CEO Sundar Pichai attributed the miss to "advertiser pullback" — but the real FP&A failure was not anticipating the speed of the pullback. The stock fell 8% in one day, wiping $90B in market cap. Good FP&A would have built a downside scenario in the quarterly forecast showing the range of outcomes if ad spend slowed 10%. Board members use scenario analysis to stress-test management forecasts — and the teams that do this best create a culture of financial accountability that prevents costly surprises.`,
        practiceQuestions: [
          'A SaaS company had $100M ARR beginning of year, added $40M new ARR, churned $15M, and expanded existing customers by $20M. What is ending ARR? What is Net Revenue Retention?',
          'Revenue budget was $50M. Actual was $47M. Volume: sold 4,700 units (budget: 5,000). Actual price: $10/unit (budget: $10). Decompose the variance into volume and price components.',
          'Why is a rolling 5-quarter forecast better than an annual budget as the primary management tool? What are the organizational and cultural challenges of transitioning to rolling forecasts?',
        ],
      },
    ],
  },

  // ─── LAW & LEGAL TRACK ───────────────────────────────────────────────
  {
    id: 'law-corporate',
    title: 'Corporate Law Basics',
    description: 'The essential legal framework every business professional needs: corporate structures, contract fundamentals, intellectual property, and employment law — explained for non-lawyers.',
    track: 'law',
    level: 'beginner',
    estimatedHours: 8,
    icon: '⚖️',
    color: '#6D3B8C',
    topics: [
      {
        id: 'law-corp-1',
        title: 'Corporate Structures & Governance',
        content: `Understanding corporate structures is fundamental to finance, investing, and business. Every decision about liability, taxation, governance, and capital raising is shaped by how a business is legally organized.

**The Core Corporate Forms:**

**C-Corporation**
The dominant form for large companies and venture-backed startups. Key features:
- Separate legal entity: shareholders not liable for corporate debts
- Perpetual existence: survives changes in ownership
- Double taxation: profits taxed at corporate level (21%) AND dividends taxed at shareholder level (15-20%)
- Capital raise flexibility: unlimited shareholders, multiple share classes
- Why startups choose C-corps: VCs require them for preferred stock structures and clean cap tables

**S-Corporation**
- Pass-through taxation: profits flow directly to shareholders' personal returns
- Limitation: max 100 shareholders, US citizens/residents only, one class of stock
- Common for small businesses; not suitable for VC-backed or public companies

**LLC (Limited Liability Company)**
- Pass-through taxation by default (can elect C-corp tax treatment)
- Flexible governance (operating agreement vs. charter/bylaws)
- No double taxation
- PE-owned portfolio companies often structured as LLCs for tax efficiency

**Partnership**
- General Partnership: all partners have unlimited liability
- Limited Partnership (LP): GP has unlimited liability; LPs limited to investment
- PE funds, real estate funds, and hedge funds use LP structure

**Corporate Governance: Who Controls What?**

**Board of Directors:** Elected by shareholders; oversees management; approves major decisions (M&A, capital raises, CEO compensation)

**Shareholders:** Vote on directors, major transactions, and charter amendments; limited to ownership rights

**Officers (CEO, CFO, COO):** Day-to-day management authority delegated by the board

**Fiduciary Duties:**
- Duty of Care: act with reasonable care and diligence
- Duty of Loyalty: put company interests above personal interests
- Business Judgment Rule: courts defer to board decisions made in good faith with reasonable information`,
        keyPoints: [
          'C-corporations face double taxation but offer unlimited shareholders and multiple share classes — required for VC and public company structures',
          'LLCs offer pass-through taxation with corporate liability protection — common for PE-owned companies and real estate',
          'Fiduciary duties (care + loyalty) bind directors and officers — breach can create personal liability',
          'Preferred stock (VC investors) has liquidation preferences and anti-dilution protections that ordinary shareholders lack',
          'The Business Judgment Rule protects directors who make informed, good-faith decisions — even if they turn out to be wrong',
        ],
        realWorldExample: `**Elon Musk's Twitter/X Acquisition: Corporate Governance in Action.** When Musk agreed to buy Twitter for $54.20/share and then tried to back out, Twitter's board exercised its fiduciary duty to shareholders — suing to enforce the merger agreement rather than accept a renegotiated lower price. Delaware courts sided with Twitter. Musk ultimately paid the agreed price ($44B). This episode illustrated: (1) merger agreements are legally binding and courts enforce them; (2) boards must act in shareholders' economic interests (duty of loyalty); (3) a "don't-ask, don't-waive" standstill can matter in contested transactions. Delaware corporate law (where 65% of Fortune 500 are incorporated) is the most important body of corporate law in the US.`,
        practiceQuestions: [
          'A startup founder is deciding between a C-corp and LLC structure for a consumer app they plan to raise $5M of venture capital for. Which should they choose and why?',
          'A PE firm acquires a manufacturing company structured as a C-corp. They want to convert it to an LLC for tax benefits. What are the tax consequences of this conversion? What alternatives exist?',
          'A board approves a $2B acquisition that turns out to destroy shareholder value. Shareholders sue the directors personally. What is the legal standard the court applies? What would the shareholders need to prove?',
        ],
      },
      {
        id: 'law-corp-2',
        title: 'Contracts, Intellectual Property & Employment Law',
        content: `Three bodies of law that every business person encounters constantly — contracts that govern every transaction, IP that protects competitive moats, and employment law that governs every people decision.

**Contracts — The Foundation of Commerce:**

**Elements of a Valid Contract:**
1. **Offer**: A clear, definite proposal
2. **Acceptance**: Unambiguous agreement to all terms
3. **Consideration**: Each party gives something of value (money, services, promise)
4. **Capacity**: Both parties legally competent
5. **Legality**: Purpose is lawful

**Key Contract Provisions in Finance and Business:**
- **Representations and Warranties**: Statements of fact; breach triggers indemnification
- **Covenants**: Ongoing obligations (positive: "will file financial statements"; negative: "won't take on additional debt")
- **Material Adverse Change (MAC) clause**: Lets a buyer exit if the target's business significantly worsens
- **Force Majeure**: Excuses non-performance due to unforeseeable events (COVID tested these extensively)
- **Governing Law**: Which state's law governs; Delaware or New York for most commercial agreements

**Intellectual Property — The Competitive Moat:**

**Patents:** Protect inventions. 20-year exclusivity. Must file before disclosure. Drug companies build patent "fortresses." Cost: $10-50K to obtain; years to litigate.

**Trade Secrets:** No registration; protected by confidentiality. Coca-Cola's formula. Customer lists. Algorithms. Must take "reasonable steps" to maintain secrecy (NDAs, access controls).

**Trademarks:** Brand names, logos, slogans. Indefinitely renewable. "Apple" in tech = unregistered but famous. Must actively enforce or risk dilution.

**Copyright:** Automatic protection for original creative works. Code, content, design. 70 years + author's life. Open source licenses complicate software M&A diligence.

**Employment Law Basics for Business:**
- At-will employment (US default): either party can terminate without cause, without notice
- Non-compete agreements: valid in some states (NY, CA mostly unenforceable), must be reasonable in scope and duration
- Non-disclosure agreements (NDAs): protect trade secrets from departing employees
- WARN Act: 60-day notice required for mass layoffs (>100 employees or >33% of workforce)
- FLSA: minimum wage and overtime requirements; misclassification of employees as contractors is a major liability`,
        keyPoints: [
          'A valid contract requires offer, acceptance, consideration, capacity, and legality — missing any element can void the agreement',
          'MAC clauses allow deal exits if business conditions materially worsen — heavily negotiated in M&A with extensive carve-outs',
          'Trade secret protection requires "reasonable measures" (NDAs, access controls) — losing this requirement destroys protection',
          'Patent protection lasts 20 years from filing — pharmaceutical companies rely on patent expiry timing for pricing strategy',
          'Employee vs. contractor misclassification is a major legal and financial liability — the IRS uses a 20-factor test',
        ],
        realWorldExample: `**Waymo vs. Uber Trade Secret Case (2018).** When Anthony Levandowski left Google/Waymo to join Uber, he allegedly took 14,000 confidential files containing LiDAR technology secrets. Waymo sued Uber for trade secret misappropriation. The settlement: $245M in Uber equity. This case illustrates the value of trade secrets (self-driving technology worth billions), the legal exposure when employees walk out with proprietary data, and why NDA and confidentiality agreements — combined with robust access controls — are essential in technology companies. For Uber, the reputational damage was arguably worse than the financial settlement.`,
        practiceQuestions: [
          'A SaaS company sells its platform for $2M/year but the buyer refuses to pay after year 1. The contract has a "liquidated damages" clause of $4M for material breach. Is this enforceable? What would a court examine?',
          'A startup\'s core algorithm is protected only as a trade secret, not a patent. A former engineer joins a competitor. What steps should the company take immediately? What should they have done in advance?',
          'An employer classifies 50 workers as independent contractors but controls their hours, equipment, and work process. A state labor authority investigates. What are the financial exposures (back taxes, benefits, penalties)?',
        ],
      },
    ],
  },

  {
    id: 'law-ma',
    title: 'M&A Legal Process',
    description: 'The legal architecture of M&A deals: from letter of intent to closing — LOIs, definitive agreements, representations & warranties, indemnification, and closing conditions used at Sullivan & Cromwell and Skadden.',
    track: 'law',
    level: 'intermediate',
    estimatedHours: 10,
    icon: '📜',
    color: '#6D3B8C',
    topics: [
      {
        id: 'law-ma-1',
        title: 'LOI to Definitive Agreement: The M&A Legal Timeline',
        content: `Every M&A transaction follows a legal process that moves from initial interest to binding commitment. Understanding this process is essential for anyone working in banking, private equity, corporate development, or law.

**Phase 1: Letter of Intent (LOI) / Term Sheet**

The LOI is a preliminary document expressing the buyer's intention to acquire the target. Key characteristics:
- **Mostly non-binding**: Price, structure, and key terms are indicative
- **Binding provisions**: Exclusivity (no-shop), confidentiality, break-up fee triggers
- **Exclusivity period**: Typically 30-60 days for buyer to complete due diligence
- **Indicative valuation**: Price range or specific price, subject to due diligence

A well-crafted LOI speeds up the process by aligning parties on key terms before expensive legal drafting begins.

**Phase 2: Due Diligence**

The buyer's right to investigate everything about the target before committing final price:
- **Financial DD**: Audit the financials, verify revenue quality, identify off-balance-sheet obligations
- **Legal DD**: Review all contracts, litigation, IP ownership, regulatory compliance, employment matters
- **Commercial DD**: Market analysis, competitive position, customer concentration
- **Tax DD**: Historical tax compliance, transfer pricing, deferred tax liabilities
- **Environmental DD** (for industrial companies): Environmental liabilities can be enormous

Data room: Virtual data room (VDR) with thousands of documents. Investment bankers and lawyers work simultaneously. Large deals: 6-12 weeks of DD, thousands of billable hours.

**Phase 3: Definitive Agreement Negotiation**

The binding legal contract. Forms:
- **Merger Agreement** (in public deals): Board-approved, shareholder voted
- **Stock Purchase Agreement (SPA)** (private company stock deals)
- **Asset Purchase Agreement (APA)** (asset deals)

Key sections: Purchase price and adjustments, representations & warranties, covenants, conditions to closing, indemnification, termination rights.

**Phase 4: Signing**

Parties sign the definitive agreement. Deal is announced (for public companies). Pre-closing period begins: regulatory approval, financing, third-party consents.

**Phase 5: Closing**

Final conditions satisfied, money wires, ownership transfers. "Closing" is when the deal is done.`,
        keyPoints: [
          'The LOI establishes binding exclusivity and confidentiality while keeping price and structure non-binding',
          'Due diligence is the buyer\'s only opportunity to uncover problems — discoveries post-signing lead to expensive disputes',
          'The definitive agreement (SPA/APA/Merger Agreement) is the fully negotiated, binding contract',
          'The gap between signing and closing (weeks to months) is when regulatory approval and financing are obtained',
          'Material Adverse Change (MAC) clauses allow termination if the business deteriorates between signing and closing',
        ],
        realWorldExample: `**Elon Musk Tries to Exit Twitter (2022).** Musk signed a merger agreement to acquire Twitter at $54.20/share on April 25, 2022. By July, Twitter's stock had fallen and Musk alleged Twitter misrepresented its spam/bot account metrics — claiming a MAC had occurred. Twitter's legal team argued the MAC carve-outs (including changes in financial markets, general economic conditions) covered Musk's objections. Delaware Chancery Court was prepared to rule against Musk. He ultimately completed the acquisition in October 2022. Lesson: MAC clauses have high bars, carve-outs are heavily negotiated, and Delaware courts take merger agreements seriously. Buyer's remorse is not a MAC.`,
        practiceQuestions: [
          'Seller wants a 120-day exclusivity period in the LOI; buyer wants 45 days. What are the interests on each side? What is a typical resolution and why?',
          'During due diligence, the buyer discovers the target has $50M in undisclosed litigation. How should the buyer handle this discovery? What are the deal outcome options?',
          'What is the difference between a "bring-down" condition and a MAC condition to closing? Why do sellers resist MAC clauses and buyers insist on them?',
        ],
      },
      {
        id: 'law-ma-2',
        title: 'Representations, Warranties, Indemnification & R&W Insurance',
        content: `Representations and warranties are the legal backbone of risk allocation in M&A. They determine who bears the cost of undiscovered problems — and how much. This is where deal lawyers earn their fees.

**Representations and Warranties:**

**What They Are:**
Factual statements made by the seller (and sometimes buyer) about the target company's condition as of signing/closing. If false, the misrepresenting party must indemnify the other party for resulting losses.

**Typical Seller Reps:**
- Organization and authority (seller has legal power to sell)
- Financial statements (accurate, prepared per GAAP)
- No material adverse change since last financials
- Title to assets (seller actually owns what it's selling)
- No undisclosed litigation
- Tax compliance (taxes have been paid, returns filed)
- IP ownership (company owns or has rights to all IP used)
- Material contracts (no breaches; no change-of-control triggers)
- Environmental compliance
- Employee matters (no unresolved labor disputes, WARN compliance)

**Materiality Qualifiers:**
"Material" and "Material Adverse Effect" (MAE) are carefully defined. Sellers want broad materiality qualifiers (only breach for really big problems). Buyers want to remove qualifiers (any inaccuracy is a breach).

**Knowledge Qualifiers:**
"To the knowledge of the company" — breach only if seller's key people actually knew. Heavily negotiated: whose knowledge? Actual vs. constructive knowledge?

**Indemnification Framework:**

**Basket / Deductible:**
Buyer bears losses below the threshold (like a deductible). Typically 0.5-1% of deal value.
Two types: "tipping basket" (all losses recoverable once threshold exceeded) vs. "true deductible" (only excess above basket).

**Cap:**
Maximum indemnification liability. Typically 10-15% of deal value for general reps; 100% for fundamental reps (title, authority, taxes).

**Survival Period:**
How long after closing can the buyer bring a claim? General reps: 12-24 months. Tax: statute of limitations (6+ years). Fundamental: indefinitely.

**R&W Insurance (Representations & Warranties Insurance):**
Game-changing innovation: an insurance policy (typically $5-20M premium) that covers breaches of reps and warranties directly. Benefits:
- Sellers receive clean exit (no escrow holdback)
- Buyers get insurance-backed coverage (not dependent on seller's credit)
- Speeds up deal negotiation (less fighting over indemnification terms)
- Now used in 60%+ of middle-market PE deals`,
        keyPoints: [
          'Representations and warranties are factual statements; breach triggers indemnification from the breaching party',
          'Materiality and knowledge qualifiers are heavily negotiated — they determine how easy/hard it is to trigger a claim',
          'The indemnification basket, cap, and survival period define the economic exposure for each party post-closing',
          'R&W Insurance (now used in 60%+ of PE deals) provides clean exits for sellers and insurance-backed coverage for buyers',
          'Fundamental representations (title, authority, taxes) have unlimited caps; general reps are capped at 10-15% of deal value',
        ],
        realWorldExample: `**Oracle vs. PeopleSoft (2004): Hostile M&A and Defensive Tactics.** Oracle launched a hostile bid for PeopleSoft at $19.50/share. PeopleSoft implemented a "customer protection plan" (a form of poison pill) — promising customers refunds of 2-5x software license fees if PeopleSoft was acquired and products discontinued. This made acquisition costlier for Oracle and was challenged legally. After 18 months and price increases to $26.50/share, PeopleSoft's board accepted. The lesson: target companies have extensive defensive tools (poison pills, staggered boards, supermajority requirements), and the legal battle in M&A can be as important as the financial negotiation. Delaware courts set the rules for these battles through the Revlon standard and Unocal test.`,
        practiceQuestions: [
          'Seller provides a rep that "all material contracts are listed on Schedule X." Buyer later discovers a $10M contract missing from the schedule. The contract was known to the CFO but not the CEO. Does a "knowledge of key persons" qualifier protect the seller? Why or why not?',
          'Buyer discovers 18 months post-closing that the target had undisclosed environmental liabilities of $5M. The deal had a 0.75% basket ($750K on a $100M deal), 15-month survival period, and 10% cap. Can the buyer recover? How much?',
          'Why has R&W insurance reduced the combativeness of indemnification negotiations in PE deals? What types of claims are typically excluded from R&W policies?',
        ],
      },
    ],
  },

  {
    id: 'law-regulatory',
    title: 'Regulatory & Compliance',
    description: 'SEC regulations, Dodd-Frank, GDPR for business, and insider trading law — the regulatory framework that governs public companies, financial institutions, and global businesses.',
    track: 'law',
    level: 'intermediate',
    estimatedHours: 10,
    icon: '🏛️',
    color: '#6D3B8C',
    topics: [
      {
        id: 'law-reg-1',
        title: 'SEC Regulation & Insider Trading Law',
        content: `The SEC (Securities and Exchange Commission) regulates the disclosure, trading, and capital raising activities of US public companies and investment managers. Understanding SEC rules is essential for anyone working with public companies or in financial markets.

**The SEC's Core Mission:**
Protect investors, maintain fair markets, facilitate capital formation. Two main tools:
1. Disclosure requirements (requiring companies to tell the truth publicly)
2. Anti-fraud enforcement (prosecuting those who deceive investors)

**Key SEC Disclosure Filings:**
- **10-K**: Annual report (audited financials + extensive business description + risk factors)
- **10-Q**: Quarterly report (unaudited quarterly financials + MD&A)
- **8-K**: Material event disclosure (M&A announcements, earnings releases, CEO changes) within 4 business days
- **S-1**: IPO registration statement (future public companies)
- **Schedule 13D/13G**: Filed when an investor crosses 5% ownership threshold
- **Form 4**: Insider transactions (officer/director stock purchases and sales) within 2 business days

**Insider Trading — The Federal Crime:**

**What is Insider Trading?**
Trading securities based on material, non-public information (MNPI) in breach of a duty of trust and confidence.

**Two theories of liability:**
1. **Classical theory**: Corporate insiders (officers, directors, employees) breach their duty to shareholders by trading on MNPI
2. **Misappropriation theory**: Outsiders who misappropriate MNPI from a source who entrusted it to them (lawyers, bankers, accountants)

**Key Legal Elements:**
- Materiality: Would a reasonable investor find the information important in deciding to buy or sell? (Major earnings miss, undisclosed M&A, clinical trial results)
- Non-public: Not available through public sources
- Breach of duty: Must owe a duty of confidentiality to the information source

**The Tipper-Tippee Doctrine:**
Liability extends to those who receive and trade on MNPI from an insider (tippee) if they knew (or should have known) it was improper. The insider tipper is also liable if they received a benefit (even reputational) for tipping.

**MNPI Wall — Financial Institution Controls:**
Banks and PE firms maintain "information barriers" (Chinese walls) between advisory teams with MNPI and trading desks. Employees who cross these barriers commit securities fraud.`,
        keyPoints: [
          'Insider trading requires material, non-public information AND a breach of a duty of trust — accidentally learning MNPI is not automatically a crime',
          '8-K filings must be made within 4 business days of a material event — delays or omissions are themselves violations',
          'Tippees (recipients of inside information) can be liable even if they didn\'t breach a duty themselves — if they knew the source was improper',
          'Information barriers (Chinese walls) are the structural compliance mechanism preventing insider trading at financial institutions',
          'The SEC uses sophisticated data analytics to detect abnormal trading patterns before public announcements',
        ],
        realWorldExample: `**Raj Rajaratnam & Galleon Group (2011): The Largest Hedge Fund Insider Trading Case.** Raj Rajaratnam, founder of Galleon Group ($7B AUM), was convicted of 14 counts of securities fraud and conspiracy. The SEC and FBI used wiretaps (unprecedented in securities fraud cases) to capture Rajaratnam receiving tips from Rajat Gupta (McKinsey CEO and Goldman board member) about Goldman's Berkshire Hathaway investment before announcement. Rajaratnam made $63.8M in illicit profits. Sentence: 11 years in prison. The case showed: (1) the SEC uses wiretaps; (2) even sophisticated hedgeies leave evidence trails; (3) tips from board members of public companies — even casual conversations — create criminal liability. Galleon imploded. Rajaratnam served 7 years.`,
        practiceQuestions: [
          'An investment banker working on a merger is at a dinner party and overhears (doesn\'t participate in) a conversation where a corporate insider discusses the deal. The banker buys stock the next day. Has she committed insider trading? Apply the legal test.',
          'A company\'s CFO tells her brother "don\'t buy our stock right now" before a bad earnings announcement. The brother doesn\'t trade, but tells his friend, who shorts the stock. Who (if anyone) has liability? Apply tipper-tippee analysis.',
          'Design an insider trading compliance program for a 50-person hedge fund. What policies, controls, and training would you implement? What are the highest-risk points of failure?',
        ],
      },
      {
        id: 'law-reg-2',
        title: 'Dodd-Frank, GDPR & Financial Regulation',
        content: `The 2008 financial crisis triggered the most sweeping financial regulation since the Great Depression. Understanding Dodd-Frank, international regulatory frameworks, and data privacy law is essential for anyone working in financial services or global business.

**Dodd-Frank Wall Street Reform Act (2010):**

**What It Was Responding To:**
Systemic risk from interconnected financial institutions, opaque derivatives markets, and inadequate consumer protection.

**Key Provisions:**

**1. Volcker Rule**
Banks cannot engage in proprietary trading (trading for their own account) using insured deposits. Intent: prevent banks from making risky bets with federally insured money. Impact: Goldman Sachs, Morgan Stanley converted to bank holding companies and dramatically reduced prop trading.

**2. Systemically Important Financial Institutions (SIFIs)**
Banks with >$250B in assets (Citi, JPMorgan, BofA, Goldman, etc.) face enhanced capital requirements, stress testing, and "living wills" (plans for orderly wind-down).

**3. Derivatives Regulation (Title VII)**
OTC derivatives (credit default swaps, interest rate swaps) must be cleared through central counterparties (clearinghouses) and reported to trade repositories. Eliminates the bilateral opacity that made the 2008 crisis so contagious.

**4. Consumer Financial Protection Bureau (CFPB)**
New agency to regulate consumer financial products (mortgages, credit cards, student loans). Can issue rules and bring enforcement actions.

**5. Dodd-Frank "Say on Pay"**
Shareholders of public companies get non-binding advisory votes on executive compensation. Forced transparency; significant embarrassment for boards approving excessive pay packages.

**GDPR (General Data Protection Regulation — EU, 2018):**

**Core Principles:**
- **Lawful basis required**: Cannot collect/process personal data without consent, contract, legal obligation, vital interest, public task, or legitimate interest
- **Purpose limitation**: Data collected for one purpose cannot be used for another
- **Data minimization**: Collect only what's necessary
- **Right to erasure ("right to be forgotten")**: Individuals can demand deletion of their data
- **Data breach notification**: Must notify regulators within 72 hours of discovering a breach

**Enforcement:**
Maximum fines: €20M or 4% of global annual revenue (whichever is higher). Meta fined €1.2B in 2023 — largest GDPR fine ever — for transferring EU user data to US servers without adequate safeguards.

**GDPR's Global Impact:**
Even non-EU companies serving EU customers must comply. US tech companies (Google, Meta, Amazon) have spent billions on compliance infrastructure. GDPR has become the de facto global standard; California CCPA, India PDPB, Brazil LGPD all modeled on it.`,
        keyPoints: [
          'The Volcker Rule prohibits banks from proprietary trading with insured deposits — fundamentally changed Wall Street\'s business model',
          'SIFIs (systemically important banks) face enhanced capital requirements and annual stress tests — too big to fail, but now better prepared',
          'Derivatives centralization (Title VII) eliminated the bilateral opacity that allowed AIG\'s credit default swap exposure to destabilize the global system',
          'GDPR\'s 72-hour breach notification requirement forces companies to build rapid detection and response infrastructure',
          'GDPR fines can reach 4% of global revenue — for Meta ($120B revenue), this is a potential €4.8B per violation',
        ],
        realWorldExample: `**Goldman Sachs and the Volcker Rule: Unwinding a $10B Prop Trading Book.** When the Volcker Rule was finalized in 2013, Goldman Sachs had to exit its principal strategies group — a proprietary trading desk that had generated billions in profits. Goldman's response: spin-off the business as an independent hedge fund, or convert positions to client-facing market-making activities (which are explicitly permitted). The Volcker Rule compliance cost Goldman hundreds of millions in compliance infrastructure and eliminated a significant revenue source. But it also reduced the systemic risk of banks using FDIC-insured deposits to fund high-risk trading — the exact behavior that led Goldman to need a $10B TARP bailout in 2008.`,
        practiceQuestions: [
          'Under the Volcker Rule, a bank\'s trading desk buys $500M in corporate bonds and holds them for 60 days, then sells at a profit. Is this proprietary trading or permitted market-making? What factors determine the answer?',
          'A fintech startup collects email addresses for a newsletter. It wants to use those same emails to target users with investment product advertisements. Is this permitted under GDPR? What must the company do?',
          'A bank fails a Fed stress test — its capital ratio falls below the minimum under the adverse scenario. What are the consequences? What actions must the bank take immediately?',
        ],
      },
    ],
  },
];

export const curriculum: Module[] = [...baseCurriculum, ...newModules, ...quantCurriculum, ...techEntrepModules];

export function getModulesByTrack(track: Track) {
  return curriculum.filter((m) => m.track === track);
}

export function getModuleById(id: string) {
  return curriculum.find((m) => m.id === id);
}

export function getTopicById(topicId: string) {
  for (const module of curriculum) {
    const topic = module.topics.find((t) => t.id === topicId);
    if (topic) return { topic, module };
  }
  return null;
}
