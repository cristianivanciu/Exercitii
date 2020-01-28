document.querySelectorAll('td')
        .forEach(cell => cell.addEventListener("click", onClick));
var simbol = 'x';
        function onclick(event) {
    let cell = event.tatget;
    cell.removeEventListener("click", onClick);
    cell.innerText = simbol;
    simbol = simbol == 'x' ? '0': 'x';
}