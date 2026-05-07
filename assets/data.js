// Contoso Trade — HR Copilot Immersion data
// Mapped from spreadsheet: 15 use cases. Focused on PAID Microsoft 365 Copilot features.
// PAID apps in scope (require M365 Copilot license):
//   M365 Copilot Chat (with Agent Builder) · Copilot in Excel/Word/PowerPoint/Outlook/OneNote/Teams
//   Copilot Pages · Researcher & Analyst reasoning agents · SharePoint agents · Cowork (Frontier preview)

window.CT_USE_CASES = [
  {
    id: "01-hr-analytics",
    num: 1,
    title: "HR Data Analytics",
    priority: "High",
    fit: "PARTIAL",
    fitLabel: "Partial Fit (Excel + PPT + Analyst agent)",
    apps: [
      { name: "Copilot in Excel", paid: true },
      { name: "Copilot in PowerPoint", paid: true },
      { name: "M365 Copilot Chat", paid: true },
      { name: "Analyst agent", paid: true },
      { name: "Agent Builder", paid: true }
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
      { app:"Copilot in PowerPoint", title:"Auto-build the deck", desc:"In a blank or branded template, ask Copilot in PowerPoint to create slides from the Excel insights and the Word brief." },
      { app:"Agent Builder", title:"Build a self-serve HR Analytics agent", desc:"In M365 Copilot Chat → Agent Builder, create a no-code agent grounded on the HR-Reports SharePoint site so leaders can ask 'What's our November attrition by branch?' without you running it for them." }
    ],
    prompts: {
      "Copilot in Excel": [
        "You are my HR analyst. Looking at the Headcount sheet, segment our 120 employees by tenure bracket (<1yr, 1–3yrs, 3–5yrs, 5+yrs) and department, then produce: (1) a heat-map style table of average tenure by department × branch, (2) a list of the 5 departments with the highest attrition rate this quarter using the Attrition_Q1 sheet, and (3) one observation per finding written for a non-technical Head of HR.",
        "Compare leave utilisation in the LeaveBalance sheet across departments. For each department, show: median leave used, % employees who have used <30% of their entitlement (burnout risk), and % who have used >90% (year-end rush). Flag any department where >25% of employees fall into either bucket.",
        "From the Attrition_Q1 sheet, build a month-over-month attrition rate trend by department. Identify any department with two consecutive months of rising attrition and write a 2-sentence narrative I can paste into a leadership update.",
        "Add a calculated column \"Flight Risk Score\" using these rules: +2 if tenure < 1yr, +1 if leave balance > 80% of entitlement, +2 if department attrition rate > 8%, +1 if base salary is below the median for the same role. Sort the table descending by score and highlight the top 20.",
        "Reformat the Headcount sheet into the Contoso Trade monthly HR Dashboard layout: section 1 = total headcount by branch with % change vs last month, section 2 = top 5 movers (joiners and leavers), section 3 = diversity split by gender for branches > 10 staff. Use our teal as the accent."
      ],
      "Analyst agent": [
        "Acting as a senior HR data scientist for Contoso Trade, use the Headcount, Attrition_Q1 and LeaveBalance data plus the Overtime-Report-Nov2026.xlsx I shared. Step through: (1) compute a correlation matrix between attrition rate, average overtime hours, leave balance and tenure by department, (2) identify the two strongest correlations and explain causation hypotheses, (3) recommend three concrete HR interventions for the Head of HR with expected impact and a 90-day measurement plan.",
        "From the past 3 months of joiners and leavers, forecast headcount for the Branch Operations and Customer Service teams for the next 12 months under three scenarios: status quo, +10% remittance volume growth, and a 15% attrition-reduction programme. Output a small table per scenario plus the assumptions you used."
      ],
      "Copilot in PowerPoint": [
        "Build a 6-slide \"Q1 FY26 HR Dashboard — Contoso Trade\" presentation grounded on /HR-Q1-Analysis.xlsx. Slide structure: 1) Cover with our teal palette and quarter, 2) Executive summary in 5 bullets, 3) Headcount by branch (chart), 4) Attrition trend by department (chart with the two highest departments highlighted), 5) Leave utilisation insights with one risk callout, 6) Recommendations for the next quarter with owners. Use a single accent colour (#0F766E) and keep each slide to <30 words of body text.",
        "Take the Word brief I shared and convert it into a 4-slide narrative deck for ManCom. For each slide produce a punchy title, a 2-sentence story, one supporting data point, and a speaker note for me to read aloud."
      ],
      "Agent Builder": [
        "Help me build a no-code 'HR Analytics Helper' agent in M365 Copilot Chat. Ground it on the Contoso Trade SharePoint site at /sites/HR-Reports (folders: Headcount, Attrition, Leave). Suggest: (1) a clear agent name, description and starter prompts a Head of HR would actually use; (2) the answer style — concise, with branch + department breakdowns where relevant, always cite the source file + month; (3) 4 conversation starters covering monthly headcount, attrition trend, leave liability and OT outliers; (4) guardrails — never quote individual salary figures, refuse questions about specific employees by name."
      ]
    },
    tip: "For best results, always convert your raw Adrenalin export into a named Excel Table before invoking Copilot — it dramatically improves answer quality. Pin the workbook in Copilot Chat to ask multi-file questions across HR analytics + payroll + OT.",
    beyond: "<b>Beyond Copilot:</b> for live Adrenalin connectivity, layer Power BI + Power Automate for scheduled refreshes; or build a custom <b>SharePoint agent</b> grounded on your monthly HR data drops so leaders can self-serve answers.",
    feasible: [
      "Summarising attrition, headcount and demographic trends from Excel exports (Copilot in Excel + Analyst agent)",
      "Generating leadership-ready PowerPoint decks from those summaries (Copilot in PowerPoint)",
      "Cross-file Q&A across multiple HR exports pinned in Copilot Chat",
      "Grounding answers on policy documents via a SharePoint agent (paid M365 Copilot add-on)",
      "Building a no-code HR Policy / FAQ agent in M365 Copilot Chat (Agent Builder), grounded on the policy SharePoint site"
    ],
    notFeasible: [
      "Live, real-time connection to Adrenalin HRMS — Copilot does not have a native Adrenalin connector",
      "Predictive attrition modelling at scale — needs Power BI + Azure ML or Fabric Data Science",
      "Automated scheduled refresh of dashboards — handled by Power BI / Power Automate, not Copilot"
    ],
    files: [
      { name: "HR-Q1-Analysis.xlsx", file: "data/HR-Q1-Analysis.xlsx", why: "Source HR data (headcount, attrition, demographics) — pin in Copilot Chat / open in Excel.", how: "Open in Excel and click the Copilot button (or attach in M365 Copilot Chat).", useWith: ["Copilot in Excel", "Analyst agent", "Copilot in PowerPoint"] }
    ]
  },
  {
    id: "02-recruitment",
    num: 2,
    title: "Recruitment & Onboarding",
    priority: "High",
    fit: "PARTIAL",
    fitLabel: "Partial Fit (drafting + screening + scheduling)",
    apps: [
      { name: "Copilot in Outlook", paid: true },
      { name: "Copilot in Word", paid: true },
      { name: "Copilot in Teams", paid: true },
      { name: "M365 Copilot Chat", paid: true },
      { name: "Researcher agent", paid: true },
      { name: "Cowork (Frontier preview)", paid: true }
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
      { app:"Copilot in Outlook", title:"Onboarding communications", desc:"Draft welcome email, IT setup ticket, Day-1 agenda — all from a single Copilot prompt." },
      { app:"Researcher agent", title:"Benchmark the salary band (Frontier)", desc:"Use the Researcher agent (multi-model intelligence with Model Council + Critique) to validate the FY26 Compliance Officer salary range and AML talent supply in KL — cited and critiqued." },
      { app:"Cowork (Frontier preview)", title:"Orchestrate the next 48 hours", desc:"Hand the shortlisted candidate to Cowork — it drafts the callback email, proposes interview slots that work for both interviewers, sends the invite once confirmed, and pauses for your approval at each external send." }
    ],
    prompts: {
      "Copilot in Word": [
        "Draft a job description for a <b>Compliance Analyst (AML / Remittance)</b> role reporting to the Head of Compliance, based at KL HQ. Use Contoso Trade's house style — warm, plain English, no jargon. Structure: Role purpose (3 lines), Key responsibilities (8 bullets covering AML transaction monitoring, STR filing, sanctions screening, BNM AMLA 2001 reporting, training delivery, EDD on high-risk customers), Requirements (must-have vs nice-to-have, including ICA/ACAMS preferred, BM + EN), Why join Contoso Trade (3 bullets about purpose, growth, culture), and our standard DEI footer. Keep it under 600 words.",
        "Take the JD I just drafted and generate three tone variations: (1) LinkedIn-style with a punchy hook, (2) corporate JobStreet-style, (3) a 200-word internal mobility pitch for staff already in the network. Keep all three faithful to the responsibilities but vary the voice.",
        "Generate an offer letter for [Candidate Name] for the role of Compliance Analyst at MYR [package]/month, start date [date], reporting to [hiring manager], based at KL HQ. Use the Contoso Trade offer template attached. Include: probation 3 months, 21 days annual leave, group medical (Allianz), mandatory background check clause, BNM Fit & Proper requirement, 1-month notice in probation / 2 months thereafter, and the standard PDPA + non-disclosure clauses. End with the acceptance block."
      ],
      "Copilot in Outlook": [
        "Summarise this 14-email recruitment thread for the Compliance Analyst role. Structure as: (1) candidates currently in the pipeline with stage, (2) decisions taken and by whom, (3) outstanding actions with owner and due date, (4) risks/blockers. Keep it under 200 words and Markdown-formatted so I can paste into a OneNote tracker.",
        "Draft a follow-up email to Faridah (Hiring Manager, Compliance) asking for interview availability this Tue–Fri for these three shortlisted candidates: Nurul Aina, Vishnu Raj, Lim Sze Ying. Tone: friendly but efficient. Offer to set up Teams meetings on her behalf. Include a one-line summary of each candidate's standout strength.",
        "Reply to the candidate's email below politely declining their counter-offer of RM 11,500 and re-stating our final position of RM 9,500 + sign-on bonus. Keep the tone warm and respectful, leave the door open for future roles, and reference our group medical and growth opportunities as additional value."
      ],
      "Copilot in Teams": [
        "Recap the panel interview meeting. Structure: (1) candidate name + role, (2) panel members, (3) candidate strengths against each of the 5 competencies (AML technical, regulatory knowledge, judgement, communication, ownership) with quotes, (4) gaps or risks, (5) panel recommendation (Hire / Hire with conditions / Decline) with reasoning, (6) next steps with owners. Mark anything sensitive that should not be shared with the candidate.",
        "Generate 12 competency-based interview questions for the Compliance Analyst role I shared in the JD. Mix STAR-format behavioural questions, two scenario-based questions on suspicious transaction handling, two technical questions on AMLA 2001 / BNM AML/CFT Sectoral Guidelines, and two on stakeholder management with branch operations. For each question, include what a strong vs weak answer looks like."
      ],
      "M365 Copilot Chat": [
        "Using /Sample-CVs-Compliance-Role.docx and the Compliance Analyst JD I shared, score each candidate out of 100 across these dimensions: (1) AML technical depth (30%), (2) regulatory knowledge BNM/AMLA (20%), (3) tooling experience Actimize / SQL / Power BI (15%), (4) communication & languages (10%), (5) culture and growth signals (15%), (6) compensation fit vs RM 9,500 ceiling (10%). Output a comparison table with totals plus a 1-paragraph recommendation for the hiring manager.",
        "From the 12 CVs in the shared folder, group candidates into Strong / Possible / Reject. For each, give a one-line rationale tied to the JD, the suggested interview focus areas, and any red flags I should validate via reference checks.",
        "Draft a 30-60-90 onboarding plan for our incoming Compliance Analyst at KL HQ. Day 1–7: orientation, PDPA + AML mandatory training, branch shadowing in Subang. Day 8–30: paired investigations with a senior analyst. 31–60: own a low-risk caseload. 61–90: lead a thematic STR review. For each milestone, list the buddy/mentor, success measure, and the SharePoint resources to read."
      ],
      "Researcher agent": [
        "Use the Researcher agent (multi-model with Model Council + Critique) to benchmark Compliance Officer salaries in Kuala Lumpur for the licensed money-services / remittance industry, FY2026. Distinguish junior (1-3 yrs), mid (4-7 yrs) and senior (8+ yrs) bands. For each band give: (1) base salary range in MYR, (2) typical allowances (transport, mobile, AML cert), (3) common bonus structure, (4) sources cited. Also flag any candidate-supply commentary (shortage / abundance) for AMLA-experienced talent. Then critique your own answer — confidence level and what data is missing."
      ],
      "Cowork (Frontier preview)": [
        "Cowork — orchestrate the next 48 hours of the Compliance Officer hire end-to-end: (1) draft and send a personalised callback email to candidate Nurul Aina referencing her Actimize experience; (2) propose 3 interview slots that work for Aisha Rahman (Head of HR) and Lim Wei Jian (Head of Compliance) and place a hold on each; (3) once the candidate confirms, send the Teams calendar invite with the JD attached and an interview prep document; (4) create a Loop-style scorecard in OneNote for both interviewers. Pause for my approval before each external send."
      ]
    },
    tip: "Treat Copilot as your <b>recruiter co-pilot</b> for drafting, screening and scheduling, but keep humans in the decision loop. Never let Copilot make the hire/no-hire call. For CV screening, drop multiple CVs into Copilot Chat and ask for a comparative scoring grid — much faster than reading them sequentially.",
    beyond: "<b>Beyond Copilot:</b> for end-to-end requisition workflow, ATS integration, candidate scoring models and background-check orchestration, you'll want <b>Dynamics 365 HR + Power Automate + Azure AI Document Intelligence</b>. A custom <b>recruitment agent</b> in Copilot Studio could later orchestrate this directly inside Teams.",
    feasible: [
      "Drafting and refining JDs, interview questions and offer letters (Copilot in Word / Outlook)",
      "Comparing multiple CVs against a JD as a scoring grid in Copilot Chat (attach CVs + JD)",
      "Live note-taking and recap of interview meetings (Copilot in Teams)",
      "Salary benchmarking research using the Researcher agent (paid Frontier add-on)",
      "Personalised candidate follow-up emails (Copilot in Outlook)",
      "Orchestrating the end-to-end screening → scheduling → follow-up flow with Cowork (Frontier preview, sequential agentic actions across Outlook + Teams + Word)"
    ],
    notFeasible: [
      "AI-conducted structured digital interviews with automated competency scoring — NOT a Copilot capability; needs an HR-tech vendor (e.g., HireVue, iMocha) or a custom Copilot Studio agent + Azure AI Speech",
      "ATS workflow, requisition routing, background checks — needs Dynamics 365 HR or a dedicated ATS",
      "Sourcing candidates from LinkedIn — requires LinkedIn Recruiter, separate licence"
    ],
    files: [
      { name: "Compliance-Officer-JD.docx", file: "data/Compliance-Officer-JD.docx", why: "Reference JD to refine, paste into prompts, or compare CVs against.", how: "Open in Word for refinement; or attach in M365 Copilot Chat alongside the CVs.", useWith: ["Copilot in Word", "M365 Copilot Chat"] },
      { name: "Sample-CVs-Compliance-Role.docx", file: "data/Sample-CVs-Compliance-Role.docx", why: "Three candidate CVs to feed into Copilot Chat for comparative scoring.", how: "Attach all CVs to M365 Copilot Chat (\ud83d\udcce attach button) along with the JD.", useWith: ["M365 Copilot Chat"] }
    ]
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
      { name: "M365 Copilot Chat", paid: true },
      { name: "Cowork (Frontier preview)", paid: true }
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
      { app:"M365 Copilot Chat", title:"Track open items", desc:"Ask Copilot Chat to list outstanding off-boarding items across recent emails and Teams chats." },
      { app:"Cowork (Frontier preview)", title:"Coordinate the off-boarding sequence", desc:"Cowork sends the resignation acknowledgement, books the exit interview, drafts the asset-return checklist, and pings IT-Ops for access revocation — all in one approved sequence." }
    ],
    prompts: {
      "Copilot in Word": [
        "Draft a resignation acceptance letter for [Employee Name], [role], [department], whose last working day is [date]. Tone: warm and gracious. Structure: acknowledgment of service (with one specific contribution I'll fill in), confirmation of last working day after notice / leave offset, prorated leave pay confirmation, asset return reminder pointing to the checklist, exit interview invitation with two suggested slots, gentle reminder of post-employment confidentiality and non-solicitation clauses, and a closing wishing them well. Sign-off from Head of Human Capital.",
        "Generate the company asset-return checklist for an off-boarding employee at Contoso Trade. Group by category: (1) Hardware — laptop with charger, mobile phone, SIM, security token, headset; (2) Identity — staff ID card, branch access card, parking access; (3) Software — Office 365 deactivation, Adrenalin, AML system, VPN, Power BI workspaces; (4) Documents — printed customer files, branded materials, business cards; (5) Finance — corporate card, mileage claim cut-off date. For each item include: who collects it, by which date, and how to confirm closure."
      ],
      "Copilot in Outlook": [
        "Draft a sequenced 4-email off-boarding plan for [Employee], last day [date]: Email 1 (Day-30 from exit) to employee with acceptance letter + checklist, Email 2 (Day-7) to IT and Branch Ops to deactivate accesses on the last day, Email 3 (Day-1) to line manager confirming handover artefacts received, Email 4 (Day+1) to Finance triggering final payroll with prorated leave. Each email under 120 words, with clear actions and dates.",
        "Summarise all emails in my inbox related to [Employee]'s exit and produce a status table: open items, owner, due date, blockers. Highlight anything still open within 5 days of the last working day."
      ],
      "Copilot in Teams": [
        "Recap the exit interview I just had. Capture: (1) primary reason for leaving in the employee's own words, (2) secondary reasons, (3) what they'd change if they could, (4) what worked well, (5) any concerning signals about manager, team or culture (flag for confidential review by Head of HR only), (6) likelihood of re-hire on a 1–5 scale with rationale, (7) any flight risk they perceive in the rest of their team."
      ],
      "M365 Copilot Chat": [
        "Across my Outlook, Teams chats and the /HR/Off-boarding-Tracker.xlsx, list every off-boarding case currently in progress with: employee, last working day, status of asset return, status of prorated leave settlement, IT ticket status, and who owns the next action. Highlight any case overdue."
      ],
      "Cowork (Frontier preview)": [
        "Cowork — coordinate the off-boarding for CT1042 (Last working day = 30-Nov-2026): (1) send the resignation acknowledgement email from my Outlook using the standard Contoso Trade template; (2) book a 30-min exit interview with the line manager in the next 5 working days; (3) create a Word doc with the asset-return checklist (laptop, phone, ID card, AML token); (4) post a private Teams message to IT-Ops to schedule access revocation on 30-Nov 17:00. Confirm each step with me before sending."
      ]
    },
    tip: "Save standard off-boarding prompt templates in <b>Copilot Pages</b> so every HR exec runs the same flow — consistent tone, same checklist, no missed steps.",
    beyond: "<b>Beyond Copilot:</b> automate prorated leave and asset workflow with <b>Power Automate</b> calling Adrenalin's REST API via a <b>custom connector</b> (no certified Adrenalin connector exists in Power Automate today); surface status on a <b>Power Apps</b> exit-tracker.",
    feasible: [
      "Drafting acceptance letters, exit checklists and farewell announcements (Copilot in Word / Outlook)",
      "Sending reminders and tracking responses across IT, Finance, Admin (Copilot in Outlook + Teams)",
      "Generating an exit-interview summary from a Teams meeting (Copilot in Teams)",
      "Standardising the off-boarding playbook in Copilot Pages so every HR exec follows the same flow",
      "Coordinating the off-boarding checklist across Outlook, Word and Teams with Cowork (Frontier preview)"
    ],
    notFeasible: [
      "Automatic prorated leave/final-pay calculation pulled from Adrenalin — no certified Adrenalin connector in Power Automate; needs a custom connector against Adrenalin's REST API or middleware",
      "Asset return tracking with status dashboards — needs Power Apps + Dataverse",
      "Auto-revoking system access on last working day — needs Entra ID lifecycle workflows"
    ],
    files: [
      { name: "Employee-Handbook-v3.1.docx", file: "data/Employee-Handbook-v3.1.docx", why: "Section 11 (Resignation & Off-boarding) — ground letters and checklists on the right clauses.", how: "Open in Word for clause lookup; attach in M365 Copilot Chat to ground letter drafts.", useWith: ["Copilot in Word", "Copilot in Outlook", "M365 Copilot Chat"] }
    ]
  },
  {
    id: "04-disciplinary",
    num: 4,
    title: "Disciplinary Case Management",
    priority: "High",
    fit: "GOOD",
    fitLabel: "Strong Fit (documentation & analytics)",
    apps: [
      { name: "Copilot in Word", paid: true },
      { name: "Copilot in Excel", paid: true },
      { name: "M365 Copilot Chat", paid: true },
      { name: "Copilot Pages", paid: true },
      { name: "Agent Builder", paid: true }
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
      { app:"Copilot Pages", title:"Live case workspace", desc:"Spin up a Copilot Page from your chat to co-author the case file with line managers and Legal in real time, with full version history and tenant-grade access controls." },
      { app:"M365 Copilot Chat", title:"Monthly DC report", desc:"Ask Copilot Chat to compile the monthly Disciplinary Committee report from the Excel log." },
      { app:"Agent Builder", title:"Build a Disciplinary Clause Helper agent", desc:"Create a no-code agent in M365 Copilot Chat grounded on the Employee Handbook + AML Policy so HRBPs can classify severity and find the right clause without paging HR Head." }
    ],
    prompts: {
      "Copilot in Word": [
        "Draft a written warning letter for [Employee Name], [Employee ID], [role], [branch], regarding a punctuality breach: [N] late arrivals in [month] despite a verbal counselling on [date]. Reference Clause 8.3 of the Contoso Trade Employee Handbook (Punctuality and Attendance) and Clause 12.1 (Progressive Discipline). Tone: firm, factual, no emotive language. Include: (1) factual statement of incidents with dates, (2) the standard expected, (3) confirmation of prior counselling, (4) consequences of further breach (escalation to Show Cause), (5) right to respond in writing within 7 working days, (6) acknowledgement signature block. Keep under 1.5 A4 pages.",
        "Generate a Show Cause letter for [Employee] regarding an alleged AML/KYC SOP breach on [date] at [branch], where customer ID was not verified before a remittance of RM 8,400 to [country]. Cite the AML/CFT Policy v4.2 Section 4 and Section 6, the Employee Handbook Clause 14 (Gross Misconduct), and BNM AMLA 2001 reporting obligations. Require a written response within 5 working days, advise the employee may bring a representative to the hearing, and confirm continued employment under interim review pending the outcome.",
        "Draft a disciplinary hearing notice for [Employee], hearing date [date] at [time], location [room/Teams], panel comprising [Head of HR], [Head of Compliance], [Branch Manager]. Include the right to representation, the documents to be relied upon (case file, CCTV log, transaction record), and the expected duration. Tone: neutral, procedural."
      ],
      "Copilot in Excel": [
        "Looking at /Disciplinary-Cases-2026.xlsx Cases sheet, build the FY26 H1 Disciplinary Trend report. Sections: (1) total cases by category and severity, (2) cases by branch with open/closed split, (3) average time-to-closure in days by category, (4) repeat-offender summary cross-referenced with the Repeat_Offenders sheet, (5) any category showing >25% MoM increase. Output as a clean dashboard layout I can present to the Disciplinary Committee.",
        "Identify employees with 2 or more disciplinary cases in the last 12 months and rank them by severity-weighted score (Low=1, Medium=3, High=6). For each, list the case categories, dates, and current status. Add a column flagging anyone whose latest case is still Open or Investigating.",
        "Create a pivot showing average time-to-closure (days) by case category and branch. Highlight any combination where average closure exceeds 30 days, and propose a one-line follow-up action for each cell flagged."
      ],
      "M365 Copilot Chat": [
        "Compile the monthly Disciplinary Committee report from /Disciplinary-Cases-2026.xlsx. Format as a 1-page executive summary: (1) cases opened / closed this month with prior-month comparison, (2) top 3 categories by volume, (3) repeat-offender watchlist (anonymised IDs only — no names), (4) thematic patterns I should brief the Branch Heads on, (5) recommended HR actions with target dates. Keep tone factual and neutral.",
        "Find prior cases in the disciplinary log that are similar to this scenario: [scenario description]. For each match, give the case ID, severity, what action was taken, and the outcome. Then recommend the consistent disciplinary action for the new case based on precedent."
      ],
      "Agent Builder": [
        "Build a 'Disciplinary Clause Helper' agent in M365 Copilot Chat for HR Business Partners. Ground it on: Employee-Handbook-v3.1.docx (Section 5 Disciplinary Procedure) and AML-Policy-v4.2.docx (Sections 7 STR + 10 Training breach). Behaviour: when a user describes a misconduct scenario, the agent should (a) classify severity (Minor / Major / Gross), (b) cite the exact handbook clause, (c) suggest the correct stage of action (verbal / written / final / dismissal), (d) list the procedural steps and notice periods, (e) refuse to draft the show-cause letter — refer the user to UC-04 prompt instead. Conversation starters: late attendance, AML training failure, mishandled customer cash, repeated insubordination."
      ]
    },
    tip: "Always cite the specific clause from the Employee Handbook and the AML Policy in your Word prompt — Copilot will mirror the citation style and produce letters that withstand legal review. For sensitive cases, use a private Copilot Chat (no sharing) and avoid pasting full names into prompts you don't want logged.",
    beyond: "<b>Beyond Copilot:</b> for a centralised disciplinary system linked to the employee profile, build a <b>Power Apps</b> case portal backed by <b>Dataverse</b>, and tag letters using <b>SharePoint Premium (Syntex)</b>.",
    feasible: [
      "Drafting Show-Cause, warning and suspension letters with correct AMLA / Handbook clause references (Copilot in Word)",
      "Summarising disciplinary case logs and trend analysis by branch / category (Copilot in Excel)",
      "Co-authoring sensitive case notes in Copilot Pages with version history and audit trail",
      "Grounding letter drafts on the AML Policy and Employee Handbook via a SharePoint agent",
      "Building a 'Disciplinary clause helper' agent in M365 Copilot Chat (Agent Builder) grounded on the Employee Handbook + AML Policy"
    ],
    notFeasible: [
      "Centralised case-management portal with role-based access — needs Power Apps + Dataverse",
      "Auto-classification of severity and routing — needs SharePoint Premium (Syntex) or Power Automate",
      "Direct push of finalised letters into Adrenalin's employee record — needs HRMS API integration"
    ],
    files: [
      { name: "Disciplinary-Cases-2026.xlsx", file: "data/Disciplinary-Cases-2026.xlsx", why: "Live case log to summarise, classify and trend.", how: "Open in Excel for trend analysis; attach in M365 Copilot Chat with the policy docs.", useWith: ["Copilot in Excel"] },
      { name: "AML-Policy-v4.2.docx", file: "data/AML-Policy-v4.2.docx", why: "AMLA-specific clauses to cite in show-cause and warning letters.", how: "Open in Word and click Copilot \u2014 or attach in M365 Copilot Chat as grounding for prompts.", useWith: ["Copilot in Word", "M365 Copilot Chat"] },
      { name: "Employee-Handbook-v3.1.docx", file: "data/Employee-Handbook-v3.1.docx", why: "Section 7 (Code of Conduct) and Section 9 (Disciplinary Procedure) for clause references.", how: "Open in Word for clause lookup; attach in M365 Copilot Chat to ground letter drafts.", useWith: ["Copilot in Word", "M365 Copilot Chat"] }
    ]
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
      { name: "M365 Copilot Chat", paid: true },
      { name: "Analyst agent", paid: true }
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
      { app:"M365 Copilot Chat", title:"Monthly consolidation", desc:"Ground Copilot Chat on the budget workbook and your Outlook approvals folder to draft the monthly engagement report." },
      { app:"Analyst agent", title:"Reason through the budget (Frontier)", desc:"Hand the budget workbook to the Analyst agent for multi-step reasoning — YTD utilisation, outlier branches, run-rate forecast and reallocation recommendation, with the working shown." }
    ],
    prompts: {
      "Copilot in Excel": [
        "Looking at /Engagement-Budget-FY26.xlsx Budget_FY26 sheet, build a live status block at the top of the sheet showing: (1) total approved budget vs total utilised, (2) overall utilisation %, (3) count of initiatives by status (OK / Watch / OVER-UTILISED), (4) the 3 biggest variances by RM. Add conditional formatting: green if utilisation < 80%, amber 80–100%, red > 100%.",
        "Forecast year-end utilisation for every initiative in the Budget_FY26 sheet using current run-rate (assume the same monthly burn). Flag any initiative projected to overshoot approved budget by >10% and suggest a re-allocation source (which under-utilised initiative could fund the gap). Output as a 3-column table: initiative, projected overshoot RM, suggested reallocation source.",
        "From the Approvals_Inbox sheet, build a Pending Approvals report grouped by initiative, showing total RM pending and count of items. Then cross-check against the Budget_FY26 sheet — for each initiative, tell me whether approving everything pending would push the initiative over budget. Suggest a triage order based on urgency × budget headroom.",
        "Create a budget vs actual chart by initiative for FY26 with budget as a translucent bar and actuals stacked. Add a horizontal target line at 95% utilisation. Title it \"Contoso Trade — FY26 Engagement Budget Position\"."
      ],
      "Copilot in Outlook": [
        "Find every email in my inbox from the past 14 days containing budget approval requests. Build a single table: requester, initiative, amount RM, date, current status (Pending/Approved/Rejected), and what they're waiting on from me. Sort by oldest pending first.",
        "Draft a budget approval request email to [Approver] for the Annual Dinner & Awards venue upgrade — additional RM 12,000 over the approved RM 80,000. Justification: 2 new branches added since FY26 budget set, expected attendance up 18%, locked-in F&B price advantage. Include a 1-line P&L impact, the impact of NOT approving (split into two cheaper venues), and a clear ask with a decision-by date."
      ],
      "M365 Copilot Chat": [
        "Using /Engagement-Budget-FY26.xlsx and my November 2026 budget approval emails, write the November consolidation report for the Head of HR. Sections: (1) headline numbers, (2) initiatives over 90% utilised with explanation, (3) initiatives under 40% utilised with reason and recommendation (continue / reduce / reallocate), (4) approvals pending action with owner, (5) ask of leadership. Keep it to one A4 page in plain English.",
        "Compare FY26 engagement spend vs FY25 actuals (file: /HR/Engagement-Budget-FY25-Final.xlsx). For each recurring initiative, compute YoY change and explain the top 3 movers."
      ],
      "Analyst agent": [
        "Analyst agent — using Engagement-Budget-FY26.xlsx (sheets: Budget, Actuals, BranchAllocation), reason step-by-step through the FY26 employee engagement budget. (1) Compute YTD utilisation by category (team-building, festive, recognition, wellness) and by branch. (2) Identify any branch whose festive spend is more than 1.5× the per-headcount average. (3) Forecast Dec spend assuming the run-rate of the last 3 months. (4) Recommend whether to reallocate any underspent category before year-end and quantify the headroom. Show your reasoning, not just the conclusions."
      ]
    },
    tip: "Pin the budget Excel file in <b>Copilot Chat</b> so you can ask cross-file questions like \"compare with last year's actuals\" and \"summarise the related approval emails in my inbox\" in a single conversation.",
    beyond: "<b>Beyond Copilot:</b> for real-time dashboards and digital approvals, layer <b>Power Automate</b> + <b>Power BI</b> + <b>Power Apps</b> on top of the same Excel data.",
    feasible: [
      "Forecasting and reconciling engagement spend across branches and quarters (Copilot in Excel + Analyst agent)",
      "Summarising approval email threads and surfacing pending items (Copilot in Outlook)",
      "Drafting budget memos and quarterly review decks (Copilot in Word / PowerPoint)",
      "Cross-file analysis of budget vs actuals pinned in Copilot Chat",
      "Multi-step variance reasoning with the Analyst agent across the budget workbook + approval-email summaries"
    ],
    notFeasible: [
      "Real-time approval workflow with audit trail — needs Power Automate + Power Apps",
      "Live dashboard for leadership consumption — needs Power BI",
      "Automatic GL posting to Finance system — needs Dynamics 365 / SAP integration"
    ],
    files: [
      { name: "Engagement-Budget-FY26.xlsx", file: "data/Engagement-Budget-FY26.xlsx", why: "Branch × quarter spend vs allocation for variance analysis and memos.", how: "Open in Excel and click Copilot.", useWith: ["Copilot in Excel", "Copilot in Outlook", "M365 Copilot Chat"] }
    ]
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
      { name: "M365 Copilot Chat", paid: true },
      { name: "Agent Builder", paid: true }
    
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
      { app:"M365 Copilot Chat", title:"Eligibility checks", desc:"Compare applications to eligibility criteria stored on SharePoint." },
      { app:"Agent Builder", title:"Build a Welfare Eligibility Checker agent", desc:"In Agent Builder, ground a self-serve agent on the Welfare Policy so staff get instant ✅/❌ answers with the cap, documents and clause cited — HR only handles the edge cases." }
    ],
    prompts: {
      "Copilot in Outlook": [
        "Find all emails received in the past 7 days containing the keyword \"welfare\" or attachments with welfare-form. Build a triage table: applicant, type of welfare (Hospitalisation, Bereavement, Marriage, Newborn, Education Aid, Natural Disaster), supporting docs attached (Y / Partial / N), date received, and how many days I've held it. Highlight any application > 5 working days old.",
        "Draft a polite \"missing documents\" email to [Applicant] for their [Type] welfare application dated [date]. Specify exactly which documents are still required per our Welfare Policy (e.g. for Hospitalisation: hospital bill + MC). Tone: warm and apologetic for the additional ask. Give a clear deadline of 7 working days and a contact for help."
      ],
      "Copilot in Excel": [
        "Cross-check /Welfare-Applications-Nov2026.xlsx Applications_Nov2026 against the Eligibility_Reference sheet. For each application, output: meets max amount? meets tenure requirement? has required docs? Compute an Eligibility column (Eligible / Pending Docs / Ineligible — with reason). Then produce a summary by category: total applied, total eligible, total RM eligible.",
        "Generate a welfare utilisation report for FY26 to date: total RM disbursed by category, by month, by department; average days from application to approval; top 3 categories by volume; top 3 by RM. Add one observation per section a reader could quote in a leadership memo.",
        "Build a forecast: at the current run-rate by category, will the FY26 welfare fund be exhausted before year-end? Show projected end-of-year position by category and recommend a rebalance if any category is set to overshoot."
      ],
      "M365 Copilot Chat": [
        "Summarise the Welfare Policy on SharePoint and tell me — in plain English — the eligibility rules for: (a) an employee with 8 months tenure applying for hospitalisation aid for a parent, (b) an employee with 4 years tenure applying for education aid for a child sitting SPM. Cite the policy clause for each.",
        "I have an unusual welfare application: an employee at Subang branch lost their home in flooding. Walk me through the policy applicable, the maximum support, the documents required, the approval level needed, and draft my reply email confirming next steps."
      ],
      "Agent Builder": [
        "Build a 'Welfare Eligibility Checker' agent in M365 Copilot Chat for Contoso Trade staff to self-serve. Ground it on Welfare-Policy-FY26.docx. Behaviour: ask the user 3 questions — (1) which welfare type (medical, hospitalisation, marriage, bereavement, newborn, education), (2) employee category (Confirmed / Probation / Contract), (3) any prior claims this calendar year. Then return: eligibility ✅/❌, the cap amount in MYR, supporting documents required, the SLA, and the exact policy clause cited. Always include the disclaimer: 'Final approval rests with HR.'"
      ]
    },
    tip: "Welfare cases are sensitive — pin the Welfare Policy in <b>Copilot Chat</b> so every reply is grounded on the latest version and respects tenure and category rules consistently.",
    beyond: "<b>Beyond Copilot:</b> a <b>Power Apps</b> digital form + <b>Power Automate</b> approval flow gives you the end-to-end self-service experience; use <b>Power BI</b> for the live welfare dashboard.",
    feasible: [
      "Drafting welfare letters (bereavement, hospitalisation, marriage) grounded on the Welfare Policy (Copilot in Word)",
      "Summarising welfare applications and eligibility checks against tenure / category rules (Copilot in Excel + Chat)",
      "Personalised acknowledgement emails to applicants (Copilot in Outlook)",
      "Pinning the Welfare Policy PDF in Copilot Chat so every response is consistent",
      "Building a 'Welfare eligibility checker' agent in M365 Copilot Chat (Agent Builder), grounded on the Welfare Policy — staff can self-serve eligibility questions"
    ],
    notFeasible: [
      "Self-service digital application form with eligibility logic — needs Power Apps / Microsoft Forms + Power Automate",
      "Automated approval routing with SLA tracking — needs Power Automate",
      "Live welfare-spend dashboard — needs Power BI"
    ],
    files: [
      { name: "Welfare-Applications-Nov2026.xlsx", file: "data/Welfare-Applications-Nov2026.xlsx", why: "November welfare applications to triage, eligibility-check and respond to.", how: "Open in Excel; pin together with the Welfare Policy in M365 Copilot Chat.", useWith: ["Copilot in Excel", "Copilot in Word", "Copilot in Outlook"] }
    ]
  },
  {
    id: "07-overtime",
    num: 7,
    title: "C&B — Overtime Analysis",
    priority: "Medium",
    fit: "GOOD",
    fitLabel: "Excellent Fit (Copilot in Excel + Analyst)",
    apps: [
      { name: "Copilot in Excel", paid: true },
      { name: "Analyst agent", paid: true },
      { name: "M365 Copilot Chat", paid: true },
      { name: "Researcher agent", paid: true }
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
      { app:"Analyst agent", title:"Multi-step reasoning", desc:"For deeper analysis (correlation with incentives, branch-level patterns), invoke the Analyst agent." },
      { app:"Researcher agent", title:"Benchmark OT externally (Frontier)", desc:"Run the Researcher agent for an industry view of OT intensity in Malaysian MSBs and any BNM/DOSH guidance — gives you a defensible target band for the next ManCom paper." }
    ],
    prompts: {
      "Copilot in Excel": [
        "Looking at /Overtime-Report-Nov2026.xlsx Overtime_Nov2026 sheet, build a monthly OT analysis with: (1) total OT hours and RM by department and branch, (2) top 10 employees by OT hours with their manager, (3) any employee whose OT exceeds 25% of contracted hours (a fatigue / mis-classification risk), (4) any non-approved OT entries flagged. Add a single-paragraph executive summary at the top.",
        "Compare November OT against the OT_Trend_3mo sheet (Aug–Oct average). For each department, compute MoM change vs the 3-month rolling average and flag any department with >20% increase. Suggest one likely root cause per flagged department based on what you'd expect (e.g. branch peak season, AML deadline, system downtime).",
        "Identify employees who appeared in the top 20 by OT hours for 3 consecutive months. List them with their average monthly OT, total OT pay YTD, and base salary — calculate OT as a percentage of base salary. Highlight any case where OT > 40% of base (a strong signal to revisit headcount or shift structure).",
        "Create a clustered chart of OT hours by branch and department for November, sorted descending by total. Add data labels in RM. Title \"Contoso Trade — November 2026 OT Distribution\". Make the chart fit in cell range A20:K40."
      ],
      "Analyst agent": [
        "Acting as a workforce analytics specialist, analyse correlation between OT hours and incentive payouts using /Overtime-Report-Nov2026.xlsx and /Payroll-Oct-vs-Nov-2026.xlsx. For each department, compute Pearson correlation between OT_Hours and Incentive amount, then segment employees into quadrants (High OT/High Incentive, High OT/Low Incentive, etc.) and explain what each quadrant likely indicates. Recommend two C&B policy adjustments based on the findings.",
        "Compare the OT distribution across our 7 branches over the last 3 months. Identify which branch is structurally over-reliant on OT (consistently in the top 25% of OT/headcount), and propose a 90-day remediation plan: shift redesign, headcount augmentation, or process change."
      ],
      "Researcher agent": [
        "Researcher agent — produce an industry benchmark for overtime intensity in Malaysian licensed remittance / money-services businesses. Cover: (1) typical OT hours per FTE per month for branch operations vs back-office, (2) prevailing OT-to-base-pay ratio cap before regulators flag fatigue risk, (3) any BNM or DOSH guidance on shift-work overtime. Critique your sources and rate confidence. Then suggest a Contoso Trade target range for FY27 across our 7 branches."
      ]
    },
    tip: "Convert Adrenalin exports to a Table (Ctrl+T) and rename the table (e.g. <span class='kbd'>tblOT_Nov</span>) — Copilot's answers improve significantly when the table has a meaningful name. Combine the OT file with the payroll file in one Copilot Chat for incentive correlation.",
    feasible: [
      "Branch-level OT trend analysis, outlier detection, top-spenders ranking (Copilot in Excel + Analyst agent)",
      "Cross-correlation of OT data with payroll and attendance files in Copilot Chat",
      "Drafting OT control memos and branch-manager nudge emails (Copilot in Word / Outlook)",
      "Generating OT review decks for the monthly HR scorecard (Copilot in PowerPoint)",
      "Benchmarking OT trends vs Malaysian financial services norms using the Researcher agent (cites public sources)"
    ],
    notFeasible: [
      "Hard-constraint shift optimisation that minimises OT — needs an optimisation solver (Azure ML, Gurobi)",
      "Live OT alerting when an employee crosses a threshold — needs Power Automate triggers on the HRMS",
      "Auto-block of OT in the time clock — needs configuration inside Adrenalin itself"
    ],
    files: [
      { name: "Overtime-Report-Nov2026.xlsx", file: "data/Overtime-Report-Nov2026.xlsx", why: "Monthly OT export — feed into Copilot in Excel for outliers, trends and incentive correlation.", how: "Open in Excel and click Copilot \u2014 and pin the file in M365 Copilot Chat for cross-file questions.", useWith: ["Copilot in Excel", "Analyst agent", "M365 Copilot Chat"] },
      { name: "Payroll-Oct-vs-Nov-2026.xlsx", file: "data/Payroll-Oct-vs-Nov-2026.xlsx", why: "Pair with the OT file in Copilot Chat to correlate OT cost with payroll movement.", how: "Open in Excel and click Copilot \u2014 and pin in M365 Copilot Chat.", useWith: ["Analyst agent", "M365 Copilot Chat"] }
    ]
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
        "From the Shift Master sheet, calculate coverage per shift × branch × day for the next 4 weeks. Compare against the demand forecast in the Demand sheet. Flag any cell where coverage / demand < 0.85 (under-resourced) or > 1.30 (over-resourced). Output a heat map and a top-10 list of the worst gaps.",
        "Looking at the Shift Master and the historical transaction-volume sheet, identify the two highest-demand hours per branch on weekdays vs weekends. Recommend a re-allocation of existing tellers (no new headcount) that would lift weekday peak coverage by at least 15% without dropping non-peak coverage below 1.0×.",
        "Build a fairness check: for each employee on rotational shifts, compute their share of late-evening (after 7pm) and weekend shifts in the last 90 days. Highlight anyone whose share is more than 1.4× the team median — a signal of unfair rota distribution.",
        "Suggest a revised shift template for KL HQ Customer Service: 35 staff, demand peaks 11am–2pm and 5pm–7pm, must maintain at least 3 supervisors on every shift, target average weekly hours = 45 (max 48). Output the proposed roster as a 7×3 grid."
      ],
      "M365 Copilot Chat": [
        "Compare November shift coverage against the customer transaction volume in /Branch-Volumes-Nov2026.xlsx. Where did we have over-staffing during low-volume hours and under-staffing during high-volume hours? Quantify the cost impact (over-staffing RM / day) and the customer-experience impact (estimated added wait time)."
      ]
    },
    beyond: "<b>Beyond Copilot:</b> shift optimisation with hard constraints requires <b>Azure ML</b> or scheduling solvers; or <b>Dynamics 365 Field Service</b> for full workforce scheduling.",
    feasible: [
      "Analysing existing rosters for coverage gaps, fairness, weekend distribution (Copilot in Excel)",
      "Drafting shift-policy documents and communication memos (Copilot in Word)",
      "Summarising scheduling complaints from email / Teams threads (Copilot Chat)"
    ],
    notFeasible: [
      "Generating an optimised roster that respects all hard constraints (manpower, certifications, statutory rest, AMLA-specific cover) — Copilot is NOT an optimisation engine. Needs Microsoft Shifts (manual), Dynamics 365 Field Service, or a dedicated WFM tool",
      "Real-time shift swaps and approvals — needs Microsoft Shifts in Teams + Power Automate"
    ],
    files: [
      { name: "Branch-Shift-Roster-Nov2026.xlsx", file: "data/Branch-Shift-Roster-Nov2026.xlsx", why: "Two-week roster across 7 branches with AML-cert and constraint sheet — Copilot in Excel can audit fairness, gaps and constraint breaches.", how: "Open in Excel and click Copilot \u2014 the second sheet has the constraint rules.", useWith: ["Copilot in Excel", "M365 Copilot Chat"] }
    ]
  },
  {
    id: "09-payroll",
    num: 9,
    title: "C&B — Payroll Discrepancy Analysis",
    priority: "High",
    fit: "GOOD",
    fitLabel: "Excellent Fit (Copilot in Excel + Analyst)",
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
        "Looking at /Payroll-Oct-vs-Nov-2026.xlsx, run a payroll discrepancy review for November. For each EmployeeID compute the Net variance vs October and flag entries where: |variance| > 10% OR (variance > 0 AND Base unchanged AND Allowance unchanged AND OT < OT_Oct) — i.e. an unexplained increase. Output: EmployeeID, Name, Department, Net_Oct, Net_Nov, Variance_%, Suspected_Reason (Raise / OT / Incentive / Allowance / Deduction change / Unexplained), Action.",
        "Identify all employees with a base salary change month-over-month. For each, list previous base, new base, %change, and whether the change is consistent with our standard increment policy (annual cycle in March / promotion only). Flag anything that doesn't fit those two patterns.",
        "For the Branch Operations department, compare November payroll totals vs trailing 3-month average across all components (base, allowance, incentive, OT, deductions). For each component compute the variance, and write a 3-bullet narrative explaining the largest swings.",
        "Build an audit trail report: for each flagged anomaly, suggest the source-of-truth document I should check to validate (e.g. promotion letter, OT approval log, incentive scheme entitlement). Include the suggested check column."
      ],
      "Analyst agent": [
        "Step through a structured payroll analysis for November using /Payroll-Oct-vs-Nov-2026.xlsx and /Overtime-Report-Nov2026.xlsx. (1) Reconcile OT_Nov in payroll against OT_Amount_RM in the OT report — flag any mismatch > RM 50. (2) For employees with Incentive > RM 1,000, validate against typical scheme caps for their role. (3) Compute total payroll uplift MoM and decompose by driver (base / allowance / incentive / OT / deduction). (4) Produce a one-page management commentary suitable for the CFO.",
        "Investigate the correlation between incentive payouts and OT hours by department over the last 3 months. Hypothesis: high OT may be a proxy for high incentive earners (sales-driven). Confirm or refute with data, and recommend whether the C&B team should de-link the two."
      ]
    },
    tip: "Anchor month-on-month comparisons by EmployeeID, not by name — Copilot's accuracy improves when keys are unique. Always include a \"Suspected_Reason\" column so the auditor's review path is obvious.",
    feasible: [
      "Month-on-month payroll variance analysis by employee, branch, component (Copilot in Excel + Analyst agent)",
      "Drafting auditor-ready discrepancy reports with reason codes (Copilot in Word)",
      "Summarising payroll exceptions and threshold breaches in Copilot Chat",
      "Generating leadership decks on payroll cost trends (Copilot in PowerPoint)"
    ],
    notFeasible: [
      "Automated reconciliation between Adrenalin payroll and bank file — no certified Adrenalin Power Automate connector; needs a custom connector / middleware",
      "Statutory submission generation (EPF, SOCSO, EIS, LHDN) — handled by Adrenalin / payroll bureau, not Copilot",
      "Real-time fraud detection — needs Azure ML or a fraud-detection platform"
    ],
    files: [
      { name: "Payroll-Oct-vs-Nov-2026.xlsx", file: "data/Payroll-Oct-vs-Nov-2026.xlsx", why: "Side-by-side October vs November payroll for variance, anomaly and discrepancy reporting.", how: "Open in Excel and click Copilot \u2014 and pin in M365 Copilot Chat.", useWith: ["Copilot in Excel", "Analyst agent", "Copilot in Word"] }
    ]
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
      { name: "M365 Copilot Chat", paid: true },
      { name: "Researcher agent", paid: true }
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
      { app:"Copilot in PowerPoint", title:"Budget review deck", desc:"Generate the budget review deck for ManCom from the workbook." },
      { app:"Researcher agent", title:"Pull market salary movement (Frontier)", desc:"Researcher agent — benchmark FY27 increment and bonus trends for Malaysian non-bank FIs (general / compliance / tech), cited and critiqued, to anchor the budget narrative." }
    ],
    prompts: {
      "Copilot in Excel": [
        "Build the FY27 salary budget from /Payroll-Oct-vs-Nov-2026.xlsx. Assumptions: 5% across-the-board merit increment, 7% for top performers (top quartile of last appraisal), 3% statutory increase for branch operations bands G1–G3, +10 new hires in Compliance at average RM 7,500/month, +6 new hires in Tech at RM 9,500/month, EPF 13% employer contribution, SOCSO and EIS at statutory rates. Output a department × month matrix for FY27 plus a summary tab with totals and YoY change vs FY26.",
        "Run three scenarios side-by-side: Conservative (3% merit, no new hires), Base (5% merit + planned new hires), Stretch (7% merit + new hires + retention bonus pool of RM 600k). For each, show total annual cost, YoY change vs FY26, and average cost per FTE. Add a recommendation paragraph based on a target affordability of <58% of last year revenue.",
        "Reformat the November payroll export into the FY27 budget template on the second sheet, mapping by EmployeeID. Anywhere a mapping fails, list the unmatched records in a third sheet with a one-line probable-cause note.",
        "Compute compa-ratios per role and band (employee base ÷ midpoint). Identify employees < 80% compa-ratio (under-paid for band) and recommend the budget impact of bringing the bottom 20 to 90% compa-ratio."
      ],
      "Copilot in PowerPoint": [
        "Build a 6-slide FY27 Salary Budget review deck for ManCom from /HR/FY27-Budget.xlsx. Slides: 1) Cover, 2) Headline numbers (FY26 actual vs FY27 proposed, % change, key drivers), 3) Bridge waterfall (merit, statutory, new hires, retention), 4) Three-scenario comparison, 5) Compa-ratio gaps and remediation cost, 6) Asks of ManCom (decisions, sign-off, risks). Tone: factual; one chart per slide; use Contoso Trade teal as the single accent."
      ],
      "M365 Copilot Chat": [
        "Acting as our C&B lead, draft a 1-page memo to the CFO defending the FY27 salary budget submission. Cover affordability vs revenue, market benchmark commentary (use general public knowledge of Malaysia FSI salary movement), retention risk if we go below market, and the 3 trade-offs we're proposing. Keep it under 400 words."
      ],
      "Researcher agent": [
        "Researcher agent — benchmark FY27 salary increment percentages and bonus multiples for Malaysian non-bank financial institutions (MSBs, e-money issuers, remittance). Distinguish: (1) general workforce, (2) compliance / AML talent, (3) tech / digital talent. Source from credible publications (Mercer, Willis Towers Watson, Korn Ferry, MEF) and cite. Critique any data gaps and give a recommended Contoso Trade increment band with justification."
      ]
    },
    feasible: [
      "Salary increment scenario modelling and pivot summaries (Copilot in Excel + Analyst agent)",
      "Drafting board-paper narratives explaining each scenario (Copilot in Word)",
      "Generating CFO-ready scenario decks with charts (Copilot in PowerPoint)",
      "Market salary research using the Researcher agent (paid Frontier add-on)",
      "Pulling Malaysia FSI salary movement signals (BNM annual report, EPF data, MEF Salary Survey commentary) with the Researcher agent to inform the budget narrative"
    ],
    notFeasible: [
      "Pulling live market salary benchmarks from Mercer / Korn Ferry / WTW — needs the licensed dataset",
      "Approval workflow with finance + CEO sign-off — needs Power Automate",
      "Pushing approved increments back into Adrenalin — needs HRMS API integration"
    ],
    files: [
      { name: "Payroll-Oct-vs-Nov-2026.xlsx", file: "data/Payroll-Oct-vs-Nov-2026.xlsx", why: "Current payroll baseline — Copilot projects FY27 scenarios from this file.", how: "Open in Excel and click Copilot \u2014 and pin in M365 Copilot Chat.", useWith: ["Copilot in Excel", "Copilot in PowerPoint", "M365 Copilot Chat"] },
      { name: "Engagement-Budget-FY26.xlsx", file: "data/Engagement-Budget-FY26.xlsx", why: "Optional: pin alongside payroll for total people-cost view.", how: "Open in Excel and click Copilot.", useWith: ["Copilot in Excel", "M365 Copilot Chat"] }
    ]
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
        "Reconcile /Attendance-vs-Leave-Nov2026.xlsx Attendance_Nov against UnpaidLeave_Approved by EmployeeID. For each absence in Attendance, check if there is a matching approved unpaid leave on the same date. Output the unmatched absences (i.e. absent without approved leave) as a clean list with EmployeeID, Name, Department, Date, and a Suggested_Action (Counsel / Deduct from pay / Pending evidence).",
        "Calculate, by department, the number of unexplained absences in the month and the equivalent salary deduction (1 day = base salary / 22). Sort departments descending and write a 3-bullet exec summary on the most affected teams.",
        "Build an attendance risk score for each employee: +1 per unexplained absence, +2 per 3 consecutive unexplained absences, +1 per 5+ late arrivals. Rank top 30 and add a column suggesting the next HR action (informal counselling / formal warning / SC letter).",
        "Cross-reference attendance against the OT report — any employee with high OT in the same week as unexplained absences? That's a fatigue + integrity flag worth a manager conversation."
      ],
      "M365 Copilot Chat": [
        "Acting as my HR Ops co-pilot, prepare the November attendance package for payroll cut-off: (1) the unmatched absences list, (2) the deduction summary by department, (3) draft email templates to each branch manager listing their team's exceptions for sign-off within 24 hours, (4) a short note to the Payroll team confirming what to deduct."
      ],
      "Researcher agent": [
        "Researcher agent — what does the Malaysian Employment Act 1955 (as amended 2022) say about: (1) treatment of unauthorised absence vs medical leave without MC, (2) salary deduction rules for unpaid leave, (3) procedural requirements before disciplinary action for habitual lateness. Cite the exact sections and any case law. Critique your answer and flag where I should ask employment counsel."
      ]
    },
    feasible: [
      "Reconciling attendance vs leave records and surfacing mismatches by employee / date (Copilot in Excel)",
      "Drafting clarification emails to line managers (Copilot in Outlook)",
      "Summarising attendance-anomaly trends per branch (Copilot Chat across files)"
    ],
    notFeasible: [
      "Live attendance feed from biometric / time-clock devices — handled by Adrenalin's attendance module",
      "Auto-application of leave when an unrecorded absence is detected — needs Power Automate + HRMS connector",
      "Geofencing or facial-recognition validation — needs the Adrenalin mobile app or a third-party tool"
    ],
    files: [
      { name: "Attendance-vs-Leave-Nov2026.xlsx", file: "data/Attendance-vs-Leave-Nov2026.xlsx", why: "Attendance log vs leave records — Copilot reconciles by EmployeeID + date and surfaces mismatches.", how: "Open in Excel and click Copilot.", useWith: ["Copilot in Excel", "Copilot in Outlook", "M365 Copilot Chat"] }
    ]
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
      { name: "M365 Copilot Chat", paid: true },
      { name: "Researcher agent", paid: true }
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
      { app:"M365 Copilot Chat", title:"Calendar & path", desc:"Ask Copilot to draft a training calendar based on the gaps and your existing programmes." },
      { app:"Researcher agent", title:"Scan the regulatory + risk landscape (Frontier)", desc:"Use the Researcher agent to surface FY26 must-have training topics for the remittance / e-money sector (BNM mandates + emerging fraud), then map to the 10 Contoso Trade departments." }
    ],
    prompts: {
      "Copilot in Excel": [
        "From /TNA-FY26.xlsx Survey_Results, compute by department: (1) median self-rating vs median manager-rating per skill, (2) the 3 skills with the largest manager-self gap (managers rate lower — perceived weakness) per department, (3) the 3 skills employees feel weakest in (lowest self-rating) per department. Output a single comparison view I can share with each Department Head.",
        "Looking at the Skill_Gap_Summary sheet, rank skills by composite priority score = (Average GapScore × CriticalRoles count). Highlight the top 10 priority skills enterprise-wide. For each, suggest the most cost-effective programme format (e-Learning / Workshop / Blended / OJT) using the Programmes column.",
        "Cross-reference skill gaps with /HR-Q1-Analysis.xlsx — for any department with attrition > 8%, list their top 3 skill gaps. Hypothesis: undeveloped skill = retention risk. Output a focused intervention list of department × skill × proposed programme."
      ],
      "Copilot in Word": [
        "Draft the FY26 Contoso Trade Training Needs Assessment report grounded on /TNA-FY26.xlsx and the Competency Framework on SharePoint. Sections: (1) Executive summary (½ page), (2) Methodology (survey + manager calibration), (3) Enterprise top 10 skill gaps with evidence, (4) Department deep-dive (one paragraph per department), (5) Recommended FY26 programmes with format, target audience and duration, (6) Budget estimate at HRDC-claimable rates, (7) Success metrics and learning impact measurement plan. Tone: professional, evidence-led."
      ],
      "M365 Copilot Chat": [
        "Build the FY26 Training Calendar covering the top 5 enterprise skill gaps identified in /TNA-FY26.xlsx. For each programme, propose: title, target cohort and size, format, duration, suggested vendor type (in-house SME / external trainer / e-Learning vendor), HRDC-claimable status, and a draft month for delivery. Spread programmes evenly across H1 and H2 and avoid overlap with month-end branch peaks (28th–7th of each month).",
        "I need to sell our FY26 L&D plan to the Head of HR. Draft a 90-second talking point I can use, anchored on: top 3 priority skill gaps (with one data point each), expected business outcome per programme, total HRDC-claimable spend, and the one risk if we don't act."
      ],
      "Researcher agent": [
        "Researcher agent — what are the FY26 must-have training topics for a Malaysian remittance / e-money business? Cover: (1) BNM regulatory mandates (AMLA, DNFBP, e-KYC, sanctions screening), (2) emerging risks (deepfake fraud, mule accounts, crypto on-ramp), (3) soft-skill themes peers are investing in (frontline customer de-escalation, branch sales). Cite sources, critique your confidence, and propose a Contoso Trade FY27 curriculum aligned to our 10 departments."
      ]
    },
    beyond: "<b>Beyond Copilot:</b> personalised learning paths and skill recommendations are best delivered by <b>Microsoft Viva Learning + Viva Skills</b> integrated with LinkedIn Learning.",
    feasible: [
      "Consolidating Training-Needs-Analysis responses from Excel/Forms (Copilot in Excel)",
      "Cross-referencing TNA inputs with skills gaps surfaced by KPI / appraisal data in Copilot Chat",
      "Drafting the annual L&D plan document and budget paper (Copilot in Word)",
      "Researching market training providers / certification benchmarks (Researcher agent)"
    ],
    notFeasible: [
      "Personalised, AI-curated learning paths per employee — needs Viva Learning + Viva Skills",
      "Live skills-gap dashboard mapped to roles — needs Viva Skills + Power BI",
      "Auto-enrolment in mandatory courses — needs Viva Learning or an LMS"
    ],
    files: [
      { name: "TNA-FY26.xlsx", file: "data/TNA-FY26.xlsx", why: "Training Needs Analysis returns from line managers — consolidate, theme and prioritise.", how: "Open in Excel and click Copilot.", useWith: ["Copilot in Excel", "Copilot in Word", "M365 Copilot Chat"] }
    ]
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
      { name: "M365 Copilot Chat", paid: true },
      { name: "Agent Builder", paid: true }
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
      { app:"M365 Copilot Chat", title:"Quizzes & microlearning", desc:"Generate quiz banks and 5-minute microlearning summaries from the source material." },
      { app:"Agent Builder", title:"Build the AMLA Refresher Quizzer agent", desc:"In Agent Builder, ground a quiz agent on the AML Policy so any staff member can drill themselves on STR / CDD / EDD whenever they want, with sources cited." }
    ],
    prompts: {
      "Copilot in Word": [
        "Using /AML-Policy-v4.2.docx as the source of truth, design a 4-module training programme titled \"AML Red Flags for Remittance Frontliners\" — 90 minutes total, blended delivery, target audience: 350 tellers and CS executives across 7 branches. For each module produce: learning objectives (2–3, in observable verbs), key concepts (3–5 with one Contoso Trade example each), an interactive activity (group / role-play / case study) with timing, and assessment hooks. Tone: practical, scenario-led, plain English suitable for staff with mixed English fluency.",
        "Draft a 25-page participant handbook for the AML Red Flags programme. Use clear headings, callout boxes for \"Real Contoso Trade case examples\" (anonymised), red-flag checklists, decision trees for \"Do I file an STR?\", a glossary, and an end-of-module 5-question quick check per module. Write it for a teller with 1 year experience.",
        "Create a facilitator guide for the AML Red Flags workshop. For each slide / activity include: timing, facilitator script (key points to make, not verbatim), expected questions and ideal answers, traps to avoid, and how to handle the participant who asks \"what about [edge case]?\". End with debrief questions."
      ],
      "Copilot in PowerPoint": [
        "Build a 12-slide AML Red Flags workshop deck from /Training/AML-Outline.docx. Structure: 1) Cover, 2) Why this matters (a recent BNM enforcement headline as analogy), 3) The 6 red flags (one slide each — flag, why it matters, Contoso Trade scenario), 4) Decision tree: when to escalate, 5) Interactive case study slide, 6) STR filing in 4 steps, 7) Q&A. One image-led slide per concept, max 30 words body, our teal as accent. End every concept slide with a single \"if you remember one thing\" line.",
        "Take the AML deck and adapt it for two delivery modes: (a) instructor-led 60-min version with activity slides retained; (b) self-paced e-Learning 20-min version where activity slides become reflection prompts. Output the changes only."
      ],
      "M365 Copilot Chat": [
        "Generate a 15-question quiz bank based on /AML-Policy-v4.2.docx. Mix: 5 multiple-choice on definitions and obligations, 5 scenario-based (\"a customer brings RM 12,000 in MYR 50 notes and asks to remit to…\") with single-best-answer plus rationale, 5 true/false on STR filing timelines and AMLA 2001. For each question include the source clause from the policy.",
        "Convert the AML Policy into 5 microlearning bites of 200 words each suitable for a 3-minute read on mobile, one per red flag category. Each bite must include: a plain-English explanation, a Contoso Trade-relatable scenario (KL HQ, Subang, Penang…), and a single \"action when you see it\" line.",
        "Curate 5 external resources to supplement our AML training — official BNM guidance, FATF publications, and ACAMS or ICA practitioner content. Provide title, source, link, and a 2-line relevance note per resource. Avoid paywalled vendor content."
      ],
      "Agent Builder": [
        "Build an 'AMLA Refresher Quizzer' agent in M365 Copilot Chat. Ground it on AML-Policy-v4.2.docx. Behaviour: (1) ask the user to choose a difficulty (Easy / Medium / Hard) and a topic (CDD, EDD, Tx Monitoring, STR, Sanctions, Records); (2) ask one multiple-choice question at a time, mark it, cite the exact policy section behind the answer; (3) after 5 questions, give a score and recommend which sections to re-read. Conversation starters: 'Quick 5-question STR quiz', 'Hard CDD scenario', 'Sanctions screening basics'."
      ]
    },
    feasible: [
      "Drafting compliance / soft-skills training content end-to-end (Copilot in Word)",
      "Generating speaker-notes-rich PowerPoint decks with on-brand visuals (Copilot in PowerPoint + Designer image generation)",
      "Producing facilitator guides, learner workbooks and assessment questions (Copilot in Word)",
      "Drafting Microsoft Forms quizzes and post-course surveys",
      "Summarising regulatory updates (BNM circulars, AMLA amendments) into refresher modules",
      "Building an 'AMLA Refresher Quizzer' agent in M365 Copilot Chat (Agent Builder) grounded on the AML Policy — staff can drill themselves any time"
    ],
    notFeasible: [
      "Interactive SCORM-compliant e-learning modules — needs Articulate / iSpring / a content authoring tool",
      "Adaptive learning that personalises difficulty per learner — needs Viva Learning + LMS analytics",
      "Translation into multiple languages with on-brand voice-over — needs Azure AI Speech / Translator"
    ],
    files: [
      { name: "AML-Policy-v4.2.docx", file: "data/AML-Policy-v4.2.docx", why: "Source policy to convert into AMLA refresher training (Word draft → PowerPoint deck → Forms quiz).", how: "Open in Word and click Copilot \u2014 or attach in M365 Copilot Chat as grounding for prompts.", useWith: ["Copilot in Word", "Copilot in PowerPoint", "M365 Copilot Chat"] },
      { name: "Employee-Handbook-v3.1.docx", file: "data/Employee-Handbook-v3.1.docx", why: "Section 7 (Code of Conduct) — convert to anti-bribery / conflict-of-interest training content.", how: "Open in Word for clause lookup; attach in M365 Copilot Chat to ground letter drafts.", useWith: ["Copilot in Word", "Copilot in PowerPoint"] }
    ]
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
      { name: "M365 Copilot Chat", paid: true },
      { name: "Cowork (Frontier preview)", paid: true }
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
      { app:"M365 Copilot Chat", title:"Feedback & report", desc:"Aggregate feedback responses and generate the post-training report." },
      { app:"Cowork (Frontier preview)", title:"Run the session-day choreography", desc:"Cowork sends the calendar invite, books the room, sends the 24-hour Teams reminder, and posts the post-course survey link — pausing for your approval before each external send." }
    ],
    prompts: {
      "Copilot in Outlook": [
        "Draft a nomination email to all branch managers for the AML Red Flags refresher. Include: programme value (one line), target audience (tellers + CS execs with >6 months tenure), 3 dates per branch with capacity per session, the pre-read (15-min microlearning + the 1-page red flag checklist), nomination cut-off (10 working days before each session), and how to nominate (replying with a name list). Tone: friendly, clearly action-oriented. Add a calculation table showing attendance compliance status by branch as of today.",
        "Draft a 3-touch reminder sequence for nominated participants: T-7 days (welcome with pre-read), T-1 day (final logistics + Teams link / venue), T+0 (morning-of nudge with a single \"see you at 9am\" line). Each email under 90 words.",
        "Draft a chase email to branch managers who have not nominated within 7 days of cut-off. Tone: warm but firm. Include the compliance risk of not training their team, the next available alternative dates, and offer a 5-minute call to discuss."
      ],
      "Copilot in Teams": [
        "Recap today's AML Red Flags session. Capture: (1) attendees (mark anyone who joined late or left early), (2) topics covered with timing, (3) participant questions (verbatim) and the answers given, (4) any policy ambiguities raised that need follow-up with Compliance, (5) action items for the facilitator (slide updates, reference additions), (6) live poll results if any. Output as Markdown for OneNote.",
        "From this training session recording, generate three deliverables: a 5-minute microlearning recap script, a 3-question knowledge-check the participants can take post-session, and a 1-paragraph LinkedIn post our Head of L&D can publish summarising the session value (no internal data)."
      ],
      "M365 Copilot Chat": [
        "Aggregate feedback from /Training/AML-Feedback.xlsx (3 sessions, 87 respondents). Produce: (1) NPS-style score for the programme, (2) top 3 themes participants liked, (3) top 3 themes for improvement (with verbatim quotes), (4) facilitator effectiveness score per facilitator, (5) actions for the next cohort. Then draft a 200-word post-training report for the Head of HR.",
        "Compile the FY26 L&D delivery dashboard from across our training files: total programmes delivered, total head-count trained, attendance rate, average NPS, HRDC claimed RM, top themes from feedback. Format as a 1-page brief I can paste into the next ManCom pack."
      ],
      "Cowork (Frontier preview)": [
        "Cowork — for the AMLA Refresher session on 18-Nov-2026, 09:00–12:30 at Bangsar HQ Training Room: (1) send the Outlook calendar invite to all 28 enrolled staff with the joining instructions and pre-read; (2) book Training Room 2 + projector via the Resource mailbox; (3) 24h before, send a Teams reminder with the link to the pre-read; (4) on the day, post a thank-you Teams message with the link to the post-course survey. Pause for my approval before each external send."
      ]
    },
    feasible: [
      "Drafting joining instructions, calendar invites and pre-read emails (Copilot in Outlook)",
      "Co-pilot in the live training room — meeting recap, action items, Q&A summary (Copilot in Teams)",
      "Auto-generating a training summary deck and certificate-of-attendance template (PowerPoint / Word)",
      "Summarising learner chat questions during a webinar (Copilot in Teams)",
      "Drafting follow-up nudges to no-shows (Copilot in Outlook)",
      "Coordinating room booking, joining instructions, no-show nudges and post-course surveys with Cowork (Frontier preview)"
    ],
    notFeasible: [
      "Self-serve LMS catalogue, enrolments and CPD tracking — needs Viva Learning or an LMS",
      "Automated reminder cadence with escalation — needs Power Automate",
      "Digital attendance via QR / biometric — needs a separate event-management tool"
    ],
    files: []
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
      { name: "M365 Copilot Chat", paid: true },
      { name: "Analyst agent", paid: true }
    ],
    pain: "Linking learning to business KPIs and impact measurement is difficult and mostly manual.",
    pains: [
      "No link between training and KPI impact",
      "Manual cost-per-employee calculations",
      "No predictive view of training ROI"
    ],
    expected: "Predictive analytics for training impact on productivity and retention.",
    flow: [
      { app:"Copilot in Excel", title:"Basic analytics", desc:"Compute completion rates, score deltas, training-cost-per-head, hours by department." },
      { app:"Analyst agent", title:"Reason through the ROI question (Frontier)", desc:"Analyst agent computes NPS by course/trainer, correlates attendance with downstream OT-quality issues, and recommends which FY27 courses to drop / repeat / redesign — assumptions shown." }
    ],
    prompts: {
      "Copilot in Excel": [
        "Build the FY26 L&D ROI dashboard from /HR/Training-Records-FY26.xlsx. Compute: (1) completion rate by programme and department, (2) average pre vs post assessment score uplift per programme, (3) training cost per head (claimable vs net), (4) training hours per FTE by department, (5) the gap to the 40-hour-per-FTE target. Highlight any department <20 hours/FTE. Output as a single dashboard view I can present to the Head of HR.",
        "Cross-reference training completion against /Disciplinary-Cases-2026.xlsx — for the AML Red Flags programme, did employees who completed the training have fewer AML/KYC-related cases in the following 6 months? Quantify if possible (with the caveat that correlation isn't causation). If sample size is too small, say so explicitly.",
        "From the feedback Excel, segment respondents into Promoters / Passives / Detractors and identify which programme attribute (content / facilitator / logistics / relevance) most strongly drives the rating. Suggest the one biggest ROI lever to pull next quarter."
      ],
      "M365 Copilot Chat": [
        "Acting as our L&D analytics partner, draft a 1-page \"FY26 Learning Impact Story\" for the Head of HR. Anchor on: total invested RM, claimable RM recovered, headcount reached, score uplift, three operational outcomes the training likely contributed to (with caveat language), and three priorities for FY27. Keep tone confident but evidence-honest."
      ],
      "Analyst agent": [
        "Analyst agent — using LD-Feedback-FY26-Q3.xlsx, reason step-by-step on training ROI: (1) compute Net Promoter Score per course and per trainer, (2) correlate course attendance with subsequent OT-related quality issues for the same employees (use Overtime-Report-Nov2026.xlsx where IDs match), (3) identify the 3 best-ROI courses and the bottom 2, (4) recommend which courses to drop, repeat or redesign for FY27. Show your assumptions and the Pearson coefficient where relevant."
      ]
    },
    beyond: "<b>Beyond Copilot:</b> predictive ROI requires <b>Viva Insights + Viva Learning</b> for productivity correlation, plus <b>Power BI</b> for the dashboard. <b>Azure ML</b> can model retention impact of L&D investment.",
    feasible: [
      "Pre vs post-assessment score comparison and learning-effectiveness analysis (Copilot in Excel)",
      "Summarising learner feedback (Forms / surveys) into themes (Copilot in Excel + Chat)",
      "Drafting the ROI narrative report for L&D Council (Copilot in Word)",
      "Generating the quarterly L&D ROI deck (Copilot in PowerPoint)",
      "Reasoning across pre/post scores + course costs + TNA needs with the Analyst agent to explain why one course outperformed another"
    ],
    notFeasible: [
      "Correlating training with productivity, retention or revenue impact — needs Viva Insights + Power BI",
      "Predictive ROI modelling — needs Azure ML / Fabric",
      "Automated Kirkpatrick Level-3/4 tracking with manager check-ins — needs Viva Glint + a structured follow-up workflow"
    ],
    files: [
      { name: "LD-Feedback-FY26-Q3.xlsx", file: "data/LD-Feedback-FY26-Q3.xlsx", why: "Pre/post scores, satisfaction and course costs — Copilot computes effectiveness, NPS and ROI per course.", how: "Open in Excel and click Copilot.", useWith: ["Copilot in Excel", "Copilot in Word", "Copilot in PowerPoint"] },
      { name: "TNA-FY26.xlsx", file: "data/TNA-FY26.xlsx", why: "Pair with feedback to assess: did the training plan address the identified needs?", how: "Open in Excel and click Copilot.", useWith: ["Copilot in Excel", "M365 Copilot Chat"] }
    ]
  }
];
