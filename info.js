// Fade-in on scroll
const faders = document.querySelectorAll('.fade');

const appearOptions = {
  threshold: 0.1
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Redirect to next page
function goToNextPage() {
  window.location.href = "checklist-symptoms.html"; // Change to your next page name
}
