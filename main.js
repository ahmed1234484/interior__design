document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.video-container video');

    document.querySelector('.video-container').addEventListener('mouseover', function() {
      video.play();
    });

    document.querySelector('.video-container').addEventListener('mouseout', function() {
      video.pause();
      video.currentTime = 0; 
    });
  });
  
