var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Technical')
  .pauseFor(300)
  .deleteAll()
  .typeString('Hello')
  .pauseFor(1000)
  .start();