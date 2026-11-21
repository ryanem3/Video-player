
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play or pause the video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Change the play/pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// Stop the video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
  updateProgress();
}

// Update progress bar and timestamp
function updateProgress() {
  if (Number.isFinite(video.duration) && video.duration > 0) {
    const percentage = (video.currentTime / video.duration) * 100;
    progress.value = percentage;
  }

  let minutes = Math.floor(video.currentTime / 60);
  let seconds = Math.floor(video.currentTime % 60);

  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');

  timestamp.innerHTML = `${minutes}:${seconds}`;
}

// Move to a different part of the video
function setVideoProgress() {
  if (Number.isFinite(video.duration) && video.duration > 0) {
    const location = (Number(progress.value) * video.duration) / 100;
    video.currentTime = location;
  }
}

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);
video.addEventListener('loadedmetadata', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('input', setVideoProgress);
// Center Play Button
const centerPlay = document.getElementById('center-play');

// Play video when center button is clicked
centerPlay.addEventListener('click', toggleVideoStatus);

// Hide center button while video plays
video.addEventListener('play', () => {
  centerPlay.style.display = 'none';
});

// Show center button when video pauses
video.addEventListener('pause', () => {
  centerPlay.style.display = 'flex';
});