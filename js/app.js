const imgs = ['jo', 'ken', 'po'];
const input = document.querySelectorAll('input');
const res = document.querySelector('.res');
const scrMe = document.querySelector('.scrMe');
const scrPc = document.querySelector('.scrPc');
const score = [0, 0];

input.forEach(e => {
    e.addEventListener('click', () => {
        let me = e.value;
        document.imgMe.src = `img/${me}.png`;
        let pc = imgs[Math.floor(Math.random() * (imgs.length))]
        document.imgPc.src = `img/${pc}.png`;

        if ((me == 'po' && pc == 'ken') || (me == 'ken' && pc == 'jo') || (me == 'jo' && pc == 'po')) {
            res.innerHTML = 'YOU WINS!'
            score[0] += 1;
            scrMe.innerHTML = `ME: ${score[0]}`;
            
        } else if ((me == 'jo' && pc == 'ken') || (me == 'ken' && pc == 'po') || (me == 'po' && pc == 'jo')) {
            res.innerHTML = 'WINNER IS PC!'
            score[1] += 1;
            scrPc.innerHTML = `PC: ${score[1]}`;
        } else {
            res.innerHTML = 'BREAKEVEN!'
        }
    })
})