function check() {
    // Capturando os valores dos campos
    document.getElementById('aviso').style.display = 'none';
    document.getElementById('topico-resultado').style.display = 'none';
    document.getElementById('topico-turbidez').style.display = 'none';
    document.getElementById('topico-ph').style.display = 'none';
    document.getElementById('topico-dureza').style.display = 'none';

    const turbidez = parseFloat(document.getElementById("Turbidez").value);
    const ph = parseFloat(document.getElementById("pH").value);
    const dureza = parseFloat(document.getElementById("Dureza").value);

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
        mensagemUmCampo(turbidez, ph, dureza);
    }
  }

function mensagemErro() {
    document.getElementById('conteiner-resultado').style.display = 'block';
    document.getElementById('aviso').style.display = 'block';
    document.getElementById("aviso").innerHTML = "ERRO: Nenhum campo foi preenchido.";
}

function mensagemUmCampo(turbidez, ph, dureza) {
    document.getElementById('aviso').style.display = 'block';
    document.getElementById("aviso").innerHTML = "Atenção! Quanto menos informação, menos confiável e preciso será o resultado.";

    // Turbidez
    if (turbidez) document.getElementById('topico-turbidez').style.display = 'block';
    let statusTurbidez;
    if (turbidez >= 0 && turbidez <= 1) {
      statusTurbidez = "A água é cristalina e praticamente livre de partículas suspensas. "+
            "A turbidez é inferior a 1 NTU. "+
            "<br>Usos: Ideal para beber, cozinhar e higiene pessoal. "+
            "Pode ser usada para irrigação, usada em laboratórios e uso industrial.";
    } else if (turbidez > 1 && turbidez <= 5) {
      statusTurbidez = "A água é clara, mas pode ter uma leve opacidade. A turbidez varia entre 1 e 5 NTU. "+
            "<br>Usos: Adequada para beber e cozinhar após tratamento básico. "+
            "Adequada para usos industriais e irrigação.";
    } else if (turbidez > 5 && turbidez <= 50) {
      statusTurbidez = "A água apresenta uma opacidade visível, com turbidez entre 5 e 50 NTU. "+
            "<br>Usos: Para consumo humano precisa de tratamento (coagulação, floculação, filtração). "+
            "Usada para irrigação de culturas menos sensíveis. "+
            "Utilizada em processos industriais que não requerem água "+
            "de alta pureza como construção civil em misturas";
    } else if (turbidez > 50 && turbidez <= 500) {
      statusTurbidez = "A água é visivelmente turva, com turbidez superior a 50 NTU. "+
            "<br>Usos: Para consumo humano precisa de tratamento (coagulação, floculação, filtração). "+ 
            "Usos muito específicos na indústria, na construção civil e no tratamento de esgoto. ";
    } else {
      statusTurbidez = "Não foi possível analisar a turbidez da água.";
    }
    document.getElementById("resul_Turbidez").innerHTML = statusTurbidez;

    // pH
    if (ph) document.getElementById('topico-ph').style.display = 'block';
    let statusPh;
    if (ph >= 0 && ph <= 3) {
        statusPh = "A água muito ácida tem um pH inferior a 3. "+
            "<br>Usos: Não é seguro para o consumo humano sem o devido tratamento (corrigir o pH da água usando bases). "+
            "Utilizada em processos industriais específicos, como a limpeza de metais e a produção de produtos químicos. "+
            "Pode ser usada em processos de neutralização.";
    } else if (ph > 3 && ph <= 6) {
        statusPh = "A água ácida tem um pH entre 3 e 6. "+
            "<br>Usos: Não é seguro para o consumo humano sem o devido tratamento (corrigir o pH da água usando bases). "+
            "Pode ser usada para irrigação de plantas que preferem solos ácidos. "+
            "Utilizada em processos de limpeza e desinfecção.";
    } else if (ph > 6 && ph <= 7) {
        statusPh = "A água neutra tem um pH de aproximadamente 7. "+
            "<br>Usos: Ideal para beber, cozinhar e higiene pessoal. "+
            "Utilizada em processos que requerem água sem propriedades ácidas ou alcalinas, como a irrigação.";
    } else if (ph > 7 && ph <= 10) {
        statusPh = "A água levemente alcalina tem um pH entre 7.1 e 10. "+
            "<br>Usos: Considerada benéfica para a saúde, pode ajudar na neutralização da acidez do corpo. "+
            "Usada para irrigação, ajuda a corrigir a acidez do solo.";
    } else if (ph > 10 && ph <= 14) {
        statusPh = "A água muito alcalina tem um pH superior a 10. "+
            "<br>Usos: Não é ideal para o consumo humano (precisa de tratamento com ácidos). "+
            "Utilizada em processos que requerem água alcalina, como a fabricação de sabões e detergentes. "+
            "Usada para corrigir a acidez do solo em áreas agrícolas.";
    } else {
        statusPh = "Não foi possível analisar o pH da água.";
    }
    document.getElementById("resul_Ph").innerHTML = statusPh;

    // Dureza
    if (dureza) document.getElementById('topico-dureza').style.display = 'block';
    let statusDureza;
    if (dureza >= 0 && dureza <= 60) {
        statusDureza = "A água muito mole tem uma concentração de íons de cálcio e magnésio inferior a 60 mg/L. "+
            "<br>Usos: Boa para a maioria dos usos. "+
            "Ideal para beber e cozinhar, pois não deixa resíduos minerais. "+
            "Excelente para lavar roupas, já que evita a formação de depósitos de sabão. "+
            "Pode também ser usada para irrigação e na maioria dos processos industriais.";
    } else if (dureza > 60 && dureza <= 120) {
        statusDureza = "A água moderadamente dura tem uma concentração de íons de cálcio e magnésio entre 61 e 120 mg/L. "+
            "<br>Usos: Adequada para beber e cozinhar, embora possa deixar alguns resíduos minerais. "+
            "Usada para irrigação, pois fornece minerais benéficos às plantas e em processos industriais.";
    } else if (dureza > 120 && dureza <= 180) {
        statusDureza = "A água dura tem uma concentração de íons de cálcio e magnésio entre 121 e 180 mg/L. "+
            "<br>Usos: Pode ser usada para beber e cozinhar, mas pode deixar depósitos minerais em utensílios e encanamentos. "+
            "Utilizada em processos industriais que não são sensíveis à minerais. "+
            "Pode ser utilizada na construção civil.";
    } else if (dureza > 180) {
        statusDureza = "A água muito dura tem uma concentração de íons de cálcio e magnésio superior a 180 mg/L. "+
            "<br>Usos: Não recomendada para o dia a dia. "+
            "Uso industrial específico e pode ser usado na construção civil.";
    } else {
        statusDureza = "Não foi possível analisar a dureza da água.";
    }
    document.getElementById("resul_Dureza").innerHTML = statusDureza;

    // Exibindo os resultados
    document.getElementById('conteiner-resultado').style.display = 'block';
}

function checkDoisCampos(turbidez, ph, dureza) {
    let resultado;
    document.getElementById('conteiner-resultado').style.display = 'block';
    document.getElementById('topico-resultado').style.display = 'block';

    if (turbidez < 0 || turbidez > 500 || ph < 0 || ph > 14 || dureza < 0) {
        mensagemUmCampo(turbidez, ph, dureza);
        document.getElementById("resultado").innerHTML = "Um ou mais valores estão inválidos para análise.";
    } else {
        if (turbidez && ph) {
                document.getElementById('topico-turbidez').style.display = 'block';
                document.getElementById('topico-ph').style.display = 'block';
                mensagemTP(turbidez, ph);
        } else if (turbidez && dureza) {
                document.getElementById('topico-turbidez').style.display = 'block';
                document.getElementById('topico-dureza').style.display = 'block';
                mensagemTD(turbidez, dureza);
        } else if (ph && dureza) {
                document.getElementById('topico-ph').style.display = 'block';
                document.getElementById('topico-dureza').style.display = 'block';
                mensagemPD(ph, dureza);
        }
    }
}

function mensagemTP(turbidez, ph) {
    let statusTurbidez = '';
    let statusPh = '';
    let resultado = '';

    // Condições para o pH
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

    // Exibindo os resultados nos elementos HTML
    document.getElementById("resul_Ph").innerHTML = statusPh;
    document.getElementById("resul_Turbidez").innerHTML = statusTurbidez;
    document.getElementById("resultado").innerHTML = resultado;
} 

function mensagemTD(turbidez, dureza) {
    let statusTurbidez = '';
    let statusDureza = '';
    let resultado = '';

    // Condições para a dureza
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

    // Exibindo os resultados nos elementos HTML
    document.getElementById("resul_Turbidez").innerHTML = statusTurbidez;
    document.getElementById("resul_Dureza").innerHTML = statusDureza;
    document.getElementById("resultado").innerHTML = resultado;
}

function mensagemPD(ph, dureza) {
    let statusPh = '';
    let statusDureza = '';
    let resultado = '';

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

    // Exibindo os resultados nos elementos HTML
    document.getElementById("resul_Ph").innerHTML = statusPh;
    document.getElementById("resul_Dureza").innerHTML = statusDureza;
    document.getElementById("resultado").innerHTML = resultado;
}

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function closeMenu() {
    const menu = document.getElementById('mobile-menu');
    navLinks.classList.remove('active');
}
