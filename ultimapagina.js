function verificar(params) {
    var dadoTurbidez;
    var statusTurbidez;

    dadoTurbidez = document.getElementById("Turbidez").value;

    if (parseFloat(dadoTurbidez) < 0) {
        statusTurbidez = "Valor inválido para turbidez.";
    } else if (parseFloat(dadoTurbidez) <= 1) {
        statusTurbidez = "A turbidez da água está boa (≤ 1 NTU).";
    } else if (parseFloat(dadoTurbidez) > 1) {
        statusTurbidez = "A turbidez da água está ruim (> 1 NTU). Pode indicar contaminação.";
    } else {
        statusTurbidez = "Campo vazio.";
    }
    document.getElementById("resul_Turbidez").innerHTML = statusTurbidez;

    var dadoCondutividade;
    var statusCondutividade;

    dadoCondutividade = document.getElementById("Condutividade").value;

    if (parseFloat(dadoCondutividade) < 0) {
        statusCondutividade = "Valor inválido para condutividade elétrica.";
    } else if (parseFloat(dadoCondutividade) <= 500) {
        statusCondutividade = "A condutividade elétrica da água está ideal (≤ 500 µS/cm).";
    } else if (parseFloat(dadoCondutividade) > 500) {
        statusCondutividade = "A condutividade elétrica da água está elevada (> 500 µS/cm). Pode indicar contaminação.";
    } else {
        statusCondutividade = "Campo vazio.";
    }
    document.getElementById("resul_Condutividade").innerHTML = statusCondutividade;

    var dadoPh;
    var statusPh;
    dadoPh = document.getElementById("ph").value;

    if (parseFloat(dadoPh) < 0 || parseFloat(dadoPh) > 14) {
        statusPh = "Valor inválido para pH.";
    } else if (parseFloat(dadoPh) >= 6.5 && parseFloat(dadoPh) <= 8.5) {
        statusPh = "O pH da água está bom (entre 6.5 e 8.5).";
    } else if (parseFloat(dadoPh) < 6.5) {
        statusPh = "O pH da água está ácido (< 6.5).";
    } else if (parseFloat(dadoPh) > 8.5) {
        statusPh = "O pH da água está alcalino (> 8.5).";
    } else {
        statusPh = "Campo vazio.";
    }
    document.getElementById("resul_Ph").innerHTML = statusPh;

    var dadoTemperatura;
    var statusTemperatura;
    dadoTemperatura = document.getElementById("temperatura").value;

    if (parseFloat(dadoTemperatura) < 0) {
        statusTemperatura = "Valor inválido para temperatura.";
    } else if (parseFloat(dadoTemperatura) >= 10 && parseFloat(dadoTemperatura) <= 25) {
        statusTemperatura = "A temperatura da água está boa (entre 10°C e 25°C).";
    } else if (parseFloat(dadoTemperatura) < 10) {
        statusTemperatura = "A temperatura da água está baixa (< 10°C).";
    } else if (parseFloat(dadoTemperatura) > 25) {
        statusTemperatura = "A temperatura da água está alta (> 25°C).";
    } else {
        statusTemperatura = "Campo vazio.";
    }

    document.getElementById("resul_Temperatura").innerHTML = statusTemperatura;
    document.getElementById('conteiner-resultado').style.display = 'block';
}

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});