const inputField = document.querySelector('.input-field')
const inputIcon = document.querySelector('.input-icon')

inputIcon.addEventListener('click', (e)=>{
  e.preventDefault()

  inputIcon.setAttribute(
    'src',
    inputField.getAttribute('type') === 'password' ? 'assets/eye-off.svg' : 'assets/eye.svg'
  )

  inputField.setAttribute(
    'type',
    inputField.getAttribute('type') === 'password' ? 'text' : 'password'
  )
})
