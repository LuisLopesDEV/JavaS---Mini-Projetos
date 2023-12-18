function calcular() {
    let num = document.getElementById('n')
    let res = document.getElementById('res')
    let n = Number(num.value)


    if (num.value.length == 0) {
        alert('Insira um número')
    } else(n > 0);{
        for (let c = n; c <= n * 10; c += n) {
            res.innerHTML += `${c}`
        }
        if(n<0){
            for(let c=n; c<n*10; c-=n){
                res.innerHTML+=`${c}`
            }
        }
    }
}