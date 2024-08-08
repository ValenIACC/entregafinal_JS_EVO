const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const app = express();
const port = 6550;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de multer para manejar las cargas de imágenes
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'public', 'uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage });

// Almacenamiento temporal en memoria para usuarios
let users = [];

// Ruta para manejar el registro
app.post('/register', upload.single('profileImage'), (req, res) => {
    try {
        const { username, password } = req.body;
        const profileImage = req.file ? `/uploads/${req.file.filename}` : '';

        if (!username || !password) {
            return res.status(400).json({ message: 'Faltan campos requeridos' });
        }

        const userExists = users.find(user => user.username === username);
        if (userExists) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        const newUser = { username, password, profileImage };
        users.push(newUser);

        res.json({ message: 'Usuario registrado con éxito', user: newUser });
    } catch (error) {
        console.error('Error en /register:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// Ruta para manejar el inicio de sesión
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Verifica las credenciales
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        // Respuesta en caso de éxito
        res.json({
            user: {
                username: user.username,
                profileImage: user.profileImage,
                token: 'exampleToken' // Un token de ejemplo para el cliente
            }
        });
    } else {
        // Respuesta en caso de error
        res.status(401).json({ message: 'Credenciales inválidas' });
    }
});


// Middleware para manejar errores globales
app.use((err, req, res, next) => {
    console.error('Error global:', err);
    res.status(500).json({ message: 'Error interno del servidor' });
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
