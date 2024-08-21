let cartStorage = JSON.parse(localStorage.getItem("ejerciciosPlan")) || [];
let cartContainer = document.getElementById("cart-section");

function renderPlan(cartItems) {
    cartContainer.innerHTML = ''; // Limpiar el contenedor antes de renderizar

    cartItems.forEach(ejercicio => {
        const card = document.createElement("div");
        card.innerHTML =    
        `<h3>${ejercicio.nombre}</h3>
        <p> Series: ${ejercicio.series}</p>
        <p> Repeticiones: ${ejercicio.repeticiones}</p>
        <p> Peso: ${ejercicio.peso}</p>
        <button class="ejercicioAgregar" id="${ejercicio.id}"> Completado </button>
        <button class="delete-btn"> - Eliminar</button>`;
        
        cartContainer.appendChild(card);
    });

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

renderPlan(cartStorage);


renderPlan(cartStorage)
