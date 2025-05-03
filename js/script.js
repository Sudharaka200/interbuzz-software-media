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

