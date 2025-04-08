var buttom


const toggleButton = document.getElementById("toggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});



const hora = new Date().getHours();
function periodoDoDia(hora) {
    if (hora >= 5 && hora <= 12) {
        return "Manhã";
    } else if (hora >= 13 && hora <= 17) {
        return "Tarde";
    } else if (hora >= 18 && hora <= 23 || hora === 0) {
        return "Noite";
    } else if (hora >= 1 && hora <= 4) {
        return "Madrugada";
    } else {
        return "Hora inválida";
    }
}

alert(`O período do dia para ${hora}h é ${periodoDoDia(hora)}.`);
