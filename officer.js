<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {

    const logoutModal = document.getElementById('logoutModal');
    const attendanceModal = document.getElementById('attendanceModal');

    const stayBtn = document.getElementById('stayLoggedIn');
    const confirmBtn = document.getElementById('confirmLogout');
    const sidebarLogout = document.getElementById('sidebarLogout');
    const topbarLogout = document.querySelector('.logout-circle');

    const closeAttendance = document.getElementById('closeAttendance');
    const cancelAttendance = document.getElementById('cancelAttendance');
    const createEventBtn = document.querySelector('.btn-create-event');
    const configureBtns = document.querySelectorAll('.btn-outline'); // Buttons from event cards

    const navMapping = {
        'nav-overview': { section: 'section-overview', title: 'Hello, Officer' },
        'nav-events': { section: 'section-events', title: 'Manage Event' },
        'nav-attendance': { section: 'section-attendance', title: 'Attendance Tracking' },
        'nav-reports': { section: 'section-reports', title: 'Generated Reports' }
    };

    const dynamicTitle = document.getElementById('dynamic-title');

    const openModal = (modalElement) => {
        if (modalElement) {
            modalElement.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    };

    const closeModal = (modalElement) => {
        if (modalElement) {
            modalElement.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };

    if (sidebarLogout) sidebarLogout.addEventListener('click', () => openModal(logoutModal));
    if (topbarLogout) topbarLogout.addEventListener('click', () => openModal(logoutModal));
    if (stayBtn) stayBtn.addEventListener('click', () => closeModal(logoutModal));
    
    if (confirmBtn) {
        confirmBtn.addEventListener('click', () => {
            window.location.href = 'login.html'; 
        });
    }

    if (createEventBtn) createEventBtn.addEventListener('click', () => openModal(attendanceModal));
    
    configureBtns.forEach(btn => {
        btn.addEventListener('click', () => openModal(attendanceModal));
    });

    if (closeAttendance) closeAttendance.addEventListener('click', () => closeModal(attendanceModal));
    if (cancelAttendance) cancelAttendance.addEventListener('click', () => closeModal(attendanceModal));

    window.addEventListener('click', (e) => {
        if (e.target === logoutModal) closeModal(logoutModal);
        if (e.target === attendanceModal) closeModal(attendanceModal);
    });

    const resetNavigation = () => {
        // Hide all sections
        Object.values(navMapping).forEach(item => {
            const sec = document.getElementById(item.section);
            if (sec) sec.style.display = 'none';
        });

        Object.keys(navMapping).forEach(id => {
            const nav = document.getElementById(id);
            if (nav) nav.classList.remove('active');
        });
    };

    Object.keys(navMapping).forEach(id => {
        const navBtn = document.getElementById(id);
        if (navBtn) {
            navBtn.addEventListener('click', () => {
                resetNavigation();

                navBtn.classList.add('active');

                const sectionId = navMapping[id].section;
                const section = document.getElementById(sectionId);
                if (section) section.style.display = 'block';

                if (dynamicTitle) dynamicTitle.textContent = navMapping[id].title;
            });
        }
    });
=======
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
>>>>>>> 2e4bbd18f6441800bde2bc90aafeed9883c75c8c
});