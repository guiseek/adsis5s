export const initPizzaForm = () => {
  
  
  const form = document.querySelector('form')

  if (form) {
    
    form.onsubmit = (ev) => {
      ev.preventDefault()

      const data = new FormData(form)
      console.log(data.getAll('topping'));
      
      console.log(Object.fromEntries(data.entries()))
    }
  }
}
