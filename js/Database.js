const DB_KEY = 'greenbookUsers';
let users = loadUsers();
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
        password: password
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