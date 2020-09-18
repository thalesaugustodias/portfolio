function openNav() {
    var x = document.getElementById("cabecalho");
    if (x.className === "cabecalho") {
        x.className += " menujs";
        document.getElementById("icon").innerHTML = "&Cross;";
    } else {
        x.className = "cabecalho";
        document.getElementById("icon").innerHTML = "&#9776;"
    }
}