import React from "react";

export default function Page4() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-red-100 p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Bug Validation & Debugging</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Techniques:</h2>
        <ul className="list-disc ml-6">
          <li>Reproduce bug in dev/staging</li>
          <li>Check logs & console errors</li>
          <li>Use breakpoints & debugging tools</li>
          <li>Validate with multiple browsers & environments</li>
          <li>Use Jira/bug tracker to document reproducibility</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Helpful Tips:</h2>
        <ul className="list-disc ml-6">
          <li>Prioritize high-impact bugs first</li>
          <li>Provide screenshots, videos, or GIFs</li>
          <li>Verify fix in regression suite</li>
        </ul>
      </section>
    </div>
  );
}
