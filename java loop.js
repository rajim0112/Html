// let studentIds = [1, 2, 3, 2, 5, 6, 3]
// let uniqueIds = []
// console.log(uniqueIds.includes(4))

// let studentIds = [1, 2, 3, 2, 5, 6, 3]
// let uniqueIds = [4]
// console.log(uniqueIds.includes(4))

// let studentIds = [1, 2, 3, 2, 5, 6, 3]
// let uniqueIds = []
// studentIds.forEach(item =>{
//     // if(uniqueIds.includes(item) === false) {
//     // if(uniqueIds.includes(item) !== true) {
//     if(!uniqueIds.includes(item)) {
//         uniqueIds.push(item)
//     }
// })
// console.log(uniqueIds)

// let a = new Set()
// a.add(1)
// console.log(a)

// let a = new Set()
// a.add(1)
// console.log(a)
// a.add(2)
// console.log(a)
// a.add(3)
// console.log(a)

// let a = new Set()
// a.add('std1')
// console.log(a)
// a.add('std2')
// console.log(a)
// a.add('std3')
// console.log(a)

// *******************************switch**********************

// var age = 18
// switch(age) {
//     case 5:
//         console.log('child');
//     case 25:
//         console.log('married');
//     case 18:
//         console.log('major');
// }

// var age = 10
// switch(age) {
//     case 5:
//         console.log('child');
//     case 25:
//         console.log('married');
//     case 18:
//         console.log('major');
//     default:
//         console.log('Not Mentioned')
// }

// var age = 25
// switch(age) {
//     case 5:
//         console.log('child');
//         break
//     case 25:
//         console.log('married');
//         break
//     case 18:
//         console.log('major');
//         break
//     default:
//         console.log('Not Mentioned')
// }

// let a = [1,2,3,0,4,5,6]
// for (let i=0; i<a.length; i++) {
//     if(a[i] ==0) {
//         break
//     } else {
//         console.log(a[i])
//     }
// }


// *********************************************************

// let a = [1,2,3,0,4,5,6]
// for (let i=0; i<a.length; i++) {
//     if(a[i] !==0) {
//         console.log(a[i])
//     }
// }

// *************************continue************************

// let a = [1,2,3,0,4,5,6]
// for (let i=0; i<a.length; i++) {
//     if(a[i] ==0) {
//         continue
//     } else {
//         console.log(a[i])
//     }
// }

// *************************************************************

// console.log(Math.random())

// let random = Math.random()
// console.log(`${random} - ${Math.round(random)}`)

// let random = Math.random()
// console.log(`${Math.round(random*255)}`)

// let random = Math.random()
// let r = Math.round(random*255)
// let g = Math.round(random*255)
// let b = Math.round(random*255)
// console.log(`${r} - ${g} - ${b}`)

// let r = Math.round(Math.random()*255)
// let g = Math.round(Math.random()*255)
// let b = Math.round(Math.random()*255)
// console.log(`${r} - ${g} - ${b}`)


// let r = Math.round(Math.random()*255)
// let g = Math.round(Math.random()*255)
// let b = Math.round(Math.random()*255)
// console.log(`${r} - ${g} - ${b}`)
// document.body.style.backgroundColor = `rgb(${r},${g},${b})`

/***************************generate new color*************************** */

let btn = document.getElementById('color')

function generate() {
    let r = Math.round(Math.random()*255)
    let g = Math.round(Math.random()*255)
    let b = Math.round(Math.random()*255)

    console.log(`${r} - ${g} - ${b}`)

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
}
btn.addEventListener('click', generate)





