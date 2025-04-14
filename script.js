function checkWaterLevel() {
  // Simulate water level (random number)
  var level = Math.floor(Math.random() * 100); // 0 to 99
  var status = document.getElementById("status");

  if (level > 60) {
    status.innerHTML = "ALERT! High Water Level Detected: " + level + "%";
    status.className = "alert";
  } else {
    status.innerHTML = "Water Level Normal: " + level + "%";
    status.className = "";
  }
}