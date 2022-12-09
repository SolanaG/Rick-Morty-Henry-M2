
export default function validation(userData) {
    let errors = {}
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPass =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,10}$/
    
    if (!regexEmail.test(userData.username) || !userData.username || userData.username.length > 35) 
        errors.username = 'Por favor escribe tu email';
    if (!userData.password || !regexPass.test(userData.password)) 
        errors.password = 'Tu contraseña debe tener entre 6 y 10 caracteres, y al menos un número';
    
    return errors;
}