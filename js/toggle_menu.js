function toggleMenu() {
  const burger = document.getElementById("burger")
  const menu = document.getElementById("menu")

  burger.classList.toggle("is-active")
  menu.classList.toggle("is-active")
}