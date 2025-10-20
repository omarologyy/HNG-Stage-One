function updateTime() {
  const currentTime = Date.now();
  document.getElementById("dynamicTime").textContent = currentTime;
}

updateTime();
setInterval(updateTime, 1000);
