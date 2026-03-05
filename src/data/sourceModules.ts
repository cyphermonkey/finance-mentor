import type { Module } from '../types';

// Modules built from: 400 IB Interview Q&A (Breaking Into Wall Street),
// InsightSquad LBO/Bonds/Advanced Accounting/Corporate Finance courses,
// The M&A Failure Trap (Lev & Gu), NISM Series XV Research Analyst Workbook

export const sourceModules: Module[] = [

  // ─── INTERVIEW PREP: ACCOUNTING ─────────────────────────────────────────────
  {
    id: 'ib-interview-accounting',
    title: 'IB Interview: Accounting Mastery',
    description: 'The exact accounting questions Goldman Sachs, Morgan Stanley and JP Morgan ask in first-round interviews — with model answers from Breaking Into Wall Street\'s 400 Q&A guide.',
    track: 'finance',
    level: 'intermediate',
    estimatedHours: 6,
    icon: '💼',
    color: '#1A6B3C',
    topics: [
      {
        id: 'ib-acc-1',
        title: 'Walk Me Through the 3 Financial Statements',
        content: `This is the single most common finance interview question. If you can't answer this cold, you will not get an offer. Memorize a tight, structured answer.

**The Model Answer (word-for-word framework)**

"The 3 major financial statements are the Income Statement, Balance Sheet, and Cash Flow Statement.

The **Income Statement** gives the company's revenue and expenses and goes down to Net Income — the final line. It covers a *period of time* (a quarter or year).

The **Balance Sheet** shows Assets — Cash, Inventory, PP&E — and Liabilities — Debt, Accounts Payable — and Shareholders' Equity. Assets must always equal Liabilities plus Shareholders' Equity. It is a *snapshot* at a single moment in time.

The **Cash Flow Statement** begins with Net Income, adjusts for non-cash items and working capital changes, then lists cash from Investing and Financing activities. At the end you see the net change in cash."

**How the 3 Statements Link**

"Net Income from the Income Statement flows into Shareholders' Equity on the Balance Sheet AND into the top of the Cash Flow Statement.

Changes in Balance Sheet items (like AR, Inventory, AP) appear as working capital changes on the Cash Flow Statement. The Cash line on the Balance Sheet is a plug — it equals last year's cash plus the net change in cash from the Cash Flow Statement."

**Critical Trick Questions**

*"If you could only look at 1 statement?"* → Cash Flow Statement. It shows true cash generation, independent of accounting adjustments.

*"If you could only look at 2?"* → Income Statement + Balance Sheet — because you can reconstruct the Cash Flow Statement from both (using beginning and ending balance sheets).

**The $10 Depreciation Change — Master This**

This is asked in nearly every first-round interview:

- **Income Statement**: Operating Income ↓ $10 → Pre-Tax Income ↓ $10 → Net Income ↓ $6 (at 40% tax rate)
- **Cash Flow Statement**: Net Income ↓ $6, but add back $10 D&A (non-cash) → Cash Flow from Ops ↑ $4 → Net cash ↑ $4
- **Balance Sheet**: PP&E ↓ $10 (Assets side), Cash ↑ $4 (Assets side) → Assets ↓ $6 net. Shareholders' Equity ↓ $6 (from Net Income decline). Both sides balance ✓

**Why does Depreciation affect cash if it's non-cash?** Because it's tax-deductible — it reduces taxable income and therefore reduces actual cash taxes paid. The cash savings = Depreciation × Tax Rate = $10 × 40% = $4.`,
        keyPoints: [
          'Always go Income Statement → Cash Flow Statement → Balance Sheet in order — this lets you verify the balance sheet balances at the end',
          'Depreciation is non-cash but tax-deductible — it reduces taxes (a real cash outflow), which is why cash INCREASES when depreciation goes up',
          'Net Income flows into BOTH Retained Earnings (Balance Sheet) and the top line of the Cash Flow Statement — this is the key linkage',
          'Working capital: Asset increases DECREASE cash flow; Liability increases INCREASE cash flow (counterintuitive but critical)',
          'The Cash line on the Balance Sheet is always the plug — equal to beginning cash + net change from CFS',
        ],
        realWorldExample: `**Apple iPad Factory Scenario (Classic Interview Case):** Apple buys $100M of factories with debt. Year 1 start: No IS change. CFS: CapEx of -$100M (investing) offset by +$100M debt raised (financing) = net zero. Balance sheet: PP&E +$100M, Debt +$100M, balances. After 1 year (10% depreciation, 10% interest): IS: EBIT -$10 (D&A), interest -$10 → Pre-tax -$20 → Net Income -$12 (40% tax). CFS: Net Income -$12, add back D&A +$10 → CFO -$2. Balance sheet: PP&E -$10, Cash -$2 → Assets -$12. Equity -$12 from net income. Balanced. This single example teaches every key linkage.`,
        practiceQuestions: [
          'Walk me through the 3 financial statements and how they link together. (Practice saying this out loud in under 90 seconds.)',
          'Accrued Compensation goes up by $10. Walk me through the impact on all 3 statements. (Hint: it\'s a liability increase — think about what that does to cash)',
          'Inventory goes up by $10 (paid with cash). Walk me through all 3 statements. Why doesn\'t the Income Statement change?',
        ],
      },
      {
        id: 'ib-acc-2',
        title: 'Advanced Accounting: Deferred Taxes, SBC & Write-downs',
        content: `Advanced accounting questions separate candidates who have read a guide from those who truly understand financial statements. These topics appear frequently in second-round and superday interviews.

**Deferred Tax Assets & Liabilities**

Deferred taxes arise because GAAP accounting and tax accounting treat the same item differently, creating a timing difference.

**Deferred Tax Liability (DTL):** Company pays *less* tax now than GAAP income implies. The liability represents future taxes owed.
- *Classic example:* Accelerated depreciation for tax purposes vs. straight-line for GAAP. Year 1, the company deducts $20M for tax but only $10M under GAAP. Taxes saved now = $10M × 40% = $4M DTL created.

**Deferred Tax Asset (DTA):** Company pays *more* tax now than GAAP income implies. The asset represents future tax savings.
- *Classic example:* Warranty reserves. GAAP records warranty expense when product is sold; tax only allows deduction when warranty is actually paid. You've "over-paid" taxes today relative to GAAP.

**Goodwill and Write-downs**

Goodwill = Purchase Price − Fair Value of Net Assets Acquired.

When a deal is done at a premium (almost always), the excess goes to Goodwill. HP paid $11B for Autonomy in 2011; after discovering accounting fraud, HP wrote down $8.8B of goodwill — one of the largest write-downs in history.

Write-down impact:
- **IS**: Non-cash impairment charge reduces Pre-Tax Income → Net Income falls by Charge × (1 − Tax Rate)
- **CFS**: Net Income down, add back non-cash write-down → Cash Flow from Ops is *up* (by Tax Rate × Write-down)
- **BS**: Asset (Goodwill) down by full write-down, Cash up by tax savings, Equity down by after-tax write-down. Balanced.

**Stock-Based Compensation (SBC)**

SBC is a non-cash expense on the Income Statement but shows up as an add-back on the Cash Flow Statement (like D&A). However, it dilutes shareholders — creating a real economic cost even though no cash leaves.

Impact: SBC ↑ $10 →
- IS: Operating expense ↑, Pre-tax income ↓ $10, Net Income ↓ $6
- CFS: Net Income -$6, add back SBC +$10 → CFO +$4 (same as D&A pattern)
- BS: Cash +$4, Additional Paid-in Capital (equity) +$10, Retained Earnings -$6 → both sides balance

Key nuance: Diluted share count increases from SBC, so EPS is impacted more than just net income.`,
        keyPoints: [
          'DTL = will owe more taxes later (tax-favorable treatment now). DTA = paid more taxes now, get relief later',
          'Goodwill is NOT amortized under US GAAP — it is tested annually for impairment. This is a crucial distinction from other intangibles',
          'A goodwill write-down is non-cash → adds back on CFS → actually INCREASES operating cash flow (counterintuitive)',
          'SBC has the same accounting pattern as D&A: reduces net income but is added back on CFS. But unlike D&A, it dilutes shareholders',
          'When an asset is written down to zero, the full book value is impaired — the tax savings equal write-down × tax rate',
        ],
        realWorldExample: `**HP-Autonomy: The $8.8B Goodwill Disaster:** In 2011, HP paid $11.1B for UK software company Autonomy — a massive premium over its $2B book value. HP recorded ~$6B in goodwill. One year later, HP wrote down $8.8B, alleging Autonomy had inflated revenue through hardware sales disguised as software. The accounting impact: HP's 2012 net income dropped $8.8B (pre-tax), partially offset by a deferred tax benefit. Cash flow from operations was barely affected since the write-down was non-cash. But the real damage was to trust — HP's stock fell 12% the day of the announcement. This case appears in virtually every advanced accounting interview as an example of why goodwill analysis matters.`,
        practiceQuestions: [
          'A company uses accelerated depreciation for tax purposes ($20M) but straight-line for GAAP ($10M). Tax rate is 35%. What deferred tax liability is created in Year 1? Walk through the balance sheet impact.',
          'Company XYZ writes down $50M of goodwill. Tax rate is 30%. Walk through the complete impact on all 3 financial statements.',
          'Why is SBC added back on the Cash Flow Statement if it genuinely costs the company money (through dilution)? Is this a flaw in GAAP accounting?',
        ],
      },
    ],
  },

  // ─── INTERVIEW PREP: VALUATION & DCF ────────────────────────────────────────
  {
    id: 'ib-interview-valuation',
    title: 'IB Interview: Valuation & DCF',
    description: 'Master the valuation questions that decide investment banking offers — comparable companies, precedent transactions, DCF, WACC, terminal value, and the nuances that separate top candidates.',
    track: 'finance',
    level: 'intermediate',
    estimatedHours: 8,
    icon: '📊',
    color: '#3D6FE8',
    topics: [
      {
        id: 'ib-val-1',
        title: 'The 3 Valuation Methodologies — Deep Dive',
        content: `Every finance interview starts here. But the question is no longer just "name the 3 methods" — interviewers want to know WHY you use each one, WHEN each is appropriate, and WHICH produces the highest value.

**The 3 Core Methodologies**

**1. Comparable Company Analysis (Trading Comps)**
Valuing a company based on how similar public companies are priced in the market.

*Process:*
- Screen for companies by industry, size (revenue/EBITDA), geography
- Pull multiples: EV/Revenue, EV/EBITDA, EV/EBIT, P/E, P/BV
- Apply median (or 25th/75th percentile) to the target company's metrics
- Result: implied Enterprise Value or implied share price

*Key multiples by industry:*
- Tech (internet): EV/Revenue, EV/Unique Visitors (pre-revenue)
- Retail/Airlines: EV/EBITDAR (add back rent — some companies own, some lease)
- Energy: EV/EBITDAX, EV/Daily Production, EV/Proved Reserves
- REITs: Price/FFO, Price/AFFO (adds back depreciation, strips out gains on sales)
- Banks: P/E, P/Book Value (not EV-based — debt is their "product")

**2. Precedent Transactions (Deal Comps)**
Valuing based on what acquirers have paid in past M&A deals for similar companies.

*Why higher than trading comps?* Buyers pay a **control premium** — typically 20-40% above the unaffected stock price — to acquire a company outright and exercise control.

*Key nuance:* Data is harder to find. Private deal data is often unavailable. Transaction multiples reflect market conditions at the time of the deal — a 2021 deal during ZIRP is not comparable to a 2023 deal post-rate hikes.

**3. Discounted Cash Flow (DCF)**
Intrinsic valuation — what is the company worth based on its own future cash flows?

The model: Project 5-10 years of Unlevered Free Cash Flow → discount at WACC → add Terminal Value (discounted) → Enterprise Value.

*When NOT to use DCF:*
- Startups with no predictable cash flows (pre-revenue biotech, early-stage tech)
- Banks and financial institutions (debt is their product, working capital huge)
- Highly cyclical companies (cash flows too volatile to project)

**The Ranking Question**
*"Rank the 3 from highest to lowest value."* — This is a trick question.

The honest answer: **Precedent Transactions > Comparable Companies** (control premium). DCF is the most variable — it can produce the highest OR lowest value depending on assumptions.

**Other Methodologies**
- **LBO Analysis**: Sets the "floor" — what a PE firm could pay to hit 20-25% IRR
- **Sum of the Parts**: For conglomerates with unrelated divisions (GE, Berkshire)
- **Liquidation Valuation**: Bankruptcy scenarios — what assets would fetch if sold off
- **Football Field Chart**: Shows all methodologies as ranges side-by-side — the standard output in pitch books and fairness opinions`,
        keyPoints: [
          'Precedent Transactions > Comparable Companies in almost all cases — the control premium explains the gap',
          'Never use Equity Value / EBITDA — EBITDA is available to ALL investors (debt + equity), so pair it with Enterprise Value',
          'Unlevered FCF → Enterprise Value (discount at WACC). Levered FCF → Equity Value (discount at Cost of Equity)',
          'For pre-revenue companies (Facebook in 2004), use traffic/user multiples — do NOT attempt a DCF on a company with no cash flows',
          'LBO analysis sets the floor valuation — PE firms almost always pay less than strategic acquirers',
        ],
        realWorldExample: `**Credit Suisse Football Field — Sungard LBO (2005):** The Sungard Data Systems LBO ($11.4B) is a classic case study used in IB training. Credit Suisse's fairness opinion showed a football field with 4 methodologies: Trading comps implied $28-34/share, precedent transactions implied $33-41/share, DCF implied $30-48/share (wide range from assumption sensitivity), and LBO analysis implied $30-38/share (floor). The deal closed at $36/share — within the range of all methodologies, validating the football field approach. The wide DCF range illustrates why DCF is called "the most variable methodology."`,
        practiceQuestions: [
          'Why can\'t you use Equity Value / EBITDA as a multiple? Explain using the logic of who has a "claim" on EBITDA.',
          'You\'re valuing a company in a cyclical industry (semiconductors). Which valuation methodology concerns you most and why? What adjustments would you make?',
          'A private equity firm is willing to pay $500M for a company. A strategic acquirer bids $650M. Explain the gap using first principles — what justifies the strategic acquirer paying 30% more?',
        ],
      },
      {
        id: 'ib-val-2',
        title: 'DCF & WACC — The Complete Framework',
        content: `DCF questions go deep in interviews. Beyond the basic framework, expect questions on WACC components, beta un-levering, terminal value, and sensitivity analysis.

**Walking Through a DCF**

"A DCF values a company based on the Present Value of its future Cash Flows plus the Present Value of its Terminal Value.

Step 1: Project Unlevered Free Cash Flow for 5-10 years
- Revenue × (1 + growth) each year
- Subtract COGS and OpEx → EBIT
- Multiply EBIT × (1 − Tax Rate) → NOPAT
- Add back D&A (non-cash)
- Subtract CapEx and change in Working Capital
= **Unlevered Free Cash Flow**

Step 2: Discount FCFs at WACC to get Present Value

Step 3: Calculate Terminal Value using either:
- **Multiples Method**: Year 5 EBITDA × Exit Multiple (e.g., 8x) — most common in banking
- **Gordon Growth Model**: FCF₅ × (1 + g) / (WACC − g) — used when no good comps exist

Step 4: Discount Terminal Value at WACC

Step 5: Enterprise Value = Sum of PV(FCFs) + PV(Terminal Value)"

**WACC Formula**
WACC = Cost of Equity × (E/V) + Cost of Debt × (D/V) × (1 − Tax Rate)

**Cost of Equity (CAPM)**
Cost of Equity = Risk-Free Rate + Beta × Equity Risk Premium

- Risk-Free Rate: 10-year US Treasury yield
- Beta: measures systematic risk relative to the market (un-lever comps, take median, re-lever for target's capital structure)
- Equity Risk Premium: typically 5-6% (from Ibbotson's/Duff & Phelps data)

**Un-levering and Re-levering Beta**
Un-Levered Beta = Levered Beta / (1 + (1 − Tax Rate) × (Debt/Equity))
Re-Levered Beta = Un-Levered Beta × (1 + (1 − Tax Rate) × (Debt/Equity))

*Why?* Comparable companies have different capital structures — you need to strip out leverage (un-lever) to see the "pure business risk" (asset beta), then add back your target company's leverage (re-lever).

**Terminal Value — Critical Nuances**
- Terminal Value typically = 60-80%+ of total Enterprise Value in a DCF. This is normal, not a flaw.
- If Terminal Value > 90%, your near-term projections may be too conservative
- Gordon Growth rate should never exceed the economy's long-term GDP growth (~2-3% for developed markets)
- Exit multiples should reflect where the industry will trade in 5-10 years, not today

**Key Interview Trick Questions**
- "Which has more impact: 10% change in revenue or 1% change in discount rate?" → Revenue change, because it flows through all years AND the terminal value
- "Company with no debt vs. company with lots of debt — which has higher WACC?" → The one with NO debt — debt is cheaper than equity (tax deductible + lower required return), so adding debt lowers WACC
- "Why not use DCF for banks?" → Debt is their product; interest payments are operating items, not financing; working capital is massive relative to net income`,
        keyPoints: [
          'WACC = weighted cost of all capital sources. Debt cheaper than equity because interest is tax-deductible (after-tax cost of debt = rate × (1 − tax rate))',
          'Un-lever beta to remove capital structure effects, re-lever at target\'s structure — otherwise you\'re comparing apples to oranges',
          'Terminal value is ALWAYS the majority of DCF value — 60-80% is normal. The concern is when it exceeds 90%',
          'Gordon Growth rate must be below WACC or terminal value formula breaks (negative denominator = nonsense). Keep it below long-term GDP growth',
          'A company with NO debt has HIGHER WACC than one with debt — this surprises many candidates. Debt lowers WACC up to optimal leverage point',
        ],
        realWorldExample: `**Apple DCF — Why Terminal Value Dominates:** A simplified Apple DCF (2024): Project $420B revenue growing 5%/year, 30% FCF margin → ~$126B FCF/year. Discount at 9% WACC. Over 5 years, PV of FCFs ≈ $480B. Terminal Value at 20x FCF = $2.52T, discounted to today ≈ $1.64T. Total EV: $2.12T. Terminal Value represents 77% of total value. This is why every Goldman Sachs analyst scrutinizes the exit multiple and growth rate assumptions — small changes in those two numbers move Apple's implied stock price by 20-30%.`,
        practiceQuestions: [
          'Walk through how you would calculate WACC for a company with $1B market cap (equity), $500M debt at 6% interest, 25% tax rate. Use a beta of 1.2, 4.5% risk-free rate, and 5.5% equity risk premium.',
          'A DCF produces $80/share using 8% WACC and 2% terminal growth. A 1% increase in WACC drops value to $65/share. A 1% decrease in terminal growth drops to $68/share. What does this sensitivity tell you about which assumption deserves more scrutiny?',
          'Why would you not use a DCF to value JPMorgan Chase? What methodology would you use instead, and what metrics would you focus on?',
        ],
      },
    ],
  },

  // ─── LBO MODELING ───────────────────────────────────────────────────────────
  {
    id: 'fin-lbo-modeling',
    title: 'LBO Modeling — From Basics to KKR',
    description: 'Build Leveraged Buyout models from scratch — the way Blackstone, KKR, and Apollo actually model deals. Covers deal structure, debt tranches, returns analysis, and the KKR-BMC case study.',
    track: 'finance',
    level: 'advanced',
    estimatedHours: 16,
    icon: '🏦',
    color: '#7C3AED',
    topics: [
      {
        id: 'lbo-1',
        title: 'LBO Fundamentals: Structure, Leverage & Returns',
        content: `A Leveraged Buyout is the acquisition of a company using significant borrowed money — typically 50-70% debt — where the acquired company's cash flows service the debt. It is the core transaction type for every PE firm: Blackstone, KKR, Apollo, Carlyle, Bain Capital.

**Why Use Leverage?**

The mathematics are simple but powerful:

Without leverage: Buy company for $1B with $1B equity. Sell for $2B in 5 years. Equity doubles → **2x MOIC, ~15% IRR**.

With 60% leverage: Buy same company for $1B with $400M equity + $600M debt. The company's cash flows pay down debt to $300M by exit. Sell for $2B. Equity value = $2B - $300M debt = $1.7B. Return on $400M equity → **4.25x MOIC, ~34% IRR**.

Same company, same exit — but leverage doubled the IRR. That's why PE firms use debt.

**The 5-Step LBO Model**

**Step 1: Entry Assumptions**
- Purchase price = Entry EBITDA × Entry Multiple (e.g., $100M EBITDA × 10x = $1B EV)
- Debt/EBITDA (leverage): typically 4-6x in current market (was 7-8x pre-2008)
- Equity = Purchase Price − Total Debt raised

**Step 2: Sources & Uses Table**
Sources: Term Loan A, Term Loan B, Senior Notes, Subordinated Notes, Equity from PE firm, Rollover equity from management
Uses: Purchase of equity, transaction fees, financing fees, cash to balance sheet

**Step 3: Adjust the Balance Sheet**
- Wipe out existing equity → replace with PE firm's equity
- Add new debt structure
- Create Goodwill = Purchase Price − Fair Value of Net Assets (balance sheet plug)
- Capitalize financing fees as an asset (amortized over debt life)

**Step 4: Project Operations + Debt Schedule**
- Project Income Statement: Revenue growth, margin improvement (PE value creation)
- Mandatory debt amortization (Term Loans amortize; Senior Notes bullet at maturity)
- Cash flow sweep: excess cash after interest + mandatory amortization → optional debt paydown

**Step 5: Exit & Returns**
- Exit Enterprise Value = Exit Year EBITDA × Exit Multiple
- Exit Equity Value = Exit EV − Remaining Debt
- MOIC = Exit Equity / Entry Equity
- IRR = rate that makes NPV of cash flows zero (use XIRR function in Excel)

**The Ideal LBO Candidate**
1. Stable, predictable cash flows (consumer staples, healthcare, enterprise software)
2. Low ongoing CapEx requirements (asset-light business models)
3. Pricing power (can raise prices to cover debt service)
4. Undervalued or underperforming management
5. Strong asset base for debt collateral
6. Multiple expansion opportunity (buy at 7x, sell at 10x as company grows)`,
        keyPoints: [
          'Leverage amplifies returns both ways — a 2x equity return at 40% leverage becomes 4x at 70% leverage, but losses are equally amplified on the downside',
          'Entry multiple is the #1 driver of LBO returns — paying 1x more EBITDA at entry can reduce IRR by 3-5 percentage points',
          'Cash flow sweep: once mandatory debt payments are covered, all free cash flow goes to pay down debt fastest — this maximizes equity value at exit',
          'MOIC (Multiple on Invested Capital) and IRR both matter: 3x in 3 years (44% IRR) is better than 3x in 7 years (17% IRR)',
          'Financing fees are capitalized (balance sheet asset), not expensed immediately — they are amortized over the debt\'s life as a non-cash IS charge',
        ],
        realWorldExample: `**KKR's Acquisition of BMC Software (2018):** KKR acquired BMC (enterprise IT software) for $8.3B — approximately 10.5x EBITDA on ~$790M EBITDA. The deal was funded with ~$5.5B debt (7x EBITDA) and ~$2.8B equity. BMC generated strong, predictable cash flows from enterprise software maintenance contracts — the ideal LBO candidate. KKR's thesis: (1) operational improvement to expand EBITDA margins from ~38% to 45%+, (2) debt paydown from strong FCF, (3) exit at 12-13x to a strategic buyer or via IPO. By 2021, BMC had grown EBITDA to ~$1.1B and repaid significant debt. The exit valued BMC at ~$13B, generating ~$5B in equity proceeds on $2.8B invested — approximately a 1.8x MOIC and 20%+ IRR over 3 years.`,
        practiceQuestions: [
          'Build a simple LBO: Company has $150M EBITDA. You buy at 9x ($1.35B EV) with 5x leverage ($750M debt at 8% interest). Exit at 10x after 5 years with $200M EBITDA. Assume debt pays down to $400M. Calculate MOIC and estimate IRR. What happens to IRR if you exit at 8x instead?',
          'What makes a company an "ideal" LBO candidate? Evaluate these 3 companies: (A) Hospital chain, 15% EBITDA margin, $2B revenue, significant real estate assets. (B) SaaS company, 40% EBITDA margin, high growth, minimal assets. (C) Consumer food brand, 22% EBITDA margin, slow growth, strong brand. Rank them for LBO suitability.',
          'Walk through a Sources & Uses table for a $2B LBO (8x EBITDA on $250M EBITDA). Assume: 55% debt (mix of TLA, TLB, Senior Notes), 45% equity. Include 2% transaction fees and 2% financing fees. What is the effective entry multiple on a fee-adjusted basis?',
        ],
      },
      {
        id: 'lbo-2',
        title: 'Debt Tranches, Covenants & Capital Structure',
        content: `The capital structure of an LBO is not one type of debt — it's a carefully constructed "waterfall" of different debt tranches, each with different risk, return, cost, and covenant structures. Understanding each tranche is essential for PE interviews.

**The LBO Debt Stack (Senior to Junior)**

| Tranche | Interest | Amortization | Tenor | Covenants | Investors |
|---------|----------|--------------|-------|-----------|-----------|
| Revolving Credit Facility | Lowest (L+150-300bps) | None (drawn as needed) | 3-5 yr | Maintenance | Senior banks |
| Term Loan A (TLA) | Low (L+175-325bps) | Straight-line (5-7yr) | 5-6 yr | Maintenance | Senior banks |
| Term Loan B (TLB) | Medium (L+300-500bps) | Minimal (1%/yr) | 6-8 yr | Maintenance | CLOs, hedge funds |
| Senior Notes | Higher (7-10% fixed) | Bullet at maturity | 7-10 yr | Incurrence | HY bond investors |
| Subordinated Notes | Even Higher | Bullet | 8-10 yr | Incurrence | Mezzanine funds |
| Mezzanine | Highest (15-20%+ PIK+cash) | PIK or Cash | 8-12 yr | Incurrence | Mezz funds |

**Maintenance vs. Incurrence Covenants**

**Maintenance covenants** (bank debt): Company must MAINTAIN minimum financial ratios at all times — e.g., Debt/EBITDA < 5.5x, Interest Coverage Ratio > 2.0x tested quarterly. Violation = technical default → lender can accelerate debt repayment.

**Incurrence covenants** (high-yield): Company is only restricted from doing SPECIFIC things — e.g., can't incur additional debt if leverage exceeds 4.5x, can't sell assets above $50M. Less restrictive.

**PIK (Payment-in-Kind) Interest**
PIK interest is paid by issuing additional debt (not cash). PE firms sometimes prefer PIK for junior tranches in highly leveraged deals to preserve cash for operations. Example: $100M mezz note at 15% PIK → after 1 year, debt grows to $115M. No cash leaves, but equity is increasingly diluted.

**Dividend Recapitalization**
After 2-3 years of debt paydown, PE firms sometimes take on NEW debt to pay themselves a dividend — without selling the company. This pulls forward returns. Example: KKR buys company, pays down $200M of debt, then borrows $150M in a recap and pays itself a $150M dividend. IRR improves because equity was returned earlier, but company's leverage increases.

**LIBOR/SOFR Transition**
In 2023, financial markets switched from LIBOR to SOFR (Secured Overnight Financing Rate) as the floating rate benchmark. All new leveraged loans now reference SOFR. Existing LIBOR loans were converted. In models: floating rate debt cost = SOFR + spread (e.g., SOFR + 350bps).`,
        keyPoints: [
          'Senior secured debt (TLA/TLB) always has lower interest rates AND maintenance covenants — the bank gets financial monitoring rights in exchange for the lower rate',
          'High-yield bonds have incurrence covenants (less restrictive) but higher rates — PE firms use HY when they want operational flexibility',
          'PIK interest preserves cash but grows the debt balance exponentially — it\'s essentially compounding leverage. High risk if company performance deteriorates',
          'The revolver is a liquidity backstop, not permanent financing — drawing the revolver is a warning sign (company needs emergency cash)',
          'Dividend recaps are criticized because they increase portfolio company risk to benefit PE sponsor — they\'ve been linked to several subsequent bankruptcies',
        ],
        realWorldExample: `**Toys R Us Bankruptcy (2017) — Death by LBO Debt:** In 2005, KKR, Verizon, and Bain Capital bought Toys R Us for $6.6B with $5.3B of debt (80% leverage). The capital structure included a $1.3B Term Loan at L+350, $400M senior notes at 7.375%, and $800M of subordinated notes at 7.625%. Annual interest expense: ~$400M. Revenue: ~$11B. The company had $400M in annual interest payments but only $250M in average EBITDA — it could never cover its debt service. When Amazon destroyed toy retail, Toys R Us filed for bankruptcy in 2017 with $5B in remaining debt. 33,000 employees lost their jobs. KKR, Bain, and Verizon lost their equity. The lesson: even a great LBO structure fails when leverage is too high for the operating environment.`,
        practiceQuestions: [
          'A company has $500M in debt: $200M TLA at L+300bps, $150M TLB at L+425bps, $150M Senior Notes at 9% fixed. SOFR is currently 5.3%. Calculate total annual interest expense. What happens to the floating-rate debt cost if SOFR rises to 6.3%?',
          'Compare two LBO structures for a company with $100M EBITDA: Structure A has 4x bank debt (maintenance covenants) at L+350. Structure B has 3x bank debt + 2x high-yield notes (incurrence covenants) at 9%. Calculate annual interest for each. Which structure would you recommend if the PE firm plans major acquisitions post-close?',
          'Explain a dividend recapitalization to a PE firm\'s LP (pension fund investor). What are the benefits and risks? When is it appropriate? When is it abusive?',
        ],
      },
    ],
  },

  // ─── FIXED INCOME & BONDS ──────────────────────────────────────────────────
  {
    id: 'fin-fixed-income',
    title: 'Fixed Income & Bonds — Complete Guide',
    description: 'Master bonds from first principles to credit analysis — yield calculations, duration, the yield curve, callable bonds, Z-spreads, and credit analysis used by Goldman\'s fixed income desk.',
    track: 'finance',
    level: 'intermediate',
    estimatedHours: 12,
    icon: '📈',
    color: '#457B9D',
    topics: [
      {
        id: 'fi-1',
        title: 'Bond Basics: Pricing, Yields & Conventions',
        content: `Bonds are loans. The borrower (issuer) pays the lender (investor) periodic interest (coupons) and returns principal at maturity. Understanding bond math is essential for investment banking, sales & trading, asset management, and fixed income research.

**Core Bond Terminology**

- **Par Value (Face Value)**: The amount repaid at maturity. Conventionally $1,000.
- **Coupon Rate**: Annual interest rate on face value. 5% coupon on $1,000 par = $50/year = $25 semi-annual payments
- **Coupon Frequency**: US corporate bonds pay semi-annually; European bonds pay annually
- **Maturity**: Date the principal is repaid. Can range from overnight (T-bills) to 100 years (century bonds)
- **Yield to Maturity (YTM)**: The internal rate of return if you buy the bond today and hold to maturity
- **Clean Price**: Bond price excluding accrued interest (how it's quoted)
- **Dirty Price (Full Price)**: Clean Price + Accrued Interest (what you actually pay)

**The Fundamental Bond Pricing Formula**

Price = Σ [Coupon / (1+r)^t] + [Par / (1+r)^n]

Where r = periodic yield (semi-annual for US bonds), n = number of periods

**Example:** 10-year bond, 5% annual coupon, $1,000 par, 6% YTM (semi-annual compounding)
- Semi-annual coupon = $25
- Semi-annual yield = 3%
- 20 periods
- Price = PV of 20 coupon payments + PV of $1,000 at period 20
- Price ≈ $925.61 (bond trades at a DISCOUNT because coupon < YTM)

**The Critical Inverse Relationship**

**Price ↑ when Yield ↓ (and vice versa)**

Intuition: If you paid $1,000 for a bond paying 5% ($50/year), and new bonds now offer 6% — your 5% bond is worth less. Someone buying it will only pay $X so that the $50/year coupon provides a 6% return on $X.

This is the most fundamental concept in fixed income. Every bond trader, PM, and IB analyst must internalize it.

**Day Count Conventions**
- US Treasuries: Actual/Actual
- US Corporate Bonds: 30/360 (assumes each month has 30 days, year has 360)
- Money Market: Actual/360

Accrued Interest = Coupon × (Days Since Last Payment / Days in Coupon Period)

**Types of Yields**
- **Current Yield** = Annual Coupon / Current Price (simple, ignores par repayment)
- **Yield to Maturity (YTM)** = IRR of all cash flows (gold standard)
- **Yield to Call (YTC)** = YTM assuming bond is called at first call date
- **Yield to Worst (YTW)** = Minimum of YTM and all YTC scenarios (most conservative)`,
        keyPoints: [
          'Bond Price and Yield move in OPPOSITE directions — this is the single most important bond concept. Rising rates = falling bond prices.',
          'YTM is the IRR of the bond — it assumes all coupons are reinvested at the same rate (reinvestment risk assumption)',
          'A bond at PAR means coupon rate = YTM. A bond at DISCOUNT means coupon rate < YTM. A bond at PREMIUM means coupon rate > YTM.',
          'Dirty price (what you pay) = Clean price (what\'s quoted) + Accrued Interest. Accrued interest belongs to the seller for the period they held.',
          'Yield to Worst (YTW) is the most important yield for callable bonds — always assume the worst case for the investor',
        ],
        realWorldExample: `**2022 Bond Market Crash — Worst Year Since 1788:** In 2022, the Federal Reserve raised rates from 0.25% to 4.5% in the fastest rate hike cycle in 40 years. The Bloomberg US Aggregate Bond Index lost 13% — its worst year in recorded history. A 30-year Treasury bond purchased at 2% yield in 2021 fell from $100 to $58 as yields rose to 4.3%. Pension funds, endowments, and retail investors who thought bonds were "safe" suffered catastrophic losses. Silicon Valley Bank held $91B of long-duration securities at cost — when those bonds were worth $76B at market, SVB was effectively insolvent. The 2022 crisis is the definitive real-world example of interest rate risk: duration × rate change = approximate % price change.`,
        practiceQuestions: [
          'A 5-year bond has a 4% annual coupon, $1,000 par value, and currently yields 6%. Using the bond pricing formula, is this bond trading at a premium or discount? Estimate the price without a calculator by reasoning through the relationship.',
          'You own a 10-year Treasury bond yielding 3.5%. The Fed raises rates by 200bps to 5.5%. Approximate the bond\'s new price using duration (assume duration of 8 years). Show your work. What does this tell you about why pension funds were devastated in 2022?',
          'A bond is quoted at a clean price of $98.50, has a 6% semi-annual coupon ($1,000 par), and the last payment was 45 days ago in a 30/360 convention. Calculate the dirty price (what you actually pay).',
        ],
      },
      {
        id: 'fi-2',
        title: 'Interest Rate Risk: Duration, Convexity & the Yield Curve',
        content: `Duration is the most important risk measure in fixed income. It quantifies how sensitive a bond's price is to changes in interest rates — and every fixed income PM, bank treasurer, and risk manager uses it daily.

**Macaulay Duration**

Duration = weighted average time to receive cash flows, where weights = PV of each cash flow / Bond Price.

Intuition: A zero-coupon bond maturing in 10 years has duration of exactly 10 years. A 10-year bond paying 10% coupons has duration of ~7 years — because significant cash arrives earlier (coupons), reducing the effective waiting time.

**Modified Duration**

Modified Duration = Macaulay Duration / (1 + YTM/m), where m = coupon payments per year

**The Critical Formula:**
ΔP/P ≈ −Modified Duration × ΔYield

Example: Bond with Modified Duration of 7 years, YTM rises 100bps (1%)
Price change ≈ −7 × 0.01 = −7% price decline

**Practical Duration Rules**
- Zero-coupon bond: Duration = Maturity
- Higher coupon → Lower duration (more cash arrives early)
- Higher YTM → Lower duration (future cash flows discounted more heavily)
- Longer maturity → Higher duration
- Duration is approximately the % price change for a 100bps yield change

**Convexity — Why Duration is an Approximation**

Duration gives a linear approximation. The actual price-yield relationship is CURVED (convex). Convexity measures this curvature.

For large yield changes, the price change is BETTER than duration predicts (for long positions) — because convexity works in your favor. This is why investors prefer high-convexity bonds.

Full price change ≈ (−Duration × ΔY) + (0.5 × Convexity × ΔY²)

**The Yield Curve**

The yield curve plots YTM vs. maturity for bonds of the same credit quality (typically US Treasuries).

*Normal (upward sloping):* Long-term rates > Short-term rates. Economy expected to grow; investors demand premium for duration risk. Most common historical shape.

*Flat:* Short and long rates are similar. Transitional — often seen when Fed is in the middle of a rate cycle.

*Inverted:* Short-term rates > Long-term rates. The most watched signal in markets — has preceded every US recession since 1960 (though with variable lead times).

*2022-2024 Inversion:* 2-year Treasury yielded 5.1%, 10-year yielded 4.1% — a 100bps inversion. Every major Wall Street bank flagged this as recession warning. The 2s10s spread (10-year minus 2-year) is the most watched yield curve measure.

**Theories Explaining the Yield Curve Shape**
1. **Expectations Theory**: Long rates = average of expected future short rates
2. **Liquidity Preference**: Investors demand a premium (term premium) for longer maturities → upward slope
3. **Market Segmentation**: Different investors operate in different maturity segments (insurance companies prefer long bonds)`,
        keyPoints: [
          'Modified Duration × Rate Change = Approximate % Price Change. Duration of 8 + 100bps rate rise = ~8% price decline.',
          'Convexity is always positive for standard bonds — it means price declines LESS than duration predicts when rates rise, and increases MORE when rates fall',
          'An inverted yield curve (2s10s < 0) has preceded every US recession since 1960 — it\'s the most important macro signal in fixed income',
          'Duration and maturity are not the same — a 30-year zero-coupon bond has duration of 30. A 30-year 8% coupon bond has duration of ~12',
          'Callable bonds have negative convexity near the call price — when rates fall, the issuer calls the bond, capping price appreciation. Investors are compensated with a higher yield',
        ],
        realWorldExample: `**PIMCO's "New Neutral" vs. the 2022 Crash:** Bill Gross built PIMCO into the world's largest bond fund ($2T+) by mastering duration management. In 2013, when the "Taper Tantrum" caused rates to spike 100bps in weeks, his Total Return Fund lost 2% while competitors lost 5-6% — because Gross had reduced duration to 4 years when most bond funds ran 6-7 years. Duration management was worth $20B+ in preserved capital. When Gross left PIMCO in 2014, his successor ran high duration into 2022 — the fund lost 25% as rates rose 400bps. A 25% loss on a "safe" bond fund: the consequence of 8-year duration × 4% rate rise.`,
        practiceQuestions: [
          'Bond A: 20-year, 2% coupon, Modified Duration 16 years. Bond B: 5-year, 8% coupon, Modified Duration 4 years. Rates rise 150bps. Calculate the approximate price change for each bond. Which would you hold if you expected rates to rise? To fall?',
          'The 2-year Treasury yields 5.2% and the 10-year yields 4.1%. (a) Is the curve normal or inverted? (b) What does expectations theory say this implies about where 2-year rates will be in the future? (c) If the Fed cuts rates 200bps over 2 years, how would the yield curve likely reshape?',
          'Explain why callable bonds have negative convexity. A callable bond with a call price of $105 is currently trading at $104. Rates fall 100bps — does the bond price rise by its full duration amount? Why or why not?',
        ],
      },
      {
        id: 'fi-3',
        title: 'Credit Analysis — Evaluating Default Risk',
        content: `Credit analysis determines the probability that a borrower will default. It is the core skill of credit analysts at rating agencies (Moody's, S&P, Fitch), high-yield bond desks, leveraged loan desks, and credit hedge funds.

**The Credit Analysis Framework**

**1. Business Risk Assessment**
- Industry dynamics: cyclicality, competition, barriers to entry, regulatory environment
- Competitive position: market share, pricing power, customer concentration
- Management quality: track record, strategic clarity, financial discipline

**2. Financial Risk Assessment**

Key leverage ratios:
- **Debt/EBITDA**: Primary leverage metric. Investment grade < 3x; BB-rated 3-4x; B-rated 4-6x; CCC 6x+
- **Interest Coverage (EBITDA/Interest Expense)**: Safety cushion. Must be > 1x to service debt. Under 2x is distressed.
- **Debt/Capital**: Total debt vs. total capital (debt + equity). Measures balance sheet leverage.
- **Net Debt/EBITDA**: Subtracts cash — more accurate for cash-rich companies

Free Cash Flow metrics:
- **FCF/Debt**: Measures debt paydown capability. >10% is strong; <5% is concerning
- **FCF Yield**: FCF per share / share price — for equity investors comparing to bonds

**3. Liquidity Analysis**
- Cash on hand and cash burn rate
- Revolver capacity and covenants (can they draw?)
- Near-term debt maturities (wall of debt = crisis)
- Working capital trends

**4. Capital Structure Seniority**
In default, recovery depends on where you sit in the capital structure:
- Senior Secured: Recovery 80-100 cents on dollar
- Senior Unsecured: Recovery 40-60 cents
- Subordinated: Recovery 10-30 cents
- Equity: Zero in most bankruptcies

**Credit Ratings**

Investment Grade (IG): AAA, AA, A, BBB (Moody's: Aaa, Aa, A, Baa)
High Yield (HY) / "Junk": BB, B, CCC, CC, C, D (Moody's: Ba, B, Caa...)

*The BBB/BB divide is critical:* Insurance companies, pension funds, and many institutional investors CANNOT hold bonds below BBB (investment grade). When a bond is downgraded from BBB to BB (a "fallen angel"), forced selling creates a price cliff — a major event for credit markets.

**Spread Analysis**

Credit spread = Yield of corporate bond − Yield of equivalent Treasury

A BB-rated 5-year corporate yielding 7% when 5-year Treasury yields 4.5% has a spread of 250bps.

Spread compensates investors for:
1. Default risk (probability of default × loss given default)
2. Liquidity risk (can't sell quickly at a fair price)
3. Uncertainty premium

**Z-spread**: The constant spread over the entire Treasury SPOT RATE curve that equates the bond's PV to its market price. More precise than nominal spread (which uses only one Treasury point). Used for non-callable bonds.

**OAS (Option-Adjusted Spread)**: For callable bonds — strips out the value of the embedded call option. Comparable across callable and non-callable bonds.`,
        keyPoints: [
          'Debt/EBITDA is the primary leverage metric for credit analysis. Investment grade < 3x; below 1.0x EBITDA Interest Coverage is technical distress',
          'Fallen angels (BBB → BB) cause forced selling by investment-grade-only investors — one of the most predictable credit market dislocations',
          'Senior secured debt recovers 80-100 cents in bankruptcy; subordinated debt 10-30 cents; equity zero — always know where you sit in the waterfall',
          'Z-spread uses the full Treasury spot rate curve; OAS adjusts for embedded options — use OAS when comparing callable vs. non-callable bonds',
          'Liquidity analysis often matters more than leverage in predicting near-term default — a company can be 5x leveraged and survive if it has $2B cash and no near-term maturities',
        ],
        realWorldExample: `**WeWork's Descent from IG to Default:** WeWork issued $702M in 7.875% Senior Notes in 2018 at a spread of ~500bps over Treasuries — rated B+ by S&P (deep junk). Analysis at the time: Debt/EBITDA was negative (negative EBITDA), revenue growing 100%+ but losses of $1.9B/year. The ICR (interest coverage) was deeply negative. The notes covenants prohibited additional debt above 3.5x gross revenue — but WeWork was already spending $1.40 for every $1.00 earned. Moody's warned of "unlimited cash burn." When the IPO failed in September 2019, WeWork's liquidity evaporated. The bonds fell from $100 to $50 in weeks. WeWork filed for bankruptcy in 2023. The $702M senior notes were trading at 30 cents on the dollar — consistent with the 30-40% recovery rate for unsecured creditors. Credit analysis predicted this outcome 5 years before the market priced it.`,
        practiceQuestions: [
          'Company has: $2B debt, $450M EBITDA, $50M interest expense, $100M CapEx, $30M change in working capital. Calculate: Debt/EBITDA, Interest Coverage (EBITDA/Interest), and FCF/Debt. Based on these metrics, what credit rating range (IG or HY?) would you assign? What is your biggest concern?',
          'A BB-rated bond yields 7.8%. The 5-year Treasury yields 4.2%. A similar BBB-rated bond yields 5.5%. (a) What are the credit spreads for each? (b) If the economy weakens and investors demand 150bps more spread for BB bonds, what happens to the BB bond price (assume 5-year duration)? (c) When would you buy vs. avoid BB bonds?',
          'Explain the concept of "fallen angels." Why does a downgrade from BBB- to BB+ cause such a sharp price drop? Name two real companies that became fallen angels in the past 10 years and what happened to their bond prices.',
        ],
      },
    ],
  },

  // ─── M&A ANALYSIS ──────────────────────────────────────────────────────────
  {
    id: 'fin-ma-analysis',
    title: 'M&A Strategy & Why Deals Fail',
    description: 'The real-world analytics of M&A — from merger model mechanics to why 70% of acquisitions destroy value, based on Baruch Lev\'s research on 40 years of M&A data and Breaking Into Wall Street\'s merger model guide.',
    track: 'finance',
    level: 'advanced',
    estimatedHours: 10,
    icon: '🤝',
    color: '#E85D5D',
    topics: [
      {
        id: 'ma-1',
        title: 'Merger Model Mechanics & Accretion/Dilution',
        content: `A merger model determines whether an acquisition is accretive or dilutive to the buyer's EPS (Earnings Per Share). Every investment banker works on merger models. The mechanics are specific and testable.

**Accretion vs. Dilution**

**Accretive**: Combined EPS > Acquirer's standalone EPS → good for shareholders
**Dilutive**: Combined EPS < Acquirer's standalone EPS → bad for shareholders

EPS is diluted when the buyer pays more for the target than the target's earnings contribution (adjusted for financing cost).

**The Accretion/Dilution Test**

Accretive if: Target's P/E < Buyer's P/E (for all-stock deals)

Why? In an all-stock deal, the buyer "pays" with shares valued at its P/E. If the target's P/E is lower, each share "buys" more earnings than it represents — net accretive.

Example: Buyer P/E = 20x. Target P/E = 15x. All-stock deal. The buyer pays 20x per share but buys earnings worth 15x — accretive.

**Merger Model Steps**

**Step 1: Purchase Price Assumptions**
- Offer Price per Share × Target Diluted Shares = Equity Purchase Price
- + Assumption of Target Debt − Target Cash = Enterprise Value paid
- Premium to Current Price (typically 20-40%)

**Step 2: Financing**
- All Cash: Straightforward — reduces buyer's cash, no share dilution
- All Stock: Issue new buyer shares. Determine exchange ratio = Offer Price / Buyer Share Price
- Mix: Portion cash, portion stock

**Step 3: Purchase Price Allocation (PPA)**
- Identify fair values of Target's net assets
- Any excess of Purchase Price over FV of net assets = Goodwill
- Write up PP&E and Intangibles to fair value
- Create Deferred Tax Liabilities on write-ups (buyer gets tax benefit)

**Step 4: Financing Costs**
- Cash deal: Interest income lost (opportunity cost) or new debt raised (interest expense)
- Stock deal: New shares dilute EPS, offset by target's earnings

**Step 5: Synergies**
- Revenue synergies: Cross-selling, entering new markets — harder to achieve, often overestimated
- Cost synergies: Eliminating redundant headcount, offices, systems — easier, more reliable
- Rule of thumb: Assume 50-75% of announced cost synergies are achieved; be skeptical of revenue synergies

**Step 6: Combine Financials**
Combined Revenue = Buyer Revenue + Target Revenue + Revenue Synergies
Combined EBITDA = Buyer EBITDA + Target EBITDA + Cost Synergies − Integration Costs
Combined EPS = Combined Net Income / Combined Diluted Shares

**Step 7: Accretion/Dilution Analysis**
% Accretion/Dilution = (Combined EPS − Standalone EPS) / Standalone EPS × 100

**Stock vs. Cash: Key Differences**
- **Cash deal**: Seller pays capital gains tax. Buyer gets tax deduction on asset write-ups. Seller prefers stock (tax deferral).
- **Stock deal**: Seller defers capital gains if structured as a reorganization. Buyer prefers cash (no dilution, keeps control). Buyers with high P/E ratios use stock as "currency."`,
        keyPoints: [
          'Accretion/dilution depends on the relationship between buyer P/E and target P/E — buying a lower P/E target in an all-stock deal is always accretive',
          'Goodwill = Purchase Price − Fair Value of Net Assets. It is NOT amortized under US GAAP but is tested annually for impairment',
          'Cost synergies are typically 50-75% achievable; revenue synergies are far less reliable and take longer (3-5 years vs. 1-2 years for cost)',
          'A seller prefers stock (tax deferral on capital gains); a buyer prefers cash (no EPS dilution from new shares). This creates natural negotiation tension',
          'Contribution analysis: compare what each company contributes to revenue, EBITDA, and net income vs. ownership split — tests fairness in mergers of equals',
        ],
        realWorldExample: `**Microsoft-Activision ($68.7B, 2023):** Microsoft offered $95/share all-cash, a 45% premium to Activision's 30-day average. Purchase price allocation: Activision had ~$10B book value; Microsoft wrote up game IP to ~$37B, creating ~$20B goodwill. Annual D&A on amortizable intangibles: ~$3.5B over 10 years. Net income impact of amortization: -$2.5B after-tax annually — dilutive to EPS in the near term. Synergy thesis: Activision's titles (Call of Duty, World of Warcraft) on Xbox Game Pass drives subscriber growth. Revenue synergies: $1-2B/year (speculative). Cost synergies: $500M/year (more certain). The deal was dilutive to EPS for 3+ years — justified only by the strategic value of gaming content. Lesson: major acquisitions can be EPS-dilutive and still be value-creative in the long run if strategic synergies materialize.`,
        practiceQuestions: [
          'Buyer has EPS of $5.00, shares at $100 (20x P/E). Target has EPS of $2.00, shares at $30 (15x P/E). Buyer offers $40/share (33% premium) in an all-stock deal. Exchange ratio = $40/$100 = 0.4x. Target has 10M shares → 4M new buyer shares issued. Combined net income = $50M + $20M = $70M (no synergies). Combined shares = 10M + 4M = 14M. What is combined EPS? Is the deal accretive or dilutive?',
          'Why is a 30% acquisition premium not necessarily a bad deal for the buyer\'s shareholders? What factors determine whether it\'s value-creative even after paying a premium?',
          'Microsoft issues $68.7B in cash for Activision. Microsoft\'s pre-deal cash: $111B. Post-deal: $42B. Annual opportunity cost of cash used (at 5% risk-free rate) = $68.7B × 5% = $3.4B. Activision\'s annual net income contribution = $2.1B. Is this deal immediately accretive or dilutive (ignoring synergies and amortization)? What justifies doing it?',
        ],
      },
      {
        id: 'ma-2',
        title: 'Why M&A Fails — The Research Evidence',
        content: `70% of acquisitions fail to create value for the buyer. This is one of the most robust findings in corporate finance research. Understanding WHY deals fail is as important as knowing how to build a merger model — for investment bankers, investors, and corporate strategists.

**The M&A Failure Statistics** (from Lev & Gu, 40 years of data 1980-2022)

- 70%+ of acquisitions fail to outperform the buyer's pre-deal stock performance within 3-5 years
- The average acquisition premium is 30-40% above pre-deal stock price — a massive hurdle to overcome
- M&A failure rates have INCREASED over time — not decreased despite better data and sophisticated financial modeling
- Technology deals have a particularly high failure rate due to rapid market change

**Why Deals Fail — The Six Key Reasons**

**1. Overpaying (Excessive Premium)**
The Winner's Curse: In competitive bidding processes, the winner almost always overpays. If you win the auction, you beat everyone else's valuation — which means you likely valued it higher than its fair value.

*Data:* Deals with premiums above 40% have a 35% lower success rate than deals with 20-25% premiums.

*Real example:* Teva Pharmaceutical paid $40.5B for Actavis Generics (2016) at 18x EBITDA. The global generics market immediately faced pricing pressure. Teva's debt load was crushing; by 2020, it had written off $30B+ in goodwill and was near bankruptcy. The premium assumed a market that never materialized.

**2. Conglomerate Deals (Unrelated Acquisitions)**
Research consistently shows that same-industry deals outperform cross-industry acquisitions. When GE acquired NBC Universal (media), RCA (consumer electronics), and Kidder Peabody (finance), the conglomerate discount exceeded 15% — markets value focused companies more highly.

*Why conglomerates fail:* Management lacks domain expertise in the acquired business. Internal capital allocation is inefficient. Synergies don't materialize across unrelated industries. "Galaxy-brained" strategic rationale often masks empire-building by management.

**3. Integration Failure**
Integration is the Achilles' Heel of M&A. The Sprint-Nextel merger (2005) is the canonical failure: different network technologies (CDMA vs. iDEN), different corporate cultures, different customer segments, different billing systems — all created a decade-long integration nightmare that cost $35B in goodwill write-offs.

*Key integration risks:* Talent flight (acquired employees leave — often the best ones go first), IT system incompatibility, cultural clash, customer disruption, management distraction.

**4. Buying During Hot Markets**
Deals done when stock markets are at all-time highs fail at a higher rate. Why? Targets are expensive (high multiples). Management feels pressure to "do deals" when the M&A market is hot. Acquirers' own stock may be overvalued — using overvalued stock to buy overvalued targets is doubly dangerous.

*Research finding:* Acquisitions made during high-sentiment periods (Q4 1999-Q1 2000, Q4 2021) have 40% lower success rates than deals made in moderate market conditions.

**5. CEO Overconfidence**
Research shows CEO overconfidence (measured by their own stock option exercise behavior) significantly predicts deal failure. Overconfident CEOs overestimate their ability to add value and synergies, pay higher premiums, and do more deals.

*Quote from Lev & Gu:* "The average CEO at a frequent acquirer (3+ deals in 5 years) destroys value on 65% of those deals."

**6. Accounting Manipulation by Target**
HP-Autonomy, WorldCom, Lucent — targets that manipulated revenue through channel stuffing, aggressive revenue recognition, or outright fraud resulted in massive goodwill write-offs for acquirers. Due diligence cannot always catch sophisticated fraud, especially in complex accounting areas (SaaS revenue recognition, insurance reserves).

**The M&A Scorecard Framework (Lev & Gu 10-Factor Model)**

The most predictive factors of M&A success:
1. Low acquisition premium (<25%)
2. Same-industry acquisition
3. Strong acquirer profitability pre-deal
4. Cash payment (not stock)
5. Target not in financial distress
6. Conservative acquirer leverage post-deal
7. No prior recent major acquisition by buyer
8. Not during peak M&A market
9. Strong acquirer free cash flow
10. Target's revenue growth > industry average`,
        keyPoints: [
          '70%+ of acquisitions fail — this is robust research across 40 years. Being skeptical of M&A is statistically justified',
          'The Winner\'s Curse: the auction winner almost always overpays. Competitive deal processes are great for sellers and terrible for buyers.',
          'Same-industry deals consistently outperform conglomerate acquisitions — management expertise and real synergies matter enormously',
          'Integration is often the deciding factor between success and failure — the best deal can be destroyed by poor integration planning',
          'Stock market sentiment predicts M&A success — deals done at market peaks fail more often. Contrarian timing is valuable in M&A',
        ],
        realWorldExample: `**AOL-Time Warner: The $350B Mistake (2001):** The AOL-Time Warner merger is the canonical M&A failure. AOL (overvalued dot-com) used its inflated stock as currency to acquire Time Warner. Combined entity: $350B market cap at announcement. What went wrong: AOL's business collapsed as dial-up internet died. Integration between old-media Time Warner and new-media AOL never happened culturally or operationally. $99B goodwill write-off in 2002. By 2009, the companies de-merged. Time Warner shareholders received about $0.10 for every $1.00 they held in 2001. Lessons: (1) Using overvalued stock as deal currency is a red flag. (2) Technology disruption can destroy the deal thesis before integration completes. (3) Strategic rationale ("synergies of content + distribution") doesn't survive contact with reality if cultures are incompatible.`,
        practiceQuestions: [
          'Using the Lev & Gu 10-factor scorecard, evaluate this deal: Amazon acquires Whole Foods (2017) for $13.7B, 27% premium, cash purchase, same broad retail/distribution industry, Amazon has strong FCF and low leverage, market conditions were moderate. Score it on the 10 factors. Prediction vs. outcome?',
          'A CEO argues: "We should acquire our competitor because we\'ll achieve $500M in cost synergies." As an investment banker, what questions would you ask to stress-test this claim? What percentage of synergies would you use in the model and why?',
          'Two deals: (A) Company A (5x leverage) acquires competitor for 35% premium in a stock deal during a bull market. (B) Company B (1x leverage) acquires a supplier for 15% premium in a cash deal during a downturn. Using the M&A research, which deal has a higher probability of success? Why?',
        ],
      },
    ],
  },

  // ─── FINANCIAL STATEMENT ANALYSIS (10-K) ────────────────────────────────────
  {
    id: 'fin-10k-analysis',
    title: 'Reading Financial Reports Like a Pro',
    description: 'Master the 10-K and other SEC filings — the critical disclosures analysts at hedge funds and equity research desks use to find red flags, accounting manipulation, and hidden value.',
    track: 'finance',
    level: 'intermediate',
    estimatedHours: 8,
    icon: '🔍',
    color: '#F97316',
    topics: [
      {
        id: '10k-1',
        title: 'Anatomy of the 10-K: What to Read and What to Skip',
        content: `The 10-K is the definitive annual report filed with the SEC. It contains more information than any analyst presentation or earnings call. Knowing what to read — and where the important insights hide — separates thorough analysts from superficial ones.

**10-K Structure**

- **Part I**: Business overview, risk factors, properties, legal proceedings
- **Part II**: Market data, financial statements, MD&A (Management Discussion & Analysis), quantitative/qualitative disclosures
- **Part III**: Directors, executive compensation, related-party transactions
- **Part IV**: Exhibits and financial statement schedules

**Where the Real Information Is**

**1. Management Discussion & Analysis (MD&A)**
The most important section for fundamental analysis. Management explains what happened and why. Read for:
- Organic vs. acquisition-driven growth (critical distinction)
- Segment performance breakdowns
- Liquidity and capital resources
- Forward-looking statements and hedges

**2. Risk Factors**
Companies are required to disclose ALL material risks. Most are boilerplate — but scan for:
- New risks added this year vs. last year (what changed?)
- Specific quantified risks (e.g., "10% of revenue from one customer")
- Cyber, regulatory, or competitive risks that appear newly material

**3. Notes to Financial Statements**
The footnotes contain the details that determine the quality of earnings:
- Revenue recognition policy (aggressive or conservative?)
- Lease obligations (operating vs. finance leases)
- Pension liability and assumptions
- Contingent liabilities and litigation
- Related-party transactions
- Stock-based compensation details
- Debt covenants and maturity schedule

**4. Auditor's Report**
If you see a "going concern" qualification — the company may not survive the next 12 months. This is one of the most important signals in financial reporting.

**Red Flags to Find in 10-Ks**

🚩 **Revenue Red Flags:**
- Revenue growing faster than cash from operations (accounts receivable building)
- Percentage of revenue from related parties increasing
- Revenue recognition changes (especially from upfront to subscription-like)
- Days Sales Outstanding (DSO) increasing year-over-year (customers taking longer to pay)

🚩 **Earnings Quality Red Flags:**
- Non-GAAP adjustments that grow larger each year
- "One-time" charges that appear every year
- Operating income growing but operating cash flow declining
- Large deferred revenue balance declining (borrowed growth from the future)

🚩 **Balance Sheet Red Flags:**
- Goodwill that equals or exceeds total equity (one impairment wipes out book value)
- Inventory growth far exceeding revenue growth
- Accounts payable growing faster than COGS (straining supplier relationships)
- Capitalized expenses increasing as % of revenue (potentially hiding costs)

🚩 **Liquidity Red Flags:**
- Current ratio < 1.0 (current liabilities exceed current assets)
- Interest coverage < 2.0x
- Significant debt maturities within 12 months with no refinancing lined up

**The Quality of Earnings (QofE) Analysis**

Investment banks and PE firms run QofE analysis before any acquisition. They focus on:
1. Adjusting EBITDA for non-recurring items
2. Normalizing revenue (strip out one-time contracts)
3. Assessing working capital trends
4. Reviewing the reliability of backlog and pipeline`,
        keyPoints: [
          'MD&A is the most information-dense section — read it carefully, compare year-over-year language changes, and read management\'s explanation critically',
          'Revenue growth > Cash from Operations growth is the #1 earnings quality warning sign — indicates accounts receivable buildup or aggressive revenue recognition',
          'A "going concern" audit qualification means the auditor doubts survival for 12 months — this is the most severe signal in financial reporting',
          'Non-GAAP adjustments are not inherently bad, but adjustments that grow larger relative to GAAP earnings each year signal deteriorating underlying performance',
          'Compare the current year 10-K risk factors to the prior year — newly added risks reveal what management is worried about that wasn\'t public before',
        ],
        realWorldExample: `**Enron's 10-K Red Flags — Visible in Plain Sight:** Enron's annual reports showed classic red flags that analysts should have caught: (1) Operating cash flow was flat-to-negative while reported net income grew 25%/year — a massive divergence. (2) Notes disclosed "related party transactions" with entities run by Enron's own CFO — the SPEs (Special Purpose Entities) hiding losses. (3) Revenue recognition policy changed multiple times — they moved to mark-to-market accounting for energy contracts (booking the entire NPV of a 20-year contract as revenue today). (4) Auditor Arthur Andersen had massive consulting revenue from Enron — conflict of interest. Jim Chanos (Kynikos Associates) read the 10-K, found all these red flags, and shorted Enron from $70/share. When it collapsed to zero, he made $500M. The data was public. The analysis required knowing where to look.`,
        practiceQuestions: [
          'You\'re analyzing a SaaS company\'s 10-K. Revenue grew 45% YoY. Operating cash flow grew 5% YoY. Accounts receivable grew 80% YoY. Days Sales Outstanding went from 60 to 85 days. What does this tell you? Is revenue growth sustainable?',
          'A retail company\'s notes show: (1) Changed lease accounting recognition last year. (2) "One-time" restructuring charge for 4th consecutive year. (3) Non-GAAP EBITDA is $200M vs. GAAP EBITDA of $80M. (4) Goodwill equals 120% of book equity. List the concerns in order of severity and explain what each signals.',
          'Read two consecutive years of 10-K Risk Factors for a company you know (Apple, Tesla, or any S&P 500 company). Identify 3 risk factors that were added or significantly modified in the most recent filing. What does this tell you about management\'s current concerns?',
        ],
      },
    ],
  },

  // ─── RESEARCH ANALYST (NISM-BASED) ──────────────────────────────────────────
  {
    id: 'fin-equity-research',
    title: 'Equity Research — Analyst Fundamentals',
    description: 'Build the skills of a professional equity research analyst — industry analysis, earnings models, valuation, and writing investment theses used at Goldman Sachs Research, Morgan Stanley, and Motilal Oswal.',
    track: 'finance',
    level: 'intermediate',
    estimatedHours: 10,
    icon: '🔬',
    color: '#2A9D8F',
    topics: [
      {
        id: 'er-1',
        title: 'The Equity Research Process — From Universe to Recommendation',
        content: `Equity research analysts are the bridge between companies and investors. They analyze companies, build financial models, and issue buy/hold/sell recommendations. Understanding this process is essential for investment banking, asset management, and hedge fund careers.

**The Research Analyst's Job**

Buy-side analysts (asset managers, hedge funds): research companies to make investment decisions for the fund. Their research is internal — not published.

Sell-side analysts (investment banks): research companies to generate ideas for institutional clients (mutual funds, pension funds, hedge funds). Their research is published in reports.

NISM Series XV certifies research analysts in India to produce and publish research. The core skills are identical globally.

**Step 1: Industry Analysis (Top-Down)**

Before analyzing a company, understand the industry:

- **Market Size & Growth**: TAM, current penetration, historical CAGR
- **Industry Structure**: Porter's Five Forces — competitive rivalry, supplier power, buyer power, threat of substitutes, barriers to entry
- **Cyclicality**: Consumer staples (non-cyclical) vs. semiconductors (highly cyclical) require different analytical frameworks
- **Regulatory Environment**: Healthcare, utilities, banking — regulation materially affects fundamentals
- **Key Performance Indicators**: Each industry has specific metrics. Retail: same-store sales, inventory turns. Airlines: RASK, CASK, load factor. Banks: NIM, NPA, CASA ratio.

**Step 2: Company Analysis (Bottom-Up)**

*Qualitative:*
- Business model: how does the company make money?
- Competitive moat: cost advantage, network effects, switching costs, brand, IP
- Management quality: track record, capital allocation history, skin in the game
- Corporate governance: promoter shareholding, board independence, related-party transactions

*Quantitative:*
- Revenue growth drivers: volume vs. price, organic vs. acquired
- Margin analysis: gross margin trend, operating leverage, EBITDA margin vs. peers
- Return on Capital: ROCE, ROE, ROIC — is management creating or destroying value?
- Capital allocation: reinvestment rate, dividend policy, buyback history, M&A track record

**Step 3: Financial Modeling**

A standard equity research model includes:
- 3-year historical income statement, balance sheet, cash flow
- 3-5 year projection with detailed assumptions (volume, ASP, margins, working capital)
- Sensitivity analysis on key assumptions (revenue growth, EBITDA margin)
- Valuation: DCF + relative valuation (trading comps)

**Step 4: Valuation & Price Target**

Price Target = Intrinsic Value estimate based on:
- DCF (primary for stable, cash-generative companies)
- P/E multiple on forward EPS
- EV/EBITDA on forward EBITDA
- Sector-specific multiples

**Step 5: Investment Thesis & Recommendation**

A compelling research report answers:
1. What does this company do? (Brief, clear)
2. Why is the current price wrong? (The mispricing argument)
3. What is the catalyst? (What will change the market's view?)
4. What is the downside risk? (The bear case)
5. What is the price target and time horizon?`,
        keyPoints: [
          'Top-down (industry first) and bottom-up (company first) approaches both work — most professionals use both: industry context + company specifics',
          'ROCE > WACC means the company creates value; ROCE < WACC means it destroys value even with positive earnings — the most important capital efficiency metric',
          'The key question in equity research is not "is this a good company?" but "is this a good stock at this price?" — valuation always matters',
          'Catalysts are essential for a trade recommendation — without a catalyst, a cheap stock can stay cheap indefinitely (the "value trap")',
          'NISM Series XV requires analysts to disclose conflicts of interest, hold a research analyst certificate, and follow SEBI Research Analyst Regulations 2014',
        ],
        realWorldExample: `**Dolly Khanna's Bottom-Up Research on Poddar Pigments (2014):** Dolly Khanna (Indian retail investor turned research-driven investor) identified Poddar Pigments — a specialty chemicals company with Rs. 120 Cr revenue — through bottom-up analysis. Key thesis: (1) ROCE of 28% (vs. industry 15%) — exceptional capital efficiency. (2) Pricing power in a niche product (plastic masterbatches). (3) No analyst coverage (information asymmetry). (4) P/E of 8x vs. specialty chemical peers at 15-20x. She built a position at Rs. 40/share. By 2018, the stock hit Rs. 800 — a 20x return in 4 years as institutional analysts discovered the company. This is the power of original bottom-up research: finding high-quality businesses before the market does.`,
        practiceQuestions: [
          'You\'re initiating coverage on a mid-cap Indian FMCG company. List the 5 questions you would answer before writing your initiation report. What industry metrics would you track? What financial ratios would you calculate?',
          'Company XYZ has: Revenue Rs. 1,000 Cr growing 15% YoY. EBITDA Rs. 200 Cr (20% margin). Net Debt Rs. 400 Cr. ROCE 22%. Peer average P/E: 25x. XYZ\'s current P/E: 18x. Build a simple investment thesis — is XYZ cheap or expensive? What catalyst would you need to recommend buying?',
          'What is the difference between a buy-side and sell-side equity research analyst? How does this difference affect their incentives, methodology, and the quality of their recommendations?',
        ],
      },
    ],
  },
];
