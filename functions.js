let timeRef = document.getElementById('time-ref');

timeRef.addEventListener('click', dateTime = event => {
  return alert(new Date(performance.timing.connectStart));
})