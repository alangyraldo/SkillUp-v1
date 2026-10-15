// Seleccionamos todos los elementos de pregunta
function iniciarPreguntas(){
    
const itemsPregunta = document.querySelectorAll('.item-pregunta');

itemsPregunta.forEach(item => {
    const cabecera = item.querySelector('.cabecera-pregunta');

    cabecera.addEventListener('click', () => {
        // Alterna la clase 'activo' en el ítem actual para desplegar/contraer
        item.classList.toggle('activo');
    });
});
}