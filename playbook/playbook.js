function openModal(module) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  modal.classList.remove('hidden');

  if (module === 'sprint') {
    modalBody.innerHTML = `
      <h3>Sprint Hygiene Toolkit</h3>
      <p><em>A 3-part guide to cleaner, more focused sprints</em></p>

      <h4>🧩 Part 1: Pre-Sprint Prep — Set the Stage</h4>
      <ul>
        <li>✅ Backlog grooming completed</li>
        <li>✅ Sprint goal drafted and reviewed</li>
        <li>✅ Dependencies flagged and mitigated</li>
        <li>✅ Team capacity confirmed</li>
      </ul>
      <p><strong>Visual Tip:</strong> Use a “Sprint Readiness” dashboard with green/yellow/red indicators.</p>

      <h4>🔄 Part 2: Mid-Sprint Maintenance — Stay on Track</h4>
      <ul>
        <li>✅ Daily standups focused on progress + blockers</li>
        <li>✅ WIP limits respected</li>
        <li>✅ Stories updated with current status</li>
        <li>✅ Stakeholders looped in via async updates</li>
      </ul>
      <p><strong>Visual Tip:</strong> Include a “Sprint Pulse” chart showing story progress vs. time elapsed.</p>

      <h4>✅ Part 3: Post-Sprint Cleanup — Reflect and Reset</h4>
      <ul>
        <li>✅ Retrospective held with actionable takeaways</li>
        <li>✅ Sprint review/demo shared with stakeholders</li>
        <li>✅ Stories closed or carried over with rationale</li>
        <li>✅ Metrics reviewed (velocity, planned vs. committed)</li>
      </ul>
      <p><strong>Visual Tip:</strong> Use a “Sprint Debrief” slide with Wins, Challenges, Improvements.</p>

      <h4>🧠 Bonus: Hygiene Habits to Build</h4>
      <ul>
        <li>🧼 Keep stories small and testable</li>
        <li>🧼 Use consistent naming and tagging conventions</li>
        <li>🧼 Avoid “zombie stories” that linger across sprints</li>
        <li>🧼 Encourage async updates to reduce meeting load</li>
      </ul>
    `;
  }
if (module === 'metrics') {
  modalBody.innerHTML = `
    <h3>Metrics That Matter</h3>
    <p><em>How to make metrics actionable, not just visible</em></p>

    <h4>🎯 Core Principles</h4>
    <ul>
      <li>📏 Measure what you want to improve</li>
      <li>🧠 Context beats comparison</li>
      <li>📊 Trends > snapshots</li>
      <li>🤝 Transparency builds trust</li>
    </ul>

    <h4>📈 Key Metrics to Track</h4>
    <ul>
      <li><strong>MTTR:</strong> Speed of recovery after incidents</li>
      <li><strong>Planned vs. Committed Ratio:</strong> How well the team scopes work</li>
      <li><strong>Cycle Time:</strong> Time from start to finish of a work item</li>
      <li><strong>Story Completion Rate:</strong> % of stories finished in sprint</li>
      <li><strong>CSAT / NPS:</strong> User sentiment and experience</li>
    </ul>

    <h4>📊 Visualization Tips</h4>
    <ul>
      <li>📉 Use trend lines to show improvement or instability</li>
      <li>📊 Create stacked bar charts for planned vs. completed work</li>
      <li>🧭 Include target ranges (e.g. “MTTR < 24h”)</li>
      <li>📬 Share dashboards in retros and sprint reviews</li>
    </ul>

    <h4>🧠 Bonus: Metric Hygiene Habits</h4>
    <ul>
      <li>🧼 Review metrics weekly</li>
      <li>🧼 Annotate anomalies with context</li>
      <li>🧼 Avoid metric overload — focus on 3–5 key indicators</li>
      <li>🧼 Use metrics to coach, not criticize</li>
    </ul>
  `;
  
}

if (module === 'coaching') {
  modalBody.innerHTML = `
    <h3>Agile Mindset Moments</h3>
    <p><em>Micro-coaching prompts to shift team thinking and build ownership</em></p>

    <h4>💡 Why It Matters</h4>
    <ul>
      <li>Agile isn’t just a framework — it’s a mindset</li>
      <li>Small shifts in thinking can unlock big changes</li>
      <li>Coaching moments should be embedded in team rhythm</li>
    </ul>

    <h4>🔁 When to Use These Prompts</h4>
    <ul>
      <li><strong>🧭 Sprint Planning:</strong> “What does success look like for this sprint?”</li>
      <li><strong>🛠 Daily Standup:</strong> “What’s blocking us from delivering value today?”</li>
      <li><strong>📦 Backlog Grooming:</strong> “Is this story solving a real user problem?”</li>
      <li><strong>🧪 QA / Testing:</strong> “How do we know this meets the definition of done?”</li>
      <li><strong>🔍 Retrospective:</strong> “What did we learn that we can apply tomorrow?”</li>
    </ul>

    <h4>🧠 Mindset Prompts to Try</h4>
    <ul>
      <li>“What would this look like if it were easy?”</li>
      <li>“Are we optimizing for speed or sustainability?”</li>
      <li>“Who benefits most from this work — and how do we know?”</li>
      <li>“What’s the smallest slice of value we can deliver now?”</li>
      <li>“If this fails, what will we learn?”</li>
      <li>“What’s one thing we can stop doing to move faster?”</li>
    </ul>

    <h4>📣 Coaching Tips</h4>
    <ul>
      <li>🧘 Keep it light — spark curiosity, not judgment</li>
      <li>🧭 Use prompts in Slack, standups, or sprint reviews</li>
      <li>🧠 Rotate prompts weekly to keep them fresh</li>
      <li>🎯 Invite the team to create their own prompts</li>
    </ul>
  `
  ;
}
if (module === 'philosophy') {
  modalBody.innerHTML = `
    <h3>🧭 Delivery Philosophy</h3>
    <p><em>Agile isn’t just a framework — it’s a mindset.</em></p>
    <ul>
      <li><strong>Transparency over perfection:</strong> We share early, often, and honestly.</li>
      <li><strong>Empowerment over control:</strong> Teams thrive when they own their process.</li>
      <li><strong>Progress over process:</strong> Rituals serve outcomes, not the other way around.</li>
    </ul>
    <p>Every decision, ritual, and metric should reinforce clarity, trust, and momentum.</p>
  `;
}

if (module === 'norms') {
  modalBody.innerHTML = `
    <h3>🧑‍🤝‍🧑 Team Norms</h3>
    <p><em>Culture is built in the small moments.</em></p>
    <ul>
      <li><strong>Feedback is a gift:</strong> We give and receive it with curiosity and care.</li>
      <li><strong>Retros are sacred:</strong> We protect time for reflection and growth.</li>
      <li><strong>Document decisions:</strong> Not just tasks — clarity lives in context.</li>
      <li><strong>Participation over presence:</strong> Cameras optional, engagement essential.</li>
    </ul>
    <p>These norms evolve with the team — we revisit them quarterly.</p>
  `;
}

if (module === 'tools') {
  modalBody.innerHTML = `
    <h3>🛠️ Tool Stack</h3>
    <p><em>Tools should amplify clarity, not clutter.</em></p>
    <table>
      <tr><th>Tool</th><th>Purpose</th></tr>
      <tr><td>Jira</td><td>Sprint tracking & backlog management</td></tr>
      <tr><td>Confluence</td><td>Documentation & decision logs</td></tr>
      <tr><td>Miro</td><td>Visual collaboration & retros</td></tr>
      <tr><td>Slack</td><td>Real-time communication</td></tr>
      <tr><td>Postman</td><td>API testing & validation</td></tr>
    </table>
    <p>We review tooling quarterly to ensure it still serves the team’s needs.</p>
  `;
}

if (module === 'improvement') {
  modalBody.innerHTML = `
    <h3>🧪 Continuous Improvement</h3>
    <p><em>We treat delivery as a living system — always evolving.</em></p>
    <ul>
      <li><strong>Delivery Labs:</strong> Monthly sessions to test new rituals or metrics.</li>
      <li><strong>Retro Remix:</strong> Gamified formats to keep feedback fresh.</li>
      <li><strong>Demo Roulette:</strong> Randomized presenters to boost cross-team exposure.</li>
      <li><strong>MTTR Tracking:</strong> Using incident tags to monitor recovery speed.</li>
    </ul>
    <p>Every experiment is documented, reviewed, and either adopted or retired.</p>
  `;
}

  // Add other modules here (metrics, coaching, etc.)
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
}

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// Close modal when clicking outside modal content
window.addEventListener('click', function(event) {
  const modal = document.getElementById('modal');
  const content = document.querySelector('.modal-content');
  if (event.target === modal) {
    closeModal();
  }
});

