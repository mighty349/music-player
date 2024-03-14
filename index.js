var audioMap = {};
var currentSong = null; // Track the currently playing song

$("button:not(.dark)").on("click", function () {
    var song = this.classList[0];
    playsound(song);
});

function playsound(song) {
    if (currentSong && currentSong !== song) {
        // Stop the currently playing song if it's different from the new one
        audioMap[currentSong].pause();
        audioMap[currentSong + "Playing"] = false;
        $("." + currentSong).text("play");
    }

    if (!audioMap[song]) {
        audioMap[song] = new Audio("sounds/" + song + ".mp3");
    }

    var audio = audioMap[song];
    var playing = audioMap[song + "Playing"] || false;

    if (!playing) {
        audio.play();
        audioMap[song + "Playing"] = true;
        $("." + song).text("pause");
        currentSong = song; // Update the currently playing song
    } else {
        audio.pause();
        audioMap[song + "Playing"] = false;
        $("." + song).text("play");
        currentSong = null; // Reset the currently playing song
    }
}
var dark=false;
$(".dark").on("click",activate);

function activate()
{
    if(!dark)
    {
        $("body").addClass("activate");
        $(".intro").addClass("activate");
        dark=true;
    }
    else
    {
        $("body").removeClass("activate");
        $(".intro").removeClass("activate");
        dark=false;
    }
}
