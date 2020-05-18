const comprarBoleto = (function() {
  // privado
  let evento = 'Conferencia JS 2020'
  let precio = 666
  const adquirirBoleto = () => {
    const elemento = document.createElement('p')
    elemento.textContent = `comprando un boleto para: ${evento}
      precio: ${precio}`
    document.getElementById('resultado').appendChild(elemento)
  }
  // público
  // cualquier método o atributo en return puede ser visible desde fuera
  return {
    mostrarBoleto: function() {
      adquirirBoleto()
    }
  }
})()

comprarBoleto.mostrarBoleto()
