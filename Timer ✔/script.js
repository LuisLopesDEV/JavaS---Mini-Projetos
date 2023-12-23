'use strict';

const att=(tempo)=>{
    const format=(digito)=>`0${digito}`.slice(-2)
    const seg=document.getElementById('segundos')
    const min=document.getElementById('minutos')
    const hora=document.getElementById('horas')
    const dia=document.getElementById('dias')
    
    const qSeg= tempo%60
    const qMin= Math.floor((tempo%(60 *60))/60)
    const qHor= Math.floor((tempo%(60 *60*24))/(60*60))
    const qDia= Math.floor(tempo/(60*60*24))

    seg.textContent= format(qSeg)
    min.textContent= format(qMin)
    hora.textContent= format(qHor)
    dia.textContent= format(qDia)

}
const cRegressiva=(tempo)=>{
    const stopC=()=>clearInterval(id)
    const contar=()=>{
        if(tempo===0){stopC()}
        att(tempo)
        tempo--
    }
   const id= setInterval(contar,1000)
}
const tRest=()=>{
    const natal= new Date('2023-12-25 00:00:01')
    const hoje= Date.now()
    return Math.floor((natal - hoje)/1000)
}
cRegressiva(tRest())
