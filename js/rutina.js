const ejercicios = [
    {
        id: 1,
        nombre:"Press Banca",
        series: 4,
        repeticiones: "6 - 8",
        peso: 80,
    },
    {
        id: 2,
        nombre:"Press Inclinado c/mancuerna",
        series: 4,
        repeticiones: "6 - 8",
        peso: 40,
    },
    {
        id: 3,
        nombre:"Mariposa",
        series: 4,
        repeticiones: "10 - 15",
        peso: 40,
    },
    {
        id: 4,
        nombre:"Press Militar maquina",
        series: 4,
        repeticiones: "6 - 8",
        peso: 30,
    },
    {
        id: 5,
        nombre:"Elevaciones laterales",
        series: 4,
        repeticiones: "8 - 10",
        peso: 20,
    },
    {
        id: 6,
        nombre:"Fondos maquina",
        series: 4,
        repeticiones:" 8 - 10",
        peso: 100,
    },
    {
        id: 7,
        nombre:"Extenciones en polea",
        series: 4,
        repeticiones: "6 - 8",
        peso: 80,
    },
    {
        id: 8,
        nombre:"Jalon dorsal",
        series: 4,
        repeticiones: "8 - 10",
        peso: 50,
    },
    {
        id: 9,
        nombre:"Remo sentado en maquina",
        series: 4,
        repeticiones: "8 - 10",
        peso: 50,
    },
    {
        id: 10,
        nombre:"Elevaciones de hombros",
        series: 4,
        repeticiones: "6 - 8",
        peso: 30,
    },
    {
        id: 11,
        nombre:"Curl de biceps en banco inclinado",
        series: 4,
        repeticiones: "6 - 8",
        peso: 25,
    },
    {
        id: 12,
        nombre:"Curl de biceps banco scott",
        series: 4,
        repeticiones: "6 - 8",
        peso: 20,
    },
    {
        id: 13,
        nombre:"Curl de biceps en polea",
        series: 4,
        repeticiones: "6 - 8",
        peso: 40,
    },
    {
        id: 14,
        nombre:"Sentadillas libres",
        series: 4,
        repeticiones: "6 - 8",
        peso: 50,
    },
    {
        id: 15,
        nombre:"Prensa 45º",
        series: 4,
        repeticiones: "8 - 10",
        peso: 140,
    },
    {
        id: 16,
        nombre:"Isquiotibiales",
        series: 4,
        repeticiones: "10 - 12",
        peso: 35,
    },
    {
        id: 17,
        nombre:"Cuadriceps",
        series: 4,
        repeticiones: "8 - 10",
        peso: 120,
    },
    {
        id: 18,
        nombre:"Pantorrilla",
        series: 4,
        repeticiones: "6 - 8",
        peso: 80,
    },
    {
        id: 19,
        nombre:"Peso muerto",
        series: 4,
        repeticiones: "6 - 8",
        peso: 60,
    },
    {
        id: 20,
        nombre:"Sentadilla bulgara",
        series: 4,
        repeticiones: "6 - 8",
        peso: 30,
    },
]

let ejerciciosPlan = []

let ejerciciosContenedor = document.getElementById("ejercicios-contenedor")
function renderEjercicios(ejerciciosArray){
    ejerciciosArray.forEach(ejercicio => {
        const card = document.createElement("div");
        card.innerHTML = 
                            `<h3>${ejercicio.nombre}</h3>
                            <p> Series: ${ejercicio.series}</p>
                            <p> Repeticiones: ${ejercicio.repeticiones}</p>
                            <p> Peso:  ${ejercicio.peso}</p>
                            <button class="ejercicioAgregar" id="${ejercicio.id}"> +  Sumar a mi entrenamiento </button>`
        ejerciciosContenedor.appendChild(card)
    });

    addToCartButton(card);
}

renderEjercicios(ejercicios)

function addToCartButton () {
    addButton = document.querySelectorAll(".ejercicioAgregar")
    addButton.forEach(button => {
        button.onclick = (e) => {
            const ejercicioId = e.currentTarget.id
            const selectedEjercicio = ejercicios.find(ejercicio => ejercicio.id == ejercicioId)

            ejerciciosPlan.push(selectedEjercicio)
            console.log(ejerciciosPlan)

            localStorage.setItem("ejerciciosPlan", JSON.stringify(ejerciciosPlan))
        }
    })
    // Agregar evento de hover a los elementos de ejercicio
    card.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'lightgray';
});

// Restablecer el estilo cuando el cursor sale del elemento
card.addEventListener('mouseout', function() {
    this.style.backgroundColor = 'white';
});

}
