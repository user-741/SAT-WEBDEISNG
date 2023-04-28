const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", function() {
  sidebar.classList.toggle("retracted");
});

const closeButton = document.querySelector(".close-button");

closeButton.addEventListener("click", function() {
  sidebar.classList.add("retracted");
});
