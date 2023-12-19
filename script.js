const button = document.querySelector('.button')
const notifies = document.querySelector('.notifies') 


const randomMessage= ["Hello 1", "Random 2", "Someone 3", "Anything 4", "Anything 5"] 

function getNotif(){
    const notifi = document.createElement('div')
    notifi.classList.add('notify')
    notifi.innerText = randomMessage[Math.floor(Math.random()*5)]

    notifies.appendChild(notifi)

    setTimeout(() => {
        notifi.classList.remove('notify')
        notifi.innerText = "";
    },2500)
}
button.addEventListener('click',getNotif)
