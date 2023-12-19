function contar() {
    var inicio = document.getElementById('idI')
    var fim = document.getElementById('idF')
    var passo = document.getElementById('idP')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        res.innerHTML = `Contando: <br>`
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
    
    if(p==0){
        alert('Passo invalido! Considerando passo 1')
        p=1
    }
    if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
    } else if (i > f) {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
}
}
}
