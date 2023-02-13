import './style.css';
const container = document.querySelector('.container');

let colorArr = ['#4B3B47', '#6A6262', '#9C9990', '#CFD2B2'];

function mouseOverFunction(e) {
  console.log((e.target.style.opacity = 0.1));
}

setInterval(() => {
  let color = Math.floor(Math.random() * colorArr.length);
  let left = Math.random() * window.innerWidth;
  let top = Math.random() * window.innerHeight;
  let div = document.createElement('div');
  div.className = 'circle';
  div.style.top = top + 'px';
  div.style.left = left + 'px';
  div.style.backgroundColor = colorArr[color];
  window.addEventListener('mouseover', mouseOverFunction);

  container.appendChild(div);
}, 30);
