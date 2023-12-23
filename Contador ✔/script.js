function contar() {
    let firstN = Number(document.getElementById('idI').value)
    let lastN = Number(document.getElementById('idF').value)
    let passo = Number(document.getElementById('idP').value)
    let res = document.getElementById('res')
    if (firstN === 0 || lastN === 0) {
        alert('Por favor insira números validos')
        return
    } else if (passo == 0) {
        alert('Passo invalido, considarando 1')
        passo = 1
    }
    if (firstN < lastN) {
        res.innerHTML = ''
        for (firstN; firstN <= lastN; firstN += passo) {
            res.innerHTML += `${firstN}\u{1F449}`
        }
    } else {
        res.innerHTML = ''
        for (firstN; firstN >= lastN; firstN -= passo) {
            res.innerHTML += `${firstN}\u{1F449}`
        }
    }
}
