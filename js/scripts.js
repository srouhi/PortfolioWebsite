// Typewriter effect
var i = 0;
var txt = "Hi! I’m Shaghayegh Rouhi, but feel free to call me Shay. I’m currently studying Data Science at the University of Nebraska-Lincoln. Welcome to my portfolio website, feel free to explore my projects, experience, and connect with me!";
var speed = 25;
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typewriter-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Menu toggle
function toggleMenu(x) {
    x.classList.toggle("change");
    let menu = document.getElementById("menu");
    let main = document.getElementById("main");

    if (menu.style.right === "0px") {
        menu.style.right = "-50vw";
        main.style.marginLeft = "0";
        document.body.style.backgroundColor = "#0a001b";
    } else {
        menu.style.right = "0px";
        main.style.marginLeft = "100vw";
        document.body.style.backgroundColor = "rgba(44, 32, 32, 0.4)";
    }
}

function closeMenu() {
    document.getElementById("menu").style.right = "-50vw";
    document.body.style.backgroundColor = "#0a001b";
    document.querySelector(".menu-icon").classList.remove("change");
}

function closeMenuAndScroll(target) {
    closeMenu();
    setTimeout(() => {
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    }, 300);
}

// On load
window.onload = function () {
    typeWriter();

    if (window.location.hash) {
        setTimeout(function () {
            var hash = window.location.hash;
            var element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
        history.replaceState(null, null, window.location.pathname);
    } else {
        window.scrollTo(0, 0);
    }
};

document.addEventListener("DOMContentLoaded", function () {
    // Resume Popup
    const viewResumeBtn = document.getElementById("viewResume");
    const resumePopup = document.getElementById("resumePopup");
    const closeResumeBtn = resumePopup?.querySelector(".close");

    if (viewResumeBtn && resumePopup && closeResumeBtn) {
        viewResumeBtn.addEventListener("click", function (e) {
            e.preventDefault();
            resumePopup.style.display = "block";
        });

        closeResumeBtn.addEventListener("click", function () {
            resumePopup.style.display = "none";
        });

        window.addEventListener("click", function (e) {
            if (e.target === resumePopup) {
                resumePopup.style.display = "none";
            }
        });
    }

    // Research Popup
    const viewResearchBtn = document.getElementById("viewResearch");
    const researchPopup = document.getElementById("researchPopup");
    const closeResearchBtn = researchPopup?.querySelector(".close");

    if (viewResearchBtn && researchPopup && closeResearchBtn) {
        viewResearchBtn.addEventListener("click", function (e) {
            e.preventDefault();
            researchPopup.style.display = "block";
        });

        closeResearchBtn.addEventListener("click", function () {
            researchPopup.style.display = "none";
        });

        window.addEventListener("click", function (e) {
            if (e.target === researchPopup) {
                researchPopup.style.display = "none";
            }
        });
    }

    // Escape key to close popups
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            if (resumePopup) resumePopup.style.display = 'none';
            if (researchPopup) researchPopup.style.display = 'none';
        }
    });

    // Accordions
    let accordions = document.querySelectorAll(".accordion");
    accordions.forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("active");

            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    // Feedback form
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const formData = new FormData(this);

            fetch('contact.php', {
                method: 'POST',
                body: formData
            })
                .then(response => response.text())
                .then(data => {
                    document.getElementById('contact').innerHTML = data;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        const menu = document.getElementById("menu");
        const menuButton = document.querySelector(".menu-icon");

        if (menu.style.right === "0px") {
            const clickedInsideMenu = menu.contains(event.target);
            const clickedMenuButton = menuButton.contains(event.target);

            if (!clickedInsideMenu && !clickedMenuButton) {
                closeMenu();
            }
        }
    });
});


//for accordian

document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {
        accordion.addEventListener("click", function () {
            this.classList.toggle("active");

            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
});

