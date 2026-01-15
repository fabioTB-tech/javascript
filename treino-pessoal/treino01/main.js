function mudaCor() {
    if (document.body.style.backgroundColor == 'black') {
        document.getElementById('botao').style.left = "2.5%"
        document.body.style.backgroundColor = 'white'
        document.getElementById('main').style.backgroundColor = "#b8b8b8"
        document.getElementById('conteudo').style.backgroundColor = "rgb(211, 211, 211)"
        document.getElementById('icon').style = 'transform: rotate(-360deg);'
        document.getElementById('icon').src = 'images/sun.png'
    } else {
        document.getElementById('botao').style.left = "55.5%"
        document.body.style.backgroundColor = 'black'
        document.getElementById('main').style.backgroundColor = "#3C3C3C"
        document.getElementById('conteudo').style.backgroundColor = "grey"
        document.getElementById('icon').src = 'images/moon-stars.png'
        document.getElementById('icon').style = 'transform: rotate(360deg);'
    }
}