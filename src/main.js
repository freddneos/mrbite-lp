import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'aos/dist/aos.css'
import './style.css'

import AOS from 'aos'
import ScrollReveal from 'scrollreveal'

// Initialize AOS animation
AOS.init({
  duration: 1000,
  once: true,
  mirror: false
})

// Initialize smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      })
    }
  })
})

// Initialize ScrollReveal
ScrollReveal().reveal('.feature-card, .benefit-item', {
  delay: 200,
  distance: '20px',
  origin: 'bottom',
  duration: 1000,
  interval: 100
})