import maskForm from './forms/cep.html?raw'
import {cep} from './forms/cep'
import './style.scss'

const app = document.querySelector('#app')

if (app) {
  app.innerHTML = maskForm
  cep()
}
