function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM

  hours = hours % 12; // Convert 24-hour format to 12-hour format
  hours = hours ? hours : 12; // Handle 12 AM case
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  document.getElementById('hrs').innerText = hours;
  document.getElementById('min').innerText = minutes;
  document.getElementById('sec').innerText = seconds;
  document.getElementById('ampm').innerText = ampm;
}

setInterval(updateClock, 1000); // Update clock every second
updateClock(); // Initial call to display clock immediately