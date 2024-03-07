(function () {
  "use strict";

  var section = document.querySelectorAll("section");
  var sections = {};
  var i = 0;

  var activeClass = ["active", "text-sky-500", "border-sky-500", "bg-sky-50"];
  var inactiveClass = ["text-gray-600", "border-gray-200"];

  Array.prototype.forEach.call(section, function (e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function () {
    var scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector(".active").classList.add(...inactiveClass);
        document.querySelector(".active").classList.remove(...activeClass);
        document
          .querySelector("a[href*=" + i + "]")
          .classList.add(...activeClass);
      }
    }
  };
})();
