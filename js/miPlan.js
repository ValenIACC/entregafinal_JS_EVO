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
            this.parentNode.remove();
    
            
            const ejercicioId = this.parentNode.querySelector('.ejercicioAgregar').id;

            cartStorage = cartStorage.filter(ejercicio => ejercicio.id !== parseInt(ejercicioId));
            localStorage.setItem("ejerciciosPlan", JSON.stringify(cartStorage));
        });
    });
    
const completeButtons = document.querySelectorAll('.ejercicioAgregar');
completeButtons.forEach(button => {
    button.addEventListener('click', function() {
        console.log('Ejercicio completado: ' + this.parentNode.querySelector('h3').innerText);

        
        this.style.backgroundColor = 'green';
        this.style.color = 'white';
    });
});

}

renderPlan(cartStorage)
