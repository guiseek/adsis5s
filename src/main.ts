import maskForm from './forms/mask.html?raw'
import './forms/mask'
import './style.scss'

const app = document.querySelector('#app')

if (app) {
  app.innerHTML = maskForm
}
