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

function show_or_hide(id) {
    var element = document.getElementById(id)
    if (element.className == "row") {
        element.className = "row hide"
    }
    else {
        element.className = "row"
    }
};
