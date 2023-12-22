function contar() {
    let inicio = document.getElementById('idI')
    let fim = document.getElementById('idF')
    let passo = document.getElementById('idP')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        res.innerHTML = `Contando: <br>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
    
    if(p==0){
        alert('Passo invalido! Considerando passo 1')
        p=1
    }
    if (i < f) {
            for (i; i <= f; i += p) {
                res.innerHTML += `${i} \u{1F449} `
            }
    } else if (i > f) {
            for (i; i >= f; i -= p) {
                res.innerHTML += `${i} \u{1F449} `
            }
}
}
}
