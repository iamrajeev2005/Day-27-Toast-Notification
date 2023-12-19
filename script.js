const button = document.querySelector('.button')
const notifies = document.querySelector('.notifies') 


const randomMessage= ["Hello Shubham","Kya haal hai", "Sunai ni dera kya","Abe sun le", "Kaha Mar gya"] 

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