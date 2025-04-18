// Menu Mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

      // Toggle current
    item.classList.toggle('active');
    answer.style.display = item.classList.contains('active') ? 'block' : 'none';
    icon.textContent = item.classList.contains('active') ? '−' : '+';
  });
});
// Smart WhatsApp button control
const whatsappBtn = document.querySelector('.whatsapp-float');
const observer = new IntersectionObserver((entries) => {
  whatsappBtn.style.display = entries[0].isIntersecting ? 'none' : 'flex';
}, { threshold: 0.1 });

observer.observe(document.querySelector('#contato'));

// FAQ Nuclear Fix
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');
    
    // Close others
    document.querySelectorAll('.faq-item').forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-answer').style.display = 'none';
      }
    });
    
    // Toggle current
    item.classList.toggle('active');
    answer.style.display = item.classList.contains('active') ? 'block' : 'none';
    icon.textContent = item.classList.contains('active') ? '−' : '+';
  });
});