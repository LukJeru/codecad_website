const work = document.getElementById("first");
const about = document.getElementById("second");
const contact = document.getElementById("third");
const image = document.getElementById("main_img");

work.addEventListener("mouseover", function(e) {
  image.src = "images/eclair.jpg";
})
about.addEventListener("mouseover", function(e) {
  image.src = "images/sun.jpg";
})
contact.addEventListener("mouseover", function(e) {
  image.src = "images/bouregreg.jpeg";
})
work.addEventListener("mouseleave", function(e) {
  image.src = "images/sky.JPG"
})
about.addEventListener("mouseleave", function(e) {
  image.src = "images/sky.JPG"
})
contact.addEventListener("mouseleave", function(e) {
  image.src = "images/sky.JPG"
})
