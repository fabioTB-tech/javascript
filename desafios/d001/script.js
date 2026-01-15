function carregar() {
    var msg = document.getElementById('msg')
    var img = document.querySelector('div#foto')
    var data = new Date()
    var hora =  data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.style.backgroundImage = "URL('images/foto-manha.jpg')"
        document.body.style.backgroundColor = '#f2dfbe'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.style.backgroundImage = "URL('images/foto-tarde.jpg')"
        document.body.style.backgroundColor = '#f89142'
    } else {
        // BOA NOITE!
        img.style.backgroundImage = "URL('images/foto-noite.jpg')"
        document.body.style.backgroundColor = '#0C486D'
    }
}