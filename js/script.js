// video playlist
let currentVideo = 1;
let video = document.getElementById('video');
let source = document.getElementById('source');

$('.button1').click(function() {
    if (currentVideo != 1) {
        currentVideo = 1;
        source.setAttribute('src', 'img/video/maastricht.mp4');
        video.load();
    }
    if (currentVideo == 1) {
        if (video.paused == true) {
            video.play();
            document.getElementById('play1').setAttribute("src", "img/icons/pause_icon.png");
            // de rest krijgt play icon
            document.getElementById('play2').setAttribute("src", "img/icons/play_icon.png");
            document.getElementById('play3').setAttribute("src", "img/icons/play_icon.png");
            document.getElementById('play4').setAttribute("src", "img/icons/play_icon.png");
        } else {
            video.pause();
            document.getElementById('play1').setAttribute("src", "img/icons/play_icon.png");
        }
    }
});

$('.button2').click(function() {
    if (currentVideo != 2) {
        currentVideo = 2;
        source.setAttribute('src', 'img/video/aachen.mp4');
        video.load();
    }
    if (currentVideo == 2) {
        if (video.paused == true) {
            video.play();
            document.getElementById('play2').setAttribute("src", "img/icons/pause_icon.png");
            // de rest krijgt play icon
            document.getElementById('play1').setAttribute("src", "img/icons/play_icon.png");
            document.getElementById('play3').setAttribute("src", "img/icons/play_icon.png");
            document.getElementById('play4').setAttribute("src", "img/icons/play_icon.png");
        } else {
            video.pause();
            document.getElementById('play2').setAttribute("src", "img/icons/play_icon.png");
        }
    }
});

$('.button3').click(function() {
    if (currentVideo != 3) {
        currentVideo = 3;
        source.setAttribute('src', 'img/video/schimmert.mp4');
        video.load();
    }
    if (currentVideo == 3) {
        if (video.paused == true) {
            video.play();
            document.getElementById('play3').setAttribute("src", "img/icons/pause_icon.png");
            // de rest krijgt play icon
            document.getElementById('play1').setAttribute("src", "img/icons/play_icon.png");
            document.getElementById('play2').setAttribute("src", "img/icons/play_icon.png");
            document.getElementById('play4').setAttribute("src", "img/icons/play_icon.png");
        } else {
            video.pause();
            document.getElementById('play3').setAttribute("src", "img/icons/play_icon.png");
        }
    }
});

$('.button4').click(function() {
    if (currentVideo != 4) {
        currentVideo = 4;
        source.setAttribute('src', 'img/video/newyork.mp4');
        video.load();
    }
    if (currentVideo == 4) {
        if (video.paused == true) {
            video.play();
            document.getElementById('play4').setAttribute("src", "img/icons/pause_icon.png");
            // de rest krijgt play icon
            document.getElementById('play1').setAttribute("src", "img/icons/play_icon.png");
            document.getElementById('play2').setAttribute("src", "img/icons/play_icon.png");
            document.getElementById('play3').setAttribute("src", "img/icons/play_icon.png");
        } else {
            video.pause();
            document.getElementById('play4').setAttribute("src", "img/icons/play_icon.png");
        }
    }
});

$('#skip').click(function() {
    event.preventDefault();
    video.currentTime += 10;
});