var accordion = document.getElementsByClassName("accordion");

for (var i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.classList.contains("grid-rows-[1fr]")) {
      panel.classList.remove("grid-rows-[1fr]", "opacity-100", "py-2");
      panel.classList.add("grid-rows-[0fr]", "opacity-0", "py-0");
    } else {
      panel.classList.remove("grid-rows-[0fr]", "opacity-0", "py-0");
      panel.classList.add("grid-rows-[1fr]", "opacity-100", "py-2");
    }
  });
}
