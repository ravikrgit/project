function updateClock() {
  //get the current time
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getseconds();
  let ampm = hours >= 12 ? "PM" : "AM";

  //convert to 12 hour format
  hours = hours % 12;
  hours = hours ? hours : 12;

  //pad minutes and second with leading zeros
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const timeString = "${hours} :${minutes}:${seconds} ${ampm}";
  document.getElementById("clock").innerText = timeString;
}
//Update the clock every second
setInterval(updateClock, 1000);
//Call the function once to initialize the clock immediately
updateClock();
