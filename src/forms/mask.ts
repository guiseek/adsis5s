export default () => {
  document
    .querySelectorAll<HTMLInputElement>('[data-mask]')
    // Continue a máscara aqui 👇
    .forEach(console.log)
}
