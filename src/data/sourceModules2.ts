import type { Module } from '../types';

// Modules built from: 400 IB Interview Q&A (Breaking Into Wall Street),
// NISM Series XV Research Analyst Workbook (November 2025),
// InsightSquad Advanced Accounting & M&A Modeling courses

export const sourceModules2: Module[] = [

  // ─── IB INTERVIEW: ENTERPRISE & EQUITY VALUE ─────────────────────────────
  {
    id: 'ib-enterprise-equity-value',
    title: 'IB Interview: Enterprise & Equity Value',
    description: 'The most misunderstood concept in IB interviews — Enterprise Value vs Equity Value — with exact Q&A from the Breaking Into Wall Street 400 Questions guide.',
    track: 'finance',
    level: 'intermediate',
    estimatedHours: 4,
    icon: '🏢',
    color: '#2563EB',
    topics: [
      {
        id: 'ev-eq-1',
        title: 'Enterprise Value vs Equity Value: The Core Distinction',
        content: `This is tested in nearly every IB interview. Getting confused between EV and Equity Value signals a fundamental gap in your understanding.

**The Key Distinction**

**Enterprise Value (EV)** represents the value of the *entire company* attributable to ALL investors — debt holders, equity holders, preferred stockholders, minority interest holders, everyone.

**Equity Value** represents only the portion available to *common shareholders* — what the public market sees as "the stock price × shares outstanding."

**Why You Need Both:**
- Equity Value is what the public sees (market cap)
- Enterprise Value is what an acquirer truly *pays* — because they must also repay the company's debt

**The Formula:**
\`\`\`
Enterprise Value = Equity Value + Debt + Preferred Stock
                 + Minority Interest − Cash & Cash Equivalents
\`\`\`

**Why each component:**
- **+ Debt**: Buyer must repay it; it's part of the acquisition cost
- **+ Preferred Stock**: Like debt — senior claim, fixed payments
- **+ Minority Interest**: Company consolidates 100% of majority-owned subsidiaries even if it owns <100%; EV must reflect 100% of those operations
- **− Cash**: Buyer "gets back" cash post-acquisition; lowers net cost

**Real Example — Apple (2024):**
- Market Cap (Equity Value): ~$3.5T
- Debt: ~$110B
- Cash: ~$170B
- Enterprise Value: $3.5T + $110B − $170B = ~$3.44T

**When to Use EV vs Equity Value in Valuation:**
- **EV multiples**: EV/EBITDA, EV/Revenue, EV/EBIT — use when comparing companies with different capital structures
- **Equity multiples**: P/E, P/B — use when capital structure is similar or when analyzing returns to shareholders

The reason we prefer EV/EBITDA over P/E for LBOs and M&A: EBITDA is pre-debt, pre-tax — it represents what's available to all capital providers. EPS changes when capital structure changes, making cross-company comparison misleading.`,
        keyPoints: [
          'EV = Equity Value + Debt + Preferred + Minority Interest − Cash',
          'EV represents total company value to all capital providers; Equity Value is only for shareholders',
          'Acquisitions are priced on EV because buyers assume debt',
          'EV multiples (EV/EBITDA) are capital structure-neutral; P/E is not',
          'Minority interest is added because consolidated financials include 100% of subsidiaries',
        ],
        realWorldExample: `**The Microsoft-Activision Deal (2023):** Microsoft paid $95/share for Activision — Equity Value of ~$69B. But the true Enterprise Value was different: Activision had ~$5.9B in cash and minimal debt. So Microsoft's EV paid was closer to $63B. Understanding this distinction explained why Microsoft was actually paying less than the headline number suggested — they were "buying back" Activision's cash. Bankers who could quickly decompose headline price into true EV signaled deal sophistication.`,
        practiceQuestions: [
          'Company has market cap of $500M, $100M debt, $50M preferred stock, $30M minority interest, $20M cash. Calculate EV.',
          'Why does adding a minority interest increase EV? Walk through the logic.',
          'Company A and Company B both have $100M EBITDA. A has $50M debt, B has $200M debt. Which has higher EV/EBITDA? Why?',
          'A company raises $200M in new debt and holds it as cash. What happens to EV?',
        ],
      },
      {
        id: 'ev-eq-2',
        title: 'Diluted Shares & Treasury Stock Method',
        content: `Every IB analyst must know how to calculate fully diluted share count for Equity Value. The **Treasury Stock Method (TSM)** is the standard approach.

**Why Diluted Shares Matter**
Options, warrants, and convertibles increase the share count — but not 1-for-1. TSM accounts for the cash the company *receives* when options are exercised (which it uses to buy back shares).

**Treasury Stock Method — Step by Step:**

1. Identify all "in the money" options (exercise price < current stock price)
2. Calculate proceeds the company would receive: \`Proceeds = Options Outstanding × Exercise Price\`
3. Calculate shares the company can buy back with those proceeds: \`Buyback = Proceeds / Current Stock Price\`
4. **Net new shares = Options Outstanding − Buyback shares**

**Example:**
- 100M basic shares outstanding
- 10M options with average exercise price of $10
- Current stock price: $20

\`\`\`
Proceeds = 10M × $10 = $100M
Buyback = $100M / $20 = 5M shares
Net dilution = 10M − 5M = 5M shares
Diluted shares = 100M + 5M = 105M
\`\`\`

**Convertible Debt Treatment:**
For convertibles, calculate if they are dilutive using the "if-converted" method. Convert the debt into shares at the conversion price and add to share count (also add back the after-tax interest expense to net income).

**Restricted Stock Units (RSUs):**
RSUs are fully dilutive at face value — no exercise price, no TSM needed. Just add them directly.

**What Happens to EV When You Use Diluted Shares:**
EV itself doesn't change — it's share-count-independent. But Equity Value = Price × Diluted Shares, so dilution affects the Equity Value figure. This matters for P/E ratios and merger accretion/dilution calculations.`,
        keyPoints: [
          'TSM reduces dilution because companies receive cash from option exercises',
          'Only in-the-money options are included in diluted share count',
          'RSUs are fully dilutive — no exercise price means no buyback offset',
          'Convertibles use "if-converted" method: add shares and add back after-tax interest',
          'EV is capital-structure-independent; Equity Value changes with diluted shares',
        ],
        realWorldExample: `**Meta Platforms Stock Compensation:** In 2023, Meta had ~2.6B basic shares but issued massive RSU grants as part of "Year of Efficiency." RSUs added ~30-40M diluted shares to the count. At $300/share, that's $9-12B in additional "equity value" from dilution alone. Analysts who used basic shares understated diluted equity value and got wrong EPS figures — since EPS uses diluted shares in the denominator. This is why comp tables always show diluted shares, not basic.`,
        practiceQuestions: [
          '20M options outstanding at $15 exercise price, stock at $25, 200M basic shares. Calculate diluted shares.',
          'Company has 5M warrants at $10, 5M options at $30. Stock is $20. How many are in the money?',
          'Walk through why RSUs are more dilutive than options at the same count.',
        ],
      },
    ],
  },

  // ─── IB INTERVIEW: MERGER MODELS ─────────────────────────────────────────
  {
    id: 'ib-merger-model',
    title: 'IB Interview: Merger Model Mastery',
    description: 'Accretion/dilution analysis, purchase price allocation, transaction structures (stock vs asset), goodwill calculations, and synergies — every merger model question from 400 Q&A with model answers.',
    track: 'finance',
    level: 'advanced',
    estimatedHours: 7,
    icon: '🤝',
    color: '#7C3AED',
    topics: [
      {
        id: 'merger-1',
        title: 'Accretion/Dilution Analysis: The Core Framework',
        content: `Accretion/dilution is the primary output of a merger model — it tells you whether a deal increases or decreases the acquirer's Earnings Per Share (EPS).

**Definition:**
- **Accretive**: Combined EPS > Acquirer's standalone EPS → good for shareholders
- **Dilutive**: Combined EPS < Acquirer's standalone EPS → bad, destroys value per share
- **Neutral**: No EPS impact

**Why It Matters:**
EPS is the primary metric investors use to value stocks. A dilutive deal usually causes the buyer's stock to fall on announcement (because the market expects lower future EPS). Accretive deals tend to be received positively.

**The Basic Setup:**

1. **Determine the purchase price** and form of consideration (cash, stock, debt)
2. **Calculate new shares issued** if stock is involved (Purchase Price ÷ Buyer's Stock Price)
3. **Calculate financing costs** (interest expense on new debt; foregone interest on cash used)
4. **Add seller's net income** to buyer's net income
5. **Subtract after-tax costs** of financing
6. **Divide by new diluted share count** to get combined EPS

**The Accretion/Dilution Test:**
\`\`\`
% Accretion = (Combined EPS − Buyer EPS) / Buyer EPS
\`\`\`

**Intuition — When is a deal accretive?**
A deal is **accretive** when:
- The **earnings yield** of the target (EPS/Price) > the cost of financing
- Or: Target's P/E < Buyer's P/E in an all-stock deal

Example: Buyer trades at 20x P/E (5% earnings yield). Target trades at 15x P/E (6.7% earnings yield). All-stock deal → accretive because target's yield is higher.

**Cash vs Stock Financing:**
- **All-cash**: Accretive more often (no share issuance); but buyer loses interest income on cash
- **All-stock**: Depends entirely on relative P/E multiples
- **All-debt**: Accretive if target's earnings yield > after-tax interest rate on debt

**Synergies Impact:**
Cost synergies (expense reductions) flow through as pre-tax income additions → increase EPS. Revenue synergies are less credible but modeled as additional revenue. "Break-even synergies" = synergies needed to make a dilutive deal neutral to EPS.`,
        keyPoints: [
          'Accretive if combined EPS > buyer standalone EPS; dilutive if less',
          'All-stock deal: accretive if target P/E < buyer P/E',
          'Cash/debt deals: accretive if target earnings yield > after-tax financing cost',
          'Cost synergies are after-tax; revenue synergies include a margin assumption',
          'Most M&A deals are dilutive in Year 1 but become accretive as synergies are realized',
        ],
        realWorldExample: `**Disney's Acquisition of 21st Century Fox (2019):** Disney paid $71.3B — mostly stock plus assumed debt. The deal was initially dilutive to Disney EPS because Disney was trading at a premium (~25x P/E) vs Fox's valuation. Disney projected $2B+ in annual cost synergies, which was the bridge to accretion. Analysts built the merger model, found Year 1 dilution of ~10%, and modeled synergy ramp: Year 2 accretive by 5%+ with $1.5B synergies realized. The stock market punished Disney on announcement (stock fell 4%) but recovered as synergy credibility improved.`,
        practiceQuestions: [
          'Buyer EPS $2.00, 100M shares. Acquires target for $500M all-cash. Target earns $30M net income. Financing rate is 5%, tax rate 40%. Is the deal accretive?',
          'Buyer trades at 20x P/E, target at 12x P/E. All-stock deal, no synergies. Accretive or dilutive?',
          'What are "break-even synergies" and how do you calculate them?',
          'A deal is 5% dilutive in Year 1 but management projects 15% accretive by Year 3. How would you present this?',
        ],
      },
      {
        id: 'merger-2',
        title: 'Purchase Price Allocation, Goodwill & Transaction Structures',
        content: `When a company acquires another, the purchase price must be **allocated** to the assets and liabilities acquired. This creates goodwill and has major tax implications.

**Purchase Price Allocation (PPA):**

After an acquisition closes, the buyer allocates the purchase price to:
1. **Net Identifiable Assets**: Fair market value of tangible assets minus liabilities
2. **Identifiable Intangibles**: Brand names, customer lists, patents, technology
3. **Goodwill**: The residual — "excess" purchase price above fair value

\`\`\`
Goodwill = Purchase Price − Net Identifiable Assets − Identified Intangibles
\`\`\`

**Why Goodwill Exists:**
Goodwill represents the premium paid for factors you can't individually identify: management quality, competitive moats, synergy value, brand reputation. It's an accounting plug.

**Deferred Tax Liabilities from Asset Write-Ups:**
When assets are written up to fair market value in an acquisition:
- The book basis of the asset increases (higher D&A expense going forward)
- The tax basis does NOT increase (in a stock purchase)
- This timing difference creates a **Deferred Tax Liability (DTL)**
- DTL = Asset Write-Up × Tax Rate

**Goodwill Calculation (Complete Formula from 400 Q&A):**
\`\`\`
Goodwill = Equity Purchase Price
         − Seller Book Value (Shareholders' Equity)
         + Seller's Existing Goodwill (written to $0)
         − Asset Write-Ups
         − Seller's Existing DTL (written to $0)
         + Write-Down of Seller's Existing DTA
         + Newly Created DTL
\`\`\`

**The 3 Transaction Structures:**

**1. Stock Purchase (most common for public companies)**
- Buyer acquires ALL assets and liabilities
- Seller taxed at capital gains rate (one tax)
- Buyer gets NO step-up in tax basis → can't depreciate write-ups for tax purposes
- Creates DTL
- Example: Most public company M&A deals

**2. Asset Purchase (common for private companies)**
- Buyer picks specific assets and liabilities
- Seller taxed twice: on asset appreciation AND on sale proceeds (double tax)
- Buyer gets step-up in tax basis → can depreciate for tax savings
- No DTL created
- Example: Distressed company asset sales, divestitures

**3. Section 338(h)(10) Election**
- Legally a stock purchase, treated as an asset purchase for tax purposes
- Seller still faces double tax
- Buyer gets step-up in tax basis (like asset purchase)
- No DTL created
- Buyer often pays more to compensate seller for the extra tax burden
- Used with sellers that have large NOL balances

**Seller vs Buyer Preferences:**
- **Seller prefers stock purchase**: One level of tax, all liabilities transferred
- **Buyer prefers asset purchase**: Tax benefits from step-up, cherry-pick assets`,
        keyPoints: [
          'Goodwill = Purchase Price − fair value of net identifiable assets',
          'Asset write-ups in stock purchases create DTLs (timing difference in tax basis)',
          'Stock purchase: no tax step-up for buyer; asset purchase: buyer gets step-up',
          '338(h)(10) gives buyer asset purchase tax benefits despite being a stock deal',
          'Goodwill is tested annually for impairment (not amortized under GAAP)',
        ],
        realWorldExample: `**Microsoft's Acquisition of LinkedIn (2016):** Microsoft paid $26.2B for LinkedIn. LinkedIn's book value was ~$3.8B. Microsoft wrote up identifiable intangibles (brand, user base, technology) to ~$7B. That left ~$15.4B of Goodwill. The $7B write-up in a stock purchase created a DTL of ~$2.5B (36% tax rate × $7B). This DTL showed up as a liability on Microsoft's consolidated balance sheet and would reverse as those intangibles were amortized. Microsoft's analysts had to model this carefully because higher D&A from the write-up reduced GAAP earnings for years post-acquisition.`,
        practiceQuestions: [
          'Company acquired for $1B. Net identifiable assets worth $400M, intangibles worth $200M. Calculate goodwill.',
          'Asset write-up of $100M, tax rate 35%. What DTL is created? In an asset purchase vs stock purchase?',
          'Explain why a seller prefers a stock purchase but a buyer prefers an asset purchase.',
          'A company has $500M in NOLs. How does this factor into a stock purchase vs 338(h)(10) decision?',
        ],
      },
      {
        id: 'merger-3',
        title: 'Synergies, Consideration Mix & Key Deal Terms',
        content: `**Revenue Synergies:**
Additional revenue the combined company can generate that neither could alone.

Example (Microsoft/Yahoo): Yahoo's revenue per search (RPS) was $0.10. Microsoft could improve it by $0.02 through superior monetization. Revenue synergy = $0.02 × Yahoo's total searches = $X additional revenue × EBITDA margin.

Revenue synergies are always discounted by analysts — they're speculative and take years to materialize.

**Cost Synergies:**
Expense reductions from eliminating duplicates.

Example: Microsoft/Yahoo SG&A: Microsoft has 5,000 SG&A employees, Yahoo has 1,000. Post-deal, only 200 of Yahoo's needed. Synergy = 800 employees × average salary.

Cost synergies are more credible — headcount, facilities, and IT costs are concrete and fast to realize.

**Form of Consideration — Cash vs Stock vs Debt:**

*Buyer perspective (assuming unlimited resources):*
1. **Cash** is cheapest: foregone interest rate (2-5%) < equity cost of capital (8-12%)
2. **Debt** is next: interest rate > cash yield, but creates tax shield
3. **Stock** is most expensive: equity cost of capital is highest

*Why sellers prefer cash:* Certainty of value; no exposure to buyer's stock price fluctuations.

*Why buyers sometimes prefer stock:* Preserves cash; aligns seller with deal success; less balance sheet strain.

**Exchange Ratios (All-Stock Deals):**
Instead of a fixed dollar amount, seller receives X shares of buyer per each share of seller. This protects the buyer if its stock price falls post-announcement, but exposes the seller to buyer stock risk.

**Key M&A Deal Terms:**
- **No-Shop Clause**: Seller cannot solicit competing offers
- **Go-Shop Period**: Seller can seek competing bids for 30-60 days
- **Break-Up Fee**: Penalty seller pays if they walk away (typically 2-4% of deal value)
- **Reverse Break-Up Fee**: Buyer pays if they fail to close (common in PE deals)
- **Earnout**: Deferred consideration tied to future performance metrics
- **Reps & Warranties**: Legal statements both parties make about their business
- **MAC Clause**: Material Adverse Change — allows buyer to walk away if target's business deteriorates

**Why M&A Fails (from The M&A Failure Trap — Lev & Gu):**
Research shows most acquirers overpay because:
1. CEO overconfidence and the "winner's curse" (highest bidder wins but overpays)
2. Synergy estimates are systematically overstated; costs understated
3. Integration challenges are underestimated — cultural clashes destroy value
4. Accounting for acquired intangibles masks economic reality for years`,
        keyPoints: [
          'Cost synergies more credible than revenue synergies; analysts apply haircuts to revenue synergies',
          'Cash consideration is cheapest for buyer; stock is most expensive',
          'Exchange ratio protects buyer from stock price risk; seller prefers fixed cash',
          'Break-up fees (2-4% of EV) are standard in public company deals',
          'MAC clauses are rarely invoked and heavily negotiated',
        ],
        realWorldExample: `**The AT&T/Time Warner Deal (2018):** AT&T promised $2.5B in annual synergies to justify its $85B acquisition. "Cost synergies" of $1.5B were from eliminating duplicative operations. "Revenue synergies" of $1B from combining content with distribution were more speculative. Wall Street was skeptical — revenue synergies rarely materialize in media deals. Sure enough, AT&T later spun off WarnerMedia in 2022, effectively admitting the deal failed. The lesson: revenue synergies in M&A models should be stress-tested with near-zero probability in base case.`,
        practiceQuestions: [
          'A deal is 8% dilutive before synergies. Management projects $50M in cost synergies. EPS is $2.50. Tax rate 35%. How many synergy dollars needed to break even?',
          'Explain the no-shop vs go-shop dynamic from both buyer and seller perspectives.',
          'Why might a PE firm pay a lower price than a strategic acquirer for the same target?',
          'Walk through the pros/cons of cash vs stock consideration from the buyer\'s perspective.',
        ],
      },
    ],
  },

  // ─── IB INTERVIEW: LBO MODELS ────────────────────────────────────────────
  {
    id: 'ib-lbo-model',
    title: 'IB Interview: LBO Model Complete Guide',
    description: 'Walk through a complete LBO model step-by-step, from sources & uses to IRR calculation — the exact questions PE firms and IB groups ask, with model answers from 400 Q&A.',
    track: 'finance',
    level: 'advanced',
    estimatedHours: 8,
    icon: '⚡',
    color: '#B45309',
    topics: [
      {
        id: 'lbo-1',
        title: 'LBO Fundamentals: Structure, Leverage & Returns',
        content: `A Leveraged Buyout (LBO) is an acquisition financed primarily with debt, using the target company's own cash flows to repay that debt over time.

**The Mortgage Analogy (Best Way to Explain LBOs):**
| LBO Component | Mortgage Analogy |
|---|---|
| Investor Equity (PE firm's money) | Down payment |
| LBO Debt | Mortgage |
| Interest payments | Mortgage interest |
| Debt principal repayments | Monthly mortgage payments |
| Exit (sell company or IPO) | Selling the house |

**Why Use Leverage?**
To amplify returns. If you buy a $100M company with $100M equity and sell for $150M, your return is 50%. If you buy it with $30M equity + $70M debt, sell for $150M, repay $70M debt, you walk away with $80M — return of 167% on $30M invested.

**The 5-Step LBO Model (Word-for-Word Interview Answer):**

*"In an LBO model:*
*Step 1: Make assumptions — purchase price, debt/equity ratio, interest rates on debt, operational assumptions like revenue growth and EBITDA margins.*

*Step 2: Create a Sources & Uses table showing how the deal is financed and what the capital is used for. This determines the equity check size.*

*Step 3: Adjust the balance sheet — add new debt and equity, wipe out existing shareholders' equity, add Goodwill & Intangibles as a plug on the assets side.*

*Step 4: Project the income statement, balance sheet, and cash flow statement. Model how much debt is repaid each year based on available cash flow after interest payments.*

*Step 5: Assume an exit after 3-7 years (usually an EBITDA exit multiple), calculate exit equity value, and determine IRR and MOIC for the PE firm."*

**What Drives LBO Returns (in order of importance):**
1. **Purchase and exit multiples** (most impactful — buying cheap, selling expensive)
2. **Leverage** (more debt = higher equity return, but higher risk)
3. **EBITDA growth** (operational improvement)
4. **Debt paydown** (reduces equity needed to exit, increases equity value)

**IRR Targets:**
PE firms typically target 20-30% IRR over a 3-7 year hold period. A "2x money" return in 5 years = ~15% IRR. "3x in 5 years" = ~25% IRR.

**MOIC vs IRR:**
- **MOIC (Multiple on Invested Capital)**: Exit equity ÷ Entry equity. Simple and ignores time.
- **IRR (Internal Rate of Return)**: Annualized return accounting for time value of money.
- A 3x MOIC in 3 years (44% IRR) is better than 3x in 7 years (17% IRR).`,
        keyPoints: [
          'LBO uses target\'s cash flows to repay acquisition debt over time',
          'PE firms target 20-30% IRR; 2x MOIC in 5 years ≈ 15% IRR',
          'Purchase/exit multiples are the biggest driver of LBO returns',
          'Leverage amplifies returns in good scenarios but destroys equity in bad scenarios',
          'IRR > MOIC for decision-making: accounts for time value of money',
        ],
        realWorldExample: `**Dell's Go-Private LBO (2013):** Michael Dell and Silver Lake took Dell private for $24.4B — one of the largest LBOs ever. Deal: $15.6B debt, $8.8B equity. The thesis: Dell was undervalued as a public company with a transforming business (from PC maker to enterprise tech). Exit: Dell went public again in 2018 via reverse merger with VMware tracking stock. Return: ~2.2x MOIC in 5 years — roughly 17% IRR. Below PE targets but achieved because Dell's EBITDA grew ~50% during the hold period and exit multiple expanded.`,
        practiceQuestions: [
          'PE firm buys company at 8x EBITDA with $200M EBITDA, 60% debt/40% equity. Sells at 9x EBITDA after 5 years with $240M EBITDA and $500M debt paid down. Calculate MOIC.',
          'What is an "ideal" LBO candidate? List 5 characteristics.',
          'Why does leverage increase equity returns? Walk through a simple numerical example.',
          'Purchase multiple is 8x, exit is 7x, EBITDA flat, all returns from debt paydown. Good deal?',
        ],
      },
      {
        id: 'lbo-2',
        title: 'Sources & Uses, Debt Tranches & Balance Sheet',
        content: `**Sources & Uses Table**

The Sources & Uses table is always the first thing you build in an LBO model. It shows where the money comes from (sources) and what it pays for (uses).

**Typical Sources:**
- Senior Secured Debt (revolver + term loan): 3-4x EBITDA
- High Yield Bonds / Subordinated Debt: 1-2x EBITDA
- Mezzanine Debt / PIK Notes: 0.5-1x EBITDA
- PE Equity: 30-40% of total capitalization

**Typical Uses:**
- Equity Purchase Price (= Entry EV)
- Refinancing existing debt (if target has debt)
- Transaction fees (banker fees, legal, etc.)
- Financing fees (amortized over loan life)

**Example LBO at 7x EBITDA ($100M EBITDA):**
\`\`\`
Enterprise Value = $700M (7x $100M)

Sources:
  Senior Secured Term Loan  $300M (3x EBITDA)
  High Yield Bonds          $150M (1.5x EBITDA)
  PE Equity                 $250M (35.7% of total)
  Total Sources             $700M

Uses:
  Purchase Price            $680M
  Transaction Fees          $10M
  Financing Fees            $10M
  Total Uses                $700M
\`\`\`

**Debt Tranches (Seniority Order):**

1. **Revolving Credit Facility (Revolver)**: Drawn as needed for working capital. First lien. Lowest rate.
2. **Term Loan A (TLA)**: Amortizing (pays down principal regularly). First lien.
3. **Term Loan B (TLB)**: Minimal amortization (1% per year), bullet maturity. Most common in LBOs.
4. **Second Lien Term Loan**: Second priority, higher rate.
5. **High Yield Bonds**: Unsecured, publicly traded, semi-annual coupon.
6. **Mezzanine / PIK Notes**: Last in line; interest often "paid in kind" (added to principal, not cash).
7. **PE Equity**: Residual claim; first to be wiped out.

**Balance Sheet Adjustment:**

When the deal closes, the balance sheet changes:
1. Old shareholders' equity wiped to $0
2. New PE equity added to equity
3. New LBO debt added to liabilities
4. Cash used to fund deal removed from assets
5. Goodwill & Intangibles added to assets as plug

**Modeling Debt Paydown:**
Available cash for debt repayment = EBITDA − CapEx − Interest − Taxes − Working Capital Changes = Free Cash Flow. This FCF is swept to repay debt starting with the most senior.`,
        keyPoints: [
          'Sources = debt + equity; Uses = purchase price + fees',
          'Typical LBO: 3-5x senior debt, 1-2x sub debt, 35-40% equity',
          'Debt seniority: revolver > TLA > TLB > second lien > HY bonds > mezz > equity',
          'Balance sheet: old equity wiped, new debt + equity added, goodwill plugs assets side',
          'FCF sweeps repay debt — the faster EBITDA grows, the faster deleveraging',
        ],
        realWorldExample: `**KKR's LBO of BMC Software (2018):** KKR acquired BMC (enterprise software) for $8.3B. Capital structure: $4.4B senior secured debt (Term Loan B), $1.1B second lien, $1.2B unsecured notes, $1.6B KKR equity (~19% of total cap). Total leverage: ~8.1x EBITDA — high for a software company but justified by recurring revenue (~80% subscription). Within 3 years, BMC's EBITDA grew from $750M to $950M, reducing leverage to ~4.5x — dramatically increasing the equity cushion and setting up a successful exit.`,
        practiceQuestions: [
          'Build a Sources & Uses for a 8x EBITDA LBO on $150M EBITDA company. Use 3.5x senior, 1.5x HY bonds, rest equity.',
          'Explain the difference between a Term Loan A and Term Loan B. Why is TLB more common in LBOs?',
          'Company exits LBO at 9x EBITDA with $200M EBITDA. Remaining debt at exit is $400M. Entry equity was $250M. Calculate MOIC.',
          'Why do LBOs use multiple debt tranches instead of one big term loan?',
        ],
      },
      {
        id: 'lbo-3',
        title: 'LBO Returns Analysis & Sensitivity Tables',
        content: `**IRR Calculation:**

IRR is the annualized return on invested equity capital. In LBO modeling, you calculate it as:

\`\`\`
IRR = (Exit Equity Value / Entry Equity Value)^(1/Hold Period) − 1

OR use XIRR in Excel:
= XIRR({−Entry Equity, Exit Equity}, {Entry Date, Exit Date})
\`\`\`

**Exit Equity Value = Exit EV − Remaining Debt**

If entry equity was $250M and exit equity is $600M in year 5:
- MOIC = 600/250 = 2.4x
- IRR = (2.4)^(1/5) − 1 = 19.1%

**Sources of IRR in LBOs:**
PE returns come from 3 sources (the "LBO Value Creation" triangle):
1. **Multiple Expansion**: Exit multiple > Entry multiple
2. **EBITDA Growth**: Operational improvement
3. **Debt Paydown**: Reduces debt, increases equity value at exit

Rule of thumb: good LBO targets generate 40-50% of returns from debt paydown alone.

**Sensitivity Analysis (Must-Know):**
Every LBO model ends with sensitivity tables showing IRR across:
- Purchase Multiple (x-axis) vs Exit Multiple (y-axis)
- Purchase Multiple vs EBITDA Growth
- Leverage (Debt/EBITDA) vs Exit Multiple

Most important: **Entry vs Exit Multiple sensitivity**. A 1-turn expansion (e.g., 7x to 8x) on a $100M EBITDA company adds $100M to exit EV — all of which flows to equity.

**What Sets Floor Valuation:**
LBO analysis sets the floor valuation for a company. PE firms pay less than strategic acquirers because:
- PE has higher cost of capital (targeting 25% IRR vs strategic's 15% hurdle)
- No revenue synergies (PE can't combine operations)
- Debt financing constraints limit how much PE can pay

So when bankers run valuation: DCF and comps set the range; LBO sets the floor.

**Dividend Recapitalizations:**
PE firms sometimes extract cash mid-hold by having the company take on additional debt and paying a dividend. This:
- Returns capital early → boosts IRR (same MOIC in fewer years)
- Leaves company more leveraged (higher risk)
- Common in strong free cash flow businesses

Example: PE invests $200M. Year 3: company does $100M dividend recap, returning $100M to PE. Year 5: PE sells remaining equity for $200M. MOIC = ($100M + $200M)/$200M = 1.5x — but IRR is much higher because of early cash return.`,
        keyPoints: [
          'LBO IRR sources: EBITDA growth + multiple expansion + debt paydown',
          'IRR = (Exit Equity / Entry Equity)^(1/n) − 1 for simple calculation',
          'LBO sets floor valuation because PE has higher hurdle rate than strategic buyers',
          'Dividend recaps boost IRR by returning capital early without selling the company',
          'Sensitivity tables are mandatory — IRR vs Entry Multiple and Exit Multiple',
        ],
        realWorldExample: `**Hilton Hotels LBO (Blackstone, 2007-2018):** Blackstone bought Hilton for $26B in 2007 — right before the financial crisis. Entry leverage: ~8x EBITDA. During the crisis, Hilton nearly went bankrupt. Blackstone renegotiated debt, helped management transform Hilton's asset-light model (selling owned hotels, focusing on franchise fees). Exit: IPO in 2013, fully exited by 2018. Return: ~$14B profit on ~$5.6B equity — roughly 2.5x MOIC and ~17% IRR over 11 years. The key: operational transformation of the business model while keeping the company alive through the debt crisis.`,
        practiceQuestions: [
          'PE buys company with $200M EBITDA at 8x. Finances with 50% debt. Exits at 9x with $250M EBITDA after 5 years and $500M debt paid down. Calculate IRR and MOIC.',
          'Explain how a dividend recap increases IRR without changing MOIC.',
          'What multiple expansion does a PE firm need to earn 25% IRR with no EBITDA growth in 5 years?',
          'Walk through why LBO analysis sets a "floor valuation."',
        ],
      },
    ],
  },

  // ─── ADVANCED ACCOUNTING: DEFERRED TAXES, SBC & WRITE-DOWNS ─────────────
  {
    id: 'ib-advanced-accounting',
    title: 'Advanced Accounting for IB Interviews',
    description: 'Deferred tax assets & liabilities, stock-based compensation, LIFO vs FIFO, working capital mechanics — the advanced accounting questions interviewers ask that trip up most candidates.',
    track: 'finance',
    level: 'advanced',
    estimatedHours: 5,
    icon: '🧮',
    color: '#059669',
    topics: [
      {
        id: 'adv-acc-1',
        title: 'Deferred Tax Assets & Liabilities (DTAs & DTLs)',
        content: `Deferred taxes are one of the most commonly misunderstood concepts in finance interviews. Get these right and you'll stand out.

**The Core Concept:**
Deferred taxes arise from **temporary differences** between GAAP accounting and tax accounting.

**GAAP vs Tax Accounting — Key Differences:**
1. GAAP is accrual-based; tax is more cash-based
2. GAAP uses straight-line depreciation; tax uses accelerated depreciation (MACRS)
3. GAAP tracks assets/liabilities precisely; tax only cares about current-period income

**Deferred Tax Liability (DTL):**
Arises when you have a *higher* tax expense on the books than in cash — you've deferred your tax payment to the future.

Most common cause: **Accelerated depreciation for tax purposes.** If a machine worth $100M is depreciated over 5 years for tax (MACRS) but 10 years for GAAP:
- Year 1: Tax D&A = $20M, GAAP D&A = $10M
- Tax income is lower → less tax paid now
- But GAAP income is higher → more book tax expense
- The difference ($10M × 40% = $4M) is a DTL

The company will pay more taxes *later* when the tax depreciation runs out but GAAP D&A continues → **liability**.

**Deferred Tax Asset (DTA):**
Arises when you pay more taxes in cash than your GAAP tax expense.

Most common cause: **Net Operating Losses (NOLs).** When a company loses money, it can't use that loss for tax immediately but can carry it forward to offset future profits.
- A $100M NOL × 21% tax rate = $21M DTA
- This asset is "cashed in" as future profits are offset

Also from: warranty reserves (expensed on GAAP books but not tax-deductible until cash is paid), accrued expenses, stock compensation.

**Valuation Allowance:**
If it's "more likely than not" that the DTA won't be realized (company consistently losing money), GAAP requires a valuation allowance — essentially writing down the DTA to zero. This is a negative sign.

**How to Walk Through a DTA/DTL in an Interview:**
"A DTL arises when a company's tax bill in cash is lower than its GAAP tax expense — it will pay more taxes in the future, hence a liability. Accelerated depreciation is the most common example. A DTA arises when a company has paid more cash taxes than its GAAP expense, or when it has NOLs that can offset future income — an asset because it reduces future tax payments."`,
        keyPoints: [
          'DTL = temporary difference where you pay LESS tax now, MORE later (accelerated depreciation)',
          'DTA = temporary difference where you pay MORE tax now, LESS later (NOLs, accruals)',
          'Valuation allowance reduces DTA when realization is unlikely',
          'NOL = Net Operating Loss; can offset future profits, creates DTA',
          'DTAs and DTLs reverse over time — they are temporary, not permanent differences',
        ],
        realWorldExample: `**Amazon's DTAs:** Amazon accumulated massive NOL carryforwards during its years of intentional losses. By 2022, Amazon had ~$4B+ in DTAs from NOLs. When Amazon's profitability surged (2023 net income of $30B), it began utilizing these NOLs to reduce its cash tax payments — realizing the DTA. This is why Amazon's effective cash tax rate was significantly below its stated GAAP tax rate in 2023. Understanding this distinction is crucial for accurate free cash flow modeling.`,
        practiceQuestions: [
          'Company has $200M in equipment, depreciates over 10 years (GAAP) but 5 years (tax). Tax rate 25%. What DTL is created in Year 1?',
          'Company has $500M in NOLs from prior losses. Tax rate 21%. What DTA is created? What happens if the company is unlikely to be profitable?',
          'Walk through how a DTL reverses over time.',
          'In an M&A deal (stock purchase), buyer writes up assets by $100M. Tax rate 25%. What DTL is created and why?',
        ],
      },
      {
        id: 'adv-acc-2',
        title: 'Stock-Based Compensation: The Cash Flow Disconnect',
        content: `Stock-based compensation (SBC) is one of the most debated items in financial statement analysis. Tech companies in particular use it heavily, creating a gap between GAAP earnings and economic reality.

**What SBC Is:**
Companies grant employees stock options, RSUs, and other equity awards as compensation. Under GAAP (ASC 718), this must be recognized as an expense on the income statement, reducing reported net income.

**The Cash Flow Paradox:**
SBC is a non-cash expense on the income statement — no cash leaves the company. So it gets added BACK on the cash flow statement under "adjustments to net income."

\`\`\`
Income Statement:
Revenue:              $1,000M
SBC Expense:            ($100M)
Pre-Tax Income:          $900M
Tax (25%):               ($225M)
Net Income:              $675M

Cash Flow Statement:
Net Income:              $675M
+ SBC (non-cash):        $100M
= Cash from Operations:  $775M (simplified)
\`\`\`

**But Is It Really Non-Cash?**
This is the debate. SBC dilutes existing shareholders:
- When RSUs vest or options are exercised, new shares are issued
- This dilutes EPS and "transfers" value from existing shareholders to employees
- In an economic sense, SBC IS a real cost — it's just paid in stock, not cash

**How Analysts Treat SBC:**
- **GAAP view**: SBC is a real expense; GAAP earnings are correct
- **"Non-GAAP" or Adjusted EBITDA**: Many tech companies add back SBC, claiming it's "non-cash" and non-recurring
- **Sophisticated analyst view**: SBC is a real cost but non-recurring for DCF purposes since it doesn't represent cash drain; however, dilution must be reflected in share count

**Walk Me Through the 3 Statements — SBC Increases by $50M:**
1. **Income Statement**: OpEx up $50M → Pre-Tax Income down $50M → Net Income down $30M (at 40% tax)
2. **Cash Flow Statement**: Net Income down $30M; SBC added back +$50M; CFO up $20M
3. **Balance Sheet**: Cash unchanged (non-cash); APIC (Additional Paid-In Capital) increases $50M on equity side; Retained Earnings down $30M → net equity up $20M

This is counterintuitive — SBC expense actually INCREASES equity because APIC grows.`,
        keyPoints: [
          'SBC is a non-cash expense on income statement; added back on cash flow statement',
          'SBC increases APIC on balance sheet — net equity increases despite being an "expense"',
          'SBC dilutes existing shareholders even though no cash leaves the company',
          'Tech companies add back SBC in Adjusted EBITDA — creates disconnect with GAAP earnings',
          'For DCF: SBC is a real dilution cost — use diluted shares and don\'t add back SBC',
        ],
        realWorldExample: `**Palantir's SBC Problem:** Palantir reported negative GAAP net income for years but positive "Adjusted EBITDA" because it excluded $500M+ in annual SBC. In 2023, SBC was ~25% of total revenue. Investors who used Adjusted EBITDA thought the company was profitable; investors who used GAAP saw persistent losses. When Palantir finally achieved GAAP profitability, it was celebrated as a milestone — but the actual underlying business improvement was less dramatic than the GAAP change suggested, because SBC had moderately decreased. Understanding SBC is essential for tech company analysis.`,
        practiceQuestions: [
          'Walk through all 3 statements when SBC increases by $100M. Tax rate 40%.',
          'Company has GAAP net income of $200M but adds back $300M SBC to get $500M Adjusted EBITDA. What is the "true" economic profitability?',
          'Why does SBC increase APIC on the balance sheet? Walk through the journal entry logic.',
          'When building a DCF for a tech company, should you add back SBC? Explain both sides.',
        ],
      },
      {
        id: 'adv-acc-3',
        title: 'Working Capital Mechanics & Cash Conversion',
        content: `Working capital management separates sophisticated analysts from beginners. The cash conversion cycle — how quickly a business turns operations into cash — is critical for LBO models and credit analysis.

**Operating Working Capital (OWC) Definition:**
OWC = (Current Assets − Cash) − (Current Liabilities − Debt)

We exclude cash and debt because they're financing items, not operational.

Key OWC components:
- **Accounts Receivable (AR)**: Money owed by customers — an asset
- **Inventory**: Goods not yet sold — an asset
- **Accounts Payable (AP)**: Money owed to suppliers — a liability
- **Accrued Expenses**: Expenses incurred but not yet paid
- **Deferred Revenue**: Cash received but service not yet performed

**OWC Movements on Cash Flow Statement:**
- AR increases → Cash DECREASES (you earned revenue but didn't collect cash)
- Inventory increases → Cash DECREASES (you bought goods but haven't sold them)
- AP increases → Cash INCREASES (you owe suppliers but haven't paid yet)
- Deferred Revenue increases → Cash INCREASES (customers prepaid)

**Negative Working Capital = Competitive Advantage:**
Amazon, Walmart, McDonald's all have *negative* working capital — they collect cash from customers before paying suppliers. This is a sign of business strength, not weakness. These companies effectively use their suppliers as interest-free lenders.

**The Cash Conversion Cycle (CCC):**
\`\`\`
CCC = Days Sales Outstanding (DSO)
    + Days Inventory Outstanding (DIO)
    − Days Payable Outstanding (DPO)
\`\`\`
- **DSO** = AR / (Revenue/365) — how long to collect from customers
- **DIO** = Inventory / (COGS/365) — how long goods sit in inventory
- **DPO** = AP / (COGS/365) — how long before you pay suppliers

Lower CCC = better. Negative CCC (like Amazon) = company is funded by its suppliers and customers.

**Working Capital in LBO Models:**
Working capital is a critical input because:
1. Fast-growing companies require MORE working capital as revenue grows (AR and inventory increase)
2. This working capital investment is a cash USE — it reduces FCF for debt paydown
3. Rule of thumb: OWC as % of revenue stays roughly constant → project using % of revenue`,
        keyPoints: [
          'OWC = Operating Current Assets − Operating Current Liabilities (excl. cash & debt)',
          'AR/Inventory increases use cash; AP/Deferred Revenue increases generate cash',
          'Negative working capital is a competitive advantage (Amazon, Walmart model)',
          'CCC = DSO + DIO − DPO; lower/negative is better',
          'In LBOs, OWC growth is a cash drain that reduces funds available for debt paydown',
        ],
        realWorldExample: `**Amazon's Negative Working Capital Model:** Amazon's CCC is approximately −30 days. Customers pay instantly (DPO ≈ 0). Amazon pays suppliers in ~90 days (DPO ≈ 90). Inventory turns in ~60 days (DIO ≈ 60). CCC = 0 + 60 − 90 = −30 days. This means Amazon generates cash from operations before it has to pay for the goods it sells. As Amazon grows, working capital automatically generates MORE cash — a massive structural advantage. This is why Amazon can operate an enormous business with minimal external financing for working capital needs.`,
        practiceQuestions: [
          'Company has $100M AR, $50M Inventory, $80M AP. Revenue $500M, COGS $300M. Calculate DSO, DIO, DPO, and CCC.',
          'In an LBO model, revenue grows 15% per year. OWC is 12% of revenue, starting at $60M. How much cash does working capital consume in Year 1?',
          'Company changes payment terms — customers now pay in 45 days instead of 30. Revenue is $400M. Cash impact?',
          'Why is a company with negative working capital less likely to need a revolving credit facility?',
        ],
      },
    ],
  },

  // ─── NISM RESEARCH ANALYST: INDIAN MARKET FRAMEWORK ─────────────────────
  {
    id: 'nism-research-analyst',
    title: 'NISM Research Analyst: Indian Market Framework',
    description: 'SEBI regulations, Indian securities market structure, equity research in the Indian context, and everything needed for the NISM Series XV Research Analyst Certification — based on the official November 2025 workbook.',
    track: 'finance',
    level: 'intermediate',
    estimatedHours: 10,
    icon: '🇮🇳',
    color: '#FF6B00',
    topics: [
      {
        id: 'nism-1',
        title: 'Indian Securities Market Structure & Participants',
        content: `The Indian securities market has a distinct structure regulated by SEBI. Understanding it is essential for the NISM Series XV exam and for working in Indian finance.

**Regulatory Framework:**
- **SEBI (Securities and Exchange Board of India)**: Primary regulator of securities markets
- **RBI (Reserve Bank of India)**: Regulates debt markets, forex, banking
- **IRDAI**: Insurance sector regulation
- **PFRDA**: Pension fund regulation

**Market Structure:**
1. **Primary Market**: Companies raise capital through IPOs, FPOs, rights issues
2. **Secondary Market**: Existing securities traded between investors

**Key Exchanges:**
- **NSE (National Stock Exchange)**: Largest by trading volume; NIFTY 50 index
- **BSE (Bombay Stock Exchange)**: Oldest exchange in Asia; SENSEX index
- **MCX**: Commodity derivatives
- **NSE and BSE**: Both trade equities, derivatives, debt

**Market Segments:**
- **Capital Market (CM) Segment**: Equity cash trading (T+1 settlement)
- **Futures & Options (F&O) Segment**: Equity and index derivatives
- **Currency Derivatives (CD)**: Currency futures and options
- **Interest Rate Derivatives (IRD)**: Bond futures

**Key Market Participants:**
| Participant | Role |
|---|---|
| Brokers | Execute trades for clients |
| Depository Participants (DPs) | CDSL/NSDL accounts for holding securities |
| FIIs/FPIs | Foreign Institutional Investors — major price movers |
| DIIs | Domestic Institutional Investors (MFs, insurance) |
| Retail Investors | Individual investors |
| Research Analysts | Produce research reports |
| Investment Bankers | IPOs, M&A advisory |

**Dematerialization:**
India mandates demat format for all securities. Two depositories:
- **NSDL (National Securities Depository Limited)**: Larger, handles NSE primarily
- **CDSL (Central Depository Services Limited)**: Handles BSE primarily

**Settlement:**
India moved to T+1 settlement in 2023 — one of the fastest globally. Trades settle within 1 business day.

**SEBI (Research Analysts) Regulations, 2014:**
Research analysts must be registered with SEBI. They must:
- Pass NISM Series XV certification
- Disclose conflicts of interest
- Maintain independence from investment banking
- Follow the Code of Conduct for Research Analysts`,
        keyPoints: [
          'SEBI is the primary securities market regulator; RBI regulates debt and banking',
          'NSE (NIFTY) and BSE (SENSEX) are the two main stock exchanges',
          'India moved to T+1 settlement in 2023 — fastest globally',
          'NSDL and CDSL are the two depositories handling dematerialized securities',
          'Research analysts must register with SEBI and pass NISM Series XV',
        ],
        realWorldExample: `**India's IPO Boom (2021-2024):** India saw record IPO activity — companies like Zomato, Paytm, LIC, and Hyundai India raised capital in the primary market. Research analysts registered with SEBI produced initiation-of-coverage reports 30 days after IPO lock-up expiry (per SEBI rules). The NISM certification ensures these analysts understand the market they're covering — from BSE listing standards to SEBI's disclosure requirements for research reports.`,
        practiceQuestions: [
          'What is the difference between NSDL and CDSL? Which exchanges do they primarily serve?',
          'A foreign institutional investor wants to invest in Indian equities. What registrations are required?',
          'Under SEBI Research Analyst Regulations 2014, what are the minimum qualifications to become a research analyst?',
          'Explain T+1 settlement and its implications for liquidity compared to T+2.',
        ],
      },
      {
        id: 'nism-2',
        title: 'SEBI Regulations & Code of Conduct for Research Analysts',
        content: `SEBI's Research Analyst Regulations 2014 govern all persons who publish or provide research reports or research analysis. This is a high-weight topic in the NISM Series XV exam (10 marks from Chapter 14).

**Who Needs SEBI Registration as Research Analyst:**
- Any person who prepares/publishes research reports
- Any person who makes public appearances involving research analysis
- Registered with SEBI; must pass NISM Series XV exam
- Individuals employed by research entities

**Key SEBI Regulations:**

**1. Independence Requirements:**
- Research analyst (RA) cannot be supervised by investment banking
- No sharing of drafts with subject company before publication (except for factual accuracy check)
- RA compensation cannot be tied to investment banking revenues

**2. Disclosure Requirements (MANDATORY in every report):**
- Analyst's personal holdings in the covered company
- Firm's holdings in the covered company
- Whether the firm received investment banking fees from the covered company in last 12 months
- Analyst compensation disclosure
- Any other conflict of interest

**3. Restrictions on Trading:**
- Research analysts cannot trade against their own recommendations
- Must wait 30 days after publishing to change personal position
- "30-day cooling period" after buy report before selling personal holdings

**4. Research Report Requirements:**
A valid SEBI-compliant research report must include:
- Date of publication
- Recommendation (Buy/Sell/Hold) with clear definition of each
- Price target and basis for valuation
- Risk factors
- Investment horizon
- Mandatory disclaimers
- Conflict of interest disclosures
- Analyst certification: "The views expressed are my own"

**5. Record-Keeping:**
RAs must maintain records for 5 years, including all research reports, communications with company management, and internal models.

**GSM and ASM (Exchange Surveillance):**
- **GSM (Graded Surveillance Measure)**: Applied to securities with unusual price movements; restricts trading in stages
- **ASM (Additional Surveillance Measure)**: Triggers margin requirements and restrictions when stocks show unusual patterns
- Research analysts should flag if coverage stocks are under ASM/GSM — affects liquidity and trading feasibility

**SEBI Investor Charter:**
SEBI mandates all registered intermediaries to publish an Investor Charter outlining services, timelines, and investor rights. RAs must comply with complaints redressal mechanism.`,
        keyPoints: [
          'Research analysts must be registered with SEBI; NISM Series XV is mandatory',
          'RAs must disclose personal holdings, firm holdings, and IB fee relationships in every report',
          '30-day cooling period: cannot trade against own recommendation for 30 days',
          'Reports must include recommendation, price target, valuation basis, risks, investment horizon',
          'Records must be maintained for 5 years (reports, models, communications)',
        ],
        realWorldExample: `**SEBI Enforcement: Front-Running Case (2024):** SEBI penalized several research analysts for front-running — purchasing stocks before publishing buy recommendations, then selling into the price rise caused by their own reports. This is a direct violation of SEBI Research Analyst Regulations. The investigation used surveillance of communication records (WhatsApp chats, call records). SEBI can ban analysts from the securities market for multiple years for such violations — highlighting why understanding the Code of Conduct matters for your career protection.`,
        practiceQuestions: [
          'List 5 mandatory disclosures a SEBI-registered research analyst must include in every report.',
          'A research analyst holds 1,000 shares of Company X. Can they write a Buy report on Company X? What disclosures are needed?',
          'What is the "Chinese wall" in investment banking context? Why is it critical for research analysts?',
          'Analyst publishes a Buy note on Monday. Can they sell their personal holding on Tuesday? Explain.',
        ],
      },
      {
        id: 'nism-3',
        title: 'Fundamental Analysis & Valuation in Indian Context',
        content: `Indian equity research follows global frameworks but with India-specific considerations — macroeconomic factors, sector composition of indices, and unique Indian accounting standards (Ind AS).

**Top-Down vs Bottom-Up Approach:**

**Top-Down (Macro to Stock):**
1. Global macro → RBI policy → GDP growth → Sector impact → Company selection
2. Start with economy, filter down to sectors, then stocks

**Bottom-Up (Stock to Macro):**
1. Identify undervalued company → Verify macro tailwinds → Buy
2. Focus on company fundamentals regardless of macro

**Key Indian Macro Variables (Chapter 5 NISM):**
- **GDP Growth Rate**: India targeting 7%+ annually; drives revenue growth for most sectors
- **RBI Repo Rate**: Key policy rate; affects cost of capital, valuation multiples
- **Inflation (CPI & WPI)**: CPI (Consumer Price Index) — RBI targets 4% ±2%
- **Current Account Deficit (CAD)**: India structurally imports more than it exports; high CAD weakens INR
- **Fiscal Deficit**: Government borrowing as % of GDP; high deficit pressures interest rates
- **FII/FPI Flows**: Foreign money flows heavily influence Indian market sentiment

**Indian Accounting Standards (Ind AS):**
India converged to IFRS through Ind AS. Key differences from US GAAP:
- No LIFO method permitted under Ind AS (unlike US GAAP)
- Goodwill is NOT amortized under Ind AS (impairment tested annually — same as IFRS)
- Operating lease treatment under Ind AS 116 (similar to IFRS 16)

**Valuation Approaches in India:**

**1. P/E Ratio (Most Common in India):**
- Used universally for Indian equities
- Compare to sector peers and historical band
- Nifty 50 historically trades at 18-22x forward P/E

**2. EV/EBITDA:**
- Common for capital-intensive sectors (cement, steel, telecom)
- Useful for comparing companies with different debt levels

**3. Price-to-Book (P/B):**
- Critical for banking sector in India
- Banks trade at 1-3x P/B; PSU banks trade at discount to private banks

**4. DCF Valuation:**
- Used for long-term valuation; requires stable earnings
- Key inputs: WACC, terminal growth rate (India: 5-7% for quality businesses)

**5. Relative Valuation:**
Compare Indian company to:
- Indian sector peers (primary comparison)
- Asian/global peers (secondary)
- Historical trading range of same company

**Sector-Specific Metrics:**
| Sector | Key Metric |
|---|---|
| Banking | NIM, GNPA%, CASA ratio, ROE |
| IT Services | Revenue growth, EBIT margin, attrition |
| Pharma | API pricing, ANDA filings, US FDA compliance |
| Auto | Volume growth, realization, EV penetration |
| Real Estate | Pre-sales, collections efficiency, land bank |`,
        keyPoints: [
          'India uses Ind AS (IFRS-converged); no LIFO, goodwill impairment tested annually',
          'P/E and EV/EBITDA most common; P/B critical for banking sector',
          'RBI repo rate impacts cost of capital and valuation multiples directly',
          'Nifty 50 historically trades at 18-22x forward P/E — key benchmark',
          'FII/FPI flows are disproportionately influential on Indian market direction',
        ],
        realWorldExample: `**HDFC Bank — India's Marquee Valuation Case:** HDFC Bank has historically traded at 3-4x P/B, reflecting its superior ROE (16-18%), low NPA ratios (<1% GNPA), and CASA ratio of ~45%. After its merger with HDFC Ltd in 2023, the bank's balance sheet doubled but ROE temporarily dipped — the market re-rated the stock lower (to 2-2.5x P/B) reflecting integration uncertainty. Research analysts covering HDFC Bank had to update their models entirely, recalculate NIM, GNPA, and capital adequacy post-merger — a real-world demonstration of why Indian banking sector metrics matter.`,
        practiceQuestions: [
          'RBI raises repo rate by 50 bps. Walk through the impact on (a) bank NIMs, (b) IT sector valuations, (c) real estate.',
          'NIFTY 50 is at 22,000 with trailing earnings of $1,100 (index points). Calculate trailing P/E. Is it cheap or expensive historically?',
          'A cement company has EBITDA of ₹500Cr and net debt of ₹1,000Cr. Sector trades at 12x EV/EBITDA. Estimate fair value.',
          'Why do Indian PSU banks trade at a discount to private banks on P/B? List 3 reasons.',
        ],
      },
    ],
  },

];
