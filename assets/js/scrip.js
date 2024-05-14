$(document).ready(function () {
    $("button").tooltip()
})

$('#enviar_correo').click(function () {

    alert("Correo enviado correctamente")
})

$("h5").click(function () {

    $(this).css({
        "color": "red",
        "font-size": "2rem"
    })
})

$('.card-title').click(function(){
    $('.recetas-relacionadas p').toggle("hide");
})