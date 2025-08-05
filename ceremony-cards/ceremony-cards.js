document.addEventListener('DOMContentLoaded', () => {
  const filterSelect = document.getElementById('maturity-filter');
  const cards = Array.from(document.querySelectorAll('.ceremony-card'));

  // Filter by maturity
  filterSelect.addEventListener('change', () => {
    const selected = filterSelect.value;
    cards.forEach(card => {
      const matches = selected === 'all' || card.dataset.maturity === selected;
      card.style.display = matches ? 'block' : 'none';
    });
  });

  // Flip on click or keyboard
  cards.forEach(card => {
    // Toggle aria-expanded
    const toggleFlip = () => {
      const expanded = card.getAttribute('aria-expanded') === 'true';
      card.setAttribute('aria-expanded', String(!expanded));
    };

    card.addEventListener('click', toggleFlip);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleFlip();
      }
    });
  });
});