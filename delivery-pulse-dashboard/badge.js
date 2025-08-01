// === badge.js ===
// Optional enhancement: define badge status types for reuse or future interactivity

(function () {
  const statuses = [
    { label: 'Planned', class: 'planned', color: '#6c757d' },
    { label: 'In Progress', class: 'in-progress', color: '#007bff' },
    { label: 'Done', class: 'done', color: '#28a745' }
  ];

  // Inject styles if not already present
  const style = document.createElement('style');
  style.textContent = `
    .badge {
      display: inline-block;
      padding: 6px 12px;
      margin-right: 8px;
      border-radius: 12px;
      font-size: 14px;
      color: white;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  `;
  document.head.appendChild(style);

  // Enhance all existing badges
  document.querySelectorAll('.badge').forEach(badge => {
    let currentIndex = statuses.findIndex(s => badge.classList.contains(s.class));

    function updateBadge() {
      const status = statuses[currentIndex];
      badge.textContent = status.label;
      badge.className = 'badge ' + status.class;
      badge.style.backgroundColor = status.color;
    }

    badge.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % statuses.length;
      updateBadge();
    });

    updateBadge(); // Ensure consistent styling
  });
})();


  // 🧘 Stability Slider Behavior
  const slider = document.getElementById('stabilitySlider');
  const emoji = document.getElementById('stabilityEmoji');

  slider.addEventListener('input', () => {
    const value = parseInt(slider.value);
    if (value < 33) {
      emoji.textContent = '😟'; // Low stability
    } else if (value < 66) {
      emoji.textContent = '😐'; // Medium stability
    } else {
      emoji.textContent = '😊'; // High stability
    }
  });

  (function () {
  const vibeMap = {
    '😊': 'Feeling good',
    '😐': 'Neutral',
    '😟': 'Stressed'
  };

  const style = document.createElement('style');
  style.textContent = `
    .vibe {
      font-size: 2rem;
      margin: 0 8px;
      cursor: pointer;
      transition: transform 0.2s ease, opacity 0.2s ease;
    }
    .vibe.selected {
      transform: scale(1.4);
      opacity: 1;
    }
    .vibe:not(.selected) {
      opacity: 0.5;
    }
    .vibe-label, .vibe-average {
      margin-top: 8px;
      font-size: 1rem;
      font-weight: 500;
    }
  `;
  document.head.appendChild(style);

  const vibes = document.querySelectorAll('.vibe');
  const label = document.querySelector('.vibe-label');
  const average = document.querySelector('.vibe-average');

  let teamVotes = [];

  vibes.forEach(vibe => {
    vibe.addEventListener('click', () => {
      vibes.forEach(v => v.classList.remove('selected'));
      vibe.classList.add('selected');

      const emoji = vibe.textContent;
      const score = parseInt(vibe.dataset.score);

      label.textContent = vibeMap[emoji] || 'Unknown vibe';

      // Simulate team vote tracking
      teamVotes.push(score);
      const avg = teamVotes.reduce((a, b) => a + b, 0) / teamVotes.length;

      let avgLabel = '';
      if (avg >= 2.5) avgLabel = '😊 Feeling good';
      else if (avg >= 1.5) avgLabel = '😐 Neutral';
      else avgLabel = '😟 Stressed';

      average.textContent = `Team average: ${avgLabel}`;
    });
  });
})();