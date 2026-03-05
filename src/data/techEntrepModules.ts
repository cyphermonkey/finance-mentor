import type { Module } from '../types';

export const techEntrepModules: Module[] = [

  // ─── TECH TRACK ─────────────────────────────────────────────────────────────

  {
    id: 'tech-python-finance',
    title: 'Python for Finance & Data Analysis',
    description: 'Master Python as a financial analyst tool — pull market data, build models, and automate analysis the way quant desks at Citadel, Two Sigma, and Bloomberg do it.',
    track: 'tech',
    level: 'beginner',
    estimatedHours: 10,
    icon: '🐍',
    color: '#3776AB',
    topics: [
      {
        id: 'tech-py-1',
        title: 'Python Foundations for Finance',
        content: `Python is the dominant language in finance. Every major bank, hedge fund, and fintech uses it for data analysis, modeling, and automation. Goldman Sachs, JP Morgan, and Two Sigma all require Python proficiency for analyst and quant roles.

**Why Python Beat Excel**
Excel hits its limits at ~1M rows and breaks on collaboration. Python handles 100M+ rows, runs overnight batch jobs, and integrates with every data source. BlackRock's Aladdin platform — managing $21T in assets — runs on Python. Morgan Stanley migrated thousands of Excel models to Python between 2018-2022.

**Core Data Types for Finance**
\`\`\`python
# Scalars
price = 145.32          # float — stock price
shares = 1000           # int — share count
ticker = "AAPL"         # str — symbol
is_open = True          # bool — market status

# Collections
portfolio = ["AAPL", "MSFT", "GOOGL"]          # list — ordered, mutable
weights = {"AAPL": 0.4, "MSFT": 0.35, "GOOGL": 0.25}  # dict — key-value
\`\`\`

**Control Flow for Financial Logic**
\`\`\`python
# Classify a stock by P/E ratio
pe_ratio = 28.5
if pe_ratio < 15:
    category = "Value"
elif pe_ratio < 25:
    category = "Fair Value"
else:
    category = "Growth/Overvalued"

# Calculate compound returns
portfolio_value = 100_000
annual_return = 0.12
for year in range(1, 11):
    portfolio_value *= (1 + annual_return)
    print(f"Year {year}: {portfolio_value:,.0f}")
\`\`\`

**Functions for Reusable Analysis**
\`\`\`python
def cagr(beginning_value, ending_value, years):
    """Compound Annual Growth Rate"""
    return (ending_value / beginning_value) ** (1 / years) - 1

def sharpe_ratio(returns, risk_free_rate=0.05):
    """Annualized Sharpe Ratio from a list of annual returns"""
    import statistics
    excess = [r - risk_free_rate for r in returns]
    return (sum(excess) / len(excess)) / statistics.stdev(excess)

# Example: Apple 2019-2023 returns
aapl_returns = [0.86, 0.82, 0.34, -0.26, 0.48]
print(f"AAPL CAGR: {cagr(100, 240, 5):.1%}")   # 19.1%
print(f"AAPL Sharpe: {sharpe_ratio(aapl_returns):.2f}")
\`\`\``,
        keyPoints: [
          'Python handles datasets 1000x larger than Excel — essential for tick data, alternative data, and large portfolio analysis',
          'Dictionaries are perfect for portfolios: {ticker: weight} or {ticker: price} — O(1) lookup speed',
          'List comprehensions let you apply transformations across entire datasets in one line: [p * 1.1 for p in prices]',
          'Functions with docstrings are the professional standard — every function should state inputs, outputs, and purpose',
          'f-strings with format specs (:.2f, :,.0f, :.1%) are essential for clean financial output',
        ],
        realWorldExample: `**Two Sigma's Python Hiring Bar:** Two Sigma, managing $60B+ in assets, gives Python coding tests to every candidate — including macro PMs and fundamental analysts. Their 2023 test required candidates to write a function calculating rolling 252-day Sharpe ratios on a DataFrame of stock returns, then identify which stocks in a universe had Sharpe > 1.5 over the trailing year. Candidates who relied on Excel thinking (cell-by-cell logic) failed. Those who understood vectorized operations passed in 15 minutes. The difference in salary: Excel analysts at $80K, Python-proficient analysts at $150K+ at the same firm.`,
        practiceQuestions: [
          'Write a function compound_growth(principal, rate, years) that returns a list of portfolio values for each year. Then write a second function that takes that list and returns the year with the highest dollar gain.',
          'Build a portfolio dictionary with 5 tickers and weights summing to 1.0. Write code to calculate the weighted average P/E ratio given a separate dict of P/E ratios per ticker.',
          'Given a list of daily stock prices, write a function that returns the maximum drawdown (largest peak-to-trough decline as a percentage).',
        ],
      },
      {
        id: 'tech-py-2',
        title: 'Pandas for Financial Data Analysis',
        content: `Pandas is the financial analyst's most important Python library. It's built for tabular data — exactly what financial statements, price histories, and portfolio reports are. Every quant desk, risk team, and data science group in finance uses Pandas daily.

**Loading and Exploring Financial Data**
\`\`\`python
import pandas as pd
import yfinance as yf

# Pull 5 years of Apple price data
aapl = yf.download("AAPL", start="2019-01-01", end="2024-01-01")
print(aapl.head())
#              Open   High    Low  Close    Volume
# 2019-01-02  154.0  158.0  154.0  157.0  37039700
# ...

print(aapl.describe())   # summary statistics
print(aapl.shape)        # (1258, 5) — 5 years of daily data
\`\`\`

**Financial Calculations with Pandas**
\`\`\`python
# Daily returns
aapl['Daily_Return'] = aapl['Close'].pct_change()

# Rolling statistics (252 trading days = 1 year)
aapl['Vol_21d'] = aapl['Daily_Return'].rolling(21).std() * (252**0.5)  # annualized vol
aapl['MA_50'] = aapl['Close'].rolling(50).mean()
aapl['MA_200'] = aapl['Close'].rolling(200).mean()

# Cumulative returns
aapl['Cumulative_Return'] = (1 + aapl['Daily_Return']).cumprod() - 1
print(f"5yr Total Return: {aapl['Cumulative_Return'].iloc[-1]:.1%}")
\`\`\`

**Portfolio Analysis**
\`\`\`python
tickers = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'META']
data = yf.download(tickers, start="2020-01-01", end="2024-01-01")['Close']

# Returns matrix
returns = data.pct_change().dropna()

# Correlation matrix — key for portfolio construction
corr_matrix = returns.corr()

# Equal-weight portfolio performance
weights = pd.Series([0.2] * 5, index=tickers)
portfolio_returns = returns.dot(weights)
annual_return = portfolio_returns.mean() * 252
annual_vol = portfolio_returns.std() * (252**0.5)
sharpe = annual_return / annual_vol
print(f"Portfolio: {annual_return:.1%} return, {annual_vol:.1%} vol, {sharpe:.2f} Sharpe")
\`\`\`

**Analyzing Financial Statements**
\`\`\`python
# Load an income statement CSV (from Bloomberg or S&P Capital IQ)
income_stmt = pd.read_csv('apple_income_statement.csv', index_col=0)

# Calculate key metrics
income_stmt['Gross_Margin'] = income_stmt['Gross_Profit'] / income_stmt['Revenue']
income_stmt['EBITDA_Margin'] = income_stmt['EBITDA'] / income_stmt['Revenue']
income_stmt['Revenue_Growth'] = income_stmt['Revenue'].pct_change()

print(income_stmt[['Revenue', 'Gross_Margin', 'EBITDA_Margin', 'Revenue_Growth']])
\`\`\``,
        keyPoints: [
          '.pct_change() calculates period-over-period returns — the foundation of all performance analysis',
          '.rolling(n).mean() and .rolling(n).std() compute moving averages and volatility windows used in every trading desk',
          '.corr() produces the correlation matrix used in Modern Portfolio Theory to minimize portfolio variance',
          '.dot(weights) performs matrix multiplication — the correct way to calculate weighted portfolio returns',
          '.describe() gives count, mean, std, min, quartiles, max — instant statistical profile of any dataset',
        ],
        realWorldExample: `**BlackRock's Factor Model:** BlackRock's Systematic Active Equity team (managing $250B+) runs factor models on 10,000+ global stocks using Pandas DataFrames. Their factor exposure calculations — value, momentum, quality, low volatility — are computed nightly as matrix operations on returns DataFrames. A single Pandas .groupby('sector').agg({'momentum': 'mean', 'value': 'mean'}) call produces the sector-level factor tilts that drive billion-dollar portfolio rebalancing decisions. What would take a human analyst 3 days in Excel runs in 4 seconds in Pandas.`,
        practiceQuestions: [
          'Download 3 years of returns for AAPL, JPM, and XOM. Build a DataFrame showing annual return, annualized volatility, Sharpe ratio (assume 4.5% risk-free rate), and max drawdown for each stock.',
          'Load a CSV of quarterly revenue for 5 companies. Calculate YoY growth rates, trailing 4-quarter averages, and rank companies by most recent quarterly growth rate.',
          'Given a portfolio with positions in 10 stocks, calculate the correlation matrix and identify the pair with the lowest correlation. Explain why low-correlation pairs are valuable for portfolio construction.',
        ],
      },
      {
        id: 'tech-py-3',
        title: 'Financial Automation & APIs',
        content: `The highest-leverage Python skill in finance is automation — pulling data from APIs, running analyses on schedules, and generating reports automatically. This is how a single analyst at a hedge fund can cover 500 stocks that a team of 10 used to cover manually.

**Pulling Market Data from APIs**
\`\`\`python
import requests
import pandas as pd

# Alpha Vantage API (free tier available)
API_KEY = "your_key_here"

def get_fundamentals(ticker):
    url = f"https://www.alphavantage.co/query"
    params = {
        "function": "OVERVIEW",
        "symbol": ticker,
        "apikey": API_KEY
    }
    response = requests.get(url, params=params)
    data = response.json()
    return {
        "ticker": ticker,
        "pe_ratio": float(data.get("PERatio", 0)),
        "market_cap": float(data.get("MarketCapitalization", 0)) / 1e9,
        "revenue_ttm": float(data.get("RevenueTTM", 0)) / 1e9,
        "gross_margin": float(data.get("GrossProfitTTM", 0)) / float(data.get("RevenueTTM", 1)),
    }

# Screen 20 S&P 500 stocks for value metrics
tickers = ["AAPL", "MSFT", "JPM", "BAC", "XOM"]
fundamentals = pd.DataFrame([get_fundamentals(t) for t in tickers])
value_stocks = fundamentals[fundamentals['pe_ratio'] < 20].sort_values('pe_ratio')
print(value_stocks)
\`\`\`

**Automated Daily Report**
\`\`\`python
import yfinance as yf
from datetime import datetime

def daily_portfolio_report(portfolio):
    """Generate daily P&L report for a portfolio dict {ticker: shares}"""
    report_rows = []
    for ticker, shares in portfolio.items():
        stock = yf.Ticker(ticker)
        hist = stock.history(period="2d")
        today_price = hist['Close'].iloc[-1]
        yesterday_price = hist['Close'].iloc[-2]
        daily_pnl = (today_price - yesterday_price) * shares
        market_value = today_price * shares
        report_rows.append({
            "ticker": ticker,
            "shares": shares,
            "price": today_price,
            "daily_return": (today_price / yesterday_price - 1),
            "daily_pnl": daily_pnl,
            "market_value": market_value,
        })

    df = pd.DataFrame(report_rows)
    total_pnl = df['daily_pnl'].sum()
    total_value = df['market_value'].sum()
    print(f"\\n=== Portfolio Report — {datetime.today().strftime('%Y-%m-%d')} ===")
    print(df.to_string(index=False))
    print(f"\\nTotal Value: {total_value:,.0f} | Daily P&L: {total_pnl:,.0f}")
    return df

my_portfolio = {"AAPL": 100, "MSFT": 50, "GOOGL": 25}
daily_portfolio_report(my_portfolio)
\`\`\``,
        keyPoints: [
          'REST APIs return JSON — use requests.get(url, params=params).json() to pull any financial data source',
          'List comprehensions + pd.DataFrame() is the professional pattern for building datasets from API loops',
          'yfinance provides free access to Yahoo Finance data — sufficient for most educational and personal projects',
          'Automate reports with Python\'s schedule library or cron jobs — run at 6am before markets open',
          'Rate limiting: most free APIs allow 5-25 calls/minute — build sleep(12) delays into loops or use batch endpoints',
        ],
        realWorldExample: `**Point72's Data Engineering:** Point72 (Steve Cohen's hedge fund, $26B AUM) employs 200+ data engineers and analysts who build Python pipelines pulling alternative data — satellite imagery of parking lots, credit card transaction data, shipping manifests. One analyst built a pipeline pulling weekly foot traffic data from 50,000 retail locations, feeding it into a Pandas model that predicted same-store sales 3 weeks before earnings. The trade made $40M. The pipeline took 3 weeks to build and runs automatically every Tuesday at 3am. This is the power of financial automation.`,
        practiceQuestions: [
          'Build a stock screener using yfinance that downloads 1-year data for 10 S&P 500 stocks and filters to show only those with: positive momentum (price above 200-day MA), low volatility (annualized vol < 25%), and positive YTD return.',
          'Write an automated function that takes a list of earnings dates and tickers, and for each one calculates the stock\'s return in the 5 days before and 5 days after earnings. Output a DataFrame showing which stocks systematically beat vs. disappoint.',
          'Build a correlation monitoring tool: given a portfolio of 5 stocks, calculate rolling 60-day correlations and flag when any pair\'s correlation rises above 0.8 (concentration risk alert).',
        ],
      },
    ],
  },

  {
    id: 'tech-sql-finance',
    title: 'SQL for Financial Analysis',
    description: 'Master the database language that every financial analyst, data scientist, and risk manager uses daily — from pulling Bloomberg data to analyzing millions of transactions.',
    track: 'tech',
    level: 'beginner',
    estimatedHours: 7,
    icon: '🗄️',
    color: '#E48F00',
    topics: [
      {
        id: 'tech-sql-1',
        title: 'SQL Fundamentals for Finance',
        content: `SQL (Structured Query Language) is the universal language of data. Every financial database — Bloomberg, Refinitiv, FactSet, S&P Capital IQ, internal risk systems — is queried with SQL. Analysts at Goldman Sachs write SQL on day one.

**The Core Query Structure**
\`\`\`sql
SELECT columns
FROM table
WHERE conditions
GROUP BY columns
HAVING group_conditions
ORDER BY columns
LIMIT n;
\`\`\`

**Basic Financial Queries**
\`\`\`sql
-- Find all stocks with P/E below 15 (value screen)
SELECT ticker, company_name, pe_ratio, market_cap_bn
FROM equity_fundamentals
WHERE pe_ratio < 15
  AND market_cap_bn > 1  -- Large/mid cap only
  AND pe_ratio > 0        -- Exclude negative earnings
ORDER BY pe_ratio ASC
LIMIT 20;

-- Top 10 trades by notional value today
SELECT trade_id, ticker, quantity, price,
       quantity * price AS notional_value,
       trade_time
FROM trades
WHERE DATE(trade_time) = CURRENT_DATE
ORDER BY notional_value DESC
LIMIT 10;
\`\`\`

**Aggregations — The Financial Analyst's Core Tool**
\`\`\`sql
-- Sector-level portfolio summary
SELECT sector,
       COUNT(*) AS num_positions,
       SUM(market_value) AS total_exposure,
       SUM(market_value) / SUM(SUM(market_value)) OVER () AS portfolio_weight,
       AVG(pe_ratio) AS avg_pe,
       SUM(daily_pnl) AS sector_pnl
FROM portfolio_positions p
JOIN equity_fundamentals f ON p.ticker = f.ticker
GROUP BY sector
ORDER BY total_exposure DESC;

-- Monthly revenue by product line
SELECT
    DATE_TRUNC('month', sale_date) AS month,
    product_line,
    SUM(revenue) AS total_revenue,
    COUNT(DISTINCT customer_id) AS unique_customers,
    SUM(revenue) / COUNT(DISTINCT customer_id) AS revenue_per_customer
FROM sales
WHERE sale_date >= '2023-01-01'
GROUP BY 1, 2
ORDER BY 1, 3 DESC;
\`\`\``,
        keyPoints: [
          'WHERE filters rows before aggregation; HAVING filters groups after GROUP BY — common interview question',
          'SUM(market_value) / SUM(SUM(market_value)) OVER () calculates portfolio weights using a window function',
          'DATE_TRUNC(\'month\', date) standardizes dates to the first of the month — essential for time-series aggregations',
          'Always filter out NULL and negative values in financial screens (pe_ratio > 0) to avoid garbage data',
          'COUNT(DISTINCT customer_id) vs COUNT(*): the former counts unique customers, the latter counts all rows including duplicates',
        ],
        realWorldExample: `**Goldman Sachs Risk System:** Goldman's securities division runs thousands of SQL queries nightly against their position database. One critical query calculates VaR (Value at Risk) exposures: it joins positions to market data, groups by risk factor, aggregates notional exposures, and flags any factor exposure exceeding $500M. This query runs on 2M+ positions in under 30 seconds using proper indexing. Analysts who understand SQL indexes vs. full table scans — and write queries that use them — are 10x more productive than those who don't. The query that took 45 minutes for an intern took 8 seconds for the experienced analyst who added a composite index on (date, ticker).`,
        practiceQuestions: [
          'Write a SQL query to find the top 5 best-performing stocks in each sector by YTD return, showing rank within sector, ticker, sector, and YTD return percentage. (Hint: use ROW_NUMBER() OVER (PARTITION BY sector ORDER BY ytd_return DESC))',
          'Given a trades table with columns (trade_date, trader_id, ticker, side BUY/SELL, quantity, price), write a query showing each trader\'s: total trades, buy volume, sell volume, net position (buys - sells), and P&L assuming current price of $150.',
          'Write a query to find "earnings surprise" — stocks where actual EPS exceeded consensus estimate by more than 10%, sorted by surprise magnitude. Tables: earnings_actual(ticker, date, actual_eps) and estimates(ticker, date, consensus_eps).',
        ],
      },
      {
        id: 'tech-sql-2',
        title: 'Advanced SQL: Window Functions & Financial Metrics',
        content: `Window functions are the most powerful SQL feature for financial analysis. They let you calculate running totals, rankings, and period-over-period changes without GROUP BY — keeping all individual rows while computing across the entire dataset.

**Running Totals and Cumulative Returns**
\`\`\`sql
-- Cumulative P&L over time
SELECT
    trade_date,
    daily_pnl,
    SUM(daily_pnl) OVER (ORDER BY trade_date) AS cumulative_pnl,
    AVG(daily_pnl) OVER (ORDER BY trade_date ROWS BETWEEN 21 PRECEDING AND CURRENT ROW) AS rolling_21d_avg_pnl
FROM daily_portfolio_pnl
ORDER BY trade_date;

-- Running maximum (for drawdown calculation)
SELECT
    date,
    portfolio_value,
    MAX(portfolio_value) OVER (ORDER BY date) AS running_peak,
    portfolio_value / MAX(portfolio_value) OVER (ORDER BY date) - 1 AS drawdown_pct
FROM portfolio_values;
\`\`\`

**Rankings and Percentiles**
\`\`\`sql
-- Rank stocks by momentum within each sector
SELECT
    ticker,
    sector,
    momentum_12m,
    RANK() OVER (PARTITION BY sector ORDER BY momentum_12m DESC) AS sector_rank,
    PERCENT_RANK() OVER (ORDER BY momentum_12m) AS universe_percentile,
    NTILE(5) OVER (ORDER BY momentum_12m DESC) AS quintile  -- 1=top 20%, 5=bottom 20%
FROM equity_factors
WHERE as_of_date = '2024-01-31';

-- Identify top and bottom performers (decile analysis)
SELECT
    ticker, return_ytd,
    NTILE(10) OVER (ORDER BY return_ytd DESC) AS decile
FROM stock_returns
WHERE year = 2023;
\`\`\`

**Period-over-Period Analysis (LAG/LEAD)**
\`\`\`sql
-- Quarter-over-quarter revenue growth
SELECT
    ticker,
    fiscal_quarter,
    revenue,
    LAG(revenue) OVER (PARTITION BY ticker ORDER BY fiscal_quarter) AS prev_quarter_revenue,
    revenue / LAG(revenue) OVER (PARTITION BY ticker ORDER BY fiscal_quarter) - 1 AS qoq_growth,
    revenue / LAG(revenue, 4) OVER (PARTITION BY ticker ORDER BY fiscal_quarter) - 1 AS yoy_growth
FROM quarterly_financials
WHERE fiscal_quarter >= '2022-Q1'
ORDER BY ticker, fiscal_quarter;
\`\`\``,
        keyPoints: [
          'OVER (ORDER BY date) creates a running calculation; OVER (PARTITION BY col ORDER BY date) resets per group',
          'ROWS BETWEEN 21 PRECEDING AND CURRENT ROW defines a 22-row sliding window — the standard for 21-day moving averages',
          'LAG(col, n) looks n rows back; LEAD(col, n) looks forward — essential for YoY and QoQ growth calculations',
          'NTILE(10) splits data into deciles — the standard for factor portfolio construction (long top decile, short bottom)',
          'MAX() OVER (ORDER BY date) gives the running peak — subtract current value to get drawdown',
        ],
        realWorldExample: `**Citadel's Equity Factor Research:** Citadel's quantitative equity team runs factor backtests using SQL on 30 years of historical data. A typical backtest query uses NTILE(5) to sort stocks into quintiles by factor score each month, then calculates the return spread between quintile 1 and quintile 5. If quintile 1 consistently outperforms quintile 5 by 3%+ annually, the factor is "live" and gets added to the portfolio model. The entire backtest — across 5,000 stocks, 360 months — runs in a single SQL query with multiple window functions. Results that took a week to compute in Excel in 2005 take 90 seconds in modern SQL.`,
        practiceQuestions: [
          'Write a SQL query computing a stock\'s maximum drawdown from a table of daily closing prices. Show the peak date, trough date, peak price, trough price, and drawdown percentage.',
          'Using LAG(), calculate QoQ and YoY revenue growth for 10 companies. Then use RANK() to rank each company by YoY growth within their sector for the most recent quarter.',
          'Build a "factor quintile" analysis: split 500 stocks into P/E quintiles (1=lowest P/E, 5=highest). Show average forward 12-month return for each quintile to test if low P/E predicts better returns.',
        ],
      },
    ],
  },

  {
    id: 'tech-ml-finance',
    title: 'Machine Learning in Finance',
    description: 'Apply ML the way Two Sigma, Renaissance, and Citadel do — from predicting credit risk to building systematic trading signals with real financial data.',
    track: 'tech',
    level: 'intermediate',
    estimatedHours: 14,
    icon: '🤖',
    color: '#7C3AED',
    topics: [
      {
        id: 'tech-ml-1',
        title: 'Supervised Learning for Financial Prediction',
        content: `Machine learning in finance is about predicting outcomes from patterns in data. The most valuable applications are credit scoring, return prediction, earnings forecasting, and fraud detection. Renaissance Technologies' Medallion Fund — returning 66% annually for 30 years — is built entirely on ML-discovered statistical patterns.

**The ML Workflow in Finance**
\`\`\`python
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier, GradientBoostingRegressor
from sklearn.model_selection import TimeSeriesSplit
from sklearn.metrics import classification_report, mean_absolute_error
from sklearn.preprocessing import StandardScaler

# ─── EXAMPLE 1: Predicting Earnings Beats ───────────────────────────────────
# Features: analyst revision momentum, historical surprise rate, sector, size
# Target: 1 if next quarter EPS beats consensus by >5%, 0 otherwise

features = ['analyst_revision_3m', 'surprise_rate_4q', 'revenue_momentum',
            'gross_margin_trend', 'market_cap_log', 'sector_encoded']
target = 'earnings_beat'

X = df[features]
y = df[target]

# CRITICAL: Use TimeSeriesSplit, never random split — avoids look-ahead bias
tscv = TimeSeriesSplit(n_splits=5)

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

model = RandomForestClassifier(n_estimators=200, max_depth=6, random_state=42)

for fold, (train_idx, test_idx) in enumerate(tscv.split(X_scaled)):
    X_train, X_test = X_scaled[train_idx], X_scaled[test_idx]
    y_train, y_test = y.iloc[train_idx], y.iloc[test_idx]
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)
    print(f"Fold {fold+1}:\\n{classification_report(y_test, y_pred)}")
\`\`\`

**Feature Engineering for Finance**
\`\`\`python
def create_financial_features(df):
    # Momentum features
    df['return_1m'] = df['price'].pct_change(21)
    df['return_3m'] = df['price'].pct_change(63)
    df['return_12m'] = df['price'].pct_change(252)
    df['momentum_12_1'] = df['return_12m'] - df['return_1m']  # skip-1m momentum

    # Volatility features
    df['vol_21d'] = df['daily_return'].rolling(21).std() * np.sqrt(252)
    df['vol_63d'] = df['daily_return'].rolling(63).std() * np.sqrt(252)
    df['vol_ratio'] = df['vol_21d'] / df['vol_63d']  # vol trend

    # Value features
    df['pe_z_score'] = (df['pe_ratio'] - df['pe_ratio'].rolling(252).mean()) / df['pe_ratio'].rolling(252).std()
    df['pb_percentile'] = df['pb_ratio'].rank(pct=True)

    # Quality features
    df['roe_trend'] = df['roe'].diff(4)  # QoQ change in ROE
    df['margin_expansion'] = df['gross_margin'].diff(4)

    return df
\`\`\`

**Interpreting Feature Importance**
\`\`\`python
# Which features drive the model's predictions?
feature_importance = pd.DataFrame({
    'feature': features,
    'importance': model.feature_importances_
}).sort_values('importance', ascending=False)

print(feature_importance)
# analyst_revision_3m    0.31  ← analyst upgrades most predictive
# surprise_rate_4q       0.24  ← serial earnings beaters keep beating
# gross_margin_trend     0.18  ← margin expansion signals
# revenue_momentum       0.15  ← top-line growth momentum
# market_cap_log         0.08  ← small caps surprise more
# sector_encoded         0.04  ← sector effects are real but small
\`\`\``,
        keyPoints: [
          'Always use TimeSeriesSplit (not random train/test split) in finance — random splitting creates look-ahead bias that inflates performance metrics',
          'Feature engineering is 80% of ML value in finance — raw prices are weak signals; transformed features (momentum, z-scores, percentile ranks) are strong',
          'Overfitting is the #1 failure mode — a model that backtests at 40% annual return but lives at 2% is worse than useless; use out-of-sample testing religiously',
          'Feature importance from tree models tells you what the market is actually pricing — analyst revision momentum being most important confirms markets are not fully efficient at processing analyst data',
          'RandomForest handles non-linear relationships and interactions (value + quality + momentum combination) that linear regression misses',
        ],
        realWorldExample: `**JPMorgan's Credit ML Model:** JPMorgan uses gradient boosting models to approve or deny commercial loans, replacing the traditional "5 Cs of Credit" scorecard analysts used manually. Their model uses 300+ features: financial ratios, industry trends, management team history, geographic data, and alternative data. On a portfolio of 50,000 commercial loans, the ML model reduced default rates by 18% vs. the traditional scorecard while approving 12% more loans — it found creditworthy borrowers that humans with scorecards rejected. The model reviews a loan in 40 milliseconds. The economic value is $800M+ annually in reduced losses and increased loan volume.`,
        practiceQuestions: [
          'Why is TimeSeriesSplit essential in financial ML? Explain what look-ahead bias is and give a concrete example of how using a random 80/20 split on time-series stock data would inflate your backtested accuracy.',
          'Design a feature set for predicting whether a stock will outperform its sector by 5%+ over the next month. List 8 features across at least 3 categories (momentum, fundamental, sentiment). For each, explain the hypothesis for why it should predict returns.',
          'A model has 73% accuracy on the training set and 51% on the test set. Diagnose the problem and list 4 techniques to fix it.',
        ],
      },
    ],
  },

  // ─── ENTREPRENEURSHIP TRACK ─────────────────────────────────────────────────

  {
    id: 'entr-startup-fundamentals',
    title: 'Startup Fundamentals',
    description: 'Build the mental models that separate founders who succeed from those who don\'t — from identifying real problems to building a business model that scales, using frameworks from Y Combinator, Sequoia, and the world\'s top builders.',
    track: 'entrepreneurship',
    level: 'beginner',
    estimatedHours: 8,
    icon: '🚀',
    color: '#E85D5D',
    topics: [
      {
        id: 'entr-fund-1',
        title: 'The Startup Lifecycle: From Idea to Scale',
        content: `A startup is not a small version of a big company — it's an organization in search of a repeatable, scalable business model. That single distinction, from Steve Blank's work and the foundation of Y Combinator's philosophy, changes how you think about every decision.

**The Four Stages of a Startup**

**Stage 1: Problem Discovery (0-6 months)**
The goal is not to build — it's to understand. Paul Graham's famous advice: "Talk to users." Airbnb's founders flew to New York to stay with their first hosts. Stripe's founders (John and Patrick Collison) spent weeks doing "white-glove" onboarding for every new developer. The question is not "what should I build?" — it's "what problem is urgent and painful enough that someone will pay to solve it today?"

*Key Activity:* Conduct 50+ customer discovery interviews before writing a single line of code.

**Stage 2: Product-Market Fit (6-24 months)**
PMF is the moment where the product clicks with the market. Marc Andreessen's definition: "The customers are buying the product just as fast as you can make it — or usage is growing just as fast as you can add more servers."

Metrics that signal PMF:
- **Retention curves flatten** (not decaying to zero — users who stick, stick for good)
- **NPS > 40** (Net Promoter Score — users actively refer others)
- **Organic growth > 40%** of new users come from word-of-mouth
- **Payback period < 12 months** on customer acquisition

**Stage 3: Scaling (24-48 months)**
Once PMF is confirmed, the job changes: hire aggressively, raise a large round, and pour fuel on the fire. Mistakes made here: scaling before PMF (burning cash on users who churn), not hiring fast enough (losing market), scaling too fast (breaking culture and product quality).

**Stage 4: Growth & Defensibility**
The startup transitions to a company. The job now: build moats (network effects, switching costs, data advantages), expand to adjacent markets, and eventually consider IPO or strategic exit.

**The Lean Startup Loop**
\`\`\`
BUILD → MEASURE → LEARN → (repeat)
\`\`\`
Minimum Viable Product (MVP) → deploy to 10 users → collect data → iterate within 2 weeks. Instagram's MVP was a 10-feature photo app stripped to photo + filter + share. Dropbox's MVP was a demo video (no product) that generated 75,000 signups overnight, validating the problem before spending $2M on engineering.`,
        keyPoints: [
          'Startups die from building something nobody wants — product risk kills more startups than execution risk. Validate before building.',
          'PMF is not a moment — it\'s a feeling confirmed by data. If you\'re asking "do we have PMF?", you probably don\'t.',
          'The "valley of death" is months 6-18 when the initial excitement fades, growth is slow, and the team doubts the vision — most startups fail here.',
          'Pivoting is not failure — Instagram started as Burbn (a Foursquare competitor), Slack started as a gaming company (Glitch), YouTube started as a video dating site.',
          'Speed of iteration beats perfection — the team that ships 10 experiments while competitors build 1 "perfect" version wins through learning.',
        ],
        realWorldExample: `**Airbnb's Near-Death Experience (2009):** In summer 2009, Airbnb was dying. Revenue was $200/week. Paul Graham (Y Combinator) told the founders: "Your users are in New York. Go to New York." Brian Chesky and Joe Gebbia flew to New York, knocked on doors of every host, and stayed in their homes. They discovered hosts were taking terrible photos with phone cameras. The founders rented a $5,000 professional camera and photographed every listing themselves. The result: NYC revenue doubled within a week. The lesson: do things that don't scale to discover what creates value, then build systems to scale those things. Airbnb IPO'd in 2020 at a $47B valuation.`,
        practiceQuestions: [
          'You have an idea for a B2B SaaS tool for restaurant inventory management. Design a 30-day customer discovery process: who do you talk to, what 10 questions do you ask, and what would PMF look like for this product?',
          'Evaluate Dropbox\'s MVP strategy (a demo video before building the product). What are the pros and cons of this approach vs. building an actual MVP? When is a "video MVP" appropriate vs. dangerous?',
          'A startup has 1,000 users but only 15% return after 30 days. Their NPS is 22. Is this PMF? What would you focus on first: growth or retention? Back your answer with reasoning.',
        ],
      },
      {
        id: 'entr-fund-2',
        title: 'Business Models & Revenue Architecture',
        content: `A business model is the mechanism by which a company creates value and captures a portion of it. Most failed startups had a product but no business model. Understanding the 7 dominant startup business models — and which one fits your market — is one of the most important strategic decisions a founder makes.

**The 7 Core Startup Business Models**

**1. SaaS (Software as a Service)**
Recurring subscription revenue. Customers pay monthly/annually.
- *Examples:* Salesforce ($33B ARR), Slack, Zoom, HubSpot
- *Why powerful:* Predictable revenue, high retention (net revenue retention >100% means expansion outpaces churn), scalable unit economics
- *Key metrics:* MRR, ARR, churn rate, NRR (Net Revenue Retention), LTV/CAC

**2. Marketplace**
Platform connecting buyers and sellers; take a % of each transaction.
- *Examples:* Airbnb (3% + 14% take rate), Uber (25%), eBay (13%), Stripe (2.9% + $0.30)
- *Why powerful:* Network effects — more sellers attract buyers, more buyers attract sellers
- *Key metrics:* GMV, take rate, liquidity (supply/demand ratio), rake

**3. E-commerce / Direct-to-Consumer**
Buy inventory, sell at margin.
- *Examples:* Warby Parker ($500M+ revenue), Glossier, Allbirds
- *Why it's hard:* Capital-intensive, thin margins, Amazon competes on everything
- *Key metrics:* CAC, LTV, AOV (Average Order Value), repeat purchase rate

**4. Freemium**
Free basic tier, premium features behind a paywall.
- *Examples:* Spotify (31% conversion), Dropbox (2.5% conversion), Notion, LinkedIn
- *Why powerful:* Massive top-of-funnel (free users) with subset who pay
- *Key metric:* Free-to-paid conversion rate (2-5% is good, <1% is broken)

**5. API/Usage-Based**
Pay per use. The more customers use, the more they pay.
- *Examples:* Stripe ($1T+ processed annually), Twilio, AWS, OpenAI
- *Why powerful:* Revenue scales with customer success — alignment of incentives
- *Key metric:* API calls per customer per month, expansion revenue %

**6. Enterprise/B2B SaaS**
Large annual contracts sold through an enterprise sales motion.
- *Examples:* Palantir ($2B ARR), Snowflake, Workday
- *Why powerful:* $100K-$10M annual contracts, high retention, multi-year commitments
- *Why hard:* Long sales cycles (6-18 months), expensive sales team, implementation cost

**7. Consumer Subscription**
Direct-to-consumer recurring revenue. Not B2B.
- *Examples:* Netflix ($33B revenue), Headspace, Calm, Duolingo Gold
- *Why hard:* High churn (10-15%/month for consumer vs. 1-2% for B2B SaaS)`,
        keyPoints: [
          'Business model determines everything else: margins, sales motion, capital requirements, competitive moats, and valuation multiple',
          'SaaS gets 10-20x ARR valuations; marketplaces get 10-15x GMV × take rate; e-commerce gets 2-4x revenue — the model determines the multiple',
          'Network effects (each user makes the product more valuable) are the most powerful moat: Airbnb, Uber, LinkedIn, Visa all have them',
          'Take rate is the #1 strategic lever for marketplaces — too high and sellers disintermediate (go direct); too low and the business is unprofitable',
          'Usage-based pricing (Stripe, AWS) aligns startup revenue with customer success — the best model for developer tools and infrastructure',
        ],
        realWorldExample: `**Figma's Business Model Genius:** Figma chose freemium + SaaS for design software, a market Sketch dominated with a $99 one-time purchase. Figma was free for individual users (massive adoption), then charged $12/seat/month for teams (monetizing the collaboration feature). Designers started using Figma for free, fell in love, then evangelized to their companies. Companies paid. Revenue grew from $75M ARR (2020) to $400M ARR (2022) purely through product-led growth — no enterprise sales team needed at first. Adobe acquired Figma for $20B in 2022 (which regulators blocked), valuing it at 50x ARR. The business model — freemium individual + SaaS team — was specifically designed to turn every free user into a sales rep. Brilliant.`,
        practiceQuestions: [
          'You\'re building a B2B tool for law firms to manage client billing. Should you use SaaS ($500/month flat), usage-based (% of invoices processed), or enterprise contracts? Map out the pros and cons and pick one with justification.',
          'A marketplace startup takes a 5% take rate on $10M GMV. A competitor enters with a 2% take rate and immediately wins 40% of the market. What are your strategic options? Calculate the revenue impact of matching vs. not matching.',
          'Compare the unit economics of Netflix (B2C subscription, ~15% annual churn, $15/month, CAC $30) vs. Salesforce (B2B SaaS, ~8% annual churn, $12K/year, CAC $8K). Calculate LTV for each. Which is the better business? Why?',
        ],
      },
    ],
  },

  {
    id: 'entr-fundraising-vc',
    title: 'Fundraising & Venture Capital',
    description: 'Understand how VCs think, how term sheets work, and how to raise capital from angels to Series A — the mechanics behind Sequoia\'s $500K checks and a16z\'s $100M rounds.',
    track: 'entrepreneurship',
    level: 'intermediate',
    estimatedHours: 10,
    icon: '💰',
    color: '#F59E0B',
    topics: [
      {
        id: 'entr-vc-1',
        title: 'How Venture Capital Works',
        content: `Venture capital is a specific type of investing designed for high-risk, high-return startup bets. Understanding how VCs make money fundamentally changes how you pitch and which investors you should target.

**The VC Fund Structure**
A VC firm raises a fund from Limited Partners (LPs) — pension funds, endowments, family offices, sovereign wealth funds. The VC (General Partner) manages this money, takes a 2% annual management fee and 20% of profits (called "carry").

*Example:* Sequoia raises a $1B fund.
- Management fee: 2% × $1B = $20M/year to pay salaries and expenses
- They invest the $1B into ~50 startups over 3-4 years
- After 10 years, the portfolio is worth $5B
- LP return: $5B - $1B = $4B profit → LPs keep 80% = $3.2B (3.2x their money)
- Sequoia carry: 20% × $4B = $800M in carry (the real money in VC)

**The Power Law Problem**
VCs need one investment to return the entire fund. This changes everything.
- Of 1000 startups pitched, a top VC funds ~50
- Of those 50, typically: 25 fail (complete loss), 15 return 1-3x (break even), 8 return 5-10x, 2 return 50-100x
- Those 2 "fund returners" provide most of the profit

*Real example:* Sequoia invested $250K in Google (1999). That position became worth $4.3B. One check returned 17,200x and single-handedly justified the entire fund.

**This explains VC behavior:**
- VCs say no 98% of the time — they're looking for the 2% that can return 100x
- They push for massive market size — a $1B outcome in a $10B market is a bad VC investment
- They prefer swing-for-the-fences over singles — a company that aims for $500M exit is not fundable even if it would certainly succeed

**Funding Stages & What VCs Expect**
| Stage | Amount | What You Need | Valuation |
|-------|--------|---------------|-----------|
| Pre-Seed | $250K-$2M | Idea + team | $5-15M |
| Seed | $1-5M | MVP + early traction | $10-30M |
| Series A | $5-20M | PMF + $1M+ ARR | $30-100M |
| Series B | $15-50M | Proven growth | $100-400M |
| Series C+ | $50M+ | Market leadership | $400M+ |

**What Makes a VC-Backable Business?**
1. **Large market** (>$1B TAM — ideally $10B+)
2. **Exceptional team** (domain expertise + execution history)
3. **Defensible moat** (network effects, proprietary data, switching costs)
4. **Scalable business model** (revenue grows faster than costs)
5. **10x better than alternatives** (not incrementally better — 10x)`,
        keyPoints: [
          'VCs make money from carry (20% of profits), not management fees — they need massive outcomes, not just good returns',
          'The power law means VCs need every investment to have 100x potential — a "safe" $50M exit doesn\'t move the needle for a $500M fund',
          'TAM (Total Addressable Market) must be $1B+ and ideally $10B+ — small markets produce small companies even with 100% market share',
          'VC money is expensive equity: giving up 20% at seed means that 20% is worth $20M if the company exits at $100M — understand dilution math',
          'Warm introductions from trusted portfolio founders convert at 15x the rate of cold outreach — network is the key to accessing top VCs',
        ],
        realWorldExample: `**Airbnb's Fundraising Hell (2009):** Before becoming a $75B company, Airbnb pitched to 15 top VCs and was rejected by all of them. The actual rejection emails are legendary: "The market opportunity is not big enough" (Sequoia), "People don't rent rooms to strangers" (multiple VCs). The founders were so broke they sold election-themed cereal boxes ("Obama O's" and "Cap'n McCains") at $40/box to fund the company. They got into Y Combinator, which valued them at $1.7M. Paul Graham famously thought the idea was weird but liked the founders. Sequoia, who passed at seed, eventually invested at Series B when GMV was growing 10x year-over-year. Lesson: VCs are very wrong about very important things. The market validates what VCs can't predict.`,
        practiceQuestions: [
          'A VC fund has $200M under management with a 2/20 fee structure. They invest in 30 companies over 3 years. After 10 years, 20 companies fail, 8 return 3x, and 2 return 80x. Calculate: (a) total fund return, (b) LP return multiple, (c) total carry earned by the GP, (d) which investments generated the most value.',
          'You\'re raising a seed round for a B2B SaaS startup with $50K MRR growing 15% month-over-month. What valuation range would you target? How much equity should you give up? What is your post-money valuation and ownership structure after the round (assuming you give founders 80%, investors 15%, option pool 15%)?',
          'A VC offers you: Option A — $2M at $8M pre-money valuation. Option B — $3M at $15M pre-money valuation. Which is better for the founder? Calculate post-money valuation and investor ownership for each. What if the company exits at $50M in 3 years?',
        ],
      },
      {
        id: 'entr-vc-2',
        title: 'Term Sheets, Cap Tables & Dilution',
        content: `A term sheet is a non-binding agreement outlining the key terms of a VC investment. Most founders sign term sheets without fully understanding them — and discover years later that the terms they agreed to cost them millions. This is the most important finance knowledge for founders.

**The Cap Table**
The capitalization table shows who owns what percentage of your company.

\`\`\`
ACME SaaS Inc. — Cap Table After Series A

Shareholder          Shares      Ownership   Value @ $50M
─────────────────────────────────────────────────────────
Founder 1 (CEO)    4,000,000     40.0%       $20.0M
Founder 2 (CTO)    3,000,000     30.0%       $15.0M
Seed Investors     1,500,000     15.0%       $7.5M
Series A (Lead)    1,000,000     10.0%       $5.0M
Option Pool          500,000      5.0%       $2.5M
─────────────────────────────────────────────────────────
TOTAL             10,000,000    100.0%       $50.0M
\`\`\`

**Dilution Math**
Every new round dilutes existing shareholders. Understand this before you sign anything.

\`\`\`
Pre-Seed Round: Founder has 100% of 1,000,000 shares
You raise $500K at $5M pre-money ($5.5M post-money)
Investor gets: $500K / $5.5M = 9.09% ownership
Founder owns: 90.91% of company

Seed Round: $2M at $10M pre-money ($12M post-money)
New shares issued: 2,000,000 / 12 × total_shares
Seed investor gets: 16.67%
Existing investors diluted by 16.67%
Founder now owns: 90.91% × (1 - 16.67%) = 75.75%

Series A: $8M at $30M pre-money ($38M post-money)
Series A gets: 21.05%
Founder now owns: 75.75% × (1 - 21.05%) = 59.8%
\`\`\`

**Key Term Sheet Terms You Must Understand**

**Liquidation Preferences:** VCs get their money back before founders in an exit.
- *1x non-participating:* VC gets $2M back (their investment) OR converts to equity, whichever is higher. Founder-friendly.
- *2x non-participating:* VC gets $4M back before founders see anything. Watch out.
- *1x participating ("double dip"):* VC gets $2M back PLUS participates in remaining proceeds pro-rata. Very VC-friendly.

*Example:* Company exits at $20M. Seed investor put in $2M for 20% with 1x participating preferred.
- VC takes: $2M liquidation preference + (20% × remaining $18M) = $2M + $3.6M = $5.6M
- Founders split: 80% × $18M = $14.4M remaining after VC's preference

**Anti-Dilution:** Protects investors if you raise a down round (lower valuation).
- *Broad-based weighted average:* Fair to founders. Mild protection.
- *Full ratchet:* Brutal for founders. VC's price resets to new (lower) price. Avoid.

**Pro-Rata Rights:** VCs can invest their proportional share in future rounds to maintain ownership percentage. Standard and fair.

**Board Seats:** At Seed, founders typically control the board. Series A often gives 1 board seat to the lead investor. Control matters when things go wrong.`,
        keyPoints: [
          'Liquidation preferences determine who gets paid first in an exit — 2x participating preferred can wipe out founder returns in a modest exit',
          'Dilution is cumulative: after 4 rounds you\'ve given up 50-60% — model your cap table before each round to understand what you\'re trading',
          'A higher valuation with bad terms (participating preferred, full ratchet) can be worse than a lower valuation with clean terms',
          'Option pool shuffles: VCs often require the option pool to be created pre-money, which dilutes founders before the round even closes',
          'Board control is the ultimate governance issue — founders who lose board control can be fired from their own company (Steve Jobs, Travis Kalanick)',
        ],
        realWorldExample: `**Eduardo Saverin's Cap Table Dilution (Facebook):** Eduardo Saverin co-founded Facebook with Mark Zuckerberg and owned 34% of the company. After Zuckerberg brought in Sean Parker and raised from Accel Partners (2005), Saverin's failure to sign incorporation documents led Zuckerberg to restructure the company. Through a series of dilutive maneuvers — including issuing new shares to dilute Saverin from 34% to 0.03% while other early employees maintained their positions — Saverin's stake was decimated. He sued, settling for approximately 4-5% and an undisclosed cash payment. His 4% stake at Facebook's 2012 IPO ($16B valuation) was worth ~$640M. Had he retained his original 34%, it would have been worth $5.4B. Cap table literacy is worth billions.`,
        practiceQuestions: [
          'Build a cap table for this scenario: Founders start with 10M shares (50/50). Pre-seed: raise $300K at $3M pre-money. Seed: raise $1.5M at $8M pre-money. Series A: raise $6M at $25M pre-money (requires 15% option pool pre-money). Show ownership % at each stage.',
          'An investor offers $3M with 2x participating preferred liquidation preference, pro-rata rights, and a board seat. The company exits 3 years later for $18M. Show exactly how the $18M is distributed between founders (60%), this investor (20%), and an option pool (20%). Compare to a 1x non-participating preferred structure.',
          'What is an "option pool shuffle"? If VCs require a 15% option pool created pre-money before a $5M Series A at $20M pre-money, calculate the effective pre-money valuation for founders vs. the stated pre-money. (This is a famous VC negotiation trick.)',
        ],
      },
    ],
  },

  {
    id: 'entr-unit-economics',
    title: 'Unit Economics & SaaS Metrics',
    description: 'Master the metrics that VCs, operators, and public market investors use to evaluate growth businesses — from LTV/CAC to ARR cohorts, the numbers that tell the real story of a business.',
    track: 'entrepreneurship',
    level: 'intermediate',
    estimatedHours: 8,
    icon: '📊',
    color: '#10B981',
    topics: [
      {
        id: 'entr-ue-1',
        title: 'LTV, CAC, and the Economics of Customer Acquisition',
        content: `Unit economics is about understanding if the fundamental transaction of your business makes money. A startup can have $10M in revenue and be economically broken if acquiring each customer costs more than it's worth. LTV:CAC ratio is the single most important metric for evaluating a growth business.

**Customer Acquisition Cost (CAC)**
CAC = Total Sales & Marketing Spend / Number of New Customers Acquired

\`\`\`
Example: Salesforce spends $500M on S&M in Q3 and acquires 5,000 new customers
CAC = $500,000,000 / 5,000 = $100,000 per customer

This seems enormous — but if each customer pays $150,000/year...
\`\`\`

**Blended vs. Paid CAC**
- *Blended CAC:* All new customers / all S&M spend (includes organic)
- *Paid CAC:* Customers from paid channels / paid S&M spend
- *Payback period:* Months to recover CAC = CAC / (Monthly Revenue × Gross Margin %)

**Lifetime Value (LTV)**
For subscription businesses: LTV = (Average Revenue Per User × Gross Margin) / Churn Rate

\`\`\`python
def calculate_ltv(arpu_monthly, gross_margin, monthly_churn_rate):
    """
    ARPU: average monthly revenue per user
    gross_margin: decimal (e.g., 0.70 for 70%)
    monthly_churn_rate: decimal (e.g., 0.02 for 2%/month)
    """
    monthly_contribution = arpu_monthly * gross_margin
    avg_customer_lifetime_months = 1 / monthly_churn_rate
    ltv = monthly_contribution * avg_customer_lifetime_months
    return ltv

# Example: B2B SaaS
ltv_b2b = calculate_ltv(
    arpu_monthly=2000,      # $2K/month ACV
    gross_margin=0.75,       # 75% gross margins (typical SaaS)
    monthly_churn_rate=0.01  # 1%/month = 12% annual churn
)
print(f"B2B SaaS LTV: {ltv_b2b:,.0f}")  # $150,000

# Example: Consumer app
ltv_consumer = calculate_ltv(
    arpu_monthly=12,         # $12/month Netflix-style
    gross_margin=0.65,       # 65% margins
    monthly_churn_rate=0.05  # 5%/month = 46% annual churn
)
print(f"Consumer App LTV: {ltv_consumer:,.0f}")  # $156
\`\`\`

**The LTV:CAC Ratio**
| Ratio | Meaning |
|-------|---------|
| < 1x | Losing money on every customer. Business model broken. |
| 1-3x | Marginal. Might work at scale. Needs improvement. |
| 3-5x | Healthy. Standard benchmark VCs look for. |
| 5-10x | Excellent. Pricing power or low acquisition cost. |
| > 10x | Either extraordinary business or under-investing in growth. |

**Payback Period**
Payback = CAC / (Monthly Revenue per Customer × Gross Margin)

- Consumer: target < 12 months
- SMB SaaS: target < 18 months
- Enterprise: target < 24 months

*Why it matters:* If payback is 24 months, you need 24 months of cash before each customer becomes profitable. A company growing 100% YoY with 24-month payback needs enormous working capital — hence the need for VC funding.`,
        keyPoints: [
          'LTV:CAC > 3x is the VC benchmark — below 3x means the business needs major unit economics improvement before scaling',
          'Payback period determines capital efficiency — 12-month payback means you can reinvest quickly; 36-month payback means you\'re capital-hungry',
          'Gross margin in the LTV formula is critical — a 90% gross margin SaaS has 3x the LTV of a 30% gross margin marketplace at the same ARPU',
          'Monthly churn of 2% (common in consumer) compounds to 26% annual churn — dramatically different economics than 1% monthly = 11.4% annual',
          'CAC payback by channel reveals which marketing channels are efficient — Google Ads might have 8-month payback while content marketing has 18-month but lower ongoing cost',
        ],
        realWorldExample: `**Salesforce's Unit Economics at Scale:** Salesforce spent $7.7B on sales & marketing in FY2023 to acquire and retain customers. Their average contract value is ~$150K/year with 92% gross retention and 115% net retention (expansion). This gives LTV = ($150K × 0.85 gross margin) / 0.08 churn = ~$1.6M per customer. Against a CAC of roughly $100K (using blended S&M / new customers), that's a 16x LTV:CAC ratio — exceptional. But it took 20 years and $20B in cumulative losses to build this machine. The lesson: great unit economics justify aggressive growth investment, but the machine must be built incrementally — not assumed from day one.`,
        practiceQuestions: [
          'A SaaS company has: $500 monthly ARPU, 75% gross margins, 3% monthly churn, and $2,000 CAC. Calculate LTV, LTV:CAC ratio, and payback period. Is this a fundable business? What one metric would you focus on improving first?',
          'Your startup spends $100K on paid ads (Google + Meta) and acquires 200 customers. Of these, 120 came from Google (60 from organic) and 80 from Meta. Calculate: blended CAC, paid CAC for Google and Meta separately (assuming equal spend). If Meta converts at half the rate of Google, what should you do?',
          'A consumer app has 100K MAU, $10/month price, 70% gross margin, and 8% monthly churn. A B2B version serves 500 companies at $500/month, 80% gross margin, and 1.5% monthly churn. Build a 5-year revenue model for both. Which business would you build? Why?',
        ],
      },
    ],
  },
];
