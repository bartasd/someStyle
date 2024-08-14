const grad = document.getElementById("grad");
const text = document.getElementById("text");

let i = 0;
let turn = true;

function changeTurn() {
  turn = !turn;
}

function changeGrad() {
  const ww = 3;
  const w = i <= ww ? i : ww;
  const x = 100 + w;
  i %= x;
  const a = i % x;
  const b = (a + w) % x;
  const c = (b + w) % x;

  const bkg = `linear-gradient(
        135deg,
        rgba(2, 0, 36, 1) ${a}%,
        rgba(9, 9, 121, 1) ${b}%,
        rgba(0, 212, 255, 1) ${c}%
      )`;

  grad.style.background = bkg;
  text.style.background = bkg;
  text.style.backgroundClip = "text";
  i += turn ? 1 : -1;
  if (i == -1) {
    i = x;
  }
}

setInterval(changeGrad, 30);

grad.addEventListener("click", changeTurn);
