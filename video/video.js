var b1 = document.querySelector("#bar_button");
b1.addEventListener("click", function() {
  var bt = document.getElementById('bar_text').value;
  if (bt == "재미없어 어쩌지") {
    window.open("https://www.youtube.com/channel/UCMki_UkHb4qSc0qyEcOHHJw", "_blank");
  }
});

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
