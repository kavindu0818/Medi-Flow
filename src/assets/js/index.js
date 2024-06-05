document.getElementById('doctor-reg-second-step').style.display = "none"
document.getElementById('doctor-reg-last-step').style.display = "none"

document.getElementById('doctorFormNextBtn1st').addEventListener('click', function () {
    document.getElementById('doctor-reg-first-step').style.display = "none"
    document.getElementById('doctor-reg-second-step').style.display = "block"
});

document.getElementById('doctorFormNextBtn2nd').addEventListener('click', function () {
    document.getElementById('doctor-reg-second-step').style.display = "none"
    document.getElementById('doctor-reg-last-step').style.display = "block"
});