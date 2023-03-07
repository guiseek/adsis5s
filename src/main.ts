import maskForm from './forms/mask.html?raw'
import maskFn from './forms/mask'
import './style.scss'

const app = document.querySelector('#app')

if (app) {
  app.innerHTML = maskForm
  maskFn()
}
