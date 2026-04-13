document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('logoutModal');
    const stayBtn = document.getElementById('stayLoggedIn');
    const confirmBtn = document.getElementById('confirmLogout');
    const sidebarLogout = document.getElementById('sidebarLogout');
    const topbarLogout = document.getElementById('topbarLogout');

    const showModal = (e) => {
        console.log("logout clicked!");
        if (e) e.preventDefault();
        if(modal) modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 
    };

    const hideModal = () => {
        if(modal) modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    if (sidebarLogout) sidebarLogout.addEventListener('click', showModal);
    if (topbarLogout) topbarLogout.addEventListener('click', showModal);
    if (stayBtn) stayBtn.addEventListener('click', hideModal);
    if (confirmBtn) {
        confirmBtn.addEventListener('click', () => {
            window.location.href = 'login.html'; 
        });
    }

    const navOverview = document.getElementById('nav-overview');
    const navActiveEvents = document.getElementById('nav-active-events');
    const navUpcoming = document.getElementById('nav-upcoming'); 
    const navHistory = document.getElementById('nav-history');
    const navReports = document.getElementById('nav-reports');

    const sectionOverview = document.getElementById('section-overview');
    const sectionActiveEvents = document.getElementById('section-active-events');
    const sectionUpcoming = document.getElementById('section-upcoming');
    const sectionHistory = document.getElementById('section-history');
    const sectionReports = document.getElementById('section-reports');


    const resetNavigation = () => {
    [sectionOverview, sectionActiveEvents, sectionUpcoming, sectionHistory, sectionReports].forEach(sec => {
        if(sec) sec.style.display = 'none';
    });
    
    [navOverview, navActiveEvents, navUpcoming, navHistory, navReports].forEach(nav => {
        if(nav) nav.classList.remove('active');
    });
};

    if(navOverview) {
        navOverview.addEventListener('click', () => {
            resetNavigation();
            navOverview.classList.add('active');
            sectionOverview.style.display = 'block';
        });
    }

    if(navActiveEvents) {
        navActiveEvents.addEventListener('click', () => {
            resetNavigation();
            navActiveEvents.classList.add('active');
            sectionActiveEvents.style.display = 'block';
        });
    }

    if(navUpcoming) {
        navUpcoming.addEventListener('click', () => {
            resetNavigation();
            navUpcoming.classList.add('active');
            sectionUpcoming.style.display = 'block';
        });
    }

    if(navHistory) {
        navHistory.addEventListener('click', () => {
            resetNavigation(); 
            navHistory.classList.add('active');
            sectionHistory.style.display = 'block';
        });
    }

    if(navReports) {
        navReports.addEventListener('click', () => {
            resetNavigation();
            navReports.classList.add('active');
            sectionReports.style.display = 'block';
        });
    }
});

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