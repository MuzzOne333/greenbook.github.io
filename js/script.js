document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  toggle.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    toggle.innerHTML = isDark ? '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-stars-fill"></i>';
  });

  window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 50);
  });

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-bg');
    const speed = scrolled * 0.5;
    parallax.style.transform = `translateY(${speed}px) scale(1.1)`;
  });

  document.getElementById('heroCta').addEventListener('click', () => {
    document.getElementById('help').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('donateBtn').addEventListener('click', () => {
    alert('Thank you! Redirecting to secure donation...');
  });

  const stories = [
    { title: "Max and Minnie: Life After Years in a Cage", text: "Two bears rescued from captivity now thrive in sanctuary.", img: "https://images.unsplash.com/photo-1564349683136-77e08b575c9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "Slow Lorises Electrocuted in Indonesia", text: "Shocking reality uncovered — we need your help to save them.", img: "https://images.unsplash.com/photo-1570481662002-501e50b2a1b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "Eight Javan Slow Lorises Released", text: "Returned to the wild ahead of International Slow Loris Day.", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
  ];

  const container = document.getElementById('storiesContainer');
  stories.forEach(s => {
    container.innerHTML += `
      <div class="col-md-4 fade-in">
        <div class="story-card h-100">
          <img src="${s.img}" class="img-fluid rounded-top" alt="${s.title}" style="height:200px; object-fit:cover;">
          <div class="p-4">
            <h5>${s.title}</h5>
            <p class="small text-muted">${s.text}</p>
            <button class="btn btn-outline-light btn-sm">Read More</button>
          </div>
        </div>
      </div>`;
  });

  window.setAnimal = (name) => {
    document.getElementById('animalName').textContent = name;
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});