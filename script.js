const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function closeMenu() {
    navLinks.classList.remove('active');
}

function check() {
    document.getElementById('conteiner-resultado').style.display = 'block';
    document.getElementById('topico-resultado').style.display = 'none';
    document.getElementById('aviso').style.display = 'none';
    document.getElementById('topico-turbidez').style.display = 'none';
    document.getElementById('topico-ph').style.display = 'none';
    document.getElementById('topico-dureza').style.display = 'none';

    const turbidez = document.getElementById("Turbidez").value;
    const ph = document.getElementById("pH").value;
    const dureza = document.getElementById("Dureza").value;

    let campospreenchidos = 0;

    if (turbidez) campospreenchidos++;
    if (ph) campospreenchidos++;
    if (dureza) campospreenchidos++;

    if (campospreenchidos === 0) {
        mensagemErro();
    } else if (campospreenchidos === 1){
        mensagemUmCampo(turbidez, ph, dureza);
    } else if (campospreenchidos === 2) {
        checkDoisCampos(turbidez, ph, dureza);
    } else {
        checkTresCampos(turbidez, ph, dureza);
    }
  }

function mensagemErro() {
    document.getElementById('aviso').style.display = 'block';
    document.getElementById("aviso").innerHTML = "<b>ERRO:</b><br>Nenhum campo foi preenchido.";
}

function mensagemUmCampo(turbidez, ph, dureza) {
    if (turbidez < 0 || turbidez > 10000 || ph < 0 || ph > 14 || dureza < 0 || dureza > 1000) {
        document.getElementById('aviso').style.display = 'block';
        document.getElementById("aviso").innerHTML = "<b>ERRO:</b><br>O valor está inválido para análise.";
    } else {
        document.getElementById('aviso').style.display = 'block';
        document.getElementById("aviso").innerHTML = "<b>Atenção!</b><br>Quanto menos informação, menos confiável e preciso será o resultado.";
        let resultado; 

        if (turbidez) {
            document.getElementById('topico-turbidez').style.display = 'block';
            let statusTurbidez; 
            if (turbidez <= 1) {
                statusTurbidez = "A água é cristalina e praticamente livre de partículas suspensas. A turbidez é inferior a 1 NTU."; 
                resultado = "Usos: Ideal para beber, cozinhar e higiene pessoal. Pode ser usada para irrigação, usada em laboratórios e uso industrial.";
            } else if (turbidez <= 5) {
                statusTurbidez = "A água é clara, mas pode ter uma leve opacidade. A turbidez varia entre 1 e 5 NTU."; 
                resultado = "Usos: Adequada para beber e cozinhar após tratamento básico. Adequada para usos industriais e irrigação.";
            } else if (turbidez <= 50) {
                statusTurbidez = "A água apresenta uma opacidade visível, com turbidez entre 5 e 50 NTU."; 
                resultado = "Usos: Para consumo humano precisa de tratamento (coagulação, floculação, filtração). Usada para irrigação de culturas menos sensíveis. Utilizada em processos industriais que não requerem água de alta pureza como construção civil em misturas.";
            } else {
                statusTurbidez = "A água é visivelmente turva, com turbidez superior a 50 NTU."; 
                resultado = "Usos: Para consumo humano precisa de tratamento (coagulação, floculação, filtração). Usos muito específicos na indústria, na construção civil e no tratamento de esgoto.";
            }
            document.getElementById("resul_Turbidez").innerHTML = statusTurbidez;
        }

        if (ph) {
            document.getElementById('topico-ph').style.display = 'block';
            let statusPh;
            if (ph <= 3) {
                statusPh = "A água muito ácida tem um pH inferior a 3.";
                resultado = "Usos: Não é seguro para o consumo humano sem o devido tratamento (corrigir o pH da água usando bases). Utilizada em processos industriais específicos, como a limpeza de metais e a produção de produtos químicos. Pode ser usada em processos de neutralização.";
            } else if (ph <= 6) {
                statusPh = "A água ácida tem um pH entre 3 e 6.";
                resultado = "Usos: Não é seguro para o consumo humano sem o devido tratamento (corrigir o pH da água usando bases). Pode ser usada para irrigação de plantas que preferem solos ácidos. Utilizada em processos de limpeza e desinfecção.";
            } else if (ph <= 7) {
                statusPh = "A água neutra tem um pH de aproximadamente 7.";
                resultado = "Usos: Ideal para beber, cozinhar e higiene pessoal. Utilizada em processos que requerem água sem propriedades ácidas ou alcalinas, como a irrigação.";
            } else if (ph <= 10) {
                statusPh = "A água levemente alcalina tem um pH entre 7 e 10";
                resultado = "Usos: Considerada benéfica para a saúde, pode ajudar na neutralização da acidez do corpo. Usada para irrigação, ajuda a corrigir a acidez do solo.";
            } else {
                statusPh = "A água muito alcalina tem um pH superior a 10.";
                resultado = "Usos: Não é ideal para o consumo humano (precisa de tratamento com ácidos). Utilizada em processos que requerem água alcalina, como a fabricação de sabões e detergentes. Usada para corrigir a acidez do solo em áreas agrícolas.";
            }
            document.getElementById("resul_Ph").innerHTML = statusPh;
        }

        if (dureza) {
            document.getElementById('topico-dureza').style.display = 'block';
            let statusDureza;
            if (dureza <= 60) {
                statusDureza = "A água muito mole tem uma concentração de íons de cálcio e magnésio inferior a 60 mg/L.";
                resultado = "Usos: Boa para a maioria dos usos. Ideal para beber e cozinhar, pois não deixa resíduos minerais. Excelente para lavar roupas, já que evita a formação de depósitos de sabão. Pode também ser usada para irrigação e na maioria dos processos industriais.";
            } else if (dureza <= 120) {
                statusDureza = "A água moderadamente dura tem uma concentração de íons de cálcio e magnésio entre 61 e 120 mg/L.";
                resultado = "Usos: Adequada para beber e cozinhar, embora possa deixar alguns resíduos minerais. Usada para irrigação, pois fornece minerais benéficos às plantas e em processos industriais.";
            } else if (dureza <= 180) {
                statusDureza = "A água dura tem uma concentração de íons de cálcio e magnésio entre 121 e 180 mg/L.";
                resultado = "Usos: Pode ser usada para beber e cozinhar, mas pode deixar depósitos minerais em utensílios e encanamentos. Utilizada em processos industriais que não são sensíveis à minerais. Pode ser utilizada na construção civil.";
            } else {
                statusDureza = "A água muito dura tem uma concentração de íons de cálcio e magnésio superior a 180 mg/L.";
                resultado = "Usos: Não recomendada para o dia a dia. Uso industrial específico e pode ser usado na construção civil.";
            }
            document.getElementById("resul_Dureza").innerHTML = statusDureza;
        }
        document.getElementById('topico-resultado').style.display = 'block';
        document.getElementById("resultado").innerHTML = resultado;
    }
}

function checkDoisCampos(turbidez, ph, dureza) {
    document.getElementById('aviso').style.display = 'block';

    var valoresInvalidos = 0;

    if (turbidez < 0 || turbidez > 10000) {
        turbidez = '';
        valoresInvalidos++;
    }
    if (ph < 0 || ph > 14) {
        ph = '';
        valoresInvalidos++;
    }
    if (dureza < 0 || dureza > 1000) {
        dureza = '';
        valoresInvalidos++;
    }
        
    switch (valoresInvalidos) {
        case 1:
            mensagemUmCampo(turbidez, ph, dureza);
            document.getElementById("aviso").innerHTML = "<b>Aviso:</b><br>Um dos valores está inválido para análise.";
            break;
        case 2:
            document.getElementById("aviso").innerHTML = "<b>ERRO:</b><br>Os valores estão inválidos para análise.";
            break;
        default:
            document.getElementById("aviso").innerHTML = "<b>Atenção!</b><br>Quanto menos informação, menos confiável e preciso será o resultado.";
            if (turbidez && ph)
                mensagemTP(turbidez, ph);
            else if (turbidez && dureza)
                mensagemTD(turbidez, dureza);
            else if (ph && dureza)
                mensagemPD(ph, dureza);
    }
}

function checkTresCampos(turbidez, ph, dureza) {
    document.getElementById('aviso').style.display = 'block';

    var valoresInvalidos = 0;

    if (turbidez < 0 || turbidez > 10000) {
        turbidez = '';
        valoresInvalidos++;
    }
    if (ph < 0 || ph > 14) {
        ph = '';
        valoresInvalidos++;
    }
    if (dureza < 0 || dureza > 1000) {
        dureza = '';
        valoresInvalidos++;
    }

    switch (valoresInvalidos) {
        case 1:
            checkDoisCampos(turbidez, ph, dureza);
            document.getElementById("aviso").innerHTML = "<b>Aviso:</b><br>Um dos valores está inválido para análise.";
            break;     
        case 2:
            mensagemUmCampo(turbidez, ph, dureza);
            document.getElementById("aviso").innerHTML = "<b>Aviso:</b><br>Dois dos valores estão inválidos para análise.";
            break;
        case 3:
            document.getElementById("aviso").innerHTML = "<b>ERRO:</b><br>Os valores estão inválidos para análise.";
            break;
        default:
            document.getElementById('aviso').style.display = 'none';
            mensagemTresCampos(turbidez, ph, dureza);
      }      
}

function mensagemTP(turbidez, ph) {
    let statusTurbidez;
    let statusPh;
    let resultado;

    if (ph <= 4) {
        statusPh = "A água está muito ácida (pH entre 0 e 4).";
        if (turbidez <= 1) {
            statusTurbidez = "A turbidez está muito baixa (0-1 NTU).";
            resultado = "Água clara, mas extremamente corrosiva e prejudicial.<br>Usos: Processos industriais que requerem água ácida, como a limpeza de metais. Necessita de neutralização com bases.";
        } else if (turbidez <= 5) {
            statusTurbidez = "A turbidez está baixa (1-5 NTU).";
            resultado = "Água corrosiva e prejudicial.<br>Usos: Pode ser usada industrialmente. Precisa de neutralização com bases.";
        } else if (turbidez <= 25) {
            statusTurbidez = "A turbidez está moderada (5-25 NTU).";
            resultado = "Água com partículas em suspensão e corrosiva.<br>Usos: Usos industriais específicos. Necessita de coagulação, floculação e neutralização.";
        } else {
            statusTurbidez = "A turbidez está alta (>25 NTU).";
            resultado = "Água turva e corrosiva, indicando poluição.<br>Usos: Não recomendada para nenhum uso. Precisa de coagulação, floculação e neutralização.";
        }
    } else if (ph < 7) {
        statusPh = "A água está ácida (pH entre 4 e 7).";
        if (turbidez <= 1) {
            statusTurbidez = "A turbidez está muito baixa (<1 NTU).";
            resultado = "Água clara, mas corrosiva e prejudicial.<br>Usos: Industriais específicos, irrigação de plantas tolerantes à acidez. Necessita de neutralização com bases e filtração.";
        } else if (turbidez <= 5) {
            statusTurbidez = "A turbidez está baixa (1-5 NTU).";
            resultado = "Água corrosiva e prejudicial.<br>Usos: Industriais específicos, irrigação de plantas tolerantes à acidez. Necessita de neutralização com bases e filtração.";
        } else if (turbidez <= 25) {
            statusTurbidez = "A turbidez está moderada (5-25 NTU).";
            resultado = "Água com partículas em suspensão e corrosiva.<br>Usos: Industriais específicos, irrigação de plantas tolerantes à acidez. Precisa de coagulação, floculação e neutralização.";
        } else {
            statusTurbidez = "A turbidez está alta (>25 NTU).";
            resultado = "Água corrosiva e prejudicial.<br>Usos: Industriais específicos. Precisa de coagulação, floculação e neutralização.";
        }
    } else if (ph === 7) {
        statusPh = "A água está neutra (pH 7).";
        if (turbidez <= 1) {
            statusTurbidez = "A turbidez está muito baixa (<1 NTU).";
            resultado = "Água clara e sem partículas em suspensão.<br>Usos: Consumo humano, limpeza, irrigação, processos industriais.";
        } else if (turbidez <= 5) {
            statusTurbidez = "A turbidez está baixa (1-5 NTU).";
            resultado = "Água com leve presença de partículas.<br>Usos: Consumo humano, limpeza, irrigação, processos industriais.";
        } else if (turbidez <= 25) {
            statusTurbidez = "A turbidez está moderada (5-25 NTU).";
            resultado = "Água com partículas em suspensão.<br>Usos: Consumo humano (após tratamento), limpeza, irrigação, processos industriais. Precisa de coagulação, floculação, filtração e desinfecção.";
        } else {
            statusTurbidez = "A turbidez está alta (>25 NTU).";
            resultado = "Água visivelmente turva, pode indicar presença de sedimentos ou contaminantes.<br>Usos: Consumo humano (após tratamento), limpeza, irrigação, processos industriais. Precisa de coagulação, floculação, filtração e desinfecção.";
        }
    } else if (ph <= 9) {
        statusPh = "A água está levemente alcalina (pH entre 8 e 9).";
        if (turbidez <= 1) {
            statusTurbidez = "A turbidez está muito baixa (<1 NTU).";
            resultado = "Água clara, com tendência a formar incrustações em tubulações.<br>Usos: Consumo humano, limpeza, irrigação, processos industriais. Recomenda-se filtração e desinfecção.";
        } else if (turbidez <= 5) {
            statusTurbidez = "A turbidez está baixa (1-5 NTU).";
            resultado = "Água relativamente clara, mas com potencial para formar incrustações.<br>Usos: Consumo humano, limpeza, irrigação, processos industriais. Recomenda-se filtração e desinfecção.";
        } else if (turbidez <= 25) {
            statusTurbidez = "A turbidez está moderada (5-25 NTU).";
            resultado = "Água com partículas em suspensão, levemente alcalina.<br>Usos: Consumo humano (após tratamento), limpeza, irrigação, processos industriais. Recomenda-se coagulação, floculação, filtração e desinfecção.";
        } else {
            statusTurbidez = "A turbidez está alta (>25 NTU).";
            resultado = "Água turva, com tendência a formar incrustações.<br>Usos: Limpeza, irrigação, processos industriais. Precisa de coagulação, floculação, filtração e desinfecção.";
        }
    } else {
        statusPh = "A água está muito alcalina (pH > 9).";
        if (turbidez <= 1) {
            statusTurbidez = "A turbidez está muito baixa (<1 NTU).";
            resultado = "Água clara, mas altamente incrustante e irritante para a pele e olhos.<br>Usos: Industriais específicos, irrigação de plantas tolerantes à alcalinidade. Precisa de acidificação e desinfecção.";
        } else if (turbidez <= 5) {
            statusTurbidez = "A turbidez está baixa (1-5 NTU).";
            resultado = "Água relativamente clara, mas altamente alcalina, com potencial para irritação.<br>Usos: Industriais específicos, irrigação de plantas tolerantes à alcalinidade. Precisa de acidificação e desinfecção.";
        } else if (turbidez <= 25) {
            statusTurbidez = "A turbidez está moderada (5-25 NTU).";
            resultado = "Água com partículas em suspensão, muito alcalina.<br>Usos: Industriais específicos. Precisa passar pelos processos de coagulação, floculação, acidificação e filtração.";
        } else {
            statusTurbidez = "A turbidez está alta (>25 NTU).";
            resultado = "Água visivelmente turva e altamente alcalina, não recomendada para consumo.<br>Usos: Industriais específicos. Precisa passar pelos processos de coagulação, floculação, acidificação e filtração.";
        }
    }

    document.getElementById('topico-turbidez').style.display = 'block';
    document.getElementById('topico-ph').style.display = 'block';
    document.getElementById('topico-resultado').style.display = 'block';
    document.getElementById("resul_Turbidez").innerHTML = statusTurbidez;
    document.getElementById("resul_Ph").innerHTML = statusPh;
    document.getElementById("resultado").innerHTML = resultado;
} 

function mensagemTD(turbidez, dureza) {
    let statusTurbidez;
    let statusDureza;
    let resultado;

    if (dureza <= 60) {
        statusDureza = "A água está muito mole (0-60 mg/L).";
        if (turbidez <= 1) {
            statusTurbidez = "A turbidez está muito baixa (0-1 NTU).";
            resultado = "Água muito clara e com baixa concentração de minerais.<br>Usos: Ideal para consumo humano, laboratórios, indústrias farmacêuticas e eletrônicas, onde a pureza da água é crucial.";
        } else if (turbidez <= 5) {
            statusTurbidez = "A turbidez está baixa (1-5 NTU).";
            resultado = "Água clara com baixa concentração de minerais.<br>Usos: Consumo humano, uso doméstico geral, e em processos industriais que não exigem água muito pura.";
        } else if (turbidez <= 50) {
            statusTurbidez = "A turbidez está moderada (5-50 NTU).";
            resultado = "Água turva, mas com baixa concentração de minerais.<br>Usos: Pode ser usada para irrigação e algumas aplicações industriais, mas pode necessitar de tratamento adicional para consumo humano.";
        } else {
            statusTurbidez = "A turbidez está alta (>50 NTU).";
            resultado = "Água muito turva com baixa concentração de minerais.<br>Usos: Principalmente para irrigação e usos industriais onde a turbidez não é um problema significativo. Necessita de tratamento para consumo humano.";
        }
    } else if (dureza <= 120) {
        statusDureza = "A água está moderadamente dura (61-120 mg/L).";
        if (turbidez <= 1) {
            statusTurbidez = "A turbidez está muito baixa (0-1 NTU).";
            resultado = "Água muito clara com dureza moderada.<br>Usos: Principalmente para irrigação e usos industriais onde a turbidez não é um problema significativo. Necessita de tratamento para consumo humano.";
        } else if (turbidez <= 5) {
            statusTurbidez = "A turbidez está baixa (1-5 NTU).";
            resultado = "Água clara com dureza moderada.<br>Usos: Consumo humano, uso doméstico, e em processos industriais que requerem água de boa qualidade.";
        } else if (turbidez <= 50) {
            statusTurbidez = "A turbidez está moderada (5-50 NTU).";
            resultado = "Água turva com dureza moderada.<br>Usos: Irrigação, algumas aplicações industriais, necessita de tratamento para consumo humano.";
        } else {
            statusTurbidez = "A turbidez está alta (>50 NTU).";
            resultado = "Água muito turva com dureza moderada.<br>Usos: Principalmente para irrigação e usos industriais. Necessita de tratamento para consumo humano.";
        }
    } else if (dureza <= 180) {
        statusDureza = "A água está dura (121-180 mg/L).";
        if (turbidez <= 1) {
            statusTurbidez = "A turbidez está muito baixa (0-1 NTU).";
            resultado = "Água clara com dureza considerável.<br>Usos: Consumo humano, uso doméstico, e processos industriais que podem tolerar alguma dureza.";
        } else if (turbidez <= 5) {
            statusTurbidez = "A turbidez está baixa (1-5 NTU).";
            resultado = "Água relativamente clara com dureza considerável.<br>Usos: Consumo humano, uso doméstico, e processos industriais.";
        } else if (turbidez <= 50) {
            statusTurbidez = "A turbidez está moderada (5-50 NTU).";
            resultado = "Água turva com dureza considerável.<br>Usos: Irrigação, algumas aplicações industriais, necessita de tratamento para consumo humano.";
        } else {
            statusTurbidez = "A turbidez está alta (>50 NTU).";
            resultado = "Água muito turva com dureza considerável.<br>Usos: Principalmente para irrigação e usos industriais. Necessita de tratamento para consumo humano.";
        }
    } else {
        statusDureza = "A água está muito dura (>180 mg/L).";
        if (turbidez <= 1) {
            statusTurbidez = "A turbidez está muito baixa (0-1 NTU).";
            resultado = "Água clara com alta concentração de minerais.<br>Usos: Consumo humano (com tratamento para reduzir a dureza), uso doméstico, e processos industriais que podem ter alta dureza.";
        } else if (turbidez <= 5) {
            statusTurbidez = "A turbidez está baixa (1-5 NTU).";
            resultado = "Água relativamente clara com alta concentração de minerais.<br>Usos: Consumo humano (com tratamento para reduzir dureza), uso doméstico, e processos industriais.";
        } else if (turbidez <= 50) {
            statusTurbidez = "A turbidez está moderada (5-50 NTU).";
            resultado = "Água visivelmente turva com alta concentração de minerais.<br>Usos: Irrigação, algumas aplicações industriais, e pode necessitar de tratamento para consumo humano.";
        } else {
            statusTurbidez = "A turbidez está alta (>50 NTU).";
            resultado = "Água muito turva com alta concentração de minerais.<br>Usos: Principalmente para irrigação e usos industriais. Necessita de tratamento para consumo humano.";
        }
    }

    document.getElementById('topico-turbidez').style.display = 'block';
    document.getElementById('topico-dureza').style.display = 'block';
    document.getElementById('topico-resultado').style.display = 'block';
    document.getElementById("resul_Turbidez").innerHTML = statusTurbidez;
    document.getElementById("resul_Dureza").innerHTML = statusDureza;
    document.getElementById("resultado").innerHTML = resultado;
}

function mensagemPD(ph, dureza) {
    let statusPh;
    let statusDureza;
    let resultado;

    if (ph <= 4) {
        statusPh = "A água está muito ácida (pH entre 0 e 4).";
        if (dureza <= 60) {
            statusDureza = "A água está muito mole (0-60 mg/L).";
            resultado = "Água muito ácida e mole, altamente corrosiva para tubulações e equipamentos.<br>Usos: Não recomendada para consumo humano ou industrial devido à alta corrosividade. Necessário ajuste de pH e adição de minerais para reduzir a corrosividade. Pode ser usada em processos que requerem água altamente pura e corrosiva (fabricação de baterias).";
        } else if (dureza <= 120) {
            statusDureza = "A água está moderadamente dura (61-120 mg/L).";
            resultado = "Água ácida e mole, ainda corrosiva, mas menos agressiva.<br>Usos: Pode ser usada para irrigação de plantas que toleram acidez, mas não é ideal para consumo humano. Ajuste de pH recomendado.";
        } else if (dureza <= 180) {
            statusDureza = "A água está dura (121-180 mg/L).";
            resultado = "Água ácida e dura, pode causar corrosão e incrustações.<br>Usos: Limitada para uso industrial e agrícola, pode causar corrosão em equipamentos. Precisa de ajuste de pH e controle de dureza.";
        } else {
            statusDureza = "A água está muito dura (>180 mg/L).";
            resultado = "Água ácida e muito dura, altamente corrosiva e com alta formação de incrustações.<br>Usos: Inadequada para a maioria dos usos devido à corrosividade e incrustações. Necessário tratamento extensivo para ajuste de pH e dureza.";
        }
    } else if (ph <= 6) {
        statusPh = "A água está ácida (pH entre 4 e 6).";
        if (dureza <= 60) {
            statusDureza = "A água está muito mole (0-60 mg/L).";
            resultado = "Água ácida e mole, corrosiva para tubulações.<br>Usos: Pode ser usada em laboratórios e indústrias químicas, não é ideal para consumo humano. Ajuste de pH recomendado.";
        } else if (dureza <= 150) {
            statusDureza = "A água está moderadamente dura (61-150 mg/L).";
            resultado = "Água ácida e mole, menos corrosiva.<br>Usos: Adequada para irrigação e alguns usos industriais. Ajuste de pH pode ser necessário.";
        } else if (dureza <= 300) {
            statusDureza = "A água está dura (151-300 mg/L).";
            resultado = "Água ácida e dura, pode causar corrosão e alguma incrustação.<br>Usos: Pode ser usada em processos industriais com controle de corrosão. Ajuste de pH e controle de dureza recomendados.";
        } else {
            statusDureza = "A água está muito dura (>300 mg/L).";
            resultado = "Água ácida e muito dura, corrosiva e com alta formação de incrustações.<br>Usos: Evitada na maioria dos casos, pode ter uso industrial. Necessário tratamento para ajuste de pH e dureza.";
        }
    } else if (ph <= 8) {
        statusPh = "A água está neutra (pH entre 6 e 8).";
        if (dureza <= 50) {
            statusDureza = "A água está muito mole (0-50 mg/L).";
            resultado = "Água neutra e mole.<br>Usos: Adequada para consumo humano e irrigação, laboratórios, indústrias farmacêuticas e fabricação de eletrônicos. Pode necessitar de ajuste de dureza.";
        } else if (dureza <= 150) {
            statusDureza = "A água está moderadamente dura (51-150 mg/L).";
            resultado = "Água neutra e mole, ideal para a maioria dos usos.<br>Usos: Ideal para consumo humano, irrigação e uso industrial.";
        } else if (dureza <= 300) {
            statusDureza = "A água está dura (151-300 mg/L).";
            resultado = "Água neutra a ligeiramente alcalina e dura, pode causar alguma incrustação.<br>Usos: Adequada para consumo humano e uso industrial, controle de dureza pode ser necessário.";
        } else {
            statusDureza = "A água está muito dura (>300 mg/L).";
            resultado = "Água neutra a ligeiramente alcalina e muito dura, alta formação de incrustações.<br>Usos: Pode ser usada domesticamente e industrialmente, mas com risco de incrustações. Necessário controle de dureza.";
        }
    } else if (ph <= 10) {
        statusPh = "A água está levemente alcalina (pH entre 8 e 10).";
        if (dureza <= 50) {
            statusDureza = "A água está muito mole (0-50 mg/L).";
            resultado = "Água alcalina e mole, pode causar incrustações leves.<br>Usos: Pode ser usada para consumo humano, irrigação e indústrias que requerem água pura, mas pode causar incrustações leves.";
        } else if (dureza <= 150) {
            statusDureza = "A água está moderadamente dura (51-150 mg/L).";
            resultado = "Água alcalina e mole, adequada para a maioria dos usos.<br>Usos: Adequada para consumo humano, irrigação e uso industrial.";
        } else if (dureza <= 300) {
            statusDureza = "A água está dura (151-300 mg/L).";
            resultado = "Água alcalina e dura, pode causar incrustações significativas.<br>Usos: Pode ser usada para consumo humano e industrial, com risco de incrustações. Controle de dureza pode ser necessário.";
        } else {
            statusDureza = "A água está muito dura (>300 mg/L).";
            resultado = "Água alcalina e muito dura, alta formação de incrustações.<br>Usos: Limitada para uso industrial e consumo humano devido à alta formação de incrustações. Necessário tratamento para controle de dureza.";
        }
    } else {
        statusPh = "A água está muito alcalina (pH entre 10 e 14).";
        if (dureza <= 50) {
            statusDureza = "A água está muito mole (0-50 mg/L).";
            resultado = "Água muito alcalina e mole, pode causar incrustações leves.<br>Usos: Pode ser usada para limpeza geral, irrigação e indústrias (fabricação de sabões e detergentes). O ajuste de pH com ácidos é necessário.";
        } else if (dureza <= 150) {
            statusDureza = "A água está moderadamente dura (51-150 mg/L).";
            resultado = "Água muito alcalina e mole, adequada para a maioria dos usos.<br>Usos: Limpeza geral, irrigação e uso industrial.";
        } else if (dureza <= 300) {
            statusDureza = "A água está dura (151-300 mg/L).";
            resultado = "Água muito alcalina e dura, pode causar incrustações significativas.<br>Usos: Uso industrial e alguns sistemas de irrigação, com tratamento para evitar danos aos equipamentos. Controle de dureza e ajuste de pH são recomendados.";
        } else {
            statusDureza = "A água está muito dura (>300 mg/L).";
            resultado = "Água muito alcalina e muito dura, alta formação de incrustações.<br>Usos: Limitada para uso industrial. Necessário tratamento para controle de dureza e ajuste de pH.";
        }
    }

    document.getElementById('topico-ph').style.display = 'block';
    document.getElementById('topico-dureza').style.display = 'block';
    document.getElementById('topico-resultado').style.display = 'block';
    document.getElementById("resul_Ph").innerHTML = statusPh;
    document.getElementById("resul_Dureza").innerHTML = statusDureza;
    document.getElementById("resultado").innerHTML = resultado;
}

function mensagemTresCampos(turbidez, ph, dureza) {
    let resultado;
    let statusTurbidez;
    let statusPh;
    let statusDureza;

    if (ph <= 3) {
        statusPh = "A água está muito ácida (pH menor que 3)."
        if (turbidez <= 1) {
            statusTurbidez = "A turbidez é considerada muito baixa (0-1 NTU).";
            if (dureza <= 60) {
                statusDureza = "Água muito mole (0-60 mg/L)";
                resultado = "A água é clara, com muito poucas partículas em suspensão, extremamente ácida e com baixa concentração de minerais (mole). Essa combinação é altamente corrosiva para tubulações e equipamentos.<br>Usos: Não recomendada para consumo humano ou para a maioria dos processos industriais, a menos que seja utilizada em indústrias químicas específicas que requerem água ácida e pura, como na fabricação de baterias ou processos de limpeza de metais.<br>Tratamento: Necessário ajuste de pH para neutralidade e adição de minerais.";
            } else if (dureza <= 120) {
                statusDureza = "Água moderadamente dura (61-120 mg/L).";
                resultado = "Água corrosiva, com mais minerais. Potencial de incrustação considerável, ainda inadequada para consumo.<br>Usos: Algumas aplicações industriais e irrigação para plantas que toleram acidez (como hortênsias, azaleias, camélias, rododendros, mirtilos, groselhas).<br>Tratamento: Ajuste de pH para neutralidade e controle de dureza.";
            } else if (dureza <= 180) {
                statusDureza = "Água dura (121-180 mg/L).";
                resultado = "Água corrosiva e com tendência à incrustação.<br>Usos: Processos industriais restritos.<br>Tratamento: Ajuste de pH e redução da dureza.";
            } else {
                statusDureza = "Água muito dura (> 180 mg/L).";
                resultado = "Água altamente corrosiva e incrustante.<br>Usos: Processos industriais específicos com necessidade de controle rigoroso de qualidade da água.<br>Tratamento: Ajuste de pH e redução significativa da dureza.";
            }
        } else if (turbidez <= 5) {
            statusTurbidez = "A turbidez é considerada baixa (1-5 NTU).";
            if (dureza <= 60) {
                statusDureza = "Água muito mole (0-60 mg/L)";
                resultado = "Água corrosiva e com algumas partículas suspensas. Pouca adequação para consumo humano ou usos comuns.<br>Usos: Indústria especializada.<br>Tratamento: Filtração para reduzir turbidez e ajuste de pH.";
            } else if (dureza <= 120) {
                statusDureza = "Água moderadamente dura (61-120 mg/L).";
                resultado = "Água corrosiva e com leves partículas em suspensão.<br>Usos: Algumas indústrias utilizam, mas não é adequada para consumo.<br>Tratamento: Filtração e ajuste de pH.";
            } else if (dureza <= 180) {
                statusDureza = "Água dura (121-180 mg/L).";
                resultado = "Água com alta tendência a corrosão e incrustação com presença de partículas em suspensão.<br>Usos: Aplicações limitadas em indústrias.<br>Tratamento: Filtração e ajuste de pH e dureza.";
            } else {
                statusDureza = "Água muito dura (> 180 mg/L).";
                resultado = "Água com tendência extrema à incrustação e corrosão.<br>Usos: Muito limitada para uso industrial sem tratamento intensivo.<br>Tratamento: Filtração, ajuste de pH e redução da dureza.";
            }
        } else if (turbidez <= 50) {
            statusTurbidez = "A turbidez é considerada moderada (5-50 NTU).";
            if (dureza <= 60) {
                statusDureza = "Água muito mole (0-60 mg/L)";
                resultado = "Água extremamente ácida e com muitas partículas. Inadequada para consumo ou irrigação.<br>Usos: Processos industriais com alta necessidade de filtração.<br>Tratamento: Filtração pesada, ajuste de pH e possível adição de minerais.";
            } else if (dureza <= 120) {
                statusDureza = "Água moderadamente dura (61-120 mg/L).";
                resultado = "Água ácida e com muitas partículas, apesar de boa dureza.<br>Usos: Indústria restrita com necessidade de controle de partículas e pH.<br>Tratamento: Filtração, ajuste de pH e controle de dureza.";
            } else if (dureza <= 180) {
                statusDureza = "Água dura (121-180 mg/L).";
                resultado = "Água corrosiva e com alto potencial de incrustação devido à dureza e à turbidez.<br>Usos: Indústria com pré-tratamento de filtração e ajuste de pH.<br>Tratamento: Necessário filtrar para turbidez e ajustar pH e dureza.";
            } else {
                statusDureza = "Água muito dura (> 180 mg/L).";
                resultado = "Água altamente corrosiva e com muitos sedimentos. Não adequada para usos comuns sem tratamento.<br>Usos: Indústria muito limitada com necessidade de tratamento intensivo.<br>Tratamento: Filtração pesada, ajuste de pH e remoção de dureza.";
            }
        } else if (turbidez <= 100) {
            statusTurbidez = "A turbidez é considerada alta (50-100 NTU).";
            if (dureza <= 60) {
                statusDureza = "Água muito mole (0-60 mg/L)";
                resultado = "Água ácida e com alta turbidez. Muita corrosão e potencial de contaminação.<br>Usos: Processos industriais específicos com filtração intensiva.<br>Tratamento: Coagulação, floculação, filtração e ajuste de pH.";
            } else if (dureza <= 120) {
                statusDureza = "Água moderadamente dura (61-120 mg/L).";
                resultado = "Água ácida, turva e com minerais dissolvidos, prejudicando ainda mais a qualidade.<br>Usos: Apenas com tratamento extensivo.<br>Tratamento: Filtração para turbidez e ajuste de pH e dureza.";
            } else if (dureza <= 180) {
                statusDureza = "Água dura (121-180 mg/L).";
                resultado = "Água muito dura, ácida e com alta turbidez, extremamente inadequada para uso direto.<br>Usos: Indústrias com tratamento especializado.<br>Tratamento: Filtração pesada, ajuste de pH e redução de dureza.";
            } else {
                statusDureza = "Água muito dura (> 180 mg/L).";
                resultado = "Água corrosiva, incrustante e muito turva. Pouca adequação para qualquer uso sem tratamento intensivo.<br>Usos: Indústria altamente especializada.<br>Tratamento: Filtração, ajuste de pH e dureza.";
            }
        } else {
            statusTurbidez = "A turbidez é considerada muito alta (> 100 NTU).";
            if (dureza <= 60) {
                statusDureza = "Água muito mole (0-60 mg/L)";
                resultado = "Água extremamente turva e ácida. Inadequada para qualquer uso sem tratamento intensivo.<br>Usos: Processos industriais raros com necessidade de controle rigoroso.<br>Tratamento: Coagulação, floculação, filtração e ajuste de pH.";
            } else if (dureza <= 120) {
                statusDureza = "Água moderadamente dura (61-120 mg/L).";
                resultado = "Água extremamente inadequada para consumo ou processos industriais comuns.<br>Usos: Indústria com pré-tratamento intensivo.<br>Tratamento: Filtração pesada, ajuste de pH e redução de dureza.";
            } else if (dureza <= 180) {
                statusDureza = "Água dura (121-180 mg/L).";
                resultado = "Água com dureza alta, pH ácido e turbidez extrema.<br>Usos: Aplicações muito restritas na indústria.<br>Tratamento: Coagulação, floculação, ajuste de pH e dureza.";
            } else {
                statusDureza = "Água muito dura (> 180 mg/L).";
                resultado = "Água extremamente inadequada para qualquer uso sem tratamento extensivo.<br>Usos: Apenas para processos industriais com exigências específicas e alto controle.<br>Tratamento: Filtração pesada, ajuste de pH e remoção de dureza.";
            }
        }
    } else if (ph <= 6) {
        statusPh = "A água está ácida (pH entre 3 e 6).";
        if (turbidez <= 1) {
            statusTurbidez = "A turbidez é considerada muito baixa (0-1 NTU).";
            if (dureza <= 60) {
                statusDureza = "Água muito mole (0-60 mg/L).";
                resultado = "Corrosiva, com pouca turbidez e baixo teor de minerais.<br>Usos: Indústria limitada, não adequada para consumo humano.<br>Tratamento: Ajuste de pH para neutralidade, adição de minerais.";
            } else if (dureza <= 120) {
                statusDureza = "Água moderadamente dura (61-120 mg/L).";
                resultado = "Levemente corrosiva, mas com mais minerais, ainda não ideal para consumo.<br>Usos: Irrigação controlada e algumas aplicações industriais.<br>Tratamento: Ajuste de pH, controle de dureza.";
            } else if (dureza <= 180) {
                statusDureza = "Água dura (121-180 mg/L).";
                resultado = "Tendência a incrustação, corrosão moderada.<br>Usos: Indústria e algumas aplicações de irrigação.<br>Tratamento: Ajuste de pH e controle de dureza.";
            } else {
                statusDureza = "Água muito dura (> 180 mg/L).";
                resultado = "Alta corrosão e incrustação, prejudicial para uso geral.<br>Usos: Muito limitado, necessita de tratamento.<br>Tratamento: Ajuste de pH e redução de dureza.";
            }
        } else if (turbidez <= 5) {
            statusTurbidez = "A turbidez é considerada baixa (1-5 NTU).";
            if (dureza <= 60) {
                statusDureza = "Água muito mole (0-60 mg/L).";
                resultado = "Corrosiva e com algumas partículas, inadequada para consumo.<br>Usos: Indústria limitada.<br>Tratamento: Filtração e ajuste de pH.";
            } else if (dureza <= 120) {
                statusDureza = "Água moderadamente dura (61-120 mg/L).";
                resultado = "Corrosiva e com turbidez moderada, ainda não ideal para consumo.<br>Usos: Irrigação e indústria.<br>Tratamento: Filtração e ajuste de pH e dureza.";
            } else if (dureza <= 180) {
                statusDureza = "Água dura (121-180 mg/L).";
                resultado = "Alta tendência à incrustação, corrosiva, e com presença de partículas.<br>Usos: Indústria limitada e irrigação controlada.<br>Tratamento: Filtração, ajuste de pH e redução da dureza.";
            } else {
                statusDureza = "Água muito dura (> 180 mg/L).";
                resultado = "Extremamente corrosiva e com incrustação, inadequada para qualquer uso sem tratamento.<br>Usos: Aplicações restritas.<br>Tratamento: Filtração pesada, ajuste de pH e controle de dureza.";
            }
        } else if (turbidez <= 50) {
            statusTurbidez = "A turbidez é considerada moderada (5-50 NTU).";
            if (dureza <= 60) {
                statusDureza = "Água muito mole (0-60 mg/L).";
                resultado = "Corrosiva, com turbidez visível, inadequada para consumo.<br>Usos: Indústria com necessidade de filtração.<br>Tratamento: Filtração e ajuste de pH.";
            } else if (dureza <= 120) {
                statusDureza = "Água moderadamente dura (61-120 mg/L).";
                resultado = "Levemente melhor devido à dureza, mas ainda inadequada para consumo direto.<br>Usos: Irrigação e indústria com filtração.<br>Tratamento: Filtração e ajuste de pH e dureza.";
            } else if (dureza <= 180) {
                statusDureza = "Água dura (121-180 mg/L).";
                resultado = "Turbidez moderada e alta tendência à incrustação.<br>Usos: Indústria limitada e irrigação após tratamento.<br>Tratamento: Filtração pesada, ajuste de pH e controle de dureza.";
            } else {
                statusDureza = "Água muito dura (> 180 mg/L).";
                resultado = "Alta turbidez e incrustação significativa, inadequada sem tratamento extensivo.<br>Usos: Aplicações restritas na indústria.<br>Tratamento: Filtração pesada, ajuste de pH e dureza.";
            }
        } else if (turbidez <= 100) {
            statusTurbidez = "A turbidez é considerada alta (50-100 NTU).";
            if (dureza <= 60) {
                statusDureza = "Água muito mole (0-60 mg/L).";
                resultado = "Água ácida com alta turbidez e corrosiva.<br>Usos: Indústria com tratamento intensivo.<br>Tratamento: Coagulação, floculação, filtração e ajuste de pH.";
            } else if (dureza <= 120) {
                statusDureza = "Água moderadamente dura (61-120 mg/L).";
                resultado = "Moderada acidez e alta turbidez, inadequada para consumo.<br>Usos: Indústria limitada e alguns usos agrícolas.<br>Tratamento: Filtração pesada, ajuste de pH e dureza.";
            } else if (dureza <= 180) {
                statusDureza = "Água dura (121-180 mg/L).";
                resultado = "Alta turbidez e tendência à incrustação.<br>Usos: Indústria com tratamento intensivo.<br>Tratamento: Coagulação, floculação, filtração e ajuste de dureza e pH.";
            } else {
                statusDureza = "Água muito dura (> 180 mg/L).";
                resultado = "Inadequada para qualquer uso sem tratamento extensivo.<br>Usos: Processos industriais restritos.<br>Tratamento: Filtração pesada, ajuste de pH e redução de dureza.";
            }
        } else {
            statusTurbidez = "A turbidez é considerada muito alta (> 100 NTU).";
            if (dureza <= 60) {
                statusDureza = "Água muito mole (0-60 mg/L).";
                resultado = "Extremamente turva e ácida, inadequada para qualquer uso direto.<br>Usos: Indústria com tratamento intensivo.<br>Tratamento: Coagulação, floculação, filtração e ajuste de pH.";
            } else if (dureza <= 120) {
                statusDureza = "Água moderadamente dura (61-120 mg/L).";
                resultado = "Alta turbidez, com dureza moderada, ainda inadequada para consumo ou uso comum.<br>Usos: Indústria limitada.<br>Tratamento: Filtração pesada, ajuste de pH e controle de dureza.";
            } else if (dureza <= 180) {
                statusDureza = "Água dura (121-180 mg/L).";
                resultado = "Água muito turva, com alta dureza, inadequada para qualquer uso sem tratamento.<br>Usos: Aplicações industriais específicas.<br>Tratamento: Filtração pesada, ajuste de pH e redução de dureza.";
            } else {
                statusDureza = "Água muito dura (> 180 mg/L).";
                resultado = "Inadequada para qualquer uso sem tratamento intensivo.<br>Usos: Apenas em processos industriais muito especializados.<br>Tratamento: Coagulação, floculação, filtração e redução de dureza.";
            }
        }
    } else if (ph <= 8) {
        statusPh = "A água está neutra (pH entre 6 e 8).";
        if (turbidez <= 1) {
            statusTurbidez = "A turbidez é considerada muito baixa (0-1 NTU).";
            if (dureza <= 60) {
                statusDureza = "Água muito mole (0-60 mg/L).";
                resultado = "Boa qualidade para consumo, mas pobre em minerais.<br>Usos: Consumo humano, irrigação e indústrias.<br>Tratamento: Possível remineralização dependendo do uso.";
            } else if (dureza <= 120) {
                statusDureza = "Água moderadamente dura (61-120 mg/L).";
                resultado = "Adequada para consumo e usos gerais.<br>Usos: Consumo humano, irrigação e indústrias.<br>Tratamento: Normalmente não é necessário.";
            } else if (dureza <= 180) {
                statusDureza = "Água dura (121-180 mg/L).";
                resultado = "Tendência à incrustação, mas boa para consumo com monitoramento.<br>Usos: Consumo humano, irrigação e indústrias.<br>Tratamento: Monitoramento de dureza e possível redução.";
            } else {
                statusDureza = "Água muito dura (>180 mg/L).";
                resultado = "Alta dureza pode prejudicar o uso para consumo ou indústria sem tratamento.<br>Usos: Consumo e indústrias após redução de dureza.<br>Tratamento: Redução de dureza.";
            }
        } else if (turbidez <= 5) {
            statusTurbidez = "A turbidez é considerada baixa (1-5 NTU).";
            if (dureza <= 60) {
                statusDureza = "Água muito mole (0-60 mg/L).";
                resultado = "Boa para consumo, mas pode requerer filtragem leve.<br>Usos: Consumo humano, indústrias e irrigação.<br>Tratamento: Filtração leve e possível remineralização.";
            } else if (dureza <= 120) {
                statusDureza = "Água moderadamente dura (61-120 mg/L).";
                resultado = "Água relativamente clara com uma leve opacidade e quantidade moderada de minerais. Adequada para consumo humano e para a maioria dos usos domésticos e industriais.<br>Usos: Ideal para beber, cozinhar e irrigação.<br>Tratamento: Filtração leve se necessário.";
            } else if (dureza <= 180) {
                statusDureza = "Água dura (121-180 mg/L).";
                resultado = "Pode causar incrustação, boa para consumo após filtragem.<br>Usos: Consumo e indústrias com monitoramento.<br>Tratamento: Redução de dureza e filtração.";
            } else {
                statusDureza = "Água muito dura (>180 mg/L).";
                resultado = "Incrustação significativa, pode precisar de tratamento.<br>Usos: Consumo e indústrias após tratamento.<br>Tratamento: Filtração e redução de dureza.";
            }
        } else if (turbidez <= 50) {
            statusTurbidez = "A turbidez é considerada moderada (5-50 NTU).";
            if (dureza <= 60) {
                statusDureza = "Água muito mole (0-60 mg/L).";
                resultado = "Água com turbidez moderada e baixa dureza. Pode não ser adequada para consumo sem tratamento.<br>Usos: Irrigação e alguns usos industriais.<br>Tratamento: Filtração para reduzir turbidez e possível remineralização.";
            } else if (dureza <= 120) {
                statusDureza = "Água moderadamente dura (61-120 mg/L).";
                resultado = "Água com turbidez moderada, pH neutro e quantidade adequada de minerais. A qualidade é aceitável, mas a turbidez pode afetar a estética.<br>Usos: Consumo humano e indústrias.<br>Tratamento: Filtração leve para reduzir turbidez.";
            } else if (dureza <= 180) {
                statusDureza = "Água dura (121-180 mg/L).";
                resultado = "Turbidez moderada e tendência à incrustação. Boa para consumo, mas monitoramento é necessário.<br>Usos: Consumo humano, indústrias e irrigação.<br>Tratamento: Filtração e monitoramento da dureza.";
            } else {
                statusDureza = "Água muito dura (>180 mg/L).";
                resultado = "Alta dureza e turbidez moderada, podendo causar sérios problemas de incrustação.<br>Usos: Consumo humano e indústrias após tratamento.<br>Tratamento: Filtração e redução de dureza.";
            }
        } else {
            statusTurbidez = "A turbidez é considerada alta (>50 NTU).";
            if (dureza <= 60) {
                statusDureza = "Água muito mole (0-60 mg/L).";
                resultado = "Água com alta turbidez e baixa dureza, geralmente inadequada para qualquer uso sem tratamento.<br>Usos: Muito limitado, pode ser usada para irrigação após tratamento.<br>Tratamento: Coagulação, floculação e filtração pesada.";
            } else if (dureza <= 120) {
                statusDureza = "Água moderadamente dura (61-120 mg/L).";
                resultado = "Água com alta turbidez e dureza moderada, inadequada para consumo humano sem tratamento.<br>Usos: Irrigação e algumas indústrias após tratamento.<br>Tratamento: Coagulação, floculação, filtração.";
            } else if (dureza <= 180) {
                statusDureza = "Água dura (121-180 mg/L).";
                resultado = "Água com alta turbidez e dureza. O tratamento é crucial para evitar incrustação.<br>Usos: Indústrias e irrigação, mas não para consumo sem tratamento.<br>Tratamento: Filtração e monitoramento da dureza.";
            } else {
                statusDureza = "Água muito dura (>180 mg/L).";
                resultado = "Qualidade inadequada devido à alta turbidez e dureza, deve ser tratada antes de qualquer uso.<br>Usos: Limitações severas em consumo humano, necessário tratamento para indústrias.<br>Tratamento: Filtração pesada e redução de dureza.";
            }
        }
    } else if (ph <= 10) {
        statusPh = "A água está alcalina (pH entre 8 e 10).";
        if (turbidez <= 1) {
            statusTurbidez = "A turbidez é considerada muito baixa (0-1 NTU).";
            if (dureza <= 60) {
                statusDureza = "Água muito mole (0-60 mg/L).";
                resultado = "Água alcalina com baixa dureza e muito baixa turbidez, pode ser corrosiva para encanamentos.<br>Usos: Irrigação e algumas indústrias, mas não recomendada para consumo direto sem correção de pH.<br>Tratamento: Ajuste de pH para neutralidade, possível remineralização.";
            } else if (dureza <= 120) {
                statusDureza = "Água moderadamente dura (61-120 mg/L).";
                resultado = "Boa qualidade para irrigação e usos industriais, mas pode causar incrustações em sistemas.<br>Usos: Irrigação, indústrias, não recomendada para consumo sem tratamento.<br>Tratamento: Ajuste de pH, possível redução de dureza.";
            } else if (dureza <= 180) {
                statusDureza = "Água dura (121-180 mg/L).";
                resultado = "Incrustações podem ocorrer com mais facilidade, mas a turbidez baixa e o pH alcalino oferecem uma qualidade boa para usos não potáveis.<br>Usos: Indústria e irrigação, pode não ser adequada para consumo sem tratamento.<br>Tratamento: Redução de dureza e ajuste de pH.";
            } else {
                statusDureza = "Água muito dura (>180 mg/L).";
                resultado = "Água altamente alcalina e muito dura pode causar incrustações severas em sistemas.<br>Usos: Usos limitados na indústria e agricultura.<br>Tratamento: Redução de dureza e ajuste de pH são essenciais.";
            }
        } else if (turbidez <= 5) {
            statusTurbidez = "A turbidez é considerada baixa (1-5 NTU).";
            if (dureza <= 60) {
                statusDureza = "Água muito mole (0-60 mg/L).";
                resultado = "Água alcalina com leve turbidez e pouca dureza, pode causar corrosão em sistemas metálicos.<br>Usos: Indústrias e irrigação, mas pode não ser adequada para consumo humano sem tratamento.<br>Tratamento: Filtração para remover a turbidez e ajuste de pH.";
            } else if (dureza <= 120) {
                statusDureza = "Água moderadamente dura (61-120 mg/L).";
                resultado = "Boa para uso industrial e agrícola, mas a turbidez moderada pode necessitar de filtração.<br>Usos: Irrigação e indústrias.<br>Tratamento: Filtração para turbidez e ajuste de pH, monitoramento da dureza.";
            } else if (dureza <= 180) {
                statusDureza = "Água dura (121-180 mg/L).";
                resultado = "Incrustações podem ocorrer com facilidade, especialmente em temperaturas elevadas.<br>Usos: Irrigação e indústria, com cuidado na manutenção dos sistemas.<br>Tratamento: Redução de dureza, filtração para turbidez e ajuste de pH.";
            } else {
                statusDureza = "Água muito dura (>180 mg/L).";
                resultado = "Alta tendência a incrustações e problemas de encanamento, não recomendada para consumo ou uso sem tratamento pesado.<br>Usos: Indústrias específicas e irrigação com tratamento.<br>Tratamento: Redução de dureza, filtração e ajuste de pH.";
            }
        } else if (turbidez <= 50) {
            statusTurbidez = "A turbidez é considerada moderada (5-50 NTU).";
            if (dureza <= 60) {
                statusDureza = "Água muito mole (0-60 mg/L).";
                resultado = "Água alcalina com turbidez moderada e pouca dureza, pode ser inadequada para consumo humano ou uso industrial direto.<br>Usos: Irrigação limitada e algumas indústrias após tratamento.<br>Tratamento: Filtração pesada e ajuste de pH.";
            } else if (dureza <= 120) {
                statusDureza = "Água moderadamente dura (61-120 mg/L).";
                resultado = "Turbidez visível, mas ainda adequada para certos usos após filtração.<br>Usos: Indústrias e irrigação após tratamento.<br>Tratamento: Filtração e ajuste de pH, monitoramento da dureza.";
            } else if (dureza <= 180) {
                statusDureza = "Água dura (121-180 mg/L).";
                resultado = "A água apresenta opacidade visível, com partículas em suspensão, é levemente alcalina e tem uma dureza considerável, com alta concentração de minerais (cálcio e magnésio).<br>Usos: Pode ser utilizada para irrigação de plantas que toleram alcalinidade e dureza. Também é adequada para processos industriais que não requerem água muito pura.<br>Tratamento: Coagulação, floculação e filtração, além de redução de dureza e controle da alcalinidade.";
            } else {
                statusDureza = "Água muito dura (>180 mg/L).";
                resultado = "Qualidade inadequada para qualquer uso sem tratamento extensivo.<br>Usos: Limitado para indústria e agricultura com tratamento.<br>Tratamento: Filtração, redução de dureza e ajuste de pH.";
            }
        } else if (turbidez <= 100) {
            statusTurbidez = "A turbidez é considerada alta (50-100 NTU).";
            if (dureza <= 60) {
                statusDureza = "Água muito mole (0-60 mg/L).";
                resultado = "Água alcalina com alta turbidez e pouca dureza, inadequada para uso sem tratamento.<br>Usos: Limitado para irrigação e indústrias.<br>Tratamento: Filtração pesada, ajuste de pH e possível remineralização.";
            } else if (dureza <= 120) {
                statusDureza = "Água moderadamente dura (61-120 mg/L).";
                resultado = "Água turva e alcalina, inadequada para consumo ou indústrias sem tratamento significativo.<br>Usos: Irrigação e indústrias limitadas.<br>Tratamento: Filtração pesada e ajuste de pH, possível redução de dureza.";
            } else if (dureza <= 180) {
                statusDureza = "Água dura (121-180 mg/L).";
                resultado = "Água alcalina com turbidez alta e tendência à incrustação.<br>Usos: Indústrias e agricultura com tratamento.<br>Tratamento: Filtração pesada, ajuste de pH e redução de dureza.";
            } else {
                statusDureza = "Água muito dura (>180 mg/L).";
                resultado = "Alta alcalinidade, dureza e turbidez, inadequada sem tratamento pesado.<br>Usos: Indústrias específicas com tratamento intensivo.<br>Tratamento: Filtração, ajuste de pH e redução de dureza.";
            }
        } else {
            statusTurbidez = "A turbidez é considerada muito alta (>100 NTU).";
            if (dureza <= 60) {
                statusDureza = "Água muito mole (0-60 mg/L).";
                resultado = "Água alcalina com turbidez muito alta, inadequada para qualquer uso sem tratamento intensivo.<br>Usos: Muito limitado, com necessidade de tratamento extensivo.<br>Tratamento: Coagulação, floculação, filtração, ajuste de pH.";
            } else if (dureza <= 120) {
                statusDureza = "Água moderadamente dura (61-120 mg/L).";
                resultado = "Alta turbidez e alcalinidade tornam a água inadequada para consumo ou uso direto.<br>Usos: Apenas algumas indústrias após tratamento intensivo.<br>Tratamento: Coagulação, floculação, filtração e ajuste de pH e dureza.";
            } else if (dureza <= 180) {
                statusDureza = "Água dura (121-180 mg/L).";
                resultado = "Água extremamente turva e alcalina, com alta dureza.<br>Usos: Indústrias especializadas após tratamento.<br>Tratamento: Coagulação, floculação, filtração e redução de dureza.";
            } else {
                statusDureza = "Água muito dura (>180 mg/L).";
                resultado = "Inadequada sem tratamento completo.<br>Usos: Aplicações limitadas em indústrias com tratamento intensivo.<br>Tratamento: Coagulação, floculação, filtração.";
            }
        }
    } else {
        if (turbidez <= 1) {
            statusTurbidez = "A turbidez é considerada baixa (1-5 NTU).";
            if (dureza <= 60) {
                statusDureza = "Água muito mole (0-60 mg/L).";
                resultado = "Água muito alcalina e corrosiva, com leve turbidez, inadequada para consumo.<br>Usos: Indústrias e irrigação, mas não recomendada para consumo humano sem tratamento.<br>Tratamento: Filtração para turbidez, ajuste de pH e remineralização.";
            } else if (dureza <= 120) {
                statusDureza = "Água moderadamente dura (61-120 mg/L).";
                resultado = "Água com alcalinidade elevada, leve turbidez, adequada para algumas aplicações industriais.<br>Usos: Indústrias, mas consumo humano requer tratamento.<br>Tratamento: Ajuste de pH e monitoramento da dureza.";
            } else if (dureza <= 180) {
                statusDureza = "Água dura (121-180 mg/L).";
                resultado = "Alta possibilidade de incrustação, qualidade moderada para usos industriais.<br>Usos: Indústria e irrigação.<br>Tratamento: Filtração para turbidez e ajuste de pH.";
            } else {
                statusDureza = "Água muito dura (>180 mg/L).";
                resultado = "Água muito alcalina e dura, pode causar problemas de incrustação severos.<br>Usos: Usos limitados em indústrias.<br>Tratamento: Redução de dureza e ajuste de pH.";
            }
        } else if (turbidez <= 50) {
            statusTurbidez = "A turbidez é considerada moderada (5-50 NTU).";
            if (dureza <= 60) {
                statusDureza = "Água muito mole (0-60 mg/L).";
                resultado = "Água muito alcalina e turva, inadequada para consumo ou usos industriais diretos.<br>Usos: Limitados a irrigação e algumas indústrias após tratamento.<br>Tratamento: Filtração pesada e ajuste de pH.";
            } else if (dureza <= 120) {
                statusDureza = "Água moderadamente dura (61-120 mg/L).";
                resultado = "Água com alta turbidez e alcalinidade, não adequada para consumo humano sem tratamento.<br>Usos: Indústria e irrigação.<br>Tratamento: Filtração e ajuste de pH, possível redução de dureza.";
            } else if (dureza <= 180) {
                statusDureza = "Água dura (121-180 mg/L).";
                resultado = "Alta turbidez e dureza, inadequada para uso direto.<br>Usos: Indústrias com tratamento intenso.<br>Tratamento: Filtração e ajuste de pH.";
            } else {
                statusDureza = "Água muito dura (>180 mg/L).";
                resultado = "Qualidade insatisfatória para qualquer uso sem tratamento intenso.<br>Usos: Limitados a aplicações industriais com tratamento.<br>Tratamento: Filtração, ajuste de pH e redução de dureza.";
            }
        } else if (turbidez <= 100) {
            statusTurbidez = "A turbidez é considerada alta (50-100 NTU).";
            if (dureza <= 60) {
                statusDureza = "Água muito mole (0-60 mg/L).";
                resultado = "Água extremamente turva e alcalina, inadequada para qualquer uso sem tratamento extensivo.<br>Usos: Irrigação e indústrias, com necessidade de tratamento.<br>Tratamento: Coagulação, floculação, filtração e ajuste de pH.";
            } else if (dureza <= 120) {
                statusDureza = "Água moderadamente dura (61-120 mg/L).";
                resultado = "Água alcalina com alta turbidez, inadequada para consumo ou uso direto.<br>Usos: Indústria e agricultura após tratamento.<br>Tratamento: Coagulação, floculação, filtração e ajuste de pH.";
            } else if (dureza <= 180) {
                statusDureza = "Água dura (121-180 mg/L).";
                resultado = "Água com alta turbidez e dureza, não adequada sem tratamento.<br>Usos: Indústrias com tratamento intensivo.<br>Tratamento: Coagulação, floculação e filtração.";
            } else {
                statusDureza = "Água muito dura (>180 mg/L).";
                resultado = "A água é visivelmente turva, altamente alcalina e com uma grande concentração de minerais. Essa combinação torna a água inadequada para a maioria dos usos, pois pode causar incrustações severas e é irritante para a pele e os olhos.<br>Usos: Limitada para usos industriais muito específicos, como a fabricação de produtos alcalinos, ou em áreas agrícolas para corrigir a acidez do solo, mas mesmo assim, o tratamento extensivo seria necessário.<br>Tratamento: Coagulação, floculação e acidificação para reduzir a alcalinidade, além de abrandamento para reduzir a dureza e remover os sólidos em suspensão.";
            }
        } else {
            statusTurbidez = "A turbidez é considerada muito alta (>100 NTU).";
            if (dureza <= 60) {
                statusDureza = "Água muito mole (0-60 mg/L).";
                resultado = "Água alcalina e extremamente turva, inadequada para qualquer uso sem tratamento intenso.<br>Usos: Muito limitado, com necessidade de tratamento extensivo.<br>Tratamento: Coagulação, floculação, filtração, ajuste de pH.";
            } else if (dureza <= 120) {
                statusDureza = "Água moderadamente dura (61-120 mg/L).";
                resultado = "Alta turbidez e alcalinidade, inadequada para consumo ou uso direto.<br>Usos: Aplicações industriais após tratamento intensivo.<br>Tratamento: Coagulação, floculação, filtração e ajuste de pH.";
            } else if (dureza <= 180) {
                statusDureza = "Água dura (121-180 mg/L).";
                resultado = "Água com altas concentrações de alcalinidade, dureza e turbidez, não adequada sem tratamento.<br>Usos: Indústrias específicas com tratamento intensivo.<br>Tratamento: Coagulação, floculação, filtração e redução de dureza.";
            } else {
                statusDureza = "Água muito dura (>180 mg/L).";
                resultado = "Qualidade inaceitável para qualquer uso sem tratamento extensivo.<br>Usos: Usos limitados, requerendo tratamento intensivo.<br>Tratamento: Coagulação, floculação, filtração e ajuste de dureza e pH.";
            }
        }
    }

    document.getElementById("resul_Turbidez").display = "block";
    document.getElementById("resul_Ph").display = "block";
    document.getElementById("resul_Dureza").display = "block";
    document.getElementById("resultado").display = "block";
    document.getElementById("resul_Turbidez").innerHTML = statusTurbidez;
    document.getElementById("resul_Ph").innerHTML = statusPh;
    document.getElementById("resul_Dureza").innerHTML = statusDureza;
    document.getElementById("resultado").innerHTML = resultado;
}
