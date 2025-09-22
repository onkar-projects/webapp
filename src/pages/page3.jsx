import React from "react";

export default function Page3() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-pink-100 p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Jira & QA Techniques</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">How to Add Test Cases:</h2>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Open Jira project → Test Management</li>
          <li>Click “Create Test Case”</li>
          <li>Fill summary, description, preconditions, steps, expected results</li>
          <li>Assign priority, labels, and components</li>
          <li>Save & link to related stories/epics</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">QA Tips:</h2>
        <ul className="list-disc ml-6">
          <li>Follow testing methodology (Smoke, Regression, Functional)</li>
          <li>Write clear, reproducible test cases</li>
          <li>Document bugs with steps & screenshots</li>
          <li>Communicate effectively with devs & PMs</li>
        </ul>
      </section>
    </div>
  );
}
