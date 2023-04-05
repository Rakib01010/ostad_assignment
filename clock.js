
setTimeout(myLocalTime,1000);
function myLocalTime(){
    const times=new Date();
    document.getElementById("clock").innerHTML=times.toLocaleTimeString();
}