document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('logoutModal');
    const stayBtn = document.getElementById('stayLoggedIn');
    const confirmBtn = document.getElementById('confirmLogout');
    const sidebarLogout = document.getElementById('logoutTrigger');
    const topbarLogout = document.querySelector('.logout-circle');
    const navItems = document.querySelectorAll('.nav-item');
    const progressFill = document.querySelector('.hero-progress-fill');

    const openModal = (e) => {
        if (e) e.preventDefault();
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    };

    const closeModal = () => {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };

    // Modal Triggers
    if (sidebarLogout) sidebarLogout.addEventListener('click', openModal);
    if (topbarLogout) topbarLogout.addEventListener('click', openModal);
    if (stayBtn) stayBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    if (confirmBtn) {
        confirmBtn.addEventListener('click', () => {
            window.location.href = 'login.html'; 
        });
    }

    // Nav Item Clicks (Excluding Logout)
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Progress Bar
    if (progressFill) {
        setTimeout(() => {
            progressFill.style.transition = 'width 2s ease-in-out';
            progressFill.style.width = '64%'; 
        }, 1000);
    }
});