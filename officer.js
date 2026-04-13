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
});