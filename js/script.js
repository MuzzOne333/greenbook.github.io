function initNavUI() {
    if(typeof getSession !== 'undefined' && typeof clearSession !== 'undefined') {
        const currentUser = getSession();
        const navList = document.querySelector('.navbar-nav');
        if (!navList) return;
        if (currentUser) {
            const navItemsToHide = navList.querySelectorAll('a[href="SignIn.html"], a[href="SignUp.html"]');
            navItemsToHide.forEach(link => link.closest('.nav-item').style.display = 'none');
            const nameItem = document.createElement('li');
            nameItem.className = 'nav-item d-flex align-items-center me-3';
            nameItem.innerHTML = `<span class="navbar-text fw-bold me-2 text-light user-name"><i class="bi bi-person-circle me-1"></i>${currentUser.name}</span>`;
            const logoutItem = document.createElement('li');
            logoutItem.className = 'nav-item';
            logoutItem.innerHTML = `<button class="btn btn-outline-danger ms-2" id="logoutBtn">Log Out</button>`;
            const themeToggleItem = document.getElementById('themeToggle').closest('.nav-item');
            navList.insertBefore(nameItem, themeToggleItem);
            navList.insertBefore(logoutItem, themeToggleItem);
            document.getElementById('logoutBtn').addEventListener('click', () => {
                clearSession();
                window.location.reload();
            });
        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    //Тут я добавил смену кнопок с Sign In и Sign Up на Имя пользователя и кнопку Log Out
    initNavUI();
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
        },
        {
            title: "The Mysterious Black Panther",
            text: "The Black Panther (a melanistic leopard or jaguar) faces habitat loss and poaching. Our teams are working to protect its elusive forest home.",
            link: "stories/black-panther-rescue.html",
        },
        {
            title: "The Warty Mountain Hog",
            text: "Often overlooked, the mountain hog plays a vital role in its ecosystem. We support conservation efforts to safeguard this unique species.",
            link: "stories/mountain-hog-rescue.html",
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




const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const carouselWrapper = document.querySelector(".carousel-wrapper");
const slides = document.querySelectorAll(".carousel-slide");

const storyTitle = document.getElementById("storyTitle");
const storyText = document.getElementById("storyText");
const learnMoreBtn = document.getElementById("learnMoreBtn");

const stories = [
    {
        title: "Faith the Pangolin",
        text: "Faith was rescued from illegal traffickers and rehabilitated back into the wild. Her recovery inspired our anti-poaching campaign.",
        link: "stories/faith-pangolin-rescue.html",
    },
    {
        title: "Vaquita",
        text: "Vaquitas are a critically endangered species of marine mammal, native to the northern part of the Gulf of California, Mexico. They are the smallest species of porpoise, reaching only about 4 to 5 feet in length and weighing around 100 to 120 pounds.",
        link: "stories/vaquita.html",
    },
    {
        title: "Sumatran Orangutan",
        text: "Sumatran orangutans are a critically endangered species of great ape found only on the island of Sumatra in Indonesia. They are one of the three species of orangutans, along with the Bornean and the recently identified Tapanuli orangutans.",
        link: "stories/sumatran_orangutan.html",
    },
    {
        title: "The Mysterious Black Panther",
        text: "The Black Panther faces habitat loss and poaching. Our teams are working to protect its elusive forest home and rescue trapped individuals.",
        link: "stories/black-panther-rescue.html",
    },
    {
        title: "The Warty Mountain Hog",
        text: "We support conservation efforts to safeguard this unique species, often overlooked but critically important for the health of its mountain ecosystem.",
        link: "stories/mountain-hog-project.html",
    },
];

let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
    carouselWrapper.style.transform = `translateX(-${index * 100}%)`;

    const story = stories[index];
    storyTitle.textContent = story.title;
    storyText.textContent = story.text;
    learnMoreBtn.href = story.link;
}

prevButton.addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    showSlide(currentIndex);
});

showSlide(currentIndex);
