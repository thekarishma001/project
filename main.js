var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(200)
  .typeString('Technical writing')
  .pauseFor(2000)
  .deleteAll()
  .typeString('Blog writing')
  .pauseFor(2000)
  .deleteAll()
  .typeString('AI Content')
  .pauseFor(2000)
  .start();

const menu = document.getElementById('menu');
const nav = document.getElementsByClassName('nav')[0];
menu.onclick = () => {
  menu.classList.toggle('bx-x');
  nav.classList.toggle('active');
}