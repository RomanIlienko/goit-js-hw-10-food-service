
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
// 1. Получаю ссылки для работы
const refs = {
  body: document.querySelector('body'),
  switch: document.querySelector('.theme-switch__toggle')
}

const THEME_KEY = 'theme';
// 2. Вешаю слушателя на чекбокс с функцией которая меняет тему
refs.switch.addEventListener('change', themeChange)
// 3.Функция которая вешает на боди нужный класс
function themeChange(event) {
  refs.body.classList.toggle(Theme.DARK)
  refs.body.classList.toggle(Theme.LIGHT)

  // 4.Состояние чекбокса
  const checked = refs.switch.checked
  // 5.Если состояние checked, в localStorage сэтим на нужную тему
  if (checked) {
    localStorage.setItem(THEME_KEY, Theme.DARK)
  }
  // 6. Если нет, убираю тему и ставлю тему по умолчанию
  else {
    localStorage.removeItem(THEME_KEY, Theme.DARK)
    localStorage.setItem(THEME_KEY, Theme.LIGHT)
  }
a
}
//  7. Получаем текущую тему в localStorage
const currentTheme = localStorage.getItem('theme')
// 8. Если текщая тема темная, на боди вешаем класс с темной темой
if (currentTheme === Theme.DARK) {
  refs.body.classList.add(Theme.DARK)
  // 9. Состояние чекбокса при этот должно быть true
  refs.switch.checked = true
 }