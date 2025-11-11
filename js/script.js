document.addEventListener("DOMContentLoaded", () => {
    //Тут я добавил смену кнопок с Sign In и Sign Up на Имя пользователя и кнопку Log Out
    if (typeof getSession !== 'undefined' && typeof clearSession !== 'undefined') {
        const currentUser = getSession();
        const navList = document.getElementById('nav').querySelector('.navbar-nav');

        if (currentUser) {
            const navItems = navList.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                const signInLink = item.querySelector('a[href="SignIn.html"]');
                const signUpLink = item.querySelector('a[href="SignUp.html"]');
                if (signInLink || signUpLink) {
                    item.style.display = 'none';
                }
            });
            const nameItem = document.createElement('li');
            nameItem.className = 'nav-item d-flex align-items-center me-3';
            // У пользователя свой собственный класс для css файла и тут я добавил иконку пользователя
            nameItem.innerHTML = `<span class="navbar-text fw-bold me-2 text-light user-name"><i class="bi bi-person-circle me-1"></i>${currentUser.name}</span>`;
            const logoutItem = document.createElement('li');
            logoutItem.className = 'nav-item';
            logoutItem.innerHTML = `<button class="btn btn-outline-danger ms-2" id="logoutBtn">Log Out</button>`;
            const themeToggleItem = document.getElementById('themeToggle').parentElement;
            navList.insertBefore(nameItem, themeToggleItem);
            navList.insertBefore(logoutItem, themeToggleItem);
            document.getElementById('logoutBtn').addEventListener('click', () => {
                clearSession();
                window.location.reload();
            });
        }
    }
    //Тут уже снизу предыдущий код:
    const preloader = document.getElementById("preloader");
    window.addEventListener("load", () => {
        preloader.style.opacity = "0";
        setTimeout(() => preloader.remove(), 600);
    });

    const toggle = document.getElementById("themeToggle");
    const html = document.documentElement;
    toggle.addEventListener("click", () => {
        const isDark = html.getAttribute("data-theme") === "dark";
        html.setAttribute("data-theme", isDark ? "light" : "dark");
        toggle.innerHTML = isDark ? '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-stars-fill"></i>';
    });

    window.addEventListener("scroll", () => {
        document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 50);
    });

    window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector(".hero-bg");
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px) scale(1.1)`;
    });

    document.getElementById("heroCta").addEventListener("click", () => {
        document.getElementById("help").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("donateBtn").addEventListener("click", () => {
        alert("Thank you! Redirecting to secure donation...");
    });

    const stories = [
        {
            title: "A young pangolin, now named Faith, was rescued from the clutches of wildlife traffickers",
            text: "Two bears rescued from captivity now thrive in sanctuary.",
            img: "assets/faith-4.jpg",
            slug: "faith-pangolin-rescue"
        },
        {
            title: "Slow Lorises Electrocuted in Indonesia",
            text: "Shocking reality uncovered — we need your help to save them.",
            img: "https://images.unsplash.com/photo-1570481662002-501e50b2a1b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            slug: "loris-electrocution"
        },
        {
            title: "Eight Javan Slow Lorises Released",
            text: "Returned to the wild ahead of International Slow Loris Day.",
            img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            slug: "javan-loris-release"
        }
    ];



    document.querySelectorAll(".read-more").forEach(btn => {
        btn.addEventListener("click", () => {
            const slug = btn.dataset.slug;
            window.location.href = `stories/${slug}.html`;
        });
    });

    window.setAnimal = name => {
        document.getElementById("animalName").textContent = name;
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
});