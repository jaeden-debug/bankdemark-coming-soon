---
category: "Investing"
date: "2026-05-21"
title: "Compound Interest Formula: The Math Behind Exponential Growth"
metaTitle: "Compound Interest Formula Explained | BankDeMark"
metaDescription: "The compound interest formula is A = P(1 + r/n)^nt. Learn how it works, how to use it, and see real-world examples with step-by-step calculations."
slug: /compound-interest-formula
canonicalUrl: https://bankdemark.com/compound-interest-formula
datePublished: 2026-01-01
dateModified: 2026-05-01
author: BankDeMark Editorial
pillar: Financial Calculators
cluster: Compound Interest
---

<!-- SCHEMA: Article, BreadcrumbList, FAQPage -->

# Compound Interest Formula: The Math Behind Exponential Growth

**Quick answer:** The compound interest formula is **A = P(1 + r/n)^(nt)**, where A is the final amount, P is the principal, r is the annual interest rate, n is the number of compounding periods per year, and t is time in years. For regular contributions, the annuity formula FV = PMT × [(1 + r/n)^(nt) − 1] / (r/n) is added to the base formula.

[→ Skip the math — use the Compound Interest Calculator directly](/compound-interest-calculator)

The compound interest formula is the mathematical engine behind every savings projection, investment model, debt schedule, and retirement calculation in personal finance. Understanding it — not just using a calculator — gives you the ability to build your own scenarios, verify calculator results, and develop genuine intuition for how money grows over time.

This guide covers the formula in full: its derivation, all variables, worked examples across different scenarios, the annuity extension for regular contributions, and the special cases (continuous compounding, nominal vs. effective rate conversion).

---

## Table of Contents

1. [The Compound Interest Formula](#formula)
2. [What Each Variable Means](#variables)
3. [Step-by-Step Worked Examples](#examples)
4. [The Annuity Formula: Adding Regular Contributions](#annuity)
5. [Combined Formula: Principal Plus Regular Contributions](#combined)
6. [Nominal vs. Effective Annual Rate (EAR)](#ear)
7. [Continuous Compounding: The Limit of Frequency](#continuous)
8. [How to Solve for Different Variables](#solving)
9. [Compound Interest Formula in Spreadsheets](#spreadsheet)
10. [Common Formula Calculation Mistakes](#mistakes)
11. [Real-World Application: Canada and U.S. Scenarios](#real-world)
12. [Build Your Personal Financial Dashboard](#command)
13. [FAQ: Compound Interest Formula](#faq)

---

## 1. The Compound Interest Formula {#formula}

### The Core Formula

**A = P(1 + r/n)^(nt)**

This is the standard compound interest formula for a single lump-sum investment (no ongoing contributions).

| Symbol | Meaning | Example |
|--------|---------|---------|
| A | Future Amount (what you end with) | $16,436 |
| P | Principal (what you start with) | $10,000 |
| r | Annual interest rate (as decimal) | 0.05 (5%) |
| n | Compounding periods per year | 12 (monthly), 4 (quarterly), 1 (annual) |
| t | Time in years | 10 |

### The Simple Interest Contrast

Simple interest: **A = P(1 + rt)**

Compound interest: **A = P(1 + r/n)^(nt)**

The difference is subtle but exponentially significant: in simple interest, the rate is multiplied by time (linear growth). In compound interest, the entire expression is raised to the power of n×t (exponential growth). The exponent is what creates the accelerating curve.

---

## 2. What Each Variable Means {#variables}

### P — Principal

The starting amount. This is the lump sum you invest today: the initial deposit in a TFSA, the lump-sum GIC purchase, the starting balance in an RRSP or brokerage account.

P can be zero if you are modeling pure regular contribution compounding with no lump sum.

### r — Annual Interest Rate (Decimal Form)

The stated annual rate, converted to decimal. Convert by dividing by 100:
- 5% → 0.05
- 7.25% → 0.0725
- 2.5% → 0.025

For investment accounts (stocks, ETFs), r is your assumed annual return — not a guaranteed rate, but a projected return based on historical data or your expectations.

**Important:** r is the nominal annual rate. If the account states a rate that is already in effective annual rate (EAR) form, no adjustment for compounding frequency is needed.

### n — Compounding Frequency

The number of times per year interest is calculated and added to the principal.

| n | Compounding Frequency |
|---|----------------------|
| 1 | Annual |
| 2 | Semi-annual |
| 4 | Quarterly |
| 12 | Monthly |
| 26 | Bi-weekly |
| 52 | Weekly |
| 365 | Daily |

Most investment accounts and savings products compound monthly or daily. Mortgages in Canada compound semi-annually by law [SOURCE NEEDED].

### t — Time in Years

The investment horizon in years. t must be in years to match the annual rate r. If your contribution period is in months, convert: t = months/12.

---

## 3. Step-by-Step Worked Examples {#examples}

### Example 1: Annual Compounding

**$8,000 at 5% annual interest, compounding annually, for 15 years.**

A = P(1 + r/n)^(nt)
A = 8,000 × (1 + 0.05/1)^(1 × 15)
A = 8,000 × (1.05)^15
A = 8,000 × 2.07893
**A = $16,631**

Interest earned: $16,631 − $8,000 = **$8,631**

### Example 2: Monthly Compounding

**$8,000 at 5% annual interest, compounding monthly, for 15 years.**

A = 8,000 × (1 + 0.05/12)^(12 × 15)
A = 8,000 × (1.004167)^180
A = 8,000 × 2.1137
**A = $16,910**

Interest earned: **$8,910** — $279 more than annual compounding, from the same principal and rate.

### Example 3: Daily Compounding

**$8,000 at 5% annual interest, compounding daily, for 15 years.**

A = 8,000 × (1 + 0.05/365)^(365 × 15)
A = 8,000 × (1.0001370)^5475
A = 8,000 × 2.1170
**A = $16,936**

Interest earned: **$8,936** — only $26 more than monthly compounding. The marginal gain from daily vs. monthly compounding is small.

### Example 4: Comparing TFSA vs. Non-Registered (Tax Effect Approximation)

This is not directly the formula — but illustrates the effective rate difference:

**TFSA at 7% nominal = 7% effective (no tax)**
**Non-registered at 7% nominal, 30% tax on annual growth = effective 4.9% compounding**

Over 20 years on $30,000:
- TFSA: A = 30,000 × (1.07)^20 = **$116,068**
- Non-registered (simplified): A = 30,000 × (1.049)^20 = **$79,015**

Tax drag reduces the effective compound rate, and the formula shows the consequence over 20 years: $37,053 less wealth [SOURCE NEEDED — simplified illustration].

---

## 4. The Annuity Formula: Adding Regular Contributions {#annuity}

The base compound interest formula models a single lump-sum investment. Most real-world investing involves regular contributions — monthly RRSP deposits, weekly savings transfers, annual TFSA contributions. For these scenarios, the annuity (future value of a series) formula applies:

**FV = PMT × [(1 + r/n)^(nt) − 1] / (r/n)**

Where PMT is the regular payment per compounding period.

### Important: Matching PMT and n

If you contribute monthly (PMT = monthly amount), n must be 12.
If you contribute annually (PMT = annual amount), n must be 1.

### Worked Example: Monthly Contribution

**$500/month, 7% annual return, monthly compounding, 25 years.**

FV = 500 × [(1 + 0.07/12)^(12 × 25) − 1] / (0.07/12)
FV = 500 × [(1.005833)^300 − 1] / 0.005833
FV = 500 × [5.4274 − 1] / 0.005833
FV = 500 × 4.4274 / 0.005833
FV = 500 × 759.00
**FV = $379,500**

Total contributions: $500 × 12 × 25 = $150,000
Interest earned: $379,500 − $150,000 = **$229,500**

The compounding adds $229,500 to $150,000 of contributions — a 153% gain from compounding alone.

---

## 5. Combined Formula: Principal Plus Regular Contributions {#combined}

In most real scenarios, you have both a starting balance and ongoing contributions. Combine the two formulas:

**Total FV = P(1 + r/n)^(nt) + PMT × [(1 + r/n)^(nt) − 1] / (r/n)**

### Worked Example: RRSP Projection

**Starting RRSP balance: $45,000. Monthly contribution: $800. Expected return: 6.5%. Time: 20 years. Monthly compounding.**

Part 1 (principal):
A₁ = 45,000 × (1 + 0.065/12)^(12 × 20)
A₁ = 45,000 × (1.005417)^240
A₁ = 45,000 × 3.5259
**A₁ = $158,666**

Part 2 (contributions):
FV₂ = 800 × [(1.005417)^240 − 1] / 0.005417
FV₂ = 800 × [3.5259 − 1] / 0.005417
FV₂ = 800 × 2.5259 / 0.005417
FV₂ = 800 × 466.34
**FV₂ = $373,072**

**Total FV = $158,666 + $373,072 = $531,738**

Total contributions over 20 years: $45,000 + ($800 × 12 × 20) = $45,000 + $192,000 = $237,000.
Interest earned: $531,738 − $237,000 = **$294,738** — from compounding.

---

## 6. Nominal vs. Effective Annual Rate (EAR) {#ear}

The nominal rate is the stated annual rate. The effective annual rate (EAR) is the actual annual rate taking into account compounding within the year.

**EAR = (1 + r/n)^n − 1**

### Worked Examples

| Nominal Rate | Compounding | EAR |
|-------------|-------------|-----|
| 6% | Annual | 6.000% |
| 6% | Semi-annual | 6.090% |
| 6% | Quarterly | 6.136% |
| 6% | Monthly | 6.168% |
| 6% | Daily | 6.183% |

### When EAR Matters

Comparing two products with different compounding frequencies requires converting both to EAR before comparison. A GIC at 4.8% compounding monthly has an EAR of approximately 4.91%. A GIC at 4.9% compounding annually has an EAR of exactly 4.9%. The monthly-compounding GIC is slightly better despite a lower stated rate.

This distinction matters when comparing:
- GIC rates across institutions (some state nominal, some state EAR)
- Mortgage rates across countries (Canadian mortgages compound semi-annually; U.S. compound monthly)
- Savings account rates with different compounding frequencies

---

## 7. Continuous Compounding: The Limit of Frequency {#continuous}

As n approaches infinity (compounding continuously at every moment), the formula converges to:

**A = Pe^(rt)**

Where e is Euler's number (approximately 2.71828).

### Example

$10,000 at 5% for 10 years, continuously compounded:

A = 10,000 × e^(0.05 × 10)
A = 10,000 × e^0.5
A = 10,000 × 1.6487
**A = $16,487**

Compare to monthly compounding: $16,470 (difference: $17).

Continuous compounding is used in financial mathematics, options pricing (Black-Scholes formula), and theoretical finance. For practical personal finance projections, monthly compounding is nearly equivalent.

---

## 8. How to Solve for Different Variables {#solving}

The compound interest formula can be rearranged to solve for any variable.

### Solving for P (Required Starting Principal)

**P = A / (1 + r/n)^(nt)**

*"How much do I need to invest today to have $100,000 in 20 years at 6%?"*

P = 100,000 / (1 + 0.06/12)^(12 × 20)
P = 100,000 / (1.005)^240
P = 100,000 / 3.3102
**P = $30,210**

### Solving for r (Required Rate of Return)

**r = n × [(A/P)^(1/nt) − 1]**

*"My $10,000 needs to grow to $25,000 in 10 years. What return rate is required?"*

r = 12 × [(25,000/10,000)^(1/120) − 1]
r = 12 × [(2.5)^(0.00833) − 1]
r = 12 × [1.007636 − 1]
r = 12 × 0.007636
**r ≈ 9.16%** annually

### Solving for t (Time to Reach a Target)

**t = ln(A/P) / [n × ln(1 + r/n)]**

*"How long for $10,000 to reach $50,000 at 7% compounded monthly?"*

t = ln(50,000/10,000) / [12 × ln(1 + 0.07/12)]
t = ln(5) / [12 × ln(1.005833)]
t = 1.6094 / [12 × 0.005817]
t = 1.6094 / 0.06980
**t ≈ 23.1 years**

---

## 9. Compound Interest Formula in Spreadsheets {#spreadsheet}

### Google Sheets / Excel: FV Function

The easiest way to apply the compound interest formula in a spreadsheet is the FV (Future Value) function:

**=FV(rate, nper, pmt, pv, type)**

Where:
- rate = interest rate per period (r/n for monthly: annual rate / 12)
- nper = total number of periods (n × t)
- pmt = regular payment per period (negative for cash outflows)
- pv = present value / starting principal (negative for cash outflow)
- type = 0 if payments at end of period (default), 1 if at beginning

**Example:** $10,000 starting balance + $500/month, 7% annual return, 20 years, monthly compounding:

=FV(0.07/12, 240, -500, -10000, 0)

This returns approximately **$531,000** (positive — your balance).

Note: Excel and Google Sheets use sign conventions — negative values for money you invest (outflows), positive for money you receive (inflows). The formula returns a negative result unless principal and payments are entered as negatives.

### Building a Year-by-Year Compound Interest Table

| Column A | Column B | Column C | Column D |
|----------|---------|----------|----------|
| Year | Opening Balance | Interest Earned | Closing Balance |
| 1 | =P | =B1*(r/n*n) | =B1+C1 |
| 2 | =D1 | =B2*(r/n*n) | =B2+C2 |
| ... | | | |

This table creates the compounding curve — each row's opening balance is the previous row's closing balance. The accelerating interest earned in later rows visualizes the exponential nature of compound growth.

---

## 10. Common Formula Calculation Mistakes {#mistakes}

### Mistake 1: Using Percentage Instead of Decimal

r must be in decimal form. Using r = 7 instead of r = 0.07 produces results 100x too large.

**Wrong:** A = 10,000 × (1 + 7/12)^120 → astronomical number
**Right:** A = 10,000 × (1 + 0.07/12)^120 = $20,097

### Mistake 2: Mismatching PMT and n

If you contribute monthly (PMT = monthly amount), n must equal 12. If n = 1 (annual) but you're using a monthly PMT, the result is wrong.

**Rule:** PMT and n must represent the same period. Monthly PMT → n = 12. Annual PMT → n = 1.

### Mistake 3: Forgetting to Adjust n and t Together

Both n and t appear in the exponent as n × t. If you change n (compounding frequency), t stays in years — the formula handles the conversion. Do not manually convert t to months when using n = 12.

**Wrong:** A = P × (1.005833)^(240 months × 12) = (1.005833)^2880 — massively wrong
**Right:** A = P × (1.005833)^(12 × 20 years) = (1.005833)^240 ✓

### Mistake 4: Using Nominal Rate as EAR

If your product states an Effective Annual Rate (EAR), do not apply the (1 + r/n)^n compounding adjustment — it's already built in. Use A = P × (1 + EAR)^t directly.

---

## 11. Real-World Application: Canada and U.S. Scenarios {#real-world}

### Scenario 1: TFSA Maximum — 20-Year Projection (Canada)

**Starting balance:** $20,000 (accumulated contributions)
**Annual contribution:** $7,000 (current TFSA annual limit assumption) [SOURCE NEEDED]
**Monthly equivalent:** ~$583/month
**Return:** 7% (diversified equity ETF)
**Horizon:** 20 years

Part 1: $20,000 × (1 + 0.07/12)^240 = $80,130
Part 2: $583 × [(1.005833)^240 − 1] / 0.005833 = $358,300
**Total TFSA balance in 20 years: ~$438,430** — all tax-free.

### Scenario 2: RRSP Growth — 30 Years to Retirement (Canada)

**Starting balance:** $35,000
**Monthly contribution:** $600
**Return:** 6.5%
**Horizon:** 30 years

Part 1: $35,000 × (1.005417)^360 = $35,000 × 7.0005 = $245,018
Part 2: $600 × [(1.005417)^360 − 1] / 0.005417 = $600 × 1,107.84 = $664,704
**Total RRSP balance: ~$909,722**

Total contributions: $35,000 + ($600 × 360) = $35,000 + $216,000 = $251,000
Growth from compounding: $658,722

### Scenario 3: Roth IRA Projection — 35 Years (U.S.)

**Starting balance:** $0
**Annual contribution:** $7,000 (2024 IRA limit) [SOURCE NEEDED]
**Monthly equivalent:** ~$583
**Return:** 7%
**Horizon:** 35 years

FV = 583 × [(1.005833)^420 − 1] / 0.005833
FV = 583 × 10.9079 / 0.005833
FV = 583 × 1,870.4
**FV ≈ $1,090,343** — all tax-free at withdrawal

Total contributions: $583 × 420 = $244,860
Growth from compounding: $845,483

---

## 12. Build Your Personal Financial Dashboard {#command}

The compound interest formula is more useful when it runs on your actual numbers continuously — not just when you remember to open a calculator.

Command by BankDeMark connects to your TFSA, RRSP, investment accounts, and savings, and runs the compound interest formula automatically against your real balances. Your retirement projection, FIRE timeline, and investment growth projections update every time your account balances update — no manual recalculation required.

[→ Start your financial dashboard: Command by BankDeMark — free](/command)

---

## 13. FAQ: Compound Interest Formula {#faq}

### What is the compound interest formula?

A = P(1 + r/n)^(nt), where A is the future amount, P is the principal, r is the annual interest rate as a decimal, n is the compounding periods per year, and t is time in years.

### What is the formula for compound interest with monthly contributions?

Use the combined formula: Total FV = P(1 + r/n)^(nt) + PMT × [(1 + r/n)^(nt) − 1] / (r/n), where PMT is the monthly contribution and n = 12 for monthly compounding.

### How do I convert annual rate to monthly rate for the formula?

Divide the annual rate by 12. For 6% annual: monthly rate = 0.06/12 = 0.005 (0.5% per month).

### What does (1 + r/n) represent in the formula?

It represents the growth factor per compounding period. At 6% annual, monthly compounding: (1 + 0.06/12) = 1.005 — each month the balance grows by 0.5% (a 0.5% growth factor).

### What is the difference between nominal rate and effective annual rate?

The nominal rate is the stated rate. The effective annual rate (EAR) accounts for the effect of compounding within the year. EAR = (1 + r/n)^n − 1. A 6% nominal rate compounding monthly has an EAR of 6.168%.

### How do I use the compound interest formula to find how long to reach a goal?

Rearrange to solve for t: t = ln(A/P) / [n × ln(1 + r/n)]. This gives the time in years required for principal P to reach target A at rate r with compounding frequency n.

---

## Related Resources

- [Compound Interest Calculator](/compound-interest-calculator)
- [What Is Compound Interest? Complete Guide](/what-is-compound-interest)
- [Compound Interest Examples: Real-World Scenarios](/compound-interest-examples)
- [Daily Compound Interest Explained](/daily-compound-interest)
- [Monthly Compound Interest Explained](/monthly-compound-interest)
- [How Long to Reach $1 Million Investing?](/how-long-to-reach-1-million-investing)
- [Financial Calculators Hub](/financial-calculators)
- [Try Command by BankDeMark](/command)

---

## Disclaimer

This content is educational only and is not personalized financial, investment, tax, legal, or credit advice. Formula examples use hypothetical rates for illustration. Actual investment returns vary and are not guaranteed.
