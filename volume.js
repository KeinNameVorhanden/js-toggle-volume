var Video = document.getElementById('Video');
var Button = document.getElementById('Volume-Button');
Button.addEventListener('click', function() {
    if (Video.muted === true) {
        Video.muted = false;
        Video.volume = 0.05;
        document.getElementById("volume-btn").src = "assets/media/vol-on.png";
    }
    else{
        if (Video.volume === 0){
            Video.volume = 0.05;
            document.getElementById("volume-btn").src = "assets/media/vol-on.png";
        }
        else{
            Video.volume = 0;
            document.getElementById("volume-btn").src = "assets/media/vol-off.png";
        }
        
    }
    });
