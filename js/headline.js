/* Console-style headline: type [MRrMano] and [Moamen Hamed] in turn.
   The closing bracket stays visible and blinks like the source theme. */
(function () {
  "use strict";

  var names = ["[MRrMano", "[Moamen Hamed"];
  var HOLD_MS = 2400;
  var TYPE_MS = 90;
  var DELETE_MS = 45;

  function start() {
    var target = document.querySelector("[data-headline-name]");
    if (!target) return;

    var reducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    var index = 0;
    var deleting = false;

    function step() {
      var full = names[index];
      var shown = target.textContent;

      if (!deleting && shown === full) {
        deleting = true;
        return window.setTimeout(step, HOLD_MS);
      }

      if (deleting && shown === "") {
        deleting = false;
        index = (index + 1) % names.length;
        return window.setTimeout(step, 350);
      }

      target.textContent = deleting
        ? full.slice(0, shown.length - 1)
        : full.slice(0, shown.length + 1);

      window.setTimeout(step, deleting ? DELETE_MS : TYPE_MS);
    }

    window.setTimeout(step, HOLD_MS);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
