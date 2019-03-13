process.once('loaded', () => {
  const onload = () => require(`${__dirname}/src`)
  document.addEventListener('DOMContentLoaded', onload)
})
