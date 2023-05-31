const videoBtn = document.querySelector('#video-id-btn');
const videoBtnIcon = document.querySelector('#video-id-icon');
const videoFile = document.querySelector('#video-file');
const videoOverlay = document.querySelector('#video-id-overlay');


videoBtn.addEventListener('click', function() {

    function toggleOverlay(event){
        if(event.type === 'mouseleave') {
            videoOverlay.classList.add('hidden');
        } else {
            videoOverlay.classList.remove('hidden');
        }
    };
    if(videoFile.paused) {
        videoFile.play();
        videoBtnIcon.src = 'img/pause_icon.svg';
        videoOverlay.onmouseleave = toggleOverlay;
        videoOverlay.onmouseenter = toggleOverlay;
    } else {
        videoFile.pause();
        videoBtnIcon.src = 'img/play.svg';
        videoOverlay.onmouseleave = null;
        videoOverlay.onmouseenter = null;
    }
})