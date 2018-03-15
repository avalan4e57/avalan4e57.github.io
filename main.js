function showMenu() {
  let nav = document.getElementById('menu')
  nav.classList.toggle('active')
}

const hideMenu = () => {
  const menu = document.getElementById('menu')
  const navToggle = document.getElementById('nav-toggle')
  const isClickedInside = navToggle.contains(event.target)

  if (!isClickedInside) {
    if (menu.classList.contains('active')) {
      menu.classList.remove('active')
    }
  }
}

window.onclick = () => {
  hideMenu()
}
