const title = document.getElementById('title');

window.addEventListener('scroll', () => {
  if (window.scrollY > title.offsetTop) {
    title.classList.add('sticky');
  } else {
    title.classList.remove('sticky');
  }
});
