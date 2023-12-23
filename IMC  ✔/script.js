const calc = document.getElementById('calcular')

function imc(){
    const nome = document.getElementById('nome').value;
    const alt = +document.getElementById('alt').value;
    const peso = +document.getElementById('pes').value;
    const res = document.getElementById('res');

    if(nome ==''||alt==''||peso==''){
        alert('Por favor insira valores validos')
    }else{
        const vIMC =(peso/(alt*alt)).toFixed(1)
        let clas= ''

        if(vIMC<18.5){
            clas = 'abaixo do peso.';
        }else if (vIMC < 25) {
            clas = 'com peso ideal. Parabéns!!!';
        }else if (vIMC < 30){
            clas = 'levemente acima do peso.';
        }else if (vIMC < 35){
            clas = 'com obesidade grau I.';
        }else if (vIMC < 40){
            clas = 'com obesidade grau II';
        }else {
            clas = 'com obesidade grau III. Cuidado!!';
        }
        res.textContent=`${nome} seu IMC é ${vIMC} e você está ${clas}`
    }
} calc.addEventListener('click', imc)