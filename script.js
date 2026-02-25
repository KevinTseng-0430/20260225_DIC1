function updateTime() {
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');
    
    const now = new Date();
    
    // Formatting time: HH:MM:SS
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    
    // Formatting date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString(undefined, options);
}

// Initial call
updateTime();

// Update every second
setInterval(updateTime, 1000);

// Subtle hover effect for the glass card
const card = document.getElementById('main-card');
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    
    card.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
});

document.addEventListener('mouseleave', () => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
