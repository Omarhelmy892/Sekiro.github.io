let vid = document.getElementById("vid");
let videoplay = true;
let videomute = true
function play(){
    if (videoplay == true){
        vid.pause();
    } else {
        vid.play();
    }
    videoplay = !videoplay;

}
function mute(){
    if (videomute == true){
        vid.volume == 0.3;
        
    } else {
        vid.volume = 0;
        
    }
    videomute = !videomute
}
function lower_volume(){
    vid.volume = Math.max(0,vid.volume - 0.1)
    if (vid.volume > 0) vid.muted = false; 
}
function increase_volume(){
    vid.volume = Math.min(1,vid.volume + 0.1)
    if (vid.volume > 0) vid.muted = false;
}