const btn1 = document.querySelector('#btn1')
const icon1 = document.querySelector('#icon1')

btn1.addEventListener('click', function() {
    btn1.classList.toggle('btn-chat')
    icon1.classList.toggle('btn-chat')
})