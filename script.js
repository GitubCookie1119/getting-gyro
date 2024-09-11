window.addEventListener('deviceorientation', (event) => {
    document.querySelector(".alpha").textContent = 'alpha: ' + event.alpha;
    document.querySelector(".beta").textContent = 'beta: ' + event.beta;
    document.querySelector(".gamma").textContent = 'gamma: ' + event.gamma;
});