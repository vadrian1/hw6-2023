var video;
let thisVideo = document.getElementById("player1")
var volumeSlider = document.getElementById("slider")
var volumeDisplay = document.getElementById("volume")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	thisVideo.removeAttribute("preload")
	thisVideo.removeAttribute("loop")
});


document.querySelector("#play").addEventListener("click", function() {
	volumeDisplay.innerHTML = volumeSlider.value + "%"
	console.log("Play Video");
	thisVideo.play()
});
document.getElementById("pause").addEventListener("click", function() {
	console.log("Pause Video");
	thisVideo.pause()
});

//slow and speed
var slowButton = document.getElementById("slower")
var speedButton = document.getElementById("faster")
slowButton.addEventListener("click", function(){
	thisVideo.playbackRate = thisVideo.playbackRate * .9
	console.log(thisVideo.playbackRate)
})
speedButton.addEventListener("click", function(){
	thisVideo.playbackRate = thisVideo.playbackRate / .9
	console.log(thisVideo.playbackRate)
})

//skip ahead
var skip = document.getElementById("skip")
skip.addEventListener("click", function(){
	thisVideo.currentTime = thisVideo.currentTime + 10
	if(thisVideo.currentTime >= thisVideo.duration){
		thisVideo.currentTime = 0
	}
	console.log(thisVideo.currentTime)
});

//volume
volumeDisplay.innerHTML = volumeSlider.value + "%"
document.getElementById("slider").addEventListener("input", function(){
	document.getElementById("player1").volume = volumeSlider.value / 100;
	volumeDisplay.innerHTML = volumeSlider.value + "%"
})

//mute
var muteButton = document.getElementById("mute")
muteButton.addEventListener("click", function(){
	if(thisVideo.muted == true){
		thisVideo.muted = false;
		muteButton.innerHTML = "Mute"
	}
	else{
		thisVideo.muted = true;
		muteButton.innerHTML = "Unmute"
	}
})

//ol dschool
var oldschool = document.getElementById("vintage")
var original = document.getElementById("orig")
oldschool.addEventListener("click",function(){
	player1.setAttribute("class", "oldSchool")
})
original.addEventListener("click", function(){
	thisVideo.setAttribute("class", "video")
})