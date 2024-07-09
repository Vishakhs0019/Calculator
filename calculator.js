function add(expr) {
    document.getElementById('final').value += expr;
}

function erase() {
    document.getElementById('final').value = "";
}

function sum() {
    var expression = document.getElementById("final").value;
    var result = eval(expression);
    document.getElementById('final').value = result;
}
