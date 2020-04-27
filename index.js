const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
    '#afa',
    '#ace'
];
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

let process;
let isActive = false;
const switcher = {
    start() {
        if (isActive) { return }
        process = setInterval(() => {
            const randomIdx = randomIntegerFromInterval(0,7);
            body.style = `background-color: ${colors[randomIdx]}`;
            isActive = true;
            console.log('Switched!');
        }, 1500);
        startBtn.classList.add('pressed');
        stopBtn.classList.remove('pressed')
        
    },
    stop() {
        clearInterval(process)
        isActive = false;
        console.log('Stopped X')
        startBtn.classList.remove('pressed');
        stopBtn.classList.add('pressed')
    }
}
startBtn.addEventListener('click', switcher.start);
stopBtn.addEventListener('click', switcher.stop)
