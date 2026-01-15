function calcular() {
    var txtvel = document.getElementById('txtvel')
    var res = document.getElementById('res')
    var vel = Number(txtvel.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`
}
