function openForgotModal() {
    console.log("Attempting to open modal..."); // Check F12 console for this!
    const modal = document.getElementById('forgotPasswordModal');
    if(modal) {
        modal.style.display = 'flex';
    }
}

function closeForgotModal() {
    const modal = document.getElementById('forgotPasswordModal');
    if(modal) {
        modal.style.display = 'none';
    }
}

function sendResetLink() {
    const email = document.getElementById('resetEmail').value;
    if (email) {
        alert("Reset link sent to: " + email);
        closeForgotModal();
    } else {
        alert("Please enter an email.");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const forgotLink = document.querySelector('.forgot-link');
    if (forgotLink) {
        forgotLink.addEventListener('click', (e) => {
            e.preventDefault();
            openForgotModal();
        });
    }
});

const observerOptions = { threshold: 0.15 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

document.addEventListener('DOMContentLoaded', () => {
    const roleButtons = document.querySelectorAll('.role-tab');
    const usernameLabel = document.getElementById('usernameLabel');
    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');
    const loginForm = document.getElementById('loginForm');

    let currentRole = 'student'; 

    roleButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            roleButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            currentRole = button.getAttribute('data-role');

            if (loginForm) {
                loginForm.style.opacity = '0';
                setTimeout(() => {
                    updateUI(currentRole);
                    loginForm.style.opacity = '1';
                    loginForm.style.transition = 'opacity 0.3s ease';
                }, 50);
            }
        });
    });

    function updateUI(role) {
        if (!usernameLabel || !usernameInput) return;
        if (role === 'admin') {
            usernameLabel.innerText = 'Admin Email';
            usernameInput.placeholder = 'admin@uc.edu.ph';
        } else if (role === 'officer') {
            usernameLabel.innerText = 'Officer Username';
            usernameInput.placeholder = 'Enter officer Username';
        } else {
            usernameLabel.innerText = 'ID Number';
            usernameInput.placeholder = 'e.g. 20241234';
        }
    }


    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const enteredUser = usernameInput.value;
            const enteredPass = passwordInput.value;

            if (currentRole === 'admin') {
                if (enteredUser === "admin@uc.edu.ph" && enteredPass === "Poster") {
                    window.location.href = 'admin-dashboard.html'; 
                } else {
                    alert("Invalid Admin credentials. Access Denied.");
                }
            } 
            else if (currentRole === 'officer') {
                if (enteredUser === "Barda123" && enteredPass === "Giatay") {
                    window.location.href = 'officer-dashboard.html';
                } else {
                    alert("Invalid Officer credentials TDIRT KA");
                }
            }
            else if (currentRole === 'student') {
                if (enteredUser === "123456" && enteredPass === "sqwerty123") {
                    window.location.href = 'student-dashboard.html';
                } else {
                    alert("Invalid Student credentials TDIRT KA");
                }
            }
            else {
                alert(`${currentRole.charAt(0).toUpperCase() + currentRole.slice(1)} portal is under maintenance.`);
            }
        });
    }
});

const contentDiv = document.getElementById('dynamic-content');
const mainTitle = document.getElementById('main-title');
const actionBtn = document.getElementById('action-btn');
const actionArea = document.querySelector('.action-area');



function showSection(section, element) {
    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
    if (element) element.classList.add('active');

    if (section === 'overview') {
        mainTitle.innerHTML = 'HELLO, <span class="text-gold">ADMIN</span>';
        actionBtn.innerText = '+ New Event';
        contentDiv.innerHTML = `
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon icon-blue"><i class="far fa-calendar"></i></div>
                    <div class="stat-data"><span class="value">18</span><p class="label">Total Events</p></div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon icon-purple"><i class="fas fa-user-graduate"></i></div>
                    <div class="stat-data"><span class="value">1248</span><p class="label">Total Students</p></div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon icon-orange"><i class="fas fa-chart-line"></i></div>
                    <div class="stat-data"><span class="value">92%</span><p class="label">Avg Attendance</p></div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon icon-pink"><i class="fas fa-user-shield"></i></div>
                    <div class="stat-data"><span class="value">10</span><p class="label">Active Officers</p></div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon icon-green"><i class="fas fa-university"></i></div>
                    <div class="stat-data"><span class="value">9</span><p class="label">Active Orgs</p></div>
                </div>
            </div>
            <div class="content-grid">
                <div class="chart-container">
                    <div class="card-header">
                        <h3>Monthly Attendance Rate</h3>
                        <a href="#" class="view-all-link">Full Year →</a>
                    </div>
                    <div class="chart-placeholder"></div>
                </div>
                <div class="events-container">
                    <div class="card-header">
                        <h3>Upcoming Events</h3>
                        <a href="#" class="view-all-link">View All →</a>
                    </div>
                    <div class="event-list">
                        <div class="event-item">
                            <div class="event-date"><strong>26</strong><span>Jan</span></div>
                            <div class="event-info">
                                <h4>Intramurals 2026</h4>
                                <p>UC Quadrangle</p>
                            </div>
                            <span class="status-tag ongoing">Ongoing</span>
                        </div>
                    </div>
                </div>
            </div>`;
    } 
    else if (section === 'events') {
        mainTitle.innerText = 'Events';
        actionBtn.innerText = '+ New Event';
        contentDiv.innerHTML = `
            <div class="events-view">
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-icon icon-blue"><i class="fas fa-calendar-alt"></i></div>
                        <div class="stat-data"><span class="value">18</span><p class="label">Total Events</p></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon icon-purple"><i class="fas fa-user-graduate"></i></div>
                        <div class="stat-data"><span class="value">15,234</span><p class="label">Student Enrolled</p></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon icon-green"><i class="fas fa-university"></i></div>
                        <div class="stat-data"><span class="value">8</span><p class="label">Organizations</p></div>
                    </div>
                </div>

                <div class="events-main-grid">
                    <div class="white-container table-section">
                        <div class="container-header">
                            <h3>All Events</h3>
                            <a href="#" class="view-link">View All →</a>
                        </div>
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>EVENT NAME</th>
                                    <th>ORGANIZATION</th>
                                    <th>DATE</th>
                                    <th>VENUE</th>
                                    <th>STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Leadership Summit 2026</strong></td><td>SSG</td><td>03-25-26</td><td>Main Auditorium</td><td><span class="status-tag upcoming">Upcoming</span></td></tr>
                                <tr><td><strong>Tech Fest - HackUC</strong></td><td>PSITS</td><td>03-29-26</td><td>Computer Lab</td><td><span class="status-tag upcoming">Upcoming</span></td></tr>
                                <tr><td><strong>Cultural Night 2026</strong></td><td>CAS</td><td>04-03-26</td><td>Cebu Coliseum</td><td><span class="status-tag ongoing">Ongoing</span></td></tr>
                                <tr><td><strong>Leadership Summit 2026</strong></td><td>SSG</td><td>01-05-26</td><td>Gymnasium</td><td><span class="status-tag done">Done</span></td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="white-container coming-up-section">
                        <h3>Coming Up</h3>
                        <div class="mini-event-card">
                            <div class="date-badge"><strong>25</strong><span>Mar</span></div>
                            <div class="mini-details">
                                <h4>Leadership Summit 2026</h4>
                                <p>Main Auditorium</p>
                            </div>
                        </div>
                        <div class="mini-event-card">
                            <div class="date-badge"><strong>29</strong><span>Mar</span></div>
                            <div class="mini-details">
                                <h4>Tech Fest - HackUC</h4>
                                <p>Computer Lab</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    }
    
    else if (section === 'events') {
            mainTitle.innerText = 'Events';
            actionBtn.innerText = '+ New Event';
            contentDiv.innerHTML = `
                <div class="events-view">
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-icon icon-blue"><i class="fas fa-calendar-alt"></i></div>
                            <div class="stat-data"><span class="value">18</span><p class="label">Total Events</p></div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon icon-purple"><i class="fas fa-user-graduate"></i></div>
                            <div class="stat-data"><span class="value">15,234</span><p class="label">Student Enrolled</p></div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon icon-green"><i class="fas fa-university"></i></div>
                            <div class="stat-data"><span class="value">8</span><p class="label">Organizations</p></div>
                        </div>
                    </div>

                    <div class="events-main-grid">
                        <div class="white-container table-section">
                            <div class="container-header">
                                <h3>All Events</h3>
                                <a href="#" class="view-link">View All →</a>
                            </div>
                            <table class="data-table">
                                <thead>
                                    <tr>
                                        <th>EVENT NAME</th>
                                        <th>ORGANIZATION</th>
                                        <th>DATE</th>
                                        <th>VENUE</th>
                                        <th>STATUS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td><strong>Leadership Summit 2026</strong></td><td>SSG</td><td>03-25-26</td><td>Main Auditorium</td><td><span class="status upcoming">Upcoming</span></td></tr>
                                    <tr><td><strong>Tech Fest - HackUC</strong></td><td>PSITS</td><td>03-29-26</td><td>Computer Lab</td><td><span class="status upcoming">Upcoming</span></td></tr>
                                    <tr><td><strong>Cultural Night 2026</strong></td><td>CAS</td><td>04-03-26</td><td>Cebu Coliseum</td><td><span class="status ongoing">Ongoing</span></td></tr>
                                    <tr><td><strong>Leadership Summit 2026</strong></td><td>SSG</td><td>01-05-26</td><td>Gymnasium</td><td><span class="status done">Done</span></td></tr>
                                    <tr><td><strong>Leadership Summit 2026</strong></td><td>SSG</td><td>01-27-26</td><td>Lobby</td><td><span class="status done">Done</span></td></tr>
                                    <tr><td><strong>Leadership Summit 2026</strong></td><td>SSG</td><td>02-10-26</td><td>Open Field</td><td><span class="status done">Done</span></td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="white-container coming-up-section">
                            <h3>Coming Up</h3>
                            <div class="mini-event-card">
                                <div class="date-badge"><strong>25</strong><span>Mar</span></div>
                                <div class="mini-details">
                                    <h4>Leadership Summit 2026</h4>
                                    <p>Main Auditorium</p>
                                </div>
                            </div>
                            <div class="mini-event-card">
                                <div class="date-badge"><strong>29</strong><span>Mar</span></div>
                                <div class="mini-details">
                                    <h4>Tech Fest - HackUC</h4>
                                    <p>Computer Lab</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
    }

    else if (section === 'organization') {
        mainTitle.innerText = 'Organization';
        actionBtn.innerText = '+ Add Organization';
        contentDiv.innerHTML = `
            <div class="org-view">
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-icon icon-yellow"><i class="fas fa-building"></i></div>
                        <div class="stat-data"><span class="value">8</span><p class="label">Total Organizations</p></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon icon-green-light"><i class="fas fa-users"></i></div>
                        <div class="stat-data"><span class="value">435</span><p class="label">Active Members</p></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon icon-blue-light"><i class="fas fa-calendar-check"></i></div>
                        <div class="stat-data"><span class="value">18</span><p class="label">Total Events</p></div>
                    </div>
                </div>

                <div class="org-main-grid">
                    <div class="white-container">
                        <h3>All Organizations</h3>
                        <div class="org-cards-container">
                            ${generateOrgCard('SSG', 'Supreme Student Government', 67, 7, 'blue')}
                            ${generateOrgCard('CCA', 'College of Customs Administration', 54, 5, 'purple')}
                            ${generateOrgCard('SAO', 'Student Affairs Office', 74, 8, 'orange')}
                            ${generateOrgCard('CAS', 'College of Arts and Sciences', 60, 4, 'green')}
                            ${generateOrgCard('CON', 'College of Nursing', 56, 3, 'teal')}
                            ${generateOrgCard('PSITS', 'Philippine Society of Information Technology Students', 72, 6, 'red')}
                            ${generateOrgCard('CSP-S', 'Computing Society of the Philippines - Students', 52, 4, 'navy')}
                            ${generateOrgCard('CCJE', 'College of Criminal Justice Education', 69, 7, 'maroon')}
                        </div>
                    </div>

                    <div class="top-performer-card">
                        <p class="top-label">TOP PERFORMING ORG</p>
                        <h2 class="top-org-name">SAO</h2>
                        <p class="top-org-full">Student Affairs Office</p>
                        <div class="top-stats">
                            <div class="stat"><strong>74</strong><span>MEMBERS</span></div>
                            <div class="stat"><strong>8</strong><span>EVENTS</span></div>
                        </div>
                    </div>
                </div>
            </div>`;

        renderOrganizations();
    }
    else if (section === 'officers') {
        mainTitle.innerText = 'Officers';
        actionBtn.innerText = '+ Add Officer';
        actionBtn.onclick = () => openModal('addOfficerModal'); // Attach open trigger
        
        contentDiv.innerHTML = `... your table header structure ...`;
        renderOfficersTable();
        
        contentDiv.innerHTML = `
            <div class="officers-view">
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-icon icon-blue-light"><i class="fas fa-user-tie"></i></div>
                        <div class="stat-data"><span class="value">25</span><p class="label">Total Officers</p></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon icon-green-light"><i class="fas fa-check-circle"></i></div>
                        <div class="stat-data"><span class="value">18</span><p class="label">Active Officers</p></div>
                    </div>
                </div>

                <div class="white-container full-width">
                    <div class="container-header">
                        <h3>Officer Directory</h3>
                    </div>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>OFFICER</th>
                                <th>POSITION</th>
                                <th>ORGANIZATION</th>
                                <th>TERM</th>
                                <th>STATUS</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${generateOfficerRow('Dave Gonzaga', 'President', 'SSG', '2025 - 2026', 'Active')}
                            ${generateOfficerRow('Angel Diolin', 'President', 'PSITS', '2025 - 2026', 'Active')}
                            ${generateOfficerRow('Raf Quiaot', 'President', 'SAO', '2025 - 2026', 'Active')}
                            ${generateOfficerRow('Winslett Panase', 'President', 'CAS', '2025 - 2026', 'Active')}
                            ${generateOfficerRow('Chris Mosqueda', 'President', 'CCJE', '2025 - 2026', 'Active')}
                        </tbody>
                    </table>
                </div>
            </div>`;
    }

    else if (section === 'students') {
        mainTitle.innerText = 'Students';
        actionBtn.innerText = '+ Add Student';
        contentDiv.innerHTML = `
            <div class="students-view">
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-icon icon-blue-light"><i class="fas fa-user-graduate"></i></div>
                        <div class="stat-data"><span class="value">1,248</span><p class="label">Total Students</p></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon icon-green-light"><i class="fas fa-check-circle"></i></div>
                        <div class="stat-data"><span class="value">15,234</span><p class="label">Enrolled</p></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon icon-yellow-light"><i class="fas fa-chart-line"></i></div>
                        <div class="stat-data"><span class="value">92%</span><p class="label">Avg Attendance</p></div>
                    </div>
                </div>

                <div class="white-container full-width">
                    <div class="container-header">
                        <h3>Student Directory</h3>
                    </div>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>STUDENT</th>
                                <th>COURSE & YEAR</th>
                                <th>ORGANIZATION</th>
                                <th>ATTENDANCE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${generateStudentRow('Juper Navarro', 'BSIT - 3', 'PSITS', 96, 'green')}
                            ${generateStudentRow('Clair Dela Cruz', 'BSN - 2', 'CON', 93, 'green')}
                            ${generateStudentRow('Elena Fuentes', 'BSCS - 4', 'CSP-S', 74, 'yellow')}
                            ${generateStudentRow('Jericho Balungcas', 'BSCRIM - 1', 'CCJE', 58, 'red')}
                            ${generateStudentRow('Vincent Valencia', 'BSIT - 4', 'PSITS', 99, 'green')}
                        </tbody>
                    </table>
                </div>
            </div>`;
    }
    else if (section === 'reports') {
        mainTitle.innerText = 'Reports';
        if (actionArea) {
            actionArea.innerHTML = `
                <select class="semester-filter">
                    <option>2nd Semester A.Y 2025-2026</option>
                    <option>1st Semester A.Y 2025-2026</option>
                </select>`;
        }
            
        contentDiv.innerHTML = `
            <div class="reports-view">
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-icon icon-blue-light"><i class="fas fa-calendar-alt"></i></div>
                        <div class="stat-data"><span class="value">18</span><p class="label">Events this Sem</p></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon icon-purple-light"><i class="fas fa-users"></i></div>
                        <div class="stat-data"><span class="value">3,436</span><p class="label">Total Participants</p></div>
                    </div>
                </div>

                <div class="white-container chart-full-width">
                    <div class="container-header">
                        <h3>Monthly Attendance Rate</h3>
                        <div class="chart-toggle">
                            <button class="toggle-btn active">This Sem</button>
                            <button class="toggle-btn">Last Sem</button>
                        </div>
                    </div>
                    
                    <div class="bar-chart-placeholder">
                        ${generateBar('Jan', 45, 'blue')}
                        ${generateBar('Feb', 65, 'purple')}
                        ${generateBar('Mar', 85, 'green')}
                        ${generateBar('Apr', 30, 'orange')}
                    </div>
                </div>
            </div>`;
    }
}

function generateBar(month, height, type) {
    return `
        <div class="bar-group">
            <div class="bar bar-${type}" style="height: ${height}%"></div>
            <span class="month-label">${month}</span>
        </div>`;
}

function generateStudentRow(name, course, org, attendance, color) {
    return `
        <tr>
            <td class="user-cell">
                <div class="avatar-placeholder"></div>
                <strong>${name}</strong>
            </td>
            <td><span class="badge-course">${course}</span></td>
            <td><span class="badge-org-alt">${org}</span></td>
            <td>
                <div class="attendance-container">
                    <div class="progress-bg">
                        <div class="progress-bar bar-${color}" style="width: ${attendance}%"></div>
                    </div>
                    <span class="percent-text text-${color}">${attendance}%</span>
                </div>
            </td>
            <td>
                <div class="action-icons">
                    <button class="icon-edit"><i class="far fa-edit"></i></button>
                    <button class="icon-delete"><i class="far fa-trash-alt"></i></button>
                </div>
            </td>
        </tr>`;
}

function generateOrgCard(short, full, members, events, colorClass) {
    return `
        <div class="org-item-card">
            <div class="org-logo-box ${colorClass}">${short}</div>
            <div class="org-text">
                <p class="full-name">${full}</p>
                <div class="card-stats">
                    <span><strong>${members}</strong> MEMBERS</span>
                    <span><strong>${events}</strong> EVENTS</span>
                </div>
            </div>
        </div>`;
}

function generateOfficerRow(name, pos, org, term, status) {
    return `
        <tr>
            <td class="user-cell">
                <div class="avatar-placeholder"></div>
                <strong>${name}</strong>
            </td>
            <td><span class="badge-pos">${pos}</span></td>
            <td><span class="badge-org">${org}</span></td>
            <td>${term}</td>
            <td><span class="status-indicator">● ${status}</span></td>
            <td>
                <div class="action-icons">
                    <button class="icon-edit"><i class="far fa-edit"></i></button>
                    <button class="icon-delete"><i class="far fa-trash-alt"></i></button>
                </div>
            </td>
        </tr>`;
}

window.onload = () => {
    const defaultNav = document.querySelector('.nav-item');
    if (defaultNav) showSection('overview', defaultNav);
};

document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.querySelector('.logout-link') || document.querySelector('.nav-item-logout'); 
    const modal = document.getElementById('logoutModal');
    const stayBtn = document.getElementById('stayLoggedIn');
    const confirmBtn = document.getElementById('confirmLogout');

    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'flex';
        });
    }

    stayBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    confirmBtn.addEventListener('click', () => {
        window.location.href = 'login.html'; 
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
let officersData = [
    { name: 'Dave Gonzaga', pos: 'President', org: 'SSG', term: '2025 - 2026', status: 'Active' },
    { name: 'Angel Diolin', pos: 'President', org: 'PSITS', term: '2025 - 2026', status: 'Active' }
];

function openModal(id) {
    document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

document.getElementById('officerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const newOfficer = {
        name: `${document.getElementById('offFirstName').value} ${document.getElementById('offLastName').value}`,
        pos: document.getElementById('offPosition').value,
        org: document.getElementById('offOrg').value,
        term: `${new Date(document.getElementById('offStart').value).getFullYear()} - ${new Date(document.getElementById('offEnd').value).getFullYear()}`,
        status: document.getElementById('offStatus').value
    };

    officersData.unshift(newOfficer);

    closeModal('addOfficerModal');
    this.reset();
    showSection('officers');
});

function renderOfficersTable() {
    const tableBody = document.querySelector('.data-table tbody');
    if (!tableBody) return;

    tableBody.innerHTML = officersData.map(off => generateOfficerRow(off.name, off.pos, off.org, off.term, off.status)).join('');
}

