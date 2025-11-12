document.addEventListener("DOMContentLoaded", () => {
    const session = getSession();
    const donationForm = document.getElementById('donationForm');
    const topDonorsBody = document.getElementById('topDonorsBody');
    const loginAlert = document.getElementById('loginAlert');
    const animalCardsContainer = document.getElementById('animalCardsContainer');
    const animalSelectInput = document.getElementById('animalSelect');
    const selectAnimalAlert = document.getElementById('selectAnimalAlert');
    const leaderboardTitle = document.getElementById('leaderboardTitle');
    let selectedAnimal = null;
    if (!session) {
        donationForm.style.pointerEvents = 'none';
        donationForm.style.opacity = '0.5';
        loginAlert.classList.remove('d-none');
    }
    animalCardsContainer.addEventListener('click', function(e) {
        const card = e.target.closest('.animal-card');
        if (card) {
            document.querySelectorAll('.animal-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedAnimal = card.getAttribute('data-animal');
            animalSelectInput.value = selectedAnimal;
            selectAnimalAlert.classList.add('d-none');
            renderTopDonors(selectedAnimal);
        }
    });
    donationForm.addEventListener('submit', function(e) {
        e.preventDefault();

        if (!session) {
            alert("Please sign in to make a donation.");
            return;
        }

        const animal = animalSelectInput.value;
        const amount = document.getElementById('donationAmount').value;
        const donationAmount = Number(amount);

        if (!animal) {
            selectAnimalAlert.classList.remove('d-none');
            return;
        }
        if (donationAmount >= 1) {
            addDonation(session.name, session.email, animal, donationAmount);
            document.getElementById('successMessage').classList.remove('d-none');
            setTimeout(() => {
                document.getElementById('successMessage').classList.add('d-none');
            }, 3000);
            donationForm.reset();
            document.querySelectorAll('.animal-card').forEach(c => c.classList.remove('selected'));
            animalSelectInput.value = '';
            selectedAnimal = null;
            renderTopDonors();
        } else {
            alert("Please enter a valid amount ($1 or more).");
        }
    });
    function renderTopDonors(animal = null) {
        let donors;
        let titleText;

        if (animal) {
            donors = getTopDonorsByAnimal(animal);
            titleText = `Top Donors for ${animal.replace('the ', '')}`;
        } else {
            donors = [];
            titleText = `Top 5 Donors`;
        }
        leaderboardTitle.innerHTML = `<i class="bi bi-trophy-fill leaderboard-icon" style="color: gold;"></i> ${titleText}`;

        topDonorsBody.innerHTML = '';

        if (donors.length === 0) {
            topDonorsBody.innerHTML = `<tr><td colspan="3" class="text-center text-muted py-3">Select an animal to view its specific leaderboard.</td></tr>`;
            return;
        }
        donors.forEach((donor, index) => {
            const row = topDonorsBody.insertRow();

            let rankContent = index + 1;
            let nameClass = 'donor-name';
            let amountClass = 'donation-amount';
            if (index === 0) {
                rankContent = `<i class="bi bi-trophy-fill leaderboard-icon" style="color: gold;"></i> 1`;
                nameClass += ' text-warning';
            } else if (index === 1) {
                rankContent = `<i class="bi bi-trophy-fill leaderboard-icon" style="color: silver;"></i> 2`;
                nameClass += ' text-secondary';
            } else if (index === 2) {
                rankContent = `<i class="bi bi-trophy-fill leaderboard-icon" style="color: #cd7f32;"></i> 3`;
                nameClass += ' text-danger';
            }
            row.insertCell().innerHTML = rankContent;
            row.insertCell().innerHTML = `<span class="${nameClass}">${donor.name}</span>`;
            row.insertCell().innerHTML = `<span class="${amountClass}">$${donor.totalDonated.toFixed(2)}</span>`;
            row.cells[2].classList.add('text-end');
        });
    }
    renderTopDonors();
});