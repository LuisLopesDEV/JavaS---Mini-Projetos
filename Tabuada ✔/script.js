function calcular() {
    let num = Number(document.getElementById('num').value)
    let res = document.getElementById('sel')
    if (num == 0) {
        alert('Por favor insira um número válido')
    } else {
        res.innerHTML = ''
        for (let c = 0; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${num} X ${c} = ${num * c}`
            res.appendChild(item)
        }
    }
}