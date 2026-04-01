document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('logoutModal');
    const stayBtn = document.getElementById('stayLoggedIn');
    const confirmBtn = document.getElementById('confirmLogout');

    const logoutTriggers = [
        document.getElementById('sidebarLogout'),
        document.getElementById('topbarLogout')
    ];

    const showModal = () => {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 
    };

    const hideModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    logoutTriggers.forEach(trigger => {
        if (trigger) {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                showModal();
            });
        }
    });

    stayBtn.addEventListener('click', hideModal);

    confirmBtn.addEventListener('click', () => {
        window.location.href = 'login.html'; 
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideModal();
        }
    });
});