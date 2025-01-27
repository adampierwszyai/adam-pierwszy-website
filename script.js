document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("background-video");

  // Function to reverse the video
  function reverseVideo() {
    video.pause();
    let currentTime = video.currentTime;

    // Gradually decrease currentTime to create reverse playback effect
    const reverseInterval = setInterval(() => {
      if (currentTime <= 0) {
        clearInterval(reverseInterval);
        video.pause();
        setTimeout(() => {
          loopVideo(); // Continue the loop after reverse
        }, 2000); // Pause for 2 seconds before next reverse
      } else {
        currentTime -= 0.1; // Adjust speed of reverse
        video.currentTime = currentTime;
      }
    }, 30); // Interval for reverse effect (lower value for faster reverse)
  }

  // Function to play the video forward
  function playVideo() {
    video.pause();
    video.currentTime = 0; // Start from the beginning
    video.playbackRate = 1; // Normal playback rate
    video.play();
    setTimeout(reverseVideo, 900); // Start reverse after 5 seconds
  }

  // Loop the video with alternating playback
  function loopVideo() {
    playVideo(); // Start playing forward
  }

  // Start the animation loop
  loopVideo();
});
document.addEventListener("DOMContentLoaded", () => {
  const countdownElement = document.getElementById("countdown");

  // Calculate the end time: 7 days from now
  const now = 1737998346649;
  // Current Unix time in milliseconds
  const endTime = now + 7 * 24 * 60 * 60 * 1000; // Add 7 days in milliseconds

  function updateCountdown() {
    const currentTime = Date.now();
    const timeLeft = endTime - currentTime;

    if (timeLeft <= 0) {
      countdownElement.textContent = "00:00:00:00"; // Countdown complete
      clearInterval(timer);
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Format countdown text as "DD:HH:MM:SS"
    countdownElement.textContent = `${String(days).padStart(2, "0")}:${String(
      hours
    ).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  }

  // Update countdown every second
  const timer = setInterval(updateCountdown, 1000);
  updateCountdown(); // Initialize the countdown display immediately
});
