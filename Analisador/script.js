let add = document.getElementById('add')
let ad = document.getElementById('ad')
let lista=document.querySelector('select#lista')
let res = document.getElementById('res')
let valores = []

function naLista(n, l){
    if(l.indexOf(Number(n))!=-1){
        return true
    }else {return false}
}
function adicionar() {
    let item = document.createElement('option')
    

    if(naLista(add.value, valores) || add.length==0){
        alert('Insira um número valido')
    }else{
        valores.push(Number(add.value))
        item.text=`${add.value} adicionado`
        lista.appendChild(item)
    }
    add.value=''
    add.focus()
    res.innerHTML=''
}
function finalizar(){
    if (valores.length==0){
        alert('Por favor insira ao menos 1 número')
    }else{
        let tot=valores.length
        valores.sort()
        let ult= valores.length -1
        let ultimo= valores[ult]
        let soma=0
        for(let pos in valores){
            soma+= valores[pos]
        }
        
        res.innerHTML=`<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML+=`<p>O menor número é ${valores[0]}.</p>`
        res.innerHTML+=`<p>O maior número é ${ultimo}.</p>`
        res.innerHTML+=`<p>Somando todos os números, temos ${soma}.</p>`
        res.innerHTML+=`<p>A média dos valores é ${soma/tot}.</p>`
    }
}
