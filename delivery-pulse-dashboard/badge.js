// === badge.js ===
// Optional enhancement: define badge status types for reuse or future interactivity

(function () {
  // Define badge types and associated CSS classes
  const statuses = [
    { label: 'Planned', class: 'planned' },
    { label: 'In Progress', class: 'in-progress' },
    { label: 'Done', class: 'done' }
  ];

  // Future enhancement idea:
  // Add click behavior to cycle status or open modal for editing
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
