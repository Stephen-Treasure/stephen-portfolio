function display(option) {
    document.getElementById("result").value += option;
}

function solve() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}

function clear() {
    document.getElementById("result").value = "";
}
