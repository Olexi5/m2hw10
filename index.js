//1
let i1 = 0;
const timer1 = setInterval(() => {
  console.log("first task");
  i1++;
  if (i1 === 5) clearInterval(timer1);
}, 1000);

//2
let i2 = 0;
const timer2 = setInterval(() => {
  document.querySelector(".div1").style.width =
    i2 % 2 === 0 ? "300px" : "200px";
  document.querySelector(".div2").style.marginLeft =
    i2 % 2 === 0 ? "500px" : "0px";
  document.querySelector(".div3").style.backgroundColor =
    i2 % 2 === 0 ? "green" : "yellow";
  i2++;
}, 1000);

//3
let count = 0;
const timer3 = setInterval(() => {
  document.querySelector("#btn").style.display = "block";
  document.querySelector("#btn").style.marginLeft = `${Math.random() * 900}px`;
  document.querySelector("#btn").style.marginTop = `${Math.random() * 450}px`;
}, 1000);
document.querySelector("#btn").addEventListener("click", () => {
  count++;
  document.querySelector("#btn").style.display = "none";
  document.querySelector(".count").textContent = count;
});

//4
const form = document.querySelector("#form");
const num = document.querySelector("#num");
const mes = document.querySelector("#mes");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  setTimeout(() => {
    alert(mes.value);
  }, num.value*1000);
});
