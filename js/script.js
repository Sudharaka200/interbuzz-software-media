//logo animation
const strip = document.querySelector('.logo-strip');
let pos = 0;

function animate() {
  pos -= 1; // speed
  if (Math.abs(pos) >= strip.scrollWidth / 2) {
    pos = 0; // reset for loop effect
  }
  strip.style.transform = `translateX(${pos}px)`;
  requestAnimationFrame(animate);
}

// Clone content for smooth looping
strip.innerHTML += strip.innerHTML;

animate();





//satisfaction code
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".home-satisfaction-h1");
  let started = false;

  function formatNumber(num) {
      return num.toLocaleString(); // Adds commas
  }

  function animateCountUp(el, endValue, suffix) {
      let startValue = 0;
      const duration = 2000;
      const increment = endValue / (duration / 16);

      const count = () => {
          startValue += increment;
          if (startValue < endValue) {
              el.textContent = formatNumber(Math.floor(startValue)) + suffix;
              requestAnimationFrame(count);
          } else {
              el.textContent = formatNumber(endValue) + suffix;
          }
      };

      requestAnimationFrame(count);
  }

  function isInViewport(elem) {
      const rect = elem.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
  }

  function startCounting() {
      const target = document.querySelector(".home-satisfaction-h1");
      if (isInViewport(target) && !started) {
          started = true;
          counters.forEach(counter => {
              const text = counter.textContent.trim();
              const number = parseInt(text.replace(/[^0-9]/g, ""));
              const suffix = text.match(/[+%]/g) ? text.match(/[+%]/g).join('') : '';
              animateCountUp(counter, number, suffix);
          });
      }
  }

  window.addEventListener("scroll", startCounting);
  startCounting(); // In case it's already in view
});


// Enable slider only for mobile
let swiperInstance;
function initSwiper() {
  if (window.innerWidth < 768 && !swiperInstance) {
    swiperInstance = new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
  } else if (window.innerWidth >= 768 && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}

window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);