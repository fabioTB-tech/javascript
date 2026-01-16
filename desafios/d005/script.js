let numeros = []
let valores = document.getElementById('valores')
let resultado = document.getElementById('resultado')



function add(n) {
    n = document.getElementById('txtn')
    num = Number(n.value)

    if (numeros[-1] == num) {
        numeros.push(num)
    } else {
        if (numeros.indexOf(num) == -1) {
            if (num <= 100 && num > 0) {
                numeros.push(num)
                valores.innerHTML += `<option>Valor ${num} adicionado</option>`
            } else {
                alert('[ERRO] Número fora do alcance')
            }
        } else {
            alert('[ERRO] Número já inserido')
        }
    }
    n.value = ''
    n.focus()
    resultado.innerHTML = ''
}

function analise() {
    let maior = numeros[0]
    let menor = numeros[0]
    let soma = 0
    
    // Procura o menor e maior número
    for (let c in numeros) {
        soma += numeros[c]
        if (numeros[c] > maior) {
            maior = numeros[c]
        } else if (numeros[c] < menor) {
            menor = numeros[c]
        }
    }
    let media = soma / numeros.length
    
    resultado.innerHTML = ''
    // Quantidade de números na lista
    resultado.innerHTML += `<p>Ao todo, temos ${numeros.length} números cadastrados.</p>`
    // Maior valor da lista
    resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    // Menor valor da lista
    resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    // Soma dos valores da lista
    resultado.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
    // Média dos valores da lista
    resultado.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(1)}.</p>`

    if (numeros.length == 0) {
        resultado.innerHTML = ''
        alert('Adicione valores antes de finalizar')
    }
}