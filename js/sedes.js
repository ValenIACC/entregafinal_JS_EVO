document.addEventListener('DOMContentLoaded', () => {
    const locations = [
        {
            name: "SEDE BARRIO JARDIN",
            mapUrl: "https://www.google.com/maps/place/Evo+Club/@-31.4497599,-64.330045,12z/data=!4m10!1m2!2m1!1sevo+gym!3m6!1s0x9432a2fb7a43f627:0xa4e8e011bae4470!8m2!3d-31.4497599!4d-64.1858494!15sCgdldm8gZ3ltkgEDZ3lt4AEA!16s%2Fg%2F11bw65qb10?entry=ttu",
            imageUrl: "http://evoclub.com.ar/img/lat_Jardin.jpg"
        },
        {
            name: "SEDE VILLA BELGRANO",
            mapUrl: "https://maps.app.goo.gl/Knciw29bFwwSgAgs9",
            imageUrl: "http://evoclub.com.ar/img/galerias/svb02.jpg"
        },
        {
            name: "SEDE LA CAROLINA",
            mapUrl: "https://www.google.com/maps/place/Evo+Lomas/@-31.2995117,-64.4215169,12z/data=!4m10!1m2!2m1!1sevo+gym!3m6!1s0x94329d2906cb08f9:0x7d0b2b3c37411945!8m2!3d-31.3524531!4d-64.3085663!15sCgdldm8gZ3ltkgEDZ3lt4AEA!16s%2Fg%2F11h_0dbb_y?entry=ttu",
            imageUrl: "http://evoclub.com.ar/img/lat_Carolina.jpg"
        },
        {
            name: "SEDE VILLA ALLENDE",
            mapUrl: "https://www.google.com/maps/place/Evo+Otra+Vida/@-31.2995117,-64.2773213,17z/data=!3m1!4b1!4m6!3m5!1s0x94329cf75ad853d1:0xce532aa63d9a9394!8m2!3d-31.2995117!4d-64.2773213!16s%2Fg%2F11bw5yyd8k?authuser=0&hl=es-419&entry=ttu",
            imageUrl: "http://evoclub.com.ar/img/lat_Va.jpg"
        }
    ];

    const locationsContainer = document.getElementById('locations');

    locations.forEach(location => {
        const locationDiv = document.createElement('div');
        locationDiv.classList.add('location');

        // Crear el enlace con el nombre de la sede
        const title = document.createElement('h2');
        const link = document.createElement('a');
        link.href = location.mapUrl;
        link.target = "_blank";
        link.textContent = location.name;
        title.appendChild(link);

        // Crear la imagen que reemplaza el mapa
        const image = document.createElement('img');
        image.src = location.imageUrl;
        image.alt = location.name;

        locationDiv.appendChild(title);
        locationDiv.appendChild(image);

        locationsContainer.appendChild(locationDiv);
    });
});
