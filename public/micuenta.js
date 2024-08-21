document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('form-title').textContent = 'Iniciar Sesión';
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    }

    // Manejar el registro
    document.getElementById('register-form').addEventListener('submit', async (event) => {
        event.preventDefault();

        const username = document.getElementById('nombre').value;
        const password = document.getElementById('contraseña').value;
        const profileImage = document.getElementById('imagen').files[0];

        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        formData.append('profileImage', profileImage);

        try {
            const response = await fetch('http://localhost:6550/register', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (response.ok) {
                localStorage.setItem('user', JSON.stringify(result.user));
                alert('Registro exitoso! Puedes iniciar sesión ahora.');
                window.location.reload();
            } else {
                alert(`Error: ${result.message || 'Error desconocido'}`);
            }
        } catch (error) {
            console.error('Error en el registro:', error);
            alert('Ocurrió un error al registrar el usuario. Por favor, inténtalo de nuevo.');
        }
    });

        // Manejar el inicio de sesión
        document.getElementById('login-form').addEventListener('submit', async (event) => {
            event.preventDefault();
    
            const username = document.getElementById('login-usuario').value;
            const password = document.getElementById('login-contraseña').value;
    
            try {
                const response = await fetch('http://localhost:6550/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password }),
                });
    
                const result = await response.json();
    
                if (response.ok) {
                    localStorage.setItem('user', JSON.stringify(result.user));
                    window.location.href = 'profile.html';
                } else {
                    alert(`Error: ${result.message || 'Error desconocido'}`);
                }
            } catch (error) {
                console.error('Error en el inicio de sesión:', error);
                alert('Ocurrió un error al iniciar sesión. Por favor, inténtalo de nuevo.');
            }
        });
    });
