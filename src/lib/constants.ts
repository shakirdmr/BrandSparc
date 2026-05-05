export const SITE = {
  name: "Brandsparc",
  url: "https://brandsparc.com",
  email: "info@brandsparc.com",
  phone: "+9596314741",
  addressUS: "129 4th Street, Brooklyn, New York 11232",
  addressIN: "Srinagar, Jammu & Kashmir, India",
} as const;

export const HERO = {
  eyebrow: "AI Automation Agency /  US-Based",
  h1: [
    { text: "We Automate",    muted: true  },
    { text: "Your Business.", muted: false },
  ],
  description:
    "We build AI agents, voice bots, and automated workflows that help your business grow smarter, scale faster, and operate 24/7 — fully built and managed by us.",
  ctaPrimary:   { href: "#book",     label: "Free Consultation" },
  ctaSecondary: { href: "#services", label: "See How It Helps My Business" },
} as const;

export const SOCIAL_PROOF = {
  eyebrow: "Real Results",
  heading: "Trusted by Businesses Around the World",
  subheading: "Numbers that reflect real projects, real clients, and real outcomes.",
  stats: [
    { value: 150, suffix: "+", label: "Projects Delivered" },
    { value: 200, suffix: "+", label: "Happy Customers" },
    { value: 80,  suffix: "+", label: "Business Collaborations" },
    { value: 4.8, suffix: "",  label: "Average Trust Score" },
  ],
  testimonials: [
    {
      quote: "Brandsparc's AI solutions enabled us to scale faster than we thought possible. What used to take our team days now happens automatically in minutes. The ROI was evident within the first month.",
      name: "Sajjad Hussain",
      title: "CEO & Founder",
      initials: "SH",
      color: "#1D72F3",
    },
    {
      quote: "The AI CRM software Brandsparc built transformed how we manage leads. We went from manually tracking prospects in spreadsheets to a fully automated pipeline. Conversion rates are up significantly.",
      name: "Rafa Braz",
      title: "CEO, IBRA Career Management",
      initials: "RB",
      color: "#00D4A8",
    },
    {
      quote: "Our new website is exactly what we needed — modern, fast, and designed with our customers in mind. We've seen a measurable increase in inquiries since launch.",
      name: "Aabid Ahanger",
      title: "Tour & Travel Manager",
      initials: "AA",
      color: "#a855f7",
    },
    {
      quote: "Since Brandsparc optimised our site, it attracts serious buyers and investors instead of casual browsers. The quality of inquiries has completely changed. Worth every dollar.",
      name: "Yahya Mujtaba",
      title: "Real Estate Founder",
      initials: "YM",
      color: "#f97316",
    },
  ],
} as const;

export const PAIN_POINTS = {
  eyebrow: "Problem & Solution",
  heading: "Where Your Business Is Losing Right Now",
  subheading: "And exactly how we fix it.",
  problems: [
    {
      title: "Hours lost to manual, repetitive tasks",
      description: "Your team spends the day copy-pasting data, chasing approvals, and doing work that should run on its own.",
    },
    {
      title: "Leads going cold from slow follow-ups",
      description: "Every hour without a response is a lost deal. Manual outreach can't keep up with the volume your business needs.",
    },
    {
      title: "Paying salaries for automatable work",
      description: "Full-time staff handling data entry, scheduling, and reporting — tasks AI can do faster, cheaper, and without errors.",
    },
    {
      title: "Operations that break when you scale",
      description: "The moment business picks up, your processes fall apart. Growth shouldn't mean chaos — but without systems, it does.",
    },
  ],
  solutions: [
    {
      title: "AI workflows that run your ops 24/7",
      description: "We map your manual processes and replace them with intelligent automations that run around the clock — no supervision needed.",
    },
    {
      title: "Automated follow-ups that never miss a lead",
      description: "AI-powered CRM sequences respond instantly, nurture leads over time, and book calls — all without your team lifting a finger.",
    },
    {
      title: "AI agents at a fraction of the cost",
      description: "Deploy voice agents, chatbots, and workflow bots that handle the volume of a full team — for less than one salary.",
    },
    {
      title: "Scalable systems built to grow with you",
      description: "Everything we build is designed to handle 10x the volume from day one. When you grow, your systems grow with you.",
    },
  ],
} as const;

export const HOW_IT_WORKS = {
  eyebrow: "The Process",
  heading: "From First Call to Full\nAutomation in Weeks",
  steps: [
    {
      number: "01",
      title: "Free Automation Audit",
      description: "We start with a free 30-minute call to understand your operations. You'll walk away with a written audit identifying your top 3 automation opportunities — no commitment required.",
      detail: "30-min call · Written audit delivered · Zero obligation",
    },
    {
      number: "02",
      title: "Build Your AI Stack",
      description: "Our team designs, builds, and integrates your custom AI workflows, voice agents, or software. Every system is tested end-to-end before it ever touches your business.",
      detail: "Custom-built · Fully integrated · Tested before go-live",
    },
    {
      number: "03",
      title: "Launch, Automate & Grow",
      description: "We deploy everything live, onboard your team, and stay on to monitor and optimise. Your systems get smarter over time — and your team gets their hours back.",
      detail: "Live deployment · Team onboarding · Ongoing optimisation",
    },
  ],
} as const;

export const SERVICES = {
  eyebrow: "What We Build",
  heading: "AI Solutions That Run Your\nBusiness While You Sleep",
  cards: [
    {
      icon: "Cpu",
      title: "AI Automation & Workflows",
      description: "We map your manual processes and replace them with intelligent, end-to-end automations — from data entry to approvals, running 24/7 without supervision.",
      highlight: true,
    },
    {
      icon: "Mic",
      title: "AI Voice Agents",
      description: "Custom voice bots that answer calls, qualify leads, and book appointments around the clock — trained on your business, improving over time.",
      highlight: false,
    },
    {
      icon: "GitBranch",
      title: "CRM & Workflow Automation",
      description: "Connect your CRM, email, and sales tools into one seamless system. No more manual follow-ups or lost leads — everything flows automatically.",
      highlight: false,
    },
    {
      icon: "Code2",
      title: "Custom AI Software",
      description: "Bespoke dashboards, internal tools, and AI-powered portals built to fit exactly how your team works — not the other way around.",
      highlight: false,
    },
    {
      icon: "Globe",
      title: "Website Development",
      description: "Fast, SEO-optimised websites designed to convert visitors into leads — built with modern tech and your growth targets in mind.",
      highlight: false,
    },
    {
      icon: "BarChart2",
      title: "Digital Marketing & SEO",
      description: "AI-powered SEO, targeted ad campaigns, and content strategies that put your business in front of the right audience at the right time.",
      highlight: false,
    },
  ],
} as const;

export const PRICING = {
  eyebrow: "Pricing",
  heading: "Calculate Your Loss! See Our Fix. ",
  calculator: {
    label: "My team spends",
    unit: "hours/week on tasks AI can do",
    min: 5,
    max: 80,
    default: 20,
    hourlyRate: 50,
    description: "Includes data entry, scheduling, follow-ups, reporting, and manual outreach.",
  },
  plans: [
    {
      name: "Starter",
      price: 2500,
      badge: null,
      description: "One focused automation that eliminates your biggest bottleneck.",
      features: [
        "1 custom AI workflow",
        "CRM or tool integration",
        "30-day post-launch support",
        "Free automation audit",
      ],
      cta: { href: "#book", label: "Get Started" },
      highlight: false,
    },
    {
      name: "Growth",
      price: 4500,
      badge: "Most Popular",
      description: "A full automation stack built around your operations.",
      features: [
        "3 custom AI workflows",
        "AI voice or chat agent",
        "CRM + pipeline automation",
        "60-day support & optimisation",
        "Free automation audit",
      ],
      cta: { href: "#book", label: "Get Started" },
      highlight: true,
    },
    {
      name: "Scale",
      price: null,
      badge: null,
      description: "End-to-end AI transformation for your entire business.",
      features: [
        "Unlimited workflows",
        "Full AI agent suite",
        "Dedicated success manager",
        "Ongoing monitoring & updates",
        "Priority support",
      ],
      cta: { href: "#book", label: "Talk to Us" },
      highlight: false,
    },
  ],
} as const;

export const RESULTS = {
  eyebrow: "Real Results",
  heading: "What Happens After\nWe Automate Your Business.",
  metrics: [
    {
      before: "12 hrs/day",
      after: "0 hrs",
      label: "manual work eliminated",
      context: "Operations team freed from daily data entry and reporting tasks.",
    },
    {
      before: "3 days",
      after: "47 min",
      label: "avg. lead response time",
      context: "AI-powered CRM sequences respond and qualify leads instantly.",
    },
    {
      before: "1 FTE cost",
      after: "80% reduction",
      label: "in operational overhead",
      context: "AI agents handle the volume of a full-time employee at a fraction of the cost.",
    },
  ],
  caseStudies: [
    {
      clientType: "Real Estate Agency",
      problem: "Manually tracking 200+ leads across spreadsheets. Follow-ups missed. Deals going cold.",
      outcome: "3.4x increase in booked viewings within 6 weeks.",
      quote: "We went from losing leads to closing them. The system just works — even on weekends.",
      author: "Yahya Mujtaba",
      role: "Real Estate Founder",
    },
    {
      clientType: "Career Management Firm",
      problem: "Sales team spending 4+ hours per day on manual CRM updates and outreach sequences.",
      outcome: "Pipeline automated end-to-end. Conversion rates up 40%.",
      quote: "What used to take our team days now happens automatically in minutes.",
      author: "Rafa Braz",
      role: "CEO, IBRA Career Management",
    },
  ],
} as const;

export const FAQ = {
  eyebrow: "FAQ",
  heading: "Questions We Get\nAll the Time.",
  items: [
    {
      question: "How long does it take to build and deploy an automation?",
      answer:
        "Most single automations are live within 1–2 weeks. More complex stacks with multiple workflows and integrations typically take 3–4 weeks. We move fast because we've built these systems before — we're not learning on your project.",
    },
    {
      question: "Do I need technical knowledge to use what you build?",
      answer:
        "None at all. We build everything to be hands-off from day one and run a full team onboarding before we hand over. If anything needs adjusting, you contact us — not a developer.",
    },
    {
      question: "What tools and platforms do you integrate with?",
      answer:
        "We work with the tools you already use — HubSpot, Salesforce, Notion, Slack, Google Workspace, Zapier, Make, and dozens more. If there's an API or webhook, we can connect it.",
    },
    {
      question: "What if the automation breaks or needs changes later?",
      answer:
        "Every engagement includes post-launch support (30–60 days depending on your plan). After that, ongoing maintenance retainers are available. We also build systems with monitoring built in so issues surface before they affect your business.",
    },
    {
      question: "How is this different from hiring a developer or using off-the-shelf tools?",
      answer:
        "Off-the-shelf tools are generic — they fit no business perfectly. A freelance developer builds, then disappears. We design, build, integrate, and stay involved, treating your automation like a product that needs to perform long-term.",
    },
    {
      question: "What's included in the free automation audit?",
      answer:
        "A 30-minute call where we map your current operations, identify your top 3 automation opportunities, and deliver a written summary with our recommendations. No pitch deck — just a clear plan you can act on with anyone.",
    },
    {
      question: "Can you automate just one part of my business, or does it have to be everything?",
      answer:
        "We can start with a single high-impact workflow — our Starter plan is built exactly for that. Most clients begin with one automation, see the ROI, and expand from there. There's no pressure to commit to more than you need.",
    },
  ],
  ctaTop: {
    heading: "Don't take our word for it.",
    description: "Ask any AI what it thinks about automating your business operations. The data speaks for itself.",
    buttons: [
      { label: "Ask ChatGPT", href: "https://chat.openai.com/?q=Should+I+automate+my+business+operations+with+AI%3F" },
      { label: "Ask Claude", href: "https://claude.ai/new?q=Should+I+automate+my+business+with+AI+workflows%3F" },
      { label: "Ask Perplexity", href: "https://www.perplexity.ai/?q=Is+AI+business+automation+worth+it+for+small+businesses%3F" },
    ],
  },
  cta: {
    label: "Still have questions?",
    heading: "Let's talk through your specific case.",
    trustPoints: [
      "Free 30-min automation audit call",
      "No obligation — ever",
      "Response within 24 hours",
    ],
    button: { href: "#book", label: "Book Free Audit Call" },
  },
} as const;

export const FOOTER = {
  headline: "Let's Automate Your  Business ",
  cta: { href: "#book", label: "Get in Touch" },
  columns: [
    {
      heading: "Product",
      links: [
        { href: "#services", label: "AI Automation" },
        { href: "#services", label: "Business Consultation" },
        { href: "#services", label: "Voice Agents" },
        { href: "#services", label: "Community" },
        { href: "#services", label: "Pricing" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { href: "#", label: "Help Center" },
        { href: "#", label: "Tutorials" },
        { href: "#", label: "Community" },
        { href: "#", label: "API Documentation" },
      ],
    },
    {
      heading: "Support",
      links: [
        { href: "#", label: "Support Center" },
        { href: "#", label: "FAQs" },
        { href: "#", label: "Community" },
        { href: "#", label: "Feedback" },
      ],
    },
    {
      heading: "Social Media",
      links: [
        { href: "https://instagram.com/brandsparc",        label: "Instagram" },
        { href: "https://linkedin.com/company/brandsparc", label: "LinkedIn" },
        { href: "https://youtube.com/@brandsparc",         label: "Youtube" },
        { href: "https://facebook.com/brandsparc",         label: "Facebook" },
      ],
    },
  ],
  legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms Condition" },
  ],
} as const;

export const NAV = {
  links: [
    { href: "#services",     label: "Services" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#results",      label: "Results" },
    { href: "#faq",          label: "FAQ" },
  ],
  cta: {
    href: "#book",
    label: "Contact Now",
  },
} as const;
