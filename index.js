const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];


  const refs = {
start: document.querySelector('[data-action="start"]'),
stop: document.querySelector('[data-action="stop"]'),
body: document.getElementsByTagName('body'),
  };


  let counterColors = null;

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function randomColor() {
    let min = 0;
    let max = colors.length - 1;
    const indexRandom = randomIntegerFromInterval(min, max);
    const color = colors[indexRandom];
    return color
}


  refs.start.addEventListener("click", () => {
    counterColors = setInterval(() => {
        const color = randomColor()
        document.body.style.backgroundColor = color;
},2000);
refs.start.setAttribute('disabled', true);
refs.stop.removeAttribute('disabled');

return counterColors

});




refs.stop.addEventListener("click", () => {
clearInterval(counterColors);
refs.stop.setAttribute('disabled', true);
refs.start.removeAttribute('disabled');
});




