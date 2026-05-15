// Infinity Stim - Main JS

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function() {
      links.classList.toggle('active');
      toggle.classList.toggle('active');
    });
    // Close menu on link click
    links.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        links.classList.remove('active');
        toggle.classList.remove('active');
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Scroll animations
  var fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length > 0) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    fadeEls.forEach(function(el) { observer.observe(el); });
  }
});
