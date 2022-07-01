window.addEventListener("scroll", progressAll);

function progressAll() {
  const triggerProgress = (window.innerHeight / 8) * 4;
  const progressTop = document.getElementById("tech");

  const progressStart = progressTop.getBoundingClientRect().top;

  if (progressStart < triggerProgress) {
    // HTML

    const progress = document.getElementById("htmldone");
    progress.style.width = '95%';

    // CSS

    const progressCss = document.getElementById("cssdone");
    progressCss.style.width = progressCss.getAttribute("data-done");
    progressCss.style.opacity = 1;

    //SASS

    const progressSass = document.getElementById("sassdone");
    progressSass.style.width = progressSass.getAttribute("data-done");
    progressSass.style.opacity = 1;

    // BOOTSTRAP

    const progressBootstrap = document.getElementById("bootdone");
    progressBootstrap.style.width = progressBootstrap.getAttribute("data-done");
    progressBootstrap.style.opacity = 1;

    // JAVASCRIPT

    const progressJavscript = document.getElementById("jsdone");
    progressJavscript.style.width = progressJavscript.getAttribute("data-done");
    progressJavscript.style.opacity = 1;

    // REACT

    const progressReact = document.getElementById("reactdone");
    progressReact.style.width = progressReact.getAttribute("data-done");
    progressReact.style.opacity = 1;
  }
}
// increment counter
const counters = document.querySelectorAll(".counter");
counters.forEach(function (counter) {
  counter.innerText = "20";
  updatecounter();

  function updatecounter() {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 1000;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updatecounter, 10);
    } else {
      counter.innerText = target;
    }
  }
});