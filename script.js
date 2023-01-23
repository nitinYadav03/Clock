
const h = document.querySelector('.hour')
const m = document.querySelector('.minute')
const s = document.querySelector('.second')
// const hour = document.querySelector('.hr')
// const minute = document.querySelector('.min')
// const second = document.querySelector('.sec')
const time = document.querySelector('#time')
    
  
  setInterval(()=>{
    const date = new Date()
    let sec = date.getSeconds()
    let min = date.getMinutes()
    let hr = date.getHours()
    const secDegree = 6 * sec
    s.style.transform = `rotate(${secDegree}deg)`
    const minDegree = 6 * min
    m.style.transform = `rotate(${minDegree}deg)`
    const hourDegree = hr * 30 + min / 2
    h.style.transform = `rotate(${hourDegree}deg)`
    
    let day_night = "AM"
    if(hr > 12){
      day_night = "PM"
      hr = hr - 12
    }
    if(hr < 10){
      hr = "0" + hr
    }
    if (min < 10){
      min = "0" + min
    }
    if (sec < 10){
      sec = "0" + sec
    }
    time.innerText = hr + ":" + min + ":" + sec + " " + day_night
  }, 1000)
  