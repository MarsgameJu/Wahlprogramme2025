if (typeof(Storage) !== "undefined") {
    console.log("localStorage wird unterstützt");
} else {
    console.log("localStorage wird nicht unterstützt");
}


document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === CONFIG.username && password === CONFIG.password) {
        try {
            localStorage.setItem('adminLoggedIn', 'true');
        } catch (e) {
            console.error("Fehler beim Setzen von localStorage:", e);
        }
        console.log('adminLoggedIn gesetzt:', localStorage.getItem('adminLoggedIn'));
        console.log("Login erfolgreich, Weiterleitung zum Dashboard");
        window.location.href = 'admin-dashboard.html';
    }

      else {
        alert('Ungültige Anmeldedaten');
    }
});
