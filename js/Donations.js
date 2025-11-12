$(document).ready(function() {

    const session = getSession();

    const $donationForm = $('#donationForm');
    const $topDonorsBody = $('#topDonorsBody');
    const $loginAlert = $('#loginAlert');
    const $animalCardsContainer = $('#animalCardsContainer');
    const $animalSelectInput = $('#animalSelect');
    const $selectAnimalAlert = $('#selectAnimalAlert');
    const $leaderboardTitle = $('#leaderboardTitle');
    const $successMessage = $('#successMessage');
    const $allAnimalCards = $('.animal-card');

    let selectedAnimal = null;

    if (!session) {
        $donationForm.css({
            'pointer-events': 'none',
            'opacity': '0.5'
        });
        $loginAlert.removeClass('d-none');
    }


    $animalCardsContainer.on('click', '.animal-card', function() {
        const $card = $(this);


        $allAnimalCards.removeClass('selected');
        $card.addClass('selected');

        selectedAnimal = $card.data('animal');
        $animalSelectInput.val(selectedAnimal);
        $selectAnimalAlert.addClass('d-none');

        renderTopDonors(selectedAnimal);
    });

    $donationForm.on('submit', function(e) {
        e.preventDefault();

        if (!session) {
            alert("Please sign in to make a donation.");
            return;
        }

        const animal = $animalSelectInput.val();
        const $donationAmountInput = $('#donationAmount');
        const amount = $donationAmountInput.val();
        const donationAmount = Number(amount);

        if (!animal) {
            $selectAnimalAlert.removeClass('d-none');
            return;
        }

        if (donationAmount >= 1) {
            addDonation(session.name, session.email, animal, donationAmount);

            $successMessage.removeClass('d-none');
            setTimeout(() => {
                $successMessage.addClass('d-none');
            }, 3000);

            $donationForm[0].reset();
            $allAnimalCards.removeClass('selected');
            $animalSelectInput.val('');
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


        $leaderboardTitle.html(`<i class="bi bi-trophy-fill leaderboard-icon" style="color: gold;"></i> ${titleText}`);


        $topDonorsBody.empty();

        if (donors.length === 0) {
            $topDonorsBody.html(`<tr><td colspan="3" class="text-center text-muted py-3">Select an animal to view its specific leaderboard.</td></tr>`);
            return;
        }
        $.each(donors, function(index, donor) {
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
            const $row = $('<tr></tr>').append(
                $('<td></td>').html(rankContent),
                $('<td></td>').html(`<span class="${nameClass}">${donor.name}</span>`),
                $('<td></td>').addClass('text-end').html(`<span class="${amountClass}">$${donor.totalDonated.toFixed(2)}</span>`)
            );

            $topDonorsBody.append($row);
        });
    }
    renderTopDonors();
});
