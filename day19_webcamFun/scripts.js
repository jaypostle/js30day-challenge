const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false }) // this returns a promise
        .then(localMediaStream => {
            console.log(localMediaStream);
            // this creates the media stream into something the media player can understand
            video.srcObject = localMediaStream;
            video.play();
        })
        .catch(err => {
            console.log(`Oh no!!!!`, err);
        });
};

function paintToCanvas() {
    // width and height of actual video
    const width = video.videoWidth;
    const height = video.videoHeight;
    // console.log(width, height);
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        // pass draw image an image or video element and it will paint it right to it
        // 0 , 0 start at the top left hand corner and paint the width and height
        ctx.drawImage(video, 0, 0, width, height);
    }, 16);
}

function takePhoto() {
    // played the sound file we have
    snap.currentTime = 0;
    snap.play();

    // take the  data out of the canvas
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
    strip.insertBefore(link, strip.firstChild);
}

getVideo();

// this runs paint to canvas once we see that the video is able to play
video.addEventListener('canplay', paintToCanvas);