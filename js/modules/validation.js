export function validation() {
    
    document.getElementById('email').addEventListener('input', function(event) {
        const email = event.target.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailError = document.getElementById('emailError');
    
        if (!emailPattern.test(email)) {
            emailError.textContent = 'Correo electrónico no válido';
        } else {
            emailError.textContent = '';
        }
    });
    
}