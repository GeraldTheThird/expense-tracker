// Handle tab switching
document.querySelectorAll('.tabs').forEach(tabGroup => {
  const tabs = tabGroup.querySelectorAll('.tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove 'active' class from all tabs in the same group
      tabs.forEach(t => t.classList.remove('active'));

      // Add 'active' to the clicked tab
      tab.classList.add('active');

      // Future functionality: Load data based on tab
      console.log(`Switched to: ${tab.textContent}`);
    });
  });
});
