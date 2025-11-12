const DB_KEY = 'greenbookUsers';
const DONATIONS_KEY = 'greenbookDonations';

let users = loadUsers();
let donations = loadDonations();

function loadUsers() {
    const json = localStorage.getItem(DB_KEY);
    return json ? JSON.parse(json) : [];
}
function saveUsers() {
    localStorage.setItem(DB_KEY, JSON.stringify(users));
}
function addUser(name, email, password) {
    const newUser = {
        name: name,
        email: email,
        password: password,
    };
    users.push(newUser);
    saveUsers();
    console.log('User registered and data saved to localStorage:', newUser);
}
function findUser(email, password) {
    return users.find(user => user.email === email && user.password === password);
}
const SESSION_KEY = 'greenbookSession';
function setSession(user) {
    localStorage.setItem(SESSION_KEY, JSON.stringify({
        name: user.name,
        email: user.email
    }));
}
function getSession() {
    const json = localStorage.getItem(SESSION_KEY);
    return json ? JSON.parse(json) : null;
}
function clearSession() {
    localStorage.removeItem(SESSION_KEY);
}
function loadDonations() {
    const json = localStorage.getItem(DONATIONS_KEY);
    return json ? JSON.parse(json) : [];
}
function saveDonations() {
    localStorage.setItem(DONATIONS_KEY, JSON.stringify(donations));
}
function addDonation(userName, userEmail, animal, amount) {
    const donationAmount = Number(amount);

    const newDonation = {
        name: userName,
        email: userEmail,
        animal: animal,
        amount: donationAmount,
        date: new Date().toISOString()
    };
    donations.push(newDonation);
    saveDonations();
    console.log(`Donation recorded for ${animal} by ${userName}: $${donationAmount}`);
}
function getTopDonorsByAnimal(animal) {
    const animalDonations = donations.filter(d => d.animal === animal);
    const donorTotals = animalDonations.reduce((acc, donation) => {
        const key = donation.email;
        if (!acc[key]) {
            acc[key] = {
                name: donation.name,
                totalDonated: 0
            };
        }
        acc[key].totalDonated += donation.amount;
        return acc;
    }, {});
    const sortedDonors = Object.values(donorTotals)
        .sort((a, b) => b.totalDonated - a.totalDonated);
    return sortedDonors.slice(0, 5);
}
function ensureInitialUsers() {
    localStorage.removeItem(DB_KEY);
    localStorage.removeItem(DONATIONS_KEY);
    users = loadUsers();
    donations = loadDonations();
    if (users.length < 5) {
        addUser("EcoWarrior_Alpha", "alpha@greenbook.com", "pass123");
        addUser("WildlifeHero_Beta", "beta@greenbook.com", "pass123");
        addUser("JungleSaver_Gamma", "gamma@greenbook.com", "pass123");
        addUser("PandaLover_Delta", "delta@greenbook.com", "pass123");
        addUser("OceanGuardian_Eps", "epsilon@greenbook.com", "pass123");
        addUser("NewDonor", "new@greenbook.com", "pass123");
        addDonation("EcoWarrior_Alpha", "alpha@greenbook.com", "Black Panther", 150);
        addDonation("WildlifeHero_Beta", "beta@greenbook.com", "Vaquita", 120);
        addDonation("JungleSaver_Gamma", "gamma@greenbook.com", "Faith the Pangolin", 90);
        addDonation("PandaLover_Delta", "delta@greenbook.com", "Mountain Hog", 60);
        addDonation("OceanGuardian_Eps", "epsilon@greenbook.com", "Sumatran Orangutan", 30);
        addDonation("JungleSaver_Gamma", "gamma@greenbook.com", "Black Panther", 200);
        addDonation("PandaLover_Delta", "delta@greenbook.com", "Black Panther", 100);
        addDonation("NewDonor", "new@greenbook.com", "Black Panther", 50);
        addDonation("EcoWarrior_Alpha", "alpha@greenbook.com", "Vaquita", 150);
        addDonation("WildlifeHero_Beta", "beta@greenbook.com", "Vaquita", 50);
    }
}