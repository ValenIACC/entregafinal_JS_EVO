


document.addEventListener('DOMContentLoaded', () => {
    // Verifica si hay notificaciones (en este caso, asumimos que no hay)
    const hasNotifications = false;

    if (!hasNotifications) {
        Swal.fire({
            title: 'Sin notificaciones',
            text: 'Aún no tienes notificaciones.',
            icon: 'info',
            confirmButtonText: 'Aceptar'
        });
    }
});
