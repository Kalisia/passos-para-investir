function investir(passo) {
    ("Escolher uma boa corretora de valores");
    
    ("Abrir uma conta de investimento");
    
    ("Transferir o dinheiro");
    
    ("Definir seus objetivos");
    
    ("Traçar seu plano de investimento");
    
    ("Escolher as ações");
    
    ("Acessar o Home Broker");
    
    ("Enviar sua ordem de compra");
    
    ("Acompanhar a valorização");
    
    ("Realizar os lucros");
    
    return passo;
}

//investir(passo);

function hide_all() {
    document.getElementById("01").className = "row hide"
    document.getElementById("02").className = "row hide"
    document.getElementById("03").className = "row hide"
    document.getElementById("04").className = "row hide"
    document.getElementById("05").className = "row hide"
    document.getElementById("06").className = "row hide"
    document.getElementById("07").className = "row hide"
    document.getElementById("08").className = "row hide"
    document.getElementById("09").className = "row hide"
    document.getElementById("10").className = "row hide"
};

function show_or_hide(id) {
    hide_all()
    var element = document.getElementById(id)
    if (element.className == "row") {
        element.className = "row hide"
    }
    else {
        element.className = "row"
    }
};
