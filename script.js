const videoElement = document.getElementById('video');
const button =document.getElementById('button');

// Prompt the user to select a media stream, pass it to video element and play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch (error) {
        // catch error here
        console.log('whoops, error here:', error);
    }
}

button.addEventListener('click', async () => {
    // disable the button
    button.disabled = true;

    //start picture in picture 
    await videoElement.requestPictureInPicture();

    // reset button
    button.disabled = false;
});
// on load
selectMediaStream();