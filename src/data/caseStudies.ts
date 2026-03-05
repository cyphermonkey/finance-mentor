import type { CaseStudy } from '../types';
import { newCaseStudies } from './newCaseStudies';

const baseCaseStudies: CaseStudy[] = [
  {
    id: 'case-disney-pixar',
    title: 'Disney Acquires Pixar',
    company: 'The Walt Disney Company',
    industry: 'Media & Entertainment',
    type: 'ma',
    difficulty: 'medium',
    year: '2006',
    dealSize: '$7.4B',
    description: 'How Disney saved its creative soul by paying $7.4B for a company it had previously co-owned and let slip away.',
    background: `By 2005, Disney's animation studio was in crisis. Home on the Range, Treasure Planet, and Brother Bear were box office disappointments. Meanwhile, Pixar — which Disney had distributed since 1995 — was on an unprecedented streak: Toy Story, A Bug's Life, Monsters Inc., Finding Nemo, and The Incredibles. Each film was a blockbuster.

The distribution partnership expired in 2005. Steve Jobs (Pixar's CEO) and Michael Eisner (Disney's CEO) had a famously toxic relationship. Jobs declared negotiations dead. Disney faced the prospect of losing its most important creative partner permanently.

Then Bob Iger replaced Eisner in October 2005. His first call was to Steve Jobs.`,
    keyQuestion: 'Should Disney acquire Pixar for $7.4B, or find an alternative path to reviving Disney Animation?',
    framework: `**Strategic Options Analysis:**
1. Acquire Pixar at the asking price (~$7.4B)
2. Rebuild Disney Animation internally (hire talent, invest $1-2B)
3. Find alternative creative partners (DreamWorks, Sony)
4. Accept diminished animation capabilities

**Valuation Check (2006):**
- Pixar's last 6 films: Average $500M box office globally
- Pixar's 2005 revenue: ~$290M, Net Income: ~$80M
- Acquisition multiple: ~93x earnings, ~25x revenue
- Comparable deal: DreamWorks Animation traded at 30x earnings

At 93x earnings, this looked wildly expensive on a pure DCF basis.

**Strategic Value Analysis:**
- Each Pixar film generates: Box office + DVD/streaming + theme park rides + merchandise (10x multiplier)
- "Finding Nemo" total franchise value: estimated $10B+ over 20 years
- Pixar's talent (John Lasseter, Ed Catmull, Pete Docter) = irreplaceable creative IP
- Synergy: Pixar runs Disney Animation → dramatically increases Disney's creative output`,
    analysis: `Bob Iger's insight: this was not a financial deal, it was a creative capability acquisition.

**The "talent is the asset" thesis:**
- John Lasseter would run both Pixar and Disney Animation
- Ed Catmull's creative culture (Pixar's secret weapon) would revitalize Disney
- The deal price was 2.5% of Disney's market cap — manageable risk for the creative return

**Transaction structure:**
- All-stock deal: 2.3 Disney shares per Pixar share
- Steve Jobs received Disney shares worth ~$3.7B → became Disney's largest individual shareholder
- Lasseter and Catmull received executive roles (a key negotiating point)

**Risk factors:**
- Cultural clash: Pixar's freewheeling startup culture vs. Disney's corporate structure
- Key person risk: What if Jobs/Lasseter left after the deal closed?
- Execution risk: Could Pixar's culture actually be transplanted?`,
    solution: `Disney closed the deal in May 2006 at $7.4B.

**What Happened Next (proof of thesis):**
- **2007:** Ratatouille ($621M global box office)
- **2008:** WALL-E ($521M), nominated for Best Picture
- **2010:** Toy Story 3 ($1.06B) — Disney's first billion-dollar animated film
- **2013:** Frozen ($1.28B) — Disney Animation's own film, revitalized by Lasseter's culture
- **2016:** Finding Dory ($1.03B), Zootopia ($1.02B), Moana ($643M) — THREE $1B+ films in one year
- **2019:** Frozen II ($1.45B), Toy Story 4 ($1.07B)

By 2020, the acquisition had generated an estimated **$100B+ in total franchise value** across box office, streaming, theme parks, and merchandise. The $7.4B investment returned 13x in franchise value in 14 years.

The deal is considered one of the greatest corporate acquisitions in history.`,
    keyLessons: [
      'Strategic value often dwarfs financial value — DCF said "too expensive," strategy said "priceless"',
      'Talent acquisition is a legitimate M&A thesis — culture is an asset that appears on no balance sheet',
      'The right leader (Bob Iger) can unlock deals that seemed impossible under the wrong leader (Eisner)',
      'All-stock deals align incentives — Jobs became Disney\'s largest shareholder, aligning his interests with success',
      'Cultural integration planning is as important as financial due diligence in creative-industry M&A',
    ],
    tags: ['M&A', 'Media', 'Strategic Value', 'Creative Industries', 'Cultural Integration'],
  },

  {
    id: 'case-netflix-pivot',
    title: 'Netflix: The Pivot That Changed Entertainment',
    company: 'Netflix',
    industry: 'Media & Technology',
    type: 'strategy',
    difficulty: 'medium',
    year: '2007-2013',
    description: 'How Netflix cannibalizing its own $1.6B DVD business to build streaming turned a near-bankruptcy into a $300B empire.',
    background: `In 2006, Netflix was the dominant DVD-by-mail service with 6M subscribers and $1.6B in revenue. Blockbuster was bankrupt. Netflix's business model was working brilliantly.

CEO Reed Hastings had a problem: he could see that streaming would eventually destroy the DVD business. The question was: when, and what to do about it?

In 2007, Netflix launched streaming as a free add-on to DVD subscriptions. By 2011, they made a catastrophic decision that nearly destroyed the company: they announced Qwikster — separating the DVD and streaming businesses, effectively raising prices by 60%.

Netflix lost 800,000 subscribers in 3 months. The stock fell 77%. Analysts predicted bankruptcy.`,
    keyQuestion: 'Was the Qwikster decision a strategic mistake, or a necessary step toward a streaming future that was mishandled operationally?',
    framework: `**Strategic Logic Assessment:**
The core question: Was the strategic thesis wrong, or was it right but executed badly?

**Reed Hastings' Strategic Thesis (correct):**
- DVDs would be irrelevant within 10-15 years (bandwidth would catch up)
- Streaming required different infrastructure, content licensing, and culture
- Running both businesses would create internal conflict and misallocate resources
- Better to proactively cannibalize the DVD business than be disrupted by a competitor

**The Execution Failure (wrong):**
- Announced the split without explaining the "why" to customers
- The Qwikster brand was confusing and unappealing
- No separate website was actually ready
- Raised prices simultaneously with reducing value (splitting accounts)
- Communicated via blog post, not transparently with customers`,
    analysis: `**The real lesson is in the recovery:**

Post-Qwikster, Netflix did five things right:
1. Killed Qwikster within 3 weeks (admitted mistake, preserved customer trust)
2. Doubled down on streaming investment ($3B content spend in 2013)
3. Launched original content with House of Cards (2013) — $100M bet that changed the industry
4. International expansion (40+ countries by 2014)
5. Maintained DVD business as a profitable cash cow funding streaming growth

**House of Cards: The Strategic Bet:**
Netflix had viewer data showing: subscribers who watched David Fincher films, Kevin Spacey films, and political dramas were highly engaged. Commission a Fincher + Spacey political drama, and it will retain subscribers who might otherwise cancel.

This data-driven approach to content (invisible to traditional Hollywood) became Netflix's structural advantage.`,
    solution: `**Results:**
- 2012: 33M subscribers after Qwikster debacle recovery
- 2015: 75M subscribers, operating in 60 countries
- 2020: 200M subscribers, $25B revenue
- 2023: 260M subscribers, $33B revenue, $7B free cash flow

**The industry-wide impact:**
- Disney launched Disney+ in 2019 (defensive response)
- HBO launched HBO Max (defensive response)
- NBCUniversal launched Peacock (defensive response)
- Every media company was forced into streaming — on Netflix's terms

Netflix's willingness to cannibalize its own profitable business is now a Harvard Business School case study in proactive self-disruption.`,
    keyLessons: [
      'Proactive self-disruption is better than being disrupted — but timing and communication are everything',
      'Data as competitive advantage: Netflix knew what to make before asking viewers',
      'Admitting mistakes quickly (killing Qwikster in 3 weeks) is a strategic strength, not weakness',
      'The "innovator\'s dilemma" — protecting the core business can destroy the future business',
      'International expansion + original content created a flywheel that traditional media couldn\'t replicate',
    ],
    tags: ['Strategy', 'Digital Transformation', 'Disruption', 'Content', 'Subscription Business'],
  },

  {
    id: 'case-apple-turnaround',
    title: "Apple's Return from the Dead",
    company: 'Apple Inc.',
    industry: 'Technology',
    type: 'turnaround',
    difficulty: 'easy',
    year: '1997-2001',
    description: "Steve Jobs' playbook for turning a company 90 days from bankruptcy into the world's most valuable. A masterclass in strategic simplicity.",
    background: `In 1996, Apple was losing $1B per year. Microsoft had 95% PC market share. Apple's product line had sprawled to 12 desktop models, multiple printers, cameras, and PDAs — none of which were clearly differentiated. Engineers worked on products they couldn't explain to family members.

Gil Amelio bought NeXT in December 1996 to get the OS technology — and with it, Steve Jobs returned to Apple. In July 1997, the board fired Amelio and Jobs became interim CEO.

Apple had 90 days of cash left.`,
    keyQuestion: 'How do you turn around a company with 90 days of cash, a bloated product line, demoralized employees, and an existential threat from Microsoft?',
    framework: `**McKinsey's hypothetical approach:**
Issue tree for "How to save Apple":
- **Revenue** (increase): new products that people want to buy
- **Cost** (decrease): eliminate products/divisions burning cash with no future
- **Culture** (rebuild): attract talent who believe in the mission

**Jobs' actual approach (simpler and more radical):**
1. Simplify first, grow second
2. Design as strategy, not decoration
3. Vertical integration (control hardware + software)
4. Create products you want to exist in the world`,
    analysis: `**The Product Matrix Decision:**
Jobs drew a 2x2 grid on a whiteboard:
- Consumer vs. Professional (rows)
- Desktop vs. Portable (columns)
Four products. Only four. Kill everything else.

This eliminated:
- Newton (PDA) — $100M/year division. Jobs killed it on day one.
- Printers — spun off
- Multiple Mac variants — reduced to 4
- 7 of 12 desktop models immediately

**The Microsoft deal (context matters):**
Jobs negotiated a $150M investment from Microsoft — presented as a lifeline but actually protecting a market that Apple needed Microsoft Office to serve.

**The Think Different campaign:**
Jobs spent $100M on advertising in 1997 ("Here's to the crazy ones...") when the company had 90 days of cash. The board thought he was insane. He was right — brand equity is a long-term asset; cutting it is borrowing from the future.`,
    solution: `**The iMac (1998) — the pivot product:**
Translucent "Bondi Blue" computer at $1,299. Designed by Jony Ive. "The back of our computer looks better than the front of anyone else's."

Month 1: 278,000 units sold. Best-selling computer in the US.
Year 1: $6.1B in revenue — Apple profitable again.

**The iPod (2001) — the true transformation:**
Not an MP3 player. A service business: iPod + iTunes + iTunes Store. 70 cents of every $1 went to record labels. Apple kept 30 cents. Then they sold 100M iPods at $299.

This 30% platform take rate — the "Apple Tax" — became the template for the App Store ($30B+ annual revenue), Apple Music, Apple TV+, and the entire services business now worth $1T.

**From $1B loss to $3T:**
1997 market cap: $3B
2024 market cap: $3T
Return: 1,000x in 27 years

CAGR: ~33% annually — 3x the S&P 500 over the same period.`,
    keyLessons: [
      'Subtraction is strategy: Jobs\' best product decision was killing 8 products, not launching 1',
      'Design is a competitive moat: the iMac\'s design commanded 30% price premium vs. identical-spec Dells',
      'Platform + ecosystem = durable cash flows: the 30% App Store take rate is the inheritance of the iTunes model',
      'Brand investment in crisis is counterintuitive but correct: Think Different spending when bankrupt was right',
      'Focus over diversification: Apple\'s revenue concentration in iPhone (55%) is a strength, not a risk',
    ],
    tags: ['Turnaround', 'Strategy', 'Product Strategy', 'Brand', 'Platform Business'],
  },

  {
    id: 'case-mckinsey-retail-bank',
    title: 'McKinsey: Retail Bank Profitability',
    company: 'Anonymous Regional Bank (US)',
    industry: 'Financial Services',
    type: 'consulting',
    difficulty: 'medium',
    year: '2019',
    description: "A classic McKinsey profitability case — how a regional bank's 40% ROE decline was diagnosed and fixed in 6 months.",
    background: `A regional US bank with $80B in assets had seen ROE decline from 16% to 10% over three years. The CFO blamed "market conditions." The CEO suspected deeper structural issues but lacked clarity. The board hired McKinsey for a 6-month engagement.

Initial hypothesis: the problem was either revenue (margins compressed or volume declined) or costs (efficiency ratio deteriorated) — or both.`,
    keyQuestion: 'What caused the ROE to fall from 16% to 10%, and what specific actions will restore it to 14%+ within 18 months?',
    framework: `**McKinsey's Issue Tree:**

ROE = Net Income / Equity
Decline could be driven by:

**Revenue Issues:**
- Net Interest Margin (NIM): spread between lending rate and deposit cost
  - Is lending rate lower? (competitive pressure, rate cuts)
  - Is deposit cost higher? (competitor pricing, wholesale funding mix)
- Non-interest income: fees, wealth management, trading
  - Volume decline?
  - Regulatory caps on fees?

**Cost Issues:**
- Provision for credit losses (loan defaults increasing?)
- Operating efficiency: personnel, branches, technology
- Was cost structure appropriate for revenue base?

**Capital Issues:**
- Did equity base increase without corresponding profit growth?
- Share issuance or reduced buybacks?`,
    analysis: `**Data collection phase (Month 1-2):**
McKinsey analyzed 3 years of financial data and benchmarked against 15 regional peers.

**Finding 1: NIM compressed 0.6% — but only 0.2% is from market rates**
- Fed rate cuts explain 0.2% NIM compression (industry-wide)
- Remaining 0.4% was specific to this bank
- Root cause: aggressive competitor (Chase expansion) forced this bank to raise CD rates by 0.4% to retain deposits

**Finding 2: Branch cost structure was built for 2010**
- 187 branches in the network
- 35 branches with <100 transactions/day (breakeven = 200/day)
- Digital adoption: only 42% of customers used mobile banking vs. 68% at peer banks
- Branch network costing $340M/year; peer efficiency ratio was 20% lower

**Finding 3: Loan portfolio quality was actually improving**
- NPL ratio fell from 1.2% to 0.8% — this was NOT the problem
- Provisions were slightly high vs. actual losses — opportunity to release reserves

**The real problem:** Deposit pricing + branch inefficiency. Not credit quality (the CFO's original worry).`,
    solution: `**McKinsey's 3 Recommendations:**

1. **Deposit Re-pricing Strategy** (+0.25% NIM)
   - Implement tiered pricing: rate-sensitive customers get competitive rates; loyal customers get relationship pricing
   - Launch digital savings account at competitive rate to attract new deposits without repricing all existing deposits
   - Expected impact: NIM improvement of 0.25% = $200M in revenue

2. **Branch Network Optimization** ($150M cost reduction)
   - Close 42 underperforming branches over 18 months
   - Invest $80M in digital banking (app redesign, mobile deposit, AI chatbot)
   - Retrain 300 bankers as financial advisors (higher-value, fee-generating role)
   - Net impact: $150M annual cost savings; branch cost/transaction falls 35%

3. **Wealth Management Expansion** (+$120M revenue)
   - Only 12% of HNW customers (>$500K assets) are using the bank's wealth services
   - Industry average: 35% penetration
   - Hire 80 wealth advisors targeting existing HNW relationships
   - Expected fee revenue: $120M by Year 2

**Combined impact:**
- Revenue increase: $320M
- Cost reduction: $150M
- ROE improvement: 10% → 15.5% within 24 months
- ROE target (14%) achieved in 18 months

McKinsey fee: $12M. Client impact: $470M in annual profit improvement. ROI: 39x.`,
    keyLessons: [
      'The stated problem (market conditions) was a hypothesis — McKinsey\'s value was testing it rigorously',
      'Benchmark against peers before drawing conclusions: the 0.4% deposit cost problem was invisible without peer comparison',
      'Recommendations must be specific and quantified: not "optimize branches" but "close 42 specific branches, saving $150M"',
      'The CFO\'s instinct (credit quality) was wrong; consultants must be willing to deliver uncomfortable truths',
      'Always connect operational metrics to financial impact — bankers speak P&L, not transaction counts',
    ],
    tags: ['Consulting', 'Banking', 'Profitability', 'Cost Reduction', 'McKinsey'],
  },

  {
    id: 'case-amazon-aws',
    title: 'Amazon Bets the Company on AWS',
    company: 'Amazon Web Services',
    industry: 'Cloud Computing',
    type: 'strategy',
    difficulty: 'hard',
    year: '2006-2014',
    description: "How Jeff Bezos turned Amazon's internal infrastructure into a $100B+ business that now funds everything Amazon does.",
    background: `In 2003, Amazon's software engineers had a dirty secret: building new features was nearly impossible because every team had to rebuild the same infrastructure from scratch. Payments, databases, compute, storage — every team built its own.

VP Andy Jassy and a small team spent 2003 mapping what a "perfect IT department" would look like as a set of web services. The insight: if Amazon needed these services, so did every startup and enterprise in the world.

Amazon launched AWS in March 2006 with Simple Storage Service (S3) and Elastic Compute Cloud (EC2). Pricing: $0.10/GB stored. Competitors laughed. Oracle's Larry Ellison called it "fashionable nonsense."`,
    keyQuestion: 'Was AWS a strategic genius move or lucky opportunism? How should Amazon have valued and grown this business?',
    framework: `**Strategic Analysis Framework:**

**Platform Business Economics:**
- AWS is a platform, not a product
- Network effects: More customers → more data center investment → lower unit costs → more customers
- Switching costs: Once infrastructure is built on AWS, migration takes years and millions
- Capital requirements: Data centers cost $1-5B each — high capex moat

**TAM Analysis (2006):**
- Global IT spending: $2.7T annually
- Infrastructure portion: ~$500B (servers, storage, networking)
- Migration rate assumption: 10-30% over 10 years → $50-150B addressable market
- Conservative estimate: $50B revenue potential — on $10B Amazon revenue in 2006, this was a 5x company`,
    analysis: `**The counter-intuitive pricing decision:**
AWS priced at $0.10/GB when data center costs were $5-10/GB for most companies. How?

Amazon had already paid for the infrastructure to handle peak holiday traffic. It sat idle 70% of the year. AWS was monetizing the spare capacity at near-zero marginal cost.

As AWS grew, Amazon built purpose-built data centers for AWS — driving cost of storage down from $0.10 to $0.023/GB today. **This is the flywheel:** more customers → more investment → lower costs → more customers.

**The "regret minimization" framework (Bezos):**
"I knew that when I was 80, I would never regret having tried this. I would only regret not trying." — The decision criterion wasn't NPV, it was strategic optionality.

**Why Oracle and HP missed it:**
- Oracle: Committed to on-premise software licensing ($10K+/server/year)
- HP: Committed to selling hardware
- IBM: Committed to services contracts
All were protecting existing revenue streams — the innovator's dilemma in real time.`,
    solution: `**AWS Timeline:**
- 2006: $0M in revenue (launched March)
- 2010: $500M in revenue (first public disclosure)
- 2015: $8B in revenue, $1.5B in operating income (36% margin)
- 2020: $45B in revenue, $14B operating income (31% margin)
- 2023: $91B in revenue, $25B operating income (28% margin)

**What AWS funds:**
AWS's $25B annual operating profit effectively subsidizes:
- Amazon's retail business (runs at 2-3% margins)
- Prime Video ($15B content spend)
- Amazon Logistics infrastructure
- Alexa/Ring/smart home R&D
- Healthcare, pharmacy, grocery expansion

Without AWS, Amazon's stock price would be 60% lower. AWS is the engine of Amazon's diversification strategy.

**Competitive landscape by 2024:**
- AWS: 31% market share
- Microsoft Azure: 25% market share
- Google Cloud: 11% market share

Combined $350B+ cloud infrastructure market — Ellison was not just wrong, he was catastrophically wrong.`,
    keyLessons: [
      'Internal tools as products: Amazon\'s "best product" grew from solving its own problem first',
      'Platform economics: once infrastructure is commoditized, the moat is scale, not technology',
      'Predatory pricing can be legal and strategic: price at cost to capture market, then reduce costs through scale',
      'The innovator\'s dilemma is real: Oracle, HP, IBM all saw AWS coming and couldn\'t respond (protected existing revenues)',
      '"Regret minimization" is a valid strategic decision framework for bets with massive optionality upside',
    ],
    tags: ['Platform Strategy', 'Cloud', 'Disruption', 'Capital Allocation', 'Amazon'],
  },

  {
    id: 'case-enron',
    title: 'The Enron Collapse: Reading the Warning Signs',
    company: 'Enron Corporation',
    industry: 'Energy',
    type: 'valuation',
    difficulty: 'hard',
    year: '2001',
    description: 'What the financial statements tried to tell you — and why most analysts missed it until it was too late.',
    background: `Enron was named "America's Most Innovative Company" by Fortune Magazine six consecutive years (1996-2001). Its stock peaked at $90.56 in August 2000 — a market cap of $65B.

On December 2, 2001, Enron filed for bankruptcy — the largest in US history at the time.

The question every finance student must answer: **Was this detectable from public information?**`,
    keyQuestion: 'What signals in Enron\'s public financial statements should have warned analysts, and what does this teach us about financial analysis?',
    framework: `**Forensic Financial Analysis Framework:**
1. Cash flow vs. earnings divergence
2. Off-balance sheet liabilities
3. Related party transactions
4. Management credibility signals
5. Accounting policy changes`,
    analysis: `**Warning Sign #1: Cash Flow vs. Earnings Divergence**
- 2000 Net Income: $979M (reported profit)
- 2000 Operating Cash Flow: $4.8M (virtually zero)
- Normal companies: FCF ≈ Net Income
- Enron: Net Income 200x Operating Cash Flow

This is the single most reliable fraud indicator. When a company reports huge profits but generates no cash, the profits are likely fictitious.

**Warning Sign #2: The SPE Structure**
Enron created hundreds of "Special Purpose Entities" (SPEs) — subsidiaries with obscure names like LJM Cayman and Raptor. These SPEs:
- Bought bad assets from Enron at inflated prices
- Were funded by Enron's own stock
- Were technically "off-balance sheet" under Enron's (creative) accounting interpretation

Translation: Enron was selling assets to itself, reporting gains, and hiding the debt in entities it controlled but claimed to be independent.

**Warning Sign #3: Return on Invested Capital**
- Enron's ROIC: 7% (barely above cost of capital at 8%)
- Enron's reported P/E: 55x
- Peer energy companies: P/E of 15-20x

A company with mediocre returns on capital should not trade at a premium P/E. The gap between reported earnings quality and valuation was extreme.

**Warning Sign #4: Management Incentives**
- CFO Andrew Fastow ran the SPEs personally (earning $30M from them while employed by Enron)
- This is an undisclosed conflict of interest — buried in footnotes
- CEO Jeffrey Skilling sold $66M in Enron stock in 2000-2001 while publicly bullish
- Insider selling at peak valuations is a reliable negative signal

**Who saw it?**
- Jim Chanos (Kynikos Associates) shorted Enron in November 2000 after reading the annual report and finding the SPE disclosure in the footnotes
- Short sellers are often the best forensic accountants on Wall Street`,
    solution: `**The Collapse:**
- August 2001: Skilling resigned "for personal reasons" (he had never resigned from anything)
- October 2001: Announced $1.2B equity reduction (the SPE structure was unwinding)
- November 2001: Restated earnings for 4 years — $600M of "profits" disappeared
- December 2, 2001: Filed for bankruptcy

**The Human Cost:**
- 20,000 employees lost jobs
- Employee 401(k) plans (70% Enron stock) wiped out — $1.2B in retirement savings gone
- 29 executives indicted; Skilling sentenced to 24 years in prison
- Arthur Andersen (auditor) convicted of obstruction of justice — a 90-year-old firm destroyed

**What Changed:**
- Sarbanes-Oxley Act (2002): CEOs must personally certify financial statements
- Audit committee independence requirements
- SPE consolidation rules tightened (FASB ASC 810)

**The Lesson:** Every sophisticated financial analysis must include cash flow forensics — earnings without cash is fiction.`,
    keyLessons: [
      'Cash flow is truth; earnings are opinion — the divergence between them is the most reliable fraud signal',
      'Read the footnotes: Enron\'s SPE structure was disclosed in footnotes most analysts never read',
      'Insider selling at peaks is not always indicative, but combined with other signals becomes conclusive',
      'Auditor independence is not sufficient — Arthur Andersen earned $50M/year from Enron in audit AND consulting fees',
      'Market consensus can be wrong for years — Enron was "Most Innovative" while committing fraud',
    ],
    tags: ['Fraud Detection', 'Accounting', 'Risk', 'Forensic Finance', 'Corporate Governance'],
  },

  {
    id: 'case-blackstone-hilton',
    title: "Blackstone's $26B Hilton Hotels Acquisition",
    company: 'Hilton Hotels Corporation / Blackstone Group',
    industry: 'Hospitality & Real Estate',
    type: 'ma',
    difficulty: 'hard',
    year: '2007',
    dealSize: '$26B',
    description: "The greatest private equity real estate deal in history — how Blackstone bought Hilton at the peak of the cycle, survived the worst financial crisis since 1929, and ultimately made $14B in profit.",
    background: `In July 2007, Blackstone Group announced the acquisition of Hilton Hotels Corporation for $26B — the largest hotel acquisition in history and one of the last great deals before the 2008 financial crisis.

Blackstone paid $47.50/share — a 32% premium to Hilton's trading price. The deal used approximately $20.5B in debt (79% leverage) and $5.7B in equity. This was peak-cycle PE dealmaking: aggressive leverage, high price, and maximum optimism about hospitality demand.

Three months after closing (October 2007), the global financial crisis began. Lehman Brothers collapsed in September 2008. Travel demand cratered. Hilton's revenue fell 20%. Blackstone's $26B acquisition looked like a catastrophic miscalculation.`,
    keyQuestion: 'How do you value and structure a $26B hotel acquisition, and how do you create value when the worst possible macroeconomic scenario materializes immediately after closing?',
    framework: `**LBO Analysis Framework:**

**Entry Valuation (2007):**
- Purchase price: $26B ($47.50/share)
- Hilton EBITDA (2006): ~$1.3B
- Entry EV/EBITDA multiple: ~14.5x (high for a cyclical hospitality company)
- Debt: $20.5B (79% LTV — aggressive even in 2007)
- Equity: $5.7B

**Value Creation Levers in a Hotel LBO:**
1. EBITDA growth (RevPAR improvement × expanding margins)
2. Multiple expansion (buy low, sell higher multiple)
3. Financial engineering (debt paydown, refinancing at lower rates)
4. Asset monetization (sell real estate, retain management contracts)
5. Brand expansion (add franchised hotels without capital)

**The "Reverse" Thesis:**
Asset-light model: Hilton should own fewer buildings, franchise more. Management contract revenue is high-margin, capital-light, and counter-cyclical to occupancy.`,
    analysis: `**The Crisis Response (2008-2010):**

When travel demand collapsed, Blackstone did three things competitors didn't:

**1. Hired Jon Gray and brought extraordinary management**
Blackstone installed Chris Nassetta as CEO in December 2007 — just as the crisis began. Nassetta had turned around Host Hotels; he knew hotel operations deeply. Management quality became the key differentiating factor.

**2. Restructured $20.5B in debt — twice**
In early 2010, Hilton restructured its debt (swapped equity for debt forgiveness), reducing the debt burden from $20.5B to $16B. This was complex, multi-lender negotiation across hundreds of tranches. Blackstone's relationship capital and legal expertise made this possible.

**3. Executed the asset-light transformation**
During the downturn, Hilton aggressively expanded through franchising (no capital required):
- 2007: 3,000 hotels under management
- 2013 (IPO): 4,000+ hotels
- The expansion happened during a recession — because franchisees needed the Hilton brand more than ever

**RevPAR Recovery:**
RevPAR (Revenue Per Available Room) is the primary hotel operating metric.
- 2008: RevPAR -17% (crisis)
- 2010: RevPAR recovering
- 2013: RevPAR at new all-time highs

**The IPO (December 2013):**
Hilton went public at $20/share, valuing the company at $32.7B — 6 years after the acquisition.`,
    solution: `**The Numbers:**

- Entry equity investment: $5.7B (2007)
- IPO + subsequent stock sales: $14B returned to Blackstone
- Net profit: ~$14B on $5.7B invested
- Equity multiple: ~2.5x
- IRR: ~25% over 11 years

Blackstone held Hilton stock for years after the IPO, selling into strength. Total realized + unrealized profit at peak: ~$14B.

**What Made This Work Despite the Worst Possible Timing:**
1. Management quality: Nassetta's operational excellence drove margin expansion even in a downturn
2. Balance sheet restructuring: Blackstone's relationships allowed debt renegotiation that most owners couldn't achieve
3. Brand strength: Hilton's brand power sustained franchisee demand even in recession
4. Asset-light transformation: fewer capital-intensive owned properties = less financial stress during downturn
5. Long hold period: 11 years allowed full cycle recovery — PE flexibility vs. public company quarterly pressure

**The Industry-Wide Lesson:**
Blackstone-Hilton is the canonical case for: timing matters less than management quality, balance sheet management, and the ability to execute a clear value-creation thesis through a cycle.`,
    keyLessons: [
      'Management quality is the #1 value driver in PE — installing Nassetta transformed what looked like a disaster into the greatest hotel deal ever',
      'Balance sheet flexibility is a competitive advantage — Blackstone\'s ability to restructure $20.5B in debt saved the investment',
      'Asset-light business model transformation increases equity value without requiring additional capital investment',
      'Long hold periods in PE allow recovery from bad macro timing — the 11-year hold was the margin of safety',
      'RevPAR (Revenue Per Available Room) is the leading indicator for hotel investment performance — know your KPIs before you buy',
    ],
    tags: ['Private Equity', 'Real Estate', 'LBO', 'Hospitality', 'Crisis Recovery', 'Blackstone'],
  },

  {
    id: 'case-2008-financial-crisis',
    title: 'The 2008 Financial Crisis: Systemic Risk & CDOs',
    company: 'Global Financial System',
    industry: 'Financial Services / Banking',
    type: 'crisis',
    difficulty: 'hard',
    year: '2008',
    dealSize: '$22T+ (global wealth destroyed)',
    description: 'The most important financial event of the 21st century — how CDOs, leverage, and interconnected risk brought the global financial system to the brink of collapse. What every finance professional must understand.',
    background: `Between 2003 and 2006, the US housing market experienced unprecedented appreciation driven by: record-low interest rates (Fed Funds Rate cut to 1%), lax lending standards, and a financial innovation — the Collateralized Debt Obligation (CDO) — that appeared to transform risky mortgages into AAA-rated securities.

By 2006: $1.3T in subprime mortgages had been originated, packaged into mortgage-backed securities (MBS), and sold to investors globally. Fannie Mae and Freddie Mac held $5T in mortgage exposure. Banks were leveraged 30-40x.

When housing prices peaked (July 2006) and began falling, the system began to unwind. By September 2008, Lehman Brothers had filed for the largest bankruptcy in US history ($639B in assets). The global financial system was 72 hours from collapse.`,
    keyQuestion: 'How did a surge in subprime mortgage defaults — a relatively small portion of the US credit market — nearly collapse the entire global financial system?',
    framework: `**The Systemic Risk Framework:**

**Five Transmission Mechanisms:**
1. Leverage amplification (small losses wiped out equity at 30-40x leverage)
2. Opacity and information asymmetry (nobody knew who held what CDO tranche)
3. Interconnectedness (AIG's CDS exposure linked 1,000+ institutions)
4. Short-term funding dependency (money market funds, repo financing)
5. Mark-to-market accounting and fire sales (falling prices forced more selling)

**CDO Mechanics:**
Step 1: Originate subprime mortgages (NINJA loans: No Income, No Job, No Assets)
Step 2: Pool 1,000+ mortgages into MBS
Step 3: Pool 100+ MBS tranches into a CDO
Step 4: Rate tranches by credit agency (AAA senior, BB mezzanine, equity)
Step 5: Sell to pension funds, insurance companies, European banks
Step 6: Create synthetic CDOs (using credit default swaps instead of actual mortgages — infinite leverage)`,
    analysis: `**The Fatal Flaws:**

**Flaw #1: Rating Agency Models Were Wrong**
Moody's and S&P gave AAA ratings to CDO tranches based on historical default correlation assumptions (pre-2000 data). The models assumed house prices would never fall simultaneously across all US markets. They were catastrophically wrong: 2007-2008 saw nationwide price declines of 30-40%.

**Flaw #2: AIG's $440B CDS Book**
AIG's Financial Products unit sold $440B in credit default swaps — essentially insurance on CDO tranches. They received premiums but reserved nothing for losses (believed the models). When CDOs defaulted, AIG owed $440B and had ~$5B. The US government nationalized AIG for $180B to prevent a counterparty cascade.

**Flaw #3: Short-Term Funding Long-Term Assets**
Banks funded 30-year mortgages with overnight repo loans. When repo lenders refused to roll over (due to counterparty concerns), banks had to sell assets. Selling drove prices down. Lower prices triggered margin calls. More selling. Classic bank run on wholesale funding.

**Flaw #4: Lehman's Failure Was Underestimated**
Treasury and Fed let Lehman fail, believing the market could absorb it. They were wrong: $639B in assets unwound over weeks, money market funds "broke the buck" (Reserve Primary Fund fell to $0.97/share), and corporate commercial paper markets froze globally.

**The 72 Hours:**
September 18, 2008: Treasury Secretary Paulson and Fed Chair Bernanke met with Congressional leaders. Bernanke said: "If we don't act immediately, we will not have an economy on Monday." Congress passed the $700B TARP (Troubled Asset Relief Program) within 11 days.`,
    solution: `**Government Response:**
- TARP ($700B): Capital injections into banks; ultimately returned $50B profit to taxpayers
- Fed emergency lending: $16T+ in emergency loans to financial institutions globally
- Fannie/Freddie conservatorship: $187B in government support
- AIG bailout: $180B
- Stimulus: $787B American Recovery and Reinvestment Act (2009)

**The Human Cost:**
- 8.7 million jobs lost (2008-2010)
- $22T in household wealth destroyed
- 3.8 million foreclosures (2008-2010)
- S&P 500 fell 57% (Oct 2007 to Mar 2009)

**Regulatory Response:**
Dodd-Frank Act (2010): enhanced bank capital requirements, Volcker Rule, derivatives clearing, CFPB creation, SIFI designation for systemically important banks.

**What Recovered:**
- S&P 500 recovered all losses by April 2013
- Housing prices recovered to 2006 levels by 2016
- US unemployment returned to pre-crisis levels by 2016

**What Changed Permanently:**
- Banks now hold 3x more capital than pre-crisis
- No more bank-run securitization without skin in the game (5% retention)
- Money market funds have liquidity gates
- Derivatives are cleared centrally`,
    keyLessons: [
      'Leverage amplifies everything — at 30x leverage, a 3% asset decline wipes out all equity; systemic leverage creates systemic fragility',
      'Opacity is a systemic risk factor — when nobody knows who holds what, fear becomes contagious and rational actors stop transacting',
      'Rating agency conflicts of interest (issuer-pays model) produced systematically biased ratings that investors relied on fatally',
      'Short-term funding of long-term assets is a classic bank run setup — liquidity mismatches create fragility even for solvent institutions',
      'The 2008 crisis was preventable but not predicted by most — understanding it requires reading Michael Lewis\'s "The Big Short" and studying CDO structure, leverage ratios, and AIG\'s CDS book',
    ],
    tags: ['Financial Crisis', 'Systemic Risk', 'CDOs', 'Banking', 'Leverage', 'Regulation', 'Macroeconomics'],
  },

  {
    id: 'case-evergrande',
    title: "China Evergrande's $300B Debt Crisis",
    company: 'China Evergrande Group',
    industry: 'Real Estate Development',
    type: 'crisis',
    difficulty: 'hard',
    year: '2021',
    dealSize: '$300B+ (total liabilities)',
    description: "How the world's most indebted company collapsed — the $300B real estate debt crisis that exposed China's property sector, threatened global contagion, and redefined emerging market real estate risk.",
    background: `China Evergrande Group was, for years, China's largest real estate developer by sales. Founded by Xu Jiayin in 1996, Evergrande grew to become a symbol of China's extraordinary urbanization — building 1.4 million homes per year at its peak.

Evergrande's business model was simple and aggressive: presell apartments before construction, use the proceeds to buy more land, build with more borrowed money, presell more apartments. At peak, Evergrande had:
- 1,300+ development projects across 280 Chinese cities
- $300B+ in total liabilities (the largest in the world for any real estate company)
- 200,000 employees
- Debts to 171 domestic banks and 121 international banks

In August 2020, the Chinese government implemented the "Three Red Lines" policy — credit limits for property developers based on leverage ratios. Evergrande failed all three. Access to new borrowing was cut off. The Ponzi-like funding structure began to collapse.`,
    keyQuestion: "How did a company with $110B in annual revenue collapse, and what does Evergrande teach us about the risks of China's real estate sector and emerging market corporate debt?",
    framework: `**Analyzing a Real Estate Developer Collapse:**

**Red Lines That Evergrande Failed:**
1. Liabilities-to-Assets ratio < 70%: Evergrande at 83% (FAIL)
2. Net Debt-to-Equity ratio < 100%: Evergrande at 153% (FAIL)
3. Cash-to-Short-Term Debt ratio > 1x: Evergrande at 0.36x (FAIL)

**The Liquidity Death Spiral:**
Phase 1: Presales fund construction of earlier projects (classic Ponzi/pyramid structure)
Phase 2: New borrowing funds land acquisition and interest payments
Phase 3: "Three Red Lines" cuts off new borrowing
Phase 4: Presales slow as buyers fear non-delivery
Phase 5: Cash flow insufficient to fund construction AND debt service
Phase 6: Construction halts → buyers demand refunds → more cash drain
Phase 7: Default

**Systemic Risk Assessment:**
- China's property sector = 25-30% of GDP (vs. 10% in US at 2007 peak)
- Evergrande = 3-4% of Chinese property sector
- Contagion risk: 171 domestic banks, 121 international banks, 1.6 million homebuyers who paid for unbuilt apartments`,
    analysis: `**What Went Wrong:**

**Management Hubris and Diversification:**
Xu Jiayin used real estate cash flows to fund non-core ventures:
- Evergrande Health (electric vehicles — EV startup with no product)
- Evergrande Culture (theme parks, sports teams, pig farming)
- Evergrande Ice/Snow (ski resorts)
Each venture absorbed billions without generating returns, funded by real estate debt.

**Structural Fragility:**
Evergrande's business required three things to be true simultaneously:
1. Property prices continuing to rise (buyers must believe future value exceeds deposit paid)
2. Access to new debt (to fund construction of presold units)
3. Regulatory stability (no sudden credit restrictions)

All three failed simultaneously in 2020-2021.

**The "Hidden" Liabilities:**
Evergrande's $300B liability figure understated the true exposure. Beyond bank debt and bonds:
- Commercial paper issued to suppliers (accepted as payment — circular)
- Wealth management products sold to retail investors ($6B+)
- Contractor payables (often paid in unsold apartments, not cash)
- Government land payment obligations

**International Investor Exposure:**
Evergrande's US dollar bonds ($19B outstanding) were held by international asset managers — BlackRock, HSBC, UBS, Ashmore. When Evergrande missed bond payments in September 2021, international markets panicked, briefly triggering "Lehman moment" comparisons.

**The Chinese Government Response:**
Unlike 2008 Lehman, China did NOT let Evergrande's collapse cascade uncontrolled:
- Managed default: selected creditor groups prioritized (domestic banks, homebuyers)
- Supervised restructuring: local governments took control of projects
- Dollar bondholders: received near-zero recovery — the implicit message: international creditors are last
- Xu Jiayin: placed under investigation; detained in 2023`,
    solution: `**What Happened:**

- September 2021: First missed dollar bond coupon payment → default
- January 2024: Hong Kong court ordered Evergrande's liquidation
- Recovery rates: Domestic secured creditors ~30-50%; Dollar bondholders ~2-3 cents/dollar
- Unfinished apartments: 1.6 million Chinese homebuyers stuck with paid-for, unbuilt homes
- Chinese government response: "Guaranteed delivery" programs funded by state banks

**Broader China Real Estate Fallout:**
Evergrande was not alone — Country Garden ($200B liabilities), Sunac, Kaisa, and 30+ other developers defaulted in 2021-2023. China's property market declined 30-40% in tier-2 and tier-3 cities. GDP growth slowed from 8%+ to 5%.

**Global Contagion:**
The feared Lehman-moment contagion did NOT materialize:
- China ring-fenced the crisis domestically
- International dollar bond losses absorbed (~$40-50B) without systemic cascade
- Lesson: China's capital controls and state banking system can contain domestic financial crises in ways that open market economies cannot

**The Investment Lesson:**
EM corporate debt requires analysis of: government policy risk (Three Red Lines came with no warning), political risk (will the government prioritize foreign creditors?), and structural fragility (business model dependent on perpetual growth).`,
    keyLessons: [
      'Real estate development business models dependent on presales + perpetual debt access are inherently fragile — they are Ponzi structures when growth stops',
      'The "Three Red Lines" policy showed that Chinese regulatory changes can materialize overnight — political risk is a first-order concern in EM corporate credit',
      'Diversification into unrelated ventures (EVs, pig farming) using real estate debt is a massive red flag — management capital allocation discipline matters',
      'Foreign dollar bondholders in Chinese corporate debt have been treated as last priority in restructuring — always assess recovery hierarchy in EM sovereign and quasi-sovereign contexts',
      'A property sector representing 25-30% of GDP creates systemic risk that no single company collapse can fully resolve — China\'s real estate deleveraging will take a decade',
    ],
    tags: ['Real Estate', 'Emerging Markets', 'Debt Crisis', 'China', 'Leverage', 'Corporate Default', 'Systemic Risk'],
  },
];

export const caseStudies: CaseStudy[] = [...baseCaseStudies, ...newCaseStudies];

export function getCaseById(id: string) {
  return caseStudies.find((c) => c.id === id);
}

export function getCasesByType(type: CaseStudy['type']) {
  return caseStudies.filter((c) => c.type === type);
}

export function getCasesByDifficulty(difficulty: CaseStudy['difficulty']) {
  return caseStudies.filter((c) => c.difficulty === difficulty);
}
