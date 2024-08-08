document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('profile-image').src = user.profileImage;
        document.getElementById('username').textContent = `Usuario: ${user.username}`;
    } else {
        alert('No has iniciado sesión.');
        window.location.href = 'cuenta.html';
    }
});
