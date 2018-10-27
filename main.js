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

var idList = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]

function hide_all(idSkip) {
    idList.map(function(id) {
        if (idSkip != id) {
            document.getElementById(id).className = "row hide"
        }
    })
};

function show_or_hide(id) {
    hide_all(id)
    var element = document.getElementById(id)
    if (element.className == "row") {
        element.className = "row hide"
    }
    else {
        element.className = "row"
    }
};
