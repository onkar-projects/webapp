import React from "react";

export default function Page2() {
  const dailyWords = ["Implement", "Optimize", "Feedback", "Deploy", "Debug", "Agenda", "Workflow", "Collaborate", "Sync", "Actionable"];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100 p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">English Learning & IT Communication Tips</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Daily Words:</h2>
        <ul className="list-disc ml-6">
          {dailyWords.map((word, i) => <li key={i} className="mb-1">{word}</li>)}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Grammar & Tips for IT Meetings:</h2>
        <ul className="list-disc ml-6">
          <li>Prepare agenda before meeting</li>
          <li>Use concise and clear language</li>
          <li>Ask relevant questions</li>
          <li>Follow up via email with action items</li>
          <li>Use polite, professional expressions</li>
        </ul>
      </section>
    </div>
  );
}
