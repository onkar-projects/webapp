import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// Default export React component
export default function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans text-gray-800 bg-gradient-to-br from-sky-50 via-white to-pink-50">
        <AnimatedHeader />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/grammar" element={<Page2 />} />
            <Route path="/jira" element={<Page3 />} />
            <Route path="/bugs" element={<Page4 />} />
            <Route path="/people" element={<Page5 />} />
            <Route path="*" element={<Page1 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function AnimatedHeader() {
  return (
    <header className="sticky top-0 z-30 bg-white/60 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-extrabold tracking-tight">😀 Spacial Day</div>
          <nav className="hidden md:flex space-x-3">
            <NavLink to="/">Birthday</NavLink>
            <NavLink to="/grammar">English Tips</NavLink>
            <NavLink to="/jira">Jira & QA</NavLink>
            <NavLink to="/bugs">Bug Validation</NavLink>
            <NavLink to="/people">People & Emails</NavLink>
          </nav>
        </div>
       
      </div>
    </header>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="px-3 py-1 rounded-md hover:bg-sky-100 transition-colors text-sm font-medium"
    >
      {children}
    </Link>
  );
}

function Footer() {
  return (
    <footer className="mt-12 py-6 text-center text-sm text-gray-500">
      Built with ❤️ for learning and QA productivity
    </footer>
  );
}

function Page1() {
     const audioRef = useRef(null);
  const fadeRef = useRef(null);

  useEffect(() => {
    const audio = new Audio("/audio/song2.mp3");
    audio.loop = true;
    audio.volume = 0;
    audioRef.current = audio;

    audio.play().catch((err) => console.log("Autoplay blocked:", err));

    let vol = 0;

    const fadeIn = () => {
      vol += 0.01;
      vol = Math.min(Math.max(vol, 0), 1); // clamp 0-1
      audio.volume = vol;

      if (vol < 1) {
        fadeRef.current = requestAnimationFrame(fadeIn);
      }
    };

    fadeRef.current = requestAnimationFrame(fadeIn);

    return () => {
      cancelAnimationFrame(fadeRef.current);

      // Fade out safely
      let fadeOutVol = audio.volume;

      const fadeOut = () => {
        fadeOutVol -= 0.01;
        fadeOutVol = Math.min(Math.max(fadeOutVol, 0), 1);
        audio.volume = fadeOutVol;

        if (fadeOutVol > 0) {
          requestAnimationFrame(fadeOut);
        } else {
          audio.pause();
        }
      };

      requestAnimationFrame(fadeOut);
    };
  }, []);

  const balloons = Array.from({ length: 15 });
  const colors = ["text-red-400", "text-yellow-400", "text-blue-400", "text-pink-400", "text-green-400"];

  return (
    <section className="relative overflow-hidden rounded-2xl shadow-lg p-6 md:p-10 bg-white">
      {/* 🎈 Full-Page Floating Balloons */}
      {balloons.map((_, i) => (
        <motion.div
          key={i}
          className={`fixed text-4xl ${colors[i % colors.length]}`}
          initial={{ y: "100vh", x: `${Math.random() * 100}vw`, opacity: 0 }}
          animate={{ y: "-10vh", opacity: 1 }}
          transition={{
            duration: 6 + Math.random() * 6,
            delay: Math.random() * 5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          🎈
        </motion.div>
      ))}

      {/* 3-Column Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <img
          src="https://i.pinimg.com/1200x/9d/b4/32/9db432b3c8622571d0046f8a7755d963.jpg"
          alt="celebration-left"
          className="w-full rounded-xl shadow-xl"
        />
        <div className="text-center px-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-bounce">
            🎉 Happy Birthday, Satya 🎉
          </h1>
          <p className="text-lg mb-4">
            Wishing you a day filled with love, joy, and every good thing. Here’s a little message just for you:
          </p>
          <blockquote className="italic text-xl text-pink-600">
            "On your special day, may your heart be full and your path be bright — loved, celebrated, and endlessly inspired."
          </blockquote>
          <div className="mt-6 flex justify-center gap-3">
            <button className="px-4 py-2 rounded-lg bg-pink-500 text-white font-semibold shadow hover:scale-105 transition-transform">
              Send Wishes
            </button>
            <button className="px-4 py-2 rounded-lg bg-white border border-slate-200 shadow hover:scale-105 transition-transform">
              Save Card
            </button>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=example"
          alt="celebration-right"
          className="w-full rounded-xl shadow-xl"
        />
      </div>
    </section>
  );
}

function AnimatedBackground() {
  // decorative animated gradient and floating hearts
  return (
    <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-rose-50 to-yellow-50 opacity-80 animate-[pulse_6s_ease-in-out_infinite]"></div>
      {/* subtle moving shapes */}
      <motion.div
        initial={{ x: -50, y: -20, opacity: 0.6 }}
        animate={{ x: 60, y: -40 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 14 }}
        className="absolute left-10 top-6 w-40 h-40 rounded-full bg-pink-200/60 blur-3xl"
      />
      <motion.div
        initial={{ x: 50, y: 60, opacity: 0.6 }}
        animate={{ x: -40, y: 80 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 18 }}
        className="absolute right-10 bottom-6 w-56 h-56 rounded-full bg-sky-200/50 blur-3xl"
      />
    </div>
  );
}

function Page2() {
  const dailyWords = [
    "implement", "deploy", "deadline", "sync", "update", "review", "merge", "blocker", "estimate", "scope",
    "stakeholder", "QA", "regression", "hotfix", "baseline", "release", "sprint", "retrospective", "backlog", "pipeline"
  ];

  return (
    <section className="space-y-6 bg-white rounded-2xl shadow-lg p-6 md:p-10">
      <h2 className="text-3xl font-bold">English Grammar & Meeting Phrases</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <article>
          <h3 className="text-xl font-semibold mb-2">Quick Grammar Formulas</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li><strong>Present Perfect:</strong> have/has + past participle → "I have completed the task."</li>
            <li><strong>Passive Voice:</strong> be + past participle → "The bug was fixed by the dev."</li>
            <li><strong>Conditionals:</strong> If + present, will + verb → "If we release, users will update."</li>
            <li><strong>Modals:</strong> can/could/may/might/should → polite requests and suggestions.</li>
          </ul>

          <h4 className="mt-4 font-semibold">Useful Meeting Phrases</h4>
          <ol className="list-decimal pl-5 text-sm space-y-1 text-gray-700">
            <li>"Can we clarify the acceptance criteria for this story?"</li>
            <li>"I'd like to raise a potential risk regarding the release date."</li>
            <li>"Can we get an ETA on the fix?"</li>
            <li>"Let's add this to the backlog for grooming."</li>
          </ol>

          <p className="mt-4 text-sm text-gray-600">Resources: Practice by writing short notes and using the phrases in real meetings. Keep sentences concise and action-oriented.</p>
        </article>

        <article>
          <h3 className="text-xl font-semibold mb-2">Daily Used Words (IT & Meetings)</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {dailyWords.map((w) => (
              <span key={w} className="px-2 py-1 rounded bg-slate-100">{w}</span>
            ))}
          </div>

          <h4 className="mt-4 font-semibold">How to Improve Speaking in IT Meetings</h4>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li>Prepare 2–3 bullet points before the meeting.</li>
            <li>Use short declarative sentences and active voice.</li>
            <li>Ask clarifying questions when requirements are unclear.</li>
            <li>Summarize action items at the end.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

function Page3() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-6">
      <h2 className="text-3xl font-bold">Jira & Test Case Techniques for QA</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <article>
          <h3 className="text-xl font-semibold">What & Why</h3>
          <p className="text-sm text-gray-700">Jira is used to track work items. For QA, test cases in Jira (or linked test management apps) help ensure traceability, repeatability, and clarity.</p>

          <h4 className="mt-3 font-semibold">Where to add testcases</h4>
          <ul className="list-disc pl-5 text-sm text-gray-700">
            <li>Use a dedicated Test Case issue type or a plugin (Xray, Zephyr).</li>
            <li>Organize by Epic → Story → Test Case.</li>
            <li>Link testcases to user stories and defects for traceability.</li>
          </ul>

          <h4 className="mt-3 font-semibold">How to write a clear test case</h4>
          <ol className="list-decimal pl-5 text-sm text-gray-700">
            <li><strong>Title:</strong> Short and descriptive.</li>
            <li><strong>Preconditions:</strong> Environment, test data.</li>
            <li><strong>Steps:</strong> Numbered, deterministic steps.</li>
            <li><strong>Expected result:</strong> Clear pass criteria.</li>
            <li><strong>Postconditions:</strong> Cleanup steps if any.</li>
          </ol>
        </article>

        <article>
          <h3 className="text-xl font-semibold">Examples & Templates</h3>
          <div className="text-sm text-gray-700 space-y-2">
            <p><strong>Template:</strong></p>
            <pre className="bg-slate-100 p-3 rounded text-xs">Title: Verify login with valid creds
Preconditions: User exists, browser
Steps:
  1. Go to /login
  2. Enter username and password
  3. Click Login
Expected: User lands on dashboard</pre>

            <p><strong>Tips:</strong></p>
            <ul className="list-disc pl-5">
              <li>Keep tests atomic — one assertion per test where possible.</li>
              <li>Use data-driven tests for multiple inputs.</li>
              <li>Tag tests (smoke/regression) for selective runs.</li>
            </ul>
          </div>
        </article>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold">Automation pointers</h4>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          <li>Design tests for reliability — avoid flaky selectors.</li>
          <li>Use API mocks for stable test environments.</li>
          <li>Integrate tests with CI (Jenkins/GitHub Actions) and report failures clearly.</li>
        </ul>
      </div>
    </section>
  );
}

function Page4() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-6">
      <h2 className="text-3xl font-bold">Bug Validation & Debugging Techniques</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <article>
          <h3 className="text-xl font-semibold">Bug Validation Steps</h3>
          <ol className="list-decimal pl-5 text-sm text-gray-700 space-y-2">
            <li>Reproduce the issue with exact steps and environment details.</li>
            <li>Identify the scope — is it device/browser/role specific?</li>
            <li>Collect logs, screenshots, and network traces.</li>
            <li>Try isolating by turning off related features or using test data.</li>
            <li>Provide a minimal reproducible example.</li>
          </ol>

          <h4 className="mt-3 font-semibold">Bug Severity vs Priority</h4>
          <p className="text-sm text-gray-700">Severity = technical impact. Priority = business urgency. Communicate both clearly in the issue.</p>
        </article>

        <article>
          <h3 className="text-xl font-semibold">Debugging Techniques</h3>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
            <li>Use browser devtools: DOM, console, network, and performance tabs.</li>
            <li>Check server logs and correlate timestamps with client actions.</li>
            <li>Re-run tests locally to catch flakiness and reproduce consistently.</li>
            <li>Binary search by toggling commits or config to find regression point.</li>
            <li>Use breakpoints or logging to inspect variable state.</li>
          </ul>
        </article>
      </div>

      <div>
        <h4 className="font-semibold">Helpful Tools & Links</h4>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          <li>Browser DevTools, Postman, Charles/Fiddler (network), Sentry (errors)</li>
          <li>Version control bisect (git bisect) to find offending commit</li>
        </ul>
      </div>
    </section>
  );
}

function Page5() {
  const emailTemplates = [
    {
      title: "Monthly Status Update",
      body: `Hi Team,\n\nPlease find the monthly status update attached. Highlights:\n- Completed: ...\n- In progress: ...\n- Blockers: ...\n\nThanks,\nYour Name`,
    },
    {
      title: "Request for Clarification",
      body: `Hi [Name],\n\nI need clarification on the acceptance criteria for [Ticket]. Specifically:\n- ...\n\nRegards,\nYour Name`,
    },
    {
      title: "Change Request Acknowledgement",
      body: `Hi [Stakeholder],\n\nWe received the monthly change request for [area]. We will evaluate impact, provide estimates, and schedule the work in the next sprint.\n\nBest,\nYour Name`,
    },
  ];

  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-6">
      <h2 className="text-3xl font-bold">Handling Monthly Changes & People Management</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <article>
          <h3 className="text-xl font-semibold">How to handle monthly changes</h3>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
            <li>Plan change windows and communicate early to stakeholders.</li>
            <li>Maintain a change-log and rollout checklist.</li>
            <li>Use feature flags for controlled releases.</li>
            <li>Allocate buffer time in sprint planning for changes.</li>
            <li>Keep backup/rollback plans ready.</li>
          </ul>

          <h4 className="mt-3 font-semibold">Working with team members</h4>
          <ul className="list-disc pl-5 text-sm text-gray-700">
            <li>Be transparent about priorities and impact.</li>
            <li>Assign clear ownership and deadlines.</li>
            <li>Offer help and mentorship to resolve blockers quickly.</li>
          </ul>
        </article>

        <article>
          <h3 className="text-xl font-semibold">Useful Email Templates</h3>
          <div className="space-y-3 text-sm">
            {emailTemplates.map((t) => (
              <div key={t.title} className="p-3 border rounded bg-slate-50">
                <h5 className="font-semibold">{t.title}</h5>
                <pre className="whitespace-pre-wrap text-xs mt-2">{t.body}</pre>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div>
        <h4 className="font-semibold">Tips for corporate communication</h4>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          <li>Use subject lines that clearly state purpose and urgency.</li>
          <li>Keep emails short, with action items up front.</li>
          <li>Always indicate next steps and owners.</li>
        </ul>
      </div>
    </section>
  );
}
