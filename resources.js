//1. making graph/chart
const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const chart = document.querySelector(".chart");

for (const num of data) {
  let div = document.createElement("div");
  div.className = "bar";
  let alpha = 0.5 + num / 200;
  div.style.background = `rgba(255, 165, 0, ${alpha})`;
  div.style.width = num * 2.5 + "px";
  div.style.height = 100 + "px";
  div.style.lineHeight = num * 2.5 + "px";
  div.textContent = num;
  chart.appendChild(div);
}
