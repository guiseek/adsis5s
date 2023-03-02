import pizzaForm from './forms/pizza.html?raw'
import {initPizzaForm} from './forms/pizza'
import './style.scss'

const app = document.querySelector('#app')

if (app) {
  app.innerHTML = pizzaForm
  initPizzaForm()
}
