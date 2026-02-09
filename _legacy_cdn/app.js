const { useEffect, useState, useRef } = React;

function useTheme() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(localStorage.getItem("theme") || (prefersDark ? "dark" : "light"));
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("theme-dark");
    } else {
      document.body.classList.remove("theme-dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  return [theme, setTheme];
}

function Reveal({ children, className, id }) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return React.createElement("section", { id, className: `reveal ${className || ""}`.trim(), ref }, children);
}

function Header({ onToggleTheme, theme }) {
  return React.createElement(
    "header",
    { className: "site-header" },
    React.createElement(
      "div",
      { className: "container header-inner" },
      React.createElement("a", { href: "#", className: "brand" }, "It Company"),
      React.createElement(
        "nav",
        { className: "nav" },
        React.createElement("a", { href: "#services" }, "Services"),
        React.createElement("a", { href: "#portfolio" }, "Work"),
        React.createElement("a", { href: "#process" }, "How we work"),
        React.createElement("a", { href: "#trust" }, "Trust"),
        React.createElement("a", { href: "#contact", className: "button button-primary" }, "Start a project")
      ),
      React.createElement(
        "button",
        { id: "themeToggle", className: "icon-button", "aria-label": "Toggle theme", onClick: onToggleTheme },
        theme === "dark" ? "☀" : "☾"
      )
    )
  );
}

function CaseStudyHeader({ onToggleTheme, theme }) {
  return React.createElement(
    "header",
    { className: "site-header" },
    React.createElement(
      "div",
      { className: "container header-inner" },
      React.createElement("a", { href: "./index.html", className: "brand" }, "It Company"),
      React.createElement(
        "nav",
        { className: "nav" },
        React.createElement("a", { href: "./index.html#portfolio" }, "Back to work"),
        React.createElement("a", { href: "./index.html#contact", className: "button button-primary" }, "Start a project")
      ),
      React.createElement(
        "button",
        { id: "themeToggle", className: "icon-button", "aria-label": "Toggle theme", onClick: onToggleTheme },
        theme === "dark" ? "☀" : "☾"
      )
    )
  );
}

function Hero() {
  return React.createElement(
    Reveal,
    { className: "hero", id: "hero" },
    React.createElement(
      "div",
      { className: "container hero-inner" },
      React.createElement("h1", null, "Build real products. Ship fast. Stay reliable."),
      React.createElement("p", null, "I design and engineer production systems—apps, payments, admin, APIs—built for real users and long-term growth."),
      React.createElement(
        "div",
        { className: "hero-actions" },
        React.createElement("a", { href: "#contact", className: "button button-primary" }, "Start a project"),
        React.createElement("a", { href: "#portfolio", className: "button button-ghost" }, "See live work")
      )
    )
  );
}

function Services() {
  const items = [
    { title: "Product engineering", desc: "Full-stack apps, APIs, auth, deployments." },
    { title: "Payments & ops", desc: "Checkouts, subscriptions, invoicing, reconciliation." },
    { title: "Admin & dashboards", desc: "Clean internal tooling your team will actually use." },
    { title: "UX & frontend", desc: "Modern, fast, accessible interfaces." },
    { title: "Launch & support", desc: "Monitoring, incident response, iterative improvements." },
  ];
  return React.createElement(
    Reveal,
    { className: "section", id: "services" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement("div", { className: "section-head" },
        React.createElement("h2", null, "Services built for production"),
        React.createElement("p", null, "Senior full-stack delivery with clear milestones and weekly progress. Outcome over output.")
      ),
      React.createElement("div", { className: "grid cards-3" },
        items.map((it, i) =>
          React.createElement("div", { key: i, className: "card" },
            React.createElement("h3", null, it.title),
            React.createElement("p", null, it.desc)
          )
        )
      )
    )
  );
}

function Portfolio() {
  const cards = [
    { title: "Subscription platform", tag: "Live", tagClass: "tag-live", desc: "Reduced checkout abandonment by 18% with a clean subscription flow.", stack: "React, Node, Stripe" },
    { title: "Internal operations dashboard", tag: "In Production", tagClass: "tag-production", desc: "Cut manual reconciliation time by 60% with secure admin tooling.", stack: "Next.js, PostgreSQL" },
    { title: "Creator commerce", tag: "Active Users", tagClass: "tag-active", desc: "Improved activation by 12% through streamlined onboarding and clear UX.", stack: "Vue, Firebase" },
  ];
  return React.createElement(
    Reveal,
    { className: "section", id: "portfolio" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement("div", { className: "section-head" },
        React.createElement("h2", null, "Live products and systems"),
        React.createElement("p", null, "Selected projects with outcomes and context. Ask for deeper case studies.")
      ),
      React.createElement("div", { className: "grid cards-3" },
        cards.map((c, i) =>
          React.createElement("article", { key: i, className: "card" },
            React.createElement("div", { className: "card-head" },
              React.createElement("h3", null, c.title),
              React.createElement("span", { className: `tag ${c.tagClass}` }, c.tag)
            ),
            React.createElement("p", null, c.desc),
            React.createElement("div", { className: "meta" },
              React.createElement("span", null, `Stack: ${c.stack}`),
              React.createElement("a", { href: "./case-study.html", className: "link" }, "Open case study")
            )
          )
        )
      )
    )
  );
}

function Process() {
  const steps = [
    { n: 1, title: "Discovery", desc: "30–45 min call to align on outcomes and constraints." },
    { n: 2, title: "Plan", desc: "Scope, timeline, and weekly deliverables." },
    { n: 3, title: "Build", desc: "Iterative shipping with visible progress." },
    { n: 4, title: "Launch", desc: "Production deploy, monitoring, and handover." },
    { n: 5, title: "Support", desc: "Proactive fixes and roadmap updates." },
  ];
  return React.createElement(
    Reveal,
    { className: "section", id: "process" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement("div", { className: "section-head" },
        React.createElement("h2", null, "Transparent and straightforward"),
        React.createElement("p", null, "We set clear outcomes, ship weekly, and keep you in the loop. No surprises.")
      ),
      React.createElement("div", { className: "steps" },
        steps.map((s) =>
          React.createElement("div", { key: s.n, className: "step" },
            React.createElement("div", { className: "step-number" }, String(s.n)),
            React.createElement("h3", null, s.title),
            React.createElement("p", null, s.desc)
          )
        )
      )
    )
  );
}

function Trust() {
  const items = [
    { title: "Security & privacy", desc: "Least privilege access, encrypted storage, audit trails." },
    { title: "Uptime & quality", desc: "Monitoring, alerts, and test coverage for reliability." },
    { title: "Ethics", desc: "Honest scoping, no dark patterns, transparent ownership." },
  ];
  return React.createElement(
    Reveal,
    { className: "section", id: "trust" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement("div", { className: "section-head" },
        React.createElement("h2", null, "Production-first by design"),
        React.createElement("p", null, "Real systems, real users, real uptime. Security and privacy are non-negotiable.")
      ),
      React.createElement("div", { className: "grid cards-3" },
        items.map((it, i) =>
          React.createElement("div", { key: i, className: "card" },
            React.createElement("h3", null, it.title),
            React.createElement("p", null, it.desc)
          )
        )
      )
    )
  );
}

function Contact() {
  const email = "hello@yourdomain.com";
  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = "New project brief";
    const body = `
Name: ${data.get("name")}
Email: ${data.get("email")}
Company: ${data.get("company")}
Status: ${data.get("status")}
Goal: ${data.get("goal")}
Timeline: ${data.get("timeline")}
Budget: ${data.get("budget")}

Brief:
${data.get("message")}
    `.trim();
    const href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  };
  return React.createElement(
    Reveal,
    { className: "section", id: "contact" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement("div", { className: "section-head" },
        React.createElement("h2", null, "Tell me about your product"),
        React.createElement("p", null, "Share a short brief and I’ll respond within 24 hours.")
      ),
      React.createElement("form", { id: "contactForm", className: "form", onSubmit },
        React.createElement("div", { className: "form-row" },
          React.createElement("label", { htmlFor: "name" }, "Name"),
          React.createElement("input", { id: "name", name: "name", type: "text", required: true })
        ),
        React.createElement("div", { className: "form-row" },
          React.createElement("label", { htmlFor: "email" }, "Email"),
          React.createElement("input", { id: "email", name: "email", type: "email", required: true })
        ),
        React.createElement("div", { className: "form-row" },
          React.createElement("label", { htmlFor: "company" }, "Company or project"),
          React.createElement("input", { id: "company", name: "company", type: "text" })
        ),
        React.createElement("div", { className: "form-row" },
          React.createElement("label", { htmlFor: "status" }, "Current status"),
          React.createElement("select", { id: "status", name: "status" },
            React.createElement("option", null, "Idea"),
            React.createElement("option", null, "MVP"),
            React.createElement("option", null, "Live"),
            React.createElement("option", null, "Scaling"),
            React.createElement("option", null, "Rebuild")
          )
        ),
        React.createElement("div", { className: "form-row" },
          React.createElement("label", { htmlFor: "goal" }, "Goal"),
          React.createElement("select", { id: "goal", name: "goal" },
            React.createElement("option", null, "Launch"),
            React.createElement("option", null, "Scale"),
            React.createElement("option", null, "Rebuild")
          )
        ),
        React.createElement("div", { className: "form-row" },
          React.createElement("label", { htmlFor: "timeline" }, "Timeline"),
          React.createElement("input", { id: "timeline", name: "timeline", type: "text", placeholder: "e.g., 4–8 weeks" })
        ),
        React.createElement("div", { className: "form-row" },
          React.createElement("label", { htmlFor: "budget" }, "Budget range"),
          React.createElement("input", { id: "budget", name: "budget", type: "text", placeholder: "e.g., $5k–$25k" })
        ),
        React.createElement("div", { className: "form-row" },
          React.createElement("label", { htmlFor: "message" }, "Brief"),
          React.createElement("textarea", { id: "message", name: "message", rows: 4, placeholder: "What are you building? What outcome matters most?", required: true })
        ),
        React.createElement("div", { className: "form-actions" },
          React.createElement("button", { type: "submit", className: "button button-primary" }, "Send brief"),
          React.createElement("a", { href: `mailto:${email}`, className: "button button-ghost" }, "Email directly")
        )
      )
    )
  );
}

function Privacy() {
  return React.createElement(
    Reveal,
    { className: "section", id: "privacy" },
    React.createElement("div", { className: "container" },
      React.createElement("div", { className: "section-head" },
        React.createElement("h2", null, "Privacy"),
        React.createElement("p", null, "Your information is used only to respond to your inquiry. No tracking, no resale.")
      )
    )
  );
}

function Terms() {
  return React.createElement(
    Reveal,
    { className: "section", id: "terms" },
    React.createElement("div", { className: "container" },
      React.createElement("div", { className: "section-head" },
        React.createElement("h2", null, "Terms"),
        React.createElement("p", null, "Scope, timelines, and pricing are agreed before work begins. You own your IP and data.")
      )
    )
  );
}

function Footer() {
  return React.createElement(
    "footer",
    { className: "site-footer" },
    React.createElement("div", { className: "container footer-inner" },
      React.createElement("div", { className: "footer-brand" }, "It Company"),
      React.createElement("div", { className: "footer-nav" },
        React.createElement("a", { href: "#privacy" }, "Privacy"),
        React.createElement("a", { href: "#terms" }, "Terms")
      )
    )
  );
}

function CaseStudy() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      Reveal,
      { className: "section", id: "case-study" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement("h1", null, "Subscription platform — Reduced checkout abandonment by 18%"),
        React.createElement(
          "div",
          { className: "grid" },
          React.createElement(
            "div",
            null,
            React.createElement("h2", null, "Problem"),
            React.createElement("p", null, "Checkout was complex and slow, causing drop-offs and support issues."),
            React.createElement("h2", null, "Solution"),
            React.createElement("p", null, "Clean subscription flow with clear pricing, secure payments, and lightweight UI."),
            React.createElement("h2", null, "Impact"),
            React.createElement("p", null, "Reduced abandonment by 18% and lowered support tickets around billing by 30%."),
            React.createElement("h2", null, "Tech"),
            React.createElement("p", null, "React, Node, Stripe, Postgres, server-side rendering, monitoring and alerts.")
          )
        ),
        React.createElement(
          "div",
          { className: "form-actions cta-block" },
          React.createElement("a", { href: "./index.html#contact", className: "button button-primary" }, "Interested in a similar build")
        )
      )
    ),
    React.createElement(Footer, null)
  );
}

function App() {
  const [theme, setTheme] = useTheme();
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const isCaseStudy = window.location.pathname.toLowerCase().includes("case-study");
  if (isCaseStudy) {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(CaseStudyHeader, { onToggleTheme: toggleTheme, theme }),
      React.createElement("main", null, React.createElement(CaseStudy, null))
    );
  }
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Header, { onToggleTheme: toggleTheme, theme }),
    React.createElement("main", null,
      React.createElement(Hero, null),
      React.createElement(Services, null),
      React.createElement(Portfolio, null),
      React.createElement(Process, null),
      React.createElement(Trust, null),
      React.createElement(Contact, null),
      React.createElement(Privacy, null),
      React.createElement(Terms, null)
    ),
    React.createElement(Footer, null)
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
