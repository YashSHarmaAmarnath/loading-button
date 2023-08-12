function clicked(){
    document.getElementById("t1").innerHTML = "";
    document.getElementById("loading-image").style.display="block";
    document.getElementById("progress_bar").style.display="block";
    document.getElementById("progress").classList.toggle('start_progress');
    document.getElementById("name").style.height="40vh";
    setTimeout(done, 10000);
    setTimeout(function(){document.getElementById("R1").style.display="block"},2000);
    setTimeout(function(){document.getElementById("R2").style.display="block"},4000);
    setTimeout(function(){document.getElementById("R3").style.display="block"},6000);
    setTimeout(function(){document.getElementById("R4").style.display="block"},8000);
    setTimeout(function(){document.getElementById("R5").style.display="block"},10000);
}

function done(){
    document.getElementById("t2").style.display="block";
    // document.getElementById("t1").style.height="100%"
    document.getElementById("loading-image").style.display="none";
    document.getElementById("progress_bar").style.display="none";
}