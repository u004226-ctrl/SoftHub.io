let hidden_button = document.getElementById('Logo')
let audio = document.querySelector('audio');

let pycharm = document.getElementById('pycharm')
let second_audio = document.getElementById('pay')

let go = document.getElementById('go')
let firefox = document.getElementById('firefox')

hidden_button.addEventListener('click', function() {
    audio.play();

})

pycharm.addEventListener('click', function() {
    second_audio.play();
    
})


go.addEventListener('click', function() {
    window.open('https://go.dev/', '_blank')
})


firefox.addEventListener('click', function() {
    window.open('https://firefox.com', '_blank')

})

document.addEventListener('DOMContentLoaded', () => {
            audio.play()
            
        });
