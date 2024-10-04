// Select audio and button elements
const audio = document.getElementById('audio');
const musicButton = document.getElementById('music-button');

// Load the audio playback state from local storage
let isPlaying = localStorage.getItem('musicPlaying') === 'true';
if (isPlaying) {
    audio.currentTime = parseFloat(localStorage.getItem('musicCurrentTime')) || 0;
    audio.play();
    musicButton.classList.add('active');
} else {
    audio.currentTime = 0; // Start from the beginning if not playing
}

// Automatically start playing music on page load
window.addEventListener('load', () => {
    // Uncomment the following line to start playing automatically (may be blocked by some browsers)
    // audio.play().catch(err => console.log("Auto-play failed: ", err));
});

// Update the local storage and play/pause audio
function toggleMusic() {
    if (audio.paused) {
        audio.play();
        musicButton.classList.add('active'); // Change to active state
        isPlaying = true;
    } else {
        audio.pause();
        musicButton.classList.remove('active'); // Change to inactive state
        isPlaying = false;
    }
    localStorage.setItem('musicPlaying', isPlaying);
}

// Save the current playback time to local storage before leaving the page
audio.addEventListener('timeupdate', () => {
    localStorage.setItem('musicCurrentTime', audio.currentTime);
});

// Event listener for button click
musicButton.addEventListener('click', toggleMusic);
