// Events Section 

let countDown = new Date("June 25, 2024 15:30:00").getTime()

console.log(countDown)

let counter = setInterval(() => {
    let datNow = new Date().getTime()

    let dateDiff = countDown - datNow


    let days = Math.trunc((dateDiff / (1000 * 60 * 60 * 24)))
    let hours = Math.trunc((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.trunc((dateDiff % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.trunc((dateDiff % (1000 * 60)) / 1000)

    document.querySelector(".days").textContent = days < 10 ? `0${days}`: days
    document.querySelector(".hours").textContent = hours < 10 ? `0${hours}`: hours 
    document.querySelector(".minutes").textContent = minutes < 10 ? `0${minutes}`: minutes
    document.querySelector(".seconds").textContent = seconds < 10 ? `0${seconds}`: seconds 

}, 1000)



// Skills & Stats Section

let skillsSection = document.querySelector(".our-skills")
let spans = document.querySelectorAll(".progress span")
let prog = document.querySelectorAll(".skill h3 span")

let stateSection = document.querySelector(".stats")
let statsSpans = document.querySelectorAll(".number")
let progStarted = false
let statStarted = false


window.onscroll = function() {
    if (scrollY >= skillsSection.offsetTop) {
        spans.forEach((ele) => {
            ele.style.width = ele.getAttribute("data-width")
            // ----------------------
            if (!progStarted) {
                prog.forEach((ele) => {
                    let progNumber = ele.getAttribute("data-prog")
                    console.log(progNumber)
                    let counter = setInterval(() => {
                        ele.textContent ++
                        if (ele.textContent == progNumber) {
                            clearInterval(counter)
                        }
                    },1000 / progNumber)
                })
                progStarted = true
            }
        })
        
    }
    // -------------------------------
    if (scrollY >= stateSection.offsetTop - 200) {
        if (!statStarted) {
            statsSpans.forEach((ele) => {
                let number = ele.getAttribute("data-number")
                console.log(number)
                let counter = setInterval(function() {
                    ele.textContent++
                    if (ele.textContent == number) {
                        clearInterval(counter)
                    }
                },2000 / number)
            })
        }
        statStarted = true
    }
}




