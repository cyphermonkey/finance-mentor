import type { Module } from '../types';

export const quantCurriculum: Module[] = [
  // ─── QUANT FINANCE TRACK ─────────────────────────────────────────────
  {
    id: 'quant-foundations',
    title: 'Quantitative Finance Foundations',
    description: 'Build the statistical and probabilistic bedrock used by quants at Two Sigma, DE Shaw, and Renaissance Technologies — probability distributions, hypothesis testing, and statistical inference applied to financial data.',
    track: 'quant' as const,
    level: 'beginner' as const,
    estimatedHours: 10,
    icon: 'sigma',
    color: '#7C3AED',
    topics: [
      {
        id: 'qf-stats-1',
        title: 'Probability Distributions in Finance',
        content: `Every quantitative model at every major hedge fund rests on a foundation of probability distributions. Before you can price an option, estimate Value at Risk, or build a factor model, you must understand how to characterize uncertainty mathematically.

**The Normal Distribution and Why Finance Loves (and Hates) It**

The normal distribution is defined by two parameters: mean (μ) and standard deviation (σ). In finance, daily stock returns are often modeled as normally distributed — but this is a dangerous simplification. Real return distributions have **fat tails** (kurtosis > 3) and **negative skew**, meaning extreme losses occur far more frequently than the normal distribution predicts.

The S&P 500 experienced a −20% single-day drop in October 1987. Under a normal distribution, this event had a probability of roughly 1 in 10^50 — effectively impossible. Yet it happened. This is why the normal assumption, while mathematically convenient, destroyed many quant funds in 2008.

**Key Distributions You Must Know:**

- **Normal (Gaussian)**: Used for returns, pricing errors, factor residuals. Mean μ, variance σ². PDF: f(x) = (1/σ√2π) × exp(−(x−μ)²/2σ²)
- **Log-Normal**: Stock prices (not returns) are log-normally distributed — prices cannot go below zero, returns can. If ln(P_t/P_0) ~ N(μ,σ²), then P_t is log-normal. This is the foundation of Black-Scholes.
- **Student's t-Distribution**: Heavier tails than normal. Two Sigma and AQR use t-distributions for return modeling with degrees of freedom ν ≈ 4-6, capturing the fat tails observed empirically.
- **Poisson**: Models count events — number of trades per minute, default events in a credit portfolio, regime changes per year.
- **Exponential**: Time between events — time between large market moves, inter-arrival times for order flow.

**Moments: The Language of Distributions**

- **Mean (1st moment)**: Expected return — what you earn on average
- **Variance (2nd moment)**: Risk — squared deviations from the mean. Standard deviation = √variance
- **Skewness (3rd moment)**: Asymmetry of the distribution. Equity returns are negatively skewed (more frequent small gains, occasional large losses)
- **Kurtosis (4th moment)**: Tail thickness. Normal = 3 (mesokurtic). Markets = 5-8 (leptokurtic = fat tails)

**Practical Application: Fitting Distributions to Return Data**

At Two Sigma, quants routinely fit distributions to return series using Maximum Likelihood Estimation (MLE). Given a dataset of 252 daily S&P 500 returns, MLE finds the parameters (μ, σ) that maximize the probability of observing that exact dataset. For a normal distribution: μ_MLE = sample mean, σ_MLE = sample standard deviation.

The Kolmogorov-Smirnov test and Q-Q plots are used to verify goodness-of-fit. A quant who blindly assumes normality without testing will misjudge tail risk and blow up.

**Correlation and Copulas**

Multivariate distributions capture how assets move together. Gaussian copulas (infamously used in CDO pricing pre-2008) assume constant linear correlation — which collapsed when correlated defaults caused cascading failures. Modern quant firms use dynamic correlation models, t-copulas, and vine copulas to capture tail dependence.`,
        keyPoints: [
          'Stock prices are log-normally distributed; returns are approximately (but not truly) normally distributed',
          'Fat tails (excess kurtosis) and negative skew mean real losses are more extreme than normal models predict — the 1987 crash was a 25-sigma event under normality',
          'MLE estimates distribution parameters by maximizing the likelihood of observing the actual data',
          'The Student-t distribution with low degrees of freedom (4-6) better captures financial return fat tails than the Gaussian',
          'Correlation is not tail dependence — assets that appear uncorrelated can crash together, as in 2008; copulas model this joint tail behavior',
        ],
        realWorldExample: `**Long-Term Capital Management (LTCM) Collapse, 1998:** LTCM's quants, including Nobel laureates Merton and Scholes, built models assuming normally distributed bond spreads and stable correlations. In August 1998, Russia defaulted, causing a global flight to quality. Correlations across all asset classes shot to near 1.0 simultaneously — a tail event the normal model assigned near-zero probability. LTCM lost $4.6B in six weeks. The fund held positions 25x their equity ($125B notional). The Federal Reserve orchestrated a $3.6B bailout. The lesson: a beautiful model with a wrong distributional assumption is worse than no model, because it breeds false confidence. Every major quant fund now stress-tests under fat-tailed distributions and correlation breakdowns.`,
        practiceQuestions: [
          'A stock has daily returns with mean 0.05% and standard deviation 1.2%. Under a normal distribution, what is the probability of a single-day loss exceeding 3%? What does this suggest about using normality for VaR calculations?',
          'Explain why log-normal distribution is more appropriate for modeling stock prices than the normal distribution. What mathematical property of the log-normal ensures prices remain positive?',
          'You observe a return series with skewness of −0.8 and kurtosis of 6. Describe what this means about the return distribution and how it affects risk estimates compared to a normal distribution with the same mean and variance.',
        ],
      },
      {
        id: 'qf-stats-2',
        title: 'Hypothesis Testing & Statistical Inference for Alpha',
        content: `Hypothesis testing is the gatekeeper of quantitative research. Before any trading strategy goes live at Citadel or Jane Street, quants must prove statistically that the observed pattern is real — not a product of randomness, data mining, or luck. Misapplying hypothesis tests is how quant funds generate false alpha and lose money.

**The Core Framework**

Every test has two competing hypotheses:
- **H₀ (Null)**: The effect does not exist. The strategy returns zero alpha. The pattern is noise.
- **H₁ (Alternative)**: The effect exists. The strategy has positive alpha.

The decision rule: if the probability of observing your data *assuming H₀ is true* (the p-value) is below a threshold (α, typically 5%), reject H₀.

**p-value**: P(observing data at least this extreme | H₀ is true). NOT the probability that H₀ is true.

**Critical Tests in Quantitative Finance:**

**1. t-Test for Strategy Returns**
Given N days of strategy returns r₁, r₂, ..., r_N:
- Sample mean: r̄ = (1/N) Σrᵢ
- Standard error: SE = s/√N where s = sample standard deviation
- t-statistic: t = r̄/SE
- Rule: |t| > 2 (roughly) → reject H₀ at 5% significance

A strategy with a Sharpe Ratio of 1.0 over 252 trading days has t = 1.0 × √252/√252... wait — the t-stat for a Sharpe of S over N years is approximately S × √N. With 5 years of data (N=5) and Sharpe of 1.0: t = √5 ≈ 2.24. Barely significant. This is why short backtests are meaningless.

**2. Multiple Testing Problem (The Quant's Curse)**
If you test 100 uncorrelated strategies at 5% significance, you expect 5 false positives purely by chance. Citadel's research teams apply:
- **Bonferroni correction**: Divide α by number of tests (α_adj = 0.05/100 = 0.0005)
- **False Discovery Rate (FDR)**: Benjamini-Hochberg procedure — more power than Bonferroni
- **Harvey, Liu & Zhu (2016)** showed that most published factor alphas disappear after multiple testing correction

**3. Autocorrelation Tests (Ljung-Box)**
If strategy returns are autocorrelated, the i.i.d. assumption underlying your t-test is violated. The Ljung-Box test checks H₀: no autocorrelation up to lag K. If rejected, you need Newey-West standard errors.

**4. Stationarity Tests (Augmented Dickey-Fuller)**
Before modeling any time series (price, spread, volatility), test whether it's stationary. A non-stationary series has a unit root — its mean and variance change over time, making statistical inference spurious. Stock prices are non-stationary (random walk); log-returns are stationary. The ADF test: reject H₀ (unit root) → stationary → safe to model.

**5. Cointegration (Johansen Test)**
Two non-stationary series can be cointegrated — they share a long-run equilibrium. Classic pairs trading (Citadel's statistical arb desk): if AAPL and MSFT are cointegrated, their spread is mean-reverting and tradeable. The Johansen test identifies the cointegrating vector.

**Information Ratio and Statistical Significance**
The information ratio (IR) = active return / tracking error. For a strategy to be statistically significant at 5% over T years: IR × √T > 1.96. With IR = 0.5, you need T > 15 years of live trading to be confident the alpha is real. This is why backtesting alone is always insufficient.`,
        keyPoints: [
          'A p-value is NOT the probability the null is true — it is the probability of the observed data given the null is true',
          'The multiple testing problem means running 100 backtests at 5% significance will produce ~5 false alphas; Bonferroni and FDR corrections are mandatory',
          'A Sharpe Ratio of 1.0 needs approximately 4 years of data to achieve 2-sigma statistical significance in live trading',
          'ADF stationarity testing must precede any time-series regression — regressing non-stationary series produces spurious correlations',
          'Cointegration (not correlation) is the statistical basis for pairs trading — two I(1) series can share a stationary linear combination',
        ],
        realWorldExample: `**The Factor Zoo and Publication Bias:** Between 1990 and 2020, academic researchers published over 400 distinct equity "factors" — anomalies that allegedly predict returns. Harvey, Liu & Zhu (2016) at Duke showed that given the number of strategies tested, the t-stat threshold for claiming discovery should be 3.0, not 2.0. When re-evaluated with this bar, the majority of published factors disappear. AQR's Cliff Asness confirmed this empirically: many academic factors that look compelling in backtests vanish in live trading. Two Sigma's research process requires every strategy to survive out-of-sample testing, multiple testing correction, and transaction cost analysis before receiving any capital allocation. The bar is intentionally high because a false positive in research means real money lost.`,
        practiceQuestions: [
          'A quant tests 200 trading strategies and finds 12 with p-values below 0.05. How many of these are likely false discoveries? Apply Bonferroni correction — what p-value threshold should be used?',
          'A strategy has an annualized Sharpe Ratio of 1.5 based on 3 years of daily data. Calculate the t-statistic and determine if the alpha is statistically significant at the 5% level.',
          'Explain why regressing the price of gold against the S&P 500 index level (rather than their returns) could produce a spuriously high R-squared. What test would you run first, and what would you do if both series have unit roots?',
        ],
      },
    ],
  },
  {
    id: 'quant-algo-trading',
    title: 'Algorithmic Trading',
    description: 'Design, backtest, and execute quantitative trading strategies with the rigor used at Jane Street, Citadel Securities, and Virtu Financial — from market microstructure to execution algorithms.',
    track: 'quant' as const,
    level: 'intermediate' as const,
    estimatedHours: 14,
    icon: 'trending-up',
    color: '#059669',
    topics: [
      {
        id: 'algo-1',
        title: 'Market Microstructure & Order Book Dynamics',
        content: `Market microstructure is the study of how trading actually works at the millisecond level — the mechanics of price formation, bid-ask spreads, order types, and the informational content of order flow. This is the operating environment for every high-frequency trading firm: Jane Street, Citadel Securities, Virtu Financial, and Jump Trading.

**The Limit Order Book (LOB)**

The LOB is a real-time ledger of all resting buy (bid) and sell (ask) orders at each price level. It has two sides:
- **Bids**: Buyers willing to pay up to price P. Sorted descending — best bid is highest price.
- **Asks (Offers)**: Sellers willing to accept at least price P. Sorted ascending — best ask is lowest price.

The **bid-ask spread** = best ask − best bid. For liquid stocks (Apple, SPY ETF), this is typically $0.01. For illiquid small-caps, it can be $0.50 or more.

**Order Types:**
- **Market order**: Execute immediately at best available price. Crosses the spread — the liquidity taker.
- **Limit order**: Resting order at a specified price. Provides liquidity — earns the spread.
- **Immediate-or-Cancel (IOC)**: Execute what you can immediately, cancel the rest.
- **Iceberg order**: Large order with only a small visible quantity — hides institutional intent.

**Price Impact and Kyle's Lambda**

When you trade a large order, you move the market against yourself. Kyle's Lambda (λ) measures price impact: ΔP = λ × signed volume. A large buy order pushes prices up; selling pushes them down. Institutional investors (Citadel's fundamental hedge fund) spend enormous effort minimizing market impact through algorithmic execution.

**The Bid-Ask Spread Components**
Glosten-Milgrom model decomposes the spread into three parts:
1. **Adverse selection**: The market maker's cost of trading with informed traders who know more than they do. If you're a market maker and someone trades aggressively with you, there's a 50%+ chance they have information you don't.
2. **Inventory risk**: Market makers accumulate one-sided positions; the spread compensates for this risk.
3. **Order processing costs**: Actual operational costs of running the matching engine.

**High-Frequency Trading Strategies**

- **Market making**: Continuously quote bid and ask prices, earn the spread, hedge inventory. Jane Street and Citadel Securities are the world's largest electronic market makers. Citadel Securities alone executes ~28% of all US equity volume.
- **Statistical arbitrage**: Exploit short-term price discrepancies across correlated securities. When SPY ETF diverges from its constituent basket, HFTs arb the difference in microseconds.
- **Latency arbitrage**: React to new information faster than competitors. Two Sigma and Jump Trading spend hundreds of millions on microwave towers, co-location, and FPGA hardware to shave microseconds off execution.

**Order Flow Toxicity (VPIN)**

Volume-synchronized Probability of Informed Trading (VPIN) measures the fraction of order flow coming from informed traders. High VPIN → market makers widen spreads to protect themselves → liquidity evaporates. VPIN spiked dramatically on May 6, 2010, minutes before the Flash Crash — it was a leading indicator of the crash before prices moved.`,
        keyPoints: [
          'The limit order book has bids (buy orders, descending) and asks (sell orders, ascending); the spread is best ask minus best bid',
          'Market orders take liquidity and cross the spread; limit orders provide liquidity and earn the spread — the distinction drives market maker profitability',
          'Kyle\'s Lambda measures price impact: large orders move prices against the trader, creating execution cost that must be modeled in any strategy',
          'The bid-ask spread compensates market makers for adverse selection (trading against informed flow), inventory risk, and operational costs',
          'VPIN (Volume-synchronized Probability of Informed Trading) is an empirical measure of order flow toxicity — high VPIN precedes liquidity crises',
        ],
        realWorldExample: `**Citadel Securities' Market Making Operation:** Citadel Securities is the world's largest retail equity market maker, processing roughly 28% of US equity volume. Their edge is not predicting where stocks go — it is superior adverse selection management and faster hedging. When a retail investor buys 100 shares of Apple through Robinhood, Citadel fills that order and simultaneously hedges the delta exposure in the ETF or options market, typically within microseconds. Citadel Securities earned $7.5B in net trading revenue in 2022, almost entirely from bid-ask spread capture. Their moat: co-location at every major exchange, FPGA-based execution that operates in nanoseconds, and sophisticated real-time models that estimate whether incoming flow is informed or uninformed and adjust quotes accordingly.`,
        practiceQuestions: [
          'The best bid for AAPL is $185.50 and the best ask is $185.51. A retail investor places a market buy order for 100 shares. What price do they pay? What does the market maker earn (ignoring hedging costs)?',
          'Explain why a market maker\'s profit depends on accurately estimating VPIN. What happens to their spread-quoting strategy when VPIN is high versus low?',
          'A statistical arbitrage strategy monitors the SPY ETF and its constituent basket. When SPY trades at a 0.05% premium to NAV, the strategy sells SPY and buys the basket. What market microstructure risks does this strategy face, and how might order book dynamics create execution slippage?',
        ],
      },
      {
        id: 'algo-2',
        title: 'Strategy Development and Backtesting Rigor',
        content: `Building a trading strategy is easy. Building one that actually works in live markets — after accounting for transaction costs, market impact, overfitting, and regime changes — is what separates quants at Two Sigma from those who blow up their first fund.

**The Strategy Development Pipeline**

A rigorous pipeline at a top quant fund follows this sequence:
1. **Hypothesis generation**: Grounded in economic intuition or empirical observation
2. **Signal research**: Quantify the hypothesis into a tradeable signal
3. **Backtest design**: Clean data, realistic assumptions, out-of-sample validation
4. **Transaction cost analysis**: Reduce gross alpha to net alpha
5. **Risk decomposition**: Factor attribution, drawdown analysis
6. **Paper trading / simulation**: Run live without capital
7. **Gradual capital allocation**: Start small, scale only after statistical confirmation

**Signal Types**

- **Momentum signals**: Assets that outperformed recently tend to continue (12-1 month momentum, Jegadeesh-Titman 1993). AQR runs one of the world's largest momentum strategies across equity, fixed income, FX, and commodities.
- **Mean-reversion signals**: Short-term price reversals. At 1-5 day horizons, overbought/oversold dynamics create tradeable mean reversion. Citadel's statistical arb desk exploits this.
- **Fundamental signals**: Value (low P/B, P/E), quality (high ROE, low accruals), growth. Renaissance Technologies' Medallion Fund claimed to have found hundreds of uncorrelated signals.
- **Alternative data signals**: Satellite imagery of parking lots (retail foot traffic), credit card transactions (consumer spending), job postings (corporate expansion), patent filings (R&D activity). Two Sigma has 100+ alternative data sources.

**Backtesting: The Minefield**

A backtest is a simulation of how a strategy *would have* performed. The gap between backtest performance and live performance is called **overfitting** or **backtest overfitting**. Common failure modes:

- **Lookahead bias**: Using data that wasn't available at trade time (e.g., quarterly earnings announced after market close used in a signal calculated at 3pm)
- **Survivorship bias**: Testing only on stocks that exist today — companies that went bankrupt are excluded, inflating returns
- **Data snooping**: Testing 1,000 variations and reporting only the best
- **Ignoring transaction costs**: A strategy with 0.1% gross alpha per trade loses money net of $0.005 per share commission plus $0.03 per share market impact
- **Ignoring capacity**: A strategy that returned 50% on $1M becomes a 5% return strategy at $500M because its own trades move the market

**Walk-Forward Analysis and Combinatorial Purged Cross-Validation**

Standard train/test splits are insufficient for time series due to temporal leakage. Proper out-of-sample testing requires:
- **Walk-forward optimization**: Train on years 1-5, test on year 6. Roll forward. Train 2-6, test 7. Average live performance.
- **Combinatorial Purged Cross-Validation (CPCV)**: Marcos Lopez de Prado's method — purge training samples adjacent to test sets to prevent leakage through autocorrelation.

**The Sharpe Ratio Reality Check**

A backtest Sharpe of 3.0 sounds extraordinary. But what's the deflated Sharpe (DSR)?

DSR accounts for the number of trials, length of backtest, skewness, and kurtosis of returns. If you ran 500 parameter variations, a Sharpe of 3.0 might have a DSR of just 0.8 — net negative expected value after accounting for the search process. Bailey and Lopez de Prado (2014) formalized this as the Probability of Backtest Overfitting.`,
        keyPoints: [
          'Lookahead bias is the most common backtesting error — any data that was not available at trade time must be excluded from signal calculation',
          'Survivorship bias inflates backtest returns by excluding delisted and bankrupt companies that were in the investable universe historically',
          'Transaction costs must include commissions, bid-ask spread crossing, and market impact — gross alpha of 1% annualized can easily become negative net alpha',
          'Walk-forward analysis and CPCV prevent temporal data leakage that invalidates standard k-fold cross-validation on time series data',
          'The Deflated Sharpe Ratio adjusts for the number of strategy trials — a Sharpe of 2.0 from 500 tested variations may have no statistical significance',
        ],
        realWorldExample: `**Renaissance Technologies' Medallion Fund Discipline:** The Medallion Fund returned 66% gross (39% net of 5%/44% fees) annually from 1988-2018 — the greatest track record in investment history. Former employees describe a research process of extreme rigor: every signal must be statistically significant after multiple testing correction, survive out-of-sample periods spanning different market regimes, and show economic intuition (random correlations are rejected even if statistically significant). The fund uses strict position limits so no single signal can dominate. Signals are constantly decaying — Renaissance builds hundreds of new signals per year because alpha erodes as more capital chases it. Their data science team, staffed entirely by PhDs in mathematics, physics, and computer science, treats every potential signal as guilty (overfitted) until proven innocent through extreme out-of-sample performance.`,
        practiceQuestions: [
          'You backtest a momentum strategy on S&P 500 constituents from 2000-2023 using current index membership. The strategy returns 18% annually with a Sharpe of 1.8. Name two specific biases in this backtest and explain how each inflates the apparent performance.',
          'A mean-reversion strategy has a gross alpha of 0.12% per trade and executes 50 trades per day. Assume bid-ask spread crossing costs 0.03%, and market impact is estimated at 0.05%. Is this strategy viable? What is the net alpha per trade?',
          'Explain walk-forward optimization vs. standard train/test split for a strategy using daily return data. Why does the standard split fail for financial time series?',
        ],
      },
    ],
  },
  {
    id: 'quant-ml-finance',
    title: 'Machine Learning for Finance',
    description: 'Apply supervised learning, NLP for sentiment, and neural networks to financial prediction problems with the practical rigor used by Two Sigma, Citadel, and D.E. Shaw research teams.',
    track: 'quant' as const,
    level: 'intermediate' as const,
    estimatedHours: 16,
    icon: 'cpu',
    color: '#DC2626',
    topics: [
      {
        id: 'ml-fin-1',
        title: 'Supervised Learning for Return Prediction',
        content: `Machine learning in finance is not about building the best classifier — it is about finding an edge in noisy, non-stationary data where the signal-to-noise ratio is near zero and the data-generating process changes over time. The same ML models that achieve 95% accuracy on image classification rarely exceed 52% accuracy predicting next-day equity returns — and 52% is extraordinarily profitable.

**Why Financial ML is Different**

- **Low signal-to-noise**: Daily returns are approximately ~80% noise. The predictable component is tiny.
- **Non-stationarity**: Relationships that worked in 2010 may not work in 2020. Regimes change.
- **Feedback loops**: As your strategy gains scale, your own trades move prices, destroying the alpha.
- **Adversarial environment**: Every edge gets arbitraged away by other quantitative traders.

**Linear Regression: The Baseline**

For return prediction: r_t = β₀ + β₁f₁ + β₂f₂ + ... + βₙfₙ + ε

Where f₁...fₙ are features (momentum, value, volatility, etc.). Ridge regression (L2 regularization) and Lasso (L1) prevent overfitting by penalizing large coefficients. Two Sigma's earliest models were largely regularized linear models — they still power a substantial fraction of systematic strategies across the industry because they are interpretable and stable.

**Tree-Based Models: The Workhorse**

**Random Forests** build hundreds of decision trees on bootstrap samples of the data, averaging their predictions. Key advantages:
- Handle non-linearities and interactions without feature engineering
- Built-in feature importance (impurity-based or permutation-based)
- Robust to outliers

**Gradient Boosted Trees (XGBoost, LightGBM)**: Sequential tree building where each tree corrects the errors of the previous. The dominant model in Kaggle competitions and hedge fund alpha research. Citadel and Two Sigma research papers consistently show GBTs outperforming neural nets on tabular financial data.

Key hyperparameters: learning rate (0.01-0.1), max tree depth (3-6 for finance — deep trees overfit), n_estimators (100-1000), and subsample ratio (0.6-0.8 for regularization).

**Feature Engineering: Where Alpha Lives**

Raw price data has almost no predictive power. Features do:
- **Cross-sectional momentum**: Rank of 12-1 month return within universe
- **Short-term reversal**: -1 day return (contrarian at 1-day horizon)
- **Volatility features**: Realized vol, vol-of-vol, Garman-Klass estimator
- **Volume features**: Volume Z-score, dollar volume percentile, order imbalance
- **Fundamental features**: Earnings yield, book-to-market, accruals, profitability
- **Alternative data features**: Earnings call sentiment score, web traffic growth, hiring rate

**Preventing Lookahead Bias in ML Pipelines**

The most catastrophic ML finance error: fitting normalization statistics (mean, std) on the full dataset including test period. This leaks future information into training. Correct approach:
1. Split data by time: train on t=1 to t=T_split, test on t=T_split+1 to t=T_end
2. Fit sklearn Pipeline (scaler + model) ONLY on training data
3. Transform test data using training statistics
4. Never shuffle time series before splitting

**Ensemble Methods and Model Stacking**

D.E. Shaw's research process layers multiple model types. A typical production ensemble might combine: Ridge regression (captures linear factor structure) + LightGBM (captures non-linear interactions) + a neural network (captures sequential patterns). The ensemble weights are determined by out-of-sample performance on a validation set separated by time gap to prevent leakage.`,
        keyPoints: [
          'Financial ML operates at near-zero signal-to-noise — 52% next-day directional accuracy is exceptional; models achieving 55%+ on large universes are extremely rare',
          'Gradient Boosted Trees (XGBoost, LightGBM) consistently outperform neural networks on tabular financial data; tree depth should be shallow (3-6) to prevent overfitting',
          'Feature engineering is where alpha lives — raw price data is nearly unpredictable; carefully engineered signals (momentum rank, volume Z-score, sentiment) contain the learnable pattern',
          'Time-series cross-validation must prevent temporal leakage: never fit preprocessing statistics on the full dataset; split strictly by time with a gap between train and test',
          'Non-stationarity means models trained in one regime (low-vol bull market) may fail catastrophically in another (2008, 2020) — regime detection and model ensembling across regimes are essential',
        ],
        realWorldExample: `**Two Sigma's Alternative Data Pipeline:** Two Sigma manages over $60B using predominantly ML-driven strategies. Their research teams ingest hundreds of alternative datasets: anonymized credit card transactions from 5M+ US consumers, satellite imagery analyzed by computer vision models to count cars in Walmart parking lots, scraping job postings to estimate corporate hiring before revenue reports, and parsing SEC filings with NLP. Each data source goes through a rigorous "alpha decay" analysis — how quickly does the edge erode as more funds discover the same data. A signal with a half-life of 6 months gets weight in short-horizon models; a signal with a 3-year half-life feeds fundamental strategies. Two Sigma's competitive advantage is not any single model but the systematic pipeline for ingesting, cleaning, signal-extracting, and combining thousands of noisy data sources into a coherent, diversified alpha stream.`,
        practiceQuestions: [
          'You train an XGBoost model to predict next-month equity returns using 50 features. The model achieves an IC (information coefficient) of 0.08 in train and 0.01 in test. Diagnose the problem and describe three steps to address it.',
          'Describe the correct procedure for using StandardScaler in a financial ML pipeline to avoid lookahead bias. What goes wrong if you fit the scaler on the full dataset before splitting?',
          'A hedge fund wants to use credit card transaction data to predict retail company earnings surprises. What are three specific ways this ML pipeline could introduce lookahead bias, and how would you prevent each?',
        ],
      },
      {
        id: 'ml-fin-2',
        title: 'NLP for Financial Sentiment and Alternative Data',
        content: `Natural Language Processing is one of the fastest-growing alpha sources in quantitative finance. Earnings call transcripts, SEC filings, news articles, analyst reports, and social media contain information that moves markets — and that information can be quantified, scaled, and traded systematically. This is a core capability at Two Sigma, Man AHL, and increasingly at traditional asset managers like BlackRock and Fidelity.

**Text Data Sources in Finance**

- **Earnings call transcripts**: CEOs and CFOs speak in measured language, but tone, uncertainty words, and hedging language predict post-earnings drift. Academic research shows that "soft" language (hedging, vague guidance) precedes negative earnings surprises.
- **SEC filings (10-K, 10-Q, 8-K)**: Changes in 10-K language year-over-year signal management concern about business risks. An increase in "uncertainty," "may," "could," or "regulatory" word frequency predicts negative future returns.
- **News and press releases**: Real-time news sentiment drives short-term price moves. Reuters and Bloomberg sell machine-readable news feeds to quant funds.
- **Social media (Reddit, Twitter/X)**: Retail sentiment. The GameStop short squeeze in January 2021 was driven by coordinated Reddit (WallStreetBets) sentiment that traditional NLP models failed to anticipate.
- **Alternative text**: Job postings, patent filings, conference call Q&A tone, supply chain filings.

**Classical NLP Methods**

**Bag-of-Words + TF-IDF**: Represent each document as a vector of word frequencies, weighted by inverse document frequency (rare words are more informative). Feed into logistic regression or SVM to classify sentiment. Loughran-McDonald (LM) dictionary: finance-specific sentiment lexicon that labels words as positive, negative, uncertain, litigious, etc. "Liability" is negative in finance but neutral in general-purpose dictionaries — this distinction matters.

**Bag-of-Words approach:**
1. Tokenize: split text into words
2. Remove stopwords ("the", "and", "is")
3. Stem/lemmatize: "increasing" → "increas"
4. Build TF-IDF matrix: rows = documents, columns = vocabulary
5. Train classifier on labeled examples (positive/negative earnings surprise)

**Modern Transformer-Based Models**

**FinBERT**: BERT pre-trained on financial text (Reuters, Dow Jones, Bloomberg). Fine-tuned for financial sentiment classification. Outperforms general BERT and rule-based approaches on earnings call sentiment. Two Sigma and Man AHL have internal BERT variants trained on proprietary corpora.

**GPT-based Models**: Used for summarization (condensing 40-page 10-K to 10 bullet points), question answering (querying specific risk factors), and zero-shot classification (classify this paragraph as bullish/bearish without labeled training data).

**Key NLP Pipeline Steps for Finance:**
1. Data collection and normalization (remove HTML, handle encoding)
2. Earnings call parsing: separate prepared remarks from Q&A (Q&A is more candid and predictive)
3. Sentence-level sentiment scoring (more granular than document-level)
4. Aggregation to stock-level signal with time-stamping (crucial: use transcript release time, not call time)
5. Neutralization by sector (remove sector-wide sentiment effects to isolate company-specific signal)
6. Combination with price-based features in ML ensemble

**Topic Modeling: LDA and BERTopic**

Latent Dirichlet Allocation (LDA) discovers latent topics in a corpus without labels. Applied to 10-K filings: topics might include "supply chain risk," "competitive dynamics," "regulatory environment." Funds track topic weight changes over time — a sudden increase in "supply chain" topic weight in Q2 2021 filings was a leading indicator of subsequent earnings misses for manufacturers.

**Measuring Information Content: Event Studies**

To test whether an NLP signal actually predicts returns: cumulative abnormal returns (CAR) around signal events. For earnings call negative sentiment: buy +1σ positive sentiment stocks, short −1σ negative sentiment stocks, hold for 5, 10, 20 days. A statistically significant spread confirms the signal has alpha.`,
        keyPoints: [
          'The Loughran-McDonald financial dictionary must be used instead of general-purpose sentiment lexicons — "liability," "tax," and "inflation" have finance-specific connotations',
          'FinBERT (BERT pre-trained on financial text) substantially outperforms general NLP models on earnings call and news sentiment classification',
          'Earnings call Q&A sections are more predictive than prepared remarks — management is more candid and less rehearsed under analyst questioning',
          'Precise time-stamping is critical for avoiding lookahead bias — use transcript release timestamp, not the earnings call time, when matching to price data',
          'NLP signals should be sector-neutralized before use: a technology sector-wide bearish tone contaminates individual company signals and creates unintended sector bets',
        ],
        realWorldExample: `**Man AHL's Systematic Text Processing at Scale:** Man AHL (part of Man Group, a $175B AUM hedge fund) published research showing that processing earnings call transcripts with a fine-tuned BERT model achieved an annualized information ratio of ~0.4 when used as a standalone equity signal — modest individually but highly uncorrelated with price-based factors. When combined with momentum, value, and quality signals in a multi-factor model, the NLP signal added 0.15 to portfolio Sharpe without increasing volatility, purely through diversification. The most predictive linguistic features were: forward-looking negative language in Q&A (analysts pressing management on weak guidance), increases in uncertainty language year-over-year, and CEO vocal tone (measured via audio analysis of call recordings). Man AHL processes over 50,000 documents per day through automated NLP pipelines, generating real-time sentiment scores for 5,000+ global equities.`,
        practiceQuestions: [
          'An Apple earnings call transcript contains the sentence: "We remain cautious about potential regulatory headwinds that may impact our services revenue trajectory." Score this sentence using the Loughran-McDonald dictionary. Which words are negative/uncertain, and how would you aggregate to a document-level score?',
          'You want to test whether earnings call sentiment predicts 10-day post-earnings returns. Design an event study methodology: define the signal, describe the portfolio construction, specify the statistical test, and explain how you would control for the broad market return.',
          'Compare TF-IDF + logistic regression vs. FinBERT for sentiment classification of earnings call transcripts. Under what conditions would the simpler model be preferred in production at a quant fund?',
        ],
      },
    ],
  },
  {
    id: 'quant-stochastic',
    title: 'Stochastic Calculus & Derivatives Pricing',
    description: 'Master the mathematical framework underlying modern derivatives pricing — from Brownian motion and Ito\'s lemma to Black-Scholes derivation and exotic options, as practiced by quants at Goldman Sachs, Morgan Stanley, and Citadel.',
    track: 'quant' as const,
    level: 'advanced' as const,
    estimatedHours: 18,
    icon: 'activity',
    color: '#7C3AED',
    topics: [
      {
        id: 'stoch-1',
        title: 'Brownian Motion and Ito\'s Lemma',
        content: `Stochastic calculus is the mathematical language of quantitative finance. Every derivatives pricing model, risk system, and interest rate model used at Goldman Sachs, JP Morgan, or any derivatives desk is built on the foundation of Brownian motion and Ito's calculus. Unlike ordinary calculus, stochastic calculus handles functions of random processes — and the rules change in subtle, critical ways.

**Standard Brownian Motion (Wiener Process)**

A standard Brownian motion W(t) satisfies:
1. W(0) = 0
2. W(t) has independent increments: W(t)−W(s) is independent of W(s)−W(r) for r < s < t
3. W(t)−W(s) ~ N(0, t−s) for s < t (increments are normally distributed)
4. W(t) has continuous sample paths (no jumps)

The key intuition: over a small time interval dt, the change dW = ε√dt where ε ~ N(0,1). This means dW ~ N(0, dt). The variance scales linearly with time, but the standard deviation scales with √t — this is why uncertainty grows slower than time, creating the characteristic √T term in option pricing.

**Geometric Brownian Motion (GBM) — The Stock Price Model**

Stock prices in the Black-Scholes framework follow:
dS = μS dt + σS dW

Where:
- μ = drift (expected return, annualized)
- σ = volatility (annualized standard deviation of log returns)
- dW = Wiener increment

This says: the stock price changes by a deterministic drift (μS dt) plus a random shock (σS dW). The multiplicative structure (σS rather than σ) ensures prices stay positive.

The solution: S(t) = S(0) × exp((μ − σ²/2)t + σW(t))

Note the (μ − σ²/2) term — this is the **Ito correction** and is the first place stochastic calculus departs from ordinary calculus.

**Ito's Lemma: The Chain Rule for Stochastic Calculus**

In ordinary calculus, if f is a function of x and x changes by dx, then df = f'(x)dx. In stochastic calculus, the second-order term survives because (dW)² = dt (not zero):

If dS = a(S,t)dt + b(S,t)dW, and f = f(S,t), then:

**df = (∂f/∂t + a·∂f/∂S + ½b²·∂²f/∂S²)dt + b·∂f/∂S·dW**

The extra term ½b²·∂²f/∂S² (the Ito correction) has no analogue in ordinary calculus. It arises because dW² = dt — randomness contributes a first-order term to the variance.

**Application: Log Price Process**

Let f = ln(S). Apply Ito's lemma:
- ∂f/∂S = 1/S, ∂²f/∂S² = -1/S², ∂f/∂t = 0
- a = μS, b = σS

d(ln S) = (μS·(1/S) + ½(σS)²·(-1/S²))dt + σS·(1/S)dW
         = (μ - σ²/2)dt + σdW

This confirms that **log-returns are normally distributed**: ln(S_t/S_0) ~ N((μ-σ²/2)t, σ²t). The σ²/2 correction is why the expected log return differs from the expected arithmetic return.

**Quadratic Variation**

A fundamental result: the quadratic variation of Brownian motion is [W,W]_t = t. This is unlike smooth functions (whose quadratic variation is zero) and is the mathematical foundation of why the second-order term in Ito's lemma survives. For a portfolio delta-hedger, this quadratic variation manifests as **gamma P&L**: the option's value changes are driven by the realized quadratic variation of the stock, not just its direction.`,
        keyPoints: [
          'Brownian motion increments are normally distributed with variance proportional to time: dW ~ N(0, dt), creating the √T scaling of uncertainty fundamental to all option pricing',
          'Ito\'s Lemma differs from ordinary chain rule by the additional ½σ²·∂²f/∂S² term — this Ito correction arises because (dW)² = dt, making second-order stochastic terms first-order in time',
          'Log-returns under GBM are normally distributed with mean (μ−σ²/2)t — the σ²/2 Ito correction means the expected log return is less than the expected arithmetic return',
          'Quadratic variation [W,W]_t = t is non-zero for Brownian paths, distinguishing stochastic from ordinary calculus and creating gamma P&L in options portfolios',
          'Geometric Brownian Motion (dS = μS dt + σS dW) ensures stock prices remain positive and produces log-normally distributed prices — the foundational model for Black-Scholes',
        ],
        realWorldExample: `**Delta Hedging Gamma P&L at Goldman Sachs Options Desk:** A Goldman options market maker sells a 1-month at-the-money call on SPY with σ_implied = 20% and delta-hedges by buying SPY shares. Every day, they rebalance the hedge to maintain delta-neutrality. The P&L of this position is driven entirely by the Ito correction term — the difference between implied variance (σ²_imp) and realized variance (σ²_real). If realized SPY volatility over the month is 15% (less than the 20% implied), the options seller profits because they sold expensive volatility. If realized vol is 25%, they lose. Goldman's options desk manages a portfolio of thousands of such positions, with net exposure to realized volatility precisely calibrated using the Greeks (delta, gamma, vega, theta). The daily gamma P&L is literally the discrete approximation of the Ito term: ½Γ(dS)².`,
        practiceQuestions: [
          'A stock follows GBM with μ = 10% and σ = 25% annually, currently trading at $100. Use Ito\'s lemma to derive the process for f = S². What are the drift and diffusion coefficients of this new process?',
          'Explain why E[S(t)] = S(0)e^(μt) but E[ln S(t)] = ln S(0) + (μ − σ²/2)t. What creates the discrepancy, and what is this called?',
          'A delta-neutral options position has gamma of 500 (dollar gamma). SPY moves by 2% in a day. Calculate the approximate gamma P&L for that day. Is this P&L positive or negative for an options buyer vs. seller?',
        ],
      },
      {
        id: 'stoch-2',
        title: 'Black-Scholes Derivation and Implied Volatility',
        content: `The Black-Scholes model, published in 1973 by Fischer Black, Myron Scholes, and Robert Merton, is the most consequential equation in financial history. It earned a Nobel Prize, created the modern derivatives industry, and — when misapplied — contributed to multiple financial crises. Understanding its derivation, assumptions, and limitations is mandatory for any quantitative finance professional.

**The Black-Scholes PDE: Derivation by Replication**

Setup: stock follows GBM: dS = μS dt + σS dW. We want to price a European call option C(S,t) that pays max(S−K, 0) at expiry T.

**Step 1: Apply Ito's Lemma to C(S,t)**

dC = (∂C/∂t + μS·∂C/∂S + ½σ²S²·∂²C/∂S²)dt + σS·∂C/∂S·dW

**Step 2: Construct a riskless hedge (replicating portfolio)**

Form portfolio Π = C − Δ·S, where Δ = ∂C/∂S (the delta).

dΠ = dC − Δ·dS = (∂C/∂t + μS·∂C/∂S + ½σ²S²·∂²C/∂S²)dt + σS·∂C/∂S·dW − Δ(μS·dt + σS·dW)

Setting Δ = ∂C/∂S cancels the dW terms (the stochastic component), leaving:

dΠ = (∂C/∂t + ½σ²S²·∂²C/∂S²)dt

**Step 3: No-arbitrage condition**

The riskless portfolio must earn the risk-free rate: dΠ = rΠ dt = r(C − ΔS)dt

Setting equal: ∂C/∂t + ½σ²S²·∂²C/∂S² = r(C − S·∂C/∂S)

**The Black-Scholes PDE:**
∂C/∂t + rS·∂C/∂S + ½σ²S²·∂²C/∂S² − rC = 0

**The Black-Scholes Formula (closed-form solution)**

For a European call:
C = S·N(d₁) − K·e^(−rT)·N(d₂)

Where:
- d₁ = [ln(S/K) + (r + σ²/2)T] / (σ√T)
- d₂ = d₁ − σ√T
- N(·) = cumulative standard normal CDF
- K = strike, r = risk-free rate, T = time to expiry

The Greeks:
- **Delta (Δ)** = ∂C/∂S = N(d₁) — sensitivity to stock price
- **Gamma (Γ)** = ∂²C/∂S² = N'(d₁)/(Sσ√T) — rate of delta change
- **Vega (ν)** = ∂C/∂σ = S·N'(d₁)·√T — sensitivity to volatility
- **Theta (Θ)** = ∂C/∂t — time decay
- **Rho (ρ)** = ∂C/∂r — sensitivity to interest rates

**Black-Scholes Assumptions (and Why They Fail)**

1. Constant volatility — WRONG. Volatility is stochastic (SABR, Heston models address this).
2. No jumps — WRONG. Markets jump on earnings, crises, geopolitical events.
3. Continuous trading — WRONG. Discrete rebalancing creates hedging errors.
4. No transaction costs — WRONG. Frequent delta hedging is expensive.
5. Log-normal returns — WRONG. Fat tails and negative skew.

**Implied Volatility and the Volatility Smile**

Black-Scholes can be inverted: given a market option price, solve for the σ that makes the formula match. This is **implied volatility (IV)**. If Black-Scholes were correct, IV would be the same for all strikes and maturities. It is not:

The **volatility smile/skew** shows that out-of-the-money puts (low strike) trade at higher IV than at-the-money or OTM calls. This "volatility skew" reflects:
1. Demand for downside protection (crash insurance) from institutional investors
2. Fat left tails in real distributions (crashes are more likely than normal predicts)
3. Jump risk premium

Goldman Sachs' derivatives desk constructs the full **volatility surface** — IV as a function of strike and expiry — and uses local vol (Dupire 1994) and stochastic vol models (Heston) to price exotic options consistently with this surface.`,
        keyPoints: [
          'Black-Scholes is derived by constructing a delta-hedged portfolio (option minus Δ shares of stock) that eliminates all randomness, then imposing no-arbitrage to get the PDE',
          'The formula C = S·N(d₁) − K·e^(−rT)·N(d₂) prices European calls; N(d₁) is the delta (shares to hold) and N(d₂) is the risk-neutral probability of finishing in-the-money',
          'Vega (sensitivity to volatility) is the most important Greek for options market makers — options are fundamentally bets on realized vs. implied volatility',
          'The volatility smile/skew (OTM puts trade at higher IV than ATM) reveals that real return distributions have fat left tails not captured by Black-Scholes log-normality',
          'Black-Scholes assumes constant volatility, no jumps, and continuous trading — all false in practice, which is why stochastic volatility models (Heston, SABR) are used for production pricing',
        ],
        realWorldExample: `**JPMorgan's Derivatives Book and the Volatility Surface:** JPMorgan runs one of the world's largest equity derivatives books, with notional exposure in the trillions. Their quants do not use Black-Scholes to price complex structures — they use the Heston stochastic volatility model, calibrated daily to the observed volatility surface across all strikes and maturities. The calibration process minimizes the squared difference between model prices and market prices for hundreds of liquid vanilla options. Once calibrated, the Heston model prices exotics (barriers, Asians, variance swaps) consistently with the vanilla market. In March 2020, implied volatility on S&P 500 options spiked to 80%+ (VIX reached 82). Desks that were short volatility through variance swaps (like some structured product books) suffered catastrophic losses because their models underestimated the volatility-of-volatility. The 2020 crisis demonstrated that model risk — the risk that your pricing model is wrong — is as dangerous as market risk.`,
        practiceQuestions: [
          'Use the Black-Scholes formula to price a European call: S=$100, K=$105, r=5%, σ=20%, T=0.5 years. Calculate d₁, d₂, and C. Then calculate the delta — how many shares would you hold to delta-hedge one short call?',
          'Explain the Black-Scholes derivation step where setting Δ=∂C/∂S eliminates the stochastic dW term. Why is this the unique hedge ratio that creates a riskless portfolio?',
          'A 3-month ATM S&P 500 call has IV=22%, while a 3-month 10% OTM put (strike 90% of spot) has IV=28%. What does this volatility skew imply about the market\'s assessment of downside risk? What positions do investors use that create this demand pattern?',
        ],
      },
    ],
  },
  {
    id: 'quant-portfolio',
    title: 'Portfolio Theory & Risk Management',
    description: 'Build and manage optimal portfolios using modern portfolio theory, factor models, and risk frameworks — the tools used daily at BlackRock, AQR, Bridgewater, and every systematic fund.',
    track: 'quant' as const,
    level: 'intermediate' as const,
    estimatedHours: 12,
    icon: 'pie-chart',
    color: '#0891B2',
    topics: [
      {
        id: 'port-1',
        title: 'Markowitz Mean-Variance Optimization and CAPM',
        content: `Harry Markowitz's 1952 paper "Portfolio Selection" launched modern portfolio theory and ultimately won him the Nobel Prize. The central insight: investors should not evaluate assets in isolation but in terms of their contribution to portfolio risk. A high-volatility asset can be desirable if it is uncorrelated with the rest of the portfolio — diversification is the only free lunch in finance.

**The Mean-Variance Framework**

For N assets with expected returns μᵢ and covariance matrix Σ, a portfolio with weights w = [w₁, ..., wₙ] (summing to 1) has:
- **Expected return**: μ_p = w'μ = Σ wᵢμᵢ
- **Variance**: σ²_p = w'Σw = ΣᵢΣⱼ wᵢwⱼσᵢⱼ

The portfolio variance depends critically on covariances — when assets are perfectly correlated (ρ=1), no diversification benefit exists. When uncorrelated (ρ=0), portfolio standard deviation is less than the weighted average of individual SDs.

**The Efficient Frontier**

The efficient frontier is the set of portfolios that maximize expected return for a given level of variance. Every point below and to the right of the frontier is suboptimal — you can get higher return for the same risk. Constructed via quadratic programming:

Minimize: w'Σw
Subject to: w'μ = μ_target, Σwᵢ = 1, wᵢ ≥ 0 (long-only)

The **Global Minimum Variance Portfolio (GMVP)** is the leftmost point — the portfolio with minimum possible variance regardless of return.

**Capital Market Line and Sharpe Ratio**

With a risk-free asset (rate r_f), the optimal risky portfolio is the one with maximum Sharpe Ratio:

**Sharpe Ratio = (μ_p − r_f) / σ_p**

The **Tangency Portfolio** maximizes the Sharpe Ratio. All rational mean-variance investors hold a combination of the tangency portfolio and the risk-free asset — this is the **Two-Fund Separation Theorem**.

**Capital Asset Pricing Model (CAPM)**

CAPM (Sharpe 1964, Lintner 1965) extends Markowitz to equilibrium:

E[rᵢ] = r_f + βᵢ × (E[r_m] − r_f)

Where βᵢ = Cov(rᵢ, r_m) / Var(r_m) measures systematic risk (the only risk the market rewards — idiosyncratic risk is diversifiable).

**Alpha = actual return − CAPM expected return**

A hedge fund generating 15% when CAPM predicts 12% (given its beta) has 3% alpha. This alpha is the market's reward to skill beyond systematic exposure.

**Practical Problems with Mean-Variance Optimization**

The Markowitz framework is brilliant in theory and fragile in practice:
1. **Estimation error**: Small errors in expected returns cause huge swings in optimal weights. The optimizer "maximizes estimation error" — it overweights assets with inflated expected returns.
2. **Concentrated portfolios**: Unconstrained optimization often results in 2-3 assets receiving >80% of the weight.
3. **Sensitivity to covariance estimates**: Covariance matrices from short sample periods are noisy.

**Practical Solutions Used by AQR and Bridgewater:**
- **Black-Litterman model**: Blends CAPM implied returns with investor views, shrinking estimates toward equilibrium
- **Shrinkage estimators (Ledoit-Wolf)**: Shrink the sample covariance toward a structured target (equal correlation, factor model)
- **Risk parity**: Weight assets by their inverse risk contribution, not by mean-variance optimization (Bridgewater's All Weather Fund uses this)
- **Maximum diversification**: Maximize the ratio of weighted average volatility to portfolio volatility`,
        keyPoints: [
          'Portfolio variance is w\'Σw — covariances between assets, not just individual variances, determine portfolio risk; diversification reduces risk only when assets are imperfectly correlated',
          'The efficient frontier is the set of portfolios maximizing return for given risk; the tangency portfolio maximizes the Sharpe Ratio and is the optimal risky portfolio under CAPM',
          'CAPM beta measures an asset\'s sensitivity to the market portfolio (systematic risk); only beta is rewarded in equilibrium because idiosyncratic risk can be diversified away',
          'Mean-variance optimization is highly sensitive to expected return estimates — tiny errors cause large portfolio weight swings; Black-Litterman and shrinkage estimators are essential practical corrections',
          'Risk parity (Bridgewater\'s approach) weights assets by inverse risk contribution rather than capital — bonds receive higher weight than equities because equities are ~3x more volatile',
        ],
        realWorldExample: `**AQR's Diversified Risk Parity Approach:** AQR Capital Management, founded by Cliff Asness (a former Goldman Sachs quant and PhD student of Eugene Fama), manages $100B+ using factor-based and risk parity strategies. Their diversified approach constructs portfolios spanning 4 asset classes (equities, fixed income, commodities, FX) with risk contribution equalized across classes. In a traditional 60/40 portfolio, equities contribute ~90% of total portfolio risk because they are 3x more volatile than bonds. Risk parity corrects this by levering bonds (using futures) to equalize risk contributions. AQR's research, published openly in the Journal of Portfolio Management, shows risk parity delivered higher risk-adjusted returns than 60/40 over multi-decade horizons. The strategy's weakness: it uses leverage, so rising rates (which hurt leveraged bond positions) can create simultaneous losses in both the equity and bond legs, as happened in 2022.`,
        practiceQuestions: [
          'Stock A has expected return 12% and volatility 20%. Stock B has expected return 8% and volatility 15%. The correlation between them is 0.3. Calculate the expected return and standard deviation of a 60/40 portfolio (60% A, 40% B). Compare to a portfolio with 100% A and 100% B.',
          'Explain why a portfolio with two perfectly correlated assets (ρ=1.0) offers no diversification benefit, while assets with ρ=−1.0 allow construction of a risk-free portfolio. Derive the minimum variance portfolio weights for ρ=−1.0.',
          'CAPM predicts Stock X should earn 9% (risk-free 3%, market premium 6%, beta 1.0). The stock earned 13% last year. What is the alpha? List three reasons the CAPM might produce the wrong expected return, causing you to misinterpret this alpha.',
        ],
      },
      {
        id: 'port-2',
        title: 'Factor Models, Sharpe Ratio, and Value at Risk',
        content: `Modern portfolio management has moved far beyond the two-parameter world of mean and variance. Factor models decompose returns into systematic components, the Sharpe Ratio and its variants measure risk-adjusted performance, and Value at Risk (VaR) and Expected Shortfall (ES) quantify tail risk. These tools are the daily vocabulary of risk managers at Bridgewater, Citadel, and every major bank's risk department.

**Multi-Factor Models**

Fama-French (1992) demonstrated that the CAPM single factor (market beta) leaves systematic return variation unexplained. They proposed a three-factor model:

rᵢ − r_f = αᵢ + β₁(r_m − r_f) + β₂·SMB + β₃·HML + εᵢ

- **SMB (Small Minus Big)**: Small-cap stocks historically outperformed large-caps (size premium)
- **HML (High Minus Low)**: High book-to-market (value) stocks outperformed growth stocks (value premium)

Carhart (1997) added momentum (MOM). AQR's 5-6 factor models add quality (profitability) and low risk (betting against beta).

**Factor Investing at Scale (AQR, BlackRock)**

BlackRock's systematic active equity team and AQR both use factor models as the backbone of portfolio construction. A portfolio is decomposed as:
- r_p = Σ βₖ·Fₖ + α + ε

Risk managers verify the fund is not inadvertently loading on unwanted factors. A "long/short equity" fund claiming market-neutral exposure might have hidden value or momentum factor bets.

**Performance Measurement**

- **Sharpe Ratio**: SR = (r_p − r_f) / σ_p. Annual SR > 1.0 is very good; Renaissance Medallion reported SRs of 2-3+. Limitation: penalizes positive skewness, ignores autocorrelation.
- **Sortino Ratio**: SR variant using only downside deviation (semi-deviation). Better for strategies with asymmetric return distributions.
- **Calmar Ratio**: Annualized return / Maximum Drawdown. Preferred by trend-following CTAs.
- **Information Ratio (IR)**: Active return / Tracking error. Measures manager skill above benchmark. IR > 0.5 is good; > 1.0 is exceptional.

**The Fundamental Law of Active Management**

Grinold & Kahn: IR ≈ IC × √BR

Where IC (Information Coefficient) is the correlation between predicted and realized returns, and BR is the number of independent bets per year. A manager with IC=0.05 making 500 independent bets: IR ≈ 0.05 × √500 ≈ 1.12. This is why quant funds prefer high-breadth strategies (hundreds of positions) over concentrated fundamental funds.

**Value at Risk (VaR)**

VaR(α, T) is the loss not exceeded with probability α over horizon T.

"1-day 99% VaR = $1M" means: there is a 1% probability that tomorrow's loss exceeds $1M.

Methods:
1. **Parametric VaR**: Assume normal returns. VaR = μ − z_α × σ. Simple but wrong (fat tails).
2. **Historical simulation VaR**: Use actual historical return distribution. Captures real tail behavior but limited by history length.
3. **Monte Carlo VaR**: Simulate thousands of return scenarios under a specified model. Most flexible.

**Expected Shortfall (CVaR): The Better Risk Measure**

VaR is not sub-additive — two diversified portfolios can have higher combined VaR than either individually. Basel III moved to **Expected Shortfall (ES)**:

ES = E[Loss | Loss > VaR] = average loss in the worst α% of scenarios

ES is coherent (sub-additive) and better captures tail risk. JP Morgan's risk team, Goldman's CRO, and every Basel III-regulated bank now report ES rather than VaR as the primary risk metric.`,
        keyPoints: [
          'The Fama-French factors (market, size, value) plus momentum form the empirical basis of factor investing — any portfolio\'s returns can be decomposed into exposures to these systematic factors plus idiosyncratic alpha',
          'The Fundamental Law of Active Management: IR ≈ IC × √BR — quant funds achieve high IR through high breadth (thousands of independent bets) even with very low IC per bet',
          'Sharpe Ratio penalizes all volatility equally; Sortino Ratio uses only downside deviation — more appropriate for positively-skewed strategies like trend following',
          'VaR is not sub-additive (two portfolios can have higher combined VaR than either alone); Expected Shortfall (CVaR) is a coherent risk measure and now required under Basel III',
          'Factor models expose hidden risk exposures — a market-neutral fund may still carry significant value or momentum factor risk that creates correlated losses with other factor investors during crowded unwinds',
        ],
        realWorldExample: `**Bridgewater's All Weather Factor Decomposition:** Ray Dalio built Bridgewater's All Weather fund (over $100B) on the principle that asset prices are driven by two factors: economic growth (surprise above/below expectation) and inflation (surprise above/below expectation). Each asset class performs differently across these four regimes. Equities outperform in high growth; commodities in high inflation; nominal bonds in low growth/low inflation; TIPS in high inflation. By equally risk-weighting across all four quadrants, Bridgewater constructed a portfolio designed to perform in any economic environment. This factor decomposition framework, rather than traditional asset class thinking, became the blueprint for institutional risk-parity investing worldwide. During 2022, when both equities and bonds fell simultaneously (a historically rare event), the All Weather strategy struggled because inflation-rising regimes are not fully captured by the simple 2x2 factor grid — illustrating that even elegant factor frameworks have blind spots.`,
        practiceQuestions: [
          'A portfolio has annual return of 14%, risk-free rate 4%, and standard deviation 12%. Calculate the Sharpe Ratio. Now calculate the Sortino Ratio if the downside deviation (using 4% MAR) is 7%. Which is more appropriate for evaluating this portfolio if it has positive skewness?',
          'A quant analyst has an IC of 0.04 and makes 1000 independent predictions per year. Calculate the theoretical IR. If actual IR in live trading is 0.6, what fraction of the theoretical IR is being captured? List two reasons for the gap.',
          'Explain why VaR fails the sub-additivity test with a concrete numerical example involving two credit positions. Then explain how Expected Shortfall resolves this problem and why regulators prefer it.',
        ],
      },
    ],
  },
];
