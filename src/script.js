const navDialog = document.getElementById("nav-dialog");

function handleMenu() {
  navDialog.classList.toggle("hidden");
}

  AOS.init({
    duration: 1000,
    once: true,
  });
