function carregar(){
    var msg = document.getElementById('msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12){
        img.src = 'day.jpg'
        document.body.style.backgroundColor = 'rgb(89, 222, 255)'
    } else if (hora >= 12 && hora < 18){
        img.src = 'noon.jpg'
        document.body.style.backgroundColor = 'rgb(202, 91, 17)'
    } else {
        img.src = 'night.jpg'
        document.body.style.backgroundColor = 'rgba(36, 11, 105, 0.774)'
    }
}