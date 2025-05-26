function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    document.querySelector('#hours span').textContent = hours;
    document.querySelector('#minutes span').textContent = minutes;
    document.querySelector('#seconds span').textContent = seconds;
  
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('id-ID', options);
  }
  
  setInterval(updateClock, 1000);
  updateClock();
  
  // Efek klik zoom
  document.querySelectorAll('.time div').forEach(div => {
    div.addEventListener('click', () => {
      div.classList.remove('zoom-animate');
      void div.offsetWidth; // Restart animasi
      div.classList.add('zoom-animate');
    });
  });