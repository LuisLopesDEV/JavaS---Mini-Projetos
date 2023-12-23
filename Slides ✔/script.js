'use strict'

// const images = [
//     { 'id': '1', 'url': 'img/cruzeiro1.png' },
//     { 'id': '2', 'url': 'img/cruzeiro2.jpg' },
//     { 'id': '3', 'url': 'img/cruzeiro3.jpg' },
//     { 'id': '4', 'url': 'img/cruzeiro4.png' },
//     { 'id': '5', 'url': 'img/cruzeiro5.jpg' },
//     { 'id': '6', 'url': 'img/cruzeiro6.jpg' },
// ]

// const container = document.getElementById('container-items')


// const loadImages = (images, container) => {
//     images.forEach(image => {
//         container.innerHTML += `
//         <div class='item'>
//             <img src='${image.url}'
//         </div>
//         `
//     })
// }

// loadImages(images, container)

// let items = document.querySelectorAll('.item')

// const prev = () => {
//     container.appendChild(items[0])
//     items = document.querySelectorAll('.item')
// }
// const next = () => {
//     const lastItem = items[items.length - 1]
//     container.insertBefore(lastItem, items[0])
//     items = document.querySelectorAll('.item')
// }

// document.getElementById('previous').addEventListener('click', prev)
// document.getElementById('next').addEventListener('click', next)

const images = [
    { 'id': '1', 'url': 'img/cruzeiro1.png' },
    { 'id': '2', 'url': 'img/cruzeiro2.jpg' },
    { 'id': '3', 'url': 'img/cruzeiro3.jpg' },
    { 'id': '4', 'url': 'img/cruzeiro4.png' },
    { 'id': '5', 'url': 'img/cruzeiro5.jpg' },
    { 'id': '6', 'url': 'img/cruzeiro6.jpg' },
]
const container = document.getElementById('container-items')
const loadImages =(images, container)=>{ images.forEach(image => {
    container.innerHTML += `
         <div class='item'> <img src='${image.url}'</div>`
})}
loadImages(images, container)
let items=document.getElementsByClassName('item')

const prev=()=>container.appendChild(items[0]);
const next=()=>{
    const lastItem=items[items.length-1]
    container.insertBefore(lastItem,items[0])
}

document.getElementById('previous').addEventListener('click',prev)
document.getElementById('next').addEventListener('click',next)