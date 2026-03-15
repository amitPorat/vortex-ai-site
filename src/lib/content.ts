export type Locale = "en" | "he";

export const content = {
  en: {
    nav: {
      logo: "Vortex Data & AI",
      langToggle: "עברית",
      cta: "Contact Us",
    },
    hero: {
      headline: "Turning Complex Data into Profit, Forecasting, and Automation.",
      subheadline:
        "End-to-End Data & AI solutions for the public sector and enterprise organizations. From data mining to cloud-deployed smart systems.",
      cta: "Schedule a Consultation",
      socialProof:
        "Trusted by experts from National Data Centers & Global Tech",
    },
    problemSolution: {
      title:
        "Consulting firms leave you with presentations. We deliver production-grade code.",
      traditional: {
        title: "Traditional Pain",
        items: [
          "Hard to recruit talent",
          "Models stuck in theory",
          'Massive data "mud"',
        ],
      },
      vortex: {
        title: "Vortex Solution",
        items: [
          "Aggressive data engineering",
          "Hands-on mathematical models in production",
          "Absolute E2E control",
        ],
      },
    },
    services: {
      title: "Services",
      items: [
        {
          title: "Data Audit & Cleansing",
          desc: "Connecting to sources, detecting anomalies",
        },
        {
          title: "Vectorization & AI Prep",
          desc: "Transforming tabular/text data into mathematical representation",
        },
        {
          title: "Predictive Models & RAG",
          desc: "Complex algorithms & semantic organizational search",
        },
        {
          title: "MLOps & Integration",
          desc: "Automated pipelines & deployment",
        },
      ],
    },
    pricing: {
      title: "Transparent & Results-Driven Model",
      steps: [
        { label: "Validation", desc: "Free validation" },
        { label: "Fixed-Price Pilot (PoC)", desc: "Minimum risk" },
        { label: "Retainer", desc: "Data Office – model maintenance" },
      ],
    },
    founder: {
      name: "Amit Porat",
      role: "Founder & Lead Data Scientist",
      linkedIn: "https://www.linkedin.com/in/amit-porat-131446117/",
      bio: "Lead Data Scientist bridging economics and deep tech. Proven experience in the public sector (Water Authority, Gov) and enterprise innovation (Amdocs). Expert in PINN, time-series, and automation.",
    },
    contact: {
      title: "Get in Touch",
      fields: {
        name: "Full Name",
        email: "Work Email",
        company: "Company/Organization",
        message: "Message",
      },
      submit: "Send Message",
      privacy: "We value your data privacy.",
    },
  },
  he: {
    nav: {
      logo: "Vortex Data & AI",
      langToggle: "EN",
      cta: "צור קשר",
    },
    hero: {
      headline: "הופכים נתונים מורכבים לרווח, חיזוי ואוטומציה.",
      subheadline:
        "פתרונות Data & AI מקצה לקצה למגזר הציבורי ולארגוני אנטרפרייז. משלב כריית הנתונים ועד למערכת חכמה שרצה בענן.",
      cta: "קביעת פגישת ייעוץ",
      socialProof:
        "בליווי מומחים יוצאי גופי דאטה לאומיים ותאגידי הייטק",
    },
    problemSolution: {
      title:
        "חברות ייעוץ משאירות אתכם עם מצגות. אנחנו מספקים קוד ייצור.",
      traditional: {
        title: "הכאב המסורתי",
        items: [
          "קושי לגייס טאלנטים",
          "מודלים שנשארים על הנייר",
          '"בוץ" של נתונים',
        ],
      },
      vortex: {
        title: "פתרון Vortex",
        items: [
          "הנדסת נתונים אגרסיבית",
          "בניית מודלים מתמטיים בפרודקשן (Hands-on)",
          "שליטה מקצה לקצה",
        ],
      },
    },
    services: {
      title: "שירותים",
      items: [
        {
          title: "אבחון וניקוי דאטה",
          desc: "חיבור למקורות, זיהוי אנומליות",
        },
        {
          title: "הכנה ל-AI ווקטוריזציה",
          desc: "הפיכת נתונים לייצוג מתמטי",
        },
        {
          title: "מודלי חיזוי ומנועי RAG",
          desc: "אלגוריתמיקה מתקדמת וחיפוש ארגוני",
        },
        {
          title: "אינטגרציה ופרודקשן",
          desc: "צינורות נתונים אוטומטיים",
        },
      ],
    },
    pricing: {
      title: "מודל עבודה שקוף וממוקד",
      steps: [
        { label: "ולידציה", desc: "ולידציה חינם" },
        { label: "פיילוט במחיר סגור", desc: "מינימום סיכון (PoC)" },
        { label: "תחזוקת מודלים", desc: "Data Office" },
      ],
    },
    founder: {
      name: "עמית פורת",
      role: "מייסד ומדען נתונים ראשי",
      linkedIn: "https://www.linkedin.com/in/amit-porat-131446117/",
      bio: "מומחה למדעי הנתונים המשלב כלכלה וטכנולוגיה עמוקה. ניסיון במגזר הציבורי (רשות המים, ממשלה) וחדשנות מתאגידים (Amdocs). מומחה במודלים פיזיקליים (PINN), סדרות זמן ואוטומציה.",
    },
    contact: {
      title: "צור קשר",
      fields: {
        name: "שם מלא",
        email: "אימייל עבודה",
        company: "חברה/ארגון",
        message: "נושא הפנייה/הודעה",
      },
      submit: "שלח הודעה",
      privacy: "אנו שומרים על דיסקרטיות הנתונים שלך",
    },
  },
} as const;
