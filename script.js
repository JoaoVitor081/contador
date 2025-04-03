const menos1 = document.getElementById('menos1');
const mais1 = document.getElementById('mais1');
const contador = document.getElementById('contador');
const zerar = document.getElementById('zerar');

let count = 0;
let intervalId = null;

const updateContador = () => {
    contador.innerHTML = count;
};

mais1.addEventListener('click', () => {
    count += 1;
    updateContador();
});


menos1.addEventListener('click', () => {
    count -= 1;
    if (count < 0) count = 0; 
    updateContador();
});


mais1.addEventListener('mousedown', () => startCounting('increment'));


menos1.addEventListener('mousedown', () => startCounting('decrement'));


document.addEventListener('mouseup', () => {
    clearInterval(intervalId);
});


zerar.addEventListener('click', () => {
    count = 0;
    updateContador();
});
