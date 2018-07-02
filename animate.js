//Brake Chain Animation
function brakeChain(){
    let chain = document.getElementById('chain');
    chain.innerHTML ="&#xf0c1;";
    setTimeout(function () {
        chain.innerHTML = "&#xf127;";
    }, 1000);
}

//Run Animation
brakeChain();

//Animate Every 2 seconds
setInterval(brakeChain, 2000);

//Charged Battery Animation
function chargeBattery(){
    let battery = document.getElementById('battery');
    battery.innerHTML = "&#xf244;";
    setTimeout(function () {
        battery.innerHTML = "&#xf243;";
    }, 1000);
    setTimeout(function () {
        battery.innerHTML = "&#xf242;";
    }, 2000);
    setTimeout(function () {
        battery.innerHTML = "&#xf241;";
    }, 3000);
    setTimeout(function () {
        battery.innerHTML = "&#xf240;";
    }, 4000);
}

//Run Animation
chargeBattery();

//Run Animation every 5 seconds
setInterval(chargeBattery, 5000);

//Bell Silencer Animation
function  bellSilence(){
    let bell = document.getElementById('bell');
    bell.innerHTML = "&#xf0a2;";
    setTimeout(function(){
        bell.innerHTML = "&#xf1f7;";
    }, 1000);
}

//Run animation
bellSilence();

//Run Animation every 5 seconds
setInterval(bellSilence, 2000);
