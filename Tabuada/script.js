function calcular(){
let num = document.getElementById('num')
let res=document.getElementById('res')

if(num.length==0){
    alert('Por Favor insira um número valido')
}else{
    let n= Number(num.value)
    res.innerHTML=''
    for(let c=1; c<=10; c++){
        let opt =document.createElement('option')
        opt.text=`${n} x ${c} = ${n*c}`
        res.appendChild(opt)
    }
}

}