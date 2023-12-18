

function adicionar() {
    let n = document.getElementById('n')
    let ad = document.getElementById('ad')
    let num = [Number(n.value)]

    if (n.value.length == 0) {
        alert('Insira um número valido')
    } else {
        n.value = ''
        let opt = document.createElement('option')
        let res = document.getElementById('res')
        opt.text = num
        res.appendChild(opt)
    }

}
function finalizar() {
    let n = document.getElementById('n')
    let res = document.getElementById('res')
    let num = [Number(n.value)]
        let opt = document.createElement('option')
        res.appendChild(opt)

    
}


