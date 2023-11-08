let cols = []
document.querySelectorAll(".card").forEach((x, i) => {
  let hue = i * 20 % 360;
  x.addEventListener('mouseover', (e) => {
    document.documentElement.style.setProperty('--highlight', `oklch(.75 .12 ${hue})`);
  });
  x.addEventListener('mouseout', (e) => {
    e.target.style.color = null;
  });
});

