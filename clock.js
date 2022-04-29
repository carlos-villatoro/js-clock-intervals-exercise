// document.addEventListener('DOMContentLoaded', function(){

//     let degreesH = 0;
//     let degreesM = 0;
//     let degreesS = 0;
//     rotateH = function(){
//         degreesH += 6
//         const elH = document.getElementById("hour")
//         elH.style.transform = "rotate(" + degreesH + "deg)" 
        
//     } 
    

//     rotateM = function(){
//         degreesM += 6
//         const elM = document.getElementById("minute")
//         elM.style.transform = "rotate(" + degreesM + "deg)"
        
//     }
    

//     rotateS = function(){
//         degreesS += 6
//         const elS = document.getElementById("second")
//         elS.style.transform = "rotate(" + degreesS + "deg)"
        
//     }
//     setInterval(rotateS, 1000) 
//     setInterval(rotateM, 59999)
//     setInterval(rotateH, 3.6e+6)
// const now = new Date()
// const sec = now.getSeconds()
// const minutes = now.getMinutes()
// const hour = now.getHours()

// console.log(hour,":", minutes,":", sec)

// /*
// values --- coinvert to degrees --- apply degrees to the imgs
// */


// })






// review 
let sec = 0
let mins = 0 
let hours = 0

//DOM selectors
const secondHand = document.querySelector('#second')
const minuteHand = document.querySelector('#minute')
const hourHand = document.querySelector('#hour')

const secondRotation = seconds => (seconds / 60) * 360
const miniuteRotation = minute => (minute / 60) * 60
const hourRotation = hour => (hour / 12) * 360

// program functions
const clock = function(){
    secs++
    if (secs >= 60) {
        mins++
        secs = 0
    }
    if (mins >= 60) {
        hours++
        mins = 0
    }
    if (hours > 12){
        hours = 0
    }


    console.log('sec:', secs, 'mins:', mins, "hours:", hours)
    secondHand.style.transform = "rotate(" + secondRotation(secs) + "deg)"
    minuteHand.style.transform = "rotate(" + minuteRotation(mins) + "deg)"
    hourHand.style.transform = "rotate(" + hourRotation(hours) + "deg)"
}

// intervals
setInterval(clock, 100)