export const verifiePassword = (formData) => {
    if (formData.password.split("").length < 6) {
        alert('mot de passe trop court');
        return;
    }
    else if (formData.password !== formData.confirmPassword) {
        alert("password and confirme password must be the same")
        return;
    } 
 }