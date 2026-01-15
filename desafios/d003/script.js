function contar() {
    let inicio = document.getElementById('txtinicio').value
    let fim = document.getElementById('txtfim').value
    let passo = document.getElementById('txtpasso').value
    let resultado = document.getElementById('res')
    
    if (inicio === '' || fim === '') {
        resultado.innerHTML = "Impossível contar!"
    } else {
        if (passo <= 0) {
            alert('Passo inválido! Considerado PASSO 1')
            passo = 1
        }
        resultado.innerHTML = "Contando... <br>"
        inicio = Number(inicio)
        fim = Number(fim)
        passo = Number(passo)
        if (inicio < fim) {
            for (inicio ; inicio <= fim ; inicio += passo){
                resultado.innerHTML += `${inicio}, `
            }
        } else {
            for (inicio ; inicio >= fim ; inicio -= passo){
                resultado.innerHTML += `${inicio}, `
            }
        }
        resultado.innerHTML += 'Fim.'
    }
}