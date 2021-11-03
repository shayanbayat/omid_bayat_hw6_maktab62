function copyText(){
document.getElementById('div').innerHTML += "Click here and watch the text change!"
}


div = document.getElementById('div')
div.style.height = "500px";
div.style.width = "500px";
div.style.backgroundColor = "green";
div.style.overflow = "auto";
div.style.fontSize = "1.2rem";