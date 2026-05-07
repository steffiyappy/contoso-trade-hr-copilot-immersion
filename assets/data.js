// Contoso Trade — HR Copilot Immersion data
// Mapped from spreadsheet: 15 use cases. Focused on PAID Microsoft 365 Copilot features.
// PAID apps in scope (require M365 Copilot license $30/user/mo):
//   - Microsoft 365 Copilot Chat (web/app)
//   - Copilot in Excel, Word, PowerPoint, Outlook, OneNote, Loop, Teams
//   - Copilot Pages
//   - Agents in Copilot Chat (incl. Researcher & Analyst reasoning agents)
//   - SharePoint agents (grounded knowledge agents)

window.CT_USE_CASES = [
  {
    id: "01-hr-analytics",
    num: 1,
    title: "HR Data Analytics",
    priority: "High",
    fit: "PARTIAL",
    fitLabel: "Partial Fit (Excel + PPT)",
    apps: [
      { name: "Copilot in Excel", paid: true },
      { name: "Copilot in PowerPoint", paid: true },
      { name: "M365 Copilot Chat", paid: true },
      { name: "Analyst agent", paid: true }
    ],
    pain: "Headcount, attrition, leave reports manually pulled from Adrenalin, massaged in Excel, then copy-pasted into PowerPoint — ~1–2 hours per request, daily.",
    pains: [
      "Manual extraction from Adrenalin HRMS",
      "Coordination across teams to gather data",
      "Reformatting & charting by hand",
      "Slow consolidation into management decks"
    ],
    expected: "AI-driven analytics from HR data with visually friendly reports and insight summaries.",
    flow: [
      { app:"Excel", title:"Export from Adrenalin → Open in Excel", desc:"Drop the CSV into a workbook. Convert to a Table (Ctrl+T) so Copilot understands the schema." },
      { app:"Copilot in Excel", title:"Ask Copilot to analyse", desc:"Use natural language to surface trends in headcount, attrition, leave balance, overtime by department/branch." },
      { app:"Copilot in Excel", title:"Generate visuals", desc:"Have Copilot insert PivotTables and charts — headcount by department, attrition trend, leave pattern by month." },
      { app:"Analyst agent", title:"Run deeper reasoning (Frontier)", desc:"Use the Analyst agent in Copilot Chat for multi-step analysis — e.g. correlate attrition with overtime hours and tenure bracket." },
      { app:"Copilot in PowerPoint", title:"Auto-build the deck", desc:"In a blank or branded template, ask Copilot in PowerPoint to create slides from the Excel insights and the Word brief." }
    ],
    prompts: {
      "Copilot in Excel": [
        "Analyse this HR table and show me the top trends in headcount, attrition, and overtime by department.",
        "Create a chart showing headcount by department and branch, sorted highest to lowest.",
        "Summarise the key insights from this data in 5 bullet points suitable for a leadership update.",
        "Add a calculated column for tenure in years and group employees into <1, 1–3, 3–5, 5+ years.",
        "Highlight any department whose attrition rate exceeded 10% in the last quarter."
      ],
      "Analyst agent (Copilot Chat)": [
        "Using this attendance and overtime data, find correlations between overtime hours and unplanned leave by department.",
        "Build a forecast of headcount for the next 12 months based on historical hires and resignations."
      ],
      "Copilot in PowerPoint": [
        "Create a 6-slide management update titled \"Q1 HR Dashboard – Contoso Trade\" using insights from /HR-Q1-Analysis.xlsx.",
        "Rewrite this slide as an executive summary with three key metrics and a recommendation."
      ]
    },
    tip: "For best results, always convert your raw Adrenalin export into a named Excel Table before invoking Copilot — it dramatically improves answer quality.",
    beyond: "<b>Beyond Copilot:</b> for live Adrenalin connectivity, layer Power BI + Power Automate for scheduled refreshes; or build a custom <b>SharePoint agent</b> grounded on your monthly HR data drops so leaders can self-serve answers."
  },
  {
    id: "02-recruitment",
    num: 2,
    title: "Recruitment & Onboarding",
    priority: "High",
    fit: "PARTIAL",
    fitLabel: "Partial Fit (drafting + scheduling)",
    apps: [
      { name: "Copilot in Outlook", paid: true },
      { name: "Copilot in Word", paid: true },
      { name: "Copilot in Teams", paid: true },
      { name: "M365 Copilot Chat", paid: true }
    ],
    pain: "End-to-end manual cycle (>30 days): headcount approval by email, manual JD posting, CV screening, interview coordination, offer drafting, IT/laptop follow-up.",
    pains: [
      "Slow, inconsistent, admin-heavy",
      "High risk of errors and missed steps",
      "No real-time visibility for hiring managers",
      "Poor candidate experience due to delays"
    ],
    expected: "AI-assisted JD drafting, sourcing & CV screening, interview scheduling with reminders, auto-generated interview notes, and automated offer & onboarding communication.",
    flow: [
      { app:"Copilot in Word", title:"Draft the Job Description", desc:"Start from a role brief or an existing JD on SharePoint. Copilot drafts a complete JD aligned to Contoso Trade tone." },
      { app:"Copilot in Outlook", title:"Approval & posting comms", desc:"Draft headcount approval requests, candidate outreach, and shortlisting emails — referencing internal threads." },
      { app:"M365 Copilot Chat", title:"Shortlist screening prep", desc:"Paste candidate CV into Copilot Chat → ask for a competency match against the JD and suggested interview questions." },
      { app:"Copilot in Teams", title:"Interview scheduling & notes", desc:"Use Copilot in Teams to schedule, then auto-summarise the interview with key competency call-outs and next steps." },
      { app:"Copilot in Word", title:"Offer letter generation", desc:"Generate offer letter from a Contoso Trade template; Copilot pulls package details from your draft email." },
      { app:"Copilot in Outlook", title:"Onboarding communications", desc:"Draft welcome email, IT setup ticket, Day-1 agenda — all from a single Copilot prompt." }
    ],
    prompts: {
      "Copilot in Word": [
        "Draft a job description for a Compliance Analyst (AML / Remittance) reporting to the Head of Compliance, Kuala Lumpur. Include responsibilities, requirements, and our DEI statement.",
        "Generate an offer letter for [candidate name] for the role of [role] at MYR [package], start date [date], based on our standard Contoso Trade offer template."
      ],
      "Copilot in Outlook": [
        "Draft a follow-up email to the hiring manager asking for interview availability for these 3 shortlisted candidates this week.",
        "Summarise this 12-email recruitment thread and highlight outstanding actions and decisions.",
        "Draft a polite rejection email to candidates who did not progress past round 1, mentioning we will keep their CV on file."
      ],
      "Copilot in Teams": [
        "Recap this interview meeting and extract: 1) candidate strengths, 2) gaps vs the JD, 3) recommended next step.",
        "Generate interview questions for this role based on the JD I shared in the chat."
      ],
      "M365 Copilot Chat": [
        "Compare the attached CV to the JD and produce a match score with reasoning across technical, regulatory, and soft skills.",
        "From this batch of 12 CVs, group candidates into Strong / Possible / Reject with one-line reasoning each."
      ]
    },
    tip: "Treat Copilot as your <b>recruiter co-pilot</b> for drafting and screening, but keep humans in the decision loop. Never let Copilot make the hire/no-hire call.",
    beyond: "<b>Beyond Copilot:</b> for end-to-end requisition workflow, ATS integration, scoring models and background-check orchestration, you'll want <b>Dynamics 365 HR + Power Automate + Azure AI Document Intelligence</b>. A <b>recruitment agent</b> in Copilot Studio could later orchestrate this from inside Teams."
  },
  {
    id: "03-offboarding",
    num: 3,
    title: "Off-boarding Process",
    priority: "High",
    fit: "PARTIAL",
    fitLabel: "Partial Fit (drafting & reminders)",
    apps: [
      { name: "Copilot in Outlook", paid: true },
      { name: "Copilot in Word", paid: true },
      { name: "Copilot in Teams", paid: true },
      { name: "M365 Copilot Chat", paid: true }
    ],
    pain: "Resignation acceptance, asset return, prorated leave, and IT ticket closure are all manual — 1–2 hours per case.",
    pains: [
      "Manual exit checklist via email",
      "Resignation recorded in Adrenalin manually",
      "Prorated leave calculation prone to error",
      "Multiple parties to chase before IT ticket closes"
    ],
    expected: "Automated handover, reminders to all parties, and clean ticket closure.",
    flow: [
      { app:"Copilot in Word", title:"Draft acceptance + checklist", desc:"Generate the resignation acceptance and asset-return checklist from a single prompt." },
      { app:"Copilot in Outlook", title:"Coordinate parties", desc:"Send sequenced reminders to leaver, line manager, IT, and Finance — Copilot drafts each one." },
      { app:"Copilot in Teams", title:"Exit interview recap", desc:"Auto-generate the exit interview summary and themes for HR retention analytics." },
      { app:"M365 Copilot Chat", title:"Track open items", desc:"Ask Copilot Chat to list outstanding off-boarding items across recent emails and Teams chats." }
    ],
    prompts: {
      "Copilot in Word": [
        "Draft a resignation acceptance letter for [employee], last working day [date], thanking them for their service.",
        "Generate a company asset return checklist covering laptop, phone, access cards, software licenses, and Contoso Trade ID."
      ],
      "Copilot in Outlook": [
        "Draft a Day-7-before-exit reminder to [employee] with handover and asset-return tasks.",
        "Write a follow-up to IT to confirm laptop wipe and ticket closure for [employee]."
      ],
      "Copilot in Teams": [
        "Summarise this exit interview into reasons for leaving, suggestions, and any flight risk for the rest of the team."
      ]
    },
    tip: "Save standard off-boarding prompt templates in <b>Copilot Pages</b> so every HR exec runs the same flow.",
    beyond: "<b>Beyond Copilot:</b> automate prorated leave and asset workflow with <b>Power Automate + Adrenalin connector</b>; surface status on a <b>Power Apps</b> exit-tracker."
  },
  {
    id: "04-disciplinary",
    num: 4,
    title: "Disciplinary Case Management",
    priority: "High",
    fit: "GOOD",
    fitLabel: "Strong Fit (documentation & analysis)",
    apps: [
      { name: "Copilot in Word", paid: true },
      { name: "Copilot in Excel", paid: true },
      { name: "Copilot in Loop", paid: true },
      { name: "M365 Copilot Chat", paid: true }
    ],
    pain: "Cases tracked across multiple Excel files; warning and Show-Cause letters drafted manually; ~2–5 hours for monthly reporting.",
    pains: [
      "Manual tracking → errors & gaps",
      "Letters not linked to employee profile",
      "Hard to retrieve past cases or repeat offenders",
      "Inconsistent documentation across HR team"
    ],
    expected: "Auto-generated letters from templates, full case history in one place, real-time disciplinary trends.",
    flow: [
      { app:"Copilot in Word", title:"Draft warning / SC letters", desc:"Use a Word template; Copilot fills in case facts from your prompt and respects company tone of voice." },
      { app:"Copilot in Excel", title:"Centralise & analyse cases", desc:"Maintain a single case log; ask Copilot to surface trends, repeat offenders and category mix." },
      { app:"Copilot in Loop", title:"Live case workspace", desc:"Use a Loop page to collaborate with line managers and Legal on the case file in real time." },
      { app:"M365 Copilot Chat", title:"Monthly DC report", desc:"Ask Copilot Chat to compile the monthly Disciplinary Committee report from the Excel log." }
    ],
    prompts: {
      "Copilot in Word": [
        "Draft a warning letter for [employee, role] regarding [issue] on [date], referencing clause X of our Code of Conduct. Tone: firm but professional.",
        "Generate a Show Cause letter for [employee] requesting a written response within 7 working days.",
        "Create a disciplinary hearing notice with date, time, panel members, and the employee's right to be accompanied."
      ],
      "Copilot in Excel": [
        "Analyse this disciplinary case log and show counts by category, branch, and quarter.",
        "Identify employees with 2 or more cases in the past 12 months — flag as repeat offenders.",
        "Create a pivot showing average time-to-closure by case category."
      ],
      "M365 Copilot Chat": [
        "Compile a monthly disciplinary report from /HR/Disciplinary-2026.xlsx with key trends, repeat offenders, and outliers.",
        "Find prior cases similar to [scenario] from the disciplinary case log and summarise the outcomes."
      ]
    },
    tip: "Always add the legal/HR clause references into your prompt so Copilot drafts letters that align with your Employee Handbook.",
    beyond: "<b>Beyond Copilot:</b> for a centralised disciplinary system linked to the employee profile, build a <b>Power Apps</b> case portal backed by <b>Dataverse</b>, and tag letters using <b>SharePoint Premium (Syntex)</b>."
  },
  {
    id: "05-engagement-budget",
    num: 5,
    title: "Engagement Budget Management",
    priority: "Medium",
    fit: "GOOD",
    fitLabel: "Strong Fit (~70% with Copilot in Excel)",
    apps: [
      { name: "Copilot in Excel", paid: true },
      { name: "Copilot in Outlook", paid: true },
      { name: "M365 Copilot Chat", paid: true }
    ],
    pain: "Engagement budget, utilisation and balances tracked manually in Excel — prone to errors, no real-time visibility.",
    pains: [
      "Manual budget vs actual tracking",
      "Approvals over email — hard to consolidate",
      "No alerts for over-utilisation",
      "Time-consuming monthly reporting"
    ],
    expected: "Live budget dashboard, digital approval flow, auto-generated monthly report.",
    flow: [
      { app:"Copilot in Excel", title:"Build the live tracker", desc:"Convert your budget tracker to a Table; ask Copilot to compute utilisation %, balance, and over-utilisation flags." },
      { app:"Copilot in Excel", title:"Variance analytics", desc:"Generate budget vs actual charts by initiative and team." },
      { app:"Copilot in Outlook", title:"Approvals & comms", desc:"Draft approval requests and weekly status notes. Summarise pending approvals in your inbox." },
      { app:"M365 Copilot Chat", title:"Monthly consolidation", desc:"Ground Copilot Chat on the budget workbook and your Outlook approvals folder to draft the monthly engagement report." }
    ],
    prompts: {
      "Copilot in Excel": [
        "Add a calculated column for % budget utilised and another for remaining balance.",
        "Highlight any initiative where utilisation is above 90%.",
        "Create a budget vs actual chart by quarter and by initiative.",
        "Forecast year-end utilisation for each initiative based on current run-rate."
      ],
      "Copilot in Outlook": [
        "Summarise pending budget approval emails in my inbox into a single table with requester, amount, and status.",
        "Draft a budget approval request to [approver] for [item], [amount], with justification."
      ],
      "M365 Copilot Chat": [
        "Using /HR/Engagement-Budget-2026.xlsx, write the November consolidation report covering utilisation, top variances, and items above 90% utilised."
      ]
    },
    tip: "Pin the budget Excel file in <b>Copilot Chat</b> so you can ask cross-file questions (\"compare with last quarter's report on SharePoint\")."
  },
  {
    id: "06-welfare",
    num: 6,
    title: "Welfare Application Process",
    priority: "Medium",
    fit: "PARTIAL",
    fitLabel: "Partial Fit (email + tracker)",
    apps: [
      { name: "Copilot in Outlook", paid: true },
      { name: "Copilot in Excel", paid: true },
      { name: "M365 Copilot Chat", paid: true }
    ],
    pain: "Staff applies via Adrenalin, supporting docs by email, manual eligibility check, Excel tracker — slow processing, no visibility.",
    pains: [
      "Applications missed in email volume",
      "Manual document & eligibility checks",
      "No view of welfare fund utilisation",
      "Slow approvals; no analytics"
    ],
    expected: "Digital form, automated eligibility, real-time utilisation dashboard, faster approvals.",
    flow: [
      { app:"Copilot in Outlook", title:"Find & sort applications", desc:"Have Copilot find this week's welfare emails and summarise pending applications." },
      { app:"Copilot in Excel", title:"Update tracker", desc:"Ask Copilot to update the welfare tracker, calculate eligibility, and produce a utilisation report." },
      { app:"M365 Copilot Chat", title:"Eligibility checks", desc:"Compare applications to eligibility criteria stored on SharePoint." }
    ],
    prompts: {
      "Copilot in Outlook": [
        "Find all welfare application emails received this week and list applicant, type, and supporting docs attached.",
        "Draft a polite request for missing supporting documents for [applicant]."
      ],
      "Copilot in Excel": [
        "Compare this list of applications to the welfare eligibility criteria in the Reference sheet and flag ineligible cases.",
        "Generate a welfare utilisation report by category and month."
      ],
      "M365 Copilot Chat": [
        "Summarise the Welfare Policy on SharePoint and tell me the eligibility rules for [scenario]."
      ]
    },
    beyond: "<b>Beyond Copilot:</b> a <b>Power Apps</b> digital form + <b>Power Automate</b> approval flow gives you the end-to-end self-service experience; use <b>Power BI</b> for the live welfare dashboard."
  },
  {
    id: "07-overtime",
    num: 7,
    title: "C&B — Overtime Analysis",
    priority: "Medium",
    fit: "GOOD",
    fitLabel: "Excellent Fit (Copilot in Excel)",
    apps: [
      { name: "Copilot in Excel", paid: true },
      { name: "Analyst agent", paid: true },
      { name: "M365 Copilot Chat", paid: true }
    ],
    pain: "Monthly overtime report downloaded from Adrenalin and analysed manually — ~1 day every month.",
    pains: [
      "Manual data massage",
      "Slow trend & threshold analysis",
      "Hard to spot anomalies"
    ],
    expected: "AI analyses overtime trend and hours; flags outliers automatically.",
    flow: [
      { app:"Copilot in Excel", title:"Drop in the export", desc:"Open the Adrenalin OT report; convert to a Table." },
      { app:"Copilot in Excel", title:"Trend & outlier detection", desc:"Ask Copilot for monthly trends, top OT earners, and unusual patterns." },
      { app:"Analyst agent", title:"Multi-step reasoning", desc:"For deeper analysis (correlation with incentives, branch-level patterns), invoke the Analyst agent." }
    ],
    prompts: {
      "Copilot in Excel": [
        "Analyse overtime trends by department for the last 6 months and show the top 10 employees by total OT hours.",
        "Create a chart showing OT hours by month, split by department.",
        "Identify employees whose OT exceeds 25% of their contracted hours — list them with manager and branch.",
        "Compare this month's OT to the trailing 3-month average and highlight unusual increases."
      ],
      "Analyst agent (Copilot Chat)": [
        "Using the OT report and the incentive payout report, find correlation between high OT hours and incentive amounts by department."
      ]
    },
    tip: "Convert Adrenalin exports to a Table (Ctrl+T) and rename the table (e.g. <span class='kbd'>tblOT_Nov</span>) — Copilot's answers improve significantly."
  },
  {
    id: "08-shift",
    num: 8,
    title: "C&B — Shift Scheduling Analysis",
    priority: "Medium",
    fit: "PARTIAL",
    fitLabel: "Partial Fit (analysis only)",
    apps: [
      { name: "Copilot in Excel", paid: true },
      { name: "M365 Copilot Chat", paid: true }
    ],
    pain: "Shift Master template used to extract & massage data — ~3 days every month.",
    pains: [
      "Heavy manual data preparation",
      "No optimisation engine",
      "Hard to spot coverage gaps"
    ],
    expected: "AI analyses and recommends shift scheduling.",
    flow: [
      { app:"Copilot in Excel", title:"Analyse shift coverage", desc:"Drop the Shift Master in Excel; ask Copilot for coverage gaps and balance across shifts." },
      { app:"Copilot in Excel", title:"Workload comparison", desc:"Compare workload per shift across branches to flag understaffed shifts." }
    ],
    prompts: {
      "Copilot in Excel": [
        "Analyse the current shift distribution and show coverage by branch and time-of-day.",
        "Identify understaffed shifts based on the volume column.",
        "Suggest a more balanced shift allocation given current headcount and demand."
      ]
    },
    beyond: "<b>Beyond Copilot:</b> shift optimisation with constraints requires <b>Azure ML</b> or scheduling solvers; or <b>Dynamics 365 Field Service</b> for workforce scheduling."
  },
  {
    id: "09-payroll",
    num: 9,
    title: "C&B — Payroll Discrepancy Analysis",
    priority: "High",
    fit: "GOOD",
    fitLabel: "Excellent Fit (Copilot in Excel + Analyst agent)",
    apps: [
      { name: "Copilot in Excel", paid: true },
      { name: "Analyst agent", paid: true },
      { name: "M365 Copilot Chat", paid: true }
    ],
    pain: "Monthly payroll report manually compared and analysed for discrepancies — ~1 day per month.",
    pains: [
      "Manual diffing across months",
      "Anomalies are easy to miss",
      "No clear audit trail"
    ],
    expected: "AI picks up discrepancies / unjustified changes from the report.",
    flow: [
      { app:"Copilot in Excel", title:"Side-by-side comparison", desc:"Bring this month and last month into Excel; ask Copilot to highlight differences > threshold." },
      { app:"Analyst agent", title:"Reasoned investigation", desc:"For multi-factor analysis (incentive ↔ overtime, base ↔ deductions), use the Analyst agent for step-by-step reasoning." }
    ],
    prompts: {
      "Copilot in Excel": [
        "Find anomalies in this payroll table — entries that differ from last month by more than 10% or have unexpected components.",
        "Show payroll entries with no matching entry last month (new hires expected).",
        "Compare payroll totals by department month-over-month and highlight the largest movers.",
        "Analyse the correlation between incentive amounts and overtime hours by employee."
      ],
      "Analyst agent (Copilot Chat)": [
        "Step through the payroll discrepancy analysis: 1) list employees with >10% change, 2) categorise reasons (raise / OT / incentive / deduction), 3) flag the ones without justification."
      ]
    },
    tip: "Anchor month-on-month comparisons by employee ID, not by name — Copilot's accuracy improves when keys are unique."
  },
  {
    id: "10-budgeting",
    num: 10,
    title: "C&B — Salary Budgeting",
    priority: "Medium",
    fit: "GOOD",
    fitLabel: "Strong Fit (Copilot in Excel)",
    apps: [
      { name: "Copilot in Excel", paid: true },
      { name: "Copilot in PowerPoint", paid: true },
      { name: "M365 Copilot Chat", paid: true }
    ],
    pain: "Annual budgeting takes 2–3 weeks: payroll info massaged into a budget template manually.",
    pains: [
      "Slow data prep",
      "No quick scenario modelling",
      "Manual variance reporting"
    ],
    expected: "AI builds salary budgets and runs increment scenarios.",
    flow: [
      { app:"Copilot in Excel", title:"Build the projection", desc:"Ask Copilot to project next year's payroll from current data with assumptions (X% increment, Y new hires)." },
      { app:"Copilot in Excel", title:"Scenario modelling", desc:"Run multiple increment scenarios and compare outputs side-by-side." },
      { app:"Copilot in PowerPoint", title:"Budget review deck", desc:"Generate the budget review deck for ManCom from the workbook." }
    ],
    prompts: {
      "Copilot in Excel": [
        "Project next year's salary budget assuming a 5% across-the-board increment and 10 new hires in the Compliance team.",
        "Calculate total salary budget by department and branch.",
        "Compare proposed FY26 budget against FY25 actuals and show variance by department.",
        "Reformat this payroll export to match the FY26 budget template on the second sheet."
      ],
      "Copilot in PowerPoint": [
        "Create a 5-slide budget review presentation from /HR/FY26-Budget.xlsx with assumptions, totals, variance and key risks."
      ]
    }
  },
  {
    id: "11-attendance",
    num: 11,
    title: "C&B — Attendance vs Leave Reconciliation",
    priority: "Medium",
    fit: "GOOD",
    fitLabel: "Excellent Fit (Copilot in Excel)",
    apps: [
      { name: "Copilot in Excel", paid: true },
      { name: "M365 Copilot Chat", paid: true }
    ],
    pain: "Monthly: download Attendance + Leave from Adrenalin → manually reconcile against unpaid leave applications.",
    pains: [
      "Manual cross-reference",
      "Easy to miss exceptions",
      "Slow turnaround for payroll cut-off"
    ],
    expected: "AI generates the reconciliation and flags exceptions.",
    flow: [
      { app:"Copilot in Excel", title:"Cross-reference", desc:"Place attendance and leave on two sheets; ask Copilot to reconcile by employee + date." }
    ],
    prompts: {
      "Copilot in Excel": [
        "Compare the Attendance sheet to the Unpaid Leave Application sheet and list days where an employee was absent without an approved leave application.",
        "Show absentee summary by department for the month.",
        "Highlight employees with 3+ unexplained absences in the past 30 days."
      ]
    }
  },
  {
    id: "12-ld-needs",
    num: 12,
    title: "L&D — Training Needs Analysis",
    priority: "Medium",
    fit: "PARTIAL",
    fitLabel: "Partial Fit (survey + planning)",
    apps: [
      { name: "Copilot in Excel", paid: true },
      { name: "Copilot in Word", paid: true },
      { name: "M365 Copilot Chat", paid: true }
    ],
    pain: "1–8 weeks per training cycle: identifying skill gaps, surveys, performance data, frameworks, calendar.",
    pains: [
      "Manual needs analysis on incomplete data",
      "Low engagement — content feels generic",
      "Skill-gap visibility is poor"
    ],
    expected: "Personalised learning paths, AI-driven skill-gap analysis, content curation.",
    flow: [
      { app:"Copilot in Excel", title:"Survey & gap analysis", desc:"Drop the survey results in Excel; ask Copilot for top skill gaps by role and tenure." },
      { app:"Copilot in Word", title:"Needs analysis report", desc:"Draft the training needs assessment report grounded on the analysis and your competency framework." },
      { app:"M365 Copilot Chat", title:"Calendar & path", desc:"Ask Copilot to draft a training calendar based on the gaps and your existing programmes." }
    ],
    prompts: {
      "Copilot in Excel": [
        "Analyse the training needs survey results and rank skill gaps by department.",
        "Summarise the competency assessment scores and flag teams below benchmark."
      ],
      "Copilot in Word": [
        "Draft a Training Needs Assessment report for FY26 using the analysis from /HR/TNA-FY26.xlsx and our Competency Framework on SharePoint."
      ],
      "M365 Copilot Chat": [
        "Propose an FY26 training calendar covering the top 5 skill gaps for the Branch Operations team."
      ]
    },
    beyond: "<b>Beyond Copilot:</b> personalised learning paths and skill recommendations are best delivered by <b>Microsoft Viva Learning + Viva Skills</b> integrated with LinkedIn Learning."
  },
  {
    id: "13-ld-content",
    num: 13,
    title: "L&D — Content Creation",
    priority: "Medium",
    fit: "GOOD",
    fitLabel: "Strong Fit (Copilot Word + PPT)",
    apps: [
      { name: "Copilot in Word", paid: true },
      { name: "Copilot in PowerPoint", paid: true },
      { name: "M365 Copilot Chat", paid: true }
    ],
    pain: "Designing and developing learning content (e-learning, workshops, blended) with SMEs takes significant effort.",
    pains: [
      "Slow course outline development",
      "Manual quiz / handbook authoring",
      "Inconsistent quality across modules"
    ],
    expected: "AI generates microlearning, quizzes, summaries; curates external resources.",
    flow: [
      { app:"Copilot in Word", title:"Module outline & handbook", desc:"Generate course outlines and participant handbooks from a SME's brief or an existing PDF." },
      { app:"Copilot in PowerPoint", title:"Slides & facilitator guide", desc:"Auto-generate the workshop deck and facilitator guide from the Word outline." },
      { app:"M365 Copilot Chat", title:"Quizzes & microlearning", desc:"Generate quiz banks and 5-minute microlearning summaries from the source material." }
    ],
    prompts: {
      "Copilot in Word": [
        "Create a 4-module training outline on \"AML Red Flags for Remittance Frontliners\" with learning objectives and activities.",
        "Draft a participant handbook for the AML training using the policy document I shared.",
        "Create a facilitator guide with timing, discussion questions and answer keys."
      ],
      "Copilot in PowerPoint": [
        "Build a 12-slide AML workshop deck from /Training/AML-Outline.docx, with one slide per learning objective and an activity slide every 3rd slide."
      ],
      "M365 Copilot Chat": [
        "Generate a 10-question quiz with answers and rationale based on the AML policy on SharePoint.",
        "Convert the AML policy into 5 microlearning bites of 200 words each."
      ]
    }
  },
  {
    id: "14-ld-delivery",
    num: 14,
    title: "L&D — Delivery, Comms & Admin",
    priority: "Medium",
    fit: "GOOD",
    fitLabel: "Strong Fit (Outlook + Teams)",
    apps: [
      { name: "Copilot in Outlook", paid: true },
      { name: "Copilot in Teams", paid: true },
      { name: "M365 Copilot Chat", paid: true }
    ],
    pain: "Nominations, confirmations, reminders, attendance tracking, feedback collation — all manual.",
    pains: [
      "Repetitive comms",
      "Manual attendance & feedback consolidation",
      "Compliance tracking spread across files"
    ],
    expected: "AI handles training comms and reporting end-to-end.",
    flow: [
      { app:"Copilot in Outlook", title:"Nominations & reminders", desc:"Draft nomination, confirmation and reminder emails to participants." },
      { app:"Copilot in Teams", title:"Session recap & follow-up", desc:"Use Teams recap to capture attendance and key takeaways automatically." },
      { app:"M365 Copilot Chat", title:"Feedback & report", desc:"Aggregate feedback responses and generate the post-training report." }
    ],
    prompts: {
      "Copilot in Outlook": [
        "Draft a nomination email to the Branch Operations team for the AML refresher on [date], with required pre-read.",
        "Send a reminder 1 day before the training with the join link, location, and pre-work checklist."
      ],
      "Copilot in Teams": [
        "Recap this training session — list attendees, key topics covered, questions raised, and action items."
      ],
      "M365 Copilot Chat": [
        "Summarise the feedback in /Training/AML-Feedback.xlsx and draft a post-training report with NPS, key themes, and improvement actions."
      ]
    }
  },
  {
    id: "15-ld-roi",
    num: 15,
    title: "L&D — ROI & Analytics",
    priority: "Medium",
    fit: "LIMITED",
    fitLabel: "Limited (basic analysis only)",
    apps: [
      { name: "Copilot in Excel", paid: true },
      { name: "M365 Copilot Chat", paid: true }
    ],
    pain: "Linking learning to business KPIs and impact measurement is difficult and mostly manual.",
    pains: [
      "No link between training and KPI impact",
      "Manual cost-per-employee calculations",
      "No predictive view of training ROI"
    ],
    expected: "Predictive analytics for training impact on productivity and retention.",
    flow: [
      { app:"Copilot in Excel", title:"Basic analytics", desc:"Compute completion rates, score deltas, training-cost-per-head, hours by department." }
    ],
    prompts: {
      "Copilot in Excel": [
        "Compare pre- and post-assessment scores for the AML training and show average score uplift by department.",
        "Calculate training cost per employee by programme and department.",
        "Show training hours completed by department vs target."
      ]
    },
    beyond: "<b>Beyond Copilot:</b> predictive ROI requires <b>Viva Insights + Viva Learning</b> for productivity correlation, plus <b>Power BI</b> for the dashboard. <b>Azure ML</b> can model retention impact of L&D investment."
  }
];
