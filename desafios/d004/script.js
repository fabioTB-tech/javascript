function tabuada() {
    let num = document.getElementById('txtn').value
    let res = document.getElementById('res')

    if (num.length == 0) {
        alert('[ ERRO ] Valor inválido! Preencha o campo.')
    } else {
        num = Number(num)
        res.innerHTML = `Resultado: \n\n`
        for (let i=1; i <= 10; i++) {
            res.innerHTML += `${num} x ${i} = ${num*i}\n`
        }
    }
}