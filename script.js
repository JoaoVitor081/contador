const menos1 = document.getElementById('menos1')
const mais1 = document.getElementById('mais1')
const contador = document.getElementById('contador')
const zerar = document.getElementById('zerar')
 
const updatecontador = () => {
    contador.innerHTML = count;
};

let count = 0;
let intervalId = 0;

mais1.addEventListener('mousedown', () => {
    intervalId = setInterval (() =>{
        count += 1;
        updatecontador();
    },200)
})

menos1.addEventListener('mousedown', () => {
    intervalId = setInterval (() =>{
        count  -= 1;
        if(count < 0){
            count = 0;
        }
        updatecontador();
    }, 200)
});

zerar.addEventListener('click', () => {  
    count = 0;
    updatecontador();
 
});

document.addEventListener('mouseup', () => clearInterval(intervalId));



