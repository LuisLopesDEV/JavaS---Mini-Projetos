function calcular() {
    let num = document.getElementById('n')
    let res = document.getElementById('res')
   


    if (num.value.length == 0) {
        alert('Insira um número')
    } else{
        let n = Number(num.value)
        let c=1
        res.innerHTML=''
        while(c<=13){
            let item=document.createElement('option')
            item.text=`${n} x ${c} = ${n*c}`
            item.value=`op${c}`
            res.appendChild(item)
            c++
        }
        
    }
}