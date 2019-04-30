var idList = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]

function hide_all(idSkip) {
    idList.map(function (id) {
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

function initialize() {
    const nightMode = document.querySelector('#night-mode');
    nightMode.addEventListener('click', () => {
        document.documentElement.classList.toggle('night-mode');
    });
};

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        initialize()
    }
};