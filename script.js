const daysBlock = document.getElementById('days');
const hoursBlock = document.getElementById('hours');
const minutesBlock = document.getElementById('minutes');
const secondsBlock = document.getElementById('seconds');

// Set start and end dates
const startDate = new Date('2024-10-22T00:00:00').getTime();
const endDate = new Date('2025-04-01T00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = endDate - now;

    // Check if the countdown is finished
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = "We've Launched!";
        return;
    }

    // Calculate time remaining
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the time blocks with leading zeros
    daysBlock.querySelector('.time-value').textContent = String(days).padStart(2, '0');
    hoursBlock.querySelector('.time-value').textContent = String(hours).padStart(2, '0');
    minutesBlock.querySelector('.time-value').textContent = String(minutes).padStart(2, '0');
    secondsBlock.querySelector('.time-value').textContent = String(seconds).padStart(2, '0');
}

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);
