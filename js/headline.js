/* Console-style headline: type [MRrMano] and [Moamen Hamed] in turn. */
(function () {
  "use strict";

  var names = ["[MRrMano]", "[Moamen Hamed]"];
  var HOLD_MS = 2400;
  var TYPE_MS = 90;
  var DELETE_MS = 45;

  function start() {
    var target = document.querySelector("[data-headline-name]");
    if (!target) return;

    var caret = document.querySelector("[data-headline-caret]");
    var reducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    var index = 0;
    var deleting = false;

    function schedule(next, delay) {
      window.setTimeout(next, delay);
    }

    function step() {
      var full = names[index];
      var shown = target.textContent;

      if (caret)
        caret.classList.toggle("is-typing", !deleting && shown !== full);

      if (!deleting && shown === full) {
        deleting = true;
        if (caret) caret.classList.remove("is-typing");
        return schedule(step, HOLD_MS);
      }

      if (deleting && shown === "") {
        deleting = false;
        index = (index + 1) % names.length;
        return schedule(step, 350);
      }

      target.textContent = deleting
        ? full.slice(0, shown.length - 1)
        : full.slice(0, shown.length + 1);

      schedule(step, deleting ? DELETE_MS : TYPE_MS);
    }

    schedule(step, HOLD_MS);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
