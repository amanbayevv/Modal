const showBtn = document.querySelector('#show-btn')
const closeBtn = document.querySelector('#close-btn')
const overlay = document.querySelector('#overlay')
const modal = document.querySelector('#modal')



const addHidden = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
const reHidden = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

showBtn.addEventListener('click', reHidden)
closeBtn.addEventListener('click', addHidden)
overlay.addEventListener('click',addHidden)
document.addEventListener('keydown', (e) => {
   if (e.key == 'Escape') {
    addHidden()
   }

})