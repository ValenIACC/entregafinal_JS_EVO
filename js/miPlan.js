let cartStorage = localStorage.getItem("ejerciciosPlan")
cartStorage = JSON.parse(cartStorage)

let cartContainer = document.getElementById("cart-section")


function renderPlan (cartItems) {
    cartItems.forEach(ejercicios => {
        const card = document.createElement("div")
        card.innerHTML =    
        `<h3>${ejercicios.nombre}</h3>
        <p> Series: ${ejercicios.series}</p>
        <p> Repeticiones: ${ejercicios.repeticiones}</p>
        <p> Peso: ${ejercicios.peso}</p>
        <button class="ejercicioAgregar" id="${ejercicios.id}"> Completado </button>
        <button class="delete-btn"> - Eliminar</button>`
        
        cartContainer.appendChild(card)
    })
    
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Eliminar el ejercicio visualmente
            this.parentNode.remove();
    
            // Obtener el ID del ejercicio a eliminar
            const ejercicioId = this.parentNode.querySelector('.ejercicioAgregar').id;
    
            // Eliminar el ejercicio de la lista en el almacenamiento local
            cartStorage = cartStorage.filter(ejercicio => ejercicio.id !== parseInt(ejercicioId));
            localStorage.setItem("ejerciciosPlan", JSON.stringify(cartStorage));
        });
    });
// Evento para marcar ejercicio como completado y cambiar color a verde
const completeButtons = document.querySelectorAll('.ejercicioAgregar');
completeButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Agregar lógica para marcar el ejercicio como completado
        console.log('Ejercicio completado: ' + this.parentNode.querySelector('h3').innerText);

        // Cambiar el color del botón a verde
        this.style.backgroundColor = 'green';
        this.style.color = 'white';
    });
});

}

renderPlan(cartStorage)
