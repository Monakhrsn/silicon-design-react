const darkmodeSwitch = document.querySelector('#flexSwitchCheckDefault');

const hasDarkmode = localStorage.getItem('darkmode')

if(hasDarkmode == null) {
  if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkMode()
  } else {
    disableDarkMode()
  }
} else if(hasDarkmode === 'on') {
  enableDarkMode()
} else if (hasDarkmode === 'off') {
  disableDarkMode()
}

darkmodeSwitch.addEventListener('change', () => {
  if(darkmodeSwitch.checked) {
    enableDarkMode()
    localStorage.setItem('darkmode', 'on')
  } else {
    disableDarkMode()
    localStorage.setItem('darkmode', 'off')
  }
})

function enableDarkMode() {
  flexSwitchCheckDefault.checked = true
  document.body.classList.add('dark')
}
function disableDarkMode() {
  flexSwitchCheckDefault.checked = false
  document.body.classList.remove('dark')
}